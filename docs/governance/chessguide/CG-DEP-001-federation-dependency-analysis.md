# CG-DEP-001 — Federation Dependency Analysis

| Field | Value |
|-------|-------|
| **Document ID** | CG-DEP-001 |
| **Title** | Federation Dependency Analysis |
| **Version** | Draft 1 |
| **Strategic significance** | Critical |
| **Scope** | ChessGuide |
| **Classification** | Federation Dependency Analysis |
| **Status** | Draft 1 |
| **Parents** | [CG-000 — ChessGuide Identity](CG-000-chessguide-identity.md), [CG-001 — Product Vision](CG-001-product-vision.md), [CG-002 — Federation Relationship](CG-002-federation-relationship.md) |

**Related (inherited):** [CB-000 — Federation Alignment](../chessbuddy/CB-000-federation-alignment.md), [CB-000A — Longitudinal Learning Model](../chessbuddy/CB-000A-longitudinal-learning-model.md), [ALP-1](../chessbuddy/ALP-1-artifact-learning-pilot.md), [ALP-2](../chessbuddy/ALP-2-longitudinal-learning-model-pilot.md), [ALP-3](../chessbuddy/ALP-3-multi-artifact-learning-pilot.md)

---

## Context

| Document | Established |
|----------|-------------|
| [CG-000](CG-000-chessguide-identity.md) | What ChessGuide is |
| [CG-001](CG-001-product-vision.md) | Why ChessGuide exists |
| [CG-002](CG-002-federation-relationship.md) | How ChessGuide relates to the Federation |

The next question is:

**What must exist within the Federation before ChessGuide can become the first operational domain of the Continuity-Based Learning Platform?**

This document identifies **dependency relationships only**.

**Out of scope:** Roadmap, architecture, implementation.

---

## Purpose

Identify:

- Critical dependencies
- Important dependencies
- Optional dependencies
- Blockers
- Parallelizable work
- Long-term dependencies

---

## Core Question

**What must exist before ChessGuide can validate longitudinal learning in practice?**

---

## Analysis Method

For each federation project, evaluate:

| Dimension | Question |
|-----------|----------|
| **Current value** | What value does this project provide to ChessGuide? |
| **Missing capabilities** | What capabilities are not yet available? |
| **Dependency level** | Critical / Important / Useful / Optional |
| **Earliest usage point** | When would ChessGuide first benefit? |
| **Blocking risk** | What becomes impossible if this dependency is absent? |

---

## Creator Analysis

**Evaluate:** OAT-1a Observation Runtime, OAT-1b Attention Runtime, OAT-1c Anchor Runtime, Reasoning Runtime, Continuity Trace, Validation Runtime, LearningTrace implications.

### Current value

Creator provides the **foundational learning infrastructure** for the federation chain: structured observation, attention filtering, anchor points, reasoning continuity, trace reconstruction, and validation — the generic substrate on which domain LearningTraces should eventually rest.

### Missing capabilities

| Capability | Status (relative to ChessGuide) |
|------------|----------------------------------|
| OAT-1a Observation Runtime | Not available as federation runtime |
| OAT-1b Attention Runtime | Not available as federation runtime |
| OAT-1c Anchor Runtime | Not available as federation runtime |
| Reasoning Runtime | Not available as federation runtime |
| Continuity Trace (CTP) | Conceptual only; no shared federation trace store |
| Validation Runtime (CTV) | Conceptual only; no shared validation service |
| Federation LearningTrace schema binding | Partially specified (CB-005); not wired to Creator |

### Can ChessGuide validate learning without Creator?

**Partially yes; fully no.**

| Validation path | Without Creator |
|-----------------|-----------------|
| **Artifact / governance learning** (FLL-0, FLL-0M, FLL-0X) | **Yes** — ALP-1, ALP-2, ALP-3 already validated this without Creator runtimes |
| **Domain skill learning in live chess** (FLL-1) | **No** — requires observation-to-transformation pipeline; Creator capabilities are the intended federation substrate |

### Blocker capabilities (for full domain validation)

| Blocker | Why |
|---------|-----|
| **OAT-1a** (Observation) | Cannot produce federation-standard observation stream from chess reality |
| **Anchor + Continuity Trace** | Cannot reconstruct longitudinal learning path across sessions at federation level |
| **Validation Runtime** | Cannot federation-validate Transformation claims against trace lineage |

**Dependency level:** **Critical** for full operational domain validation; **Important** for first domain pilot with local/ad hoc observation.

**Earliest usage point:** First domain Learning Pilot (after minimum local observation exists).

**Parallelizable work:** ChessGuide can define domain observation semantics and product LearningTrace events (CB-005 lineage) **in parallel** with Creator runtime development.

---

## Laris Analysis

**Evaluate:** Guidance, explanation, teaching, reflection, cross-domain learning.

### Current value

Laris is the **federation guide** — the intended source of learning-oriented guidance, explanation quality, and cross-domain learning understanding. ChessGuide inherits the *principle* (domain knowledge vs learning guidance) from CG-000/CG-002.

### Missing capabilities

- No operational Laris guidance runtime
- No federation explanation layer
- No cross-domain reflection service
- No shared teaching persona or guidance policy engine

### Can ChessGuide function before Laris exists?

**Yes.**

ChessGuide can observe chess, record traces, and provide **domain-scoped** guidance using chess-specific knowledge — without Laris as a running system.

### Can ChessGuide validate learning before Laris exists?

**Yes, with qualifications.**

| What can be validated | Without Laris |
|-----------------------|---------------|
| LearningTrace construction | Yes |
| Longitudinal skill trends | Yes (with observation + steward) |
| Transformation claims (with CTV/steward) | Yes |
| Federation-grade **learning guidance** quality | Partially — domain guidance only |
| Cross-domain learning reflection | No |

### What requires Laris?

- General learning guidance (not chess-specific)
- Teaching and explanation policies that transfer across domains
- Reflection that connects chess learning to how the learner learns elsewhere
- Federation guide role in the Laris → Domain hierarchy

**Dependency level:** **Important** (not Critical for first pilot).

**Earliest usage point:** General Learning Validation phase; improves quality throughout.

**Blocking risk if absent:** ChessGuide may over-fit to chess pedagogy; cross-domain generalisation of *learning* (not skill) remains unvalidated.

---

## BioChronos Analysis

**Evaluate:** Longitudinal trajectories, transformation analysis, progress modelling, time-based change.

### Current value

BioChronos offers **reference patterns** for longitudinal trajectories, transformation over time, and progress modelling — applicable by analogy to skill development.

### Concepts that transfer directly

- Trajectories over time
- Transformation as measurable change
- Longitudinal analysis (trends, not snapshots)
- Progress modelling across episodes
- IM-1-style gap analysis over time

### Domain-specific concepts

- Biological signals, rhythms, and health markers
- BioChronos-specific anchors and observation types
- Regulatory or physiological constraints

**Dependency level:** **Useful** (conceptual alignment; not a runtime blocker).

**Earliest usage point:** Pattern refinement during General Learning Validation; mutual learning with BioChronos stewards.

**Blocking risk if absent:** None for ChessGuide operational start. Risk is **missed cross-domain insight**, not blocked delivery.

---

## Finkairos Analysis

**Evaluate:** Stewardship, long-term decision quality, outcome analysis, goal progression.

### Concepts that transfer to skill development

- **Stewardship** — preserving and responsibly curating LearningTrace custody
- **Decision quality** — move choices as decisions with consequences
- **Long-term outcomes** — skill trajectory vs single-game result
- **Goal progression** — intentional improvement targets over time
- **Learning from consequences** — connecting choices to downstream skill effects

**Dependency level:** **Useful** (conceptual; stewardship stage alignment).

**Earliest usage point:** Stewardship and Transformation validation design.

**Blocking risk if absent:** None critical. ChessGuide defines skill stewardship within its domain without Finkairos runtime.

---

## Domosofi Analysis

**Evaluate:** Observation, maintenance, improvement, physical stewardship.

### Concepts that transfer to skill development

- **Observation** — regular, structured registration of state
- **Maintenance** — sustaining strengths; preventing skill decay
- **Improvement** — deliberate upgrade of capability over time
- **Physical stewardship** — analogy to caring for skill as a maintained asset (not property)

**Dependency level:** **Optional** for early pilots; **Useful** for stewardship narrative and UX principles.

**Earliest usage point:** Stewardship stage articulation; physical chess context (CB-007 lineage).

**Blocking risk if absent:** None for digital-first pilots. Relevant when physical board / environment integration matures.

---

## Federation Readiness Assessment

### Required before First Learning Pilot

| Capability | Source | Notes |
|------------|--------|-------|
| Federation learning chain model (semantic) | CB-000A, CG governance | **Exists** |
| LearningTrace concept and product schema direction | CB-005 | **Exists** (governance) |
| Steward validation process | ALP-1 precedent | **Exists** (human steward) |
| At least one learnable artifact or observable domain event | ChessGuide repo / legacy app | **Exists** (artifact path proven; domain path partial) |
| Identity and federation relationship clarity | CG-000, CG-001, CG-002 | **Exists** |

### Required before Android Learning Pilot

| Capability | Source | Notes |
|------------|--------|-------|
| Domain observation capture (moves, position, session) | ChessGuide + minimum OAT semantics | **Partial** (legacy app; not federation OAT) |
| Session-local LearningTrace persistence | ChessGuide product | **Not federation-ready** |
| Attention / anchor semantics (product-level) | ChessGuide | **Governance only** |
| Offline-capable trace continuity | ChessGuide / CTP direction | **Missing** |

### Required before General Learning Validation

| Capability | Source | Notes |
|------------|--------|-------|
| Creator OAT runtimes (or equivalent federation contract) | Creator | **Missing** |
| Continuity Trace reconstruction (CTP) | Creator | **Missing** |
| Validation Runtime (CTV) for Transformation claims | Creator | **Missing** |
| Laris guidance layer (minimum) | Laris | **Missing** |
| Cross-session longitudinal analysis | ChessGuide + Creator | **Missing** |
| IM-1 longitudinal gap tracking | CB-000A model | **Conceptual only** |

### Nice to have

| Capability | Project |
|------------|---------|
| BioChronos trajectory patterns | BioChronos |
| Finkairos stewardship frameworks | Finkairos |
| Domosofi physical stewardship patterns | Domosofi |
| Automated meta-learning scoring | Federation tooling |
| Multi-domain LearningTrace correlation | Future federation |

---

## Dependency Matrix

| Capability | Project | Dependency Level | Blocking? |
|------------|---------|------------------|-----------|
| Federation alignment semantics | CB-000 / CG-002 | Critical | No (exists) |
| Longitudinal learning model | CB-000A | Critical | No (exists) |
| LearningTrace schema (product) | CB-005 | Critical | No (governance exists) |
| Artifact learning validation protocol | ALP-1 (FLL-0) | Important | No (proven) |
| Meta-learning validation protocol | ALP-2 (FLL-0M) | Useful | No |
| Cross-artifact learning protocol | ALP-3 (FLL-0X) | Useful | No |
| ChessGuide identity & vision | CG-000, CG-001 | Critical | No (exists) |
| Domain observation (chess events) | ChessGuide | Critical | **Yes** for FLL-1 (partial today) |
| OAT-1a Observation Runtime | Creator | Critical | **Yes** for federation-standard FLL-1 |
| OAT-1b Attention Runtime | Creator | Important | No for pilot; Yes for full chain |
| OAT-1c Anchor Runtime | Creator | Important | No for pilot; Yes for full chain |
| Reasoning Runtime | Creator | Important | No for early pilot |
| Continuity Trace (CTP) | Creator | Critical | **Yes** for cross-session federation validation |
| Validation Runtime (CTV) | Creator | Critical | **Yes** for certified Transformation claims |
| Guidance & explanation (learning) | Laris | Important | No for first pilot |
| Cross-domain learning reflection | Laris | Useful | No |
| Trajectory / transformation patterns | BioChronos | Useful | No |
| Stewardship / decision quality patterns | Finkairos | Optional | No |
| Physical stewardship patterns | Domosofi | Optional | No |
| Legacy chess UI / engine reference | ChessGuide codebase | Useful | No (exists; not federation identity) |

---

## Minimum Viable Federation

The **smallest subset** of federation capabilities needed to validate the full learning chain **inside ChessGuide**:

```
Reality          → Chess play session (physical or digital)
Observation      → Domain event capture (move, FEN, time) — product or OAT-1a contract
Attention        → Highlight learning-relevant signals — product minimum; OAT-1b ideal
Understanding    → Interpret patterns in trace — domain reasoning; Reasoning Runtime ideal
Knowledge        → Consolidate recurring patterns — product LearningTrace artefacts
Wisdom           → Level-appropriate guidance — domain first; Laris enriches
Stewardship      → Player-owned trace custody — CB-005 semantics
Transformation   → Measurable skill change claim — requires steward + CTV minimum
```

### Minimum Viable Federation (MVF) subset

| Layer | MVF requirement | Can ChessGuide supply alone? |
|-------|-------------------|------------------------------|
| Reality | Chess session | Yes |
| Observation | Structured chess events | Partial (legacy app) |
| Attention | Learning signal marking | Product-level minimum |
| Understanding | Move/position reasoning | Partial (engine as reference) |
| Knowledge | Pattern consolidation in trace | Product-level minimum |
| Wisdom | Pedagogical guidance | Domain-only without Laris |
| Stewardship | Trace ownership model | Yes (governance + product design) |
| Transformation | Validated change over N sessions | Requires steward; CTV ideal |

**MVF conclusion:** ChessGuide can validate the chain **semantically and in product** with steward oversight **before** Creator and Laris are fully implemented — provided observation and LearningTrace persistence exist at domain level. Federation **certification** of Transformation requires Creator CTP + CTV.

---

## Federation Dependency Model

### What ChessGuide can do now

- Serve as **first operational skill domain** in governance and identity (CG-000–002)
- Continue **artifact learning validation** (FLL-0 / FLL-0M / FLL-0X lineage — proven by ALP series)
- Use **legacy application** for chess observation primitives (FEN, moves, clock, history)
- Define **domain LearningTrace semantics** aligned with CB-005
- Validate **longitudinal learning concepts** with human steward (ALP precedent)
- Inform **future domains** through documented patterns (CG-002)

### What ChessGuide cannot do yet

- Produce **federation-standard** observation streams via Creator OAT runtimes
- Reconstruct **cross-artifact continuity** at platform level without Creator CTP
- **Certify Transformation** through federation Validation Runtime (CTV)
- Deliver **Laris-grade** cross-domain learning guidance
- Correlate LearningTraces with BioChronos / Finkairos / Domosofi at runtime

### What ChessGuide depends on

| Dependency | For |
|------------|-----|
| **Creator** (OAT, CTP, CTV) | Federation-certified domain learning validation |
| **Laris** | General learning guidance and cross-domain reflection |
| **CB-005 / LearningTrace governance** | Trace structure and stewardship invariants |
| **Human steward** | Transformation approval (until automated CTV matures) |

### What can be built independently

- ChessGuide governance line (CG-*)
- Domain observation schema and event model
- Product LearningTrace storage and replay (domain-scoped)
- Chess-specific guidance and explanation (domain wisdom)
- Pilot protocols extending ALP methodology to live chess (FLL-1 design)
- Android / mobile capture UX (product layer)

### What is currently blocked

| Blocked outcome | Blocker |
|-----------------|---------|
| Federation-certified Transformation claims | Creator CTV + CTP |
| Shared observation contract across domains | Creator OAT-1a |
| Cross-domain learning guidance at scale | Laris |
| Fully automated steward scoring | Federation tooling (future) |

---

## Parallel Work Opportunities

| Track | Owner | Parallel with |
|-------|-------|---------------|
| ChessGuide domain LearningTrace design | ChessGuide | Creator OAT specification |
| First domain learning pilot (local observation) | ChessGuide | Creator runtime build |
| CG governance completion | ChessGuide | All federation projects |
| Creator OAT-1a contract definition | Creator | ChessGuide event model |
| Laris guidance principles (governance) | Laris | ChessGuide domain wisdom |
| ALP-style pilot protocol for FLL-1 | ChessGuide + steward | Creator CTP MVP |

**Key insight:** Artifact validation (ALP) and domain validation (FLL-1) are **separate paths**. ChessGuide must not wait for full Creator before **starting** domain pilots — but must not **claim** federation certification without Creator CTP/CTV.

---

## Strategic Question

**Could ChessGuide become the first operational learning domain before the Federation is fully implemented?**

### Answer: **Yes.**

### How

1. **Governance and identity** — ChessGuide is already the active line (CG-000–002).
2. **Artifact path proven** — ALP-1/2/3 validated Continuity-Based Learning without domain runtime; ChessGuide continues this lineage.
3. **Domain path incremental** — Begin FLL-1 with product-level observation + LearningTrace + human steward; align event contracts with future Creator OAT-1a rather than waiting for Creator delivery.
4. **Explicit scope boundaries** — Domain pilots produce **ChessGuide LearningTraces** with steward validation; federation certification is a **later upgrade** when Creator CTP/CTV attach.
5. **Laris enriches, not gates** — Domain guidance suffices for early operational status; Laris adds cross-domain learning understanding when available.

### If the answer were no (why not)

Full federation implementation would be required only if ChessGuide were defined as **the platform itself** rather than **one domain**. CG-002 explicitly rejects that: ChessGuide is one domain within the Federation, not the Federation.

---

## Success Criteria

This document clearly explains:

- Federation dependencies
- Critical blockers
- Parallel work opportunities
- Minimum Viable Federation
- What ChessGuide can validate immediately
- What ChessGuide must wait for
- The path toward the first operational learning domain

---

## References

| Document | Title |
|----------|--------|
| CG-000 | ChessGuide Identity |
| CG-001 | Product Vision |
| CG-002 | Federation Relationship |
| CB-000 | Federation Alignment (inherited) |
| CB-000A | Longitudinal Learning Model (inherited) |
| CB-005 | LearningTrace Product Schema (inherited) |
| ALP-1 | Artifact Learning Pilot — FLL-0 (inherited) |
| ALP-2 | Longitudinal Learning Model Pilot — FLL-0M (inherited) |
| ALP-3 | Multi-Artifact Learning Pilot — FLL-0X (inherited) |
