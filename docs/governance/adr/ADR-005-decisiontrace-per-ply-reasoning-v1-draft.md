# ADR-005 — DecisionTrace / Per-Ply Reasoning v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-005 |
| **Title** | DecisionTrace / Per-Ply Reasoning v1 |
| **Version** | 0.1 |
| **Status** | Draft |
| **Date** | 2026-06-06 |
| **Scope** | Governance / semantic model only — DecisionTrace and per-ply reasoning under learner custody |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CG-FLL-1E](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [CB-004](../chessbuddy/CB-004-buddy-persona-and-product-principles.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft** — governance-only Architecture Decision Record defining **DecisionTrace** and **per-ply reasoning** as learner-custody evidence context for a single move decision.

This ADR is **governance only**. Draft acceptance does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- JSON Schema
- SQL
- localStorage
- APIs
- UI
- Storage implementation
- Implementation files

---

## Context

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks **Episode** as the sovereign learner-custody boundary. **LearningTrace** is evidence + custody, not learning. **DecisionTrace per ply** was explicitly deferred from ADR-001 as an LLD design target.

[ADR-002](ADR-002-sovereign-reference-model-v1.md) (Accepted) separates domain corpus, learner custody, and derived pedagogical views. **Corpus Reference** and `corpus_ref` are semantic pointers — not learner evidence by themselves. Buddy may compute derived pedagogical views but must not persist sovereign learner aggregates.

[ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md) (Accepted) defines **LOE** and **DOE** as unified **Evidence Records**. Evidence Records may reference `episode_id`, `event_id`, `anchor_id`, `corpus_ref`, and ordered `evidence_refs[]`. LOE/DOE support integration assessment but **do not prove integration**. **LOE-009** (Explanation — learner articulates *why*) is a primary catalogue mapping for reasoning evidence (CG-FLL-1E).

[ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md) (Accepted) defines **Claim** as a governed **hypothesis / påstand** evaluated against evidence lineage — not evidence itself. Formal claims require stewardship. Buddy may say “evidence suggests…” before stewardship but may not issue C4 or LOE-011 by default.

**Doctrine context:**

- **Learning** = integration achieved (CG-FLL-002). **Activity is not learning.**
- **Per-ply reasoning** appears in LLD as `DecisionTrace` aggregate (ChessGuide-LLD-v1.0 Part VI) — **design target**, not runtime doctrine until ADR adoption.
- **LOE-009** = learner articulates *why* at Understanding stage (CG-FLL-1E) — often post-move or review-mediated, not identical to pre-move decision context.
- **Buddy** = domain mentor (CB-004 PP-7: reference over decree); engine input is reference, not sovereign truth.
- **CFA** separates evidence capture from Integration and Transformation Claims (CFA v1.0).
- **Federation** exports terminal completed-game `ObservationRecord` only — move stream without reasoning metadata (FEDERATION.md).

**Runtime gap (LEF-2C):** No DecisionTrace types, no per-ply reasoning capture, no `decision_trace_id` refs in `src/`.

### Problem statement

> How may ChessGuide represent a learner’s **reasoning context around a single move** as traceable learner-custody evidence — distinct from the move itself, LOE/DOE records, and claims — **without** conflating reasoning with learning, mastery, engine truth, or federation export?

---

## Decision

ChessGuide adopts **DecisionTrace / Per-Ply Reasoning v1** as the governance semantic model for learner-custody reasoning attached to a specific move/ply within an Episode.

### D1 — DecisionTrace definition

**DecisionTrace** is a learner-custody trace of the **reasoning context** around a **single move decision** within an Episode.

It records:

- Why a move was considered or chosen
- What alternatives were considered
- What uncertainty existed
- What tactical/strategic frame guided the decision

**DecisionTrace is:**

- Evidence-producing **context** under Actor / LearningTrace custody
- Attachable to a specific ply via `episode_id` + move/ply anchors
- A valid **reference target** for LOE/DOE Evidence Records (D7)

**DecisionTrace is not:**

- **Learning** or integration achieved (CG-FLL-002)
- A **Claim** or stewardship verdict (ADR-004)
- **Engine judgment** or CP/eval as sovereign truth (CB-000 PI-5; CB-004 PP-7)
- **Mastery**, skill vector, or learner state
- **Federation export** (D9)

**Per-ply reasoning** is the bounded reasoning attached to one ply or move decision. It may be captured before the move, during review, or after the game — but **`timing_source` must be explicit** (D3). Post-hoc reconstruction must not be treated as equivalent to pre-move reasoning unless explicitly marked and bounded.

### D2 — MoveRecord vs DecisionTrace vs EvidenceRecord vs Claim

| Object | Says | Role | Strength | ADR |
|--------|------|------|----------|-----|
| **MoveRecord** | **What move happened** | Game move: SAN/UCI, ply index, move number | Factual game event | ADR-001 Episode event stream |
| **DecisionTrace** | **What was considered and why** | Learner reasoning context around one ply | Evidence context — not claim | ADR-005 |
| **EvidenceRecord** | **What was observed or demonstrated** | LOE/DOE under custody; may cite DecisionTrace | Evidence — not integration proof | ADR-003 |
| **Claim** | **What may be true about integration/transformation** | Governed hypothesis / påstand vs evidence lineage | Stronger — requires stewardship | ADR-004 |
| **Stewardship Verdict** | **Whether a claim is accepted within scope** | C4 outcome on a claim-hypothesis | Governance verdict — not evidence edit | ADR-004 D6 |

**Rules:**

- MoveRecord alone does **not** imply reasoning captured.
- DecisionTrace alone does **not** imply learning, integration, or transformation.
- EvidenceRecord citing DecisionTrace still does **not** prove integration without stewardship (ADR-003 D7; ADR-004).
- Claim citing EvidenceRecords that cite DecisionTraces still requires C0–C4 and `evidence_refs[]` lineage (ADR-004).

### D3 — Timing / source classification

Every DecisionTrace **must** classify **`timing_source`**:

| Value | Meaning | Evidential note |
|-------|---------|-----------------|
| **`pre_move`** | Reasoning captured before committing the move | Strongest for decision-process evidence |
| **`in_game`** | Reasoning captured during live play (not strictly pre-commit) | Strong; timing must be explicit |
| **`post_move`** | Reflection immediately after the move is played | Valid; not equivalent to pre-move unless marked |
| **`post_game_review`** | Reasoning during structured post-game review | Valid; review-mediated |
| **`reconstructed`** | Reconstructed from replay, notes, or memory later | Allowed; **`limitations` required** |
| **`buddy_prompted`** | Elicited by Buddy question/prompt | Must distinguish **learner statement** from **Buddy prompt** (`buddy_prompt_ref`) |
| **`imported`** | Brought in from external source | Provenance required; **`limitations` likely required** |

**Rules:**

- **`pre_move`** and **`in_game`** traces have **stronger evidential value** for decision-process claims than reconstructed traces.
- **`reconstructed`** traces are allowed but **must carry populated `limitations`** explaining reconstruction gap.
- **`buddy_prompted`** traces **must** record the prompt separately from learner response — Buddy text is not learner reasoning.
- **Engine-derived statements** must use **`engine_ref`** and **`source_actor`** separation — engine output must **not** masquerade as learner reasoning (CB-004 PP-7).
- Post-hoc **`reconstructed`** or **`post_game_review`** traces must **not** be treated as **`pre_move`** without explicit reclassification and audit note.

### D4 — Governance-level DecisionTrace fields

Semantic fields only — **not JSON Schema**, not wire format.

| Field | Purpose |
|-------|---------|
| `decision_trace_id` | Stable identifier under Actor custody |
| `episode_id` | **Required** — sovereign Episode boundary (ADR-001) |
| `actor_id` | Learner under custody |
| `ply_index` or `move_index` | Ply/move position in Episode |
| `side_to_move` | Color / side for the decision |
| `move_ref` / `chosen_move` | The move the trace is about (may differ from eventual MoveRecord if illegal attempt logged) |
| `position_anchor` or `position_ref` | FEN, anchor_id, or position class reference |
| `timing_source` | D3 classification — **required** |
| `candidate_moves[]` | Moves considered |
| `selected_candidate` | Move chosen from candidate set |
| `rejected_candidates[]` | Alternatives not chosen |
| `rationale_statement` | Bounded learner/steward narrative of why |
| `decision_frame[]` | Tactical/strategic/plan labels (qualitative — e.g. development, tactic, prophylaxis) |
| `expected_outcome` | What the learner expected to happen (qualitative) |
| `uncertainty` | Qualitative uncertainty note — **not a numeric score** |
| `assumptions` | Explicit assumptions the learner held |
| `observed_after_move` | What was noticed after the move (if captured) |
| `reflection` | Post-decision reflection text (may overlap post_move timing) |
| `limitations` | Reconstruction gaps, prompt-led answers, single-episode caveats |
| `created_at` / `recorded_at` | Temporal ordering |
| `source_actor` | `learner` \| `steward` \| `tool-assisted` \| `import` |
| `buddy_prompt_ref` | Reference to Buddy prompt when `timing_source = buddy_prompted` |
| `engine_ref` | Engine profile / eval snapshot reference when engine input is cited — **explicitly separated** from learner reasoning |
| `corpus_ref` (optional) | Semantic reference to opening/pattern/position class (ADR-002) — not evidence custody |
| `event_id` / `anchor_id` (optional) | Link to Episode event or ChessAnchor (ADR-001 AN-1–4) |

**Minimum required (governance):**

- `decision_trace_id`, `episode_id`, `actor_id`
- `ply_index` or `move_index` + `chosen_move` or `move_ref`
- `timing_source`
- At least one of: `rationale_statement`, `candidate_moves[]`, `decision_frame[]`, `reflection`

When grounding to position is incomplete, **`limitations` is required** (aligned with ADR-003 D4 spirit).

### D5 — Candidate moves and alternatives

DecisionTrace **should** support a bounded option space:

| Element | Rule |
|---------|------|
| **`candidate_moves[]`** | Moves the learner considered — may include SAN/UCI or move refs |
| **`selected_candidate`** | The move chosen from the candidate set |
| **`rejected_candidates[]`** | Alternatives not chosen |
| **Rejection reason** | Per rejected candidate: brief qualitative reason (not engine CP alone) |
| **`uncertainty`** | Qualitative note — **not** a confidence score or Elo delta |
| **`decision_frame[]`** | Tactical, strategic, plan, or pattern frame — qualitative labels |

**Rules:**

- Candidate set may be **partial** — learner may not recall all options; **`limitations` required** when incomplete.
- **Engine-suggested candidates** must be marked via `engine_ref` / candidate source note — not presented as recalled human options without disclosure.
- **Illegal move attempts** may be logged in candidate/rejected set with reason — factual, not shaming (CB-004).
- Empty candidate set with only `rationale_statement` is **valid** but **weak** — LOE/DOE citing such a trace should note limitation.
- DecisionTrace does **not** require engine evaluation to be valid.

### D6 — Reasoning phase separation

DecisionTrace content **must** be interpretable by phase:

| Phase | Typical `timing_source` | Content focus |
|-------|----------------------|---------------|
| **Pre-move reasoning** | `pre_move`, `in_game` | Candidates, plan, expected outcome, assumptions before commit |
| **Post-move reflection** | `post_move`, `in_game` | `observed_after_move`, surprise, immediate correction notes |
| **Post-game reconstruction** | `post_game_review`, `reconstructed` | Full rationale rebuilt from replay; **`limitations` required** |

**Rules:**

- A single DecisionTrace record may span phases only if **`timing_source`** reflects the **primary capture moment** and other phases are labeled in `reflection` / `observed_after_move` with explicit timing notes.
- **Pre-move** and **post-game reconstructed** reasoning must **not** be merged silently — prefer separate traces or explicit `limitations`.
- **LOE-009** (Explanation) Evidence Records often align with **post-move** or **review** timing — still valid evidence, different evidential weight than `pre_move` (LEF-0D P1).
- Buddy post-game prompts (“What were you thinking on move 12?”) produce **`buddy_prompted`** + **`post_game_review`** traces — not **`pre_move`**.

### D7 — LOE/DOE reference linkage

DecisionTrace is a **reference target** for Evidence Records — not a replacement for them.

| Link direction | Rule |
|----------------|------|
| **EvidenceRecord → DecisionTrace** | Evidence Record **may** include `decision_trace_id` (governance extension to ADR-003 reference targets) alongside `event_id`, `anchor_id`, `corpus_ref` |
| **DecisionTrace → EvidenceRecord** | DecisionTrace **must not** embed LOE/DOE payload as sovereign substitute — cite via separate Evidence Record IDs if needed |
| **Catalogue mapping** | **LOE-009** (Explanation), **DOE-006** (Reflective Explanation), and related Understanding-stage types commonly cite DecisionTrace |
| **Lineage** | Evidence Records citing DecisionTrace still participate in ordered **`evidence_refs[]`** for claim lineage (ADR-004) |
| **Claims** | DecisionTrace **never** becomes a Claim directly — Claims evaluate hypothesis against Evidence Record lineage |

**Rules:**

- One DecisionTrace may be cited by **multiple** Evidence Records (e.g. LOE-009 + DOE-006) — each record retains its own identity.
- Citing DecisionTrace in an Evidence Record does **not** auto-approve integration — stewardship still required for formal claims.
- **`decision_trace_id` on Evidence Record** is optional grounding — not a replacement for `episode_id`.

### D8 — Buddy boundary

#### Buddy may

- Ask reasoning questions before or after a move (CB-004 PP-3, PP-4)
- Record **`buddy_prompted`** DecisionTrace with **`buddy_prompt_ref`** separating prompt from learner answer
- Reference engine lines as **reference** with `engine_ref` — framed as reference, not decree (PP-7)
- Suggest candidate moves for **consideration** without selecting for the learner in live friendly mode (CB-004 teaching prohibitions)
- Surface derived pedagogical views over DecisionTrace history as **non-authoritative** read models (ADR-002)

#### Buddy must not

- Impersonate learner reasoning — Buddy inference is not `source_actor: learner`
- Issue C4 verdict or LOE-011 (ADR-004 D8)
- Say integration/transformation/mastery achieved from DecisionTrace alone
- Persist sovereign learner aggregates (Learning Frontier, learner state) from DecisionTrace synthesis (ADR-002 D3–D4)
- Export DecisionTrace or reasoning metadata to federation (D9)
- Treat engine CP as learner `rationale_statement` without `engine_ref` separation

Buddy remains **domain mentor**, not steward of record by default (ADR-004 D8).

### D9 — Federation boundary

Must **not** cross federation export (reaffirm ADR-001, ADR-002, ADR-003, ADR-004, FEDERATION.md):

- DecisionTrace records and `decision_trace_id`
- Per-ply reasoning text, candidate sets, rationale, reflection
- `buddy_prompt_ref`, `engine_ref`, `corpus_ref` on DecisionTrace
- Uncertainty, assumptions, decision_frame metadata
- Links from Evidence Records to DecisionTrace (`decision_trace_id`)
- Any reasoning-derived learner state or Learning Frontier projection

**Exported only:** terminal completed-game **ObservationRecord** slice — move stream and terminal result without reasoning metadata.

ADR-005 **does not modify** `export_v1` or federation fixtures.

### D10 — Anti-patterns

Explicitly forbidden:

| Anti-pattern | Rationale |
|--------------|-----------|
| DecisionTrace as proof of learning | Activity/reasoning ≠ learning (CG-FLL-001 I-3; CG-FLL-002) |
| DecisionTrace as Claim | Claim requires stewardship on hypothesis vs lineage (ADR-004) |
| Engine eval as `rationale_statement` without `engine_ref` | CB-004 PP-7; CB-000 PI-5 |
| Numeric confidence / Elo as DecisionTrace truth | ADR-003 D5; CB-002 R-2 |
| Reconstructed reasoning labeled `pre_move` | D3 timing integrity |
| Buddy prompt text stored as learner `rationale_statement` | D3 buddy_prompted rules |
| DecisionTrace without `episode_id` | ADR-001 custody |
| Federation export of reasoning metadata | FEDERATION.md |
| DecisionTrace persisting Learning Frontier | ADR-002 D4 derived view only |
| Single DecisionTrace as sole claim lineage | ADR-004 D4 — claims need evidence lineage, not isolated context |
| LARIS activation for reasoning attestation | CG-002; FDP-002 |

### D11 — Relationship to claims and stewardship

| Principle | Rule |
|-----------|------|
| **Evidence, not claim** | DecisionTrace is evidence context — not a governed påstand |
| **Lineage input** | LOE/DOE citing DecisionTrace may enter **`evidence_refs[]`** for Integration or Transformation Claims |
| **No shortcut** | Rich DecisionTrace does **not** bypass C0–C4 or C4 **`accepted`** for formal claims |
| **Weight by timing** | Stewardship may weigh `pre_move` traces higher than `reconstructed` — via `limitations`, not scores |
| **LOE-009 path** | Explanation evidence (LOE-009) grounded on DecisionTrace supports integration **assessment** — not integration proof |
| **Contradiction** | Later DecisionTrace or Evidence Record may contradict earlier reasoning — triggers re-review (ADR-004 D11 spirit) |

DecisionTrace **supports** ADR-004 evidence lineage **without becoming** a Claim.

### D12 — Storage and downstream ADRs

ADR-005 defines **governance semantic model only**.

**Explicitly out of this ADR:**

- JSON Schema, SQL, localStorage keys
- Runtime changes (`src/`)
- Tests, APIs, UI
- Seal/freeze lifecycle mechanics (LLD `candidates_frozen → chosen_sealed` — implementation deferred)
- Inline vs sidecar storage relative to Episode (deferred — aligned with ADR-003 OQ-003-7)

| ADR / future | Scope |
|--------------|-------|
| **ADR-006** | Buddy Pedagogical Use of Reference Model — surfacing DecisionTrace in product copy |
| **Future** | DecisionTrace wire schema / migration — after ADR-005–006 acceptance and explicit implementation phase |
| **Future** | `IDecisionTraceBuilder` / DecisionService (LLD Part VIII) — runtime, not doctrine |

**Sequencing:** ADR-004 Accepted → ADR-005 / ADR-006 (may parallel) → implementation phase ADR.

### Semantic placement

```text
Episode (MoveRecord events) — ADR-001
        │
        ▼ per ply
DecisionTrace (reasoning context) — ADR-005
        │
        ▼ cited by
EvidenceRecord (LOE | DOE) — ADR-003
        │  e.g. LOE-009 Explanation
        ▼ ordered evidence_refs[]
Claim (integration | transformation hypothesis) — ADR-004
        │
        ▼ C0–C4 stewardship
C4 verdict (accepted | rejected | deferred | revoked)

Buddy: may prompt/record DecisionTrace — not steward by default
Federation: MoveRecord slice only — no DecisionTrace
```

---

## In scope

1. DecisionTrace definition and per-ply reasoning (D1).
2. MoveRecord / DecisionTrace / EvidenceRecord / Claim distinction (D2).
3. Timing/source classification (D3).
4. Governance-level field model (D4).
5. Candidate moves and alternatives (D5).
6. Pre-move / post-move / post-game separation (D6).
7. LOE/DOE reference linkage (D7).
8. Buddy boundaries (D8).
9. Federation withholding (D9).
10. Anti-patterns (D10).
11. Claims and stewardship relationship (D11).
12. Downstream ADR sequencing (D12).

---

## Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Runtime / `src/`** | Governance only |
| **Tests, APIs, UI** | Not in scope |
| **Federation export changes** | D9 |
| **JSON Schema, SQL, localStorage** | D12 |
| **Stewardship C0–C4 mechanics** | ADR-004 |
| **Claim record shape** | ADR-004 |
| **LOE-011 / Transformation Claim workflow** | ADR-004 |
| **Buddy orchestration detail** | ADR-006 |
| **Mastery Claim** | Future ADR |
| **Learning Frontier / learner state persistence** | ADR-002 derived views |
| **Graph DB / traversal API** | ADR-002 |
| **LARIS activation** | FDP-002 |
| **ExplanationArtifact record shape** | LEF-0C/0D — orthogonal |
| **SimulationContext / what-if branches** | LLD — non-canonical; future ADR if needed |
| **Engine service contracts** | LLD Part VIII — implementation |

---

## Alternatives considered

### Alt-1 — DecisionTrace inline only inside Episode blob

**Pros:** Simple per-episode bundle; matches legacy string mental model.  
**Cons:** Conflates move stream with reasoning; blocks independent LOE/DOE lineage (ADR-003).  
**Rejected** — separate governance object cited by Evidence Records (D7).

### Alt-2 — DecisionTrace as LOE-009 only (no separate type)

**Pros:** One catalogue entry covers explanation.  
**Cons:** LOE-009 is Evidence Record — conflates observation registration with full decision context (candidates, timing, engine separation).  
**Rejected** — DecisionTrace is context; LOE-009 is evidence observation that may cite it (D2, D7).

### Alt-3 — Export DecisionTrace summary to federation

**Pros:** Cross-domain reasoning visibility.  
**Cons:** Violates FEDERATION.md; ChessGuide retains learning and reasoning custody.  
**Rejected** (D9).

### Alt-4 — Engine eval embedded as primary rationale

**Pros:** Rich chess content automatically.  
**Cons:** Violates CB-004 PP-7 and ADR-003 anti-patterns; false precision.  
**Rejected** — `engine_ref` separated; learner `rationale_statement` distinct (D3, D4).

### Alt-5 — Numeric confidence on DecisionTrace

**Pros:** Machine comparison for stewardship.  
**Cons:** CEAR procedural strength; CB-002 Elo-only warning; ADR-003 D5 quality_flag guard.  
**Rejected** — qualitative `uncertainty` only (D4, D5).

### Alt-6 — Buddy-authored DecisionTrace as learner reasoning

**Pros:** Faster capture when learner is silent.  
**Cons:** Violates source boundary; Buddy is mentor not learner.  
**Rejected** — `source_actor` and `buddy_prompt_ref` required (D3, D8).

### Alt-7 — DecisionTrace directly triggers Integration Claim

**Pros:** Short path from “good explanation” to claim.  
**Cons:** Violates ADR-004 — claims are hypothesis vs evidence lineage with stewardship.  
**Rejected** (D11).

### Alt-8 — Collapse MoveRecord and DecisionTrace

**Pros:** One object per ply.  
**Cons:** Move stream is factual game history; reasoning is optional, timing-variable, and may be reconstructed.  
**Rejected** — D2 separation.

---

## Consequences

### Positive

- Completes governance chain for ply-level reasoning: Episode → DecisionTrace → LOE/DOE → Claim.
- Gives LOE-009 and DOE-006 a stable reference target without conflating explanation with decision context.
- Protects federation boundary while enabling rich learner-custody reasoning capture design.
- Clarifies Buddy prompt vs learner statement and engine vs learner separation.

### Negative / risks

- Timing/source taxonomy adds capture burden — intentional for evidential honesty.
- LLD DecisionTrace aggregate (seal lifecycle, Evaluation VO) may diverge until implementation ADR maps LLD → governance.
- Runtime gap persists (LEF-2C).
- Reconstructed reasoning may be over-weighted by users unless `limitations` enforced in product (ADR-006).

### Unlocked downstream

| Work | Depends on |
|------|------------|
| ADR-006 Buddy pedagogy | D8 boundaries; DecisionTrace surfacing |
| Evidence Record `decision_trace_id` field | D7 reference extension |
| Implementation schema ADR | ADR-005 Accepted |
| LOE-009 capture design | D3 timing + D7 linkage |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-005-1** | Add `decision_trace_id` to ADR-003 reference target table formally? | **Open** — proposed in ADR-005 D7; ADR-003 amendment or cross-ref TBD |
| **OQ-005-2** | One DecisionTrace per ply vs multiple traces per ply (phases)? | **Open** — D6 allows multiple; product convention TBD |
| **OQ-005-3** | Minimum candidate_moves[] count for “considered alternatives” evidence? | **Open** — zero allowed with limitations (D5) |
| **OQ-005-4** | Seal/freeze lifecycle (LLD `candidates_frozen → chosen_sealed`)? | **Deferred** — implementation ADR |
| **OQ-005-5** | Illegal move attempt as separate DecisionTrace or candidate entry? | **Open** — D5 permits candidate logging |
| **OQ-005-6** | Steward may author `source_actor: steward` paraphrase — same trace or separate LOE? | **Open** — CG-FLL-1E steward-recorded paraphrase |
| **OQ-005-7** | Link DecisionTrace to CB-005 `ChessReasoning` field group? | **Open** — semantic alignment; no schema in this ADR |
| **OQ-005-8** | Simulation / what-if branches reference DecisionTrace? | **Deferred** — LLD SimulationContext non-canonical |
| **OQ-005-9** | First implementation artifact after ADR-005/006? | **Deferred** |
| **OQ-005-10** | Map timing_source to CG-FLL-1E chain stages? | **Open** — LOE-009 at Understanding; pre-move may precede |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Episode custody | ADR-001 Accepted | ADR | [DOCTRINE] |
| Reference model / corpus_ref | ADR-002 Accepted | ADR | [DOCTRINE] |
| Evidence Records / LOE-009 | ADR-003 Accepted; CG-FLL-1E | ADR + Doctrine | [DOCTRINE] |
| Claim ≠ evidence | ADR-004 Accepted | ADR | [DOCTRINE] |
| DecisionTrace definition | ADR-005 D1 | ADR | [DRAFT] |
| Move vs reasoning separation | ADR-005 D2; ADR-001 events | ADR | [DRAFT] |
| LOE-009 Explanation | CG-FLL-1E LOE-009 row | Doctrine | [DOCTRINE] |
| Learning = integration | CG-FLL-002 | Doctrine | [DOCTRINE] |
| Activity is not learning | CG-FLL-001 I-3 | Doctrine | [DOCTRINE] |
| Buddy reference over decree | CB-004 PP-7 | Doctrine | [DOCTRINE] |
| LLD DecisionTrace aggregate | ChessGuide-LLD-v1.0 Part VI | LLD | [DESIGN TARGET] |
| Federation no reasoning export | FEDERATION.md | Doctrine | [DOCTRINE] |
| No DecisionTrace in runtime | LEF-2C | Study | [RUNTIME GAP] |
| Episodic explanation without artefact | LEF-0D P1 | Study | [DOCTRINE-aligned] |
| Integration theory | LEF-0E | Study | [DOCTRINE-aligned] |
| ADR-005 sequencing | ADR-004 D12; ADR-003 D11 | ADR | [INFERENCE] |

---

## Downstream ADRs

See **D12**. ADR-005 does not subsume ADR-006 Buddy pedagogy or implementation storage ADRs.

---

## Related documents

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [CB-004 — Buddy Persona & Product Principles](../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — First Domain Learning Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CFA v1.0](../federation/CFA-v1.0.md)
- [ChessGuide-LLD-v1.0](../../architecture/ChessGuide-LLD-v1.0.md)
- [LEF-0E — Integration Theory](../federation/studies/LEF-0E-integration-theory.md)
- [LEF-0D — Epistemic Placement of ExplanationArtifact](../federation/studies/LEF-0D-epistemic-placement-of-explanation-artifact.md)
- [LEF-2C — Runtime Observability Study](../federation/studies/LEF-2C-runtime-observability-study.md)
- [FEDERATION.md](../../FEDERATION.md)
- [ChessGuide Epistemic Architecture Review v1.0](../../reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md)
- [ChessGuide Learning Ontology Review v1.0](../../reviews/ChessGuide-Learning-Ontology-Review-v1.0.md)
- [ChessGuide Discovery Integration Assessment v1.0](../../reviews/ChessGuide-Discovery-Integration-Assessment-v1.0.md)
