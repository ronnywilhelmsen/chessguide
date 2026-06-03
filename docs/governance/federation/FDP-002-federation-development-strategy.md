# FDP-002 — Federation Development Strategy

| Field | Value |
|-------|-------|
| **Document ID** | FDP-002 |
| **Title** | Federation Development Strategy |
| **Version** | Draft 1 |
| **Strategic significance** | Critical |
| **Scope** | Federation |
| **Classification** | Federation Strategy |
| **Status** | Draft 1 |

**Parents:** [FDP-001 — Federation Development Dependencies](FDP-001-federation-development-dependencies.md), [FCS-001 — Federation Continuity Study](FCS-001-federation-continuity-study.md), [CB-000 — Federation Alignment](../chessbuddy/CB-000-federation-alignment.md), [CG-002 — Federation Relationship](../chessguide/CG-002-federation-relationship.md), [CG-DEP-001 — Federation Dependency Analysis](../chessguide/CG-DEP-001-federation-dependency-analysis.md)

**Related domains:** Creator, BioChronos, Finkairos, Domosofi, ChessGuide, Laris

**Out of scope:** Implementation, runtime design, APIs, schemas, product requirements.

---

## Context

[FDP-001](FDP-001-federation-development-dependencies.md) established:

- Dependency relationships
- Critical paths
- Bottlenecks
- Leverage points
- **FRL** maturity levels

The federation now requires a **strategy for coordinating development** across domains.

The question is no longer *what depends on what?*

The question is:

**How should development be coordinated to maximize federation progress?**

---

## Purpose

Define:

- Federation development priorities
- Leadership responsibilities
- Focus-switch criteria
- Parallel work principles
- Sequencing principles
- Leverage-first development
- Federation execution model

---

## Core Question

**How should federation development be coordinated over time?**

---

# Part I — Current Position Assessment

## Federation FRL status (evidence-based)

| FRL | Name | Federation status | Primary evidence |
|-----|------|-------------------|------------------|
| **FRL-0** | Architecture & artifact validation | **Achieved** | ALP-1/2/3 (FLL-0/0M/0X) |
| **FRL-1** | Federation & domain semantics | **In progress** (~75%) | FCS-001, CG-000–002, CG-FLL-002/003, FDP-001 |
| **FRL-2** | Pilot domain operational | **Not started** | CG-FLL-001 defined; execution pending |
| **FRL-3** | Federation-certified domain validation | **Blocked** | Creator CTP/CTV absent |
| **FRL-4** | Cross-domain continuity | **Future** | — |
| **FRL-5** | Operational federation | **Future** | — |

**Current federation position:** **Late FRL-1 → entering FRL-2.**

---

## Domain position (using FDP-001 evidence)

| Domain | FRL-relevant position | Leadership focus now |
|--------|----------------------|----------------------|
| **Creator** | Semantics defined; **runtime critical path** | Infrastructure — **primary bottleneck owner** |
| **ChessGuide** | Governance strong; **FRL-2 lead** | Operational learning validation |
| **Laris** | Role defined; no governance line complete | **Dormant** for runtime; light governance later |
| **BioChronos** | Conceptual alignment only | **Dormant** — semantics on demand |
| **Finkairos** | Conceptual alignment only | **Dormant** — semantics on demand |
| **Domosofi** | Conceptual alignment only | **Dormant** — semantics on demand |

---

# Part II — Federation Development Principles

Principles below are **refined from** the draft list using ALP, CG-DEP-001, and FDP-001 evidence. Two principles are **replaced**.

| # | Principle | Definition | Evidence |
|---|-----------|------------|----------|
| **P1** | **Leverage before completeness** | Build the smallest capability that unlocks the most domains or validation steps; defer full-stack completeness | FDP-001: OAT-1a + CTP contract > full Creator |
| **P2** | **Semantics before implementation** | Governance, continuity, and dependency clarity precede shared runtime | FRL-0/1 before FRL-3; CG-DEP-001 MVF |
| **P3** | **Validation before scale** | Prove one path (artifact, then domain pilot) before multi-domain rollout | ALP before FLL-1; FRL-2 before FRL-5 |
| **P4** | **Federation coherence before local optimization** | Domain autonomy preserved, but trace/validation contracts align federation-wide | CB-000 A-5; FCS-001 CI-1–CI-5 |
| **P5** | **Evidence before assertion** | Pilots, stewards, and traces — not claims without lineage | ALP invariants; CB-000A chain rule |
| **P6** | **Parallel semantics, serial certification** | Multiple domains may advance **governance** in parallel; **federation certification** follows Creator serially | FDP-001 parallel work table |

**Replaced from draft:**

- ~~Reality before theory~~ → **P5 Evidence before assertion** (reality is validated through pilots and traces, not opposed to theory/semantics)
- ~~Federation before optimization~~ → absorbed into **P4** (coherence over premature domain polish)

---

# Part III — Leadership Model

## Domain leadership responsibilities

| Domain | Leads | Does not lead |
|--------|-------|----------------|
| **Creator** | Federation infrastructure: OAT, CTP, CTV, trace core, validation contracts | Domain content, chess pedagogy, biological models |
| **ChessGuide** | Operational learning validation; FLL-1; learning continuity semantics; domain trace reference | Federation-wide governance platform, Creator runtime |
| **Laris** | Pedagogical continuity; learning guidance; cross-domain mentorship (when active) | Domain skill content, trace infrastructure |
| **BioChronos** | Biological continuity; recovery/rhythm longitudinal context | Learning trace mechanics, chess |
| **Finkairos** | Financial continuity; stewardship; external simulation patterns | Domain learning pilots |
| **Domosofi** | Physical/environment stewardship continuity | Skill learning, financial engines |

## Federation coordination roles

| Role | Holder (Draft 1) | Responsibility |
|------|------------------|----------------|
| **Federation semantics** | Cross-cutting docs (FCS-001, FDP-001/002) | Continuity, dependencies, FRL vocabulary |
| **Critical path owner** | **Creator** | OAT → CTP → CTV delivery |
| **Validation laboratory** | **ChessGuide** | FLL-1 and domain trace evidence feeding Creator specs |
| **Steward authority** | Human steward | Transformation approval until CTV matures (ALP precedent) |
| **Pedagogical guide** | **Laris** (future) | Wisdom layer enrichment post-FRL-3 |

**Clarification:** ChessGuide is **not** federation platform lead. ChessGuide is **first operational domain** and **evidence generator** for infrastructure (CG-002, CG-DEP-001).

---

# Part IV — Focus Allocation Strategy

## Default focus allocation (current phase: FRL-1 → FRL-2)

| Priority tier | Domains | Allocation |
|---------------|---------|------------|
| **Tier 1 — Active** | ChessGuide, Creator (contract/spec) | Majority of coordinated effort |
| **Tier 2 — Light** | Federation docs (FCS, FDP) | Maintenance, reconciliation |
| **Tier 3 — Dormant** | Laris, BioChronos, Finkairos, Domosofi | Semantics only when pulled by dependency or FRL gate |

## When attention moves between domains

| Transition | Trigger | Rationale |
|------------|---------|-----------|
| **ChessGuide → Creator (spec)** | Domain observation events defined from FLL-1 prep | OAT-1a must reflect real events (FDP-001 O-2) |
| **Creator → ChessGuide (pilot)** | OAT-1a contract draft available | Pilot validates contract against reality |
| **ChessGuide heavy → Creator heavy** | FRL-2 exit criteria met | Certification path requires CTP/CTV build |
| **Any → Laris** | FRL-3 entry criteria met | Cross-domain guidance needs domain traces |
| **Any → BioChronos** | FRL-4 planning OR integration biology questions in FLL-1 | OQ-7 in FCS-001 |
| **Dormant domains wake** | FRL-4+ OR explicit second-domain charter | Avoid dilution before FRL-3 |

## When ChessGuide stops and Creator starts

**ChessGuide does not stop.** Strategy is **overlap, not handoff:**

- **ChessGuide continues:** FLL-1 execution, domain trace, governance
- **Creator starts/escalates:** When ChessGuide produces **observation event catalogue** and **trace replay requirements** from FLL-1 design or pilot

**Creator becomes primary focus** when FRL-2 exit is achieved and **CTP MVP** is the bottleneck (FDP-001 critical path).

## When additional domains remain dormant

BioChronos, Finkairos, Domosofi remain **dormant for implementation** until:

- FRL-3 achieved, **or**
- Explicit federation decision to add semantic docs for FRL-4 planning

Laris remains **dormant for runtime** until FRL-3; **governance** may begin at FRL-2 exit.

---

# Part V — Focus Switch Criteria

Objective criteria derived from FDP-001 FRL definitions.

| Criterion ID | Condition | Switch focus to |
|--------------|-----------|-----------------|
| **FS-1** | FRL-1 exit criteria met (see Part VIII) | **ChessGuide** FLL-1 execution (FRL-2 entry) |
| **FS-2** | CG-FLL-001 pilot protocol approved + observation targets listed | **ChessGuide** pilot prep |
| **FS-3** | Domain observation event list drafted (≥10 event types) | **Creator** OAT-1a contract |
| **FS-4** | OAT-1a contract Draft 1 published | **ChessGuide** pilot with contract alignment |
| **FS-5** | FRL-2 exit met (pilot trace + steward validation) | **Creator** CTP MVP (primary) |
| **FS-6** | CTP MVP replays FLL-1 trace | **Creator** CTV MVP |
| **FS-7** | FRL-3 exit met | **Laris** governance + guidance integration (see [FDS-001](FDS-001-dialogue-continuity-study.md)) |
| **FS-8** | Capability X blocks all domains (per FDP-001 matrix) | **Dependency owner** for X |
| **FS-9** | New domain charter approved at FRL-4 gate | **Named domain** semantics + pilot plan |

**Anti-criteria (do not switch early):**

- Do **not** open second domain implementation before FRL-3
- Do **not** prioritize BioChronos/Finkairos runtime before Creator CTP
- Do **not** build unified schema before OAT-1a contract (FDP-001 R-3)

---

# Part VI — Parallel Development Strategy

## Safe parallel work

| Work stream A | Work stream B | Why safe |
|---------------|---------------|----------|
| ChessGuide FLL-1 pilot | Creator OAT-1a spec | Contract aligns to events; no shared runtime yet |
| ChessGuide CG-FLL / trace governance | BioChronos semantics doc | No runtime dependency |
| Finkairos / Domosofi semantics | Creator CTP design | Conceptual only |
| Federation FDP/FCS maintenance | Domain pilots | Planning does not block pilot |

## Risky parallel work

| Combination | Risk | Mitigation |
|-------------|------|------------|
| Creator CTP build **without** FLL-1 events | Wrong abstraction | FS-3 before CTP code |
| Laris runtime **before** domain trace | Untethered guidance | FS-7 gate |
| Second domain pilot **before** FRL-3 | Diluted critical path | FRL gates |
| Unified Trace Core **before** domain trace proven | Over-engineering | FDP-001 R-3 |

## Wasteful parallel work

| Activity | Why wasteful |
|----------|--------------|
| Full BioChronos + Finkairos + Domosofi runtime before FRL-3 | No certification consumer |
| ChessGuide UI rewrite before FLL-1 trace semantics | Implementation before validation |
| Laris full platform before CG-FLL stable | Missing learning vocabulary |
| Duplicate trace schemas per domain before OAT-1a | Conflicts federation contract |

---

# Part VII — Federation Execution Loop

Derived from ALP pilot cycle, CG-DEP-001 MVF path, and FDP-001 critical path — **not assumed**, **observed pattern**:

```
Assess FRL position
    ↓
Identify bottleneck (FDP-001 matrix)
    ↓
Select highest-leverage work (P1)
    ↓
Execute with semantics-first guard (P2)
    ↓
Validate (pilot / steward / trace replay)
    ↓
Record evidence; update dependencies
    ↓
Reassess FRL; apply focus switch criteria (FS-*)
    ↓
Repeat
```

### Loop invariants

| ID | Invariant |
|----|-----------|
| EL-1 | Every cycle produces **evidence artefact** (doc, trace, or validation record) |
| EL-2 | Bottleneck owner is **explicit** before work starts |
| EL-3 | No FRL advance without **exit criteria** met (Part VIII) |
| EL-4 | Federation steward (human) approves Transformation and FRL gates until CTV exists |

---

# Part VIII — Strategic Bottleneck Analysis

## Current bottlenecks

| Bottleneck | Owner | Impact |
|------------|-------|--------|
| **FLL-1 not executed** | ChessGuide | FRL-2 blocked |
| **OAT-1a contract absent** | Creator | Federation-standard observation blocked |
| **CTP/CTV absent** | Creator | FRL-3 blocked |
| **FCA-1 artefacts outside repo** | Federation | Planning alignment risk (FDP-001 R-6) |

## Future bottlenecks

| Bottleneck | Expected at |
|------------|-------------|
| CTV automation maturity | FRL-3 → FRL-4 |
| Generic Trace Core design | FRL-4 |
| Cross-domain correlation | FRL-4 |
| Laris runtime scale | FRL-4 |
| Second domain staffing | FRL-4/5 |

## Potential bottlenecks (watch)

| Signal | Response |
|--------|----------|
| ChessGuide treated as platform | Reassert CG-002 domain boundary |
| Creator delays > 2 FRL cycles | Extend domain-only validation; document gap |
| Semantic drift between domains | FCS-001 CI review |
| Steward capacity exhausted | Prioritize FLL-1 scope reduction |

---

# Part IX — FRL Advancement Strategy

## FRL-0 — Architecture & artifact validation

| | Criteria |
|---|----------|
| **Entry** | Federation learning chain adopted (CB-000) |
| **Exit** | ALP-1/2/3 steward-approved reference experiments |
| **Evidence** | Published ALP traces; FLL-0/0M/0X designation |
| **Status** | **Complete** |

## FRL-1 — Federation & domain semantics

| | Criteria |
|---|----------|
| **Entry** | FRL-0 complete |
| **Exit** | FCS-001 + FDP-001/002 + CG-000–002 + CG-FLL-002/003 approved Draft 1; continuity candidate adopted for planning |
| **Evidence** | Governance docs in repo; CI-1–CI-5 referenced |
| **Status** | **Near complete** — FDP-002 completes strategy layer |

## FRL-2 — Pilot domain operational

| | Criteria |
|---|----------|
| **Entry** | FRL-1 exit |
| **Exit** | FLL-1 executed; domain LearningTrace produced; steward validates Transformation claim with lineage; observation catalogue published |
| **Evidence** | Pilot report; trace artefact; FS-3 satisfied |
| **Status** | **Next target** |

## FRL-3 — Federation-certified domain validation

| | Criteria |
|---|----------|
| **Entry** | FRL-2 exit + OAT-1a contract + CTP MVP |
| **Exit** | CTV validates Transformation; trace replays through CTP; domain pilot re-run or replay certified |
| **Evidence** | CTV record; CTP replay log; contract conformance test |
| **Status** | **Blocked on Creator** |

## FRL-4 — Cross-domain continuity

| | Criteria |
|---|----------|
| **Entry** | FRL-3 exit |
| **Exit** | ≥2 domain continuity types active; Laris guidance integrated; correlation demonstrated |
| **Evidence** | Cross-domain trace study; Laris pilot |
| **Status** | **Future** |

## FRL-5 — Operational federation

| | Criteria |
|---|----------|
| **Entry** | FRL-4 exit |
| **Exit** | Shared trace core operational; multiple domains with routine federation validation |
| **Evidence** | Operational runbooks; multi-domain steward review |
| **Status** | **Future** |

---

# Part X — Recommended Development Sequence

## Immediate next actions (weeks)

| # | Action | Lead |
|---|--------|------|
| 1 | Close **FRL-1** — steward review FCS-001, FDP-001, FDP-002 | Federation |
| 2 | Begin **FLL-1** pilot preparation (subject, schedule, observation log template) | ChessGuide |
| 3 | Draft **domain observation event catalogue** from legacy app + CG-FLL-001 | ChessGuide |
| 4 | Open **OAT-1a contract** working doc fed by event catalogue | Creator + ChessGuide |

## Near-term actions (1–3 months)

| # | Action | Lead |
|---|--------|------|
| 1 | **Execute FLL-1**; produce domain LearningTrace | ChessGuide |
| 2 | Finalize OAT-1a contract Draft 1 | Creator |
| 3 | Define domain LearningTrace governance (CB-005 lineage) | ChessGuide |
| 4 | CTP MVP **specification** from FLL-1 replay requirements | Creator |

## Medium-term actions (3–12 months)

| # | Action | Lead |
|---|--------|------|
| 1 | CTP MVP implementation | Creator |
| 2 | CTV MVP + steward workflow | Creator |
| 3 | Achieve **FRL-3** on ChessGuide | ChessGuide + Creator |
| 4 | Laris governance charter | Laris |
| 5 | BioChronos/Finkairos semantics docs (optional parallel) | Respective domains |

## Long-term actions (12+ months)

| # | Action |
|---|--------|
| 1 | FRL-4 cross-domain continuity pilots |
| 2 | Generic Trace Core (FR-1) |
| 3 | Second skill domain charter |
| 4 | FRL-5 operational federation |

---

# Part XI — Federation Strategy Summary

The federation advances **from semantics to operation** by:

1. **Completing FRL-1** with continuity, dependency, and **strategy** artefacts (FCS-001, FDP-001, FDP-002).
2. **Leading FRL-2 with ChessGuide** — FLL-1 produces real evidence without waiting for Creator runtime.
3. **Feeding Creator** from ChessGuide evidence — OAT-1a, then CTP, then CTV — the serial certification path.
4. **Keeping non-critical domains dormant** for implementation while semantics advance in parallel where cheap.
5. **Running the execution loop** — assess FRL, bottleneck, leverage, validate, reassess.
6. **Gating Laris and second domains** at FRL-3 and FRL-4 respectively.

**Coordination mantra (Draft 1):**

> *ChessGuide proves learning in reality. Creator makes it federation-true. Other domains wait for the contract.*

---

## Document Success Criteria

This document clearly explains:

- How federation development is coordinated
- When focus should move between domains
- What leadership responsibilities exist
- How bottlenecks are handled
- How FRL progression occurs
- How the federation advances from semantics to operation

without introducing implementation details.

---

## References

| Document | Title |
|----------|--------|
| FDP-001 | Federation Development Dependencies |
| FCS-001 | Federation Continuity Study |
| CG-DEP-001 | Federation Dependency Analysis |
| CG-002 | Federation Relationship |
| CG-FLL-001 | First Domain Learning Pilot |
| CB-000 | Federation Alignment |
| ALP-1 | Artifact Learning Pilot (FLL-0) |
