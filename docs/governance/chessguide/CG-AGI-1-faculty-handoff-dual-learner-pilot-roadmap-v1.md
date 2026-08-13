# ChessGuide × Personal-AGI Faculty Handoff / Dual-Learner Pilot Roadmap v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1 |
| **Title** | ChessGuide × Personal-AGI Faculty Handoff / Dual-Learner Pilot Roadmap v1 |
| **Version** | 1.0 |
| **Status** | Draft (governance / roadmap only) |
| **Date** | 2026-08-13 |
| **Classification** | Faculty handoff / dual-learner pilot roadmap |
| **Scope** | ChessGuide repository truth + Personal-AGI Faculty interface — no runtime |
| **Parents** | [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-002](CG-002-federation-relationship.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md) |
| **Depends on** | [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [CFA v1.0](../federation/CFA-v1.0.md), [ACG-001](../Architecture-Continuity-Gate-v1.0.md), [CE-MCP-DR-v1](../../reviews/Chrome-Extension-MCP-Discovery-Review-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Related (inherited)** | [CB-000A](../chessbuddy/CB-000A-longitudinal-learning-model.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [ALP-1](../chessbuddy/ALP-1-artifact-learning-pilot.md), [ALP-2](../chessbuddy/ALP-2-longitudinal-learning-model-pilot.md), [ALP-3](../chessbuddy/ALP-3-multi-artifact-learning-pilot.md) |
| **Does not override** | CG-FLL-001 / FLL-1, CG-FLL-002, CG-FLL-003, CG-FLL-1E, CFA, LearningTrace, ADR-E003 |

> **Governance note.** This document is a handoff and pilot roadmap only. It does
> not implement runtime, does not activate Buddy or LARIS, does not build a
> generic AGI runtime inside ChessGuide, and does not change Personal-AGI or
> Nomokrator repositories. ChessGuide remains the repository of truth for chess
> learning governance. Existing FLL work is **preserved and extended**, not
> rewritten.

---

## 1. Purpose

This is the **ChessGuide × Personal-AGI Faculty handoff** and the first **Faculty
pilot roadmap**.

It establishes ChessGuide as the first operational **Faculty** for Personal-AGI:
the domain institution that studies and improves how chess is learned by both
machines and humans. It does so without replacing ChessGuide identity (CG-000),
product vision (CG-001), First Domain Learning Pilot (CG-FLL-001 / FLL-1),
learning semantics (CG-FLL-002 / CG-FLL-003), LearningTrace custody (ADR-001,
CB-005), CFA logical dependencies, or ADR-E003 knowledge layering.

The handoff answers three Faculty questions:

1. Can a general learning machine autonomously become a chess specialist?
2. Can the same intelligence systematically train a human toward very high chess
   competence?
3. Can the Faculty learn from both journeys so later learners learn faster or
   better?

This document authorizes **governance and design of the pilot**, not
implementation.

---

## 2. Source and authority

| Source | Authority |
|--------|-----------|
| **ronnywilhelmsen/chessguide** | Repository truth for chess-domain governance, evidence, evaluation, competence, and learning contracts |
| **Personal-AGI** (external) | General learning hypothesis and future University Runtime — does not override ChessGuide doctrine |
| **thewilhelmsen.com** | Display-host only; may request, never decide |
| **Nomokrator** (external) | Future transfer target for **learning-method artifacts only**, never chess content |
| **This document** | Extends existing FLL / CFA / LearningTrace doctrine; **does not override it** |

Rules:

- Repository truth lives in **chessguide**.
- Personal-AGI supplies the general-learning hypothesis and a future University
  Runtime. It does not own chess evidence, competence claims, or learner custody.
- ChessGuide owns chess-domain governance, evidence, evaluation, competence, and
  learning contracts.
- `thewilhelmsen.com` remains display-host only.
- Old ChessBuddy context is **semantic inheritance**, not higher authority than
  current ChessGuide governance (CG-000).
- FLL-1 is **not wrong**. Human learning work becomes one track of the dual-learner
  model.

Architecture Continuity Gate (ACG-001) applies: this artifact depends on existing
doctrine; it does not change ADR-001–008, ADR-E003, CFA, or FLL invariants.

---

## 3. Core AGI hypothesis

> **General intelligence is not already having all specialties.**
>
> **General intelligence is the capacity to acquire or create new specialties
> when new problems require them.**

ChessGuide is the first serious test of that hypothesis in a real skill domain:

- Chess is the **domain**.
- Learning is the **mission** (CG-000, CG-001).
- Specialization is **acquired**, not assumed.
- Engine strength is **not** the same as learned competence (ADR-007; §11).

ChessGuide tests whether a general learning machine can become a chess
specialist **through a real learning journey**, and whether the same Faculty can
systematically develop a human learner — then learn how both learn.

---

## 4. Faculty concept

**Chess Faculty** is the domain institution that studies and improves how chess
is learned by both machines and humans.

It is not:

- a chess engine
- a generic AGI runtime
- a display surface
- a federation export path
- a replacement for FLL-1

It is:

- the ChessGuide-owned institution that designs learning projects, evaluates
  competence, holds evidence, and improves learning method
- the interface Personal-AGI's University Runtime may later call
- the steward of dual-learner evidence separation

### Faculty invariant

```text
The player learns chess.
The machine learns chess.
The Faculty learns how both learn chess.
```

Faculty learning is **meta-learning**: method, ordering, intervention quality,
transfer — not a third chess player and not a silent promotion of observation
into knowledge (ADR-E003).

---

## 5. Dual learner model

Two **equal** learner tracks:

| Track | ID | Learner | Existing foundation |
|-------|----|---------|---------------------|
| **Machine Chess Mastery** | CG-AGI-1A | Machine learner as **learner**, not tool user | New as learner track; uses ADR-007 competence boundary, UKF, evaluation contracts |
| **Human Chess Mastery** | CG-AGI-1B | Human learner | **CG-FLL-001 / FLL-1**, CG-FLL-002, CG-FLL-003, CG-FLL-1E — preserved |

Rules:

- Tracks are **evidence-separated**: human episodes, machine episodes, and Faculty
  method artifacts must not be mixed into one custody chain.
- Tracks are **Faculty-connected**: the Faculty may compare *methods*, not merge
  *learner state*.
- Human track does not rewrite FLL-1. FLL-1 remains the first operational human
  learning pilot. CG-AGI-1B is the Faculty-framed continuation of that work.
- Machine track does not inherit human learner state, and human track does not
  inherit machine “answers”.
- A single observation never becomes learner state (ADR-E003; CG-FLL-001 I-3).

---

## 6. Canonical project identities

IDs follow the existing `CG-*` / `CG-FLL-*` convention in
`docs/governance/chessguide/`.

| ID | Name | Role |
|----|------|------|
| **CG-AGI-1** | Chess Faculty / Dual-Learner Mastery Pilot | This handoff and the Faculty umbrella |
| **CG-AGI-1A** | Machine Chess Mastery | Machine learner track |
| **CG-AGI-1B** | Human Chess Mastery | Human learner track (extends FLL-1; does not replace it) |
| **CG-AGI-1C** | Faculty Learning-to-Learn | Meta-learning experiment across learners |
| **CG-AGI-1D** | Personal-AGI University Runtime Integration Contract | Boundary and interface — no runtime in ChessGuide |
| **CG-AGI-1E** | Nomokrator Transfer Preparation | Domain-independent method artifacts only |

These IDs are **proposed canonical names** for subsequent governance PRs. They do
not activate runtime.

---

## 7. What already exists

From current repository truth (not overclaimed):

| Foundation | Repository truth | Role for Faculty |
|------------|------------------|------------------|
| **Identity / vision** | CG-000, CG-001 | ChessGuide is a longitudinal skill-development domain; chess is domain, learning is mission |
| **Human learning / FLL** | CG-FLL-001 (FLL-1), CG-FLL-002, CG-FLL-003, CG-FLL-1E | First human learning pilot; learning = integration achieved; activity ≠ learning (I-3); steward-led transformation claims (I-1, I-2) |
| **ALP series** | ALP-1 / ALP-2 / ALP-3 (FLL-0 / 0M / 0X) | Prior artifact / meta-learning / cross-artifact pilots — inherited, not higher authority |
| **LearningTrace** | ADR-001, CB-005 | Evidence and custody, **not** learning; Episode is sovereign persistence boundary |
| **CFA** | CFA v1.0, LEF-2A/2B | Logical capability-formation dependencies, **not** a runtime pipeline |
| **Evidence / claim** | ADR-003, ADR-004 | LOE/DOE evidence; claims require stewardship; evidence ≠ integration |
| **Engine / competence** | ADR-007 | Stockfish is reference/measurement; engine output is not learner competence or pedagogy |
| **UKF** | ADR-E003 | Observation → evidence → context → interpretation → claim → knowledge; mode gate; federation eligibility |
| **Mode gates** | SPC-HLD-ADR-001, CB-006, CE-MCP-DR-v1 | Competition / review / unknown; unknown fails closed to no-advice |
| **Federation boundary** | FEDERATION.md, CG-002 | Federation transports continuity; ChessGuide retains learning; completed-game `ObservationRecord` only |
| **Web dashboard / payload** | `apps/web-dashboard`, SPC schema draft | Mode-gated display / fixture mapping — not governed reality |
| **Android CameraX / overlay** | Android sandbox + board overlay/calibration | Observation / visual alignment lanes — not semantic CV, not knowledge |
| **Chrome + MCP** | CE-MCP-DR-v1 | Discovery only; future observation/voice surfaces; inactive until governed |
| **Display host** | thewilhelmsen.com (external) | Display only; not modified by ChessGuide PRs |
| **ACG** | ACG-001 | Continuity gate for all future artifacts |

FLL-1 validated the **question of observing learning in a real domain**. It did
**not** claim to have validated chess skill, machine mastery, or Faculty
meta-learning. Those remain open and are the subject of CG-AGI-1.

---

## 8. What is genuinely new

Proposal terms until accepted by later ADRs / contracts:

| New concept | Why it is new |
|-------------|---------------|
| **Machine learner as learner** | Existing doctrine treats engine as reference (ADR-007) and Buddy as mentor (ADR-006). A machine that *learns chess* as a learner is not yet a Faculty track. |
| **Dual human/machine mastery** | FLL-1 is human-only. Dual tracks with evidence separation are new. |
| **Chess Faculty as institution** | ChessGuide is already a learning domain (CG-000). Faculty as the institution that learns *how both learn* is new. |
| **LearningProject** | Project-shaped competence goal. Does not exist as a canonical term. Must not duplicate Episode or CFA (§14). |
| **Faculty learning-to-learn** | ALP-2 studied learning-about-learning on artifacts. Cross-learner method transfer (Learner A → improved strategy → Learner B) is new as a Faculty experiment. |
| **Personal-AGI University Runtime integration** | External runtime boundary (CG-AGI-1D). ChessGuide must not host a generic AGI runtime. |
| **Local frozen-model experimental arm** | Causal control: hold foundation model fixed across a journey (§13, §20). |
| **Nomokrator transfer without chess content** | Transfer **method artifacts only** (CG-AGI-1E). |

---

## 9. Machine Chess Mastery (CG-AGI-1A)

**Goal.** A general learning machine moves from a recorded baseline to
**measurable** chess competence through a real learning journey — not by
delegating play to an engine.

### Lifecycle

```text
baseline (K0_machine)
  → competence-gap discovery
  → learning goals
  → curriculum
  → study
  → practice
  → simulation
  → feedback
  → correction
  → consolidation
  → transfer
  → stronger chess competence (K1_machine, held-out)
```

Constraints:

- The learner (not a steward-authored answer key) must generate a substantial
  part of the learning plan.
- Engine may evaluate, generate counterexamples, and score — it may not *be* the
  learner (§11).
- Internalized evaluation is **no-engine** (§12–§13).
- Competence is a **vector**, not a single Elo number.
- Journey evidence is machine-track LearningTrace / Episode custody, separate
  from human episodes.
- Activity (solving, reading, playing) is not competence (CG-FLL-001 I-3).

---

## 10. Human Chess Mastery (CG-AGI-1B)

**Goal.** The system develops a human learner’s chess competence systematically
and learns how that human learns best.

This track **continues FLL-1**. It does not declare FLL-1 incomplete or incorrect.
CG-FLL-001 asked whether learning can be observed, explained, replayed, and
validated. CG-AGI-1B asks whether that observed learning can be **steered toward
measurable chess competence** while the Faculty learns the method.

### Lifecycle

```text
observe learner
  → estimate competence (K0_human)
  → diagnose gaps
  → select learning goal
  → select intervention
  → teach / demonstrate
  → create practice
  → observe response
  → test understanding
  → test transfer
  → update learner model
  → choose next LearningProject
```

Alignment with existing FLL:

| CG-AGI-1B step | Existing doctrine |
|----------------|-------------------|
| Observe / estimate | CG-FLL-1E Phase 0–1; LOE-001/002 |
| Diagnose gaps | CG-FLL-002 (learning ≠ activity); LOE-006 |
| Teach / practice / review | CG-FLL-001 Observed → Explained → Replayed → Validated |
| Test understanding | LOE-009; DOE-006/008; steward validation (I-2) |
| Test transfer | LOE-008; CG-FLL-001 H3 |
| Update learner model | Evidence-backed only; not from a single observation |
| Transformation claims | I-1 / I-2; ADR-004 |

Initial human subject remains **Ronny**, steward-led, single-subject, no
population inference (CG-FLL-001, CG-FLL-1E).

---

## 11. Engine-use separation

Three capability classes (proposal terms):

| Class | Meaning |
|-------|---------|
| **INTERNALIZED_COMPETENCE** | The learner can produce correct play / explanation **without** engine assistance on held-out tasks |
| **TOOL_ASSISTED_CAPABILITY** | The learner can use tools (engine, tablebase, search) under explicit disclosure |
| **CREATED_OR_COMPOSED_SPECIALIST_CAPABILITY** | The learner creates or composes a specialist (e.g. a narrow solver, a study plan, a critic) rather than merely calling a stock engine |

Engine use is **allowed** as:

- evaluator / measurement lane (ADR-007)
- resource
- generator of positions or variations
- counterexample source

Engine output is **not**:

- learned competence
- learner rationale
- mastery
- pedagogy
- a claim

This restates ADR-007 (engine is reference, not identity) and ADR-005
(`engine_ref` ≠ `rationale_statement`) for the Faculty setting.

**Invariant.** An evaluation that permits engine answering cannot certify
`INTERNALIZED_COMPETENCE`.

---

## 12. Baseline and held-out evaluation

| Marker | Meaning |
|--------|---------|
| **K0_machine** | Machine competence vector before the LearningProject |
| **K1_machine** | Machine competence vector after, on **held-out** tasks |
| **K0_human** | Human competence vector before the LearningProject |
| **K1_human** | Human competence vector after, on **held-out** tasks |

Rules:

- Held-out tasks must be **new / non-identical** to training items.
- Do **not** reduce competence to a single Elo number. Elo may be one coordinate
  of a human vector, never the whole claim.
- Use **competence vectors**.
- `K1` without `K0` is inadmissible.
- Project completion without `K1` on held-out tasks is inadmissible (§14).

### Machine vector (examples)

- tactical recognition
- positional understanding
- calculation
- candidate move generation
- evaluation
- opening understanding
- endgame competence
- strategic planning
- error recognition
- explanation quality
- transfer to unfamiliar positions
- actual game performance

### Human vector (examples)

- actual rated performance (one coordinate, not the claim)
- centipawn loss under relevant, disclosed conditions
- tactical success
- calculation depth / accuracy
- positional judgment
- endgame performance
- opening competence
- time management
- recurring-error elimination
- explanation / understanding (LOE-009)
- transfer to novel positions (LOE-008)

Human vector coordinates must remain compatible with FLL evidence types (LOE/DOE).
Rating change alone is out of scope as a success criterion (CG-FLL-1E).

---

## 13. Causal controls

Required controls for any Faculty experiment that claims learning:

| Control | Purpose |
|---------|---------|
| **Frozen foundation model arm** | At least one scientific arm holds the foundation model fixed across the journey |
| **Fixed evaluation set + held-out set** | Prevents training on the test |
| **Training / test separation** | Explicit item custody |
| **No engine answering during internalized evaluation** | Protects INTERNALIZED_COMPETENCE |
| **Randomization where useful** | Reduces order / item artifacts |
| **Repeated evaluation over time** | Distinguishes spike from continuity (CG-FLL-003) |
| **Compare learning strategy, not just final answer** | Faculty object of study |
| **Record model / runtime version** | Provenance |
| **Distinguish model upgrade from system learning** | A newer base model is not Faculty learning |

Without these controls, K0→K1 movement may be **activity, leakage, or model
swap** — not learning (CG-FLL-001 I-3; CG-FLL-002).

---

## 14. LearningProject concept

**LearningProject** is a **proposed** project-shaped container for a bounded
competence goal. It is **not** a replacement for:

- **Episode / LearningTrace** (ADR-001) — custody of what happened
- **CFA** — logical formation of capability
- **Claim** (ADR-004) — governed hypothesis
- **EvidenceRecord** (ADR-003) — LOE/DOE evidence

A LearningProject *uses* those concepts. Canonical mapping of fields onto
Episode / CFA terms is an open question (§27) for a later contract PR.

A LearningProject should express:

- goal
- baseline competence (`K0`)
- required competence
- gaps
- hypotheses
- strategy
- curriculum / work plan
- episodes
- experiments
- simulations
- resources
- mentor / interventions
- milestones
- failures
- evidence
- competence checks
- transfer tests
- exit criteria
- postmortem
- resulting competence (`K1`, held-out)

### Invariant

```text
project completed ≠ competence acquired
```

A LearningProject closes **administratively** when work stops.

A LearningProject closes **epistemically** only when competence is validated
against **new** problems (`K1` on held-out tasks), with evidence/claim separation
preserved.

This is the Faculty restatement of CG-FLL-001 I-3 and CG-FLL-002: activity and
completion are not integration.

---

## 15. First Machine Chess Mastery project

**Pilot title (design only):** Learn rook endgames to robust transfer level.

| Element | Design |
|---------|--------|
| **ID** | CG-AGI-1A-P0 (design; not runtime) |
| **K0_machine** | Recorded vector before study: basic KRK / KRP patterns, explanation quality, no-engine play on a fixed rook-endgame set |
| **Learning plan** | Generated by the machine learner from the goal and K0 gaps — not fully handed over as a finished curriculum |
| **Allowed resources** | Endgame manuals / table excerpts as **resources**; engine as **evaluator / counterexample** only; no engine answering on internalized tests |
| **Engine evaluator role** | Score attempts, flag blunders, generate counterexamples; never stand in as the learner |
| **No-engine internalized tests** | Fixed + held-out rook-endgame positions; explanation required, not only move choice |
| **Held-out validation** | New positions, different pawn structures / side-to-move, not clones of study items |
| **Postmortem** | What was studied, what transferred, what was tool-assisted vs internalized |
| **Faculty analysis** | Method quality: ordering, resources, failures, transfer — input to CG-AGI-1C |

This is a **dry-run design target** (Phase 3). It is not an implementation order.

---

## 16. First Human Chess Mastery project

**Pilot title (design only):** Diagnose and improve tactical safety / loose-piece
awareness, with simple endgame conversion as a secondary transfer check.

Chosen because it maps onto existing FLL-1E observation targets (LOE-001
observation shift, LOE-006 error recognition, LOE-008 transfer, LOE-009
explanation) rather than inventing a new human pedagogy.

| Element | Design |
|---------|--------|
| **ID** | CG-AGI-1B-P0 (design; not runtime) |
| **Subject** | Ronny (steward-led; CG-FLL-001 / CG-FLL-1E) |
| **K0_human** | Baseline from recent games / puzzles: loose-piece incidents, missed recaptures, conversion failures; explanation samples (LOE-009) — not rating alone |
| **Adaptive curriculum** | Observed → Explained → Replayed → Validated (CG-FLL-001); adjust from response, not from a fixed worksheet |
| **Teaching / practice / review loop** | Teach the pattern; create practice; observe response; review with steward |
| **Transfer tests** | Novel positions and later live/review games (mode-gated; no live competition advice) |
| **Recurring-error tracking** | Same error class across episodes — activity tagged separately from LOE |
| **Learner explanation checks** | LOE-009 / DOE-006; steward does not accept move-only “success” |
| **Postmortem** | What intervention produced integration vs activity |
| **Faculty analysis** | User-specific vs general method (§18) |

FLL-1 remains the protocol for observing learning. This project is the first
Faculty-framed **competence-steering** use of that protocol.

---

## 17. Faculty learning-to-learn experiment (CG-AGI-1C)

```text
Learner A completes a LearningProject
  → Faculty analyzes episodes, errors, interventions, resources, ordering, transfer
  → Faculty creates CandidateImprovedLearningStrategy
  → Learner B starts from a comparable baseline
  → Learner B receives the improved method, not the final answers
```

**Success** means Learner B reaches comparable or better competence with less
time, compute, or errors, or with better transfer.

Rules:

- Learner A and Learner B may be machine–machine, human–human, or (later)
  cross-kind **method** comparison — never mixed evidence custody.
- Transferring **answers** is failure of the experiment design.
- Transferring **method** is the object of study.
- CandidateImprovedLearningStrategy is a **claim** (ADR-004), not knowledge,
  until evidence from Learner B supports it.
- ALP-2 (learning about learning) is prior art for meta-learning on artifacts;
  CG-AGI-1C is the Faculty experiment on **learner journeys**.

---

## 18. Human coaching as meta-learning engine

When coaching Ronny (or any later human), the Faculty must ask:

- Did Ronny learn this? (integration, not activity — CG-FLL-002)
- Why did he learn this **now**? (continuity, timing — CG-FLL-003)
- What explanation or intervention worked?
- Would it generalize to another learner?
- What is user-specific vs general?

Answers are **Faculty hypotheses**, stored as method evidence, not silently
written into human learner state or exported to federation.

---

## 19. Personal-AGI University Runtime integration contract (CG-AGI-1D)

### Ownership boundary

| Personal-AGI owns | ChessGuide owns |
|-------------------|-----------------|
| University Runtime | Chess Faculty |
| Generic agent roles | Chess-domain knowledge / evidence contracts |
| ModelRouter | Chess-learning experiments |
| Institutional learning machinery | Competence evaluation |
| Local model worker orchestration | Human-learning interaction |
| | Domain tools / adapters |

**Do not build a generic AGI runtime inside ChessGuide.**

### Future integration point (interface, not implementation)

- Faculty interface
- domain tasks
- evaluation contracts
- evidence contracts
- competence vectors
- LearningProject descriptors
- postmortem reports
- transferable learning-strategy artifacts

ChessGuide remains sovereign over whether a result is observation, evidence,
claim, or knowledge (ADR-E003). Personal-AGI may orchestrate workers; it may not
mint chess competence.

---

## 20. Local agents / frozen model arm

When a Personal-AGI runtime exists (external), local LLMs should be first-class
workers:

- **Student** — the machine learner
- **Critic** — challenges explanations and plans
- **Replicator** — attempts transfer / reproduction
- **Mentor / Coach** — if capable, and never as engine oracle (ADR-006 / ADR-007)

At least one scientific arm **holds the foundation model fixed** across the
learning journey (§13). A model upgrade is recorded as a **runtime change**, not
as Faculty learning.

This section does not authorize installing models, MCP servers, or workers in
this repository.

---

## 21. Nomokrator transfer preparation (CG-AGI-1E)

Transfer **learning-method artifacts only**. Do **not** transfer chess knowledge,
PGN, FEN libraries, opening trees, or learner chess state.

Domain-independent transferable artifacts:

- gap-detection strategies
- curriculum-selection strategies
- mentor strategies
- experiment selection
- error-diagnosis strategies
- LearningProject structure
- reflection / postmortem methods
- transfer evaluation methods
- learning-policy candidates

Nomokrator is a **later** domain. Preparation is contractual (what may leave
ChessGuide), not an export implementation. Federation export remains
completed-game `ObservationRecord` only and is **not** the Nomokrator path.

---

## 22. Relationship to Chrome Extension + MCP

Chrome extension and MCP / voice are **not** the strategic center of CG-AGI-1.

They are possible **observation / interaction surfaces** for the Faculty
(CE-MCP-DR-v1). They remain governed by:

- ADR-E003 (observation is not knowledge)
- competition no-advice / fail-closed unknown mode
- per-site consent, no silent capture, no federation export from extension
- LARIS inactive unless explicitly activated

Phase 0–6 of CE-MCP-DR-v1 stay on their own track. Faculty handoff does not
authorize extension or MCP implementation.

---

## 23. Relationship to Android and clock / board lanes

Android CameraX preview, board overlay / calibration, and any future clock ROI
are **observation surfaces only**.

They may later supply observations / context for LearningProjects (board state,
clock text, setup quality). They do **not** create knowledge by themselves
(ADR-E003). Board geometry is visual alignment, not semantic CV. Clock is a
separate lane from board observation (CE-MCP-DR-v1 §§14–15).

---

## 24. Relationship to dashboard deployment bridge

The web dashboard and any later deployment bridge are **display / review
surfaces**. They must show Faculty state only through governed contracts
(Surface Payload Contract; ADR-E003).

They are not the Faculty, not the University Runtime, and not an evidence mint.
**Dashboard deployment bridge comes later** than this handoff, unless a later
governance decision needs review visibility for a dry run.

---

## 25. Roadmap

| Phase | Name | Output | Runtime? |
|-------|------|--------|----------|
| **0** | Handoff governance and pilot roadmap | This document (CG-AGI-1) | No |
| **1** | Repository truth alignment and concept map | Map FLL / CFA / LearningTrace / UKF ↔ Faculty terms | No |
| **2** | Pilot contracts | LearningProject, competence vectors, evaluation descriptors | No |
| **3** | Machine Chess Mastery dry-run design | CG-AGI-1A-P0 fully specified | No |
| **4** | Human Chess Mastery dry-run design | CG-AGI-1B-P0 fully specified; FLL-1 preserved | No |
| **5** | First learning-to-learn experiment design | CG-AGI-1C protocol | No |
| **6** | Personal-AGI integration contract | CG-AGI-1D interface spec | No |
| **7** | Later runtime implementation PRs | Only after explicit governance approval | Only if ordered |

Each phase is a separately governed PR. Phase 7 is forbidden until Phases 1–6
have acceptance criteria met.

---

## 26. Acceptance criteria for future implementation

Any future implementation PR must pass **all** of:

- no engine-as-competence confusion
- K0 / K1 baseline required
- held-out evaluation required
- LearningProject completion is not enough (`project completed ≠ competence acquired`)
- evidence / claim separation preserved (ADR-003, ADR-004)
- learner state not inferred from a single observation
- human / machine evidence not mixed
- no federation leakage (no widening beyond completed-game `ObservationRecord`)
- no generic AGI runtime inside ChessGuide
- Personal-AGI integration boundary clear (CG-AGI-1D)
- FLL-1 invariants I-1–I-4 remain in force
- LARIS / Buddy remain inactive unless separately activated
- no live competition advice

A PR that cannot demonstrate every gate must not be merged.

---

## 27. Open questions

- Which first machine skill domain? (rook endgames is the current design
  candidate; alternatives remain open)
- Which first human LearningProject for Ronny? (tactical safety / loose-piece
  awareness is the current design candidate, chosen for FLL-1E fit)
- Which local model(s) will be frozen?
- What evaluation suite is admissible (legal, licensed, non-leaking)?
- Which existing LearningTrace / CFA terms should become canonical for
  LearningProject fields?
- How much dashboard is needed before a dry-run pilot?
- What belongs in ChessGuide vs Personal-AGI beyond the §19 sketch?
- How should machine Actor identity relate to ADR-001’s human-Actor default
  (CB-005 A-2)? This requires a later ADR if a machine learner is persisted.
- How does Faculty method custody relate to federation (almost certainly:
  **not exported**)?

---

## 28. Decision recommendation

- **Accept CG-AGI-1** as the first Faculty pilot umbrella (governance only).
- **Do not implement runtime yet.**
- **Next PR** should be Phase 1–2: concept map and pilot contract design
  (LearningProject, competence vectors, evaluation descriptors) — **not**
  Chrome extension runtime, MCP, voice, or dashboard deployment.
- Keep the **dashboard deployment bridge after** Faculty handoff, unless a later
  order needs review visibility.
- **Preserve FLL-1** as the human-learning foundation of CG-AGI-1B.
- Keep Chrome/MCP, Android lanes, and `thewilhelmsen.com` as governed surfaces,
  not the strategic center.
- Keep LARIS inactive.
- Keep Nomokrator transfer limited to method artifacts.

---

## Appendix A — Continuity (ACG-001)

```text
Filosofi / læringsteori          CG-FLL-002, CG-FLL-003, CG-000
  → Governance / ADR             ADR-001, ADR-003, ADR-004, ADR-007, ADR-E003
  → This handoff / roadmap       CG-AGI-1 (depends; does not change doctrine)
  → Later contracts              CG-AGI-1A–1E design docs (Phases 1–6)
  → Runtime                      Forbidden until Phase 7 + explicit order
```

This document **depends on** doctrine. It does **not** change FLL, CFA,
LearningTrace, UKF, or federation export.

## Appendix B — Non-goals of this PR

- no runtime code
- no Android / web-dashboard / payload-schema changes
- no package / lockfile changes
- no Chrome extension / MCP / voice
- no Buddy / LARIS / TSS/CCT activation
- no federation export change
- no thewilhelmsen.com changes
- no Personal-AGI repository changes
- no Nomokrator repository changes
