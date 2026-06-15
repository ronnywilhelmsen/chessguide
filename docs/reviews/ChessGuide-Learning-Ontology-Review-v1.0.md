# ChessGuide Learning Ontology Review v1.0

| Field | Value |
|-------|-------|
| **Review ID** | CLOR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `review/learning-ontology-v1` |
| **Continues from** | Repository Baseline (2026-06-06), Strategic Review v1.0, [CEAR v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md), [CCNLAR v1.0](ChessGuide-Cognitive-Narrative-Learning-Architecture-Review-v1.0.md) |
| **Scope** | Canonical learning ontology — no implementation, no schema, no ADR |

---

## Repository State (opening)

| Item | Value |
|------|-------|
| **Branch at start** | `review/cognitive-narrative-learning-v1` @ `655d0ca` |
| **Branch for review** | `review/learning-ontology-v1` |
| **Working tree** | Clean |
| **Recent commits** | `655d0ca` CCNLAR SHA fix, `c986061` CCNLAR phase-7, `74743d6` CEAR |
| **ADRs in repo** | None |

```bash
git status    # clean
git branch    # review/learning-ontology-v1
git log --oneline -20  # see table above
```

---

## Core Question

> What is the smallest stable unit of understanding inside ChessGuide?

**Interim answer (developed in Parts 3–6):** [INFERENCE] The smallest **stable** unit is not an observation or knowledge reference alone, but an **integrated semantic binding** — operationally nearest to **Understanding artefacts** (ChessReasoning) or explicit **integration-bearing LOE events** — because understanding requires connection to prior structure (CG-FLL-002), not mere possession or recording.

---

# Part 1 — Ontology Inventory

## Repository State (Phase 1)

Committed: `review: phase-1 ontology inventory`

## Evidence Reviewed

CB-000, CB-000A, CB-002, CB-005, CG-FLL-002, CG-FLL-003, CG-FLL-1E, CFA-v1.0, LEF-0A–0E, LEF-1B–1E, CEAR-v1.0, CCNLAR-v1.0, ChessGuide-LLD-v1.0, CDESR v1.0.

## Files Reviewed

| File | Role |
|------|------|
| `docs/governance/chessbuddy/CB-000-federation-alignment.md` | Chain stages, domain types |
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Trace hierarchy |
| `docs/governance/federation/CFA-v1.0.md` | CFA glossary |
| `docs/governance/chessbuddy/CB-000A-longitudinal-learning-model.md` | Longitudinal artefacts |
| `docs/architecture/ChessGuide-LLD-v1.0.md` | Target aggregates (non-doctrine) |
| `docs/reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md` | Prior entity synthesis |
| `docs/reviews/ChessGuide-Cognitive-Narrative-Learning-Architecture-Review-v1.0.md` | Cognitive proposals |

## Doctrine Sources

CB-000, CB-005, CFA-v1.0, CG-FLL-002.

## Runtime Sources

`src/data/game.ts` — `GameHistory` only; no ontology types.

## ChessGuide Ontology Inventory v1

### Classification key

| Tag | Meaning |
|-----|---------|
| **[DOCTRINE]** | Named in approved/draft governance with definitional role |
| **[IMPLICIT]** | Evidence-compatible pattern without type name |
| **[PROPOSAL]** | Review-tier only (CEAR, CCNLAR, CLOR) |
| **[LLD]** | Architecture target — not accepted doctrine |
| **[RUNTIME]** | Code witness only |

### A. Federation learning chain (CB-000A)

| Entity | Status | Tag |
|--------|--------|-----|
| Reality | Chain stage | [DOCTRINE] |
| Observation | Chain stage; ChessObservation | [DOCTRINE] |
| Attention | Chain stage; attention log | [DOCTRINE] |
| Understanding | Chain stage; ChessReasoning | [DOCTRINE] |
| Knowledge | Chain stage; ChessKnowledge | [DOCTRINE] |
| Wisdom | Chain stage; ChessWisdom | [DOCTRINE] |
| Stewardship | Chain stage; trace custody | [DOCTRINE] |
| Transformation | Chain stage; SkillTransformation | [DOCTRINE] |

### B. LearningTrace hierarchy (CB-005)

| Entity | Status | Tag |
|--------|--------|-----|
| Actor | Learner identity | [DOCTRINE] |
| LearningTrace | Longitudinal container | [DOCTRINE] |
| Session | Optional grouping | [DOCTRINE] |
| Episode | One completed game | [DOCTRINE] |
| Event | ChessObservation / ChessSignal | [DOCTRINE] |
| ChessAnchor | Immutable reference point | [DOCTRINE] |
| ChessSignal taxonomy | move.*, opening.*, reflection.*, etc. | [DOCTRINE] |
| IM-1 fields | Measured vs Perceived | [DOCTRINE] |

### C. CFA vocabulary (CFA-v1.0)

| Entity | Status | Tag |
|--------|--------|-----|
| Integration | Process = Learning | [DOCTRINE] |
| Implicit / Explicit integration | Channel labels | [IMPLICIT] LEF-0E |
| Longitudinal Path | Interpretive read model | [IMPLICIT] |
| Capability Conditions | Mode/policy bundle | [IMPLICIT] |
| Path Quality / Path Potency | Steward assessments | [IMPLICIT] |
| Transformation Claim | LOE-011 post-C4 | [DOCTRINE] |
| Mastery Horizon | Long-horizon label | [IMPLICIT] |
| ExplanationArtifact | P1/P2 orthogonal product | [IMPLICIT] LEF-0C/0D |
| Continuity | Horizontal substrate | [DOCTRINE] CG-FLL-003 |

### D. Evidence & records (CG-FLL-1E, CEAR)

| Entity | Status | Tag |
|--------|--------|-----|
| LOE / DOE | Learning/decision outcome events | [DOCTRINE] |
| LearningRecord | Sovereign record (LLD name) | [LLD] |
| EvidenceChain | Lineage graph | [LLD] |
| Evidence (generic) | Observation + record refs | [IMPLICIT] CEAR |

### E. Review proposals (not doctrine)

| Entity | Source | Tag |
|--------|--------|-----|
| Knowledge Concept | CEAR Part 1 | [PROPOSAL] |
| Learner Graph | CEAR Part 4 | [PROPOSAL] |
| Learning Frontier | CEAR Part 5 | [PROPOSAL] |
| Experience | CCNLAR Part 6 | [PROPOSAL] |
| Cognitive Chunk | CCNLAR Part 2 | [PROPOSAL] |
| Narrative Chunk | CCNLAR Part 2–3 | [PROPOSAL] |
| Learning Opportunity | CCNLAR Part 4 | [PROPOSAL] |
| Flow | LEF-1D interpretive; retired CFA term | [IMPLICIT] |

### F. LLD targets (not doctrine)

| Entity | Source | Tag |
|--------|--------|-----|
| LearningJourney | LLD v1.0 | [LLD] |
| Learner | LLD aggregate root | [LLD] |
| DecisionTrace | LLD per-position | [LLD] |
| LearningCycle | LLD integration marker | [LLD] |

### G. Absent from repository

| Entity | Tag |
|--------|-----|
| Chunk (typed) | [PROPOSAL] only |
| Memory Anchor (distinct from ChessAnchor) | [PROPOSAL] |
| Retrieval Cue | [PROPOSAL] |
| LearningPath (named) | [IMPLICIT] as Longitudinal Path |
| Performance (ontology) | [IMPLICIT] only |

## Inventory summary

| Category | Count (approx.) | Maturity |
|----------|-----------------|----------|
| Doctrine chain + trace entities | ~25 | High |
| CFA interpretive entities | ~12 | Medium |
| Review proposals | ~8 | Low (unadopted) |
| LLD-only entities | ~10 | Design target |

## Conclusions (Phase 1)

| # | Conclusion | Class |
|---|------------|-------|
| P1-1 | Repository has **rich doctrine inventory** for evidence, chain, and integration | [DOCTRINE] |
| P1-2 | **Cognitive/memory entities** exist only as **[PROPOSAL]** | [INFERENCE] |
| P1-3 | **LearningJourney** (LLD) ≠ **LearningTrace** (doctrine) — must not merge in ontology | [DOCTRINE] + [LLD] |
| P1-4 | Inventory is **not complete** for cognitive compression layer | [INFERENCE] |

## Open Questions (Phase 1)

| ID | Question |
|----|----------|
| OQ-INV1 | Promote Longitudinal Path to doctrine term or keep interpretive? |
| OQ-INV2 | Is LearningJourney future alias for LearningTrace or distinct aggregate? |
| OQ-INV3 | Should Experience enter CG-FLL-002 glossary? |
