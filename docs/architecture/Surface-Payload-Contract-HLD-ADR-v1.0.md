# Surface Payload Contract HLD / ADR v1.0

| Field | Value |
|-------|-------|
| **Document ID** | SPC-HLD-ADR-001 |
| **Title** | Surface Payload Contract HLD / ADR v1.0 |
| **Version** | 1.0 |
| **Status** | Draft HLD / ADR-style Contract |
| **Date** | 2026-06-18 |
| **Scope** | conceptual payload contract for governed ChessGuide surfaces, including web, thewilhelmsen.com, Android, Chrome review/import, mode gates, Creator replay, and federation withholding |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CHROME-STRAT-001](../strategy/Chrome-Extension-Strategy-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [CV-MODE-LLD-001](./CV-Mode-Gated-Surfaces-LLD-v1.0.md), [CV-Mode-Gated-Surfaces-UML-v1.0.puml](./uml/CV-Mode-Gated-Surfaces-UML-v1.0.puml), [TW-INT-HLD-001](./TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md), [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- SPC-HLD-ADR-001 is a **Draft HLD / ADR-style Contract**.
- It creates **no runtime**.
- It creates **no executable implementation**.
- It creates **no API**.
- It creates **no schema**.
- It creates **no tests**.
- It creates **no thewilhelmsen.com changes**.
- It creates **no cross-repo code**.
- It creates **no LLD**.
- It creates **no UML**.
- It does **not** activate Buddy or LARIS.
- It defines a **human-readable payload contract only**.

---

## 2. Executive summary

- The payload contract defines **what ChessGuide may later send** to governed surfaces.
- It is a **boundary** between ChessGuide authority and surface display.
- It prevents surfaces from **inventing authority**.
- It supports **web, thewilhelmsen.com, Android, Chrome review/import, and future admin/demo surfaces**.
- It defines **allowed display fields, suppressed output classes, mode metadata, Creator replay links, consent/custody metadata, and federation withholding metadata**.
- It is **conceptual and not a schema or runtime implementation**.
- **Competition/Broadcast payloads must be no-advice.**
- Learning/Review payloads may include **governed educational fields only after validation and gates**.
- Creator must replay **what was shown and what was suppressed**.

---

## 3. ADR-style decision record

**Context:** ChessGuide will later present shared reality on multiple surfaces (web, thewilhelmsen.com, Android, Chrome). Without a contract, surfaces could leak advice, invent authority, or expose semantic/learner data.

**Decision:** ChessGuide will later communicate with surfaces through **governed, mode-gated payload families**, not raw internal state, not direct learner graph access, not direct Buddy output, not direct engine output, and not unfiltered semantic data.

**Consequences:**

- surfaces stay display-only unless mode/contract allows more
- no-advice modes are enforceable
- Creator can replay display/suppression
- federation withholding is embedded in the contract
- future schema can be derived later

**Alternatives considered:**

- raw state sharing — **rejected**
- direct web access to learner state — **rejected**
- direct thewilhelmsen.com coaching — **rejected**
- engine/TSS display by surface — **rejected**
- schema-first before HLD/ADR — **rejected for now**

**Status:** Draft HLD / ADR-style Contract.

---

## 4. Contract question

**What must a ChessGuide surface payload contain, omit, prove, and preserve so that future surfaces can display shared reality without becoming independent authorities or leaking advice?**

A surface payload must carry **mode, provenance, allowed fields, suppressed output classes, replay links, consent/custody state, expiry, and federation withholding**, while **excluding forbidden semantic/advice fields** unless explicitly allowed by mode and gates.

---

## 5. Design goals

- governed display payload
- explicit mode
- explicit active-game state
- explicit allowed fields
- explicit suppressed outputs
- no-advice by default
- Creator replay
- federation withholding
- privacy/consent/custody
- cross-repo readiness
- future schema readiness
- future API readiness
- no runtime now

---

## 6. Non-goals

- no code
- no runtime
- no API
- no schema
- no OpenAPI
- no TypeScript types
- no tests
- no thewilhelmsen.com changes
- no cross-repo changes
- no Android implementation
- no web implementation
- no Chrome implementation
- no CV implementation
- no Buddy activation
- no LARIS activation
- no federation widening

---

## 7. Vertical Architecture Continuity Requirement

| Layer | Contract meaning | Payload expression | Verification question |
|-------|------------------|--------------------|------------------------|
| Philosophy / learning theory | display ≠ learning | no mastery/evidence fields by default | Can a payload imply learning proof? (must be no) |
| Governance / ADR | ADR boundaries enforced | forbidden-field catalog | Which ADR governs each field? |
| Review / HLD | aligns with CV HLD | payload families map to surfaces | Does payload trace to HLD? |
| LLD / OOP / UML | uses LLD adapters | payload consumed by SurfaceAdapter | Does payload match LLD types? |
| Immutable state transitions | append-only payloads | lifecycle never mutates in place | Are payloads/acks append-only? |
| Runtime behavior | none now | conceptual only | Is runtime deferred? (must be yes) |
| ChessBuddy / ChessGuide shared reality | gated Buddy payload | Buddy field gated | Can Buddy leak pre-activation? (must be no) |
| thewilhelmsen.com hosted reality | host renders allowed fields | host cannot redefine payload | Can host invent authority? (must be no) |
| Creator real-time to 100-year continuity | full replay | creator_replay_ref in every family | Can Creator replay payload? (must be yes) |
| Federation boundary | no semantic export | federation_withholding in every family | Can payload export semantic data? (must be no) |

**If a payload field cannot be explained through this chain, it must not exist in the contract.**

---

## 8. Philosophy-to-contract trace

- **Display is not learning.**
- A live board is **not mastery**.
- A move is **not learner rationale**.
- A CV-derived position is **not evidence**.
- An explanation is **not evidence** unless separately governed.
- A surface is **not an independent truth source**.
- The contract exists to **prevent semantic collapse**.

---

## 9. Governance-to-contract trace

| Governance artifact | Contract implication | Payload rule |
|---------------------|----------------------|--------------|
| ADR-001 | display ≠ LearningTrace | no evidence custody field |
| ADR-002 | corpus_ref sovereign | KG refs are pointers |
| ADR-003 | display ≠ evidence | no evidence promotion field |
| ADR-004 | display ≠ claim/mastery | mastery_claim forbidden |
| ADR-005 | display ≠ rationale | learner_rationale forbidden |
| ADR-006 | Buddy gated | buddy_explanation gated |
| ADR-007 | Stockfish reference only | engine fields suppressed in competition |
| ADR-008 | KG curation honoured | kg refs governed |
| ACG-001 | continuity required | every field traces chain |
| STRR-001 | roadmap discipline | contract before schema |
| CGSR-002 | strategic identity | surface ≠ doctrine |
| KG-001 | domain graph | KG teaching gated |
| LG-001 | learner state | learner_graph_signal forbidden direct |
| LF-001 | frontier read model | frontier hint gated |
| TSS-SCC-LLD-001 | safety scanner | tss fields suppressed in competition |
| BLAP-001 | activation plan | Buddy/LARIS gated |
| ANDROID-STRAT-001 | Android CV-first | capture handoff governed |
| CHROME-STRAT-001 | Chrome no-advice | review/import payloads only |
| MTPAI-STRAT-001 | model gated | model_output gated |
| CV-MODE-STRAT-001 | mode gates | mode required field |
| CV-MODE-HLD-001 | surface arch | payload per surface |
| CV-MODE-LLD-001 | adapter types | payload matches adapters |
| TW-INT-HLD-001 | cross-repo plan | host renders payloads only |
| FEDERATION.md | withholding | federation_withholding required |

---

## 10. HLD / LLD / UML alignment

- **PR #29** defines surface/mode HLD (CV-MODE-HLD-001).
- **PR #30** defines LLD/OOP/UML including `ModeGate`, `SurfaceAdapter`, `CreatorReplayEnvelope`, `FederationWithholdingGuard`, `TheWilhelmsenSurfaceAdapter`.
- **PR #31** defines the cross-repo plan (TW-INT-HLD-001).
- **This PR** defines the payload contract those future adapters will use.
- This PR does **not replace HLD/LLD/UML**.
- Future schema and API must **derive from this contract**.

---

## 11. Contract ownership

- **ChessGuide owns contract semantics.**
- Surfaces **consume** contract payloads.
- thewilhelmsen.com may **render** payloads but **not redefine** them.
- Android may **produce capture events** but **not learner-state payloads**.
- Chrome may **produce review/import context** but **not live advice payloads**.
- Creator owns **replay custody**.
- Federation withholding remains **ChessGuide-owned**.

---

## 12. Surface taxonomy

| Surface | Receives payload? | Emits payload? | May request mode change? | May display learning content? | May display competition content? | May display Buddy? | May display engine? | Must record replay? | Forbidden authority |
|---------|-------------------|----------------|--------------------------|-------------------------------|----------------------------------|--------------------|---------------------|---------------------|---------------------|
| **Android app** | yes | capture events | yes | yes (gated) | display-only | after gates | learning/review only | yes | local advice, learner mutation |
| **ChessGuide web app** | yes | acks/requests | yes | yes (gated) | display-only | after gates | learning/review only | yes | competition advice |
| **thewilhelmsen.com** | yes | acks/requests | yes (request only) | governed only | display-only | after gates | no (host cannot call) | yes | mode decision, independent advice |
| **Chrome extension** | review only | review/import | no | safe review | no | no | no | yes | live advice, scraping |
| **future admin/demo** | yes | acks | no | governed only | display-only | no | governed only | yes | ungoverned authority |

---

## 13. Payload family overview

Conceptual payload families (**not schemas or runtime types**):

- `SurfaceDisplayPayload`
- `ModeGateDecisionPayload`
- `DisplayFieldSet`
- `SuppressedOutputSet`
- `NoAdviceBannerPayload`
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

## 14. SurfaceDisplayPayload

| Field | Purpose | Required/Optional | Allowed modes | Forbidden interpretation |
|-------|---------|-------------------|---------------|--------------------------|
| payload_id | unique id | required | all | not evidence |
| contract_version | version | required | all | not authority |
| session_id | session ref | required | all | not learner identity proof |
| game_id | game ref | required | all | not result claim |
| surface_id | surface ref | required | all | not actor |
| surface_type | surface kind | required | all | not authority |
| mode | active mode | required | all | not implicit |
| active_game_state | game status | required | all | not advice trigger |
| payload_family | family tag | required | all | not schema |
| display_fields | allowed fields | required | all | not exhaustive truth |
| suppressed_outputs | suppressed classes | required | all | not display |
| no_advice_banner | banner | required in comp/broadcast | comp/broadcast | not optional in competition |
| warnings | non-advisory notes | optional | all | not coaching |
| provenance | source lineage | required | all | not export |
| consent | consent state | required | all | not implied |
| custody | custody flags | required | all | not transfer |
| creator_replay | replay link | required | all | not droppable |
| federation_withholding | withholding | required | all | not export |
| expires_at | expiry | required | all | not reusable across modes |

---

## 15. ModeGateDecisionPayload

Fields:

- decision_id
- mode
- surface_type
- input_type
- active_game_state
- validation_state
- requested_output_classes
- allowed_output_classes
- suppressed_output_classes
- fail_closed
- suppression_reasons
- policy_version
- creator_replay_ref

**ModeGateDecisionPayload is a record of what the system allowed or suppressed, not an explanation to the learner by itself.**

---

## 16. DisplayFieldSet

| Field | Allowed modes | Forbidden modes | Required guards |
|-------|---------------|------------------|-----------------|
| board_state | all | — | validation if CV-derived |
| move_list | all | — | validation |
| current_turn | all | — | — |
| clock_state | all | — | sanity check |
| player_labels | all (if configured) | — | consent |
| game_status | all | — | — |
| mode_label | all | — | required visible |
| no_advice_banner | competition/broadcast | — | required |
| review_available | post-game | during active competition | — |
| learning_prompt | learning/review | competition/broadcast | mode gate |
| tss_summary | learning/review | competition/broadcast | validation + mode gate |
| kg_concept_refs | learning/review | competition/broadcast | KG governance |
| learning_frontier_hint | learning/review | competition/broadcast | LF read gate |
| buddy_explanation | learning/review | competition/broadcast | BLAP gate |
| engine_reference | learning/review (labelled) | competition/broadcast | engine suppression policy |

---

## 17. SuppressedOutputSet

Suppressed output classes:

- ENGINE_EVAL
- ENGINE_BEST_MOVE
- ENGINE_LINE
- CANDIDATE_MOVE
- TSS_WARNING
- CCT_HINT
- BUDDY_EXPLANATION
- MODEL_OUTPUT
- LEARNING_FRONTIER
- KG_TEACHING_CONTENT
- LEARNER_STATE_CLAIM
- MASTERY_CLAIM
- BIOMETRIC_CONTEXT
- FEDERATION_SEMANTIC_EXPORT

**Suppression is positive evidence of governance behavior and must be replayed.**

---

## 18. NoAdviceBannerPayload

Fields:

- banner_id
- mode
- text_key
- visible
- reason
- creator_replay_ref

**Competition/Broadcast surfaces must show or be eligible to show a no-advice banner.**

---

## 19. LiveGameDisplayPayload

**Allowed fields:**

- board_state
- move_list
- clock_state
- current_turn
- game_status
- player_labels if configured
- mode_label
- no_advice_banner

**Forbidden:**

- engine
- TSS/CCT
- Buddy/model
- Learning Frontier
- mastery/claim
- learner rationale

---

## 20. ReviewContextPayload

**Allowed fields:**

- validated_position
- move_history
- review_mode
- tss_result_ref
- kg_refs
- learning_frontier_view
- learner_reflection_ref
- buddy_explanation_ref if Buddy active
- engine_reference_ref if allowed and labelled
- creator_replay_ref

**Forbidden:**

- original evidence mutation
- mastery claim
- unlabelled engine truth

---

## 21. LearningContextPayload

**Allowed fields:**

- learning_goal
- safety_prompt
- cct_prompt
- tss_summary
- kg_concept_refs
- learning_frontier_hint
- buddy_explanation_ref after gates
- model_draft_ref after gates
- creator_replay_ref

**Forbidden:**

- live competition advice
- hidden engine
- mastery certification
- learner rationale impersonation

---

## 22. BroadcastDisplayPayload

**Allowed:**

- board
- clock
- moves
- game status
- player labels if permitted
- no-advice banner
- mode label

**Forbidden:**

- all advice
- engine
- TSS/CCT
- Buddy/model
- learning state
- player-specific coaching

---

## 23. ModeTransitionRequestPayload

Fields:

- request_id
- session_id
- actor_id
- current_mode
- requested_mode
- active_game_state
- reason
- confirmation_state
- requested_from_surface
- timestamp
- creator_replay_ref

**Rules:**

- thewilhelmsen.com may request but **not decide**.
- **ChessGuide decides.**
- active competition → learning must **fail closed** unless explicitly training/non-competitive.

---

## 24. DisplayAcknowledgementPayload

Fields:

- acknowledgement_id
- payload_id
- surface_id
- displayed_at
- displayed_fields
- suppressed_fields_confirmed
- mode_label_visible
- no_advice_banner_visible
- creator_replay_ref

**Display acknowledgement helps Creator replay what the surface actually showed.**

---

## 25. CreatorReplayLinkPayload

Fields:

- replay_ref
- policy_version
- contract_version
- mode_gate_decision_ref
- event_refs
- suppression_refs
- display_ack_refs
- federation_withholding_ref

**Creator continuity must survive real-time to 100-year replay.**

---

## 26. FederationWithholdingPayload

Fields:

- withholding_id
- payload_id
- semantic_fields_withheld
- reason
- federation_eligible
- observation_record_ref if applicable
- creator_replay_ref

**Payloads are not federation exports.**

---

## 27. PrivacyConsentPayload

Fields:

- consent_state
- actor_scope
- surface_scope
- capture_source
- player_label_allowed
- biometric_allowed
- retention_class
- visibility_notice_required
- creator_replay_ref

**Biometric/pulse-like data is not allowed without separate governance.**

---

## 28. Surface payload lifecycle

1. source event exists
2. validation state determined
3. ModeGate evaluates
4. allowed/suppressed sets created
5. `SurfaceDisplayPayload` created
6. surface renders
7. display acknowledgement emitted
8. Creator replay links events
9. federation withholding recorded
10. payload expires

**No lifecycle step mutates previous decisions in place.**

---

## 29. Mode-specific payload rules

| Mode | Allowed payload families | Suppressed families | Required metadata | Creator replay | Federation rule |
|------|--------------------------|---------------------|-------------------|----------------|-----------------|
| **Competition** | LiveGameDisplay, NoAdviceBanner | Learning/Review/engine/TSS/Buddy/model | mode, banner, suppression | full | withhold semantic |
| **Learning** | LearningContext, Review, LiveGameDisplay | competition-advice misuse | mode, validation, gates | full | withhold semantic |
| **Review** | ReviewContext, LearningContext | live-advice | mode, validated history | full | withhold semantic |
| **Broadcast / Display** | BroadcastDisplay, NoAdviceBanner | all advice/semantic | mode, banner, suppression | full | withhold semantic |

---

## 30. Competition Mode contract

**Payload rule:**

- display-only
- record-only
- no advice
- no semantic teaching
- no engine
- no TSS/CCT
- no Buddy/model
- no Learning Frontier
- no learner-state claims
- no mastery claims
- no hidden coaching

**Required:**

- mode_label
- no_advice_banner
- suppressed outputs
- creator replay
- federation withholding

---

## 31. Learning Mode contract

- learning content allowed **only after validation and mode gate**
- TSS/CCT allowed
- KG refs allowed
- Learning Frontier allowed
- Buddy/model only after gates
- Stockfish only labelled as reference
- no mastery claim

---

## 32. Review Mode contract

- post-game/self-owned review
- validated history
- TSS/SCC, KG, LF, Buddy/model after gates
- review annotations separate from original evidence
- no silent evidence mutation

---

## 33. Broadcast / Display Mode contract

- live spectator display
- display-only
- no advice
- no engine
- no TSS/CCT
- no Buddy/model
- no learner state
- no player-specific coaching

---

## 34. Android CV handoff contract

**Input:**

- capture event
- board/clock/context draft
- confidence
- validation state

**Output:**

- only allowed `SurfaceDisplayPayload` after ModeGate
- no local learner-state mutation
- no advice in competition

---

## 35. Chrome review/import contract

**Input:**

- PGN/FEN/context import
- active-game safety context

**Output:**

- review context only
- no live advice
- no active-game injection
- no hidden scraping
- creator replay of import context

---

## 36. thewilhelmsen.com host contract

- receives governed payloads
- renders allowed fields
- can send display acknowledgement
- can request mode transition if delegated
- **cannot decide mode**
- **cannot add advice**
- **cannot call engine/TSS/Buddy/model independently**
- **cannot read learner state directly**
- **cannot export semantic data**

---

## 37. Conceptual cross-repo API mapping

Conceptual endpoints/messages — **conceptual only, no API implementation, no schema**:

| Endpoint / message | Requester | Owner | Allowed modes | Payload family | Forbidden fields | Creator replay | Federation withholding |
|--------------------|-----------|-------|---------------|----------------|------------------|----------------|------------------------|
| `GET /sessions/{session_id}/display` | surface | ChessGuide | all (gated) | SurfaceDisplayPayload | engine/TSS/Buddy/model in comp | record | withhold |
| `POST /sessions/{session_id}/display-ack` | surface | ChessGuide | all | DisplayAcknowledgementPayload | learner state | record | withhold |
| `POST /sessions/{session_id}/mode-transition-request` | surface | ChessGuide | all | ModeTransitionRequestPayload | silent advice enable | record | n/a |
| `GET /sessions/{session_id}/review` | surface | ChessGuide | review/learning | ReviewContextPayload | live advice | record | withhold |
| `GET /sessions/{session_id}/replay-metadata` | ChessGuide tools | ChessGuide | all | CreatorReplayLinkPayload | semantic export | self-record | withhold |

---

## 38. Forbidden fields catalog

| Field / class | Reason forbidden | Forbidden modes | Allowed only if | Replay requirement |
|---------------|------------------|------------------|-----------------|--------------------|
| engine_eval | engine ≠ teacher | competition/broadcast | learning/review + labelled | record suppression |
| best_move | live advice | competition/broadcast | learning/review + gate | record |
| candidate_moves | live advice | competition/broadcast | learning/review + safety gate | record |
| engine_line | live advice | competition/broadcast | learning/review + labelled | record |
| tss_warning | live advice | competition/broadcast | learning/review + validation | record |
| cct_hint | live advice | competition/broadcast | learning/review | record |
| buddy_explanation | pre-activation/competition | competition/broadcast | learning/review + BLAP | record |
| model_output | ungoverned/competition | competition/broadcast | learning/review + MTPAI | record |
| learning_frontier_hint | competition leak | competition/broadcast | learning/review | record |
| learner_graph_signal | learner state leak | all surfaces direct | never direct | record |
| mastery_claim | unfounded claim | all | never (needs stewardship) | record |
| learner_rationale | impersonation | all | never | record |
| biometric_signal | privacy | all | separate governance only | record |
| raw_cv_frame | privacy/export | all display/export | never to host/federation | record |
| semantic_federation_export | federation boundary | all | never | record |

---

## 39. Required metadata catalog

- contract_version
- mode
- active_game_state
- surface_type
- surface_id
- payload_id
- session_id
- timestamp
- mode_gate_decision_ref
- allowed_output_classes
- suppressed_output_classes
- creator_replay_ref
- federation_withholding_ref
- consent_state
- expiry

---

## 40. Versioning and compatibility

- `contract_version` required
- breaking changes require a **new contract version**
- future schema must include version
- surfaces must **reject unknown major versions**
- Creator must replay **contract version used**
- federation withholding must include version

---

## 41. Expiry / freshness / cache rules

- live display payloads **expire quickly**
- review payloads may persist with custody
- competition display payloads **must not be reused as learning payloads**
- stale payloads **fail closed**
- cache **must not bypass ModeGate**
- thewilhelmsen.com **must not retain beyond policy**

---

## 42. Creator replay requirements

Creator must replay:

- payload created
- mode evaluated
- displayed fields
- suppressed fields
- reasons
- host/surface
- version
- expiry
- display acknowledgement
- federation withholding
- consent state

---

## 43. ChessBuddy / ChessGuide shared reality requirements

- Buddy sees only **mode-allowed reality**.
- Buddy output must be **payload-gated**.
- Buddy **cannot appear on thewilhelmsen.com** unless ChessGuide emits allowed Buddy payload **after BLAP gates**.
- ChessGuide must know **what was displayed and suppressed**.

---

## 44. Learner Graph / Learning Frontier requirements

- learner graph signals are **never direct surface payloads**.
- Learning Frontier hints appear **only in Learning/Review mode** and only through governed payload.
- Surfaces **cannot read/mutate LG/LF**.

---

## 45. TSS/SCC requirements

- TSS/SCC outputs require **validated position**.
- TSS/SCC output **suppressed in Competition/Broadcast**.
- TSS/SCC may appear in **Learning/Review only** through the payload contract.
- TSS/SCC is **system competence, not learner competence**.

---

## 46. Stockfish / engine requirements

- engine output **suppressed in Competition/Broadcast**.
- engine reference allowed only in **Learning/Review if labelled**.
- **engine-best not learning-best**.
- surfaces **cannot call engine independently**.

---

## 47. MTPAI / model-output requirements

- model output **suppressed in Competition/Broadcast**.
- model output **only after MTPAI gates**.
- model output is **ExplanationDraft-like, not claim/mastery/evidence**.
- surfaces **cannot call model independently**.

---

## 48. Privacy / consent / biometric requirements

- payload must carry **consent state**.
- player labels require **consent/configuration**.
- biometric/pulse-like fields **forbidden unless separate governance**.
- raw CV frames **not sent to federation or public display**.
- thewilhelmsen.com receives **only display-safe fields**.

---

## 49. Federation withholding requirements

- all payload families include **federation withholding metadata**.
- display payload is **not export payload**.
- **no semantic data exported**.
- only separately governed **lossy ObservationRecord** eligible.

---

## 50. Failure modes

| Failure mode | Risk | Payload guard | Replay requirement |
|--------------|------|---------------|--------------------|
| payload lacks mode | ambiguity | required mode field | record reject |
| payload lacks contract version | drift | required version | record reject |
| payload contains engine eval in competition | cheating | forbidden-field catalog | record suppression |
| payload contains TSS warning in competition | cheating | suppression set | record |
| payload contains Buddy output pre-activation | governance breach | BLAP gate | record |
| payload contains learner state | privacy leak | learner_graph_signal forbidden | record |
| payload contains raw CV frame | privacy leak | raw_cv_frame forbidden | record |
| payload lacks Creator replay ref | continuity loss | required creator_replay | record reject |
| payload lacks federation withholding | data leak | required withholding | record reject |
| stale payload displayed | wrong reality | expiry + fail closed | record |
| thewilhelmsen.com caches learning payload into competition display | cheating | mode-bound payloads | record |
| Chrome sends live-game context as learning payload | cheating | active-game guard | record |
| Android emits advice locally | cheating | no local advice | record |
| surface invents mode | governance breach | mode owned by ChessGuide | record |
| surface ignores suppression | leak | display-ack verification | record |
| federation receives semantic field | data leak | withholding guard | record |

---

## 51. Acceptance gates

- HLD/ADR-style contract only
- no runtime
- no code
- no API
- no schema
- no tests
- no thewilhelmsen.com changes
- no cross-repo changes
- payload families defined
- mode-specific rules defined
- forbidden fields catalog defined
- required metadata catalog defined
- Creator replay requirement included
- federation withholding included
- privacy/consent included
- future schema/API path included

---

## 52. Rejection criteria

Reject if:

- contract allows raw internal state sharing
- contract allows thewilhelmsen.com to decide mode
- contract allows advice in Competition/Broadcast
- contract allows direct learner-state access
- contract omits Creator replay
- contract omits federation withholding
- contract omits consent/custody
- contract is implemented as schema/runtime now
- thewilhelmsen.com is modified now

---

## 53. Future schema/API/runtime path

- **PR #32:** HLD/ADR-style contract only
- **PR #33:** JSON Schema / TypeScript contract draft OR payload contract ADR acceptance
- **PR #34:** ChessGuide display payload runtime skeleton behind feature flag
- **PR #35:** thewilhelmsen.com read-only display shell plan/prototype with synthetic payload
- **PR #36:** mode transition request contract
- **PR #37:** display acknowledgement + Creator replay
- **PR #38:** no-advice guard tests
- **PR #39:** real session display integration
- **PR #40:** post-game review surface

**Do not implement now.**

---

## 54. Open questions

| ID | Question |
|----|----------|
| **SPC-OQ-1** | How is contract_version managed and incremented? |
| **SPC-OQ-2** | What schema language (JSON Schema/TypeScript/protobuf) later? |
| **SPC-OQ-3** | API vs event bus for payload delivery? |
| **SPC-OQ-4** | What host auth model applies? |
| **SPC-OQ-5** | What session identity model applies? |
| **SPC-OQ-6** | What display latency budget applies? |
| **SPC-OQ-7** | What cache/expiry windows per mode? |
| **SPC-OQ-8** | What display acknowledgement is mandatory? |
| **SPC-OQ-9** | Is display public, private, or mixed? |
| **SPC-OQ-10** | What consent model governs capture/labels? |
| **SPC-OQ-11** | How are player labels handled and consented? |
| **SPC-OQ-12** | What is the source of active-game state? |
| **SPC-OQ-13** | Who owns mode transition decisions per surface? |
| **SPC-OQ-14** | How is Creator replay stored durably? |
| **SPC-OQ-15** | What federation withholding tests are required? |
| **SPC-OQ-16** | Should Android handoff come first? |
| **SPC-OQ-17** | How is the Chrome review handoff secured? |
| **SPC-OQ-18** | What synthetic payload feeds thewilhelmsen.com prototypes? |
| **SPC-OQ-19** | What no-advice banner wording/keys are used? |
| **SPC-OQ-20** | What is the future schema acceptance gate? |

---

## 55. Recommendation

- Accept **SPC-HLD-ADR-001** as Draft HLD / ADR-style Contract.
- Next step should be either:
  - **Payload Contract Schema Draft**, if implementation should be prepared, or
  - **thewilhelmsen.com read-only display shell plan**, if web surface should be prepared first.
- Do **not** implement runtime until the payload contract is accepted and no-advice guard tests are designed.

---

## 56. Governance boundary statement

**SPC-HLD-ADR-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, API implementation, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **human-readable HLD / ADR-style contract only**.
