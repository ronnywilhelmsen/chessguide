# ADR-004 — Stewardship and Transformation Claim Gate v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-004 |
| **Title** | Stewardship and Transformation Claim Gate v1 |
| **Version** | 1.0 |
| **Status** | Accepted |
| **Date** | 2026-06-06 |
| **Scope** | Governance boundary for stewardship review and learning/integration/transformation claims (semantic only) |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CG-FLL-1E](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Accepted** — repository governance decision defining the **Stewardship and Transformation Claim Gate**: when ChessGuide may move from **evidence** to **integration** or **transformation claims** through stewardship review.

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
- Implementation files

---

## Context

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks **Episode** as sovereign learner-custody boundary. **LearningTrace** is evidence + custody, not learning.

[ADR-002](ADR-002-sovereign-reference-model-v1.md) (Accepted) separates domain corpus, learner custody, and derived pedagogical views. Federation withholding is strict.

[ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md) (Accepted) defines **LOE** (Learning Observation Evidence) and **DOE** (Demonstrated Observation Evidence) as unified **Evidence Records**. LOE/DOE support integration assessment but **do not prove integration**. **LOE-011** and the **Transformation Claim gate** were deferred to ADR-004.

**Doctrine context:**

- **Learning** = integration achieved (CG-FLL-002).
- **Activity is not learning.** Activity may become evidence when linked to LOE/DOE or dialogue evidence; learning remains integration achieved (CG-FLL-001 I-3; CG-FLL-002).
- **Transformation** is observable capacity change; **transformation claim** requires steward gate (CG-FLL-1E I-1, I-2; CFA Transformation Claim tier).
- **LOE-011** = steward-reviewed transformation evidence in CG-FLL-1E catalogue — not ordinary LOE (ADR-003 scope excludes LOE-011).
- **CFA Stewardship** subsumes C0–C4, replay, threshold signals, LOE-011 gate (CFA v1.0).
- **Federation** exports terminal completed-game `ObservationRecord` only — no claims (FEDERATION.md).
- **Buddy** = domain mentor (CB-004); **LARIS** dormant (CG-002; FDP-002).

**Runtime gap (LEF-2C):** Stewardship workflow, LOE-011, C0–C4, and claim records are governance-defined — not instantiated in `src/`.

### Problem statement

> When may ChessGuide move from captured evidence (ADR-003) to a governed **integration** or **transformation claim** — who attests, what lineage is required, what checkpoints apply, what Buddy may say, and what must never cross federation export — **without** implementing storage or automation?

---

## Decision

ChessGuide adopts **Stewardship and Transformation Claim Gate v1** — the governance boundary between **Evidence Records** (ADR-003) and **Claims** (integration or transformation), mediated by **stewardship review** and **C0–C4 checkpoints**.

### D1 — Stewardship definition

**Stewardship** is the governance act of **evaluating evidence lineage** before allowing a learning, integration, or transformation **claim**.

| Stewardship is | Stewardship is not |
|----------------|-------------------|
| Evidence-governance review | Coaching or teaching |
| Lineage and boundary gate | Scoring, ranking, or Elo judgment |
| Replay and contradiction check | Engine authority or CP decree |
| Verdict with limitations | Buddy authority without review |
| Protection from false/premature claims | Opaque automation of “mastery” |

Stewardship operates on learner-custody evidence under Actor / LearningTrace (ADR-001). It does not export to federation.

### D2 — Claim types

| Type | Definition | Strength | ADR |
|------|------------|----------|-----|
| **Evidence Record** | LOE or DOE observation/demonstration under custody | Evidence only — not a claim | ADR-003 |
| **Integration Claim** | Governed claim that evidence supports **learning = integration achieved** for a **bounded** capability, pattern, `corpus_ref`, focus contract, or episode-linked learning object | Narrower than transformation | ADR-004 |
| **Transformation Claim** | Governed claim that learner **capacity has changed** in an observable, replayable, sufficiently stable way | Stronger; requires richer lineage + C4 verdict | ADR-004 |
| **Mastery Claim** | Long-horizon capability state (CFA Mastery Horizon) | **Out of scope** — future ADR if needed | Deferred |

**Claim as hypothesis (not evidence):**

- A **Claim** is a governed **hypothesis / påstand** about learner integration or transformation.
- A **Claim** is **not** itself evidence.
- A **Claim** must be **evaluated against evidence lineage**.
- Evidence lineage is represented by ordered **`evidence_refs[]`**.

**Rules:**

- Claims are **stronger** than LOE/DOE Evidence Records.
- Integration Claim is **narrower** than Transformation Claim.
- Neither claim type equals federation export.
- Neither claim type persists Learning Frontier or learner state as sovereign aggregates (ADR-002 D3–D4).

**Unified Claim model (D7):** One **Claim** governance model with `claim_type: integration | transformation`. **Mastery Claim** remains out of scope / future ADR. **LOE-011** is a catalogue label for steward-gated transformation evidence — **not** a third claim type.

### D3 — LOE-011

**LOE-011** (CG-FLL-1E: Transformation Evidence) is **stewarded claim-level evidence** — not ordinary LOE capture (ADR-003 LOE-001–010).

| Property | Rule |
|----------|------|
| Role | Records that a **Transformation Claim** passed stewardship gate with cited lineage |
| Prerequisites | Prior LOE/DOE Evidence Records; C0–C3 passed; C4 verdict **accepted** with populated `limitations` when evidence is weak or bounded |
| Steward sign-off | Required (CG-FLL-1E I-2) |
| Lineage | ≥2 prior evidence records from different chain stages when possible (CG-FLL-1E) |
| Federation | Must not export |

LOE-011 is the **catalogue label** for steward-gated transformation evidence; the **claim gate** is defined by this ADR.

### D4 — Minimum lineage for claim eligibility

Governance minimums — not wire schema.

**Lineage grounding:**

- A **formal claim** is never grounded by an isolated Evidence Record alone.
- It is grounded by **evidence lineage**.
- For **Integration Claims**, the lineage may be **minimal and bounded**.
- For **Transformation Claims**, the lineage must be **stronger**, preferably multiple Evidence Records and multiple chain stages.

#### Integration Claim (formal)

Requires:

| Requirement | Rule |
|-------------|------|
| `episode_id` | Required |
| `evidence_refs[]` | **Required** — ordered lineage referencing at least one LOE or DOE Evidence Record |
| Evidence basis | At least one referenced LOE or DOE Evidence Record via `evidence_refs[]` |
| Grounding | Grounding reference on cited evidence (`event_id`, `anchor_id`, `corpus_ref`) **or** explicit `limitations` when incomplete (ADR-003 D4) |
| `claim_scope` | Bounded object: capability label, `corpus_ref`, focus contract, pattern, or episode-linked object |
| Stewardship | **C0, C1, and C2 completed**; **C4 verdict `accepted` required** for formal Integration Claim |
| C3 | Lighter than Transformation Claim unless contradiction exists — replay/contradiction check when triggered |
| Lineage note | Lighter than Transformation Claim (fewer prior records; single chain stage may suffice) but **still requires lineage** — not free text alone |

Pre-C4 language remains informal: “evidence suggests integration may be emerging” (D8).

#### Transformation Claim (formal)

Requires:

| Requirement | Rule |
|-------------|------|
| `evidence_refs[]` | **Ordered** lineage (ADR-003 D4) |
| Prior records | At least **two** prior Evidence Records when available |
| Chain stages | Evidence from **more than one chain stage** — **recommended**; steward may document exception |
| Single-episode / weak evidence | **Explicit `limitations` required** |
| Stewardship | **C0–C4 complete** with C4 verdict **`accepted`** |
| LOE-011 | Created only after C4 **accepted** per CG-FLL-1E transformation review process |

**No claim without lineage** (CG-FLL-1E I-1; ADR-003 D7).

### D5 — C0–C4 stewardship checkpoints

ADR-004 operationalizes stewardship checkpoints for **claim eligibility**. (CG-FLL-1E pilot timing may differ; this ADR defines **semantic gates**.)

| Checkpoint | Name | Purpose |
|------------|------|---------|
| **C0** | Custody and boundary | Evidence belongs to Actor / LearningTrace; `episode_id` exists; no federation, corpus-as-learned, or derived-state boundary violation |
| **C1** | Grounding | Grounding refs present when available; free text alone insufficient; `limitations` explicit when grounding incomplete |
| **C2** | Lineage | Claim based on ordered `evidence_refs[]`; more than one observation for integration/transformation claims; LOE-011 lineage rule when applicable |
| **C3** | Contradiction and replay | Evidence replayable enough to inspect; contradictions or failed demonstrations recorded; mixed evidence requires uncertainty/limitation on claim |
| **C4** | Stewardship verdict | Verdict issued with cited lineage, steward/source boundary, scope, and limitations; not federation export; not engine decree |

Checkpoints are **logical gates** — not a runtime pipeline (CFA core rule).

**Checkpoint requirements by claim type:**

| Checkpoint | Integration Claim | Transformation Claim |
|------------|-------------------|----------------------|
| **C0** | Required | Required |
| **C1** | Required | Required |
| **C2** | Required | Required |
| **C3** | Required when contradiction exists; otherwise lighter replay bar | Required |
| **C4** | Required for **formal** accepted claim | Required |

**Formal claims** (Integration or Transformation) require C4 verdict **`accepted`**. Weak, single-episode, or bounded evidence requires populated **`limitations`** on an **`accepted`** verdict — not a separate verdict type.

### D6 — Verdict vocabulary

Governance-level verdicts for C4 (and claim state):

| Verdict | Meaning |
|---------|---------|
| **accepted** | Claim permitted within `claim_scope` and `limitations` — weak or bounded evidence uses **`accepted`** with required `limitations`, not a separate verdict |
| **rejected** | Claim blocked |
| **deferred** | Evidence insufficient — gather more before re-review |
| **revoked** | Later contradiction or audit invalidated a prior accepted claim (D11) |

**Rules:**

- A **verdict** evaluates the **claim** against its cited **evidence lineage**.
- **`accepted`** does not mean “proven absolutely”; it means **accepted within `claim_scope` and `limitations`**.
- **`rejected`**, **`deferred`**, and **`revoked`** are also verdicts on the **claim-hypothesis**, not changes to the underlying Evidence Records.
- Verdict must cite `evidence_refs[]` or equivalent lineage.
- Verdict must identify **steward/source boundary** (human steward, learner self-attestation with steward review, tool-assisted review — see Open Questions).
- `accepted` does not imply unbounded mastery or permanent skill state.
- If evidence is weak, single-episode, or bounded, **`limitations` is required** on an **`accepted`** verdict.
- There is **no** separate `accepted_with_limitations` verdict — limitations are a field on **`accepted`**.

No runtime enum or JSON Schema in this ADR.

### D7 — Claim scope and limitations

Every **Claim** (Integration or Transformation) must define at governance level using the **unified Claim model**:

| Field | Purpose |
|-------|---------|
| `claim_id` | Stable identifier under Actor custody |
| `claim_type` | `integration` \| `transformation` |
| `actor_id` | Learner under custody |
| `claim_statement` | *(Optional governance field)* — the bounded **hypothesis / påstand** being evaluated |
| `claim_scope` | Bounded capability, `corpus_ref`, focus contract, pattern, or episode-linked object |
| `evidence_refs[]` | Ordered lineage to Evidence Records (and prior claims if applicable) |
| `steward_source` | Who/what performed review (governance label) |
| `verdict` | C4 outcome (D6) |
| `limitations` | Explicit uncertainty, single-episode caveats, IM-1 gaps, contradictions noted |
| `observed_at` / `decided_at` | Temporal ordering |

Claims without `limitations` when evidence is weak, single-episode, or contradictory are **invalid** at governance level.

### D8 — Buddy boundary before and after stewardship

#### Before stewardship (no accepted claim)

**Buddy may:**

- Say “evidence suggests…” or “evidence suggests integration may be emerging…” (pre-C4)
- Propose review, practice, focus, or further observation
- Reference LOE/DOE Evidence Records under custody
- Compute derived pedagogical views (ADR-002 D9) as **non-authoritative**

**Buddy must not:**

- Say learning achieved, integration achieved, transformation achieved, or mastery achieved
- Issue C4 verdict or LOE-011
- Generalize beyond observed evidence
- Activate LARIS or federation learning-dialogue role

#### After accepted stewardship

**Buddy may:**

- Refer to an **accepted claim** within its `claim_scope` and `limitations`
- Quote steward-qualified language proportionally (CB-004 PP-2, PP-5)

**Buddy must not:**

- Generalize beyond `claim_scope`
- Treat verdict as engine decree or permanent mastery
- Export or mirror claims to federation

Buddy remains **domain mentor**, not steward of record by default.

Buddy’s **derived pedagogical view** is **not** stewardship unless a future ADR explicitly designates Buddy as steward of record.

### D9 — Federation boundary

Must **not** cross federation export (reaffirm ADR-001, ADR-002, ADR-003, FEDERATION.md):

- Integration Claims, Transformation Claims, LOE-011
- Stewardship verdicts and C0–C4 audit records
- `evidence_refs[]`, `corpus_ref`, claim metadata
- Learner state, Learning Frontier, transformation metadata

**Exported only:** terminal completed-game **ObservationRecord** slice.

ADR-004 **does not modify** `export_v1` or federation fixtures.

### D10 — Anti-patterns

Explicitly forbidden:

| Anti-pattern | Rationale |
|--------------|-----------|
| Claim from raw activity alone | Activity is not learning (CG-FLL-001 I-3) |
| Claim from single ungrounded free text | ADR-003 D4 |
| Claim from engine CP / eval alone | CB-000; ChessWisdom ≠ measured alone |
| Claim from Buddy confidence tone | CB-004; not stewardship |
| Mastery from Elo/rating alone | CB-002 R-2 |
| Learning Frontier as claim object | Derived read model — ADR-002 D4 |
| Federation export of any claim | FEDERATION.md |
| Persisted learner state presented as claim | ADR-002 D3 |
| LARIS activation for claim attestation | CG-002; FDP-002 |
| Transformation without `limitations` | Weak evidence must be bounded |
| Irreversible claim without revocation path | D11 |
| LOE/DOE type label as proof of learning | ADR-003 anti-pattern |

### D11 — Revocation and audit

| Principle | Rule |
|-----------|------|
| **Auditability** | Claims and verdicts must remain inspectable with lineage |
| **Contradiction** | Later contradictory Evidence Records may trigger re-review (DOE-003 analogue) |
| **Revocation** | Prior **accepted** claim may move to **revoked** — governance state, not silent deletion |
| **Narrowing** | Claim may be superseded by narrower `claim_scope` with new verdict |
| **Lineage preservation** | Revocation appends audit record; does not erase Evidence Records or prior verdict history |

Replay procedure (CG-FLL-1E Part VII) informs C3; exact replay artefact shape is deferred to implementation ADR.

### D12 — Downstream ADRs

| ADR / future | Scope |
|--------------|-------|
| **ADR-005** | DecisionTrace / per-ply reasoning |
| **ADR-006** | Buddy Pedagogical Use of Reference Model — claim surfacing rules in product |
| **Future** | Claim record storage / wire schema / migration — after ADR-004–006 acceptance and explicit implementation phase |
| **Future** | `quality_flag` vocabulary (ADR-003 OQ-003-3) if needed for stewardship |
| **Future** | Mastery Claim ADR — if Mastery Horizon is operationalized beyond CFA label |

**Sequencing:** ADR-004 Accepted → ADR-005 / ADR-006 (may parallel) → implementation phase ADR.

### Semantic placement

```text
Evidence Records (LOE | DOE) — ADR-003
        │
        ▼ C0–C2 (Integration) or C0–C3 (Transformation) stewardship review
Integration Claim ──► C4 accepted ──► (optional path) ──► Transformation Claim
        │                                        │
        │                                        ▼ C4 accepted + LOE-011
        └────────────────────────────────────────┘
                        │
                        ▼ (Buddy may cite within scope — D8)
              Pedagogical reference only

Federation: Episode observation slice only — no claims
```

---

## In scope

1. Stewardship definition (D1).
2. Claim types: Integration, Transformation; LOE-011 (D2, D3).
3. Minimum lineage rules (D4).
4. C0–C4 checkpoints (D5).
5. Verdict vocabulary (D6).
6. Unified Claim model and identity fields (D7).
7. Buddy before/after boundaries (D8).
8. Federation withholding (D9).
9. Anti-patterns (D10).
10. Revocation and audit principles (D11).
11. Downstream ADR sequencing (D12).

---

## Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Runtime / `src/`** | Governance only |
| **Tests, APIs, UI** | Not in scope |
| **Federation export changes** | D9 |
| **JSON Schema, SQL, localStorage** | Implementation deferred |
| **Mastery Claim** | Future ADR |
| **DecisionTrace** | ADR-005 |
| **Buddy orchestration detail** | ADR-006 |
| **LARIS activation** | FDP-002 |
| **Graph DB / learner state persist** | ADR-002 |
| **Numeric transformation metrics** | CEAR: procedural strength |

---

## Alternatives considered

### Alt-1 — LOE-011 remains in ADR-003 as ordinary LOE

**Pros:** Single catalogue file.  
**Cons:** ADR-003 explicitly excluded LOE-011; conflates evidence and claim.  
**Rejected** — LOE-011 in ADR-004 (D3).

### Alt-2 — Buddy may issue transformation claims without steward

**Pros:** Faster product feedback.  
**Cons:** Violates CG-FLL-1E I-2; CB-004 anti-patterns; false mastery risk.  
**Rejected** — Buddy recommends; steward verdict required (D8).

### Alt-3 — Export transformation claims to federation

**Pros:** Cross-domain learning visibility.  
**Cons:** FEDERATION.md; ChessGuide retains learning.  
**Rejected** (D9).

### Alt-4 — Separate claim types without unified Claim model

**Pros:** Hard separation at storage layer.  
**Cons:** Duplicates identity, lineage, and verdict fields.  
**Rejected** — **Accepted:** unified Claim with `claim_type: integration | transformation` (D2, D7).

### Alt-5 — C0–C4 as strict runtime pipeline

**Pros:** Automatable workflow.  
**Cons:** CFA is logical dependency model, not pipeline.  
**Rejected** — logical gates (D5).

### Alt-6 — Collapse Mastery into Transformation Claim

**Pros:** Fewer terms.  
**Cons:** CFA Mastery Horizon is long-horizon label; CB-000A episodic vs longitudinal.  
**Rejected** — Mastery deferred (D2).

### Alt-7 — Claims without revocation path

**Pros:** Simpler storage.  
**Cons:** Contradiction handling undefined; audit failure.  
**Rejected** (D11).

### Alt-8 — `accepted_with_limitations` as separate verdict

**Pros:** Explicit weak-evidence signal in verdict enum.  
**Cons:** Duplicates `limitations` field semantics.  
**Rejected** — **`accepted`** with populated **`limitations`** (D6).

---

## Consequences

### Positive

- Closes ADR-001 → ADR-002 → ADR-003 → **ADR-004** governance chain for evidence-to-claim movement.
- Protects learners from false mastery and activity-as-learning (CG-FLL-001 I-3).
- Gives Buddy clear before/after language boundaries.
- Preserves federation export integrity.

### Negative / risks

- Stewardship adds friction — intentional for claim quality.
- C0–C4 semantic mapping differs from CG-FLL-1E pilot **timing** — auditors must read both.
- Runtime gap persists (LEF-2C).
- Steward actor model (human vs Buddy vs tool) needs future resolution (Open Questions).

### Unlocked downstream

| Work | Depends on |
|------|------------|
| ADR-005 DecisionTrace | Episode + evidence lineage |
| ADR-006 Buddy pedagogy | D8 boundaries |
| Claim storage implementation ADR | ADR-004 Accepted |
| LOE-011 capture design | D3, D4, D5 |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-004-1** | Formal naming among Claim / Verdict / audit records? | **Open** — D2/D6/D7 use terms above |
| **OQ-004-2** | Separate claim types vs unified Claim with `claim_type`? | **Decided:** unified Claim with `claim_type: integration \| transformation` (D2, D7) |
| **OQ-004-3** | Minimum EvidenceRecords for Transformation Claim beyond “two when available”? | **Open** — two when available minimum (D4; CG-FLL-1E) |
| **OQ-004-4** | Different chain stages required or recommended? | **Open** — recommended; steward exception documented (D4) |
| **OQ-004-5** | Who may act as steward in v1? | **Open** — human steward primary in CG-FLL-1E; learner/tool roles TBD |
| **OQ-004-6** | Can Buddy issue C4 verdict? | **Decided:** no by default — recommend only (D8) |
| **OQ-004-7** | How is revocation represented in wire format? | **Deferred** — verdict `revoked` + audit append (D11) |
| **OQ-004-8** | Mastery claims deferred? | **Decided:** yes — future ADR (D2) |
| **OQ-004-9** | Claim confidence field vs limitations only? | **Decided:** limitations + verdict only; no claim confidence score (D6) |
| **OQ-004-10** | First implementation artifact after ADR-004/005/006? | **Deferred** |
| **OQ-004-11** | Map ADR-004 C0–C4 to CG-FLL-1E pilot checkpoint timing? | **Open** — semantic vs pilot schedule |
| **OQ-004-12** | Must formal Integration Claims require C4 `accepted`? | **Decided:** yes — C0, C1, C2, C4 required; pre-C4 = “evidence suggests integration may be emerging” (D4, D8) |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Episode custody | ADR-001 Accepted | ADR | [DOCTRINE] |
| Evidence Records | ADR-003 Accepted | ADR | [DOCTRINE] |
| Unified Claim model | ADR-004 D2, D7 | ADR | [ACCEPTED] |
| Formal Integration Claim gate | ADR-004 D4, D5 | ADR | [ACCEPTED] |
| Verdict vocabulary | ADR-004 D6 | ADR | [ACCEPTED] |
| Buddy boundary | ADR-004 D8; CB-004 | ADR + Doctrine | [ACCEPTED] |
| LOE-011 → ADR-004 | ADR-003 D7; CG-FLL-1E | ADR + Doctrine | [DOCTRINE] |
| Learning = integration | CG-FLL-002 | Doctrine | [DOCTRINE] |
| Activity is not learning | CG-FLL-001 I-3 | Doctrine | [DOCTRINE] |
| I-1/I-2 LOE-011 invariants | CG-FLL-1E L205–206 | Doctrine | [DOCTRINE] |
| LOE-011 catalogue | CG-FLL-1E LOE-011 row | Doctrine | [DOCTRINE] |
| C0–C4 pilot checkpoints | CG-FLL-1E Part VI | Doctrine | [DOCTRINE] — timing |
| Lineage ≥2 stages | CG-FLL-1E L235 | Doctrine | [DOCTRINE] |
| Replay procedure | CG-FLL-1E Part VII | Doctrine | [DOCTRINE] |
| Transformation review | CG-FLL-1E Part VIII | Doctrine | [DOCTRINE] |
| CFA Stewardship tier | CFA v1.0 | Doctrine | [DOCTRINE] |
| Transformation Claim | CFA glossary; LEF-2A | Doctrine | [DOCTRINE] |
| Mastery Horizon separate | CFA; LEF-1C | Doctrine | [DOCTRINE] |
| Federation no claims | FEDERATION.md | Doctrine | [DOCTRINE] |
| Buddy persona | CB-004 | Doctrine | [DOCTRINE] |
| Buddy not steward default | CDIA SD-15; CG-002 | Doctrine | [DOCTRINE] |
| No stewardship in runtime | LEF-2C | Study | [RUNTIME GAP] |
| Evidence theory | CEAR Part 2 | Review | [DOCTRINE-aligned] |
| ADR-004 sequencing | ADR-003 D11 | ADR | [INFERENCE] |

---

## Downstream ADRs

See **D12**. ADR-004 does not subsume ADR-005 DecisionTrace or ADR-006 Buddy pedagogy.

---

## Related documents

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](ADR-003-loe-doe-evidence-record-schema-v1.md)
- [CB-004 — Buddy Persona & Product Principles](../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — First Domain Learning Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CFA v1.0](../federation/CFA-v1.0.md)
- [FDP-002 — Federation Development Strategy](../federation/FDP-002-federation-development-strategy.md)
- [LEF-0E — Integration Theory](../federation/studies/LEF-0E-integration-theory.md)
- [LEF-2C — Runtime Observability Study](../federation/studies/LEF-2C-runtime-observability-study.md)
- [FEDERATION.md](../../FEDERATION.md)
- [ChessGuide Epistemic Architecture Review v1.0](../../reviews/ChessGuide-Epistemic-Architecture-Review-v1.0.md)
- [ChessGuide Learning Ontology Review v1.0](../../reviews/ChessGuide-Learning-Ontology-Review-v1.0.md)
- [ChessGuide Discovery Integration Assessment v1.0](../../reviews/ChessGuide-Discovery-Integration-Assessment-v1.0.md)
