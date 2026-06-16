# ADR-002 — Sovereign Reference Model v1: Knowledge Corpus, Learner Custody, and Learning Frontier Boundary

| Field | Value |
|-------|-------|
| **Document ID** | ADR-002 |
| **Title** | Sovereign Reference Model v1: Knowledge Corpus, Learner Custody, and Learning Frontier Boundary |
| **Version** | 1.0 |
| **Status** | Accepted |
| **Date** | 2026-06-06 |
| **Scope** | Semantic reference boundary between domain corpus, learner custody, and derived pedagogical views (governance only) |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CB-002](../chessbuddy/CB-002-longitudinal-skill-development-domain.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Accepted** — repository governance decision. Defines the semantic reference boundary immediately after [ADR-001](ADR-001-learningtrace-episode-schema-v1.md) Episode custody. This ADR is governance only: no runtime, test, federation export, schema, or implementation changes are introduced by its acceptance.

---

## Context

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks the **sovereign Episode persistence boundary**: `LearningTrace` / `Episode` canonical names, optional Session, minimum observation evidence, ChessAnchor AN-1–AN-4, legacy `Game.toString()` adapter, deferred full LOE/DOE schema, and federation projection as a **lossy completed-game slice**.

ChessGuide must now govern how three semantic territories relate:

| Territory | Examples (non-exhaustive) |
|-----------|---------------------------|
| **Domain reference material** | Opening lines, pattern labels, position classes, future endgame/strategic references, focus-contract references, other chess knowledge references |
| **Learner-owned evidence** | `LearningTrace`, `Episode`, `Event`, `ChessAnchor`, optional opaque LOE/DOE refs, future `LearningRecord`s |
| **Derived pedagogical views** | Learner state, integration gaps, Learning Frontier, “what next” guidance |

**Repository Truth Hierarchy:** governance (CG/CB/CFA/LEF/ADR) > committed reviews > LLD/CDESR (design targets) > runtime (legacy).

**Stable doctrine (not reopened by ADR-002):**

- **LearningTrace** = evidence + custody, not learning (LEF-0E; ADR-001).
- **Learning** = integration achieved (CG-FLL-002).
- **Activity** ≠ learning (CG-FLL-001 I-3; CG-FLL-002).
- **CFA** = logical dependency model, not runtime pipeline (CFA v1.0).
- **Federation `ObservationRecord`** = lossy export slice, never sovereign learning custody (ADR-001 D11; FEDERATION.md).
- **LARIS** = federation learning dialogue; dormant — not activated (FDP-002; CG-002).
- **Buddy** = ChessGuide domain mentor (CB-004; CDIA SD-15).

**Pre-ADR proposal terms:** Before this ADR, **Knowledge Concept**, **Learner Graph**, and **Learning Frontier** were review/synthesis terms only (CDIA PR-1–3; CEAR). ADR-002 resolves their governance status below.

**Runtime reality (LEF-2C):** `src/data/openings.ts` is an embedded opening corpus (flat trie); `GameHistory` is legacy Episode custody. No knowledge graph, learner graph, frontier model, or LOE persistence in `src/`.

### Why ADR-002 follows ADR-001

ADR-001 deliberately excluded reference-model decisions so Episode custody could be locked first. ADR-001 unlocked anchor corpus linkage, LOE/DOE reference targets, federation withholding clarity, CFA Longitudinal Path naming, and Buddy longitudinal memory boundaries. Without ADR-002, implementers risk treating corpus as learner evidence, persisting frontier as sovereign state, or exporting learning metadata to federation.

ADR-002 defines a **semantic reference model** — not a graph implementation.

### Problem statement

> How does ChessGuide refer to chess knowledge, record learner evidence, and name integration gaps — while keeping learning sovereign, federation export lossy, and CFA interpretive layers non-persistent in v1?

---

## Decision

ChessGuide adopts **Sovereign Reference Model v1** — a three-territory semantic boundary: **domain corpus**, **learner custody**, and **derived pedagogical views**.

### D1 — Vocabulary

- Adopt **`Corpus Reference`** as the v1 canonical term for referencable domain units.
- Retain **`ChessKnowledge`**, **`knowledge refs`**, and **`ChessAnchor`** as doctrine-compatible constructs (CB-000, CB-002, CB-005).
- **Do not** adopt **`Knowledge Concept`** as a first-class v1 governance type.

### D2 — Corpus vs custody

| Territory | Ownership | Rules |
|-----------|-----------|-------|
| **Domain corpus** | Domain-owned reference material | Openings, patterns, position classes, focus-contract definitions, future endgame/strategic refs |
| **LearningTrace** | Learner-owned evidence custody | Actor → [Session] → Episode → Event per ADR-001 |

- Corpus is **never** appended to LearningTrace **as if learned**.
- **Corpus snapshots** are allowed only with **explicit provenance** (e.g. `source=corpus_snapshot`) and are **not** sovereign learning evidence.
- Referencing corpus from trace (via `corpus_ref` on anchors) is **not** custody transfer.

### D3 — Persistence class

In v1, the following are **derived views / read models** only:

- **Learner state**
- **Learner Graph** (as CB-005 hierarchy alias only — Actor + LearningTrace — not a persisted graph type)
- **Longitudinal Path** (CFA interpretive read model)
- **Learning Frontier** (see D4)

They are **not persisted sovereign aggregates** in v1.

### D4 — Learning Frontier

- Adopt **`Learning Frontier`** only as a **constrained governance term** for a **derived integration-gap view**.
- Definition: corpus references **not yet integrated** by the learner under current observation capacity and enactment conditions (CDIA SI-4; CEAR Part 5 synthesis, now constrained).
- **Anti-patterns:** Learning Frontier is **not** a graph, **not** a stored object, **not** exportable, and **not** evidence by itself.

### D5 — Corpus Reference

- **`corpus_ref`** is a stable **semantic reference** to domain corpus.
- It may identify opening lines, pattern labels, position classes, focus-contract definitions, and future endgame/strategic references.
- It is **not** learner evidence, **not** learned state, and **not** federation export.
- Exact `corpus_ref` format and version pinning are **deferred** (future ADR or ADR-003).

### D6 — Anchors

- ChessAnchor rules AN-1–AN-4 remain per ADR-001.
- Anchors **may** carry `corpus_ref`.
- When an anchor claims to reference domain corpus (types `opening`, `position_class`, `focus_contract`), it **must** use `corpus_ref` rather than free-text-only labels.
- **Move-only** anchors remain valid **without** `corpus_ref`.

### D7 — LOE/DOE reference targets

ADR-002 defines **allowed reference targets only** — not LOE/DOE record schema (ADR-003).

Future LOE/DOE records **must** at minimum be able to reference:

- **`episode_id`** (required minimum)

They **may** additionally reference:

- `event_id`
- `anchor_id`
- `corpus_ref`
- `evidence_refs[]`

No transformation claim without stewardship lineage (CG-FLL-1E I-1). Full LOE/DOE shape is **ADR-003**.

### D8 — Federation withholding

Reaffirm [ADR-001](ADR-001-learningtrace-episode-schema-v1.md) D11 and [FEDERATION.md](../../FEDERATION.md).

**Must not cross federation export:**

- Corpus references and corpus content
- Learner state and Learning Frontier views
- LOE/DOE records and opaque refs
- ChessAnchor lists (beyond move log embedded in game artifact)
- Transformation claims, learning metadata, integration state
- Engine CP, hints, coach messages, reflection, dialogue

**Exported only:** terminal completed-game **ObservationRecord** observation slice.

**`continuity_id`** remains **game-scoped** (`game:{actor_id}:{game_id}`) — **no** corpus reference in federation continuity keys.

### D9 — Buddy use without LARIS

**Permitted:**

- Read corpus references and learner-owned trace evidence to compute derived pedagogical views.
- Surface “what next” guidance as **non-authoritative** derived pedagogy.
- Frame engine input as reference, not decree (CB-004 PP-7).
- Use **ephemeral cache** of derived frontier views if **not** sovereign persistence.

**Forbidden:**

- Activate LARIS or federation learning-dialogue role (CG-002; FDP-002).
- Export or mirror sovereign learning to federation.
- Persist Learning Frontier or learner state as sovereign aggregates.
- Make transformation claims without stewardship gate.

### Semantic model

```text
┌─────────────────────────────────────────────────────────────┐
│  DOMAIN CORPUS (domain-owned reference)                     │
│  Corpus Reference: opening, pattern, position_class,        │
│  focus_contract, future endgame/strategic refs              │
│  NOT learner custody · NOT federation export                │
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
│  Buddy may compute; LARIS not activated                     │
└─────────────────────────────────────────────────────────────┘

Federation export (parallel, lossy): terminal Episode → ObservationRecord only
```

---

## In scope

1. Semantic reference model — corpus, custody, derived views.
2. **Corpus Reference** as v1 canonical vocabulary (D1).
3. Corpus vs LearningTrace custody rules (D2).
4. Persistence class for learner state, Learner Graph alias, Longitudinal Path, Learning Frontier (D3–D4).
5. `corpus_ref` semantic contract (D5).
6. Anchor ↔ `corpus_ref` rules (D6).
7. LOE/DOE allowed reference targets — types only (D7).
8. Federation withholding reaffirmation (D8).
9. Buddy permitted/forbidden use without LARIS (D9).
10. CFA Longitudinal Path as read model; Integration separate from corpus.
11. Explicit downstream ADR boundaries.

---

## Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Runtime refactor** | LEF-2C documents gap; governance only |
| **Tests** | Not requested |
| **Federation export changes** | ADR-001/FEDERATION.md locked |
| **JSON Schema, SQL, localStorage** | CB-005 out of scope |
| **Implementation files** | No `src/` changes |
| **Graph database** | Semantic reference model only |
| **Traversal API** | CB-005 excludes wire formats |
| **Chess Skill Vector** | ADR-001 exclusion; CB-002 R-2 |
| **LARIS activation** | FDP-002; pedagogical decision first |
| **Full LOE/DOE schema** | ADR-003 |
| **Stewardship / Transformation Claim gate** | ADR-004 |
| **DecisionTrace implementation** | ADR-005 |
| **Buddy orchestration implementation** | ADR-006 |
| **Cognitive / narrative chunk persistence** | Future Chunk Architecture ADR |
| **Knowledge Graph / persisted Learner Graph** | Not adopted |
| **LearningJourney as canonical name** | ADR-001 D1 |
| **corpus_ref concrete format** | Deferred |
| **Corpus versioning / migration** | Future ADR |
| **Memory Anchor rename** | CLOR OQ-MEM1 deferred |

---

## Alternatives considered

### Alt-1 — Adopt Knowledge Concept as first-class governance type

**Pros:** Aligns with CEAR synthesis; single umbrella term.  
**Cons:** No doctrine type today; risks conflating ChessKnowledge, refs, and integration.  
**Rejected** — Corpus Reference + doctrine terms (D1).

### Alt-2 — Persist Learning Frontier as sovereign aggregate

**Pros:** Enables “what next” with stable storage.  
**Cons:** Frontier is integration gap, not evidence; violates LearningTrace role.  
**Rejected** — derived read model only (D3, D4).

### Alt-3 — Merge corpus into LearningTrace custody

**Pros:** Simpler storage.  
**Cons:** Violates CB-002; blurs export boundary.  
**Rejected** — corpus vs custody split (D2).

### Alt-4 — Implement reference model as Knowledge Graph

**Pros:** Matches strategic gap-analysis language.  
**Cons:** Graph implementation remains out of scope; no ChessGuide doctrine requires graph storage.  
**Rejected** — semantic model only.

### Alt-5 — Defer Learning Frontier entirely (proposal term only)

**Pros:** No new vocabulary.  
**Cons:** Loses useful pedagogical gap name (CDIA SI-4).  
**Rejected** — constrained adoption (D4).

### Alt-6 — Buddy delegates “what next” to LARIS pre-activation

**Pros:** Federation-aligned guidance.  
**Cons:** Violates CG-002; FDP-002 dormant.  
**Rejected** (D9).

### Alt-7 — LOE/DOE inline-only inside Episode

**Pros:** Simple bundle.  
**Cons:** Rejected by ADR-001 D10; conflates observation and claims.  
**Rejected** — ADR-003 defines schema; D7 defines targets only.

---

## Consequences

### Positive

- Clarifies sovereign reference boundary before LOE/DOE schema (ADR-003).
- Prevents corpus ↔ trace ↔ export conflation.
- Gives anchors a `corpus_ref` contract without graph DB.
- Adopts Learning Frontier safely as derived view — not persisted graph.
- Enables Buddy longitudinal pedagogy within domain mentor role.

### Negative / risks

- **Corpus Reference** adds vocabulary atop ChessKnowledge — glossary discipline required.
- **Read-model-only frontier** requires compute layer for “what next” — no shortcut store.
- **corpus_ref** stability across corpus versions undefined until future ADR.
- Acceptance does not change runtime.
- Learning Frontier may be misread as graph — mitigated by D4 anti-patterns.

### Unlocked downstream

| Work | Depends on |
|------|------------|
| ADR-003 LOE/DOE schema | D7 reference targets |
| ADR-004 Stewardship gate | Custody vs claim |
| ADR-005 DecisionTrace | Episode + corpus_ref |
| ADR-006 Buddy pedagogy | D9 boundaries |
| Corpus versioning ADR | corpus_ref + AN-2 immutability |
| Future LARIS read boundary | Pedagogical acceptance + D8 |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-002-1** | Final v1 term | **Decided:** Corpus Reference (D1) |
| **OQ-002-2** | Knowledge Concept in glossary? | **Decided:** no first-class type in v1 (D1) |
| **OQ-002-3** | Corpus snapshots in trace? | **Decided:** allowed with provenance only; not sovereign evidence (D2) |
| **OQ-002-4** | Learning Frontier adoption? | **Decided:** constrained derived view only (D4) |
| **OQ-002-5** | Persisted Learner Graph? | **Decided:** no in v1 (D3) |
| **OQ-002-6** | `corpus_ref` concrete format | **Deferred** |
| **OQ-002-7** | Corpus version pinning | **Deferred** |
| **OQ-002-8** | Endgame/strategic corpus | **Deferred** — CB-002 catalogue gap |
| **OQ-002-9** | Federation continuity_id + corpus? | **Decided:** game-scoped only (D8) |
| **OQ-002-10** | Buddy ephemeral cache? | **Decided:** allowed if not sovereign persistence (D9) |
| **OQ-002-11** | CLOR Chunk Architecture sequencing | **Resolved:** reference model ADR-002 precedes chunk ADR |
| **OQ-002-12** | Memory Anchor rename | **Deferred** — ChessAnchor retained |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Pre-ADR status | ADR-002 accepted status |
|---------------|------------------|-----------|----------------|-------------------------|
| ADR-001 Episode custody | ADR-001 Accepted | ADR | [DOCTRINE] | Unchanged prerequisite |
| LearningTrace ≠ learning | LEF-0E; ADR-001; CG-FLL-002 | Doctrine | [DOCTRINE] | Unchanged |
| Learning = integration | CG-FLL-002 | Doctrine | [DOCTRINE] | Unchanged |
| Activity ≠ learning | CG-FLL-001 I-3 | Doctrine | [DOCTRINE] | Unchanged |
| ChessKnowledge vs ChessWisdom | CB-000 I-3; CB-002 | Doctrine | [DOCTRINE] | Compatible with Corpus Reference |
| Knowledge refs on Episode | CB-005 | Doctrine | [DOCTRINE] | Maps to corpus_ref via anchors |
| ChessAnchor AN-1–AN-4 | CB-005; ADR-001 D7 | Doctrine | [DOCTRINE] | corpus_ref on corpus-type anchors |
| Longitudinal Path | CFA v1.0 E3 | Doctrine | Read model | Confirmed read model (D3) |
| CFA not pipeline | CFA v1.0 | Doctrine | [DOCTRINE] | Unchanged |
| Federation export slice | FEDERATION.md; ADR-001 D11 | Doctrine | [DOCTRINE] | Withholding extended (D8) |
| **Knowledge Concept** | CEAR P1-5; CDIA PR-1 | Review | **[PROPOSAL]** | **Not adopted** as v1 type (D1) |
| **Learner Graph** | CEAR P4-2; CDIA PR-2 | Review | **[PROPOSAL]** | **Not** persisted graph; hierarchy alias only (D3) |
| **Learning Frontier** | CEAR P5; CDIA PR-3, SI-4 | Review | **[PROPOSAL]** | **Adopted** as constrained derived read-model term only (D4) |
| **Corpus Reference** | ADR-002 D1 (this ADR) | ADR | — | **Accepted** v1 vocabulary |
| Opening tree runtime | `src/data/openings.ts`; LEF-2C | Runtime | [RUNTIME] | Unchanged; not doctrine |
| Buddy domain mentor | CB-004; CDIA SD-15 | Doctrine | [DOCTRINE] | D9 permitted use |
| Laris dormant | CG-002; FDP-002 | Doctrine | [DOCTRINE] | Not activated |
| LOE lineage | CG-FLL-1E I-1 | Doctrine | [DOCTRINE] | D7 targets for ADR-003 |
| LOE schema | ADR-001 D10 | ADR | Deferred | Still ADR-003 |
| ADR-002 follows ADR-001 | ADR-001; CDIA SI-10 | ADR + Review | [INFERENCE] | Accepted sequencing |

---

## Explicit downstream ADRs

| ADR | Title (candidate) | Decides | Depends on ADR-002 |
|-----|-------------------|---------|-------------------|
| **ADR-003** | LOE/DOE Evidence Record Schema | Record shape, inline vs sidecar, evidence_refs, chain stage fields | D7 reference targets |
| **ADR-004** | Stewardship and Transformation Claim Gate | C0–C4, LOE-011, replay verdict, claim lineage | Custody vs claim; no frontier persist |
| **ADR-005** | DecisionTrace / per-ply reasoning | Ply-level DecisionRecord, seal semantics, engine adjacency | Episode custody; corpus_ref |
| **ADR-006** | Buddy Pedagogical Use of Reference Model | Frontier surfacing, hints, focus contracts; anti-patterns | D9 |
| **Future** | LARIS Read Boundary | What Laris may read from export vs sovereign store | Pedagogical acceptance first |
| **Future** | Corpus Versioning and Migration | corpus_ref stability when corpus changes | AN-2 vs corpus drift |
| **Future** | Chunk Architecture governance v1 | Cognitive/Narrative chunk | Not ADR-002 |

**Sequencing:** ADR-002 Accepted → ADR-003 → ADR-004 → ADR-005 / ADR-006 (005/006 may parallel after 003–004).

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
