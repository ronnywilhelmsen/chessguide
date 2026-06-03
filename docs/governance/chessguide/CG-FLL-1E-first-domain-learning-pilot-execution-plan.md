# CG-FLL-1E — First Domain Learning Pilot Execution Plan

| Field | Value |
|-------|-------|
| **Document ID** | CG-FLL-1E |
| **Title** | First Domain Learning Pilot Execution Plan |
| **Version** | Draft 1 |
| **Strategic significance** | Critical |
| **Scope** | ChessGuide |
| **Classification** | Pilot Execution |
| **Status** | Draft 1 |
| **Parent protocol** | [CG-FLL-001 — First Domain Learning Pilot](CG-FLL-001-first-domain-learning-pilot.md) |

**Parents:** [CG-FLL-002 — Learning Semantics](CG-FLL-002-learning-semantics.md), [CG-FLL-003 — Learning Continuity Semantics](CG-FLL-003-learning-continuity-semantics.md), [FCS-001 — Federation Continuity Study](../federation/FCS-001-federation-continuity-study.md), [FDP-001 — Federation Development Dependencies](../federation/FDP-001-federation-development-dependencies.md), [FDP-002 — Federation Development Strategy](../federation/FDP-002-federation-development-strategy.md), [FDS-001 — Dialogue Continuity Study](../federation/FDS-001-dialogue-continuity-study.md)

**Related (inherited):** [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md), [ALP-1](../chessbuddy/ALP-1-artifact-learning-pilot.md), [ALP-2](../chessbuddy/ALP-2-longitudinal-learning-model-pilot.md), [ALP-3](../chessbuddy/ALP-3-multi-artifact-learning-pilot.md)

**Out of scope:** Implementation, runtime, APIs, databases, scoring models, certification logic.

---

## Context

The federation has completed:

- Learning semantics (CG-FLL-002)
- Learning continuity semantics (CG-FLL-003)
- Continuity semantics (FCS-001)
- Development dependencies (FDP-001) and strategy (FDP-002)
- Dialogue continuity (FDS-001)

The next objective is **evidence**, not theory.

ChessGuide is the federation's **first operational learning laboratory**.

This pilot does **not** aim to prove chess improvement alone. It aims to **observe learning itself** ([CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md)).

---

## Purpose

Define the **operational execution plan** for the first domain learning pilot.

Determine:

- What will be observed
- How it will be observed
- How evidence is collected
- How steward validation occurs
- How replay occurs
- How transformation is evaluated
- How pilot outputs support future **OAT-1a** work

---

## Core Question

**How can learning continuity be observed in a real domain?**

---

## Pilot Goal

Generate **observable evidence of learning continuity**.

| In scope | Out of scope (alone) |
|----------|----------------------|
| Observation shifts | Rating improvement |
| Integration | Chess performance metrics only |
| Recall accessibility | Content consumption volume |
| Transfer | Unlinked game activity |
| Dialogue refinement | |
| Transformation evidence | |

---

## Pilot Subject

| Field | Guidance |
|-------|----------|
| **Type** | Human learner |
| **Initial example** | Ronny (first participant) |
| **Document** | General and reusable — no hard-coded personal requirements beyond Actor identity |

---

# Part I — Pilot Structure

Phases align with the federation learning chain ([CG-FLL-001](CG-FLL-001-first-domain-learning-pilot.md), [CB-000A](../chessbuddy/CB-000A-longitudinal-learning-model.md)).

| Phase | Name | Primary focus | Evidence collected |
|-------|------|---------------|-------------------|
| **0** | Grounding | Consent, baseline, goals | Grounding record |
| **1** | Observation | Reality → what is registered | Episodes, LOE-001/002, activity vs learning distinction |
| **2** | Attention | What is highlighted / missed | Attention notes, engagement signals |
| **3** | Understanding | Concepts, explanations | LOE-009, DOE-006 |
| **4** | Knowledge | Recall, recognition | LOE-003, LOE-004 |
| **5** | Wisdom | Judgment, prioritization | Practice choices, in-game decisions (narrative) |
| **6** | Stewardship | Self-directed improvement, trace custody | LOE-010, stewardship log |
| **7** | Transformation | Change over time | LOE-011, transformation review |

Phases may **overlap within an episode** (CG-FLL-002 dynamic chain). Record **primary chain stage** per event; note secondary stages in event notes.

---

# Part II — Learning Observation Events (LOE)

Initial catalogue for pilot recording. Refine during FRL-2 execution.

| ID | Name | Definition | Typical chain stage | Evidence form |
|----|------|------------|---------------------|---------------|
| **LOE-001** | Observation Shift | Learner notices something previously missed (pattern, threat, structure) | Observation | Learner or steward narrative; optional FEN anchor |
| **LOE-002** | Pattern Recognition | Recurring structure identified across positions or games | Observation / Knowledge | Verbal label + anchor |
| **LOE-003** | Knowledge Recall | Successful retrieval of concept, line, or principle | Knowledge | Recall attempt record |
| **LOE-004** | Recall Accessibility Increase | Recall faster, less prompting, or more spontaneous than prior episode | Knowledge | Comparative note across episodes (no score) |
| **LOE-005** | Simulation | Internal or written variation; candidate moves explored without board move | Understanding | Description + optional variation text |
| **LOE-006** | Error Recognition | Learner identifies own mistake or misconception | Understanding / Attention | Move reference + explanation |
| **LOE-007** | Self-Correction | Learner adjusts approach after error recognition | Wisdom / Transformation | Before/after narrative |
| **LOE-008** | Transfer | Learning skill or concept applied outside immediate context (e.g. study method → play) | Knowledge / Wisdom | Cross-episode link |
| **LOE-009** | Explanation | Learner articulates *why* (not only *what*) | Understanding | Text or steward-recorded paraphrase |
| **LOE-010** | Teaching | Learner explains to steward or peer (integration mechanism) | Stewardship / Understanding | Dialogue record (DOE-linked) |
| **LOE-011** | Transformation Evidence | Observable capability change supported by prior events | Transformation | Steward-reviewed bundle |

### Activity events (record but tag separately)

| Tag | Use |
|-----|-----|
| `activity.move` | Board move without learning claim |
| `activity.session` | Session opened/closed |
| `activity.study` | Passive review without LOE |

**Invariant I-3 (CG-FLL-001):** Activity ≠ learning unless linked to LOE or dialogue evidence.

---

# Part III — Dialogue Observation Events (DOE)

Based on [FDS-001](../federation/FDS-001-dialogue-continuity-study.md). Record alongside LOE where applicable.

| ID | Name | Definition | Typical use |
|----|------|------------|-------------|
| **DOE-001** | Clarifying Question | Question that narrows or defines what is being learned | Steward or learner |
| **DOE-002** | Assumption Surfaced | Hidden assumption made explicit | Often steward-led |
| **DOE-003** | Contradiction Identified | Conflict between two beliefs, moves, or trace claims | ALP-3 analogue |
| **DOE-004** | Perspective Shift | Reframing of situation or goal | Post-reflection |
| **DOE-005** | Model Refinement | Understanding model updated through exchange | Meta-learning signal |
| **DOE-006** | Reflective Explanation | Learner explains own thinking process | LOE-009 + dialogue |
| **DOE-007** | Steward Challenge | Steward probes evidence or lineage | Validation |
| **DOE-008** | Validated Understanding | Steward confirms understanding against trace | Checkpoint |

---

# Part IV — Recall Accessibility

Increasing integration may be **observed** (not scored) via indicators:

| Indicator | Observation method |
|-----------|-------------------|
| Faster recall | Learner or steward compares episodes: less time to answer same class of question |
| Less prompting required | Fewer steward or tool hints needed for equivalent task |
| More spontaneous application | Concept applied without being asked |
| Greater transfer | LOE-008 across episodes |
| Greater confidence | Learner-reported; steward notes IM-1 Perceived vs Measured |

Record as **LOE-004** with comparative narrative referencing prior episode ID.

---

# Part V — LearningTrace (Governance Mapping)

Map pilot observations to [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md) semantics **without** technical schema.

```
Actor
  → LearningTrace (longitudinal container for one learner)
    → Session (optional calendar or explicit play period)
      → Episode (one completed game, study block, or review unit)
        → Event (LOE / DOE / tagged activity)
```

| CB-005 level | Pilot execution mapping |
|--------------|-------------------------|
| **Actor** | Pilot participant ID (pseudonym or name per consent) |
| **LearningTrace** | All pilot episodes for Actor |
| **Session** | Group episodes same day or explicit “session start” |
| **Episode** | Single game or bounded study/review (min. one anchor) |
| **Event** | One LOE, DOE, or activity tag with timestamp |

### Per-event minimum fields (governance)

| Field | Required |
|-------|----------|
| Event ID | Yes (human-readable ok: `EP03-LOE-001`) |
| Episode ID | Yes |
| Timestamp or sequence | Yes |
| Event type (LOE / DOE / activity) | Yes |
| Chain stage (primary) | Yes |
| Anchor (FEN, concept label, or artefact ref) | Yes for LOE; recommended for DOE |
| Provenance (learner / steward / tool-assisted) | Yes |
| IM-1 note (Measured / Perceived / both) | When applicable |
| Free-text evidence | Yes |

### Pilot trace invariants (inherit CG-FLL-001)

- I-1: No LOE-011 without stewardship lineage in trace  
- I-2: LOE-011 requires steward sign-off  
- I-4: Replay uses stored events only  

---

# Part VI — Steward Validation

### Steward responsibilities

| Responsibility | Description |
|----------------|-------------|
| **Scope guardian** | Ensures pilot stays learning-focused, not rating-focused |
| **Evidence gate** | No Transformation claim without trace lineage |
| **IM-1 reviewer** | Surfaces Measured vs Perceived gaps |
| **Dialogue partner** | DOE-007, DOE-008 at checkpoints |
| **Replay authority** | Reconstructs narrative from trace only |

### Validation checkpoints

| Checkpoint | When | Steward actions |
|------------|------|-----------------|
| **C0** | After Phase 0 | Approve grounding; confirm consent |
| **C1** | After each Episode | Review events; tag missing anchors |
| **C2** | Mid-pilot (≥3 episodes) | DOE-007 challenge on strongest learning claim |
| **C3** | Before LOE-011 | Full lineage review Observation → Stewardship |
| **C4** | Pilot close | Transformation verdict: supported / qualified / not supported |

### Evidence-before-claim (P5, FDP-002)

Every LOE-011 must cite **≥2 prior events** from different chain stages (or steward documents why exception).

---

# Part VII — Replay Procedure

**Goal:** Steward (or third party) reconstructs learning journey **without** re-playing live chess.

### Replay inputs

1. Actor grounding record (Phase 0)  
2. Episode list (chronological)  
3. All LOE / DOE / activity events per episode  
4. Dialogue transcripts or summaries (if any)  
5. Anchors (FEN, concepts)

### Replay steps

| Step | Action |
|------|--------|
| R1 | Read Phase 0 baseline only |
| R2 | For each Episode in order, read events only (no live board) |
| R3 | Narrate chain progression: what was observed → understood → known → stewarded |
| R4 | Identify gaps: orphan events, activity without LOE, missing anchors |
| R5 | Compare to Transformation claim (if any) — can claim be re-derived? |
| R6 | Record replay verdict: reconstructable / partial / failed |

**Success:** Replay verdict **reconstructable** at C4 for pilot to support FRL-2 exit ([FDP-002](../federation/FDP-002-federation-development-strategy.md)).

---

# Part VIII — Transformation Evaluation

### Evidence categories (not metrics)

| Category | Description | Example LOE / DOE |
|----------|-------------|-------------------|
| **Improved observation** | LOE-001/002 more frequent or deeper | “Saw pin without hint” |
| **Improved explanation** | LOE-009 quality vs Phase 0 baseline | DOE-008 at C2 |
| **Improved transfer** | LOE-008 across contexts | Study method → game |
| **Improved judgment** | Practice or move choice rationale | Wisdom-phase narrative |
| **Improved self-correction** | LOE-006 + LOE-007 pairs | Recognized and fixed plan |

### Transformation review process

1. Learner proposes **draft** transformation statement (Perceived).  
2. Steward maps statement to event IDs (Measured).  
3. Steward runs replay (Part VII).  
4. Steward issues C4 verdict with qualifications (ALP precedent).  
5. LOE-011 event created only after C4 **supported** or **supported with qualifications**.

---

# Part IX — Evidence Collection (How)

| Method | Content | Owner |
|--------|---------|-------|
| **Pilot log** | Structured text: Episode + events (markdown or form) | Learner primary; steward supplements |
| **Dialogue log** | Session notes, voice transcript summary, or written Q&A | Steward + learner |
| **Anchor capture** | FEN, PGN fragment, concept slug | Learner or tool-assisted |
| **Reflection prompt** | Post-episode: “What did you learn?” “What surprised you?” | Learner (feeds LOE-009, DOE-006) |
| **Integration window note** | Between episodes: sleep, break, insight | Learner (CG-FLL-001 integration) |

**No specific tool required** for Draft 1 — evidence-before-claim matters more than medium.

Recommended minimum: **one file per Episode** under steward-controlled pilot folder (path out of scope).

---

# Part X — Pilot Outputs

| # | Output | Description |
|---|--------|-------------|
| 1 | **Observation Event Catalogue** | Part II LOE table + refinements from execution |
| 2 | **Dialogue Event Catalogue** | Part III DOE table + refinements |
| 3 | **LearningTrace Examples** | ≥1 full Actor trace (anonymized if needed) |
| 4 | **Replay Procedure** | Part VII + recorded replay verdict |
| 5 | **Steward Validation Procedure** | Part VI + checkpoint records |
| 6 | **Transformation Review Procedure** | Part VIII + C4 verdict |
| 7 | **OAT-1a Input Candidates** | Part XI |

---

# Part XI — Federation Relevance (OAT-1a, CTP, CTV)

Without defining implementation:

| Future capability | Pilot output that informs it |
|-----------------|------------------------------|
| **OAT-1a** Observation Runtime | LOE catalogue + `activity.*` tags → observation event types; anchor rules from episodes |
| **CTP** Continuity Trace | Actor → Episode → Event hierarchy proven; replay procedure → reconstruction requirements |
| **CTV** Validation Runtime | Steward checkpoints C1–C4 → validation rules; LOE-011 lineage → Transformation gate pattern |

### OAT-1a input candidates (from pilot)

| Candidate | Source |
|-----------|--------|
| Event type enum draft | LOE-001 … LOE-011, activity.* |
| Anchor types | FEN, concept_slug, dialogue_ref |
| Provenance enum | learner, steward, tool |
| Chain stage tag | federation chain stages |
| Episode boundary rules | game complete, study block end |
| IM-1 optional fields | measured_state, perceived_state notes |

**Handoff trigger (FDP-002 FS-3):** Publish OAT-1a contract Draft 1 when ≥10 distinct event types observed in real episodes.

---

# Part XII — Execution Timeline (Suggested)

| Week | Focus |
|------|-------|
| W0 | Phase 0 + C0; publish empty catalogues |
| W1–W2 | Phases 1–3; ≥2 episodes; C1 each |
| W3 | Phases 4–5; C2 mid-pilot |
| W4 | Phases 6–7; integration notes; C3 |
| W5 | Replay + C4; outputs 1–7 |

Adjust per learner availability — continuity over intensity (CG-FLL-003 H5/H6).

---

# Part XIII — Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Rating focus dominates | C0 scope; steward C1 redirect |
| Event logging fatigue | Minimum: 1 LOE per episode + reflection |
| False transformation | C3 lineage; evidence-before-claim |
| Dialogue not recorded | DOE optional first pilot; steward summary minimum |
| OAT-1a premature | FS-3 gate before Creator contract freeze |

---

## Document Success Criteria

This document clearly explains:

- How the pilot operates
- How learning is observed (LOE)
- How dialogue is observed (DOE)
- How replay occurs
- How steward validation occurs
- How transformation claims are evaluated

and provides a practical bridge between federation semantics and future Creator observation infrastructure.

---

## References

| Document | Title |
|----------|--------|
| CG-FLL-001 | First Domain Learning Pilot |
| CG-FLL-002 | Learning Semantics |
| CG-FLL-003 | Learning Continuity Semantics |
| FCS-001 | Federation Continuity Study |
| FDP-001 | Federation Development Dependencies |
| FDP-002 | Federation Development Strategy |
| FDS-001 | Dialogue Continuity Study |
| CB-005 | LearningTrace Product Schema (inherited) |
| ALP-1 | Artifact Learning Pilot (inherited) |
