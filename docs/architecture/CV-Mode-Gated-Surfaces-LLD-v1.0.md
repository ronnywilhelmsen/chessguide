# CV + Mode-Gated Surfaces LLD / OOP / UML v1.0

| Field | Value |
|-------|-------|
| **Document ID** | CV-MODE-LLD-001 |
| **Title** | CV + Mode-Gated Surfaces LLD / OOP / UML v1.0 |
| **Version** | 1.0 |
| **Status** | Draft LLD |
| **Date** | 2026-06-18 |
| **Scope** | low-level design, OOP class model, method signatures, immutable state transitions, UML, guard flow, Creator replay, and federation withholding for CV + mode-gated surfaces |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CHROME-STRAT-001](../strategy/Chrome-Extension-Strategy-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **UML companion** | [CV-Mode-Gated-Surfaces-UML-v1.0.puml](./uml/CV-Mode-Gated-Surfaces-UML-v1.0.puml) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- CV-MODE-LLD-001 is a **Draft LLD**.
- It creates **LLD and UML only**.
- It creates **no runtime**.
- It creates **no executable implementation**.
- It creates **no tests**.
- It creates **no schemas**.
- It creates **no thewilhelmsen.com changes**.
- It does **not** activate Buddy or LARIS.

---

## 2. Executive summary

- This LLD lowers **CV-MODE-HLD-001** into detailed **OOP and UML**.
- It specifies **classes, interfaces, composition, function signatures, immutable events, mode guards, adapters, and replay envelopes**.
- It keeps **Android as primary CV capture surface**.
- It keeps **web/thewilhelmsen.com as future governed live display surface**.
- It keeps **Chrome review/import-first**.
- It keeps **Competition Mode display/record-only**.
- It keeps **Learning/Review modes guarded**.
- It keeps **Creator replay and federation withholding explicit**.

---

## 3. Design question

**How can the HLD be implemented at low level without losing the learning philosophy, governance boundaries, mode gates, fair-play constraints, shared reality model, Creator replay, and federation withholding?**

By mapping every HLD responsibility to **explicit interfaces, classes, value objects, method signatures, immutable events, and UML relationships**, with **forbidden authority documented on each class**.

---

## 4. Vertical Architecture Continuity Requirement

| Layer | Required continuity | LLD expression | Verification question |
|-------|---------------------|----------------|------------------------|
| Philosophy / learning theory | CV is sensory bridge, not proof | capture/validation/semantic classes separated | Can a class conflate capture and learning proof? (must be no) |
| Governance / ADR | ADR boundaries enforced | guard classes + forbidden authority notes | Which class enforces each ADR? |
| Review / HLD | HLD components mapped | §7 HLD-to-LLD trace | Does every HLD component have a class? |
| LLD / OOP / UML | classes/interfaces/signatures | §10–§38 + UML | Are signatures and relationships explicit? |
| Immutable state transitions | append-only events | §35 event model | Is any mode decision mutated in place? (must be no) |
| Runtime behavior | preview only | §41 runtime preview | Is runtime deferred? (must be yes) |
| ChessBuddy / ChessGuide shared reality | governed mode-allowed reality | §42 check | Can Buddy see suppressed reality? (must be no) |
| thewilhelmsen.com hosted reality | hosted, governed surface | §43 check | Can host bypass ModeGate? (must be no) |
| Creator real-time to 100-year continuity | full replay | §44 check + replay classes | Can Creator replay suppression? (must be yes) |
| Federation boundary | no semantic export | §45 check + withholding classes | Can semantic CV data export? (must be no) |

**If any layer cannot be traced to classes, method signatures, state transitions, and UML, the design fails.**

---

## 5. Philosophy-to-LLD trace

- CV is a **sensory bridge, not proof of learning** → `CaptureEvent` and `CVDerivedPositionDraft` are never `EvidenceRecord`.
- **Mode gates embody fair-play and learning context** → `ModeGate` + guard classes decide allowed outputs.
- **Explanations are mode-dependent and never automatic evidence** → semantic adapters return optional, mode-gated results.
- **Classes must not conflate** capture, validation, semantics, pedagogy, and learner state → each lives in a distinct package/context.

---

## 6. Governance-to-LLD trace

| Governance source | LLD consequence | Class/interface enforcing it |
|-------------------|-----------------|------------------------------|
| ADR-001 | CV frames are not LearningTrace | `CVCaptureEvent`, `EvidencePromotionGate` |
| ADR-002 | corpus_ref is sovereign pointer | `KgConceptReadAdapter` |
| ADR-003 | CV draft ≠ evidence | `EvidencePromotionGate` |
| ADR-004 | model confidence cannot be mastery | `ForbiddenClaimGuard` |
| ADR-005 | CV ≠ learner rationale | `LearnerStateMutationGuard` |
| ADR-006 | Buddy cannot certify mastery | `BuddyOutputAdapter` |
| ADR-007 | Stockfish is reference only | `EngineReferenceAdapter` |
| ADR-008 | KG labels honour curation | `KgConceptReadAdapter` |
| FEDERATION.md | no semantic export | `FederationWithholdingGuard` |

---

## 7. HLD-to-LLD trace

| HLD component | LLD class |
|---------------|-----------|
| `CVCaptureSurface` | `CVCaptureSurface` (interface) |
| `AndroidCVCapture` | `AndroidCVCaptureSurface` |
| `BoardFrameCapture` | `AndroidBoardCameraSession` + `BoardDetector` |
| `ClockFrameCapture` | `AndroidClockCaptureSession` + `ClockDetector` |
| `PlayerContextCapture` | `AndroidContextCaptureSession` + `PlayerContextDetector` |
| `CVDerivedPositionDraft` | `CVDerivedPositionDraft` |
| `CVConfidenceEnvelope` | `CVConfidenceEnvelope` |
| `ModeGate` | `ModeGate` |
| `SurfaceModePolicy` | `SurfaceModePolicy` |
| `CompetitionModeGuard` | `CompetitionModeGuard` |
| `LearningModeGuard` | `LearningModeGuard` |
| `ReviewModeGuard` | `ReviewModeGuard` |
| `BroadcastDisplayGuard` | `BroadcastDisplayGuard` |
| `DeterministicPositionValidator` | `DeterministicPositionValidator` |
| `TssSccReviewAdapter` | `TssSccReviewAdapter` |
| `EngineReferenceAdapter` | `EngineReferenceAdapter` |
| `PedagogicalModelAdapter` | `PedagogicalModelAdapter` |
| `BuddyOutputAdapter` | `BuddyOutputAdapter` |
| `LearnerGraphReadAdapter` | `LearnerGraphReadAdapter` |
| `LearningFrontierReadAdapter` | `LearningFrontierReadAdapter` |
| `KgConceptReadAdapter` | `KgConceptReadAdapter` |
| `CreatorReplayEnvelope` | `CreatorReplayEnvelope` |
| `FederationWithholdingGuard` | `FederationWithholdingGuard` |
| `TheWilhelmsenSurfaceAdapter` | `TheWilhelmsenSurfaceAdapter` |
| `ChromeReviewImportAdapter` | `ChromeReviewImportAdapter` |
| `WebLiveDisplaySurface` | `WebLiveDisplaySurface` |

---

## 8. Bounded context lowering

| Context | LLD package | Primary classes | Owned state | Allowed dependencies | Forbidden dependencies |
|---------|-------------|-----------------|-------------|----------------------|------------------------|
| CV Capture | `chessguide.cv.capture` | `CVCaptureCoordinator`, `CaptureEvent` | capture events, frame refs | confidence, detection | learner state, semantics |
| Surface | `chessguide.surface.*` | `WebLiveDisplaySurface`, `AndroidCVCaptureSurface` | surface mode flag | mode policy (read) | direct semantics authority |
| Mode Policy | `chessguide.surface.mode` | `ModeGate`, guards | mode decisions | guards | capture internals |
| Deterministic Validation | `chessguide.validation.deterministic` | `DeterministicPositionValidator` | validation state | domain types | pedagogy |
| Semantic Interpretation | `chessguide.semantic.adapters` | `TssSccReviewAdapter`, `EngineReferenceAdapter` | adapter refs | validated positions | learner mutation |
| Learning | `chessguide.semantic.adapters` | `LearningFrontierReadAdapter`, `KgConceptReadAdapter` | read views | LG/LF/KG (read) | mutation |
| Mentor | `chessguide.mentor.adapters` | `BuddyOutputAdapter` | gated drafts | activation state | activation authority |
| Creator Continuity | `chessguide.creator.replay` | `CreatorReplayEnvelope`, `ReplayRecorder` | replay records | all transitions | display |
| Federation Export | `chessguide.federation.withholding` | `FederationWithholdingGuard` | withholding decisions | export requests | semantic data |
| Related Host: thewilhelmsen.com | `chessguide.surface.thewilhelmsen` | `TheWilhelmsenSurfaceAdapter` | payload boundary | governed payloads | governance bypass |

---

## 9. Package/module layout, conceptual only

```text
chessguide.cv.capture
chessguide.cv.detection
chessguide.cv.confidence
chessguide.surface.mode
chessguide.surface.web
chessguide.surface.android
chessguide.surface.chrome
chessguide.surface.thewilhelmsen
chessguide.validation.deterministic
chessguide.semantic.adapters
chessguide.mentor.adapters
chessguide.creator.replay
chessguide.federation.withholding
```

This is **conceptual, not created as runtime folders in this PR**.

---

## 10. Interface model

These are **design signatures, not code**:

```text
interface CVCaptureSurface
  captureFrame(request: CaptureRequest): CaptureEvent
  getSurfaceId(): SurfaceId
  getSupportedInputTypes(): Set<InputType>

interface PositionDetector
  detectPosition(frame: CaptureFrame, context: DetectionContext): CVDerivedPositionDraft

interface ConfidenceScorer
  score(draft: CVDerivedPositionDraft, frame: CaptureFrame): CVConfidenceEnvelope

interface ModeGuard
  evaluate(request: ModeGateRequest): ModeGuardDecision

interface SurfaceAdapter
  render(payload: SurfaceDisplayPayload, modeDecision: ModeGateDecision): SurfaceRenderResult

interface DeterministicPositionValidator
  validatePosition(draft: CVDerivedPositionDraft, request: ValidationRequest): PositionValidationResult

interface SemanticAdapter
  derive(request: SemanticDerivationRequest): SemanticDerivationResult

interface ReplayRecorder
  record(envelope: CreatorReplayEnvelope): ReplayRecordRef

interface FederationGuard
  evaluateExport(request: FederationExportRequest): FederationWithholdingDecision
```

---

## 11. Class model overview

| Class | Package | Responsibility | Parent/interface | Composed dependencies | Produces | Forbidden authority |
|-------|---------|----------------|------------------|------------------------|----------|---------------------|
| `CVCaptureCoordinator` | cv.capture | orchestrate capture | — | `CVCaptureEventFactory` | `CaptureEvent` | advice |
| `AndroidCVCaptureSurface` | surface.android | Android capture | `CVCaptureSurface` | camera sessions | `CaptureEvent` | learner mutation |
| `BoardDetector` | cv.detection | board detection | `PositionDetector` | `SquareGridDetector` | `BoardDetectionResult` | semantics |
| `PieceDetector` | cv.detection | piece detection | `PositionDetector` | grid | `PieceDetectionResult` | evidence |
| `ClockDetector` | cv.detection | clock read | — | — | `ClockReadResult` | advice |
| `ConfidenceThresholdPolicy` | cv.confidence | threshold gate | — | `CVConfidenceEnvelope` | `ConfidenceDecision` | trust w/o validation |
| `ModeGate` | surface.mode | decide outputs | — | guards | `ModeGateDecision` | competition advice |
| `CompetitionModeGuard` | surface.mode | suppress advice | `ModeGuard` | `NoAdviceGuard` | `ModeGuardDecision` | coaching |
| `DeterministicPositionValidator` | validation | validate position | `PositionValidator` | — | `PositionValidationResult` | pedagogy |
| `TssSccReviewAdapter` | semantic.adapters | TSS/SCC read | `SemanticAdapter` | suppression policy | `TssSccResultRef` | competition emission |
| `EngineReferenceAdapter` | semantic.adapters | engine read | `SemanticAdapter` | suppression policy | `EngineReferenceResultRef` | teacher truth |
| `BuddyOutputAdapter` | mentor.adapters | Buddy output | — | activation gate | `BuddyExplanationDraft` | mastery cert |
| `CreatorReplayEnvelope` | creator.replay | replay record | — | mode decision | replay record | dropping reasons |
| `FederationWithholdingGuard` | federation.withholding | withhold export | `FederationGuard` | — | `FederationWithholdingDecision` | semantic export |
| `TheWilhelmsenSurfaceAdapter` | surface.thewilhelmsen | host payload | `SurfaceAdapter` | governance boundary | `TheWilhelmsenSurfacePayload` | ungoverned advice |
| `ChromeReviewImportAdapter` | surface.chrome | review/import | `SurfaceAdapter` | no-advice guard | `ReviewImportPayload` | live advice |
| `WebLiveDisplaySurface` | surface.web | live display | `SurfaceAdapter` | `ModeSelectorView` | `SurfaceRenderResult` | competition advice |

---

## 12. Core domain types

| Value object | Fields | Invariants | Immutable | Forbidden interpretation |
|--------------|--------|------------|-----------|--------------------------|
| `SurfaceId` | id | non-empty | yes | not actor |
| `SessionId` | id | non-empty | yes | not evidence |
| `ActorId` | id | non-empty | yes | not learner mastery |
| `GameId` | id | non-empty | yes | not result claim |
| `ModeId` | value: SurfaceMode | valid enum | yes | not authority |
| `InputType` | value: enum | valid enum | yes | not evidence |
| `CaptureSource` | surfaceType, device | known type | yes | not identity proof |
| `CaptureFrameRef` | ref, source | non-empty | yes | not exportable |
| `CVConfidenceScore` | value 0..1 | bounded | yes | not certainty |
| `ValidationState` | value: enum | valid enum | yes | not pedagogy |
| `ActivationState` | value: enum | valid enum | yes | not capability claim |
| `WithholdingReason` | value: enum | valid enum | yes | not display |
| `ReplayRecordRef` | ref | non-empty | yes | not federation export |
| `FederationEligibility` | observationOnly: bool | conservative | yes | not semantic export |

---

## 13. Enums and value objects

```text
enum SurfaceType { ANDROID, WEB_CHESSGUIDE, WEB_THEWILHELMSEN, CHROME_EXTENSION, ADMIN_DEMO }

enum SurfaceMode { COMPETITION, LEARNING, REVIEW, BROADCAST_DISPLAY }

enum InputType { BOARD_IMAGE, PIECE_POSITIONS, CLOCK_IMAGE, MOVE_LIST, PGN, FEN, PLAYER_CONTEXT, LEARNER_REFLECTION, EXTERNAL_GAME_CONTEXT }

enum ValidationState { DRAFT, VALIDATED, INVALID, AMBIGUOUS }

enum AdviceClass { DISPLAY_ONLY, REVIEW_ONLY, LEARNING_ALLOWED, SUPPRESSED, FORBIDDEN }

enum ActivationState { INACTIVE, READ_ONLY, ACTIVE }

enum WithholdingReason {
  COMPETITION_MODE,
  BROADCAST_MODE,
  LOW_CONFIDENCE,
  INVALID_POSITION,
  BUDDY_INACTIVE,
  LARIS_INACTIVE,
  FEDERATION_BOUNDARY,
  BIOMETRIC_BOUNDARY,
  ACTIVE_GAME_UNCERTAIN
}
```

---

## 14. CV capture classes

### `CaptureRequest`
- **Fields:** `surfaceId`, `actorId`, `inputType`, `consentState`, `requestedMode`.
- **Invariants:** consent present for camera inputs.
- **Forbidden authority:** cannot set validation/mode decision.

### `CaptureFrame`
- **Fields:** `frameRef: CaptureFrameRef`, `source: CaptureSource`, `timestamp`.
- **Invariants:** immutable reference; not exported.

### `CaptureEvent`
- **Fields:** `eventId`, `surfaceId`, `actorId`, `frameRef`, `inputType`, `consentState`, `timestamp`.
- **Immutable:** yes (append-only).
- **Forbidden authority:** never `EvidenceRecord`.

### `CVCaptureSurface` (interface)
- See §10.

### `CVCaptureCoordinator`
- **Responsibility:** orchestrate capture; emit event.
- **Forbidden authority:** advice, learner mutation.

### `CVCaptureEventFactory`
- **Responsibility:** construct immutable `CaptureEvent`.

```text
CVCaptureCoordinator.capture(request: CaptureRequest): CaptureEvent
CVCaptureEventFactory.create(surfaceId: SurfaceId, actorId: ActorId, frameRef: CaptureFrameRef, inputType: InputType, consentState: ConsentState): CaptureEvent
```

---

## 15. Android capture classes

```text
AndroidCVCaptureSurface.captureFrame(request: CaptureRequest): CaptureEvent
AndroidBoardCameraSession.start(sessionId: SessionId, consentState: ConsentState): CaptureSessionRef
AndroidClockCaptureSession.start(sessionId: SessionId, consentState: ConsentState): CaptureSessionRef
AndroidContextCaptureSession.start(sessionId: SessionId, consentState: ConsentState): CaptureSessionRef
AndroidLocalDraftStore.storeDraft(draft: CVDerivedPositionDraft, custody: CustodyState): DraftRef
```

- `AndroidCVCaptureSurface implements CVCaptureSurface`.
- `AndroidLocalDraftStore` keeps drafts locally with custody flags.
- **Forbidden authority:** local learner-state mutation, advice in Competition Mode.
- **No Android implementation is created here.**

---

## 16. Board / piece / clock detector classes

```text
BoardDetector.detectBoard(frame: CaptureFrame, context: DetectionContext): BoardDetectionResult
SquareGridDetector.detectGrid(boardImage: BoardImageRef): SquareGridResult
BoardOrientationResolver.resolve(grid: SquareGridResult, hints: OrientationHints): BoardOrientationResult
PieceDetector.detectPieces(frame: CaptureFrame, grid: SquareGridResult): PieceDetectionResult
ClockDetector.detectClock(frame: CaptureFrame): ClockReadResult
```

- `PieceClassifierResult` carries per-piece confidence.
- `ClockReadResult` carries OCR confidence.
- **Forbidden authority:** all detectors produce drafts, never evidence.

---

## 17. Player / context detector classes

```text
PlayerContextDetector.detectContext(frame: CaptureFrame, consent: ConsentState): PlayerContextSignal
BiometricBoundaryGuard.evaluate(signal: PlayerContextSignal, consent: ConsentState): BiometricBoundaryDecision
```

- `PresenceSignal`, `TurnContextSignal`, `PlayerIdentityHint` are non-biometric context only.
- **No pulse-like or biometric inference allowed without separate governance.**

---

## 18. Confidence and ambiguity classes

```text
ConfidenceThresholdPolicy.evaluate(envelope: CVConfidenceEnvelope, inputType: InputType): ConfidenceDecision
AmbiguousPositionPolicy.failClosed(draft: CVDerivedPositionDraft, reason: WithholdingReason): ModeGateDecision
```

- `CVConfidenceEnvelope` carries `CVConfidenceScore` per detection.
- `AmbiguityMarker` flags uncertain squares/pieces.
- Low confidence → fail closed to no semantic output.

---

## 19. Mode gate classes

```text
ModeGate.evaluate(request: ModeGateRequest): ModeGateDecision
```

**`ModeGateRequest` fields:** `surfaceId`, `surfaceType`, `mode`, `inputType`, `activeGameState`, `validationState`, `confidence`, `activationState`, `consentState`, `fairPlayContext`, `requestedOutputClasses`.

**`ModeGateDecision` fields:** `allowedOutputs`, `suppressedOutputs`, `requiredWarnings`, `replayReason`, `withholdingDecision`, `failClosed`.

- `AllowedOutputSet`, `SuppressedOutputSet`, `ModeGateDecisionReason` are immutable value objects.

---

## 20. Mode policy classes

```text
SurfaceModePolicy.allowedOutputsFor(request: ModeGateRequest): AllowedOutputSet
SurfaceModePolicy.suppressedOutputsFor(request: ModeGateRequest): SuppressedOutputSet
```

- `CompetitionModePolicy`, `LearningModePolicy`, `ReviewModePolicy`, `BroadcastDisplayModePolicy` extend/realize `SurfaceModePolicy`.

---

## 21. Competition / Learning / Review / Broadcast guard classes

```text
CompetitionModeGuard.evaluate(request: ModeGateRequest): ModeGuardDecision
LearningModeGuard.evaluate(request: ModeGateRequest): ModeGuardDecision
ReviewModeGuard.evaluate(request: ModeGateRequest): ModeGuardDecision
BroadcastDisplayGuard.evaluate(request: ModeGateRequest): ModeGuardDecision
NoAdviceGuard.suppressAdvice(request: ModeGateRequest, reason: WithholdingReason): SuppressedOutputSet
ActiveGameGuard.evaluate(surfaceType: SurfaceType, mode: SurfaceMode, gameState: ActiveGameState): ActiveGameDecision
```

- All guards `implements ModeGuard`.

---

## 22. Deterministic validation classes

```text
DeterministicPositionValidator.validateFen(request: FenValidationRequest): PositionValidationResult
DeterministicPositionValidator.validateMove(position: FenString, move: MoveNotation): LegalMoveValidationResult
```

- `InvalidPositionReason` enumerates failure causes.
- **Future implementation may use python-chess or equivalent, but no code is added now.**

---

## 23. TSS/SCC adapter classes

```text
TssSccReviewAdapter.requestScan(request: TssSccRequest, modeDecision: ModeGateDecision): Optional<TssSccResultRef>
TssSccSuppressionPolicy.shouldSuppress(mode: SurfaceMode, activeGameState: ActiveGameState): Boolean
```

- Returns empty in Competition/Broadcast modes.

---

## 24. Stockfish / engine reference adapter classes

```text
EngineReferenceAdapter.requestReference(request: EngineReferenceRequest, modeDecision: ModeGateDecision): Optional<EngineReferenceResultRef>
EngineSuppressionPolicy.shouldSuppress(mode: SurfaceMode, surfaceType: SurfaceType): Boolean
```

- **No engine output in Competition Mode.**

---

## 25. MTPAI / model adapter classes

```text
PedagogicalModelAdapter.requestDraft(request: ModelOutputRequest, modeDecision: ModeGateDecision): Optional<ModelOutputDraft>
ModelOutputGuard.evaluate(draft: ModelOutputDraft, modeDecision: ModeGateDecision): ModelOutputGuardDecision
```

- **No model output in competition.**

---

## 26. Buddy adapter classes

```text
BuddyOutputAdapter.requestExplanation(request: BuddyExplanationRequest, activationState: ActivationState, modeDecision: ModeGateDecision): Optional<BuddyExplanationDraft>
BuddyActivationGate.evaluate(activationState: ActivationState, mode: SurfaceMode): BuddyGateDecision
```

- `BuddySuppressionPolicy` blocks Competition/Broadcast.

---

## 27. Learner Graph / Learning Frontier adapter classes

```text
LearnerGraphReadAdapter.readSignals(learnerId: LearnerId, request: LearnerGraphReadRequest): LearnerGraphReadResult
LearningFrontierReadAdapter.readFrontier(learnerId: LearnerId, modeDecision: ModeGateDecision): Optional<LearningFrontierView>
LearnerStateMutationGuard.rejectSurfaceMutation(request: SurfaceMutationRequest): RejectionResult
```

- **Surfaces cannot mutate learner state.**

---

## 28. Knowledge Graph adapter classes

```text
KgConceptReadAdapter.readConcept(conceptRef: CorpusRef): KgConceptView
KgTeachingSuppressionPolicy.shouldSuppress(mode: SurfaceMode): Boolean
```

- No KG teaching content in Competition Mode.

---

## 29. Web live display classes

```text
WebLiveDisplaySurface.render(payload: SurfaceDisplayPayload, decision: ModeGateDecision): SurfaceRenderResult
ModeSelectorView.requestModeChange(request: ModeTransitionRequest): ModeTransitionDecision
```

- `LiveGameDisplayPayload` carries board/clock/move/status only.

---

## 30. thewilhelmsen.com surface adapter classes

```text
TheWilhelmsenSurfaceAdapter.preparePayload(payload: SurfaceDisplayPayload, decision: ModeGateDecision): TheWilhelmsenSurfacePayload
TheWilhelmsenGovernanceBoundary.assertNoIndependentAdvice(payload: TheWilhelmsenSurfacePayload): BoundaryCheckResult
```

- `TheWilhelmsenModeBridge` carries ModeGate decision to host.
- **The adapter is future design only. No changes to `ronnywilhelmsen/thewilhelmsen.com`.**

---

## 31. Chrome review/import classes

```text
ChromeReviewImportAdapter.prepareReviewContext(context: ExternalGameContext, modeDecision: ModeGateDecision): Optional<ReviewImportPayload>
ChromeNoAdviceGuard.evaluate(context: ExternalGameContext, activeGameState: ActiveGameState): ModeGuardDecision
```

- Returns empty near active online games.

---

## 32. Creator replay classes

```text
CreatorReplayEnvelope.fromModeDecision(decision: ModeGateDecision, event: CaptureEvent): CreatorReplayEnvelope
ReplayRecorder.record(envelope: CreatorReplayEnvelope): ReplayRecordRef
```

- `SuppressionReplayRecord`, `ModeTransitionReplayRecord` capture why outputs were suppressed/transitioned.

---

## 33. Federation withholding classes

```text
FederationWithholdingGuard.evaluate(request: FederationExportRequest): FederationWithholdingDecision
FederationEligibilityResult.allowObservationOnly(reason: ReplayReason): FederationEligibilityResult
```

- **No CV frames, semantic outputs, TSS/CCT/Buddy/model outputs, or learner data exported.**

---

## 34. Privacy / consent / biometric classes

```text
CaptureConsentPolicy.evaluate(surface: SurfaceType, inputType: InputType, actor: ActorId): ConsentDecision
BiometricBoundaryGuard.rejectIfBiometric(signal: PlayerContextSignal): PrivacyBoundaryDecision
```

- `RetentionPolicyDraft` and `PrivacyBoundaryDecision` defer retention/deletion to future governance.

---

## 35. Immutable state transition model

| Event | Fields | Producer | Consumer | Immutable | Replay purpose |
|-------|--------|----------|----------|-----------|----------------|
| `CaptureEventRecorded` | eventId, surface, actor, frameRef, inputType, consent | `CVCaptureCoordinator` | detection | yes | what was captured |
| `CVDraftCreated` | draftId, eventId, inputType | detectors | confidence | yes | what was derived |
| `CVConfidenceAttached` | draftId, confidence | `ConfidenceScorer` | mode gate | yes | how certain |
| `PositionValidationRequested` | draftId, request | validator | validator | yes | validation attempt |
| `PositionValidationCompleted` | draftId, validationState | validator | mode gate | yes | validation outcome |
| `ModeGateEvaluated` | requestId, allowed, suppressed, reason | `ModeGate` | surfaces | yes | gate decision |
| `OutputSuppressed` | requestId, reason | guards | replay | yes | why suppressed |
| `SurfacePayloadRendered` | surface, payloadRef, mode | surfaces | replay | yes | what shown |
| `ModeTransitionRequested` | from, to, actor | `ModeSelectorView` | mode gate | yes | transition intent |
| `ModeTransitionConfirmed` | from, to, actor, result | mode gate | replay | yes | transition outcome |
| `CreatorReplayRecorded` | recordRef, envelope | `ReplayRecorder` | Creator | yes | continuity |
| `FederationExportWithheld` | requestId, reason | withholding guard | federation | yes | withholding |

**No mutation-in-place is allowed for mode decisions or capture-derived state.**

---

## 36. Function signature catalog

```text
# capture
CVCaptureCoordinator.capture(request: CaptureRequest): CaptureEvent
CVCaptureEventFactory.create(surfaceId: SurfaceId, actorId: ActorId, frameRef: CaptureFrameRef, inputType: InputType, consentState: ConsentState): CaptureEvent
AndroidCVCaptureSurface.captureFrame(request: CaptureRequest): CaptureEvent
AndroidBoardCameraSession.start(sessionId: SessionId, consentState: ConsentState): CaptureSessionRef
AndroidLocalDraftStore.storeDraft(draft: CVDerivedPositionDraft, custody: CustodyState): DraftRef

# detection
BoardDetector.detectBoard(frame: CaptureFrame, context: DetectionContext): BoardDetectionResult
SquareGridDetector.detectGrid(boardImage: BoardImageRef): SquareGridResult
BoardOrientationResolver.resolve(grid: SquareGridResult, hints: OrientationHints): BoardOrientationResult
PieceDetector.detectPieces(frame: CaptureFrame, grid: SquareGridResult): PieceDetectionResult
ClockDetector.detectClock(frame: CaptureFrame): ClockReadResult
PlayerContextDetector.detectContext(frame: CaptureFrame, consent: ConsentState): PlayerContextSignal

# confidence
ConfidenceThresholdPolicy.evaluate(envelope: CVConfidenceEnvelope, inputType: InputType): ConfidenceDecision
AmbiguousPositionPolicy.failClosed(draft: CVDerivedPositionDraft, reason: WithholdingReason): ModeGateDecision

# mode evaluation
ModeGate.evaluate(request: ModeGateRequest): ModeGateDecision
SurfaceModePolicy.allowedOutputsFor(request: ModeGateRequest): AllowedOutputSet
SurfaceModePolicy.suppressedOutputsFor(request: ModeGateRequest): SuppressedOutputSet
CompetitionModeGuard.evaluate(request: ModeGateRequest): ModeGuardDecision
NoAdviceGuard.suppressAdvice(request: ModeGateRequest, reason: WithholdingReason): SuppressedOutputSet
ActiveGameGuard.evaluate(surfaceType: SurfaceType, mode: SurfaceMode, gameState: ActiveGameState): ActiveGameDecision

# deterministic validation
DeterministicPositionValidator.validateFen(request: FenValidationRequest): PositionValidationResult
DeterministicPositionValidator.validateMove(position: FenString, move: MoveNotation): LegalMoveValidationResult

# TSS/SCC handoff
TssSccReviewAdapter.requestScan(request: TssSccRequest, modeDecision: ModeGateDecision): Optional<TssSccResultRef>
TssSccSuppressionPolicy.shouldSuppress(mode: SurfaceMode, activeGameState: ActiveGameState): Boolean

# engine handoff
EngineReferenceAdapter.requestReference(request: EngineReferenceRequest, modeDecision: ModeGateDecision): Optional<EngineReferenceResultRef>
EngineSuppressionPolicy.shouldSuppress(mode: SurfaceMode, surfaceType: SurfaceType): Boolean

# model handoff
PedagogicalModelAdapter.requestDraft(request: ModelOutputRequest, modeDecision: ModeGateDecision): Optional<ModelOutputDraft>
ModelOutputGuard.evaluate(draft: ModelOutputDraft, modeDecision: ModeGateDecision): ModelOutputGuardDecision

# Buddy handoff
BuddyOutputAdapter.requestExplanation(request: BuddyExplanationRequest, activationState: ActivationState, modeDecision: ModeGateDecision): Optional<BuddyExplanationDraft>
BuddyActivationGate.evaluate(activationState: ActivationState, mode: SurfaceMode): BuddyGateDecision

# LG/LF/KG read
LearnerGraphReadAdapter.readSignals(learnerId: LearnerId, request: LearnerGraphReadRequest): LearnerGraphReadResult
LearningFrontierReadAdapter.readFrontier(learnerId: LearnerId, modeDecision: ModeGateDecision): Optional<LearningFrontierView>
LearnerStateMutationGuard.rejectSurfaceMutation(request: SurfaceMutationRequest): RejectionResult
KgConceptReadAdapter.readConcept(conceptRef: CorpusRef): KgConceptView

# rendering
WebLiveDisplaySurface.render(payload: SurfaceDisplayPayload, decision: ModeGateDecision): SurfaceRenderResult
ModeSelectorView.requestModeChange(request: ModeTransitionRequest): ModeTransitionDecision

# thewilhelmsen.com adapter
TheWilhelmsenSurfaceAdapter.preparePayload(payload: SurfaceDisplayPayload, decision: ModeGateDecision): TheWilhelmsenSurfacePayload
TheWilhelmsenGovernanceBoundary.assertNoIndependentAdvice(payload: TheWilhelmsenSurfacePayload): BoundaryCheckResult

# Chrome import
ChromeReviewImportAdapter.prepareReviewContext(context: ExternalGameContext, modeDecision: ModeGateDecision): Optional<ReviewImportPayload>
ChromeNoAdviceGuard.evaluate(context: ExternalGameContext, activeGameState: ActiveGameState): ModeGuardDecision

# replay
CreatorReplayEnvelope.fromModeDecision(decision: ModeGateDecision, event: CaptureEvent): CreatorReplayEnvelope
ReplayRecorder.record(envelope: CreatorReplayEnvelope): ReplayRecordRef

# federation withholding
FederationWithholdingGuard.evaluate(request: FederationExportRequest): FederationWithholdingDecision
FederationEligibilityResult.allowObservationOnly(reason: ReplayReason): FederationEligibilityResult

# consent / biometric guard
CaptureConsentPolicy.evaluate(surface: SurfaceType, inputType: InputType, actor: ActorId): ConsentDecision
BiometricBoundaryGuard.rejectIfBiometric(signal: PlayerContextSignal): PrivacyBoundaryDecision
```

(40+ design signatures; **no executable code**.)

---

## 37. Composition model

- `ModeGate` **composes** guards (`CompetitionModeGuard`, `LearningModeGuard`, `ReviewModeGuard`, `BroadcastDisplayGuard`, `ActiveGameGuard`, `NoAdviceGuard`).
- `WebLiveDisplaySurface` **composes** `ModeSelectorView` and `SurfaceRenderResult`.
- `AndroidCVCaptureSurface` **composes** board/clock/context capture sessions.
- `TheWilhelmsenSurfaceAdapter` **composes** `TheWilhelmsenGovernanceBoundary` and display payload.
- `SemanticInterpretationContext` **composes** read-only adapters.
- `CreatorReplayEnvelope` **composes** mode decision, capture event, validation state, and withholding decision.

---

## 38. Inheritance / interface model

- `AndroidCVCaptureSurface implements CVCaptureSurface`
- `WebLiveDisplaySurface implements SurfaceAdapter`
- `TheWilhelmsenSurfaceAdapter implements SurfaceAdapter`
- `ChromeReviewImportAdapter implements SurfaceAdapter`
- `CompetitionModeGuard implements ModeGuard`
- `LearningModeGuard implements ModeGuard`
- `ReviewModeGuard implements ModeGuard`
- `BroadcastDisplayGuard implements ModeGuard`
- `DeterministicPositionValidator implements PositionValidator`
- `TssSccReviewAdapter implements SemanticAdapter`
- `FederationWithholdingGuard implements FederationGuard`

---

## 39. Sequence flows

### Flow 1: Android capture in Competition Mode
- **Input:** board frame, COMPETITION mode.
- **Sequence:** `AndroidCVCaptureSurface` → `CVCaptureCoordinator` → `BoardDetector` → `ConfidenceThresholdPolicy` → `DeterministicPositionValidator` → `ModeGate` → `CompetitionModeGuard` → `WebLiveDisplaySurface`.
- **Mode decision:** display/record only.
- **Output:** board/clock/move display.
- **Suppressed:** engine/TSS/Buddy/model/Frontier.
- **Creator replay:** `ModeGateEvaluated` + `OutputSuppressed` + `CreatorReplayRecorded`.

### Flow 2: Android capture in Learning Mode
- **Input:** board frame, LEARNING mode (non-competitive).
- **Sequence:** capture → detect → confidence → validate → `ModeGate` → `LearningModeGuard` → `TssSccReviewAdapter` → `KgConceptReadAdapter` → `LearningFrontierReadAdapter`.
- **Mode decision:** safe pedagogy allowed.
- **Output:** CCT/TSS/KG/Frontier (gated).
- **Suppressed:** mastery claims.
- **Creator replay:** full pedagogy replay.

### Flow 3: Web/thewilhelmsen.com live display in Competition Mode
- **Input:** live game state.
- **Sequence:** `WebLiveDisplaySurface` → `TheWilhelmsenSurfaceAdapter` → `TheWilhelmsenGovernanceBoundary` → `ModeGate` → `BroadcastDisplayGuard`.
- **Mode decision:** display-only.
- **Output:** board/clock/moves/status + no-advice banner.
- **Suppressed:** engine/TSS/Buddy/model.
- **Creator replay:** display replay.

### Flow 4: Review import from Chrome
- **Input:** external game PGN/FEN.
- **Sequence:** `ChromeReviewImportAdapter` → `ChromeNoAdviceGuard` → `DeterministicPositionValidator` → `ModeGate` → `ReviewModeGuard` → `TssSccReviewAdapter`.
- **Mode decision:** review allowed (game ended).
- **Output:** review context + scan.
- **Suppressed:** live-game advice.
- **Creator replay:** review replay.

### Flow 5: Mode transition from Competition to Review
- **Input:** mode-change request.
- **Sequence:** `ModeSelectorView` → `ModeGate` → `ActiveGameGuard` → confirmation.
- **Mode decision:** allow only if game ended/non-competitive.
- **Output:** review mode.
- **Suppressed:** advice if active-game uncertain (fail closed).
- **Creator replay:** `ModeTransitionRequested` + `ModeTransitionConfirmed`.

### Flow 6: Failed CV confidence path
- **Input:** ambiguous board frame.
- **Sequence:** capture → detect → `ConfidenceThresholdPolicy` (below threshold) → `AmbiguousPositionPolicy.failClosed`.
- **Mode decision:** no semantic output.
- **Output:** draft/uncertain marker, user confirmation request.
- **Suppressed:** all semantics.
- **Creator replay:** `OutputSuppressed` with `LOW_CONFIDENCE`.

### Flow 7: Federation withholding path
- **Input:** export request for CV/semantic output.
- **Sequence:** `FederationWithholdingGuard.evaluate` → withhold.
- **Mode decision:** n/a.
- **Output:** lossy ObservationRecord eligibility only.
- **Suppressed:** CV frames/semantic/learner data.
- **Creator replay:** `FederationExportWithheld`.

---

## 40. Error and fail-closed behavior

- unknown mode → **no-advice**
- ambiguous active-game state → **no-advice**
- low CV confidence → **no semantic output**
- invalid FEN → **no TSS/SCC**
- Buddy inactive → **no Buddy output**
- MTPAI gate inactive → **no model output**
- federation request for semantic output → **withhold**
- thewilhelmsen.com boundary uncertain → **display-only payload**

---

## 41. Runtime behavior preview

This is a **preview only, not implementation**:

- future runtime would process a capture via `CVCaptureCoordinator`, producing `CaptureEvent`.
- `ModeGate` would evaluate mode/validation/activation/fair-play and emit `ModeGateDecision`.
- surfaces would receive **allowed payloads only**; suppressed outputs would never reach the surface.
- Creator would record a `CreatorReplayEnvelope` for each meaningful transition.
- federation would withhold all CV/semantic data via `FederationWithholdingGuard`.

---

## 42. ChessBuddy / ChessGuide shared reality check

- Buddy can only see **governed, mode-allowed reality**.
- Buddy **cannot infer learner understanding from CV**.
- Buddy **cannot appear in Competition/Broadcast modes**.
- Buddy must receive **replay/custody context**.
- ChessGuide reality must include **what was shown and what was suppressed**.

---

## 43. thewilhelmsen.com shared reality check

- thewilhelmsen.com is a **hosted surface, not independent authority**.
- It can show **real-time game displays**.
- It can show a **mode selector**.
- It can show Learning/Review outputs **only through ChessGuide-governed payloads**.
- It must **preserve ModeGate decisions**.
- Creator must replay **what thewilhelmsen.com showed or suppressed**.

---

## 44. Creator real-time to 100-year continuity check

Creator must be able to replay:

- who captured
- where it was displayed
- which mode was active
- what input type existed
- what validation happened
- what was allowed
- what was suppressed
- why it was suppressed
- which versions of policies/adapters were used
- what federation withheld

---

## 45. Federation boundary check

- no CV frames
- no CV confidence
- no semantic CV output
- no TSS/CCT
- no Buddy/model output
- no learner state
- no mode history
- no thewilhelmsen.com surface payload
- only separately governed **lossy ObservationRecord** remains eligible

---

## 46. Rejection criteria

Reject if:

- LLD cannot trace to philosophy
- LLD skips governance
- LLD does not map HLD components to classes
- LLD lacks function signatures
- LLD lacks immutable state changes
- UML missing component/class/sequence coverage
- ModeGate can leak advice in competition
- CV draft becomes evidence directly
- surfaces can mutate learner state
- thewilhelmsen.com bypasses ChessGuide governance
- Creator replay cannot explain suppression
- federation can export semantic data
- Buddy appears before activation
- LARIS appears
- runtime code is added

---

## 47. Acceptance gates

- LLD document created
- UML file created
- no runtime code
- no tests
- no schemas
- no thewilhelmsen.com changes
- ACG table included
- vertical continuity trace included
- class model included
- interface model included
- function signatures included
- composition/inheritance included
- immutable state transitions included
- sequence flows included
- Creator continuity check included
- federation boundary check included

---

## 48. Future implementation waves

- **PR #30:** LLD/OOP/UML only
- **PR #31:** TheWilhelmsen Integration HLD or cross-repo plan
- **PR #32:** CV runtime skeleton behind feature flag
- **PR #33:** mode-gate runtime types
- **PR #34:** deterministic validation adapter
- **PR #35:** Android capture sandbox
- **PR #36:** web/thewilhelmsen live display sandbox
- **PR #37:** Chrome review/import sandbox
- **PR #38:** Creator replay event store
- **PR #39:** federation withholding tests
- **PR #40:** TSS/SCC integration
- later Buddy after BLAP gates

---

## 49. Open questions

| ID | Question |
|----|----------|
| **CV-LLD-OQ-1** | What is the exact runtime language boundary (Python/TS/Kotlin) per surface? |
| **CV-LLD-OQ-2** | What exact CV model/tooling will detectors use? |
| **CV-LLD-OQ-3** | What FEN validation library (python-chess or equivalent)? |
| **CV-LLD-OQ-4** | What confidence thresholds per input type? |
| **CV-LLD-OQ-5** | How is board orientation resolved reliably? |
| **CV-LLD-OQ-6** | What clock OCR approach and validation? |
| **CV-LLD-OQ-7** | What player/context privacy constraints apply? |
| **CV-LLD-OQ-8** | Is biometric inference excluded permanently or deferred? |
| **CV-LLD-OQ-9** | What mode transition UX confirmations are required? |
| **CV-LLD-OQ-10** | How is active-game state detected per surface? |
| **CV-LLD-OQ-11** | What is the thewilhelmsen.com deployment relationship? |
| **CV-LLD-OQ-12** | What cross-repo API contract is needed? |
| **CV-LLD-OQ-13** | How are replay events stored durably? |
| **CV-LLD-OQ-14** | What federation withholding tests are required? |
| **CV-LLD-OQ-15** | What Android camera permission model applies? |
| **CV-LLD-OQ-16** | What Chrome active-game detection is required? |
| **CV-LLD-OQ-17** | What web display latency budget applies? |
| **CV-LLD-OQ-18** | What offline mode behavior is allowed? |
| **CV-LLD-OQ-19** | How is synchronization across surfaces handled? |
| **CV-LLD-OQ-20** | What is the first prototype ordering? |

---

## 50. Recommendation

- Accept **CV-MODE-LLD-001** as Draft LLD.
- Accept UML as **draft structural design**.
- Next step should be either:
  - **TheWilhelmsen Integration HLD / cross-repo plan**, if web live display is prioritized, or
  - **CV runtime skeleton behind feature flag**, if local prototype is prioritized.
- Do **not** implement runtime until acceptance gates are satisfied.

---

## 51. Governance boundary statement

**CV-MODE-LLD-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates **human-readable LLD and UML design artifacts only**.
