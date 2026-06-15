# LEF-1A — Operationalizing Explicit Integration

## Governance Research Study (Operationalization & Observability)

| Field | Value |
|-------|-------|
| **Study ID** | LEF-1A |
| **Parent** | [LEF-0E — Integration Theory](LEF-0E-integration-theory.md) (LEF-0A–0D) |
| **Date** | 2026-06-04 |
| **Status** | Complete (evidence only) |
| **Scope** | ChessGuide repository: `docs/governance/**`, `src/**`, LEF series |
| **Constraints** | No ADR, governance edits, runtime, scoring, dashboards, federation, or Creator |

---

## 1. Executive Summary

LEF-1A asks: **what observable evidence would justify the claim “Explicit Integration occurred”?**

This is **observability before measurement** — no scores, no dashboards, no runtime.

### Core answer

Explicit Integration is **operationalizable** in this repository through **integration indicator families** mapped to existing **LOE / DOE events**, **chain-stage evidence**, **comparative narratives across episodes**, and **steward replay** — not through volume proxies (games played, time spent, document count).

### Thermometer analogue (interpretive)

| Abstract concept | Observable proxy (not a score) |
|------------------|-------------------------------|
| Temperature | Mercury expansion |
| **Explicit Integration** | **Multi-indicator bundle**: ≥1 learning-bearing event (LOE/DOE) **linked** to trace lineage, **distinguishable from** tagged `activity.*`, and **reconstructable** on replay where claims are made |

### Study outcome

| Criterion | Met? |
|-----------|------|
| Repository-grounded Explicit Integration | Yes (inherits LEF-0E + CG-FLL-*) |
| Observable indicator families (A–H) | Yes — mapped to LOE/DOE |
| Activity vs integration distinction | Yes — I-3, activity tags |
| Candidate operational model | Yes (§13) |
| Falsification criteria | Yes (§14) |

**Explicit Integration can be operationalized** — but only as **steward-inspected indicator bundles**, not single metrics.

---

## 2. Explicit Integration Revisited (Part 1)

### 2.1 Repository-supported meaning (from LEF-0E)

```text
Explicit Integration =
  capability change supported by
  explainable, inspectable, reconstructable evidence
```

### 2.2 Necessary (for a justified claim in governance)

| Requirement | Evidence |
|-------------|----------|
| **Learning-bearing events** | LOE or DOE — not bare `activity.*` alone (CG-FLL-1E I-3 / CG-FLL-001 I-3) |
| **Trace linkage** | Event IDs, episode anchors, chain stage mapping (CG-FLL-1E Part V) |
| **Distinction from activity** | Activity tags recorded separately; invariant I-3 |
| **Inspectability** | Narrative, anchor (FEN), dialogue, or steward paraphrase — “observed not scored” (Part IV) |
| **Reconstructability (for attested claims)** | Replay R1–R6; I-4 reconstruction from artefacts |

### 2.3 Unnecessary (for Explicit Integration to occur)

| Unnecessary | Evidence |
|-------------|----------|
| **ExplanationArtifact** | LOE-009 suffices episodically (LEF-0D P1); artefact required only for P2 durability |
| **Transformation claim** | Integration events precede LOE-011 |
| **Numeric scores** | CG-FLL-1E Part IV: comparative narrative, no score |
| **Runtime automation** | FGI-001: LOE/DOE planned, not fully in `src/` |

### 2.4 Differentiators

| Versus | Distinction |
|--------|-------------|
| **Activity** | Moves/sessions without LOE/DOE linkage = `activity.move` / `activity.session` (CG-FLL-1E) |
| **Exposure** | H8: exposure enables; integration makes durable — repetition without LOE = exposure not explicit integration |
| **Implicit Integration** | Pattern uptake without inspectable narrative (LOE-002 alone weak); expert compression without logged integration events |

### 2.5 Part 1 conclusion

Explicit Integration is **observable as evidence patterns**, not as a single counter. **Volume is never sufficient.**

---

## 3. State Change vs Activity (Part 2)

### 3.1 Candidate interpretations

| Option | Verdict | Evidence |
|--------|---------|----------|
| **A — Activity** | **Rejected** as definition | CG-FLL-002: activity ≠ learning; I-3 |
| **B — State Change** | **Partial** | Transformation = observable change; IM-1 Measured vs Perceived |
| **C — Process producing State Change** | **Strongest** | CG-FLL-002: Learning = integration **achieved**; recognition criteria require integration + transformation signals |
| **D — Episodic evidence of process** | **Complementary** | LOE events = snapshots of integration process along trace |

### 3.2 Part 2 conclusion

Operationalize Explicit Integration as **process evidenced by state-change indicators over episodes**, not as **activity counts**.

```text
Explicit Integration ≈ Process (integration)
                   evidenced by → State-change indicators (LOE/DOE + comparison)
                   distinguished from → Activity tags
```

---

## 4. Attention Integration (Part 3 — Family A)

### 4.1 Repository mappings

| Candidate indicator | LOE / evidence | Observable signal |
|--------------------|----------------|-------------------|
| **Attention Shift** | LOE-001 Observation Shift | “Noticed X previously missed” + optional FEN |
| **Attention Stability** | *Not named* — infer from repeated LOE-001 on same theme across episodes | Steward comparative note |
| **Attention Relevance** | Opening recognized (`opening.recognized` CB-005); LOE-001 aligned to focus contract (CB-005 `perceived.focus`) | Attention log + anchor |

### 4.2 Attention change vs ordinary observation

| Ordinary observation | Attention integration |
|----------------------|----------------------|
| `move.played` / game terminal | LOE-001: **delta in what is noticed** vs prior self or prior episode |
| Passive session | Tagged `activity.session` without LOE-001 |

**Distinction:** Integration requires **change in attention capacity or focus**, not mere registration of moves.

### 4.3 Part 3 conclusion

**Family A operationalizable** via LOE-001 (+ anchors). **Stability/relevance** require **cross-episode comparison** (Part IV pattern) — not single-episode counts.

---

## 5. Semantic Integration (Part 4 — Family B)

### 4.1 Repository mappings

| Candidate indicator | LOE / evidence |
|--------------------|----------------|
| **Vocabulary Expansion** | LOE-002 Pattern Recognition — verbal label + anchor |
| **Concept Accuracy** | DOE-008 Validated Understanding; steward challenge DOE-007 |
| **Definition Construction** | LOE-009 Explanation (why, not what); DOE-005 Model Refinement |

CG-FLL-001 observation targets: “Concept formation”, “Explanation quality” at Understanding phase.

### 5.2 How actors demonstrate

- Learner **names** structures (LOE-002)  
- Learner **articulates why** (LOE-009)  
- Steward **confirms or corrects** (DOE-008)  

### 5.3 Part 4 conclusion

**Family B operationalizable** through LOE-002, LOE-009, DOE-005/008 — **semantic** integration is **explicit** when articulated and anchorable.

---

## 6. Relational Integration (Part 5 — Family C)

### 6.1 Repository mappings

| Candidate indicator | LOE / evidence |
|--------------------|----------------|
| **Comparisons** | CG-FLL-002 integration mechanism “Comparison”; LOE-004 comparative recall |
| **Associations** | LOE-002 across positions; Knowledge refs (CB-005 opening IDs) |
| **Causal Links** | LOE-009; LOE-006 + explanation; RC-* chains (ALP-1) |
| **Cross-Domain Mapping** | LOE-008 Transfer; CG-FLL-002 simulation domains table (chess vs Finkairos analogy) |

DOE-003 Contradiction Identified — relational tension made explicit.

### 6.2 Part 5 conclusion

**Family C operationalizable** via LOE-008 (transfer), LOE-006/009 (causal), DOE-003, and cross-episode links in steward narrative.

---

## 7. Explanatory Integration (Part 6 — Family D)

### 7.1 Repository mappings

| Candidate indicator | Evidence |
|--------------------|----------|
| **Why Explanations** | LOE-009; DOE-006 Reflective Explanation |
| **Replayability** | CG-FLL-1E Part VII R1–R6; CG-FLL-001 I-4 |
| **ExplanationArtifact Production** | LEF-0D P2 — when durability/supersession required |

CG-FLL-001 success: **Explained** + **Replayed** + **Validated**.

### 7.2 How explanation functions as integration evidence

Explanation demonstrates that the actor **connected observations to causal structure** — integration mechanism per CG-FLL-002. It is **not** integration itself (LEF-0E) but **strongest explicit indicator** when present.

### 7.3 Part 6 conclusion

**Family D operationalizable** — **necessary for attested transformation claims**, **optional** for episodic explicit integration (LOE-009 alone may suffice).

---

## 8. Operational Integration (Part 7 — Family E)

### 8.1 Repository mappings

| Candidate indicator | Observation method |
|--------------------|-------------------|
| **Decision Change** | Wisdom-phase narrative; CB-005 wisdom refs (engine vs chosen delta) |
| **Behavior Change** | ALP TR-* (artifact domain); LOE-007 Self-Correction |
| **Performance Change** | IM-1 measured: blunder_count, eval_peak (CB-005) — **Measured**, not sole gate |
| **Skill Change** | LOE-011 Transformation Evidence; C4 verdict |

CG-FLL-1E Part VIII: improved judgment, self-correction.

### 8.2 How observed (not scored)

- **Comparative narrative** across episodes (LOE-004, Part IV)  
- **Steward maps** draft transformation to event IDs (Part VIII)  
- **Before/after** LOE-007 pairs  

### 8.3 Part 8 conclusion

**Family E operationalizable** — **performance proxies alone** are **insufficient** (could be luck — LEF-0B falsifier `outcome_luck`); must link to LOE lineage.

---

## 9. Transfer Integration (Part 8 — Family F)

### 9.1 Repository mappings

| Candidate indicator | LOE / evidence |
|--------------------|----------------|
| **Novel Context Transfer** | LOE-008 Transfer — cross-episode link required |
| **Generalization** | LOE-002 pattern across games; CG-FLL-001 “Recognition” target |
| **Adaptation** | LOE-007 after LOE-006; improved transfer category Part VIII |

Part IV indicator: “Greater transfer” → LOE-008.

### 9.2 Part 8 conclusion

**Family F operationalizable** via LOE-008 with **explicit cross-episode reference** — single-episode play does not demonstrate transfer.

---

## 10. Reflective Integration (Part 9 — Family G)

### 10.1 Repository mappings

| Candidate indicator | LOE / evidence |
|--------------------|----------------|
| **Self-Assessment** | `reflection.recorded` (CB-005); Phase 0 baseline goals (CG-FLL-001) |
| **Model Revision** | DOE-005 Model Refinement; DOE-004 Perspective Shift |
| **Error Correction** | LOE-006 + LOE-007 pair; Part VIII self-correction category |

Post-episode prompts (CG-FLL-1E Part IX): “What did you learn?” “What surprised you?”

### 10.2 Part 9 conclusion

**Family G operationalizable** — reflection **without** linkage to prior events is **Perceived-only** (IM-1); steward mapping to event IDs makes it **explicit integration evidence**.

---

## 11. Motivational Integration (Part 10 — Family H)

### 11.1 Repository mappings

| Candidate indicator | Repository support |
|--------------------|-------------------|
| **Goal Persistence** | Phase 0 grounding goals (CG-FLL-001); continuity targets |
| **Voluntary Re-engagement** | H6/H7; continuity cross-cutting (CG-FLL-001); session spacing |
| **Challenge Seeking** | *Weak explicit* — not LOE-typed |
| **SMART Goal Progression** | **Not found** in repository (no SMART vocabulary) |

CG-FLL-001: enjoyment, curiosity, frustration as H6 signals — record at Observation, not Transformation.

### 11.2 Motivation: evidence or amplifier?

| Role | Verdict |
|------|---------|
| **Evidence of integration** | **Weak alone** — engagement ≠ learning (CG-FLL-002) |
| **Amplifier** | **Supported** — H7 positive engagement increases continuity; supports conditions for integration |

### 11.3 Part 10 conclusion

**Family H partially operationalizable** as **continuity/engagement signals** — **cannot** establish Explicit Integration **without** LOE/DOE. Treat as **context**, not proof.

---

## 12. ExplanationArtifact Relationship (Part 11)

### 12.1 Evaluation

| Relation | Verdict |
|----------|---------|
| **Evidence of Explicit Integration** | **Yes (conditional)** — when P2 profile: durable, evidence-bound best-why |
| **Consequence of Explicit Integration** | **Yes (conditional)** — when audit/stewardship demands supersedeable record |
| **Both** | **Yes** — episodic integration (LOE-009) may **precede** artefact; artefact **crystallizes** explicit path for claims |
| **Neither** | **Rejected** — LOE-009 proves explicit integration **without** artefact |

### 12.2 Part 11 conclusion

```text
LOE-009 (why)     →  indicator of Explicit Integration
ExplanationArtifact →  strengthened evidence + audit substrate when claims are made
```

Not a thermometer alone — **one indicator family (D)**, not the whole instrument.

---

## 13. Candidate Operational Model (Part 12)

### 13.1 Repository-grounded flow

```text
Reality / Episode terminal
        ↓
Observation (registered: moves, time, result — may include activity tags)
        ↓
Evidence custody (LearningTrace: Actor → Episode → Event)
        ↓
Integration Indicators (LOE / DOE families A–H — ≥1, linked, not activity-only)
        ↓
Comparative inspection (cross-episode narrative; Part IV; IM-1 gap note)
        ↓
Replay (R1–R6 when claim or audit required)
        ↓
Assessment (steward: C1–C4; DOE-007/008; optional ExplanationArtifact P2)
        ↓
Explicit Integration Claim (steward assertion: “integration evidenced by {event IDs}”)
        ↓
[Optional] Transformation claim (LOE-011 after C4)
```

**Not a score pipeline** — each box is **qualitative inspection** with **falsifiers** (activity_without_LOE, outcome_luck per LEF-0B).

### 13.2 Minimum observable bundle (interpretive)

To justify **“Explicit Integration occurred”** in one episode or span:

| # | Condition |
|---|-----------|
| 1 | ≥1 **LOE** or **DOE** event recorded with ID |
| 2 | Event **not** solely `activity.*` |
| 3 | Event references **anchor** or **prior episode** where comparative |
| 4 | Steward or learner **narrative** makes integration mechanism visible (which family A–H) |
| 5 | If transformation-scale claim: **replay reconstructable** + **≥2 chain stages** in lineage (CG-FLL-1E P5) |

### 13.3 Mapping table (indicator families → LOE/DOE)

| Family | Primary LOE/DOE |
|--------|----------------|
| A Attention | LOE-001 |
| B Semantic | LOE-002, LOE-009, DOE-005, DOE-008 |
| C Relational | LOE-008, LOE-006, DOE-003 |
| D Explanatory | LOE-009, DOE-006, R6 + ExplanationArtifact P2 |
| E Operational | LOE-007, LOE-011, wisdom refs / judgment narrative |
| F Transfer | LOE-008 |
| G Reflective | reflection.recorded, DOE-004/005, LOE-006/007 |
| H Motivational | H6 notes (context only); continuity spacing |

### 13.4 Alternative considered

**Model: Integration = LOE-011 only** — **Rejected** — LOE-011 is **outcome bundle**, not integration process (LEF-0E).

---

## 14. Falsification Assessment (Part 13)

**Target:** Explicit Integration **cannot** be operationalized — all indicators are merely activity, participation, engagement, explanation, or performance.

| Collapse test | Falsified? | Why |
|---------------|------------|-----|
| All indicators = activity | **Yes** | I-3 + activity tags separate channel |
| All indicators = participation | **Yes** | DOE-007 challenge; steward must reject orphan activity |
| All indicators = engagement | **Yes** | H6 alone insufficient (CG-FLL-002) |
| All indicators = explanation | **Partial** | LOE-009 without behaviour change could be **verbal only** — falsifier: no LOE-007/008/011 linkage |
| All indicators = performance | **Yes** | outcome_luck; IM-1 gap; measured ≠ perceived |

### 14.1 Operationalization survives if:

Stewards apply **multi-family bundles** + **lineage** + **replay** — matching FLL-1 design.

### 14.2 Operationalization fails if:

Teams use **game count**, **time on site**, or **reflection volume** as proxies — **violates I-3** and CG-FLL-002.

---

## 15. Evidence Summary

| ID | Finding |
|----|---------|
| E-1A-1 | CG-FLL-1E LOE/DOE catalogue = operational vocabulary |
| E-1A-2 | I-3: activity ≠ learning without evidence linkage |
| E-1A-3 | Part IV: observability via comparison, not scoring |
| E-1A-4 | Eight families map to existing events with gaps (Attention Stability, SMART) |
| E-1A-5 | ExplanationArtifact strengthens Family D, not required for all explicit integration |
| E-1A-6 | Runtime stores games only — operationalization is **governance-forward** |
| E-1A-7 | Transformation categories Part VIII align with indicator families |

---

## 16. Contradictions

| ID | Contradiction |
|----|---------------|
| C-1A-1 | “Observed not scored” vs future product metrics (CB-005 IM-1 derived fields) — hold until product commits scores |
| C-1A-2 | Expert implicit integration vs pilot explicit requirements |
| C-1A-3 | CG-FLL-001 “Explained” before “Replayed” in one list vs CG-FLL-1E procedure order — capability vs artefact timing (LEF-0D) |

---

## 17. Open Questions (for LEF-1B+)

| ID | Question |
|----|----------|
| OQ-1A-1 | Minimum **count** of indicator families per Explicit Integration claim — or steward judgment only? |
| OQ-1A-2 | Should **Attention Stability** become LOE-012? |
| OQ-1A-3 | Can **IntegrationAssessment** name steward bundle without DCF import? |
| OQ-1A-4 | When does comparative narrative suffice without ExplanationArtifact P2? |
| OQ-1A-5 | Operationalize **implicit** integration observably (without learner articulation)? |

---

## 18. Conclusion

### 18.1 Answer to core question

**Observable evidence justifying “Explicit Integration occurred”:**

> A **traceable bundle** of learning-bearing **LOE/DOE** events (from families A–H), **linked** to episodes and anchors, **distinguished** from `activity.*`, optionally **compared** across episodes, and **replayed** when stakes require — with **ExplanationArtifact** when durable best-why is needed.

### 18.2 Thermometer analogue (final)

There is **no single scalar** — the “thermometer” is **steward inspection of a multi-indicator instrument** already sketched in CG-FLL-1E.

### 18.3 Success criteria

| Criterion | Met |
|-----------|-----|
| Repository-grounded Explicit Integration | ✓ |
| Observable indicator families | ✓ |
| Activity vs integration | ✓ |
| Candidate operational model | ✓ |
| Falsification criteria | ✓ |

### 18.4 Governance compliance

Study only — no implementation, scoring, or federation changes.

---

## Related

- [LEF-0E — Integration Theory](LEF-0E-integration-theory.md)
- [LEF-0D — Epistemic Placement](LEF-0D-epistemic-placement-of-explanation-artifact.md)
- [CG-FLL-1E — FLL-1 Execution Plan](../../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CG-FLL-002 — Learning Semantics](../../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-001 — First Domain Learning Pilot](../../chessguide/CG-FLL-001-first-domain-learning-pilot.md)
