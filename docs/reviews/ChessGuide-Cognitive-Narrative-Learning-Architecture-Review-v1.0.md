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
