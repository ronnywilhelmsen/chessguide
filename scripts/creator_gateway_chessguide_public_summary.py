from __future__ import annotations

import json
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[1]
SUMMARY_PATH = REPO_ROOT / "data" / "public" / "creator-gateway" / "chessguide-public-summary.v1.json"

REQUIRED_TOP_LEVEL_FIELDS = (
    "summary_version",
    "domain_id",
    "producer",
    "source_repo_url",
    "source_of_truth_owner",
    "summary_kind",
    "classification",
    "public_projection_allowed",
    "source_memory_imported",
    "real_source_data_included",
    "sensitive_data_included",
    "secret_exposure_allowed",
    "write_capability",
    "runtime_calls_allowed",
    "mcp_runtime_dependency",
    "chrome_extension_runtime_dependency",
    "excluded_resources",
    "safe_summary",
    "validation_command",
    "recommended_next_step",
)

ALLOWED_SAFE_SUMMARY_FIELDS = {
    "project_identity",
    "public_learning_surface",
    "contract_status",
    "validation_command",
    "recommended_next_step",
}

REQUIRED_EXCLUDED_RESOURCES = {
    "private student data",
    "private user data",
    "learning session source data",
    "secrets",
    "runtime DBs",
    "browser captures",
    "write tools",
    "MCP runtime dependency",
    "Chrome Extension runtime dependency",
}

FORBIDDEN_KEY_MARKERS = (
    "student",
    "user_data",
    "session",
    "learning_trace",
    "learning_session",
    "browser_capture",
    "runtime_db",
    "sqlite",
    "secret",
    "api_key",
    "password",
    "token",
    "write_tool",
)


class PublicSummaryValidationError(ValueError):
    pass


def load_public_summary(path: Path = SUMMARY_PATH) -> dict[str, Any]:
    summary = json.loads(path.read_text(encoding="utf-8"))
    validate_public_summary(summary)
    return summary


def validate_public_summary(summary: dict[str, Any]) -> None:
    _require_exact_keys(summary, REQUIRED_TOP_LEVEL_FIELDS, "summary")
    _require_equal(summary["summary_version"], "v1", "summary_version")
    _require_equal(summary["domain_id"], "chessguide", "domain_id")
    _require_equal(summary["producer"], "ChessGuide", "producer")
    _require_equal(summary["source_repo_url"], "https://github.com/ronnywilhelmsen/chessguide", "source_repo_url")
    _require_equal(summary["source_of_truth_owner"], "ChessGuide repository", "source_of_truth_owner")
    _require_equal(summary["summary_kind"], "domain_owned_public_summary", "summary_kind")
    _validate_classification(summary["classification"])
    _require_equal(summary["public_projection_allowed"], True, "public_projection_allowed")
    _require_equal(summary["source_memory_imported"], False, "source_memory_imported")
    _require_equal(summary["real_source_data_included"], False, "real_source_data_included")
    _require_equal(summary["sensitive_data_included"], False, "sensitive_data_included")
    _require_equal(summary["secret_exposure_allowed"], False, "secret_exposure_allowed")
    _require_equal(summary["write_capability"], "none", "write_capability")
    _require_equal(summary["runtime_calls_allowed"], False, "runtime_calls_allowed")
    _require_equal(summary["mcp_runtime_dependency"], False, "mcp_runtime_dependency")
    _require_equal(summary["chrome_extension_runtime_dependency"], False, "chrome_extension_runtime_dependency")
    _validate_excluded_resources(summary["excluded_resources"])
    _validate_safe_summary(summary["safe_summary"])
    _require_equal(
        summary["validation_command"],
        "python scripts/creator_gateway_chessguide_public_summary.py",
        "validation_command",
    )
    _scan_for_forbidden_payload(summary)


def _validate_classification(classification: dict[str, Any]) -> None:
    expected = {
        "public": True,
        "private": False,
        "sensitive": False,
        "secret": False,
        "synthetic": False,
        "redacted": True,
    }
    _require_exact_keys(classification, expected.keys(), "classification")
    for key, value in expected.items():
        _require_equal(classification[key], value, f"classification.{key}")


def _validate_excluded_resources(excluded_resources: list[str]) -> None:
    if not isinstance(excluded_resources, list):
        raise PublicSummaryValidationError("excluded_resources must be a list")
    missing = REQUIRED_EXCLUDED_RESOURCES.difference(excluded_resources)
    if missing:
        raise PublicSummaryValidationError(f"excluded_resources missing: {sorted(missing)}")


def _validate_safe_summary(safe_summary: dict[str, Any]) -> None:
    _require_exact_keys(safe_summary, ALLOWED_SAFE_SUMMARY_FIELDS, "safe_summary")
    _require_equal(safe_summary["project_identity"], "ChessBuddy / ChessGuide", "safe_summary.project_identity")
    _require_equal(
        safe_summary["contract_status"],
        "domain_public_summary_contract_published",
        "safe_summary.contract_status",
    )
    _require_equal(
        safe_summary["validation_command"],
        "python scripts/creator_gateway_chessguide_public_summary.py",
        "safe_summary.validation_command",
    )


def _scan_for_forbidden_payload(value: Any, path: str = "$") -> None:
    if isinstance(value, dict):
        for key, child in value.items():
            lowered = key.lower()
            if any(marker in lowered for marker in FORBIDDEN_KEY_MARKERS):
                if child not in (False, None, "", []):
                    raise PublicSummaryValidationError(f"forbidden key at {path}.{key}")
            _scan_for_forbidden_payload(child, f"{path}.{key}")
    elif isinstance(value, list):
        for index, child in enumerate(value):
            _scan_for_forbidden_payload(child, f"{path}[{index}]")
    elif isinstance(value, str):
        lowered = value.lower()
        if "secret=" in lowered or "password=" in lowered or "token=" in lowered or "api_key=" in lowered:
            raise PublicSummaryValidationError(f"forbidden value at {path}")


def _require_exact_keys(value: dict[str, Any], expected: Any, label: str) -> None:
    if not isinstance(value, dict):
        raise PublicSummaryValidationError(f"{label} must be an object")
    actual = set(value.keys())
    expected_set = set(expected)
    if actual != expected_set:
        raise PublicSummaryValidationError(
            f"{label} keys mismatch: missing={sorted(expected_set - actual)} extra={sorted(actual - expected_set)}"
        )


def _require_equal(actual: Any, expected: Any, label: str) -> None:
    if actual != expected:
        raise PublicSummaryValidationError(f"{label} must be {expected!r}")


def main() -> int:
    summary = load_public_summary()
    print(json.dumps(summary, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
