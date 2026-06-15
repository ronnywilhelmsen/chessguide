# Federation Canon version matrix

| Package tag | Observation schema | FederationRef schema | Notes |
|-------------|-------------------|----------------------|-------|
| `federation-canon-1.0.1` | `oat/observation/1.0.0` | `fed/ref/1.0.0` | Registry expansion (Domosofi, Finkairos, ChessGuide) |
| `federation-canon-1.0.0` | `oat/observation/1.0.0` | `fed/ref/1.0.0` | Phase 1 initial release |

## Sovereign registry participation (1.0.1)

| Sovereign | Registry rows (minimum path) | Normative fixture | Conformance target |
|-----------|------------------------------|-------------------|-------------------|
| creator | `project`, `document`, `creator/document/1` | `fixtures/golden/creator_readme_observation.v1.json` | T3 |
| biochronos | `user_day`, `user_event`, `biochronos/daily_input/1` | `fixtures/golden/biochronos_daily_input_example.v1.json` | T1 (example only) |
| domosofi | `property`, `image`, `domosofi/modality/photo/1` | — (sovereign repo) | T3 (planned) |
| finkairos | `security`, `dataset`, `finkairos/evidence/market_import/1` | — (sovereign repo) | T3 (planned) |
| chessguide | `game`, `game_import`, `chessguide/game_import/1` | — (sovereign repo) | T3 (planned) |

## Compatibility

- **1.0.x** — registry additions only; no breaking schema field changes
- **1.1.0** — planned: attention + transformation schemas (separate tag)
