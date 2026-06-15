# ChessGuide — Federation Participation

ChessGuide participates in the federated continuity architecture as a **sovereign domain** exporting **completed game evidence** only.

**ChessGuide retains learning.** Federation transports continuity.

---

## Sovereign identity

| Field | Value |
|-------|-------|
| **sovereign_id** | `chessguide` |

---

## Pinned federation canon

| Item | Value |
|------|-------|
| **canon** | `federation-canon-1.0.1` |
| **Observation schema** | `oat/observation/1.0.0` |
| **Vendor path** | `vendor/federation-canon-1.0.1/` |

---

## Conformance

| Primitive | Tier | Status |
|-----------|------|--------|
| **ObservationRecord** | **T3** | Normative fixture `tests/fixtures/federation/chessguide_game_import_observation.v1.json` |

Proof: `tests/unit/test_federation_export.py` and `vendor/federation-canon-1.0.1/tests/conformance/validate_observation.py`.

| Field | Value |
|-------|-------|
| **conformance** | T3 ObservationRecord |
| **payload_profile** | `chessguide/game_import/1` |
| **source_type** | `game_import` |
| **continuity_id_type** | `game` |

Tiers:

- **T1** — JSON validates against federation ObservationRecord schema
- **T2** — Required sovereign envelope fields present
- **T3** — Export matches normative golden fixture expectations

---

## Observation boundary (locked)

**Observation (exported):**

- Completed game (`Game.toString()`)
- Stored `GameHistory` episode (terminal game artifact)

**Not Observation (never exported):**

- Engine evaluation, CP scores, hints, recommendations
- Coach messages, analysis, learning explanations, reflection, dialogue
- `LearningTrace`, mastery, progress reports, knowledge claims, wisdom claims

---

## Continuity convention

| ChessGuide (runtime) | Federation export |
|----------------------|-------------------|
| White player + game date token | `continuity_id` = `game:{actor_id}:{game_id}` |
| Full `Game.toString()` line | `payload.game_artifact` |
| Move log + result | `payload.moves`, `payload.result` |
| SHA-256 of canonical payload | `checksum` (not engine state, not CP, not learning metadata) |

Adapter: `src/chessguide/federation/export_v1.py`

---

## Federation principle

```text
Federation transports continuity.
ChessGuide retains learning.
```
