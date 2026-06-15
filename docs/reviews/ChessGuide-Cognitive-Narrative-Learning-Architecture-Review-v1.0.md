# ChessGuide Cognitive & Narrative Learning Architecture Review v1.0

| Field | Value |
|-------|-------|
| **Review ID** | CCNLAR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `review/cognitive-narrative-learning-v1` |
| **Continues from** | Repository Review Baseline (2026-06-06), Strategic Review v1.0, [ChessGuide Epistemic Architecture Review v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md) |
| **Scope** | Cognitive and narrative learning theory — no implementation |

---

## Repository State (opening)

| Item | Value |
|------|-------|
| **Branch at start** | `review/epistemic-architecture-v1` @ `74743d6` |
| **Branch for review** | `review/cognitive-narrative-learning-v1` |
| **Working tree** | Clean |
| **Recent commits** | `74743d6` epistemic review SHA fix, `a6a6c39` epistemic phase-7, `bd5f589` LLD v1.0 |
| **ADRs in repo** | None |

```bash
git status    # clean
git branch    # review/cognitive-narrative-learning-v1 (from epistemic review tip)
git log --oneline -20  # see table above
```

---

## Core Question

> What transforms an observed chess event into durable learner understanding?

**Doctrine answer (synthesized):** [DOCTRINE] An observed chess event becomes durable understanding when it is **attended**, **integrated** into prior structures, and **validated** through transformed capability — not when it is merely recorded. Recording lives in **LearningTrace**; understanding lives in **integration** (CG-FLL-002, LEF-0E).

---

# Part 1 — Learning Science Review

## Repository State (Phase 1)

Committed: `review: phase-1 learning science review`

## Evidence Reviewed

CG-FLL-002, CG-FLL-003, CG-FLL-001, CB-000, CB-004, CB-006, LEF-0E, LEF-1D, LEF-1C, LEF-1E, CFA-v1.0, CEAR-v1.0.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Integration, simulation, continuity, chain |
| `docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md` | Expertise, repetition, mastery horizon |
| `docs/governance/chessguide/CG-FLL-001-first-domain-learning-pilot.md` | Goals, observation targets |
| `docs/governance/federation/studies/LEF-1D-flow-and-optimal-traversal-hypothesis.md` | Flow mapping |
| `docs/governance/federation/studies/LEF-1E-capability-conditions-hypothesis.md` | Conditions bundle |
| `docs/governance/federation/CFA-v1.0.md` | Capability formation ladder |
| `docs/reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md` | Prior synthesis |

## Doctrine Sources

CG-FLL-002 (primary), LEF-0E, LEF-1D, CB-004, CB-006.

## Runtime Sources

`src/data/game.ts` — legacy episode encoding; no learning-science constructs in code.

## External Literature (informative only — subordinate to doctrine)

| Author | Relevant concept | ChessGuide analogue | Classification |
|--------|------------------|---------------------|----------------|
| **Edwin Locke** | Goal setting, goal-directed attention | `focus_contract` anchors (CB-005 AN-3); pilot learning goals (CG-FLL-001 baseline) | [DOCTRINE ALIGNED] partial |
| **Carol Dweck** | Growth mindset, effort attribution | Engagement hypotheses H6/H7; no mindset ontology | [NEW INSIGHT] gap — not in repo |
| **Cal Newport** | Deep work, sustained attention | Training Live mode; attention log; proportionality (CB-004/006) | [DOCTRINE ALIGNED] partial |
| **Barbara Oakley** | Chunking, focused/diffuse modes | Expert compression Observation→Knowledge (CG-FLL-002); **no chunk type** | [NEW INSIGHT] fills gap |
| **Josh Waitzkin** | Deliberate practice, decompression, pattern internalization | Simulation (CG-FLL-002 H3); implicit integration (LEF-0E); Practice mode from trace | [DOCTRINE ALIGNED] partial |
| **Mihaly Csikszentmihalyi** | Flow state | LEF-1D: **not** epistemic primitive; Capability Conditions bundle | [DOCTRINE ALIGNED] reinterpreted |
| **Joshua Foer** | Narrative/mnemonic memory structures | Reflection narratives (CB-005); **no mnemonic chunk doctrine** | [NEW INSIGHT] gap |

## ChessGuide Learning Science Alignment Review

### Alignments [DOCTRINE ALIGNED]

| # | Finding | Source | Confidence |
|---|---------|--------|------------|
| LS-1 | **Integration** is central mechanism — not exposure alone | CG-FLL-002 H4, H8 | High |
| LS-2 | **Continuity** over intensity for mastery horizon | CG-FLL-002 H6; LEF-1C | High |
| LS-3 | **Simulation** as first-class learning (mental rehearsal) | CG-FLL-002 H3 | High |
| LS-4 | **Expert compression** = shortened observation→knowledge path | CG-FLL-002, CG-FLL-003 | High |
| LS-5 | **Attention** is explicit chain stage; OAT separates raw observation | CB-000 I-6, chain | High |
| LS-6 | **Mentorship** accelerates integration | CG-FLL-002; CB-004 Buddy | High |
| LS-7 | **Flow** useful only as shorthand for aligned Capability Conditions | LEF-1D, LEF-1E | Medium |
| LS-8 | **Deliberate practice** analogue = Training Live + Practice from anchors | CB-006 | Medium |

### Conflicts [DOCTRINE CONFLICT]

| # | External claim | Doctrine counter | Resolution |
|---|----------------|------------------|------------|
| LS-C1 | Flow as primary learning state | Activity ≠ learning; Friendly Live "flow" = social rhythm (LEF-1D C-1D-1) | **Hold doctrine** — Flow is enactment quality, not learning proof |
| LS-C2 | Mindset alone drives learning | Transformation requires integration + evidence (CG-FLL-002) | **Hold doctrine** — motivation is amplifier (LEF-1A), not proof |
| LS-C3 | Chunking as storage primitive | Knowledge is resource; learning is integration (CG-FLL-002) | **Reconcile** — chunks may be *integration products*, not knowledge synonyms |

### Gaps filled by external literature [NEW INSIGHT]

| # | Gap | Literature contribution | Repo status |
|---|-----|----------------------|-------------|
| LS-N1 | No **chunk** ontology | Oakley, Waitzkin pattern compression | Pattern (LOE-002) only |
| LS-N2 | No **narrative memory** doctrine | Foer; story structures for retention | Reflection narrative only (LEF-0C) |
| LS-N3 | No **growth mindset** construct | Dweck | Engagement listed, not mindset |
| LS-N4 | No **learning opportunity** entity | Crow epistemology (candidate) | Attention exists; opportunity absent |

### Open Questions [OPEN QUESTION]

| ID | Question |
|----|----------|
| OQ-LS1 | Should chunking be governance vocabulary or remain implicit in expert compression? |
| OQ-LS2 | Does growth mindset belong in Capability Conditions or stay external? |
| OQ-LS3 | Can external learning science inform ADR-001 without becoming ontology? |

## Conclusions (Phase 1)

| # | Conclusion | Class |
|---|------------|-------|
| P1-1 | ChessGuide doctrine **already encodes** integration-centric learning science (Locke partial, Waitzkin partial, Csikszentmihalyi reinterpreted) | [DOCTRINE ALIGNED] |
| P1-2 | **Chunking and narrative memory** are the largest **unformalized** cognitive contributions | [NEW INSIGHT] |
| P1-3 | External literature **may inform** architecture but **must not override** CG-FLL-002 integration theory | [DOCTRINE] per review mandate |
| P1-4 | Complete theory of learning **before ADR-001** requires chunk/narrative clarification | [INFERENCE] |

---

# Part 2 — Chunk Architecture Review

## Repository State (Phase 2)

Committed: `review: phase-2 chunk architecture review`

## Evidence Reviewed

CB-005, CB-000, CB-002, CG-FLL-002, CG-FLL-1E, CFA-v1.0, LEF-0E, LEF-1B, CEAR-v1.0 Part 1.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Knowledge refs, anchors, position_class |
| `docs/governance/chessbuddy/CB-002-longitudinal-skill-development-domain.md` | ChessKnowledge, transferable pattern |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Encoding, Memory, patterns |
| `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` | LOE-002 Pattern Recognition |
| `docs/governance/federation/CFA-v1.0.md` | Implicit integration, compression |
| `src/data/openings.ts` | Embedded knowledge corpus (runtime) |

## Doctrine Sources

CB-005, CG-FLL-002, LOE-002 (via CG-FLL-1E), LEF-0E implicit integration.

## Runtime Sources

`openings.ts` — hierarchical opening labels as knowledge corpus; no chunk model.

## Term distinctions [DOCTRINE + INFERENCE]

| Term | Repository status | Role | Class |
|------|-------------------|------|-------|
| **Knowledge Concept** | CEAR synthesis; not repo type | Referencable semantic unit (opening, principle) | [INFERENCE] |
| **Pattern** | LOE-002; anchor `position_class`; observation capacity | Recurring structure across episodes | [DOCTRINE] |
| **Chunk** | **Absent** | — | [NEW INSIGHT] |
| **Skill** | LSDD actionable competence (CB-002) | Integration outcome in domain | [DOCTRINE] |
| **Capability** | CFA durable capacity | Post-integration, steward-gated claims | [DOCTRINE] |

## Chunk Architecture v1 [PROPOSAL — doctrine-grounded]

### Cognitive Chunk

> A **Cognitive Chunk** is a **compressed, retrievable mental structure** that binds multiple chess features into one executable unit — enabling rapid recognition and action without full conscious decomposition.

**Examples (illustrative):** Back Rank Mate, Fork, Lucena, Opposition.

**Doctrine mapping:**

| Chunk property | Nearest repo construct | Gap |
|--------------|------------------------|-----|
| Compression | Expert compression Observation→Knowledge (CG-FLL-002) | Implicit, not typed |
| Multiple features → one unit | LOE-002 pattern recognition | Event type, not structure |
| Retrieval speed | Recall path (CG-FLL-002) | Distinct from integration |
| Durability | Integration required (H4) | Chunk ≠ stored until integrated |

**[INFERENCE]** Cognitive chunks are **integration products** sitting between **Pattern** (observable recurrence) and **Capability** (durable enactment).

### Narrative Chunk

> A **Narrative Chunk** is a **memorable story scaffold** that binds a chess situation to human-meaningful roles — enabling retention and transfer through episodic memory, not only pattern frequency.

**Examples (illustrative):** The Trapped King, The Knight Ambush, The Last Defender, The Silent Weakness.

**Doctrine mapping:**

| Narrative property | Nearest repo construct | Gap |
|--------------------|------------------------|-----|
| Story structure | `reflection.recorded` (CB-005) | Learner prose, not schema |
| Explanation binding | ExplanationArtifact P1 (LEF-0D) | Causal why, not narrative arc |
| Buddy teaching | Illuminate → Explain → Connect (CB-004) | Pedagogical, not memory architecture |
| Scene extraction | Practice mode from anchors (CB-006) | Episode slice, not narrative scene |

**[INFERENCE]** Narrative chunks are **orthogonal** to Cognitive Chunks — same position may have both.

### Composition rules [PROPOSAL]

| Question | Answer | Class |
|----------|--------|-------|
| Can multiple concepts belong to one chunk? | **Yes** — e.g. Lucena = king opposition + rook placement + winning technique | [INFERENCE] |
| Can one concept belong to multiple chunks? | **Yes** — opposition appears in Lucena, Philidor, endgame technique chunks | [INFERENCE] |
| Are chunks closer to human memory than concepts? | **Yes** — concepts are referencable units; chunks are **operational memory structures** | [NEW INSIGHT] |
| Are chunks Knowledge? | **No** — knowledge is resource; chunk is **integrated structure** (CG-FLL-002) | [DOCTRINE ALIGNED] |

### Does ChessGuide require formal chunk modeling?

| Criterion | Verdict | Class |
|-----------|---------|-------|
| Doctrine completeness without chunks | **Partial** — expert compression covers limit case | [INFERENCE] |
| Pedagogy completeness without chunks | **Weak** — Buddy explains patterns, not chunk formation | [INFERENCE] |
| ADR-001 dependency | **Likely** — Episode schema must know what gets integrated | [INFERENCE] |
| Runtime today | **No chunk witness** | [RUNTIME] |

**Verdict:** Formal chunk modeling is **not doctrine today** but **fills a gap** between Pattern and Capability that expert compression alone does not name.

## Conclusions (Phase 2)

| # | Conclusion | Class |
|---|------------|-------|
| P2-1 | **Chunk** is absent from repository vocabulary | [DOCTRINE] absent |
| P2-2 | **Pattern** and **expert compression** are partial chunk analogues | [DOCTRINE ALIGNED] |
| P2-3 | Cognitive and Narrative chunks are **distinct proposal types** | [PROPOSAL] |
| P2-4 | Chunk Architecture v1 should be **governance proposal**, not runtime schema, before ADR-001 | [INFERENCE] |

## Open Questions (Phase 2)

| ID | Question |
|----|----------|
| OQ-CH1 | Should chunks be LOE event types, graph nodes, or interpretive read models? |
| OQ-CH2 | Does Narrative Chunk require ExplanationArtifact or a separate artefact family? |
| OQ-CH3 | Can opening tree nodes serve as cognitive chunk seeds without new ontology? |
