# ADR-003 — LOE/DOE Evidence Record Schema v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-003 |
| **Title** | LOE/DOE Evidence Record Schema v1 |
| **Version** | 1.0 |
| **Status** | Accepted |
| **Date** | 2026-06-06 |
| **Scope** | Governance schema boundary for LOE/DOE Evidence Records (semantic only) |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CG-FLL-1E](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Accepted** — repository governance decision defining the semantic **Evidence Record** boundary for LOE and DOE under learner custody.

This ADR is **governance only**. Acceptance does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- JSON Schema
- SQL
- localStorage
- APIs
- UI
- Storage implementation
- Implementation files

---

## Context

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) establishes **Episode** as the sovereign learner-custody persistence boundary. **LearningTrace** is evidence + custody, not learning. Full LOE/DOE schema was **deferred** in ADR-001; Episode v1 may carry optional opaque `loe_ref` / `doe_ref` only.

[ADR-002](ADR-002-sovereign-reference-model-v1.md) (Accepted) separates **domain corpus**, **learner custody**, and **derived pedagogical views**. **Corpus Reference** and `corpus_ref` are accepted v1 vocabulary. LOE/DOE records **must** reference `episode_id` and **may** reference `event_id`, `anchor_id`, `corpus_ref`, and `evidence_refs[]`. Federation withholding remains strict.

**Doctrine context:**

- **Learning** = integration achieved (CG-FLL-002).
- **Activity is not learning.** Activity may become **evidence** when linked to LOE/DOE or dialogue evidence, but **learning remains integration achieved** (CG-FLL-001 I-3; CG-FLL-002; CG-FLL-1E).
- **LOE-001–011** and **DOE-001–008** catalogues exist in CG-FLL-1E as pilot evidence vocabulary — not runtime types (LEF-2C).
- **CFA** Integration and **Transformation Claim** are separate from raw evidence capture (CFA v1.0; LEF-0E).
- **Federation** exports terminal completed-game `ObservationRecord` only — no learning metadata (FEDERATION.md).

**Runtime gap (LEF-2C):** No LOE/DOE persistence, no `evidence_refs`, no Evidence Record types in `src/`.

### Problem statement

> What is the governance schema boundary for **LOE** and **DOE Evidence Records** — what they are, what they must reference, what they may contain, what they must never contain, and how they relate to Episode custody, Corpus Reference, integration, transformation, and federation — **without** implementing storage or export?

---

## Decision

ChessGuide adopts **LOE/DOE Evidence Record Schema v1** as the governance boundary for learner-custody evidence records that support integration assessment and future stewardship — **not** learning claims, derived state, or federation export.

### D1 — LOE definition

**LOE (Learning Observation Evidence)** — accepted governance vocabulary aligned with the CG-FLL-1E LOE catalogue (LOE-001–010):

- A **bounded observation** that something happened or was demonstrated under learner custody.
- Records **observable evidence** — what was noticed, recalled, explained, simulated, or otherwise registered — at a chain stage (Observation, Understanding, Knowledge, etc.).
- Maps to catalog entries **LOE-001 through LOE-010** (CG-FLL-1E) via `catalog_id` when typed.

**LOE is not:**

- Learning, integration, mastery, or transformation.
- A derived learner state or Learning Frontier object.
- Federation export or corpus custody.

### D2 — DOE definition

**DOE (Demonstrated Observation Evidence)** — accepted governance vocabulary aligned with the CG-FLL-1E DOE catalogue (DOE-001–008):

- A **stronger evidence record** where capability, understanding, or response is **demonstrated under observable conditions** — typically dialogue-mediated (CG-FLL-1E Part III; FDS-001 lineage).
- May **support** later integration assessment and stewardship replay.
- Maps to catalog entries **DOE-001 through DOE-008** via `catalog_id` when typed.

**DOE is not:**

- A transformation claim (LOE-011 / steward attestation — **ADR-004**).
- Learning achieved, mastery, or skill vector.
- LARIS dialogue state or federation export.

**DOE vs LOE:** DOE emphasizes **demonstration under exchange or challenge conditions**; LOE emphasizes **observation registration**. Both remain evidence — not integration.

### D3 — Evidence Record identity

An **Evidence Record** is a learner-custody record in the evidence chain connected to Episode custody and grounding references.

**Accepted model:** One unified **Evidence Record** type with:

- `evidence_type: LOE | DOE`
- `catalog_id` distinguishing LOE-00x and DOE-00x catalogue mappings (e.g. `LOE-009`, `DOE-007`)

**Minimum identity fields (governance level — not JSON Schema):**

| Field | Requirement |
|-------|-------------|
| `evidence_id` | Stable identifier within Actor custody |
| `evidence_type` | `LOE` \| `DOE` |
| `actor_id` | Custody owner (CB-005 Actor) |
| `episode_id` | **Required** — sovereign Episode boundary (ADR-001; ADR-002 D7) |
| `created_at` or `observed_at` | Time ordering for lineage |
| `source_boundary` | What produced the record (learner, steward, tool-assisted, replay-derived) |
| `custody_boundary` | `LearningTrace` under Actor — not federation, not corpus |

**Optional identity extensions (governance):**

- `catalog_id` — e.g. `LOE-009`, `DOE-007` when mapped to CG-FLL-1E
- `chain_stage` — primary federation chain stage (CG-FLL-1E per-event fields)

### D4 — Allowed reference targets and grounding

Every Evidence Record **must** reference:

- **`episode_id`** (required)

Every Evidence Record **should** include **at least one grounding reference** when available:

| Target | Class | Rule |
|--------|-------|------|
| `event_id` | Learner custody | Atomic Episode event (move, signal) |
| `anchor_id` | Learner custody | ChessAnchor per ADR-001 AN-1–4 |
| `corpus_ref` | Semantic domain reference | Corpus Reference per ADR-002 D5 — **not** evidence custody |
| `evidence_refs[]` | Lineage | Prior Evidence Record IDs — **ordered, append-oriented list** forming lineage, not a graph database |

**Grounding rules:**

- **Free text alone is never sufficient** for evidence lineage.
- When only `episode_id` is available, the record **must** carry an explicit **`limitations`** note explaining missing grounding (CG-FLL-1E: anchor required for LOE when capturable).
- `corpus_ref` points to domain corpus; it does **not** copy corpus into learner custody as learned knowledge (ADR-002 D2, D8).
- `evidence_refs[]` is **ordered**; evidence lineage is **append-oriented** and governed by **append-only principle** (aligned with ADR-001 custody spirit). Exact implementation mechanics are deferred.

### D5 — Evidence payload minimum

**Minimum conceptual payload** (governance — not wire format):

| Field | Purpose |
|-------|---------|
| `observation_summary` | Bounded description of what was observed or demonstrated |
| `observed_action` or `observed_response` | What the learner did, said, or demonstrated |
| `context` | Episode-local context (position, phase, mode — semantic) |
| `conditions` | Capability conditions under which evidence was captured (CB-006 / CFA envelope — reference only) |
| `corpus_ref` (optional) | Evidence *about* a Corpus Reference unit |
| `evaluator` / `source` (optional) | learner \| steward \| tool-assisted (CG-FLL-1E provenance) |
| `confidence` or `quality_flag` (optional) | See `quality_flag` rules below |
| `limitations` (optional) | Known gaps, IM-1 perceived-only, single-episode caveats; **required** when grounding refs are incomplete (D4) |

Aligns with CG-FLL-1E per-event minimum: Event ID, Episode ID, timestamp, type, chain stage, anchor, provenance, free-text evidence.

**`quality_flag` rules (anti-pattern guard):**

- `quality_flag` is **not** a score.
- `quality_flag` is **not** mastery.
- `quality_flag` is **not** ranking.
- `quality_flag` is **not** integration evidence by itself.
- It may only mark **evidence quality**, **provenance confidence**, or **limitation** — steward-safe ordinal or narrative label only.

Concrete `quality_flag` vocabulary is **deferred** (OQ-003-3).

### D6 — Forbidden fields / anti-patterns

Evidence Records **must not** directly store or assert:

| Forbidden | Rationale |
|-----------|-----------|
| `mastery` | Mastery Horizon is CFA label — not evidence field |
| `learning_achieved` / `integration_achieved` | Learning = integration achieved (CG-FLL-002) — separate process |
| `transformation_achieved` | Transformation Claim — ADR-004 |
| `skill_vector` / Elo-only reduction | ADR-001/002 exclusion; CB-002 R-2 |
| `learning_frontier` | Derived read model — ADR-002 D4 |
| `learner_state` | Derived read model — ADR-002 D3 |
| `ranking` / `score_as_doctrine` | Activity is not learning; no opaque scores without lineage |
| `quality_flag` misused as score/mastery/ranking | D5 rules — quality marker only |
| `engine_decree` / raw CP as learning proof | CB-000 PI-5; ChessWisdom ≠ measured alone |
| `coach_authority` | Buddy pedagogical — ADR-006 |
| `federation_export_metadata` | FEDERATION.md boundary |
| `laris_dialogue_state` | LARIS dormant — CG-002 |
| `graph_traversal_state` | No graph DB in v1 |

**Anti-pattern:** Using LOE/DOE type labels as proof of learning without lineage and stewardship (CG-FLL-1E I-1, I-3).

### D7 — Relationship to integration and transformation

| Principle | Rule |
|-----------|------|
| **Learning** | Integration achieved — **doctrine unchanged** (CG-FLL-002) |
| **LOE/DOE role** | May **support** later integration assessment; do **not** prove integration |
| **Implicit integration** | May occur without explicit LOE surface (LEF-0E) — absence of LOE ≠ no learning |
| **Transformation Claim** | **ADR-004** — LOE-011, C0–C4, steward sign-off (CG-FLL-1E I-1, I-2) |
| **Lineage** | No transformation claim without lineage and stewardship; LOE-011 requires ≥2 prior events from different chain stages (CG-FLL-1E) |

**ADR-003 scope:** Evidence Record shape for LOE and DOE catalog types **LOE-001–010** and **DOE-001–008**.

**ADR-004 scope:** LOE-011, steward checkpoints, Transformation Claim gate, attestation workflow.

### D8 — Relationship to Corpus Reference

- Evidence Records **may** include `corpus_ref` — “evidence about this reference unit.”
- `corpus_ref` is semantic pointer to domain corpus (ADR-002 D5) — **not** learner evidence custody.
- **Corpus snapshots** in payload require explicit provenance (`source=corpus_snapshot`); snapshots are **not** sovereign learning evidence (ADR-002 D2). Policy beyond this provenance rule is **deferred** (OQ-003-6).
- Anchors with `corpus_ref` (ADR-002 D6) and Evidence Records with `corpus_ref` are complementary — anchor immutability AN-2 applies to anchors, not corpus versions.

### D9 — Relationship to federation

- LOE/DOE Evidence Records **must not** cross federation export (FEDERATION.md; ADR-001 D11; ADR-002 D8).
- No LOE/DOE records, `corpus_ref`, learning metadata, derived state, `evidence_refs[]`, or transformation content in `ObservationRecord`.
- ADR-003 **does not modify** federation export or `export_v1`.

### D10 — Storage and implementation boundary

ADR-003 defines **governance schema boundary only**.

**Explicitly out of this ADR:**

- JSON Schema, SQL, localStorage keys
- Runtime changes (`src/`)
- Tests, APIs, UI
- Graph database, traversal service
- Inline-vs-sidecar storage placement (deferred — OQ-003-7)

Future concrete schema / storage / migration requires governance acceptance of an **implementation phase** ADR after ADR-004.

### D11 — Downstream ADRs

| ADR | Title (candidate) | Scope |
|-----|-------------------|-------|
| **ADR-004** | Stewardship and Transformation Claim Gate | C0–C4, LOE-011, replay verdict, steward attestation, claim lineage |
| **ADR-005** | DecisionTrace / per-ply reasoning | Ply-level reasoning records; engine adjacency |
| **ADR-006** | Buddy Pedagogical Use of Reference Model | Frontier surfacing, hints, non-authoritative pedagogy |
| **Future** | Concrete schema / storage / migration | Wire format, inline vs sidecar, persistence — **only after** ADR-004 acceptance and explicit implementation phase |

**Sequencing:** ADR-003 Accepted → ADR-004 → ADR-005 / ADR-006 → implementation phase ADR.

### Semantic placement

```text
Domain Corpus (corpus_ref — read only)
        │
        ▼
Episode custody (ADR-001) ──► Event / Anchor
        │
        ▼
Evidence Record (LOE | DOE) ── evidence_refs[] ──► prior Evidence Records
        │
        ▼ (interpretation — not in ADR-003 persist)
Integration assessment · Longitudinal Path · Learning Frontier (read models)
        │
        ▼ (ADR-004)
Transformation Claim (steward-gated)

Federation: terminal Episode only → ObservationRecord (no LOE/DOE)
```

---

## In scope

1. LOE and DOE governance definitions (D1, D2).
2. Unified Evidence Record identity (D3).
3. Reference targets and grounding rules (D4).
4. Minimum conceptual payload (D5).
5. Forbidden fields and anti-patterns (D6).
6. Boundary vs integration, transformation, Corpus Reference, federation (D7–D9).
7. Implementation exclusion (D10).
8. Downstream ADR sequencing (D11).
9. Mapping to CG-FLL-1E LOE-001–010 and DOE-001–008 catalog.

---

## Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Runtime / `src/`** | Governance only |
| **Tests** | Not in scope |
| **Federation export changes** | ADR-001/002 locked; D9 |
| **JSON Schema, SQL, localStorage** | D10 |
| **LOE-011 / Transformation Claim workflow** | ADR-004 |
| **Stewardship C0–C4 mechanics** | ADR-004 |
| **DecisionTrace per ply** | ADR-005 |
| **Buddy orchestration** | ADR-006 |
| **Learning Frontier / learner state persistence** | ADR-002 derived views |
| **Graph DB / traversal API** | ADR-002 |
| **LARIS activation** | FDP-002 |
| **Activity tag schema** (`activity.*`) | Deferred (OQ-003-9) |
| **ExplanationArtifact record shape** | LEF-0C/0D; orthogonal to LOE/DOE |
| **IM-1 full field schema** | CB-005 semantic; optional on Evidence Record |
| **Concrete `quality_flag` vocabulary** | Deferred (OQ-003-3) |
| **Inline vs sidecar storage** | Deferred (OQ-003-7) |

---

## Alternatives considered

### Alt-1 — Unified `EvidenceRecord` with `evidence_type` enum

**Pros:** One type, simpler custody model; `catalog_id` preserves LOE/DOE catalogue distinction.  
**Cons:** LOE and DOE have distinct catalog semantics and dialogue role (CG-FLL-1E).  
**Accepted** — unified Evidence Record with `evidence_type: LOE | DOE` and `catalog_id` (D3).

### Alt-2 — LOE/DOE inline-only inside Episode blob

**Pros:** Matches legacy episode string simplicity.  
**Cons:** Rejected by ADR-001 D10; conflates observation custody with claim lineage.  
**Rejected** — governance defines record boundary; storage placement deferred.

### Alt-3 — LOE/DOE as federation-exportable metadata

**Pros:** Cross-domain learning visibility.  
**Cons:** Violates FEDERATION.md; ChessGuide retains learning.  
**Rejected** (D9).

### Alt-4 — Include LOE-011 in ADR-003 as ordinary LOE

**Pros:** Single catalogue.  
**Cons:** LOE-011 is steward-gated transformation evidence — claim tier (CG-FLL-1E I-1, I-2).  
**Rejected** — LOE-011 and attestation in **ADR-004**.

### Alt-5 — Evidence strength as numeric score

**Pros:** Machine comparison.  
**Cons:** CEAR: strength is procedural/steward-narrative; CB-002 warns Elo-only.  
**Rejected** — optional `quality_flag` with D5 anti-patterns only.

### Alt-6 — evidence_refs[] as graph edges

**Pros:** Rich lineage queries.  
**Cons:** ADR-002: lineage is ordered refs, not graph DB.  
**Rejected** — ordered, append-oriented ref list (D4).

### Alt-7 — Separate LOE and DOE record types (no unified Evidence Record)

**Pros:** Hard type separation at storage layer.  
**Cons:** Duplicates identity and grounding rules; ADR-002 D7 already allows shared reference targets.  
**Rejected** — unified Evidence Record with `evidence_type` (D3).

---

## Consequences

### Positive

- Completes ADR-001 (Episode) → ADR-002 (reference model) → ADR-003 (evidence records).
- Enables pilot-aligned LOE/DOE capture design without conflating evidence and learning.
- Preserves federation export boundary.
- Gives ADR-004 a clear input: Evidence Records with ordered lineage, not claims.

### Negative / risks

- LOE/DOE acronym expansions are now governance vocabulary — pilot prose may need alignment.
- Inline vs sidecar storage deferred — implementers need post-ADR-004 implementation ADR.
- Runtime gap persists until separate implementation effort (LEF-2C).
- Optional `quality_flag` may be misused without concrete vocabulary — mitigated by D5/D6 until OQ-003-3 resolved.

### Unlocked downstream

| Work | Depends on |
|------|------------|
| ADR-004 Stewardship gate | D7 boundary; LOE-011 |
| ADR-005 DecisionTrace | episode_id + event refs |
| ADR-006 Buddy pedagogy | evidence vs derived views |
| Implementation schema ADR | ADR-003 + ADR-004 Accepted |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-003-1** | DOE expansion in governance glossary? | **Decided:** Demonstrated Observation Evidence (D2) |
| **OQ-003-2** | Separate LOE/DOE types vs unified EvidenceRecord? | **Decided:** unified Evidence Record + `evidence_type` + `catalog_id` (D3) |
| **OQ-003-3** | Minimum `quality_flag` vocabulary? | **Deferred** |
| **OQ-003-4** | Should `evidence_refs[]` be ordered? | **Decided:** yes — ordered lineage (D4) |
| **OQ-003-5** | Evidence lineage append-only? | **Decided:** append-oriented / append-only governance principle (D4); implementation mechanics deferred |
| **OQ-003-6** | Corpus snapshots in payload vs `corpus_ref` link only? | **Deferred** — provenance rule in D8; policy beyond that open |
| **OQ-003-7** | Inline vs sidecar storage relative to Episode? | **Deferred** — implementation ADR post ADR-004 |
| **OQ-003-8** | LOE acronym expansion? | **Decided:** Learning Observation Evidence (D1) |
| **OQ-003-9** | Include `activity.*` tags in ADR-003? | **Deferred** — activity is not learning (I-3) |
| **OQ-003-10** | First implementation artifact after ADR-004? | **Deferred** |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Episode custody prerequisite | ADR-001 Accepted | ADR | [DOCTRINE] |
| Reference targets | ADR-002 D7 Accepted | ADR | [DOCTRINE] |
| LOE/DOE deferred from ADR-001 | ADR-001 D10 | ADR | [DOCTRINE] |
| LOE = Learning Observation Evidence | ADR-003 D1 | ADR | [ACCEPTED] |
| DOE = Demonstrated Observation Evidence | ADR-003 D2 | ADR | [ACCEPTED] |
| Unified Evidence Record | ADR-003 D3 | ADR | [ACCEPTED] |
| Ordered append-oriented lineage | ADR-003 D4 | ADR | [ACCEPTED] |
| LOE-001–011 catalogue | CG-FLL-1E Part II | Doctrine | [DOCTRINE] |
| DOE-001–008 catalogue | CG-FLL-1E Part III | Doctrine | [DOCTRINE] |
| Per-event minimum fields | CG-FLL-1E L189–201 | Doctrine | [DOCTRINE] |
| I-1/I-2/I-3 invariants | CG-FLL-1E; CG-FLL-001 | Doctrine | [DOCTRINE] |
| Learning ≠ trace | LEF-0E; CG-FLL-002 | Doctrine | [DOCTRINE] |
| Evidence theory | CEAR Part 2 | Review | [DOCTRINE-aligned] |
| Activity is not learning; evidence ≠ integration | CG-FLL-001 I-3; CG-FLL-002 | Doctrine | [DOCTRINE] |
| Federation withholding | FEDERATION.md; ADR-002 D8 | Doctrine | [DOCTRINE] |
| Corpus Reference | ADR-002 D1, D5 | ADR | [DOCTRINE] |
| CFA Integration / Claim | CFA v1.0; LEF-0E | Doctrine | [DOCTRINE] |
| No LOE in runtime | LEF-2C | Study | [RUNTIME GAP] |
| Inline vs sidecar | ADR-001 OQ-ADR3; LEF-0B OQ-B4 | ADR + Study | [DEFERRED] |
| LOE-011 → stewardship | CG-FLL-1E I-1, I-2 | Doctrine | [DOCTRINE] → ADR-004 |
| Discovery sequencing | CDIA; ADR-002 downstream table | Review | [INFERENCE] |

---

## Downstream ADRs

See **D11**. ADR-003 does not subsume ADR-004 stewardship, ADR-005 DecisionTrace, or ADR-006 Buddy pedagogy.

---

## Related documents

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — First Domain Learning Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CFA v1.0](../federation/CFA-v1.0.md)
- [LEF-0E — Integration Theory](../federation/studies/LEF-0E-integration-theory.md)
- [LEF-2C — Runtime Observability Study](../federation/studies/LEF-2C-runtime-observability-study.md)
- [FEDERATION.md](../../FEDERATION.md)
- [ChessGuide Epistemic Architecture Review v1.0](../../reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md)
- [ChessGuide Learning Ontology Review v1.0](../../reviews/ChessGuide-Learning-Ontology-Review-v1.0.md)
- [ChessGuide Discovery Integration Assessment v1.0](../../reviews/ChessGuide-Discovery-Integration-Assessment-v1.0.md)
