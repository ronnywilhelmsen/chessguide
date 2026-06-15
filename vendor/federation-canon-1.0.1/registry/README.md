# Federation registry

Registries list `continuity_id_type`, `payload_profile`, and `source_type` values for Federation Canon participant declaration.

## Phase 1.0.1 scope

This release includes registry rows for:

| Sovereign | Participation |
|-----------|---------------|
| **Creator** | `project`, `document`, `creator/document/1` |
| **BioChronos** | `user_day`, `user_event`, `biochronos/daily_input/1` — normative T3 fixture in sovereign repo: `tests/fixtures/federation/biochronos_normative_user_day.v1.json` (FCI-3b; see [FCI-3c](../../docs/reviews/fci-3c/)) |
| **Domosofi** | `property`, `image`, `domosofi/modality/photo/1` |
| **Finkairos** | `security`, `dataset`, `finkairos/evidence/market_import/1` |
| **ChessGuide** | `game`, `game_import`, `chessguide/game_import/1` |

P1 optional and deferred profiles (e.g. `study`, `learning_journey`, `sandbox_universe`, audio/document/pgn aliases) are **not** in 1.0.1 — see [FCR-1](../../docs/reviews/FCR-1-Federation-Canon-1.0.1-Registry-Review.md).

## Extension

1. Propose a new row in the relevant YAML file.
2. Open a PR against `federation/registry/`.
3. Never mutate the meaning of an existing profile ID suffix `/1` — add `/2` for breaking payload semantics.

Payload bodies remain **domain-owned**; the registry records IDs and documentation pointers only.
