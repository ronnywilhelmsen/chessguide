"""Map completed ChessGuide game evidence to Federation Canon 1.0.1 ObservationRecord."""

from __future__ import annotations

import json
import re
from dataclasses import dataclass
from datetime import UTC, datetime
from hashlib import sha256
from typing import Any
from uuid import UUID

SOVEREIGN_ID = "chessguide"
FEDERATION_CANON_TAG = "federation-canon-1.0.1"
OBSERVATION_SCHEMA_VERSION = "oat/observation/1.0.0"
PAYLOAD_PROFILE_GAME_IMPORT = "chessguide/game_import/1"
SOURCE_TYPE_GAME_IMPORT = "game_import"
CONTINUITY_ID_TYPE_GAME = "game"

NORMATIVE_GAME_ID = "mpy0l1c0"
NORMATIVE_GAME_LINE = (
    f"{NORMATIVE_GAME_ID};Conformer;Bot;0;0;e4 e5 Qh5 Nc6 Bb5 Nf6 Qxf7#"
)
NORMATIVE_ACTOR_ID = "conformer"
NORMATIVE_OBSERVATION_ID = UUID("d4e5f6a7-b8c9-4012-d345-6789abcdef01")
NORMATIVE_CREATED_AT = datetime(2026, 6, 3, 12, 0, 0, tzinfo=UTC)

_FORBIDDEN_EXPORT_ROOT_KEYS = frozenset(
    {
        "cp",
        "centipawn",
        "centipawns",
        "evaluation",
        "eval",
        "analysis",
        "analyses",
        "coach",
        "hint",
        "hints",
        "recommendation",
        "recommendations",
        "learning",
        "learning_trace",
        "learningtrace",
        "mastery",
        "reflection",
        "dialogue",
        "wisdom",
        "knowledge",
        "engine",
        "fen",
        "forecast",
        "forecasts",
        "simulation",
        "simulations",
        "scenario",
        "scenarios",
        "thesis",
        "decision",
        "signal",
        "technical_signal",
        "valuation",
        "mentor",
        "attention",
        "hypothesis",
        "interpretation",
        "progress_report",
        "progress_reports",
        "explanation",
        "explanations",
    }
)

_FORBIDDEN_TOKEN_PATTERN = re.compile(
    r"(centipawn|evaluation|analysis_output|recommendation|knowledge_claim|"
    r"learning_trace|learningtrace|progress_report|coach_message|"
    r"engine_eval|cp_score|wisdom_claim|dialogue_turn|mastery_level|"
    r"\bcp\b|\bhint\b|\bcoach\b|\blearning\b|\bmastery\b|\breflection\b|"
    r"\bdialogue\b|\bwisdom\b|\bknowledge\b)",
    re.IGNORECASE,
)

_ACTOR_SLUG_PATTERN = re.compile(r"[^a-z0-9]+")


@dataclass(frozen=True)
class ParsedCompletedGame:
    """Normalized completed-game line (Game.toString / GameHistory episode)."""

    game_line: str
    game_id: str
    white: str
    black: str
    wtime_base36: str
    btime_base36: str
    moves: tuple[str, ...]
    result: str
    played_at_ms: int


def slug_actor_id(player_name: str) -> str:
    """Repository-reality actor slug from white player name."""
    slug = _ACTOR_SLUG_PATTERN.sub("_", player_name.strip().lower()).strip("_")
    return slug or "player"


def build_continuity_id(actor_id: str, game_id: str) -> str:
    """FCI-4c / CGX-1 game-scoped continuity key."""
    return f"game:{actor_id}:{game_id}"


def canonical_payload_bytes(payload: dict[str, Any]) -> bytes:
    """Stable UTF-8 JSON for federation checksum (sorted keys, compact separators)."""
    return json.dumps(
        payload,
        sort_keys=True,
        separators=(",", ":"),
        ensure_ascii=False,
    ).encode("utf-8")


def payload_checksum(payload: dict[str, Any]) -> str:
    """SHA-256 over canonical game-import payload JSON (evidence only)."""
    return sha256(canonical_payload_bytes(payload)).hexdigest()


def is_terminal_move(san: str) -> bool:
    """Mirror rules.isEndMove — completed game boundary."""
    return san in ("1-0", "0-1", "1/2-1/2") or san.endswith("#")


def infer_result(moves: list[str]) -> str:
    """Derive PGN-style result from terminal move list (no engine replay)."""
    if not moves:
        msg = "Export blocked — completed game has no moves"
        raise ValueError(msg)
    last = moves[-1]
    if last in ("1-0", "0-1", "1/2-1/2"):
        return last
    if last.endswith("#"):
        return "1-0" if len(moves) % 2 == 1 else "0-1"
    if "draw" in last.lower() or "1/2" in last:
        return "1/2-1/2"
    msg = f"Export blocked — game not complete (last move: {last!r})"
    raise ValueError(msg)


def parse_completed_game_line(game_line: str) -> ParsedCompletedGame:
    """Parse and validate a GameHistory / Game.toString() episode."""
    line = game_line.strip()
    parts = line.split(";")
    if len(parts) != 6:
        msg = f"Export blocked — expected 6-field game line, got {len(parts)} parts"
        raise ValueError(msg)
    game_id, white, black, wtime_b36, btime_b36, move_blob = parts
    moves = [m for m in move_blob.split(" ") if m]
    if not moves:
        msg = "Export blocked — completed game has empty move log"
        raise ValueError(msg)
    if not is_terminal_move(moves[-1]):
        msg = "Export blocked — only completed games may be exported"
        raise ValueError(msg)
    try:
        played_at_ms = int(game_id, 36)
    except ValueError as exc:
        msg = f"Export blocked — invalid game_id (date token): {game_id!r}"
        raise ValueError(msg) from exc
    return ParsedCompletedGame(
        game_line=line,
        game_id=game_id,
        white=white,
        black=black,
        wtime_base36=wtime_b36,
        btime_base36=btime_b36,
        moves=tuple(moves),
        result=infer_result(moves),
        played_at_ms=played_at_ms,
    )


def build_game_import_payload(parsed: ParsedCompletedGame) -> dict[str, Any]:
    """Canonical completed-game body — artifact and metadata only."""
    return {
        "game_artifact": parsed.game_line,
        "game_id": parsed.game_id,
        "white": parsed.white,
        "black": parsed.black,
        "move_count": len(parsed.moves),
        "moves": list(parsed.moves),
        "result": parsed.result,
        "wtime_base36": parsed.wtime_base36,
        "btime_base36": parsed.btime_base36,
        "played_at": datetime.fromtimestamp(
            parsed.played_at_ms / 1000,
            tz=UTC,
        ).isoformat(),
        "provenance": {
            "boundary": "Game.toString",
            "storage": "GameHistory",
            "completed": True,
        },
    }


def _format_datetime(value: datetime) -> str:
    if value.tzinfo is None:
        value = value.replace(tzinfo=UTC)
    return value.isoformat()


def _collect_forbidden_keys(obj: Any, *, path: str = "") -> list[str]:
    found: list[str] = []
    if isinstance(obj, dict):
        for key, value in obj.items():
            key_str = str(key)
            full = f"{path}.{key_str}" if path else key_str
            if key_str.lower() in _FORBIDDEN_EXPORT_ROOT_KEYS:
                found.append(full)
            found.extend(_collect_forbidden_keys(value, path=full))
    elif isinstance(obj, list):
        for index, item in enumerate(obj):
            found.extend(_collect_forbidden_keys(item, path=f"{path}[{index}]"))
    return found


def assert_export_sovereignty(exported: dict[str, Any]) -> list[str]:
    """Return sovereignty violations (empty if export is evidence-only)."""
    violations = _collect_forbidden_keys(exported)
    blob = json.dumps(exported, sort_keys=True)
    for match in _FORBIDDEN_TOKEN_PATTERN.finditer(blob):
        token = match.group(0).lower()
        if token not in {v.split(".")[-1].lower() for v in violations}:
            violations.append(f"forbidden_token:{token}")
    return sorted(set(violations))


def export_game_import_v1(
    payload: dict[str, Any],
    *,
    actor_id: str,
    game_id: str,
    observation_id: UUID,
    created_at: datetime,
    source_system: str = "chessguide-client",
    actor_type: str = "steward",
    extra_metadata: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Export sealed completed-game evidence as federation ObservationRecord."""
    violations = assert_export_sovereignty({"payload": payload})
    if violations:
        msg = f"Export blocked — sovereignty violation: {violations}"
        raise ValueError(msg)

    continuity_id = build_continuity_id(actor_id, game_id)
    checksum = payload_checksum(payload)
    provenance: dict[str, Any] = {
        "source_system": source_system,
        "actor_type": actor_type,
        "actor_id": actor_id,
    }

    metadata: dict[str, Any] = {
        "export_adapter": "chessguide.federation.export_v1",
        "federation_canon_tag": FEDERATION_CANON_TAG,
        "evidence_only": True,
    }
    if extra_metadata:
        metadata.update(extra_metadata)

    exported = {
        "schema_version": OBSERVATION_SCHEMA_VERSION,
        "sovereign_id": SOVEREIGN_ID,
        "continuity_id": continuity_id,
        "continuity_id_type": CONTINUITY_ID_TYPE_GAME,
        "created_at": _format_datetime(created_at),
        "provenance": provenance,
        "observation_id": str(observation_id),
        "source_type": SOURCE_TYPE_GAME_IMPORT,
        "source_id": continuity_id,
        "checksum": checksum,
        "payload_profile": PAYLOAD_PROFILE_GAME_IMPORT,
        "payload": payload,
        "metadata": metadata,
    }
    root_violations = assert_export_sovereignty(exported)
    if root_violations:
        msg = f"Export blocked — sovereignty violation: {root_violations}"
        raise ValueError(msg)
    return exported


def export_completed_game_line_v1(
    game_line: str,
    *,
    observation_id: UUID,
    created_at: datetime,
    actor_id: str | None = None,
    source_system: str = "chessguide-client",
    extra_metadata: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """Export one completed GameHistory line (Game.toString boundary)."""
    parsed = parse_completed_game_line(game_line)
    resolved_actor = actor_id or slug_actor_id(parsed.white)
    payload = build_game_import_payload(parsed)
    return export_game_import_v1(
        payload,
        actor_id=resolved_actor,
        game_id=parsed.game_id,
        observation_id=observation_id,
        created_at=created_at,
        source_system=source_system,
        extra_metadata=extra_metadata,
    )


def export_normative_game_import_v1() -> dict[str, Any]:
    """Deterministic T3 normative export from pinned completed-game line."""
    return export_completed_game_line_v1(
        NORMATIVE_GAME_LINE,
        observation_id=NORMATIVE_OBSERVATION_ID,
        created_at=NORMATIVE_CREATED_AT,
        actor_id=NORMATIVE_ACTOR_ID,
        source_system="chessguide-conformance",
        extra_metadata={"conformance_level": "T3", "normative": True},
    )
