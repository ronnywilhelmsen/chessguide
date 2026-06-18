# Learner Graph v1.0

| Field | Value |
|-------|-------|
| **Document ID** | LG-001 |
| **Title** | Learner Graph v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Architecture Review |
| **Date** | 2026-06-18 |
| **Scope** | Learner-specific derived state architecture review only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), SCCR-001, SCC-HLD-001, [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- LG-001 is a **Draft Architecture Review**.
- It does **not** create runtime behavior.
- It does **not** create schema.
- It does **not** create a JSON/YAML registry.
- It does **not** create HLD, LLD, or UML.
- It does **not** create learner data.
- It does **not** activate Buddy or LARIS.
- It defines the **learner-specific derived graph target** only.

---

## 2. Executive summary

- The **Knowledge Graph** defines domain concepts.
- The **Learner Graph** defines the **learner-specific relationship** to those concepts.
- Learner Graph is **derived from evidence lineage**, not free inference.
- Learner Graph does **not** certify mastery.
- Learner Graph **supports** Learning Frontier and Buddy, but does **not authorize** either.
- Learner Graph must be **append-only / immutable / replayable** for Creator continuity.

---

## 3. Strategic question

**What learner-specific graph must exist before ChessGuide can safely produce a Learning Frontier and later Buddy guidance?**

A learner-specific **derived graph** that connects evidence, DecisionTrace, observed activity, KG references, misconceptions, claims, and development signals — **without** treating activity as learning, KG refs as evidence, or derived state as mastery.

---

## 4. What the Learner Graph is

- A **learner-specific derived state graph**.
- An **evidence-lineage-based read model**.
- A **relationship map** between learner and KG concepts.
- A structure for **observed patterns, decision habits, misconceptions, and development signals**.
- An **upstream input** to Learning Frontier.
- A **controlled input** to Buddy.
- A **replayable Creator continuity** layer.

---

## 5. What the Learner Graph is not

- Not the **Knowledge Graph**.
- Not **evidence** itself.
- Not a **claim**.
- Not **mastery**.
- Not a **raw activity log**.
- Not **runtime implementation**.
- Not a **schema**.
- Not **federation export**.
- Not **engine truth**.
- Not **Buddy authority**.
- Not **LARIS activation**.

---

## 6. Governance foundation

| Governance source | Relevance to Learner Graph | Boundary consequence |
|-------------------|----------------------------|----------------------|
| **ADR-001** | LearningTrace evidence/custody | LG derives from traces, never replaces |
| **ADR-002** | corpus_ref / sovereign references | LG references KG by ID, not evidence |
| **ADR-003** | evidence records | LG nodes/edges cite evidence lineage |
| **ADR-004** | stewardship and claims | LG yields claim candidates, not claims |
| **ADR-005** | DecisionTrace | decision frames ≠ learner rationale |
| **ADR-006** | Buddy boundary | Buddy reads LG, never certifies |
| **ADR-007** | Stockfish / SCC boundary | engine ≠ learner state |
| **ADR-008** | KG / corpus source governance | LG honours KG source posture |
| **ACG-001** | architecture continuity | LG preserves full chain |
| **STRR-001** | roadmap controller | LG is PR #23 (with LF) |
| **CGSR-002** | strategic identity | LG = learner-specific, not doctrine |
| **KG-001** | domain graph | KG learner-independent; LG learner-specific |
| **FEDERATION.md** | federation withholding | LG never exported |

---

## 7. Architecture Continuity Gate

| Layer | Learner Graph interpretation | Boundary | Future consequence |
|-------|------------------------------|----------|--------------------|
| Philosophy / learning theory | derived signals, not learning | activity ≠ learning | grounds integration model |
| Governance / ADR | honours ADR-001–008 | doctrine beats runtime | derivation policy governed |
| Review / HLD | LG-001 is architecture review | review ≠ implementation | feeds LF + future LLD |
| Future LLD / OOP / UML | classes named (§25) | design ≠ runtime | LLD before runtime projection |
| Immutable state transitions | append-only events; derived snapshots | no silent overwrite | replayable learner history |
| Runtime implementation | none in LG-001 | runtime projects, never invents | guarded projection later |
| ChessBuddy / ChessGuide reality sharing | LG readable via policy | LG ≠ proof of mastery | Buddy scaffolds, never claims |
| Creator continuity | reconstructable from evidence + KG version | no flattening | 100-year learner replay |
| Federation boundary | LG never exported | lossy ObservationRecord only | widening needs separate path |

---

## 8. Relationship to Knowledge Graph

- Learner Graph references KG nodes by **stable concept IDs**.
- KG is **learner-independent**.
- Learner Graph is **learner-specific**.
- A learner touching a KG concept is **not evidence of learning** unless supported by evidence lineage.
- Learner Graph may store a **derived relation** to a KG concept, **not alter KG**.

---

## 9. Relationship to Evidence / LearningTrace

- **LearningTrace is evidence/custody, not learning.**
- Learner Graph **derives from** LearningTrace / EvidenceRecord.
- Learner Graph nodes/edges **must cite** evidence lineage.
- Derived learner state must be **recomputable or replayable**.
- **No silent overwrite.**

---

## 10. Relationship to DecisionTrace

- DecisionTrace can provide **per-ply reasoning evidence**.
- Decision frames are **aids, not learner rationale**.
- Learner Graph may track **decision habits** only when evidence supports it.
- It must distinguish **learner-authored rationale** from **system classification**.

---

## 11. Relationship to Claims / Mastery

- Learner Graph **cannot certify mastery**.
- Learner Graph **can support claim candidates**.
- Claims require **stewardship**.
- Mastery requires **governed evidence and integration**, not graph presence.
- **Derived confidence is not mastery.**

---

## 12. Relationship to System Chess Competence

- SCC may **classify** position or decision quality.
- SCC output may contribute to derived learner graph **only through an explicit evidence pathway**.
- SCC **cannot write** learner state directly.
- Engine results must remain a **measurement / reference lane**.

---

## 13. Relationship to Buddy

- Buddy may **read** Learner Graph through governed policy.
- Buddy may use it for **scaffolding and prompts**.
- Buddy must **not** claim mastery or impersonate learner reasoning.
- Buddy outputs are **explanations/prompts**, not learner state unless separately recorded.

---

## 14. Relationship to Learning Frontier

- Learning Frontier reads **Learner Graph + KG**.
- Learner Graph provides **current derived learner state**.
- Learning Frontier **proposes next focus**.
- Learning Frontier **cannot mutate evidence** or certify learning.

---

## 15. Relationship to Creator continuity

- Learner Graph must be **replayable across time**.
- Derived graph version must be **reconstructable from evidence lineage**.
- Creator must know **graph version, source evidence, KG version, and derivation policy**.

---

## 16. Federation boundary

- Learner Graph is **never exported** via federation.
- **No** learner-state edges, claims, mastery, misconceptions, confidence, KG refs, or decision traces in ObservationRecord.
- Federation remains **lossy / non-semantic**.

---

## 17. Learner Graph conceptual model

- `LearnerGraph`
- `LearnerGraphVersion`
- `LearnerNode`
- `LearnerConceptState`
- `LearnerEvidenceLink`
- `LearnerDecisionPattern`
- `LearnerMisconception`
- `LearnerStrengthSignal`
- `LearnerWeaknessSignal`
- `LearnerClaimCandidate`
- `LearnerGraphEdge`
- `DerivationPolicy`
- `ConfidenceBand`
- `GraphSnapshot`
- `GraphReplay`

---

## 18. Learner Graph node types

- `learner`
- `concept_state`
- `evidence_link`
- `decision_pattern`
- `misconception`
- `strength_signal`
- `weakness_signal`
- `claim_candidate`
- `practice_context`
- `transformation_signal`
- `frontier_input`

---

## 19. Learner Graph edge types

- `observed_in`
- `derived_from`
- `references_concept`
- `repeated_in`
- `contradicts_previous`
- `supports_claim_candidate`
- `weak_signal_for`
- `strong_signal_for`
- `requires_more_evidence`
- `candidate_for_frontier`
- `deprecated_by`
- `replayed_from`

---

## 20. State and immutability model

- **Append-only graph events.**
- **Derived snapshots.**
- **No silent overwrites.**
- A correction creates a **new derived version**.
- **Evidence remains source of truth.**
- The graph is **rebuildable** from evidence lineage + KG version + derivation policy.

---

## 21. Derived-state model

Authority ladder (lowest to highest authority):

1. raw evidence
2. derived signal
3. derived learner concept state
4. claim candidate
5. stewarded claim
6. mastery status

**Derived state is lower authority than evidence and claim.**

---

## 22. Misconception / error-pattern model

- A misconception is a **derived hypothesis, not a diagnosis**.
- It must **cite repeated evidence**.
- It must be **reversible / deprecated**.
- It must **not be federation export**.
- Buddy may use it **cautiously** as prompt context.

---

## 23. Uncertainty / confidence model

- Confidence bands: **low, medium, high**.
- **Confidence is not mastery.**
- Uncertainty should be **preserved in read models**.
- **Insufficient evidence must be explicit.**

---

## 24. Versioning and replay

- Graph snapshots have **versions**.
- Derivation policy has a **version**.
- **KG version must be recorded.**
- **Evidence lineage must be recorded.**
- Creator replay must **reconstruct historical state**.

---

## 25. Future LLD / OOP / UML path

Future classes:

- `LearnerGraph`
- `LearnerGraphVersion`
- `LearnerConceptState`
- `LearnerEvidenceLink`
- `LearnerDecisionPattern`
- `LearnerMisconception`
- `LearnerClaimCandidate`
- `DerivationPolicy`
- `ConfidenceBand`
- `LearnerGraphProjector`
- `LearnerGraphQueryService`
- `LearnerGraphReplayService`

Future LLD must define: constructors, methods, parameters, return types, domain events, state transitions, error cases, persistence model, and UML. **This PR does not create LLD or UML.**

---

## 26. Runtime implementation boundary

- **No runtime implementation** in LG-001.
- Future runtime **may project** Learner Graph.
- Future runtime **cannot silently mutate** learner state.
- Future runtime **cannot bypass** evidence lineage.

---

## 27. Open questions

| ID | Question |
|----|----------|
| **LG-OQ-1** | Should Learner Graph be event-sourced or projection-only? |
| **LG-OQ-2** | What is the minimum evidence threshold for misconception signals? |
| **LG-OQ-3** | Should claim candidates live in Learner Graph or stewardship layer? |
| **LG-OQ-4** | How are confidence bands calculated? |
| **LG-OQ-5** | How does Learner Graph relate to future UI? |
| **LG-OQ-6** | What graph events are persisted versus recomputed? |
| **LG-OQ-7** | Should DecisionTrace be required for concept-state updates? |
| **LG-OQ-8** | How is graph replay validated? |
| **LG-OQ-9** | What privacy/custody rules apply before runtime? |
| **LG-OQ-10** | How does Learner Graph handle deprecated KG refs? |

---

## 28. Recommendation

- Accept **LG-001** as Draft Architecture Review.
- Use it as the **learner-specific layer** between KG and Learning Frontier.
- Do **not** implement runtime yet.
- Proceed with **Learning Frontier** in the same PR as a **separate artifact**.

---

## 29. Governance boundary statement

**LG-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable learner-graph architecture review only**.
