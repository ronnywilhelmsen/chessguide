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

---

# Part 2 — Observation Ontology Review

## Repository State (Phase 2)

Committed: `review: phase-2 observation ontology review`

## Evidence Reviewed

CB-000 I-6, CB-005, CB-000A, LEF-0A, LEF-0E, CG-FLL-002, LEF-2C, CEAR Part 3.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-000-federation-alignment.md` | OAT, I-6 |
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Episode, Event stream |
| `docs/governance/federation/studies/LEF-0A-architectural-interpretation-validation.md` | Trace vs replay |
| `docs/governance/federation/studies/LEF-2C-runtime-observability-study.md` | Runtime gap |
| `src/data/game.ts` | Legacy episode encoding |

## Doctrine Sources

CB-000, CB-005, CG-FLL-002 activity≠learning.

## Runtime Sources

`game.ts` — serialised game string = legacy Episode; no Observation type.

## Observation Ontology v1

### Distinctions

| Entity | Definition | Primitive? | Class |
|--------|------------|------------|-------|
| **Reality** | What occurred in domain independent of registration | **Yes** (ontological) | [DOCTRINE] |
| **Observation** | Time-stamped registration of reality (ChessObservation) | **Yes** (epistemic entry) | [DOCTRINE] |
| **Experience** | Activity/exposure **without** integration claim | **Derived** (proposal) | [PROPOSAL] CCNLAR |
| **Episode** | Bounded container (one completed game) | **Yes** (custody boundary) | [DOCTRINE] |
| **Event** | Atomic signal within Episode | **Yes** (trace atom) | [DOCTRINE] |
| **Evidence** | Custodied observations + lineage refs supporting claims | **Derived** | [DOCTRINE] CEAR |

### Five questions

| Question | Answer | Class |
|----------|--------|-------|
| **What is observed?** | Position, moves, time, terminal result — Reality interpreted through prior learning (CG-FLL-002) | [DOCTRINE] |
| **What is experienced?** | Episode participation that may not integrate — **Experience** [PROPOSAL] | [PROPOSAL] |
| **What is recorded?** | LearningTrace: Episode + Event stream + optional attention/IM-1 | [DOCTRINE] |
| **What is remembered?** | **Not** LearningTrace alone — memory = learner state + retrieval; trace is **external custody** (CG-FLL-001 I-4: replay ≠ memory alone) | [DOCTRINE] |
| **What is replayed?** | Position reconstruction from move stream — **Replay** mechanism, not observation (LEF-0A) | [DOCTRINE] |

### Composition rules

| Question | Answer | Class |
|----------|--------|-------|
| One Episode → multiple Observations? | **Yes** — Event stream (`move.played`, `time.milestone`, …) | [DOCTRINE] |
| One Observation → multiple Evidence chains? | **Yes** — anchors (AN-4) cross-link; LOE lineage branches | [DOCTRINE] |
| Observation → Evidence without Integration? | **Yes** — trace custody without learning (I-3, LEF-0E) | [DOCTRINE] |

### Observation layer diagram [DOCTRINE + PROPOSAL]

```text
Reality (domain occurrence)
  → Observation (registered ChessObservation / Event)
  → [Attention filter — optional highlight]
  → LearningTrace custody (Episode container)
  → Evidence (lineage-eligible record set)
  → Integration (process — NOT observation)
```

**Experience** sits beside Observation when **purpose/integration absent** [PROPOSAL].

## Conclusions (Phase 2)

| # | Conclusion | Class |
|---|------------|-------|
| P2-1 | **Observation** and **Episode** are doctrine primitives; **Evidence** is derived | [DOCTRINE] |
| P2-2 | **Experience** fills activity-without-integration gap — not yet doctrine | [PROPOSAL] |
| P2-3 | Recording ≠ remembering ≠ replaying — three non-collapsible roles (LEF-0A) | [DOCTRINE] |
| P2-4 | Runtime implements **legacy Episode string** only — observation ontology unwitnessed | [RUNTIME] |

## Open Questions (Phase 2)

| ID | Question |
|----|----------|
| OQ-OBS1 | Is Experience a chain stage, Event tag, or interpretive label? |
| OQ-OBS2 | Minimum Event set for valid Observation in Episode? |
| OQ-OBS3 | Does federation ObservationRecord equal Observation or Episode slice? |

---

# Part 3 — Knowledge Ontology Review

## Repository State (Phase 3)

Committed: `review: phase-3 knowledge ontology review`

## Evidence Reviewed

CB-000 I-3, CB-002, CB-005, CG-FLL-002, CG-FLL-1E LOE catalog, CEAR Part 1, CCNLAR Part 3.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-000-federation-alignment.md` | ChessKnowledge, ChessWisdom, I-3 |
| `docs/governance/chessbuddy/CB-002-longitudinal-skill-development-domain.md` | Domain artefact catalogue |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Knowledge vs Learning vs Recall |
| `docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md` | Show-Tell hierarchy |
| `src/data/openings.ts` | Knowledge corpus (runtime) |

## Doctrine Sources

CG-FLL-002, CB-000 I-3, CB-005 knowledge refs.

## Runtime Sources

`openings.ts` — hierarchical opening labels; no Concept type.

## Knowledge Ontology v1

### Entity classification

| Entity | Primitive / Derived / Emergent | Definition | Class |
|--------|-------------------------------|------------|-------|
| **Knowledge Concept** | **Derived** (referencable unit) | Semantic unit anchorable in trace — opening ID, principle, position class | [PROPOSAL] CEAR |
| **Pattern** | **Emergent** | Recurrence across episodes (LOE-002); observation capacity | [DOCTRINE] |
| **Skill** | **Emergent** | Actionable domain competence through practice (LSDD) | [DOCTRINE] |
| **Capability** | **Emergent** | Durable capacity after integration + conditions (CFA) | [DOCTRINE] |
| **Understanding** | **Derived** | Interpretation artefact at chain stage (ChessReasoning) | [DOCTRINE] |
| **Wisdom** | **Derived** | Normative guidance for action (ChessWisdom); ≠ Knowledge (I-3) | [DOCTRINE] |

### Candidate concept tests

| Item | Is it a Knowledge Concept? | Class |
|------|---------------------------|-------|
| **Fork** | **Yes** — referencable tactical pattern label | [INFERENCE] |
| **Opposition** | **Yes** — referencable endgame concept | [INFERENCE] |
| **Pattern Recognition** | **No** — LOE-002 **event/capacity signal**, not stored concept | [DOCTRINE] |
| **Opening line node** | **Yes** — knowledge ref in CB-005 | [DOCTRINE] |

### Understanding vs possession [DOCTRINE]

| State | Indicator | Class |
|-------|-----------|-------|
| **Concept possession** | Knowledge refs, recall (LOE-003/004) | [DOCTRINE] |
| **Understanding** | Usable interpretation under observation; ChessReasoning; integration | [DOCTRINE] CG-FLL-002 |

> A learner may possess knowledge without effectively using it (CG-FLL-002).

### Wisdom vs understanding [DOCTRINE]

| Dimension | Understanding | Wisdom |
|-----------|---------------|--------|
| **Nature** | Interpretive (what position means) | Normative (what to do) |
| **Source** | REA / ChessReasoning | WA / engine vs choice framing |
| **Invariant** | I-3: Wisdom ≠ Knowledge | [DOCTRINE] |

### Show–Tell Coupling Hypothesis

> Understanding emerges when observed experience and explanation become mutually reinforcing.

| Assessment | Class |
|------------|-------|
| **Aligned** — CB-004 Illuminate + Explain; integration mechanisms include explanation | [DOCTRINE ALIGNED] |
| **Not sufficient alone** — explanation verb ≠ Understanding noun (LEF-0A C-5) | [DOCTRINE] |
| **Mutual reinforcement** requires **integration**, not juxtaposition | [DOCTRINE] CG-FLL-002 |

## Conclusions (Phase 3)

| # | Conclusion | Class |
|---|------------|-------|
| P3-1 | **Knowledge** chain stage and **ChessKnowledge** are doctrine; **Knowledge Concept** is review synthesis | [DOCTRINE] + [PROPOSAL] |
| P3-2 | **Understanding** is smallest **named** understanding artefact in doctrine | [DOCTRINE] |
| P3-3 | **Pattern** is emergent; **Concept** is referencable | [INFERENCE] |
| P3-4 | Show-Tell Coupling holds only when **integration** closes the loop | [DOCTRINE ALIGNED] |

## Open Questions (Phase 3)

| ID | Question |
|----|----------|
| OQ-KN1 | Adopt Knowledge Concept as governance term? |
| OQ-KN2 | Is Understanding primitive or always derived from Observation+Integration? |
| OQ-KN3 | Where does Simulation (H3) sit — Knowledge or Integration mechanism? |

---

# Part 4 — Memory Ontology Review

## Repository State (Phase 4)

Committed: `review: phase-4 memory ontology review`

## Evidence Reviewed

CB-005 anchors, CB-000A memory unit, CG-FLL-002 recall path, LEF-0C, CCNLAR Parts 2–3, CEAR.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | ChessAnchor AN-1–4 |
| `docs/governance/chessbuddy/CB-000A-longitudinal-learning-model.md` | Series as memory unit |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Encoding, Memory, Recall paths |
| `docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md` | Longitudinal memory |
| `docs/reviews/ChessGuide-Cognitive-Narrative-Learning-Architecture-Review-v1.0.md` | Chunk proposals |

## Doctrine Sources

CB-005, CG-FLL-002, CB-000A.

## Runtime Sources

`gameHistory` localStorage — episodic list only.

## External literature (informative — subordinate)

| Author | Contribution | Repo mapping | Class |
|--------|--------------|--------------|-------|
| **Barbara Oakley** | Cognitive chunking | Expert compression; no chunk type | [NEW INSIGHT] |
| **Joshua Foer** | Narrative/mnemonic memory | Reflection narrative only | [NEW INSIGHT] |
| **Derren Brown** | Memory palace, constructed narrative | **No repo reference** | [EXTERNAL] only |

## Memory Ontology v1

### Distinctions

| Entity | Status | Role | Class |
|--------|--------|------|-------|
| **Knowledge Concept** | [PROPOSAL] | Referencable unit in corpus/trace | CEAR |
| **Cognitive Chunk** | [PROPOSAL] | Compressed integrated mental structure | CCNLAR |
| **Narrative Chunk** | [PROPOSAL] | Story scaffold for retention | CCNLAR |
| **Memory Anchor** | **≈ ChessAnchor** | Immutable trace reference (AN-1–4) | [DOCTRINE] |
| **Retrieval Cue** | **Absent** | Trigger for recall path | [PROPOSAL] |

### Five memory questions

| Question | Answer | Class |
|----------|--------|-------|
| **What is remembered?** | Learner state (implicit/explicit integration products) — **not** the trace file itself | [DOCTRINE] I-4 |
| **What is retrieved?** | Knowledge via recall path after prior integration | [DOCTRINE] |
| **What is reconstructed?** | Position/history via Replay — external to memory | [DOCTRINE] LEF-0A |
| **What is compressed?** | Expert paths; **chunk** unnamed | [IMPLICIT] + [PROPOSAL] |

### Composition rules [PROPOSAL + INFERENCE]

| Question | Answer | Class |
|----------|--------|-------|
| Concept without chunk? | **Yes** — corpus refs without integration | [DOCTRINE] |
| Chunk without narrative? | **Yes** — cognitive compression need not be storied | [PROPOSAL] |
| Narrative without chunk? | **Yes** — reflection prose without tactical compression | [DOCTRINE] reflection.recorded |
| Retrieval cues first-class? | **Not today** — nearest: anchors, opening.recognized, focus_contract | [PROPOSAL] |

### Narrative Memory Hypothesis

> Concepts retained more effectively when attached to memorable narrative structures.

| Assessment | Class |
|------------|-------|
| **Not in doctrine** | [PROPOSAL] |
| **Compatible** with reflection + Buddy Connect intent (CB-004) | [DOCTRINE ALIGNED] partial |
| **Distinct from** ExplanationArtifact causal record (LEF-0C) | [DOCTRINE] |
| **Requires** Narrative Chunk adoption to test | [OPEN QUESTION] |

## Conclusions (Phase 4)

| # | Conclusion | Class |
|---|------------|-------|
| P4-1 | **ChessAnchor** is doctrine memory anchor; **Retrieval Cue** is not typed | [DOCTRINE] |
| P4-2 | **Chunk** and **Narrative Chunk** remain **[PROPOSAL]** — largest memory ontology gap | [INFERENCE] |
| P4-3 | Longitudinal **series** is primary memory **unit of analysis** (CB-000A) | [DOCTRINE] |
| P4-4 | External memory literature **informs** but does not override doctrine | [DOCTRINE] per mandate |

## Open Questions (Phase 4)

| ID | Question |
|----|----------|
| OQ-MEM1 | Rename ChessAnchor to Memory Anchor in governance? |
| OQ-MEM2 | Are retrieval cues Events, Anchors, or Attention records? |
| OQ-MEM3 | Does Narrative Chunk warrant separate artefact from ExplanationArtifact P1? |
