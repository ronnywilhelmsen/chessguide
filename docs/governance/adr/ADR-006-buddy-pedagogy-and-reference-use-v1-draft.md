# ADR-006 — Buddy Pedagogy and Reference Use v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-006 |
| **Title** | Buddy Pedagogy and Reference Use v1 |
| **Version** | 0.1 |
| **Status** | Accepted |
| **Date** | 2026-06-17 |
| **Scope** | Governance / semantic model only — Buddy pedagogical use of corpus, DecisionTrace, evidence, and reference lanes |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [CB-004](../chessbuddy/CB-004-buddy-persona-and-product-principles.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CG-FLL-1E](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Accepted** — repository governance decision defining **Buddy Pedagogy and Reference Use v1**: how Buddy may use ChessGuide's reference model, `corpus_ref`, DecisionTrace, LOE/DOE evidence, Stockfish/engine reference, and pedagogical prompts.

This ADR is **governance only**. Acceptance does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- JSON Schema
- SQL
- localStorage
- APIs
- UI
- Storage implementation
- Prompt templates as product assets
- LLM orchestration
- Implementation files

This ADR does **not**:

- Mark Buddy as **steward of record**
- Activate **LARIS** (CG-002; FDP-002)

---

## Context

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks **Episode** as sovereign learner-custody boundary. **LearningTrace** is evidence + custody, not learning.

[ADR-002](ADR-002-sovereign-reference-model-v1.md) (Accepted) defines **`corpus_ref`** as a stable semantic pointer to **domain corpus** — not learner evidence, not learned state, not federation export. Buddy may compute **derived pedagogical views** but must not persist sovereign learner aggregates (Learning Frontier, learner state).

[ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md) (Accepted) defines **LOE/DOE Evidence Records**. Evidence supports integration assessment but **does not prove learning**. Activity is not learning (CG-FLL-001 I-3).

[ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md) (Accepted) defines **Claim** as governed **hypothesis / påstand** evaluated against evidence lineage. Formal claims require stewardship. Buddy may say “evidence suggests…” before stewardship but **may not issue C4 or LOE-011 by default** (ADR-004 D8).

[ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) (Accepted) defines **DecisionTrace** as learner-custody reasoning context per ply. Buddy-prompted traces require **`trace_source: buddy_prompted`** and **`buddy_prompt_ref`** separation from learner response (ADR-005 D8).

[CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md) proposes Chess Corpus taxonomy and **`corpus_ref`** candidates. **Stockfish / engine** is **reference / measurement lane** — not pedagogical authority by itself, not corpus truth, not learner evidence.

**Doctrine context:**

- **Buddy** = domain mentor (CB-004); **reference over decree** (PP-7).
- **Learning** = integration achieved (CG-FLL-002). **Activity is not learning.**
- **Runtime:** `helper.ts` parses engine CP; `CP.tsx` displays measured lane when enabled — reference only (CB-000 PI-5).
- **Opening tree** (`openings.ts`, `openingdata.ts`) is runtime corpus — Buddy may reference opening labels; governance `corpus_ref` wrapping is future registry work (CCCR).

**Runtime gap:** No Buddy-orchestrated DecisionTrace capture, no LOE/DOE persistence, no pedagogical mode machine in `src/`.

### Problem statement

> How may Buddy help a human learner understand chess, reflect on moves, use corpus references, and produce useful DecisionTrace / LOE / DOE evidence — **without** taking over reasoning, fabricating learner evidence, acting as steward, or turning engine output into pedagogical truth?

---

## Decision

ChessGuide adopts **Buddy Pedagogy and Reference Use v1** as the governance semantic model for Buddy’s pedagogical role.

### D1 — Buddy role definition

**Buddy** is a **pedagogical domain mentor** for chess under learner custody.

**Buddy may:**

- Guide attention
- Ask questions
- Surface `corpus_ref` references
- Explain chess concepts at learner level
- Invite reflection
- Help capture **DecisionTrace** (ADR-005)
- Help prepare **LOE/DOE evidence candidates** (ADR-003)
- Reference Stockfish/engine output as **measurement lane**
- Adapt explanation to learner level (CB-004 proportionality)

**Buddy is not:**

- The **learner**
- **Steward of record** by default (ADR-004 D8)
- A **claim adjudicator**
- A **mastery certifier**
- An **engine oracle**
- A **federation exporter**
- A replacement for **learner reasoning**
- A replacement for **corpus governance**
- **LARIS** (CG-002)

### D2 — Pedagogical autonomy principle

**Central principle:** Buddy should **increase learner autonomy**, not dependency.

| Rule | Application |
|------|-------------|
| Questions before answers | When pedagogically appropriate (CB-004 PP-3, PP-4) |
| Learner states reasoning first | Before revealing engine or best move when possible |
| Progressive hints | Reveal stronger help gradually — not flood (CB-004 teaching prohibitions) |
| Not always best move first | Preserve move choice agency |
| Distinguish intervention types | hint \| explanation \| reference \| correction \| engine measurement \| claim/stewardship |
| Preserve move choice | Buddy does not play for human in live friendly mode (CB-004) |
| No shame framing | CB-004 PP-5, privacy |
| Encourage self-explanation | LOE-009 path; DecisionTrace capture |

### D3 — Buddy intervention levels

Governance ladder for Buddy interventions — **semantic levels**, not UI implementation.

| Level | Name | Example | Typical mode |
|-------|------|---------|--------------|
| **L0** | Silent observation | Record game state only; no intervention | Observation |
| **L1** | Attention prompt | “What is your opponent threatening?” — no answer | Live play |
| **L2** | Frame prompt | “Check tactics before committing.” — `decision_frame:tactic` | Live play |
| **L3** | Corpus hint | “Look for fork patterns.” — `pattern:tactic:fork` without solution | Live / training |
| **L4** | Candidate support | “What moves did you consider?” — `candidate_moves[]` | Live / training |
| **L5** | Explanation support | Help articulate `rationale_statement` — learner words preserved | Review |
| **L6** | Reference comparison | Compare learner move to engine or principle — `engine_ref` separated | Review / engine mode |
| **L7** | Post-game synthesis | Summarize patterns across traces — **non-authoritative** derived view | Review |

**Rules:**

- **Live friendly play** should prefer **L1–L4**.
- **Post-game review** may use **L5–L7**.
- Higher levels require clearer **`trace_source`** / provenance (ADR-005 D3–D4).
- Buddy must **never** convert intervention level into **mastery claim** or C4 verdict.

### D4 — Buddy use of DecisionTrace

Buddy may help create **DecisionTrace** per [ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) (Accepted).

| Situation | Required governance |
|-----------|---------------------|
| Buddy prompts reasoning | `trace_source: buddy_prompted`; **`buddy_prompt_ref`** required or strongly expected |
| Learner directly states reasoning | `trace_source: learner_direct` |
| Buddy summarizes learner statement | `trace_source: buddy_prompted`, `steward_recorded`, or `tool_assisted` unless learner **verifies** summary |
| Stockfish/engine influenced reasoning | `trace_source: engine_assisted`; **`engine_ref`** required or strongly expected |
| Reconstructed trace | `capture_timing: reconstructed`; **`limitations`** required |

**Buddy must not:**

- Store Buddy prompt text as learner **`rationale_statement`**
- Mark Buddy-authored inference as **`trace_source: learner_direct`**
- Hide engine influence
- Merge **`capture_timing: pre_move`** and **`post_game_review`** reasoning silently
- Treat DecisionTrace as evidence **by itself** (Evidence Record still required)
- Treat DecisionTrace as **Claim**
- **Export** DecisionTrace (D11)

### D5 — Buddy use of corpus_ref

Buddy may surface **`corpus_ref`** as **domain reference** (ADR-002 D5; CCCR).

| Allowed | Forbidden |
|---------|-----------|
| “This position may involve `pattern:tactic:pin`.” | “You have mastered pins.” |
| “Your explanation refers to `principle:king_safety`.” | “You learned king safety.” |
| Use in hints, explanations, `decision_frame[]`, Evidence Record refs | “This `corpus_ref` proves integration.” |
| Scope claim **through evidence lineage** only (ADR-004) | `corpus_ref` as mastery proof |

**Rules:**

- `corpus_ref` points to **domain corpus**, not learner state.
- Buddy citation of `corpus_ref` is **pedagogical reference** — not evidence of learner integration.

### D6 — Buddy use of Stockfish / engine reference

**Stockfish / engine lane** = **reference and measurement**, not pedagogical authority by itself (CCCR; CB-004 PP-7).

| Distinction | Meaning |
|-------------|---------|
| **Engine-best move** | Measured optimum from engine profile |
| **Human-understandable move** | Legible alternative at learner level |
| **Learning-best move** | Move serving integration under conditions — steward/Buddy judgment, not CP alone |
| **Pedagogically best explanation** | Bounded explanation — not PV dump |
| **Claim-relevant evidence** | LOE/DOE + lineage + stewardship — not engine agreement alone |

**Rules:**

- Engine output may **assist** evaluation and explanation.
- Engine output does **not** become: learner evidence alone, corpus truth, claim, mastery, federation export, or Buddy authority.
- Buddy must explain engine results at **learner level**.
- Buddy must separate: **`engine_ref`**, learner **`rationale_statement`**, **`corpus_ref`**, Buddy explanation.
- Avoid PV dumps unless learner requests advanced analysis.
- In **learning mode**, engine reference should often come **after** learner self-explanation.

**Runtime note:** Current `helper.ts` / `CP.tsx` CP display is **measured lane** — governance applies when Buddy cites or explains engine output.

### D7 — Buddy use of LOE/DOE

Buddy may **support evidence capture** but must **not fabricate evidence**.

**Buddy may:**

- Ask explanations that may support **LOE-009**
- Ask reflective questions that may support **DOE-006**
- Identify candidate **EvidenceRecord** opportunities
- Suggest evidence may be worth **steward review**

**Buddy must not:**

- Create LOE/DOE without actual observation/demonstration
- Convert a **hint** into learner evidence
- Treat “learner clicked hint” as learning (CG-FLL-001 I-3)
- Treat **engine agreement** as DOE
- Treat **one explanation** as integration proof
- Issue **LOE-011**
- Issue **C4 verdict**

### D8 — Buddy and claims / stewardship

Buddy is **not steward of record** by default (ADR-004 D8).

**Buddy may say:**

- “Evidence may suggest…”
- “This could support a future claim if repeated.”
- “This is a candidate evidence item.”
- “A steward would need to evaluate this.”

**Buddy must not say by default:**

- “Integration achieved.” / “Transformation achieved.”
- “Claim accepted.” / “C4 accepted.” / “LOE-011 granted.”
- “You have mastered this.”
- “Your learner state is now X.”

Formal **Claims** remain governed hypotheses evaluated by **stewardship** under ADR-004.

### D9 — Buddy explanation grammar

**Approved / preferred patterns:**

- “Let’s look for candidate moves.”
- “What was your plan here?”
- “This resembles `pattern:tactic:fork`.”
- “Stockfish prefers X, but let’s understand why.”
- “Your explanation may support LOE-009 if recorded.”
- “This is a post-game reconstruction, so limitations should be noted.”
- “This could be evidence, not proof.”

**Avoid / forbidden:**

- “You learned this.” / “You mastered this.”
- “The engine says this, therefore it is the correct lesson.”
- “Buddy confirms integration.”
- “This move proves understanding.”
- “I know what you were thinking.”
- “This will be exported to federation.”
- “Your learner graph says…”

### D10 — Mode boundaries

Pedagogical **modes** as governance concepts — aligned with CB-006 spirit, **not UI implementation**.

| Mode | Buddy posture |
|------|---------------|
| **Observation** | L0 — minimal intervention |
| **Friendly game** | L1–L4; avoid over-directing |
| **Training** | Structured prompts and hints allowed |
| **Review** | Reconstruction with `limitations`; L5–L7 |
| **Steward review preparation** | Organize evidence packets; **no verdict** |
| **Engine comparison** | Explicit `engine_ref` / measured lane |

**Rules:**

- Mode constrains **intervention level** and **trace_source** expectations.
- No mode permits C4 verdict or LOE-011 by Buddy default.

### D11 — Federation boundary

Buddy-related content must **not** cross federation export (reaffirm ADR-001–005, FEDERATION.md):

- Buddy prompts and Buddy explanations
- DecisionTrace, `rationale_statement`, `candidate_moves[]`, `rejected_candidates[]`, `decision_frame[]`
- `capture_timing`, `trace_source`, `buddy_prompt_ref`, `engine_ref`
- `corpus_ref` from learner reasoning context
- LOE/DOE Evidence Records, `evidence_refs[]`
- Claims, stewardship verdicts, LOE-011
- Learner state, Learning Frontier, mastery labels
- Buddy-derived summaries

**Exported only:** terminal completed-game **ObservationRecord** slice.

ADR-006 **does not modify** `export_v1` or federation fixtures.

### D12 — Anti-patterns

| Anti-pattern | Rationale |
|--------------|-----------|
| Buddy as steward | ADR-004 D8; not steward of record by default |
| Buddy as engine oracle | CB-004 PP-7; CCCR Stockfish boundary |
| Buddy as learner voice | ADR-005 `trace_source` boundary |
| Buddy prompt stored as learner rationale | ADR-005 D8, D10 |
| Engine PV/CP as learner `rationale_statement` | ADR-005 D6; D10 |
| `corpus_ref` as mastery proof | ADR-002; ADR-004 |
| Hint-click as learning | CG-FLL-001 I-3; activity ≠ learning |
| Single DecisionTrace as claim | ADR-004; ADR-005 D11 |
| Auto-claim generation from Buddy dialogue | ADR-004 stewardship required |
| Federation export of Buddy content | D11; FEDERATION.md |
| Persisted learner state from Buddy synthesis | ADR-002 D3–D4 |
| LARIS activation through Buddy | CG-002; FDP-002 |
| Numeric skill score from Buddy interactions | ADR-003 D5; CB-002 R-2 |

### D13 — Relationship to system chess competence

Buddy requires a **system chess competence lane** to teach chess well. **This ADR does not define that lane fully.**

| Topic | Disposition |
|-------|-------------|
| CCCR Stockfish boundary | [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md) — reference/measurement lane |
| Current runtime | `helper.ts` CP parsing; `CP.tsx` display — measured reference only |
| **Future ADR-007** (or review) | Stockfish Reference / System Chess Competence Boundary |
| Future topics | Engine profiles, level-adjusted explanation, engine-best vs learning-best, system competence model |

### D14 — Downstream work

| Work | Scope |
|------|-------|
| **ADR-007** (or review) | Stockfish Reference / System Chess Competence Boundary |
| **Future ADR** | Corpus Reference Registry v1 (CCCR MVP) |
| **Future ADR** | DecisionTrace wire schema / storage (ADR-005) |
| **Future product ADR/design** | Buddy modes, copy, UI |
| **Future implementation** | LOE/DOE capture using DecisionTrace |

**Sequencing:** ADR-005 (Accepted) → ADR-006 (Accepted) → ADR-007 / Corpus Registry → implementation phase.

### Semantic placement

```text
Episode / MoveRecord — ADR-001
        │
        ▼
DecisionTrace — ADR-005 (Accepted)
        │
        ├── Buddy prompt / buddy_prompt_ref — ADR-006
        ├── corpus_ref — ADR-002 / CCCR
        ├── engine_ref — ADR-006 D6
        └── capture_timing + trace_source — ADR-005
        │
        ▼
EvidenceRecord candidate — ADR-003
        │
        ▼
Claim only through ADR-004 stewardship

Buddy: mentor / prompt / reference / explanation
Not: learner / steward / engine oracle / federation exporter
```

---

## In scope

1. Buddy role and boundaries (D1).
2. Pedagogical autonomy principle (D2).
3. Buddy intervention ladder (D3).
4. Buddy use of DecisionTrace (D4).
5. Buddy use of `corpus_ref` (D5).
6. Buddy use of Stockfish/engine lane (D6).
7. Buddy use of LOE/DOE candidate evidence (D7).
8. Buddy and claims/stewardship (D8).
9. Buddy explanation grammar (D9).
10. Mode boundaries as semantic concepts (D10).
11. Federation withholding (D11).
12. Anti-patterns (D12).
13. System chess competence deferral (D13).
14. Downstream sequencing (D14).

---

## Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Runtime / `src/`** | Governance only |
| **UI, APIs, tests** | Not in scope |
| **Federation export changes** | D11 |
| **JSON Schema, SQL, localStorage** | Implementation deferred |
| **Prompt templates as product assets** | Product phase |
| **LLM orchestration** | Product phase |
| **Stockfish integration implementation** | ADR-007 / implementation |
| **Corpus registry implementation** | Future ADR |
| **Stewardship C0–C4 mechanics** | ADR-004 |
| **Claim record shape** | ADR-004 |
| **LARIS activation** | FDP-002 |

---

## Alternatives considered

### Alt-1 — Buddy as answer engine

**Pros:** Immediate correct answers.  
**Cons:** Destroys learner autonomy; collapses pedagogy into oracle output.  
**Rejected** — D2 autonomy principle.

### Alt-2 — Buddy as steward

**Pros:** Faster claim workflow.  
**Cons:** Violates ADR-004; Buddy not steward by default.  
**Rejected** (D8).

### Alt-3 — Buddy as engine proxy

**Pros:** Simple implementation.  
**Cons:** Engine is measurement lane, not pedagogy alone (CCCR; D6).  
**Rejected**.

### Alt-4 — Buddy writes learner rationale automatically

**Pros:** Faster DecisionTrace capture.  
**Cons:** Violates ADR-005 `trace_source` boundary.  
**Rejected** (D4).

### Alt-5 — Buddy only observes silently

**Pros:** Zero interference.  
**Cons:** Too weak pedagogically; Buddy may guide via bounded prompts (CB-004).  
**Rejected** — L1+ interventions permitted (D3).

### Alt-6 — Export Buddy summaries to federation

**Pros:** Cross-domain visibility.  
**Cons:** Violates federation boundary.  
**Rejected** (D11).

### Alt-7 — Buddy creates mastery labels from interaction history

**Pros:** Motivational feedback.  
**Cons:** Learner state persistence deferred; claims require stewardship (ADR-002, ADR-004).  
**Rejected** (D12).

---

## Consequences

### Positive

- Gives Buddy **safe pedagogical authority** without stewardship authority.
- Enables DecisionTrace capture without corrupting learner voice.
- Makes `corpus_ref` useful in teaching without becoming mastery proof.
- Clarifies Stockfish/engine use as reference lane.
- Preserves federation export integrity.

### Negative / risks

- More metadata burden for Buddy-mediated traces (`buddy_prompt_ref`, `trace_source`).
- More nuanced UX/copy needed in product phase.
- Learners may over-trust engine output without careful copy (OQ-006-3, OQ-006-6).
- Requires future **system chess competence** ADR (D13).

### Unlocked downstream

| Work | Depends on |
|------|------------|
| ADR-007 Stockfish / system competence | D6, D13 |
| Corpus Reference Registry | D5; CCCR |
| DecisionTrace implementation | ADR-005 + D4 |
| LOE/DOE capture UX | D7 |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-006-1** | Which Buddy intervention levels during live play? | **Open** — lean L1–L4 (D3) |
| **OQ-006-2** | Suggest candidate moves before learner self-explanation? | **Open** — mode-dependent |
| **OQ-006-3** | Display Stockfish without oracle effect? | **Open** — defer product copy; ADR-007 |
| **OQ-006-4** | Buddy summaries require learner confirmation for `learner_direct`? | **Open** — lean yes when paraphrasing (D4) |
| **OQ-006-5** | Hide `corpus_ref` hints until after learner attempt? | **Open** — training vs friendly mode |
| **OQ-006-6** | Minimum UX copy to prevent “engine says = truth”? | **Open** — product phase |
| **OQ-006-7** | When can Buddy prepare evidence packets for steward review? | **Open** — steward review preparation mode (D10) |
| **OQ-006-8** | Buddy modes as product settings? | **Open** — CB-006 alignment |
| **OQ-006-9** | ADR-006 relation to Stockfish Reference ADR? | **Open** — ADR-007 follows ADR-006 (D13) |
| **OQ-006-10** | Buddy ever act as steward under explicit separate role? | **Open** — ADR-004 OQ-004-5 analogue |
| **OQ-006-11** | Prevent over-coaching; preserve autonomy? | **Open** — D2, D3 intervention ladder |
| **OQ-006-12** | Distinguish learning-best vs engine-best in product? | **Open** — D6; ADR-007 |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Episode / LearningTrace custody | ADR-001 Accepted | ADR | [DOCTRINE] |
| corpus_ref / derived views | ADR-002 Accepted | ADR | [DOCTRINE] |
| LOE/DOE evidence | ADR-003 Accepted | ADR | [DOCTRINE] |
| Claim / stewardship gate | ADR-004 Accepted | ADR | [DOCTRINE] |
| DecisionTrace / capture_timing / trace_source | ADR-005 Accepted | ADR | [DOCTRINE] |
| Corpus / Stockfish boundary | CCCR v1.0 | Review | [PROPOSAL] |
| Buddy persona; reference over decree | CB-004 | Doctrine | [DOCTRINE] |
| LearningTrace product schema | CB-005 | Doctrine | [DOCTRINE] |
| Learning = integration | CG-FLL-002 | Doctrine | [DOCTRINE] |
| LOE/DOE pilot catalogue | CG-FLL-1E | Doctrine | [DOCTRINE] |
| Federation export boundary | FEDERATION.md | Doctrine | [DOCTRINE] |
| Engine CP measured lane | `helper.ts`, `CP.tsx` | Runtime | [RUNTIME] |
| Opening runtime corpus | `openings.ts`, `openingdata.ts` | Runtime | [RUNTIME] |
| Buddy pedagogy definition | ADR-006 D1–D14 | ADR | [DOCTRINE] |

---

## Downstream ADRs

See **D14**. ADR-006 does not subsume DecisionTrace implementation storage ADRs or ADR-007 Stockfish / system competence.

---

## Governance boundary statement

**ADR-006 does not modify** runtime, tests, federation export, schemas, implementation files, or **accepted ADRs** other than its own acceptance status.

---

## Related documents

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [ADR-005 — DecisionTrace / Per-Ply Reasoning v1](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md)
- [ChessGuide Corpus Content Review v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md)
- [CB-004 — Buddy Persona & Product Principles](../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CB-002 — Longitudinal Skill Development Domain](../chessbuddy/CB-002-longitudinal-skill-development-domain.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [FEDERATION.md](../../FEDERATION.md)
