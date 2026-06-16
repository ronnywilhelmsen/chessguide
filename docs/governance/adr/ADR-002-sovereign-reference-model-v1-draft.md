# ADR-002 — Sovereign Reference Model v1: Knowledge Corpus, Learner Custody, and Learning Frontier Boundary

| Field | Value |
|-------|-------|
| **Document ID** | ADR-002 |
| **Title** | Sovereign Reference Model v1: Knowledge Corpus, Learner Custody, and Learning Frontier Boundary |
| **Version** | 0.1 (scope draft) |
| **Status** | Draft |
| **Date** | 2026-06-06 |
| **Scope** | Semantic reference boundary between domain corpus, learner custody, and derived pedagogical views (governance only) |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CB-002](../chessbuddy/CB-002-longitudinal-skill-development-domain.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft** — scope and decision-candidate document only. Not Accepted. Defines what ADR-002 must decide immediately after [ADR-001](ADR-001-learningtrace-episode-schema-v1.md) Episode custody. No runtime, test, federation export, schema, or implementation changes are introduced by this draft.

---

## 1. Context

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks the **sovereign Episode persistence boundary**: `LearningTrace` / `Episode` canonical names, optional Session, minimum observation evidence, ChessAnchor AN-1–AN-4, legacy `Game.toString()` adapter, deferred full LOE/DOE schema, and federation projection as a **lossy completed-game slice**.

ChessGuide still lacks a **governance decision** on how three semantic territories relate:

| Territory | Examples (non-exhaustive) |
|-----------|---------------------------|
| **Domain reference material** | Opening lines, pattern labels, position classes, future endgame/strategic references, focus-contract references, other chess knowledge references |
| **Learner-owned evidence** | `LearningTrace`, `Episode`, `Event`, `ChessAnchor`, optional opaque LOE/DOE refs, future `LearningRecord`s |
| **Derived pedagogical views** | Learner state, integration gaps, learning frontier, “what next” guidance |

**Repository Truth Hierarchy:** governance (CG/CB/CFA/LEF/ADR) > committed reviews > LLD/CDESR (design targets) > runtime (legacy).

**Stable doctrine (not reopened by ADR-002):**

- **LearningTrace** = evidence + custody, not learning (LEF-0E; ADR-001).
- **Learning** = integration achieved (CG-FLL-002).
- **Activity** ≠ learning (CG-FLL-001 I-3; CG-FLL-002).
- **CFA** = logical dependency model, not runtime pipeline (CFA v1.0).
- **Federation `ObservationRecord`** = lossy export slice, never sovereign learning custody (ADR-001 D11; FEDERATION.md).
- **LARIS** = federation learning dialogue; dormant — not activated (FDP-002; CG-002).
- **Buddy** = ChessGuide domain mentor (CB-004; CDIA SD-15).
- **Knowledge Concept**, **Learner Graph**, **Learning Frontier** = review/synthesis terms — **not** current doctrine (CDIA PR-1–3; CEAR).

**Runtime reality (LEF-2C):** `src/data/openings.ts` is an embedded opening corpus (flat trie); `GameHistory` is legacy Episode custody. No knowledge graph, learner graph, frontier model, or LOE persistence in `src/`.

---

## 2. Why ADR-002 follows ADR-001

ADR-001 deliberately **excluded** reference-model decisions so Episode custody could be locked first (ADR-001 Out of scope: Knowledge Graph, Learner Graph, Learning Frontier, Knowledge Concept as first-class type).

ADR-001 **unlocked** downstream work that requires a reference boundary:

| ADR-001 unlock | Why reference model is needed |
|----------------|------------------------------|
| Anchors AN-3 (`opening`, `position_class`, `focus_contract`) | Anchors must point **either** to corpus units **or** remain episode-local without conflating custody |
| Optional opaque LOE/DOE refs (ADR-001 D10) | LOE/DOE records must know what they may reference (Episode, anchor, corpus ref) |
| Federation projection hook (ADR-001 D11) | Must clarify what **never** crosses the export boundary from corpus or learner custody |
| CFA Longitudinal Path (read model on trace) | Cannot name path vs corpus gap without corpus vs custody split |
| Buddy longitudinal memory (CB-004 PP-2) | Buddy may use references and trace — not LARIS, not sovereign export |

Without ADR-002, implementers risk:

- Treating opening tree nodes as learner-owned evidence.
- Persisting “frontier” or “learner state” as sovereign aggregates.
- Exporting knowledge claims or integration gaps to federation.
- Introducing graph DB or traversal API under “reference model” naming.

ADR-002 defines a **semantic reference boundary** — not a graph implementation.

---

## 3. Problem statement

ChessGuide must decide **what is domain reference**, **what is learner evidence under custody**, and **what is derived pedagogical interpretation** — with explicit rules for anchors, future LOE/DOE refs, federation withholding, and Buddy use — **without** implementing storage, graphs, skill vectors, or LARIS activation.

The problem is **semantic sovereignty**, not data structure:

> How does ChessGuide refer to chess knowledge, record learner evidence, and name integration gaps — while keeping learning sovereign, federation export lossy, and CFA interpretive layers non-persistent in v1?

---

## 4. Decision candidates

Each candidate answers a core question ADR-002 must resolve. Final ADR-002 will adopt one option per question unless noted as explicitly deferred.

### Q1 — Vocabulary: Knowledge Concept vs narrower term

| Option | Description |
|--------|-------------|
| **KC-A** | Adopt **Knowledge Concept** as canonical governance vocabulary |
| **KC-B** | Adopt narrower **Corpus Reference** (or **Knowledge Reference** / **Reference Unit**) as canonical v1 term |
| **KC-C** | Keep doctrine terms only: **ChessKnowledge** + **knowledge refs** + **ChessAnchor** — no new umbrella term |

**Evidence:** CEAR P1-1, P1-5 — no formal Knowledge Concept type; CB-000/CB-002 define ChessKnowledge; CB-005 has knowledge refs; CLOR OQ-KN1.

### Q2 — Corpus vs LearningTrace custody

| Option | Description |
|--------|-------------|
| **CV-A** | **Corpus** = domain-owned, versioned reference material (openings, patterns, position classes, focus-contract definitions). **LearningTrace** = learner-owned evidence only. Corpus is **never** appended to a trace as if learned. |
| **CV-B** | Corpus entries may be **copied into** trace as snapshots (denormalized) — still distinguished by provenance flag |
| **CV-C** | Single store mixing corpus and trace with type tags only |

**Evidence:** CB-002 — ChessBuddy applies knowledge through practice; CB-000 I-3 ChessWisdom ≠ ChessKnowledge; ADR-001 D11 lossy projection; CB-005 knowledge refs are **refs**, not custody transfer.

### Q3 — Learner state, Learner Graph, Learning Frontier persistence class

| Option | Description |
|--------|-------------|
| **PV-A** | **Learner state** = derived **read model** over LearningTrace + integration records — **not persisted in v1** |
| **PV-B** | **Learner Graph** = naming alias for Actor + LearningTrace hierarchy (CB-005) — **governance concept only**, not persisted graph |
| **PV-C** | **Learning Frontier** = derived **read model** (corpus refs minus integration evidence) — **not persisted in v1** |
| **PV-D** | Persist learner state / frontier as first-class aggregates |

**Evidence:** CEAR P4-2, P5-1 — Learner Graph and Learning Frontier are [PROPOSAL]; CFA Longitudinal Path = interpretive read model (E3); CDIA SI-3, SI-4.

### Q4 — Learning Frontier as governance term

| Option | Description |
|--------|-------------|
| **LF-A** | Adopt **Learning Frontier** as **constrained governance term** for derived integration-gap view (with definition and anti-patterns) |
| **LF-B** | Keep **Learning Frontier** as **proposal term** only — use in reviews; not ADR vocabulary |
| **LF-C** | Adopt alternate term (e.g. **Integration Gap View**) and retire Frontier in governance |

**Evidence:** CEAR P5-2 — useful gap name; P5-1 — not repository vocabulary; ADR-001 excluded Learning Frontier from Episode ADR.

### Q5 — Episode anchors ↔ corpus/reference units

| Option | Description |
|--------|-------------|
| **AN-A** | Anchor **references** corpus unit by stable `corpus_ref` (opening ID, pattern ID, position class ID, focus_contract ID); anchor remains immutable (AN-2); corpus unit may version independently |
| **AN-B** | Anchor embeds corpus label inline only — no stable corpus_ref |
| **AN-C** | Anchors are episode-local only — no corpus linkage in v1 |

**Evidence:** CB-005 AN-3, AN-4; CB-005 Episode knowledge refs; ADR-001 D7 minimum anchor; LEF-1B E-1B-4 cross-episode anchors.

### Q6 — Minimum LOE/DOE reference targets (for future ADR-003)

| Option | Description |
|--------|-------------|
| **LOE-A** | LOE/DOE **must** reference: `episode_id`, optional `event_id`, optional `anchor_id`, optional `corpus_ref`, optional `evidence_refs[]` — **no** transformation claim without lineage (CG-FLL-1E I-1) |
| **LOE-B** | LOE/DOE may reference only Episode + free text in v1 |
| **LOE-C** | LOE/DOE inline-only inside Episode (rejected by ADR-001 D10) |

**Evidence:** ADR-001 D10 deferred full schema; CG-FLL-1E per-event minimum fields; CEAR EvidenceChain edges; CB-005 I-1.

### Q7 — Federation export withholding (explicit)

| Withheld from export | Rationale |
|---------------------|-----------|
| LearningTrace container semantics | FEDERATION.md |
| LOE/DOE records and opaque refs | FEDERATION.md; ADR-001 D10 |
| Knowledge refs, corpus linkage, frontier views | Knowledge/learning claims |
| ChessAnchor lists (beyond move log in artifact) | Trace index — sovereign |
| Integration state, learner state, mastery, progress | FEDERATION.md |
| Engine CP, hints, coach, reflection, dialogue | FEDERATION.md |
| Transformation tags, ExplanationArtifact | CFA orthogonal; sovereign |
| Corpus content (opening tree bodies) | Domain reference — not continuity evidence |

**Exported only:** terminal completed-game observation slice per ADR-001 D11 and FEDERATION.md.

### Q8 — Buddy use without LARIS activation

| Permitted (candidate) | Forbidden (candidate) |
|-----------------------|----------------------|
| Resolve corpus refs for opening/pattern labels during play (KnowledgeService intent, LLD) | Cross-domain learning dialogue (LARIS role) |
| Read learner's own LearningTrace / Episode history for longitudinal memory (CB-004 PP-2) | Export or mirror sovereign learning to federation |
| Present **derived** “what next” suggestions as **non-authoritative** pedagogical view | Persist frontier or learner state as sovereign without ADR |
| Frame engine input as **reference**, not decree (CB-004 PP-7) | Transformation claims without stewardship gate |
| Link hints to focus_contract **corpus refs** when modes allow (CB-006 governance) | Activate LARIS APIs or federation learning guidance |

**Evidence:** CG-002 Laris vs ChessGuide; CB-004; CDIA SD-15; FDP-002.

### Q9 — Reserved for future ADRs

See §12 Explicit downstream ADRs.

---

## 5. Recommended decision direction

**Direction for final ADR-002 acceptance** (subject to review; not binding until Status = Accepted):

| Question | Recommended direction | Rationale |
|----------|----------------------|-----------|
| **Q1** | **KC-B + KC-C hybrid:** adopt **Corpus Reference** as v1 canonical term for referencable domain units; retain **ChessKnowledge** as chain-stage artefact; **do not** adopt **Knowledge Concept** as first-class type in v1 | Narrower term reduces overreach; doctrine already has ChessKnowledge + refs (CEAR P1-2) |
| **Q2** | **CV-A** with optional **CV-B** snapshot only when provenance marks `source=corpus_snapshot` | Clear sovereignty; refs not custody |
| **Q3** | **PV-A + PV-B + PV-C:** learner state, Learner Graph (as hierarchy alias only), and frontier are **derived views / read models** — **not persisted in v1** | Aligns CFA Longitudinal Path; avoids graph DB; CEAR [PROPOSAL] tier |
| **Q4** | **LF-A (constrained):** adopt **Learning Frontier** as **governance term for a derived pedagogical read model only** — with explicit “not persisted in v1” and “not exportable” | Captures useful gap (CDIA SI-4) without graph claim |
| **Q5** | **AN-A** minimum: anchors **should** carry optional `corpus_ref` when type is `opening`, `position_class`, or `focus_contract` | AN-3 + knowledge refs; cross-episode queries (AN-4) need stable refs |
| **Q6** | **LOE-A** as **minimum reference contract** for ADR-003 — ADR-002 defines allowed target types only, not record shape | Steward lineage (CG-FLL-1E); ADR-001 deferred schema |
| **Q7** | **Affirm FEDERATION.md + ADR-001** list explicitly in ADR-002 — no expansion of export | Locked boundary |
| **Q8** | Buddy may **read** corpus + trace and **emit derived views**; must not activate LARIS or sovereign persistence of frontier/state | CG-002, CB-004, FDP-002 |
| **Q9** | Defer implementation schemas, stewardship gates, DecisionTrace, Buddy pedagogy ADR | Sequencing |

**Semantic model (recommended):**

```text
┌─────────────────────────────────────────────────────────────┐
│  DOMAIN CORPUS (sovereign reference, domain-owned)          │
│  Corpus Reference units: opening ID, pattern, position_class│
│  focus_contract defs, future endgame/strategic refs         │
│  NOT learner custody · NOT federation export by default     │
└──────────────────────────┬──────────────────────────────────┘
                           │ corpus_ref (read + anchor link)
┌──────────────────────────▼──────────────────────────────────┐
│  LEARNER CUSTODY (sovereign evidence — ADR-001)              │
│  Actor → LearningTrace → [Session] → Episode → Event        │
│  ChessAnchor (AN-1–4) · optional opaque loe_ref/doe_ref     │
│  future LearningRecord (ADR-003)                            │
└──────────────────────────┬──────────────────────────────────┘
                           │ interpretive projection (read models)
┌──────────────────────────▼──────────────────────────────────┐
│  DERIVED PEDAGOGICAL VIEWS (not persisted in v1)            │
│  Longitudinal Path · learner state · Learning Frontier      │
│  “what next” guidance · integration gap views               │
│  Buddy may compute; LARIS may not consume without future ADR│
└─────────────────────────────────────────────────────────────┘

Federation export (parallel, lossy): terminal Episode → ObservationRecord only
```

---

## 6. In scope

1. **Semantic reference model** — three-territory boundary (corpus, custody, derived views).
2. **Vocabulary decision** — Corpus Reference vs Knowledge Concept vs doctrine-only terms (Q1).
3. **Custody rules** — what belongs to corpus vs LearningTrace (Q2).
4. **Persistence class** — read model vs governance concept vs forbidden persist (Q3–Q4).
5. **Anchor ↔ corpus_ref relationship** minimum rules (Q5).
6. **LOE/DOE allowed reference targets** (types only, not schema) (Q6).
7. **Federation withholding list** — explicit reaffirmation and extension of ADR-001/FEDERATION.md (Q7).
8. **Buddy permitted use** without LARIS activation (Q8).
9. **Relationship to CFA** — Longitudinal Path as read model; Integration separate from corpus.
10. **Explicit downstream ADR boundaries** (§12).

---

## 7. Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Graph database** | ADR-002 is reference model, not graph implementation |
| **Traversal API** | CB-005 excludes wire formats; future implementation ADR |
| **Chess Skill Vector** | ADR-001 exclusion; CB-002 R-2 |
| **LARIS activation** | Pedagogical acceptance precedes technical; FDP-002 |
| **Full LOE/DOE schema** | ADR-003 |
| **Stewardship / Transformation Claim gate** | ADR-004 |
| **DecisionTrace / per-ply reasoning** | ADR-005 |
| **Buddy pedagogical orchestration detail** | ADR-006 |
| **Runtime refactor** | LEF-2C documents gap |
| **JSON Schema, SQL, localStorage** | CB-005 out of scope |
| **Changes to `src/`, tests, federation export** | Governance only |
| **Cognitive / narrative chunk persistence** | CDIA PR-4, PR-5; ADR-001 exclusion |
| **Knowledge Graph / Learner Graph as persisted types** | Review proposals |
| **LearningJourney as canonical name** | ADR-001 D1 |
| **Corpus versioning mechanics** | Future ADR or implementation |
| **Marking ADR-002 Accepted** | This document is Draft scope only |

---

## 8. Alternatives considered

### Alt-1 — Adopt Knowledge Concept as first-class governance type

**Pros:** Aligns with CEAR synthesis; single umbrella term.  
**Cons:** No doctrine type today; risks conflating ChessKnowledge, refs, and integration; ADR-001 explicitly deferred.  
**Recommended rejection** for v1 — use Corpus Reference + doctrine terms.

### Alt-2 — Persist Learning Frontier as sovereign aggregate

**Pros:** Enables “what next” product features with stable storage.  
**Cons:** Frontier is integration gap, not evidence; violates LearningTrace = custody not learning; invites skill-vector thinking.  
**Recommended rejection** — derived read model only in v1.

### Alt-3 — Merge corpus into LearningTrace custody

**Pros:** Simpler storage story.  
**Cons:** Violates CB-002 knowledge-through-practice distinction; blurs export boundary; corpus is domain-owned.  
**Recommended rejection** — CV-A custody split.

### Alt-4 — Implement reference model as Knowledge Graph (Neo4j-style)

**Pros:** Matches strategic review gap analysis language.  
**Cons:** No repo doctrine; Creator uses Neo4j but ChessGuide does not; ADR-002 scope is semantic only.  
**Rejected** — explicit out of scope.

### Alt-5 — Defer Learning Frontier entirely (LF-B)

**Pros:** Safest; no new vocabulary.  
**Cons:** Loses useful pedagogical gap name validated in CEAR/CCNLAR/CDIA SI-4.  
**Alternative to recommendation** — acceptable if reviewers prefer zero new terms.

### Alt-6 — Buddy delegates “what next” to LARIS pre-activation

**Pros:** Federation-aligned guidance.  
**Cons:** Violates CG-002 ownership; FDP-002 dormant; pedagogical evaluation not done.  
**Rejected.**

---

## 9. Consequences

### Positive

- Clarifies **sovereign reference boundary** before LOE/DOE schema work (ADR-003).
- Prevents corpus ↔ trace ↔ export conflation that would break FEDERATION.md guarantees.
- Gives anchors a stable **corpus_ref** contract without graph DB.
- Names **Learning Frontier** safely as derived view if LF-A adopted — not a persisted graph.
- Enables Buddy longitudinal memory within domain mentor role without LARIS.

### Negative / risks

- **Corpus Reference** adds vocabulary atop ChessKnowledge — requires glossary discipline.
- **Read-model-only frontier** means product “what next” features need compute layer — no shortcut store.
- **corpus_ref stability** across corpus version bumps is undefined in this draft — future ADR required.
- Draft does not change runtime — opening tree remains flat trie; trace remains legacy strings.
- Constrained Learning Frontier may still be misread as graph — mitigated by “not persisted in v1” language.

### Unlocked downstream (after ADR-002 Accepted)

| Work | Dependency |
|------|------------|
| ADR-003 LOE/DOE schema | Reference targets Q6 |
| ADR-004 Stewardship gate | Custody vs claim boundary |
| ADR-005 DecisionTrace | Episode + corpus ref resolution |
| ADR-006 Buddy pedagogy | Permitted read/compute boundaries Q8 |
| Corpus versioning ADR | corpus_ref + AN-2 immutability tension |
| Future LARIS read boundary | Pedagogical acceptance + ADR-002 export withhold list |

---

## 10. Open questions

| ID | Question | Draft disposition |
|----|----------|-----------------|
| **OQ-002-1** | Final v1 term: Corpus Reference, Knowledge Reference, or Reference Unit? | **Lean:** Corpus Reference |
| **OQ-002-2** | Adopt Knowledge Concept at all in governance glossary? | **Lean:** no in v1 |
| **OQ-002-3** | Allow corpus snapshots in trace (CV-B)? | **Open** — if yes, require provenance |
| **OQ-002-4** | Learning Frontier: LF-A constrained vs LF-B proposal-only? | **Lean:** LF-A constrained |
| **OQ-002-5** | Is Learner Graph ever more than CB-005 hierarchy alias? | **Lean:** no persisted graph |
| **OQ-002-6** | corpus_ref format (opening path string vs UUID)? | **Deferred** to ADR-003 / implementation |
| **OQ-002-7** | Corpus version pin on anchor vs on Episode? | **Deferred** |
| **OQ-002-8** | Endgame/strategic corpus — placeholder only? | **Yes** — CB-002 catalogue gap (CEAR OQ-K2) |
| **OQ-002-9** | May federation continuity_id reference corpus? | **Lean:** no — game-scoped only |
| **OQ-002-10** | Buddy cache of derived frontier — ephemeral OK? | **Lean:** yes if not sovereign persist |
| **OQ-002-11** | CLOR suggested ADR-002 = Chunk Architecture — reconcile? | **This ADR supersedes that sequencing** per Episode-first discovery convergence |
| **OQ-002-12** | Rename ChessAnchor to Memory Anchor (CLOR OQ-MEM1)? | **Out of scope** — AN-1–4 retained |

---

## 11. Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| ADR-001 Episode custody locked | ADR-001 Accepted | ADR | [DOCTRINE] |
| LearningTrace ≠ learning | LEF-0E; ADR-001; CG-FLL-002 | Doctrine | [DOCTRINE] |
| Learning = integration achieved | CG-FLL-002 | Doctrine | [DOCTRINE] |
| Activity ≠ learning | CG-FLL-001 I-3 | Doctrine | [DOCTRINE] |
| ChessKnowledge vs ChessWisdom | CB-000 I-3; CB-002 artefact catalogue | Doctrine | [DOCTRINE] |
| Knowledge refs on Episode | CB-005 § Episode semantic record | Doctrine | [DOCTRINE] |
| ChessAnchor AN-1–AN-4 | CB-005; ADR-001 D7 | Doctrine | [DOCTRINE] |
| Longitudinal Path = read model | CFA v1.0 glossary E3 | Doctrine | [DOCTRINE] |
| CFA not pipeline | CFA v1.0 core rule | Doctrine | [DOCTRINE] |
| Federation export slice | FEDERATION.md; ADR-001 D11 | Doctrine | [DOCTRINE] |
| Export forbidden fields | FEDERATION.md § Not Observation | Doctrine | [DOCTRINE] |
| Knowledge Concept = synthesis | CEAR Part 1 P1-5; CDIA PR-1 | Review | [PROPOSAL] |
| Learner Graph = synthesis | CEAR Part 4 P4-2; CDIA PR-2 | Review | [PROPOSAL] |
| Learning Frontier = synthesis | CEAR Part 5 P5-1; CDIA PR-3, SI-4 | Review | [PROPOSAL] |
| Opening tree = runtime corpus | `src/data/openings.ts`; LEF-2C | Runtime | [RUNTIME] |
| No knowledge types in src | CEAR Part 1 runtime | Runtime | [RUNTIME GAP] |
| Buddy = domain mentor | CB-004; CDIA SD-15 | Doctrine | [DOCTRINE] |
| Laris dormant | CG-002; FDP-002 | Doctrine | [DOCTRINE] |
| LOE lineage requirements | CG-FLL-1E I-1, Part V–VI | Doctrine | [DOCTRINE] |
| LOE schema deferred | ADR-001 D10 | ADR | [DOCTRINE] |
| LearningJourney = LLD alias | ADR-001 D1; CLOR P1-3 | ADR + Review | [DOCTRINE] |
| KnowledgeService intent | LLD Part VIII | LLD | [LLD] |
| ADR-002 follows ADR-001 | ADR-001 Unlocked downstream; CDIA SI-10 | ADR + Review | [INFERENCE] |

---

## 12. Explicit downstream ADRs

ADR-002 scope **ends** at semantic reference boundary. The following are **distinct future ADRs** — not part of ADR-002 acceptance:

| ADR | Title (candidate) | Decides | Depends on ADR-002 |
|-----|-------------------|---------|-------------------|
| **ADR-003** | LOE/DOE Evidence Record Schema | Record shape, inline vs sidecar, evidence_refs, chain stage fields | Q6 reference targets; custody boundary |
| **ADR-004** | Stewardship and Transformation Claim Gate | C0–C4, LOE-011, replay verdict, claim lineage | Custody vs claim; no frontier persist |
| **ADR-005** | DecisionTrace / per-ply reasoning | Ply-level DecisionRecord, seal semantics, engine adjacency | Episode custody; optional corpus_ref |
| **ADR-006** | Buddy Pedagogical Use of Reference Model | When Buddy may surface frontier, hints, focus contracts; anti-patterns | Q8 permitted/forbidden use |
| **Future** | LARIS Read Boundary | What Laris may read from ChessGuide export vs sovereign store | **Only if** pedagogically accepted first; not activated in ADR-002 |
| **Future** | Corpus Versioning and Migration | corpus_ref stability when opening tree changes | AN-2 immutability vs corpus drift |
| **Future** | Chunk Architecture governance v1 | Cognitive/Narrative chunk — CLOR candidate | Explicitly **not** ADR-002; CDIA excluded from ADR-001 |

**Sequencing recommendation:** ADR-002 Accepted → ADR-003 → ADR-004 → ADR-005 / ADR-006 (order of 005/006 may parallel after 003–004).

---

## Related documents

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CB-002 — Longitudinal Skill Development Domain](../chessbuddy/CB-002-longitudinal-skill-development-domain.md)
- [CB-004 — Buddy Persona & Product Principles](../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CG-002 — Federation Relationship](../chessguide/CG-002-federation-relationship.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — First Domain Learning Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CFA v1.0](../federation/CFA-v1.0.md)
- [FDP-002 — Federation Development Strategy](../federation/FDP-002-federation-development-strategy.md)
- [LEF-0E — Integration Theory](../federation/studies/LEF-0E-integration-theory.md)
- [LEF-2C — Runtime Observability Study](../federation/studies/LEF-2C-runtime-observability-study.md)
- [FEDERATION.md](../../FEDERATION.md)
- [ChessGuide Epistemic Architecture Review v1.0](../../reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md)
- [ChessGuide Learning Ontology Review v1.0](../../reviews/ChessGuide-Learning-Ontology-Review-v1.0.md)
- [ChessGuide Discovery Integration Assessment v1.0](../../reviews/ChessGuide-Discovery-Integration-Assessment-v1.0.md)
