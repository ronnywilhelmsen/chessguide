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
