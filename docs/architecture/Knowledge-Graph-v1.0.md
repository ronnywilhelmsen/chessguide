# Knowledge Graph v1.0

| Field | Value |
|-------|-------|
| **Document ID** | KG-001 |
| **Title** | Knowledge Graph v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Architecture Review |
| **Date** | 2026-06-18 |
| **Scope** | Knowledge Graph architecture / corpus binding review only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), CCCR v1.0, SCCR-001, SCC-HLD-001, CRR-001, CSV-001, MCRM-001, OTWP-001, LTCW-001, [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## 1. Status

- KG-001 is a **Draft Architecture Review**.
- It does **not** create runtime behavior.
- It does **not** create a schema.
- It does **not** create a JSON/YAML registry.
- It does **not** create HLD, LLD, or UML.
- It does **not** activate Buddy or LARIS.
- It defines the **governed semantic graph target** only.

---

## 2. Executive summary

- ChessGuide now needs a **governed Knowledge Graph** before Learner Graph and Learning Frontier.
- The KG **binds** corpus refs, source refs, tactics, decision frames, openings, principles, plans, endgames, and source posture.
- The KG is a **semantic domain graph**, not learner state.
- It enables **System Chess Competence** and **Buddy** to reference domain concepts **without** turning those references into evidence or mastery.
- It preserves **Creator continuity** through stable IDs, versions, curation status, source lineage, and boundary flags.

---

## 3. Strategic question

**What semantic domain graph must exist before ChessGuide can safely build Learner Graph, Learning Frontier, Tactical Safety Scanner, and Buddy/LARIS activation?**

A **governed, versioned, citable Knowledge Graph** where chess concepts and source references are explicit, boundary-flagged, source-aware, and **distinguishable** from learner evidence, claims, mastery, runtime behavior, and federation export.

---

## 4. What the Knowledge Graph is

- A **governed chess-domain concept graph**.
- A **semantic bridge** between corpus governance and future runtime.
- A **citable domain-reality layer**.
- A **curated concept network**.
- A **source-aware and versioned** reference layer.
- An **upstream dependency** for System Chess Competence, Learner Graph, Learning Frontier, Tactical Safety Scanner, and Buddy.

---

## 5. What the Knowledge Graph is not

- Not **learner state**.
- Not **evidence**.
- Not **claim**.
- Not **mastery**.
- Not **runtime implementation**.
- Not a **JSON/YAML registry** in this PR.
- Not a **schema**.
- Not **federation export**.
- Not **engine truth**.
- Not **Buddy authority**.
- Not **LARIS activation**.

---

## 6. Governance foundation

| Governance source | Relevance to KG | Boundary consequence |
|-------------------|-----------------|----------------------|
| **ADR-002** | corpus_ref / sovereign reference boundary | KG refs are pointers, not evidence/export |
| **ADR-003** | evidence record boundary | KG nodes never become evidence |
| **ADR-004** | claim / stewardship boundary | KG cannot assert claims/mastery |
| **ADR-005** | DecisionTrace boundary | KG decision_frame ≠ learner rationale |
| **ADR-006** | Buddy pedagogy boundary | Buddy may cite KG, not certify |
| **ADR-007** | Stockfish / SCC boundary | engine ≠ KG truth |
| **ADR-008** | Corpus Reference Registry / source governance | KG honours registry + source posture |
| **ACG-001** | architecture continuity | KG must preserve full chain |
| **STRR-001** | roadmap controller | KG is PR #22 in fixed sequence |
| **CGSR-002** | strategic identity | KG = domain reality, not doctrine/runtime |
| **CCCR v1.0** | corpus taxonomy baseline | grounds concept vocabulary |
| **CRR-001** | registry review and P0–P5 | seeds + pedagogical priority |
| **CSV-001** | source verification | controls source admission |
| **MCRM-001** | draft manifest seeds | seed concepts/source posture |
| **OTWP-001** | opening wrap plan | openings wrapped, not replaced |
| **LTCW-001** | Lichess puzzle theme cross-walk | external label ≠ doctrine |

---

## 7. Architecture Continuity Gate

| Layer | KG interpretation | Boundary | Future consequence |
|-------|-------------------|----------|--------------------|
| Philosophy / learning theory | concepts are domain reality, not learning | knowing a node ≠ learning it | grounds Learner Graph integration |
| Governance / ADR | KG honours ADR-002–008, ACG-001 | doctrine beats runtime | future registry honours flags |
| Review / HLD | KG-001 is architecture review | review ≠ implementation | feeds SCC/Learner Graph design |
| Future LLD / OOP / UML | concept classes named (§28) | design ≠ runtime | LLD before runtime registry |
| Immutable state transitions | graph releases immutable; versions append | no silent overwrite | replayable graph history |
| Runtime implementation | none in KG-001 | runtime reads, never invents | guarded registry later |
| ChessBuddy / ChessGuide reality sharing | KG citable by views | KG ≠ proof of understanding | Buddy cites, never claims |
| Creator continuity | versioned refs + source lineage | no flattening | 100-year graph replay |
| Federation boundary | KG not exported | lossy ObservationRecord only | widening needs separate path |

---

## 8. Knowledge Graph role in the roadmap

- PR #22 KG comes **after CGSR-002**.
- KG **precedes Learner Graph**.
- KG **precedes Learning Frontier**.
- KG **supports Tactical Safety Scanner / SCC LLD**.
- KG **supports Buddy explanations** but does **not authorize** Buddy.
- KG **supports Creator continuity**.
- KG is **not runtime**.

---

## 9. Concept model

Conceptual entities:

- `KnowledgeGraphVersion`
- `ConceptNode`
- `ConceptRef`
- `SourceRef`
- `CorpusRef`
- `CurationState`
- `BoundaryFlagSet`
- `ConceptRelationship`
- `ConceptNamespace`
- `ConceptAlias`
- `ConceptDeprecation`
- `ConceptVersion`
- `SourcePosture`
- `GraphRelease`

**Identity and immutability:**

- Nodes have **stable IDs**.
- Labels can change; **IDs persist**.
- **Aliases** resolve to canonical refs.
- **Deprecated refs remain resolvable**.
- **Relationships are versioned**.
- **Graph releases are immutable**.

---

## 10. Node namespaces

| Namespace | Purpose | Source basis | Boundary | v1 seeds? |
|-----------|---------|--------------|----------|-----------|
| `tactic:*` | tactical motifs | CRR/MCRM/LTCW | not_evidence/not_mastery | v1 seeds |
| `decision_frame:*` | decision/scan frames | CRR/MCRM, ADR-005 | not learner rationale | v1 seeds |
| `opening:*` | named openings | OTWP, runtime tree | wrapped, not replaced | minimal v1 seeds |
| `eco:*` | ECO codes | external (future verify) | external_unverified | minimal v1 seeds |
| `principle:*` | strategic principles | CCCR/MCRM | illustrative | placeholder |
| `plan:*` | plans / schemes | CCCR | illustrative | placeholder |
| `endgame:*` | endgame concepts | CCCR | illustrative | placeholder |
| `tablebase:*` | tablebase reference | CSV (Syzygy) | no binaries | placeholder |
| `source:*` | source identities | CSV/MCRM | source_required | referenced |
| `corpus:*` | corpus refs | ADR-008/MCRM | not_federation_export | referenced |
| `pattern:*` | recurring patterns | CCCR | illustrative | placeholder |
| `position_class:*` | position categories | SCC-HLD | future | placeholder |
| `error_pattern:*` | error/mistake patterns | CCCR/SCC | future | placeholder |

---

## 11. Relationship types

- `includes`
- `related_to`
- `prerequisite_for`
- `refines`
- `broadens`
- `aliases`
- `deprecated_by`
- `sourced_from`
- `aligned_with`
- `conflicts_with`
- `used_by`
- `explains`
- `applies_to`
- `unsafe_without`
- `supports_decision_frame`
- `candidate_for_learning_frontier`
- `not_evidence_of`
- `not_mastery_of`

**Boundary note:** No relationship may imply evidence, learning, claim, or mastery without governed learner-side records.

---

## 12. Boundary flags

- `not_learner_state`
- `not_evidence`
- `not_claim`
- `not_mastery`
- `not_federation_export`
- `not_runtime_instruction`
- `not_engine_truth`
- `not_buddy_authority`
- `not_laris_activation`
- `source_required`
- `curation_required`
- `deprecated_ref_resolvable`

---

## 13. Source and provenance model

- `SourceRef` points to **source identity, license posture, provenance status, allowed uses, restrictions**.
- **CSV-001** controls source verification.
- **MCRM-001 / OTWP-001 / LTCW-001** provide draft source posture.
- **No dataset ingestion** in KG-001.
- **No source downloads** in KG-001.
- A future machine registry **may** serialize `SourceRef`, **but not in this PR**.

---

## 14. Curation state model

Curation states:

- `proposed`
- `candidate`
- `draft`
- `curated`
- `accepted`
- `deprecated`
- `rejected`
- `external_unverified`
- `internal_runtime_only`

- KG v1 may include **proposed / draft** concepts.
- Runtime and Buddy **must respect** curation states.
- Accepted governance is **separate** from KG curation.

---

## 15. Versioning and immutability

- **Graph release immutable** after publication.
- Corrections create a **new graph version**.
- **Concept ID persists**.
- Label/description changes create **version history**.
- **Deprecated refs remain resolvable**.
- Creator continuity requires **historical graph replay**.

---

## 16. Seed graph v1.0

| ref | label | namespace | source basis | curation state | boundary flags | notes |
|-----|-------|-----------|--------------|----------------|----------------|-------|
| `tactic:fork` | Fork | tactic | CRR/MCRM | draft | not_evidence, not_mastery | P-high safety relevance |
| `tactic:pin` | Pin | tactic | CRR/MCRM | draft | not_evidence, not_mastery | |
| `tactic:back_rank_mate` | Back-rank mate | tactic | CRR/MCRM/LTCW | draft | not_evidence, not_mastery | mate motif |
| `decision_frame:king_safety_first` | King safety first | decision_frame | CRR/MCRM | draft | not learner rationale | P0 |
| `decision_frame:cct_scan` | Checks/Captures/Threats scan | decision_frame | CRR/MCRM | draft | not learner rationale | P0/P1 |
| `decision_frame:loose_pieces_drop_off` | Loose pieces drop off | decision_frame | CRR/MCRM | draft | not learner rationale | safety |
| `opening:sicilian_defense` | Sicilian Defense | opening | OTWP/runtime | candidate | wrapped, not replaced | label may change, ID stable |
| `eco:B90` | ECO B90 (Najdorf) | eco | external | external_unverified | source_required | future verify |
| `source:lichess-puzzles` | Lichess puzzles (CC0) | source | CSV/LTCW | external_unverified | source_required, no_bulk_ingest | theme cross-walk only |
| `corpus:runtime-opening-tree` | Runtime opening tree | corpus | OTWP | internal_runtime_only | not_federation_export | internal artifact only |

Full tactic and decision-frame seed lists follow in §17–§18.

---

## 17. Tactic concept seeds

- `tactic:fork`
- `tactic:pin`
- `tactic:skewer`
- `tactic:back_rank_mate`
- `tactic:discovered_attack`
- `tactic:overloaded_piece`
- `tactic:deflection`
- `tactic:decoy`
- `tactic:clearance`
- `tactic:interference`
- `tactic:zwischenzug`
- `tactic:double_attack`
- `tactic:smothered_mate`

All carry `not_evidence` and `not_mastery` boundary flags; curation state `draft` unless otherwise governed.

---

## 18. Decision-frame concept seeds

- `decision_frame:safety_check`
- `decision_frame:king_safety_first`
- `decision_frame:cct_scan`
- `decision_frame:checks_captures_threats`
- `decision_frame:loose_pieces_drop_off`
- `decision_frame:mate_threat_scan`
- `decision_frame:forcing_moves_first`
- `decision_frame:candidate_moves`
- `decision_frame:calculation_tree`
- `decision_frame:sanity_check`
- `decision_frame:defensive_scan_before_attack`
- `decision_frame:offensive_scan_after_safety`

Decision frames are **scan/decision aids**, never learner rationale (ADR-005).

---

## 19. Opening concept seeds

- `opening:sicilian_defense`
- `opening:ruy_lopez`
- `opening:queen_gambit`
- `eco:A00`
- `eco:B90`

- The opening tree runtime is **wrapped, not replaced**.
- **No runtime tree modification** in this PR.
- **No full opening registry** in this PR.

---

## 20. Principle / plan / endgame placeholder strategy

Placeholder namespaces (do not over-seed):

- `principle:development`
- `principle:center_control`
- `principle:king_safety`
- `plan:improve_worst_piece`
- `endgame:basic_mate`
- `endgame:opposition`
- `tablebase:syzygy_reference`

These are **illustrative placeholders** unless explicitly grounded by current governance; final curation is **deferred**.

---

## 21. Relationship to corpus governance

- KG depends on **ADR-008, CRR-001, CSV-001, MCRM-001, OTWP-001, LTCW-001**.
- KG is **not a corpus registry file** yet.
- KG **can later** become a machine-readable registry only after a **separate decision**.
- Source posture and boundary flags **must be preserved**.

---

## 22. Relationship to System Chess Competence

- SCC **can read** KG.
- SCC **can classify** positions using KG refs.
- SCC **cannot write** learner state.
- SCC **cannot convert** KG refs into mastery.
- Future **SCC LLD** must define typed access.

---

## 23. Relationship to Learner Graph

- Learner Graph **may reference** KG nodes.
- Learner Graph is **learner-specific and evidence-derived**.
- KG is **domain-level and learner-independent**.
- A KG node **cannot become learner knowledge** without evidence and integration.

---

## 24. Relationship to Learning Frontier

- Learning Frontier **can suggest** next concepts using KG + learner evidence.
- **Suggestions are not claims.**
- Frontier outputs must be **derived read models**.
- Frontier must **preserve uncertainty and limitations**.

---

## 25. Relationship to Buddy

- Buddy **may cite** KG concepts within boundaries.
- Buddy **cannot treat** KG as proof of learner understanding.
- Buddy **cannot certify** mastery.
- Buddy **cannot impersonate** learner rationale.
- Buddy explanation must **distinguish** KG reference from evidence and claim.

---

## 26. Relationship to Creator continuity

- KG versioning enables **replay of past semantic context**.
- Creator must know **which graph version** was active at time of explanation/evidence/claim.
- Labels changing later must **not alter historical meaning**.
- **Deprecated refs remain resolvable.**

---

## 27. Federation boundary

- KG is **not federation export**.
- Do **not** export `corpus_ref` / `source_refs` / KG relationships / curation state / boundary flags in ObservationRecord.
- Federation remains **lossy / non-semantic** unless separate governance widens it.

---

## 28. Future LLD / OOP / UML path

Future classes / objects:

- `KnowledgeGraph`
- `KnowledgeGraphVersion`
- `ConceptNode`
- `ConceptRef`
- `ConceptRelationship`
- `SourceRef`
- `CurationState`
- `BoundaryFlagSet`
- `GraphRelease`
- `ConceptResolver`
- `ConceptQueryService`
- `SourcePostureService`
- `GraphVersionResolver`

- Future **LLD** must define constructors, methods, parameters, return types, error cases, persistence model, and UML.
- **This PR does not create LLD or UML.**

---

## 29. Runtime implementation boundary

- **No runtime implementation** in KG-001.
- Runtime **may later read** a KG registry.
- Runtime **may not silently introduce** KG concepts.
- Runtime **may not write** learner state from KG refs.
- Runtime **may not export** KG through federation.

---

## 30. Open questions

| ID | Question |
|----|----------|
| **KG-OQ-1** | Should KG v1 later become JSON, YAML, or database-backed? |
| **KG-OQ-2** | Should KG have its own ADR before machine-readable registry? |
| **KG-OQ-3** | What is the minimum accepted curation state for Buddy references? |
| **KG-OQ-4** | Should tactic refs and decision frames share one graph release? |
| **KG-OQ-5** | How should source posture be enforced at runtime? |
| **KG-OQ-6** | How should deprecated refs be resolved in Creator replay? |
| **KG-OQ-7** | Should opening refs be derived from runtime tree or external source first? |
| **KG-OQ-8** | How should Syzygy/tablebase references be represented without importing binaries? |
| **KG-OQ-9** | Should Learning Frontier be allowed to traverse proposed concepts? |
| **KG-OQ-10** | What graph query capabilities are safe before LLD? |

---

## 31. Recommendation

- Accept **KG-001** as Draft Architecture Review.
- Use it as **PR #22**.
- Do **not** build a runtime registry yet.
- Next after KG is **PR #23 Learner Graph + Learning Frontier**.
- KG must remain **learner-independent and source-aware**.
- Future machine-readable KG requires a **separate LLD/schema/runtime path**.

---

## 32. Governance boundary statement

**KG-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable Knowledge Graph architecture review only**.
