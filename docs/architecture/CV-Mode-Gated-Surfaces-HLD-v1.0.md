# CV + Mode-Gated Surfaces HLD v1.0

| Field | Value |
|-------|-------|
| **Document ID** | CV-MODE-HLD-001 |
| **Title** | CV + Mode-Gated Surfaces HLD v1.0 |
| **Version** | 1.0 |
| **Status** | Draft HLD |
| **Date** | 2026-06-18 |
| **Scope** | high-level design for computer vision, Android capture, web/thewilhelmsen.com live display, Chrome review/import, mode gates, custody, Creator replay, and federation withholding |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CHROME-STRAT-001](../strategy/Chrome-Extension-Strategy-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- CV-MODE-HLD-001 is a **Draft HLD**.
- It creates **no runtime**.
- It creates **no CV implementation**.
- It creates **no Android implementation**.
- It creates **no web implementation**.
- It creates **no Chrome implementation**.
- It creates **no thewilhelmsen.com changes**.
- It creates **no LLD**.
- It creates **no UML**.
- It does **not** activate Buddy or LARIS.
- It defines **high-level architecture only**.

---

## 2. Executive summary

- The HLD turns **CV-MODE-STRAT-001** into a high-level architecture.
- **Android is the primary CV capture surface.**
- **Web/thewilhelmsen.com** is a future live display and mode-gated ChessGuide surface.
- **Chrome** is review/import-first and no-advice near active online games.
- A central **Mode Gate** decides what each surface may show or suppress.
- **CV input is not evidence** until processed by a governed pipeline.
- **Competition Mode is display/record only.**
- **Learning and Review** modes allow TSS/CCT/Buddy later after gates.
- **Creator replay** must preserve input, surface, mode, actor, validation, and withholding decisions.

---

## 3. HLD question

**How should ChessGuide structure CV input, Android capture, web/thewilhelmsen.com live display, Chrome import/review, and mode-gated behavior at a high level so that future runtime can be implemented safely?**

By separating **surfaces, input capture, validation, mode policy, semantic interpretation, display, custody, and replay** into bounded contexts with strict **one-way authority boundaries**.

---

## 4. Design goals

- Android-first CV capture
- real-time web display
- thewilhelmsen.com as internal host/surface
- explicit mode gates
- no live advice in competition
- review-safe learning flow
- deterministic validation before semantic use
- TSS/SCC only after mode and validation
- Creator replay for all meaningful transitions
- federation withholding
- privacy/consent/custody
- future runtime readiness

---

## 5. Non-goals

- no runtime
- no CV code
- no Android code
- no web code
- no Chrome extension code
- no thewilhelmsen.com changes
- no cross-repo integration
- no schemas
- no tests
- no LLD
- no UML
- no model implementation
- no training
- no Buddy activation
- no LARIS activation
- no federation widening

---

## 6. Governance foundation

| Source | HLD relevance | Architectural consequence |
|--------|---------------|---------------------------|
| **ADR-001** | LearningTrace evidence/custody | CV input is not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | CV-derived concepts are pointers |
| **ADR-003** | evidence records | CV draft ≠ evidence until processed |
| **ADR-004** | claims / stewardship | surfaces cannot create claims |
| **ADR-005** | DecisionTrace | CV ≠ learner rationale |
| **ADR-006** | Buddy pedagogy | Buddy gated by mode + activation |
| **ADR-007** | Stockfish / SCC boundary | no engine in competition |
| **ADR-008** | KG / corpus governance | KG labels honour curation |
| **ACG-001** | architecture continuity | HLD preserves full chain |
| **STRR-001** | roadmap controller | HLD before LLD/runtime |
| **CGSR-002** | strategic identity | surfaces are lanes, not doctrine |
| **KG-001** | domain graph | KG anchors only in learning/review |
| **LG-001** | learner-specific derived state | surfaces cannot mutate learner state |
| **LF-001** | planning read model | Frontier display gated by mode |
| **TSS-SCC-LLD-001** | safety scanner design | TSS gets validated positions only |
| **BLAP-001** | activation plan | Buddy/LARIS gated |
| **ANDROID-STRAT-001** | Android strategy | Android is CV-first surface |
| **CHROME-STRAT-001** | Chrome strategy | Chrome no-advice near live games |
| **MTPAI-STRAT-001** | model-training strategy | model output gated |
| **CV-MODE-STRAT-001** | CV/mode strategy | this HLD lowers that strategy |
| **FEDERATION.md** | federation withholding | no CV/semantic export |

---

## 7. Architecture Continuity Gate

| Layer | HLD interpretation | Boundary | Downstream consequence |
|-------|--------------------|----------|------------------------|
| Philosophy / learning theory | CV is sensory bridge, not learning proof | CV ≠ understanding | grounds mode gating |
| Governance / ADR | HLD honours ADR-001–008 | doctrine beats runtime | guards encode ADR limits |
| Review / HLD | this document defines high-level components only | HLD ≠ implementation | LLD/UML follow |
| Future LLD / OOP / UML | component responsibilities become classes/modules later (§41) | design ≠ runtime | LLD/UML before runtime |
| Immutable state transitions | event/custody/mode transitions replayable | no silent mutation | replayable surface lineage |
| Runtime implementation | none now | runtime after gates | guarded CV/surface service later |
| ChessBuddy / ChessGuide reality sharing | outputs gated by mode and activation | no advice in competition | Buddy display after BLAP |
| Creator continuity | 100-year replay of surface/mode/input decisions | no flattening | replay envelope required |
| Federation boundary | no CV or semantic export | lossy ObservationRecord only | widening needs separate path |

---

## 8. Vertical Architecture Continuity Trace

| Layer | CV + mode-gated surfaces trace |
|-------|--------------------------------|
| Philosophy / learning theory | learning theory → mode-gated sensory capture and display |
| Governance / ADR | governance → no CV-as-evidence collapse |
| Review / HLD | review/HLD → this document defines high-level components only |
| Future LLD / OOP / UML | future LLD/OOP/UML → component responsibilities become classes/modules later |
| Immutable state transitions | immutable state → event/custody/mode transitions replayable |
| Runtime implementation | runtime → no runtime yet |
| ChessBuddy / ChessGuide reality sharing | reality-sharing → outputs gated by mode and activation |
| Creator real-time to 100-year continuity | Creator → 100-year replay of surface/mode/input decisions |
| Federation boundary | federation → no CV or semantic export |

---

## 9. High-level bounded contexts

### 9.1 CV Capture Context
- **Purpose:** capture frames from camera/surface and produce CV drafts.
- **Owns:** capture events, raw references, CV confidence.
- **Does not own:** validation, semantics, learner state, display policy.
- **Allowed inputs:** camera frames, uploaded images, consent state.
- **Allowed outputs:** `CVDerivedPositionDraft`, `CVConfidenceEnvelope`.
- **Forbidden behavior:** producing advice, mutating learner state, exporting frames.

### 9.2 Surface Context
- **Purpose:** present governed payloads on Android/web/thewilhelmsen.com/Chrome.
- **Owns:** display rendering, surface mode flag.
- **Does not own:** mode policy authority, semantic truth.
- **Allowed inputs:** `SurfaceDisplayPayload`, `ModeGateDecision`.
- **Allowed outputs:** display, user interactions, mode-change requests.
- **Forbidden behavior:** self-deciding advice, bypassing ModeGate.

### 9.3 Mode Policy Context
- **Purpose:** evaluate ModeGate decisions.
- **Owns:** mode policy, suppression rules, fail-closed logic.
- **Does not own:** capture, semantics, learner state.
- **Allowed inputs:** mode, surface, input type, validation/activation state.
- **Allowed outputs:** `ModeGateDecision`, withholding decision, replay reason.
- **Forbidden behavior:** allowing advice in competition/broadcast.

### 9.4 Deterministic Validation Context
- **Purpose:** validate candidate positions/moves.
- **Owns:** legality/check/mate/FEN sanity validation.
- **Does not own:** pedagogy, mastery, mode policy.
- **Allowed inputs:** candidate FEN/PGN.
- **Allowed outputs:** validation state.
- **Forbidden behavior:** producing pedagogy or claims.

### 9.5 Semantic Interpretation Context
- **Purpose:** map validated positions to TSS/SCC/KG/engine references.
- **Owns:** semantic adapters (read).
- **Does not own:** display, learner state mutation.
- **Allowed inputs:** validated positions, mode decision.
- **Allowed outputs:** scan results, references (mode-gated).
- **Forbidden behavior:** emitting in competition/broadcast.

### 9.6 Learning Context
- **Purpose:** assemble learning/review content.
- **Owns:** learning payload assembly (read-only over LG/LF/KG).
- **Does not own:** learner state mutation.
- **Allowed inputs:** validated semantics, frontier/KG reads.
- **Allowed outputs:** learning/review payloads.
- **Forbidden behavior:** mastery claims, evidence creation.

### 9.7 Mentor Context
- **Purpose:** future Buddy output adaptation.
- **Owns:** `BuddyOutputAdapter` (gated).
- **Does not own:** activation authority.
- **Allowed inputs:** governed read models, activation state.
- **Allowed outputs:** ExplanationDraft (learning/review only, after gates).
- **Forbidden behavior:** competition/broadcast appearance, mastery certification.

### 9.8 Creator Continuity Context
- **Purpose:** replay custody of surface/mode/input decisions.
- **Owns:** `CreatorReplayEnvelope`.
- **Does not own:** display, semantics.
- **Allowed inputs:** all meaningful transitions.
- **Allowed outputs:** replay records.
- **Forbidden behavior:** dropping suppression/withholding reasons.

### 9.9 Federation Export Context
- **Purpose:** enforce withholding.
- **Owns:** `FederationWithholdingGuard`.
- **Does not own:** semantic data.
- **Allowed inputs:** export requests.
- **Allowed outputs:** lossy ObservationRecord eligibility only.
- **Forbidden behavior:** exporting CV/semantic/learner data.

### 9.10 Related Host Context: thewilhelmsen.com
- **Purpose:** future host/surface for ChessGuide views.
- **Owns:** nothing in this repo; external internal project.
- **Does not own:** chess advice authority, governance.
- **Allowed inputs:** governed surface payloads (future).
- **Allowed outputs:** display of governed views (future).
- **Forbidden behavior:** becoming an ungoverned assistant; bypassing ModeGate.

---

## 10. High-level component model

| Component | Responsibility | Inputs | Outputs | Forbidden authority | Future LLD note |
|-----------|----------------|--------|---------|---------------------|-----------------|
| `CVCaptureSurface` | abstract capture surface | frames/consent | capture events | advice | base interface |
| `AndroidCVCapture` | Android camera capture | camera frames | capture events | learner-state mutation | primary capture |
| `BoardFrameCapture` | board image capture | frames | board draft | semantics | board pipeline |
| `ClockFrameCapture` | clock image capture | frames | clock read draft | advice | clock pipeline |
| `PlayerContextCapture` | governed presence/turn | frames/consent | context signal | biometric profiling | consent-gated |
| `CVDerivedPositionDraft` | candidate position | board/piece detection | FEN draft | trusted evidence | draft type |
| `CVConfidenceEnvelope` | confidence/ambiguity | detections | confidence | trust without validation | envelope type |
| `ModeGate` | decide allowed output | mode/surface/input/state | decision | allow advice in competition | core guard |
| `SurfaceModePolicy` | mode rules per surface | surface/mode | policy | implicit modes | policy module |
| `CompetitionModeGuard` | suppress advice | mode decision | display/record only | any coaching | guard |
| `LearningModeGuard` | allow safe pedagogy | mode decision | learning payload | mastery claims | guard |
| `ReviewModeGuard` | allow review | mode decision | review payload | silent evidence edit | guard |
| `BroadcastDisplayGuard` | spectator display | mode decision | non-advisory display | advice | guard |
| `DeterministicPositionValidator` | validate legality | FEN/PGN | validation state | pedagogy | validator |
| `TssSccReviewAdapter` | TSS/SCC read | validated position | scan (gated) | competition emission | adapter |
| `EngineReferenceAdapter` | Stockfish read | validated position | eval (gated) | teacher truth | adapter |
| `PedagogicalModelAdapter` | model output (gated) | governed prompt | ExplanationDraft | ungoverned output | adapter |
| `BuddyOutputAdapter` | Buddy output (gated) | read models | ExplanationDraft | mastery certification | adapter |
| `LearnerGraphReadAdapter` | LG read-only | learner id | derived signals | mutation | read adapter |
| `LearningFrontierReadAdapter` | LF read-only | learner id | suggestions | command/mutation | read adapter |
| `KgConceptReadAdapter` | KG read-only | concept ref | concept data | doctrine creation | read adapter |
| `CreatorReplayEnvelope` | replay custody | transitions | replay record | dropping reasons | envelope |
| `FederationWithholdingGuard` | withhold semantic data | export request | withholding decision | semantic export | guard |
| `TheWilhelmsenSurfaceAdapter` | future host boundary | governed payload | surface payload | ungoverned advice | future adapter |
| `ChromeReviewImportAdapter` | review/import | PGN/FEN/context | review context | live advice | adapter |
| `WebLiveDisplaySurface` | live web display | display payload | rendered display | advice in competition | surface |

---

## 11. Surface responsibility model

| Surface | Primary role | Can capture CV? | Can display live board? | Advice in Competition Mode? | Learning Mode content? | Host Buddy later? | Preserve Creator replay? | Notes |
|---------|--------------|-----------------|--------------------------|------------------------------|------------------------|-------------------|--------------------------|-------|
| **Android app** | capture + reflection | yes (primary) | yes | no | yes | yes (after gates) | yes | CV-first |
| **ChessGuide web app** | display + coordination | upload/review | yes | no | yes | yes (after gates) | yes | mode-gated |
| **thewilhelmsen.com hosted surface** | live display host | presents only | yes | no | governed only | yes (after gates) | yes | internal host |
| **Chrome extension** | review/import | no | passive only | no | safe review | no | yes | no-advice near live |
| **future admin/demo surface** | demo/ops | depends | yes | no | governed only | no | yes | governed later |

---

## 12. Mode-gate architecture

**Decision function:** `Surface + Input + Mode + ActivationState + ValidationState = Allowed Output`

ModeGate must evaluate:

- current mode
- active game status
- surface type
- input type
- validation state
- TSS/SCC availability
- Buddy activation state
- LARIS activation state
- MTPAI/model-output gate
- user consent/custody
- fair-play context
- federation withholding

ModeGate output:

- allowed display fields
- suppressed fields
- required warnings
- replay reason
- withholding decision

---

## 13. Mode taxonomy

| Mode | Allowed purpose | Prohibited purpose | Active-game handling | Allowed components | Suppressed components | Creator replay requirement |
|------|-----------------|--------------------|-----------------------|--------------------|------------------------|----------------------------|
| **Competition** | display/record | coaching/advice | display-only during play | board/clock/move/status | engine/TSS/Buddy/model/Frontier | full mode + suppression replay |
| **Learning** | safe pedagogy | mastery/false certainty | non-competitive only | CCT/TSS/KG/LF/Buddy(gated) | competition advice misuse | full pedagogy replay |
| **Review** | post-hoc analysis | rewriting evidence | game ended/self-owned | reconstruction/TSS/CCT/Buddy(gated) | silent evidence edits | full review replay |
| **Broadcast / Display** | spectator display | player advice | display-only | board/clock/move/status/banner | engine/TSS/Buddy/model/Frontier | full display replay |

---

## 14. Competition Mode HLD

**Allowed:**

- board display
- clock display
- move list
- current turn
- player labels if explicitly configured
- non-advisory status
- recording for later review
- physical-to-digital mirror

**Suppressed:**

- Stockfish
- engine eval
- best move
- candidate moves
- TSS/CCT warnings
- Buddy
- pedagogical model output
- Learning Frontier recommendations
- KG teaching explanations
- any live coaching signal

**Competition Mode is display/record only.**

---

## 15. Learning Mode HLD

**Allowed:**

- CCT checklist
- TSS/SCC safety scan
- KG concepts
- Learning Frontier
- learner reflection
- future Buddy after BLAP gates
- model-supported explanation after MTPAI gates
- Stockfish as labelled reference only

Learning Mode must still preserve **evidence/claim/mastery boundaries**.

---

## 16. Review Mode HLD

**Allowed:**

- post-game review
- self-owned analysis
- CV/FEN/PGN reconstruction
- TSS/SCC scan
- CCT explanation
- learner reflection
- Buddy after gates
- Creator replay metadata

Review annotations are **not original-game evidence** unless processed and recorded separately.

---

## 17. Broadcast / Display Mode HLD

**Allowed:**

- live display for spectators/room/projector/web
- board
- clock
- moves
- non-advisory status
- no-advice banner

**Suppressed:**

- engine
- TSS/CCT
- Buddy
- model output
- Learning Frontier
- player-specific advice

---

## 18. Computer Vision input pipeline

High-level flow:

1. capture frame
2. create capture event
3. detect input type
4. produce CV draft
5. attach confidence
6. run deterministic validation if applicable
7. apply ModeGate
8. route to display/review/withholding
9. create Creator replay envelope
10. avoid federation export

**CV draft is not evidence until governed processing.**

---

## 19. Android capture architecture

Android as primary CV capture:

- board camera
- clock camera/read
- piece detection
- player/context detection if governed
- local draft storage
- consent visible
- no local learner-state mutation
- no advice in Competition Mode
- submits candidate FEN/events only to governed runtime later

---

## 20. Web / thewilhelmsen.com live display architecture

- `WebLiveDisplaySurface` can show game state in real time.
- `TheWilhelmsenSurfaceAdapter` is a **future integration boundary**.
- thewilhelmsen.com may host or present **ChessGuide-controlled views**.
- Web can display **board/moves/clocks/status/mode selector**.
- Web must **not be doctrine source**.
- Web must **not show advice** in Competition/Broadcast Mode.
- Learning/Review mode may show **governed pedagogical content only when safe**.
- Future cross-repo work requires **separate HLD/LLD and coordinated PRs**.

---

## 21. Chrome review/import architecture

- Chrome is **review/import-first**.
- Chrome must use **no-advice mode near active online games**.
- Chrome can later hand off **PGN/FEN/context** to ChessGuide or thewilhelmsen.com review surface.
- Chrome **cannot inject live advice**.
- Chrome **cannot scrape silently**.
- Chrome **cannot host ungoverned Buddy/model output**.

---

## 22. CV confidence and ambiguity handling

- all CV outputs must carry **confidence**
- ambiguous board/piece/clock results **remain draft**
- user confirmation may be required
- deterministic validation must **fail closed**
- no semantic interpretation from low-confidence input
- no advice from ambiguous state

---

## 23. Deterministic validation handoff

- candidate FEN/PGN must be **validated by the deterministic rules lane**
- future python-chess or equivalent may validate **legal structure**
- validation result is **not pedagogy**
- invalid state **cannot proceed** to TSS/SCC or learner state

---

## 24. TSS/SCC handoff

- TSS/SCC receives **validated positions only**
- Competition Mode **suppresses** TSS/SCC user-facing warnings
- Learning/Review Mode may show TSS/SCC outputs
- TSS/SCC remains **system competence, not learner competence**

---

## 25. Stockfish / engine reference handoff

- Stockfish only in **allowed Learning/Review contexts**
- **no Stockfish in Competition Mode**
- no engine eval in Broadcast/Display Mode unless a future governed spectator-only policy exists
- **engine-best is not learning-best**
- engine output never equals mastery/evidence

---

## 26. Model Training / pedagogical AI handoff

- model output only **after future MTPAI runtime gates**
- **no ungoverned local model output** on any surface
- **no model advice in competition**
- model output can become **ExplanationDraft** only through guards

---

## 27. Buddy handoff

- Buddy **inactive until BLAP gates pass**
- Buddy output only in **Learning/Review modes** after activation
- **no Buddy in Competition/Broadcast mode**
- Buddy cannot certify mastery or learner rationale
- Buddy must obey **TSS P0/P1**

---

## 28. LARIS boundary

- LARIS **inactive**
- LARIS **does not appear** through CV/web/Android/Chrome
- future LARIS requires a **separate activation plan**

---

## 29. Learner Graph / Learning Frontier handoff

- surfaces **cannot mutate Learner Graph**
- surfaces **cannot mutate Learning Frontier**
- Learning Frontier may be displayed only in **Learning/Review modes**
- CV/session data may become learner evidence only through a **future governed evidence pipeline**

---

## 30. Knowledge Graph handoff

- KG refs may appear in **Learning/Review modes**
- KG refs are **conceptual anchors, not evidence**
- **no KG teaching content in Competition Mode**
- new KG concepts require **governance**

---

## 31. Event and custody envelope

Conceptual envelope fields:

- event_id
- actor_id
- surface
- mode
- input_type
- capture_source
- timestamp
- local_or_remote
- consent_state
- custody_state
- raw_reference
- derived_reference
- validation_state
- confidence
- policy_version
- withholding_decision

This is **conceptual HLD only, not schema**.

---

## 32. Mode transition envelope

Conceptual fields:

- previous_mode
- next_mode
- transition_actor
- transition_reason
- active_game_state
- confirmation_required
- confirmation_result
- suppressed_outputs
- replay_reason

Mode transitions must be **explicit and Creator-replayable**.

---

## 33. Creator replay envelope

Conceptual fields:

- surface
- mode
- actor
- time
- input type
- CV confidence
- deterministic validation status
- policy version
- TSS/SCC version
- KG version
- Buddy activation state
- LARIS activation state
- model gate state
- displayed outputs
- suppressed outputs
- federation withholding decision

---

## 34. Federation withholding model

- CV frames are **not exported**
- clock images are **not exported**
- player/context images are **not exported**
- TSS/CCT/Buddy/model/Learner Graph/Frontier outputs are **not exported**
- only governed **lossy ObservationRecord** remains eligible
- federation widening requires **separate governance/HLD/LLD/tests**

---

## 35. Privacy / consent / biometric boundary

- camera capture requires **explicit visible consent**
- **no hidden capture**
- **no silent player identification**
- **no biometric/pulse-like inference** without separate governance
- player/context signals are **sensitive**
- child/school/minor context requires **separate governance**
- retention/deletion strategy required later

---

## 36. Fair-play and anti-cheating guard model

Guards:

- active game guard
- competition no-advice guard
- broadcast no-advice guard
- Chrome no-advice guard
- Android no-live-advice guard
- mode transition guard
- engine suppression guard
- TSS suppression guard
- Buddy/model suppression guard

**If mode or active-game state is uncertain, fail closed to no-advice.**

---

## 37. thewilhelmsen.com integration boundary

- **related internal project/repo** (`ronnywilhelmsen/thewilhelmsen.com`)
- may host future ChessGuide web surfaces
- may display real-time games
- may support mode selector
- may show board/moves/clocks/game status
- must **not become independent source of chess advice**
- must **not bypass ChessGuide governance**
- **no changes in this PR**
- future cross-repo integration requires a **separate plan**

---

## 38. Future conceptual API boundaries

Conceptual, non-runtime interfaces:

- `CaptureEvent`
- `CVDerivedPositionDraft`
- `ModeGateDecision`
- `SurfaceDisplayPayload`
- `ReviewContextPayload`
- `CreatorReplayEnvelope`
- `FederationWithholdingDecision`
- `TheWilhelmsenSurfacePayload`

These are **conceptual HLD boundaries only, not schemas and not implementation**.

---

## 39. Failure modes

| Failure mode | Risk | Affected surface | Guard |
|--------------|------|------------------|-------|
| CV misreads board | wrong position | Android/web | confidence + deterministic validation |
| CV misreads piece | wrong material | Android | confidence + draft + confirmation |
| CV misreads clock | wrong time | Android/web | sanity check + draft |
| mode incorrectly set to Learning during competition | leaked advice | all | mode transition guard + fail closed |
| web leaks engine eval | cheating | web/thewilhelmsen.com | competition/broadcast suppression guard |
| Chrome injects advice in active online game | cheating | Chrome | Chrome no-advice guard |
| Android shows TSS warning during competition | cheating | Android | competition suppression guard |
| Buddy appears before activation | governance breach | all | BLAP gate + Buddy suppression guard |
| model output appears before MTPAI gate | ungoverned output | all | MTPAI gate + model suppression guard |
| player/context CV becomes biometric profiling | privacy breach | Android | consent/biometric boundary |
| thewilhelmsen.com bypasses ChessGuide mode gate | governance breach | thewilhelmsen.com | TheWilhelmsenSurfaceAdapter gate |
| federation exports semantic data | data leak | federation | FederationWithholdingGuard |
| Creator cannot replay why advice was suppressed | continuity loss | all | CreatorReplayEnvelope |

---

## 40. Acceptance gates

- HLD is documentation-only
- no implementation changes
- mode-gate architecture defined
- Android-first CV defined
- web/thewilhelmsen.com live display defined
- Chrome review/import defined
- Competition/Learning/Review/Broadcast modes defined
- thewilhelmsen.com internal boundary defined
- no-advice competition guard defined
- Creator replay envelope defined
- federation withholding defined
- privacy/biometric boundary defined
- future LLD/UML path defined

---

## 41. Future LLD / OOP / UML path

Future LLD classes/modules:

- `CVFrameCapture`
- `BoardDetector`
- `PieceDetector`
- `ClockDetector`
- `PlayerContextDetector`
- `CVDerivedPositionDraft`
- `CVConfidenceEnvelope`
- `ModeGate`
- `SurfaceModePolicy`
- `CompetitionModeGuard`
- `LearningModeGuard`
- `ReviewModeGuard`
- `BroadcastDisplayGuard`
- `ActiveGameGuard`
- `NoAdviceGuard`
- `DeterministicPositionValidator`
- `TssSccReviewAdapter`
- `EngineReferenceAdapter`
- `BuddyOutputAdapter`
- `PedagogicalModelAdapter`
- `LearnerGraphReadAdapter`
- `LearningFrontierReadAdapter`
- `KgConceptReadAdapter`
- `CreatorReplayEnvelope`
- `FederationWithholdingGuard`
- `TheWilhelmsenSurfaceAdapter`
- `ChromeReviewImportAdapter`
- `WebLiveDisplaySurface`

Future **LLD and UML must follow this HLD before runtime**.

---

## 42. Future runtime wave path

- **PR #29:** HLD only
- **PR #30:** CV + Mode-Gated Surfaces LLD/OOP/UML
- **PR #31:** TheWilhelmsen Integration HLD or coordinated cross-repo plan
- **PR #32:** Android CV prototype sandbox
- **PR #33:** web/thewilhelmsen.com live display prototype
- **PR #34:** deterministic validation pipeline
- **PR #35:** mode-gate runtime tests
- **PR #36:** safe review mode
- **PR #37:** TSS/SCC integration after validation
- **PR #38:** Buddy display after BLAP gates
- full runtime only after tests and guards

---

## 43. Open questions

| ID | Question |
|----|----------|
| **CV-HLD-OQ-1** | What is the first runtime prototype? |
| **CV-HLD-OQ-2** | Is Android board capture first? |
| **CV-HLD-OQ-3** | Should thewilhelmsen.com live display come before CV capture? |
| **CV-HLD-OQ-4** | What mode transitions are allowed mid-game? |
| **CV-HLD-OQ-5** | What confirms training vs competition? |
| **CV-HLD-OQ-6** | How is active-game state detected? |
| **CV-HLD-OQ-7** | What CV confidence threshold is required? |
| **CV-HLD-OQ-8** | How are ambiguous board states shown? |
| **CV-HLD-OQ-9** | How is clock capture validated? |
| **CV-HLD-OQ-10** | What player/context data is permitted? |
| **CV-HLD-OQ-11** | Are biometric signals excluded permanently or deferred? |
| **CV-HLD-OQ-12** | What are the first web/thewilhelmsen.com APIs? |
| **CV-HLD-OQ-13** | How is Chrome no-advice mode enforced? |
| **CV-HLD-OQ-14** | What must be logged for Creator replay? |
| **CV-HLD-OQ-15** | What tests are required before TSS display? |
| **CV-HLD-OQ-16** | What tests are required before Stockfish display? |
| **CV-HLD-OQ-17** | What tests are required before Buddy display? |

---

## 44. Recommendation

- Accept **CV-MODE-HLD-001** as Draft HLD.
- Next step should be **CV + Mode-Gated Surfaces LLD/OOP/UML**.
- **TheWilhelmsen integration** may become a separate HLD if web live display is prioritized.
- Do **not** implement runtime yet.
- Do **not** modify thewilhelmsen.com yet.

---

## 45. Governance boundary statement

**CV-MODE-HLD-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **human-readable HLD only**.
