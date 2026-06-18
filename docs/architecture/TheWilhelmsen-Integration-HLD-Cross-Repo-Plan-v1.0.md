# TheWilhelmsen Integration HLD / Cross-Repo Plan v1.0

| Field | Value |
|-------|-------|
| **Document ID** | TW-INT-HLD-001 |
| **Title** | TheWilhelmsen Integration HLD / Cross-Repo Plan v1.0 |
| **Version** | 1.0 |
| **Status** | Draft HLD / Cross-Repo Plan |
| **Date** | 2026-06-18 |
| **Scope** | high-level integration design and cross-repo planning for ChessGuide and thewilhelmsen.com as a governed web host / live display / mode-gated surface |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), [TSS-SCC-LLD-001](./Tactical-Safety-Scanner-SCC-LLD-v1.0.md), [BLAP-001](../reviews/Buddy-LARIS-Activation-Plan-v1.0.md), [ANDROID-STRAT-001](../strategy/Android-Vision-Strategy-v1.0.md), [CHROME-STRAT-001](../strategy/Chrome-Extension-Strategy-v1.0.md), [MTPAI-STRAT-001](../strategy/Model-Training-Pedagogical-AI-Strategy-v1.0.md), [CV-MODE-STRAT-001](../strategy/Computer-Vision-and-Mode-Gated-Surfaces-Strategy-v1.0.md), [CV-MODE-HLD-001](./CV-Mode-Gated-Surfaces-HLD-v1.0.md), [CV-MODE-LLD-001](./CV-Mode-Gated-Surfaces-LLD-v1.0.md), [CV-Mode-Gated-Surfaces-UML-v1.0.puml](./uml/CV-Mode-Gated-Surfaces-UML-v1.0.puml), [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Related internal project** | ronnywilhelmsen/thewilhelmsen.com |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- TW-INT-HLD-001 is a **Draft HLD / Cross-Repo Plan**.
- It creates **no runtime**.
- It creates **no integration implementation**.
- It creates **no thewilhelmsen.com changes**.
- It creates **no API implementation**.
- It creates **no schema**.
- It creates **no tests**.
- It creates **no LLD**.
- It creates **no UML**.
- It does **not** activate Buddy or LARIS.
- It defines a **high-level integration plan only**.

---

## 2. Executive summary

- **ChessGuide** is the governed learning system.
- **thewilhelmsen.com** is an internal related project/repository and possible future **web host / live display / mode-gated surface**.
- thewilhelmsen.com may show ChessGuide games in real time: **board, moves, clocks, player labels, status, and mode selector**.
- thewilhelmsen.com must **not become independent chess authority or ungoverned assistant**.
- **ChessGuide owns** governance, mode gates, CV semantics, learning state, Buddy boundaries, Creator replay, and federation withholding.
- thewilhelmsen.com may display only **governed payloads** emitted through future ChessGuide-controlled adapters/API.
- **Competition Mode must remain display/record only.**
- Learning/Review modes may show TSS/CCT/Buddy later **only after gates**.
- Every displayed or suppressed output must be **Creator-replayable**.

---

## 3. Integration question

**How can ChessGuide use thewilhelmsen.com as a live web surface without weakening ChessGuide governance, fair-play, mode gates, learner-state boundaries, Creator continuity, or federation withholding?**

By making thewilhelmsen.com a **governed host/surface** that receives **mode-gated display payloads** from ChessGuide, never raw authority, never independent advice, and never semantic export authority.

---

## 4. Design goals

- internal cross-repo clarity
- real-time game display
- mode-gated output
- no-advice competition mode
- governed learning/review display
- Android CV to web display path
- Chrome review/import to web review path
- Creator replay preservation
- federation withholding
- privacy and consent
- no runtime yet
- future implementation sequencing

---

## 5. Non-goals

- no code
- no runtime
- no thewilhelmsen.com modification
- no cross-repo PR
- no API implementation
- no frontend implementation
- no backend implementation
- no live deployment
- no CV implementation
- no Buddy activation
- no LARIS activation
- no federation widening
- no schema
- no test

---

## 6. thewilhelmsen.com project identity

- **Repository:** `ronnywilhelmsen/thewilhelmsen.com`
- **Relationship:** internal related project
- **Role:** possible future ChessGuide web host / live display / presentation surface
- **Not role:** source doctrine, chess authority, independent coach, engine wrapper, federation exporter, learner-state owner
- **This PR does not modify that repo.**

---

## 7. Vertical Architecture Continuity Requirement

| Layer | Integration meaning | thewilhelmsen.com implication | Verification question |
|-------|---------------------|-------------------------------|------------------------|
| Philosophy / learning theory | display is shared reality, not truth | host shows, never proves learning | Can a display imply mastery? (must be no) |
| Governance / ADR | ADR boundaries hold across repos | host honours ADR limits | Which ADR governs each field? |
| Review / HLD | this plan aligns with CV HLD | host = surface, not doctrine | Does plan trace to CV-MODE-HLD-001? |
| LLD / OOP / UML | uses `TheWilhelmsenSurfaceAdapter` | host respects LLD adapters | Does plan respect CV-MODE-LLD-001? |
| Immutable state transitions | payloads/transitions versioned | host display acks are replayable | Are display events append-only? |
| Runtime behavior | none now | future runtime gated | Is runtime deferred? (must be yes) |
| ChessBuddy / ChessGuide shared reality | host shows governed reality | Buddy only via gated payload | Can host show Buddy pre-activation? (must be no) |
| thewilhelmsen.com hosted reality | host renders allowed fields | host cannot bypass ModeGate | Can host self-decide advice? (must be no) |
| Creator real-time to 100-year continuity | full replay across repos | host display recorded | Can Creator replay host display? (must be yes) |
| Federation boundary | no semantic export | host payload ≠ export | Can host export semantic data? (must be no) |

**If thewilhelmsen.com can display something that ChessGuide cannot explain from philosophy through Creator replay, the integration fails.**

---

## 8. Philosophy-to-integration trace

- thewilhelmsen.com displays a **shared reality, not a separate truth**.
- live display is **not learning proof**.
- visual presence/activity is **not mastery**.
- a displayed move is **not a learner rationale**.
- a CV-derived position is **not evidence** until governed.
- mode gates embody the **ethical distinction** between play, learning, review, and broadcast.

---

## 9. Governance-to-integration trace

| Governance artifact | Integration consequence | Boundary |
|---------------------|--------------------------|----------|
| ADR-001 | display ≠ LearningTrace | no evidence custody on host |
| ADR-002 | corpus_ref stays sovereign | host shows pointers only |
| ADR-003 | display ≠ evidence | no evidence promotion on host |
| ADR-004 | display ≠ claim/mastery | no claims on host |
| ADR-005 | display ≠ learner rationale | no rationale impersonation |
| ADR-006 | Buddy gated | no host Buddy pre-activation |
| ADR-007 | Stockfish reference only | no engine in competition/broadcast |
| ADR-008 | KG curation honoured | host shows governed KG refs only |
| ACG-001 | continuity required | host traces full chain |
| STRR-001 | roadmap discipline | plan before runtime |
| CGSR-002 | strategic identity | host is surface, not doctrine |
| KG-001 | domain graph | KG display gated |
| LG-001 | learner state | host cannot read/mutate LG |
| LF-001 | frontier read model | LF display gated |
| TSS-SCC-LLD-001 | safety scanner | TSS suppressed in competition |
| BLAP-001 | activation plan | Buddy/LARIS gated |
| ANDROID-STRAT-001 | Android CV-first | CV handoff governed |
| CHROME-STRAT-001 | Chrome no-advice | review/import only |
| MTPAI-STRAT-001 | model gated | no host model output |
| CV-MODE-STRAT-001 | mode gates | host obeys modes |
| CV-MODE-HLD-001 | high-level arch | host = surface context |
| CV-MODE-LLD-001 | adapter design | host uses adapter boundary |
| FEDERATION.md | withholding | no host semantic export |

---

## 10. HLD / LLD / UML alignment

- **PR #29** defined high-level architecture (CV-MODE-HLD-001).
- **PR #30** lowered the architecture to LLD/OOP/UML (CV-MODE-LLD-001).
- **This PR** defines the cross-repo integration plan around the `TheWilhelmsenSurfaceAdapter`.
- This PR does **not replace the LLD**.
- Future runtime must respect the LLD's **ModeGate, SurfaceAdapter, CreatorReplayEnvelope, and FederationWithholdingGuard**.

---

## 11. Integration bounded contexts

### 11.1 ChessGuide Governance Context
- **Owns:** ADR/governance authority, mode policy doctrine.
- **Does not own:** hosting/presentation.
- **Allowed inputs:** governance artifacts.
- **Allowed outputs:** policy decisions.
- **Forbidden authority:** delegating governance to host.

### 11.2 ChessGuide Runtime Context
- **Owns:** session/game truth, CV validation, semantics, learner state.
- **Does not own:** web rendering.
- **Allowed inputs:** capture events, imports.
- **Allowed outputs:** surface payloads.
- **Forbidden authority:** emitting advice in competition.

### 11.3 ChessGuide Surface Payload Context
- **Owns:** `SurfaceDisplayPayload` generation.
- **Does not own:** host layout.
- **Allowed inputs:** mode-gate decisions.
- **Allowed outputs:** allowed display fields.
- **Forbidden authority:** forbidden-field leakage.

### 11.4 TheWilhelmsen Host Context
- **Owns:** hosting, layout, routing, display shell.
- **Does not own:** governance, semantics, learner state.
- **Allowed inputs:** governed payloads.
- **Allowed outputs:** rendered display, display acks, mode-change requests.
- **Forbidden authority:** independent advice, ModeGate bypass.

### 11.5 Mode Policy Context
- **Owns:** mode-gate evaluation.
- **Does not own:** rendering.
- **Allowed inputs:** mode/surface/state.
- **Allowed outputs:** decisions.
- **Forbidden authority:** competition advice.

### 11.6 Creator Continuity Context
- **Owns:** replay custody across repos.
- **Does not own:** display.
- **Allowed inputs:** display acks, transitions.
- **Allowed outputs:** replay records.
- **Forbidden authority:** dropping suppression reasons.

### 11.7 Federation Boundary Context
- **Owns:** withholding.
- **Does not own:** semantic data.
- **Allowed inputs:** export requests.
- **Allowed outputs:** lossy ObservationRecord eligibility.
- **Forbidden authority:** exporting display payloads.

### 11.8 User Session Context
- **Owns:** session identity/auth (future).
- **Does not own:** governance.
- **Allowed inputs:** auth/session.
- **Allowed outputs:** session refs.
- **Forbidden authority:** mastery inference.

---

## 12. ChessGuide responsibilities

ChessGuide owns:

- game/session truth
- mode-gate decisions
- CV-derived position validation
- TSS/SCC outputs
- Learning Frontier reads
- Buddy output after gates
- Creator replay
- federation withholding
- surface payload generation
- no-advice enforcement

**ChessGuide does not outsource governance to thewilhelmsen.com.**

---

## 13. thewilhelmsen.com responsibilities

thewilhelmsen.com **may own:**

- visual hosting
- layout
- public/private page routing
- session display shell
- display of governed payloads
- user-facing mode UI shell if delegated

thewilhelmsen.com **must not own:**

- mode policy
- TSS/SCC
- Buddy
- learner state
- claim generation
- engine evaluation
- CV semantic interpretation
- federation export
- Creator replay authority

---

## 14. Shared responsibility boundary

- **ChessGuide decides what is allowed.**
- **thewilhelmsen.com displays only what is allowed.**
- Mode changes requested from thewilhelmsen.com must be **sent to ChessGuide and replayed**.
- Any uncertainty **fails closed** to display-only/no-advice.

---

## 15. Mode-gated surface contract

Conceptual payload: **`SurfaceDisplayPayload`**

Fields:

- payload_id
- session_id
- game_id
- surface_type
- surface_id
- mode
- active_game_state
- allowed_display_fields
- suppressed_output_classes
- warnings
- mode_gate_decision_ref
- creator_replay_ref
- expires_at
- federation_eligibility

This is **conceptual only, not schema**.

---

## 16. Live display contract

**May include:**

- board state
- move list
- current turn
- clock state
- player labels if configured
- game status
- no-advice banner
- mode label
- review availability after game

**May not include in Competition/Broadcast:**

- engine eval
- best move
- candidate moves
- TSS/CCT warnings
- Buddy/model explanation
- Learning Frontier
- learner-state claims
- mastery claims

---

## 17. Competition Mode contract

- display/record only
- no advice
- no Stockfish
- no TSS/CCT
- no Buddy
- no model output
- no learner-frontier content
- no "hanging piece" warnings
- no coaching overlays
- mode must be visible
- Creator must record suppression

---

## 18. Learning Mode contract

- allows governed learning content
- may show TSS/CCT after validation
- may show KG and Learning Frontier
- Buddy only after BLAP gates
- model output only after MTPAI gates
- Stockfish only as labelled reference
- must preserve evidence/claim/mastery boundaries

---

## 19. Review Mode contract

- post-game / self-owned analysis
- imports PGN/FEN/CV-derived position
- may show TSS/SCC and pedagogical content
- can support reflection
- review annotations are **not original-game evidence** unless processed

---

## 20. Broadcast / Display Mode contract

- show game to spectators or room display
- board, moves, clocks, status
- no advice
- no engine
- no TSS/CCT
- no Buddy/model output
- no player-specific coaching
- clear no-advice banner

---

## 21. Android CV handoff to web display

1. Android captures board/clock/context.
2. ChessGuide creates draft/custody events.
3. Deterministic validation may occur.
4. ModeGate evaluates allowed outputs.
5. ChessGuide emits `SurfaceDisplayPayload`.
6. thewilhelmsen.com may display only allowed fields.
7. Creator records what was shown and suppressed.
8. Federation withholds semantic data.

---

## 22. Chrome review/import handoff

1. Chrome imports PGN/FEN/context in review-safe context.
2. Chrome does not provide live advice.
3. ChessGuide validates import.
4. ModeGate evaluates review/learning payload.
5. thewilhelmsen.com may host review page if governed.
6. Creator records import and display.
7. Federation withholds semantic data.

---

## 23. Web live display architecture

- live display surface
- mode selector
- no-advice banner
- display payload renderer
- session status renderer
- post-game review entry point

**Web rendering is subordinate to ModeGate.**

---

## 24. TheWilhelmsen surface adapter boundary

Conceptual adapter: **`TheWilhelmsenSurfaceAdapter`**

**Responsibilities:**

- receive governed surface payload
- render or forward display-safe fields
- preserve mode label
- preserve no-advice banner
- prevent independent advice
- report display receipt
- never mutate ChessGuide state directly

**Forbidden:**

- engine eval
- local TSS
- local Buddy
- local model output
- local learner-state mutation
- local federation export

---

## 25. Conceptual cross-repo API boundary

Conceptual future endpoints/messages — **not implemented, not schema**:

| Endpoint / message | Requester | Owner | Allowed mode | Payload class | Forbidden fields | Creator replay | Federation withholding |
|--------------------|-----------|-------|--------------|---------------|------------------|----------------|------------------------|
| `GET /sessions/{session_id}/display` | thewilhelmsen.com | ChessGuide | all (gated) | `SurfaceDisplayPayload` | engine/TSS/Buddy/model in competition | record display | withhold semantic |
| `POST /sessions/{session_id}/mode-transition-request` | thewilhelmsen.com | ChessGuide | all | `ModeTransitionRequest` | silent advice enable | record transition | n/a |
| `POST /sessions/{session_id}/display-ack` | thewilhelmsen.com | ChessGuide | all | `DisplayAck` | learner state | record ack | withhold |
| `GET /sessions/{session_id}/review` | thewilhelmsen.com | ChessGuide | review/learning | `ReviewContextPayload` | live-game advice | record review | withhold |
| `GET /sessions/{session_id}/replay-metadata` | ChessGuide tools | ChessGuide | all | `ReplayMetadata` | semantic export | self-record | withhold |

These are **conceptual only, not API implementation and not schema**.

---

## 26. Event and custody boundary

- **ChessGuide owns custody.**
- thewilhelmsen.com may receive **display payloads, not raw learner-state custody**.
- display acknowledgements may become **Creator replay metadata**.
- thewilhelmsen.com **does not promote evidence**.

---

## 27. Mode transition boundary

- thewilhelmsen.com may **request** mode transition if delegated.
- **ChessGuide must decide** mode transition.
- transitions must be **explicit, visible, confirmed when needed, and replayable**.
- Competition → Learning during active game must **fail closed** unless explicitly training/non-competitive.

---

## 28. Creator replay boundary

Creator must replay:

- source repo / surface
- ChessGuide session
- thewilhelmsen.com display surface
- active mode
- displayed fields
- suppressed fields
- suppression reason
- policy version
- adapter version
- mode transition history
- federation withholding

---

## 29. ChessBuddy / ChessGuide shared reality boundary

- Buddy **cannot appear on thewilhelmsen.com** unless ChessGuide emits allowed Buddy payload **after BLAP gates**.
- Buddy sees only **governed, mode-allowed reality**.
- Buddy **cannot infer learner understanding** from what is displayed.
- ChessGuide must **know what thewilhelmsen.com showed and suppressed**.

---

## 30. Learner Graph / Learning Frontier boundary

- thewilhelmsen.com **cannot read/mutate Learner Graph** directly.
- thewilhelmsen.com **cannot read/mutate Learning Frontier** directly.
- any LF display must be through **ChessGuide governed payloads** in Learning/Review mode.

---

## 31. TSS/SCC boundary

- TSS/SCC is **ChessGuide-owned**.
- thewilhelmsen.com **cannot run independent TSS/SCC**.
- TSS/SCC outputs **suppressed in Competition/Broadcast**.
- TSS/SCC outputs allowed only in **Learning/Review** after validation and mode gate.

---

## 32. Stockfish / engine boundary

- Stockfish remains **ChessGuide reference lane only**.
- thewilhelmsen.com **cannot run or display engine output in Competition/Broadcast**.
- Learning/Review engine reference must be **labelled and governed**.
- **Engine-best is not learning-best.**

---

## 33. Model Training / pedagogical AI boundary

- thewilhelmsen.com **cannot call future pedagogical model independently**.
- model outputs only through **ChessGuide governed adapter after MTPAI gates**.
- **no model output in Competition/Broadcast**.

---

## 34. Privacy / consent / biometric boundary

- live display may show **player labels only when configured/consented**.
- camera-derived context remains **sensitive**.
- **no hidden surveillance**.
- **no biometric/pulse-like inference** without separate governance.
- thewilhelmsen.com must **not receive raw biometric data**.

---

## 35. Federation withholding boundary

- thewilhelmsen.com display payload is **not federation export**.
- no display payload, mode history, CV frame, TSS/CCT output, Buddy/model output, learner state, or semantic data exported to federation.
- federation remains **lossy ObservationRecord** unless separately governed.

---

## 36. Deployment and ownership boundary

- **ChessGuide repo** owns learning/governance/runtime domain.
- **thewilhelmsen.com repo** owns hosting/presentation site.
- Future deployment must **not mix authority**.
- Future coordinated PRs must identify:
  - ChessGuide changes
  - thewilhelmsen.com changes
  - shared contract version
  - rollback plan
  - no-advice verification
  - Creator replay verification

---

## 37. Future cross-repo PR sequence

- **PR #31** — this HLD / cross-repo plan in ChessGuide
- **PR #32** — Surface payload contract HLD or ADR in ChessGuide
- **PR #33** — TheWilhelmsen read-only display shell plan in thewilhelmsen.com
- **PR #34** — ChessGuide display payload runtime skeleton behind feature flag
- **PR #35** — thewilhelmsen.com read-only display prototype using synthetic/static payload
- **PR #36** — mode transition request design
- **PR #37** — Creator replay for surface display
- **PR #38** — no-advice guard tests
- **PR #39** — real session display integration
- **PR #40** — post-game review surface

**Do not implement this sequence now.**

---

## 38. Failure modes

| Failure mode | Risk | Owner | Guard |
|--------------|------|-------|-------|
| thewilhelmsen.com shows advice in competition | cheating | host | competition no-advice guard |
| mode label missing | ambiguity | host | mode-label requirement |
| display payload includes forbidden fields | leak | ChessGuide | payload field allow-list |
| ChessGuide cannot replay what was shown | continuity loss | ChessGuide | display ack + replay |
| mode transition bypasses ChessGuide | governance breach | host | ChessGuide-decides transition |
| thewilhelmsen.com reads learner state directly | privacy breach | host | LG/LF read prohibition |
| engine output leaks | cheating | both | engine suppression guard |
| TSS warning leaks | cheating | both | TSS suppression guard |
| Buddy appears before activation | governance breach | both | BLAP gate |
| Chrome live context forwarded to learning mode | cheating | ChessGuide | active-game guard |
| CV-derived ambiguity displayed as truth | misinformation | ChessGuide | confidence/validation gate |
| federation exports display payload | data leak | federation | withholding guard |
| cross-repo contract drift | breakage | both | shared contract version |
| deployment mismatches mode policies | governance breach | both | deployment verification |
| privacy label/consent missing | privacy breach | both | consent policy |

---

## 39. Acceptance gates

- HLD/cross-repo plan only
- no code
- no thewilhelmsen.com changes
- no runtime
- no schemas
- no tests
- no LLD/UML
- vertical continuity included
- thewilhelmsen.com identity included
- mode-gated contract included
- conceptual API boundary included
- Creator replay boundary included
- federation withholding included
- fair-play/no-advice included
- future cross-repo sequence included

---

## 40. Rejection criteria

Reject if:

- thewilhelmsen.com treated as external third-party site
- thewilhelmsen.com treated as independent chess authority
- thewilhelmsen.com can bypass ModeGate
- Competition Mode can show advice
- display payload can contain engine/TSS/Buddy/model fields in Competition/Broadcast
- Creator cannot replay display/suppression
- federation boundary unclear
- learner state can be read directly by thewilhelmsen.com
- cross-repo runtime implemented now
- thewilhelmsen.com modified now

---

## 41. Open questions

| ID | Question |
|----|----------|
| **TW-INT-OQ-1** | Is thewilhelmsen.com hosting public, private, or mixed? |
| **TW-INT-OQ-2** | What auth/session identity model is used? |
| **TW-INT-OQ-3** | What display latency budget applies? |
| **TW-INT-OQ-4** | How is live board synchronization handled? |
| **TW-INT-OQ-5** | Who owns the mode selector UI shell? |
| **TW-INT-OQ-6** | How is the cross-repo API versioned? |
| **TW-INT-OQ-7** | What deployment environment(s) apply? |
| **TW-INT-OQ-8** | What privacy policy governs displayed player data? |
| **TW-INT-OQ-9** | What consent UI is required before display? |
| **TW-INT-OQ-10** | What rollback strategy applies across repos? |
| **TW-INT-OQ-11** | What no-advice test strategy is required? |
| **TW-INT-OQ-12** | How is Creator replay stored for cross-repo display? |
| **TW-INT-OQ-13** | What federation withholding tests are required? |
| **TW-INT-OQ-14** | How is the Android-to-web handoff secured? |
| **TW-INT-OQ-15** | How is the Chrome-to-review handoff secured? |
| **TW-INT-OQ-16** | What synthetic demo payload is used for prototypes? |
| **TW-INT-OQ-17** | How is real-time clock sync achieved? |
| **TW-INT-OQ-18** | What hosting and domain boundaries apply? |

---

## 42. Recommendation

- Accept **TW-INT-HLD-001** as Draft HLD / Cross-Repo Plan.
- Next step should be a **Surface Payload Contract HLD/ADR in ChessGuide** or a **read-only display shell plan in thewilhelmsen.com**.
- Do **not** implement runtime until the contract and no-advice guards are defined.
- Do **not** modify thewilhelmsen.com until a coordinated cross-repo PR plan is accepted.

---

## 43. Governance boundary statement

**TW-INT-HLD-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, model artifacts, training scripts, notebooks, CV code, web code, or **LARIS activation**.

It does **not modify** `ronnywilhelmsen/thewilhelmsen.com`.

It creates a **human-readable HLD / cross-repo plan only**.
