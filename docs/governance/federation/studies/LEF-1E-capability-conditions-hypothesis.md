# LEF-1E — Capability Conditions Hypothesis

## Governance Research Study (Traversal Environment Investigation)

| Field | Value |
|-------|-------|
| **Study ID** | LEF-1E |
| **Parent** | [LEF-1D](LEF-1D-flow-and-optimal-traversal-hypothesis.md), [LEF-1C](LEF-1C-path-quality-and-mastery-hypothesis.md), [LEF-0E](LEF-0E-integration-theory.md) |
| **Date** | 2026-06-04 |
| **Status** | Complete (evidence only) |
| **Scope** | ChessGuide repository; FIA-0 external reference |
| **Constraints** | No ADR, governance, runtime, scoring, federation, or Creator |

---

## 1. Executive Summary

LEF-1E investigates **Capability Conditions** — actor, environmental, and continuity factors that influence **traversal quality** without being **part of the path structure** in LearningTrace.

### Core answer

> **Can identical paths produce different capability outcomes because traversal conditions differ?**

**Yes** — supported by CB-006 modes, PI-3/PP-4 autonomy, attention/LOE capture differences, feedback/stewardship procedures, and continuity/recovery semantics (CG-FLL-002/003).

### Concept verdicts

| Concept | Verdict |
|---------|---------|
| **Capability Conditions** | **Useful interpretive layer** — not a schema primitive |
| **Traversal Quality ≠ Path Quality** | **Yes** — LEF-1C Path Quality is **path-linked outcomes**; Traversal Quality is **enactment under conditions** |
| **Flow** | Best as **C — outcome of aligned condition bundle**; not fundamental primitive |
| **Conditions → Path Potency** | **Partial** — via integration rate and LOE quality |
| **Conditions → Transformation timing** | **Partial** — signals earlier possible; claim gate unchanged |
| **FIA-0 repository grounding** | **Partial** — 5/7 dimensions mapped; energy/recovery thin in chessguide |

### Validated condition set (repository)

**Strong:** Attention, Autonomy, Feedback, Engagement (as context amplifier)  
**Partial:** Motivation, Recovery, Energy, Stress, Challenge Fit, Meaning, Persistence  
**Weak / not named:** Distraction (infer from modes + proportionality only)

### Placement (extends LEF-1D)

```text
Capability Conditions  →  Traversal Quality  →  Integration
  → Path Quality → Path Potency → Transformation Threshold → …
```

LearningTrace remains **evidence substrate** — conditions are **not exported** to federation (inherits FEDERATION.md).

---

## 2. Repository View of Conditions (Part 1)

### 2.1 What influences effectiveness without being the path?

| Influence class | Examples in repo | Part of path structure? |
|-----------------|------------------|-------------------------|
| **Actor state** | Focus, frustration (H6), perceived confidence | No — episodic metadata / events |
| **Product policy** | CB-006 mode, PI-3 autonomy, proportionality | No — governs traversal |
| **Pedagogy** | Buddy explain-on-request; Laris (future) | No |
| **Steward procedure** | C0–C4, replay, DOE-007 | No — external to move log |
| **Biological context** | Sleep, stress (listed); BioChronos **future** | No — cross-domain |
| **Temporal spacing** | Integration window; session spacing; H6 | No — between episodes |
| **Environmental** | Physical board first-class (PI-7); AMR path (CB-007 ref) | Partial — context, not trace field |

### 2.2 Part 1 conclusion

Repository **already assumes** non-path factors shape learning effectiveness — scattered across modes, hypotheses, and pilot procedure, **not unified** as Capability Conditions.

---

## 3. Traversal Conditions vs Path Structure (Part 2)

### 3.1 Distinction

| Term | Definition (interpretive) | Repo anchor |
|------|---------------------------|-------------|
| **Path structure** | Episodes, anchors, event graph, chronological custody | CB-005, LEF-1B |
| **Path Quality** | Path tends toward desirable integration **outcomes** (transfer, self-correction) | LEF-1C |
| **Traversal conditions** | Actor + context state during enactment | CB-006, PI-3, H6 |
| **Traversal Quality** | How effectively an episode is walked **under** those conditions | LEF-1D Optimal Traversal |

### 3.2 Same path, different conditions — evidence

| Variable held constant | Variable changes | Outcome change |
|------------------------|------------------|----------------|
| Same game line in history | Friendly vs Training mode | LOE density, hints, deviations (CB-006) |
| Same episode moves | Post-Game vs Live | Reflection, explanation depth |
| Same trace volume | Expert vs novice actor | Observation content (CG-FLL-002 table) |
| Same anchors | Orphan `activity.*` vs LOE | Integration claim fails (I-3) |

### 3.3 Part 2 conclusion

**Path ≠ Traversal Conditions** is **firmly supported**. **Traversal Quality** is **distinct from Path Quality** — correlated but not identical.

---

## 4. Attention (Part 3)

### 4.1 Repository concepts

| Concept | Source |
|---------|--------|
| Chain stage **Attention** | CB-000A, CG-FLL-002 chain |
| **LOE-001** Observation Shift | “Noticed what was missed” |
| **Attention log** | CB-005 optional episode field |
| **perceived.focus** | CB-005 focus contract ID |
| CG-FLL-001 targets | What attracts / misses attention |

### 4.2 Influence on integration quality?

| Verdict | **Yes** |
|---------|---------|
| Mechanism | Attention filters what enters Understanding/Knowledge (chain order) |
| LOE-001 is direct observability of attention integration |

**Salience** — not named; closest: opening recognized, LOE-001.

### 4.3 Part 3 conclusion

**Attention is a valid Capability Condition** — strongest repo-backed condition.

---

## 5. Autonomy (Part 5)

### 5.1 Repository concepts

| Concept | Source |
|---------|--------|
| **PI-3** | Player autonomy over moves and tempo (friendly live) |
| **PP-4** | Autonomy over automation (CB-004) |
| **CB-006** | Per-mode autonomy column |
| **Prohibitions** | Buddy never moves for human in friendly live |
| **Voluntary return** | H6/H7 engagement signals |

### 5.2 Influence on capability formation?

| Verdict | **Yes** |
|---------|---------|
| Evidence | Over-coaching risk R-2 (CB-004); engine flood breaks agency; Training respects on-request help |
| Ownership | PI-4 stewardship — player owns trace |

**Self-direction** — Practice mode from own trace; Teaching LOE-010.

### 5.3 Part 5 conclusion

**Autonomy is valid** — product invariant, not optional nice-to-have.

---

## 6. Feedback (Part 6)

### 6.1 Repository concepts

| Type | Source |
|------|--------|
| **Engine/hints** | Training Live on request; CP as Measured |
| **IM-1** | Measured vs Perceived gap naming (CB-000A, CB-004) |
| **Steward** | DOE-007 challenge, DOE-008 validated understanding, C1–C4 |
| **Replay** | R1–R6 reconstruction feedback loop |
| **Reflection** | reflection.recorded; post-game prompts |

### 6.2 Improves integration, path quality, transformation?

| Target | Verdict |
|--------|---------|
| **Integration** | **Yes** — feedback closes IM-1 gap, enables LOE-006/007 |
| **Path Quality** | **Yes** — transfer and self-correction categories need feedback |
| **Transformation quality** | **Yes** — C4 + replay required for LOE-011 |

**Review** (Fintech entity) — not chess native; steward procedure substitutes.

### 6.3 Part 6 conclusion

**Feedback is valid** — spans human, engine-reference, and steward layers.

---

## 7. Challenge Alignment (Part 7)

### 7.1 Repository evidence

| Signal | Source |
|--------|--------|
| Training vs Friendly difficulty of help | CB-006 |
| DOE-007 steward challenge | CG-FLL-1E |
| `move.deviation_from_reference` | Training mode |
| Practice from own trace | Adaptive repetition CB-006 |

### 7.2 Three-zone model (under / optimal / over)?

| Verdict | **Not explicit in repository** |
|---------|----------------------------------|
| Inferential | Under-challenge ≈ Friendly Live no hints + no LOE; over-challenge ≈ frustration H6 + abandonment; optimal ≈ Training + proportionality |

### 7.3 Part 7 conclusion

**Challenge Fit is partially valid** — **mode and steward** encode coarse alignment; **no** Goldilocks schema.

---

## 8. Recovery and Continuity (Part 8)

### 8.1 Repository concepts

| Concept | Source |
|---------|--------|
| **Continuity** | CG-FLL-003 definition; H6 > intensity |
| **Integration window** | CG-FLL-1E Part IX sleep/break/insight note |
| **Session spacing** | CG-FLL-001 continuity targets |
| **Biological** | Sleep, recovery, energy, stress listed (CG-FLL-002/003); H8 BioChronos future |
| **Event logging fatigue** | CG-FLL-1E risk — sustainability |

### 8.2 Degradation when continuity degrades?

| Verdict | **Yes (partial)** |
|---------|-------------------|
| Evidence | H6: intensity without continuity → activity without durable learning; unintegrated repetition; random practice (CG-FLL-003) |
| **Recovery** in chessguide is **thin** — noted, not operationalized |

### 8.3 Part 8 conclusion

**Continuity is valid**; **Recovery/Energy** valid as **continuity sub-conditions** with **weak chessguide encoding** (BioChronos deferred).

---

## 9. Motivation and Meaning (Part 9)

### 9.1 Motivation / engagement

| Signal | Source | Role |
|--------|--------|------|
| Curiosity, enjoyment, frustration | H6 CG-FLL-001 | Observation-stage signals |
| Intrinsic motivation | CG-FLL-003 engagement list | Amplifier |
| Positive engagement → continuity | CG-FLL-003 diagram | **Not proof of learning** (LEF-1A) |

**Verdict:** **Valid as condition amplifier**, not standalone proof.

### 9.2 Meaning / purpose

| Signal | Source |
|--------|--------|
| CG-001 product purpose | Longitudinal skill |
| LOE-009 why articulation | Understanding |
| PP-3 understanding over output | CB-004 |

**Verdict:** **Meaning partially valid** — feeds explicit integration (LOE-009).

### 9.3 Part 9 conclusion

**Motivation and Meaning** supported as **secondary conditions** — strengthen traversal when present, insufficient alone.

---

## 10. Capability Conditions and Flow (Part 10)

### 10.1 Options evaluation

| Option | Verdict |
|--------|---------|
| **A — Flow is a single capability condition** | **Weak** — repo has no Flow primitive |
| **B — Flow is a condition bundle** | **Strong** — matches LEF-1D FIA mapping |
| **C — Flow is outcome of aligned conditions** | **Strongest** — CB-006 “flow” = social rhythm when conditions for **play** align, not learning primitive |
| **D — Something else** | Expert compression as non-flow high potency |

### 10.2 Part 10 conclusion

**Flow = emergent outcome (C)** of aligned Capability Conditions; **Capability Conditions are more fundamental** than Flow (user hypothesis **supported**).

---

## 11. Capability Conditions and Path Potency (Part 11)

### 11.1 Hypothesized chain

```text
Capability Conditions
  → Traversal Quality
  → Integration (rate + depth)
  → Path Potency
```

### 11.2 Repository support

| Link | Evidence |
|------|----------|
| Conditions → Integration | H2 continuity increases integration; H7 mentorship accelerates; modes affect LOE capture |
| Integration → Potency | LEF-0E, LEF-1C |
| Conditions → Potency (direct) | Expert table: same reality, different observation without more moves |

### 11.3 Part 11 conclusion

**Supported partially** — cannot separate conditions from integration empirically in repo without pilot data; **conceptually coherent** with CG-FLL-003 and CB-006.

---

## 12. Capability Conditions and Transformation Threshold (Part 12)

### 12.1 Timing

| Effect | Verdict |
|--------|---------|
| **Earlier signals** | Plausible — optimal conditions → faster LOE-008/001 accumulation |
| **Not bypass claim** | CB-000A I-1, I-4; C4 still required |

### 12.2 Stability

| Effect | Verdict |
|--------|---------|
| **More stable change** | Plausible — continuity + recovery reduce noise (false spikes) |
| **CTV trend rules** | CB-000A R-3 — minimum N episodes |

### 12.3 Observability

| Effect | Verdict |
|--------|---------|
| **Better observability** | **Yes** — explicit integration under good conditions → clearer steward replay |

### 12.4 Part 12 conclusion

Conditions influence **threshold approach** and **signal quality**; **not** steward gate mechanics.

---

## 13. Contrasting Cases (Part 13)

| Case | Path | Conditions | Traversal / potency | Repo |
|------|------|------------|---------------------|------|
| **A — Strong + poor** | High episode count | Friendly, fatigue, distraction, no recovery | Low potency | CB-006, logging fatigue, I-3 |
| **B — Strong + excellent** | High count | Training, autonomy, feedback, spacing | High | Pilot ideal |
| **C — Weak + excellent** | Few episodes | Post-game depth, LOE-008/009 | Medium-high | LEF-1C C |
| **D — High activity + poor** | Volume | Wrong mode, over-coaching | Low | R-2, activity tags |
| **E — Moderate + excellent** | Moderate | Aligned challenge, meaning, attention | High | Model C, H2 |

**All supported interpretively.**

---

## 14. Candidate Capability Conditions Model (Part 14)

### 14.1 Full stack (LEF series synthesis)

```text
LearningTrace [evidence custody]
        ↓
Path Formation → Path Strength [structure — LEF-1B]
        ↓
Capability Conditions [actor + environment + continuity — LEF-1E]
        ↓
Traversal Quality [enactment — LEF-1D]
        ↓
Integration (implicit | explicit) [LEF-0E]
        ↓
Path Quality → Path Potency [LEF-1C]
        ↓
Transformation Threshold → Claim [LEF-1C/1E]
        ↓
Mastery Horizon [LEF-1C]
```

### 14.2 Condition bundle (minimum viable prose)

For stewards to note **per session or episode** (non-normative):

| Dimension | Observable proxy |
|-----------|------------------|
| Attention | LOE-001 present? focus contract active? |
| Autonomy | Mode respects PI-3? hints only on request? |
| Feedback | Timely IM-1 closure? steward touchpoint? |
| Challenge fit | Mode matches intent (train vs friendly)? |
| Recovery | Integration window noted? spacing sane? |
| Engagement | H6 signals without confusing for learning |
| Meaning | LOE-009 or reflection linked to goal |

### 14.3 Environmental note

**Physical/environment** conditions (board, camera, AMR) are **acknowledged** (PI-7, CB-007, CG-DEP-001) but **not** encoded in LearningTrace schema Draft 1 — **future track**.

---

## 15. Falsification Assessment (Part 15)

**Target:** Capability Conditions add nothing beyond path structure.

| Test | Result |
|------|--------|
| Explain A vs B with path strength only | **Fails** |
| Explain expert potency with same anchors | **Fails** — needs compression condition |
| Explain integration window without temporal condition | **Fails** |
| Explain mode matrix without policy condition | **Fails** |
| Collapse all into Path Quality | **Fails** — Path Quality is **outcome-oriented**, conditions are **input-oriented** |

### 15.1 Part 15 conclusion

**Capability Conditions survive** falsification as **necessary interpretive layer**.

---

## 16. Evidence Summary

| ID | Finding |
|----|---------|
| E-1E-1 | Twelve candidates audited; six strong/partial primary |
| E-1E-2 | Traversal Quality ≠ Path Quality |
| E-1E-3 | Flow best = emergent bundle outcome (C) |
| E-1E-4 | FIA-0 partial grounding (attention, autonomy, challenge, feedback, meaning strong; energy/recovery weak) |
| E-1E-5 | Stress/distraction listed or inferential only |
| E-1E-6 | Conditions not in federation export boundary |

---

## 17. Contradictions

| ID | Contradiction | Hold |
|----|---------------|------|
| C-1E-1 | Engagement required vs engagement ≠ learning | **Hold** — amplifier only |
| C-1E-2 | More feedback always better | **Hold** — proportionality, PP-4 |
| C-1E-3 | Biological conditions in docs but BioChronos not in chessguide runtime | **Hold** — future federation |

---

## 18. Open Questions (for LEF-1F / FIA grounding doc)

| ID | Question |
|----|----------|
| OQ-1E-1 | Steward **Capability Conditions checklist** in CG-FLL-1E? |
| OQ-1E-2 | Encode `traversal_conditions` note per episode (prose enum)? |
| OQ-1E-3 | BioChronos handoff schema for recovery/energy without sovereignty leak? |
| OQ-1E-4 | Challenge-fit rubric without numeric ratings? |
| OQ-1E-5 | Distraction as explicit LOE or DOE type? |

---

## 19. Conclusion

### 19.1 Success criteria

| Criterion | Verdict |
|-----------|---------|
| Capability Conditions useful? | **Yes** |
| Traversal Quality ≠ Path Quality? | **Yes** |
| Flow = condition bundle outcome? | **Yes (C)** |
| Conditions → Path Potency? | **Partial** |
| Conditions → Transformation timing? | **Partial** |
| FIA-0 repo grounding? | **Partial** |

### 19.2 Answer to core question

Identical paths **can** produce different capability outcomes because **Capability Conditions** differ — **modes, autonomy, attention, feedback, continuity/recovery, and engagement/meaning** are evidenced as **non-path layers** that shape **Traversal Quality** and thus **integration efficiency**.

**Flow is not the primitive.** **Aligned Capability Conditions** are — Flow is shorthand when the bundle coheres.

### 19.3 Recommended vocabulary

| Use | Avoid |
|-----|-------|
| Capability Conditions | Treating Flow as schema field |
| Traversal Quality | Conflating with Path Strength |
| Condition bundle checklist | Single “flow score” |

### 19.4 Compliance

Study only — no ADR, governance, runtime, federation, or scoring changes.

---

## Related

- [LEF-1D](LEF-1D-flow-and-optimal-traversal-hypothesis.md)
- [LEF-1C](LEF-1C-path-quality-and-mastery-hypothesis.md)
- [LEF-1A](LEF-1A-operationalizing-explicit-integration.md)
- [CB-006 — User Modes](../../chessbuddy/CB-006-user-modes.md)
- [CB-004 — Buddy Persona](../../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CG-FLL-003 — Learning Continuity Semantics](../../chessguide/CG-FLL-003-learning-continuity-semantics.md)
