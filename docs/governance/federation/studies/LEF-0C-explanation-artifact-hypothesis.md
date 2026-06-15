# LEF-0C — Explanation Artifact Hypothesis Report

## Repository-Grounded Architectural Investigation (Governance Study)

| Field | Value |
|-------|-------|
| **Study ID** | LEF-0C |
| **Parent** | [LEF-0A](LEF-0A-architectural-interpretation-validation.md), [LEF-0B](LEF-0B-minimal-learning-explanation-experiment.md) |
| **Date** | 2026-06-04 |
| **Status** | Complete (evidence only) |
| **Scope** | ChessGuide repository: `docs/governance/**`, `src/**`, `README.md`, `FEDERATION.md` |
| **Constraints** | No code, governance, ADR, ontology, runtime, federation, or Creator proposals |

---

## 1. Executive Summary

LEF-0C tests whether **`LearningExplanation`** is the fundamental discovery from LEF-0B, or whether it is one specialization of a broader primitive:

```text
ExplanationArtifact =
  a first-class representation of the current best explanation
  for why a phenomenon occurred
```

### Hypothesis under test

```text
LearningExplanation ⊂ ExplanationArtifact
```

(subject = learning-relevant transformation; evidence weighted toward LearningTrace)

### Study outcome

**Outcome B — `ExplanationArtifact` appears to be a valid general architectural primitive; `LearningExplanation` is a specialization** (qualified).

| Qualification | Detail |
|---------------|--------|
| **Evidence strength** | Strong in **governance** (CB-000A chain, ALP, CG-FLL-1E, CB-005 events); **absent in runtime** (`src/` has no explanation persistence) |
| **Not federation** | `FEDERATION.md` explicitly excludes learning explanations from export — ExplanationArtifact remains **sovereign-local** |
| **Pedagogy split** | Live Buddy “explain” (CB-004) is **instructional**, not the same primitive as durable epistemic “best why” |
| **Falsification partial** | Many structures are **narrative / review / reflection** — ExplanationArtifact is justified only when **durable, supersedeable, evidence-bound** “best why” is required |

### One-line finding

The repository **repeatedly** produces “why did this happen?” content across **Understanding, reflection, steward verdicts, ALP phase reports, and transformation review** — but **never** names a unified artefact. That pattern is **broader than learning transformation**; `LearningExplanation` is the **FLL-1 / skill-transformation** instance of a general **`ExplanationArtifact`** shape already implied by LEF-0A and LEF-0B field analysis.

---

## 2. Existing Explanation Structures (Part 1)

### 2.1 Inventory (repository evidence)

| Structure | Location | Explanatory function | Explicit? | Structured? |
|-----------|----------|----------------------|-----------|-------------|
| **Understanding (chain stage)** | CB-000A, CB-002 `ChessReasoning` | Interpretation of observations | Stage name | Partial (RC-* chains in ALP-1) |
| **LOE-009 Explanation** | CG-FLL-1E Part II | Learner articulates *why* | Event type | Text / paraphrase |
| **DOE-006 Reflective Explanation** | CG-FLL-1E Part III | Process explanation in dialogue | Event type | Dialogue-linked |
| **reflection.recorded** | CB-005, CB-006 Post-Game Review | Perceived-state narrative | Event type | Free text |
| **ChessReasoning summaries** | CB-005 Episode field group | Post-hoc reasoning | Schema field | Unspecified shape |
| **Buddy explanation standards** | CB-004 § Explanation standards | Pedagogical “Why” at player level | Explicit rules | Procedural (not persisted artefact) |
| **Steward replay narrative** | CG-FLL-1E Part VII R3–R5 | Chain progression narrative | Procedural output | Narrative |
| **R6 replay verdict** | CG-FLL-1E Part VII | Reconstructable / partial / failed | Verdict enum | Not causal model |
| **C4 transformation verdict** | CG-FLL-1E Part VI, VIII | supported / qualified / not supported | Verdict | Qualifications text |
| **Transformation review** | CG-FLL-1E Part VIII | Maps draft claim → event IDs | Process | Procedural |
| **LOE-006 Error Recognition** | CG-FLL-1E | Why mistake was seen | Event | Move ref + explanation |
| **ALP phase reports** | ALP-1 Part IV (#3 Understanding, #7 Transformation) | Synthesis per chain phase | Deliverable title | Report sections |
| **ALP-2 stage explanations** | ALP-2 § Stage explanations | Meta-learning “why stage X” | Machine table | Structured prose |
| **ReasoningChains RC-*** | ALP-1 Phase 3 | Therefore-style inference | Named chains | Semi-structured |
| **TransformationRecords TR-*** | ALP-1 Phase 7 | Before/after + evidence | Records | Tabular |
| **Integration mechanisms** | CG-FLL-002 | Lists “Explanation” as mechanism | Vocabulary | Not an object |
| **Engine CP / hints** | `src/data/helper.ts`, `config.ts` | Tactical evaluation | Runtime | **Not learning explanation** (sovereign coaching) |

### 2.2 Runtime (`src/`)

| Finding | Evidence |
|---------|----------|
| **No explanation artefact** | Grep across `src/**/*.ts(x)` finds no explanation persistence; only federation **sovereignty exclusions** (`export_v1.py` blocks `coach`, `learning`, `reflection`, etc.) |
| **Reconstruction without explanation object** | `rules.replay(moves)` rebuilds position ([`src/data/rules.ts`](../../../src/data/rules.ts)) — history/diagnosis, not “best why” record |
| **Live pedagogy ≠ ExplanationArtifact** | `helper.ts` returns `cp` and move lines for hints — operational coaching, excluded from federation ([`FEDERATION.md`](../../../FEDERATION.md)) |

### 2.3 Explicit vs implicit vs repeated

| Verdict | Evidence |
|---------|----------|
| **Implicit dominant** | CB-000A assigns explanation to **Understanding** and steward layers — not a named persistence type |
| **Explicit local forms** | LOE-009, DOE-006, reflection events, ALP reports, C4 verdict |
| **Repeated pattern** | Same “articulate why” requirement appears in **episode events**, **pilot procedures**, and **ALP deliverables** — **isolated naming**, shared shape |

### 2.4 Part 1 conclusion

Explanations **exist widely** but are **fragmented** (inherits LEF-0B E-B1). The repository is **not** explanation-poor; it is **explanation-unified-poor**.

---

## 3. Explanation Pattern Analysis (Part 2)

### 3.1 Implicit “why” variants (names not used)

| Implicit type | Repository analogue | Evidence |
|---------------|---------------------|----------|
| **DecisionExplanation** | WA-* rejections (ALP-1); PI-gated template | “Why we rejected feature X” — reasoning change TR-2 |
| **OutcomeExplanation** | Game terminal + result in `Game.toString()` | Observation only in runtime — **no** attached “why outcome” object |
| **FailureExplanation** | LOE-006 Error Recognition | Learner identifies mistake + explanation |
| **TransformationExplanation** | CG-FLL-1E Part VIII; LOE-011 gate; C4 verdict | Multi-episode “why transformation” — **procedural** |
| **LearningExplanation** | LEF-0B candidate | Best causal why for **learning-relevant** transformation |

### 3.2 “Why did this happen?” recurrence

| Locus | Question form | Artefact today |
|-------|---------------|----------------|
| Post-episode | “What did you learn?” / “What surprised you?” | Reflection → LOE-009 |
| Steward C2 | Challenge strongest learning claim | DOE-007 dialogue |
| Replay R5 | Can transformation claim be re-derived? | Narrative + R6 verdict |
| ALP validation Q1 | “What did the machine learn?” | Free-text answer (Part V) |
| CB-004 PP-3 | “Does the player learn **why**?” | Acceptance principle |
| CG-FLL-002 | Integration via **Explanation** mechanism | Vocabulary only |

### 3.3 Part 2 conclusion

Repositories **do** contain implicit equivalents of multiple `*Explanation` types. **Only transformation-bound, trace-grounded, steward-validated “best why”** approaches the LEF-0B `LearningExplanation` intent; **other types** (pedagogy, phase reports, reflection) share **family resemblance** but differ in **subject** and **durability**.

---

## 4. Generalization Test (Part 3)

### 4.1 Common elements across explanation-like structures

| Element | Present? | Examples |
|---------|----------|----------|
| **subject** | Yes | Transformation claim, TR-* record, LOE-006 mistake, ALP stage, episode |
| **evidence** | Yes | Event IDs, trace refs, OR-/KR-/RC- IDs, move refs |
| **candidate causes** | Partial | CG-FLL-002 mechanisms; **not** schema-bound in CB-005 |
| **reconstruction** | Yes | Part VII replay; ALP replay test; `rules.replay` |
| **confidence** | Partial | IM-1 perceived vs measured; ALP “Measures” scores — **not** unified band |
| **falsifiers considered** | Weak in chess repo | LEF-0B cites DCF pattern **by reference in study text only** — no DCF code in this repository |

### 4.2 Proposed general shape (hypothesis, not schema)

```text
ExplanationArtifact {
  explanation_id
  subject_ref          # typed pointer: phenomenon under explanation
  evidence_refs[]
  candidate_causes[]   # or equivalent narrative field
  reconstruction_summary
  confidence
  falsifiers_considered[]
}
```

### 4.3 Mapping: LearningExplanation as specialization

| Field | General (`ExplanationArtifact`) | Specialized (`LearningExplanation`) |
|-------|--------------------------------|-------------------------------------|
| `subject_ref` | Any explainable phenomenon | **Must** reference learning-relevant **transformation** |
| `evidence_refs[]` | Any admissible evidence | **Weighted** to LearningTrace / LOE / DOE IDs |
| `falsifiers_considered[]` | Domain rules | Pilot falsifiers (activity_without_LOE, etc.) |
| Supersession | New best explanation | Same — must not mutate trace (LEF-0A) |

### 4.4 Part 3 conclusion

**Common explanatory pattern exists** in governance evidence. **`LearningExplanation` is not arbitrary** — it is the **intersection** of (a) transformation subject, (b) trace evidence, (c) steward replay procedure, (d) structured causal fields from LEF-0B.

---

## 5. Falsification Assessment (Part 4)

**Active falsification:** Is `ExplanationArtifact` unnecessary — are Review / Assessment / Reflection / Narrative / Commentary enough?

### 5.1 Collapse to Reflection / Narrative

| Test | Result |
|------|--------|
| LOE-009 + reflection = sufficient | **Partially sustained** for **perceived** single-episode why — **fails** for supersedeable steward-attested **best current** account |
| R3–R5 narrative = sufficient | **Falsified** for durability — narrative is **procedural output**, not addressable artefact (LEF-0A, LEF-0B) |

### 5.2 Collapse to Review / Verdict

| Test | Result |
|------|--------|
| C4 verdict = ExplanationArtifact | **Partially sustained** — verdict encodes **judgment**, not full **candidate_causes** + falsifier register |
| R6 replay verdict = explanation | **Falsified** — reconstructability ≠ causal why (CG-FLL-1E Part VII) |

### 5.3 Collapse to Understanding stage

| Test | Result |
|------|--------|
| Understanding stage subsumes all | **Falsified as persistence model** — stage is **chain position**; CB-005 stores ChessReasoning **inline**, not “current best explanation for phenomenon P” with supersession |

### 5.4 Collapse to Buddy pedagogy (CB-004)

| Test | Result |
|------|--------|
| Explain-before-dictate = ExplanationArtifact | **Falsified** — product **teaching** standard; ephemeral UX copy; federation explicitly **non-export** |

### 5.5 Collapse to ALP “Reports”

| Test | Result |
|------|--------|
| Understanding Report / Transformation Report = ExplanationArtifact | **Partially sustained** — reports are **phase deliverables** with overlapping content; **different lifecycle** (pilot synthesis vs domain causal record); **name collision risk** (LEF-0B C-B2) |

### 5.6 When ExplanationArtifact **is** unnecessary

If consumers only need:

- one-off learner reflection,
- live coaching copy, or
- a single steward verdict string,

then **no new primitive** is required.

If consumers need:

- queryable “best current why” for phenomenon P,
- supersession without trace mutation,
- explicit competing causes + falsifiers,

then **ExplanationArtifact is not redundant** with reflection or narrative alone.

### 5.7 Part 4 conclusion

**ExplanationArtifact is falsified as “everything explanatory.”** It **survives** as a **narrow** primitive: **durable, supersedeable, evidence-bound best why** — same survival conditions as LEF-0B’s `LearningExplanation`, **generalized by `subject_ref`**.

---

## 6. Boundary Analysis (Part 5)

| Domain | Owns explanation? | Evidence |
|--------|-------------------|----------|
| **Learning (process)** | No — integration (CG-FLL-002) | Distinct from explanation artefact |
| **Transformation (claim)** | Partial — tags / verdict, not causal model | CB-005, CG-FLL-1E Part VIII |
| **Review** | Partial — ALP validation Q&A; C4 | Not schema-unified |
| **Stewardship** | Primary **procedure** for attestation | CG-FLL-1E Part VI |
| **Understanding** | Primary **semantic home** in chain | CB-000A |
| **Replay** | **Mechanism** toward explanation | LEF-0A |
| **Federation** | **Does not own** explanation | FCI-5c export boundary |
| **Runtime coaching** | **Sovereign, non-export** | `src/`, FEDERATION.md |

### Primary boundary verdict

Explanation belongs to a **cross-cutting epistemic layer** anchored in **Understanding + Stewardship**, materialized **locally per domain** — **not** to LearningTrace (evidence), **not** to federation transport (continuity only).

```text
Evidence (trace) → Replay (reconstruction) → ExplanationArtifact (best why) → Transformation claim (verdict)
```

Aligns with LEF-0A forensic chain; **ExplanationArtifact names the missing middle persistence**.

---

## 7. Minimal Primitive Analysis (Part 6)

### 7.1 Smallest general primitive

| Field | Required? | Rationale |
|-------|-----------|-----------|
| `explanation_id` | **Yes** | Identity + supersession |
| `subject_ref` | **Yes** | Generalizes transformation-only ref |
| `evidence_refs[]` | **Yes** | Grounding — may be trace, episode, OR-ID, move ref |
| `candidate_causes[]` | **Yes** *or* single `explanation` narrative | Must distinguish hypothesis from verdict |
| `reconstruction_summary` | **Conditional** | Required when replay/steward procedure used |
| `confidence` | **Yes** | Ordinal / band — not truth |
| `falsifiers_considered[]` | **Yes** for steward-grade artefacts | Weak in chess repo today; required for forensic parity (LEF-0B) |

### 7.2 Fields unnecessary at general layer

| Field | Verdict |
|-------|---------|
| `learning_trace_refs[]` only | **Specialization** — use `evidence_refs[]` with profile |
| `observed_transformation_ref` only | **Specialization** — `subject_ref` + `subject_kind: transformation` |
| Long pedagogical copy | **Out of scope** — Buddy layer |
| Engine CP / eval | **Forbidden** in federation; not explanation artefact |

### 7.3 LearningExplanation minimal slice

Inherits general primitive + constraints:

- `subject_kind` = `learning_transformation` (or equivalent)
- `evidence_refs[]` must include ≥2 chain-stage events (CG-FLL-1E P5)

### 7.4 Part 6 conclusion

**Smaller than LEF-0B seven fields** loses falsifier or cause distinction. **Larger** without `subject_ref` generalization duplicates ALP report sprawl.

---

## 8. Evidence Summary

| ID | Finding |
|----|---------|
| E-C1 | Explanation-like content is **distributed** across ≥10 named structures (§2.1) |
| E-C2 | **No** first-class `Explanation*` type in CB-005 or `src/` |
| E-C3 | **Repeated** “why” pattern across events, procedures, ALP deliverables |
| E-C4 | `LearningExplanation` field set ⊆ general **`ExplanationArtifact`** with subject specialization |
| E-C5 | Runtime provides **observation + coaching only**; explanation is **governance-future** |
| E-C6 | Federation export **explicitly excludes** explanation — sovereignty preserved |
| E-C7 | Pedagogical explanation (CB-004) is **orthogonal** to epistemic ExplanationArtifact |

---

## 9. Contradictions

| ID | Contradiction | Resolution |
|----|---------------|------------|
| C-C1 | “Explanation” is both **chain stage** and **proposed artefact name** | Stage = process locus; artefact = **persisted best why** for a subject |
| C-C2 | ALP “Transformation Report” vs Transformation **tags** | Report = deliverable; artefact = causal record — different scope (extends LEF-0B C-B2) |
| C-C3 | General primitive vs **unnecessary proliferation** | Only justified when durability + supersession + evidence binding required |
| C-C4 | LEF-0B Outcome B vs LEF-0C Outcome B | **Compatible** — LEF-0B discovered domain gap; LEF-0C **reframes** name as specialization |

---

## 10. Open Questions

| ID | Question |
|----|----------|
| OQ-C1 | Should `subject_ref` use federation continuity IDs when subject is a completed game? |
| OQ-C2 | Is `subject_kind` enum required, or inferred from ref prefix? |
| OQ-C3 | Do ALP phase reports **migrate** to ExplanationArtifact profiles or stay pilot-only? |
| OQ-C4 | Minimum viable pilot: one `ExplanationArtifact` vs only `LearningExplanation`? |
| OQ-C5 | CB-005 amendment vs sidecar file for any explanation persistence? |

---

## 11. Conclusion

### 11.1 Outcome selection (Part 7)

| Outcome | Selected? |
|---------|-----------|
| **A — `LearningExplanation` is the correct abstraction; no broader concept** | **No** |
| **B — `ExplanationArtifact` valid; `LearningExplanation` specializes** | **Yes** (qualified) |
| **C — Insufficient evidence** | **No** for governance pattern; **Yes** for runtime/product commitment |

### 11.2 Answer to core hypothesis

```text
LearningExplanation  ≅  ExplanationArtifact
                       where subject is learning-relevant transformation
                       and evidence_refs are LearningTrace-weighted
```

The hypothesis **`LearningExplanation ⊂ ExplanationArtifact`** is **supported** by repository evidence. The repository already hosts **multiple explanation species** (reflection, phase report, verdict, reasoning chain) sharing a **common skeleton**; only the **transformation + trace** case was isolated in LEF-0B.

### 11.3 Architectural implication (no implementation)

| Layer | Role |
|-------|------|
| **ExplanationArtifact** | Sovereign, domain-local, durable “best why” |
| **LearningExplanation** | Profile for FLL-1 / skill transformation under CG-FLL-1E |
| **LearningTrace** | Evidence substrate — not explanation container (LEF-0A) |
| **Federation** | Transports continuity (e.g. completed game) — **not** explanation |

### 11.4 Recommended next step (out of scope)

If product owners accept Outcome B: define **`subject_kind` registry** in pilot docs before CB-005 schema work; prototype **one** `LearningExplanation` record as `ExplanationArtifact` instance — defer other species (FailureExplanation, etc.) until a second pilot demands them.

### 11.5 Governance rule compliance

| Rule | Status |
|------|--------|
| Study only | ✓ |
| No code / governance / ADR / ontology / runtime / federation / Creator | ✓ |
| Repository evidence over intuition | ✓ |

---

## Related

- [LEF-0A — Architectural Interpretation Validation](LEF-0A-architectural-interpretation-validation.md)
- [LEF-0B — Minimal Learning Explanation Experiment](LEF-0B-minimal-learning-explanation-experiment.md)
- [CG-FLL-1E — FLL-1 Execution Plan](../../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CB-005 — LearningTrace Product Schema](../../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CB-004 — Buddy Persona and Product Principles](../../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [FEDERATION.md](../../../FEDERATION.md)
