# CG-FLL-001 — First Domain Learning Pilot

| Field | Value |
|-------|-------|
| **Document ID** | CG-FLL-001 |
| **Title** | First Domain Learning Pilot |
| **Version** | Draft 1 |
| **Strategic significance** | Critical |
| **Scope** | ChessGuide |
| **Classification** | Federation Learning Pilot |
| **Designation** | **FLL-1** — First Domain Learning Validation |
| **Status** | Draft 1 |
| **Parents** | [CG-000 — ChessGuide Identity](CG-000-chessguide-identity.md), [CG-001 — Product Vision](CG-001-product-vision.md), [CG-002 — Federation Relationship](CG-002-federation-relationship.md), [CG-DEP-001 — Federation Dependency Analysis](CG-DEP-001-federation-dependency-analysis.md) |

**Related (inherited):** [CB-000A — Longitudinal Learning Model](../chessbuddy/CB-000A-longitudinal-learning-model.md), [CB-002 — Longitudinal Skill Development Domain](../chessbuddy/CB-002-longitudinal-skill-development-domain.md), [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md), [ALP-1](../chessbuddy/ALP-1-artifact-learning-pilot.md) (FLL-0), [ALP-2](../chessbuddy/ALP-2-longitudinal-learning-model-pilot.md) (FLL-0M), [ALP-3](../chessbuddy/ALP-3-multi-artifact-learning-pilot.md) (FLL-0X)

---

## Context

| Path | Validated |
|------|-----------|
| **ALP-1** (FLL-0) | Artifact → Learning |
| **ALP-2** (FLL-0M) | Learning about Learning |
| **ALP-3** (FLL-0X) | Cross-Artifact Learning |
| **CG-DEP-001** | ChessGuide can begin validating longitudinal learning before the Federation is fully implemented |

The next question is:

**Can learning be observed in a real domain?**

This pilot does **not** validate chess skill.

This pilot validates **learning**.

Chess is the domain. Learning is the subject.

**Out of scope:** Implementation, technology choices, product roadmap.

---

## Purpose

Define the **first operational learning pilot** within ChessGuide.

The pilot seeks to observe whether learning can be traced through the longitudinal learning chain in a real skill domain.

---

## Core Question

**Can a real learning transformation be observed, explained, replayed, and validated inside a skill domain?**

---

## Pilot Philosophy

| Traditional chess systems observe | ChessGuide seeks to observe |
|-----------------------------------|----------------------------|
| Moves | Learning |
| Positions | Understanding |
| Games | Transformation |
| Ratings | Development over time |

The pilot focuses on the **learner**, not the game.

---

## Hypotheses

### Primary — H1

> **Learning can be observed as transformation over time.**

### Secondary

| ID | Hypothesis |
|----|------------|
| **H2** | Continuity is a stronger predictor of mastery than intensity |
| **H3** | Learning skills transfer across domains more easily than domain knowledge |
| **H4** | Learning requires integration time in addition to focused effort |
| **H5** | Simulation is a fundamental learning mechanism |
| **H6** | Enjoyment and curiosity are first-class learning signals |

---

## Pilot Subject

| Field | Value |
|-------|-------|
| **Learner type** | Human |
| **Initial example** | Ronny (steward-led single-subject observation) |
| **Statistical goal** | None — observation and model validation, not population inference |
| **Steward** | Human (observes, validates Transformation claims; learner does not self-certify) |

---

## Pilot Scope

Observe the full federation learning chain inside a **real learning journey**:

```
Reality
  ↓
Observation
  ↓
Attention
  ↓
Understanding
  ↓
Knowledge
  ↓
Wisdom
  ↓
Stewardship
  ↓
Transformation
```

---

## Domain

**Chess**

Chess provides:

- Clear rules
- Observable decisions
- Measurable progress
- Replayable situations
- Long-term mastery

making it an ideal **longitudinal skill domain** (per [CB-002](../chessbuddy/CB-002-longitudinal-skill-development-domain.md)).

---

## Learning Before Chess

The pilot should investigate whether **learning skills** can be observed directly — not only chess-specific knowledge.

### Examples of learning-skill signals

- Reflection
- Pattern recognition
- Retrieval practice
- Simulation
- Deliberate practice
- Memory techniques
- Learning preferences

### Question

**Can learning about learning accelerate chess learning?**

This connects H3 (transfer of learning skills) and the Laris/ChessGuide division: ChessGuide observes domain skill; meta-learning signals may appear as cross-cutting Attention and Understanding events.

---

## Observation Targets

### Engagement (cross-cutting)

- Enjoyment
- Curiosity
- Boredom
- Frustration

*Relates to H6. Registers as Attention and Observation signals, not game outcomes.*

### Continuity (cross-cutting)

- Return frequency
- Learning persistence
- Session spacing

*Relates to H2. Primary longitudinal predictor under test.*

### Attention

- What attracts attention
- What is repeatedly missed

### Understanding

- Concept formation
- Explanation quality (learner can articulate *why*, not only *what*)

### Knowledge

- Recall
- Recognition
- Transfer (including learning-skill transfer per H3)

### Wisdom

- Judgment
- Prioritization
- Strategy (including practice and study strategy)

### Stewardship

- Self-directed improvement
- Practice selection
- Learning maintenance

### Transformation

- Observable change over time (skill and/or learning-capability change)

---

## LearningTrace Requirements

Each learning event should be representable as:

```
Actor
  ↓
Episode
  ↓
Event
```

with traceability across the learning chain.

### Minimum useful LearningTrace (pilot)

| Element | Requirement |
|---------|-------------|
| **Actor** | Identified learner (single subject for Draft 1) |
| **Episode** | Bounded session or study period with start/end |
| **Event** | Time-ordered learning-bearing occurrence |
| **Chain link** | Each event mappable to ≥1 chain stage |
| **Anchor** | At least one stable reference point per episode (position, concept, or reflection artefact) |
| **Provenance** | Steward or learner-recorded; Measured vs Perceived noted where applicable (IM-1) |

The pilot should **identify** the minimum useful LearningTrace — not prescribe final product schema. Aligns directionally with [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md).

### Trace invariants (pilot)

| ID | Invariant |
|----|-----------|
| I-1 | No Transformation claim without traceable Stewardship lineage |
| I-2 | Transformation claims require steward validation |
| I-3 | Activity (moves played) ≠ Learning (understanding or capability change) unless linked by evidence |
| I-4 | Replay means reconstruction from trace artefacts, not memory alone |
| I-5 | FLL-1 complements FLL-0; does not replace artifact validation |

---

## Simulation

Investigate the role of **simulation** (H5).

### Examples

- Candidate moves
- Imagined futures
- Hypothetical positions
- What-if analysis

### Question

**How much learning occurs through internal simulation?**

### Observation approach

Register simulation events separately from board moves where possible (verbal report, written variation, or flagged study episode). Compare learning outcomes in episodes with high vs low simulation signal.

---

## Integration

Investigate the role of **integration** (H4).

### Question

**How much learning occurs outside active study?**

### Examples

- Reflection
- Sleep
- Breaks
- Default mode processing
- Spontaneous insight

### Observation approach

Record **integration windows** (time between active episodes) and **insight events** (learner-reported or steward-observed). Test whether Transformation correlates with integration time, not only session intensity.

---

## Pilot Protocol

### Phase 0 — Grounding

- Learner and steward confirm pilot scope and consent
- Baseline: current self-assessed chess level, learning goals, and learning preferences
- Grounding documents: CG-000, CG-001, CB-000A (chain model)

### Phase 1 — Reality & Observation

- Record real chess activity (play, study, review) as episodes
- Register Observation events: moves, positions, time, engagement signals
- Distinguish **activity** from **learning-bearing** events

### Phase 2 — Attention & Understanding

- Identify what learner attends to (and misses)
- Capture explanation attempts (Understanding artefacts)
- Note enjoyment, curiosity, frustration (H6)

### Phase 3 — Knowledge & Wisdom

- Test recall and recognition across episodes
- Observe judgment in practice selection and in-game decisions
- Note transfer of learning skills (H3)

### Phase 4 — Stewardship

- Learner selects and maintains practice; steward observes custody of LearningTrace
- Record self-directed improvement choices

### Phase 5 — Integration & Simulation

- Track spacing, breaks, reflection, insight (H4)
- Track simulation activity (H5)

### Phase 6 — Transformation assessment

- Steward evaluates: observable change over N episodes
- Compare Measured State vs Perceived State (IM-1)
- Verdict: supported / supported with qualifications / not supported

### Phase 7 — Replay & validation

- Reconstruct learning journey from trace only
- Third party or steward replays chain without live re-experience
- Confirm: observed → explained → replayed → validated

---

## Validation Approach

| Claim type | Validation |
|------------|------------|
| Observation | Trace contains time-ordered events with provenance |
| Attention / Understanding | Learner or steward artefact (explanation, highlight log) |
| Knowledge / Wisdom | Recall test, decision quality over episodes |
| Stewardship | Trace custody and practice-selection record |
| Transformation | Steward sign-off; requires prior chain linkage; IM-1 considered |
| Simulation / Integration | Explicit event types; correlated with Transformation timeline |

**Federation certification note (per CG-DEP-001):** This pilot uses **domain-level steward validation**. Federation CTV certification is not required for Draft 1 pilot completion but is noted as future upgrade path.

---

## Success Criteria

The pilot **succeeds** if a learning transformation can be:

- **Observed** — registered in trace with chain mapping
- **Explained** — steward and learner can articulate *how* change occurred
- **Replayed** — journey reconstructable from trace artefacts
- **Validated** — steward confirms Transformation is distinguishable from activity, exposure, or repetition alone

---

## Failure Criteria

The pilot **fails** if:

- Learning cannot be distinguished from **activity**, **exposure**, or **repetition**
- Transformation cannot be **traced** through the chain to Observation
- Continuity and integration signals (H2, H4) cannot be registered at all
- Replay from trace fails to reconstruct the claimed learning path

---

## Assumptions

| ID | Assumption |
|----|------------|
| A-1 | A single human subject suffices for model validation |
| A-2 | Chess episodes produce sufficient Observation density for chain mapping |
| A-3 | Steward time is available for validation and replay review |
| A-4 | Learning-skill signals may be partially self-reported |
| A-5 | ALP protocols (FLL-0) provide methodological precedent, not content |
| A-6 | Full Creator OAT/CTV runtimes are not required for Draft 1 execution |

## Risks

| ID | Risk |
|----|------|
| R-1 | Confusing rating change with Transformation |
| R-2 | Over-attributing learning to intensity vs continuity (H2 untestable) |
| R-3 | Simulation/integration events under-reported |
| R-4 | Steward bias toward positive Transformation verdict |
| R-5 | Single-subject limits generalisation (accepted for Draft 1) |

## Relationship to ALP Series

| Experiment | Path | FLL-1 relationship |
|------------|------|-------------------|
| ALP-1 | Artifact learning | FLL-1 extends validation into **live domain** |
| ALP-2 | Meta-learning | FLL-1 may surface meta-learning signals (Learning Before Chess) |
| ALP-3 | Cross-artifact | FLL-1 traces may later integrate governance + domain artefacts |

---

## Document Success Criteria

This document clearly defines:

- The first operational learning pilot
- What is being validated (learning, not chess skill alone)
- How learning differs from chess activity
- The role of continuity (H2)
- The role of simulation (H5)
- The role of integration (H4)
- The role of transformation

while remaining consistent with:

```
Reality → Observation → Attention → Understanding → Knowledge → Wisdom → Stewardship → Transformation
```

---

## References

| Document | Title |
|----------|--------|
| CG-000 | ChessGuide Identity |
| CG-001 | Product Vision |
| CG-002 | Federation Relationship |
| CG-DEP-001 | Federation Dependency Analysis |
| CG-FLL-002 | Learning Semantics |
| CB-000A | Longitudinal Learning Model (inherited) |
| CB-002 | Longitudinal Skill Development Domain (inherited) |
| CB-005 | LearningTrace Product Schema (inherited) |
| ALP-1 | Artifact Learning Pilot — FLL-0 (inherited) |
| ALP-2 | Longitudinal Learning Model Pilot — FLL-0M (inherited) |
| ALP-3 | Multi-Artifact Learning Pilot — FLL-0X (inherited) |
