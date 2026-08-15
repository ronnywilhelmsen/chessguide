# CG-AGI-1E Nomokrator Transfer Preparation / Cross-Domain Method Export Boundary v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1E |
| **Title** | Nomokrator Transfer Preparation / Cross-Domain Method Export Boundary v1 |
| **Version** | 1.0 |
| **Status** | Draft (governance / transfer-boundary design only) |
| **Date** | 2026-08-15 |
| **Classification** | Phase 7 method-only transfer preparation boundary |
| **Scope** | Design-only rules for what ChessGuide Faculty may later prepare for Nomokrator / Personal-AGI University as **method-only** transfer material — **no runtime**, no export, no Nomokrator writes |
| **Parent** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md) |
| **Depends on** | [CG-AGI-1-P12](CG-AGI-1-phase-1-2-concept-map-and-pilot-contracts-v1.md), [CG-AGI-1A-P0](CG-AGI-1A-P0-machine-chess-mastery-dry-run-design-v1.md), [CG-AGI-1B-P0](CG-AGI-1B-P0-human-chess-mastery-dry-run-design-v1.md), [CG-AGI-1C-P0](CG-AGI-1C-P0-faculty-learning-to-learn-dry-run-design-v1.md), [CG-AGI-1D](CG-AGI-1D-personal-agi-university-runtime-integration-contract-detail-v1.md), [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | FLL-1, CFA, LearningTrace, ADR-E003, ADR-007, federation rules, CG-AGI-1 Appendix C, CG-AGI-1D |

> **Governance note.** This document prepares a **method-only** transfer boundary.
> It does not export, does not write Nomokrator / Personal-AGI / BioChronos, and
> does not claim AGI evidence. `GeneralizableLearningArtifact` remains candidate
> only. `thewilhelmsen.com` remains display-host only. Chrome/MCP remain
> discovery-only and inactive.

---

## 1. Purpose

This is the **Phase 7 transfer-preparation and cross-domain method export
boundary** for CG-AGI-1E.

It defines what ChessGuide Faculty may later prepare for **Nomokrator** and
**Personal-AGI University** as method-only transfer material, **without**
exporting:

- chess-domain competence
- learner state
- sealed tasks
- answer keys
- federation-forbidden semantics
- unvalidated general-intelligence claims

This document authorizes **boundary design**, not export or execution.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1** (incl. Appendix C) | Faculty handoff + cross-domain boundary |
| **CG-AGI-1-P12** | LearningProject, CandidateImprovedLearningStrategy, GLA candidate contracts |
| **CG-AGI-1A-P0 / 1B-P0 / 1C-P0** | Source dry-run designs whose method slices may later feed candidates |
| **CG-AGI-1D** | Faculty ↔ University Runtime boundary; GLA candidate preparation rules |
| **CG-FLL-001 / FLL-1** | Canonical human-learning foundation |
| **ADR-003 / ADR-004 / ADR-E003** | Evidence, Claim, Observation≠Knowledge |
| **FEDERATION.md** | Completed-game `ObservationRecord` only |

Rules:

- This document **depends on** CG-AGI-1, CG-AGI-1-P12, CG-AGI-1A-P0, CG-AGI-1B-P0,
  CG-AGI-1C-P0, CG-AGI-1D, and FLL-1.
- It **must not** override FLL, CFA, LearningTrace, ADR-E003, ADR-007, or
  federation rules.
- No Nomokrator write is authorized by this PR.

---

## 3. Transfer identity

| Field | Value |
|-------|-------|
| **ID** | `CG-AGI-1E` |
| **Name** | Nomokrator Transfer Preparation / Cross-Domain Method Export Boundary |
| **status** | transfer-boundary design only |
| **runtime** | not implemented |
| **owning repo for this document** | `ronnywilhelmsen/chessguide` |
| **target consumer** | Nomokrator — later, only if explicitly integrated |
| **University validator** | Personal-AGI University Runtime — later, only under CG-AGI-1D |
| **domain** | chess **source**, method-only **candidate** transfer |

---

## 4. Core thesis

```text
ChessGuide may eventually export method evidence, not chess knowledge.
Nomokrator may eventually consume project-method patterns, not chess-domain competence.
Personal-AGI University may validate cross-domain generalization, not assume it.
Abstraction is not generalization.
```

A well-run project can test a false domain hypothesis. A correct chess result
does not prove a good project method (CG-AGI-1 Appendix C §1).

---

## 5. Non-goals

This PR and this transfer-boundary design explicitly exclude:

- runtime
- schemas
- Nomokrator repo changes
- Personal-AGI repo changes
- BioChronos changes
- thewilhelmsen.com changes
- Android changes
- web-dashboard changes
- Chrome / MCP activation
- Buddy / LARIS activation
- engine dependency
- model files
- package / lockfile changes
- federation export widening
- actual `GeneralizableLearningArtifact` export
- cross-domain validation execution
- AGI evidence claim from design alone

---

## 6. Nomokrator role boundary

| Nomokrator owns | Nomokrator does **not** own |
|-----------------|-----------------------------|
| Project lifecycle | Chess competence |
| Project-method execution | ChessGuide learner state |
| Planning / replanning | ChessGuide Claims |
| Milestones, risk, resource constraints | ChessGuide EvaluationDescriptors |
| Closure, postmortem structure | Chess-domain truth |

Rules:

- Nomokrator success is **not** chess competence.
- A well-run project can test a false domain hypothesis.
- A correct chess result does **not** prove a good project method.
- Nomokrator may judge project-contract compliance; it alone cannot judge chess
  competence (CG-AGI-1 §21; Appendix C §4).

---

## 7. What ChessGuide may prepare for transfer

Method-only **candidate** categories:

| Category | Intent |
|----------|--------|
| Curriculum ordering pattern | What to study when |
| Gap-diagnosis pattern | How gaps are derived from baseline |
| Evaluation sequencing pattern | K0 → MID → K1 family design |
| Contamination-control pattern | Labels, clean held-out rules |
| Replayability pattern | Abandoned paths, plan versions, logs |
| Learner A/B protocol pattern | Method without answers (CG-AGI-1C-P0) |
| Uncertainty-preservation pattern | Epistemic states surviving close |
| Evidence / claim separation pattern | ADR-003 / ADR-004 discipline |
| Postmortem-slicing pattern | Domain vs project vs method slices |
| Failure-mode catalogue pattern | Recurring invalidation classes |
| Method scoring pattern | Multi-metric learning-to-learn scores |
| Authority-boundary pattern | Capability ≠ authority |

```text
These are candidates only until validated outside ChessGuide.
```

---

## 8. What must not transfer

- chess positions / FENs / PGNs used as sealed or held-out items
- answer keys
- engine lines
- tactical solutions
- opening / endgame doctrine as domain content
- human learner private evidence
- Ronny-specific learner state
- machine learner state
- CompetenceVector snapshots as cross-domain facts
- EvidenceRecords as raw export unless separately governed
- ChessGuide Claims as Nomokrator Claims
- Buddy / LARIS outputs
- Chrome / MCP / Android / voice data
- dashboard display state
- federation-forbidden semantic fields
- GLA candidate as validated generalization

---

## 9. Domain stripping rules

Required stripping before any MethodTransferCandidate / GLA candidate is proposed:

| Rule | Action |
|------|--------|
| Chess terms | Remove unless needed as **source-domain metadata** |
| Answer-bearing content | Remove |
| Sealed / held-out materials | Remove |
| Learner-private material | Remove |
| Domain-specific scoring as universal metric | Remove / demote |
| Chess examples | Replace with abstract method pattern |
| Source project references | Preserve only as controlled citations / IDs |
| Known failures and limits | Preserve |
| Uncertainty | Preserve |
| Residual domain dependencies | **List explicitly** |

---

## 10. Candidate export object: MethodTransferCandidate

Conceptual fields only — **no schema in this PR**:

| Field | Meaning |
|-------|---------|
| `candidate_id` | Stable id |
| `source_domain` | `chessguide` |
| `source_projects` | e.g. CG-AGI-1A-P0 / 1B-P0 / 1C-P0 refs |
| `source_evidence_refs` | Controlled IDs — not raw absorption |
| `source_postmortem_refs` | Method-slice refs |
| `method_pattern` | Domain-stripped pattern |
| `stripped_domain_content` | What was removed |
| `residual_domain_dependencies` | What still depends on chess |
| `applicability_conditions` | When to try |
| `known_failures` | Negative cases |
| `contamination_risks` | Leakage classes |
| `target_project_contexts` | Nomokrator project types |
| `target_domain_authority_required` | Who must judge target outcome |
| `validation_plan` | Clean control + metrics |
| `uncertainty_state` | Must survive |
| `status` | e.g. `PROPOSED` \| `UNDER_REVIEW` \| `ACCEPTED_FOR_VALIDATION` \| `REJECTED` \| `CONTAMINATED` \| `UNKNOWN` |

---

## 11. Candidate export object: GeneralizableLearningArtifactCandidate

Restated and refined from CG-AGI-1D §14 / CG-AGI-1-P12 §11:

| Field | Meaning |
|-------|---------|
| `source_domain` | e.g. `chessguide` |
| `source_project` | Source LearningProject / Faculty method id |
| `source_evidence` | Method evidence refs |
| `learned_pattern` | Domain-stripped method pattern |
| `applicability_conditions` | When to try |
| `known_failures` | Negative cases |
| `confidence` | Epistemic — not marketing |
| `domain_specific_dependencies` | Residual chess deps |
| `removed_domain_content` | What was stripped |
| `proposed_target_domains` | e.g. Nomokrator |
| `validation_status` | Pending University + target-domain validation |

```text
A GLA candidate is not a GLA export and not a validated generalization.
```

`MethodTransferCandidate` is the ChessGuide→Nomokrator **preparation** object.
`GeneralizableLearningArtifactCandidate` is the University-facing **abstraction**
object. Neither is automatic promotion to generality.

---

## 12. Nomokrator ProjectContract mapping

Conceptual mapping of method-only transfer to Nomokrator concepts:

| Method pattern | Nomokrator concept (conceptual) |
|----------------|----------------------------------|
| Goal definition | Project goal |
| Baseline definition | Initial state / baseline |
| Hypothesis framing | Project hypotheses |
| Plan versioning | Plan versions |
| Replanning events | Replanning ledger |
| Decision gates | Human / authority gates |
| Risk register | Risk / stopping / escalation |
| Contamination / leakage control | Information-hazard / evidence hygiene |
| Evidence ledger | Project evidence custody |
| Postmortem | Project postmortem |
| Closure verdicts | Operational vs epistemic close |
| Uncertainty state | Surviving epistemic outcomes |
| Counterfactual method comparison | Method A vs B under comparable conditions |

```text
Mapping is conceptual only.
```

No Nomokrator schema or repo change in this PR.

---

## 13. Export authority workflow

Staged workflow (design only):

1. ChessGuide source project completes (or design-complete dry run later executed).
2. ChessGuide postmortem separates **domain / project / method** slices.
3. ChessGuide proposes `MethodTransferCandidate`.
4. ChessGuide strips domain content (§9).
5. ChessGuide marks contamination and residual dependencies.
6. Personal-AGI University reviews abstraction boundary (CG-AGI-1D).
7. Nomokrator may later accept candidate under **separate** governance.
8. Target-domain validation decides whether it works.
9. **No automatic promotion** from candidate to generalization.

---

## 14. Validation requirements outside ChessGuide

| Requirement | Statement |
|-------------|-----------|
| Target-domain ProjectContract | Required |
| Target-domain authority | Required for outcome meaning |
| Clean control | Same model/tools/runtime where practical; no ChessGuide answers |
| Comparable project-method metric | Required; no single metric sufficient |
| No source answers | Absolute |
| No target-domain hidden leakage | Absolute |
| Uncertainty state preserved | Absolute |
| Success / failure recorded | Including `NOT_SUPPORTED` / `INSUFFICIENT_EVIDENCE` |

Target tasks must be **new Nomokrator tasks** (CG-AGI-1 Appendix C §8). Measured
difference must be previous **method** experience, not hidden chess knowledge.

---

## 15. Evidence and citation boundary

| Rule | Statement |
|------|-----------|
| Stable ID references | ChessGuide evidence may be referenced by stable ID |
| Raw EvidenceRecords | Not automatically exported |
| Private / sealed material | Citations must not expose |
| Custody | Citation does **not** transfer custody |
| Provenance vs truth | Source evidence supports provenance, not universal truth |

---

## 16. Contamination and held-out custody

| Label | Use |
|-------|-----|
| `PUBLIC_DEVELOPMENT` | This boundary document; public method classes |
| `TRAINING_VISIBLE` | Source training materials (not for transfer of content) |
| `HELD_OUT` | Source / target held-out sets |
| `SEALED` | Access-controlled materials |
| `CONTAMINATED` | Leakage invalidates clean transfer / validation |

Apply to: source tasks, source solutions, method artifacts, stripped examples,
target-domain task sets, cross-domain validation material.

```text
A method may transfer,
but source answers, sealed items, near-duplicates,
and target-domain hidden solutions may not.
```

---

## 17. Domain / project / method / generalization separation

| Kind | Authority |
|------|-----------|
| Chess domain outcome | ChessGuide domain evaluator |
| ChessGuide learner competence | ChessGuide (human/machine chains) |
| ChessGuide Faculty method claim | ChessGuide Faculty (CG-AGI-1C) |
| Nomokrator project-method execution claim | Nomokrator |
| Personal-AGI University generalization claim | Personal-AGI University + target-domain validation |
| Target-domain outcome | Target-domain authority |

```text
Each has different authority.
```

---

## 18. Federation boundary

- no federation widening
- completed-game `ObservationRecord` only ([FEDERATION.md](../../FEDERATION.md))
- no export of semantic / learner / Faculty / model / Chrome / MCP / Android /
  voice data via federation
- no export of `MethodTransferCandidate`, `CandidateImprovedLearningStrategy`, or
  GLA candidate via federation
- this document **does not alter** `FEDERATION.md`

```text
Federation transports continuity.
ChessGuide retains learning.
Federation is not the Nomokrator path.
```

---

## 19. Dashboard / thewilhelmsen.com boundary

- display-host only
- static display is not governed knowledge
- dashboard does not own transfer state
- dashboard does not execute export
- dashboard cannot validate cross-domain generalization

---

## 20. Chrome / MCP / Android / Buddy / LARIS boundary

- Chrome / MCP: discovery-only and inactive
- Android board / clock lanes: observation surfaces only
- Buddy / LARIS: inactive unless separately activated
- no live advice
- unknown mode fails closed
- no surface data export through this transfer boundary

---

## 21. Failure modes

| Failure | Why it breaks the boundary |
|---------|----------------------------|
| Exporting chess answers as method | Method ≠ answers |
| Hiding chess doctrine inside abstraction | Incomplete stripping |
| Leaking sealed tasks | Contamination |
| Ronny-specific intervention as general pedagogy | Overfit / false generality |
| Machine-specific method as human method without validation | False equivalence |
| Project success as domain truth | Appendix C §1 |
| Domain success as project-method proof | Appendix C §1 |
| Abstraction as generalization | Appendix C §7 |
| Nomokrator consuming chess competence as project method | Role boundary failure |
| Personal-AGI treating ChessGuide claim as University generalization | CG-AGI-1D |
| Dashboard display treated as evidence | ADR-E003 |
| Federation boundary widened by transfer | FEDERATION.md |
| GLA candidate published as validated GLA | Candidate ≠ validated |

---

## 22. Verdicts

| Verdict | This PR | Future export / validation |
|---------|---------|----------------------------|
| **Engineering** | N/A | Export tooling may be engineered later without science |
| **Chess domain outcome** | Not measured | Remains ChessGuide |
| **Chess learner competence** | Not transferred | Remains learner chains |
| **Faculty method claim** | Not proven by this boundary | CG-AGI-1C validation |
| **Nomokrator project-method claim** | Not claimed | Separate Nomokrator governance |
| **University generalization claim** | Forbidden here | After GLA + target validation |
| **Scientific support** | **Cannot** support AGI hypothesis | Boundary only |

```text
This PR cannot support the AGI hypothesis.
It only defines safer transfer boundaries.
```

---

## 23. Acceptance criteria for future export / transfer PR

Any future PR that prepares or performs method transfer must pass **all** of:

- source LearningProject identified
- source postmortem available
- domain / project / method slices separated
- `MethodTransferCandidate` formed
- domain content stripped
- residual dependencies listed
- contamination labels applied
- source evidence referenced but not absorbed
- export authority explicitly approved
- target-domain validation plan present
- no federation widening
- no dashboard-host authority transfer
- no Personal-AGI / Nomokrator / BioChronos writes unless separately ordered
- no runtime inside ChessGuide unless explicitly approved
- GLA candidate not labeled as validated generalization
- Chrome / MCP / Buddy / LARIS remain inactive unless separately ordered

---

## 24. Open questions

- Which Nomokrator repository / path owns ProjectContract?
- Which method patterns should be first candidates?
- Can a ChessGuide method candidate be tested in Nomokrator without Personal-AGI
  University first?
- Which source evidence references are safe to expose?
- How are private human evidence and sealed tasks redacted?
- What requires ADR before export?
- What minimum export object is useful without schema?
- Should execution harness wait until this transfer boundary is merged?
- Which target domain should validate first: Nomokrator-only, BioChronos, or
  another controlled project domain?

---

## 25. Decision recommendation

**Recommended next PR:** **CG-AGI-1 Execution Readiness Review / Gate Decision**.

Rationale:

1. This document completes Phase 7 (Nomokrator transfer / method export
   **boundary**).
2. With CG-AGI-1A-P0, 1B-P0, 1C-P0, 1D, and 1E designed, the next step is a
   **review / gate decision** before any execution harness.
3. Execution should not start by implication from merged designs.

Do **not** implement runtime, export, or Nomokrator integration in the next PR
unless separately ordered.

Chrome/MCP remain discovery-only. Dashboard / `thewilhelmsen.com` remain
display-host only. Personal-AGI / Nomokrator / BioChronos remain untouched.
FLL-1 remains the human-learning foundation.

---

## Appendix A — Continuity (ACG-001)

```text
CG-AGI-1 roadmap + Appendix C
  → CG-AGI-1-P12 concept map + contracts
  → CG-AGI-1A-P0 / 1B-P0 / 1C-P0 dry-run designs
  → CG-AGI-1D University Runtime integration contract detail
  → This document (Phase 7 CG-AGI-1E method export / Nomokrator transfer boundary)
  → CG-AGI-1 Execution Readiness Review / Gate Decision (recommended next)
  → Execution / harness / export only after explicit gate approval
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
- no actual GLA export
- no AGI claim from design alone
- no rewrite of FLL-1
