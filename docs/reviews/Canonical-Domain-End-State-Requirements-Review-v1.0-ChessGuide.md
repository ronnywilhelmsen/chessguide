# Canonical Domain End-State Requirements Review v1.0 — ChessGuide

| Field | Value |
|-------|-------|
| **Review ID** | CDESR-v1.0-ChessGuide |
| **Date** | 2026-06-06 |
| **Status** | Accepted Domain Review Candidate |
| **Scope** | ChessGuide end-state domain requirements vs emerging Canonical Continuity UML Domain Model |
| **Method** | Doctrine-first; runtime used only in Part XI (Gap Analysis) |
| **Constraints** | Not a runtime spec, implementation proposal, UML revision, or roadmap |

**UML model evaluated:** Candidate types supplied in this review mandate (Actor hierarchy, Project/Dialogue primitives, continuity record families). The UML model is **not** stored in this repository; evaluation is against the **emerging model as specified**, not against chessguide code.

**Doctrine precedence:** Where doctrine and implementation disagree, **doctrine wins**.

---

## Source Hierarchy (applied)

| Priority | Sources used |
|----------|--------------|
| 1 | Domain doctrine: CG-000, CG-002, CB-000A, CB-002, CG-FLL-002, CG-FLL-003, CFA-v1.0 |
| 2 | Vision: CG-001, CB-001 (inherited product vision) |
| 3 | Constitutional: `vendor/federation-canon-1.0.1/constitution/`, FEDERATION.md |
| 4 | Governance: CG-FLL-001/1E, CB-005, CB-004, CB-006, LEF line, FCS-001 |
| 5 | ADRs | **None in repository** |
| 6 | Roadmaps | CB-003 (inherited reference only) |
| 7 | README | Product positioning statement |
| 8 | Runtime/code | Gap Analysis only (Part XI) |

---

# Part I — Domain Purpose

## Authoritative purpose

**ChessGuide exists to observe, understand, guide, and improve longitudinal chess skill development over time — making learning and transformation visible, not merely games and ratings.**

This is **not** “to analyze chess games.” Analysis is a **means**; the **mission** is skill development through **integration achieved over continuity** (CG-000, CG-001, CG-FLL-002, CB-002).

### Evaluated purpose candidates (doctrine)

| Candidate | Verdict | Doctrine anchor |
|-----------|---------|-----------------|
| Skill development | **Primary** | CG-000 “longitudinal skill development domain”; CB-002 LSDD |
| Longitudinal mastery | **Supported (horizon)** | CFA Mastery Horizon; CB-000A trajectory |
| Deliberate practice | **Supported (mechanism)** | CG-FLL-001 learning-skill signals; CB-006 Training/Practice modes |
| Coaching | **Supported (bounded)** | CB-004 Buddy; **not** sovereign mission — learning is |
| Knowledge transfer | **Secondary** | CG-FLL-001 H3; Laris/ChessGuide division |
| Human–machine learning | **Supported (relationship)** | PI-5 engine as reference; bot opponents |
| Strategic reasoning | **Domain substrate** | Chess as bounded state space (CB-002) — not mission alone |
| Competition / tournament play | **Explicitly not mission** | CG-000, CB-001 non-goals |

### Organizing principle

The **federation learning chain** and **CFA** organize the domain:

```text
Reality → Observation → … → Stewardship → Transformation
```

Learning = **integration achieved** (CG-FLL-002). Longitudinal learning = **integration through continuity** (CG-FLL-003).

---

# Part II — Domain Reality

## Canonical reality modeled

ChessGuide models **human skill development through chess practice over measurable time**, not chess as an abstract game server.

| Reality facet | In end-state? | Role |
|---------------|---------------|------|
| **Human learning** | **Yes — primary** | Subject of FLL-1; CFA target |
| **Skill / expertise development** | **Yes** | CB-002 LSDD definition |
| **Chess games (episodes)** | **Yes — substrate** | Bounded episodes producing trace evidence |
| **Chess positions & moves** | **Yes — observables** | ChessObservation / ChessSignal (CB-002) |
| **Strategic thinking** | **Yes — interpreted** | ChessReasoning, Understanding stage |
| **Training / practice systems** | **Yes** | CB-006 modes; deliberate practice |
| **Competition infrastructure** | **No** | CG-000/CB-001 non-goals |
| **Social play context** | **Yes (context)** | Friendly Live mode; physical chess (CB-007 ref.) |

**Canonical reality statement:**

> The domain reality is **a learner’s longitudinal chess skill trajectory** — evidenced by replayable practice episodes, interpreted reasoning, stewarded traces, and validated transformation — within bounded chess rules.

---

# Part III — Domain Actors

## End-state actors (doctrine)

| Actor (domain) | Role | UML mapping |
|----------------|------|-------------|
| **Learner (Human)** | Primary traced actor; owns LearningTrace | **HumanActor** |
| **Steward (Human)** | Validates transformation; replay/lineage (FLL-1) | **HumanActor** (role distinction) |
| **Human opponent** | Co-participant in episode; may be untraced | **HumanActor** |
| **Buddy (pedagogical agent)** | Mentor persona; explanations; proportionality | **ServiceActor** (product agent) — see gap note |
| **Chess engine** | Reference analysis; not sovereign | **MachineActor** |
| **Bot opponent** | Practice opponent; not LSDD skill-traced actor | **MachineActor** (CB-005 A-2) |
| **Laris** | Federation learning guide; cross-domain | **LarisActor** |
| **Federation export consumer** | Receives continuity slice only | **ServiceActor** / external |
| **Club / organization** | Referenced weakly (club hobbyists CB-001) | **OrganizationActor** — **marginal** in doctrine |

## UML gap candidates (actors)

| Gap | Reason |
|-----|--------|
| **Steward role vs Learner role** | Same `HumanActor` type may be insufficient to express **non-self-certifying transformation** (CG-FLL-001, I-2) without role semantics |
| **Buddy pedagogical agent** | End-state requires longitudinal mentor distinct from raw engine — may need explicit **ServiceActor** subtype or **UML Gap Candidate: PedagogicalAgent** |
| **Physical board / AMR observer** | CB-007 planned; may need **MachineActor** or **ServiceActor** for observation-only capture |

---

# Part IV — Canonical Objects

Objects derived from CB-002 artefact catalogue, CB-005 schema, CFA-v1.0, CG-FLL-1E — **not** from runtime.

| Object | Purpose | Ownership | Lifetime | Continuity requirements |
|--------|---------|-----------|----------|-------------------------|
| **Actor (Learner)** | Skill subject | Learner / steward custody | Years–decades | Stable actor identity across sessions |
| **LearningTrace** | Longitudinal evidence container | Learner (PI-4) | Domain lifetime | Temporal ordering; export/sync rules (CB-005) |
| **Session** | Grouping of connected play | Learner | Days–weeks | Optional; links episodes |
| **Episode** | One completed game (or exercise unit) | Learner | Single episode | Immutable anchors once written (AN-2) |
| **Event / ChessSignal** | Atomic observation | Trace append | Event | Ordered within episode |
| **ChessObservation** | Position/clock/context snapshot | Domain | Point-in-time | Replayable |
| **ChessAnchor** | Trace index (move, opening, focus) | Trace | Permanent post-write | Cross-episode pattern queries (AN-4) |
| **ChessReasoning** | Understanding interpretation | Domain / learner | Episode + cross-ep | Links to evidence refs |
| **ExplanationArtifact** | Structured why (P1/P2) | Learner + steward | Episodic → attested | evidence_refs[] lineage (LEF-0C–0D) |
| **LOE / DOE record** | Learning observability event | Trace | Event | Lineage for LOE-011 (CG-FLL-1E) |
| **IM-1 snapshot** | Measured vs perceived gap | Episode | Sub-episode | Never conflate measured/perceived (I-3) |
| **SkillTransformation** | Validated capability change | Steward-attested | Claim horizon | Requires lineage to Observation (CB-000A) |
| **Transformation Claim** | LOE-011 post-C4 | Steward | Claim event | ≥2 prior stage events (CG-FLL-1E) |
| **Opening knowledge node** | Pattern/line reference | Domain corpus | Long-lived | Versioned opening tree |
| **User mode context** | Capture/policy envelope | Product | Per session/episode | CB-006 behaviour matrix |
| **Game artifact (legacy encoding)** | Episode serialization | Learner | Episode | Maps to Episode semantically (CB-005 legacy note) |

### Rejected or demoted object names (doctrine)

| Example name | Verdict |
|--------------|---------|
| **Player** | Valid as **Actor** label; not a separate canonical object from Learner in trace |
| **Coach** | **Buddy** persona + **Laris** guidance — not a sovereign ChessGuide object |
| **TrainingPlan** | **Not named** in authoritative schema; deliberate practice via modes + steward narrative |
| **Lesson** | **Not** primary LSDD object; knowledge applied through practice (CB-002) |
| **Recommendation** | **ChessWisdom** / hints — derivative, mode-gated; not standalone sovereign object |
| **ProgressRecord** | Absorbed into **LearningTrace** + transformation claims |
| **SkillProfile** | Interpretive read model; not CB-005 first-class type |
| **Variation** | **Simulation** mechanism (LOE-005), not standalone canonical object |
| **Analysis** | Engine-derived **measured** input; not learning claim alone |

---

# Part V — Canonical Processes

| Process | Inputs | Outputs | Continuity requirements |
|---------|--------|---------|-------------------------|
| **Observe** | Reality (moves, clock, context) | ChessObservation, ChessSignal, LOE-001/002 | Append to Episode; timestamps |
| **Attend** | Observation stream | Attention log, hints shown/dismissed | Mode policy (CB-006); DOE attention family |
| **Understand** | Signals + reasoning | ChessReasoning, LOE-009, ExplanationArtifact P1 | Link to anchors |
| **Integrate** | Understanding + practice | LOE-007/008/010; implicit/explicit channels (CFA) | Cross-episode recurrence |
| **Simulate** | Position understanding | LOE-005, variation text | Without board move |
| **Practice** | Mode + exercise framing | Episode events, exercise results | Training/Practice modes |
| **Analyze** | FEN + engine | Measured CP/deviation (IM-1) | Measured lane only; not sole learning evidence |
| **Recommend** | Wisdom + mode | Hints, opening markers, Buddy message | Proportionality PI-3/PI-6; not in federation export |
| **Replay** | Trace lineage | Reconstructed positions; replay verdict | CTP/replay procedure (CG-FLL-1E Part VII) |
| **Review** | Terminal episode | Reflection, LOE-009, post-game mode | Post-Game Review mode |
| **Coach** | Trace diagnosis | Dialogue, teaching LOE-010 | Buddy + optional Laris |
| **Steward** | Full trace | C0–C4 checkpoints, threshold review | Custody operations (CB-005) |
| **Validate / Claim** | Lineage + evidence | LOE-011, C4 verdict, SkillTransformation | I-1, I-2 invariants |
| **Export (federation)** | Completed game slice | ObservationRecord game_import | Lossy boundary only (FEDERATION.md) |
| **Learn** | Integration over continuity | Durable capability change | **Not** activity alone (CG-FLL-002) |
| **Compete** | **Out of scope** as mission | — | — |

---

# Part VI — Canonical Knowledge

## Authoritative knowledge structures (end-state)

| Knowledge domain | Structure | Authority |
|------------------|-----------|-----------|
| **Chess rules** | External bounded rules (`chess.js` in product) | Universal chess |
| **Openings** | Opening tree / IDs (CB-005 knowledge refs) | ChessGuide corpus |
| **Patterns / tactics / strategy** | Anchors, labels, LOE-002 recognition | Trace-linked, steward-visible |
| **Endgames** | **Not** separately catalogued in doctrine | Gap in explicit corpus |
| **Engine evaluation model** | Reference PV/CP | MachineActor; non-sovereign (PI-5) |
| **Learning semantics** | CG-FLL-002, CG-FLL-003 | ChessGuide governance |
| **Learning observability catalog** | LOE-001–011, DOE families | CG-FLL-1E |
| **Capability Formation model** | CFA v1.0 | ChessGuide sovereign interpretive layer |
| **Coaching / Buddy model** | CB-004 persona, CB-006 modes | Product governance |
| **IM-1 model** | Measured vs Perceived fields | CB-005 |
| **Federation observation envelope** | ObservationRecord schema | Federation canon (export slice only) |

**Principle:** Domain knowledge is **practice-linked** — openings and patterns matter when **played and traced**, not only named (CB-002).

---

# Part VII — Domain Continuity

## Continuity question

> How must chess continuity be preserved over 1 year, 10 years, 100 years?

### Doctrine requirements (horizon-independent)

| Continuity facet | Requirement | Source |
|------------------|-------------|--------|
| **Player / actor history** | LearningTrace custody; actor-initiated delete; no silent overwrite (CB-005) | Stewardship |
| **Training history** | Episodes + events + anchors across sessions | CB-005 hierarchy |
| **Skill evolution** | Traceable lineage to Transformation claims | CB-000A chain rule |
| **Replay** | Reconstructable positions and learning path | Replay procedure; CTP intent |
| **Knowledge preservation** | Opening IDs, anchors immutable (AN-2) | CB-005 |
| **Coaching continuity** | Buddy longitudinal memory (CB-004); dialogue linkage | DOE / Dialogue |
| **Federation continuity slice** | Game-scoped `continuity_id`; checksum | FEDERATION.md |

### Horizon evaluation

| Horizon | What must hold |
|---------|----------------|
| **1 year** | Episode identity stable; sync merge by episode ID; LOE lineage for pilot claims; exportable game artifacts |
| **10 years** | Actor identity persistence; trace export/portable bundle (CB-005); schema versioning without semantic loss (CB-005 A-4 federation projection note) |
| **100 years** | **Doctrine specifies stewardship and lineage principles; does not specify archival encoding.** Continuity intent = **time-ordered meaningful state** (CG-FLL-003, FCS-001 pattern) with **sovereign retention of learning** vs **lossy federation export** |

**Critical boundary (constitutional):**

```text
Federation transports continuity (game_import slice).
ChessGuide retains learning (full trace semantics).
```

Full chess-learning continuity is **sovereign**, not fully represented in federation ObservationRecords alone.

---

# Part VIII — Domain Autonomy

| Capability | Automated (doctrine) | Human-required (doctrine) |
|------------|----------------------|---------------------------|
| **Move registration** | Yes | Human plays moves (PI-3 autonomy) |
| **Engine analysis** | Yes (reference) | Human chooses moves in friendly play |
| **Opening recognition** | Yes (markers) | — |
| **Hint / recommendation surfacing** | Yes, mode-gated | User requests in Training; off in Friendly Live |
| **Simulation recording** | Partial (learner-described) | Learner generates variation |
| **Integration detection** | **Not** fully automatable | Steward inference allowed for claims (CFA) |
| **Coaching dialogue** | Buddy automated delivery | Pedagogical judgment; proportionality |
| **Learning feedback** | Buddy + measured signals | Learner reflection (LOE-009) |
| **Transformation claim** | **No** self-certification | Steward C4 + LOE-011 (CG-FLL-001) |
| **Goal management** | **Not** specified as automated | Steward/learner narrative |
| **Training plans** | **Not** authoritative automated object | Modes + steward judgment |
| **Trace delete/export** | Mechanism automated | **Actor-initiated** (PI-4) |

**Autonomy principle:** Player **autonomy over moves and tempo** in friendly live play (PI-3). Engine is **reference, not identity** (PI-5).

---

# Part IX — End-State Vision

**Fully realized ChessGuide** (doctrine composite, ignoring current maturity):

ChessGuide is a **longitudinal skill development domain** where a learner’s chess practice produces a **rich, stewarded LearningTrace** — episodes, signals, anchors, reasoning, explanations, LOE/DOE learning events, and IM-1 discipline — integrated over continuity into **validated skill transformation**.

The learner can answer: *What have I learned? How? Why did I improve or stagnate? What should I learn next?* (CG-001, CB-005 intent).

**Buddy** provides proportional mentoring without replacing judgment. **Laris** supplies federation learning guidance without owning chess semantics. **Federation** receives **completed-game continuity evidence** only; **learning remains sovereign**.

ChessGuide is **not** a tournament platform, engine wrapper, or social network — it is the **first operational skill laboratory** for continuity-based learning (CG-000, CG-002).

---

# Part X — UML Validation

Evaluation against **emerging Canonical Continuity UML** candidate types (no UML modification).

## Actor primitives

| UML type | Verdict | ChessGuide end-state fit |
|----------|---------|--------------------------|
| **Actor** (base) | **Supported** | Learner-centric domain |
| **HumanActor** | **Supported** | Learner, steward, human opponents |
| **MachineActor** | **Supported** | Engines, bots |
| **OrganizationActor** | **Partially Supported** | Weak doctrine presence (clubs) |
| **ServiceActor** | **Partially Supported** | Export adapter, sync, Buddy agent |
| **LarisActor** | **Supported** | Federation guide role (CG-002) |

## Project / Dialogue primitives

| UML type | Verdict | ChessGuide end-state fit |
|----------|---------|--------------------------|
| **Project** | **Partially Supported** | Maps to sovereign `chessguide` + learner journey; not named “Project” in doctrine |
| **DialogueThread** | **Partially Supported** | DOE dialogue, reflective explanation, Buddy coaching — required, not schema-defined in repo |
| **DialogueRecord** | **Partially Supported** | LOE-010 teaching, DOE-006 reflective explanation |

## Continuity record families

| UML type | Verdict | ChessGuide end-state fit |
|----------|---------|--------------------------|
| **ObservationRecord** | **Supported** | Completed game export; ChessObservation stream; **only type with runtime + schema in repo** |
| **ComparisonRecord** | **Partially Supported** | IM-1 measured vs perceived; engine vs chosen move (Wisdom refs) — required by CB-005, no UML instance in repo |
| **ClassificationRecord** | **Partially Supported** | Opening recognition, position_class anchors (AN-3) |
| **DiscoveryRecord** | **Partially Supported** | LOE-001 observation shift, LOE-002 pattern recognition |
| **SimulationRecord** | **Partially Supported** | LOE-005 simulation / variations |
| **LearningRecord** | **Partially Supported** | LOE family, integration events, LOE-010 — **central to mission; not in federation export** |
| **MeaningRecord** | **Partially Supported** | ExplanationArtifact, LOE-009, ChessReasoning |
| **ActionRecord** | **Partially Supported** | move.played, hints, training actions |
| **OutcomeRecord** | **Partially Supported** | Game result, SkillTransformation, LOE-011 — split across episodic outcome vs steward claim |

### UML validation summary

| Overall | Assessment |
|---------|------------|
| **Observation layer** | **Supported** for chess reality capture and federation game_import |
| **Learning / meaning layer** | **Partially Supported** — doctrine-heavy, export-excluded |
| **Dialogue / coaching layer** | **Partially Supported** — required by product vision, weakly typed in candidate model mapping |
| **Stewardship / validation layer** | **Partially Supported** — C4/LOE-011 may need explicit OutcomeRecord + actor-role semantics |

**No UML type is wholly **Unsupported**** for ChessGuide end-state — several are **Partially Supported** with sovereignty and stewardship nuances.

---

# Part XI — Gap Analysis

**Only section using runtime/code.** Doctrine-defined end-state minus current repository.

## End-State Vision − Current Repository = Remaining Work

| Domain requirement (end-state) | Current repository fact | Remaining work (descriptive) |
|--------------------------------|-------------------------|------------------------------|
| Full LearningTrace (Actor→Event) | `Game` + `GameHistory` legacy lines only | Trace hierarchy, LOE/DOE events |
| LOE-001–011 observability | CG-FLL-1E catalog; zero LOE in `src/` | Learning event capture |
| Stewardship C0–C4, LOE-011 | Governance only | Steward workflow artifacts |
| CB-006 user modes | Not in `config.ts` | Mode tagging per episode |
| IM-1 measured/perceived | Engine CP session-only (`helper.ts`) | Persisted measured lane |
| ExplanationArtifact P1/P2 | LEF/CFA governance | Structured explanation storage |
| ChessAnchor / ChessReasoning | CB-005 fields | Anchor and reasoning objects |
| Buddy longitudinal coaching | CB-004 governance | Pedagogical dialogue records |
| CFA interpretive tiers | CFA-v1.0 docs | Steward-facing assessment layer (non-runtime) |
| Federation T3 export | **Implemented** (`export_v1.py`, tests) | **Aligned** for game_import slice |
| Opening knowledge | `openingdata.ts` embedded | Already present (corpus) |
| Physical chess / AMR | CB-007 governance | Not in repo |
| Creator OAT/CTP/CTV runtime | CG-DEP-001 critical dependency | External federation substrate |
| PHP sync backend | `server.ts` client only; `api.php` not in repo | External deployment artifact |

**Quantitative observability note (LEF-2C):** Runtime witnesses ~episode grain + export; Integration and Transformation Claim tiers **lack runtime witnesses**.

---

# Part XII — Verdict

## Domain Review Verdict

**ChessGuide’s authoritative end-state is a sovereign longitudinal skill-development domain** centered on **LearningTrace custody, integration through continuity, and steward-validated transformation** — with chess episodes as bounded evidence substrate.

The domain is **coherently defined in doctrine** (CG-000–002, CB-000A/002/005, CG-FLL-*, CFA-v1.0). It is **not** reducible to game analysis or federation export alone.

## UML Compatibility Verdict

**Partially Compatible**

The emerging Canonical Continuity UML Domain Model **can represent** ChessGuide’s end-state for:

- actors (Human, Machine, Laris, Service),
- observations (ObservationRecord / game reality),
- and several record families **in principle**.

**Partial support** dominates for:

- learning integration records,
- meaning/explanation records,
- dialogue/coaching continuity,
- steward-attested outcomes,
- and sovereignty boundary (learning retained vs exported slice).

**No mandatory UML revision is identified by this review** — **gap candidates** are noted for model refinement elsewhere.

## Top UML Gap Candidates

| Rank | Gap candidate | Why |
|------|---------------|-----|
| 1 | **Steward-attested OutcomeRecord semantics** | Transformation claims are not self-serve LOE-011 |
| 2 | **LearningRecord sovereignty vs ObservationRecord export** | Learning excluded from federation boundary by design |
| 3 | **Pedagogical ServiceActor / Buddy dialogue** | Product mentor distinct from engine MachineActor |
| 4 | **IM-1 ComparisonRecord lane discipline** | Measured/perceived must not conflate |
| 5 | **Episode/Anchor continuity beyond game_import** | Longitudinal path exceeds single-game continuity_id |

## Top Domain Requirements (end-state)

| Rank | Requirement |
|------|-------------|
| 1 | **LearningTrace** with Actor→Session→Episode→Event + stewardship lifecycle |
| 2 | **Integration observability** (LOE/DOE) distinguishing activity from learning |
| 3 | **Stewardship gate** for transformation claims (C0–C4, replay, LOE-011) |
| 4 | **Continuity semantics** — integration through continuity over N episodes |
| 5 | **Sovereign/federation boundary** — full learning retained; game_import export only |
| 6 | **Mode-conditioned capture** (CB-006) for Capability Conditions |
| 7 | **IM-1 measured/perceived discipline** per episode |
| 8 | **ExplanationArtifact** lineage (P1 episodic, P2 attested) |

## Recommended Next Action

**Accept this document as the ChessGuide v1.0 end-state domain requirements baseline** for subsequent UML alignment reviews — without modifying UML or implementation in this step.

If a follow-on review is commissioned, scope it as **UML gap resolution for Partially Supported record families** (LearningRecord, MeaningRecord, steward OutcomeRecord) using this baseline — still doctrine-first.

---

## Deliverable Status

```text
Accepted Domain Review Candidate
```

---

## Related Documents

| Document | Path |
|----------|------|
| CG-000 | `docs/governance/chessguide/CG-000-chessguide-identity.md` |
| CG-001 | `docs/governance/chessguide/CG-001-product-vision.md` |
| CG-002 | `docs/governance/chessguide/CG-002-federation-relationship.md` |
| CG-FLL-001/002/003/1E | `docs/governance/chessguide/CG-FLL-*.md` |
| CB-000A, CB-002, CB-005 | `docs/governance/chessbuddy/` |
| CFA v1.0 | `docs/governance/federation/CFA-v1.0.md` |
| FEDERATION.md | `FEDERATION.md` |
| LEF-2C (observability gap) | `docs/governance/federation/studies/LEF-2C-runtime-observability-study.md` |
