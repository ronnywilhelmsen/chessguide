# LEF-0B — Minimal Learning Explanation Experiment Report

## Experimental Domain Study (Governance-First)

| Field | Value |
|-------|-------|
| **Study ID** | LEF-0B |
| **Parent** | [LEF-0A](LEF-0A-architectural-interpretation-validation.md) |
| **Date** | 2026-06-03 |
| **Status** | Complete (evidence only) |
| **Scope** | ChessGuide / chessbuddy governance domain (primary); Fintech DCF cited for falsification only |
| **Constraints** | No governance edits, no ADRs, no ontology, no runtime, no federation/Creator proposals |

---

## 1. Executive Summary

LEF-0B tests whether a minimal conceptual artifact **`LearningExplanation`** adds explanatory power beyond existing repository structures.

### Primary question

Does `LearningExplanation` explain something not fully covered by Learning, LearningTrace, Replay, Review, or Transformation?

### Hypothesis under test

```text
LearningTrace        = evidence
Replay               = reconstruction mechanism
LearningExplanation  = current best causal explanation
                       for why a learning-relevant transformation occurred
```

### Experimental outcome

**Outcome B — `LearningExplanation` is distinct and useful** (with qualifications).

| Qualification | Detail |
|---------------|--------|
| **Domain scope** | Strongest for **ChessGuide skill / FLL pilot** governance — not proven necessary for Fintech DCF |
| **Form** | Conceptual / pilot artefact only — not committed as product schema |
| **Minimality** | Six-field representation justified; full candidate field list is partially redundant |

### One-line finding

Repositories **distribute** explanation across Understanding, reflection, steward procedures, and assessment narratives. They **do not** provide a **first-class, durable, falsifiable “best causal why”** object tied to an **observed transformation** and **LearningTrace references**. A minimal `LearningExplanation` fills that **semantic gap** without requiring federation or Creator changes at experiment time.

---

## 2. Existing Explanatory Structures (Part 1)

### 2.1 Where explanation currently lives

| Structure | Repo | Explanatory function | Explicit? |
|-----------|------|----------------------|-----------|
| **Understanding** | CB-000A chain stage; CB-005 `ChessReasoning` | Interpretation of observations | **Stage name** — implicit per episode |
| **Review** | Fintech DCF-1D `Review`, `ReviewReflection` | Evaluate one Outcome vs expected | **Explicit entity** — scoped to single Outcome |
| **Reflection** | CB-005 `reflection.recorded`; CG-FLL-1E post-episode prompts | Learner narrative | **Event type** — not causal model |
| **Stewardship** | CB-000A, CG-FLL-1E Part VI | Validation, challenge, C0–C4 checkpoints | **Process** — verdicts not unified object |
| **LearningAssessment** | Fintech `LearningAssessment.justification_narrative` | Why competence **claim** is warranted | **Explicit** — DCF competence, not chess SkillTransformation |
| **Learning (ChessGuide)** | CG-FLL-002 | Integration process | **Explicit semantics** — not explanation artefact |
| **Learning (DCF)** | DCF-2A | Competence trajectory **claim** | **Explicit** — epistemic, not causal “why” for transformation |
| **ALP phase reports** | ALP-1 §7 “Understanding Report”, “Transformation Report” | Machine synthesis on artefacts | **Deliverable titles** — meta-learning, not player skill |
| **Transformation tags** | CB-005 episode fields | Marks focus/milestone | **Tags** — not causal narrative |
| **Replay procedure** | CG-FLL-1E Part VII R3–R5 | Steward **narrates** chain from events | **Procedural** — output not schema-bound |
| **DOE dialogue** | CG-FLL-1E Part III | Challenge/explanation in dialogue | **Events** — episodic |

### 2.2 Explicit vs implicit

| Verdict | Evidence |
|---------|----------|
| **Distributed** | Explanation is **implicit** across chain stages (CB-000A) and **explicit** only in **local** forms (Review, reflection event, justification narrative). |
| **No unified “why transformation” object** | CG-FLL-1E Part VIII: learner **draft statement** + steward maps to event IDs + C4 **verdict** — causal content lives in **procedure + logs**, not a named persistence semantic (CB-005 has no `LearningExplanation`). |

### 2.3 Part 1 conclusion

Explanation **exists** in repositories but is **fragmented**. LEF-0A conclusion stands: LearningTrace is **not** the explanation container.

---

## 3. LearningExplanation Candidate Analysis (Part 2)

### 3.1 Candidate field set (from experiment brief)

```text
explanation_id
observed_transformation
learning_trace_references[]
candidate_causes[]
reconstruction
confidence
falsifiers[]
```

### 3.2 Coherence vs existing governance

| Field | Coherent? | Governance alignment |
|-------|-----------|----------------------|
| `explanation_id` | Yes | Matches UUID identity pattern (DCF entities, CB-005 episode IDs) |
| `observed_transformation` | Yes | Links to SkillTransformation / CG-FLL-1E transformation categories — **reference**, not duplicate Transformation ontology |
| `learning_trace_references[]` | Yes | CB-005 trace hierarchy; CG-FLL-1E LOE/DOE/event IDs |
| `candidate_causes[]` | Yes | Hypothesis list — aligns with CG-FLL-002 integration mechanisms; not in CB-005 today |
| `reconstruction` | Yes | Summarizes CG-FLL-1E Part VII replay outcome (R6 verdict + narrative) |
| `confidence` | Yes | Ordinal band — DCF-2D `ConfidenceBand`; CB-005 `perceived.confidence` — **not truth** |
| `falsifiers[]` | Yes | DCF-2A F1–F6, DCF-2E TF1–TF7 pattern — applicable at domain pilot |

**Verdict:** Concept is **coherent** and **does not violate** stated invariants (CB-005 I-1: no Transformation tag without terminal + CTV — LearningExplanation would **follow** transformation claim, not replace it).

### 3.3 Overlap assessment

| Existing concept | Overlap with LearningExplanation | Residual |
|------------------|-----------------------------------|----------|
| **Review (Fintech)** | Reflection on expected vs observed | Single Outcome; not multi-episode **why transformation** |
| **Learning (CG)** | Both concern learning | Integration **process** vs **causal model** for one transformation |
| **LearningAssessment (DCF)** | justification_narrative | Competence **claim** not skill transformation causality |
| **Steward C4 verdict** | Supported / qualified / not supported | **Verdict** without structured `candidate_causes` or supersession |
| **Replay (R6)** | reconstruction | **Mechanism + verdict** — not persistent best explanation |
| **reflection.recorded** | Learner text | Perceived only; no steward falsifier binding |

**Verdict:** **Partial overlap** — does not overlap **entirely**. Residual capability: **durable, structured, supersedeable best causal account** linking transformation ↔ trace evidence.

### 3.4 Rename vs new capability

| Test | Result |
|------|--------|
| Merely rename Review? | **No** — Review is Outcome-scoped (ADR-052). |
| Merely rename Learning? | **No** — CG-FLL-002 and DCF-2A define Learning differently. |
| Merely rename steward log? | **No** — logs are procedural; lack `candidate_causes[]`, falsifier binding, supersession. |
| New capability? | **Yes** — **synthetic causal explanation object** at domain level. |

---

## 4. Distinctiveness Assessment (Part 3)

### 4.1 Can the repository express this today?

**Target statement:**

```text
This is our best explanation for why this transformation occurred.
```

| Location | Can express? | Limitation |
|----------|--------------|------------|
| **CB-005 / runtime** | **No** as first-class | Game history + moves; no transformation causal object |
| **CG-FLL-1E Part VIII** | **Procedurally yes** | Spread across draft statement, event mapping, C4, LOE-011 — **not one queryable artefact** |
| **ALP Transformation Report** | **Partial** | ALP-7 report for **artifact** learning; different domain instance |
| **Fintech DCF** | **Partial** | `LearningAssessment` + E4 comparison — for **decision competence**, not chess SkillTransformation |
| **FDS / Laris** | **N/A** | Dialogue continuity — pedagogical, not transformation causality record |

### 4.2 What is missing?

| Gap | Description |
|-----|-------------|
| **G-1** | Named object for **current best causal why** (supersedeable) |
| **G-2** | Explicit **`candidate_causes[]`** distinct from event log |
| **G-3** | Binding **observed transformation ↔ trace refs ↔ replay reconstruction** in one record |
| **G-4** | **Falsifier register** attached to explanation, not only to claim verdict |

### 4.3 Explanatory power (something new?)

| New power | Provided by LearningExplanation? |
|-----------|----------------------------------|
| Query “why do we believe this transformation happened?” | **Yes** — single artefact |
| Compare competing causal hypotheses | **Yes** — `candidate_causes[]` |
| Supersede explanation without deleting trace | **Yes** — new `explanation_id`, same trace refs |
| Separate evidence (trace) from interpretation (explanation) | **Yes** — reinforces LEF-0A |
| Replace steward | **No** — steward still authors/validates |

### 4.3 Part 3 conclusion

**Distinct explanatory value: Yes** for ChessGuide/FLL domain. **Not** fully replaceable by existing structures without **loss of semantic precision**.

---

## 5. Falsification Assessment (Part 4)

Active falsification: *Could LearningExplanation be unnecessary?*

### 5.1 Against Learning

| Argument | Result |
|----------|--------|
| Learning already explains transformation | **Falsified** — CG-FLL-002: learning is **integration**; DCF-2A: learning is **claim**. Neither stores **best causal why** for a specific transformation episode. |

### 5.2 Against Review

| Argument | Result |
|----------|--------|
| Review suffices | **Falsified for chess domain** — Review (Fintech) evaluates **one Outcome**. Skill transformation in CB-000A is **trajectory** across episodes. CG-FLL-1E uses **multi-episode** steward review — no Review entity in chess repo. |

### 5.3 Against Replay

| Argument | Result |
|----------|--------|
| Replay is the explanation | **Falsified** — LEF-0A / CG-FLL-1E Part VII: replay is **reconstruction mechanism**; R3–R5 produce **narrative**, not durable best-explanation object. |

### 5.4 Against Transformation

| Argument | Result |
|----------|--------|
| Transformation includes explanation | **Falsified** — CB-005 Transformation **tags**; CB-000A SkillTransformation is **capacity delta**. Neither encodes **causal model**. |

### 5.5 Against Steward assessment alone

| Argument | Result |
|----------|--------|
| C4 verdict is enough | **Partially sustained** for **minimal pilot** — C4 could **produce** explanation content in free text. **Weakened** because: no **supersession**, no **candidate_causes** structure, no **machine/queryable** binding — fails minimality test for **repeatable** forensic use (LEF-0A §6). |

### 5.6 Fintech DCF bundle (domain falsification)

| Argument | Result |
|----------|--------|
| Learning + LearningAssessment + E4 narrative = sufficient | **Partially sustained** in **Fintech only** — `justification_narrative` + locked evidence approaches LearningExplanation. **ChessGuide has no equivalent bundle.** |

### 5.7 Part 4 conclusion

**LearningExplanation is unnecessary** as a **global federation primitive** — **not falsified** for **ChessGuide skill domain** where DCF entities do not exist and steward prose is the only near substitute.

**Falsification outcome:** Hypothesis survives for **domain-level** minimal artefact; **fails** as **rename** of any single existing concept.

---

## 6. Minimal Representation Proposal (Part 5)

### 6.1 Smallest useful representation

| Field | Required? | Rationale |
|-------|-----------|-----------|
| `explanation_id` | **Yes** | Identity + supersession |
| `observed_transformation_ref` | **Yes** | What is being explained (pointer to transformation verdict / LOE-011 / tag set) |
| `learning_trace_refs[]` | **Yes** | Evidence grounding (episode/event IDs) — LEF-0A |
| `candidate_causes[]` | **Yes** | Distinguishes hypothesis from verdict; enables comparison |
| `reconstruction_summary` | **Yes** | Replay output (R6 + short narrative) — bridge role |
| `confidence` | **Yes** | Epistemic humility (ordinal, not truth) |
| `falsifiers_considered[]` | **Yes** | Popper-aligned challenge register (DCF-2A pattern) |
| `steward_id` | Optional | Authorship |
| `superseded_by` | Optional | Explanation lineage |
| `narrative` (long form) | Optional | Can default to single `explanation` text if causes[] empty |

### 6.2 Minimal JSON-shaped example (illustrative only — not schema)

```json
{
  "explanation_id": "LE-001",
  "observed_transformation_ref": "TR-C4-2026-03-supported",
  "learning_trace_refs": ["EP-003", "LOE-006", "LOE-009", "DOE-007"],
  "candidate_causes": [
    "repeated_pattern_practice_without_hints",
    "post_episode_reflection_prompt"
  ],
  "reconstruction_summary": "replay reconstructable; chain gaps none",
  "confidence": "moderate",
  "falsifiers_considered": ["activity_without_LOE", "outcome_luck"]
}
```

### 6.3 What to omit (minimality)

| Omit | Why |
|------|-----|
| Federation IDs | Out of scope |
| Creator OAT fields | Out of scope |
| Scoring / calibration | Explicitly excluded |
| Full chain duplication | Reference trace, do not copy events |
| Techne / Qua labels | Not in repository |

### 6.4 Pilot-only binding (governance-first)

Recommended binding for **experiment only**:

- Authored at **C4** or immediately after **Part VII replay** (CG-FLL-1E).  
- **Supersedes** prior explanation on new evidence — does not mutate LearningTrace.  
- **Does not** replace LOE-011; follows supported transformation claim.

---

## 7. Evidence Summary

| ID | Finding |
|----|---------|
| E-B1 | Explanation is **distributed** — no first-class “best why” in CB-005 or runtime |
| E-B2 | CG-FLL-1E **requires** causal narrative in procedure but **does not schema-bind** it |
| E-B3 | LearningTrace + Replay + steward verdict **together** approximate but do not equal LearningExplanation |
| E-B4 | Fintech DCF **partially collapses** explanation into LearningAssessment — chess domain lacks this |
| E-B5 | Candidate field set is **coherent** with existing invariants |
| E-B6 | Six to seven fields are **necessary**; more is expansion |

---

## 8. Contradictions

| ID | Contradiction |
|----|---------------|
| C-B1 | CG-FLL-002 “learning requires transformation” vs treating explanation as **separate** artefact — resolved: integration is process; explanation is **model of why** transformation observed |
| C-B2 | ALP “Transformation Report” name collision — ALP report is **deliverable type**; LearningExplanation is **domain causal record** — different scope |
| C-B3 | Fintech may not need LearningExplanation — **domain split** required in any future adoption |

---

## 9. Open Questions

| ID | Question |
|----|----------|
| OQ-B1 | Should LearningExplanation be **steward-only** or **learner-draft + steward-approve** (CG-FLL-1E Part VIII pattern)? |
| OQ-B2 | One explanation per transformation vs per Actor trajectory? |
| OQ-B3 | Does LOE-011 subsume LearningExplanation if extended? |
| OQ-B4 | CB-005 schema amendment vs pilot-sidecar file? |
| OQ-B5 | Map to CTP interpretation step when federation matures? |

---

## 10. Conclusion

### 10.1 Outcome selection

| Outcome | Selected? |
|---------|-----------|
| **A — Unnecessary** | **No** (ChessGuide domain) |
| **B — Distinct and useful** | **Yes** (qualified) |
| **C — Insufficient evidence** | **No** — sufficient for governance experiment; insufficient for **product commitment** |

### 10.2 Answer to primary question

`LearningExplanation` **can** produce explanatory power **not fully represented** by Learning, LearningTrace, Replay, Review, or Transformation **in the ChessGuide governance domain**.

It is **not** a federation or Creator requirement for this experiment.

### 10.3 Hypothesis evaluation

| Leg | Verdict |
|-----|---------|
| LearningTrace = evidence | **Supported** (inherits LEF-0A) |
| Replay = reconstruction mechanism | **Supported** |
| LearningExplanation = best causal why for transformation | **Supported as useful domain concept** — **not** validated in runtime |

### 10.4 Recommended next step (not in scope)

If product owners accept Outcome B: **pilot-only** LearningExplanation records in FLL-1 folder **without** CB-005 amendment — evaluate in execution before schema promotion.

### 10.5 Governance rule compliance

| Rule | Status |
|------|--------|
| No governance modifications | ✓ |
| No ADR / ontology / runtime | ✓ |
| No federation / Creator proposals | ✓ |
| Techne / forensic frameworks | Not investigated ✓ |

---

## Related

- [LEF-0A — Architectural Interpretation Validation](LEF-0A-architectural-interpretation-validation.md)
- [CG-FLL-1E — FLL-1 Execution Plan](../../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CB-005 — LearningTrace Product Schema](../../chessbuddy/CB-005-learningtrace-product-schema.md)
