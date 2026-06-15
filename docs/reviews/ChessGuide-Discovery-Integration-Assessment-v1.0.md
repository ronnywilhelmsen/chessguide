# ChessGuide Discovery Integration Assessment v1.0

| Field | Value |
|-------|-------|
| **Assessment ID** | CDIA-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `review/discovery-integration-v1` |
| **Scope** | Repository integration, review classification, ADR-001 readiness — no implementation |
| **Authority** | Assessment only — does not adopt proposals or write ADRs |

---

## Repository State

| Item | Value |
|------|-------|
| **Assessment branch tip** | `review/chess-pedagogy-didactics-transformation-v1` @ `5446f92` |
| **main** | `fd1a44b` — `docs(federation): LEF-0B minimal Learning Explanation experiment` |
| **Divergence** | **47 commits** ahead of `main` on discovery tip |
| **Working tree** | Clean at assessment start |
| **Tags** | None |
| **ADRs in repo** | None |

```bash
git status    # clean
git branch -a # 4 review/* branches + feature/fci-5c-federation-export; all pushed to origin
git log main..review/chess-pedagogy-didactics-transformation-v1 --oneline  # 47 commits
```

### Branch topology (linear discovery chain)

```text
main (fd1a44b)
  └─ … governance + FCI-5c + LEF-0C–0E + LEF-1A–1E + LEF-2A–2C + CFA + LLD + CDESR
       └─ review/epistemic-architecture-v1 (7 phase commits + 1 SHA fix)
            └─ review/cognitive-narrative-learning-v1 (7 + 1)
                 └─ review/learning-ontology-v1 (7 + 1)
                      └─ review/chess-pedagogy-didactics-transformation-v1 (7 + 1)
```

**Merge implication:** One merge of **`review/chess-pedagogy-didactics-transformation-v1`** brings the full discovery stack. Separate merges of intermediate review branches are **unnecessary** and would be **redundant**.

### What is on main vs discovery tip

| Path | main | Discovery tip |
|------|------|---------------|
| `docs/reviews/` | **Absent** | **5 files** (~3,747 lines) |
| `docs/governance/federation/CFA-v1.0.md` | Absent | Present |
| `docs/governance/federation/studies/LEF-0C`–`LEF-2C` | Absent | Present |
| `docs/architecture/ChessGuide-LLD-v1.0.md` | Absent | Present |
| `src/chessguide/federation/` (FCI-5c export) | Absent | **+484 lines** |

### Chat-only discovery artefacts (not in repository)

| Artefact | Status |
|----------|--------|
| Repository Review Baseline (2026-06-06) | **Not committed** — referenced by reviews |
| Strategic Review v1.0 | **Not committed** — referenced by reviews |

Independent auditors must use **committed reviews** as primary evidence; baseline/strategic reviews are **context only** unless later archived.

---

## Review Inventory

| # | Review | ID | Branch | Tip commit | File | Phase commits |
|---|--------|-----|--------|------------|------|---------------|
| 0 | CDESR (end-state requirements) | CDESR-v1.0 | (on stack) | `a028711` | `Canonical-Domain-End-State-Requirements-Review-v1.0-ChessGuide.md` | 1 |
| 1 | Epistemic Architecture | CEAR-v1.0 | `review/epistemic-architecture-v1` | `74743d6` | `ChessGuide-Epistemic-Architecture-Review-v1.0.md` | 7 + SHA fix |
| 2 | Cognitive & Narrative Learning | CCNLAR-v1.0 | `review/cognitive-narrative-learning-v1` | `655d0ca` | `ChessGuide-Cognitive-Narrative-Learning-Architecture-Review-v1.0.md` | 7 + SHA fix |
| 3 | Learning Ontology | CLOR-v1.0 | `review/learning-ontology-v1` | `098e59d` | `ChessGuide-Learning-Ontology-Review-v1.0.md` | 7 + SHA fix |
| 4 | Pedagogy, Didactics, Transformation & Commentary | CPDTCR-v1.0 | `review/chess-pedagogy-didactics-transformation-v1` | `5446f92` | `ChessGuide-Chess-Pedagogy-Didactics-Transformation-Commentary-Review-v1.0.md` | 7 + SHA fix |

**Total review phase commits (excluding SHA fixes):** 29  
**Total review documents on tip:** 5 committed files

---

## Consolidated Classification Table

### Stable Doctrine

Findings supported **directly** by governance documents (CB-*, CG-FLL-*, CFA-v1.0, LEF-0E, FEDERATION.md). Reviews **synthesize** but do not supersede these.

| ID | Finding | Primary sources |
|----|---------|-----------------|
| SD-1 | **Learning = integration achieved** — not information received | CG-FLL-002 |
| SD-2 | **Activity ≠ learning** (I-3) | CG-FLL-001, CG-FLL-002 |
| SD-3 | **LearningTrace = evidence + custody** — not learning | LEF-0E, CB-005, CEAR |
| SD-4 | **Knowledge ≠ Learning ≠ Wisdom**; Wisdom normative (I-3) | CB-000, CG-FLL-002 |
| SD-5 | **Federation export** = completed-game ObservationRecord only | FEDERATION.md, CFA-v1.0 |
| SD-6 | **Trace hierarchy:** Actor → LearningTrace → Session → Episode → Event | CB-005 |
| SD-7 | **Integration** implicit \| explicit channels; claims need explicit trail | LEF-0E |
| SD-8 | **Transformation** observed ≠ claim; LOE-011 post-C4 | CG-FLL-1E, CFA-v1.0 |
| SD-9 | **Mastery Horizon** = long-horizon label — not chain stage | LEF-1C, CFA-v1.0 |
| SD-10 | **Stewardship** gates transformation claims; replay reconstructs | CG-FLL-1E Part VII |
| SD-11 | **ExplanationArtifact** orthogonal P1/P2 — not LearningTrace | LEF-0C/0D |
| SD-12 | **Buddy pedagogy:** Illuminate → Explain → Connect → Guide → Validate | CB-004 |
| SD-13 | **User modes** govern attention, capture, autonomy | CB-006 |
| SD-14 | **LOE/DOE catalog** as pilot evidence vocabulary | CG-FLL-1E |
| SD-15 | **Laris** = federation learning dialogue; **Buddy** = domain mentor | CG-002, FDS-001 |
| SD-16 | **Continuity** horizontal substrate across CFA tiers | CG-FLL-003, CFA-v1.0 |
| SD-17 | **OAT:** Observation (raw) ≠ Attention (filtered) | CB-000 I-6 |
| SD-18 | **Observed → Explained → Replayed → Validated** pilot procedure | CG-FLL-001 |

### Stable Inference

Findings supported by **multiple reviews** + repository evidence; **not** governance vocabulary until adopted.

| ID | Finding | Review support |
|----|---------|----------------|
| SI-1 | **Episode** is sovereign persistence boundary for ADR-001 | CEAR, CLOR, CPDTCR |
| SI-2 | **ADR-001 must exclude** chunk, narrative, Learning Opportunity, LLD-only types | CCNLAR, CLOR, CPDTCR |
| SI-3 | **Learner Graph** = Actor + LearningTrace hierarchy synthesis | CEAR, CLOR |
| SI-4 | **Learning Frontier** = corpus minus learner integration (useful gap name) | CEAR, CCNLAR |
| SI-5 | **Flow** = traversal quality bundle — not CFA primitive | CCNLAR, LEF-1D |
| SI-6 | **Smallest stable understanding unit** ≈ integrated semantic binding / Understanding artefact | CLOR |
| SI-7 | **Integration is process**; Transformation is outcome + claim | CLOR, CPDTCR, LEF-0E |
| SI-8 | **Recording ≠ remembering ≠ replaying** | CLOR, CEAR, LEF-0A |
| SI-9 | **Commentary** evidence-eligible when LOE-009 / replay linked | CPDTCR, LEF-0C |
| SI-10 | **Implementation should not proceed** without Episode ADR | CEAR, CLOR |
| SI-11 | **Runtime diverges** from governance (LEF-2C) — legacy `Game.toString()` episode | CEAR, LEF-2C |
| SI-12 | **Pedagogy/didactics orchestration** implicit in LOE + modes — not typed | CPDTCR |
| SI-13 | **Epistemology ~75–80%** complete for learning; ontology sufficient for ADR-001 scope | CEAR, CCNLAR, CLOR |
| SI-14 | **LearningJourney** (LLD) ≠ **LearningTrace** (doctrine) — do not merge in ADR | CLOR, LLD v1.0 |

### Proposals (not doctrine)

Findings **explicitly marked [PROPOSAL]** in reviews — **must not** be treated as accepted design.

| ID | Proposal | Source review | Blocks ADR-001? |
|----|----------|---------------|-----------------|
| PR-1 | **Knowledge Concept** (named type) | CEAR, CLOR | No |
| PR-2 | **Learner Graph** (named graph) | CEAR | No |
| PR-3 | **Learning Frontier** (governance term) | CEAR, CCNLAR | No |
| PR-4 | **Cognitive Chunk** | CCNLAR, CLOR | No |
| PR-5 | **Narrative Chunk** | CCNLAR, CLOR | No |
| PR-6 | **Experience** (activity without integration) | CCNLAR, CLOR | No |
| PR-7 | **Learning Opportunity** (Crow epistemology) | CCNLAR, CLOR | No |
| PR-8 | **Retrieval Cue** | CLOR | No |
| PR-9 | **Narrative Bridges** | CPDTCR | No |
| PR-10 | **Didactic Target State** | CPDTCR | No |
| PR-11 | **Transformation Architecture** (layered orchestration model) | CPDTCR | No |
| PR-12 | **Commentary Evidence Rubric** (LOE-009 quality) | CPDTCR | No |
| PR-13 | **Learning Ontology v1** five-layer model | CLOR | No |
| PR-14 | **Cognitive & Narrative Learning Architecture v1** (revised stack) | CCNLAR | No |
| PR-15 | **Show-Tell-Show** named loop (vs CG-FLL-001 procedure) | CCNLAR, CPDTCR | No |

---

## ADR-001 Readiness Assessment

### ADR under evaluation

**ADR-001: LearningTrace Episode Schema v1** — sovereign persistence boundary for Episode/Event/Anchor custody.

### Verdict

**[INFERENCE] READY TO DRAFT** — all four discovery reviews + CLOR conclude ADR-001 may proceed with defined scope boundaries. **No review identifies a blocker** that requires additional discovery before ADR **drafting**.

### Prerequisites satisfied (from reviews)

| Prerequisite | Source | Status |
|--------------|--------|--------|
| Learning ≠ trace | LEF-0E, CEAR Part 3 | Met |
| Episode vs Event distinction | CB-005, CLOR Part 2 | Met |
| Evidence vs integration separation | CEAR Part 2, CLOR | Met |
| Stewardship / claim gate understood | CFA, CG-FLL-1E | Met |
| Federation export boundary | FEDERATION.md, CFA | Met |
| Runtime gap documented | LEF-2C, CEAR | Met |
| Ontology primitives for Layer A identified | CLOR Part 6 | Met |

### Scope boundaries (mandatory for ADR-001)

| Include | Exclude |
|---------|---------|
| Actor, LearningTrace container reference | Cognitive Chunk fields |
| Episode identity, terminal semantics | Narrative Chunk / Narrative Bridge |
| Event stream minimum (moves, terminal) | Learning Opportunity entity |
| ChessAnchor rules (AN-1–4) | Mastery / Flow metrics |
| Legacy encoding migration note (CB-005 § Legacy) | Full LOE/DOE schema (optional refs only) |
| Federation export slice pointer | LLD `LearningJourney` as canonical name |
| IM-1 optional envelope | Didactic Target State machine |

### Remaining blockers

| Blocker | Severity | Notes |
|---------|----------|-------|
| **Governance** | None for ADR draft | ADR folder does not exist yet — expected |
| **Epistemic** | None | Unanimous across reviews |
| **Repository integration** | **Process** | Reviews not on `main` — auditors cannot use `main` alone |
| **Runtime** | Non-blocking for ADR | LEF-2C documents gap; ADR is target state |

### Open questions (carry into ADR, not discovery)

| ID | Question | Source |
|----|----------|--------|
| OQ-ADR1 | Session optional vs required in v1? | CB-005, CLOR OQ-INV2 |
| OQ-ADR2 | Minimum Event set per Episode? | CLOR OQ-OBS2 |
| OQ-ADR3 | LOE refs inline vs sidecar in Episode v1? | CEAR, CG-FLL-1E |
| OQ-ADR4 | `LearningJourney` naming in ADR vs CB-005 `LearningTrace`? | CLOR, LLD |
| OQ-ADR5 | Synthetic Practice Episode tagging? | CPDTCR, CB-006 |
| OQ-ADR6 | P1 ExplanationArtifact reference shape in Episode? | LEF-0D |

### Inputs from completed reviews (ADR-001 checklist)

| Review | ADR-001 input |
|--------|---------------|
| **CEAR** | Episode = sovereign boundary; Evidence Theory; LearningTrace role |
| **CCNLAR** | Exclude chunk/narrative; attention envelope deferred |
| **CLOR** | Layer A–B only; primitives list; Experience stays out |
| **CPDTCR** | Method/mode tags optional; commentary as optional LOE refs |
| **CDESR** | End-state object alignment |
| **LLD v1.0** | Informative target — **not** adoption without ADR |

---

## PR Recommendation

### Option A — Merge discovery stack into `main`

**Recommended.**

| Factor | Evidence |
|--------|----------|
| **Reproducibility** | `main` lacks all 5 review files and CFA/LEF-0C–2C/LLD that reviews cite |
| **Auditability** | 47-commit chain is linear; single merge tip sufficient |
| **Review stability** | Phase commits frozen; SHA-fix commits documented in each review |
| **Independent reviewer** | Cannot reproduce discovery from `main` today |

**Merge target:** `review/chess-pedagogy-didactics-transformation-v1` → `main` (one PR).

**Caveats (must disclose in PR body):**

1. **Not reviews-only** — merge includes LEF-0C–2C, CFA-v1.0, LLD v1.0, CDESR, and **FCI-5c** (`src/chessguide/federation/`). PR title should reflect **discovery milestone**, not "reviews only."
2. **Intermediate review branches** may be **retained read-only** after merge for commit archaeology; no need to maintain parallel development on them.
3. **This assessment** (`CDIA-v1.0`) should be **included in the same PR** or immediately follow on `main`.
4. **Chat-only** Baseline and Strategic Review remain outside repo — note in PR or add archival commit later.

### Option B — Retain review branches; continue discovery

**Not recommended.**

| Factor | Evidence |
|--------|----------|
| Discovery series **complete** per mandate (4 reviews × 7 phases) | All phase commits present |
| Further discovery **without ADR** risks proposal drift | CEAR, CLOR, CPDTCR all say proceed ADR-001 |
| `main` divergence **grows** audit cost | 47 commits already |
| No open discovery mandate | User directive closes discovery phase |

**Option B justified only if:** team rejects FCI-5c runtime inclusion and requires **split PRs** (governance+reviews vs runtime). That is a **merge tactics** refinement of Option A, not continued discovery.

---

## Tag Recommendation

If Option A merge completes:

```text
v0.1-discovery-complete
```

| Property | Value |
|----------|-------|
| **Points to** | Merge commit on `main` |
| **Meaning** | Discovery phase complete; reviews + prerequisite governance on main; ADR-001 authorized to draft |
| **Not** | Product release, schema adoption, or runtime parity claim |

**Alternative (if semver strict):** `discovery-2026-06-06` — date-stamped, non-semver.

**Annotate tag message with:**

- Review IDs: CEAR, CCNLAR, CLOR, CPDTCR, CDESR
- ADR-001 cleared for draft
- Proposals PR-1–PR-15 remain non-doctrine

---

## Next Governance Step

| Step | Action | Owner |
|------|--------|-------|
| **1** | Merge PR: `review/chess-pedagogy-didactics-transformation-v1` → `main` | Repository steward |
| **2** | Tag `v0.1-discovery-complete` on merge commit | Repository steward |
| **3** | Create `docs/adr/` (or repo ADR convention) — **first ADR draft only** | Governance |
| **4** | Draft **ADR-001: LearningTrace Episode Schema v1** per scope table above | Governance |
| **5** | Optional governance study: **Didactic Target State** (PR-10) — parallel, non-blocking | Governance |
| **6** | Defer Chunk Architecture ADR (PR-4) until after ADR-001 accepted | Governance |

**Do not:** begin new discovery reviews, encode proposals in runtime, or treat review proposals as doctrine without governance adoption.

---

## Assessment Conclusions

| # | Conclusion | Class |
|---|------------|-------|
| C-1 | Review series **should merge** to `main` via single PR from pedagogy tip | [INFERENCE] |
| C-2 | Milestone tag **`v0.1-discovery-complete`** recommended on merge | [INFERENCE] |
| C-3 | **Stable doctrine** = 18 items (SD-1–18); **stable inference** = 14 items (SI-1–14) | [INFERENCE] |
| C-4 | **15 proposals** (PR-1–15) remain non-doctrine | [INFERENCE] |
| C-5 | **ADR-001 has no epistemic blockers**; scope boundaries defined | [INFERENCE] |
| C-6 | **Epistemology + ontology sufficient** for architecture decisions at Episode boundary | [INFERENCE] |
| C-7 | **Transformation orchestration** sufficient for product principles, **not** for schema — follow-on governance | [INFERENCE] |

---

## Document Status

```text
Discovery Integration Assessment — repository recommendation record
```
