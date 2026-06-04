# Changelog

All notable changes to Federation Canon follow [Semantic Versioning](https://semver.org/) for package tags (`federation-canon-x.y.z`).

## [1.0.1] — 2026-06-02

Registry expansion only.

No schema changes.

No runtime changes.

Backward compatible.

### Added

- Registries: `property`, `security`, `game` (`continuity_id_types`)
- Registries: `image`, `dataset`, `game_import` (`source_types`)
- Registries: `domosofi/modality/photo/1`, `finkairos/evidence/market_import/1`, `chessguide/game_import/1` (`payload_profiles`)

## [1.0.0] — 2026-06-02

### Added

- JSON Schema Draft 2020-12: ContinuityEnvelope, Provenance, ObservationRecord, FederationRef
- Registries: `continuity_id_types`, `payload_profiles`, `source_types` (Creator + BioChronos)
- Normative fixture: `creator_readme_observation.v1.json` (README SHA-256 pin)
- Example fixture: `biochronos_daily_input_example.v1.json`
- Standalone conformance: `validate_observation.py`

### Excluded (deferred)

- Attention, REA, Knowledge, Transformation, Validation schemas
- Federation index service, runtime, profiles manifests, Creator DB migration
