# CG-AGI-1A-P0 Machine Chess Mastery Harness Design / K0 Baseline Package v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1A-P0-HARNESS-1 |
| **Title** | Machine Chess Mastery Harness Design / K0 Baseline Package v1 |
| **Version** | 1.0 |
| **Status** | Draft (governance / harness-design / K0 package design only) |
| **Date** | 2026-08-16 |
| **Classification** | Machine-lane harness design after CG-AGI-1-GATE-1 |
| **Scope** | Exact requirements a future CG-AGI-1A-P0 execution harness must satisfy before any model run is authorized — **no runtime**, no execution, no sealed production datasets |
| **Parent pilot** | [CG-AGI-1A-P0](CG-AGI-1A-P0-machine-chess-mastery-dry-run-design-v1.md) |
| **Gate** | [CG-AGI-1-GATE-1](CG-AGI-1-execution-readiness-review-gate-decision-v1.md) — `GO_FOR_1A_MACHINE_HARNESS_DESIGN` |
| **Depends on** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md), [CG-AGI-1-P12](CG-AGI-1-phase-1-2-concept-map-and-pilot-contracts-v1.md), [CG-AGI-1D](CG-AGI-1D-personal-agi-university-runtime-integration-contract-detail-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | FLL, CFA, LearningTrace, ADR-E003, ADR-007, federation rules, CG-AGI-1 Appendix C |

> **Governance note.** This document designs the harness and K0 baseline
> **package requirements**. It does not implement runtime, execute the pilot,
> create sealed production datasets, or claim AGI evidence. Execution remains
> unauthorized until a later explicit order.

---

## 1. Purpose

This is **harness-design and K0 baseline package design only** for CG-AGI-1A-P0
Machine Chess Mastery (rook endgames), following the merged gate decision
`GO_FOR_1A_MACHINE_HARNESS_DESIGN`.

It defines exactly what a future machine-lane execution harness would need
**before** any model run is authorized.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1A-P0** | Parent machine dry-run design |
| **CG-AGI-1-GATE-1** | Gate authorizing harness **design**, not execution |
| **CG-AGI-1-P12** | LearningProject / EvaluationDescriptor / CompetenceVector contracts |
| **CG-AGI-1D** | Evidence return / ModelRouter handshake patterns |
| **ADR-007** | Engine is reference — not pedagogy or learner rationale |
| **ADR-E003** | Observation is not knowledge |
| **FEDERATION.md** | Completed-game `ObservationRecord` only |

Rules:

- This document **depends on** CG-AGI-1A-P0 and CG-AGI-1-GATE-1.
- It **must not** override FLL, CFA, LearningTrace, ADR-E003, ADR-007, or
  federation rules.

---

## 3. Harness identity

| Field | Value |
|-------|-------|
| **ID** | `CG-AGI-1A-P0-HARNESS-1` |
| **Parent pilot** | `CG-AGI-1A-P0` |
| **Lane** | `MACHINE` |
| **Domain** | chess / rook endgames |
| **Status** | harness design only |
| **Runtime** | not implemented |
| **Execution** | not authorized |

---

## 4. Gate compliance

PR #54 ([CG-AGI-1-GATE-1](CG-AGI-1-execution-readiness-review-gate-decision-v1.md))
authorizes **only** harness design, not execution.

Selected gate (restated):

```text
GO_FOR_1A_MACHINE_HARNESS_DESIGN
```

```text
This document does not authorize runtime execution.
```

---

## 5. Non-goals

This PR explicitly excludes:

- runtime code
- model execution
- model install
- engine dependency
- tablebase dependency
- sealed production dataset creation
- schemas
- package / lockfile changes
- Android / web-dashboard / Chrome / MCP changes
- Buddy / LARIS activation
- thewilhelmsen.com changes
- Personal-AGI / Nomokrator / BioChronos writes
- AGI claim
- federation export widening

---

## 6. K0 baseline package requirements

K0 is measured **before** study / curriculum / labeled counterexample review of
the same items (CG-AGI-1A-P0 §7). Bound to `EVAL-1A-P0-K0`.

### 6.1 Package contents (design requirements)

| Requirement | Specification |
|-------------|---------------|
| **Task family** | Rook endgames for machine baseline |
| **Theme scope** | KRK conversion; selected KRP; rook activity; king activity; opposition / cutting off; Philidor/Lucena **awareness** (idea class, not rote); pawn-race judgement (selected) |
| **Item count bands** | Design target: **24–40** K0 items (open to revision at selection PR); enough for coordinate coverage, not a tablebase syllabus |
| **Difficulty bands** | At least three bands: elementary technique; intermediate technique; small unfamiliar-structure slice |
| **Side-to-move coverage** | Both White- and Black-to-move represented |
| **Legal position constraints** | Legal FEN; no impossible material; no duplicate FEN; no trivial transposition clones within package |
| **No duplicates / near-duplicates** | Same motif with cosmetic rook/king shift may be flagged near-duplicate; K0 must not include K1 items |
| **No solution leakage** | Package for learner sitting excludes answer keys / PV dumps |
| **Answer format** | Primary move (UCI or SAN) + optional short candidate list |
| **Explanation format** | Why this move/plan; required; move-only rejected |
| **Timing policy** | Soft per-item time guidance optional; hard wall-clock for whole sitting recorded in run manifest |
| **Allowed tools** | Board / FEN display only |
| **Forbidden tools** | Engine, tablebase-as-answer, search, other models, hidden notes |
| **Evaluator notes** | Steward-only; not shown during sitting |
| **Scoring dimensions** | See §13 |

### 6.2 Custody after sitting

After K0 is recorded, K0 items may become `TRAINING_VISIBLE` for this lineage.
They must **not** be relabeled clean `HELD_OUT` / `SEALED` for this lineage.

---

## 7. K1 held-out custody plan

Future K1 package (bound to `EVAL-1A-P0-K1`) requirements:

| Requirement | Specification |
|-------------|---------------|
| Separate from K0 | Disjoint FENs / motifs; non-identical structures |
| Sealed before learner exposure | `SEALED` + `HELD_OUT` before any study |
| No near-duplicates | Of K0, training, or MID |
| Access control | Named custodians; least privilege |
| Custody log | Who accessed what, when, why |
| Contamination labels | Travel with items |
| Solution-key handling | Evaluator-only; never in learner prompt memory |
| Evaluator-only access until sitting complete | Absolute during answering |
| Contamination invalidation | Seen task/solution ⇒ cannot count as clean held-out for lineage |

K1 content is **not** created or committed in this PR.

---

## 8. Model freeze manifest template

Conceptual fields only — **no schema**:

| Field | Meaning |
|-------|---------|
| `model_id` | Stable model name |
| `provider` | Provider / local host |
| `version` / `hash` | Where possible |
| `runtime` / `environment` | Runtime id / env fingerprint |
| `prompt` / `policy version` | Frozen prompt/policy |
| `tool availability` | Declared allow-list (empty for answering) |
| `memory state` | Declared memory boundary / wipe / none |
| `date` / `time` | Freeze timestamp |
| `operator` | Who froze the arm |
| `allowed inputs` | Sitting inputs only |
| `forbidden inputs` | Engine, K1, solutions, upgrades |
| `upgrade policy` | Upgrade = **new arm**, not continuation |
| `arm_id` | Stable scientific arm id |

Silent upgrade mid-arm invalidates the arm for INTERNALIZED_COMPETENCE claims.

---

## 9. No-engine internalized sitting protocol

| Rule | Statement |
|------|-----------|
| Order | Learner answers **before** any engine / tablebase evaluation |
| Engine during sitting | **Forbidden** |
| Tablebase during sitting | **Forbidden** |
| Hidden evaluator hints | **Forbidden** |
| Answer repair after freeze | **Forbidden** |
| Answers frozen before scoring | Required |
| Explanations frozen before scoring | Required |
| Tool disclosure | Required in run manifest |

Applies to K0 internalized sitting, internalized MID items, and K1 answering.

---

## 10. Engine / tablebase evaluator policy

### Allowed **post-answer** roles (after freeze)

- score after answer freeze
- verify legality
- classify win / draw / loss when appropriate
- detect tactical / endgame correctness
- help identify counterexamples **after** sitting (labeled review lane)

### Forbidden

- answer for the learner
- generate live hints during sitting
- become learner rationale
- certify mastery alone
- leak into K1 custody
- stand in as pedagogy (ADR-007)

Post-hoc evaluator use is **not** TOOL_ASSISTED learner capability and does **not**
by itself prove INTERNALIZED_COMPETENCE.

---

## 11. Run manifest requirements

Conceptual run record — **no schema**:

| Field | Meaning |
|-------|---------|
| `run_id` | Stable run id |
| `project_id` | `CG-AGI-1A-P0` |
| `learner_id` / lineage | Machine lineage id |
| `arm_id` | Frozen arm |
| `model freeze manifest ref` | §8 |
| `K0 package ref` | Selected package id (future) |
| `K1 package ref` | Placeholder until sealed |
| `EvaluationDescriptor refs` | `EVAL-1A-P0-K0` / `MID` / `K1` as applicable |
| `start` / `end times` | Sitting window |
| `inputs exposed` | What the learner saw |
| `outputs produced` | Frozen answers / explanations |
| `tools disclosed` | Allow / deny actuals |
| `failures` | Recorded |
| `abandoned paths` | Replayability |
| `contamination events` | Labels / incidents |
| `uncertainty_state` | Must survive |

Aligns with CG-AGI-1D evidence return handshake patterns.

---

## 12. EvaluationDescriptor alignment

| Descriptor | Harness must know now | Future work |
|------------|----------------------|-------------|
| **EVAL-1A-P0-K0** | No-engine sitting; K0 package bands; freeze before scoring; explanation required | Concrete FEN package; operator checklist |
| **EVAL-1A-P0-MID** | Training-visible only; no K1; internalized vs labeled review lanes separate | Practice item set after K0 |
| **EVAL-1A-P0-K1** | Held-out / sealed custody plan; transfer required; no-engine answering | Sealed K1 package selection |

Descriptors themselves remain as defined in CG-AGI-1A-P0 §10; this harness binds
**procedures** to them.

---

## 13. Scoring rubric design

Scoring coordinates (no single score proves mastery):

| Coordinate | Intent |
|------------|--------|
| Legality | Move legal |
| Outcome correctness | Win/draw/loss / conversion goal as appropriate |
| Plan quality | Multi-move plan coherence |
| Rook activity | Active vs passive rook |
| King activity | Approach / opposition use |
| Pawn-race understanding | Selected KRP |
| Defensive resource recognition | Stalemate / perpetual / fortress awareness where relevant |
| Explanation quality | Why, not only what |
| Consistency across similar positions | Same idea class handled similarly |
| Transfer to non-identical positions | K1 primary; small K0 unfamiliar slice secondary |

```text
No single score proves mastery.
Coordinate movement ≠ mastery claim.
Promotion to Claim requires ADR-004 stewardship.
```

---

## 14. Contamination controls

| Label | Apply to |
|-------|----------|
| `PUBLIC_DEVELOPMENT` | This harness design; public theme classes |
| `TRAINING_VISIBLE` | K0 after sit; practice; MID |
| `HELD_OUT` | K1 |
| `SEALED` | K1 (and optionally K0 pre-first-sit custody) |
| `CONTAMINATED` | Leakage of task/solution/near-duplicate/prompt memory |

Apply to: K0, training, MID, K1, solutions, examples, model memory, prompts,
evaluator notes.

Rule: contaminated items cannot later count as clean held-out evidence for the
same lineage.

---

## 15. Evidence return handshake

Aligned with CG-AGI-1D §13:

| Return | Required |
|--------|----------|
| Run manifest | yes |
| Action log | yes |
| Frozen answers | yes |
| Frozen explanations | yes |
| Scoring report | yes (post-freeze) |
| Evaluator notes | yes (steward/evaluator) |
| Contamination report | yes |
| Uncertainty report | yes |
| Proposed EvidenceRecord refs | optional proposals only |
| Automatic Claims | **No** — ChessGuide adjudicates (ADR-003 / ADR-004) |

Returned outputs are observations / evidence **candidates**, not governed knowledge
(ADR-E003).

---

## 16. Machine learner identity

| Requirement | Specification |
|-------------|---------------|
| `learner_id` | Stable id within machine lineage |
| Model lineage | Bound to `arm_id` + freeze manifest |
| Memory boundary | Declared; no undeclared carry of sealed content |
| Run arm identity | One scientific arm per freeze |
| No silent upgrade | Absolute |
| No shared state across sealed tasks unless declared | Absolute |
| Unresolved | Persistence vs ADR-001 human-Actor default; whether ADR required before first execution |

Placeholder form (from CG-AGI-1A-P0):  
`machine-lineage://cg-agi-1a-p0/{frozen_model_id}`

---

## 17. Execution prerequisites

Before **runtime execution** is authorized, all of the following must exist:

1. This harness design **merged**
2. Legal K0 package **selected** (next recommended PR)
3. K1 custody plan **approved** (and package sealed before exposure)
4. Model freeze manifest **instantiated** (not just templated)
5. EvaluationDescriptors **bound** to concrete tasks
6. Scoring rubric **approved** for operator use
7. Contamination handling **approved**
8. Operator / run procedure **approved**
9. **Explicit later execution order**

Harness design alone is insufficient for execution.

---

## 18. Failure modes

| Failure | Effect |
|---------|--------|
| K0 contaminated before baseline | Baseline invalid |
| K1 leaked | Held-out invalid (`CONTAMINATED`) |
| Engine answer leakage | INTERNALIZED_COMPETENCE collapses |
| Model upgraded mid-arm | Arm invalid for learning claim |
| Model trained / prompted on held-out set | Contamination |
| Answer repaired after scoring | Integrity failure |
| Explanation generated post hoc | Explanation coordinate invalid |
| Evaluator overclaims mastery | Claim gate failure (ADR-004) |
| Project completion mistaken for competence | Invariant violation |
| Run manifest incomplete | Non-replayable; fail closed |
| AGI claim from one run | Forbidden |

---

## 19. Verdict separation

| Verdict | This PR |
|---------|---------|
| **Harness design readiness** | **Yes** (design complete for next selection PR) |
| **K0 baseline package readiness** | **No** — requirements defined; package not selected |
| **Execution readiness** | **No** — runtime unauthorized |
| **Domain outcome** | Not measured |
| **Learning outcome** | Not measured |
| **Scientific support** | None |
| **AGI evidence status** | None |

---

## 20. Acceptance criteria for future execution PR

Any future execution PR must pass **all** of:

- concrete K0 package
- sealed K1 package or approved custody plan with sealed package before exposure
- instantiated model freeze manifest
- no-engine sitting enforcement
- post-answer evaluator policy
- run manifest
- contamination labels
- evidence return handshake
- no federation widening
- no dashboard-host authority transfer
- no runtime unless **explicitly** authorized
- no Personal-AGI / Nomokrator / BioChronos writes unless separately ordered
- Chrome / MCP / Buddy / LARIS remain inactive unless separately ordered

---

## 21. Open questions

- Which model should be frozen first?
- Which legal rook-endgame source may be used?
- Should tablebase verification be local or external?
- How many K0 / K1 positions are enough? (bands in §6 are design targets)
- How should near-duplicate detection work?
- Should Personal-AGI workers be used in first harness?
- Does machine learner identity require ADR?
- Should scoring rubric be ADR or governance doc?

---

## 22. Decision recommendation

**Next PR:** **CG-AGI-1A-P0 K0 Baseline Package Selection / Sealed K1 Custody
Design v1**

That PR should select / specify a **legal** K0 source and item list plan, and
detail sealed K1 custody — still **without** committing sealed production
payloads unless separately ordered, and still **without** runtime execution
unless explicitly ordered.

```text
Still no runtime execution unless explicitly ordered.
```

Chrome/MCP remain discovery-only. Dashboard / `thewilhelmsen.com` remain
display-host only. Personal-AGI / Nomokrator / BioChronos remain untouched.

---

## Appendix A — Continuity (ACG-001)

```text
CG-AGI-1-GATE-1 → GO_FOR_1A_MACHINE_HARNESS_DESIGN
  → This document (CG-AGI-1A-P0-HARNESS-1)
  → Next: K0 Baseline Package Selection / Sealed K1 Custody Design
  → Runtime execution only after explicit later authorization
```

## Appendix B — Non-goals of this PR

- no runtime code
- no JSON Schema / SQL / API
- no model files, engine, or tablebase dependencies
- no sealed production datasets
- no Android / web-dashboard / Chrome / MCP changes
- no package / lockfile changes
- no thewilhelmsen.com / Personal-AGI / Nomokrator / BioChronos changes
- no Buddy / LARIS activation
- no federation export widening
- no AGI claim
