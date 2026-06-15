# Federation fixtures

## Golden fixtures

| File | Role | Sovereign |
|------|------|-----------|
| `golden/creator_readme_observation.v1.json` | **Normative** — Creator T3 checksum pin for `README.md` (REA-1a / OAT-1a pilot) | creator |
| `golden/biochronos_daily_input_example.v1.json` | **Example** — illustrative envelope only; **non-normative** (`metadata.non_normative`); payload shape ≠ production `DailyInput` | biochronos |
| *(sovereign repo)* `biochronos/tests/fixtures/federation/biochronos_normative_user_day.v1.json` | **Normative T3** — BioChronos-owned golden; checksum-stable `DailyInput` export (FCI-3b @ `525f1a1+`) | biochronos |

Normative fixtures must pass `tests/conformance/validate_observation.py`. Example fixtures demonstrate cross-sovereign envelope reuse and are not required to match production checksums.
