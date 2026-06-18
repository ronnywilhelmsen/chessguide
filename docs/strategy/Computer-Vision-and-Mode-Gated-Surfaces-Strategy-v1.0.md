# Computer Vision and Mode-Gated Surfaces Strategy v1.0

| Field | Value |
|-------|-------|
| **Document ID** | CV-MODE-STRAT-001 |
| **Title** | Computer Vision and Mode-Gated Surfaces Strategy v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Strategy |
| **Date** | 2026-06-18 |
| **Scope** | computer vision, Android capture, web display, Chrome surface, thewilhelmsen.com integration, and mode-gated surface strategy only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](../architecture/Knowledge-Graph-v1.0.md), [LG-001](../architecture/Learner-Graph-v1.0.md), [LF-001](../architecture/Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](../architecture/Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ANDROID-STRAT-001](./Android-Vision-Strategy-v1.0.md), [CHROME-STRAT-001](./Chrome-Extension-Strategy-v1.0.md), [MTPAI-STRAT-001](./Model-Training-Pedagogical-AI-Strategy-v1.0.md), [ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- CV-MODE-STRAT-001 is a **Draft Strategy**.
- It creates **no runtime**.
- It creates **no CV implementation**.
- It creates **no Android implementation**.
- It creates **no web implementation**.
- It creates **no Chrome implementation**.
- It creates **no thewilhelmsen.com changes**.
- It does **not** activate Buddy or LARIS.
- It defines **future CV and mode-gated surface strategy only**.

---

## 2. Executive summary

- Computer Vision should be **Android-first** because Android is best suited for physical board, pieces, clock, and player-context capture.
- Web remains important as a **real-time display and mode-gated surface**.
- **thewilhelmsen.com** is a separate internal project/repo that may become a ChessGuide web host / live display surface.
- Chrome remains **browser-adjacent** and must be more restricted in active online play.
- All surfaces must obey **mode gates**: competition, learning, review, and broadcast/display.
- The same board or game data may be **safe in one mode and forbidden in another**.
- **No live-game advice in competition mode.**
- No Stockfish, TSS, Buddy, or model output may leak into competitive play.

---

## 3. Strategic question

**How can ChessGuide use Computer Vision and multiple surfaces to capture, display, and review chess activity without enabling cheating, boundary collapse, or ungoverned AI assistance?**

By making CV input and surface behavior **mode-gated**: Android captures board/clock/context, web/thewilhelmsen.com displays and coordinates games, Chrome handles safe review/import, and every surface obeys strict **competition/learning/review** mode boundaries.

---

## 4. Why Computer Vision belongs in ChessGuide

- CV can **bridge physical chess and digital learning continuity**.
- CV can capture **board state, pieces, clock, and context**.
- CV can support **physical-board learners**.
- CV can help **reconstruct episodes**.
- CV can feed future **deterministic validation and TSS/SCC**.
- CV is **not proof of learner understanding**.
- CV is **not evidence** until processed through a future governed pipeline.
- CV must **not become live advice**.

---

## 5. Android-first CV strategy

- Android is the **primary CV capture surface**.
- Camera can observe **physical board, pieces, clock, and context**.
- Android can support **training/study sessions, post-game review, and learner reflections**.
- Android can eventually submit **captured frames/derived FEN** to governed runtime.
- Android must **not provide live advice** in competition mode.
- Android must **not turn camera input into learner-state mutation locally**.
- Android CV must use **local draft/provenance boundaries** until server/governed validation.

---

## 6. Web / thewilhelmsen.com strategy

- **thewilhelmsen.com is a separate internal project/repo**, not an external third-party site in this context.
- It may become a future ChessGuide **web host / live display surface**.
- It can show **real-time board, moves, clocks, game status, and mode selector**.
- It can run or present **ChessGuide-controlled game/session views**.
- It should **not be treated as ungoverned external web**.
- It must still **preserve ChessGuide governance**.
- It must **not provide competitive advice** unless in explicit Learning/Review mode.
- It must support a **clear surface-level mode flag**.

---

## 7. Chrome strategy relationship

- Chrome remains **browser-adjacent**.
- Chrome should be **review/import-first**.
- Chrome must be **stricter near active online games**.
- Chrome must **never inject live advice** into active games.
- Chrome can later **hand off safe review context** to ChessGuide/thewilhelmsen.com.

---

## 8. Mode-gated surface model

**Policy equation:** `Surface + Input + Mode = Allowed behavior`

**Surfaces:**

- Android app
- ChessGuide web app
- thewilhelmsen.com hosted surface
- Chrome extension
- future admin/demo surface

**Inputs:**

- board image
- piece positions
- clock image
- move list
- PGN/FEN
- player/context signal
- learner reflection
- external game context

**Modes:**

- Competition Mode
- Learning Mode
- Review Mode
- Broadcast / Display Mode

Mode must be **explicit, visible, logged, replayable, and enforceable**.

---

## 9. Competition Mode

**Allowed:**

- show board
- show clock
- show moves
- show whose turn it is
- show player names if explicitly configured
- record/save game for later review
- show game status
- mirror a physical board to a digital display
- support timekeeping/display
- preserve provenance for later review

**Forbidden:**

- Stockfish
- engine evaluation
- best move
- candidate move suggestions
- CCT hinting
- TSS warnings that affect the ongoing game
- Buddy explanations
- pedagogical model output
- tactical motifs
- learning frontier recommendation
- "you are hanging a piece" warning
- automatic capture-to-advice
- any live coaching signal

---

## 10. Learning Mode

**Allowed:**

- CCT checklist
- TSS/SCC safety scan
- "are you in check?"
- "which pieces are hanging?"
- candidate moves after safety gate
- pedagogical explanations
- KG concept refs
- Learning Frontier focus
- Buddy later, after BLAP gates
- Stockfish as labelled reference, not teacher truth
- ML/pedagogical model output only after future gates

**Forbidden:**

- claiming mastery
- impersonating learner rationale
- hiding uncertainty
- using engine-best as learning-best
- exporting semantic data to federation

---

## 11. Review Mode

**Allowed:**

- post-game or self-owned analysis
- reconstruct from CV/FEN/PGN
- TSS/SCC scan
- CCT explanation
- candidate-move discussion
- learner reflection
- future Buddy explanation
- Creator replay metadata
- Learning Frontier linkage

**Forbidden:**

- changing historical evidence silently
- treating review annotations as original game evidence
- creating mastery claims without stewardship

---

## 12. Broadcast / display mode

**Allowed:**

- show game live
- show board
- show clock
- show moves
- show player labels if permitted
- show non-advisory status
- show "competition/no-advice mode" banner

**Forbidden:**

- engine eval
- Stockfish lines
- TSS/CCT hints
- Buddy/model explanations
- learning-frontier content
- any player-specific advice

---

## 13. Computer Vision input taxonomy

| Input type | Source surface | Safe modes | Prohibited modes | Output | Validation requirement | Privacy/custody requirement |
|------------|----------------|------------|------------------|--------|------------------------|-----------------------------|
| Board image | Android (primary), web upload | all (display only in competition) | advice generation in competition | candidate FEN draft | deterministic rule validation | consent, visible capture |
| Piece positions | Android CV | all (draft) | evidence in competition | typed/colored pieces + confidence | deterministic validation | consent |
| Clock image | Android, web | all (time only in competition) | advice in competition | time read + confidence | sanity check | consent |
| Move list | web, Chrome import | all | silent evidence mutation | structured moves | PGN/FEN validation | provenance |
| PGN/FEN | all surfaces | all | unvalidated trust | normalized position | python-chess validation | provenance |
| Player/context signal | Android CV | learning/review (governed) | hidden surveillance | presence/turn context | governed processing | explicit consent |
| Learner reflection | Android, web | learning/review | competition advice | reflection draft | none (subjective) | learner-owned custody |
| External game context | Chrome | review/import | live-game advice | safe review context | governed import | provenance |

---

## 14. Board CV

- Detects **board geometry and square grid**.
- Reconstructs **board orientation**.
- May produce a **candidate FEN**.
- Must **mark confidence**.
- Must be **validated by the deterministic rule lane**.
- Ambiguous board state **remains draft/uncertain**.

---

## 15. Piece CV

- Detects **piece types and colors**.
- Can be **uncertain**.
- Must preserve **confidence and ambiguity**.
- Cannot **silently become evidence**.
- Can support **training/review only after validation**.

---

## 16. Clock CV

- Can read a **chess clock or digital timer**.
- Useful for **decision-time analysis**.
- In competition/display modes, can **show/record time only**.
- In learning/review mode, can support **time-pressure reflection**.
- Must **not use time stress to generate live advice** in competition.

---

## 17. Player / context CV

- Can detect **presence, turn-taking context, or attention-like context** only if governed.
- Can help **identify who is playing** if explicitly configured and consented.
- Should **not be hidden surveillance**.
- Should **not infer psychology, skill, intent, or mastery**.
- Should **not become biometric classification** without separate governance.

---

## 18. Biometric / pulse-like signal boundary

- Camera-based **pulse or stress detection** is technically possible but must be treated as **biometric/sensitive**.
- Do **not** treat the camera as a **pulsklokke** replacement in v1.
- Initial strategy may allow only **non-medical, non-biometric context signals** such as presence, turn, clock, and timing.
- Any pulse-like or stress inference requires **separate privacy, consent, biometric, and medical-boundary governance**.
- It **cannot** be used for claims, mastery, or hidden profiling.

---

## 19. Real-time web display strategy

- Web can show **real-time game state**.
- Web can be useful **while playing**, as long as mode is **Competition/Broadcast** and **no advice** is emitted.
- Web can show **moves, clocks, board state, and game status**.
- Web can later switch to **Learning/Review mode** only when the session is no longer active competitive play or explicitly marked as training.
- Web must **clearly display the active mode**.

---

## 20. Web mode selector strategy

- **Competition Mode** button
- **Learning Mode** button
- **Review Mode** button
- **Broadcast / Display Mode** button

State:

- Mode must be **visible**.
- Mode changes must be **logged**.
- Some transitions **require confirmation**.
- Switching from Competition to Learning during an active game must **block advice** unless the game is explicitly training/non-competitive.
- Mode history must be **Creator-replayable**.

---

## 21. thewilhelmsen.com integration model

- thewilhelmsen.com is an **internal related project/repository**: `ronnywilhelmsen/thewilhelmsen.com`.
- It may **host or present ChessGuide web surfaces**.
- It may show **real-time games, moves, clocks, and controlled game views**.
- It may provide a **public/private portal** depending on future governance.
- It must **not become an ungoverned assistant**.
- It must use **ChessGuide-governed APIs or embedded surfaces** only after future HLD/LLD/runtime design.
- **This PR does not modify thewilhelmsen.com.**
- Future integration may require a **separate cross-repo HLD and coordinated PRs** in both repositories.
- thewilhelmsen.com should be treated as a **surface/host, not as source doctrine**.

---

## 22. Governance foundation

| Source | Relevance to CV / mode-gated surfaces | Strategy consequence |
|--------|----------------------------------------|----------------------|
| **ADR-001** | LearningTrace evidence/custody | CV input is not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | CV-derived concepts are pointers |
| **ADR-003** | evidence records | CV frames ≠ evidence until processed |
| **ADR-004** | claims / stewardship | CV cannot create claims/mastery |
| **ADR-005** | DecisionTrace | CV ≠ learner rationale |
| **ADR-006** | Buddy pedagogy | no Buddy in competition mode |
| **ADR-007** | Stockfish / SCC boundary | no engine in competition mode |
| **ADR-008** | KG / corpus governance | CV labels honour curation |
| **ACG-001** | architecture continuity | CV/surfaces preserve full chain |
| **STRR-001** | roadmap controller | strategy only; runtime later |
| **CGSR-002** | strategic identity | surfaces are lanes, not doctrine |
| **KG-001** | domain graph | CV concepts anchor, not prove |
| **LG-001** | learner-specific derived state | surfaces cannot mutate learner state |
| **LF-001** | planning read model | Frontier only in learning/review |
| **TSS-SCC-LLD-001** | safety scanner design | TSS withheld in competition |
| **BLAP-001** | activation plan | Buddy/LARIS gated |
| **ANDROID-STRAT-001** | Android strategy | Android is CV-first surface |
| **CHROME-STRAT-001** | Chrome strategy | no live-game advice |
| **MTPAI-STRAT-001** | model-training strategy | no model advice in competition |
| **FEDERATION.md** | federation withholding | no CV frames/semantic export |

---

## 23. Architecture Continuity Gate

| Layer | CV / surface interpretation | Boundary | Future consequence |
|-------|------------------------------|----------|--------------------|
| Philosophy / learning theory | CV is a sensory bridge, not learning proof | CV ≠ understanding | grounds mode gating |
| Governance / ADR | CV input honours ADR-001–008 | doctrine beats runtime | gates encode ADR limits |
| Review / HLD | surfaces trace to STRR/CGSR | strategy ≠ implementation | needs CV/Mode HLD next |
| Future LLD / OOP / UML | mode gates and CV pipelines named (§37) | design ≠ runtime | LLD/UML before CV runtime |
| Immutable state transitions | frames/FEN/clock/mode versioned | no silent mutation | replayable surface lineage |
| Runtime implementation | none now; prototypes are sandbox | runtime after gates | guarded CV/surface service later |
| ChessBuddy / ChessGuide reality sharing | surface shows only governed outputs in allowed modes | no advice in competition | Buddy display after BLAP |
| Creator continuity | mode/input/surface/actor/policy versions replayable | no flattening | 100-year surface replay |
| Federation boundary | no CV frames/semantic outputs exported | lossy ObservationRecord only | widening needs separate path |

---

## 24. Vertical Architecture Continuity Trace

| Layer | CV / mode-gated surface trace |
|-------|-------------------------------|
| Philosophy / learning theory | learning philosophy → CV as sensory bridge, not learning proof |
| Governance / ADR | governance/ADR → CV input is not evidence until processed |
| Review / HLD | reviews/HLD → Android/web/Chrome are surfaces, not doctrine |
| Future LLD / OOP / UML | future LLD/OOP/UML → mode gates and CV pipelines later |
| Immutable state transitions | immutable state → captured frames/FEN/clock/mode transitions versioned/replayable |
| Runtime implementation | runtime → no runtime now |
| ChessBuddy / ChessGuide reality sharing | reality-sharing → surface displays only governed outputs in allowed modes |
| Creator real-time to 100-year continuity | Creator continuity → mode, input, surface, actor, and policy versions replayable |
| Federation boundary | federation → no CV frames, semantic outputs, or hints exported |

---

## 25. TSS/SCC boundary

- TSS/SCC may use **CV-derived validated position** only in **allowed modes**.
- In **competition mode**, TSS/SCC warnings must be **withheld** from player-facing surfaces.
- In **learning/review mode**, TSS/SCC can explain **P0–P5**.
- CV-derived position must be **validated before TSS/SCC**.

---

## 26. Stockfish / engine boundary

- Stockfish may be used only in **allowed learning/review contexts**.
- **No Stockfish in competition mode.**
- No engine eval in broadcast/display mode unless an explicitly governed non-player public broadcast policy is later defined.
- **Engine-best is not learning-best.**
- Stockfish cannot become **live web advice**.

---

## 27. python-chess / deterministic validation boundary

- Future **CV-derived FEN must pass deterministic validation**.
- `python-chess` may validate **legality, check, mate, side to move, FEN sanity**.
- Deterministic validation is **not pedagogy and not mastery**.
- Invalid/ambiguous CV state **remains draft**.

---

## 28. Model Training / pedagogical AI boundary

- Model-based interpretation may help later only **after MTPAI gates**.
- **No local ungoverned model output** on Android/web/Chrome.
- **No model advice in competition mode.**
- Model output may become **ExplanationDraft** only through future guards.

---

## 29. Buddy boundary

- Buddy **inactive** until BLAP gates.
- Buddy output may be displayed only in **Learning/Review modes** after activation.
- Buddy **cannot appear in Competition Mode**.
- Buddy cannot certify mastery or learner rationale.
- Buddy must honour **TSS P0/P1**.

---

## 30. LARIS boundary

- LARIS **inactive**.
- LARIS must **not appear** through CV/web/Android/Chrome.
- Any future LARIS continuity surface requires a **separate activation path**.

---

## 31. Learner Graph / Learning Frontier boundary

- CV/session data may later contribute to learner evidence only through an **explicit governed pipeline**.
- Android/web/Chrome **cannot mutate** Learner Graph or Learning Frontier directly.
- Frontier recommendations are allowed only in **Learning/Review modes**.
- **No Frontier recommendations in Competition Mode.**

---

## 32. Creator continuity boundary

Future events must preserve:

- surface
- mode
- actor
- timestamp
- source
- input type
- CV confidence
- deterministic validation status
- policy version
- TSS/SCC version
- KG version
- Buddy/LARIS activation state
- federation withholding decision
- mode transitions

Creator must replay **why a surface showed only display data in competition** and **why additional pedagogy was allowed in learning/review**, in real time and after 100 years.

---

## 33. Federation boundary

- **No CV frames exported.**
- **No clock image exported.**
- **No player/context image exported.**
- No TSS/CCT/Buddy/Model/Learner Graph/Frontier output exported.
- Federation remains **lossy/non-semantic ObservationRecord only**.
- Mode history and CV-derived semantic data are **internal** unless separately governed.

---

## 34. Privacy, consent, and custody boundary

- **explicit consent** for camera capture
- **visible camera state**
- **no hidden capture**
- **no biometric inference** without separate governance
- **no player identification** without consent
- **local/remote custody flags**
- **deletion and retention strategy** later
- **no background scraping or capture**
- **child/minor/school context** requires separate governance

---

## 35. Fair-play / anti-cheating boundary

- The same system must **never behave as a coach during active competitive play**.
- **Competition Mode is display/record only.**
- Chrome active-game **no-advice policy remains binding**.
- Android camera must **not generate advice** during competition.
- Web/thewilhelmsen.com must **not show hints, engine eval, CCT, TSS, Buddy, or model output** in competition/broadcast mode.
- **Learning Mode must be explicit and safe.**
- **Mode abuse is a rejection criterion.**

---

## 36. Android / Web / Chrome comparison matrix

| Surface | Primary use | CV role | Real-time role | Allowed in Competition Mode | Allowed in Learning Mode | Prohibited | Future HLD need |
|---------|-------------|---------|----------------|------------------------------|---------------------------|------------|-----------------|
| **Android** | physical capture + reflection | primary CV capture | board/clock/context capture | display/record only | full CV + safe pedagogy | live advice in competition; local learner-state mutation | AndroidCVHLD |
| **Web app** | display + coordination | CV upload/review | live board/move/clock display | display/broadcast only | safe pedagogy/review | engine/TSS/Buddy in competition | WebSurfaceHLD |
| **thewilhelmsen.com** | hosted live display surface | presents CV-derived views | real-time games/clocks | display/broadcast only | governed learning/review surface | ungoverned assistant; advice in competition | TheWilhelmsenIntegrationHLD |
| **Chrome extension** | review/import | none (import only) | passive context only | none (no-advice near live) | safe review/import | live-game injection/advice | ChromeNoAdviceHLD |

---

## 37. Future HLD / LLD / OOP / UML path

Future artifacts/classes:

- `ComputerVisionHLD`
- `ModeGatedSurfaceHLD`
- `AndroidCVHLD`
- `WebSurfaceHLD`
- `TheWilhelmsenIntegrationHLD`
- `ChromeNoAdviceHLD`
- `CVFrameCapture`
- `BoardDetector`
- `PieceDetector`
- `ClockDetector`
- `PlayerContextDetector`
- `CVConfidenceEnvelope`
- `CVDerivedPositionDraft`
- `ModeGate`
- `SurfaceModePolicy`
- `CompetitionModeGuard`
- `LearningModeGuard`
- `ReviewModeGuard`
- `BroadcastDisplayGuard`
- `SurfaceEventReplayEnvelope`
- `TheWilhelmsenSurfaceAdapter`
- `FederationWithholdingGuard`

Future **HLD/LLD/OOP/UML required before runtime**.

---

## 38. Future runtime wave path

- **PR #28:** strategy only
- CV + mode-gated surfaces HLD
- CV LLD/OOP/UML
- Android CV prototype, **sandbox only**
- web/thewilhelmsen.com display HLD
- mode selector prototype
- deterministic validation pipeline
- safe review mode
- TSS/SCC integration after validation
- Buddy display after BLAP gates
- full runtime only after tests and guardrails

---

## 39. Rejection criteria

Reject if:

- CV can produce **live advice in Competition Mode**
- web/thewilhelmsen.com can show **engine eval during competition**
- Android can show a **TSS warning during competitive play**
- Chrome can **inject hints into active online games**
- mode is **hidden or not replayable**
- a mode transition can **silently enable advice**
- CV frames become **evidence without processing**
- player/context CV becomes **biometric inference without governance**
- thewilhelmsen.com is treated as an **external third-party site**
- **thewilhelmsen.com is modified** in this PR
- **Buddy/LARIS is activated**
- **federation is widened**
- **runtime code is added**

---

## 40. Open questions

| ID | Question |
|----|----------|
| **CV-MODE-OQ-1** | What is the first safe CV prototype? |
| **CV-MODE-OQ-2** | Should Android board capture support physical boards first? |
| **CV-MODE-OQ-3** | How should clock capture be validated? |
| **CV-MODE-OQ-4** | What confidence threshold is needed for FEN? |
| **CV-MODE-OQ-5** | How is ambiguity shown to the learner? |
| **CV-MODE-OQ-6** | How are mode transitions confirmed? |
| **CV-MODE-OQ-7** | How does thewilhelmsen.com host ChessGuide surfaces? |
| **CV-MODE-OQ-8** | Is thewilhelmsen.com public, private, or mixed? |
| **CV-MODE-OQ-9** | How are real-time games displayed without advice? |
| **CV-MODE-OQ-10** | What is allowed in training games? |
| **CV-MODE-OQ-11** | How is player identity handled? |
| **CV-MODE-OQ-12** | Are biometric/pulse-like signals ever allowed? |
| **CV-MODE-OQ-13** | What Chrome active-game detection is required? |
| **CV-MODE-OQ-14** | What Creator replay fields are mandatory? |
| **CV-MODE-OQ-15** | What tests are required before runtime? |

---

## 41. Recommendation

- Accept **CV-MODE-STRAT-001** as Draft Strategy.
- Treat Computer Vision as **Android-first**.
- Treat web/thewilhelmsen.com as a **governed real-time display and mode-gated ChessGuide surface**.
- Treat Chrome as **review/import-first** and **no-advice near live games**.
- Do **not** implement CV yet.
- Do **not** modify thewilhelmsen.com yet.
- The next step after acceptance should be a **CV + Mode-Gated Surfaces HLD**, or a **TheWilhelmsen Integration HLD** if the web host path is prioritized.

---

## 42. Governance boundary statement

**CV-MODE-STRAT-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **human-readable strategy only**.
