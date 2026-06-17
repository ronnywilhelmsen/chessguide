# ChessGuide Strategic Review v1.0 — Domain Content Review

| Field | Value |
|-------|-------|
| **Review ID** | CDCR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `reviews/chessguide-domain-content-v1` |
| **Continues from** | Repository Baseline (2026-06-06), [CEAR v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md), [CLOR v1.0](ChessGuide-Learning-Ontology-Review-v1.0.md), [CDIA v1.0](ChessGuide-Discovery-Integration-Assessment-v1.0.md), Accepted ADR-001–004 |
| **Scope** | Domain content, knowledge, learning, evidence, learner models — **not** architecture, implementation, UI, or CI |
| **Authority** | Review only — does not adopt proposals, write ADRs, or modify runtime |

---

## Repository State (opening)

| Item | Value |
|------|-------|
| **Base branch** | `main` @ `414f34651e8e70d3baab470ced175ce23a92e520` |
| **Review branch** | `reviews/chessguide-domain-content-v1` |
| **Accepted ADRs** | ADR-001 (Episode), ADR-002 (Reference Model), ADR-003 (LOE/DOE), ADR-004 (Stewardship / Claims) |
| **ADR draft (not on main)** | ADR-005 DecisionTrace (branch `governance/adr-005-decisiontrace-per-ply-reasoning`) |
| **Working tree at start** | Clean |

### Truth hierarchy applied

1. Governance / ADRs / CG / CB / CFA / LEF
2. Committed reviews
3. LLD / CDESR design targets
4. Runtime legacy

---

## Mission Question

**What human and chess capabilities should ChessGuide develop?**

Not: *help users win the next game.*

**Repository answer (synthesized):**

> ChessGuide develops **longitudinal chess skill** through **observable practice**, **traceable evidence**, and **governed integration** — producing learners who can **notice**, **understand**, **apply**, **explain**, and **steward** their own development over time.

| Capability layer | ChessGuide develops | Source |
|------------------|---------------------|--------|
| **Chess competence** | Tactical pattern use, positional judgment, time management, repertoire depth, endgame technique | CB-002 LSDD [DOCTRINE] |
| **Learning competence** | Integration, self-correction, explanation, teaching readiness, trace stewardship | CG-FLL-002 [DOCTRINE] |
| **Metacognitive honesty** | IM-1 alignment — perceived vs measured divergence narrows | CB-005, CB-000A [DOCTRINE] |
| **Autonomy** | Self-directed practice, mode-appropriate help, data custody | CB-004 PP-4/6, CB-006 [DOCTRINE] |
| **Meaning / wisdom** | Judgment under conditions — not information hoarding | CB-000 I-3, CFA [DOCTRINE] |

ChessGuide is **not** primarily a chess application — it is a **longitudinal skill development domain** with chess as substrate (CG-000 [DOCTRINE]).

---

# Part 1 — Domain Reality Review

## Evidence Reviewed

CG-000, CB-002, CB-005, CB-007, ADR-001, `src/data/*`, `src/components/*`, FEDERATION.md, LEF-2C.

## Chess Entities Inventory

| Entity | Doctrine status | Runtime status | Notes |
|--------|-----------------|----------------|-------|
| **Game / Episode** | [DOCTRINE] CB-005 Episode; ADR-001 sovereign boundary | [RUNTIME] `Game` class — legacy `toString()` encoding | Partial alignment via ADR-001 adapter semantics |
| **Move / MoveRecord** | [DOCTRINE] CB-005 `move.played`; ADR-001 event stream | [RUNTIME] `log[]` SAN strings | No ply-level event IDs |
| **Position** | [DOCTRINE] FEN anchor; CB-005 position context | [RUNTIME] `fen` field | Present |
| **Opening** | [DOCTRINE] `corpus_ref` / knowledge refs; CB-005 AN-3 | [RUNTIME] `openings.ts` tree | Only embedded knowledge corpus |
| **Player / Actor** | [DOCTRINE] CB-005 Actor | [RUNTIME] `Human` — name + email | Weak identity |
| **Bot opponent** | [DOCTRINE] CB-005 A-2 — not skill-traced | [RUNTIME] `Bot` configs | Present |
| **Clock / Time** | [DOCTRINE] CB-005 time aggregates | [RUNTIME] `wtime`, `btime`, `timekeeper` | Present |
| **Session** | [DOCTRINE] Optional grouping (ADR-001 D4) | [RUNTIME] **Absent** | — |
| **Puzzle** | [DOCTRINE] CB-003 Phase 3 opportunity | [RUNTIME] **Absent** | Future |
| **Tournament** | [DOCTRINE] CG-000 — not a tournament platform | [RUNTIME] **Absent** | Out of product identity |
| **Endgame study unit** | [DOCTRINE] CB-002 catalogue gap (CEAR OQ-K2) | [RUNTIME] **Absent** | Candidate corpus |
| **LearningTrace** | [DOCTRINE] Evidence + custody (ADR-001, LEF-0E) | [RUNTIME] `GameHistory` lines only | Thin |
| **LOE / DOE** | [DOCTRINE] ADR-003 Evidence Records | [RUNTIME] **Absent** | Governance only |
| **DecisionTrace** | [DOCTRINE] ADR-005 draft | [RUNTIME] **Absent** | Per-ply reasoning deferred |
| **Claim** | [DOCTRINE] ADR-004 hypothesis / påstand | [RUNTIME] **Absent** | Stewardship gate governance only |
| **Corpus Reference** | [DOCTRINE] ADR-002 D5 | [RUNTIME] Opening IDs in tree only | Partial |
| **Engine evaluation** | [DOCTRINE] Measured lane reference (CB-000 PI-5) | [RUNTIME] `CP.tsx`, server eval | Reference only — not learning proof |
| **Chrome Extension / Android / AMR** | [DOCTRINE] CB-007 vision | [RUNTIME] **Absent** | Product horizon |

### Entity classification summary

| Class | Count (doctrine) | Count (runtime) |
|-------|------------------|-----------------|
| **Implemented (partial)** | 12+ | 8 |
| **Governance-only** | 15+ | 0 |
| **Candidate future** | 10+ | — |

### Conclusions (Phase 1)

| # | Conclusion | Class |
|---|------------|-------|
| P1-1 | Chess **substrate entities** (game, move, position, clock, opening) exist in runtime at **play grain** | [RUNTIME] |
| P1-2 | **Learning-bearing entities** (Episode semantics, LOE/DOE, DecisionTrace, Claims) are **doctrine-rich, runtime-absent** | [DOCTRINE] + [RUNTIME GAP] |
| P1-3 | Opening tree is the **only runtime knowledge corpus** | [RUNTIME] |
| P1-4 | Tournament, social, and pure-analysis-platform entities are **out of identity** | [DOCTRINE] CG-000 |

---

# Part 2 — Knowledge Concept Review

## What is a Knowledge Concept?

The repository **does not** adopt **Knowledge Concept** as a first-class governance type (ADR-002 D1 — **Corpus Reference** wins over Knowledge Concept [DOCTRINE]).

**Canonical v1 term:** **`Corpus Reference`** (`corpus_ref`) — stable semantic pointer to domain corpus (opening line, pattern label, position class, focus contract) [DOCTRINE] ADR-002 D5.

**Review synthesis label (not repo vocabulary):**

> A **Knowledge Concept** is a **referencable chess semantic unit** in the **domain corpus** that can be cited by anchors, Evidence Records, and DecisionTraces — distinct from learner evidence, integration, and wisdom.

### What qualifies as a concept?

| Qualifies | Does not qualify |
|-----------|------------------|
| Named tactical motif (fork, pin, skewer) with stable label | Single accidental move without pattern label |
| Opening line / variation ID in corpus | Engine CP alone |
| Position class (IQP, bishop pair, weak square) | Elo / rating bucket |
| Endgame technique label (Lucena, opposition) | Activity counter |
| Focus contract definition (CB-006 mode scope) | Learner state aggregate |

### Concept categories — Chess Knowledge Taxonomy v1 [PROPOSAL]

Organized for **corpus navigation**, not learner mastery storage:

| Tier | Category | Examples | `corpus_ref` class |
|------|----------|----------|-------------------|
| **T1 — Tactics** | Contact motifs | Fork, pin, skewer, discovered attack, double attack | `pattern:tactic:*` |
| **T2 — Tactics** | Non-contact motifs | Deflection, decoy, zwischenzug, interference | `pattern:tactic:*` |
| **T3 — Strategy** | Structure | Weak square, pawn structure, open file, space | `pattern:strategy:*` |
| **T4 — Strategy** | Piece play | Outpost, bishop pair, rook on 7th | `pattern:strategy:*` |
| **T5 — Opening** | System / line | Italian Game, Sicilian Najdorf, … | `opening:*` (runtime tree) |
| **T6 — Endgame** | Technique | Lucena, Philidor, opposition, triangulation | `pattern:endgame:*` |
| **T7 — Principles** | Heuristic | Development, king safety, center control | `principle:*` |
| **T8 — Phase** | Game phase | Opening, middlegame, endgame transition | `phase:*` |
| **T9 — Meta** | Study object | Blunder type, time trouble pattern | `meta:*` |

**Chess Knowledge Graph v1 [PROPOSAL — not adopted]:**

> A **domain-owned directed reference graph** of Corpus References and their semantic relations (subsumes, requires, contrasts, exemplifies) — **not** learner mastery, **not** federation export (ADR-002 D2, D8).

| Property | Rule |
|----------|------|
| **Nodes** | Corpus References only |
| **Edges** | Semantic relations between corpus units |
| **Custody** | Domain corpus — ChessGuide product, not learner |
| **Learner link** | Via Evidence Records + anchors citing `corpus_ref` — not graph node ownership |

### Conclusions (Phase 2)

| # | Conclusion | Class |
|---|------------|-------|
| P2-1 | Use **Corpus Reference**, not Knowledge Concept, in governance | [DOCTRINE] ADR-002 |
| P2-2 | Chess Knowledge Taxonomy v1 is a **corpus organization proposal** | [PROPOSAL] |
| P2-3 | Persisted Knowledge Graph is **rejected** as sovereign learner structure | [DOCTRINE] ADR-002 Alt-4 |
| P2-4 | Opening tree (T5) is the only runtime corpus structure | [RUNTIME] |

---

# Part 3 — Learning Event Review

## What is a Learning Event?

**Doctrine:** A **learning-bearing event** is an observable occurrence that **may produce evidence** supporting integration assessment — **not** learning itself (CG-FLL-001 I-3; CG-FLL-002 [DOCTRINE]).

**Canonical catalogue:** LOE-001–011 and DOE-001–008 (CG-FLL-1E [DOCTRINE]); unified as **Evidence Records** with `evidence_type: LOE | DOE` (ADR-003 [DOCTRINE]).

### Learning Event Taxonomy v1

| Tier | Event class | Examples | Evidence strength | Updates learner state? |
|------|-------------|----------|-------------------|------------------------|
| **L0 — Activity** | Non-learning activity | `activity.move`, passive scroll, watch without reflection | Weak — tag only | **No** — unless linked to LOE/DOE |
| **L1 — Exposure** | Notice without integration | Sees fork in game; LOE-001 Observation Shift | Moderate | **No** — evidence only |
| **L2 — Recognition** | Labels pattern | Identifies fork in analysis; LOE-002 | Moderate | **No** — evidence only |
| **L3 — Recall** | Retrieves without full integration | Names Lucena; LOE-003/004 | Moderate | **No** — derived view may update on read |
| **L4 — Application** | Uses in conditions | Plays correct tactic under time; DOE-008 | Strong | **No** sovereign persist — Evidence Record |
| **L5 — Explanation** | Articulates why | Explains fork mechanism; LOE-009; DecisionTrace cite | Strong | **No** — supports integration assessment |
| **L6 — Dialogue** | Exchange-mediated demonstration | DOE-001–007 steward/peer dialogue | Strong | **No** |
| **L7 — Teaching** | Explains to other | LOE-010; peer teach | Strong | **No** |
| **L8 — Transformation** | Attested capacity change | LOE-011 after C4 accepted | Strongest — claim tier | **Derived view only** — via Claim, not raw event |

### Events vs user journey examples

| User action | Event mapping | Learning? |
|-------------|---------------|-----------|
| User sees a Fork | LOE-001 + optional `corpus_ref: pattern:tactic:fork` | Activity → evidence; learning only if integration achieved later |
| User solves Fork puzzle | LOE-004/005 + DOE-008 if demonstrated | Evidence — not automatic mastery |
| User identifies Fork in analysis | LOE-002 | Evidence |
| User explains a Fork | LOE-009 + DecisionTrace reference | Evidence — strong integration indicator |
| User teaches a Fork | LOE-010 | Evidence — integration mechanism |

### Conclusions (Phase 3)

| # | Conclusion | Class |
|---|------------|-------|
| P3-1 | **Learning Event Taxonomy v1** maps cleanly to LOE/DOE catalogue | [DOCTRINE] |
| P3-2 | Events **generate evidence**; they do **not** directly update sovereign learner state | [DOCTRINE] ADR-002 D3 |
| P3-3 | Strength is **ordinal by event class + lineage**, not numeric score | [DOCTRINE] ADR-003 D5 |
| P3-4 | Activity events must remain **tagged separately** (I-3) | [DOCTRINE] |

---

# Part 4 — Evidence Review

## What is Evidence?

**Accepted definition (ADR-aligned):**

> **Evidence** is a **time-ordered, anchorable learner-custody artefact** that supports reconstruction, integration assessment, or steward-validated claims — including Episode events, LOE/DOE Evidence Records, DecisionTraces (when adopted), IM-1 snapshots, and dialogue records. Evidence is **not** learning, **not** a claim, and **not** federation export.

### Evidence Model v1

| Layer | Object | ADR | Federation |
|-------|--------|-----|------------|
| **Substrate** | MoveRecord, FEN, clock | ADR-001 | Partial (move stream) |
| **Reasoning context** | DecisionTrace | ADR-005 draft | Withheld |
| **Observation / demonstration** | LOE / DOE Evidence Record | ADR-003 | Withheld |
| **Hypothesis** | Integration / Transformation Claim | ADR-004 | Withheld |
| **Verdict** | C4 stewardship outcome | ADR-004 | Withheld |
| **Export slice** | ObservationRecord | FEDERATION.md | Exported only |

### Evidence types (from user examples)

| Type | Maps to | Strength |
|------|---------|----------|
| **Exposure** | LOE-001, passive observation | Low–moderate |
| **Recognition** | LOE-002 | Moderate |
| **Application** | DOE-008, demonstrated move under conditions | Strong |
| **Explanation** | LOE-009, DOE-006 | Strong |
| **Teaching** | LOE-010 | Strong |

### Weighting, decay, expiry

| Question | Disposition | Class |
|----------|-------------|-------|
| **Can evidence be weighted?** | **Procedural only** — steward narrative, lineage depth, LOE vs DOE, `capture_timing` (ADR-005) — **not numeric scores** | [DOCTRINE] ADR-003 D5; ADR-004 D6 |
| **Should evidence decay?** | **Open** — trace retains history (CG-FLL-003 continuity); **integration relevance** may diminish narratively — no decay function defined | [OPEN QUESTION] CEAR OQ-E2 |
| **Should evidence expire?** | **No silent expiry** — revocation supersedes claims (ADR-004 D11); Evidence Records are append-oriented | [DOCTRINE] |

### Conclusions (Phase 4)

| # | Conclusion | Class |
|---|------------|-------|
| P4-1 | Evidence Model v1 is **specified in ADR-001–004** | [DOCTRINE] |
| P4-2 | Numeric weighting is **rejected** as doctrine | [DOCTRINE] |
| P4-3 | Decay policy remains **undefined** | [OPEN QUESTION] |
| P4-4 | Federation export is **not** evidence theory — lossy subset only | [DOCTRINE] |

---

# Part 5 — Knowledge State Review

## Proposed ladder critique

User-proposed progression:

```text
Unknown → Exposed → Recognized → Understood → Applied → Mastered → Teaching
```

### Evaluation against doctrine

| State (proposed) | Doctrine mapping | Verdict |
|------------------|------------------|---------|
| **Unknown** | Learning Frontier gap (not integrated) | [PROPOSAL] useful as **derived view** label only |
| **Exposed** | LOE-001 / attention event | Evidence — not state |
| **Recognized** | LOE-002 | Evidence — not state |
| **Understood** | LOE-009 / Understanding chain stage | Evidence + integration path — not stored state |
| **Applied** | DOE-008 / demonstrated use | Evidence — not state |
| **Mastered** | CFA Mastery Horizon | **Long-horizon label** — not claim step (ADR-004 D2) |
| **Teaching** | LOE-010 | Evidence event — integration mechanism |

### Knowledge State Model v1 [PROPOSAL — derived read model only]

**Rejected as sovereign persisted state** (ADR-002 D3 [DOCTRINE]).

**Permitted as computed pedagogical view:**

```text
corpus_ref X:
  exposure_count      ← LOE-001/002 citing X
  explanation_depth   ← LOE-009/DOE-006 citing X
  demonstration_count ← DOE-008 citing X
  claim_status        ← Integration Claim verdict if any (ADR-004)
  frontier_flag       ← true if corpus known but not integrated
```

| Question | Answer |
|----------|--------|
| Correct progression? | **Partially** — useful pedagogy narrative; **wrong as storage schema** |
| Missing states? | **Conditions** (CB-006 modes), **contradiction**, **revocation** |
| Redundant? | **Exposed/Recognized** collapse without DecisionTrace timing distinction |
| Auto-inferable? | **Partially** — derived views yes; **claims require stewardship** |

### Conclusions (Phase 5)

| # | Conclusion | Class |
|---|------------|-------|
| P5-1 | Linear mastery ladder is **pedagogically intuitive** but **epistemically unsafe** as persisted state | [INFERENCE] |
| P5-2 | Replace with **evidence + claims + derived views** per ADR-002–004 | [DOCTRINE] |
| P5-3 | **Mastery** is horizon label — not automatic from Teaching | [DOCTRINE] CFA |

---

# Part 6 — Learner Graph Review

## What is a Learner Graph?

**ADR-002 resolution [DOCTRINE]:**

> **Learner Graph** is a **derived-view alias** for Actor + LearningTrace hierarchy — **not** a persisted graph database, **not** sovereign aggregate.

**Learner Graph Specification v1 [PROPOSAL — read model]**

```text
Actor (learner)
  └── LearningTrace
        ├── Episodes[]
        │     ├── MoveRecords
        │     ├── DecisionTraces[]     [ADR-005 draft]
        │     └── Anchors[] (may carry corpus_ref)
        ├── EvidenceRecords[] (LOE | DOE)
        ├── Claims[] (integration | transformation)  [ADR-004]
        └── DerivedViews (computed, not persisted):
              ├── learner_state
              ├── LongitudinalPath
              └── LearningFrontier
```

### Example edges (interpretive)

| Edge | Meaning | Persisted? |
|------|---------|------------|
| Fork → `corpus_ref: pattern:tactic:fork` cited in LOE-002 | Recognition evidence | Evidence Record |
| Fork → Integration Claim `accepted` | Bounded integration hypothesis | Claim + verdict |
| Lucena → `exposure_count: 1` | Derived view | **No** |
| Opposition → LOE-009 depth | Explanation evidence | Evidence Record |

### Mastery and confidence

| Construct | Representation |
|-----------|----------------|
| **Mastery** | **Not** a node property — CFA Mastery Horizon + optional Claim `claim_scope` | [DOCTRINE] |
| **Confidence** | **Qualitative** — `limitations` on Claims; `uncertainty` on DecisionTrace — **not scores** | [DOCTRINE] ADR-004, ADR-005 |

### Conclusions (Phase 6)

| # | Conclusion | Class |
|---|------------|-------|
| P6-1 | Store **Evidence Records + Claims**, compute **Learner Graph views** | [DOCTRINE] ADR-002 |
| P6-2 | `Fork → Mastered` edges are **misleading** without claim lineage | [INFERENCE] |
| P6-3 | Graph DB traversal API is **out of scope** v1 | [DOCTRINE] ADR-002 |

---

# Part 7 — Learning Frontier Review

## Formulation

User formula:

```text
Chess Knowledge Graph − Learner Graph = Learning Frontier
```

### ADR-002 constrained definition [DOCTRINE]

> **Learning Frontier** = corpus references **not yet integrated** by the learner under current **observation capacity** and **enactment conditions** (Capability Conditions, CB-006).

**Refined formula:**

```text
Learning Frontier =
  Corpus References
  minus
  corpus_refs with accepted Integration Claims (within scope)
  minus
  corpus_refs with strong explicit integration evidence (LOE-009 + DOE-008 lineage)
  filtered by
  Capability Conditions (mode, attention, time)
```

**Anti-patterns [DOCTRINE] ADR-002 D4:**

- Learning Frontier is **not** a graph stored in DB
- **Not** federation export
- **Not** evidence by itself

### Frontier selection — what to optimize?

| Objective | Doctrine support | Recommendation |
|-----------|------------------|----------------|
| **Difficulty** | CB-006 modes scale help | Yes — match Capability Conditions |
| **Motivation** | CB-004 PP-1 companion | Yes — secondary |
| **Learning speed** | CG-FLL-003 flow hypotheses (LEF-1D) | Cautious — avoid false mastery |
| **Enjoyment** | CB-004 — no shame framing | Yes — guardrail |
| **Integration depth** | CG-FLL-002 primary | **Primary** — frontier serves integration, not coverage |

**Learning Frontier Model v1 [PROPOSAL — derived pedagogy view]:**

| Input | Output |
|-------|--------|
| Corpus taxonomy + learner Evidence Records + Claims + modes | Ranked `corpus_ref` candidates for next focus |
| Steward/Buddy | Non-authoritative surfacing (ADR-002 D9; ADR-004 D8) |

### Conclusions (Phase 7)

| # | Conclusion | Class |
|---|------------|-------|
| P7-1 | Formula is **directionally correct** but must use **Corpus Reference − integration evidence**, not abstract graphs | [DOCTRINE] ADR-002 |
| P7-2 | Frontier optimizes **integration under conditions**, not catalog completion | [INFERENCE] |
| P7-3 | Buddy may surface frontier; **LARIS not required** (ADR-002 D9) | [DOCTRINE] |

---

# Part 8 — LARIS Review

## What must LARIS model?

**LARIS** = federation **learning dialogue** partner — **dormant** until explicit activation (FDP-002, CG-002 [DOCTRINE]).

### LARIS Educational Model v1 [DOCTRINE]

| LARIS must know (about learning) | LARIS must not own |
|----------------------------------|-------------------|
| How integration proceeds across domains | Chess domain corpus |
| Cross-domain reflection patterns | Episode custody |
| Learner's federation-level learning narrative (when shared) | LOE/DOE capture mechanics |
| Stewardship dialogue conventions (FDS-001) | Engine evaluation truth |
| When to defer to domain mentor (Buddy) | Transformation Claim verdicts |

### What LARIS should read from ChessGuide (if activated)

| Data | Access |
|------|--------|
| What learner has **seen** | Derived summaries — not raw trace export |
| What learner has **demonstrated** | Evidence summaries — federation withheld |
| What learner can **explain** | LOE-009 aggregates — opt-in |
| What learner can **teach** | LOE-010 signals — opt-in |

### Can LARIS estimate Knowledge → Wisdom?

| Layer | LARIS may estimate | Method |
|-------|-------------------|--------|
| **Knowledge** | Partial — recall accessibility trends | Cross-domain dialogue |
| **Understanding** | Partial — explanation quality | Reflective dialogue DOE-006 |
| **Competence** | Indirect — via domain Buddy + claims | **Not** LARIS primary |
| **Autonomy** | Partial — self-directed practice patterns | Mode + stewardship logs |
| **Meaning** | Partial — goal alignment dialogue | CG-FLL-003 |
| **Wisdom** | Weak — normative guidance history | **Buddy + steward** primary in chess |

**Buddy vs LARIS [DOCTRINE]:**

| | Buddy | LARIS |
|---|-------|-------|
| **Domain** | Chess skill | Learning process |
| **Status** | Active (product) | Dormant |
| **Claims** | Cannot issue C4/LOE-011 by default | N/A until activation |

### Conclusions (Phase 8)

| # | Conclusion | Class |
|---|------------|-------|
| P8-1 | LARIS models **learning**, not **chess content** | [DOCTRINE] CG-002 |
| P8-2 | ChessGuide provides **domain evidence**; LARIS provides **learning guidance** | [DOCTRINE] |
| P8-3 | No LARIS implementation — **do not block** FLL-1 on LARIS | [DOCTRINE] FDP-002 |

---

# Part 9 — Human Development Layer

## Should ChessGuide model Knowledge → Wisdom explicitly?

**Yes — via federation learning chain** (CB-000A [DOCTRINE]), **not** as six parallel stored scores.

### Human Development Framework v1

| Layer | ChessGuide manifestation | Measurable? | Evidence |
|-------|-------------------------|-------------|----------|
| **Knowledge** | Recall, repertoire, pattern labels | Partially — LOE-003/004 | Evidence Records |
| **Understanding** | Explanation, causal reasoning | Partially — LOE-009, DecisionTrace | Evidence + replay |
| **Competence** | Demonstrated play under conditions | Yes — DOE-008, game outcomes + engine deviation | Measured + perceived lanes |
| **Autonomy** | Mode choice, self-stewardship | Partially — LOE-010, CB-006 | Trace + dialogue |
| **Meaning** | Purpose-aligned goals | Weak — grounding records, narrative | Steward dialogue |
| **Wisdom** | Judgment under uncertainty | Weak — LOE-007/008, in-game decisions | Narrative + longitudinal |

**Measurability rule:** Higher layers require **richer evidence lineage** and **steward interpretation** — not single KPIs.

### Conclusions (Phase 9)

| # | Conclusion | Class |
|---|------------|-------|
| P9-1 | Model layers as **chain stages + evidence types**, not dashboard scores | [DOCTRINE] |
| P9-2 | Wisdom and Meaning are **longitudinal narratives**, not booleans | [INFERENCE] |
| P9-3 | IM-1 bridges perceived vs measured across layers | [DOCTRINE] CB-005 |

---

# Part 10 — Learning Modalities

## Modalities

| Modality | ChessGuide role | Evidence path |
|----------|-----------------|---------------|
| **Text** | Annotations, LOE narrative, DecisionTrace rationale | LOE/DOE, ADR-005 |
| **Video** | Future — CB-007 physical chess | Not defined |
| **Dialogue** | Buddy, steward, peer (DOE-*) | FDS-001 |
| **Practice** | Play, puzzles (future) | Episode + LOE |
| **Experimentation** | LOE-005 simulation / what-if | Non-canonical sim (LLD) |
| **Teaching** | LOE-010 | Dialogue + Evidence |

### Learner preferences as first-class entities?

| Disposition | Rationale |
|-------------|-----------|
| **Deferred** | CB-006 modes capture **enactment conditions** — sufficient v1 | [DOCTRINE] |
| **Future** | Modality preference as Actor metadata — not sovereign graph | [PROPOSAL] |

### Learning Modality Model v1 [PROPOSAL]

> Modalities are **capture channels** for Evidence Records — tagged on `source_boundary` / `trace_source` — not separate mastery dimensions.

### Conclusions (Phase 10)

| # | Conclusion | Class |
|---|------------|-------|
| P10-1 | Modes (CB-006) subsume preference for v1 | [DOCTRINE] |
| P10-2 | Modality tags belong on **evidence provenance**, not learner state | [INFERENCE] |

---

# Part 11 — Multi-Agent Learning

## Relationship types

| Relationship | Importance | Entity status |
|--------------|------------|---------------|
| **Student ↔ Student** | Medium — peer teaching LOE-010 | Dialogue event — not graph node v1 |
| **Student ↔ Teacher** | High — steward pilot (CG-FLL-001) | Steward as role on Human Actor [OPEN] |
| **Teacher ↔ Teacher** | Low for product v1 | Out of scope |
| **Human ↔ Human** | Medium — over-the-board play | Episode participants |
| **Human ↔ LARIS** | Future — dormant | Not activated |
| **Human ↔ Buddy** | **High** — primary product | Buddy ≠ learner; prompt boundaries ADR-004/005 |
| **Machine ↔ Machine** | Low — bot opponents not traced (CB-005 A-2) | Bot excluded from skill trace |

### Learning Relationship Model v1 [PROPOSAL]

> Relationships are **provenance and dialogue context** on Evidence Records (`evaluator`, `steward_source`, `trace_source`) — **not** first-class graph edges in v1.

### Conclusions (Phase 11)

| # | Conclusion | Class |
|---|------------|-------|
| P11-1 | Steward-led pilot is **primary** multi-agent pattern | [DOCTRINE] CG-FLL-001 |
| P11-2 | Explicit relationship entities **deferred** | [PROPOSAL] |
| P11-3 | Buddy-human boundary is **governance-critical** | [DOCTRINE] ADR-004 D8 |

---

# Part 12 — Strategic Conclusion

## 1. ChessGuide Domain Content Assessment

| Dimension | Maturity | Notes |
|-----------|----------|-------|
| **Identity & mission** | Strong | CG-000, CG-FLL-002 |
| **Learning semantics** | Strong | Integration-centric, activity guardrails |
| **Evidence catalogue** | Strong | LOE/DOE + ADR-003/004 |
| **Chess knowledge corpus** | Weak runtime | Opening tree only; taxonomy proposal needed |
| **Per-ply reasoning** | Governance draft | ADR-005 on branch |
| **Learner / frontier models** | Constrained | ADR-002 derived views |
| **LARIS** | Doctrine only | Dormant |
| **Human development layers** | Chain-stage mapped | Not KPI-ready |
| **Runtime content capture** | Minimal | LEF-2C gap |

**Overall:** ChessGuide possesses **strong learning epistemology** and **weak domain content instantiation**. The repository knows **what learning is** better than it can **observe chess learning happening**.

## 2. Major gaps (repository vs vision)

| Gap | Type |
|-----|------|
| No LOE/DOE / DecisionTrace / Claim capture in runtime | Implementation |
| No endgame / tactic corpus beyond openings | Domain content |
| Knowledge Concept vs Corpus Reference — reviews used old term | Terminology (resolved by ADR-002) |
| Linear mastery ladder intuition vs stewardship model | Product pedagogy risk |
| LARIS activation undefined | Federation |
| Chrome Extension / Android / Stockfish — vision docs only | Product horizon |
| Evidence decay undefined | Governance open question |
| KPI framework not defined | Analytics |

## 3. Proposed canonical definitions

| Term | Canonical definition | Status |
|------|---------------------|--------|
| **ChessGuide** | Longitudinal chess skill development domain | [DOCTRINE] CG-000 |
| **Learning** | Integration achieved | [DOCTRINE] CG-FLL-002 |
| **Evidence** | Time-ordered anchorable custody artefact | [DOCTRINE] ADR-003 |
| **Claim** | Governed hypothesis evaluated against evidence lineage | [DOCTRINE] ADR-004 |
| **Corpus Reference** | Domain semantic pointer — not learner evidence | [DOCTRINE] ADR-002 |
| **Learning Frontier** | Derived integration-gap view | [DOCTRINE] ADR-002 D4 |
| **Learner Graph** | Derived view alias — Actor + LearningTrace | [DOCTRINE] ADR-002 D3 |
| **DecisionTrace** | Per-ply reasoning context — not claim | [DRAFT] ADR-005 |
| **Knowledge Concept** | **Non-canonical** — use Corpus Reference | [SUPERSEDED] by ADR-002 |
| **LARIS** | Federation learning dialogue — dormant | [DOCTRINE] CG-002 |

## 4. Candidate ADRs

| ADR | Topic | Priority |
|-----|-------|----------|
| **ADR-005** | DecisionTrace / per-ply reasoning | In draft on branch |
| **ADR-006** | Buddy pedagogical use of reference model | Next |
| **Future** | Corpus taxonomy / `corpus_ref` format | High — unlocks frontier |
| **Future** | Implementation storage phase | After ADR-005/006 |
| **Future** | LARIS activation boundary | When FRL gate opens |
| **Future** | KPI / analytics governance | After capture exists |

## 5. Recommended next review

| Review | Rationale |
|--------|-----------|
| **Chess Corpus Content Review v1** | Endgame, tactics, pattern library scope beyond opening tree |
| **ADR-006 Buddy Pedagogy Review** | Product copy boundaries for frontier, claims, engine |
| **Learning Analytics Governance Review** | KPIs without score-as-doctrine |

## 6. Recommended next implementation phase

**Not authorized by this review.** When explicitly ordered:

1. Accept ADR-005 → ADR-006
2. Corpus Reference registry (opening tree + tactic labels) — governance first
3. Episode adapter + first LOE capture (LOE-001/009) — minimal pilot
4. **Not** Knowledge Graph DB, **not** persisted mastery ladder, **not** LARIS

---

## Cross-cutting open questions

| ID | Question |
|----|----------|
| OQ-DCR-1 | Adopt Chess Knowledge Taxonomy v1 as corpus governance doc? |
| OQ-DCR-2 | Endgame corpus — separate CB doc or corpus_ref extension? |
| OQ-DCR-3 | Evidence decay policy for long-horizon players? |
| OQ-DCR-4 | When to activate LARIS relative to Buddy maturity? |
| OQ-DCR-5 | Stockfish integration — measured lane only (PI-5)? |
| OQ-DCR-6 | Chrome Extension — observation capture or play client? |

---

## Classification legend

| Tag | Meaning |
|-----|---------|
| **[DOCTRINE]** | Committed governance or Accepted ADR |
| **[PROPOSAL]** | Review synthesis — not adopted |
| **[INFERENCE]** | Grounded conclusion from doctrine + evidence |
| **[RUNTIME]** | Observed in `src/` |
| **[RUNTIME GAP]** | Doctrine expects; runtime lacks |
| **[OPEN QUESTION]** | Unresolved in repository |
| **[DRAFT]** | ADR draft not on main |
| **[SUPERSEDED]** | Replaced by Accepted ADR |

---

## Related documents

- [ADR-001 — Episode Schema v1](../governance/adr/ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](../governance/adr/ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](../governance/adr/ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](../governance/adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [CEAR v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md)
- [CLOR v1.0](ChessGuide-Learning-Ontology-Review-v1.0.md)
- [CG-FLL-002 — Learning Semantics](../governance/chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — Pilot Execution Plan](../governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CFA v1.0](../governance/federation/CFA-v1.0.md)
