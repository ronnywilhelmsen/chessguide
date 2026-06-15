# ChessGuide Epistemic Architecture Review v1.0

| Field | Value |
|-------|-------|
| **Review ID** | CEAR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `review/epistemic-architecture-v1` |
| **Continues from** | Repository Review Baseline (2026-06-06), Strategic Review v1.0 |
| **Scope** | Epistemic and architectural doctrine — no implementation |

---

## Repository State (opening)

| Item | Value |
|------|-------|
| **Branch at start** | `feature/fci-5c-federation-export` |
| **Branch for review** | `review/epistemic-architecture-v1` |
| **Working tree** | Clean |
| **Recent commits** | `bd5f589` LLD v1.0, `a028711` CDESR v1.0, `b4850aa` LEF-2C, `cc94501` CFA extract |
| **ADRs in repo** | None |

---

# Part 1 — Knowledge Concept Review

## Repository State (Phase 1)

Committed: `review: phase-1 knowledge concept review`

## Evidence Reviewed

CB-005, CB-000, CB-002, CG-FLL-002, CG-FLL-003, CFA-v1.0, LEF-0E, CDESR v1.0, opening tree (`openings.ts` governance mapping via CB-005 knowledge refs).

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Episode fields, knowledge refs, anchors |
| `docs/governance/chessbuddy/CB-000-federation-alignment.md` | ChessKnowledge, ChessWisdom, I-3 |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Learning vs Knowledge vs Recall |
| `docs/governance/chessbuddy/CB-002-longitudinal-skill-development-domain.md` | LSDD artefact catalogue |
| `docs/governance/federation/CFA-v1.0.md` | Capability Formation tiers |
| `docs/reviews/Canonical-Domain-End-State-Requirements-Review-v1.0-ChessGuide.md` | Canonical objects |

## Doctrine Sources

Primary: CB-000, CB-005, CG-FLL-002. Secondary: CFA, LEF-0E, CDESR.

## Runtime Sources

`src/data/openings.ts` — opening tree as embedded knowledge corpus. No `Knowledge`, `Concept`, or `Skill` types in `src/`.

## Knowledge Concept Model v1

### What is a Knowledge Concept? [INFERENCE]

The repository does **not** define a first-class type named **Knowledge Concept**. [DOCTRINE] The closest authoritative constructs are:

| Construct | Source | Role |
|-----------|--------|------|
| **ChessKnowledge** | CB-000, CB-002 | KF-layer artefact: openings, patterns, consolidated references |
| **Knowledge refs** | CB-005 Episode | Opening IDs matched from tree |
| **Knowledge (chain stage)** | CB-000A | Consolidated stable knowledge in federation chain |
| **LOE-003/004** | CG-FLL-1E | Recall and recall accessibility — knowledge *use*, not storage |

**Knowledge Concept Model v1 (synthesized, not a repo type name):**

> A **Knowledge Concept** is a **referencable chess semantic unit** (opening line, pattern label, principle, position class) that can be **anchored** in a LearningTrace and **invoked** during play or study — distinct from **learning** (integration process) and **wisdom** (normative guidance).

### Distinctions [DOCTRINE + INFERENCE]

| Term | Repository definition | Classification |
|------|----------------------|----------------|
| **Concept** | Not named; implied by opening labels, anchors (`position_class`) | [INFERENCE] Subset of ChessKnowledge |
| **Pattern** | LOE-002 Pattern Recognition; CB-005 anchor type; CG-FLL-002 observation capacity | [DOCTRINE] Recurring structure across episodes |
| **Skill** | LSDD: actionable competence through practice (CB-002) | [DOCTRINE] Domain outcome of integration |
| **Capability** | CFA: durable capacity after integration + conditions (CFA-v1.0) | [DOCTRINE] Broader than single skill episode |
| **Episode** | One completed game or exercise unit (CB-005) | [DOCTRINE] Bounded evidence container |

| Pair | Distinction | Source |
|------|-----------|--------|
| Concept vs Pattern | Pattern is recurrence across time; concept is referencable unit | LOE-002, AN-4 [DOCTRINE] |
| Skill vs Capability | Skill = chess competence; Capability = CFA yield after integration | CB-002, CFA [DOCTRINE] |
| Knowledge vs Learning | Knowledge = resource; Learning = integration achieved | CG-FLL-002 [DOCTRINE] |
| ChessKnowledge vs ChessWisdom | Descriptive vs normative (I-3 CB-000) | CB-000 [DOCTRINE] |

### Composition rules [INFERENCE from doctrine]

| Operation | Supported? | Evidence |
|-----------|------------|----------|
| **Contain concepts** | Yes — opening tree hierarchy (`San.children`) | `openings.ts` [RUNTIME]; CB-005 knowledge refs [DOCTRINE] |
| **Require concepts** | Yes — LOE-011 requires prior events from chain stages | CG-FLL-1E [DOCTRINE] |
| **Compose concepts** | Partial — anchors link episodes; no compose algebra defined | AN-4 [DOCTRINE] |
| **Generalize concepts** | Partial — LOE-002 cross-position; expert compression | CG-FLL-002, LEF-0E [DOCTRINE] |

## Conclusions (Phase 1)

| # | Conclusion | Class |
|---|------------|-------|
| P1-1 | Repository lacks a formal **Knowledge Concept** type name | [DOCTRINE] |
| P1-2 | **ChessKnowledge** + **knowledge refs** + **anchors** are the authoritative knowledge representation | [DOCTRINE] |
| P1-3 | **Learning ≠ Knowledge** is non-negotiable in governance | [DOCTRINE] |
| P1-4 | Opening tree is the only runtime knowledge structure | [RUNTIME] |
| P1-5 | Knowledge Concept Model v1 is a **synthesis label** for review, not repo vocabulary | [INFERENCE] |

## Open Questions (Phase 1)

| ID | Question |
|----|----------|
| OQ-K1 | Should Knowledge Concept become a named CB-005/CG type or remain implicit in anchors + refs? |
| OQ-K2 | Endgame concepts — CB-002 catalogue gap; no doctrine corpus |

---

# Part 2 — Evidence Theory Review

## Repository State (Phase 2)

Committed: `review: phase-2 evidence theory review`

## Evidence Reviewed

CB-005, CG-FLL-001/1E, LEF-0A–0E, LEF-2C, CFA-v1.0, ALP-1, FEDERATION.md, CB-000A chain rule.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Events, IM-1, stewardship |
| `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` | LOE-001–011, DOE, I-1/I-2/I-3 |
| `docs/governance/federation/studies/LEF-0A-architectural-interpretation-validation.md` | LearningTrace role |
| `docs/governance/federation/studies/LEF-0E-integration-theory.md` | Evidence vs integration |
| `docs/governance/federation/studies/LEF-2C-runtime-observability-study.md` | Observability gaps |
| `FEDERATION.md` | Export boundary |

## Doctrine Sources

CG-FLL-1E (LOE/DOE), CB-000A (lineage), LEF-0E, CFA stewardship tier.

## Runtime Sources

`src/data/game.ts` (episode lines), `src/chessguide/federation/export_v1.py` (forbidden learning fields). No `evidence_refs` in runtime.

## ChessGuide Evidence Theory v1

### Evidence [DOCTRINE]

> **Evidence** is any **time-ordered, anchorable artefact** in a LearningTrace that supports reconstruction, integration assessment, or steward-validated claims — including observations, signals, LOE/DOE records, IM-1 snapshots, and ExplanationArtifact refs.

| Evidence class | Examples | Source |
|----------------|----------|--------|
| **Primary (observational)** | `move.played`, FEN snapshots, clock | CB-005 [DOCTRINE] |
| **Measured** | `move.deviation_from_reference`, `measured.eval_peak` | CB-005 IM-1 [DOCTRINE] |
| **Perceived** | `reflection.recorded`, `perceived.confidence` | CB-005 [DOCTRINE] |
| **Interpretive (LOE)** | LOE-001–010 | CG-FLL-1E [DOCTRINE] |
| **Attested (claim)** | LOE-011 post-C4 | CG-FLL-1E [DOCTRINE] |
| **Federation slice** | Completed game ObservationRecord | FEDERATION.md [DOCTRINE] |

### Evidence strength [INFERENCE from doctrine]

| Strength | Criteria | Source chain |
|----------|----------|--------------|
| **Strong** | Measured + replay reconstructable + steward-attested | CB-000A, CG-FLL-1E [DOCTRINE] |
| **Moderate** | LOE with anchors + cross-episode comparison | LOE-004 [DOCTRINE] |
| **Weak** | Activity-tagged only (`activity.move`) | I-3 [DOCTRINE] |
| **Insufficient for claim** | Outcome luck without integration LOE | LEF-1C Case A [DOCTRINE] |

### Evidence weakness [DOCTRINE]

- Activity conflated with learning (I-3 violation)
- Perceived without measured lane (IM-1 gap discipline)
- Single-episode transformation spike (CB-000A episodic vs longitudinal)
- Engine CP alone as learning proof (PI-5, R-2 CB-000)

### Evidence decay [OPEN QUESTION]

Repository does **not** define temporal decay of evidence weight. [DOCTRINE] Continuity semantics (CG-FLL-003) imply **older evidence remains in trace** but **integration relevance** may diminish — not formalized.

### Evidence contradiction [DOCTRINE]

| Mechanism | Source |
|-----------|--------|
| IM-1 measured vs perceived divergence | CB-005 [DOCTRINE] |
| DOE-003 Contradiction Identified | CG-FLL-1E [DOCTRINE] |
| Steward challenge DOE-007 | CG-FLL-1E [DOCTRINE] |
| ALP-3 cross-artifact contradiction resolution | ALP-3 [DOCTRINE] |

### Evidence inheritance [DOCTRINE]

| Rule | Source |
|------|--------|
| LOE-011 must cite ≥2 prior events from different chain stages | CG-FLL-1E [DOCTRINE] |
| Transformation claims require lineage to Observation | CB-000A chain rule [DOCTRINE] |
| `evidence_refs[]` on ExplanationArtifact | LEF-0C–0D [DOCTRINE] |
| Anchors immutable (AN-2) — inherited by reference | CB-005 [DOCTRINE] |

## Conclusions (Phase 2)

| # | Conclusion | Class |
|---|------------|-------|
| P2-1 | Evidence theory is **well-specified in governance**, **absent in runtime** | [DOCTRINE] + [RUNTIME] |
| P2-2 | Strength is **procedural** (steward + lineage), not numeric scoring | [DOCTRINE] |
| P2-3 | Evidence decay is **undefined** | [OPEN QUESTION] |
| P2-4 | Federation export is **evidence subset only** — not full evidence theory | [DOCTRINE] |

## Open Questions (Phase 2)

| ID | Question |
|----|----------|
| OQ-E1 | Should evidence strength be ordinal (governance) or remain steward-narrative only? |
| OQ-E2 | Decay policy for IM-1 and measured signals over N years? |
