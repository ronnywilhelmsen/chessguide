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

---

# Part 3 — LearningTrace Review

## Repository State (Phase 3)

Committed: `review: phase-3 learningtrace review`

## Evidence Reviewed

CB-005, CB-000A, LEF-0A, LEF-0E, LEF-1B, LEF-2C, CFA-v1.0, CG-FLL-003.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Full hierarchy |
| `docs/governance/chessbuddy/CB-000A-longitudinal-learning-model.md` | LearningTrace properties, chain rule |
| `docs/governance/federation/studies/LEF-0A-architectural-interpretation-validation.md` | Trace ≠ transformation |
| `docs/governance/federation/studies/LEF-0E-integration-theory.md` | Trace = evidence + custody |
| `docs/governance/federation/studies/LEF-1B-learningtrace-path-formation-hypothesis.md` | Path interpretive layer |
| `src/data/game.ts` | Legacy episode encoding |

## Doctrine Sources

CB-005 (primary), LEF-0A/0E, CFA LearningTrace tier.

## Runtime Sources

`Game`, `GameHistory` — partial episode projection only (LEF-2C).

## Is LearningTrace learning, evidence, observability, or continuity?

| Lens | Verdict | Classification |
|------|---------|----------------|
| **Learning** | **No** — container, not process | [DOCTRINE] LEF-0E: "LearningTrace is evidence and custody" |
| **Evidence** | **Yes — primary role** | [DOCTRINE] CB-005, LEF-0A |
| **Observability** | **Enables** — LOE/DOE attach to trace | [DOCTRINE] CG-FLL-1E |
| **Continuity** | **Substrate** — time-ordered custody | [DOCTRINE] CG-FLL-003, CFA horizontal continuity |

**LearningTrace Role Definition v1:**

> **LearningTrace** is the **sovereign evidence container and custody boundary** for one Actor's longitudinal chess skill development — holding ordered episodes, events, anchors, and references to interpretive records (LOE, reasoning, explanations) — **not** learning itself and **not** mastery.

### Ladder evaluation

```text
Observation        [DOCTRINE: chain stage + ChessObservation/ChessSignal]
       ↓
LearningTrace      [DOCTRINE: evidence container — CB-005, LEF-0E]
       ↓
???                [GAP: see below]
       ↓
Mastery            [DOCTRINE: horizon label — CFA Mastery Horizon; not claim step]
```

### Missing layers (between LearningTrace and Mastery) [DOCTRINE]

| Layer | Source | Role |
|-------|--------|------|
| **Integration** | CG-FLL-002 | Learning = integration achieved |
| **Longitudinal Path** | LEF-1B, CFA | Interpretive read on trace |
| **Capability Conditions** | LEF-1E, CB-006 | Enactment environment |
| **Path Quality / Potency** | LEF-1C, CFA | Assessment lenses |
| **Stewardship** | CG-FLL-1E | Replay, C0–C4, gate |
| **Transformation Claim** | LOE-011 | Governed outcome |
| **Mastery Horizon** | LEF-1C | Long-horizon (outside claim pipeline) |

The `???` in the naive ladder is **not one box** — CFA v1.0 resolves it as **logical dependencies**, not a serial pipeline [DOCTRINE] CFA core rule.

## Conclusions (Phase 3)

| # | Conclusion | Class |
|---|------------|-------|
| P3-1 | LearningTrace is **evidence + custody**, not learning | [DOCTRINE] |
| P3-2 | Runtime implements **~episode grain** of trace only | [RUNTIME] |
| P3-3 | CFA fills the `???` between trace and mastery | [DOCTRINE] |
| P3-4 | LearningTrace Role Definition v1 is **doctrine-complete**; **runtime-incomplete** | [INFERENCE] |

## Open Questions (Phase 3)

| ID | Question |
|----|----------|
| OQ-LT1 | Session tier — optional in CB-005; required for FLL-1? |
| OQ-LT2 | Legacy `Game.toString` migration semantics to Episode ID |

---

# Part 4 — Learner Representation Review

## Repository State (Phase 4)

Committed: `review: phase-4 learner graph review`

## Evidence Reviewed

CFA-v1.0, LEF-1B–1E, CB-005, CDESR, CG-FLL-001, LLD v1.0.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/federation/CFA-v1.0.md` | Full ladder + glossary |
| `docs/governance/federation/studies/LEF-1B-learningtrace-path-formation-hypothesis.md` | Path on trace |
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Actor hierarchy |
| `docs/architecture/ChessGuide-LLD-v1.0.md` | LearningJourney aggregate |
| `docs/reviews/Canonical-Domain-End-State-Requirements-Review-v1.0-ChessGuide.md` | Actor roles |

## Doctrine Sources

CB-005 Actor, CFA tiers, CG-FLL-001 steward-led pilot.

## Runtime Sources

`Human` in `players.ts` — name + email only; no graph structure.

## Learner Graph v1 [PROPOSAL — doctrine-grounded, not repo type]

```text
Learner (Actor)
  └── LearningJourney [1:1]
        ├── Sessions[] (optional)
        │     └── Episodes[]
        │           ├── ChessSignals / Observations
        │           ├── DecisionTraces (per ply)
        │           ├── IM1Snapshots
        │           └── Anchors[]
        ├── LearningRecords[] (LOE/DOE) ──cross-link──► Episodes
        ├── EvidenceChain ──► TransformationClaim
        ├── LongitudinalPath [read model on journey]
        ├── CapabilityConditions [per session/episode envelope]
        └── ExplanationArtifacts[] (P1 episodic, P2 attested)
```

### Node types [INFERENCE from doctrine]

| Node | Doctrine anchor | Class |
|------|-----------------|-------|
| **Learner** | CB-005 Actor | [DOCTRINE] |
| **LearningJourney** | CB-005 LearningTrace container | [DOCTRINE] |
| **Episode** | CB-005 | [DOCTRINE] |
| **LongitudinalPath** | LEF-1B, CFA | [DOCTRINE] interpretive |
| **EvidenceChain** | CG-FLL-1E lineage | [DOCTRINE] |
| **Learner Graph** (as named graph) | Not in repo | [PROPOSAL] |

### Edges [DOCTRINE]

| Edge | Meaning |
|------|---------|
| Episode → Anchor | AN-1–4 |
| LearningRecord → evidence_refs → Episode/Event | LOE-011 lineage |
| Integration → LearningRecord | CG-FLL-002 |
| Steward → validates → EvidenceChain | CG-FLL-001 |

## Conclusions (Phase 4)

| # | Conclusion | Class |
|---|------------|-------|
| P4-1 | Learner representation is **Actor + LearningTrace hierarchy** in doctrine | [DOCTRINE] |
| P4-2 | **Learner Graph** as graph model is **not named** in repo — synthesis for review | [PROPOSAL] |
| P4-3 | LLD `LearningJourney` aligns with doctrine | [INFERENCE] |
| P4-4 | Runtime has **Player name** only — no learner graph | [RUNTIME] |

## Open Questions (Phase 4)

| ID | Question |
|----|----------|
| OQ-LG1 | Steward as separate Actor node vs role on HumanActor? |
| OQ-LG2 | Materialize LongitudinalPath or compute on read? |
