# Federation conformance (Phase 1)

Standalone validation for **ObservationRecord** fixtures. No CI wiring or Creator backend dependency in this canon release.

## Usage

```bash
python federation/tests/conformance/validate_observation.py
python federation/tests/conformance/validate_observation.py path/to/observation.json
```

## Tiers (FFR-1c aligned)

| Tier | Proof |
|------|-------|
| T1 | Instance validates against `observation_record.schema.json` (includes ContinuityEnvelope via `allOf`) |
| T2 | Required sovereign envelope fields present |
| T3 | Normative golden checksum pin (Creator README fixture) |

Requires `jsonschema` (Draft 2020-12).
