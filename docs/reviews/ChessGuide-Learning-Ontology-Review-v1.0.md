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

---

# Part 5 — Capability Ontology Review

## Repository State (Phase 5)

Committed: `review: phase-5 capability ontology review`

## Evidence Reviewed

CFA-v1.0, LEF-1C, LEF-1D, LEF-0E, CG-FLL-002, CG-FLL-003, CB-002, CCNLAR Part 5.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/federation/CFA-v1.0.md` | Full ladder, retired terms |
| `docs/governance/federation/studies/LEF-1C-path-quality-and-mastery-hypothesis.md` | Mastery vs Transformation |
| `docs/governance/federation/studies/LEF-1D-flow-and-optimal-traversal-hypothesis.md` | Flow placement |
| `docs/governance/federation/studies/LEF-0E-integration-theory.md` | Learning = integration |

## Doctrine Sources

CFA-v1.0, CG-FLL-002, LEF-1C.

## Runtime Sources

No capability, flow, or mastery types in `src/`.

## Capability Ontology v1

### Distinctions

| Entity | Primitive / Derived / Emergent | Definition | Class |
|--------|-------------------------------|------------|-------|
| **Knowledge** | Derived (resource) | Stored/referenced semantic content | [DOCTRINE] |
| **Capability** | Emergent | Durable enactment capacity after integration | [DOCTRINE] CFA |
| **Performance** | **Implicit** | Single-episode behaviour; not ontology term | [IMPLICIT] |
| **Flow** | **Implicit** | Traversal quality bundle (LEF-1D); retired CFA rung | [IMPLICIT] |
| **Transformation** | Emergent (observed) / Derived (claimed) | Capacity change; claim steward-gated | [DOCTRINE] |
| **Mastery** | Emergent horizon | Sustained high capability over continuity | [IMPLICIT] LEF-1C |

### Five capability questions

| Question | Answer | Class |
|----------|--------|-------|
| **What is learned?** | **Integration** — not information received (CG-FLL-002) | [DOCTRINE] |
| **What is demonstrated?** | Transformation **signals** — behaviour under observation | [DOCTRINE] H5 |
| **What is stabilized?** | Capability across continuity spans | [DOCTRINE] CFA |
| **What is transformed?** | Future capability, observation capacity | [DOCTRINE] |
| **What is mastered?** | Long-horizon excellence — **Mastery Horizon**, not claim | [DOCTRINE] LEF-1C |

### Purpose-Centered Learning Hypothesis

| Stage | Ontology mapping | Class |
|-------|------------------|-------|
| Observation without purpose → **Experience** | Activity without integration | [PROPOSAL] + [DOCTRINE ALIGNED] |
| With purpose → **Learning** | Integration process | [DOCTRINE] |
| + reflection → **Understanding** | Chain stage / ChessReasoning | [DOCTRINE ALIGNED] |
| + application → **Wisdom** | Normative guidance layer | [DOCTRINE ALIGNED] |

**Verdict:** Valid as **pedagogical progression prose** — not a strict state machine. **Learning** remains **integration**, not a separate entity from Understanding.

### Performance vs Capability [INFERENCE]

| Term | Role |
|------|------|
| **Performance** | Episodic move quality, single-game result — **activity** |
| **Capability** | Cross-episode enactment under observation — **transformation target** |

Performance is **not** a doctrine entity; conflating it with Capability violates I-3 / activity≠learning.

## Conclusions (Phase 5)

| # | Conclusion | Class |
|---|------------|-------|
| P5-1 | **Capability** and **Transformation** are doctrine-emergent; **Flow** is interpretive only | [DOCTRINE] + [IMPLICIT] |
| P5-2 | **Mastery** is horizon label — not primitive, not claim type | [DOCTRINE] |
| P5-3 | Purpose-Centered hypothesis **maps** to chain stages without new primitives | [DOCTRINE ALIGNED] |
| P5-4 | **Performance** should remain **non-ontological** to avoid activity confusion | [INFERENCE] |

## Open Questions (Phase 5)

| ID | Question |
|----|----------|
| OQ-CAP1 | Should Performance be explicitly excluded in CG-FLL-002 glossary? |
| OQ-CAP2 | Is Mastery Horizon ever claimable or always interpretive? |
| OQ-CAP3 | Does Flow warrant Capability Condition sub-entity? |

---

# Part 6 — Ontology Synthesis

## Repository State (Phase 6)

Committed: `review: phase-6 ontology synthesis`

## Evidence Reviewed

All Parts 1–5, CEAR-v1.0, CCNLAR-v1.0, CFA-v1.0, CG-FLL-002.

## Files Reviewed

Full review corpus + governance chain documents.

## Doctrine Sources

CB-000A chain, CB-005, CFA-v1.0, CG-FLL-002.

## Runtime Sources

None beyond LEF-2C prior findings.

## Candidate tree (critical evaluation)

```text
Reality [PRIMITIVE — ontological]
│
├── Observation [PRIMITIVE — epistemic entry]
│     ├── Event [PRIMITIVE — trace atom]
│     └── Attention [PRIMITIVE — chain stage / filter]
│
├── Experience [PROPOSAL — activity without integration]
│
├── Episode [PRIMITIVE — custody boundary]
│
├── Evidence [DERIVED — lineage-eligible custody]
│
├── Integration [PRIMITIVE — PROCESS, not entity storage]
│     ├── Implicit channel [IMPLICIT]
│     └── Explicit channel [IMPLICIT]
│
├── Understanding [DERIVED — ChessReasoning artefact]
│
├── Knowledge Concept [PROPOSAL — referencable unit]
│     └── Knowledge [DERIVED — chain stage / ChessKnowledge]
│
├── Pattern [EMERGENT — cross-episode recurrence]
│
├── Cognitive Chunk [PROPOSAL — integration compression product]
│
├── Narrative Chunk [PROPOSAL — memory scaffold]
│
├── Memory Anchor [DOCTRINE — ChessAnchor]
│
├── Retrieval Cue [PROPOSAL]
│
├── Capability [EMERGENT]
│
├── Flow [IMPLICIT — traversal signal]
│
├── Transformation [EMERGENT observed | DERIVED claimed]
│
└── Mastery [EMERGENT horizon — Mastery Horizon]
```

### Critical corrections to candidate tree

| Issue | Correction | Class |
|-------|------------|-------|
| LearningTrace omitted | **Add** as **DERIVED evidence container** — sibling to Episode hierarchy | [DOCTRINE] |
| Integration as stored entity | **Integration is process**, not persisted noun (LEF-0E) | [DOCTRINE] |
| Chunks before Integration | **Chunks are products of integration**, not siblings of Observation | [DOCTRINE CONFLICT] CCNLAR |
| Learning omitted as entity | **Learning = Integration** — no separate Learning object | [DOCTRINE] |
| Stewardship omitted | **Add orthogonal**: Stewardship, ExplanationArtifact, Continuity | [DOCTRINE] CFA |

## ChessGuide Learning Ontology v1 [PROPOSAL — doctrine-reconciled]

### Layer A — Ontological primitives

| Entity | Role |
|--------|------|
| **Reality** | Domain occurrence |
| **Actor** | Learner identity |
| **Observation** | Registered phenomenon |
| **Episode / Event** | Custody structure |

### Layer B — Process primitives (non-persisted nouns)

| Process | Role |
|---------|------|
| **Integration** | Learning mechanism (= Learning) |
| **Replay** | Reconstruction |
| **Stewardship** | Governance gate |

### Layer C — Derived artefacts

| Artefact | Role |
|----------|------|
| **Evidence** | Lineage-eligible records |
| **Understanding** | Interpretation |
| **Knowledge** | Consolidated resource |
| **Wisdom** | Normative guidance |
| **ExplanationArtifact** | Durable best-why |

### Layer D — Emergent outcomes

| Outcome | Role |
|---------|------|
| **Pattern** | Cross-episode structure |
| **Capability** | Durable enactment |
| **Transformation** | Observed change / claim |
| **Mastery Horizon** | Long-horizon state |

### Layer E — Proposals (pre-governance)

Experience, Knowledge Concept, Cognitive Chunk, Narrative Chunk, Retrieval Cue, Learning Opportunity.

### Smallest stable unit of understanding — final answer

> **[INFERENCE]** The smallest **stable** unit of understanding is an **integrated semantic binding**: a connection between a **phenomenon** (observation + attention) and **prior structure** that persists across retrieval.

**Doctrine nearest types:**

1. **Understanding artefact** (ChessReasoning at chain stage) — [DOCTRINE]
2. **Explicit integration LOE** with lineage — [DOCTRINE]
3. **Cognitive Chunk** (proposal) — names compression of (1) for enactment — [PROPOSAL]

**Not** stable units: raw Observation, Knowledge ref without integration, Episode container, LearningTrace file.

## Hypothesis evaluation (synthesis)

### Crow Epistemology — Learning Opportunity typing

| Candidate type | Verdict | Class |
|----------------|---------|-------|
| **Entity** | Weak — transient, high churn | [INFERENCE] |
| **Event** | Partial — could be `opportunity.detected` LOE | [PROPOSAL] |
| **Relationship** | **Strong** — Attention × Concept × Policy alignment | [PROPOSAL] |
| **Capability Condition** | Partial — timing sub-condition | [DOCTRINE ALIGNED] |

**Recommendation:** Model as **Relationship** (or **Event** if logged), not primitive entity.

### Narrative Chunk Hypothesis

> Narrative structures act as retrieval scaffolds for knowledge concepts.

| Assessment | Class |
|------------|-------|
| Compatible; untested in doctrine | [PROPOSAL] |
| Orthogonal to Cognitive Chunk | [PROPOSAL] CCNLAR |

### Learner Integration Hypothesis

> Knowledge becomes personal understanding only when integrated with prior knowledge, purpose and reflection.

| Assessment | Class |
|------------|-------|
| **Core doctrine** — integration definition (CG-FLL-002) | [DOCTRINE] |
| Purpose + reflection = explicit channel accelerators | [DOCTRINE ALIGNED] |

## Conclusions (Phase 6)

| # | Conclusion | Class |
|---|------------|-------|
| P6-1 | **13 doctrine primitives/processes** + **6 emergent** + **6 proposals** form complete inventory | [INFERENCE] |
| P6-2 | Candidate user tree **over-flattens** — must separate process, container, outcome | [INFERENCE] |
| P6-3 | Smallest understanding unit = **integrated semantic binding** ≈ Understanding artefact | [INFERENCE] |
| P6-4 | Ontology **sufficient for ADR-001 scope** if ADR stays Episode/evidence boundary | [INFERENCE] |

## Open Questions (Phase 6)

| ID | Question |
|----|----------|
| OQ-SYN1 | Publish Learning Ontology v1 as governance annex? |
| OQ-SYN2 | Merge LearningTrace and LearningJourney names in future ADR? |
| OQ-SYN3 | Minimum LOE set constituting understanding unit? |

---

# Part 7 — Strategic Assessment

## Repository State (Phase 7)

Committed: `review: phase-7 strategic assessment`

## Evidence Reviewed

All Parts 1–6, CEAR ADR readiness, CCNLAR ADR readiness, LEF-2C.

## Files Reviewed

Full ontology review corpus.

## Doctrine Sources

CFA-v1.0, CG-FLL-002, CEAR-v1.0 Part 7.

## Runtime Sources

LEF-2C — ontology unwitnessed in code.

## Strategic gaps

| # | Gap type | Finding | Class |
|---|----------|---------|-------|
| 1 | **Ontological** | **Chunk**, **Retrieval Cue**, **Experience** unformalized | [PROPOSAL] gap |
| 2 | **Doctrine** | Process vs entity confusion (Learning, Integration, LearningTrace) now clarified | [INFERENCE] |
| 3 | **Learning-science** | Oakley chunking names mechanism doctrine implies via expert compression | [NEW INSIGHT] |
| 4 | **Architectural** | LLD aggregates exceed doctrine — ADR-001 must not import LLD-only types as canon | [INFERENCE] |

## ADR-001 Readiness Assessment

**Can ADR-001 (LearningTrace Episode Schema v1) safely proceed after this review?**

### **Yes** — with explicit scope boundaries.

| Criterion | Status | Reason |
|-----------|--------|--------|
| Evidence boundary defined | **Ready** | Episode, Event, Anchor are doctrine primitives |
| Learning vs trace distinguished | **Ready** | LEF-0E, CEAR, CLOR Part 2 |
| Integration not in Episode schema | **Ready** | Integration is process — LOE refs optional |
| Chunk/narrative excluded | **Required** | Proposals must not enter ADR-001 |
| LLD ≠ doctrine | **Required** | LearningJourney naming deferred |

### What remains unresolved (post ADR-001)

| Item | Blocks ADR-001? | Blocks implementation? |
|------|-----------------|------------------------|
| Chunk Architecture governance | **No** | **Yes** for cognitive features |
| Experience glossary adoption | **No** | Partial |
| Learning Opportunity typing | **No** | **Yes** for timed pedagogy |
| Knowledge Concept formalization | **No** | Partial |
| Narrative Chunk vs ExplanationArtifact | **No** | **Yes** for narrative pedagogy |

## Strategic findings

| # | Finding | Class |
|---|---------|-------|
| P7-1 | **Most important ontological gap:** Chunk / compression layer between Pattern and Capability | [INFERENCE] |
| P7-2 | **Most important doctrine gap:** Experience and Retrieval Cue unnamed | [INFERENCE] |
| P7-3 | **Most important learning-science insight:** Compression (Oakley) explains expert path doctrine does not type | [NEW INSIGHT] |
| P7-4 | **Most important architectural implication:** ADR-001 must encode **Layer A–B only**; Layer E proposals excluded | [INFERENCE] |
| P7-5 | **Highest-value ADR:** (1) Episode Schema v1, (2) Chunk Architecture governance v1 | [INFERENCE] |

## Conclusions (Phase 7)

| # | Conclusion | Class |
|---|------------|-------|
| P7-1 | ChessGuide possesses **canonical ontology for evidence and integration** | [DOCTRINE] |
| P7-2 | **Cognitive/memory ontology** incomplete but **does not block** ADR-001 | [INFERENCE] |
| P7-3 | **Learning Ontology v1** reconciles three prior reviews into layered model | [PROPOSAL] |
| P7-4 | ADR-001 **may proceed** — chunk/narrative ADRs follow | [INFERENCE] |

---

# Executive Summary

This review inventories **~25 doctrine entities**, **~12 interpretive CFA terms**, and **~8 review proposals** across governance and prior reviews (CEAR, CCNLAR). It answers the core question:

> **Smallest stable unit of understanding** = **integrated semantic binding** — nearest doctrine types: **Understanding artefact** (ChessReasoning) or explicit **integration LOE** with lineage.

**Primitive entities:** Reality, Actor, Observation, Episode, Event, Attention (chain), Integration (process).

**Derived entities:** Evidence, Understanding, Knowledge, Wisdom, ExplanationArtifact.

**Emergent entities:** Pattern, Capability, Transformation, Mastery Horizon.

**Proposals (not doctrine):** Experience, Knowledge Concept, Cognitive Chunk, Narrative Chunk, Retrieval Cue, Learning Opportunity.

**ADR-001 readiness: YES** — Episode/evidence boundary is ontologically stable. ADR-001 must **exclude** chunk, narrative, and LLD-only aggregates. Follow-on governance for **Chunk Architecture** is highest-value post-ADR work.

---

# Repository Evidence Summary

| Layer | Key artifacts |
|-------|---------------|
| Chain ontology | CB-000A, CB-000 |
| Trace ontology | CB-005 |
| Capability ontology | CFA-v1.0, LEF-1C |
| Integration ontology | CG-FLL-002, LEF-0E |
| Prior reviews | CEAR, CCNLAR |
| Design target (non-canon) | LLD v1.0 |

---

# Doctrine Findings (consolidated)

| Finding | Class |
|---------|-------|
| Learning = Integration (process) | [DOCTRINE] |
| LearningTrace = evidence custody | [DOCTRINE] |
| Observation ≠ Experience ≠ Evidence | [INFERENCE] |
| Wisdom ≠ Knowledge (I-3) | [DOCTRINE] |
| Mastery = horizon, not primitive | [DOCTRINE] |
| Chunks = integration products (proposal) | [PROPOSAL] |

---

# Observation Ontology (summary)

Reality → Observation → Episode/Event → Evidence → (Integration process). Experience = activity without integration [PROPOSAL].

---

# Knowledge Ontology (summary)

Knowledge Concept [PROPOSAL] ⊂ ChessKnowledge. Pattern emergent. Understanding derived. Wisdom normative.

---

# Memory Ontology (summary)

ChessAnchor = Memory Anchor [DOCTRINE]. Chunks and retrieval cues [PROPOSAL]. Series = primary analysis unit [DOCTRINE].

---

# Capability Ontology (summary)

Capability emergent post-integration. Transformation observed/claimed. Flow interpretive. Performance non-ontological.

---

# Ontology Synthesis (summary)

Five layers: A Primitives, B Processes, C Derived artefacts, D Emergent outcomes, E Proposals. Learning Opportunity = Relationship [PROPOSAL].

---

# Open Questions (consolidated)

OQ-INV1–3, OQ-OBS1–3, OQ-KN1–3, OQ-MEM1–3, OQ-CAP1–3, OQ-SYN1–3 — see phase sections.

---

# Candidate Future ADRs (consolidated)

1. **ADR-001:** LearningTrace Episode Schema v1 — **proceed**
2. **ADR-002 (candidate):** Chunk Architecture governance v1
3. **ADR-003 (candidate):** Experience + Retrieval Cue glossary adoption
4. **ADR-004 (candidate):** Learning Opportunity event/relationship schema

---

# Commit Log (review branch)

| Phase | Commit message | SHA |
|-------|----------------|-----|
| 1 | review: phase-1 ontology inventory | `93b470d` |
| 2 | review: phase-2 observation ontology review | `c6f5982` |
| 3 | review: phase-3 knowledge ontology review | `62acf84` |
| 4 | review: phase-4 memory ontology review | `cbb4d75` |
| 5 | review: phase-5 capability ontology review | `091cd92` |
| 6 | review: phase-6 ontology synthesis | `a41b715` |
| 7 | review: phase-7 strategic assessment | (pending) |

---

## Document Status

```text
Accepted Learning Ontology Review Candidate
```
