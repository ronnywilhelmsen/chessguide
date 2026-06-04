#!/usr/bin/env python3
"""Validate ObservationRecord JSON against Federation Canon 1.0.0 schemas."""

from __future__ import annotations

import json
import sys
from pathlib import Path

try:
    from jsonschema import Draft202012Validator
    from jsonschema.exceptions import SchemaError, ValidationError
    from referencing import Registry, Resource
    from referencing.jsonschema import DRAFT202012
except ImportError as exc:  # pragma: no cover
    raise SystemExit(
        "jsonschema and referencing are required: pip install jsonschema referencing"
    ) from exc

FEDERATION_ROOT = Path(__file__).resolve().parents[2]
SCHEMAS_ROOT = FEDERATION_ROOT / "schemas"
DEFAULT_FIXTURES = [
    FEDERATION_ROOT / "fixtures" / "golden" / "creator_readme_observation.v1.json",
    FEDERATION_ROOT / "fixtures" / "golden" / "biochronos_daily_input_example.v1.json",
]

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


def _load_json(path: Path) -> dict:
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def _schema_registry() -> Registry:
    registry = Registry()
    for schema_path in sorted(SCHEMAS_ROOT.rglob("*.schema.json")):
        contents = _load_json(schema_path)
        resource = Resource.from_contents(contents, default_specification=DRAFT202012)
        registry = registry.with_resource(schema_path.resolve().as_uri(), resource)
        schema_id = contents.get("$id")
        if schema_id:
            registry = registry.with_resource(schema_id, resource)
    return registry


def _validators(registry: Registry) -> tuple[Draft202012Validator, Draft202012Validator]:
    envelope_path = SCHEMAS_ROOT / "common" / "continuity_envelope.schema.json"
    observation_path = SCHEMAS_ROOT / "observation" / "observation_record.schema.json"
    return (
        Draft202012Validator(_load_json(envelope_path), registry=registry),
        Draft202012Validator(_load_json(observation_path), registry=registry),
    )


def validate_instance(instance: dict, registry: Registry | None = None) -> list[str]:
    reg = registry or _schema_registry()
    envelope_validator, observation_validator = _validators(reg)
    errors: list[str] = []

    missing_envelope = ENVELOPE_REQUIRED - instance.keys()
    missing_observation = OBSERVATION_REQUIRED - instance.keys()
    if missing_envelope:
        errors.append(f"T2: missing envelope fields: {sorted(missing_envelope)}")
    if missing_observation:
        errors.append(f"T2: missing observation fields: {sorted(missing_observation)}")

    for label, validator in (
        ("continuity_envelope", envelope_validator),
        ("observation_record", observation_validator),
    ):
        for err in sorted(validator.iter_errors(instance), key=str):
            errors.append(f"{label}: {err.message} @ {list(err.path)}")

    return errors


def main(argv: list[str]) -> int:
    paths = [Path(p) for p in argv[1:]] if len(argv) > 1 else DEFAULT_FIXTURES
    registry = _schema_registry()
    failed = False

    for path in paths:
        if not path.is_file():
            print(f"FAIL {path}: not found")
            failed = True
            continue
        instance = _load_json(path)
        errors = validate_instance(instance, registry)
        if errors:
            print(f"FAIL {path}")
            for err in errors:
                print(f"  - {err}")
            failed = True
        else:
            print(f"OK {path}")

    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
