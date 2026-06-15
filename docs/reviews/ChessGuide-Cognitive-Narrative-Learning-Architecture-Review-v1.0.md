# ChessGuide Cognitive & Narrative Learning Architecture Review v1.0

| Field | Value |
|-------|-------|
| **Review ID** | CCNLAR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `review/cognitive-narrative-learning-v1` |
| **Continues from** | Repository Review Baseline (2026-06-06), Strategic Review v1.0, [ChessGuide Epistemic Architecture Review v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md) |
| **Scope** | Cognitive and narrative learning theory — no implementation |

---

## Repository State (opening)

| Item | Value |
|------|-------|
| **Branch at start** | `review/epistemic-architecture-v1` @ `74743d6` |
| **Branch for review** | `review/cognitive-narrative-learning-v1` |
| **Working tree** | Clean |
| **Recent commits** | `74743d6` epistemic review SHA fix, `a6a6c39` epistemic phase-7, `bd5f589` LLD v1.0 |
| **ADRs in repo** | None |

```bash
git status    # clean
git branch    # review/cognitive-narrative-learning-v1 (from epistemic review tip)
git log --oneline -20  # see table above
```

---

## Core Question

> What transforms an observed chess event into durable learner understanding?

**Doctrine answer (synthesized):** [DOCTRINE] An observed chess event becomes durable understanding when it is **attended**, **integrated** into prior structures, and **validated** through transformed capability — not when it is merely recorded. Recording lives in **LearningTrace**; understanding lives in **integration** (CG-FLL-002, LEF-0E).

---

# Part 1 — Learning Science Review

## Repository State (Phase 1)

Committed: `review: phase-1 learning science review`

## Evidence Reviewed

CG-FLL-002, CG-FLL-003, CG-FLL-001, CB-000, CB-004, CB-006, LEF-0E, LEF-1D, LEF-1C, LEF-1E, CFA-v1.0, CEAR-v1.0.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Integration, simulation, continuity, chain |
| `docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md` | Expertise, repetition, mastery horizon |
| `docs/governance/chessguide/CG-FLL-001-first-domain-learning-pilot.md` | Goals, observation targets |
| `docs/governance/federation/studies/LEF-1D-flow-and-optimal-traversal-hypothesis.md` | Flow mapping |
| `docs/governance/federation/studies/LEF-1E-capability-conditions-hypothesis.md` | Conditions bundle |
| `docs/governance/federation/CFA-v1.0.md` | Capability formation ladder |
| `docs/reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md` | Prior synthesis |

## Doctrine Sources

CG-FLL-002 (primary), LEF-0E, LEF-1D, CB-004, CB-006.

## Runtime Sources

`src/data/game.ts` — legacy episode encoding; no learning-science constructs in code.

## External Literature (informative only — subordinate to doctrine)

| Author | Relevant concept | ChessGuide analogue | Classification |
|--------|------------------|---------------------|----------------|
| **Edwin Locke** | Goal setting, goal-directed attention | `focus_contract` anchors (CB-005 AN-3); pilot learning goals (CG-FLL-001 baseline) | [DOCTRINE ALIGNED] partial |
| **Carol Dweck** | Growth mindset, effort attribution | Engagement hypotheses H6/H7; no mindset ontology | [NEW INSIGHT] gap — not in repo |
| **Cal Newport** | Deep work, sustained attention | Training Live mode; attention log; proportionality (CB-004/006) | [DOCTRINE ALIGNED] partial |
| **Barbara Oakley** | Chunking, focused/diffuse modes | Expert compression Observation→Knowledge (CG-FLL-002); **no chunk type** | [NEW INSIGHT] fills gap |
| **Josh Waitzkin** | Deliberate practice, decompression, pattern internalization | Simulation (CG-FLL-002 H3); implicit integration (LEF-0E); Practice mode from trace | [DOCTRINE ALIGNED] partial |
| **Mihaly Csikszentmihalyi** | Flow state | LEF-1D: **not** epistemic primitive; Capability Conditions bundle | [DOCTRINE ALIGNED] reinterpreted |
| **Joshua Foer** | Narrative/mnemonic memory structures | Reflection narratives (CB-005); **no mnemonic chunk doctrine** | [NEW INSIGHT] gap |

## ChessGuide Learning Science Alignment Review

### Alignments [DOCTRINE ALIGNED]

| # | Finding | Source | Confidence |
|---|---------|--------|------------|
| LS-1 | **Integration** is central mechanism — not exposure alone | CG-FLL-002 H4, H8 | High |
| LS-2 | **Continuity** over intensity for mastery horizon | CG-FLL-002 H6; LEF-1C | High |
| LS-3 | **Simulation** as first-class learning (mental rehearsal) | CG-FLL-002 H3 | High |
| LS-4 | **Expert compression** = shortened observation→knowledge path | CG-FLL-002, CG-FLL-003 | High |
| LS-5 | **Attention** is explicit chain stage; OAT separates raw observation | CB-000 I-6, chain | High |
| LS-6 | **Mentorship** accelerates integration | CG-FLL-002; CB-004 Buddy | High |
| LS-7 | **Flow** useful only as shorthand for aligned Capability Conditions | LEF-1D, LEF-1E | Medium |
| LS-8 | **Deliberate practice** analogue = Training Live + Practice from anchors | CB-006 | Medium |

### Conflicts [DOCTRINE CONFLICT]

| # | External claim | Doctrine counter | Resolution |
|---|----------------|------------------|------------|
| LS-C1 | Flow as primary learning state | Activity ≠ learning; Friendly Live "flow" = social rhythm (LEF-1D C-1D-1) | **Hold doctrine** — Flow is enactment quality, not learning proof |
| LS-C2 | Mindset alone drives learning | Transformation requires integration + evidence (CG-FLL-002) | **Hold doctrine** — motivation is amplifier (LEF-1A), not proof |
| LS-C3 | Chunking as storage primitive | Knowledge is resource; learning is integration (CG-FLL-002) | **Reconcile** — chunks may be *integration products*, not knowledge synonyms |

### Gaps filled by external literature [NEW INSIGHT]

| # | Gap | Literature contribution | Repo status |
|---|-----|----------------------|-------------|
| LS-N1 | No **chunk** ontology | Oakley, Waitzkin pattern compression | Pattern (LOE-002) only |
| LS-N2 | No **narrative memory** doctrine | Foer; story structures for retention | Reflection narrative only (LEF-0C) |
| LS-N3 | No **growth mindset** construct | Dweck | Engagement listed, not mindset |
| LS-N4 | No **learning opportunity** entity | Crow epistemology (candidate) | Attention exists; opportunity absent |

### Open Questions [OPEN QUESTION]

| ID | Question |
|----|----------|
| OQ-LS1 | Should chunking be governance vocabulary or remain implicit in expert compression? |
| OQ-LS2 | Does growth mindset belong in Capability Conditions or stay external? |
| OQ-LS3 | Can external learning science inform ADR-001 without becoming ontology? |

## Conclusions (Phase 1)

| # | Conclusion | Class |
|---|------------|-------|
| P1-1 | ChessGuide doctrine **already encodes** integration-centric learning science (Locke partial, Waitzkin partial, Csikszentmihalyi reinterpreted) | [DOCTRINE ALIGNED] |
| P1-2 | **Chunking and narrative memory** are the largest **unformalized** cognitive contributions | [NEW INSIGHT] |
| P1-3 | External literature **may inform** architecture but **must not override** CG-FLL-002 integration theory | [DOCTRINE] per review mandate |
| P1-4 | Complete theory of learning **before ADR-001** requires chunk/narrative clarification | [INFERENCE] |

---

# Part 2 — Chunk Architecture Review

## Repository State (Phase 2)

Committed: `review: phase-2 chunk architecture review`

## Evidence Reviewed

CB-005, CB-000, CB-002, CG-FLL-002, CG-FLL-1E, CFA-v1.0, LEF-0E, LEF-1B, CEAR-v1.0 Part 1.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Knowledge refs, anchors, position_class |
| `docs/governance/chessbuddy/CB-002-longitudinal-skill-development-domain.md` | ChessKnowledge, transferable pattern |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Encoding, Memory, patterns |
| `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` | LOE-002 Pattern Recognition |
| `docs/governance/federation/CFA-v1.0.md` | Implicit integration, compression |
| `src/data/openings.ts` | Embedded knowledge corpus (runtime) |

## Doctrine Sources

CB-005, CG-FLL-002, LOE-002 (via CG-FLL-1E), LEF-0E implicit integration.

## Runtime Sources

`openings.ts` — hierarchical opening labels as knowledge corpus; no chunk model.

## Term distinctions [DOCTRINE + INFERENCE]

| Term | Repository status | Role | Class |
|------|-------------------|------|-------|
| **Knowledge Concept** | CEAR synthesis; not repo type | Referencable semantic unit (opening, principle) | [INFERENCE] |
| **Pattern** | LOE-002; anchor `position_class`; observation capacity | Recurring structure across episodes | [DOCTRINE] |
| **Chunk** | **Absent** | — | [NEW INSIGHT] |
| **Skill** | LSDD actionable competence (CB-002) | Integration outcome in domain | [DOCTRINE] |
| **Capability** | CFA durable capacity | Post-integration, steward-gated claims | [DOCTRINE] |

## Chunk Architecture v1 [PROPOSAL — doctrine-grounded]

### Cognitive Chunk

> A **Cognitive Chunk** is a **compressed, retrievable mental structure** that binds multiple chess features into one executable unit — enabling rapid recognition and action without full conscious decomposition.

**Examples (illustrative):** Back Rank Mate, Fork, Lucena, Opposition.

**Doctrine mapping:**

| Chunk property | Nearest repo construct | Gap |
|--------------|------------------------|-----|
| Compression | Expert compression Observation→Knowledge (CG-FLL-002) | Implicit, not typed |
| Multiple features → one unit | LOE-002 pattern recognition | Event type, not structure |
| Retrieval speed | Recall path (CG-FLL-002) | Distinct from integration |
| Durability | Integration required (H4) | Chunk ≠ stored until integrated |

**[INFERENCE]** Cognitive chunks are **integration products** sitting between **Pattern** (observable recurrence) and **Capability** (durable enactment).

### Narrative Chunk

> A **Narrative Chunk** is a **memorable story scaffold** that binds a chess situation to human-meaningful roles — enabling retention and transfer through episodic memory, not only pattern frequency.

**Examples (illustrative):** The Trapped King, The Knight Ambush, The Last Defender, The Silent Weakness.

**Doctrine mapping:**

| Narrative property | Nearest repo construct | Gap |
|--------------------|------------------------|-----|
| Story structure | `reflection.recorded` (CB-005) | Learner prose, not schema |
| Explanation binding | ExplanationArtifact P1 (LEF-0D) | Causal why, not narrative arc |
| Buddy teaching | Illuminate → Explain → Connect (CB-004) | Pedagogical, not memory architecture |
| Scene extraction | Practice mode from anchors (CB-006) | Episode slice, not narrative scene |

**[INFERENCE]** Narrative chunks are **orthogonal** to Cognitive Chunks — same position may have both.

### Composition rules [PROPOSAL]

| Question | Answer | Class |
|----------|--------|-------|
| Can multiple concepts belong to one chunk? | **Yes** — e.g. Lucena = king opposition + rook placement + winning technique | [INFERENCE] |
| Can one concept belong to multiple chunks? | **Yes** — opposition appears in Lucena, Philidor, endgame technique chunks | [INFERENCE] |
| Are chunks closer to human memory than concepts? | **Yes** — concepts are referencable units; chunks are **operational memory structures** | [NEW INSIGHT] |
| Are chunks Knowledge? | **No** — knowledge is resource; chunk is **integrated structure** (CG-FLL-002) | [DOCTRINE ALIGNED] |

### Does ChessGuide require formal chunk modeling?

| Criterion | Verdict | Class |
|-----------|---------|-------|
| Doctrine completeness without chunks | **Partial** — expert compression covers limit case | [INFERENCE] |
| Pedagogy completeness without chunks | **Weak** — Buddy explains patterns, not chunk formation | [INFERENCE] |
| ADR-001 dependency | **Likely** — Episode schema must know what gets integrated | [INFERENCE] |
| Runtime today | **No chunk witness** | [RUNTIME] |

**Verdict:** Formal chunk modeling is **not doctrine today** but **fills a gap** between Pattern and Capability that expert compression alone does not name.

## Conclusions (Phase 2)

| # | Conclusion | Class |
|---|------------|-------|
| P2-1 | **Chunk** is absent from repository vocabulary | [DOCTRINE] absent |
| P2-2 | **Pattern** and **expert compression** are partial chunk analogues | [DOCTRINE ALIGNED] |
| P2-3 | Cognitive and Narrative chunks are **distinct proposal types** | [PROPOSAL] |
| P2-4 | Chunk Architecture v1 should be **governance proposal**, not runtime schema, before ADR-001 | [INFERENCE] |

## Open Questions (Phase 2)

| ID | Question |
|----|----------|
| OQ-CH1 | Should chunks be LOE event types, graph nodes, or interpretive read models? |
| OQ-CH2 | Does Narrative Chunk require ExplanationArtifact or a separate artefact family? |
| OQ-CH3 | Can opening tree nodes serve as cognitive chunk seeds without new ontology? |

---

# Part 3 — Narrative Architecture Review

## Repository State (Phase 3)

Committed: `review: phase-3 narrative architecture review`

## Evidence Reviewed

CB-004, CB-005, CB-006, LEF-0C, LEF-0D, LEF-0B, CG-FLL-002, CG-FLL-001, ALP-1.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md` | Teaching modes, explanation hierarchy |
| `docs/governance/chessbuddy/CB-006-user-modes.md` | Post-Game Review, Practice |
| `docs/governance/federation/studies/LEF-0C-explanation-artifact-hypothesis.md` | Narrative vs durable explanation |
| `docs/governance/federation/studies/LEF-0D-epistemic-placement-of-explanation-artifact.md` | P1 episodic placement |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Integration mechanisms (reflection, explanation) |
| `docs/governance/chessbuddy/ALP-1-artifact-learning-pilot.md` | RC-* reasoning chains |

## Doctrine Sources

CB-004 (Show/Tell analogue), LEF-0C/0D, CG-FLL-002 integration mechanisms.

## Runtime Sources

None — no narrative structure in `src/`.

## Does chess possess narrative structure? [INFERENCE]

Chess games exhibit **temporal drama** interpretively:

| Narrative beat | Chess analogue | Objectively observable? | Class |
|----------------|----------------|-------------------------|-------|
| **Setup** | Opening development, structure formation | **Partial** — opening IDs, pawn structure anchors | [INFERENCE] |
| **Tension** | Initiative, space, king safety pressure | **Partial** — eval trends, threat signals | [INFERENCE] |
| **First Clash** | First tactical contact, exchange | **Yes** — move events, capture signals | [DOCTRINE ALIGNED] |
| **Escalation** | Increasing complexity, time pressure | **Partial** — clock milestones, eval swing | [INFERENCE] |
| **Crisis** | Blunder, decisive mistake, mating net | **Yes** — `move.deviation_from_reference`, terminal | [DOCTRINE] |
| **Resolution** | Mate, resignation, draw agreement | **Yes** — `game.terminal` | [DOCTRINE] |

**Verdict:** Narrative beats are **interpretive overlays** on observable events — not first-class schema fields.

### Puzzles as narrative scenes [INFERENCE]

| Claim | Assessment | Class |
|-------|------------|-------|
| Puzzles extract scenes from larger narratives | **Plausible** — Practice mode anchors to prior Episodes (CB-006) | [DOCTRINE ALIGNED] partial |
| Puzzles are complete narratives | **Weak** — typically single crisis→resolution | [INFERENCE] |
| Scene extraction requires anchor + focal position | **Yes** — AN-4 cross-episode anchors | [DOCTRINE] |

## Narrative benefits evaluation

| Benefit | Doctrine support | Gap |
|---------|------------------|-----|
| **Retention** | Continuity H6; longitudinal memory (CB-000A) | No narrative-specific retention claim |
| **Retrieval** | Recall path; LOE-003/004 | Chunks unnamed |
| **Transfer** | CG-FLL-002 transfer as transformation signal | No narrative transfer mechanism |
| **Explanation** | ExplanationArtifact; CB-004 hierarchy | Narrative ≠ causal explanation (LEF-0C) |

## Show → Tell → Show Again [PROPOSAL]

**Candidate learning loop** mapped to repository:

| Step | Repository analogue | Source |
|------|---------------------|--------|
| **Show** | Friendly Live / Observation — experience without interruption | CB-006 Friendly Live |
| **Tell** | Post-Game Review / Training explain-on-request | CB-006, CB-004 |
| **Show Again** | Practice from trace anchors; Training replay | CB-006 Practice, Training |

**Doctrine alignment:** [DOCTRINE ALIGNED] partial — matches Observed → Explained → Replayed (CG-FLL-001) but **not named** as Show-Tell-Show.

**Risk:** [DOCTRINE CONFLICT] if "Tell" collapses into coaching export — federation boundary (FEDERATION.md).

## Narrative Learning Architecture v1 [PROPOSAL]

```text
Episode (observable events)
  └── Narrative Overlay (interpretive read model)
        ├── Scene beats (setup…resolution)
        ├── Narrative Chunk labels (human-meaningful)
        └── Links to ExplanationArtifact P1 (causal why)
              ↓
        Integration (explicit channel)
              ↓
        Cognitive Chunk formation (compression)
```

**Placement:** Narrative sits **above** LearningTrace evidence, **beside** ExplanationArtifact — narrative provides **memory scaffold**; explanation provides **audit why**.

## Conclusions (Phase 3)

| # | Conclusion | Class |
|---|------------|-------|
| P3-1 | Chess narrative structure is **interpretively valid**, **not schema-encoded** | [INFERENCE] |
| P3-2 | Show-Tell-Show maps to **existing pilot procedure** without new ontology | [DOCTRINE ALIGNED] |
| P3-3 | Narrative ≠ ExplanationArtifact (LEF-0C falsification survives) | [DOCTRINE] |
| P3-4 | Narrative Memory Hypothesis is **unsupported in doctrine** but **compatible** | [NEW INSIGHT] |

## Open Questions (Phase 3)

| ID | Question |
|----|----------|
| OQ-NA1 | Should narrative beats be steward-annotated or algorithmically inferred? |
| OQ-NA2 | Does Show-Tell-Show require a named learning loop in governance? |
| OQ-NA3 | Can Narrative Chunk coexist with ExplanationArtifact P1 on same episode? |

---

# Part 4 — Purpose & Attention Review

## Repository State (Phase 4)

Committed: `review: phase-4 purpose and attention review`

## Evidence Reviewed

CG-001, CG-000, CG-FLL-002, CG-FLL-001, CB-005, CB-006, CB-004, LEF-1E, CEAR-v1.0 Part 5.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessguide/CG-001-product-vision.md` | Mission, learning over games |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Attention stage, observation capacity |
| `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` | Attention log, focus_contract anchor |
| `docs/governance/chessbuddy/CB-006-user-modes.md` | Mode purposes, attention policies |
| `docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md` | Proportionality, precision |
| `docs/governance/federation/studies/LEF-1E-capability-conditions-hypothesis.md` | Attention as strong condition |

## Doctrine Sources

CG-FLL-002, CB-000 I-6 (OAT), CB-005, CB-006 mode purposes.

## Runtime Sources

No purpose or attention model in `src/` — hints/CP session-only.

## Purpose & Attention Architecture v1

### Purpose [DOCTRINE]

| Layer | Purpose construct | Source |
|-------|-------------------|--------|
| **Product** | Measure learning, not games (CG-001) | [DOCTRINE] |
| **Mode** | Per-mode purpose statements (CB-006) | [DOCTRINE] |
| **Episode** | `focus_contract` anchor (CB-005 AN-3) | [DOCTRINE] |
| **Pilot** | Learner goals at baseline (CG-FLL-001) | [DOCTRINE] |
| **Learning Intent** | **Not named** as entity | [NEW INSIGHT] gap |

### Attention [DOCTRINE]

| Construct | Role | Source |
|-----------|------|--------|
| **Attention (chain stage)** | Filtered highlight on observation stream | CB-000A, chain |
| **Attention log** | When hints/openings/CP shown | CB-005 |
| **LOE-001** | Attention events in pilot catalog | CG-FLL-1E |
| **OAT separation** | Raw observation ≠ attention | CB-000 I-6 |

### Goal Theory alignment [DOCTRINE ALIGNED]

Locke-style goal-directed learning is **partially present** via focus contracts and pilot goals — not as **Goal Theory** ontology.

### Crow Epistemology Hypothesis evaluation

> Humans learn best when a concept is introduced at the moment attention is already focused on a related phenomenon.

| Dimension | Assessment | Class |
|-----------|------------|-------|
| Doctrine support | Attention precedes encoding/integration (CG-FLL-002 paths) | [DOCTRINE ALIGNED] |
| Buddy behaviour | Connect intent links to past trace pattern (CB-004) | [DOCTRINE ALIGNED] |
| Timing entity | **Learning Opportunity** not first-class | [NEW INSIGHT] |
| Contradiction risk | Unsolicited hints violate PP-4 autonomy (CB-004) | [DOCTRINE CONFLICT] if mistimed |

**Verdict:** Hypothesis **aligns** with attention-first doctrine; **requires** Learning Opportunity concept to operationalize without violating autonomy.

### Should Learning Opportunity be first-class? [PROPOSAL]

```text
Learning Opportunity =
  detected alignment between
    (a) learner attention on phenomenon P
    (b) knowledge concept C relevant to P
    (c) mode-appropriate introduction policy
```

| For | Against |
|-----|---------|
| Crow epistemology; CB-004 Connect | No schema field; risks coaching flood |
| Reduces wasted exposition | Inference-heavy; steward may disagree |
| Supports purpose-centered hypothesis | CEAR: Learning Frontier unnamed |

**Recommendation:** [PROPOSAL] Model as **interpretive read model**, not persistence primitive, until ADR-001 defines Episode attention envelope.

### Causal chain evaluation

| Link | Verdict | Class |
|------|---------|-------|
| Purpose → Attention | **Yes** — mode purpose sets attention policy (CB-006) | [DOCTRINE] |
| Attention → Integration | **Yes** — encoding path requires attention (CG-FLL-002) | [DOCTRINE] |
| Purpose → Integration | **Indirect** — via attention and conditions | [INFERENCE] |

## Conclusions (Phase 4)

| # | Conclusion | Class |
|---|------------|-------|
| P4-1 | **Attention** is doctrine-strong; **Purpose** is vision/mode-level, not typed | [DOCTRINE] |
| P4-2 | **Learning Opportunity** is absent but **compatible** with Crow hypothesis | [PROPOSAL] |
| P4-3 | Concepts should be introduced **only when mode and autonomy permit** — not whenever attention exists | [DOCTRINE] CB-004/006 |
| P4-4 | Purpose-Centered Learning Hypothesis **partially supported** with reflection/application gaps | [NEW INSIGHT] |

## Open Questions (Phase 4)

| ID | Question |
|----|----------|
| OQ-PA1 | Is Learning Intent distinct from focus_contract anchor? |
| OQ-PA2 | Who authorizes opportunity detection — Buddy, steward, or learner? |
| OQ-PA3 | Does purpose belong in Capability Conditions (LEF-1E Meaning dimension)? |

---

# Part 5 — Flow & Mastery Review

## Repository State (Phase 5)

Committed: `review: phase-5 flow and mastery review`

## Evidence Reviewed

LEF-1D, LEF-1C, LEF-1E, CFA-v1.0, CG-FLL-002, CG-FLL-003, CB-006, CEAR-v1.0.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/federation/studies/LEF-1D-flow-and-optimal-traversal-hypothesis.md` | Flow bundle, optimal traversal |
| `docs/governance/federation/studies/LEF-1C-path-quality-and-mastery-hypothesis.md` | Mastery horizon |
| `docs/governance/federation/studies/LEF-1E-capability-conditions-hypothesis.md` | Flow as outcome |
| `docs/governance/federation/CFA-v1.0.md` | Full ladder to Mastery Horizon |
| `docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md` | Expertise, continuity |

## Doctrine Sources

LEF-1D (primary for Flow), LEF-1C (Mastery), CFA-v1.0.

## Runtime Sources

No flow or mastery metrics in `src/`.

## Flow & Mastery Architecture v1

### Where Flow belongs [DOCTRINE]

LEF-1D + LEF-1E placement:

```text
LearningTrace (evidence)
  → Longitudinal Path
  → Capability Conditions
  → Optimal Traversal / Traversal Quality
  → Integration
  → Path Quality → Path Potency
  → Stewardship → Transformation Claim
  → Mastery Horizon
```

**Flow is not a CFA tier.** It is an **interpretive label** for aligned Capability Conditions during traversal (LEF-1D E-1D-1).

### Flow classification

| Candidate | Verdict | Class |
|-----------|---------|-------|
| **State** | **Partial** — actor-state bundle during episode | [DOCTRINE] LEF-1D |
| **Capability** | **No** — Flow is enactment quality, not durable capacity | [DOCTRINE CONFLICT] |
| **Signal** | **Partial** — engagement, focus, mode-appropriate challenge | [INFERENCE] |
| **Outcome** | **Partial** — LEF-1E: outcome of aligned conditions | [DOCTRINE ALIGNED] |

**Recommended classification:** [INFERENCE] Flow = **interpretive signal bundle** describing traversal quality under Capability Conditions — **not** learning proof.

### Challenge Fit [DOCTRINE ALIGNED] partial

| Source | Finding |
|--------|---------|
| CB-006 | Training vs Friendly = different challenge/support |
| DOE-007 | Steward challenge events |
| LEF-1E | Challenge Fit partial — no Goldilocks schema |

### Mastery [DOCTRINE]

| Property | Finding | Class |
|----------|---------|-------|
| Chain stage? | **No** — horizon language (LEF-1C) | [DOCTRINE] |
| vs Transformation | Transformation = claim/event; Mastery = sustained capability | [DOCTRINE] |
| Schema field? | **Absent** (CB-005) | [RUNTIME] |
| Predictor | H6 continuity > intensity | [DOCTRINE] |

### Candidate stack evaluation

**User candidate:**

```text
Purpose → Attention → Observation → Integration → Flow → Transformation → Mastery
```

**Doctrine-preferred (CFA + LEF):**

```text
Purpose (mode/vision)
  → Attention (chain + policy)
  → Observation (OAT)
  → Capability Conditions
  → Integration (implicit | explicit)
  → [Traversal Quality / Flow-like bundle]
  → Transformation (observed | claimed)
  → Mastery Horizon
```

| Delta | Assessment |
|-------|------------|
| User stack omits LearningTrace | **Gap** — evidence custody required |
| User stack places Flow before Transformation | **Aligns** with LEF-1D (Flow affects integration rate) |
| User stack omits Stewardship | **Gap** — claims require steward gate |
| User stack conflates Integration and Transformation | **Conflict** — LEF-0E separates process and outcome |

## Conclusions (Phase 5)

| # | Conclusion | Class |
|---|------------|-------|
| P5-1 | Flow belongs **between Capability Conditions and Integration effectiveness** | [DOCTRINE] LEF-1D |
| P5-2 | Flow is **signal/outcome bundle**, not capability or learning | [DOCTRINE ALIGNED] |
| P5-3 | Mastery is **horizon**, not pipeline stage | [DOCTRINE] LEF-1C |
| P5-4 | User linear stack **oversimplifies** CFA; must include evidence + stewardship | [INFERENCE] |

## Open Questions (Phase 5)

| ID | Question |
|----|----------|
| OQ-FM1 | Should Traversal Quality replace Flow in governance vocabulary? |
| OQ-FM2 | Can Mastery Horizon be operationalized without contradicting steward claims? |
| OQ-FM3 | Does challenge-fit require numeric rating or trace-relative difficulty? |

---

# Part 6 — Synthesis Review

## Repository State (Phase 6)

Committed: `review: phase-6 synthesis review`

## Evidence Reviewed

All Parts 1–5, LEF-0E, CFA-v1.0, CEAR-v1.0, CB-000A chain.

## Files Reviewed

Full review corpus + `docs/governance/federation/CFA-v1.0.md`, `docs/governance/federation/studies/LEF-0E-integration-theory.md`.

## Doctrine Sources

CG-FLL-002, LEF-0E, CFA-v1.0, CEAR-v1.0.

## Runtime Sources

`src/data/game.ts`, `src/data/openings.ts` — evidence only, no cognitive model.

## Candidate architecture (critical evaluation)

**User-proposed stack:**

```text
Purpose → Attention → Observation → Experience → LearningTrace
  → Chunk Formation → Narrative Chunk Formation → Integration
  → Retrieval → Application → Flow → Transformation Threshold → Mastery
```

### Element-by-element verdict

| Element | In doctrine? | Placement | Verdict |
|---------|--------------|-----------|---------|
| **Purpose** | Partial (vision, modes) | Upstream of attention policy | [DOCTRINE ALIGNED] |
| **Attention** | Yes | Chain stage + log | [DOCTRINE] |
| **Observation** | Yes | OAT raw stream | [DOCTRINE] |
| **Experience** | **Not named** | Activity exposure without integration claim | [NEW INSIGHT] — useful discriminator |
| **LearningTrace** | Yes | Evidence custody — not learning | [DOCTRINE] |
| **Chunk Formation** | **No** | Post-integration compression product | [PROPOSAL] |
| **Narrative Chunk Formation** | **No** | Parallel memory scaffold | [PROPOSAL] |
| **Integration** | Yes | Central mechanism | [DOCTRINE] |
| **Retrieval** | Yes | Recall path — not learning alone | [DOCTRINE] |
| **Application** | Partial | Integration mechanism list | [DOCTRINE ALIGNED] |
| **Flow** | Interpretive | Traversal quality bundle | [DOCTRINE ALIGNED] reinterpreted |
| **Transformation Threshold** | Yes | LEF-1C steward signals | [DOCTRINE] |
| **Mastery** | Horizon | Not claim stage | [DOCTRINE] |

### Critical findings

| # | Finding | Class |
|---|---------|-------|
| S-1 | **Experience** usefully names activity-without-integration — fills I-3 gap | [NEW INSIGHT] |
| S-2 | **Chunk Formation after LearningTrace** is **wrong order** — chunks are integration **products**, not trace inputs | [DOCTRINE CONFLICT] |
| S-3 | **Retrieval before Application** in stack inverts CG-FLL-002 recall path (retrieval uses knowledge) | [DOCTRINE CONFLICT] |
| S-4 | Stack **omits Stewardship** and **ExplanationArtifact** — required for claims | [DOCTRINE CONFLICT] |
| S-5 | Stack **omits Capability Conditions** — LEF-1D/1E survive falsification without them | [DOCTRINE CONFLICT] |

## ChessGuide Cognitive & Narrative Learning Architecture v1 [PROPOSAL — revised]

```text
Purpose (vision · mode · focus contract)
        ↓
Capability Conditions (attention policy · autonomy · challenge · recovery)
        ↓
Observation (reality stream — OAT)
        ↓
Attention (filtered phenomena)
        ↓
Experience (activity record — may lack integration)
        ↓
LearningTrace (evidence custody)
        ↓
Integration (implicit │ explicit channels)
        ├─→ Cognitive Chunk formation (compression)
        ├─→ Narrative Chunk formation (memory scaffold)
        └─→ ExplanationArtifact P1 (when causal why durable)
        ↓
Retrieval · Application (knowledge use under observation)
        ↓
Traversal Quality (Flow-like bundle — enactment signal)
        ↓
Transformation (observed │ claimed via Stewardship)
        ↓
Mastery Horizon (long-horizon capability state)
```

**Continuity** spans all tiers horizontally (CFA-v1.0). **Learning Opportunity** (Crow) acts as **optional trigger** on Attention→Integration edge when mode permits.

## Hypothesis evaluation (synthesis)

### Show–Tell Coupling Hypothesis

> Wisdom emerges when action and explanation become mutually reinforcing.

| Assessment | Class |
|------------|-------|
| **Partially supported** — CB-004 Illuminate+Explain; Wisdom ≠ Knowledge (I-3); PP-3 understanding over output | [DOCTRINE ALIGNED] |
| **Gap** — Wisdom refs are engine deltas, not narrative coupling | [RUNTIME] |

### Narrative Memory Hypothesis

> Knowledge Concepts retained more effectively when embedded in narrative structures.

| Assessment | Class |
|------------|-------|
| **Not in doctrine**; compatible with reflection + ExplanationArtifact | [NEW INSIGHT] |
| **Requires** Narrative Chunk proposal adoption to test | [OPEN QUESTION] |

### Purpose-Centered Learning Hypothesis

> Observation without purpose → experience; with purpose → learning; +reflection → understanding; +application → wisdom.

| Stage | Doctrine mapping | Class |
|-------|------------------|-------|
| Experience | Activity without integration (CG-FLL-002) | [DOCTRINE ALIGNED] |
| Learning | Integration achieved | [DOCTRINE] |
| Understanding | Chain stage; LOE density | [DOCTRINE ALIGNED] |
| Wisdom | Normative guidance; stewardship | [DOCTRINE ALIGNED] |

**Verdict:** [DOCTRINE ALIGNED] as **pedagogical prose** — not as strict state machine.

### Crow Epistemology Hypothesis

> Introduce concepts when attention already focused.

| Assessment | Class |
|------------|-------|
| Aligns with attention-first encoding | [DOCTRINE ALIGNED] |
| Requires Learning Opportunity + mode guardrails | [PROPOSAL] |
| Risk: violates PP-4 if automated | [DOCTRINE CONFLICT] if misimplemented |

## Core question answered

> What transforms an observed chess event into durable learner understanding?

**Answer [DOCTRINE + INFERENCE]:**

1. **Attention** selects the phenomenon from observation (CB-000 I-6).
2. **Purpose and Capability Conditions** determine whether integration is likely (CB-006, LEF-1E).
3. **Integration** connects the event to prior structures — implicitly or explicitly (CG-FLL-002, LEF-0E).
4. **Chunks** (cognitive and optionally narrative) **compress** integrated structure for retrieval (proposal).
5. **LearningTrace** records evidence but **does not perform** integration (LEF-0E, CEAR).
6. **Stewardship** validates durable understanding claims when stakes require (CG-FLL-001).

## Conclusions (Phase 6)

| # | Conclusion | Class |
|---|------------|-------|
| P6-1 | User stack is **directionally useful** but **order-wrong** on chunks and **incomplete** on stewardship | [INFERENCE] |
| P6-2 | Revised architecture v1 **reconciles** CFA, LEF, and cognitive/narrative proposals | [PROPOSAL] |
| P6-3 | **Experience** deserves governance vocabulary as activity-without-integration | [NEW INSIGHT] |
| P6-4 | ChessGuide **does not yet possess complete** cognitive/narrative theory — chunk + opportunity gaps remain | [INFERENCE] |

## Open Questions (Phase 6)

| ID | Question |
|----|----------|
| OQ-SY1 | Adopt Experience as governance term alongside Activity? |
| OQ-SY2 | Must ADR-001 precede Chunk Architecture ADR or subsume it? |
| OQ-SY3 | Is Narrative Chunk formation part of integration or post-integration read model? |

---

# Part 7 — Strategic Assessment

## Repository State (Phase 7)

Committed: `review: phase-7 strategic assessment`

## Evidence Reviewed

All Parts 1–6, CEAR-v1.0, LEF-2C, ChessGuide-LLD-v1.0.

## Files Reviewed

Full review corpus + `docs/governance/federation/studies/LEF-2C-runtime-observability-study.md`.

## Doctrine Sources

CG-FLL-002, CFA-v1.0, CEAR-v1.0 recommended ADR.

## Runtime Sources

LEF-2C findings — no cognitive/narrative runtime witness.

## Strategic gaps

| # | Gap type | Finding | Class |
|---|----------|---------|-------|
| 1 | **Conceptual** | **Chunk** and **Learning Opportunity** absent — cognitive compression unnamed | [NEW INSIGHT] |
| 2 | **Doctrine** | Integration theory strong; **narrative memory** and **experience** unnamed | [DOCTRINE] partial |
| 3 | **Architectural** | CFA complete; cognitive/narrative layer **not in CFA diagram** | [INFERENCE] |
| 4 | **Learning-science** | Oakley chunking + Crow timing **fill gaps** without contradicting CG-FLL-002 | [NEW INSIGHT] |

## Does ChessGuide possess complete theory before ADR-001?

| Criterion | Verdict | Class |
|-----------|---------|-------|
| **Learning epistemology** | **Yes** — CG-FLL-002, LEF-0E, CFA | [DOCTRINE] |
| **Evidence theory** | **Yes** — CEAR Parts 2–3 | [DOCTRINE] |
| **Cognitive compression** | **No** — chunk ontology absent | [NEW INSIGHT] |
| **Narrative learning** | **No** — interpretive only | [INFERENCE] |
| **Attention/purpose coupling** | **Partial** — attention strong, opportunity absent | [DOCTRINE ALIGNED] partial |
| **Flow/mastery placement** | **Yes** — LEF-1C/1D/1E | [DOCTRINE] |

**Verdict:** [INFERENCE] Epistemology is **sufficient** for ADR-001 (Episode boundary). **Cognitive/narrative theory is incomplete** — ADR-001 should **not encode chunk/narrative primitives** without follow-on governance.

## Strategic recommendations (doctrine only)

| # | Recommendation | Class |
|---|----------------|-------|
| R-1 | Write **ADR-001: LearningTrace Episode Schema v1** per CEAR — sovereign boundary only | [INFERENCE] |
| R-2 | Follow with **governance study or ADR** on Chunk Architecture v1 before chunk fields in schema | [PROPOSAL] |
| R-3 | Treat Narrative Architecture as **Buddy pedagogy layer**, not federation export | [DOCTRINE ALIGNED] |
| R-4 | Adopt **Experience** as activity-without-integration term in CG-FLL-002 glossary | [PROPOSAL] |
| R-5 | Defer **Learning Opportunity** until attention envelope defined in ADR-001 | [INFERENCE] |

## Candidate Future ADRs [INFERENCE]

| Priority | ADR candidate | Rationale |
|----------|---------------|-----------|
| **1** | LearningTrace Episode Schema v1 | CEAR + CCNLAR: evidence boundary first |
| **2** | Chunk Architecture v1 (governance) | Largest cognitive gap |
| **3** | Learning Opportunity / Attention Coupling | Crow hypothesis operationalization |
| **4** | Narrative Chunk vs ExplanationArtifact boundary | LEF-0C extension |

## Conclusions (Phase 7)

| # | Conclusion | Class |
|---|------------|-------|
| P7-1 | **Most important conceptual gap:** chunk ontology between Pattern and Capability | [NEW INSIGHT] |
| P7-2 | **Most important doctrine gap:** Experience and Learning Opportunity unnamed | [INFERENCE] |
| P7-3 | **Most important architectural gap:** cognitive/narrative layer not integrated into CFA diagram | [INFERENCE] |
| P7-4 | **Most important learning-science insight:** Oakley chunking explains expert compression mechanism doctrine names but does not model | [NEW INSIGHT] |
| P7-5 | **Highest-value ADR:** Episode Schema v1 first; Chunk Architecture governance second | [INFERENCE] |

---

# Executive Summary

ChessGuide possesses a **mature integration-centric learning epistemology** (CG-FLL-002, LEF-0E, CFA) but **lacks formal cognitive and narrative architecture**. External learning science **aligns** with doctrine on integration, continuity, simulation, and attention — and **fills gaps** on chunking (Oakley), narrative memory (Foer), and timed introduction (Crow epistemology) without overriding repository truth hierarchy.

**Chunk Architecture v1** and **Narrative Learning Architecture v1** are **review proposals**, not repo vocabulary. **Flow** is correctly placed as **traversal quality signal** (LEF-1D), not learning. **Mastery** remains **horizon**, not pipeline stage (LEF-1C).

The revised **Cognitive & Narrative Learning Architecture v1** reconciles user candidate stack with CFA: chunks form **after** integration; LearningTrace remains **evidence**; Stewardship gates claims.

**Before ADR-001:** Epistemology **sufficient**. Cognitive/narrative theory **incomplete** — ADR-001 should define Episode boundary **without** premature chunk/narrative schema.

**Doctrine completeness:** ~**80%** epistemology; ~**45%** cognitive architecture; ~**25%** narrative architecture; ~**15%** runtime alignment (LEF-2C).

---

# Repository Evidence Summary

| Layer | Maturity | Key files |
|-------|----------|-----------|
| Learning semantics | High | CG-FLL-002, CG-FLL-003 |
| Integration theory | High | LEF-0E |
| Capability formation | High | CFA-v1.0, LEF-1C/1D/1E |
| Epistemic review | High | CEAR-v1.0 |
| Chunk / narrative | Low (proposal) | This review |
| Runtime cognitive model | None | LEF-2C |

---

# Doctrine Findings (consolidated)

| Finding | Class |
|---------|-------|
| Learning = integration achieved | [DOCTRINE] |
| Attention precedes encoding/integration | [DOCTRINE] |
| Flow = traversal quality bundle, not primitive | [DOCTRINE] |
| Mastery = horizon, not chain stage | [DOCTRINE] |
| Pattern ≠ Chunk | [INFERENCE] |
| Narrative ≠ ExplanationArtifact | [DOCTRINE] |
| Show-Tell-Show ≈ Observed→Explained→Replayed | [DOCTRINE ALIGNED] |
| Chunk/Narrative/Opportunity not in repo | [PROPOSAL] |

---

# Runtime Findings (consolidated)

| Finding | Class |
|---------|-------|
| No chunk, narrative, flow, or mastery types | [RUNTIME] |
| Opening tree = knowledge corpus only | [RUNTIME] |
| Episode = legacy `Game.toString()` | [RUNTIME] |
| Hints/CP session-only | [RUNTIME] |

---

# Learning Science Findings (consolidated)

| Finding | Class |
|---------|-------|
| Locke goals → focus_contract partial | [DOCTRINE ALIGNED] |
| Waitzkin practice → Training/Practice modes | [DOCTRINE ALIGNED] |
| Csikszentmihalyi Flow → LEF-1D reinterpretation | [DOCTRINE ALIGNED] |
| Oakley chunking → fills expert compression gap | [NEW INSIGHT] |
| Dweck mindset → absent | [NEW INSIGHT] gap |
| Foer narrative memory → fills retention gap | [NEW INSIGHT] |

---

# Cognitive Architecture Findings (consolidated)

| Finding | Class |
|---------|-------|
| Cognitive Chunk = integration product | [PROPOSAL] |
| Chunks compose concepts; overlap allowed | [PROPOSAL] |
| Experience = activity without integration | [NEW INSIGHT] |
| Learning Opportunity = attention×concept×policy | [PROPOSAL] |

---

# Narrative Architecture Findings (consolidated)

| Finding | Class |
|---------|-------|
| Narrative beats interpretively valid on chess | [INFERENCE] |
| Puzzles as extracted scenes — partial support | [DOCTRINE ALIGNED] |
| Narrative Chunk orthogonal to cognitive chunk | [PROPOSAL] |
| Narrative memory hypothesis compatible, untested | [NEW INSIGHT] |

---

# Open Questions (consolidated)

OQ-LS1–3, OQ-CH1–3, OQ-NA1–3, OQ-PA1–3, OQ-FM1–3, OQ-SY1–3 — see phase sections.

---

# Strategic Recommendations (consolidated)

1. Proceed **ADR-001 Episode Schema** without chunk/narrative fields.
2. Governance study on **Chunk Architecture v1** before cognitive schema commitment.
3. Keep narrative in **Buddy pedagogy**, not federation export.
4. Consider **Experience** glossary addition to CG-FLL-002.

---

# Candidate Future ADRs (consolidated)

1. LearningTrace Episode Schema v1
2. Chunk Architecture v1 (governance)
3. Learning Opportunity / Attention Coupling
4. Narrative Chunk vs ExplanationArtifact boundary

---

# Commit Log (review branch)

| Phase | Commit message | SHA |
|-------|----------------|-----|
| 1 | review: phase-1 learning science review | `c3aacd0` |
| 2 | review: phase-2 chunk architecture review | `0986c84` |
| 3 | review: phase-3 narrative architecture review | `d813f9b` |
| 4 | review: phase-4 purpose and attention review | `5ac8615` |
| 5 | review: phase-5 flow and mastery review | `21f5155` |
| 6 | review: phase-6 synthesis review | `6277411` |
| 7 | review: phase-7 strategic assessment | `c986061` |

---

## Document Status

```text
Accepted Cognitive & Narrative Learning Architecture Review Candidate
```
