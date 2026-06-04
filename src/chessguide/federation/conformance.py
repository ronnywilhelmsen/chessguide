"""Federation conformance validation against vendored federation-canon-1.0.1."""

from __future__ import annotations

import importlib.util
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from chessguide.federation.export_v1 import (
    CONTINUITY_ID_TYPE_GAME,
    FEDERATION_CANON_TAG,
    OBSERVATION_SCHEMA_VERSION,
    PAYLOAD_PROFILE_GAME_IMPORT,
    SOVEREIGN_ID,
    SOURCE_TYPE_GAME_IMPORT,
    assert_export_sovereignty,
    payload_checksum,
)

REPO_ROOT = Path(__file__).resolve().parents[3]
FEDERATION_VENDOR_ROOT = REPO_ROOT / "vendor" / "federation-canon-1.0.1"
VALIDATE_MODULE = FEDERATION_VENDOR_ROOT / "tests" / "conformance" / "validate_observation.py"

ENVELOPE_REQUIRED = {
    "schema_version",
    "sovereign_id",
    "continuity_id",
    "continuity_id_type",
    "created_at",
    "provenance",
}
OBSERVATION_REQUIRED = {
    "observation_id",
    "source_type",
    "source_id",
    "checksum",
    "payload_profile",
    "payload",
}


@dataclass(frozen=True)
class ConformanceReport:
    """ChessGuide federation conformance outcome for one ObservationRecord export."""

    schema_valid: bool
    required_fields_present: bool
    checksum_integrity: bool
    sovereign_identity_ok: bool
    version_pinned_ok: bool
    sovereignty_clean: bool
    schema_errors: list[str] = field(default_factory=list)
    sovereignty_violations: list[str] = field(default_factory=list)

    @property
    def passed(self) -> bool:
        return (
            self.schema_valid
            and self.required_fields_present
            and self.checksum_integrity
            and self.sovereign_identity_ok
            and self.version_pinned_ok
            and self.sovereignty_clean
        )


def _load_federation_validate():
    spec = importlib.util.spec_from_file_location(
        "chessguide_federation_validate_observation",
        VALIDATE_MODULE,
    )
    if spec is None or spec.loader is None:
        raise FileNotFoundError(f"Missing federation validator: {VALIDATE_MODULE}")
    module = importlib.util.module_from_spec(spec)
    sys.modules["chessguide_federation_validate_observation"] = module
    spec.loader.exec_module(module)
    return module


def validate_observation_export(exported: dict[str, Any]) -> ConformanceReport:
    """Validate export against canon schema, checksum, and sovereignty exclusions."""
    sovereignty_violations = assert_export_sovereignty(exported)
    missing = (ENVELOPE_REQUIRED | OBSERVATION_REQUIRED) - exported.keys()
    required_ok = not missing

    checksum_ok = False
    payload = exported.get("payload")
    if isinstance(payload, dict) and isinstance(exported.get("checksum"), str):
        checksum_ok = payload_checksum(payload) == exported["checksum"]

    sovereign_ok = (
        exported.get("sovereign_id") == SOVEREIGN_ID
        and exported.get("schema_version") == OBSERVATION_SCHEMA_VERSION
        and exported.get("payload_profile") == PAYLOAD_PROFILE_GAME_IMPORT
        and exported.get("source_type") == SOURCE_TYPE_GAME_IMPORT
        and exported.get("continuity_id_type") == CONTINUITY_ID_TYPE_GAME
    )
    meta = exported.get("metadata") or {}
    version_ok = sovereign_ok and meta.get("federation_canon_tag") in (
        None,
        FEDERATION_CANON_TAG,
    )

    schema_errors: list[str] = []
    schema_ok = False
    if VALIDATE_MODULE.is_file():
        try:
            validator = _load_federation_validate()
            schema_errors = validator.validate_instance(exported)
            schema_ok = not schema_errors and required_ok
        except ImportError as exc:
            schema_errors = [f"jsonschema unavailable: {exc}"]
        except Exception as exc:  # pragma: no cover
            schema_errors = [str(exc)]
    else:
        schema_errors = [f"validator not found: {VALIDATE_MODULE}"]

    return ConformanceReport(
        schema_valid=schema_ok,
        required_fields_present=required_ok,
        checksum_integrity=checksum_ok,
        sovereign_identity_ok=sovereign_ok,
        version_pinned_ok=version_ok,
        sovereignty_clean=not sovereignty_violations,
        schema_errors=schema_errors,
        sovereignty_violations=sovereignty_violations,
    )
