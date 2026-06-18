# Android CV Framework & Modular Android Architecture Review v1.0

| Field | Value |
|-------|-------|
| **Document ID** | ANDROID-CV-FR-001 |
| **Title** | Android CV Framework & Modular Android Architecture Review v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Architecture Review |
| **Date** | 2026-06-18 |
| **Scope** | Android computer vision framework evaluation, modular Android architecture, future Android Studio readiness, user-facing flow implications, mode-gated safety, and governance boundaries |
| **Depends on** | [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [CV-MODE-LLD-001](./CV-Mode-Gated-Surfaces-LLD-v1.0.md), [CV-Mode-Gated-Surfaces-UML-v1.0.puml](./uml/CV-Mode-Gated-Surfaces-UML-v1.0.puml), [SPC-HLD-ADR-001](./Surface-Payload-Contract-HLD-ADR-v1.0.md), [SPC-SCHEMA-DRAFT-001](./Surface-Payload-Contract-Schema-Draft-v1.0.md), [TW-INT-HLD-001](./TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), ADR-001 through ADR-008, [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- **ANDROID-CV-FR-001 is a Draft Architecture Review.**
- It creates **no Android Studio project**.
- It creates **no Android runtime**.
- It creates **no Gradle/Kotlin/Java/Compose files**.
- It creates **no dependencies**.
- It creates **no datasets**.
- It creates **no model files**.
- It creates **no training scripts**.
- It creates **no tests**.
- It modifies **no `src/`**.
- It modifies **no thewilhelmsen.com**.
- It activates **neither Buddy nor LARIS**.

---

## 2. Executive summary

- PR #34 defines the **Android CV framework and modular Android architecture strategy before implementation**.
- Acceptance/hardening is **postponed** because we do not yet know the user-facing app flow, modules, buttons, screens, dependencies, or framework boundaries.
- Android CV must be **modular** because ChessGuide needs board geometry, piece detection, clock reading, context capture, ontology/KG mapping, deterministic validation, ModeGate, payload output, Creator replay, and future Buddy/TSS/LF integration.
- **Android Studio code should not start until Android HLD/UX/LLD/OOP/UML are created.**
- First Android Studio code should be a **minimal app shell only** after this architecture review and follow-up HLD/LLD are accepted.

---

## 3. Why PR #34 replaces premature acceptance/hardening

- Acceptance/hardening **without implementation targets is premature**.
- Acceptance tests require knowledge of:
  - screens
  - buttons
  - user flows
  - mode transitions
  - camera permission flow
  - frame capture flow
  - error states
  - confidence UX
  - no-advice banners
  - payload handoff
  - module boundaries
  - dependencies
- Therefore the next governance step must be **Android CV framework and modular architecture review**, not Surface Payload Contract Acceptance / Hardening.

---

## 4. Strategic question

**How can ChessGuide choose Android CV frameworks and Android Studio architecture so that multiple future modules can be integrated without collapsing governance, learning boundaries, fair-play mode gates, Creator replay, or federation withholding?**

**Answer:** By using a **layered Android architecture** where camera capture, classical CV, ML detection, ontology mapping, deterministic validation, ModeGate, surface payload generation, and replay/export guards are **separate modules with explicit authority boundaries**.

---

## 5. Design goals

- Android-first CV
- modular Android Studio readiness
- explicit framework selection lanes
- no-advice competition mode
- support for board/piece/clock/context CV
- ontology/KG mapping without local doctrine authority
- deterministic validation before semantic use
- payload contract integration
- Creator replay
- federation withholding
- future TSS/SCC/LF/Buddy integration
- no runtime yet

---

## 6. Non-goals

- no Android Studio project now
- no Kotlin/Java/Gradle/Compose
- no dependencies added
- no CV runtime
- no model runtime
- no object detector implementation
- no training pipeline
- no dataset download
- no annotation tooling setup
- no thewilhelmsen.com changes
- no acceptance/hardening of schema yet
- no production schema acceptance
- no Buddy/LARIS activation

---

## 7. Vertical Architecture Continuity Requirement

| Layer | Android CV meaning | Framework implication | Verification question |
|-------|--------------------|------------------------|------------------------|
| Philosophy / learning theory | capture ≠ learning; a recognized board is not mastery | CV frameworks produce drafts, not understanding | Can a CV output imply learning proof? (must be no) |
| Governance / ADR | ADR-001–008 boundaries hold on device | no framework bypasses ADR limits | Which ADR governs each CV output? |
| Review / Strategy | aligns with ANDROID-STRAT / CV-MODE-STRAT | lanes trace to strategy | Does each lane trace to strategy? |
| HLD | CV-MODE-HLD surfaces/components | framework wrapped behind HLD adapters | Does a lane map to an HLD component? |
| LLD / OOP / UML | future Android LLD adapter types | framework hidden behind interfaces | Can the lane be lowered to LLD/UML? |
| Android Studio runtime | none now; future waves | runtime only after gates | Is runtime deferred? (must be yes) |
| Immutable state transitions | draft captures + validation snapshots | append-only drafts, no silent truth | Are CV drafts append-only/replayable? |
| ChessBuddy / ChessGuide shared reality | Buddy gated; CV never improvises Buddy | detector output is not Buddy speech | Can Buddy leak pre-activation? (must be no) |
| thewilhelmsen.com hosted reality | host shows governed payloads only | no raw frames to host | Can host receive raw CV frames? (must be no) |
| Creator real-time to 100-year continuity | every capture/mode/validation replayable | replay metadata required per lane | Can Creator replay the capture? (must be yes) |
| Federation boundary | no CV/semantic export | withholding required | Can CV data be exported? (must be no) |

**If a future Android module cannot be traced from learning philosophy through runtime and Creator replay, it must not be implemented.**

---

## 8. Existing Android/CV commitments from prior docs

- **Android is the primary CV capture surface.**
- Android camera can observe **board, pieces, clock, context**.
- Android may submit **captured frames / derived FEN** later.
- Android **must not provide live advice**.
- Android **must not mutate learner state locally**.
- CV-derived state is **draft until deterministic validation**.
- Web/thewilhelmsen.com **displays live game state with mode gates**.
- Chrome remains **review/import-first**.
- **Future Android HLD/LLD/UML required before runtime.**

---

## 9. Computer vision problem taxonomy

| CV problem | Example in ChessGuide | Best-fit framework lane | Runtime location | Governance risk | Future module |
|------------|------------------------|--------------------------|------------------|-----------------|---------------|
| camera acquisition | open camera, stream frames | CameraX | local | low (permission/visibility) | feature:camera |
| image preprocessing | denoise, normalize, crop | OpenCV | local | low | feature:board-cv |
| board geometry | find board outline | OpenCV | local | medium (false truth) | feature:board-cv |
| square mapping | map 64 squares | OpenCV | local | medium | feature:board-cv |
| perspective correction | warp to top-down | OpenCV | local | medium | feature:board-cv |
| board orientation | which side is white | OpenCV + heuristic | local | medium | feature:board-cv |
| piece detection | locate pieces | YOLO candidate / ML Kit / MediaPipe | local/server | high (treated as evidence) | feature:piece-cv |
| piece classification | type + color | YOLO / LiteRT / ViT research | local/server | high | feature:piece-cv |
| piece tracking | temporal smoothing | detection + tracking | local | medium | feature:piece-cv |
| clock OCR / digit reading | read times | OpenCV + OCR/model | local/server | medium | feature:clock-cv |
| player/context recognition | turn/presence only | minimal CV | local | high (privacy) | feature:context-cv |
| semantic concept mapping | map to KG concepts | ChessGuide KG/ontology | server (governed) | high (doctrine) | integration:chessguide-api |
| validation to legal chess state | legal FEN check | deterministic validation | server/local | high (truth gate) | core:validation |
| uncertainty/confidence UX | show "draft only" | UI + confidence model | local | medium | feature:* UX |
| payload emission | governed payload | Surface Payload Contract | server (governed) | high | core:payload |
| replay/custody | replay metadata | Creator replay | server (governed) | high | core:replay |

---

## 10. Framework candidate overview

| Framework/platform | Primary strength | Android role | Training role | Runtime role | Risk | Recommendation |
|--------------------|------------------|--------------|---------------|--------------|------|----------------|
| **CameraX** | camera lifecycle/capture | default camera layer | none | capture/preview | low | adopt as camera lane |
| **OpenCV** | classical CV/geometry | board geometry/preprocess | none | geometry | low/medium (license, native size) | adopt as geometry lane |
| **ML Kit** | easy on-device detection/OCR | prototype detection/OCR | none | prototype | low/medium (closed) | evaluate for prototype/OCR |
| **MediaPipe Tasks Vision** | standardized on-device tasks | live-stream detection | none | on-device detection | medium | evaluate detection lane |
| **LiteRT / TF Lite** | mobile model runtime | run exported models | export target | on-device inference | medium | adopt later for custom models |
| **Ultralytics YOLOv8 / YOLO11** | fast detection + training | possible export to mobile | strong (training) | offline/possible mobile | medium/high (AGPL license) | evaluate as detector lane |
| **Detectron2** | segmentation/research | not Android-first | research | server/offline | high (heavy) | research lane only |
| **Hugging Face Vision / Timm / ViT** | classification/research | not first runtime | research/compare | server/offline | medium | research/compare lane |
| **Label Studio** | annotation | none (tooling) | dataset labeling | none | low/medium (data custody) | annotation lane |
| **CVAT** | annotation (CV-focused) | none (tooling) | dataset labeling | none | low/medium | annotation lane |
| **ChessGuide KG / ontology** | semantic mapping | cache refs only | none | server semantic mapping | high (doctrine) | governed semantic lane |
| **deterministic validation** | legal chess truth | local/server check | none | validation gate | high (truth) | validation lane |

---

## 11. CameraX role

- **Candidate default Android camera layer.**
- Provides **preview and `ImageAnalysis` pipeline**.
- Owns **capture, frame flow, permission boundary, lifecycle**.
- **Must not interpret chess semantics.**
- Future module: **`AndroidCameraCaptureModule`** (feature:camera).
- First Android Studio code should likely start with **CameraX preview + ImageAnalysis sandbox** after HLD/LLD.

---

## 12. OpenCV role

- **Candidate default classical CV / geometry lane.**
- Board grid detection, perspective correction, square segmentation, preprocessing.
- Can run **Android-side or server-side** depending on performance.
- Must output **draft geometry/confidence, not final truth**.
- Future module: **`BoardGeometryModule` / `ImagePreprocessingModule`** (feature:board-cv).

---

## 13. ML Kit role

- **Candidate for on-device object detection / OCR-like utility / fast prototype.**
- Useful for **Android-friendly experiments**.
- Not necessarily final for **chess-specific brikkegjenkjenning** (piece recognition).
- Must **not produce advice or learner-state mutation**.
- Future module: **`AndroidObjectDetectionPrototypeModule`** (feature:piece-cv prototype).

---

## 14. MediaPipe Tasks Vision role

- **Candidate for Android live-stream object detection pipeline.**
- Useful if we want **standardized on-device detection tasks**.
- Must be **wrapped behind an interface**.
- Future module: **`MediaPipeVisionDetectorAdapter`**.

---

## 15. LiteRT / TensorFlow Lite lineage role

- **Candidate runtime for custom trained mobile models.**
- Best used **after dataset + annotation + model evaluation**.
- Future module: **`OnDeviceModelInferenceAdapter`**.
- Must be **mode-gated and never advice-generating by itself**.

---

## 16. Ultralytics YOLOv8 / YOLO11 role

- **Candidate for piece/object detection and rapid training iteration.**
- Likely strong for detecting **piece boxes / classes** from board images.
- Could be used in **training/offline experiments** and possibly exported to mobile runtime later.
- **Not automatically the Android runtime choice.**
- Needs dataset, labels, evaluation, export path, **license review (AGPL implications)**, performance tests.
- Future module: **`PieceDetectorModelCandidate`**.

---

## 17. Detectron2 role

- **Candidate for advanced segmentation/research.**
- Useful if **piece/board segmentation needs pixel-level masks**.
- Likely **heavier and more server/offline research-oriented** than Android-first.
- **Not a first Android runtime dependency.**
- Future module: **`SegmentationResearchCandidate`**.

---

## 18. Hugging Face Vision / Timm / ViT role

- **Candidate for research and model comparison**, especially classification / transformer-based vision.
- Likely **more training/research lane** than first Android runtime.
- Could help **compare against YOLO-like detectors**.
- Future module: **`VisionModelResearchLane`**.

---

## 19. Label Studio / CVAT role

- **Annotation/data tooling candidates.**
- **Needed before serious model training.**
- They are **not runtime components**.
- Support labeling **board corners, pieces, clocks, positions, ambiguity**.
- Future module/process: **`DatasetAnnotationPipeline`**.

---

## 20. ChessGuide KG / ontology role

- Ontology/KG **maps detected low-level facts to concepts**.
- Android **must not own ontology authority**.
- Local Android may **cache labels/refs only**.
- **ChessGuide governed runtime owns semantic mapping.**
- Future module: **`ConceptMappingAdapter` / `KgReferenceMapper`**.

---

## 21. Deterministic chess validation role

- Candidate **FEN / piece state must be validated against chess rules**.
- Validation happens **before TSS/SCC, review, learning, or payload semantics**.
- **Ambiguous states remain draft.**
- Future module: **`DeterministicPositionValidationAdapter`**.

---

## 22. Recommended framework lane strategy

A **multi-lane architecture**:

- **Camera lane:** CameraX
- **Geometry lane:** OpenCV
- **Detection lane:** YOLO candidate + ML Kit/MediaPipe/LiteRT evaluation
- **Research lane:** Detectron2 / Hugging Face / Timm
- **Annotation lane:** CVAT / Label Studio
- **Semantic lane:** ChessGuide KG/ontology
- **Validation lane:** deterministic chess validation
- **Surface lane:** Surface Payload Contract
- **Replay lane:** Creator
- **Governance lane:** ModeGate / FederationWithholding

**Do not choose one universal framework. Choose lanes.**

---

## 23. Android Studio module architecture

Future Android Studio modules/packages (**names only, not implementation**):

- `app`
- `core:model`
- `core:mode`
- `core:payload`
- `core:replay`
- `core:privacy`
- `feature:camera`
- `feature:board-cv`
- `feature:piece-cv`
- `feature:clock-cv`
- `feature:context-cv`
- `feature:review`
- `feature:learning`
- `feature:competition`
- `feature:broadcast`
- `integration:chessguide-api`
- `integration:thewilhelmsen-surface`
- `data:local-drafts`
- `data:sync`
- `testing:sandbox`

**These are future module names only, not implementation.**

---

## 24. Android app shell and navigation model

Future top-level app areas:

- **Home**
- **Capture**
- **Live Game**
- **Review**
- **Learning**
- **Settings**
- **Privacy / Consent**
- **Developer Sandbox**

---

## 25. Human-facing screens and buttons

**Screens (candidate):**

- Mode Selection screen
- Camera Setup screen
- Board Capture screen
- Calibration / Align Board screen
- Live Display screen
- Competition Mode screen
- Learning Mode screen
- Review Mode screen
- Ambiguity Resolution screen
- Consent / Privacy screen
- Payload Debug screen
- Sync / Replay screen

**Buttons (candidate):**

- Start capture
- Stop capture
- Select mode
- Competition
- Learning
- Review
- Broadcast
- Confirm training mode
- Calibrate board
- Re-detect board
- Flip orientation
- Mark ambiguous
- Save draft
- Send for validation
- Open review
- Show what was suppressed
- Confirm no-advice mode
- Acknowledge uncertainty
- Delete local draft

**Buttons are conceptual only.**

---

## 26. User journey: Competition Mode

1. User selects **Competition Mode**.
2. App shows **visible no-advice mode**.
3. Camera may **capture/display/record**.
4. Board/clock/move state may be **mirrored**.
5. **No** TSS/CCT/Buddy/engine/model/LF output.
6. Suppression visible in **developer/replay logs, not as coaching**.
7. After game, user may move to **Review Mode**.

---

## 27. User journey: Learning Mode

1. User selects **Learning Mode** or training session.
2. Camera **captures board**.
3. Board/piece **confidence shown**.
4. Ambiguity **resolved or marked draft**.
5. **Deterministic validation runs later.**
6. TSS/CCT/KG/LF may be shown **after gates**.
7. Buddy **only after BLAP gates**.

---

## 28. User journey: Review Mode

1. User **imports/captures game after play**.
2. App shows **validated position/history**.
3. User sees **safety/tactical review**.
4. User adds **reflection**.
5. Payload/replay/custody created later by **governed runtime**.
6. **No evidence/mastery claim created directly.**

---

## 29. User journey: Broadcast / Display Mode

1. Host selects **Broadcast/Display Mode**.
2. Board/clock/moves/status **shown**.
3. **No advice content.**
4. thewilhelmsen.com may **display governed payload later**.
5. **No** engine/TSS/Buddy/model/LF output.

---

## 30. CV capture pipeline

- request camera permission
- show visible mode
- start CameraX preview
- `ImageAnalysis` frame stream
- frame sampling / throttling
- preprocessing
- board geometry
- piece detection
- clock/context detection
- draft state assembly
- confidence/ambiguity marking
- deterministic validation handoff
- ModeGate handoff
- payload creation later

---

## 31. Board geometry pipeline

- detect board outline
- detect square grid
- estimate orientation
- perspective transform
- square coordinate mapping
- confidence score
- ambiguity state

**Likely framework: OpenCV.**

---

## 32. Piece recognition pipeline

- square crop extraction
- piece present/absent
- type classification
- color classification
- confidence
- temporal smoothing
- ambiguity resolution

**Likely candidates:**

- YOLO for object detection
- ML Kit / MediaPipe for prototypes
- LiteRT for on-device exported model
- Detectron2 for segmentation research if needed
- Hugging Face / Timm for model comparison

---

## 33. Clock recognition pipeline

- clock region detection
- digit/OCR recognition
- time sanity
- active side
- confidence

**Potential framework lanes:**

- OpenCV preprocessing
- OCR/model later
- ML Kit text recognition if evaluated later

---

## 34. Player/context recognition pipeline

- presence/turn context only
- optional player label **if consented**
- **no hidden surveillance**
- **no skill/intent/mastery/psychological inference**
- **biometric/pulse-like signals out of v1**

---

## 35. Ontology / KG mapping pipeline

- low-level CV fact
- candidate chess fact
- validated chess position
- KG concept mapping
- allowed mode
- payload field
- Creator replay

**Ontology/KG mapping is not local Android doctrine.**

---

## 36. Confidence and ambiguity UX

- confidence badges
- uncertain square indicators
- "needs validation"
- "draft only"
- "cannot use for advice"
- ambiguity resolution screen
- user correction as **draft/custody, not evidence**

---

## 37. ModeGate integration

- **All outputs pass through ModeGate.**
- Android local UI **must not bypass it**.
- Competition/Broadcast **suppress advice**.
- Learning/Review **may show governed fields**.
- Mode changes are **explicit, visible, logged, replayable**.

---

## 38. Surface Payload integration

- Future Android **emits or receives Surface Payload Contract payloads**.
- Payload schema **PR #33 is draft only**.
- Payload runtime is **later**.
- Android **must not invent payload semantics**.

---

## 39. Creator replay integration

Future Android actions require replay metadata:

- actor
- device/surface
- mode
- frame refs
- confidence
- validation state
- mode gate decision
- displayed fields
- suppressed fields
- policy version
- payload version

---

## 40. thewilhelmsen.com integration implications

- Android can later feed **governed live display via ChessGuide payload path**.
- thewilhelmsen.com **displays only governed payload**.
- Android **does not push raw CV frames directly** to thewilhelmsen.com.
- ChessGuide owns **mode, validation, payload, replay, federation withholding**.

---

## 41. Federation withholding implications

- **no Android CV frames exported.**
- **no TSS/Buddy/model/LF exported.**
- **no semantic display payload exported.**
- only separately governed **lossy ObservationRecord** remains eligible.

---

## 42. Privacy / consent / biometric boundary

- **no hidden capture**
- camera permission **visible**
- mode **visible**
- **no biometric/pulse-like feature in v1**
- player labels require **explicit configuration/consent**
- **local draft deletion required** in future UX

---

## 43. Dataset and annotation strategy

Future dataset needs:

- board corners
- board orientation
- pieces
- piece colors
- clock regions
- clock digits
- ambiguous squares
- lighting conditions
- camera angles
- physical board styles
- piece set styles

**Tool candidates:** CVAT, Label Studio.

**No datasets now.**

---

## 44. Model training / evaluation strategy

- start with **synthetic/prototype dataset plan**
- evaluate **YOLO family** for piece detection
- evaluate **OpenCV board geometry baseline**
- evaluate **ML Kit/MediaPipe prototype path**
- evaluate **LiteRT export feasibility**
- evaluate **Detectron2/ViT research** only if needed

**Metrics:**

- board grid accuracy
- square mapping accuracy
- piece detection precision/recall
- FEN reconstruction accuracy
- clock read accuracy
- latency
- battery/thermal impact
- ambiguity rate
- **false advice leak rate must be zero**

---

## 45. Local vs server-side inference decision matrix

| Task | Local candidate | Server/offline candidate | Recommendation | Reason |
|------|-----------------|--------------------------|----------------|--------|
| Camera capture | CameraX | — | local | capture is device-bound |
| Board geometry | OpenCV (device) | OpenCV (server) | local-first | low latency, no semantics |
| Piece detection prototype | ML Kit/MediaPipe | YOLO offline | server/offline | iterate fast before mobile export |
| Piece detection production | LiteRT exported | server inference | local-first if feasible | offline use, privacy |
| Clock reading | OpenCV + OCR | server OCR/model | local-first | latency, simple |
| KG mapping | cache only | governed server | server | doctrine authority |
| deterministic validation | local check possible | governed server | server-authoritative | truth gate |
| TSS/SCC | none | governed server | server | system competence boundary |
| Buddy/model | none | governed server (after gates) | server | activation gates |
| Creator replay | metadata stub | governed server | server | continuity custody |
| thewilhelmsen.com display | — | governed payload from ChessGuide | server | host shows governed payload |

---

## 46. Licensing and operational risk

- **Every framework must be license-reviewed before runtime dependency** (note: Ultralytics YOLO is AGPL; OpenCV Apache-2.0; ML Kit/MediaPipe terms; etc.).
- **Model export path must be reviewed.**
- **Hosted/cloud training must be separate governance** if used.
- **Annotation data custody must be governed.**
- **No user data used for training without separate governance.**

---

## 47. Performance and device constraints

- latency
- battery
- thermal throttling
- camera resolution
- frame sampling
- offline mode
- model size
- NPU/GPU availability
- low-end Android devices
- robust lighting

---

## 48. Future Android Studio implementation wave plan

- **Wave A** — Android HLD / UX / module plan
- **Wave B** — Android LLD / OOP / UML
- **Wave C** — Android Studio skeleton only
- **Wave D** — CameraX preview + ImageAnalysis sandbox
- **Wave E** — OpenCV board geometry prototype
- **Wave F** — synthetic piece detection prototype
- **Wave G** — clock CV prototype
- **Wave H** — payload client / mode shell
- **Wave I** — Creator replay metadata stub
- **Wave J** — no-advice tests
- **Wave K** — thewilhelmsen.com synthetic live display handoff

**Android Studio code begins at Wave C only.**

---

## 49. What should be accepted later

- screens
- buttons
- camera permission UX
- no-advice banner UX
- mode selector behavior
- confidence display
- ambiguity resolution
- capture-to-validation flow
- payload emission
- replay metadata
- privacy deletion
- no-advice tests
- latency targets
- battery/thermal target
- framework dependency license review

---

## 50. What must not be accepted yet

- specific model architecture as final
- YOLO as production runtime
- Detectron2 as Android dependency
- Hugging Face/ViT as runtime
- schema as production validator
- Android Studio code structure
- API contract as runtime
- thewilhelmsen.com runtime integration
- Buddy/LARIS display
- live TSS/engine in competition

---

## 51. Failure modes

| Failure mode | Risk | Prevention |
|--------------|------|------------|
| one monolithic Android app module | unmaintainable, boundary collapse | enforce multi-module lanes |
| CameraX directly triggers advice | fair-play breach | ModeGate between capture and output |
| OpenCV geometry treated as truth | wrong reality | draft + deterministic validation |
| YOLO detection treated as evidence | semantic collapse | detection is draft only |
| ambiguity hidden | silent wrong state | mandatory confidence/ambiguity UX |
| mode selector invisible | undetected mode | always-visible mode label |
| Competition leaks TSS warning | cheating | suppression in Competition/Broadcast |
| user cannot delete local draft | privacy breach | delete local draft control |
| raw frames sent to thewilhelmsen.com | privacy/export breach | host receives governed payload only |
| ontology cached as local doctrine | doctrine drift | server owns semantic mapping |
| dataset uses user data without governance | data governance breach | separate governance for training data |
| schema accepted before UX known | premature lock-in | acceptance after UX/HLD/LLD |
| Android Studio code starts before LLD | ungoverned build | code begins at Wave C only |
| Buddy/LARIS surfaces appear before gates | governance breach | BLAP gates enforced |

---

## 52. Acceptance gates for this review PR

- review document only
- no code
- no dependencies
- no Android Studio project
- no runtime
- no tests
- no src changes
- no thewilhelmsen.com changes
- framework candidates evaluated
- multi-lane strategy recommended
- Android module architecture proposed
- human-facing screens/buttons proposed
- Android Studio implementation timing clarified
- privacy/federation/mode boundaries preserved
- future wave plan included

---

## 53. Rejection criteria

Reject if:

- it adds Android code
- it adds dependencies
- it chooses one universal CV framework without lanes
- it recommends Android Studio code before HLD/LLD/UML
- it allows live advice in competition
- it allows raw CV frames to thewilhelmsen.com
- it treats ontology as Android-local authority
- it treats CV output as evidence/mastery
- it activates Buddy/LARIS

---

## 54. Open questions

| ID | Question |
|----|----------|
| **ANDROID-CV-FR-OQ-1** | Is CameraX the confirmed camera baseline? |
| **ANDROID-CV-FR-OQ-2** | Is OpenCV Android-feasible for board geometry at target latency? |
| **ANDROID-CV-FR-OQ-3** | What is the YOLO export/runtime path (and AGPL implications)? |
| **ANDROID-CV-FR-OQ-4** | ML Kit vs MediaPipe for on-device detection? |
| **ANDROID-CV-FR-OQ-5** | Is LiteRT export feasible for our model size/latency? |
| **ANDROID-CV-FR-OQ-6** | Does Detectron2 add server/research value worth the weight? |
| **ANDROID-CV-FR-OQ-7** | Do ViT/Hugging Face models beat detectors for piece classification? |
| **ANDROID-CV-FR-OQ-8** | CVAT or Label Studio as annotation tool? |
| **ANDROID-CV-FR-OQ-9** | Who owns dataset custody and governance? |
| **ANDROID-CV-FR-OQ-10** | How much piece-set variation must we cover? |
| **ANDROID-CV-FR-OQ-11** | How much board-style variation must we cover? |
| **ANDROID-CV-FR-OQ-12** | What lighting conditions must be robust? |
| **ANDROID-CV-FR-OQ-13** | What clock OCR approach is best? |
| **ANDROID-CV-FR-OQ-14** | What is the player-consent model for labels? |
| **ANDROID-CV-FR-OQ-15** | How is training-data governance handled? |
| **ANDROID-CV-FR-OQ-16** | Which tasks run local vs server? |
| **ANDROID-CV-FR-OQ-17** | When should the Android Studio skeleton begin (Wave C timing)? |
| **ANDROID-CV-FR-OQ-18** | What are the precise module boundaries and dependencies? |
| **ANDROID-CV-FR-OQ-19** | What is the no-advice UX standard across screens? |
| **ANDROID-CV-FR-OQ-20** | What is the mode selector UX and visibility rule? |
| **ANDROID-CV-FR-OQ-21** | How is confidence displayed consistently? |
| **ANDROID-CV-FR-OQ-22** | How does the user correct ambiguity safely (draft/custody)? |
| **ANDROID-CV-FR-OQ-23** | How is the thewilhelmsen.com handoff secured? |
| **ANDROID-CV-FR-OQ-24** | What exact Creator replay fields are mandatory? |
| **ANDROID-CV-FR-OQ-25** | How are acceptance tests designed once UX is known? |

---

## 55. Recommendation

- **Accept ANDROID-CV-FR-001 as Draft Architecture Review.**
- **Do not run Surface Payload Acceptance / Hardening yet.**
- Next PR should be **Android CV UX / Human Interaction Flow HLD v1.0** or **Android CV LLD/OOP/UML**, depending on whether we want UX first or structural design first.
- Android Studio code should begin **only after Android HLD/UX and LLD/OOP/UML are accepted**.
- First Android Studio code should be an **app skeleton with CameraX sandbox only**, no advice, no engine, no TSS, no Buddy, no model output.

---

## 56. Governance boundary statement

**ANDROID-CV-FR-001 does not modify** runtime, tests, federation export, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, production schemas, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, API implementation, Gradle files, Kotlin files, Java files, Android Studio files, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **human-readable Android CV framework and modular architecture review only**.
