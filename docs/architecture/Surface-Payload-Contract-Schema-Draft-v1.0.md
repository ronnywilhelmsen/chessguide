# Surface Payload Contract Schema Draft v1.0

| Field | Value |
|-------|-------|
| **Document ID** | SPC-SCHEMA-DRAFT-001 |
| **Title** | Surface Payload Contract Schema Draft v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Schema |
| **Date** | 2026-06-18 |
| **Scope** | documentation-contained JSON Schema draft for governed ChessGuide surface payloads |
| **Depends on** | [SPC-HLD-ADR-001](./Surface-Payload-Contract-HLD-ADR-v1.0.md), [TW-INT-HLD-001](./TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md), [CV-MODE-LLD-001](./CV-Mode-Gated-Surfaces-LLD-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), ADR-001 through ADR-008, [FEDERATION.md](../../FEDERATION.md) |
| **Schema file** | [docs/contracts/surface-payload-contract.schema.v1.json](../contracts/surface-payload-contract.schema.v1.json) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- **SPC-SCHEMA-DRAFT-001 is a Draft Schema.**
- It introduces a **docs-contained JSON Schema draft**.
- It does **not** create runtime implementation.
- It does **not** create API implementation.
- It does **not** create tests.
- It does **not** modify federation export.
- It does **not** modify `src/`.
- It does **not** modify `thewilhelmsen.com`.
- It does **not** activate Buddy or LARIS.

---

## 2. Executive summary

- This PR **lowers SPC-HLD-ADR-001 into a draft JSON Schema**.
- The schema is intended for **future validation of surface payloads**.
- It formalizes **payload families, mode metadata, allowed fields, suppressed outputs, Creator replay links, consent/custody, and federation withholding**.
- It is **not runtime, not API, not OpenAPI, not TypeScript runtime, and not accepted production schema**.
- **Future runtime must derive from this only after governance acceptance.**

---

## 3. Schema decision

**Decision:** Create a **JSON Schema Draft 2020-12** contract draft for governed surface payloads.

**Consequences:**

- surfaces can later validate payload shape
- no-advice and suppression metadata become machine-checkable
- Creator replay metadata becomes required
- federation withholding metadata becomes required
- future API/runtime can be derived later

**Rejected:**

- schema in `src/`
- TypeScript-first contract
- API-first contract
- OpenAPI-first contract
- raw internal state schema
- direct learner-state schema
- engine/TSS/Buddy passthrough schema

---

## 4. Non-goals

- no runtime
- no API
- no OpenAPI
- no TypeScript types
- no tests
- no source changes
- no federation export changes
- no thewilhelmsen.com changes
- no Android/web/Chrome implementation
- no Buddy/LARIS activation

---

## 5. Vertical Architecture Continuity Requirement

| Layer | Schema expression | Verification question |
|-------|-------------------|------------------------|
| Philosophy / learning theory | no mastery/evidence/rationale fields; display ≠ learning | Can a schema field imply learning proof? (must be no) |
| Governance / ADR | forbidden-field absence; enum-only display/suppression | Which ADR governs each field? |
| HLD / ADR contract | payload families mirror SPC-HLD-ADR-001 families | Does each `$def` trace to a contract family? |
| LLD / OOP / UML | enums/defs align with CV-MODE-LLD adapters | Does the schema match LLD adapter types? |
| Immutable state transitions | `Custody.mutable = false`; append-only acks/replay refs | Are payloads non-mutating? (must be yes) |
| Runtime behavior | none; schema is docs-contained only | Is runtime deferred? (must be yes) |
| ChessBuddy / ChessGuide shared reality | `BUDDY_EXPLANATION` only via enum + suppression | Can Buddy leak pre-activation? (must be no) |
| thewilhelmsen.com hosted reality | `WEB_THEWILHELMSEN` is a surface_type, not an authority | Can the host invent authority? (must be no) |
| Creator real-time to 100-year continuity | `creator_replay_ref` required on every payload | Can Creator replay the payload? (must be yes) |
| Federation boundary | `federation_withholding` required on every payload | Can the payload export semantic data? (must be no) |

**If a schema field cannot be traced to the contract and governance chain, it must not be included.**

---

## 6. Contract-to-schema trace

| SPC-HLD-ADR-001 section | JSON Schema construct | Required/optional | Governance reason |
|--------------------------|------------------------|-------------------|-------------------|
| §13 Payload family overview | `$defs.PayloadFamily` enum + per-family `$defs` | required discriminator | family-gated surfaces |
| §14 SurfaceDisplayPayload | `$defs.SurfaceDisplayPayload` | required when family=SURFACE_DISPLAY | display ≠ authority |
| §15 ModeGateDecisionPayload | `$defs.ModeGateDecisionPayload` | optional family | record allow/suppress |
| §16 DisplayFieldSet | `$defs.DisplayField` enum | required via `display_fields` | enum, not arbitrary strings |
| §17 SuppressedOutputSet | `$defs.SuppressedOutputClass` + `SuppressedOutput` | required via `suppressed_outputs` | suppression is replayable evidence |
| §18 NoAdviceBannerPayload | `$defs.NoAdviceBanner` | required in COMPETITION/BROADCAST | no-advice enforced |
| §19 LiveGameDisplayPayload | `$defs.LiveGameDisplayPayload` | optional family | display-only |
| §20 ReviewContextPayload | `$defs.ReviewContextPayload` | optional family | post-game review only |
| §21 LearningContextPayload | `$defs.LearningContextPayload` | optional family | gated learning content |
| §22 BroadcastDisplayPayload | `$defs.BroadcastDisplayPayload` | optional family | spectator display-only |
| §23 ModeTransitionRequestPayload | `$defs.ModeTransitionRequestPayload` | optional family | request not decide |
| §24 DisplayAcknowledgementPayload | `$defs.DisplayAcknowledgementPayload` | optional family | replay what was shown |
| §25 CreatorReplayLinkPayload | `$defs.CreatorReplayLink` + `CreatorReplayLinkPayload` | required `creator_replay_ref` | 100-year continuity |
| §26 FederationWithholdingPayload | `$defs.FederationWithholdingPayload` | required `federation_withholding` | not federation export |
| §27 PrivacyConsentPayload | `$defs.PrivacyConsent` + `PrivacyConsentPayload` | optional family | consent/biometric boundary |
| §39 Required metadata catalog | root `required` list | required | mode/version/surface mandatory |
| §38 Forbidden fields catalog | absence of forbidden properties + `unevaluatedProperties:false` | forbidden | withhold, not embed |
| §40 Versioning | `contract_version` + `$id` v1 | required | reject unknown major versions |

Includes all payload families and core metadata fields.

---

## 7. Schema location and status

- **Schema path:** `docs/contracts/surface-payload-contract.schema.v1.json`
- **Status:** Draft Schema
- It is **documentation-contained**.
- It is **not a production validator** yet.
- It **must not be imported by runtime** in this PR.

---

## 8. Schema design principles

- required `contract_version`
- required `payload_family`
- required `mode`
- required `surface_type`
- required `active_game_state`
- required `mode_gate_decision_ref` (referenced for ModeGate-authorised payloads)
- required `creator_replay_ref`
- required `federation_withholding`
- required `suppressed_outputs` (on display/live/broadcast families)
- **fail closed** on unknown mode or stale version
- **no raw internal state**
- **no direct learner state**
- **no unfiltered semantic data**

---

## 9. Root payload model

The root schema defines:

- `$schema` — `https://json-schema.org/draft/2020-12/schema`
- `$id` — `https://chessguide.dev/schemas/surface-payload-contract.schema.v1.json`
- `title` — `ChessGuide Surface Payload Contract Schema v1`
- `type: object`
- discriminator via the required `payload_family` property (with `$defs` per family; `allOf`/`if`/`then` for mode-conditional rules)
- required **common metadata**
- `$defs` for **payload families, enums, metadata, and forbidden-field guard structures** (`unevaluatedProperties: false`)

---

## 10. Payload family discriminator

`$defs.PayloadFamily` enum:

- `SURFACE_DISPLAY`
- `MODE_GATE_DECISION`
- `LIVE_GAME_DISPLAY`
- `REVIEW_CONTEXT`
- `LEARNING_CONTEXT`
- `BROADCAST_DISPLAY`
- `MODE_TRANSITION_REQUEST`
- `DISPLAY_ACKNOWLEDGEMENT`
- `CREATOR_REPLAY_LINK`
- `FEDERATION_WITHHOLDING`
- `PRIVACY_CONSENT`

---

## 11. Shared metadata model

Fields:

- `payload_id`
- `contract_version`
- `session_id`
- `game_id`
- `surface_id`
- `surface_type`
- `mode`
- `active_game_state`
- `created_at`
- `expires_at`
- `provenance`
- `custody`
- `mode_gate_decision_ref`
- `creator_replay_ref`
- `federation_withholding_ref` (via `federation_withholding` object)
- `consent_state`

All common payloads must require:

- `payload_id`
- `contract_version`
- `payload_family`
- `mode`
- `surface_type`
- `surface_id`
- `active_game_state`
- `creator_replay_ref`
- `federation_withholding`

---

## 12. Mode model

`$defs.SurfaceMode` enum:

- `COMPETITION`
- `LEARNING`
- `REVIEW`
- `BROADCAST_DISPLAY`

**Mode is always explicit.**

---

## 13. Surface model

`$defs.SurfaceType` enum:

- `ANDROID`
- `WEB_CHESSGUIDE`
- `WEB_THEWILHELMSEN`
- `CHROME_EXTENSION`
- `ADMIN_DEMO`

**Surfaces cannot imply authority.**

---

## 14. Active game state model

`$defs.ActiveGameState` enum:

- `ACTIVE_GAME`
- `POST_GAME`
- `TRAINING_SANDBOX`
- `REVIEW_SESSION`
- `BROADCAST_ONLY`
- `UNKNOWN`

**`UNKNOWN` must fail closed in future runtime.**

---

## 15. Display fields model

`$defs.DisplayField` enum:

- `BOARD_STATE`
- `MOVE_LIST`
- `CURRENT_TURN`
- `CLOCK_STATE`
- `PLAYER_LABELS`
- `GAME_STATUS`
- `MODE_LABEL`
- `NO_ADVICE_BANNER`
- `REVIEW_AVAILABLE`
- `LEARNING_PROMPT`
- `TSS_SUMMARY`
- `KG_CONCEPT_REFS`
- `LEARNING_FRONTIER_HINT`
- `BUDDY_EXPLANATION`
- `ENGINE_REFERENCE`

**Schema must represent fields as declared enum values, not arbitrary strings.**

---

## 16. Suppressed outputs model

`$defs.SuppressedOutputClass` enum:

- `ENGINE_EVAL`
- `ENGINE_BEST_MOVE`
- `ENGINE_LINE`
- `CANDIDATE_MOVE`
- `TSS_WARNING`
- `CCT_HINT`
- `BUDDY_EXPLANATION`
- `MODEL_OUTPUT`
- `LEARNING_FRONTIER`
- `KG_TEACHING_CONTENT`
- `LEARNER_STATE_CLAIM`
- `MASTERY_CLAIM`
- `BIOMETRIC_CONTEXT`
- `RAW_CV_FRAME`
- `FEDERATION_SEMANTIC_EXPORT`

`$defs.SuppressedOutput` object fields:

- `output_class`
- `reason`
- `mode`
- `required_by`
- `replay_ref`

---

## 17. No-advice banner model

`$defs.NoAdviceBanner` fields:

- `banner_id`
- `visible`
- `mode`
- `text_key`
- `reason`
- `creator_replay_ref`

**Required in:**

- `COMPETITION`
- `BROADCAST_DISPLAY`

---

## 18. Creator replay link model

`$defs.CreatorReplayLink` fields:

- `replay_ref`
- `policy_version`
- `contract_version`
- `mode_gate_decision_ref`
- `event_refs`
- `suppression_refs`
- `display_ack_refs`
- `federation_withholding_ref`

---

## 19. Federation withholding model

`$defs.FederationWithholdingPayload` fields:

- `withholding_id`
- `federation_eligible`
- `semantic_fields_withheld`
- `withholding_reasons`
- `observation_record_ref`
- `creator_replay_ref`

**Surface payload is not federation export.**

---

## 20. Privacy / consent model

`$defs.PrivacyConsent` fields:

- `consent_state`
- `actor_scope`
- `surface_scope`
- `capture_source`
- `player_label_allowed`
- `biometric_allowed`
- `retention_class`
- `visibility_notice_required`
- `creator_replay_ref`

**`biometric_allowed` defaults `false` in examples.**

---

## 21. Provenance / custody model

`$defs.Provenance` fields:

- `source_event_refs`
- `capture_frame_refs`
- `validation_refs`
- `mode_gate_refs`
- `derived_from`
- `created_by_system`

`$defs.Custody` fields:

- `custody_class`
- `created_by_system`
- `mutable: false`

---

## 22. Payload family schemas

The schema defines at least:

- `SurfaceDisplayPayload`
- `ModeGateDecisionPayload`
- `LiveGameDisplayPayload`
- `ReviewContextPayload`
- `LearningContextPayload`
- `BroadcastDisplayPayload`
- `ModeTransitionRequestPayload`
- `DisplayAcknowledgementPayload`
- `CreatorReplayLinkPayload`
- `FederationWithholdingPayload`
- `PrivacyConsentPayload`

---

## 23. Mode-specific validation rules

Since JSON Schema cross-field mode rules are limited:

- strict required mode fields (`mode` is always required)
- comments/`description`s explain future semantic validation
- `allOf` / `if` / `then` rules enforce the no-advice banner in `COMPETITION` and `BROADCAST_DISPLAY` for display/live/broadcast families
- complex runtime policy is **not** over-engineered into the schema; deeper mode policy remains future runtime work

---

## 24. Forbidden-field enforcement

The schema:

- does **not** include fields named `engine_eval`, `best_move`, `engine_line`, `candidate_moves`, `raw_cv_frame`, `mastery_claim`, `learner_rationale`, `learner_graph_signal`, `semantic_federation_export`
- uses **enum fields** in `display_fields` and `suppressed_outputs` instead
- marks `unevaluatedProperties: false` where practical
- includes `description`s stating that forbidden data must be **withheld** rather than embedded

---

## 25. Required metadata enforcement

Root/common metadata requires:

- `payload_id`
- `contract_version`
- `payload_family`
- `mode`
- `surface_type`
- `surface_id`
- `active_game_state`
- `creator_replay_ref`
- `federation_withholding`

---

## 26. thewilhelmsen.com host compatibility

- `WEB_THEWILHELMSEN` is a `surface_type` enum value.
- thewilhelmsen.com **receives governed payloads**.
- thewilhelmsen.com **cannot decide mode**.
- thewilhelmsen.com **cannot receive forbidden fields**.
- **no repo changes** in this PR.

---

## 27. Android compatibility

- `ANDROID` is a `surface_type` enum value.
- Android capture may later provide **provenance/capture refs** (via `Provenance`).
- Android **must not emit advice locally**.

---

## 28. Chrome review/import compatibility

- `CHROME_EXTENSION` is a `surface_type` enum value.
- Chrome review/import uses **`REVIEW_CONTEXT` payloads**.
- Chrome **must not provide live advice**.

---

## 29. Creator replay compatibility

- `creator_replay_ref` **required**.
- `CreatorReplayLinkPayload` **included**.
- display acknowledgements **connect to replay** (`display_ack_refs`).
- suppression decisions are **replayable** (`suppression_refs`, `SuppressedOutput.replay_ref`).

---

## 30. Federation boundary compatibility

- `federation_withholding` **required**.
- `FederationWithholdingPayload` **included**.
- display payload is **not federation export**.
- semantic data **withheld**.

---

## 31. Schema versioning

- `contract_version` is **required**.
- schema `$id` includes **v1**.
- future breaking changes require **v2**.
- surfaces **reject unknown major versions**.

---

## 32. Failure / rejection examples

Examples of payloads that must be rejected:

- missing `mode`
- missing `creator_replay_ref`
- missing `federation_withholding`
- `engine_eval` embedded
- `best_move` embedded
- `raw_cv_frame` embedded
- `WEB_THEWILHELMSEN` payload carrying independent advice
- competition payload without `no_advice_banner`
- unknown `surface_type`

---

## 33. Valid conceptual examples

Short, illustrative (non-normative) examples.

**Competition live display payload:**

```json
{
  "payload_id": "p-001",
  "contract_version": "v1",
  "payload_family": "LIVE_GAME_DISPLAY",
  "mode": "COMPETITION",
  "surface_type": "ANDROID",
  "surface_id": "android-1",
  "active_game_state": "ACTIVE_GAME",
  "display_fields": ["BOARD_STATE", "MOVE_LIST", "CLOCK_STATE", "MODE_LABEL", "NO_ADVICE_BANNER"],
  "suppressed_outputs": [{ "output_class": "ENGINE_EVAL", "reason": "competition", "mode": "COMPETITION" }],
  "no_advice_banner": { "banner_id": "b1", "visible": true, "mode": "COMPETITION", "text_key": "no_advice.competition", "creator_replay_ref": "r-001" },
  "creator_replay_ref": "r-001",
  "federation_withholding": { "withholding_id": "w-001", "federation_eligible": false, "creator_replay_ref": "r-001" }
}
```

**Broadcast display payload:**

```json
{
  "payload_id": "p-002",
  "contract_version": "v1",
  "payload_family": "BROADCAST_DISPLAY",
  "mode": "BROADCAST_DISPLAY",
  "surface_type": "WEB_THEWILHELMSEN",
  "surface_id": "tw-live-1",
  "active_game_state": "BROADCAST_ONLY",
  "display_fields": ["BOARD_STATE", "CLOCK_STATE", "GAME_STATUS", "MODE_LABEL", "NO_ADVICE_BANNER"],
  "suppressed_outputs": [{ "output_class": "BUDDY_EXPLANATION", "reason": "broadcast", "mode": "BROADCAST_DISPLAY" }],
  "no_advice_banner": { "banner_id": "b2", "visible": true, "mode": "BROADCAST_DISPLAY", "text_key": "no_advice.broadcast", "creator_replay_ref": "r-002" },
  "creator_replay_ref": "r-002",
  "federation_withholding": { "withholding_id": "w-002", "federation_eligible": false, "creator_replay_ref": "r-002" }
}
```

**Review context payload:**

```json
{
  "payload_id": "p-003",
  "contract_version": "v1",
  "payload_family": "REVIEW_CONTEXT",
  "mode": "REVIEW",
  "surface_type": "CHROME_EXTENSION",
  "surface_id": "chrome-1",
  "active_game_state": "POST_GAME",
  "review_mode": "self_review",
  "creator_replay_ref": "r-003",
  "federation_withholding": { "withholding_id": "w-003", "federation_eligible": false, "creator_replay_ref": "r-003" }
}
```

**Learning context payload:**

```json
{
  "payload_id": "p-004",
  "contract_version": "v1",
  "payload_family": "LEARNING_CONTEXT",
  "mode": "LEARNING",
  "surface_type": "WEB_CHESSGUIDE",
  "surface_id": "web-1",
  "active_game_state": "TRAINING_SANDBOX",
  "learning_goal": "back-rank safety",
  "creator_replay_ref": "r-004",
  "federation_withholding": { "withholding_id": "w-004", "federation_eligible": false, "creator_replay_ref": "r-004" }
}
```

**Display acknowledgement payload:**

```json
{
  "payload_id": "p-005",
  "contract_version": "v1",
  "payload_family": "DISPLAY_ACKNOWLEDGEMENT",
  "mode": "COMPETITION",
  "surface_type": "ANDROID",
  "surface_id": "android-1",
  "active_game_state": "ACTIVE_GAME",
  "acknowledgement_id": "a-001",
  "acknowledged_payload_id": "p-001",
  "mode_label_visible": true,
  "no_advice_banner_visible": true,
  "creator_replay_ref": "r-001",
  "federation_withholding": { "withholding_id": "w-005", "federation_eligible": false, "creator_replay_ref": "r-001" }
}
```

---

## 34. Invalid conceptual examples

Short invalid examples (must be rejected).

**Competition payload with `engine_eval` (forbidden field embedded):**

```json
{
  "payload_family": "LIVE_GAME_DISPLAY",
  "mode": "COMPETITION",
  "engine_eval": "+1.8"
}
```

**Surface payload missing `mode`:**

```json
{
  "payload_id": "x-1",
  "payload_family": "SURFACE_DISPLAY",
  "surface_type": "WEB_CHESSGUIDE"
}
```

**thewilhelmsen payload with `buddy_explanation` in competition:**

```json
{
  "payload_family": "LIVE_GAME_DISPLAY",
  "mode": "COMPETITION",
  "surface_type": "WEB_THEWILHELMSEN",
  "buddy_explanation": "play Nf3 because..."
}
```

**Payload missing `creator_replay_ref`:**

```json
{
  "payload_id": "x-2",
  "payload_family": "SURFACE_DISPLAY",
  "mode": "LEARNING",
  "surface_type": "WEB_CHESSGUIDE"
}
```

**Payload with `raw_cv_frame`:**

```json
{
  "payload_family": "LIVE_GAME_DISPLAY",
  "mode": "COMPETITION",
  "raw_cv_frame": "<base64 image>"
}
```

---

## 35. Future API/runtime path

- **PR #33** — schema draft only (this PR)
- **PR #34** — schema acceptance or contract ADR hardening
- **PR #35** — display payload runtime skeleton behind feature flag
- **PR #36** — thewilhelmsen.com synthetic display shell plan/prototype
- **PR #37** — mode transition request schema
- **PR #38** — display acknowledgement + Creator replay runtime
- **PR #39** — no-advice guard tests
- **PR #40** — real session display integration

**Do not implement now.**

---

## 36. Acceptance gates

- markdown schema draft exists
- JSON Schema file exists
- schema is valid JSON
- no `src` changes
- no tests
- no API
- no runtime
- no thewilhelmsen.com changes
- common metadata required
- payload families defined
- mode enum defined
- surface enum defined
- display field enum defined
- suppressed output enum defined
- Creator replay required
- federation withholding required
- no forbidden fields embedded
- schema marked draft

---

## 37. Rejection criteria

Reject if:

- schema is placed in runtime source
- schema is imported by runtime
- an API endpoint is created
- a TypeScript runtime type is created
- forbidden fields are allowed
- Creator replay is optional
- federation withholding is optional
- mode is optional
- thewilhelmsen.com can receive independent advice
- competition payload can omit the no-advice banner
- thewilhelmsen.com repo is modified

---

## 38. Open questions

| ID | Question |
|----|----------|
| **SPC-SCHEMA-OQ-1** | How is `contract_version` incremented and what is the schema versioning policy? |
| **SPC-SCHEMA-OQ-2** | Should the JSON Schema draft version remain 2020-12 long-term, or migrate? |
| **SPC-SCHEMA-OQ-3** | Should typed bindings (TypeScript/Kotlin/Python) be generated later, and how? |
| **SPC-SCHEMA-OQ-4** | What API transport later carries these payloads? |
| **SPC-SCHEMA-OQ-5** | Event bus vs REST for payload delivery? |
| **SPC-SCHEMA-OQ-6** | What is the dedicated schema for the mode transition flow? |
| **SPC-SCHEMA-OQ-7** | What is the dedicated schema for display acknowledgement linkage? |
| **SPC-SCHEMA-OQ-8** | What exact no-advice banner wording/keys are used? |
| **SPC-SCHEMA-OQ-9** | How is localization of banner/text keys handled? |
| **SPC-SCHEMA-OQ-10** | What are expiry defaults per mode? |
| **SPC-SCHEMA-OQ-11** | What is the canonical `replay_ref` format? |
| **SPC-SCHEMA-OQ-12** | What is the final federation withholding object shape? |
| **SPC-SCHEMA-OQ-13** | What is the final privacy/consent enum shape? |
| **SPC-SCHEMA-OQ-14** | What host auth model governs thewilhelmsen.com payload delivery? |
| **SPC-SCHEMA-OQ-15** | What Android capture provenance fields are mandatory? |
| **SPC-SCHEMA-OQ-16** | What Chrome review provenance fields are mandatory? |
| **SPC-SCHEMA-OQ-17** | Is display public, private, or mixed, and how does that affect required fields? |
| **SPC-SCHEMA-OQ-18** | What synthetic payload test set validates the schema? |
| **SPC-SCHEMA-OQ-19** | How strict should `unevaluatedProperties` be across all `$defs`? |
| **SPC-SCHEMA-OQ-20** | What is the future schema acceptance gate (who accepts, what proof)? |

---

## 39. Recommendation

- **Accept SPC-SCHEMA-DRAFT-001 as Draft Schema.**
- **Do not use it in runtime until accepted.**
- Next step should be either:
  - a **schema acceptance/hardening PR**, or
  - a **display payload runtime skeleton behind a feature flag** after a no-advice validation plan.

---

## 40. Governance boundary statement

**SPC-SCHEMA-DRAFT-001 does not modify** runtime, tests, federation export, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, production schemas, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, API implementation, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **documentation-contained draft JSON Schema and human-readable schema design document only**.
