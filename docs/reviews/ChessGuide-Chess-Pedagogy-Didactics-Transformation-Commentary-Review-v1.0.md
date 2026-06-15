# ChessGuide Chess Pedagogy, Didactics, Transformation & Commentary Review v1.0

| Field | Value |
|-------|-------|
| **Review ID** | CPDTCR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `review/chess-pedagogy-didactics-transformation-v1` |
| **Continues from** | Repository Baseline (2026-06-06), Strategic Review v1.0, [CEAR v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md), [CCNLAR v1.0](ChessGuide-Cognitive-Narrative-Learning-Architecture-Review-v1.0.md), [CLOR v1.0](ChessGuide-Learning-Ontology-Review-v1.0.md) |
| **Scope** | Pedagogy, didactics, transformation orchestration, commentary — no implementation |

---

## Repository State (opening)

| Item | Value |
|------|-------|
| **Branch at start** | `review/learning-ontology-v1` @ `098e59d` |
| **Branch for review** | `review/chess-pedagogy-didactics-transformation-v1` |
| **Working tree** | Clean |
| **Recent commits** | `098e59d` CLOR SHA fix, `ee8b8e8` CLOR phase-7, `655d0ca` CCNLAR |
| **ADRs in repo** | None |

```bash
git status    # clean
git branch    # review/chess-pedagogy-didactics-transformation-v1
git log --oneline -20  # see table above
```

---

## Core Question

> How are robust learning transformations intentionally created?

**Interim doctrine answer:** [DOCTRINE] Through **longitudinal episodes** under **Capability Conditions**, where **integration** (implicit/explicit) changes capability, and **stewardship** authorizes **transformation claims** when lineage supports them (CG-FLL-002, CFA-v1.0, CG-FLL-1E).

---

# Part 1 — Chess Pedagogy Review

## Repository State (Phase 1)

Committed: `review: phase-1 chess pedagogy review`

## Evidence Reviewed

CB-004, CB-006, CG-FLL-002, CG-FLL-1E LOE catalog, CB-003 phases, CLOR, CCNLAR.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md` | Teaching modes, explanation hierarchy |
| `docs/governance/chessbuddy/CB-006-user-modes.md` | Mode purposes |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Integration mechanisms |
| `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` | LOE/DOE catalogue |

## Doctrine Sources

CB-004, CB-006, CG-FLL-002.

## Runtime Sources

None — no pedagogy model in `src/`.

## External traditions (informative — subordinate to doctrine)

| Tradition | Recurring principle | ChessGuide analogue | Class |
|-----------|--------------------|--------------------|-------|
| **Chess Steps** | Graduated tactical themes by level | LOE-002 Pattern Recognition; Practice mode | [EXTERNAL] + [DOCTRINE ALIGNED] partial |
| **Polgar Method** | Mass pattern exposure + explanation | Opening tree + knowledge refs; activity≠learning guard | [EXTERNAL] + [DOCTRINE CONFLICT] if volume-only |
| **Dvoretsky** | Deep positional/endgame judgment | Wisdom stage; LOE-009 explanation depth | [EXTERNAL] + [DOCTRINE ALIGNED] partial |
| **Yusupov** | Test → explain → apply cycles | Observed→Explained→Replayed (CG-FLL-001) | [DOCTRINE ALIGNED] |
| **Kotov** | Candidate moves / tree of analysis | LOE-005 Simulation; think-aloud analogue | [DOCTRINE ALIGNED] |
| **Annotated Game Tradition** | Master commentary on key moments | Post-Game Review; ExplanationArtifact P1 | [DOCTRINE ALIGNED] partial |
| **Model Game Tradition** | Exemplar games as templates | Practice from trace anchors (CB-006) | [DOCTRINE ALIGNED] partial |
| **Soviet School** | Systematic study + competitive practice | Training Live + continuity H6 | [EXTERNAL] + [DOCTRINE ALIGNED] partial |

## Chess Pedagogy Review v1

### Recurring cross-tradition principles [EXTERNAL + INFERENCE]

| # | Principle | Doctrine support |
|---|-----------|------------------|
| PED-1 | **Graduated difficulty** | CB-006 proportionality; Training vs Friendly |
| PED-2 | **Pattern before principle** (often) | LOE-002 before LOE-009 |
| PED-3 | **Explanation after experience** | Post-Game mode; Show-Tell-Replay |
| PED-4 | **Repetition with variation** | Continuity H6; AN-4 anchors |
| PED-5 | **Judgment over memorization** | PP-3 understanding; Wisdom ≠ Knowledge |
| PED-6 | **Longitudinal development** | CB-000A; PI-2 |

### What traditions teach [INFERENCE]

| Layer | Traditions emphasize | ChessGuide doctrine |
|-------|---------------------|---------------------|
| **Knowledge** | Openings, themes, formulas | ChessKnowledge, knowledge refs |
| **Patterns** | Tactics, structures | LOE-002, observation capacity |
| **Capabilities** | Calculation, endgame technique | CFA Capability, SkillTransformation |
| **Judgment** | Positional choice, plan | Wisdom stage, LOE-007/008 |
| **Wisdom** | When to apply, risk assessment | ChessWisdom, normative guidance |

**Verdict:** Traditions teach **combinations** — ChessGuide doctrine **separates** layers more explicitly than most chess books.

## Conclusions (Phase 1)

| # | Conclusion | Class |
|---|------------|-------|
| P1-1 | External pedagogy **aligns** with integration-centric doctrine when repetition is integration-backed | [DOCTRINE ALIGNED] |
| P1-2 | Volume-only methods (naive Polgar) **conflict** with I-3 activity≠learning | [DOCTRINE CONFLICT] |
| P1-3 | Repository encodes **Buddy pedagogy** (CB-004) but not **named chess school ontology** | [DOCTRINE] |
| P1-4 | Yusupov/Kotov cycles map cleanly to pilot procedure | [DOCTRINE ALIGNED] |

## Open Questions (Phase 1)

| ID | Question |
|----|----------|
| OQ-PED1 | Should Chess Steps–style theme ladders be governance vocabulary? |
| OQ-PED2 | How much external pedagogy may inform ADR without becoming canon? |

---

# Part 2 — Didactics Review

## Repository State (Phase 2)

Committed: `review: phase-2 didactics review`

## Evidence Reviewed

CG-FLL-1E LOE/DOE, CG-FLL-002, CLOR Parts 3–5, CB-004, CFA-v1.0.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` | LOE catalogue, phases |
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Recognition criteria |
| `docs/governance/federation/CFA-v1.0.md` | Transformation Claim |
| `docs/reviews/ChessGuide-Learning-Ontology-Review-v1.0.md` | State vs outcome |

## Doctrine Sources

CG-FLL-1E, CG-FLL-002, CFA-v1.0.

## Runtime Sources

None.

## Chess Didactics Review v1

### Learning state vs transformation [DOCTRINE + INFERENCE]

| Term | Definition in ChessGuide | Class |
|------|-------------------------|-------|
| **Learning state** | **Not named** — nearest: chain stage + LOE profile on Actor over time | [IMPLICIT] |
| **Transformation** | Observable capability change; **claim** steward-gated (LOE-011, C4) | [DOCTRINE] |

> **Transformation = change from one learner state to another** — [INFERENCE] **valid didactic shorthand** if "learner state" means **capability + observation profile**, not single-episode performance.

### Fork progression example (didactic model)

| Stage | Learner state | Nearest LOE / doctrine | Class |
|-------|---------------|------------------------|-------|
| Does not recognize Forks | No LOE-002 for fork pattern | Observation gap | [INFERENCE] |
| Recognizes Forks | LOE-002 + LOE-001 shift | Pattern recognition | [DOCTRINE] |
| Uses Forks intentionally | LOE-003/004 + in-game application | Knowledge recall / accessibility | [DOCTRINE] |
| Creates fork-generating positions | LOE-008 Transfer + Wisdom judgment | Emergent capability | [DOCTRINE ALIGNED] |

### Target state description [PROPOSAL]

```text
Didactic Target State =
  (concept or pattern label)
  + (observable LOE signature)
  + (mode-appropriate evidence threshold)
  + (optional steward checkpoint)
```

**Not in repository today** — LOE events approximate states without formal state machine.

### Progression representation [DOCTRINE]

| Mechanism | Role |
|-----------|------|
| **LOE sequence** across Episodes | Primary progression witness |
| **Longitudinal Path** (CFA) | Interpretive recurrence read model |
| **focus_contract** anchor | Declared didactic intent |
| **Transformation tags** | Episode metadata — not claims |

## Conclusions (Phase 2)

| # | Conclusion | Class |
|---|------------|-------|
| P2-1 | Didactic **state machine** is **implicit** in LOE catalogue, not typed | [INFERENCE] |
| P2-2 | Transformation formula **aligns** if states = capability profiles | [DOCTRINE ALIGNED] |
| P2-3 | Progression should be **longitudinal**, not single-puzzle proof | [DOCTRINE] |
| P2-4 | **Didactic Target State** is useful [PROPOSAL] for orchestration | [PROPOSAL] |

## Open Questions (Phase 2)

| ID | Question |
|----|----------|
| OQ-DID1 | Formalize learner state as governance type or LOE read model? |
| OQ-DID2 | Minimum LOE bundle to declare "state achieved"? |
| OQ-DID3 | Who defines target states — steward, Buddy, or curriculum artefact? |

---

# Part 3 — Transformation Theory Review

## Repository State (Phase 3)

Committed: `review: phase-3 transformation theory review`

## Evidence Reviewed

CG-FLL-002, LEF-0E, CFA-v1.0, LEF-1C/1D/1E, CG-FLL-1E Part VII–VIII, CCNLAR.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessguide/CG-FLL-002-learning-semantics.md` | Integration, transformation evidence |
| `docs/governance/federation/studies/LEF-0E-integration-theory.md` | Channels, claims vs signals |
| `docs/governance/federation/CFA-v1.0.md` | Transformation Claim ladder |
| `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` | Replay, C4, Part VIII |

## Doctrine Sources

LEF-0E, CFA-v1.0, CG-FLL-002.

## Runtime Sources

None.

## Transformation Architecture Review v1

### Transformation typing [DOCTRINE]

| Candidate | Verdict | Evidence |
|-----------|---------|----------|
| **Process** | **Partial** — Integration is process; Transformation is not | LEF-0E |
| **Capability** | **Partial** — Transformation **targets** capability change | CB-000A |
| **Outcome** | **Strong** — observed capacity delta | CG-FLL-002 H5 |
| **Relationship** | **Weak** — steward-learner claim relationship | CG-FLL-1E C4 |

**Verdict:** [DOCTRINE] Transformation is primarily **outcome** (observed change) with **governed claim** as derived relationship — **not** a process noun (Integration owns process).

### Transformation Hypothesis evaluation

> Learning is an entertaining experience of a well-directed sequence of controlled transformations.

| Element | Assessment | Class |
|---------|------------|-------|
| **Controlled transformations** | Aligns with steward-gated LOE-011, phased pilot | [DOCTRINE ALIGNED] partial |
| **Well-directed sequence** | CB-003 phases; CFA ladder | [DOCTRINE ALIGNED] |
| **Entertaining experience** | H6/H7 engagement — amplifier, not proof | [DOCTRINE CONFLICT] if entertainment substitutes integration |
| **Learning = experience** | **Rejected** — activity≠learning | [DOCTRINE] |

### Conditions [DOCTRINE + INFERENCE]

| Type | Conditions | Source |
|------|------------|--------|
| **Produce** | Integration, continuity, optimal traversal, explicit LOE density | CFA, LEF-1D |
| **Block** | Activity without LOE; autonomy violation; engine flood | I-3, CB-004 |
| **Stabilize** | Stewardship replay; cross-episode LOE-004; C4 supported | CG-FLL-1E |

### External learning science (subordinate)

| Author | Transformation relevance | Class |
|--------|-------------------------|-------|
| **Waitzkin** | Deliberate practice cycles | [DOCTRINE ALIGNED] via modes |
| **Dweck** | Mindset — not in repo | [EXTERNAL] |
| **Locke** | Goals / focus_contract | [DOCTRINE ALIGNED] partial |
| **Csikszentmihalyi** | Traversal quality — not transformation proof | [DOCTRINE ALIGNED] reinterpreted |
| **Oakley** | Compression after integration | [NEW INSIGHT] CCNLAR |

## Conclusions (Phase 3)

| # | Conclusion | Class |
|---|------------|-------|
| P3-1 | Transformation is **outcome + claim**, Integration is **process** | [DOCTRINE] |
| P3-2 | Entertainment hypothesis **unsafe** without integration witness | [DOCTRINE CONFLICT] |
| P3-3 | Orchestration = **Capability Conditions + mode + LOE sequence** | [INFERENCE] |
| P3-4 | Stabilization requires **stewardship**, not episode spike | [DOCTRINE] |

## Open Questions (Phase 3)

| ID | Question |
|----|----------|
| OQ-TR1 | Can implicit transformation signals suffice for Buddy guidance without C4? |
| OQ-TR2 | Is "controlled transformation" a product term or steward term only? |

---

# Part 4 — Commentary & Annotation Review

## Repository State (Phase 4)

Committed: `review: phase-4 commentary and annotation review`

## Evidence Reviewed

CB-004, CB-005, CB-006 Post-Game, LEF-0C/0D, CG-FLL-1E LOE-009/DOE-006, FDS-001, CCNLAR Part 3.

## Files Reviewed

| File | Sections |
|------|----------|
| `docs/governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md` | Explanation hierarchy |
| `docs/governance/chessbuddy/CB-006-user-modes.md` | Post-Game Review |
| `docs/governance/federation/studies/LEF-0C-explanation-artifact-hypothesis.md` | Narrative vs durable why |
| `docs/governance/federation/studies/LEF-0D-epistemic-placement-of-explanation-artifact.md` | P1/P2 placement |
| `docs/governance/federation/FDS-001-dialogue-continuity-study.md` | Dialogue as continuity |

## Doctrine Sources

CB-004, LOE-009, LEF-0C/0D.

## Runtime Sources

None — no commentary artefact in code.

## Commentary Architecture Review v1

### Commentary forms vs doctrine

| Form | Repository mapping | Class |
|------|-------------------|-------|
| **Annotated games** | Post-Game + ChessReasoning summaries | [DOCTRINE ALIGNED] |
| **Master commentary** | Buddy Explain at hierarchy 2–3 | [DOCTRINE] |
| **Think-aloud** | DOE-006 Reflective Explanation; LOE-005 Simulation | [DOCTRINE] |
| **Coaching conversation** | DOE catalogue; FDS-001 dialogue | [DOCTRINE] |
| **Post-game analysis** | Post-Game Review mode | [DOCTRINE] |
| **Broadcasting** | **No doctrine** — entertainment risk | [EXTERNAL] |

### Observation → Reasoning → Narrative [DOCTRINE + INFERENCE]

```text
Observation (moves, eval)
  → Reasoning (ChessReasoning / LOE-009 why)
  → Narrative (reflection.recorded, story overlay)
  → ExplanationArtifact P1 (durable causal why — when required)
```

**Narrative** is **optional overlay**; **Explanation** is **integration mechanism**; **Reasoning** is **Understanding artefact**.

### Commentary Hypothesis

> The ability to narrate a game is an observable manifestation of integrated understanding.

| Assessment | Class |
|------------|-------|
| **Partially supported** — LOE-009, teaching LOE-010, post-game reflection | [DOCTRINE ALIGNED] |
| **Not sufficient** — narrative ≠ durable explanation (LEF-0C) | [DOCTRINE] |
| **Expert narrative** stronger signal than novice story | [INFERENCE] |

### Why stories over moves? [INFERENCE + EXTERNAL]

Strong players compress chunks into **causal arcs** (crisis, turning point) — aligns with CCNLAR Narrative Chunk [PROPOSAL]. Repository does not encode this pedagogically.

### Evidence eligibility

| Evidence type | Can serve as learning evidence? | Class |
|---------------|--------------------------------|-------|
| **Commentary text** | **Yes** — LOE-009, reflection.recorded | [DOCTRINE] |
| **Explanation quality** | **Yes** — steward DOE-008, C4 procedure | [DOCTRINE] |
| **Storytelling alone** | **Partial** — needs lineage to observation | [DOCTRINE] LEF-0C |

### Expert Narrative Hypothesis

> Expertise observable through ability to reconstruct and explain transformations within a game.

| Assessment | Class |
|------------|-------|
| Aligns with Replay R3–R5 + LOE-011 bundle | [DOCTRINE ALIGNED] |
| Requires steward or measured corroboration | [DOCTRINE] — not narrative alone |

## Conclusions (Phase 4)

| # | Conclusion | Class |
|---|------------|-------|
| P4-1 | Commentary **is** doctrine-relevant evidence when LOE-linked | [DOCTRINE] |
| P4-2 | Storytelling **supplements** but does not replace ExplanationArtifact | [DOCTRINE] |
| P4-3 | Post-Game Review is **primary commentary architecture** in product | [DOCTRINE] |
| P4-4 | Broadcast-style commentary **out of scope** for learning claims | [INFERENCE] |

## Open Questions (Phase 4)

| ID | Question |
|----|----------|
| OQ-COM1 | Score commentary quality or steward-qualitative only? |
| OQ-COM2 | Should think-aloud be mandatory LOE for Training mode? |
| OQ-COM3 | Commentary export boundary vs federation? |
