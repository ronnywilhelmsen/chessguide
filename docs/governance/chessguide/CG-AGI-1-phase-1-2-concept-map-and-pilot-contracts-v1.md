# CG-AGI-1 Phase 1–2: Concept Map and Pilot Contracts v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1-P12 |
| **Title** | CG-AGI-1 Phase 1–2: Concept Map and Pilot Contracts v1 |
| **Version** | 1.0 |
| **Status** | Draft (governance / contracts only) |
| **Date** | 2026-08-13 |
| **Classification** | Repository truth concept map + pilot contracts |
| **Scope** | Conceptual contracts for LearningProject, CompetenceVector, EvaluationDescriptor, contamination, Faculty learning-to-learn — **no runtime** |
| **Parent** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md) (Faculty Handoff Roadmap + Appendix C) |
| **Depends on** | [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-002](CG-002-federation-relationship.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [ACG-001](../Architecture-Continuity-Gate-v1.0.md), [CE-MCP-DR-v1](../../reviews/Chrome-Extension-MCP-Discovery-Review-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | CG-FLL-001 / FLL-1, CG-FLL-002, CG-FLL-003, CG-FLL-1E, CFA, LearningTrace, ADR-E003, CG-AGI-1 Appendix C |

> **Governance note.** This document converts CG-AGI-1 Phase 1–2 (concept map +
> pilot contracts) into precise, non-runtime contracts. It does not implement
> schemas, persistence, dashboard ownership, Chrome/MCP, Buddy, LARIS, or a
> generic AGI runtime. `thewilhelmsen.com` remains display-host only.

---

## 1. Purpose

This is **CG-AGI-1 Phase 1–2**: repository truth alignment and pilot contract
design.

It answers:

- How do existing ChessGuide concepts map onto CG-AGI Faculty terms?
- What must a LearningProject, CompetenceVector, and EvaluationDescriptor
  contain before any dry-run or runtime PR?
- How are contamination, held-out evidence, engine use, and human/machine
  evidence chains kept from collapsing?
- What is the Faculty learning-to-learn claim boundary before Learner B?

This document authorizes **contract design**, not implementation. Roadmap Phase 3+
(dry-run designs) come next.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1** (incl. Appendix C) | Parent Faculty handoff + cross-domain boundary — canonical for this PR |
| **ronnywilhelmsen/chessguide** | Repository truth for chess-domain governance, evidence, evaluation, competence |
| **FLL / CFA / LearningTrace / ADR-E003** | Existing doctrine — **not overridden** by this document |
| **Personal-AGI** (external) | University Runtime / general capabilities — does not own chess evidence |
| **Nomokrator** (external) | Project lifecycle / project-method evidence — not chess truth |
| **thewilhelmsen.com** | Display-host only; dashboard bridge does not transfer ownership |
| **Chrome / MCP** | Discovery-only (CE-MCP-DR-v1); inactive |

Rules:

- This document **depends on** CG-AGI-1 and Appendix C.
- It **must not** override FLL, CFA, LearningTrace, or ADR-E003.
- Proposal terms (`LearningProject`, `CompetenceVector`, `EvaluationDescriptor`,
  `CandidateImprovedLearningStrategy`, `GeneralizableLearningArtifact`) remain
  **proposal** until a later ADR or accepted contract explicitly adopts them.
- Federation remains completed-game `ObservationRecord` only ([FEDERATION.md](../../FEDERATION.md)).

---

## 3. Concept map

| Concept | Existing source | Meaning | CG-AGI role | What it is not | Ownership |
|---------|-----------------|---------|-------------|----------------|-----------|
| **Episode / LearningTrace** | ADR-001, CB-005 | Evidence + custody of what happened for one Actor | Custody substrate LearningProjects **reference**; episodes hang under a project without replacing Episode identity | Learning; competence; Faculty method knowledge | ChessGuide (sovereign custody) |
| **EvidenceRecord** | ADR-003 | LOE/DOE evidence supporting integration assessment | Populates `evidence`, `competence_checks`, method evidence | Proof of learning by itself; claim; knowledge | ChessGuide |
| **Claim** | ADR-004 | Governed hypothesis / påstand under stewardship | Wraps competence claims, CandidateImprovedLearningStrategy, export candidates | Observation; automatic mastery; federation export | ChessGuide (stewardship gate) |
| **CFA capability dependencies** | CFA v1.0, LEF-2A/2B | Logical formation of durable capability over time | Explains how evidence → conditions → integration → stewardship → claims relate for a LearningProject | Runtime pipeline; LearningProject schema | ChessGuide (logical architecture) |
| **FLL learner transformation** | CG-FLL-001/002/003/1E | Learning = integration achieved; Observed→Explained→Replayed→Validated | Human track (CG-AGI-1B) protocol; I-1–I-4 remain in force | Machine track rewrite; Elo-as-learning | ChessGuide Faculty / human pilot |
| **UKF Observation→…→Knowledge** | ADR-E003 | Layered knowledge governance across surfaces | Every LearningProject signal enters at Observation; promotion only behind mode/stewardship gates | Surface data as knowledge; voice-as-rationale | ChessGuide (UKF sovereign) |
| **LearningProject** | CG-AGI-1 §14; Appendix C §2 | Project-shaped bounded competence goal; replayable | Primary pilot container for CG-AGI-1A/1B | Episode; CFA; Claim; proof of competence on completion | ChessGuide Faculty |
| **CompetenceVector** | CG-AGI-1 §12 | Multi-coordinate competence snapshot (K0/K1) | Baseline and held-out outcome measurement | Single Elo; mastery claim per coordinate | ChessGuide domain evaluator |
| **EvaluationDescriptor** | This document §6 | How a competence check is run (tools, labels, authority) | Makes K0/K1 and transfer tests auditable | Engine oracle; silent advice | ChessGuide domain evaluator |
| **CandidateImprovedLearningStrategy** | CG-AGI-1 §17; this §10 | Faculty claim that a method change will improve later learners | CG-AGI-1C object of study | Domain answers; knowledge until Learner B evidence | ChessGuide Faculty method custody |
| **GeneralizableLearningArtifact** | CG-AGI-1 Appendix C §7 | Export-bounded method pattern with domain content removed | CG-AGI-1E / University candidate — conceptual only here | Chess knowledge; automatic cross-domain evidence | ChessGuide proposes; University validates; Nomokrator may consume method only |
| **Faculty** | CG-AGI-1 §4 | Domain institution studying how chess is learned by humans and machines | Owns persistent domain-learning history and method experiments | Engine; AGI runtime; display host | ChessGuide |
| **University** | CG-AGI-1 §19; Appendix C §1 | Candidate generalizations **across** domains | Receives abstractions; tests held-out transfer | Chess competence mint; ChessGuide doctrine owner | Personal-AGI |
| **Nomokrator ProjectContract** | CG-AGI-1 Appendix C §5 | Project lifecycle + authority/safety gates | Interface for project-method evidence; ChessGuide does not host Nomokrator runtime | Chess domain evaluator; biological evaluator | Nomokrator (lifecycle); domain keeps outcome verdict |

### Mapping invariant

```text
LearningProject uses Episode / Evidence / Claim / CFA / UKF.
LearningProject does not replace them.
```

Canonical field-level mapping of LearningProject → Episode/CFA remains an open
question (§14) for a later ADR if persistence is ordered.

---

## 4. LearningProject contract

**Status:** conceptual contract (proposal). No schema file. No runtime.

### 4.1 Fields

| Field | Meaning |
|-------|---------|
| `id` | Stable LearningProject identifier (e.g. `CG-AGI-1A-P0`) |
| `learner_kind` | `HUMAN` \| `MACHINE` |
| `learner_id` | Actor / machine-lineage id (human Actor per ADR-001; machine id TBD — §14) |
| `domain` | Always chess for ChessGuide Faculty projects |
| `goal` | Bounded competence goal in natural language + vector targets |
| `initial_state` | Starting context (resources, prior projects, model freeze id) |
| `baseline` | `K0` CompetenceVector + EvaluationDescriptor refs |
| `required_competence` | Target profile for epistemic close |
| `gaps` | Diagnosed gaps relative to `required_competence` |
| `hypotheses` | What learning interventions are expected to change |
| `project_method_version` | Version of the method / curriculum policy used |
| `strategy` | High-level approach (study → practice → transfer, etc.) |
| `curriculum` | Ordered work plan |
| `plan_versions` | Immutable history of plan revisions |
| `replanning_events` | Why and when the plan changed |
| `episodes` | References to Episode / LearningTrace ids (not embedded truth rewrite) |
| `experiments` | Structured experiments inside the project |
| `simulations` | Variation / internal practice without claiming outcome |
| `resources` | Allowed manuals, corpora, tools (disclosed) |
| `observations` | UKF Observation-layer facts (ADR-E003) |
| `actions` | What was done (activity; not learning unless linked to evidence) |
| `agents_models_tools` | Agents, models (version/hash), tools used |
| `decisions` | Material choices with rationale custody |
| `authority_scope` | What the project / agents are allowed to decide |
| `human_decision_gates` | Required human approvals / steward gates |
| `failures` | Recorded failures |
| `abandoned_paths` | Paths tried and stopped (replayability) |
| `evidence` | EvidenceRecord refs (ADR-003) |
| `competence_checks` | EvaluationDescriptor refs for checks during the project |
| `transfer_tests` | Held-out / novel-position evaluations |
| `evaluation` | Aggregate evaluation summary refs |
| `outcome` | Operational project outcome (process quality — Appendix C §13-B) |
| `uncertainty_state` | Epistemic state surviving close (Appendix C §3) |
| `postmortem` | Method and domain reflection |
| `resulting_competence` | `K1` CompetenceVector on held-out tasks (or explicit failure to obtain) |

### 4.2 Invariants

```text
project completed ≠ competence acquired
project completed ≠ domain hypothesis resolved
engineering validated ≠ scientifically supported
learner_kind must be explicit
uncertainty_state must survive operational close
```

A LearningProject closes **operationally** when work stops.

It closes **epistemically** for competence only when `resulting_competence`
(`K1`) is obtained on **held-out** tasks under a disclosed EvaluationDescriptor,
with evidence/claim separation preserved.

Do **not** rely on LLM memory alone for reconstruction (Appendix C §2).

### 4.3 Three outputs (required)

| Output | Field locus | Meta-learning candidate? |
|--------|-------------|--------------------------|
| **Domain Outcome** | `resulting_competence`, domain `uncertainty_state` | No |
| **Project Outcome** | `outcome`, plan/replanning/failures | No |
| **Learning Outcome** | `postmortem` → CandidateImprovedLearningStrategy | **Yes** |

---

## 5. CompetenceVector contract

**Status:** conceptual contract (proposal).

A CompetenceVector is a multi-coordinate snapshot at a timepoint (`K0` or `K1`).

### 5.1 Machine coordinates

| Coordinate | Notes |
|------------|-------|
| tactical recognition | Pattern spotting without engine answering |
| positional understanding | Structure / plans |
| calculation | Variation depth/accuracy under no-engine rules |
| candidate move generation | Breadth and relevance of candidates |
| evaluation | Positional assessment quality |
| opening understanding | Principles / plans — not memorized lines alone |
| endgame competence | Technique and conversion |
| strategic planning | Multi-move plans |
| error recognition | Detecting own mistakes |
| explanation quality | Why, not only what |
| transfer to unfamiliar positions | Held-out / novel structures |
| actual game performance | Play under disclosed mode/tool rules |

### 5.2 Human coordinates

| Coordinate | Notes |
|------------|-------|
| rated performance | One coordinate only — never the whole claim |
| centipawn loss under disclosed conditions | Conditions must be explicit |
| tactical success | Linked to LOE where possible |
| calculation depth / accuracy | Steward-observable |
| positional judgment | |
| endgame performance | |
| opening competence | |
| time management | |
| recurring-error elimination | Same error class across episodes |
| explanation / understanding | LOE-009 / DOE-006 |
| transfer to novel positions | LOE-008 |

### 5.3 Invariants

```text
A vector coordinate is not a mastery claim by itself.
K1 without K0 is inadmissible.
Single Elo is not a CompetenceVector.
Coordinate movement without held-out EvaluationDescriptor is not INTERNALIZED_COMPETENCE.
```

Promotion of vector movement to a **Claim** requires ADR-004 stewardship.

---

## 6. EvaluationDescriptor contract

**Status:** conceptual contract (proposal).

| Field | Meaning |
|-------|---------|
| `eval_id` | Stable id |
| `target_competence` | Which CompetenceVector coordinates are under test |
| `learner_kind` | `HUMAN` \| `MACHINE` |
| `mode` | Competition / review / training / sealed-eval — unknown fails closed to no-advice |
| `task_set` | Ordered tasks / positions / prompts |
| `item_labels` | Per-item contamination labels (§7) |
| `allowed_tools` | Explicit allow-list |
| `forbidden_tools` | Explicit deny-list |
| `engine_allowed` | `yes` \| `no` |
| `engine_role` | `evaluator` \| `resource` \| `generator` \| `counterexample` \| `forbidden` |
| `held_out_policy` | How held-out is enforced |
| `contamination_policy` | What happens if contamination detected |
| `scoring_method` | How coordinates are scored (qualitative steward, rubric, etc.) |
| `explanation_required` | Whether move-only answers are rejected |
| `transfer_required` | Whether novel/held-out transfer is required for pass |
| `evaluator_authority` | Who may issue the domain verdict (ChessGuide domain evaluator) |
| `uncertainty_state` | Resulting epistemic state (Appendix C §3) |
| `verdict_type` | `ENGINEERING` \| `DOMAIN` \| `LEARNING` \| `MIXED` — keep separate where possible |

**Rule.** If `engine_role` includes answering play for the learner, the evaluation
**cannot** certify `INTERNALIZED_COMPETENCE`.

---

## 7. Contamination / held-out labels

| Label | Meaning |
|-------|---------|
| `PUBLIC_DEVELOPMENT` | Visible in ordinary development; not sealed |
| `TRAINING_VISIBLE` | Learner / lineage has been exposed during training |
| `HELD_OUT` | Reserved for evaluation; not used in training for this lineage |
| `SEALED` | Locked evaluation set; access controlled |
| `CONTAMINATED` | Prior exposure or leakage invalidates clean held-out use |

**Rule.** A task seen by the learner or learning lineage cannot later count as
**clean held-out** evidence for that same learner / lineage.

Contamination labels must travel with evaluation items across repositories
(Appendix C §9). Contaminated items may still be useful as training or
diagnostic material; they must not be rebranded as held-out success.

---

## 8. Engine-use separation

| Class | Meaning |
|-------|---------|
| **INTERNALIZED_COMPETENCE** | Correct play / explanation **without** engine answering on held-out tasks |
| **TOOL_ASSISTED_CAPABILITY** | Explicit, disclosed tool use (engine, tablebase, search) |
| **CREATED_OR_COMPOSED_SPECIALIST_CAPABILITY** | Learner creates/composes a specialist rather than calling a stock engine as self |

Engine **may**: evaluate, generate positions/variations, provide counterexamples,
score attempts (ADR-007 reference lane).

Engine **must not**: certify internalized competence when used to answer; become
learner rationale; become pedagogy; become a Claim by itself (ADR-005/006/007).

---

## 9. Human / machine evidence separation

| Chain | Contents | Custody |
|-------|----------|---------|
| **Human learner evidence chain** | Episodes, LOE/DOE, human CompetenceVectors, FLL-1 protocol records | Human Actor LearningTrace (ADR-001) |
| **Machine learner evidence chain** | Machine episodes / runs, machine CompetenceVectors, model freeze ids, tool disclosures | Separate machine lineage custody (persistence TBD — §14) |
| **Faculty method evidence chain** | Postmortems, CandidateImprovedLearningStrategy, method experiments, GeneralizableLearningArtifact candidates | Faculty method custody — not learner state |

**Rules:**

- Do **not** mix human and machine learner state into one custody chain.
- Faculty may **compare methods**, not merge learner evidence.
- Cross-kind method comparison is allowed only as method evidence (CG-AGI-1C),
  never as shared learner identity.
- A single observation never becomes learner state (ADR-E003; CG-FLL-001 I-3).

---

## 10. Faculty learning-to-learn contract

### CandidateImprovedLearningStrategy

**Status:** conceptual claim-shaped artifact (ADR-004). Not knowledge until tested.

| Field | Meaning |
|-------|---------|
| `source_project` | LearningProject id (Learner A) |
| `source_learner_kind` | `HUMAN` \| `MACHINE` |
| `source_evidence` | EvidenceRecord / postmortem refs |
| `observed_failure_patterns` | What went wrong or was slow |
| `changed_method` | What would be done differently |
| `expected_improvement` | Less time/compute/errors or better transfer |
| `applicability_conditions` | When the change should apply |
| `known_failures` | Where the change already failed or is risky |
| `target_learner_conditions` | Comparable baseline for Learner B |
| `validation_plan` | EvaluationDescriptors + held-out policy for Learner B |
| `status` | `PROPOSED` \| `UNDER_TEST` \| `SUPPORTED` \| `NOT_SUPPORTED` \| `UNRESOLVED` \| … |

**Rule.** It is a **Claim** until tested on Learner B (or equivalent control) with
counterfactual comparison where practical (Appendix C §10). Transferring
**answers** instead of **method** fails the experiment design.

---

## 11. Cross-domain boundary

### GeneralizableLearningArtifact (conceptual only)

| Field | Meaning |
|-------|---------|
| `source_domain` | e.g. `chessguide` |
| `source_project` | LearningProject id |
| `source_evidence` | Method evidence refs |
| `learned_pattern` | Domain-stripped method pattern |
| `applicability_conditions` | When to try it |
| `known_failures` | Known negative cases |
| `confidence` | Epistemic confidence — not marketing |
| `domain_specific_dependencies` | What still depends on chess (must be listed) |
| `removed_domain_content` | Chess content that was stripped |
| `proposed_target_domains` | e.g. Nomokrator |
| `validation_status` | Pending held-out transfer + external evaluation |

**Invariant:**

```text
abstraction ≠ generalization
```

A general-sounding ChessGuide principle is **not** cross-domain evidence until it
improves performance in another domain under a **clean control** (CG-AGI-1
Appendix C §8): same foundation model / tools / runtime; transfer arm may add
only approved domain-independent artifacts; target tasks are new.

No schema file and no export implementation in this PR.

---

## 12. First pilot descriptors (design only)

### 12.1 CG-AGI-1A-P0 — Machine rook endgames

| Field | Design value |
|-------|--------------|
| `id` | `CG-AGI-1A-P0` |
| `learner_kind` | `MACHINE` |
| `goal` | Learn rook endgames to robust transfer level |
| `baseline` | K0_machine: KRK/KRP basics, explanation quality, no-engine set |
| `required_competence` | Held-out rook-endgame play + explanations |
| `strategy` | Learner-generated plan from gaps; study → practice → transfer |
| `resources` | Endgame manuals / excerpts as resources |
| `engine_role` (training) | evaluator / counterexample / generator — not answering as learner |
| `competence_checks` | No-engine internalized tests mid-project |
| `transfer_tests` | New structures / side-to-move; not clones |
| `uncertainty_state` | Must remain explicit if transfer incomplete |
| `Faculty analysis` | Method quality → CG-AGI-1C input |

**Not authorized:** runtime, model install, MCP, federation export.

### 12.2 CG-AGI-1B-P0 — Human tactical safety / loose-piece awareness

| Field | Design value |
|-------|--------------|
| `id` | `CG-AGI-1B-P0` |
| `learner_kind` | `HUMAN` |
| `learner_id` | Ronny (steward-led; CG-FLL-001 / CG-FLL-1E) |
| `goal` | Diagnose and improve tactical safety / loose-piece awareness; secondary simple endgame conversion transfer |
| `baseline` | K0_human from games/puzzles: loose pieces, missed recaptures, conversion failures, LOE-009 samples |
| `strategy` | Observed → Explained → Replayed → Validated (FLL-1); adaptive curriculum |
| `evidence` | LOE-001/006/008/009; DOE-006/008; activity tagged separately |
| `transfer_tests` | Novel positions; later review games (mode-gated; no live competition advice) |
| `Faculty analysis` | User-specific vs general method |

**Not authorized:** Buddy/LARIS activation, live advice, dashboard ownership of evidence.

### 12.3 CG-AGI-1C-P0 — Learner A/B learning-to-learn test

| Field | Design value |
|-------|--------------|
| `id` | `CG-AGI-1C-P0` |
| `inputs` | Completed CG-AGI-1A-P0 and/or CG-AGI-1B-P0 postmortems |
| `artifact` | CandidateImprovedLearningStrategy |
| `protocol` | Learner A → method claim → Learner B gets method, not answers |
| `success` | Comparable/better competence with less time/compute/errors or better transfer |
| `evidence chains` | Method chain only; no merged learner state |
| `status` | Design only — requires at least one completed A/B source project |

**Not authorized:** treating CandidateImprovedLearningStrategy as knowledge without Learner B evidence.

---

## 13. Acceptance criteria for future runtime PRs

Any future runtime or dry-run execution PR must pass **all** of:

- `K0` / `K1` required and recorded as CompetenceVectors
- held-out evaluation required (EvaluationDescriptor + labels)
- contamination labels required on evaluation items
- engine-use disclosed (`engine_allowed`, `engine_role`)
- `learner_kind` explicit (`HUMAN` \| `MACHINE`)
- evaluator authority explicit (ChessGuide domain evaluator for chess outcomes)
- `uncertainty_state` preserved (no SUCCESS/FAILURE collapse)
- evidence / claim separation preserved (ADR-003 / ADR-004)
- human / machine / Faculty method chains not mixed
- `project completed ≠ competence acquired`
- no federation widening beyond completed-game `ObservationRecord`
- no generic AGI runtime inside ChessGuide
- no dashboard-host ownership transfer (`thewilhelmsen.com` display only)
- Chrome/MCP remain inactive unless separately governed
- LARIS / Buddy remain inactive unless separately activated
- no live competition advice

---

## 14. Open questions

- Which local frozen model(s) for CG-AGI-1A-P0?
- Which held-out suites are admissible (license, contamination, sealed custody)?
- How to persist machine learner identity relative to ADR-001’s human-Actor default (CB-005 A-2)?
- How to map LearningProject fields onto Episode / CFA without duplicating custody?
- How to validate `GeneralizableLearningArtifact` later under clean control?
- What belongs in ChessGuide vs Personal-AGI beyond CG-AGI-1D?
- Which EvaluationDescriptor scoring methods are steward-only vs instrumented?
- When (if ever) may dashboard display Faculty contracts without implying ownership?

---

## 15. Decision recommendation

**Recommended next PR:** **CG-AGI-1A-P0 Machine Chess Mastery dry-run design**
(roadmap Phase 3).

Rationale:

1. Roadmap order places machine dry-run before human dry-run (CG-AGI-1 §25).
2. Machine track exercises frozen-model, contamination, and engine-separation
   contracts with clearer causal controls before human subject complexity.
3. Method findings can later inform CG-AGI-1B-P0 and CG-AGI-1C-P0 without
   rewriting FLL-1.

**Alternate (acceptable if ordered):** CG-AGI-1B-P0 Human Chess Mastery dry-run
design — especially if steward capacity prioritizes continuing FLL-1 evidence
sooner.

**Do not implement runtime in the next PR.** Dry-run design only.

Chrome/MCP remain discovery-only. Dashboard/thewilhelmsen.com remain
display-host only. Personal-AGI / Nomokrator / BioChronos remain untouched.

---

## Appendix A — Continuity (ACG-001)

```text
CG-AGI-1 roadmap + Appendix C
  → This document (Phase 1–2 concept map + contracts)
  → Phase 3 CG-AGI-1A-P0 dry-run design (recommended next)
  → Phase 4 CG-AGI-1B-P0 dry-run design
  → Phase 5 CG-AGI-1C-P0 learning-to-learn design
  → Phase 6 CG-AGI-1D integration contract detail
  → Runtime only after explicit governance approval
```

## Appendix B — Non-goals of this PR

- no runtime code
- no JSON Schema / SQL / API
- no Android / web-dashboard / Chrome / MCP changes
- no package / lockfile changes
- no thewilhelmsen.com changes
- no Personal-AGI / Nomokrator / BioChronos repository changes
- no Buddy / LARIS / TSS/CCT activation
- no federation export widening
- no claim that proposal contracts are Accepted ADRs
