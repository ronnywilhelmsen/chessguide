from __future__ import annotations

import copy
import json
import sys
from pathlib import Path

import pytest

REPO_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO_ROOT / "scripts"))

from creator_gateway_chessguide_public_summary import (  # noqa: E402
    ALLOWED_SAFE_SUMMARY_FIELDS,
    PublicSummaryValidationError,
    load_public_summary,
    validate_public_summary,
)

SUMMARY_PATH = REPO_ROOT / "data" / "public" / "creator-gateway" / "chessguide-public-summary.v1.json"


def test_public_summary_fixture_validates() -> None:
    summary = load_public_summary(SUMMARY_PATH)

    assert summary["domain_id"] == "chessguide"
    assert summary["producer"] == "ChessGuide"
    assert summary["classification"] == {
        "public": True,
        "private": False,
        "sensitive": False,
        "secret": False,
        "synthetic": False,
        "redacted": True,
    }
    assert set(summary["safe_summary"]) == ALLOWED_SAFE_SUMMARY_FIELDS


def test_public_summary_output_is_deterministic() -> None:
    first = load_public_summary(SUMMARY_PATH)
    second = load_public_summary(SUMMARY_PATH)

    assert json.dumps(first, sort_keys=True) == json.dumps(second, sort_keys=True)


@pytest.mark.parametrize(
    ("field", "value", "message"),
    [
        ("source_memory_imported", True, "source_memory_imported"),
        ("real_source_data_included", True, "real_source_data_included"),
        ("sensitive_data_included", True, "sensitive_data_included"),
        ("secret_exposure_allowed", True, "secret_exposure_allowed"),
        ("write_capability", "write_learning_memory", "write_capability"),
        ("runtime_calls_allowed", True, "runtime_calls_allowed"),
        ("mcp_runtime_dependency", True, "mcp_runtime_dependency"),
        ("chrome_extension_runtime_dependency", True, "chrome_extension_runtime_dependency"),
    ],
)
def test_public_summary_rejects_unsafe_flags(field: str, value: object, message: str) -> None:
    summary = copy.deepcopy(load_public_summary(SUMMARY_PATH))
    summary[field] = value

    with pytest.raises(PublicSummaryValidationError, match=message):
        validate_public_summary(summary)


@pytest.mark.parametrize("field", ["private", "sensitive", "secret"])
def test_public_summary_rejects_non_public_classification(field: str) -> None:
    summary = copy.deepcopy(load_public_summary(SUMMARY_PATH))
    summary["classification"][field] = True

    with pytest.raises(PublicSummaryValidationError, match=field):
        validate_public_summary(summary)


@pytest.mark.parametrize(
    "forbidden_resource",
    [
        "private student data",
        "private user data",
        "learning session source data",
        "runtime DBs",
        "browser captures",
        "secrets",
        "write tools",
        "MCP runtime dependency",
        "Chrome Extension runtime dependency",
    ],
)
def test_public_summary_requires_excluded_resources(forbidden_resource: str) -> None:
    summary = copy.deepcopy(load_public_summary(SUMMARY_PATH))
    summary["excluded_resources"].remove(forbidden_resource)

    with pytest.raises(PublicSummaryValidationError, match="excluded_resources"):
        validate_public_summary(summary)


@pytest.mark.parametrize(
    "unsafe_key",
    [
        "student_profile",
        "private_user_data",
        "learning_session_source_data",
        "runtime_db_path",
        "browser_capture",
        "api_key",
    ],
)
def test_public_summary_rejects_forbidden_payload_keys(unsafe_key: str) -> None:
    summary = copy.deepcopy(load_public_summary(SUMMARY_PATH))
    summary["safe_summary"][unsafe_key] = "not allowed"

    with pytest.raises(PublicSummaryValidationError, match="safe_summary keys mismatch|forbidden key"):
        validate_public_summary(summary)
