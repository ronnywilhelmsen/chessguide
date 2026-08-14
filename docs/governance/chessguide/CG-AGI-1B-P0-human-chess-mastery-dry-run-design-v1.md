# CG-AGI-1B-P0 Human Chess Mastery Dry-Run Design v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1B-P0 |
| **Title** | Human Chess Mastery Dry-Run Design v1 — Tactical Safety / Loose-Piece Awareness |
| **Version** | 1.0 |
| **Status** | Draft (governance / dry-run design only) |
| **Date** | 2026-08-14 |
| **Classification** | Phase 4 human-track dry-run design |
| **Scope** | Concrete design-only LearningProject for a human learner on tactical safety / loose-piece awareness — **no runtime** |
| **Parent** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md) |
| **Depends on** | [CG-AGI-1-P12](CG-AGI-1-phase-1-2-concept-map-and-pilot-contracts-v1.md), [CG-AGI-1A-P0](CG-AGI-1A-P0-machine-chess-mastery-dry-run-design-v1.md), [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | FLL-1, CFA, LearningTrace, ADR-E003, ADR-007, federation rules, CG-AGI-1 Appendix C |

> **Governance note.** This document instantiates CG-AGI-1B-P0 as a **design-only
> dry run**. It continues FLL-1; it does not rewrite it. It does not activate
> Buddy or LARIS, does not give live competition advice, and does not execute
> learning. Proposal contracts from CG-AGI-1-P12 remain proposal until a later
> ADR adopts them. `thewilhelmsen.com` remains display-host only. Chrome/MCP
> remain discovery-only and inactive.

---

## 1. Purpose

This is the **Phase 4 dry-run design** for Human Chess Mastery (CG-AGI-1B).

It turns the merged Faculty Handoff Roadmap (CG-AGI-1), Phase 1–2 contracts
(CG-AGI-1-P12), and the machine-track dry-run (CG-AGI-1A-P0) into the matching
**human-track** LearningProject design: tactical safety / loose-piece awareness
for a steward-led human learner (Ronny), with simple endgame conversion as a
**secondary** transfer check only.

This document authorizes **design**, not execution. It prepares a human-track
test; it does not itself prove mastery or support the AGI hypothesis.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1** (incl. Appendix C) | Faculty handoff + cross-domain boundary |
| **CG-AGI-1-P12** | LearningProject, CompetenceVector, EvaluationDescriptor, contamination, evidence-chain contracts |
| **CG-AGI-1A-P0** | Parallel machine dry-run pattern (structure/causal controls) — **not** human evidence |
| **CG-FLL-001 / FLL-1** | Canonical human-learning foundation; Observed→Explained→Replayed→Validated |
| **CG-FLL-002 / CG-FLL-003 / CG-FLL-1E** | Learning semantics, continuity, LOE/DOE execution catalogue |
| **ADR-001 / ADR-003 / ADR-004** | Episode custody, EvidenceRecord, Claim stewardship |
| **ADR-007** | Engine is reference — not pedagogy or learner rationale |
| **ADR-E003** | Observation is not knowledge |
| **FEDERATION.md** | Completed-game `ObservationRecord` only |

Rules:

- This document **depends on** CG-AGI-1, CG-AGI-1-P12, CG-AGI-1A-P0, and FLL-1.
- It **must not** override FLL, CFA, LearningTrace, ADR-E003, ADR-007, or
  federation rules.
- FLL-1 is **not wrong**. CG-AGI-1B-P0 is Faculty-framed **competence steering**
  on top of FLL observation protocol.
- Human and machine evidence chains stay separate (CG-AGI-1-P12 §9).

---

## 3. Pilot identity

| Field | Value |
|-------|-------|
| **ID** | `CG-AGI-1B-P0` |
| **Name** | Human Chess Mastery — Tactical Safety / Loose-Piece Awareness |
| **learner_kind** | `HUMAN` |
| **learner_id** | Ronny (steward-led single-subject; CG-FLL-001 / CG-FLL-1E convention) |
| **domain** | chess |
| **status** | dry-run design only |
| **runtime** | not implemented |

Statistical goal: **none** — observation and competence-steering design for one
learner, not population inference (CG-FLL-001).

---

## 4. Research question

> Can ChessGuide move a human learner from `K0_human` to `K1_human` in tactical
> safety / loose-piece awareness through a replayable LearningProject, under
> mode-gated, evidence-backed, transfer-tested evaluation, **without** live
> competition advice or engine-as-pedagogy collapse?

Sub-questions (not independently sufficient):

- Do recurring loose-piece / missed-threat error classes decline with evidence?
- Does explanation quality (LOE-009 / DOE-006) improve with play safety?
- Does transfer appear on non-identical positions and later review games?
- Which interventions are Ronny-specific vs Faculty-generalizable?

---

## 5. Non-goals

This PR and this dry-run design explicitly exclude:

- runtime
- live coaching
- live competition advice
- engine move advice
- Buddy / LARIS activation
- model execution
- Chrome / MCP activation
- Android changes
- web-dashboard changes
- thewilhelmsen.com changes
- schemas
- package / lockfile changes
- federation export widening
- population / general-human claims
- rating-only success claims
- treating this design as scientific support for the AGI hypothesis
- treating puzzle volume as learning (CG-FLL-001 I-3)

---

## 6. LearningProject descriptor

**Status:** design-level instantiation of CG-AGI-1-P12 §4. Not a schema.

| Field | Design value for CG-AGI-1B-P0 |
|-------|-------------------------------|
| `id` | `CG-AGI-1B-P0` |
| `learner_kind` | `HUMAN` |
| `learner_id` | Ronny (Actor under ADR-001 / CB-005 convention; steward-led) |
| `domain` | chess |
| `goal` | Diagnose and improve **tactical safety / loose-piece awareness**; secondary transfer: simple endgame conversion under the same safety habits |
| `initial_state` | FLL-1 protocol available; no Buddy/LARIS; mode gates known; no sealed K1 exposure |
| `baseline` | `K0_human` via `EVAL-1B-P0-K0` (§7, §11) — **must be recorded before targeted teaching/practice** |
| `required_competence` | Held-out tactical safety / loose-piece tasks + explanations under `EVAL-1B-P0-K1`; transfer evidence |
| `gaps` | Diagnosed after K0: expected classes include hanging pieces, missed recaptures, missed opponent threats, unsafe candidates, king-safety-before-attack failures |
| `hypotheses` | H1: Observed→Explained→Replayed→Validated plus an explicit safety checklist reduces recurring error classes more than puzzle volume alone. H2: Explanation-required scoring reduces “correct move without understanding”. H3: Transfer to novel positions and review-game application is the competence signal, not rating |
| `project_method_version` | `cg-agi-1b-p0-method/v0` (design stub; freeze at execution start) |
| `strategy` | FLL-1 loop + adaptive curriculum from response; deliberate practice; spaced review; transfer; postmortem |
| `curriculum` | Stage list in §15 — **outline**, not answer key |
| `plan_versions` | Append-only; adapt from learner response, not a fixed worksheet only |
| `replanning_events` | Record why/when intervention changes; steward challenges, does not silent-replace learner understanding |
| `episodes` | Human LearningTrace / Episode refs (ADR-001) |
| `experiments` | At least: (a) checklist-guided practice vs (b) unguided puzzle volume — both disclosed; activity tagged separately from LOE |
| `simulations` | Learner-simulated opponent replies before move (training/review only) |
| `resources` | Licensed puzzles/positions; own reviewed games if admissible (§22); steward prompts; **no** live advice channel |
| `observations` | UKF Observation layer until EvidenceRecord-linked (ADR-E003) |
| `actions` | Study, puzzles, review — activity ≠ learning unless LOE/DOE-linked (I-3) |
| `agents_models_tools` | Human learner + human steward; optional labeled engine **after** freeze for scoring; no Buddy/LARIS |
| `decisions` | When to sit K1; which error class to prioritize; mode of each session |
| `authority_scope` | Steward may validate Claims and gate modes; may **not** mint mastery from activity; learner does not self-certify Transformation (I-2) |
| `human_decision_gates` | (1) mode declaration per session, (2) seal held-out set, (3) approve baseline material license/use, (4) authorize K1 sitting, (5) ADR-004 stewardship on competence Claims |
| `failures` | Recorded; see §19 |
| `abandoned_paths` | Required for replayability (Appendix C §2) |
| `evidence` | LOE/DOE EvidenceRecords (ADR-003) on **human** chain only |
| `competence_checks` | `EVAL-1B-P0-K0`, `EVAL-1B-P0-MID`, `EVAL-1B-P0-K1` |
| `transfer_tests` | `EVAL-1B-P0-K1` + later **review-mode** game application (never live advice) |
| `evaluation` | Aggregate of descriptors; verdicts separated (§20) |
| `outcome` | Project Outcome (process quality) — not Domain Outcome |
| `uncertainty_state` | Must survive close |
| `postmortem` | Integration vs activity; user-specific vs general method |
| `resulting_competence` | `K1_human` or explicit failure to obtain |

### Invariants (restated)

```text
project completed ≠ competence acquired
activity ≠ learning (CG-FLL-001 I-3)
evidence ≠ claim (ADR-003 / ADR-004)
K1 without K0 is inadmissible
coordinate movement ≠ mastery claim
no live competition advice
```

---

## 7. K0_human baseline design

`K0_human` is measured **before** targeted teaching/practice exposure for this
error class.

### 7.1 Conditions

| Constraint | Design |
|------------|--------|
| No live advice | Absolute |
| Mode | `review` or `training` only; competition/live forbidden for baseline intervention |
| Material | Recent games and/or supplied positions **if later admissible**; puzzle/position set with provenance |
| Recording | Steward + learner; LOE/DOE where applicable |

### 7.2 What is measured

| Focus | Design intent |
|-------|----------------|
| Tactical safety checklist performance | Does the learner run safety habits before move? |
| Loose-piece incidents | LPDO / hanging / undefended pieces |
| Missed recaptures | Capture/recapture failures |
| Hanging pieces | Own and opponent |
| Missed opponent threats | Checks, captures, threats not seen |
| Unsafe candidate moves | Candidates that fail blunder-check |
| Explanation quality | LOE-009 samples — why, not only what |
| Calculation depth / accuracy | Steward-observable under disclosed conditions |
| Recurring-error classes | Same class across items/episodes |
| Transfer baseline | Small unfamiliar-position slice — **not** the sealed K1 set |

### 7.3 Custody rule

K0 items may become `TRAINING_VISIBLE` after sitting. They must **not** be
relabeled clean `HELD_OUT` / `SEALED` for this learner. K1 sealed items must not
appear in K0.

Rating is **not** the baseline claim (CG-FLL-1E).

---

## 8. K1_human target design

| Condition | Requirement |
|-----------|-------------|
| Stronger CompetenceVector | Movement on primary §9 coordinates vs K0 under disclosed scoring |
| Held-out tasks | `EVAL-1B-P0-K1` tactical safety / loose-piece set |
| Non-identical positions | Not clones or trivial near-duplicates of training |
| Explanation required | Move-only fails explanation coordinate |
| Evidence of transfer | Novel positions and/or review-game application with LOE-008 |
| No live competition advice | Absolute |
| No engine answering as learner | Internalized K1 answering |
| Uncertainty preserved | Strong K1 may still be `SUPPORTED_WITH_QUALIFICATIONS` |
| Project may close without success | `NOT_SUPPORTED` / `UNRESOLVED` / `INSUFFICIENT_EVIDENCE` admissible |

Epistemic close of competence requires K1 on held-out tasks (CG-AGI-1-P12 §4.2).
Administrative close does not.

---

## 9. Tactical Safety / Loose-Piece CompetenceVector

Uses the merged **human** CompetenceVector (CG-AGI-1-P12 §5.2), specialized for
this pilot.

| Coordinate | Pilot specialization | In primary scope? |
|------------|----------------------|-------------------|
| tactical success | Safety-related tactics; hanging / threat detection | **Yes** |
| calculation depth / accuracy | Short forced lines for threats/recaptures | **Yes** |
| recurring-error elimination | Loose-piece / missed-threat classes across episodes | **Yes** |
| explanation / understanding | LOE-009 / DOE-006 | **Yes** |
| transfer to novel positions | LOE-008; non-identical structures | **Yes** |
| candidate move safety | Blunder-check before move | **Yes** (pilot-specialized) |
| opponent-threat detection | Checks, captures, threats first | **Yes** (pilot-specialized) |
| loose-piece detection | LPDO / undefended pieces | **Yes** (pilot-specialized) |
| blunder prevention | Pre-move safety re-run | **Yes** (pilot-specialized) |
| time-management under disclosed conditions | Only if conditions declared | Secondary |
| rated performance | **Secondary only** — never the whole claim | Secondary |
| centipawn loss | Only under **disclosed** conditions | Secondary |
| positional judgment / opening / endgame | Secondary; simple conversion is transfer check only | Secondary / limited |

```text
A vector coordinate is not a mastery claim by itself.
```

Promotion of K0→K1 movement to a Claim requires ADR-004 stewardship.

---

## 10. Tactical safety doctrine

**Instructional target** (learning / review / training). **Not** live move advice.

Ordered habits the curriculum aims to install:

1. Own king safety before attack
2. If in check: identify legal parries first
3. Opponent mate threats before plans
4. Loose pieces / LPDO
5. Captures and recaptures
6. Checks, captures, threats
7. Candidate moves
8. Blunder-check before move
9. Simulate opponent reply
10. Re-run safety check

```text
This is a learning target, not live move advice.
```

In competition / live / unknown mode the system must **not** emit these as
coaching prompts or tactical warnings (fail closed — §13).

---

## 11. EvaluationDescriptor designs

Three conceptual descriptors. No puzzle suite committed in this PR (licensing /
admissibility open — §22).

### 11.1 EVAL-1B-P0-K0 — baseline

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1B-P0-K0` |
| `target_competence` | Loose-piece detection, opponent-threat detection, candidate move safety, explanation, recurring-error sampling |
| `learner_kind` | `HUMAN` |
| `mode` | `review` or `training` (explicit); never competition/live |
| `task_set` | Fixed safety / loose-piece baseline set; **disjoint** from K1 |
| `item_labels` | `PUBLIC_DEVELOPMENT` or `SEALED` pre-sit; after sit → `TRAINING_VISIBLE` for this learner |
| `allowed_tools` | Board/FEN display; steward prompts that do **not** give the move |
| `forbidden_tools` | Engine answering, live advice, Buddy/LARIS, hidden notes with solutions |
| `engine_allowed` | `no` (for learner answering) |
| `engine_role` | `forbidden` during answering |
| `held_out_policy` | K0 is not the held-out success set |
| `contamination_policy` | K1 leak into K0 ⇒ abort clean K1; relabel `CONTAMINATED` |
| `scoring_method` | Steward rubric + LOE/DOE tagging; move-only insufficient |
| `explanation_required` | `yes` |
| `transfer_required` | `no` (small unfamiliar slice allowed, not K1) |
| `evaluator_authority` | ChessGuide domain evaluator + steward (I-2 for Claims) |
| `uncertainty_state` | Recorded per item and aggregate |
| `verdict_type` | `DOMAIN` baseline snapshot — not learning success |

### 11.2 EVAL-1B-P0-MID — mid-project diagnostic

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1B-P0-MID` |
| `target_competence` | Same primary coordinates; diagnostic, not K1 |
| `learner_kind` | `HUMAN` |
| `mode` | `training` diagnostic |
| `task_set` | Practice-adjacent; **not** K1 sealed items |
| `item_labels` | `TRAINING_VISIBLE` |
| `allowed_tools` | Steward teaching prompts; checklist reminders in **training** only |
| `forbidden_tools` | Engine answering; K1 peek; live advice |
| `engine_allowed` | `no` for internalized diagnostic answering |
| `engine_role` | `forbidden` on those items; `evaluator` / `counterexample` only on **separately labeled** post-freeze review items |
| `held_out_policy` | Must not consume K1 |
| `contamination_policy` | Any K1 exposure → those items `CONTAMINATED` for this learner |
| `scoring_method` | Same rubric family as K0 |
| `explanation_required` | `yes` |
| `transfer_required` | `no` |
| `evaluator_authority` | ChessGuide domain evaluator + steward |
| `uncertainty_state` | Explicit; MID ≠ K1 |
| `verdict_type` | `DOMAIN` diagnostic |

### 11.3 EVAL-1B-P0-K1 — held-out transfer

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1B-P0-K1` |
| `target_competence` | All primary §9 coordinates including transfer |
| `learner_kind` | `HUMAN` |
| `mode` | `sealed-eval` within review/training governance — **never** live competition advice |
| `task_set` | Sealed, non-identical tactical-safety / loose-piece positions |
| `item_labels` | `HELD_OUT` + `SEALED` until sat |
| `allowed_tools` | Board/FEN; steward may ask clarifying questions without giving the move |
| `forbidden_tools` | Engine answering, solution keys, live advice, Buddy/LARIS |
| `engine_allowed` | `no` for learner answering |
| `engine_role` | `forbidden` during answering; post-hoc steward scoring **may** use engine as `evaluator` **after** answers frozen |
| `held_out_policy` | Unseen by learner; not near-identical training variant |
| `contamination_policy` | Seen task/solution/near-duplicate ⇒ not clean held-out |
| `scoring_method` | Same rubric family; explanation + transfer required |
| `explanation_required` | `yes` |
| `transfer_required` | `yes` |
| `evaluator_authority` | ChessGuide domain evaluator + steward |
| `uncertainty_state` | Must survive (Appendix C §3) |
| `verdict_type` | `DOMAIN` for competence; `LEARNING` only with K0→K1 + LOE/DOE lineage + stewardship Claim |

---

## 12. Engine-use separation

| Class | Application in CG-AGI-1B-P0 |
|-------|-----------------------------|
| **INTERNALIZED_COMPETENCE** | K0 / internalized MID / K1 answering — no engine answering |
| **TOOL_ASSISTED_CAPABILITY** | Labeled post-freeze review: engine evaluates or produces counterexamples |
| **CREATED_OR_COMPOSED_SPECIALIST_CAPABILITY** | Out of scope for P0 human track |

Rules:

- Engine **may** evaluate after answers are frozen, generate labeled training
  examples, or help produce counterexamples.
- Engine **may not** answer for the learner in internalized evaluation.
- Engine output is **not** learner rationale, pedagogy, mastery, or claim
  (ADR-007, CG-AGI-1-P12 §8).

---

## 13. Mode and safety gates

| Mode | Allowed | Forbidden |
|------|---------|-----------|
| **Competition / live** | Observation of completed facts only after game (elsewhere) | Advice, tactical warnings, engine tips, checklist coaching |
| **Review** | Analysis under governance; post-game LOE/DOE | Silent advice as if live |
| **Training** | Exercises, checklist practice, steward teaching | Treating training prompts as live play help |
| **Unknown** | Fail closed → no-advice | Any coaching emission |

Additional rules:

- no hidden engine-like behavior
- no silent uploading of game state for advice
- no live tactical warning
- human decision gates remain explicit (§6)
- dashboard display is **not** governed knowledge (ADR-E003)

---

## 14. Contamination and held-out custody

| Label | Use in this pilot |
|-------|-------------------|
| `PUBLIC_DEVELOPMENT` | Doctrine/checklist classes in this document |
| `TRAINING_VISIBLE` | K0 after sit; practice; MID; labeled review |
| `HELD_OUT` | K1 for this learner |
| `SEALED` | Access-controlled K1 (and optionally K0 before first sit) |
| `CONTAMINATED` | Task, solution, or **near-identical** training variant already seen |

**Clean rule.** If the learner has seen the task, solution, or near-identical
training variant, it cannot later count as clean held-out evidence for that
learner.

Labels travel with items across repositories (Appendix C §9).

---

## 15. Curriculum design

Stages are an **outline**. Not an answer key.

| Stage | Intent | FLL / evidence note |
|-------|--------|---------------------|
| Orientation | Goal, modes, no-live-advice, checklist preview | Consent / grounding |
| K0 baseline | Sit `EVAL-1B-P0-K0` | Before teaching |
| Error-class diagnosis | Cluster loose-piece / threat / recapture failures | LOE-006 seeds |
| Learner explanation sampling | Why did you play / miss this? | LOE-009 / DOE-006 |
| Tactical safety checklist introduction | §10 as **learning target** | Training/review only |
| Guided examples | Steward-led Observed→Explained | Not answer-key dump |
| Deliberate practice | Targeted `TRAINING_VISIBLE` items | Activity tagged separately |
| Spaced review | Same classes later | Continuity (CG-FLL-003) |
| Transfer tests | Sit `EVAL-1B-P0-K1` | LOE-008 required for transfer claim |
| Game-review application | Post-game review mode only | Never live advice |
| Postmortem | Integration vs activity; method candidates | Faculty method chain |

```text
Activity is not learning.
Correct move is not sufficient without explanation / transfer.
```

Adaptive rule: adjust from learner **response**, not from a fixed worksheet alone
(CG-AGI-1 §16).

---

## 16. Evidence chain

**Human learner evidence chain:**

- human episodes / LearningTrace (ADR-001)
- LOE/DOE EvidenceRecords (ADR-003; CG-FLL-1E)
- K0/K1 CompetenceVectors
- EvaluationDescriptors and item labels
- explanation samples (LOE-009 / DOE-006)
- recurring-error tracking (activity vs LOE tagged)
- transfer tests (LOE-008)
- postmortem (domain slice)

**Keep separate from:**

- machine learner evidence chain (CG-AGI-1A-P0)
- Faculty method evidence chain
- dashboard display state (`thewilhelmsen.com` / web-dashboard)

Faculty may compare **methods**, not merge learner state (CG-AGI-1-P12 §9).

---

## 17. FLL mapping

| Dry-run element | FLL-1 / FLL-1E mapping |
|-----------------|------------------------|
| Protocol spine | Observed → Explained → Replayed → Validated (CG-FLL-001) |
| Observation shifts | LOE-001 |
| Error recognition | LOE-006 |
| Transfer | LOE-008 |
| Explanation | LOE-009 |
| Reflective dialogue | DOE-006 |
| Steward checkpoint | DOE-008 |
| Steward validation | I-1 / I-2; Transformation Claims need stewardship |
| Activity vs learning | I-3 — activity ≠ learning unless evidence-linked |
| Evidence vs claim | ADR-003 / ADR-004 — evidence ≠ claim |
| Continuity | CG-FLL-003 — spaced review and longitudinal error-class tracking |

CG-AGI-1B-P0 **steers competence** using FLL; it does not replace FLL as the
observation protocol.

---

## 18. Faculty method output

From a future execution (not this design PR) the Faculty **may** learn:

- which explanations work for Ronny
- which error classes recur
- which practice ordering improves transfer
- which checklist steps reduce blunders
- which interventions fail
- `CandidateImprovedLearningStrategy` candidates for CG-AGI-1C-P0

```text
Faculty method output is a Claim until tested on another learner
or an equivalent control (CG-AGI-1-P12 §10; Appendix C §10).
```

Ask explicitly (CG-AGI-1 §18): Did Ronny learn this? Why now? Would it
generalize? What is user-specific vs general?

Method output is not human learner state, not machine evidence, and not a
`GeneralizableLearningArtifact` until export-bounded and domain-stripped.

---

## 19. Failure modes

| Failure | Why it invalidates or qualifies the test |
|---------|------------------------------------------|
| Live advice contamination | Mode-gate failure; competence not internalized |
| Engine answer leakage | Internalized class collapses |
| Puzzle memorization | High training score, failed transfer |
| Near-duplicate held-out contamination | K1 not clean |
| Correct move without explanation | LOE-009 missing |
| Explanation without transfer | LOE-008 missing |
| Short-term puzzle improvement mistaken for competence | Activity ≠ learning |
| Rating noise mistaken for learning | Rating is secondary only |
| Steward overfitting to Ronny | Method not general; Faculty claim weak |
| Project completion mistaken for competence | Invariant violation |
| Dashboard display mistaken for governed knowledge | ADR-E003 / display-host boundary |

---

## 20. Verdicts

| Verdict | This design PR | Future execution |
|---------|----------------|------------------|
| **Engineering** | N/A (no runtime) | Harness may be `IMPLEMENTED` without science |
| **Domain outcome** | Not measured | K0→K1 under EVAL-1B-P0-K1 |
| **Project outcome** | Design completeness only | Was the FLL + contract followed? |
| **Learning outcome** | Not produced | Method candidates for Faculty / CG-AGI-1C |
| **Scientific support** | **Cannot** support AGI hypothesis or prove human mastery | Only later controlled execution + stewardship Claim might |

This dry-run design **prepares a human-track test**. It does not prove mastery.

---

## 21. Acceptance criteria for future execution PR

Any execution / harness PR must pass **all** of:

- K0 recorded **first** (`EVAL-1B-P0-K0`)
- mode declared per session; no live competition advice
- held-out set (`EVAL-1B-P0-K1`) disjoint from training
- contamination labels on items (incl. near-duplicate rule)
- EvaluationDescriptors present and followed
- engine role declared; no-engine internalized K1 answering
- CompetenceVector K0 and K1 recorded
- explanation samples (LOE-009 / DOE-006)
- transfer tests (LOE-008)
- recurring-error tracking with activity vs LOE separation
- postmortem written; evidence/claim separation (ADR-003 / ADR-004)
- steward validation for Claims (I-2)
- `learner_kind: HUMAN` explicit; learner_id Ronny (or successor Actor)
- no federation widening
- no runtime outside **explicit** authorization
- no Buddy/LARIS/Chrome/MCP activation unless separately ordered
- no dashboard-host ownership transfer
- FLL-1 invariants I-1–I-4 remain in force

---

## 22. Open questions

- Which human baseline material is admissible?
- Which puzzle/position suite is legal and sealed?
- How much of Ronny’s live games may be used (privacy, consent, mode)?
- How to score explanation quality consistently?
- What counts as transfer (structure, motif, phase, review-game application)?
- How long must recurring-error reduction persist?
- How to separate rating noise from learning?
- Which interventions are user-specific vs general?
- When can a Faculty method claim be tested on Learner B (CG-AGI-1C-P0)?
- Secondary endgame-conversion transfer: how much weight vs primary safety goal?

---

## 23. Decision recommendation

**Recommended next PR:** **CG-AGI-1C-P0 Faculty Learning-to-Learn dry-run design**
(roadmap Phase 5).

Rationale:

1. This document completes Phase 4 (human dry-run **design**), matching
   CG-AGI-1A-P0 on the machine track.
2. CG-AGI-1C-P0 can now be designed against **both** A/B dry-run contracts,
   defining Learner A → CandidateImprovedLearningStrategy → Learner B without
   mixing evidence chains.
3. **Execution harness** for 1A-P0 or 1B-P0 should wait until **1A-P0, 1B-P0, and
   1C-P0 design documents exist**, unless explicitly ordered otherwise
   (open suite/model/baseline questions remain — §22; CG-AGI-1A-P0 §21).

Do **not** implement runtime in the next PR unless separately ordered.

Chrome/MCP remain discovery-only. Dashboard / `thewilhelmsen.com` remain
display-host only. Personal-AGI / Nomokrator / BioChronos remain untouched.
FLL-1 remains the human-learning foundation.

---

## Appendix A — Continuity (ACG-001)

```text
CG-AGI-1 roadmap + Appendix C
  → CG-AGI-1-P12 concept map + contracts
  → CG-AGI-1A-P0 machine dry-run design
  → This document (Phase 4 CG-AGI-1B-P0 human dry-run design)
  → Phase 5 CG-AGI-1C-P0 Faculty learning-to-learn dry-run design (recommended next)
  → Execution only after explicit governance approval + §21 gates
```

## Appendix B — Non-goals of this PR

- no runtime code
- no JSON Schema / SQL / API
- no model files or engine dependency
- no Android / web-dashboard / Chrome / MCP changes
- no package / lockfile changes
- no thewilhelmsen.com changes
- no Personal-AGI / Nomokrator / BioChronos repository changes
- no Buddy / LARIS activation
- no live competition advice
- no federation export widening
- no sealed puzzle suite committed (admissibility still open)
- no rewrite of FLL-1
