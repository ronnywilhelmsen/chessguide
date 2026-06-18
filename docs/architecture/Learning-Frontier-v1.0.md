# Learning Frontier v1.0

| Field | Value |
|-------|-------|
| **Document ID** | LF-001 |
| **Title** | Learning Frontier v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Architecture Review |
| **Date** | 2026-06-18 |
| **Scope** | Learning-frontier planning/read-model architecture review only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), SCCR-001, SCC-HLD-001, [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- LF-001 is a **Draft Architecture Review**.
- It does **not** create runtime behavior.
- It does **not** create schema.
- It does **not** create a JSON/YAML registry.
- It does **not** create HLD, LLD, or UML.
- It does **not** activate Buddy or LARIS.
- It defines the **Learning Frontier planning/read-model target** only.

---

## 2. Executive summary

- Learning Frontier **reads KG and Learner Graph**.
- It **suggests** next learning focus.
- It does **not** certify learning.
- It does **not** create claims.
- It does **not** mutate evidence.
- It provides **pedagogical planning input** to future Buddy/runtime.

---

## 3. Strategic question

**What planning model should ChessGuide use to identify the learner's next meaningful frontier without mistaking activity, graph presence, or engine output for learning?**

A **read-model frontier** that derives candidates from learner evidence lineage, KG prerequisites, decision patterns, misconception hypotheses, safety priority, and uncertainty — while preserving custody and Creator replay.

---

## 4. What the Learning Frontier is

- A **planning read model**.
- A **next-focus recommender**.
- A **bridge** between Learner Graph and pedagogy.
- A **candidate generator** for practice/review/explanation.
- An **uncertainty-aware** recommendation surface.
- An **input to future Buddy scaffolding**.

---

## 5. What the Learning Frontier is not

- Not **mastery certification**.
- Not a **claim**.
- Not **evidence**.
- Not **learner state mutation**.
- Not the **Knowledge Graph**.
- Not the **Learner Graph**.
- Not **runtime implementation**.
- Not a **schema**.
- Not **federation export**.
- Not **Buddy authority**.
- Not **LARIS activation**.

---

## 6. Governance foundation

| Governance source | Relevance to Learning Frontier | Boundary consequence |
|-------------------|--------------------------------|----------------------|
| **ADR-001** | LearningTrace evidence/custody | frontier cites, never creates evidence |
| **ADR-002** | corpus_ref / sovereign references | KG suggestions are pointers, not proof |
| **ADR-003** | evidence records | frontier reads, never mutates evidence |
| **ADR-004** | stewardship and claims | frontier ≠ claim/mastery |
| **ADR-005** | DecisionTrace | decision patterns are aids, not rationale |
| **ADR-006** | Buddy boundary | Buddy uses frontier, frontier ≠ authority |
| **ADR-007** | Stockfish / SCC boundary | engine-best ≠ learning-best |
| **ADR-008** | KG / corpus source governance | frontier honours KG source posture |
| **ACG-001** | architecture continuity | frontier preserves full chain |
| **STRR-001** | roadmap controller | frontier is PR #23 (with LG) |
| **CGSR-002** | strategic identity | frontier suggests, never certifies |
| **KG-001** | domain graph | frontier reads KG prerequisites |
| **LG-001** | learner-specific derived state | frontier reads LG, never mutates |
| **SCC-HLD-001** | system competence | SCC risk informs ranking only |
| **FEDERATION.md** | federation withholding | frontier never exported |

---

## 7. Architecture Continuity Gate

| Layer | Learning Frontier interpretation | Boundary | Future consequence |
|-------|----------------------------------|----------|--------------------|
| Philosophy / learning theory | suggestion ≠ learning | activity/graph presence ≠ mastery | grounds pedagogy planning |
| Governance / ADR | honours ADR-001–008 | doctrine beats runtime | derivation policy governed |
| Review / HLD | LF-001 is architecture review | review ≠ implementation | feeds future LLD |
| Future LLD / OOP / UML | classes named (§22) | design ≠ runtime | LLD before runtime projection |
| Immutable state transitions | snapshots derived/read-only | no silent mutation | reproducible recommendations |
| Runtime implementation | none in LF-001 | runtime projects, never authority | guarded projection later |
| ChessBuddy / ChessGuide reality sharing | frontier feeds Buddy scaffolding | frontier ≠ authority | Buddy shows uncertainty |
| Creator continuity | recommendations replayable | record input versions | 100-year frontier replay |
| Federation boundary | frontier never exported | lossy ObservationRecord only | widening needs separate path |

---

## 8. Relationship to Knowledge Graph

- Frontier **reads KG prerequisites and concept relationships**.
- Frontier does **not modify KG**.
- Frontier may **suggest KG concepts** as next focus.
- KG concept suggestion is **not evidence of learning**.

---

## 9. Relationship to Learner Graph

- Frontier **reads Learner Graph derived state**.
- Frontier does **not mutate** Learner Graph directly.
- Frontier candidates must **reference derived learner signals and evidence lineage**.
- Frontier output is a **read model**.

---

## 10. Relationship to Evidence / LearningTrace

- Frontier may **cite evidence lineage**.
- Frontier may **explain why** evidence suggests a focus.
- Frontier **cannot create evidence**.
- Frontier **cannot reinterpret evidence silently**.

---

## 11. Relationship to Claims / Mastery

- Frontier **cannot create claims**.
- Frontier **cannot certify mastery**.
- Frontier may identify **claim-candidate readiness** if governance permits.
- **Stewardship remains separate.**

---

## 12. Relationship to System Chess Competence

- SCC may **inform** frontier candidates.
- Tactical **safety priority** can influence frontier ranking.
- SCC **cannot become learner state**.
- **Engine-best cannot become learning-best automatically.**

---

## 13. Relationship to Buddy

- Buddy may use Frontier suggestions as **scaffolding input**.
- Buddy must present suggestions **with uncertainty**.
- Buddy **cannot** turn Frontier into authority.
- Buddy **cannot** claim mastery.

---

## 14. Relationship to Creator continuity

- Frontier recommendation must be **replayable**.
- Must record **input graph versions, evidence lineage, KG version, Learner Graph version, and derivation policy**.
- A future system must understand **why a frontier was suggested**.

---

## 15. Federation boundary

- Frontier is **not exported**.
- **No** recommendations, confidence, learner weaknesses, concepts, KG refs, claims, or mastery in ObservationRecord.
- Federation remains **lossy / non-semantic**.

---

## 16. Frontier conceptual model

- `LearningFrontier`
- `FrontierSnapshot`
- `FrontierCandidate`
- `FrontierReason`
- `FrontierInput`
- `FrontierPriority`
- `FrontierConstraint`
- `FrontierConfidence`
- `FrontierExplanation`
- `FrontierDerivationPolicy`
- `FrontierReplay`

---

## 17. Frontier candidate model

Candidate fields:

- `candidate_id`
- `learner_id`
- `concept_ref`
- `kg_version`
- `learner_graph_version`
- `evidence_refs`
- `reason_codes`
- `priority`
- `confidence`
- `constraints`
- `suggested_activity_type`
- `explanation`
- `created_at`
- `derivation_policy_version`

Candidate types:

- `revisit_concept`
- `safety_priority`
- `misconception_probe`
- `decision_frame_practice`
- `tactic_motif_review`
- `opening_principle_review`
- `endgame_foundation`
- `claim_readiness_probe`

---

## 18. Prioritization model

Prioritization factors:

- safety before attack
- repeated misconception
- high-impact concept
- prerequisite gap
- evidence freshness
- confidence level
- learner history
- KG relationship strength
- SCC risk classification
- pedagogical appropriateness

- Priority is a **recommendation, not truth**.
- **Learning-best and engine-best are separate.**

---

## 19. Explanation model

Frontier explanations must include:

- what concept is suggested
- why now
- what evidence supports it
- what uncertainty remains
- what not to infer
- what Buddy may say
- what Buddy must not say

---

## 20. Uncertainty / insufficient-evidence model

- `insufficient_evidence`
- `weak_signal`
- `conflicting_evidence`
- `stale_evidence`
- `deprecated_kg_ref`
- `low_confidence_recommendation`
- `blocked_recommendation`

---

## 21. State and immutability model

- Frontier snapshots are **derived / read-only**.
- Recommendations should be **reproducible** from input versions.
- **No silent mutation.**
- A new recommendation = a **new snapshot/version**.
- Historical frontier remains **replayable**.

---

## 22. Future LLD / OOP / UML path

Future classes:

- `LearningFrontier`
- `FrontierCandidate`
- `FrontierSnapshot`
- `FrontierReason`
- `FrontierPriority`
- `FrontierConstraint`
- `FrontierConfidence`
- `FrontierDerivationPolicy`
- `FrontierQueryService`
- `FrontierExplanationService`
- `FrontierReplayService`

Future LLD must define: constructors, methods, parameters, return types, domain events, state transitions, error cases, persistence model, and UML. **This PR does not create LLD or UML.**

---

## 23. Runtime implementation boundary

- **No runtime implementation** in LF-001.
- Future runtime **may project** Frontier.
- Runtime **must not use** Frontier as authority.
- Runtime **must not export** Frontier via federation.

---

## 24. Open questions

| ID | Question |
|----|----------|
| **LF-OQ-1** | What priority model should be used first? |
| **LF-OQ-2** | Should Frontier be recomputed on demand or stored as snapshots? |
| **LF-OQ-3** | What evidence threshold allows a misconception probe? |
| **LF-OQ-4** | How should Buddy display uncertainty? |
| **LF-OQ-5** | Can Frontier suggest claim-readiness, or is that stewardship-only? |
| **LF-OQ-6** | How should deprecated KG refs affect recommendations? |
| **LF-OQ-7** | Should SCC safety priority override learner interest? |
| **LF-OQ-8** | What minimum UI is needed before runtime? |
| **LF-OQ-9** | How should Frontier replay be validated? |
| **LF-OQ-10** | What privacy/custody controls apply to Frontier snapshots? |

---

## 25. Recommendation

- Accept **LF-001** as Draft Architecture Review.
- Use it as the **planning/read-model layer** after Learner Graph.
- Do **not** implement runtime yet.
- Proceed next to **PR #24 Tactical Safety Scanner / SCC LLD + UML**.

---

## 26. Governance boundary statement

**LF-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable learning-frontier architecture review only**.
