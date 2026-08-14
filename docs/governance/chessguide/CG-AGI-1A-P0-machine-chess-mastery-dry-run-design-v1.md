# CG-AGI-1A-P0 Machine Chess Mastery Dry-Run Design v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1A-P0 |
| **Title** | Machine Chess Mastery Dry-Run Design v1 — Rook Endgames |
| **Version** | 1.0 |
| **Status** | Draft (governance / dry-run design only) |
| **Date** | 2026-08-14 |
| **Classification** | Phase 3 machine-track dry-run design |
| **Scope** | Concrete design-only LearningProject for a machine learner on rook endgames — **no runtime** |
| **Parent** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md) |
| **Depends on** | [CG-AGI-1-P12](CG-AGI-1-phase-1-2-concept-map-and-pilot-contracts-v1.md), [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | FLL, CFA, LearningTrace, ADR-E003, ADR-007, federation rules, CG-AGI-1 Appendix C |

> **Governance note.** This document instantiates CG-AGI-1A-P0 as a **design-only
> dry run**. It does not install models, run engines, persist schemas, or execute
> learning. Proposal contracts from CG-AGI-1-P12 remain proposal until a later
> ADR adopts them. `thewilhelmsen.com` remains display-host only. Chrome/MCP
> remain discovery-only and inactive.

---

## 1. Purpose

This is the **Phase 3 dry-run design** for Machine Chess Mastery (CG-AGI-1A).

It turns the merged Faculty Handoff Roadmap (CG-AGI-1) and Phase 1–2 contracts
(CG-AGI-1-P12) into a **concrete, replayable LearningProject design** for a
machine learner becoming measurably better at a bounded chess skill: rook
endgames to robust transfer level.

This document authorizes **design**, not execution. It prepares a test of the
Faculty hypothesis; it does not itself support that hypothesis.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1** (incl. Appendix C) | Faculty handoff + cross-domain boundary |
| **CG-AGI-1-P12** | LearningProject, CompetenceVector, EvaluationDescriptor, contamination, evidence-chain contracts |
| **ronnywilhelmsen/chessguide** | Repository truth for chess-domain governance |
| **ADR-007** | Engine is reference/measurement — not competence, rationale, or pedagogy |
| **ADR-E003** | Observation is not knowledge; promotion only behind gates |
| **FEDERATION.md** | Completed-game `ObservationRecord` only; ChessGuide retains learning |

Rules:

- This document **depends on** CG-AGI-1 and CG-AGI-1-P12.
- It **must not** override FLL, CFA, LearningTrace, ADR-E003, ADR-007, or
  federation rules.
- FLL-1 remains the human-track protocol (CG-AGI-1B). This dry run is
  **machine-track only**.
- No generic AGI runtime inside ChessGuide (CG-AGI-1D).

---

## 3. Pilot identity

| Field | Value |
|-------|-------|
| **ID** | `CG-AGI-1A-P0` |
| **Name** | Machine Chess Mastery — Rook Endgames |
| **learner_kind** | `MACHINE` |
| **domain** | chess |
| **status** | dry-run design only |
| **runtime** | not implemented |

---

## 4. Research question

> Can a general machine learner move from `K0_machine` to `K1_machine` in rook
> endgames through a replayable LearningProject, under frozen-model, held-out,
> contamination-controlled, **no-engine internalized** evaluation?

Sub-questions (not independently sufficient):

- Does coordinate movement on a CompetenceVector appear after study?
- Does explanation quality improve together with play, or only one of them?
- Does transfer hold on non-identical positions?
- Which method choices (ordering, resources, counterexamples) are Faculty
  candidates for Learner B?

---

## 5. Non-goals

This PR and this dry-run design explicitly exclude:

- runtime
- model install
- local LLM execution
- engine integration
- chess engine player
- MCP
- Chrome extension
- Android changes
- web-dashboard changes
- thewilhelmsen.com changes
- schemas
- package/lockfile changes
- federation export widening
- Buddy / LARIS activation
- treating this design as scientific support for the AGI hypothesis
- steward-authored finished answer keys presented as autonomous learning

---

## 6. LearningProject descriptor

**Status:** design-level instantiation of CG-AGI-1-P12 §4. Not a schema.

| Field | Design value for CG-AGI-1A-P0 |
|-------|-------------------------------|
| `id` | `CG-AGI-1A-P0` |
| `learner_kind` | `MACHINE` |
| `learner_id` | Placeholder `machine-lineage://cg-agi-1a-p0/{frozen_model_id}` — persistence TBD (ADR-001 human-Actor default; §21) |
| `domain` | chess |
| `goal` | Learn rook endgames to **robust transfer** level: convert/hold basic KRK and selected KRP patterns, explain why, transfer to non-identical structures |
| `initial_state` | Frozen foundation model arm; no prior CG-AGI-1A project; no sealed-set exposure; tools disclosed empty-of-engine-answering for internalized eval |
| `baseline` | `K0_machine` via `EVAL-1A-P0-K0` (§7, §10) — **must be recorded before study** |
| `required_competence` | Held-out rook-endgame play + explanations under `EVAL-1A-P0-K1`; no engine answering |
| `gaps` | Diagnosed only **after** K0: expected classes include KRK conversion technique, rook activity vs passivity, king activity, opposition / cutting off, Philidor/Lucena **awareness** (not rote), pawn-race judgement |
| `hypotheses` | H1: learner-generated plan from K0 gaps improves held-out play more than a finished steward worksheet. H2: explanation required on K1 reduces “correct move without understanding”. H3: engine-as-counterexample (labeled) helps diagnosis without collapsing internalization |
| `project_method_version` | `cg-agi-1a-p0-method/v0` (design stub; frozen at execution start) |
| `strategy` | Orientation → K0 → learner-generated plan → study/practice → labeled counterexamples → reflection → consolidation → K1 transfer → postmortem |
| `curriculum` | Stage list in §14 — **outline**, not answer key |
| `plan_versions` | Start empty; v0 recorded when learner emits first plan; subsequent versions append-only |
| `replanning_events` | Record why/when plan changes; steward may **gate** but must not silently replace the learner plan |
| `episodes` | Future refs to machine-lineage episodes (not human LearningTrace); no Episode rewrite |
| `experiments` | At least: (a) no-engine practice vs (b) labeled engine-counterexample review — both disclosed |
| `simulations` | Learner-generated variations without claiming K1 |
| `resources` | §15 categories; licensing flagged open |
| `observations` | UKF Observation-layer facts only until EvidenceRecord-linked (ADR-E003) |
| `actions` | Study, practice, plan edits — activity ≠ learning (CG-FLL-001 I-3) |
| `agents_models_tools` | Frozen model id/hash; optional critic/replicator **roles** as design names only; engine only in allowed roles |
| `decisions` | Resource selection, plan commits, when to sit K1 — steward-gated where §6 `human_decision_gates` require |
| `authority_scope` | Learner may plan/study/practice inside chess-endgame dry-run; may **not** mint competence, export federation, advise live play, or upgrade the frozen model |
| `human_decision_gates` | (1) freeze model arm, (2) seal held-out set, (3) approve resource license, (4) authorize K1 sitting, (5) stewardship on any competence **Claim** (ADR-004) |
| `failures` | Recorded as they occur; see §18 |
| `abandoned_paths` | Required for replayability (Appendix C §2) |
| `evidence` | EvidenceRecord refs (ADR-003) on machine chain only |
| `competence_checks` | `EVAL-1A-P0-K0`, `EVAL-1A-P0-MID`, `EVAL-1A-P0-K1` |
| `transfer_tests` | `EVAL-1A-P0-K1` non-identical structures / side-to-move |
| `evaluation` | Aggregate of the three descriptors; verdicts separated (§19) |
| `outcome` | Project Outcome (process quality) — not Domain Outcome |
| `uncertainty_state` | Must survive close: `UNKNOWN` / `UNRESOLVED` / `INSUFFICIENT_EVIDENCE` admissible |
| `postmortem` | Method + domain reflection → Faculty method chain |
| `resulting_competence` | `K1_machine` or explicit failure to obtain |

### Invariants (restated)

```text
project completed ≠ competence acquired
K1 without K0 is inadmissible
engine answering ≠ INTERNALIZED_COMPETENCE
coordinate movement ≠ mastery claim
```

---

## 7. K0_machine baseline design

`K0_machine` is measured **before** study, curriculum exposure, or labeled
counterexample review of the same items.

### 7.1 What is measured

| Focus | Design intent |
|-------|----------------|
| No-engine task set | `EVAL-1A-P0-K0`; `engine_allowed: no`; `engine_role: forbidden` for learner answering |
| Rook endgame basics | King+rook vs king conversion patterns; rook checks/cuts; king approach |
| KRK | Mating technique, not only “I know it is winning” |
| KRP (selected) | Pawn on typical files/ranks; not a full tablebase syllabus |
| Rook activity | Active rook vs passive/behind-pawn errors |
| King activity | Centralization / opposition-related king moves |
| Opposition / cutting off | Awareness and use, not slogan recitation |
| Philidor / Lucena **awareness** | Recognize the **idea class** if present; rote naming without play is insufficient |
| Explanation quality | Why this move / plan; move-only rejected |
| Candidate move generation | Relevant candidates, not a single guessed move |
| Calculation | Short forced lines under no-engine rules |
| Blunder / error recognition | Learner flags own previous try if shown |
| Transfer to unfamiliar positions | A small K0 slice of non-template positions (still **not** the sealed K1 set) |

### 7.2 Custody rule

K0 items used for baseline may become `TRAINING_VISIBLE` **after** K0 is
recorded. They **must not** be relabeled `HELD_OUT` / `SEALED` for this lineage.

K1 sealed items must not appear in K0.

---

## 8. K1_machine target design

Success after learning is **not** project completion.

| Condition | Requirement |
|-----------|-------------|
| Stronger CompetenceVector | Movement on **pilot-specialized** coordinates (§9) vs K0, under disclosed scoring |
| Held-out rook-endgame tasks | `EVAL-1A-P0-K1` only |
| Non-identical positions | Different pawn structures, side-to-move, and/or rook placement — not clones or trivial transpositions of training items |
| Explanation required | Move without why fails the explanation coordinate |
| No engine answering | `engine_allowed: no` for learner play/explanation |
| Uncertainty preserved | Even a strong K1 may be `SUPPORTED_WITH_QUALIFICATIONS` |
| Project may close without success | Operational close with `NOT_SUPPORTED` / `UNRESOLVED` / `INSUFFICIENT_EVIDENCE` is valid science |

Epistemic close of competence requires K1 on held-out tasks (CG-AGI-1-P12 §4.2).
Administrative close does not.

---

## 9. CompetenceVector for this pilot

Uses the merged machine CompetenceVector (CG-AGI-1-P12 §5.1), **specialized**
for rook endgames. Opening understanding and general tactical recognition are
**out of primary scope** (may be recorded as `not_assessed` rather than faked).

| Coordinate | Pilot specialization | In primary scope? |
|------------|----------------------|-------------------|
| endgame competence | KRK conversion; selected KRP hold/convert | **Yes** |
| calculation | Short endgame forcing lines | **Yes** |
| candidate move generation | Checks, cuts, king approaches, pawn pushes | **Yes** |
| evaluation | Win/draw/loss judgement **with reasons** in rook endings | **Yes** |
| strategic planning | Multi-move plans (cut off → king in → mate / Lucena-class bridge) | **Yes** |
| error recognition | Detecting passive rook, wrong king, stalemate traps | **Yes** |
| explanation quality | Why this technique applies | **Yes** |
| transfer to unfamiliar positions | Held-out structures | **Yes** |
| actual game/endgame performance | Play under no-engine K1 rules (not rated Elo) | **Yes** |
| tactical recognition | Only if it arises inside the ending | Secondary / `not_assessed` default |
| positional understanding | Endgame structure only | Secondary |
| opening understanding | Out of scope | `not_assessed` |

```text
A vector coordinate is not a mastery claim by itself.
```

Promotion of K0→K1 movement to a Claim requires ADR-004 stewardship.

---

## 10. EvaluationDescriptor designs

Three conceptual descriptors. No task PGN/FEN payload in this PR (licensing /
sealing still open — §15, §21).

### 10.1 EVAL-1A-P0-K0 — baseline

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1A-P0-K0` |
| `target_competence` | Endgame competence, calculation, candidates, evaluation, explanation, error recognition (K0 slice) |
| `learner_kind` | `MACHINE` |
| `mode` | `sealed-eval` (baseline); unknown would fail closed — here mode is explicit |
| `task_set` | Fixed rook-endgame basics set; **disjoint** from K1 sealed set |
| `item_labels` | `PUBLIC_DEVELOPMENT` or `SEALED` for baseline custody; after sitting → `TRAINING_VISIBLE` for this lineage |
| `allowed_tools` | None for answering; board/FEN display only |
| `forbidden_tools` | Engine, tablebase-as-answer, search, other models, hidden notes |
| `engine_allowed` | `no` |
| `engine_role` | `forbidden` |
| `held_out_policy` | K0 is **not** the held-out success set |
| `contamination_policy` | If K1 items leak into K0, abort K1 as clean held-out; relabel `CONTAMINATED` |
| `scoring_method` | Steward rubric + optional later instrument; move-only insufficient |
| `explanation_required` | `yes` |
| `transfer_required` | `no` (small unfamiliar slice allowed, not K1 transfer) |
| `evaluator_authority` | ChessGuide domain evaluator |
| `uncertainty_state` | Recorded per item and aggregate |
| `verdict_type` | `DOMAIN` (baseline snapshot) — not learning success |

### 10.2 EVAL-1A-P0-MID — mid-project diagnostic

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1A-P0-MID` |
| `target_competence` | Same primary coordinates; diagnostic, not K1 |
| `learner_kind` | `MACHINE` |
| `mode` | `training` diagnostic |
| `task_set` | Practice-adjacent items; **not** K1 sealed items |
| `item_labels` | `TRAINING_VISIBLE` |
| `allowed_tools` | None for answering on diagnostic items labeled internalized |
| `forbidden_tools` | Engine answering; K1 peek |
| `engine_allowed` | `no` for internalized diagnostic items |
| `engine_role` | `forbidden` on those items; `counterexample` / `evaluator` only on **separately labeled** review items |
| `held_out_policy` | Must not consume K1 |
| `contamination_policy` | Any K1 exposure → those K1 items `CONTAMINATED` for this lineage |
| `scoring_method` | Same rubric family as K0 for comparability |
| `explanation_required` | `yes` |
| `transfer_required` | `no` |
| `evaluator_authority` | ChessGuide domain evaluator |
| `uncertainty_state` | Explicit; MID improvement is **not** K1 |
| `verdict_type` | `DOMAIN` diagnostic — not scientific close |

### 10.3 EVAL-1A-P0-K1 — held-out transfer

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1A-P0-K1` |
| `target_competence` | All primary §9 coordinates including transfer and actual endgame performance |
| `learner_kind` | `MACHINE` |
| `mode` | `sealed-eval` |
| `task_set` | Sealed, non-identical rook endings (structure / side-to-move / rook placement differ from training) |
| `item_labels` | `HELD_OUT` + `SEALED` until sat; then remain held-out evidence or `CONTAMINATED` if leaked earlier |
| `allowed_tools` | None for answering |
| `forbidden_tools` | Engine, tablebase-as-answer, training notes, other models |
| `engine_allowed` | `no` |
| `engine_role` | `forbidden` for learner answering. Post-hoc steward scoring **may** use engine as `evaluator` **after** answers are frozen — never during answering |
| `held_out_policy` | Clean held-out: unseen by learner/lineage; non-clone of training |
| `contamination_policy` | Seen task/solution ⇒ cannot count as clean held-out for this lineage |
| `scoring_method` | Same rubric family as K0; explanation required; transfer_required |
| `explanation_required` | `yes` |
| `transfer_required` | `yes` |
| `evaluator_authority` | ChessGuide domain evaluator |
| `uncertainty_state` | Must survive (Appendix C §3) |
| `verdict_type` | `DOMAIN` for competence; `LEARNING` only if K0→K1 + method evidence + stewardship Claim |

Post-hoc engine scoring after frozen answers is **evaluator use**, not learner
answering (ADR-007). It does not by itself certify pedagogy or rationale.

---

## 11. Engine-use separation

| Class | Application in CG-AGI-1A-P0 |
|-------|-----------------------------|
| **INTERNALIZED_COMPETENCE** | K0 / internalized MID items / K1 answering — no engine answering |
| **TOOL_ASSISTED_CAPABILITY** | Disclosed review lane: engine or tablebase as evaluator / counterexample / generator, **labeled** |
| **CREATED_OR_COMPOSED_SPECIALIST_CAPABILITY** | Out of scope for P0 unless the learner proposes a specialist **without** substituting a stock engine as self |

Rules:

- Engine **may** evaluate, generate counterexamples, or score attempts
  (after freeze for K1).
- Engine **may not** answer for the learner in internalized evaluation.
- Engine output is **not** competence, rationale, pedagogy, or claim
  (ADR-007, ADR-005, CG-AGI-1-P12 §8).

---

## 12. Frozen model / causal control design

| Control | Design |
|---------|--------|
| Frozen foundation model arm | **Required** for the scientific arm of this pilot |
| Model / version / hash | Record at freeze; hash where possible |
| Provider | Record |
| Tools | Allow-list frozen with the arm |
| Runtime version | Record (external Personal-AGI runtime if used later — not built here) |
| Prompt / policy version | Freeze `cg-agi-1a-p0-method/v0` + eval prompts |
| Institutional memory version | Record; no silent Faculty-memory injection of K1 |
| No silent model upgrade | Upgrade = new arm, not continuation of the same learning journey |
| Distinguish model vs learning | A better base model is **not** Faculty learning (CG-AGI-1 §13, Appendix C §11) |

If execution later uses Personal-AGI workers (Student / Critic / Replicator),
those are **orchestration**, not ChessGuide-owned AGI runtime (CG-AGI-1D).

---

## 13. Contamination and held-out custody

| Label | Use in this pilot |
|-------|-------------------|
| `PUBLIC_DEVELOPMENT` | Design discussion, public examples, this document’s **classes** (not sealed FENs) |
| `TRAINING_VISIBLE` | K0 after sitting; practice; MID; labeled counterexamples |
| `HELD_OUT` | K1 task set for this lineage |
| `SEALED` | Access-controlled K1 (and optionally K0 before first sit) |
| `CONTAMINATED` | Any item the learner/lineage saw (task or solution) that was intended as clean held-out |

**Clean rule.** If the learner or lineage has seen the task or solution, it
cannot later count as **clean held-out** evidence for that learner/lineage.

Labels travel with items across repositories (Appendix C §9).

---

## 14. Curriculum design

Stages are an **outline**. They are not a finished answer key.

| Stage | Intent | Learner vs steward |
|-------|--------|--------------------|
| Orientation | Goal, constraints, engine rules, freeze ids | Steward sets gates; learner acknowledges |
| Baseline gap diagnosis | Sit `EVAL-1A-P0-K0`; derive gaps | Learner produces gap list; steward may challenge, not replace |
| Learner-generated study plan | Plan from gaps | **Required.** A steward-authored finished curriculum is **not enough** to test autonomous learning |
| Resource selection | Choose from allowed categories (§15) | Learner proposes; steward license-gates |
| Practice set | Train on `TRAINING_VISIBLE` items | Learner |
| Counterexample generation | Labeled engine/tablebase **review** lane | Disclosed tool-assisted; not K1 answering |
| Reflection | What transferred, what was guessed | Learner; maps toward LOE-class analogues on the machine chain |
| Consolidation | Re-practice without expanding into K1 | Learner |
| Transfer test | Sit `EVAL-1A-P0-K1` | Steward authorizes sitting |
| Postmortem | Domain + method | Split: machine evidence vs Faculty method chain |

Steward input that **writes the plan or the answers** collapses the autonomy
claim for this pilot (open threshold in §21).

---

## 15. Resources and allowed material

| Category | Allowed? | Notes |
|----------|----------|-------|
| Endgame explanations / manual excerpts | Yes, if licensed | Cite source; do not paste copyrighted books into the repo in this PR |
| Legal study positions | Yes | Provenance recorded |
| Synthetic positions | Yes | Generated for training; label `TRAINING_VISIBLE` |
| Engine-generated counterexamples | Yes, **only when labeled** | `engine_role: counterexample` / `generator`; not K1 answers |
| Tablebase / engine as evaluator or resource | Design-permitted in review lane | **Not** internalized answer source. Whether tablebase is permitted as evaluator is an open question (§21) |

**Open concern:** licensing and contamination of any published suite. No suite is
committed in this PR. Sealed K1 must be chosen and custodied before execution.

---

## 16. Evidence chain

**Machine learner evidence chain** (separate from human and Faculty method):

- machine episodes / runs
- model / version / freeze records
- EvaluationDescriptors (`EVAL-1A-P0-K0/MID/K1`) and item labels
- EvidenceRecords (ADR-003) on the machine chain
- CompetenceVectors `K0_machine` / `K1_machine`
- postmortem (domain slice)
- tool / engine-role disclosures

**Do not mix** with:

- human learner evidence (CG-AGI-1B / FLL-1)
- Faculty method evidence (postmortem method slice, CandidateImprovedLearningStrategy)

Faculty may compare **methods**, not merge learner state (CG-AGI-1-P12 §9).

---

## 17. Faculty method output

From this dry run (after a future execution, not from this design PR) the Faculty
**may** produce claims about:

- curriculum ordering candidate
- resource usefulness
- failure modes
- diagnostic value of MID vs K0
- transfer-test design
- `CandidateImprovedLearningStrategy` for CG-AGI-1C-P0

```text
Faculty method output is a Claim until tested on Learner B
or an equivalent control (CG-AGI-1-P12 §10; Appendix C §10).
```

It is not chess knowledge, not human learner state, and not a
`GeneralizableLearningArtifact` until export-bounded and domain-stripped
(Appendix C §7). Abstraction ≠ generalization.

---

## 18. Failure modes

| Failure | Why it invalidates or qualifies the test |
|---------|------------------------------------------|
| Model already knew the positions | K0 ceiling / pretraining leakage; may yield `CONTAMINATED` or `INSUFFICIENT_EVIDENCE` for “learning” |
| Held-out contamination | K1 not clean |
| Engine answer leakage | Internalized class collapses |
| Prompt leakage | Hidden K1 content in prompts/memory |
| Overfitting to templates | High training score, failed transfer |
| Explanation without competence | Fluent why, weak play |
| Correct move without understanding | Play without explanation coordinate |
| Model upgrade masquerading as learning | Violates frozen arm |
| Project completion mistaken for competence | Violates `project completed ≠ competence acquired` |

---

## 19. Verdicts

Keep separate (Appendix C §12–§13):

| Verdict | This design PR | Future execution |
|---------|----------------|------------------|
| **Engineering** | N/A (no runtime) | Harness may be `IMPLEMENTED` / `ENGINEERING_VALIDATED` without science |
| **Domain outcome** | Not measured | K0→K1 under EVAL-1A-P0-K1 |
| **Project outcome** | Design completeness only | Was the contract followed? |
| **Learning outcome** | Not produced | Method candidates for Faculty |
| **Scientific support** | **Cannot** support the AGI hypothesis | Only a later, well-controlled execution + stewardship Claim might |

This dry-run design **prepares a test**. It does not support the core AGI
hypothesis (CG-AGI-1 §3).

---

## 20. Acceptance criteria for future execution PR

Any execution / harness PR must pass **all** of:

- K0 recorded **first** (`EVAL-1A-P0-K0`)
- frozen model arm with version/hash/provider/tools/runtime/prompt/policy/memory
- held-out set (`EVAL-1A-P0-K1`) disjoint from training
- contamination labels on items
- EvaluationDescriptors present and followed
- engine role declared; no-engine internalized K1 answering
- CompetenceVector K0 and K1 recorded
- postmortem written; evidence/claim separation (ADR-003 / ADR-004)
- `learner_kind: MACHINE` explicit
- evaluator authority = ChessGuide domain evaluator
- `uncertainty_state` preserved
- no federation widening
- no runtime outside **explicit** authorization
- no generic AGI runtime inside ChessGuide
- no dashboard-host ownership transfer
- Chrome/MCP/Buddy/LARIS remain inactive unless separately ordered
- learner-generated plan captured (steward worksheet-only path fails autonomy claim)

---

## 21. Open questions

- Which model is frozen?
- Which rook-endgame suite is legal, licensed, and sealable?
- How is machine learner identity persisted vs ADR-001’s human-Actor default?
- Is tablebase permitted as evaluator (post-hoc scoring) vs forbidden entirely?
- What scoring rubric is acceptable (steward-only vs instrumented)?
- How much steward input is allowed before the autonomy claim collapses?
- What counts as transfer (structure delta, side-to-move, material, pawn file)?
- How to detect “model already knew it” at K0 without contaminating K1?
- Mapping of machine episodes onto Episode/CFA without duplicating custody?

---

## 22. Decision recommendation

**Recommended next PR:** **CG-AGI-1B-P0 Human Chess Mastery dry-run design**
(roadmap Phase 4).

Rationale:

1. This document completes Phase 3 (machine dry-run **design**). The next
   governance gap is the matching human dry-run so both tracks exist before
   any execution.
2. CG-AGI-1C-P0 needs at least one completed A/B **execution** later; it does
   not need to be designed before 1B-P0 exists on paper.
3. **CG-AGI-1A-P0 execution harness** is runtime-adjacent (models, eval sitting,
   possibly engine-as-evaluator). It should proceed **only if explicitly
   ordered**, after frozen model + sealed suite questions (§21) are answered.

Do **not** implement runtime in the next PR unless separately ordered.

Chrome/MCP remain discovery-only. Dashboard / `thewilhelmsen.com` remain
display-host only. Personal-AGI / Nomokrator / BioChronos remain untouched.

---

## Appendix A — Continuity (ACG-001)

```text
CG-AGI-1 roadmap + Appendix C
  → CG-AGI-1-P12 concept map + contracts
  → This document (Phase 3 CG-AGI-1A-P0 dry-run design)
  → Phase 4 CG-AGI-1B-P0 human dry-run design (recommended next)
  → Phase 5 CG-AGI-1C-P0 learning-to-learn design
  → Execution only after explicit governance approval + §20 gates
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
- no federation export widening
- no sealed FEN/PGN suite committed (licensing still open)
