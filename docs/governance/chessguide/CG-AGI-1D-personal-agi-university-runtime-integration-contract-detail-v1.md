# CG-AGI-1D Personal-AGI University Runtime Integration Contract Detail v1

| Field | Value |
|-------|-------|
| **Document ID** | CG-AGI-1D |
| **Title** | Personal-AGI University Runtime Integration Contract Detail v1 |
| **Version** | 1.0 |
| **Status** | Draft (governance / integration contract detail only) |
| **Date** | 2026-08-15 |
| **Classification** | Phase 6 Faculty ↔ University Runtime boundary contract |
| **Scope** | Design-only integration contract between ChessGuide Faculty and external Personal-AGI University Runtime — **no runtime**, no schemas, no harness |
| **Parent** | [CG-AGI-1](CG-AGI-1-faculty-handoff-dual-learner-pilot-roadmap-v1.md) |
| **Depends on** | [CG-AGI-1-P12](CG-AGI-1-phase-1-2-concept-map-and-pilot-contracts-v1.md), [CG-AGI-1A-P0](CG-AGI-1A-P0-machine-chess-mastery-dry-run-design-v1.md), [CG-AGI-1B-P0](CG-AGI-1B-P0-human-chess-mastery-dry-run-design-v1.md), [CG-AGI-1C-P0](CG-AGI-1C-P0-faculty-learning-to-learn-dry-run-design-v1.md), [CG-000](CG-000-chessguide-identity.md), [CG-001](CG-001-product-vision.md), [CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CG-FLL-002](CG-FLL-002-learning-semantics.md), [CG-FLL-003](CG-FLL-003-learning-continuity-semantics.md), [CG-FLL-1E](CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [ADR-001](../adr/ADR-001-learningtrace-episode-schema-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-E003](../adr/ADR-E003-universal-knowledge-framework-v1.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Does not override** | FLL-1, CFA, LearningTrace, ADR-E003, ADR-007, federation rules, CG-AGI-1 Appendix C |

> **Governance note.** This document details the CG-AGI-1D boundary before any
> execution harness, worker orchestration, Learner A/B validation, or
> `GeneralizableLearningArtifact` export. It does not implement Personal-AGI
> runtime inside ChessGuide. `thewilhelmsen.com` remains display-host only.
> Chrome/MCP remain discovery-only and inactive.

---

## 1. Purpose

This is the **Phase 6 integration contract detail** between **ChessGuide Faculty**
and the external **Personal-AGI University Runtime**.

It exists so that future execution of CG-AGI-1A-P0 / 1B-P0 / 1C-P0 can call
external workers **without**:

- ChessGuide hosting a generic AGI runtime
- Personal-AGI minting chess competence or Claims
- sealed tasks, answer keys, or learner state leaking across boundaries
- abstraction being mistaken for generalization
- federation or dashboard-host ownership transfer

This document authorizes **contract detail**, not implementation.

---

## 2. Source authority

| Source | Authority |
|--------|-----------|
| **CG-AGI-1** (incl. Appendix C) | Faculty handoff + cross-domain boundary |
| **CG-AGI-1-P12** | LearningProject, EvaluationDescriptor, CompetenceVector, GLA candidate contracts |
| **CG-AGI-1A-P0 / 1B-P0 / 1C-P0** | Dry-run designs that may later request University Runtime services |
| **CG-FLL-001 / FLL-1** | Canonical human-learning foundation |
| **ADR-001 / ADR-003 / ADR-004** | Episode custody, EvidenceRecord, Claim stewardship |
| **ADR-007** | Engine is reference — not pedagogy or University truth |
| **ADR-E003** | Observation is not knowledge |
| **FEDERATION.md** | Completed-game `ObservationRecord` only |

Rules:

- This document **depends on** CG-AGI-1, CG-AGI-1-P12, CG-AGI-1A-P0, CG-AGI-1B-P0,
  CG-AGI-1C-P0, and FLL-1.
- It **must not** override FLL, CFA, LearningTrace, ADR-E003, ADR-007, or
  federation rules.
- Repository truth for chess remains in **chessguide**.

---

## 3. Integration identity

| Field | Value |
|-------|-------|
| **ID** | `CG-AGI-1D` |
| **Name** | Personal-AGI University Runtime Integration Contract Detail |
| **status** | contract detail only |
| **runtime** | not implemented |
| **owning repo for this contract** | `ronnywilhelmsen/chessguide` |
| **external runtime owner** | Personal-AGI (external repository / path TBD — §22) |
| **domain** | chess |

---

## 4. Core boundary

| Party | Owns |
|-------|------|
| **ChessGuide** | Chess Faculty; chess-domain truth; evidence; EvaluationDescriptors; CompetenceVectors; LearningProjects; Faculty method custody; chess Claims; federation eligibility |
| **Personal-AGI** | University Runtime; generic agent roles; orchestration; ModelRouter; institutional learning machinery; local model worker orchestration; cross-domain validation **machinery** |
| **Nomokrator** | Project lifecycle / project-method execution **only if** explicitly integrated later (CG-AGI-1E); never chess competence |
| **thewilhelmsen.com** | Display-host only |

```text
Do not build a generic AGI runtime inside ChessGuide.
Requests do not grant domain authority.
Capability ≠ authority.
```

Personal-AGI may orchestrate workers and propose abstractions. It may **not**
mint chess competence, override ChessGuide domain evaluator verdicts, or collapse
domain truth / project truth / intelligence into one layer (CG-AGI-1 Appendix C §1).

---

## 5. What ChessGuide may request from Personal-AGI

Request categories (conceptual only):

| Request | Intent |
|---------|--------|
| Worker orchestration proposal | Plan which roles run where |
| Frozen model worker execution plan | Scientific arm freeze |
| Machine learner run plan | Support CG-AGI-1A-P0-class runs |
| Critic / replicator role plan | Challenge and reproduce without becoming oracle |
| Memory / isolation plan | Prevent sealed-task / answer leakage into worker memory |
| Evaluation sitting support | Assist sitting under ChessGuide EvaluationDescriptors |
| Method abstraction proposal | Strip domain content toward GLA **candidate** |
| GeneralizableLearningArtifact candidate preparation | Package candidate fields — not export |
| Cross-domain validation proposal | Plan University validation later |

```text
Requests do not grant domain authority.
```

ChessGuide remains sovereign over whether any returned material becomes
observation, evidence, claim, or knowledge (ADR-E003).

---

## 6. What Personal-AGI may return to ChessGuide

Return categories (conceptual only):

| Return | Intent |
|--------|--------|
| Run logs | Replayable action history |
| Model / version / tool manifests | Causal provenance |
| Learner outputs | Machine-learner attempts / explanations |
| Proposed plans | Curriculum / study proposals |
| Critic notes | Challenges to plans/explanations |
| Replicator notes | Transfer / reproduction attempts |
| Uncertainty reports | Explicit unresolved / insufficient evidence |
| Method-abstraction proposals | Domain-stripped pattern drafts |
| Contamination warnings | Sealed/held-out / near-duplicate risks |
| Failed-run reports | Failures and abandoned paths |

```text
Returned outputs are observations / evidence candidates,
not governed chess knowledge.
```

ChessGuide adjudicates promotion under ADR-003 / ADR-004 / ADR-E003.

---

## 7. Authority boundaries

| Act | Who may |
|-----|---------|
| Create observations | Personal-AGI workers may emit; ChessGuide surfaces may emit; both are Observation-layer until linked |
| Create EvidenceRecords | **ChessGuide** (ADR-003) — Personal-AGI may propose refs only |
| Propose Claims | ChessGuide Faculty / steward; Personal-AGI may draft proposals as Observation |
| Approve Claims | **ChessGuide** stewardship (ADR-004; FLL I-1/I-2 for Transformation) |
| Certify CompetenceVector movement | **ChessGuide** domain evaluator |
| Declare EvaluationDescriptor result | **ChessGuide** domain evaluator / Faculty steward |
| Mark contamination | ChessGuide required; Personal-AGI may **warn** |
| Approve GLA candidate export | **ChessGuide** proposal + explicit governance; not automatic |
| Approve cross-domain generalization | **Personal-AGI University** validation machinery + **target-domain** authority; ChessGuide cannot self-certify generality |

```text
capability ≠ authority
```

Especially for BioChronos, FinKairos, legal domains, embodiment, and publishing
(CG-AGI-1 Appendix C §5) — this contract does not grant those authorities.

---

## 8. Agent role mapping

| Role | Allowed | Forbidden | ChessGuide-owned boundary | Personal-AGI-owned boundary |
|------|---------|-----------|---------------------------|-----------------------------|
| **Student** | Machine-learner attempts under LearningProject | Minting competence; engine-as-self | Domain eval of Student outputs | Orchestrating Student worker |
| **Critic** | Challenge plans/explanations | Overriding domain verdicts; silent answer keys | Stewardship of Critic as evidence candidate | Running Critic worker |
| **Replicator** | Transfer / reproduction attempts | Contaminating held-out with A’s answers | Interpreting replication as method evidence | Running Replicator worker |
| **Mentor** | Pedagogical suggestions in training/review only | Live competition advice; engine oracle (ADR-006/007) | Mode gates; no-advice invariant | Mentoring worker capability |
| **Evaluator helper** | Post-freeze scoring assist under ChessGuide descriptor | Declaring INTERNALIZED_COMPETENCE alone; answering during sit | EvaluationDescriptor authority | Helper tooling / compute |
| **Memory steward** | Isolation / retention policy enforcement | Absorbing sealed tasks into shared memory | What must not be retained | Implementing isolation plan |
| **ModelRouter** | Route to frozen/disclosed models | Silent upgrade mid-arm | Accepting only disclosed arms | Routing / provider selection |
| **University abstracter** | Propose domain-stripped method patterns | Declaring validated generalization | Chess content stripping rules | Cross-domain abstraction proposals |

---

## 9. ModelRouter / frozen model rules

| Rule | Statement |
|------|-----------|
| Provenance | Model id / version / hash / provider **required** where possible |
| Frozen arm | **Required** for scientific claims (CG-AGI-1A-P0; Appendix C §11) |
| No silent upgrade | Absolute |
| Upgrade = new arm | Not continuation of the same learning journey |
| Record | Provider, tools, runtime version, prompt/policy version, institutional memory version |
| Masquerade ban | Model improvement must **not** masquerade as Faculty learning |
| Local worker | Does **not** become ChessGuide runtime unless separately approved |

---

## 10. Data and object exchange boundary

Conceptual exchange objects only — **no schemas in this PR**:

| Object | Direction (typical) | Notes |
|--------|---------------------|-------|
| `LearningProjectDescriptor` | ChessGuide → Personal-AGI | Design fields from CG-AGI-1-P12 |
| `EvaluationDescriptor` | ChessGuide → Personal-AGI | Sitting rules |
| `CompetenceVectorSnapshot` | Both (K0/K1 proposals) | ChessGuide certifies |
| `EvidenceReference` | ChessGuide↔Personal-AGI | Refs, not raw absorption |
| `ObservationBundle` | Personal-AGI → ChessGuide | Observation layer |
| `ModelRunManifest` | Personal-AGI → ChessGuide | Freeze / tools / versions |
| `CandidateImprovedLearningStrategy` | ChessGuide Faculty (1C) | Claim until B validation |
| `GeneralizableLearningArtifactCandidate` | ChessGuide proposes; University validates | Not export |
| `ContaminationReport` | Either → ChessGuide adjudicates | Labels travel |
| `UncertaintyReport` | Either | Must survive |
| `PostmortemSlice` | ChessGuide (method vs domain split) | Method slice for 1C |

---

## 11. What must not cross the boundary

- sealed held-out tasks unless explicitly authorized for sitting
- answer keys
- live competition state for advice
- private user data beyond approved LearningProject scope
- federation-forbidden semantic fields
- Buddy / LARIS outputs
- dashboard display state as knowledge
- human learner state merged into machine state
- machine learner state merged into human state
- ChessGuide domain Claims as University Claims
- unvalidated chess abstractions as cross-domain generalizations

---

## 12. LearningProject execution handshake

Pre-execution handshake (conceptual fields):

| Field | Required |
|-------|----------|
| `project id` | yes |
| `learner_kind` | `HUMAN` \| `MACHINE` \| (`FACULTY_METHOD` for 1C meta-runs) |
| `learner_id` / lineage | yes |
| `model` / frozen arm | yes for scientific machine arms |
| `allowed_tools` | yes |
| `forbidden_tools` | yes |
| `EvaluationDescriptors` | yes |
| `contamination labels` | yes |
| `authority_scope` | yes |
| `human_decision_gates` | yes |
| `logging requirements` | yes |
| `uncertainty policy` | yes |
| `result return format` | yes (maps to §13) |

No handshake ⇒ no authorized Personal-AGI run for ChessGuide Faculty science.

---

## 13. Evidence return handshake

Post-run return (conceptual):

| Field | Required |
|-------|----------|
| Run manifest | yes |
| Action log | yes |
| Outputs | yes |
| Tool disclosures | yes |
| Eval sitting record | yes if eval sat |
| Errors / failures | yes |
| Abandoned paths | yes |
| Contamination findings | yes |
| Uncertainty state | yes |
| Proposed EvidenceRecord refs | optional proposals only |
| Proposed Claims | optional proposals only |

```text
ChessGuide adjudicates domain / evidence / claim status.
```

Personal-AGI cannot finalize EvidenceRecords or approve Claims.

---

## 14. GeneralizableLearningArtifact boundary

GLA remains **candidate only** (CG-AGI-1-P12 §11; Appendix C §7):

| Field | Meaning |
|-------|---------|
| `source_domain` | e.g. `chessguide` |
| `source_project` | LearningProject / Faculty method id |
| `source_evidence` | Method evidence refs |
| `learned_pattern` | Domain-stripped method pattern |
| `applicability_conditions` | When to try |
| `known_failures` | Negative cases |
| `confidence` | Epistemic — not marketing |
| `domain_specific_dependencies` | Must list residual chess deps |
| `removed_domain_content` | What was stripped |
| `proposed_target_domains` | e.g. Nomokrator |
| `validation_status` | Pending University + target-domain validation |

Rules:

- ChessGuide may **propose** a GLA candidate.
- Personal-AGI University may **validate** cross-domain generalization.
- Nomokrator may later consume **method** evidence only after explicit export
  approval (CG-AGI-1E).
- **No GLA export implementation in this PR.**

```text
abstraction ≠ generalization
```

---

## 15. Cross-domain validation boundary

| Rule | Statement |
|------|-----------|
| Abstraction ≠ generalization | Appendix C §7 |
| Chess success ≠ general intelligence | CG-AGI-1 §3 |
| Faculty method claim ≠ University generalization | CG-AGI-1C-P0 §17 |
| Target-domain validation required | Absolute |
| Clean control required | Same model/tools/runtime where practical; no chess answers |
| Contamination labels must travel | Appendix C §9 |
| External evaluator / domain authority required | Target domain owns outcome meaning |

---

## 16. Federation boundary

Restated for this contract:

- no federation widening
- completed-game `ObservationRecord` only ([FEDERATION.md](../../FEDERATION.md))
- no export of semantic / learner / Faculty / model / Chrome / MCP / Android /
  voice data via federation
- no export of Claims, EvidenceRecords, CompetenceVectors,
  CandidateImprovedLearningStrategy, or GLA candidates unless **separate**
  governance explicitly approves
- this integration contract **does not alter** `FEDERATION.md`

```text
Federation transports continuity.
ChessGuide retains learning.
```

---

## 17. Dashboard / thewilhelmsen.com boundary

- display-host only
- static display is not governed knowledge
- dashboard deployment does not transfer ownership
- no dashboard-host persistence of Faculty state as sovereign custody
- no dashboard-host execution of University Runtime
- no API / runtime bridge in this PR

---

## 18. Chrome / MCP / Android / Buddy / LARIS boundary

- Chrome / MCP: discovery-only and inactive (CE-MCP-DR-v1)
- Android board / clock lanes: observation surfaces only
- Buddy / LARIS: inactive unless separately activated
- no live advice
- no hidden engine-like behavior
- unknown mode fails closed to no-advice

This contract does **not** activate any of the above.

---

## 19. Failure modes

| Failure | Why it breaks the contract |
|---------|----------------------------|
| Personal-AGI output treated as chess truth | Domain authority collapse |
| Generic runtime silently owning ChessGuide evidence | Custody violation |
| Model upgrade hidden as learning | Causal control failure |
| Sealed tasks leaked to worker memory | Contamination |
| Answer keys transferred as method | CG-AGI-1C experiment failure |
| GLA candidate exported as generalization | Appendix C §7 |
| Dashboard display treated as knowledge | ADR-E003 |
| Federation boundary widened by integration | FEDERATION.md |
| Buddy / LARIS activated by implication | Activation discipline |
| Nomokrator project success mistaken for chess competence | Appendix C §4 |
| University abstraction mistaken for validated generality | §15 |

---

## 20. Verdicts

| Verdict | This contract PR | Future integration / execution |
|---------|------------------|--------------------------------|
| **Engineering** | N/A (no runtime) | Harness may be `ENGINEERING_VALIDATED` without science |
| **Domain outcome** | Not measured | ChessGuide domain evaluator |
| **Project outcome** | Contract completeness | Handshake followed? |
| **Learning outcome** | Not produced | Learner A/B chains remain separate |
| **Faculty method claim** | Not supported by contract alone | CG-AGI-1C validation |
| **University generalization claim** | Forbidden here | After GLA + target-domain validation |
| **Scientific support** | **Cannot** support AGI hypothesis | Contract only makes execution safer |

```text
This contract detail cannot itself support the AGI hypothesis.
It only makes future execution safer and auditable.
```

---

## 21. Acceptance criteria for future execution / integration PR

Any future PR that integrates Personal-AGI workers or executes Faculty science
with University Runtime must pass **all** of:

- explicit LearningProject id
- explicit `learner_kind`
- explicit model / frozen arm (where scientific)
- explicit EvaluationDescriptors
- explicit `authority_scope`
- explicit contamination policy
- no hidden tools
- no silent model upgrade
- evidence return handshake completed
- ChessGuide adjudicates domain Claims
- Personal-AGI outputs treated as observations / evidence candidates
- no federation widening
- no dashboard-host authority transfer
- no Personal-AGI / Nomokrator / BioChronos writes unless separately ordered
- no runtime inside ChessGuide unless explicitly approved
- Chrome / MCP / Buddy / LARIS remain inactive unless separately ordered
- sealed held-out custody respected in worker memory plan

---

## 22. Open questions

- Which Personal-AGI repository / path owns University Runtime?
- Which local model worker should be used first?
- How should machine learner identity persist vs ADR-001 human-Actor default?
- Which artifacts are safe to exchange without schemas?
- Should CG-AGI-1E / Nomokrator transfer prep happen before execution?
- What minimum contract is needed before a real 1A-P0 execution?
- How should sealed task custody work with external workers?
- How should user / private human evidence be isolated from machine runs?
- What requires ADR vs design doc for exchange objects?
- How does ModelRouter disclose provider policy changes mid-pilot?

---

## 23. Decision recommendation

**Recommended next PR:** **CG-AGI-1E Nomokrator Transfer Preparation / Cross-Domain
Method Export Boundary**.

Rationale:

1. This document completes Phase 6 (University Runtime integration **contract
   detail**).
2. CG-AGI-1E closes the remaining export/transfer boundary for method-only
   Nomokrator consumption before any harness could accidentally widen export.
3. **Execution harness** for 1A-P0 / 1B-P0 / 1C-P0 should wait until **1A-P0,
   1B-P0, 1C-P0, 1D, and 1E** design/contract documents exist, unless explicitly
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
  → CG-AGI-1A-P0 / 1B-P0 / 1C-P0 dry-run designs
  → This document (Phase 6 CG-AGI-1D integration contract detail)
  → Phase CG-AGI-1E Nomokrator transfer / method export boundary (recommended next)
  → Execution / harness only after explicit governance approval + §21 gates
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
- no GLA export implementation
- no AGI claim from contract alone
- no rewrite of FLL-1
