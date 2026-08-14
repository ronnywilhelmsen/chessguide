# CG-AGI-1C-P0 Faculty Learning-to-Learn Dry-Run Design v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1C-P0 |
| **Title** | Faculty Learning-to-Learn Dry-Run Design v1 — Method Improvement from Human/Machine Learning Projects |
| **Version** | 1.0 |
| **Status** | Draft (governance / dry-run design only) |
| **Date** | 2026-08-14 |
| **Classification** | Phase 5 Faculty method dry-run design |
| **Scope** | Concrete design-only protocol for Faculty method improvement from CG-AGI-1A/1B LearningProjects — **no runtime**, no learner-state merge, no cross-domain export |
| **Parent** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md) |
| **Depends on** | [CG-AGI-1-P12](CG-AGI-1-phase-1-2-concept-map-and-pilot-contracts-v1.md), [CG-AGI-1A-P0](CG-AGI-1A-P0-machine-chess-mastery-dry-run-design-v1.md), [CG-AGI-1B-P0](CG-AGI-1B-P0-human-chess-mastery-dry-run-design-v1.md), [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | FLL-1, CFA, LearningTrace, ADR-E003, ADR-007, federation rules, CG-AGI-1 Appendix C |

> **Governance note.** This document instantiates CG-AGI-1C-P0 as a **design-only
> dry run** for Faculty Learning-to-Learn. It does not execute Learner A/B trials,
> does not export `GeneralizableLearningArtifact`, and does not mint AGI
> evidence. Proposal contracts from CG-AGI-1-P12 remain proposal until a later
> ADR adopts them. `thewilhelmsen.com` remains display-host only. Chrome/MCP
> remain discovery-only and inactive.

---

## 1. Purpose

This is the **Phase 5 dry-run design** for Faculty Learning-to-Learn (CG-AGI-1C).

It defines how ChessGuide Faculty may learn from machine-track (CG-AGI-1A-P0)
and human-track (CG-AGI-1B-P0) LearningProjects **without**:

- mixing learner state
- confusing domain outcome with method learning
- exporting chess-domain content as general intelligence
- transferring answers instead of method

Protocol spine:

```text
Learner A (source LearningProject)
  → Faculty derives CandidateImprovedLearningStrategy
  → Learner B / equivalent control receives method, not answers
  → clean held-out validation
  → Faculty method Claim (ADR-004) with explicit uncertainty
```

This document authorizes **design**, not execution.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1** (incl. Appendix C) | Faculty handoff + cross-domain boundary |
| **CG-AGI-1-P12** | LearningProject, CandidateImprovedLearningStrategy, evidence-chain, contamination contracts |
| **CG-AGI-1A-P0** | Machine dry-run source-project design |
| **CG-AGI-1B-P0** | Human dry-run source-project design; FLL-1 competence steering |
| **CG-FLL-001 / FLL-1** | Canonical human-learning foundation |
| **ADR-003 / ADR-004** | EvidenceRecord vs Claim |
| **ADR-007** | Engine is reference — not pedagogy or method proof |
| **ADR-E003** | Observation is not knowledge |
| **FEDERATION.md** | Completed-game `ObservationRecord` only |

Rules:

- This document **depends on** CG-AGI-1, CG-AGI-1-P12, CG-AGI-1A-P0, CG-AGI-1B-P0,
  and FLL-1.
- It **must not** override FLL, CFA, LearningTrace, ADR-E003, ADR-007, or
  federation rules.
- Faculty method evidence **references** source evidence; it does not absorb or
  rewrite learner custody.

---

## 3. Pilot identity

| Field | Value |
|-------|-------|
| **ID** | `CG-AGI-1C-P0` |
| **Name** | Faculty Learning-to-Learn — Method Improvement from Human/Machine Learning Projects |
| **learner_kind** | `FACULTY_METHOD` / `METHOD_EVIDENCE` — **not** HUMAN or MACHINE learner state |
| **domain** | chess (method about chess learning; not a chess player) |
| **status** | dry-run design only |
| **runtime** | not implemented |

```text
This is Faculty method evidence, not learner competence evidence.
```

---

## 4. Research question

> Can ChessGuide Faculty derive a `CandidateImprovedLearningStrategy` from
> completed or simulated CG-AGI-1A/1B LearningProjects, then test whether that
> method improves a later Learner B or equivalent control, **without**
> transferring answers, merging learner evidence chains, or mistaking
> abstraction for generalization?

Sub-questions (not independently sufficient):

- Does the candidate reduce time, compute, repeated errors, or improve transfer?
- Does the improvement survive clean held-out / non-identical evaluation?
- Is the improvement attributable to **method**, not easier tasks or model upgrade?
- Can method claims be formed without absorbing chess answer keys?

---

## 5. Non-goals

This PR and this dry-run design explicitly exclude:

- runtime
- execution harness
- model install
- engine dependency
- live coaching
- Buddy / LARIS activation
- Chrome / MCP activation
- Android changes
- web-dashboard changes
- thewilhelmsen.com changes
- schemas
- package / lockfile changes
- federation export widening
- cross-domain export
- `GeneralizableLearningArtifact` implementation
- claiming AGI evidence from design alone
- claiming method improvement without Learner B / equivalent control
- merging human and machine learner state

---

## 6. LearningProject / FacultyMethod descriptor

**Status:** design-level Faculty method object. Not a schema. Not a human/machine
LearningProject of kind HUMAN|MACHINE.

| Field | Design value for CG-AGI-1C-P0 |
|-------|-------------------------------|
| `id` | `CG-AGI-1C-P0` |
| `source_projects` | `CG-AGI-1A-P0` and/or `CG-AGI-1B-P0` (designs now; executions later when ordered) |
| `learner_A_reference` | Source learner id + kind from a completed/simulated A/B project |
| `learner_B_reference` / `equivalent_control` | Placeholder until B or control is defined; if only one learner exists → mark `UNRESOLVED` unless equivalent control is specified |
| `source_learner_kind` | `HUMAN` \| `MACHINE` (from Learner A) |
| `target_learner_kind` | `HUMAN` \| `MACHINE` (must not imply shared identity with A) |
| `domain` | chess |
| `method_question` | Which change in curriculum/diagnosis/practice/eval ordering improves later learning under clean control? |
| `source_evidence` | EvidenceRecord / CompetenceVector / EvaluationDescriptor **refs** from A — referenced, not absorbed |
| `source_postmortem` | Domain + method slices from A; only method slice feeds Faculty claim |
| `observed_failure_patterns` | From A postmortem (e.g. explanation/play mismatch, steward overfitting, contamination) |
| `candidate_method_change` | Explicit `changed_method` text in CandidateImprovedLearningStrategy |
| `expected_improvement` | Less time/compute/errors, better transfer/explanation, clearer gap diagnosis, lower contamination risk |
| `applicability_conditions` | When the method change should apply |
| `known_failures` | Where it already failed or is risky |
| `contamination_policy` | Answers/solutions/sealed positions/near-duplicates must not travel with method |
| `control_policy` | §12 clean control |
| `evaluation_descriptors` | `EVAL-1C-P0-SOURCE-POSTMORTEM`, `EVAL-1C-P0-METHOD-CANDIDATE`, `EVAL-1C-P0-LEARNER-B-VALIDATION` |
| `authority_scope` | Faculty may propose method Claims; may **not** mint learner competence, export federation, or generalize cross-domain without University validation |
| `human_decision_gates` | (1) accept source eligibility, (2) form candidate Claim, (3) authorize B/control design, (4) authorize B validation sitting, (5) ADR-004 stewardship on method Claim status |
| `evidence_chain` | **Faculty method evidence chain only** |
| `uncertainty_state` | Must survive close (Appendix C §3) |
| `verdicts` | Separated per §20 |
| `postmortem` | Method experiment postmortem → possible GLA **candidate** (design-only) |
| `resulting_method_claim` | CandidateImprovedLearningStrategy with status |

```text
This is Faculty method evidence, not learner competence evidence.
```

---

## 7. Inputs from CG-AGI-1A-P0

What Faculty **may** learn from the machine dry-run (method slice only):

| Input class | Examples |
|-------------|----------|
| Curriculum ordering | Learner-generated plan vs steward worksheet |
| Gap diagnosis quality | K0→gap list fidelity |
| Counterexample use | Labeled engine/tablebase review lane value |
| Frozen-model causal controls | Upgrade vs learning distinction |
| Failure modes | Pretraining leakage, template overfitting |
| Transfer-test structure | Non-identical structure / side-to-move design |
| Explanation / play mismatch | Fluent why vs weak play |
| Engine leakage risks | Answer contamination of INTERNALIZED_COMPETENCE |
| Contamination risks | K1 peek, prompt leakage |

Rules:

- Machine learner evidence **cannot** become human learner evidence.
- Machine domain success **does not** prove method success.
- Machine K1 is not human K1.

---

## 8. Inputs from CG-AGI-1B-P0

What Faculty **may** learn from the human dry-run (method slice only):

| Input class | Examples |
|-------------|----------|
| Explanations for Ronny | Which LOE-009 / DOE-006 prompts produced integration |
| Recurring-error classes | Loose-piece / missed-threat clusters |
| Tactical safety checklist effect | Which §10 steps reduced blunders in training/review |
| Spaced review design | Continuity (CG-FLL-003) |
| Explanation / transfer relationship | LOE-009 vs LOE-008 |
| Mode-gated safety | Fail-closed unknown / no live advice |
| Live-advice contamination risks | Mode-gate failures |
| Steward overfitting risks | Ronny-specific interventions mistaken for general pedagogy |

Rules:

- Ronny-specific learning **cannot** be treated as general human pedagogy without
  further evidence (Learner B / equivalent control).
- Human LOE is not machine competence.
- FLL-1 remains the observation protocol; Faculty method claims do not rewrite it.

---

## 9. Human / machine evidence separation

| Chain | Contents | Custody |
|-------|----------|---------|
| **Human learner evidence chain** | Episodes, LOE/DOE, human K0/K1, EVAL-1B-* | Human Actor LearningTrace (ADR-001) |
| **Machine learner evidence chain** | Machine runs, freeze ids, machine K0/K1, EVAL-1A-* | Separate machine lineage |
| **Faculty method evidence chain** | Postmortem method slices, CandidateImprovedLearningStrategy, EVAL-1C-*, contamination findings | Faculty method custody — **not** learner state |

Rules:

- no merged learner state
- no shared learner identity
- no machine K1 as human K1
- no human LOE as machine competence
- Faculty may **compare methods only**
- Faculty method evidence must **reference, not absorb**, source evidence

---

## 10. CandidateImprovedLearningStrategy design

Instantiation of CG-AGI-1-P12 §10 for this pilot:

| Field | Design |
|-------|--------|
| `source_project` | `CG-AGI-1A-P0` and/or `CG-AGI-1B-P0` (one primary source per candidate preferred) |
| `source_learner_kind` | `HUMAN` \| `MACHINE` |
| `source_evidence` | Refs to EvidenceRecords / CompetenceVectors / EvaluationDescriptors / postmortem method slice |
| `observed_failure_patterns` | Explicit list from source |
| `changed_method` | Concrete method delta (ordering, diagnosis, practice, checklist, eval design) — **not** answer keys |
| `expected_improvement` | Time / compute / errors / transfer / explanation / contamination risk |
| `applicability_conditions` | Learner kind, motif class, baseline band |
| `known_failures` | Prior failures or risks |
| `target_learner_conditions` | Comparable K0 for Learner B / control |
| `validation_plan` | `EVAL-1C-P0-LEARNER-B-VALIDATION` + held-out policy |
| `status` | See below |

### Status values

- `PROPOSED`
- `UNDER_TEST`
- `SUPPORTED`
- `SUPPORTED_WITH_QUALIFICATIONS`
- `NOT_SUPPORTED`
- `UNRESOLVED`
- `INSUFFICIENT_EVIDENCE`
- `CONTAMINATED`
- `UNKNOWN`

```text
It remains a Claim (ADR-004) until tested on Learner B
or an equivalent control.
```

Transferring **answers** instead of **method** fails the experiment design.

---

## 11. Learner A / Learner B protocol

1. **Learner A** produces source project evidence and postmortem (domain + method).
2. **Faculty** derives method candidate (`PROPOSED`).
3. **Learner B** receives **method**, not answers, solutions, sealed FENs, or
   near-duplicates from A’s held-out set.
4. Learner B faces **clean held-out / non-identical** evaluation in the same
   CompetenceVector family as applicable.
5. **Control** uses same foundation model/tools/runtime where applicable
   (machine), or comparable human baseline without puzzle/answer transfer
   (human).
6. Machine Learner B preserves **frozen-model** rules (CG-AGI-1A-P0 §12).
7. Human Learner B preserves **mode gates** and no live advice (CG-AGI-1B-P0 §13).
8. If only one learner exists and no equivalent control can be defined → status
   `UNRESOLVED` (or `INSUFFICIENT_EVIDENCE`), not `SUPPORTED`.

Cross-kind protocol (e.g. machine A → human B method) is allowed only as
**method** comparison — never as shared learner identity or merged custody.

---

## 12. Control design

Clean control requirements:

| Control element | Rule |
|-----------------|------|
| Machine arms | Same foundation model / tools / runtime where practical |
| Human arms | Comparable baseline; no puzzle/answer transfer from A |
| No source answers | Absolute |
| No source task leakage | Absolute for held-out |
| No hidden curriculum leakage | Method description must not smuggle solutions |
| EvaluationDescriptor family | Same or explicitly comparable |
| CompetenceVector coordinates | Same or comparable primary set |
| Contamination labels | Travel with items |

```text
Improvement from a better base model, easier task set,
or unsealed examples is not method improvement.
```

Counterfactual comparison (Method A vs Method B) where practical (Appendix C §10).

---

## 13. EvaluationDescriptor designs

Three conceptual descriptors for the **method** experiment. These are not
learner-competence K0/K1 sitters of kind A/B; they gate Faculty method Claims.

### 13.1 EVAL-1C-P0-SOURCE-POSTMORTEM

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1C-P0-SOURCE-POSTMORTEM` |
| `target_method_claim` | Source postmortem is eligible method evidence (not domain proof) |
| `source_projects` | `CG-AGI-1A-P0` and/or `CG-AGI-1B-P0` |
| `source_evidence` | Postmortem + EvidenceRecord refs |
| `allowed_inputs` | Method-slice narrative, failure patterns, eval ids, contamination findings |
| `forbidden_inputs` | Treating K1 domain success as method success; absorbing answer keys into Faculty custody |
| `contamination_policy` | Mark source items that must not travel to B |
| `control_policy` | N/A (source eligibility only) |
| `scoring_method` | Steward checklist: completeness, chain separation, uncertainty present |
| `evaluator_authority` | ChessGuide Faculty steward |
| `uncertainty_state` | Recorded |
| `verdict_type` | `LEARNING` / method-eligibility — not domain mastery |

### 13.2 EVAL-1C-P0-METHOD-CANDIDATE

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1C-P0-METHOD-CANDIDATE` |
| `target_method_claim` | CandidateImprovedLearningStrategy is well-formed Claim |
| `source_projects` | As referenced by candidate |
| `source_evidence` | Refs only |
| `allowed_inputs` | changed_method, expected_improvement, applicability, known_failures, validation_plan |
| `forbidden_inputs` | Answer keys, sealed FENs, learner state merge |
| `contamination_policy` | Candidate must declare non-transferables |
| `control_policy` | Draft control sketch required before `UNDER_TEST` |
| `scoring_method` | Steward gate: Claim fields complete; answers not included |
| `evaluator_authority` | ChessGuide Faculty steward (ADR-004) |
| `uncertainty_state` | Status starts `PROPOSED` |
| `verdict_type` | `LEARNING` (claim formation) |

### 13.3 EVAL-1C-P0-LEARNER-B-VALIDATION

| Field | Value |
|-------|-------|
| `eval_id` | `EVAL-1C-P0-LEARNER-B-VALIDATION` |
| `target_method_claim` | Method B improves vs control under clean conditions |
| `source_projects` | A’s project id (reference) |
| `source_evidence` | Method candidate + B’s K0/K1 EvaluationDescriptors (1A or 1B family) |
| `allowed_inputs` | Method text; B’s own training materials under labels; B’s held-out set |
| `forbidden_inputs` | A’s answers, A’s sealed/held-out items, near-duplicates, model upgrade mid-arm |
| `contamination_policy` | Any leakage → `CONTAMINATED` for this Claim |
| `control_policy` | §12 mandatory |
| `scoring_method` | Method metrics (§14) + comparable CompetenceVector movement; no single metric sufficient |
| `evaluator_authority` | ChessGuide Faculty steward + domain evaluator for B’s domain outcome (kept separate) |
| `uncertainty_state` | Must survive; default not `SUPPORTED` without clean control |
| `verdict_type` | `LEARNING` for method Claim; `DOMAIN` for B’s competence remains separate |

---

## 14. Method scoring

Candidate method improvement metrics (use several; none alone proves learning-to-learn):

| Metric | Intent |
|--------|--------|
| Less time | Same/better competence faster |
| Less compute | Machine arms |
| Fewer repeated errors | Recurring-error class decline |
| Better transfer | Held-out / LOE-008 analogues |
| Better explanation quality | LOE-009 / explanation coordinates |
| Fewer replanning events | Plan stability without answer leakage |
| More reliable gap diagnosis | K0→gap fidelity |
| Lower contamination risk | Process safety |
| Clearer uncertainty preservation | No SUCCESS/FAILURE collapse |

```text
No single metric proves learning-to-learn.
```

---

## 15. Contamination and held-out custody

| Label | Applies to |
|-------|------------|
| `PUBLIC_DEVELOPMENT` | This design document; method classes |
| `TRAINING_VISIBLE` | Learner B training materials |
| `HELD_OUT` | Learner B validation items |
| `SEALED` | Access-controlled B (and A) held-out sets |
| `CONTAMINATED` | Leakage of A solutions/tasks/near-duplicates into B |

Apply labels to: source tasks, source solutions, source postmortems, method
artifacts, Learner B task sets, cross-learner reuse.

```text
A method can transfer,
but answers, solutions, sealed positions, or near-duplicates cannot.
```

---

## 16. Domain learning vs project-method learning

| Kind | Meaning | Broad transfer candidate? |
|------|---------|---------------------------|
| **Chess-domain competence** | What Learner A/B learned about chess | No (domain-bound) |
| **Project execution quality** | Was the LearningProject well-run? | No |
| **Faculty method learning** | What Faculty learned about *how* to teach/learn | **Yes — candidate only**, after validation |
| **Candidate cross-domain learning** | Stripped method pattern for University/Nomokrator | Only after GLA export boundary + target validation |

Only Faculty method learning may become a candidate for broader transfer, and
**only after** Learner B / equivalent control validation.

---

## 17. Cross-domain boundary

CG-AGI-1C-P0 does **not** yet export `GeneralizableLearningArtifact`.

| Rule | Statement |
|------|-----------|
| Abstraction ≠ generalization | Appendix C §7 |
| Chess content must be stripped | Before any GLA candidate |
| Domain dependencies must be listed | Explicit |
| Target-domain validation required | Nomokrator / other — later |
| Nomokrator | May consume **method** evidence only later — not chess content |
| Personal-AGI University | Validates generalization later (CG-AGI-1D) |
| This PR | No export implementation |

A Faculty method Claim that is `SUPPORTED` in chess is still **not** cross-domain
evidence until a clean transfer arm in another domain succeeds.

---

## 18. Faculty method output

Possible outputs of a future CG-AGI-1C execution (not this design PR):

- `CandidateImprovedLearningStrategy` (`PROPOSED` … `SUPPORTED` / …)
- rejected method candidate (`NOT_SUPPORTED`)
- unresolved method candidate (`UNRESOLVED` / `INSUFFICIENT_EVIDENCE`)
- contamination finding (`CONTAMINATED`)
- evaluator improvement proposal
- curriculum ordering proposal
- diagnostic improvement proposal
- `GeneralizableLearningArtifact` **candidate** — design-only, not exported

---

## 19. Failure modes

| Failure | Why it invalidates or qualifies |
|---------|----------------------------------|
| Transferring answers instead of method | Experiment design failure |
| Mixing human/machine evidence | Custody violation |
| Overfitting to Ronny | Not general method |
| Overfitting to a frozen model | Method not portable across arms |
| Post-hoc storytelling | Claim without planned validation |
| Method “improvement” from easier tasks | Control failure |
| Model upgrade masquerading as Faculty learning | Causal control failure |
| Contamination of Learner B | Status → `CONTAMINATED` |
| Correct domain outcome mistaken for method improvement | Verdict collapse |
| Good project execution mistaken for domain truth | Appendix C §1 |
| Abstraction mistaken for generalization | Appendix C §7 |
| Dashboard display mistaken for governed knowledge | ADR-E003 / display-host |

---

## 20. Verdicts

| Verdict | This design PR | Future execution |
|---------|----------------|------------------|
| **Engineering** | N/A | Harness may be validated without science |
| **Domain outcome** | Not measured | Belongs to A/B learners, not Faculty |
| **Project outcome** | Design completeness | Was 1C protocol followed? |
| **Learning outcome** | Not produced | Learner B domain learning stays on B’s chain |
| **Faculty method claim** | Not supported by design alone | Only after EVAL-1C-P0-LEARNER-B-VALIDATION |
| **Scientific support** | **Cannot** support AGI hypothesis | At most a qualified Faculty method Claim |
| **Cross-domain generalization** | Forbidden / not claimed | Requires later GLA + target validation |

```text
This design cannot itself support the AGI hypothesis.
A future CG-AGI-1C execution can only produce a qualified
Faculty method claim, not AGI proof.
```

---

## 21. Acceptance criteria for future execution PR

Any CG-AGI-1C execution PR must pass **all** of:

- source project evidence identified
- source postmortem available
- `CandidateImprovedLearningStrategy` explicitly formed
- Learner B / equivalent control defined (else `UNRESOLVED`)
- method transferred without answers
- clean held-out set for B
- contamination labels present and enforced
- EvaluationDescriptors (`EVAL-1C-P0-*`) followed
- comparable K0/K1 for B (and control where applicable)
- evidence chains separated (human / machine / Faculty method)
- `uncertainty_state` preserved
- verdicts separated (§20)
- no federation widening
- no generic AGI runtime inside ChessGuide
- no dashboard-host ownership transfer
- no Personal-AGI / Nomokrator / BioChronos writes unless separately ordered
- no Buddy/LARIS/Chrome/MCP activation unless separately ordered
- ADR-004 stewardship on method Claim status changes

---

## 22. Open questions

- What qualifies as Learner B for the machine track?
- What qualifies as Learner B for the human track?
- Can Ronny be both Learner A and later Learner B across **different motifs**
  without contamination?
- How long must time/error reduction persist?
- Which method artifacts may be reused without contaminating held-out tasks?
- How to compare human and machine method evidence without false equivalence?
- When does Faculty learning become a `GeneralizableLearningArtifact` candidate?
- What belongs in ChessGuide vs Personal-AGI University Runtime?
- Should CG-AGI-1D be completed before any execution harness?

---

## 23. Decision recommendation

**Recommended next PR:** **CG-AGI-1D Personal-AGI University Runtime Integration
Contract Detail** (roadmap Phase 6).

Rationale:

1. This document completes Phase 5 (Faculty learning-to-learn **design**).
2. CG-AGI-1D clarifies University vs Faculty ownership before any harness could
   call external workers or propose GLA export boundaries.
3. **Execution harness** for 1A-P0 / 1B-P0 / 1C-P0 should wait until **1A-P0,
   1B-P0, 1C-P0, and 1D** design/contract documents exist, unless explicitly
   ordered otherwise.

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
  → CG-AGI-1B-P0 human dry-run design
  → This document (Phase 5 CG-AGI-1C-P0 Faculty learning-to-learn dry-run design)
  → Phase 6 CG-AGI-1D Personal-AGI University Runtime Integration Contract Detail (recommended next)
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
- no federation export widening
- no GeneralizableLearningArtifact export
- no AGI claim from design alone
- no rewrite of FLL-1
