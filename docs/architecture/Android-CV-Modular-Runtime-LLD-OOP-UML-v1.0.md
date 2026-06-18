# Android CV Modular Runtime LLD / OOP / UML v1.0

| Field | Value |
|-------|-------|
| **Document ID** | ANDROID-CV-LLD-OOP-UML-001 |
| **Title** | Android CV Modular Runtime LLD / OOP / UML v1.0 |
| **Version** | 1.0 |
| **Status** | Draft LLD / OOP / UML |
| **Date** | 2026-06-18 |
| **Scope** | Android CV modular runtime design, OOP model, interfaces, composition, immutable state transitions, UML, module boundaries, and Android Studio implementation readiness |
| **Depends on** | [ANDROID-CV-UX-HLD-001](./Android-CV-UX-Human-Interaction-Flow-HLD-v1.0.md), [ANDROID-CV-FR-001](./Android-CV-Framework-Modular-Architecture-Review-v1.0.md), [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [CV-MODE-LLD-001](./CV-Mode-Gated-Surfaces-LLD-v1.0.md), [SPC-HLD-ADR-001](./Surface-Payload-Contract-HLD-ADR-v1.0.md), [SPC-SCHEMA-DRAFT-001](./Surface-Payload-Contract-Schema-Draft-v1.0.md), [TW-INT-HLD-001](./TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), ADR-001 through ADR-008, [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **UML artifact** | [Android-CV-Modular-Runtime-UML-v1.0.puml](./uml/Android-CV-Modular-Runtime-UML-v1.0.puml) |
| **Supersedes** | — |
| **Superseded by** | — |

> **Mandatory framing:** This is the **final architecture bridge before Android Studio code**. The next implementation PR after acceptance should be **Android Studio Skeleton / Modular App Shell v1.0 (PR #37)**. This LLD exists to **prevent spaghetti architecture by fixing module boundaries before code**. It preserves the chain: philosophy → governance → HLD → LLD/OOP/UML → immutable state → runtime → shared reality → Android/web/thewilhelmsen.com channels → Creator real-time to 100-year replay → federation boundary.

---

## 1. Status

- **ANDROID-CV-LLD-OOP-UML-001 is a Draft LLD / OOP / UML.**
- It creates **no Android Studio project**.
- It creates **no Android runtime**.
- It creates **no Gradle/Kotlin/Java/Compose files**.
- It creates **no implementation**.
- It creates **no dependencies**.
- It creates **no tests**.
- It modifies **no `src/`**.
- It modifies **no thewilhelmsen.com**.
- It activates **neither Buddy nor LARIS**.
- It creates **one LLD markdown and one PlantUML artifact only**.

---

## 2. Executive summary

- PR #36 lowers the **Android CV UX HLD into implementation-ready LLD/OOP/UML**.
- It defines **future modules, interfaces, classes, value objects, immutable events, reducer state, adapter ports, sequence flows, and UML**.
- It is designed to make **PR #37 a clean Android Studio skeleton** instead of another planning PR.
- It preserves **full vertical continuity and fair-play/no-advice governance**.

---

## 3. Why this LLD exists now

- We are **done with broad strategy** for this lane.
- The project now needs **implementable structure**.
- Without LLD/OOP/UML, Android Studio code would **guess module boundaries**.
- This PR gives Cursor/Android Studio **enough design to create code next**.
- **The next PR must be code.**

---

## 4. Vertical Architecture Continuity Gate

| Layer | LLD/OOP implication | Android module/class implication | Creator/federation implication |
|-------|---------------------|----------------------------------|--------------------------------|
| Philosophy / learning theory | CV output modeled as `*Draft` value objects | drafts never typed as evidence | replay shows draft-ness; no learning export |
| Governance / ADR | forbidden responsibilities per class | ADR boundaries encoded in module rules | each suppression recorded; no semantic export |
| Strategy / review | lanes map to modules | `:core:cv` ports per lane | n/a |
| HLD | screen models mirror HLD screens | `:feature:*` screen models | replay of what screen showed |
| LLD / OOP / UML | this document + UML | classes/interfaces/events | replayable event model |
| Immutable state transitions | append-only `AndroidCvEvent` | reducer is pure | every event has replay requirement |
| Runtime implementation | deferred to PR #37+ | adapters are future-only | no runtime now |
| ChessBuddy / ChessGuide shared reality | Android holds drafts, not truth | `ChessGuide*Api` owns reality | Buddy gated; no UI-local truth |
| Android / web / thewilhelmsen.com channels | `SurfacePayloadClient` ports | governed payloads only | no raw CV to channels |
| Creator real-time to 100-year replay | `CreatorReplayClient` + `ReplayIntentBuilder` | replay intent per event | full replay custody |
| Federation boundary | `FederationWithholdingPresenter` | withholding refs surfaced | no CV/semantic/advice/learning export |

**No future class, interface, event, screen model, adapter, or payload may bypass this chain.**

---

## 5. Design doctrine

- **CV output is draft, not truth.**
- **Draft is not evidence.**
- **Evidence is not claim.**
- **Claim is not mastery.**
- **Android is not authority.**
- Android can **request/show/hold local drafts**.
- **ChessGuide owns governed reality.**
- **Buddy is inactive.**
- **LARIS is inactive.**
- **ModeGate decides what may be shown.**
- **Creator must replay why every visible/suppressed field existed.**
- **Federation receives no semantic/CV/advice/learning fields.**

---

## 6. Runtime non-goals

- no CameraX code
- no OpenCV code
- no ML code
- no YOLO
- no TSS runtime
- no Buddy runtime
- no web runtime
- no payload runtime
- no API runtime
- no tests
- no Android Studio code

---

## 7. Future Android Studio module map

| Module | Responsibility | Forbidden responsibility | Allowed dependencies | Forbidden dependencies | First impl. wave |
|--------|----------------|--------------------------|----------------------|------------------------|------------------|
| `:app` | compose modules, navigation host | domain truth, CV, advice | all core/feature | framework CV directly | Wave C |
| `:core:model` | pure value objects/events | Android runtime, advice | none | Android SDK, CV libs | Wave C |
| `:core:mode` | mode types + ModeGate port | final gate policy | `:core:model` | CV libs | Wave C |
| `:core:cv` | CV interfaces only | framework impl, advice | `:core:model` | CameraX/OpenCV impl | Wave E |
| `:core:payload` | payload mapping ports | inventing semantics | `:core:model`,`:core:mode` | CV libs | Wave H |
| `:core:replay` | replay intent ports | mutating records | `:core:model` | CV libs | Wave I |
| `:core:privacy` | consent ports | hidden capture | `:core:model` | CV libs | Wave C |
| `:core:designsystem` | M3 theme/components | business logic | none (UI libs only) | domain | Wave D |
| `:core:network` | transport abstractions | certifying state | `:core:model` | CV libs | Wave H |
| `:core:validation` | validation port | local certification | `:core:model` | CV libs | Wave G |
| `:feature:mode-selection` | mode UX | gate decision | core modules | framework CV | Wave C |
| `:feature:camera-setup` | pre-capture UX | capture analysis | core modules | framework CV | Wave C |
| `:feature:scanner` | capture UX | advice | `:core:cv`,`:core:mode` | CV impl directly | Wave E |
| `:feature:calibration` | alignment UX | final truth | `:core:cv` | CV impl directly | Wave F |
| `:feature:competition` | no-advice display | advice | `:core:mode`,`:core:payload` | CV impl | Wave H |
| `:feature:learning` | gated learning UX | advice before validation | core modules | CV impl | later |
| `:feature:review` | post-game review UX | evidence mutation | core modules | CV impl | later |
| `:feature:broadcast` | spectator display | advice | `:core:mode`,`:core:payload` | CV impl | later |
| `:feature:ambiguity` | ambiguity UX | correction-as-evidence | `:core:cv` | CV impl | Wave F |
| `:feature:privacy` | privacy UX | silent collection | `:core:privacy` | CV impl | Wave C |
| `:feature:developer-debug` | debug views | show forbidden content | core modules | production exposure | later |
| `:data:local-drafts` | draft persistence | promote to evidence | `:core:model` | ModeGate decisions | Wave G |
| `:data:sync` | sync abstractions | mode decisions | `:core:model`,`:core:network` | gate authority | later |
| `:integration:chessguide-api` | ChessGuide calls | certifying locally | `:core:model`,`:core:network` | CV impl | Wave H |
| `:integration:thewilhelmsen-surface` | governed handoff | raw CV/coaching | `:core:payload` | raw frames | Wave M |

---

## 8. Module dependency rules

- feature modules **may depend on core modules**.
- feature modules **may not depend directly on framework implementations**.
- `:core:model` has **no dependencies on Android runtime**.
- `:core:cv` **defines interfaces only**.
- framework adapters **live behind `:core:cv` ports**.
- data modules **may not decide ModeGate**.
- integration modules **may not certify learner state**.
- `:app` **composes modules only**.
- **no module may emit advice in Competition/Broadcast**.
- **no module may export semantic/CV fields to federation**.

---

## 9. Package / namespace proposal

Conceptual future package names only:

- `no.rw.chessguide.android.app`
- `no.rw.chessguide.android.core.model`
- `no.rw.chessguide.android.core.mode`
- `no.rw.chessguide.android.core.cv`
- `no.rw.chessguide.android.core.payload`
- `no.rw.chessguide.android.core.replay`
- `no.rw.chessguide.android.core.privacy`
- `no.rw.chessguide.android.core.validation`
- `no.rw.chessguide.android.feature.scanner`
- `no.rw.chessguide.android.feature.calibration`
- `no.rw.chessguide.android.feature.review`
- `no.rw.chessguide.android.feature.learning`
- `no.rw.chessguide.android.feature.competition`
- `no.rw.chessguide.android.integration.chessguide`
- `no.rw.chessguide.android.integration.thewilhelmsen`

---

## 10. Core domain value objects

For each: **purpose · key fields · invariant · forbidden interpretation.**

| Value object | Purpose | Key fields | Invariant | Forbidden interpretation |
|--------------|---------|------------|-----------|--------------------------|
| `SessionId` | identify session | id | stable, opaque | not learner identity proof |
| `SurfaceId` | identify surface | id, type | non-authoritative | not authority |
| `DeviceId` | identify device | id | opaque | not biometric/person id |
| `ModeId` | active mode ref | mode enum | explicit | not implicit default |
| `CaptureSessionId` | capture session | id | tied to session | not evidence |
| `FrameRef` | reference a frame | id, timestamp | no raw pixels | not exportable raw frame |
| `FrameTimestamp` | frame time | epochMs | monotonic-ish | not clock truth |
| `BoardGeometryDraft` | board geometry | grid, orientation, confidence | draft only | not final truth |
| `BoardOrientation` | side orientation | whiteSide | draft | not certified |
| `BoardGrid` | 64-square mapping | squares[] | 64 cells | not validated position |
| `SquareCoordinate` | square coord | file, rank | within board | not occupancy truth |
| `PieceDetectionDraft` | detected pieces | candidates[], confidence | draft | not evidence |
| `PieceCandidate` | a detected piece | square, type?, color?, conf | draft | not certified piece |
| `PieceTypeCandidate` | type guess | type, conf | draft | not truth |
| `PieceColorCandidate` | color guess | color, conf | draft | not truth |
| `ClockDetectionDraft` | clock read | times, activeSide?, conf | draft | not time truth |
| `ClockTimeCandidate` | a time read | side, value, conf | draft | not advice trigger |
| `ContextDetectionDraft` | turn/presence | turn?, presence?, conf | consent-bound | not surveillance |
| `CandidateFenDraft` | candidate FEN | fen, conf | draft | not validated FEN |
| `ConfidenceScore` | confidence | value 0..1, band | bounded | not certainty |
| `AmbiguityMarker` | uncertainty | target, type, conf | visible | not hidden |
| `LocalDraftId` | draft id | id | local | not evidence id |
| `ValidationRequestId` | validation req | id | tied to draft | not result |
| `ValidationResultRef` | validation result | ref, status, version | governed | not local override |
| `ModeGateDecisionRef` | gate decision | ref, policyVersion | governed | not local policy |
| `SurfacePayloadRef` | payload ref | ref, contractVersion | governed | not raw export |
| `CreatorReplayRef` | replay ref | ref, policyVersion | required | not droppable |
| `FederationWithholdingRef` | withholding ref | ref | required | not export enabler |
| `ConsentStateSnapshot` | consent at time | state, scopes | immutable snapshot | not implied consent |

---

## 11. Core enums

For each: **values · where used · forbidden misuse.**

| Enum | Values | Where used | Forbidden misuse |
|------|--------|------------|------------------|
| `AndroidSurfaceMode` | COMPETITION, LEARNING, REVIEW, BROADCAST_DISPLAY | mode, screens, gate | implicit/default mode |
| `CaptureState` | IDLE, REQUESTING, ACTIVE, STOPPED, ERROR | scanner | hidden capture |
| `PermissionState` | UNKNOWN, GRANTED, DENIED, PERMANENTLY_DENIED | permission | capture when denied |
| `CalibrationState` | NONE, IN_PROGRESS, CONFIRMED, UNSTABLE | calibration | treat as final truth |
| `DetectionConfidenceBand` | HIGH, MEDIUM, LOW, UNKNOWN | confidence UX | hide LOW/UNKNOWN |
| `AmbiguityType` | SQUARE, PIECE, COLOR, ORIENTATION, CLOCK | ambiguity | suppress silently |
| `DraftStatus` | LOCAL_ONLY, PENDING_VALIDATION, SYNCED, DELETED | drafts | draft as evidence |
| `ValidationStatus` | NONE, REQUESTED, VALID, INVALID, AMBIGUOUS | validation | local certification |
| `SuppressedOutputClass` | ENGINE_EVAL, ENGINE_BEST_MOVE, ENGINE_LINE, CANDIDATE_MOVE, TSS_WARNING, CCT_HINT, BUDDY_EXPLANATION, MODEL_OUTPUT, LEARNING_FRONTIER, KG_TEACHING_CONTENT, LEARNER_STATE_CLAIM, MASTERY_CLAIM, BIOMETRIC_CONTEXT, RAW_CV_FRAME, FEDERATION_SEMANTIC_EXPORT | suppression | show content |
| `DisplayFieldClass` | BOARD_STATE, MOVE_LIST, CURRENT_TURN, CLOCK_STATE, PLAYER_LABELS, GAME_STATUS, MODE_LABEL, NO_ADVICE_BANNER, REVIEW_AVAILABLE, LEARNING_PROMPT, TSS_SUMMARY, KG_CONCEPT_REFS, LEARNING_FRONTIER_HINT, BUDDY_EXPLANATION, ENGINE_REFERENCE | display | arbitrary strings |
| `ConsentState` | GRANTED, DENIED, PENDING, NOT_APPLICABLE | privacy | implied consent |
| `RetentionClass` | EPHEMERAL, SESSION, REVIEW_RETAINED, CREATOR_CUSTODY | drafts/custody | silent retention |
| `SurfaceChannel` | ANDROID, WEB_CHESSGUIDE, WEB_THEWILHELMSEN, CHROME_EXTENSION, ADMIN_DEMO | payload routing | raw CV channel |
| `ReplayVisibility` | USER, DEVELOPER, INTERNAL | replay UX | expose forbidden content |

---

## 12. Immutable event model

All events are **append-only**; corrections create **new events**, never silent overwrite.

For each: **trigger · actor · surface · active mode · required payload · precondition · postcondition · Creator replay requirement · forbidden side effects.**

| Event | Trigger | Actor | Surface | Mode | Required payload | Precondition | Postcondition | Replay req. | Forbidden side effects |
|-------|---------|-------|---------|------|------------------|--------------|---------------|-------------|------------------------|
| `ModeSelected` | mode chosen | user | Android | any | modeId | app running | active mode set | record mode+actor | silent advice enable |
| `CameraPermissionRequested` | open capture | user | Android | any | — | mode set | prompt shown | record request | hidden capture |
| `CameraPermissionGranted` | grant | user | Android | any | permission | requested | camera usable | record grant | imply biometric |
| `CameraPermissionDenied` | deny | user | Android | any | permission | requested | capture blocked | record denial | capture anyway |
| `CaptureStarted` | start | user | Android | any | captureSessionId | granted | capture active+visible | record start | hidden recording |
| `CaptureStopped` | stop | user/system | Android | any | captureSessionId | active | ended | record stop | continue capture |
| `FrameSampled` | analyzer | system | Android | any | frameRef | active | frame draft | record frameRef | export raw frame |
| `BoardGeometryDrafted` | geometry | system | Android | any | geometryDraft | frameSampled | geometry draft | record draft | treat as truth |
| `BoardCalibrationConfirmed` | confirm | user | Android | any | calibrationRef | geometry draft | calibration draft | record calibration | final truth claim |
| `PieceDetectionDrafted` | detect | system | Android | any | pieceDraft | geometry draft | piece draft | record draft+conf | advice/evidence |
| `ClockDetectionDrafted` | read | system | Android | any | clockDraft | frameSampled | clock draft | record draft | time-pressure advice |
| `ContextDetectionDrafted` | detect | system | Android | any | contextDraft | consent | context draft | record draft | surveillance |
| `CandidateFenDrafted` | assemble | system | Android | any | fenDraft | drafts ready | candidate FEN | record draft | validated claim |
| `AmbiguityDetected` | low conf | system | Android | any | ambiguityMarkers | detection draft | ambiguity marked | record ambiguity | hide uncertainty |
| `AmbiguityResolvedByUser` | correct | user | Android | any | correction | ambiguity detected | corrected draft | record correction | correction as evidence |
| `LocalDraftSaved` | save | user | Android | any | localDraftId | draft exists | persisted local | record save | become evidence |
| `LocalDraftDeleted` | delete | user | Android | any | localDraftId+tombstone | draft exists | removed local | record deletion | silent retention |
| `ValidationRequested` | send | user/system | Android→ChessGuide | any | validationRequestId | candidate FEN | pending | record request | local certification |
| `ValidationResultReceived` | respond | system | ChessGuide→Android | any | validationResultRef | requested | validated/invalid | record result+version | local override |
| `ModeGateDecisionApplied` | gate | system | ChessGuide | any | modeGateDecisionRef | mode+outputs | allowed/suppressed sets | record decision+policy | UX bypass |
| `NoAdviceBannerDisplayed` | comp/broadcast | system | Android/web/TW | comp/broadcast | bannerState | mode set | banner visible | record banner | omit banner |
| `OutputSuppressed` | suppress | system | any | comp/broadcast | suppressedOutput | gate decision | output withheld | record suppression+reason | show content |
| `SurfacePayloadPrepared` | build | system | ChessGuide | any | surfacePayloadRef | gate decision | payload ready | record payload+version | embed forbidden fields |
| `DisplayAcknowledged` | confirm shown | system | Android/web/TW | any | ackRef | payload displayed | ack recorded | record ack | unverified suppression |
| `CreatorReplayLinked` | assemble | system | ChessGuide | any | creatorReplayRef | events exist | replay link | self-record | flatten to prose |
| `FederationWithholdingRecorded` | compute | system | ChessGuide | any | federationWithholdingRef | payload prepared | withholding recorded | record withholding | semantic export |
| `SyncRequested` | sync | user/system | Android | any | syncRequestId | drafts exist | sync pending | record request | drop data |
| `SyncSucceeded` | sync ok | system | Android | any | syncResult | sync requested | synced | record result | mutate evidence |
| `SyncFailed` | sync err | system | Android | any | syncError | sync requested | kept local | record failure | silent loss |

---

## 13. Aggregate/state model

**`AndroidCvSessionAggregate`** contains:

- `sessionId`
- `activeMode`
- `permissionState`
- `captureState`
- `calibrationState`
- `latestFrameRef`
- `boardGeometryDraft`
- `pieceDetectionDrafts`
- `clockDetectionDraft`
- `contextDetectionDraft`
- `candidateFenDraft`
- `ambiguityMarkers`
- `localDraftStatus`
- `validationStatus`
- `modeGateDecisionRef`
- `noAdviceBannerState`
- `suppressedOutputSummary`
- `surfacePayloadRef`
- `creatorReplayRef`
- `federationWithholdingRef`
- `consentStateSnapshot`

**The aggregate is event-sourced conceptually; exact implementation deferred.**

---

## 14. Reducer model

**`AndroidCvStateReducer`** — conceptual functions:

```kotlin
fun reduce(current: AndroidCvSessionState, event: AndroidCvEvent): AndroidCvSessionState
fun canApply(event: AndroidCvEvent, state: AndroidCvSessionState): Boolean
fun rejectReason(event: AndroidCvEvent, state: AndroidCvSessionState): RejectionReason?
```

Rules: **pure · deterministic · no side effects · no framework calls · no advice generation.**

---

## 15. Screen model layer

For each: **responsibilities · state inputs · displayed fields · user actions · forbidden fields · relevant immutable events.**

- **`ModeSelectionScreenModel`** — present/confirm mode; inputs: current mode; displays: mode options/banner; actions: select/confirm/cancel; forbidden: advice; events: `ModeSelected`, `ModeGateDecisionApplied`.
- **`CameraPermissionScreenModel`** — explain/obtain consent; inputs: permissionState; displays: rationale; actions: continue/settings/cancel; forbidden: hidden capture; events: `CameraPermission*`.
- **`CameraSetupScreenModel`** — pre-capture hints; inputs: mode; displays: hints/banner; actions: start/calibrate; forbidden: analysis; events: `CaptureStarted`.
- **`BoardCaptureScreenModel`** — minimalist seeker; inputs: captureState, summaries; displays: preview/overlay/banner; actions: start/stop/re-detect/save draft; forbidden: advice/raw frame display; events: `FrameSampled`, `BoardGeometryDrafted`.
- **`CalibrationScreenModel`** — alignment; inputs: geometry draft; displays: outline/grid/handles; actions: flip/re-detect/confirm; forbidden: OpenCV internals; events: `BoardCalibrationConfirmed`.
- **`LiveGameScreenModel`** — display-only; inputs: payload; displays: board/clock/moves/turn/banner; actions: open review after game; forbidden: engine/TSS/Buddy/LF; events: `DisplayAcknowledged`.
- **`CompetitionModeScreenModel`** — no-advice display; inputs: payload, banner; displays: board+no-advice; actions: start/stop/save for review; forbidden: hints; events: `NoAdviceBannerDisplayed`, `OutputSuppressed`.
- **`LearningModeScreenModel`** — gated learning; inputs: validated context; displays: prompts after validation; actions: ask/checklist/save reflection; forbidden: advice before validation; events: `ValidationResultReceived`.
- **`ReviewModeScreenModel`** — post-game review; inputs: validated history; displays: history/concepts; actions: reflect/show concepts; forbidden: evidence mutation; events: `ValidationResultReceived`.
- **`BroadcastDisplayScreenModel`** — spectator display; inputs: payload, banner; displays: board+no-advice; actions: start/stop/copy link(future); forbidden: advice; events: `NoAdviceBannerDisplayed`.
- **`AmbiguityResolutionScreenModel`** — resolve uncertainty; inputs: ambiguityMarkers; displays: markers/confidence; actions: confirm/mark empty/retake/save draft; forbidden: correction-as-evidence; events: `AmbiguityResolvedByUser`.
- **`PrivacyConsentScreenModel`** — consent/privacy; inputs: consentSnapshot; displays: permission/labels/notices; actions: delete drafts; forbidden: biometric; events: `LocalDraftDeleted`.
- **`LocalDraftsScreenModel`** — manage drafts; inputs: draftStatus; displays: draft list/status; actions: delete/send for validation; forbidden: evidence promotion; events: `LocalDraftSaved`, `LocalDraftDeleted`.
- **`PayloadDebugScreenModel`** — developer view; inputs: payload/suppression refs; displays: families/refs; actions: inspect; forbidden: forbidden content; events: `SurfacePayloadPrepared`.
- **`SyncReplayScreenModel`** — sync/replay status; inputs: sync/replay state; displays: last synced/refs; actions: retry; forbidden: state mutation; events: `Sync*`, `CreatorReplayLinked`.

---

## 16. Controller / coordinator layer

For each: **responsibility · forbidden responsibility · inputs · outputs · collaborators · key function signatures.**

- **`AndroidCvUxCoordinator`** — orchestrate flow/navigation; forbidden: advice/certification; in: mode/nav intents; out: nav/state; collaborators: all controllers; `fun route(intent: NavIntent, state: AndroidCvUiState): NavTarget`.
- **`AndroidModeTransitionController`** — apply gate to transitions; forbidden: local gate policy; in: transition request; out: applied/denied; collaborators: `ModeGateUxAdapter`; `fun requestModeChange(req: ModeChangeRequest): Result<ModeGateDecisionRef, ModeGateRejection>`.
- **`AndroidCaptureFlowController`** — coordinate capture→draft→validation; forbidden: semantics/advice; in: capture state; out: validation request; collaborators: `CameraFrameSource`, reducer; `fun onFrame(frame: FrameRef): Unit`.
- **`AndroidCalibrationController`** — drive calibration; forbidden: final truth; in: geometry draft; out: calibration draft; collaborators: `BoardGeometryDetector`; `fun confirmCalibration(draft: BoardGeometryDraft): CalibrationState`.
- **`AndroidAmbiguityController`** — manage ambiguity; forbidden: correction-as-evidence; in: markers; out: corrected draft; collaborators: `AmbiguityDetector`; `fun resolve(marker: AmbiguityMarker, choice: UserChoice): PieceDetectionDraft`.
- **`AndroidValidationController`** — request/apply validation; forbidden: local certification; in: candidate FEN; out: validation status; collaborators: `ChessGuideValidationApi`; `fun requestValidation(fen: CandidateFenDraft): ValidationRequestId`.
- **`AndroidNoAdviceController`** — enforce no-advice; forbidden: rendering advice; in: mode; out: banner/suppression; collaborators: `ModeGateUxAdapter`; `fun enforce(mode: AndroidSurfaceMode): NoAdviceBannerState`.
- **`AndroidPayloadDisplayController`** — request/display payload; forbidden: local semantics; in: session/mode; out: ui state; collaborators: `SurfacePayloadClient`; `fun displayPayload(ref: SurfacePayloadRef): AndroidCvUiState`.
- **`AndroidPrivacyConsentController`** — manage consent; forbidden: silent collection; in: consent actions; out: consent state; collaborators: `ConsentSnapshotProvider`; `fun updateConsent(action: ConsentAction): ConsentStateSnapshot`.
- **`AndroidLocalDraftController`** — manage drafts; forbidden: evidence promotion; in: draft actions; out: draft status; collaborators: `LocalDraftRepository`; `fun saveDraft(draft: CandidateFenDraft): LocalDraftId`.
- **`AndroidSyncReplayController`** — sync/replay status; forbidden: mutation; in: sync/replay; out: status; collaborators: `CreatorReplayClient`; `fun sync(): SyncRequestId`.

---

## 17. CV interface layer

Pseudo-Kotlin signatures (markdown only, **not a Kotlin file**). For each: **inputs · outputs · errors · forbidden responsibilities.**

```kotlin
interface CameraFrameSource {
  fun startCapture(config: CaptureConfig): Result<CaptureSessionId, CaptureError>
  fun stopCapture(id: CaptureSessionId): Result<Unit, CaptureError>
  fun observeFrames(): Flow<FrameRef>          // forbidden: chess semantics, advice
  fun release(): Unit
}
interface FrameSampler { fun sampleFrame(frame: FrameRef, mode: AndroidSurfaceMode): FrameRef? } // forbidden: detection
interface FramePreprocessor { fun preprocessFrame(frame: FrameRef): Result<FrameRef, FrameFormatError> } // forbidden: truth
interface BoardGeometryDetector { fun detectBoardGeometry(frame: FrameRef, mode: AndroidSurfaceMode): Result<BoardGeometryDraft, BoardGeometryError> } // forbidden: final truth
interface BoardOrientationResolver { fun resolveBoardOrientation(geometry: BoardGeometryDraft): Result<BoardOrientation, BoardGeometryError> }
interface PieceDetector { fun detectPieces(frame: FrameRef, grid: BoardGrid): Result<PieceDetectionDraft, PieceDetectionError> } // forbidden: evidence
interface PieceClassifier { fun classifyPiece(candidate: PieceCandidate): Result<PieceCandidate, PieceDetectionError> }
interface ClockDetector { fun detectClock(frame: FrameRef): Result<ClockDetectionDraft, ClockDetectionError> } // forbidden: time-pressure advice
interface ContextDetector { fun detectContext(frame: FrameRef, consent: ConsentStateSnapshot): Result<ContextDetectionDraft, ContextDetectionError> } // forbidden: surveillance/biometric
interface CandidateFenAssembler { fun assembleCandidateFen(board: BoardGeometryDraft, pieces: PieceDetectionDraft): Result<CandidateFenDraft, BoardGeometryError> }
interface ConfidenceEvaluator { fun evaluateConfidence(draft: DetectionDraft): ConfidenceScore }
interface AmbiguityDetector { fun detectAmbiguity(draft: DetectionDraft): List<AmbiguityMarker> } // forbidden: hide uncertainty
interface CvDraftValidatorPort { fun requestValidation(fen: CandidateFenDraft): ValidationRequestId } // forbidden: local certification
```

---

## 18. CameraX adapter boundary

**`CameraXFrameSourceAdapter`** — responsibilities: camera preview, ImageAnalysis frame stream, lifecycle binding, frame sampling handoff. **Forbidden:** chess semantics, advice, validation, learner state mutation, direct payload export.

```kotlin
fun startCapture(config: CaptureConfig): Result<CaptureSessionId, CaptureError>
fun stopCapture(id: CaptureSessionId): Result<Unit, CaptureError>
fun observeFrames(): Flow<FrameRef>
fun release(): Unit
```

---

## 19. OpenCV board geometry adapter boundary

**`OpenCvBoardGeometryDetectorAdapter`** — responsibilities: image preprocessing, board outline detection, square grid detection, perspective transform draft, orientation hints, confidence. **Forbidden:** final truth, evidence, advice, learner-state mutation. Implements `BoardGeometryDetector`/`FramePreprocessor`.

---

## 20. Piece detector adapter boundary

Future candidates behind the **same `PieceDetector` interface**. No implementation now.

- `PieceDetectorAdapter`
- `YoloPieceDetectorCandidateAdapter`
- `MediaPipePieceDetectorCandidateAdapter`
- `MlKitObjectDetectorCandidateAdapter`
- `LiteRtPieceDetectorCandidateAdapter`

---

## 21. Clock detector adapter boundary

- `ClockDetectorAdapter`
- `ClockRegionDetector`
- `ClockDigitRecognizer`

**Clock data may support timing review; never live time-pressure advice in Competition.**

---

## 22. Context detector adapter boundary

**`ContextDetectorAdapter`** — allowed: presence/turn context if consented, player label if explicitly configured. **Forbidden:** hidden surveillance, psychology, skill, intent, mastery, biometric/pulse/stress v1.

---

## 23. ModeGate adapter boundary

**`ModeGateUxAdapter`** / **`ModeGateDecisionPort`**:

```kotlin
fun requestModeChange(req: ModeChangeRequest): Result<ModeGateDecisionRef, ModeGateRejection>
fun evaluateDisplayRequest(req: DisplayRequest): ModeGateDecisionRef
fun suppressedOutputsFor(mode: AndroidSurfaceMode): Set<SuppressedOutputClass>
```

Rules: **Android does not decide final ModeGate policy. Android may only request/display gate decisions. Competition/Broadcast suppress advice.**

---

## 24. Surface Payload adapter boundary

**`SurfacePayloadClient`** / **`SurfacePayloadMapper`** / **`DisplayAcknowledgementSender`**:

```kotlin
fun prepareDisplayPayload(session: SessionId, mode: AndroidSurfaceMode): Result<SurfacePayloadRef, PayloadError>
fun acknowledgeDisplayedPayload(ref: SurfacePayloadRef, shown: Set<DisplayFieldClass>): Result<Unit, PayloadError>
fun mapPayloadToUiState(ref: SurfacePayloadRef): AndroidCvUiState
```

**Forbidden:** adding advice locally, embedding raw CV frames, embedding forbidden semantic fields.

---

## 25. Creator replay adapter boundary

**`CreatorReplayClient`** / **`ReplayIntentBuilder`** / **`ReplayLinkPresenter`**:

```kotlin
fun buildReplayIntent(event: AndroidCvEvent): ReplayIntent
fun linkReplayRef(intent: ReplayIntent): CreatorReplayRef
fun displayReplayStatus(ref: CreatorReplayRef): ReplayStatus
```

---

## 26. Federation withholding adapter boundary

**`FederationWithholdingPresenter`** / **`WithholdingRefMapper`**.

Rules: **always show semantic export withheld when relevant; never expose a federation export path for CV/semantic/advice/learning fields.**

---

## 27. Privacy / consent adapter boundary

**`PrivacyConsentController`** / **`ConsentSnapshotProvider`** / **`LocalCaptureVisibilityGuard`**.

Rules: **no hidden capture; no biometric v1; local drafts deletable; consent state carried into replay intent.**

---

## 28. Local draft repository boundary

**`LocalDraftRepository`** / **`DraftTombstoneRepository`**:

```kotlin
fun saveDraft(draft: CandidateFenDraft): LocalDraftId
fun loadDraft(id: LocalDraftId): CandidateFenDraft?
fun deleteDraft(id: LocalDraftId): Unit          // creates tombstone
fun markPendingValidation(id: LocalDraftId): Unit
fun markSynced(id: LocalDraftId): Unit
```

Rules: **local draft is not evidence; correction creates a new event; delete creates a tombstone for replay/custody where appropriate.**

---

## 29. ChessGuide API boundary

**`ChessGuideValidationApi`** / **`ChessGuideSurfacePayloadApi`** / **`ChessGuideReplayApi`**. **API is conceptual only; no OpenAPI/runtime in this PR.**

---

## 30. thewilhelmsen.com handoff boundary

**`TheWilhelmsenSurfaceHandoffAdapter`** — rules: **governed payload refs only; no raw CV frames; no local advice; no mode decisions; no host-side coaching.**

---

## 31. Android UI state model

**`AndroidCvUiState`** fields:

- `activeMode`
- `globalModeBanner`
- `noAdviceBanner`
- `permissionState`
- `captureState`
- `calibrationState`
- `boardOverlayState`
- `confidenceSummary`
- `ambiguityMarkers`
- `localDraftState`
- `validationStatus`
- `suppressedOutputSummary`
- `payloadDebugState`
- `replayStatus`
- `privacyNotice`

---

## 32. Capture flow sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | user | `BoardCaptureScreenModel` | `CaptureStarted` | n/a | record start | hidden capture |
| 2 | system | `CameraXFrameSourceAdapter` (`CameraFrameSource`) | `FrameSampled` | n/a | record frameRef | export raw frame |
| 3 | system | `FrameSampler`/`FramePreprocessor` | — | n/a | — | hold raw frame |
| 4 | system | `BoardGeometryDetector` | `BoardGeometryDrafted` | n/a | record draft | treat as truth |
| 5 | system | `PieceDetector`/`ClockDetector` | `PieceDetectionDrafted`/`ClockDetectionDrafted` | n/a | record draft | advice |
| 6 | system | `AndroidCvStateReducer` | (state update) | n/a | — | per-frame recompose |
| 7 | system | UI | — | gate later | — | advice in competition |

---

## 33. Mode transition sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | user | `ModeSelectionScreenModel` | `ModeSelected` | request | record mode | silent advice |
| 2 | system | `AndroidModeTransitionController` | — | evaluate | — | local gate policy |
| 3 | system | `ModeGateUxAdapter` | `ModeGateDecisionApplied` | decide | record decision | UX bypass |
| 4 | system | `AndroidNoAdviceController` | `NoAdviceBannerDisplayed` | enforce | record banner | omit banner |
| 5 | system | `AndroidCvStateReducer` → UI | `OutputSuppressed` | suppress | record suppression | show content |

---

## 34. Calibration sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | user | `CalibrationScreenModel` | — | n/a | — | expose CV internals |
| 2 | system | `BoardGeometryDetector` | `BoardGeometryDrafted` | n/a | record draft | final truth |
| 3 | user | `AndroidCalibrationController` | `BoardCalibrationConfirmed` | n/a | record calibration | certify position |

---

## 35. Ambiguity resolution sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | system | `AmbiguityDetector` | `AmbiguityDetected` | n/a | record ambiguity | hide uncertainty |
| 2 | user | `AmbiguityResolutionScreenModel` | — | n/a | — | force certainty |
| 3 | user | `AndroidAmbiguityController` | `AmbiguityResolvedByUser` | n/a | record correction | correction as evidence |
| 4 | user | `AndroidLocalDraftController` | `LocalDraftSaved` | n/a | record save | evidence promotion |

---

## 36. Validation request sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | user/system | `AndroidValidationController` | `ValidationRequested` | n/a | record request | local certification |
| 2 | system | `ChessGuideValidationApi` | — | n/a | — | local override |
| 3 | system | reducer | `ValidationResultReceived` | n/a | record result+version | ignore result |

---

## 37. No-advice enforcement sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | system | `AndroidNoAdviceController` | `NoAdviceBannerDisplayed` | enforce | record banner | omit banner |
| 2 | system | `ModeGateUxAdapter` | `OutputSuppressed` | suppress | record suppression+reason | show suppressed content |
| 3 | system | `SuppressedOutputPresentationModel` | — | n/a | — | present as hint |

---

## 38. Surface payload preparation sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | system | `ModeGateUxAdapter` | `ModeGateDecisionApplied` | decide | record decision | bypass gate |
| 2 | system | `SurfacePayloadClient`/`SurfacePayloadMapper` | `SurfacePayloadPrepared` | n/a | record payload+version | embed forbidden fields |
| 3 | surface | `DisplayAcknowledgementSender` | `DisplayAcknowledged` | n/a | record ack | unverified suppression |
| 4 | system | `FederationWithholdingPresenter` | `FederationWithholdingRecorded` | n/a | record withholding | semantic export |

---

## 39. Creator replay sequence

| Step | Actor | Class/interface | Emitted event | ModeGate | Creator replay | Forbidden shortcut |
|------|-------|-----------------|---------------|----------|----------------|--------------------|
| 1 | system | `ReplayIntentBuilder` | — | n/a | build intent | flatten to prose |
| 2 | system | `CreatorReplayClient` | `CreatorReplayLinked` | n/a | self-record | drop refs |
| 3 | system | `ReplayLinkPresenter` | — | n/a | display status | expose forbidden content |

---

## 40. OOP class catalog

| Class/interface | Type | Module | Responsibility | Collaborators | Forbidden responsibility | HLD section | Wave |
|-----------------|------|--------|----------------|---------------|--------------------------|-------------|------|
| `AndroidCvUxCoordinator` | class | :app | orchestrate flow | controllers | advice | §17,§57(UX) | C |
| `AndroidCvSessionAggregate` | aggregate | :core:model | hold session state | events | mutation | §58(UX) | C |
| `AndroidCvSessionState` | value | :core:model | immutable snapshot | reducer | mutation | §37(UX) | C |
| `AndroidCvEvent` | sealed | :core:model | immutable events | reducer | side effects | §58(UX) | C |
| `AndroidCvStateReducer` | class | :core:model | pure reduce | events | framework calls | §14 | C |
| `ModeSelectionScreenModel` | class | :feature:mode-selection | mode UX | gate adapter | gate policy | §18(UX) | C |
| `CameraPermissionScreenModel` | class | :feature:camera-setup | consent UX | privacy | hidden capture | §19(UX) | C |
| `CameraSetupScreenModel` | class | :feature:camera-setup | pre-capture | — | analysis | §20(UX) | C |
| `BoardCaptureScreenModel` | class | :feature:scanner | capture UX | capture ctrl | advice | §21(UX) | E |
| `CalibrationScreenModel` | class | :feature:calibration | alignment UX | geometry | truth | §22(UX) | F |
| `LiveGameScreenModel` | class | :feature:competition | live display | payload | advice | §23(UX) | H |
| `CompetitionModeScreenModel` | class | :feature:competition | no-advice display | no-advice ctrl | hints | §24(UX) | H |
| `LearningModeScreenModel` | class | :feature:learning | gated learning | validation | early advice | §25(UX) | later |
| `ReviewModeScreenModel` | class | :feature:review | review UX | validation | evidence mutation | §26(UX) | later |
| `BroadcastDisplayScreenModel` | class | :feature:broadcast | spectator display | payload | advice | §27(UX) | later |
| `AmbiguityResolutionScreenModel` | class | :feature:ambiguity | resolve uncertainty | ambiguity ctrl | evidence | §28(UX) | F |
| `PrivacyConsentScreenModel` | class | :feature:privacy | consent UX | privacy ctrl | biometric | §32(UX) | C |
| `LocalDraftsScreenModel` | class | :feature:privacy | drafts UX | draft repo | evidence promotion | §33(UX) | G |
| `PayloadDebugScreenModel` | class | :feature:developer-debug | debug | payload | forbidden content | §34(UX) | later |
| `SyncReplayScreenModel` | class | :feature:developer-debug | sync/replay | replay client | mutation | §35(UX) | later |
| `AndroidModeTransitionController` | class | :core:mode | apply gate | gate adapter | local policy | §38(UX) | C |
| `AndroidCaptureFlowController` | class | :feature:scanner | capture flow | frame source | semantics | §39(UX) | E |
| `AndroidCalibrationController` | class | :feature:calibration | calibration | geometry | truth | §40(UX) | F |
| `AndroidAmbiguityController` | class | :feature:ambiguity | ambiguity | ambiguity detector | evidence | §41(UX) | F |
| `AndroidValidationController` | class | :core:validation | validation | api | local cert | §39(UX) | G |
| `AndroidNoAdviceController` | class | :core:mode | enforce no-advice | gate adapter | render advice | §30(UX) | H |
| `AndroidPayloadDisplayController` | class | :core:payload | display payload | payload client | semantics | §38(UX) | H |
| `AndroidPrivacyConsentController` | class | :core:privacy | consent | snapshot provider | silent collection | §32(UX) | C |
| `AndroidLocalDraftController` | class | :data:local-drafts | drafts | draft repo | evidence | §33(UX) | G |
| `AndroidSyncReplayController` | class | :data:sync | sync/replay | replay client | mutation | §35(UX) | later |
| `CameraFrameSource` | interface | :core:cv | frame stream | adapters | semantics | §15(UX) | E |
| `FrameSampler` | interface | :core:cv | sampling | — | detection | §16(UX) | E |
| `FramePreprocessor` | interface | :core:cv | preprocess | — | truth | §40(UX) | E |
| `BoardGeometryDetector` | interface | :core:cv | geometry | adapters | truth | §40(UX) | E |
| `BoardOrientationResolver` | interface | :core:cv | orientation | — | certify | §40(UX) | E |
| `PieceDetector` | interface | :core:cv | piece detect | adapters | evidence | §41(UX) | F |
| `PieceClassifier` | interface | :core:cv | classify | — | truth | §41(UX) | F |
| `ClockDetector` | interface | :core:cv | clock read | adapters | advice | §42(UX) | later |
| `ContextDetector` | interface | :core:cv | context | adapters | surveillance | §43(UX) | later |
| `CandidateFenAssembler` | interface | :core:cv | assemble FEN | — | validated claim | §39(UX) | F |
| `ConfidenceEvaluator` | interface | :core:cv | confidence | — | certainty | §29(UX) | E |
| `AmbiguityDetector` | interface | :core:cv | ambiguity | — | hide | §28(UX) | F |
| `ModeGateUxAdapter` | class | :core:mode | gate adapter | port | local policy | §37(UX) | C |
| `SurfacePayloadClient` | class | :core:payload | payload | mapper | advice | §38(UX) | H |
| `SurfacePayloadMapper` | class | :core:payload | map payload | — | forbidden fields | §38(UX) | H |
| `DisplayAcknowledgementSender` | class | :core:payload | ack | — | unverified | §24(UX) | H |
| `CreatorReplayClient` | class | :core:replay | replay | builder | mutation | §39(UX) | I |
| `ReplayIntentBuilder` | class | :core:replay | build intent | — | drop refs | §39(UX) | I |
| `FederationWithholdingPresenter` | class | :core:payload | withholding | mapper | export | §26 | H |
| `PrivacyConsentController` | class | :core:privacy | consent | provider | silent | §27 | C |
| `LocalDraftRepository` | interface | :data:local-drafts | drafts | tombstone | evidence | §28 | G |
| `ChessGuideValidationApi` | interface | :integration:chessguide-api | validation | network | local cert | §29 | H |
| `TheWilhelmsenSurfaceHandoffAdapter` | class | :integration:thewilhelmsen-surface | handoff | payload | raw CV/coaching | §30 | M |

---

## 41. Interface catalog

| Interface | Function signatures | Input | Output | Error model | Future adapter | Forbidden behavior |
|-----------|---------------------|-------|--------|-------------|----------------|--------------------|
| `CameraFrameSource` | startCapture/stopCapture/observeFrames/release | config/id | FrameRef flow | `CaptureError` | `CameraXFrameSourceAdapter` | semantics/advice |
| `BoardGeometryDetector` | detectBoardGeometry | FrameRef, mode | `BoardGeometryDraft` | `BoardGeometryError` | `OpenCvBoardGeometryDetectorAdapter` | final truth |
| `PieceDetector` | detectPieces | FrameRef, grid | `PieceDetectionDraft` | `PieceDetectionError` | `Yolo*/MlKit*/MediaPipe*/LiteRt*` | evidence |
| `ClockDetector` | detectClock | FrameRef | `ClockDetectionDraft` | `ClockDetectionError` | `ClockDetectorAdapter` | time advice |
| `ContextDetector` | detectContext | FrameRef, consent | `ContextDetectionDraft` | `ContextDetectionError` | `ContextDetectorAdapter` | surveillance |
| `ModeGateDecisionPort` | requestModeChange/evaluateDisplayRequest/suppressedOutputsFor | request/mode | `ModeGateDecisionRef`/sets | `ModeGateRejection` | `ModeGateUxAdapter` | local policy |
| `SurfacePayloadClient` | prepareDisplayPayload/acknowledgeDisplayedPayload/mapPayloadToUiState | session/mode/ref | `SurfacePayloadRef`/uiState | `PayloadError` | governed client | advice/raw CV |
| `CreatorReplayClient` | buildReplayIntent/linkReplayRef/displayReplayStatus | event/intent/ref | `CreatorReplayRef`/status | `ReplayError` | replay client | mutation |
| `PrivacyConsentController` | updateConsent/snapshot | action | `ConsentStateSnapshot` | `PrivacyError` | consent ctrl | silent capture |
| `LocalDraftRepository` | saveDraft/loadDraft/deleteDraft/markPendingValidation/markSynced | draft/id | `LocalDraftId`/draft | `SyncError` | local repo | evidence |
| `ChessGuideValidationApi` | requestValidation/applyValidationResult | fen/ref | `ValidationRequestId`/`ValidationResultRef` | `ValidationError` | api client | local cert |

---

## 42. Function signature catalog

Pseudo-Kotlin grouped by module (**no real code file**):

```kotlin
// :core:cv
fun startCapture(config: CaptureConfig): Result<CaptureSessionId, CaptureError>
fun stopCapture(id: CaptureSessionId): Result<Unit, CaptureError>
fun observeFrames(): Flow<FrameRef>
fun sampleFrame(frame: FrameRef, mode: AndroidSurfaceMode): FrameRef?
fun preprocessFrame(frame: FrameRef): Result<FrameRef, FrameFormatError>
fun detectBoardGeometry(frame: FrameRef, mode: AndroidSurfaceMode): Result<BoardGeometryDraft, BoardGeometryError>
fun resolveBoardOrientation(geometry: BoardGeometryDraft): Result<BoardOrientation, BoardGeometryError>
fun detectPieces(frame: FrameRef, grid: BoardGrid): Result<PieceDetectionDraft, PieceDetectionError>
fun classifyPiece(candidate: PieceCandidate): Result<PieceCandidate, PieceDetectionError>
fun detectClock(frame: FrameRef): Result<ClockDetectionDraft, ClockDetectionError>
fun detectContext(frame: FrameRef, consent: ConsentStateSnapshot): Result<ContextDetectionDraft, ContextDetectionError>
fun assembleCandidateFen(board: BoardGeometryDraft, pieces: PieceDetectionDraft): Result<CandidateFenDraft, BoardGeometryError>
fun evaluateConfidence(draft: DetectionDraft): ConfidenceScore
fun detectAmbiguity(draft: DetectionDraft): List<AmbiguityMarker>
fun resolveAmbiguity(marker: AmbiguityMarker, choice: UserChoice): PieceDetectionDraft

// :data:local-drafts
fun saveLocalDraft(draft: CandidateFenDraft): LocalDraftId
fun deleteLocalDraft(id: LocalDraftId): Unit

// :core:validation
fun requestValidation(fen: CandidateFenDraft): ValidationRequestId
fun applyValidationResult(ref: ValidationResultRef): ValidationStatus

// :core:mode
fun requestModeChange(req: ModeChangeRequest): Result<ModeGateDecisionRef, ModeGateRejection>
fun evaluateModeGate(req: DisplayRequest): ModeGateDecisionRef

// :core:payload
fun prepareSurfacePayload(session: SessionId, mode: AndroidSurfaceMode): Result<SurfacePayloadRef, PayloadError>
fun acknowledgeDisplay(ref: SurfacePayloadRef, shown: Set<DisplayFieldClass>): Result<Unit, PayloadError>

// :core:replay
fun buildReplayIntent(event: AndroidCvEvent): ReplayIntent

// :core:payload (federation)
fun recordFederationWithholding(payload: SurfacePayloadRef): FederationWithholdingRef

// :core:model
fun reduce(current: AndroidCvSessionState, event: AndroidCvEvent): AndroidCvSessionState
```

---

## 43. Composition and ownership rules

- **App composes feature modules.**
- **Feature modules own screen state, not domain truth.**
- **Core owns interfaces and pure models.**
- **Data owns persistence/drafts.**
- **Integration owns external calls.**
- **Framework adapters own framework-specific code later.**
- **No feature owns CV framework.**
- **No adapter owns governance.**

---

## 44. Inheritance rules

Prefer **composition and interfaces over inheritance**. Allowed inheritance only for **sealed conceptual hierarchies**:

- `AndroidCvEvent`
- `CvError`
- `DetectionDraft`
- `ScreenAction`
- `UiStateVariant`

**No deep inheritance.**

---

## 45. Error model

Sealed conceptual errors. For each: **user-visible handling · developer logging · forbidden behavior.**

| Error | User-visible handling | Developer logging | Forbidden behavior |
|-------|-----------------------|-------------------|--------------------|
| `PermissionError` | "Camera access needed" + settings | log code | capture anyway |
| `CaptureError` | "Capture failed", retry | log session | hidden retry |
| `FrameFormatError` | silent retry/guide | log format | crash loop |
| `BoardGeometryError` | "Reposition/calibrate" | log conf | treat as truth |
| `PieceDetectionError` | "Pieces uncertain" | log conf | advice |
| `ClockDetectionError` | "Clock unreadable" | log region | fabricate time |
| `ContextDetectionError` | hide/skip | log minimal | surveillance |
| `AmbiguityError` | show ambiguity | log markers | hide |
| `ValidationError` | "Validation failed" | log ref | local cert |
| `ModeGateRejection` | "Not allowed in this mode" | log decision | UX bypass |
| `PayloadError` | "Display unavailable" | log ref | embed forbidden |
| `ReplayError` | silent + retry | log ref | drop replay |
| `PrivacyError` | "Privacy action failed" | log minimal | silent collection |
| `SyncError` | "Sync failed, kept local" | log ref | silent loss |

---

## 46. Threading / performance design

- **UI thread for Compose only.**
- **CameraX analyzer executor** for frame stream.
- **CV dispatcher** for heavy processing.
- UI state updates **throttled**.
- **no per-frame recomposition**.
- **cancellation required on capture stop**.
- backpressure strategy later.

---

## 47. Memory / frame-loop design

- **avoid allocation in analyze loop**.
- **reuse buffers/object pools**.
- **avoid holding raw frames longer than needed**.
- **frame refs, not raw frame exports**.
- YUV_420_888 conversion strategy deferred to runtime but **boundary specified**.
- **raw frames never sent to host/federation**.

---

## 48. Security / privacy design

- **visible capture indicator**.
- **camera permission explicit**.
- **no hidden capture**.
- **local drafts deletable**.
- **player labels consented**.
- **no biometric/pulse/stress in v1**.
- **no semantic export**.
- **no raw frames to thewilhelmsen.com**.

---

## 49. Testing strategy for next PRs

Future test categories:

- unit tests for reducers
- contract tests for mode gate adapter
- UI tests for no-advice banner
- UI tests for permission flow
- UI tests for ambiguity resolution
- fake `CameraFrameSource` tests
- fake `BoardGeometryDetector` tests
- fake `PieceDetector` tests
- payload fixture tests
- replay intent tests
- federation withholding tests

---

## 50. Android Studio implementation readiness checklist

- module names defined
- core interfaces defined
- screen models defined
- event model defined
- reducer model defined
- no-advice boundary defined
- replay boundary defined
- privacy boundary defined
- payload boundary defined
- framework adapters defined as future only
- first implementation wave defined

---

## 51. What PR #37 should implement

PR #37 should implement only:

- Android Studio project skeleton
- Gradle module skeleton
- `:app`
- `:core:model`
- `:core:mode`
- `:core:designsystem`
- `:feature:mode-selection`
- `:feature:camera-setup`
- minimal Compose/M3 shell
- visible global mode banner placeholder
- no-advice banner component placeholder
- no CV runtime
- no CameraX unless explicitly limited to a placeholder dependency decision
- no OpenCV/YOLO/ML Kit/MediaPipe/LiteRT
- no TSS/Buddy/LARIS
- no API calls

---

## 52. What PR #37 must not implement

- no real camera stream if not yet agreed
- no frame analyzer
- no CV model
- no OpenCV
- no YOLO
- no validation runtime
- no payload runtime
- no Creator runtime
- no thewilhelmsen.com runtime integration
- no advice
- no TSS
- no Buddy
- no learner state mutation

---

## 53. UML artifact reference

See: [`docs/architecture/uml/Android-CV-Modular-Runtime-UML-v1.0.puml`](./uml/Android-CV-Modular-Runtime-UML-v1.0.puml)

---

## 54. Rejection criteria

Reject if:

- code added
- Android Studio files added
- src changed
- implementation added
- UML missing
- LLD lacks classes/interfaces
- LLD lacks function signatures
- event model missing
- no-advice boundary missing
- Creator replay missing
- federation withholding missing
- Android owns ontology/truth
- raw frames go to host
- Buddy/LARIS activated

---

## 55. Open questions

| ID | Question |
|----|----------|
| **ANDROID-CV-LLD-OQ-1** | What are the exact Gradle module names/paths? |
| **ANDROID-CV-LLD-OQ-2** | What is the minimum SDK / target SDK? |
| **ANDROID-CV-LLD-OQ-3** | What Compose BOM policy applies? |
| **ANDROID-CV-LLD-OQ-4** | When does the CameraX dependency enter (PR #37 or #39)? |
| **ANDROID-CV-LLD-OQ-5** | Does CameraX preview enter PR #37 or a later wave? |
| **ANDROID-CV-LLD-OQ-6** | What is the M3 dynamic color policy? |
| **ANDROID-CV-LLD-OQ-7** | Hilt, Koin, or manual DI? |
| **ANDROID-CV-LLD-OQ-8** | What state management pattern (MVI vs MVVM) is canonical? |
| **ANDROID-CV-LLD-OQ-9** | How deep is event-sourcing implemented in v1? |
| **ANDROID-CV-LLD-OQ-10** | What local drafts storage (Room/DataStore/files)? |
| **ANDROID-CV-LLD-OQ-11** | What is the raw frame retention policy? |
| **ANDROID-CV-LLD-OQ-12** | What is the validation API shape? |
| **ANDROID-CV-LLD-OQ-13** | What is the replay API shape? |
| **ANDROID-CV-LLD-OQ-14** | What is the thewilhelmsen handoff path? |
| **ANDROID-CV-LLD-OQ-15** | What fake adapters are needed for tests first? |
| **ANDROID-CV-LLD-OQ-16** | What test framework (JUnit/Compose test/Turbine)? |
| **ANDROID-CV-LLD-OQ-17** | What is the offline mode behavior? |
| **ANDROID-CV-LLD-OQ-18** | How is low-end device support handled? |
| **ANDROID-CV-LLD-OQ-19** | How is thermal throttling handled? |
| **ANDROID-CV-LLD-OQ-20** | What is the annotation capture consent flow? |
| **ANDROID-CV-LLD-OQ-21** | Who governs dataset custody? |
| **ANDROID-CV-LLD-OQ-22** | What is the YOLO export path (and AGPL handling)? |
| **ANDROID-CV-LLD-OQ-23** | How is OpenCV packaged for Android? |
| **ANDROID-CV-LLD-OQ-24** | What is the LiteRT path/feasibility? |
| **ANDROID-CV-LLD-OQ-25** | What CI implications (build matrix, lint, tests) apply? |

---

## 56. Recommendation

- **Accept ANDROID-CV-LLD-OOP-UML-001 as Draft LLD / OOP / UML.**
- **This is the final architecture PR before Android Studio code.**
- Next PR should be **PR #37 — Android Studio Skeleton / Modular App Shell v1.0**.
- **PR #38** should start **Web Surface Shell / Mode-Gated Display Skeleton v1.0**.
- **Do not create more broad review documents before code.**

---

## 57. Governance boundary statement

**ANDROID-CV-LLD-OOP-UML-001 does not modify** runtime, tests, federation export, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, production schemas, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, API implementation, Gradle files, Kotlin files, Java files, Compose files, Android Studio files, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates **one human-readable Android CV LLD/OOP/UML document and one PlantUML UML artifact only**.
