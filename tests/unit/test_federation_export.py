"""FCI-5c-impl — ChessGuide sovereign federation observation export."""

from __future__ import annotations

import ast
import json
from pathlib import Path

import pytest

from chessguide.federation.conformance import validate_observation_export
from chessguide.federation.export_v1 import (
    CONTINUITY_ID_TYPE_GAME,
    FEDERATION_CANON_TAG,
    NORMATIVE_ACTOR_ID,
    NORMATIVE_CREATED_AT,
    NORMATIVE_GAME_ID,
    NORMATIVE_GAME_LINE,
    NORMATIVE_OBSERVATION_ID,
    OBSERVATION_SCHEMA_VERSION,
    PAYLOAD_PROFILE_GAME_IMPORT,
    SOVEREIGN_ID,
    SOURCE_TYPE_GAME_IMPORT,
    assert_export_sovereignty,
    build_continuity_id,
    export_completed_game_line_v1,
    export_game_import_v1,
    export_normative_game_import_v1,
    parse_completed_game_line,
    payload_checksum,
)

REPO_ROOT = Path(__file__).resolve().parents[2]
NORMATIVE_FIXTURE = (
    REPO_ROOT / "tests" / "fixtures" / "federation" / "chessguide_game_import_observation.v1.json"
)
FEDERATION_VALIDATE = (
    REPO_ROOT
    / "vendor"
    / "federation-canon-1.0.1"
    / "tests"
    / "conformance"
    / "validate_observation.py"
)
EXPORT_V1_SOURCE = REPO_ROOT / "src" / "chessguide" / "federation" / "export_v1.py"

_FORBIDDEN_SUBSTRINGS = (
    "centipawn",
    "evaluation",
    "analysis_output",
    "recommendation",
    "knowledge_claim",
    "learning_trace",
    "learningtrace",
    "coach_message",
    "engine_eval",
    "cp_score",
    "wisdom_claim",
    "dialogue_turn",
    "mastery_level",
    "progress_report",
)


def _load_normative_fixture() -> dict:
    return json.loads(NORMATIVE_FIXTURE.read_text(encoding="utf-8"))


@pytest.fixture(scope="module")
def federation_validate():
    pytest.importorskip("jsonschema")
    pytest.importorskip("referencing")
    import importlib.util
    import sys

    spec = importlib.util.spec_from_file_location(
        "federation_validate_observation_chessguide",
        FEDERATION_VALIDATE,
    )
    assert spec and spec.loader
    module = importlib.util.module_from_spec(spec)
    sys.modules["federation_validate_observation_chessguide_test"] = module
    spec.loader.exec_module(module)
    return module


def test_participation_constants() -> None:
    assert SOVEREIGN_ID == "chessguide"
    assert FEDERATION_CANON_TAG == "federation-canon-1.0.1"
    assert OBSERVATION_SCHEMA_VERSION == "oat/observation/1.0.0"
    assert PAYLOAD_PROFILE_GAME_IMPORT == "chessguide/game_import/1"
    assert SOURCE_TYPE_GAME_IMPORT == "game_import"
    assert CONTINUITY_ID_TYPE_GAME == "game"


def test_t3_normative_export_matches_fixture() -> None:
    exported = export_normative_game_import_v1()
    assert exported == _load_normative_fixture()


def test_t1_normative_fixture_schema_valid(federation_validate) -> None:
    golden = _load_normative_fixture()
    errors = federation_validate.validate_instance(golden)
    assert errors == [], errors


def test_t2_required_federation_fields_present() -> None:
    exported = export_normative_game_import_v1()
    required = {
        "schema_version",
        "sovereign_id",
        "continuity_id",
        "continuity_id_type",
        "created_at",
        "provenance",
        "observation_id",
        "source_type",
        "source_id",
        "checksum",
        "payload_profile",
        "payload",
    }
    assert required <= exported.keys()
    assert exported["continuity_id"] == build_continuity_id(
        NORMATIVE_ACTOR_ID,
        NORMATIVE_GAME_ID,
    )


def test_conformance_report_passes_for_normative() -> None:
    report = validate_observation_export(_load_normative_fixture())
    assert report.passed, (
        f"schema_errors={report.schema_errors}, "
        f"sovereignty={report.sovereignty_violations}"
    )


def test_sovereignty_no_forbidden_artifacts_in_normative_export() -> None:
    exported = _load_normative_fixture()
    blob = json.dumps(exported)
    for token in _FORBIDDEN_SUBSTRINGS:
        assert token not in blob.lower(), f"forbidden leakage: {token}"
    assert assert_export_sovereignty(exported) == []


def test_sovereignty_blocks_forbidden_root_keys() -> None:
    payload = export_normative_game_import_v1()["payload"]
    with pytest.raises(ValueError, match="sovereignty violation"):
        export_game_import_v1(
            {**payload, "coach": {"message": "take e4"}},
            actor_id=NORMATIVE_ACTOR_ID,
            game_id=NORMATIVE_GAME_ID,
            observation_id=NORMATIVE_OBSERVATION_ID,
            created_at=NORMATIVE_CREATED_AT,
        )


def test_sovereignty_blocks_centipawn_in_payload() -> None:
    payload = export_normative_game_import_v1()["payload"]
    with pytest.raises(ValueError, match="sovereignty violation"):
        export_game_import_v1(
            {**payload, "cp": 120},
            actor_id=NORMATIVE_ACTOR_ID,
            game_id=NORMATIVE_GAME_ID,
            observation_id=NORMATIVE_OBSERVATION_ID,
            created_at=NORMATIVE_CREATED_AT,
        )


def test_sovereignty_blocks_forbidden_token_scan() -> None:
    payload = export_normative_game_import_v1()["payload"]
    with pytest.raises(ValueError, match="sovereignty violation"):
        export_game_import_v1(
            {**payload, "note": "engine_eval snapshot"},
            actor_id=NORMATIVE_ACTOR_ID,
            game_id=NORMATIVE_GAME_ID,
            observation_id=NORMATIVE_OBSERVATION_ID,
            created_at=NORMATIVE_CREATED_AT,
        )


def test_checksum_stable_across_export_runs() -> None:
    a = export_normative_game_import_v1()
    b = export_normative_game_import_v1()
    golden = _load_normative_fixture()
    assert a["checksum"] == b["checksum"] == golden["checksum"]


def test_incomplete_game_must_not_be_exported() -> None:
    incomplete = "mpy0l1c0;Conformer;Bot;0;0;e4 e5"
    with pytest.raises(ValueError, match="completed games"):
        export_completed_game_line_v1(
            incomplete,
            observation_id=NORMATIVE_OBSERVATION_ID,
            created_at=NORMATIVE_CREATED_AT,
        )


def test_runtime_completed_game_store_history_export() -> None:
    """Completed game → storeGame (history push) → export_v1 → ObservationRecord."""
    game_line = NORMATIVE_GAME_LINE
    parsed = parse_completed_game_line(game_line)
    assert parsed.result == "1-0"

    history: list[str] = []
    history.append(game_line)
    assert history == [game_line]

    exported = export_completed_game_line_v1(
        history[-1],
        observation_id=NORMATIVE_OBSERVATION_ID,
        created_at=NORMATIVE_CREATED_AT,
        actor_id=NORMATIVE_ACTOR_ID,
    )
    report = validate_observation_export(exported)
    assert report.passed
    assert exported["payload"]["game_artifact"] == game_line


def test_export_module_has_no_learning_or_coach_imports() -> None:
    source = EXPORT_V1_SOURCE.read_text(encoding="utf-8")
    tree = ast.parse(source)
    imported: set[str] = set()
    for node in ast.walk(tree):
        if isinstance(node, ast.Import):
            for alias in node.names:
                imported.add(alias.name.split(".")[0])
        elif isinstance(node, ast.ImportFrom) and node.module:
            imported.add(node.module.split(".")[0])
    forbidden_modules = {
        "mobx",
        "chess",
        "rules",
        "learning",
        "coach",
        "mastery",
    }
    assert not (imported & forbidden_modules)
    assert "checksum = payload_checksum" in source
