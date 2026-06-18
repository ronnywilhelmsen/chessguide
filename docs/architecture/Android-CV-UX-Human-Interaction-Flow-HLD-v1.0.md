# Android CV UX / Human Interaction Flow HLD v1.0

| Field | Value |
|-------|-------|
| **Document ID** | ANDROID-CV-UX-HLD-001 |
| **Title** | Android CV UX / Human Interaction Flow HLD v1.0 |
| **Version** | 1.0 |
| **Status** | Draft HLD |
| **Date** | 2026-06-18 |
| **Scope** | Android CV human interaction flow, UX architecture, Material Design 3 strategy, mode-gated screen/button behavior, camera/capture/calibration/confidence/ambiguity flow, and future Android Studio readiness |
| **Depends on** | [ANDROID-CV-FR-001](./Android-CV-Framework-Modular-Architecture-Review-v1.0.md), [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [CV-MODE-LLD-001](./CV-Mode-Gated-Surfaces-LLD-v1.0.md), [SPC-HLD-ADR-001](./Surface-Payload-Contract-HLD-ADR-v1.0.md), [SPC-SCHEMA-DRAFT-001](./Surface-Payload-Contract-Schema-Draft-v1.0.md), [TW-INT-HLD-001](./TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), ADR-001 through ADR-008, [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- **ANDROID-CV-UX-HLD-001 is a Draft HLD.**
- It creates **no Android Studio project**.
- It creates **no Android runtime**.
- It creates **no Gradle/Kotlin/Java/Compose files**.
- It creates **no UI implementation**.
- It creates **no dependencies**.
- It creates **no tests**.
- It modifies **no `src/`**.
- It modifies **no thewilhelmsen.com**.
- It activates **neither Buddy nor LARIS**.
- It is **UX / Human Interaction Flow HLD only**.

---

## 2. Executive summary

- PR #35 converts the **Android CV framework review into human-facing UX architecture**.
- It defines **screens, buttons, mode flows, capture/calibration flows, confidence and ambiguity UX, no-advice UX, and future acceptance-test targets**.
- It keeps **implementation deferred**.
- It ensures **heavy CV remains behind clean UX layers**.
- It prepares for **Android LLD/OOP/UML and then the Android Studio skeleton**.

---

## 3. Why UX HLD comes before Android Studio code

- Android Studio code before UX HLD risks **building the wrong app shell**.
- We must know **human flows** before implementing CameraX, Compose, CV modules, payload handling, mode selection, or permissions.
- Acceptance tests require **screens, buttons, expected user perception, error states, and no-advice behavior**.
- Therefore Android Studio code begins **only after UX HLD and Android LLD/OOP/UML**.

---

## 4. Human-centered design premise

- The internal system may be complex: **CameraX, OpenCV, YOLO/ML Kit/MediaPipe/LiteRT, KG, deterministic validation, ModeGate, payload, Creator**.
- The user experience must feel **simple, calm, and safe**.
- The camera screen should **not expose every tool**.
- Advanced details should appear **only through progressive disclosure**.
- Uncertainty must be **visible but not overwhelming**.
- **Competition mode must feel clearly no-advice.**

---

## 5. Strategic UX question

**How can Android present a complex CV-driven chess learning system so that a human user always understands what mode they are in, what the camera is doing, what is uncertain, what is suppressed, and what actions are safe?**

**Answer:** By building a **mode-first, progressive-disclosure UX** where every screen is organized around the user's current purpose: compete/display, learn, review, capture, calibrate, or resolve ambiguity.

---

## 6. UX design goals

- mode-first interaction
- no-advice clarity
- minimal camera UI
- progressive disclosure
- confidence visible
- ambiguity actionable
- privacy visible
- local drafts clear
- calibration understandable
- no hidden background capture
- no hidden advice
- review vs learning distinction
- payload/replay explainability
- low visual noise
- Material Design 3 calm interface
- accessibility

---

## 7. UX non-goals

- no implementation
- no Compose code
- no Android Studio project
- no screenshots
- no production UI
- no runtime camera analyzer
- no CV dependencies
- no live advice
- no engine overlay
- no automatic mastery UI
- no biometric/pulse UI in v1
- no local Buddy/LARIS UI activation

---

## 8. Vertical Architecture Continuity Requirement

| Layer | UX expression | Screen/Button implication | Verification question |
|-------|---------------|----------------------------|------------------------|
| Philosophy / learning theory | capture ≠ learning; calm, safe UX | "draft only" / "review after game" cues | Can a screen imply learning proof? (must be no) |
| Governance / ADR | ADR-001–008 honored in UX | no mastery badges, no live engine | Which ADR governs each screen field? |
| Review / Strategy | aligns with ANDROID-CV-FR / CV-MODE-STRAT | mode-first navigation | Does each screen trace to strategy/review? |
| HLD | this UX HLD + CV-MODE-HLD | screens map to surfaces/modes | Does each screen map to an HLD surface? |
| LLD / OOP / UML | future Android LLD | UI state observes core interfaces | Can the screen be lowered to LLD/UML? |
| Android Studio runtime | none now; future waves | runtime only after gates | Is runtime deferred? (must be yes) |
| Immutable state transitions | drafts append-only; corrections are drafts | "save draft" never overwrites evidence | Are corrections drafts, not silent mutation? |
| ChessBuddy / ChessGuide shared reality | Buddy gated; no local improvisation | Buddy UI only after BLAP gates | Can Buddy UI appear pre-activation? (must be no) |
| thewilhelmsen.com hosted reality | host shows governed payload only | no raw frames to host | Can host receive raw frames? (must be no) |
| Creator real-time to 100-year continuity | actions replayable | replay refs surfaced in debug/sync | Can Creator replay the interaction? (must be yes) |
| Federation boundary | no semantic export | "data not exported" notice | Can UX export semantic data? (must be no) |

**If a screen or button cannot be traced through this chain, it must not be implemented.**

---

## 9. Prior architecture commitments

- Android is the **primary CV capture surface**.
- Android **must not provide live advice**.
- Android **must not mutate learner state locally**.
- CV-derived state is **draft until validated**.
- **ModeGate controls output.**
- **Surface Payload Contract controls future payloads.**
- thewilhelmsen.com is **host/display only**.
- **Creator replay is required.**
- **Federation withholding remains.**

---

## 10. Three-layer Android module UX architecture

- **Feature modules:** user-facing screens and flows.
- **Core modules:** model, mode, payload, replay, privacy, design system, CV interfaces.
- **Data modules:** local drafts, sync, capture metadata, future persistence.

Text diagram:

```text
[:app]
  -> feature modules (screens, flows)
     -> core modules (model, mode, payload, replay, privacy, designsystem, cv interfaces)
        -> data / integration modules (local-drafts, sync, chessguide-api, thewilhelmsen-surface)
```

**Feature modules call core interfaces, not framework implementations directly.**

---

## 11. Future Android Studio module map

- `:app`
- `:core:model`
- `:core:mode`
- `:core:payload`
- `:core:replay`
- `:core:privacy`
- `:core:designsystem`
- `:core:cv`
- `:core:network`
- `:feature:mode-selection`
- `:feature:camera-setup`
- `:feature:scanner`
- `:feature:calibration`
- `:feature:competition`
- `:feature:learning`
- `:feature:review`
- `:feature:broadcast`
- `:feature:ambiguity`
- `:feature:privacy`
- `:feature:developer-debug`
- `:data:local-drafts`
- `:data:sync`
- `:integration:chessguide-api`
- `:integration:thewilhelmsen-surface`

**Module names are conceptual only.**

---

## 12. Material Design 3 strategy

- **M3 as design foundation.**
- calm surfaces
- tonal palettes used moderately
- surface containers for result cards
- clear typography hierarchy
- visible mode banner
- high-contrast no-advice banner
- modal bottom sheets for details
- cards for confidence/result summaries
- scrim/overlay for capture focus
- accessibility and touch-target sizes

---

## 13. Jetpack Compose strategy

- **Compose is the recommended future UI approach.**
- Compose UI should **observe UI state only**.
- Compose **must not process raw frames directly**.
- Camera preview wrapped as **isolated interop/component** later.
- `core:designsystem` contains **M3 theme/components**.
- **No Compose code in this PR.**

---

## 14. Unidirectional data flow strategy

- ViewModel exposes UI state via **StateFlow or equivalent**.
- UI emits **user actions**.
- ViewModel routes actions to **use cases**.
- CV frame stream **must not directly trigger recomposition per frame**.
- UI receives **throttled/stable detection summaries**.
- **MVI/MVVM style is acceptable; exact implementation deferred.**

Conceptual flow:

```text
User action -> ViewModel -> UseCase -> Core interface -> Result state -> UI
```

---

## 15. Camera and CV performance UX boundary

- **Heavy CV must run off the UI thread.**
- CameraX `ImageAnalysis` future analyzer should use a **dedicated executor or dispatcher**.
- **Avoid allocations in the per-frame loop.**
- **Reuse buffers / object pools.**
- Convert **YUV_420_888 quickly** to the CV/model format.
- UI updates should be **throttled and semantic**, not per raw frame.
- User should see a **smooth preview** even when CV is uncertain.

---

## 16. Frame processing UX rules

- never block camera preview for analysis
- never freeze UI while processing
- show "analyzing…" only when a user action requires it
- show confidence/ambiguity summaries, not internal model noise
- if frame quality is poor, guide the user gently
- if detection is unstable, ask for calibration or a still frame
- **no live advice from any frame in Competition Mode**

---

## 17. Global navigation model

Top-level destinations:

- Home
- Capture
- Live Game
- Review
- Learning
- Privacy
- Settings
- Developer Sandbox

**Navigation principle: mode visible globally.**

---

## 18. Mode Selection screen

**Purpose:** select or confirm current mode.

Modes: Competition, Learning, Review, Broadcast / Display.

Buttons:

- Competition Mode
- Learning Mode
- Review Mode
- Broadcast / Display Mode
- Confirm mode
- Cancel

Rules:

- mode visible after selection
- changing from Competition to Learning during an active game must **require confirmation** and remain **no-advice** unless training/non-competitive
- mode change **replayable later**

---

## 19. Camera Permission screen

**Purpose:** make camera use explicit and transparent.

Elements:

- why camera is needed
- what is captured
- what is not captured
- no hidden recording
- no biometric/pulse in v1
- Continue
- Open settings
- Cancel

---

## 20. Camera Setup screen

**Purpose:** prepare capture before scanning.

Elements:

- mode banner
- lighting hint
- board placement hint
- camera angle hint
- Start capture
- Calibration
- Privacy details

---

## 21. Board Capture screen

**Purpose:** minimalist camera seeker.

Elements:

- full-screen camera preview
- visible mode chip/banner
- board target overlay
- scrim around target area
- Start/Stop capture
- Re-detect board
- Calibrate
- Save draft
- bottom sheet for details

**Progressive disclosure:** only show advanced controls after the user taps details or detection is unstable.

---

## 22. Calibration / Align Board screen

**Purpose:** help the user align board and orientation.

Elements:

- board outline overlay
- square grid overlay
- corner handles
- Flip orientation
- Re-detect
- Confirm alignment
- Cancel

**UX: do not expose raw OpenCV details.**

---

## 23. Live Game screen

**Purpose:** show live board/clock/moves/status without advice.

Elements:

- board state
- move list
- clock
- turn indicator
- mode banner
- no-advice banner in Competition/Broadcast
- "Open review after game" disabled until post-game

**Forbidden in live competition:** engine eval, best move, candidate moves, TSS/CCT warnings, Buddy explanation, Learning Frontier hint.

---

## 24. Competition Mode screen

- Display/record only.
- No advice.
- Suppressed outputs not shown as hints.
- User sees the no-advice banner.
- User can save the game for review later.

Buttons:

- Start game display
- Stop display
- Save for review
- Show mode details
- Exit

---

## 25. Learning Mode screen

- Used for training/non-competitive sessions.
- Can show safety prompts **after validation**.
- Can show confidence.
- Can ask questions.
- Buddy **only after gates**.

Buttons:

- Start learning capture
- Ask safety question
- Show CCT checklist
- Show detected uncertainty
- Save reflection
- Send for validation

---

## 26. Review Mode screen

- Post-game/self-owned review.
- Can show validated history.
- Can show TSS/SCC and KG refs.
- Can allow reflections.
- **Must not mutate original evidence silently.**

Buttons:

- Open game
- Review position
- Add reflection
- Show concepts
- Show what was uncertain
- Export none / federation withheld notice

---

## 27. Broadcast / Display Mode screen

- Spectator display only.
- Similar to Competition no-advice.
- thewilhelmsen.com may later consume a governed payload.

Buttons:

- Start broadcast display
- Stop broadcast
- Copy display link (future only)
- Show no-advice banner

---

## 28. Ambiguity Resolution screen

**Purpose:** when CV is uncertain.

Elements:

- uncertain square markers
- confidence per square/piece
- "Confirm piece"
- "Mark empty"
- "Retake image"
- "Save as draft"
- "Send for validation"

**Rule:** user correction is **draft/custody, not evidence** until governed processing.

---

## 29. Confidence UX

- confidence badges
- color-coded but calm status
- confidence ranges: **high, medium, low, unknown**
- **never hide low confidence**
- **never present an uncertain position as truth**

---

## 30. No-advice banner UX

**Must be visible in Competition and Broadcast/Display.**

Example text keys:

- `NO_ADVICE_COMPETITION_ACTIVE`
- `NO_ADVICE_BROADCAST_ACTIVE`
- `REVIEW_AVAILABLE_AFTER_GAME`

Banner should say:

- mode is display/record only
- no engine, hints, warnings, or coaching shown
- review can happen after the game

---

## 31. Suppressed-output visibility UX

- Normal users should **not see suppressed outputs as "hints"**.
- They may see a generic **"some coaching outputs are suppressed in this mode"**.
- Developer/debug may show **suppression classes without content**.
- **Suppressed content itself must not be shown.**

---

## 32. Privacy / Consent screen

Elements:

- camera permission state
- local drafts
- player labels allowed/not allowed
- biometric disabled in v1
- delete local drafts
- visibility notice
- data not exported notice

---

## 33. Local Drafts / Delete screen

Elements:

- list local drafts
- status: local only / pending validation / synced
- delete draft
- send for validation
- explain "not evidence yet"

---

## 34. Payload Debug / Developer screen

**Purpose:** developer-only future view.

Shows:

- payload family
- mode
- displayed field classes
- suppressed output classes
- creator replay refs
- federation withholding refs

**Does not show forbidden content.**

---

## 35. Sync / Creator Replay screen

**Purpose:** future display of replay/sync status.

Shows:

- last synced
- replay refs
- pending drafts
- validation state
- sync conflict state

---

## 36. Button and action catalog

| Screen | Button/action | User intent | Allowed modes | Forbidden effect | Replay/custody implication |
|--------|---------------|-------------|---------------|------------------|----------------------------|
| Mode Selection | Competition Mode | enter compete/display | all | no advice enabled | mode transition recorded |
| Mode Selection | Learning Mode | enter learning | all (gated) | no live competition advice | mode transition recorded |
| Mode Selection | Review Mode | enter post-game review | all | no evidence mutation | mode transition recorded |
| Mode Selection | Broadcast / Display Mode | enter spectator display | all | no advice | mode transition recorded |
| Mode Selection | Confirm/Cancel mode | confirm choice | all | silent advice enable | recorded |
| Camera Permission | Continue / Open settings / Cancel | grant/deny camera | all | hidden capture | consent recorded |
| Camera Setup | Start capture | begin capture | all | hidden recording | capture metadata draft |
| Camera Setup | Calibration | align board | all | raw CV exposure | draft |
| Board Capture | Start/Stop capture | control capture | all | advice from frame | capture draft |
| Board Capture | Re-detect / Calibrate | improve detection | all | treat as truth | draft |
| Board Capture | Save draft | persist local draft | all | become evidence | draft/custody only |
| Calibration | Flip orientation / Re-detect / Confirm | align board | all | OpenCV internals exposed | draft |
| Live Game | (display only) | watch live state | all | engine/TSS/Buddy in competition | display ack later |
| Competition | Start/Stop display, Save for review | display + archive | competition | advice/hints | replay of display/suppression |
| Learning | Ask safety question / CCT / Send for validation | learn safely | learning (gated) | advice before validation | replay of prompts |
| Review | Add reflection / Show concepts | review post-game | review | silent evidence mutation | reflection as draft |
| Broadcast | Start/Stop broadcast, Copy link (future) | spectator display | broadcast | advice/coaching | replay of display |
| Ambiguity | Confirm piece / Mark empty / Retake / Save draft | resolve uncertainty | all | correction as evidence | draft/custody only |
| Privacy | Delete local drafts | manage data | all | export semantic data | deletion recorded |
| Local Drafts | Delete / Send for validation | manage drafts | all | treat draft as evidence | custody only |
| Developer Debug | view payload/suppression refs | inspect | all (dev) | show forbidden content | replay refs only |
| Sync/Replay | view sync/replay | continuity status | all | mutate state | replay metadata |

---

## 37. UX state model

Conceptual UI state fields (**no code**):

- `activeMode`
- `captureState`
- `permissionState`
- `boardDetectionState`
- `pieceDetectionState`
- `clockDetectionState`
- `confidenceSummary`
- `ambiguityList`
- `noAdviceBannerVisible`
- `suppressedOutputSummary`
- `draftState`
- `syncState`
- `replayRef`
- `consentState`

---

## 38. Mode transition flow

- select target mode
- show risk/confirmation if needed
- apply ModeGate
- create a mode transition record later
- update the global mode banner
- suppress/allow fields based on mode

---

## 39. Capture-to-validation flow

- camera permission
- capture preview
- frame analysis
- draft board state
- confidence summary
- ambiguity resolution
- candidate FEN
- deterministic validation handoff
- ModeGate decision
- surface payload later
- Creator replay later

---

## 40. Board geometry UX flow

User sees:

- board outline
- square grid
- orientation
- calibration prompt if unstable
- "draft only" until validated

---

## 41. Piece recognition UX flow

User sees:

- uncertain pieces
- confidence summary
- not every raw detection
- confirmation only if needed
- **no advice in competition**

---

## 42. Clock recognition UX flow

User sees:

- time display
- confidence indicator if clock OCR uncertain
- manual correction option later
- **no time-pressure advice in competition**

---

## 43. Player/context UX flow

User sees:

- optional player labels only if consented/configured
- no hidden surveillance
- no psychology/skill/intent/mastery inference
- biometric/pulse disabled in v1

---

## 44. Ontology / KG mapping UX

- concept refs shown only in **Learning/Review after validation**.
- Android **cannot own ontology authority**.
- concepts are **explanations, not proof of mastery**.

---

## 45. thewilhelmsen.com handoff UX implication

- Android may later feed **governed live display through ChessGuide**.
- thewilhelmsen.com should show **board/moves/clock/status/mode/no-advice**.
- **no raw Android frames directly to thewilhelmsen.com**.
- **no host-side coaching**.

---

## 46. Error states and recovery UX

| Error state | User message | Allowed actions | Forbidden behavior |
|-------------|--------------|-----------------|--------------------|
| camera denied | "Camera access is needed to scan the board" | open settings, cancel | hidden capture |
| poor lighting | "Lighting is too low for reliable detection" | adjust, retry | present as truth |
| board not found | "No board detected" | reposition, calibrate | guess board |
| board unstable | "Detection is unstable" | hold still, calibrate | treat as final |
| orientation ambiguous | "Board orientation is unclear" | flip, confirm | assume orientation |
| piece confidence low | "Some pieces are uncertain" | resolve ambiguity | hide low confidence |
| clock unreadable | "Clock could not be read" | manual correction later | fabricate time |
| active game blocks learning | "Learning is limited during a live game" | confirm training, stay no-advice | enable advice |
| sync failed | "Sync failed; drafts kept locally" | retry, keep local | drop data silently |
| payload rejected | "This payload was not accepted" | review, retry | bypass ModeGate |
| local draft conflict | "Draft conflict detected" | resolve explicitly | silent overwrite |

---

## 47. Accessibility and readability

- large touch targets
- high-contrast mode banner
- non-color-only confidence cues
- readable board overlay
- voice-over labels later
- avoid fast flashing overlays
- calm haptics only later

---

## 48. Performance perception and loading states

- smooth camera preview is the priority.
- CV may lag behind preview.
- show stable summaries.
- avoid jank.
- do not update the overlay too fast.
- use "analyzing…" only when useful.
- do not show raw model churn.

---

## 49. Future acceptance-test targets

- camera permission flow
- mode selection
- no-advice banner visible
- Competition suppresses advice
- Broadcast suppresses advice
- Learning allows prompts only after validation
- Review allows post-game analysis
- ambiguity shown
- low confidence not hidden
- local draft deletion available
- no raw frames to host
- no federation semantic export
- Creator replay refs produced later
- UI remains responsive under CV load
- no CV frame directly triggers UI advice

---

## 50. Future Android Studio implementation sequence

- **Wave A** — UX HLD (this PR)
- **Wave B** — Android CV LLD / OOP / UML
- **Wave C** — Android Studio skeleton
- **Wave D** — M3 / Compose design system skeleton
- **Wave E** — CameraX preview + ImageAnalysis sandbox
- **Wave F** — Board overlay + calibration UI
- **Wave G** — Local draft state model
- **Wave H** — OpenCV board geometry prototype
- **Wave I** — Piece detection sandbox
- **Wave J** — Clock CV sandbox
- **Wave K** — ModeGate/payload stub
- **Wave L** — Creator replay stub
- **Wave M** — thewilhelmsen.com synthetic display handoff

**Android Studio code begins at Wave C only.**

---

## 51. What must not be implemented yet

- Android Studio project
- CameraX
- Compose
- M3 code
- OpenCV
- YOLO
- ML Kit
- MediaPipe
- LiteRT
- datasets
- model files
- training scripts
- API
- payload runtime
- thewilhelmsen.com integration
- Buddy/LARIS UI
- real TSS/SCC output on Android

---

## 52. Failure modes

| Failure mode | UX harm | Governance harm | Prevention |
|--------------|---------|-----------------|------------|
| UI exposes too many controls | overwhelm | accidental misuse | progressive disclosure |
| camera preview janks | frustration | abandonment | CV off UI thread |
| CV result presented as truth | misleading | semantic collapse | draft + validation |
| low confidence hidden | false certainty | wrong reality | always show confidence |
| user cannot tell mode | confusion | fair-play breach | global mode banner |
| competition advice leaks | unfair help | cheating | ModeGate + suppression |
| no-advice banner absent | ambiguity | governance breach | mandatory banner |
| advanced debugging visible to normal user | clutter | confusion | developer-only screen |
| raw frames sent to host | privacy break | export breach | governed payload only |
| Android mutates learner state | wrong state | boundary breach | read-only / drafts |
| ontology shown as mastery proof | false claim | doctrine breach | concepts ≠ mastery |
| local draft treated as evidence | false record | evidence collapse | draft/custody only |
| user cannot delete local draft | trust loss | privacy breach | delete control |
| capture continues without visibility | surveillance feel | privacy breach | visible capture state |

---

## 53. Acceptance gates for this HLD

- HLD document only
- no code
- no dependencies
- no Android Studio project
- no runtime
- no tests
- no src changes
- no thewilhelmsen.com changes
- screens defined
- buttons/actions defined
- user journeys defined
- M3 strategy included
- Compose strategy included
- UDF strategy included
- CameraX ImageAnalysis UX/performance boundary included
- no-advice UX included
- confidence/ambiguity UX included
- privacy/consent UX included
- future acceptance-test targets included
- Android Studio code timing clarified

---

## 54. Rejection criteria

Reject if:

- it adds code
- it adds Android Studio files
- it adds dependencies
- it implements UI
- it implements CV
- it omits screens/buttons
- it omits no-advice UX
- it allows Competition advice
- it allows raw frames to thewilhelmsen.com
- it lets Android own ontology authority
- it treats CV as evidence/mastery
- it activates Buddy/LARIS

---

## 55. Open questions

| ID | Question |
|----|----------|
| **ANDROID-CV-UX-OQ-1** | What is the default landing screen? |
| **ANDROID-CV-UX-OQ-2** | What is the first safe mode on launch? |
| **ANDROID-CV-UX-OQ-3** | What is the exact no-advice banner wording? |
| **ANDROID-CV-UX-OQ-4** | What is the exact camera permission wording? |
| **ANDROID-CV-UX-OQ-5** | Is Capture a separate destination from Live Game? |
| **ANDROID-CV-UX-OQ-6** | What is the calibration flow in detail? |
| **ANDROID-CV-UX-OQ-7** | How is board orientation resolved in UX? |
| **ANDROID-CV-UX-OQ-8** | How is piece ambiguity presented and resolved? |
| **ANDROID-CV-UX-OQ-9** | What is the clock OCR correction UX? |
| **ANDROID-CV-UX-OQ-10** | What are the low-confidence thresholds? |
| **ANDROID-CV-UX-OQ-11** | How does manual correction work without becoming evidence? |
| **ANDROID-CV-UX-OQ-12** | How is draft deletion confirmed? |
| **ANDROID-CV-UX-OQ-13** | Is there a strict local-only mode? |
| **ANDROID-CV-UX-OQ-14** | How is the training vs competition switch confirmed? |
| **ANDROID-CV-UX-OQ-15** | How are sync conflicts resolved in UX? |
| **ANDROID-CV-UX-OQ-16** | How visible is Creator replay to the user? |
| **ANDROID-CV-UX-OQ-17** | Who can access the payload debug screen? |
| **ANDROID-CV-UX-OQ-18** | Who can access the developer sandbox? |
| **ANDROID-CV-UX-OQ-19** | What is the thewilhelmsen.com display route UX? |
| **ANDROID-CV-UX-OQ-20** | What accessibility standards apply (WCAG-like)? |
| **ANDROID-CV-UX-OQ-21** | What haptics policy applies? |
| **ANDROID-CV-UX-OQ-22** | How are landscape/portrait handled? |
| **ANDROID-CV-UX-OQ-23** | Is tablet support in scope? |
| **ANDROID-CV-UX-OQ-24** | How is low-end device support handled? |
| **ANDROID-CV-UX-OQ-25** | How are thermal warnings surfaced? |
| **ANDROID-CV-UX-OQ-26** | How are battery warnings surfaced? |
| **ANDROID-CV-UX-OQ-27** | What is the annotation capture consent UX? |
| **ANDROID-CV-UX-OQ-28** | What screenshot/export restrictions apply? |
| **ANDROID-CV-UX-OQ-29** | What localization is required? |
| **ANDROID-CV-UX-OQ-30** | What is the M3 dynamic color policy? |
| **ANDROID-CV-UX-OQ-31** | What is the content of the first Android Studio wave? |

---

## 56. Vertical Continuity from Philosophy to Runtime

This HLD makes the vertical continuity chain **explicit and non-optional**. No screen, button, state, mode transition, CV result, confidence signal, ambiguity marker, payload handoff, replay reference, or no-advice banner is an isolated UI element — each must be traceable through the full chain:

```text
Philosophy / learning theory
→ Governance / ADR
→ Strategy / review
→ HLD
→ future LLD / OOP / UML
→ immutable state transitions
→ runtime implementation
→ ChessBuddy / ChessGuide shared reality
→ Android / web / thewilhelmsen.com surface channels
→ Creator real-time replay
→ 100-year semantic continuity
→ federation boundary
```

- **The philosophy:** CV can **observe**, but observation **is not learning**. A captured board, a detected piece, or a read clock is not evidence, not mastery, and not learner rationale.
- **The governance:** **No screen or button may create evidence, claim, mastery, learner rationale, Buddy authority, or federation export by implication.** ADR-001–008 boundaries hold inside the UX, not only in the backend.
- **The HLD:** Each user-facing flow must **express governed boundaries** (mode, no-advice, draft-only, suppression, consent) as first-class UX, not hidden backend rules.
- **The future LLD/OOP/UML:** Every HLD concept must be **lowerable into future classes, interfaces, value objects, state transitions, and UML** (see §57–§58).
- **The immutable state layer:** Every meaningful user action must later become an **append-only, replayable state transition**, never silent mutation (see §58).
- **The shared reality layer:** ChessBuddy and ChessGuide must see the **same governed reality**, not separate UI-local interpretations (see §59).
- **The surface layer:** Android, web, Chrome, and thewilhelmsen.com must consume **governed surface payloads**, never raw CV truth or local doctrine (see §59).
- **The Creator layer:** Creator must be able to replay **why a screen appeared, what mode was active, what the user saw, what was suppressed, what was uncertain, and which governance version controlled it** (see §60).
- **The 100-year continuity layer:** Payloads, mode decisions, user actions, and suppressed outputs must remain **interpretable far beyond the current runtime** (see §60).
- **The federation boundary:** **No semantic/CV/advice/learning field becomes federation export**; only a separately governed lossy ObservationRecord remains eligible.

| Chain layer | Android CV UX expression | Continuity guarantee |
|-------------|--------------------------|----------------------|
| Philosophy | observation framed as draft, never proof | UX never implies learning from capture |
| Governance / ADR | no-advice, no mastery, no evidence-by-UI | each field traces to an ADR |
| Strategy / review | mode-first navigation | traces to ANDROID-CV-FR/CV-MODE-STRAT |
| HLD | screens map to surfaces/modes | this document |
| LLD / OOP / UML | screen models + adapters (§57) | every screen lowerable |
| Immutable state | append-only transitions (§58) | corrections are new drafts |
| Runtime | deferred until gates | no runtime now |
| Shared reality | ChessGuide owns reality (§59) | no UI-local truth |
| Surface channels | governed payloads only | no raw CV to surfaces |
| Creator replay | replay refs per action (§60) | full replayability |
| 100-year continuity | versioned, interpretable records | survives migration |
| Federation boundary | withholding in UX (§59–§60) | no semantic export |

---

## 57. HLD-to-LLD / OOP / UML Descent Preview

This section previews how the UX HLD will later be lowered into LLD/OOP/UML. **These are conceptual future classes/interfaces only — no code is implemented in this PR.**

For each: **responsibility · forbidden responsibilities · key inputs · key outputs · state transitions · future interface boundary · HLD screen/flow supported · governance doctrine preserved.**

### `AndroidCvUxCoordinator`
- **Responsibility:** orchestrate top-level UX flow and route between screens by active mode.
- **Forbidden:** generating advice, certifying state, mutating learner state.
- **Inputs:** active mode, navigation intents, UX state.
- **Outputs:** navigation/state updates.
- **State transitions:** `ModeSelected`, routes to capture/review/learning flows.
- **Future interface boundary:** `UxCoordinator` interface over `core:mode`.
- **Supports:** Global navigation (§17), Mode Selection (§18).
- **Preserves:** mode-first governance, no-advice-by-default.

### `ModeSelectionScreenModel`
- **Responsibility:** present/confirm mode; require confirmation for risky transitions.
- **Forbidden:** silently enabling advice; deciding mode without ModeGate.
- **Inputs:** current mode, user selection.
- **Outputs:** mode transition request.
- **State transitions:** `ModeSelected`, `ModeGateDecisionApplied`.
- **Future interface boundary:** observes `ModeGateUxAdapter`.
- **Supports:** Mode Selection screen (§18), Mode transition flow (§38).
- **Preserves:** CV-MODE-STRAT mode gating.

### `CameraPermissionScreenModel`
- **Responsibility:** explain and obtain camera consent transparently.
- **Forbidden:** hidden capture, implying biometric capture.
- **Inputs:** permission state, consent action.
- **Outputs:** permission/consent result.
- **State transitions:** `CameraPermissionRequested`, `CameraPermissionGranted`, `CameraPermissionDenied`.
- **Future interface boundary:** `core:privacy` consent port.
- **Supports:** Camera Permission screen (§19).
- **Preserves:** privacy/consent boundary (ADR + ANDROID-STRAT).

### `CameraCaptureScreenModel`
- **Responsibility:** drive minimalist capture UI and progressive disclosure.
- **Forbidden:** advice from frames; treating drafts as truth.
- **Inputs:** capture state, detection summaries.
- **Outputs:** capture control, draft state.
- **State transitions:** `CaptureStarted`, `FrameSampled`, `CaptureStopped`.
- **Future interface boundary:** `core:cv` analyzer port (off-UI-thread).
- **Supports:** Board Capture (§21), Capture-to-validation (§39).
- **Preserves:** capture ≠ evidence; ModeGate ahead of output.

### `CalibrationScreenModel`
- **Responsibility:** help align board/orientation without exposing CV internals.
- **Forbidden:** presenting geometry as final truth.
- **Inputs:** geometry draft, confidence.
- **Outputs:** calibration confirmation draft.
- **State transitions:** `BoardGeometryDrafted`, `BoardCalibrationConfirmed`.
- **Future interface boundary:** `core:cv` geometry port.
- **Supports:** Calibration screen (§22), Board geometry flow (§40).
- **Preserves:** draft-until-validated.

### `AmbiguityResolutionScreenModel`
- **Responsibility:** present uncertainty and capture user corrections as drafts.
- **Forbidden:** turning corrections into evidence.
- **Inputs:** ambiguity list, confidence per square/piece.
- **Outputs:** resolved draft/custody record.
- **State transitions:** `AmbiguityDetected`, `AmbiguityResolvedByUser`, `LocalDraftSaved`.
- **Future interface boundary:** `core:cv` + `data:local-drafts`.
- **Supports:** Ambiguity Resolution (§28), Confidence UX (§29).
- **Preserves:** correction = custody, not evidence.

### `NoAdviceBannerViewModel`
- **Responsibility:** ensure no-advice banner visible in Competition/Broadcast.
- **Forbidden:** hiding banner; rendering advice.
- **Inputs:** active mode, payload-family.
- **Outputs:** banner visibility/text key.
- **State transitions:** `NoAdviceBannerDisplayed`.
- **Future interface boundary:** `core:mode` + `core:designsystem`.
- **Supports:** No-advice banner UX (§30).
- **Preserves:** ADR-007 / fair-play.

### `ConfidencePresentationModel`
- **Responsibility:** map confidence to calm, honest badges.
- **Forbidden:** hiding low confidence; presenting uncertain as truth.
- **Inputs:** confidence summary.
- **Outputs:** confidence presentation state.
- **State transitions:** derived from detection drafts.
- **Future interface boundary:** `core:cv` summary port.
- **Supports:** Confidence UX (§29).
- **Preserves:** honesty/draft semantics.

### `SuppressedOutputPresentationModel`
- **Responsibility:** show generic suppression notice; expose classes only in debug.
- **Forbidden:** showing suppressed content as hints.
- **Inputs:** suppressed-output summary.
- **Outputs:** suppression notice state.
- **State transitions:** `OutputSuppressed`.
- **Future interface boundary:** `core:payload` suppression port.
- **Supports:** Suppressed-output visibility UX (§31).
- **Preserves:** suppression-is-recorded-not-shown.

### `AndroidModeTransitionController`
- **Responsibility:** apply ModeGate to transitions; enforce fail-closed.
- **Forbidden:** local mode authority; advice enablement.
- **Inputs:** transition request, active game state.
- **Outputs:** applied/denied transition.
- **State transitions:** `ModeGateDecisionApplied`.
- **Future interface boundary:** `ModeGateUxAdapter`.
- **Supports:** Mode transition flow (§38).
- **Preserves:** ChessGuide owns mode.

### `AndroidCaptureFlowController`
- **Responsibility:** coordinate capture→draft→validation handoff.
- **Forbidden:** semantic decisions; advice.
- **Inputs:** capture/draft state.
- **Outputs:** validation request.
- **State transitions:** `ValidationRequested`, `ValidationResultReceived`.
- **Future interface boundary:** `integration:chessguide-api`.
- **Supports:** Capture-to-validation flow (§39).
- **Preserves:** deterministic validation gate.

### `AndroidReplayIntentBuilder`
- **Responsibility:** assemble Creator replay metadata for each action.
- **Forbidden:** dropping replay refs; embedding forbidden content.
- **Inputs:** action context, mode, refs.
- **Outputs:** replay intent record.
- **State transitions:** `CreatorReplayLinked`.
- **Future interface boundary:** `core:replay`.
- **Supports:** Creator replay (§35, §60).
- **Preserves:** Creator continuity.

### `AndroidSurfacePayloadClient`
- **Responsibility:** request/receive governed surface payloads.
- **Forbidden:** inventing payload semantics; raw CV emission.
- **Inputs:** session/mode context.
- **Outputs:** governed payload references.
- **State transitions:** `SurfacePayloadPrepared`, `DisplayAcknowledged`.
- **Future interface boundary:** `integration:chessguide-api` + `core:payload`.
- **Supports:** Surface Payload integration (§38 of FR; §45 handoff).
- **Preserves:** Surface Payload Contract.

### `AndroidPrivacyConsentController`
- **Responsibility:** manage consent, labels, biometric-off, deletion.
- **Forbidden:** silent collection; biometric in v1.
- **Inputs:** consent actions.
- **Outputs:** consent state.
- **State transitions:** consent updates, `LocalDraftDeleted`.
- **Future interface boundary:** `core:privacy`.
- **Supports:** Privacy/Consent (§32), Local Drafts/Delete (§33).
- **Preserves:** privacy boundary.

### `AndroidLocalDraftController`
- **Responsibility:** manage local drafts as custody, not evidence.
- **Forbidden:** promoting drafts to evidence; silent overwrite.
- **Inputs:** draft actions.
- **Outputs:** draft state.
- **State transitions:** `LocalDraftSaved`, `LocalDraftDeleted`.
- **Future interface boundary:** `data:local-drafts`.
- **Supports:** Local Drafts/Delete (§33).
- **Preserves:** immutable/append-only drafts.

### `AndroidUxStateReducer`
- **Responsibility:** reduce actions+results into immutable UI state (UDF).
- **Forbidden:** per-raw-frame recomposition; mutation of source events.
- **Inputs:** actions, throttled summaries.
- **Outputs:** UI state snapshot.
- **State transitions:** derived snapshots only.
- **Future interface boundary:** `StateFlow`/MVI reducer port.
- **Supports:** UDF strategy (§14), UX state model (§37).
- **Preserves:** stable, explicit state.

### `CvResultPresentationMapper`
- **Responsibility:** map CV results to semantic, throttled UI summaries.
- **Forbidden:** exposing raw model churn; advice.
- **Inputs:** detection drafts.
- **Outputs:** presentation summaries.
- **State transitions:** `BoardGeometryDrafted`, `PieceDetectionDrafted`, `ClockDetectionDrafted`.
- **Future interface boundary:** `core:cv` mapper port.
- **Supports:** Piece/Clock/Board UX flows (§40–§42).
- **Preserves:** draft semantics.

### `ModeGateUxAdapter`
- **Responsibility:** UX-side adapter to governed ModeGate.
- **Forbidden:** local gate decisions.
- **Inputs:** requested outputs, mode.
- **Outputs:** allowed/suppressed sets.
- **State transitions:** `ModeGateDecisionApplied`, `OutputSuppressed`.
- **Future interface boundary:** `core:mode`.
- **Supports:** ModeGate integration (§37 of FR; §38).
- **Preserves:** mode gating.

### `CreatorReplayUxAdapter`
- **Responsibility:** surface replay refs/status to UX.
- **Forbidden:** mutating replay records.
- **Inputs:** replay refs.
- **Outputs:** replay status state.
- **State transitions:** `CreatorReplayLinked`.
- **Future interface boundary:** `core:replay`.
- **Supports:** Sync/Creator Replay (§35), §60.
- **Preserves:** replay custody.

### `FederationWithholdingUxAdapter`
- **Responsibility:** surface "data not exported" notices.
- **Forbidden:** enabling semantic export.
- **Inputs:** withholding refs.
- **Outputs:** withholding notice state.
- **State transitions:** `FederationWithholdingRecorded`.
- **Future interface boundary:** `core:payload`/`integration`.
- **Supports:** federation boundary (§59), Review export notice (§26).
- **Preserves:** federation withholding.

### `TheWilhelmsenSurfaceHandoffAdapter`
- **Responsibility:** prepare governed payload handoff to thewilhelmsen.com.
- **Forbidden:** raw CV frames, host-side coaching, host mode decisions.
- **Inputs:** governed payload references.
- **Outputs:** handoff intent (future).
- **State transitions:** `SurfacePayloadPrepared`, `DisplayAcknowledged`.
- **Future interface boundary:** `integration:thewilhelmsen-surface`.
- **Supports:** thewilhelmsen.com handoff UX (§45).
- **Preserves:** TW-INT-HLD boundaries.

---

## 58. Immutable State Transition Preview

Conceptual immutable state transitions for future LLD/runtime (**no code**). Each is an **append-only event**; corrections create new events, never silent overwrite.

For each: **trigger · actor · surface · active mode · precondition · postcondition · immutable payload/custody implication · Creator replay requirement · forbidden side effects.**

| Transition | Trigger | Actor | Surface | Active mode | Precondition | Postcondition | Immutable/custody implication | Creator replay req. | Forbidden side effects |
|------------|---------|-------|---------|-------------|--------------|---------------|-------------------------------|---------------------|------------------------|
| **ModeSelected** | user selects mode | user | Android | any | app running | active mode set | mode record appended | record mode + actor | enabling advice silently |
| **CameraPermissionRequested** | user opens capture | user | Android | any | mode set | permission prompt shown | consent attempt logged | record request | hidden capture |
| **CameraPermissionGranted** | user grants | user | Android | any | requested | camera usable | consent appended | record grant | implying biometric |
| **CameraPermissionDenied** | user denies | user | Android | any | requested | capture blocked | denial appended | record denial | capturing anyway |
| **CaptureStarted** | user starts capture | user | Android | any | permission granted | capture active+visible | capture session opened | record start + mode | hidden recording |
| **CaptureStopped** | user/stop | user/system | Android | any | capture active | capture ended | session closed | record stop | continuing capture |
| **FrameSampled** | analyzer samples | system | Android | any | capture active | frame draft available | frame ref (no raw export) | record frame ref | exporting raw frame |
| **BoardGeometryDrafted** | geometry detected | system | Android | any | frame sampled | geometry draft | draft only | record geometry draft | treating as truth |
| **BoardCalibrationConfirmed** | user confirms align | user | Android | any | geometry draft | calibration draft | draft custody | record calibration | final truth claim |
| **PieceDetectionDrafted** | pieces detected | system | Android | any | geometry draft | piece draft + confidence | draft only | record draft+confidence | advice/evidence |
| **ClockDetectionDrafted** | clock read | system | Android | any | frame sampled | clock draft + confidence | draft only | record draft | time-pressure advice |
| **AmbiguityDetected** | low confidence | system | Android | any | detection draft | ambiguity marked | ambiguity recorded | record ambiguity | hiding uncertainty |
| **AmbiguityResolvedByUser** | user corrects | user | Android | any | ambiguity detected | corrected draft | custody, not evidence | record correction | correction as evidence |
| **LocalDraftSaved** | user saves | user | Android | any | draft exists | draft persisted locally | append-only draft | record save | becoming evidence |
| **ValidationRequested** | user/system sends | user/system | Android→ChessGuide | any | candidate FEN draft | validation pending | request recorded | record request | local certification |
| **ValidationResultReceived** | governed runtime responds | system | ChessGuide→Android | any | validation requested | validated/invalid state | result is governed truth | record result+version | local override |
| **ModeGateDecisionApplied** | gate evaluates | system | ChessGuide | any | mode + outputs known | allowed/suppressed sets | decision recorded | record decision+policy | UX bypass of gate |
| **NoAdviceBannerDisplayed** | competition/broadcast active | system | Android/web/TW | competition/broadcast | mode set | banner visible | display recorded | record banner | omitting banner |
| **OutputSuppressed** | gate suppresses | system | any | competition/broadcast (mostly) | gate decision | output withheld | suppression recorded | record suppression+reason | showing suppressed content |
| **SurfacePayloadPrepared** | governed runtime builds payload | system | ChessGuide | any | gate decision | payload ready | payload recorded | record payload+version | embedding forbidden fields |
| **DisplayAcknowledged** | surface confirms shown | system | Android/web/TW | any | payload displayed | ack recorded | ack appended | record ack | unverified suppression |
| **CreatorReplayLinked** | replay assembled | system | ChessGuide | any | events exist | replay link created | replay custody | self-record | flattening to prose |
| **FederationWithholdingRecorded** | withholding computed | system | ChessGuide | any | payload prepared | withholding recorded | withholding custody | record withholding | semantic export |
| **LocalDraftDeleted** | user deletes | user | Android | any | draft exists | draft removed locally | deletion recorded (tombstone) | record deletion | silent data retention |

---

## 59. Shared Reality: ChessBuddy / ChessGuide / Surfaces

- **Android must not create a separate local reality.** UI state is a view over governed state, not an independent truth.
- **ChessBuddy must not infer from Android UI state** unless that state has passed **governed ChessGuide runtime boundaries**.
- **ChessGuide owns governed reality.**
- **Android shows or requests state; it does not certify state.**
- **web, Android, Chrome, and thewilhelmsen.com must use compatible surface channels** (the Surface Payload Contract), not bespoke per-surface truths.
- **thewilhelmsen.com can display governed payloads only**; it **cannot receive raw CV truth, local advice, or unfiltered semantic state**, and it cannot decide mode.
- **Buddy is still inactive** unless activated through **BLAP gates**.
- **LARIS remains inactive.**

---

## 60. Creator Continuity: Real-time to 100-year Replay

Creator must later be able to replay:

- which user opened which screen
- which mode was active
- whether the camera was active
- whether capture was visible to the user
- what frame/candidate was sampled
- what confidence/ambiguity existed
- what the user corrected
- what was still draft
- what validation was requested
- what ModeGate allowed
- what ModeGate suppressed
- why a no-advice banner appeared
- what payload was prepared
- what was shown to Android
- what would be shown to web/thewilhelmsen.com
- what was withheld from federation
- what policy/schema/version controlled each decision

These records must remain **interpretable far beyond the current runtime (100-year semantic continuity)**: versioned references, immutable events, and resolvable refs survive renames, deprecations, schema changes, and runtime migrations.

---

## 61. HLD Acceptance Readiness vs Runtime Acceptance

**PR #35 does not accept runtime behavior.** It only makes future acceptance possible by defining:

- user-facing screens
- buttons
- interaction flows
- mode states
- warning/suppression UX
- confidence/ambiguity UX
- state transition candidates
- future class/interface candidates
- replay and custody expectations

**Runtime acceptance must wait until:**

1. Android CV UX HLD is accepted.
2. Android CV LLD / OOP / UML exists.
3. Immutable state transition model is specified.
4. Android Studio skeleton exists.
5. CameraX sandbox exists.
6. CV modules are implemented behind interfaces.
7. ModeGate/payload/replay behavior is testable.
8. Human-facing acceptance tests can run against real screens.

---

## 62. Recommendation

- **Accept ANDROID-CV-UX-HLD-001 as Draft HLD.**
- **Do not implement Android Studio code yet.**
- Next PR should be **Android CV LLD / OOP / UML v1.0**.
- Android Studio implementation should begin **only after UX HLD and LLD/OOP/UML are accepted**.
- First implementation should be a **skeleton app with M3/Compose shell and CameraX sandbox only**, no advice, no engine, no TSS, no Buddy, no model output.

---

## 63. Governance boundary statement

**ANDROID-CV-UX-HLD-001 does not modify** runtime, tests, federation export, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, production schemas, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, API implementation, Gradle files, Kotlin files, Java files, Compose files, Android Studio files, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **human-readable Android CV UX / Human Interaction Flow HLD only**.
