# FDP-001 — Federation Development Dependencies

| Field | Value |
|-------|-------|
| **Document ID** | FDP-001 |
| **Title** | Federation Development Dependencies |
| **Version** | Draft 1 |
| **Strategic significance** | Critical |
| **Scope** | Federation |
| **Classification** | Federation Planning |
| **Status** | Draft 1 |

**Parents:** [FCS-001 — Federation Continuity Study](FCS-001-federation-continuity-study.md), FCA-1 Federated Continuity Architecture (cited), FCDA-1 Federated Continuity Driven Architecture (cited), [CB-000 — Federation Alignment](../chessbuddy/CB-000-federation-alignment.md), [CG-002 — Federation Relationship](../chessguide/CG-002-federation-relationship.md), [CG-DEP-001 — Federation Dependency Analysis](../chessguide/CG-DEP-001-federation-dependency-analysis.md)

**Related domains:** Creator, BioChronos, Finkairos, Domosofi, ChessGuide, Laris

**Evidence base:** FCS-001, CG-DEP-001, CB-000/000A, ALP-1/2/3 (FLL-0/0M/0X), CG-FLL-001/002/003, CG-000–002. External FCA/FCDA artefacts not in this repository.

**Out of scope:** Implementation, runtime design, APIs, schemas.

---

## Context

The federation contains multiple domains, each with goals, semantics, and a continuity model ([FCS-001](FCS-001-federation-continuity-study.md)).

Development **dependencies between domains** have not been formally analyzed until now.

The federation requires understanding of:

- Critical paths
- Blockers
- Accelerators
- Sequencing

before significant **shared-runtime** implementation begins.

---

## Purpose

Determine:

- What must be built first
- What can be developed independently
- What depends on other domains
- What blocks federation-level validation
- What creates the greatest leverage

---

## Core Question

**What is the optimal development order for the federation?**

---

# Part I — Domain Analysis

## Creator

### Current capabilities (evidence)

| Capability | Status |
|------------|--------|
| Federation semantics (OAT, REA, KF, WA, CTP, CTV) | **Defined** in CB-000 — not fully runtime |
| Continuity-Based Learning on artifacts | **Validated** via ALP-1/2/3 |
| Trace / validation invariants | **Governance** (CI-1–CI-5, FCS-001) |

### Future capabilities

| Deliverable | Federation role |
|-------------|-----------------|
| **OAT-1a** Observation Runtime | Federation-standard observation streams |
| **OAT-1b** Attention Runtime | Filtered attention layer |
| **OAT-1c** Anchor Runtime | Stable trace reference points |
| **Reasoning Runtime** | REA layer execution |
| **CTP** / Federation Trace | Cross-session continuity reconstruction |
| **CTV** / Validation Runtime | Certified Transformation claims |
| **Generic Trace Core** | FR-1 direction (CB-000 Future Research) |

### Dependencies created for federation

Creator is the **infrastructure dependency** for all domains requiring federation-certified traces and validation.

### Critical deliverables (blocking maturity)

1. **OAT-1a contract** (observation semantics) — unblocks domain event alignment  
2. **CTP minimum** — unblocks cross-session federation validation  
3. **CTV minimum** — unblocks certified Transformation  

---

## BioChronos

### Current capabilities (evidence)

- Conceptual alignment: trajectories, transformation, longitudinal time (CG-002, FCS-001)
- Biological continuity semantics identified; **no federation runtime** in this repo

### Future capabilities

- Biological continuity trajectories
- Recovery and integration biology signals
- Longitudinal health context for learning (CG-FLL-003 H8, FCS-001 OQ-7)

### Dependencies

| Depends on | For |
|------------|-----|
| Creator (CTP, observation patterns) | Correlating biological events with federation traces |
| Federation continuity semantics (FCS-001) | Shared vocabulary |

### Contributions to federation

- Biological continuity model
- Recovery/rhythm constraints on learning continuity
- Cross-domain trajectory pattern reference

**Not on critical path** for ChessGuide FLL-1 or federation FRL-2.

---

## Finkairos

### Current capabilities (evidence)

- Stewardship, decision quality, external simulation (CG-002, CG-FLL-002, FCS-001)

### Future capabilities

- Financial continuity runtime
- Outcome and consequence tracing
- External simulation frameworks

### Dependencies

| Depends on | For |
|------------|-----|
| Creator (trace, validation) | Longitudinal financial stewardship claims |
| FCS-001 continuity invariants | Semantic alignment |

### Contributions

- Stewardship and consequence patterns
- External simulation reference (vs ChessGuide internal simulation)

**Parallel** with ChessGuide; **not blocking** first learning domain.

---

## Domosofi

### Current capabilities (evidence)

- Physical stewardship, maintenance, observation (CG-002, FCS-001)

### Future capabilities

- Property/environment continuity
- Stewardship maintenance trajectories

### Dependencies

| Depends on | For |
|------------|-----|
| Creator (observation, trace) | Physical state over time |
| Federation stewardship semantics | Alignment with Finkairos/ChessGuide |

### Contributions

- Physical stewardship patterns
- Maintenance/improvement continuity model

**Parallel**; supports CB-007 physical chess context later, not FRL-2 blocker.

---

## ChessGuide

### Current capabilities (evidence)

| Capability | Status |
|------------|--------|
| Governance identity (CG-000–002, CG-FLL-002/003) | **Exists** |
| Artifact learning path (ALP lineage) | **Proven** |
| Domain pilot protocol (CG-FLL-001 / FLL-1) | **Defined** |
| Legacy chess observation (moves, FEN, history) | **Partial** product |
| LearningTrace product schema direction (CB-005) | **Governance** |
| Federation-certified domain validation | **Blocked** on Creator CTP/CTV |

### Future capabilities

- FLL-1 execution (human learner pilot)
- Domain LearningTrace product persistence
- First operational learning domain (CG-DEP-001 strategic answer: **yes, incrementally**)
- Longitudinal learning platform validation (FLL-1 + semantics)

### Dependencies

| Depends on | Level | Blocking? |
|------------|-------|-----------|
| Creator OAT-1a | Critical | For federation-standard observation |
| Creator CTP | Critical | For cross-session federation certification |
| Creator CTV | Critical | For certified Transformation |
| Laris | Important | For cross-domain learning guidance — not FRL-2 |
| CB-005 / CG-FLL trace semantics | Critical | Governance — **exists** |
| Human steward | Critical | Until CTV matures — **available** |

### Contributions to federation

- **First operational skill domain** (CG-002, CG-DEP-001)
- Learning continuity semantics (CG-FLL-003)
- FLL-1 domain validation laboratory
- LearningTrace domain reference implementation
- ALP methodological extension into live domain

**Highest leverage domain for FRL-2** given current evidence.

---

## Laris

### Current capabilities (evidence)

- Role defined: federation guide, pedagogical continuity (CG-000, CG-002, FCS-001)
- **No runtime** in this repository

### Future capabilities

- Pedagogical continuity runtime
- Socratic dialogue, coaching, explanation policies
- Cross-domain mentorship
- Learning guidance (not domain content)

### Dependencies

| Depends on | For |
|------------|-----|
| Domain traces (ChessGuide, others) | Grounded guidance |
| Creator (optional) | Trace-aware dialogue continuity |
| CG-FLL learning semantics | Shared learning vocabulary |

### Contributions

- Accelerates integration (CG-FLL-003 H7)
- Cross-domain learning understanding
- Wisdom layer enrichment for all domains

**Important for FRL-4+**; **not blocking FRL-2** (ChessGuide can use domain wisdom first).

---

# Part II — Dependency Mapping

## Dependencies ON other domains (summary)

| Domain | Depends ON |
|--------|------------|
| **Creator** | FCA/FCDA semantics (external); ALP validation precedent |
| **BioChronos** | Creator (trace), FCS-001 semantics |
| **Finkairos** | Creator (trace, validation), FCS-001 |
| **Domosofi** | Creator (observation), FCS-001 |
| **ChessGuide** | Creator (OAT, CTP, CTV for certification); CB-005/CG-FLL; steward |
| **Laris** | Domain traces; CG-FLL semantics; Creator (optional) |

## Dependencies PROVIDED to other domains

| Domain | Provides TO federation |
|--------|----------------------|
| **Creator** | OAT, CTP, CTV, trace core, validation — **all domains** |
| **ChessGuide** | Learning continuity model, FLL-1 validation, domain trace patterns |
| **Laris** | Pedagogical guidance, meta-learning support |
| **BioChronos** | Biological continuity context |
| **Finkairos** | Stewardship / simulation patterns |
| **Domosofi** | Physical stewardship patterns |

## Dependency matrix (domain × domain)

|  | Creator | BioChronos | Finkairos | Domosofi | ChessGuide | Laris |
|--|---------|------------|-----------|----------|------------|-------|
| **Creator** | — | ○ | ○ | ○ | **●** | ○ |
| **BioChronos** | **●** | — | ○ | ○ | ○ | ○ |
| **Finkairos** | **●** | ○ | — | ○ | ○ | ○ |
| **Domosofi** | **●** | ○ | ○ | — | ○ | ○ |
| **ChessGuide** | **●** | ○ | ○ | ○ | — | ○ |
| **Laris** | ○ | ○ | ○ | ○ | **●** | — |

**Legend:** **●** = hard dependency for federation maturity; **○** = soft / parallel / conceptual

---

# Part III — Critical Path Analysis

## What blocks federation maturity? (derived)

| Capability | Blocks | Evidence |
|------------|--------|----------|
| **Federation continuity semantics** | Inconsistent cross-domain planning | Was gap — **addressed** by FCS-001 (Draft 1) |
| **OAT-1a (observation contract)** | Domain events cannot align to federation trace | CG-DEP-001 |
| **CTP** | Cross-session federation validation | CG-DEP-001, FCS-001 CI-1/CI-2 |
| **CTV** | Certified Transformation | CB-000 I-2, CG-DEP-001 |
| **Domain pilot (FLL-1)** | Proof that learning ≠ artifact-only | ALP-1 I-5; CG-FLL-001 |
| **Trace Core (generic)** | Multi-domain correlation | CB-000 FR-1; FCS-001 OQ-3 |
| **Laris runtime** | Cross-domain learning guidance at scale | CG-DEP-001 — **not FRL-2** |
| **BioChronos / Finkairos / Domosofi runtime** | Full multi-domain federation | FCS-001 — **not FRL-2/3** |

## Critical path (shortest sequence to federation validation)

```
FRL-0  Artifact / governance validation     [DONE — ALP-1/2/3]
   ↓
FRL-1  Federation + domain semantics        [IN PROGRESS — FCS-001, CG-FLL-002/003, CG-*]
   ↓
FRL-2  Domain pilot + domain trace          [NEXT — CG-FLL-001 execution, ChessGuide product trace]
   ↓
Creator: OAT-1a contract → CTP MVP → CTV MVP
   ↓
FRL-3  Federation-certified domain validation
   ↓
FRL-4  Cross-domain continuity + Laris enrichment
   ↓
FRL-5  Operational multi-domain federation
```

**Bottleneck:** Creator **CTP + CTV** for federation certification — not ChessGuide governance completion.

---

# Part IV — Leverage Analysis

## High-leverage deliverables

| Deliverable | Owner | Leverage |
|-------------|-------|----------|
| **OAT-1a observation contract** | Creator | All domains — single semantic contract for Reality→Observation |
| **CTP MVP** | Creator | All trace-bearing domains; ChessGuide FLL-1 upgrade path |
| **CTV MVP** | Creator | All Transformation claims federation-wide |
| **FCS-001 continuity definition** | Federation | Planning alignment — **done** (candidate CI-1–CI-5) |
| **CG-FLL-002/003 semantics** | ChessGuide | Learning + continuity vocabulary for Laris and pilots |
| **FLL-1 pilot execution** | ChessGuide | Proves domain path; informs Creator contracts |
| **ALP trace protocol as template** | Federation | Steward validation pattern for all pilots |

## Highest single leverage (evidence-based)

> **Creator OAT-1a + CTP contract specification** — one specification enables ChessGuide, future domains, and Laris-grounded guidance without per-domain trace reinvention.

Second: **ChessGuide FLL-1 execution** — validates domain path in parallel, de-risks Creator build with real events.

---

# Part V — Federation Readiness Levels (derived)

Prior art: ALP uses FLL-0, FLL-0M, FLL-0X for artifact paths. FDP-001 proposes **FRL** (Federation Readiness Level) for **federation maturity**.

| Level | Name | Criteria (evidence-based) | Status |
|-------|------|---------------------------|--------|
| **FRL-0** | Architecture & artifact validation | Continuity-Based Learning on artifacts; chain model | **Achieved** (ALP-1/2/3) |
| **FRL-1** | Federation & domain semantics | Identity, continuity, dependency semantics documented | **In progress** (CG-*, FCS-001, CG-FLL-002/003) |
| **FRL-2** | Pilot domain operational | Domain pilot running; domain-scoped LearningTrace; steward validation | **Next** (CG-FLL-001) |
| **FRL-3** | Federation-certified domain validation | OAT contract + CTP + CTV attached to pilot domain | **Blocked** on Creator |
| **FRL-4** | Cross-domain continuity | Correlated traces; Laris guidance; ≥2 domain continuity types active | **Future** |
| **FRL-5** | Operational federation | Multiple domains with shared trace core and validation | **Future** |

**Refinement vs draft example:** FRL-0 maps to proven ALP work, not vague "architecture only." FRL-2 explicitly allows **domain-only** certification (per CG-DEP-001 MVF) before FRL-3.

---

# Part VI — Recommended Development Sequence

## Short-term (0–6 months, governance + pilot)

| Priority | Work | Owner | Parallel? |
|----------|------|-------|-----------|
| 1 | Complete ChessGuide governance foundation (CG-*, CG-FLL) | ChessGuide | Yes |
| 2 | Execute **FLL-1** pilot (steward-led) | ChessGuide | Yes |
| 3 | Define **domain observation + LearningTrace** semantics (product governance) | ChessGuide | Yes |
| 4 | Publish **OAT-1a contract draft** aligned to chess events | Creator + ChessGuide | Yes |
| 5 | Adopt FCS-001 candidate continuity + CI-1–CI-5 in planning | Federation | Yes |

## Medium-term (6–18 months, infrastructure + certification path)

| Priority | Work | Owner |
|----------|------|-------|
| 1 | **CTP MVP** — domain trace persistence and replay | Creator |
| 2 | **CTV MVP** — steward-assisted validation automation | Creator |
| 3 | Upgrade ChessGuide pilot to **FRL-3** (federation-certified) | ChessGuide + Creator |
| 4 | **Laris** governance + minimal guidance integration | Laris |
| 5 | BioChronos / Finkairos / Domosofi **semantic** alignment docs (not full runtime) | Each domain |

## Long-term (18+ months, multi-domain)

| Priority | Work |
|----------|------|
| 1 | Generic Trace Core (FR-1) |
| 2 | Cross-domain trace correlation (FCS-001 OQ-3) |
| 3 | Second skill domain informed by ChessGuide |
| 4 | Laris pedagogical runtime at federation scale |
| 5 | BioChronos ↔ ChessGuide longitudinal correlation studies |

---

# Part VII — Risks

| ID | Risk | Mitigation |
|----|------|------------|
| R-1 | Creator blocks all domains indefinitely | Parallel FRL-2 domain pilot without waiting for full Creator |
| R-2 | ChessGuide mistaken for entire platform | CG-002, FCS-001 domain vs federation distinction |
| R-3 | Premature unified schema collapses domains | FCS-001 R-3; semantic autonomy (CB-000 A-5) |
| R-4 | Laris delayed → weak learning guidance | Domain wisdom + steward in FRL-2 |
| R-5 | Implementation before semantics | FRL-1 completion gate (this planning phase) |
| R-6 | FCA-1 artefacts absent from repos → planning drift | FDP-005: import/align FCA when available |

---

# Part VIII — Opportunities

| ID | Opportunity |
|----|-------------|
| O-1 | ChessGuide as **only** domain with both artifact (ALP) and domain (FLL-1) validation |
| O-2 | OAT-1a contract drafted **from real chess events** (FLL-1) — evidence-based Creator spec |
| O-3 | FCS-001 CI invariants become acceptance tests for Creator MVP |
| O-4 | Parallel domain semantics (BioChronos, Finkairos) without blocking ChessGuide |
| O-5 | Laris governance before runtime — same pattern as ChessGuide CG-* |

---

# Part IX — Recommendations

| ID | Recommendation |
|----|----------------|
| **R-1** | Treat **Creator OAT-1a + CTP** as federation critical path; staff accordingly |
| **R-2** | **Execute FLL-1** on ChessGuide immediately in parallel — do not wait for Creator runtime |
| **R-3** | Gate **FRL-3** on Creator CTV MVP, not on second domain |
| **R-4** | Keep BioChronos, Finkairos, Domosofi in **semantic parallel** until FRL-3 achieved |
| **R-5** | Begin **Laris governance** after CG-FLL semantics stable; runtime after FRL-3 |
| **R-6** | Use **FRL levels** as federation planning vocabulary; map deliverables to FRL explicitly |
| **R-7** | Import **FCA-1 / FTO-1** when available; reconcile with FCS-001 and FDP-001 (FCS-001 R-5) |
| **R-8** | Coordinate execution per [FDP-002 — Federation Development Strategy](FDP-002-federation-development-strategy.md) |

---

## Document Success Criteria

This document clearly explains:

- What depends on what
- What should be built first
- What blocks federation maturity
- Where the highest leverage exists
- How development should be sequenced

across the federation.

---

## References

| Document | Title |
|----------|--------|
| FCS-001 | Federation Continuity Study |
| CG-DEP-001 | Federation Dependency Analysis |
| CG-002 | Federation Relationship |
| CB-000 | Federation Alignment |
| CB-000A | Longitudinal Learning Model |
| CG-FLL-001 | First Domain Learning Pilot |
| CG-FLL-002 | Learning Semantics |
| CG-FLL-003 | Learning Continuity Semantics |
| ALP-1, ALP-2, ALP-3 | Artifact learning references (FLL-0/0M/0X) |
| FDP-002 | Federation Development Strategy |
