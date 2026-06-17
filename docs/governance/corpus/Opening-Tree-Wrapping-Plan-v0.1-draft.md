# Opening Tree Wrapping Plan v0.1 Draft

| Field | Value |
|-------|-------|
| **Document ID** | OTWP-001 |
| **Title** | Opening Tree Wrapping Plan v0.1 Draft |
| **Version** | 0.1 |
| **Status** | Draft Plan |
| **Date** | 2026-06-17 |
| **Scope** | Governance / architecture plan only |
| **Depends on** | [ADR-002](../adr/ADR-002-sovereign-reference-model-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-005](../adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md), [ADR-006](../adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-008](../adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](../../reviews/System-Chess-Competence-Review-v1.0.md), [CRR-001](../../reviews/Corpus-Reference-Registry-Review-v1.0.md), [CSV-001](../../reviews/Corpus-Source-Verification-Review-v1.0.md), [MCRM-001](MVP-Corpus-Registry-Manifest-v0.1-draft.md), [FEDERATION.md](../../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft Plan / governance-architecture only.**

This document:

- Does **not** alter runtime.
- Does **not** create a machine-readable registry.
- Does **not** create JSON / YAML / Schema.
- Does **not** ingest or download external opening data.
- Does **not** activate **LARIS**.

It plans a **future semantic wrapping layer** only. The existing runtime opening tree remains canonical for the app until a future LLD and tests implement any wrapper consumer.

---

## Executive summary

- `src/data/openings.ts` and `src/data/openingdata.ts` already contain a useful runtime opening tree (~2,402 data lines).
- The tree should be **wrapped, not replaced**.
- Wrapping means mapping runtime paths / nodes / labels to governed `corpus_ref` entries such as `opening:*` and `eco:*`.
- The runtime tree remains **`source:runtime-opening-tree`**, with `license_status: unknown`, `provenance_status: partial`, `disposition: internal_artifact_only`.
- This plan **prepares** a later mapping artifact but does **not** create one yet.
- Future alignment with `source:lichess-chess-openings` (CC0, commit `51a55d956b7ed0b9cd7853893744b1ca39cd2a05`) may improve labels/ECO pins after governance review — **not** in runtime now.

---

## Governance baseline

| Document | Role |
|----------|------|
| **ADR-002** | `corpus_ref` semantic pointer — not evidence / federation export |
| **ADR-003** | Evidence may cite `corpus_ref` — citation ≠ integration |
| **ADR-004** | Claims require stewardship — opening label ≠ claim |
| **ADR-005** | DecisionTrace may cite `corpus_ref` / `decision_frame[]` |
| **ADR-006** | Buddy may surface opening refs pedagogically — not oracle |
| **ADR-007** | System competence may map positions to `corpus_ref`; engine ≠ corpus truth |
| **ADR-008** | **Accepted** — Corpus Reference Registry and Source Governance v1; D11–D12 versioning |
| **CRR-001** | Manifest field requirements, P0–P5, Creator continuity |
| **CSV-001** | `source:runtime-opening-tree` = internal_artifact_only; lichess-chess-openings CC0 verified |
| **MCRM-001** | Draft Manifest — `opening:*` / `eco:*` seeds, SourceReference table |

---

## Current runtime opening tree evidence

Inspected `src/data/openings.ts` (49 lines) and `src/data/openingdata.ts` (~2,402 lines). Runtime evidence only — not governance truth.

| Aspect | Finding |
|--------|---------|
| **Size / structure** | `openingdata.ts` is a single template-literal string `moves`; each line is one opening line. `openings.ts` parses it into a `San[]` tree. |
| **Exported constants/functions** | `openings.ts` exports `San` class, `tree: San[]`, `locate(moves)`, `sanText(san)`. `openingdata.ts` default-exports the `moves` string. |
| **SAN / labels / info** | Each `openingdata.ts` line: `"<space-separated SAN moves>/<label part 1>/<label part 2>"`. `San` nodes hold `san`, optional `info` (the two label parts joined as `part1/part2`), and `children`. |
| **`corpus_ref` IDs** | **None.** No `corpus_ref` field anywhere (grep: 0 matches). |
| **ECO codes** | **None.** No explicit ECO codes in data (grep: 0 matches). Opening family names only (e.g. `Sicilian/Najdorf`, `Ruy Lopez/Berlin defence`). |
| **Provenance / license metadata** | **None.** No license or provenance fields. |
| **Runtime behavior dependency** | Yes — `locate()` walks the tree for a SAN move list; `sanText()` returns a human label. App relies on these for opening display. |

Full opening data is **not** copied here; only structure and a few verified example paths (see MVP wrapping examples).

---

## Problem statement

ChessGuide needs to connect existing opening-tree runtime material to the new Corpus Reference Registry semantics **without** breaking runtime, inventing provenance, or treating labels as understanding.

---

## Design goals

- Preserve runtime behavior.
- Avoid data duplication.
- Add a semantic wrapper **outside** runtime.
- Keep opening labels as **pedagogical references**, not proof of understanding.
- Enable future System Chess Competence to map positions to `opening:*` / `eco:*`.
- Enable Buddy to explain opening names/plans **after** safety checks.
- Keep federation export clean.
- Keep Creator continuity by pinning versions / snapshots.

---

## Non-goals

- No runtime code change
- No opening tree refactor
- No JSON/YAML registry
- No schema
- No ingestion
- No external source download
- No PGN import
- No ECO correctness proof
- No tests
- No LLD
- No UML
- No LARIS
- No ADR change

---

## Source and provenance posture

Per CSV-001 / MCRM-001:

**`source:runtime-opening-tree`**

| Field | Value |
|-------|-------|
| source_type | `runtime_tree` |
| license_status | `unknown` |
| provenance_status | `partial` |
| disposition | `internal_artifact_only` |
| allowed_uses | `internal_wrap_map`, `pedagogical_reference` |
| restrictions | `not_eco_doctrine`, `not_external_license_verified`, `not_for_claim`, `not_federation_export` |

**`source:lichess-chess-openings`**

| Field | Value |
|-------|-------|
| Role | Optional future verified CC0 alignment source |
| license_status | `license_verified` (CC0) |
| commit pin | `51a55d956b7ed0b9cd7853893744b1ca39cd2a05` |
| Ingested in this task | **No** |
| Use | May support later `eco:*` / `opening:*` mapping **after** curation |

---

## Wrapping model overview

| Layer | Description |
|-------|-------------|
| **1. Runtime opening tree** | Existing code/data (`openings.ts`, `openingdata.ts`). **Unchanged.** Used by current app. |
| **2. OpeningTreeWrapRecord** | Future governance mapping record. Links a runtime path/node to `corpus_ref`. **Does not duplicate the move tree.** |
| **3. CorpusRef** | `opening:*`, `eco:*`, `plan:*`, `principle:*`. Versioned through `CorpusRegistryVersion`. |
| **4. System Chess Competence** | Future consumer. May read wrap records to build `PositionConceptMap`. **Must not write learner state.** |
| **5. Buddy** | Future pedagogical consumer. May cite refs after safety checks. **Must not claim mastery.** |

---

## Proposed OpeningTreeWrapRecord shape

Human-readable conceptual record — **not** JSON Schema.

| Field | Purpose |
|-------|---------|
| `wrap_id` | Stable ID for the wrap record |
| `runtime_source_id` | `source:runtime-opening-tree` |
| `runtime_file` | e.g. `src/data/openingdata.ts` |
| `runtime_path_key` | Stable key for the runtime node (see path key strategy) |
| `san_sequence[]` | Visible SAN move list |
| `uci_sequence[]` | Optional / future |
| `current_runtime_label` | Label derived from `San.info` (e.g. `Sicilian - Najdorf`) |
| `current_runtime_info` | Raw `info` string (e.g. `Sicilian/Najdorf, 6.f4`) |
| `proposed_corpus_refs[]` | All proposed refs for this node |
| `proposed_opening_ref` | e.g. `opening:sicilian_defense` |
| `proposed_eco_ref` | e.g. `eco:B90` (optional) |
| `related_principle_refs[]` | e.g. `principle:development`, `principle:center_control` |
| `source_refs[]` | `[source:runtime-opening-tree]` (+ optional future `source:lichess-chess-openings`) |
| `curation_status` | `draft_mapping` initially |
| `license_status` | `unknown` (artifact) |
| `provenance_status` | `partial` |
| `confidence` | `verified_runtime_path` \| `illustrative` \| `unverified` |
| `limitations[]` | `not_eco_doctrine`, `label_not_understanding`, `not_for_claim`, `not_federation_export` |
| `boundary_flags` | See below |
| `version` | CorpusRegistryVersion membership |
| `supersedes` | Prior wrap_id if renamed |
| `superseded_by` | Replacement if deprecated |
| `notes` | Curation notes |

**Boundary flags (defaults):**

```yaml
boundary_flags:
  not_evidence: true
  not_claim: true
  not_mastery: true
  not_federation_export: true
  not_learner_state: true
  not_engine_truth: true
  not_runtime_instruction: true
```

---

## Proposed stable path key strategy

| Option | Example | Pros | Cons |
|--------|---------|------|------|
| **A. SAN sequence path key** | `san:e4/c5/Nf3/d6` | Human-readable | Depends on SAN normalization |
| **B. Runtime node path index** | `node:0.3.1` | Simple relative to current tree | Unstable if tree shape changes |
| **C. Normalized move sequence hash** | `opening_path:9f2a…` | Stable if normalization defined | Less readable |
| **D. Hybrid** | `opening_path:<hash>` + visible `san_sequence[]` | Stable + readable | Requires defined normalization |

**Recommendation — Hybrid (D):**

- `runtime_path_key = opening_path:<hash>`
- store `san_sequence[]` visibly
- optional future `uci_sequence[]`
- **Do not implement hashing now** — normalization rules are a future LLD concern (OTWP-OQ-2).

---

## Proposed mapping fields

Each future mapping row should link:

- a runtime path → `opening:*` (required)
- optionally → `eco:*`
- optionally → `plan:*`
- optionally → `principle:*`
- **never** directly to evidence / claim / mastery
- **never** to federation export

---

## MVP wrapping examples

Illustrative table only — **not** a full map. SAN sequences below marked `verified_runtime_path` were confirmed present in `src/data/openingdata.ts`; ECO mappings are `illustrative` (no ECO codes exist in runtime data).

| proposed corpus_ref | example san_sequence (truncated) | source_refs | future optional source | curation_status | confidence | limitations |
|---------------------|-----------------------------------|-------------|-------------------------|-----------------|------------|-------------|
| `opening:sicilian_defense` | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6` | `source:runtime-opening-tree` | `source:lichess-chess-openings` | `draft_mapping` | `verified_runtime_path` (line 13, `Sicilian/Najdorf, 6.f4`) | not_eco_doctrine, label_not_understanding, not_for_claim, not_federation_export |
| `opening:ruy_lopez` | `e4 e5 Nf3 Nc6 Bb5 a6 Ba4 Nf6 O-O` | `source:runtime-opening-tree` | `source:lichess-chess-openings` | `draft_mapping` | `verified_runtime_path` (line 24, `Ruy Lopez/open, Howell attack`) | same |
| `opening:queen_gambit` | `d4 d5 c4 dxc4 Nf3 a6 e3 Nf6 Bxc4` | `source:runtime-opening-tree` | `source:lichess-chess-openings` | `draft_mapping` | `verified_runtime_path` (line 5, `QGA/Alekhine defence`) | same |
| `eco:A00` | (irregular openings — no single runtime path) | `source:runtime-opening-tree` | `source:lichess-chess-openings` | `draft_mapping` | `illustrative` (no ECO codes in runtime) | same |
| `eco:B90` | `e4 c5 Nf3 d6 d4 cxd4 Nxd4 Nf6 Nc3 a6` | `source:runtime-opening-tree` | `source:lichess-chess-openings` | `draft_mapping` | `illustrative` (SAN path verified for Najdorf at line 13; ECO label not present in runtime) | same |

**Note:** Exact runtime path keys are not asserted beyond verified SAN-line presence. ECO codes (`A00`, `B90`) are **not** present in runtime data; their assignment is a future curation step requiring `source:lichess-chess-openings` alignment.

---

## Runtime preservation rules

- Do **not** edit `openings.ts` / `openingdata.ts` in this wrapping plan.
- Do **not** duplicate the opening tree into the manifest or registry.
- Do **not** replace runtime labels yet.
- Do **not** add `corpus_ref` to runtime data yet.
- Future runtime integration requires **LLD and tests**.
- Existing behavior remains **canonical** for the app until a wrapper is implemented.

---

## CorpusRef relationship

- The opening wrapper maps runtime material to `corpus_ref`.
- `corpus_ref` is a **semantic pointer**, not evidence.
- Opening **label is not understanding**.
- ECO ref is **not proof of correctness**.
- Plan / principle refs are **pedagogical**.

---

## ECO relationship

- ECO codes are **references**, not correctness proof.
- `source:lichess-chess-openings` may later supply commit-pinned ECO / opening labels.
- The runtime tree source remains an **internal artifact** until mapped.
- Any disagreement between a runtime label and an external source must become a **curation issue**, never a silent replacement.

---

## Future lichess-chess-openings alignment

- The verified CC0 source from CSV-001 may support later alignment.
- Use the commit pin from CSV-001 / MCRM-001 (`51a55d956b7ed0b9cd7853893744b1ca39cd2a05`).
- **No download or import** in this task.
- A future alignment doc should compare runtime labels to external opening rows.
- Any mapping must preserve `source_refs` and `version`.

---

## Curation workflow

**Future statuses:** `draft_mapping` → `steward_reviewed` → `source_aligned` → `deprecated` → `superseded`.

**Curation steps:**

1. Identify runtime path.
2. Normalize SAN sequence.
3. Propose `opening:*` and optional `eco:*`.
4. Check against MCRM-001 seed refs.
5. Optionally compare to `source:lichess-chess-openings`.
6. Assign limitations.
7. Publish in a future manifest / registry version.
8. Preserve deprecated refs.

---

## Versioning and immutability

- Wrap records belong to a future **CorpusRegistryVersion**.
- Published mapping versions are **immutable**.
- Corrections create a **new version**.
- Deprecated refs remain **resolvable**.
- Creator must be able to interpret historical DecisionTrace records using **old mapping versions**.

---

## Relationship to System Chess Competence

| May | Must not |
|-----|----------|
| Read the wrapper | Write learner state |
| Map positions to `opening:*` / `eco:*` | Create mastery claims |
| Build `PositionConceptMap` | Export the wrapper |
| Use mapping as pedagogical context | Replace engine / reference lane |
| | Treat opening label as understanding |

---

## Relationship to Buddy Pedagogy

| May | Must not |
|-----|----------|
| Cite opening refs | Praise opening play that fails P1/P2 safety |
| Explain plans / principles | Claim mastery from recognizing an opening |
| Ask learner to self-explain | Impersonate learner rationale |
| Use opening context after safety checks | Cite unverified external source as doctrine |

---

## Relationship to DecisionTrace / EvidenceRecord / Claim

- DecisionTrace may include `corpus_ref[]` / `decision_frame[]`.
- EvidenceRecord may cite `corpus_ref`.
- Claim still requires **ADR-004 stewardship**.
- Wrapper citation is **not evidence** by itself.

---

## Relationship to Federation Export

Per [FEDERATION.md](../../../FEDERATION.md) and `export_v1.py`:

- No wrapper metadata in federation export.
- No `corpus_ref`.
- No `source_refs`.
- No opening label metadata.
- ObservationRecord remains a **terminal game slice only**.

---

## Relationship to Creator continuity

- Creator continuity needs **versioned** wrap records.
- Historical refs must resolve even if opening labels change.
- Preserve `runtime_path_key`, `corpus_ref` version, `source_refs`, `curation_status`.
- Do **not** flatten to free text.

---

## Migration phases

| Phase | State |
|-------|-------|
| **Phase 0 — Current state** | runtime tree exists; no wrapper; no `corpus_ref` in runtime |
| **Phase 1 — Governance wrap plan** | this document |
| **Phase 2 — Draft wrap mapping artifact** | governance markdown table; no runtime |
| **Phase 3 — Registry version publication** | machine-readable format decision after MCRM-OQ-1 |
| **Phase 4 — LLD and runtime integration** | future only |
| **Phase 5 — Tests and migration** | future only |

---

## Risks / anti-patterns

| Risk / anti-pattern | Mitigation |
|---------------------|------------|
| Treating runtime tree as doctrine | `internal_artifact_only`; not_eco_doctrine |
| Treating opening label as understanding | `label_not_understanding`; P4 after safety |
| Treating ECO code as proof | ECO = reference; correctness deferred |
| Silent replacement with external source | Disagreement → curation issue |
| Exporting opening metadata to federation | `not_federation_export` |
| Duplicating runtime tree | Wrap record references, never copies, the tree |
| Runtime refactor before LLD | Phases 4–5 future only |
| Collapsing source → corpus_ref → evidence → claim | ADR-002–004 boundaries; boundary flags |
| Breaking Creator historical continuity | Immutable versions; resolvable deprecated refs |

---

## Open questions

| ID | Question |
|----|----------|
| **OTWP-OQ-1** | What exact runtime path key should be canonical? |
| **OTWP-OQ-2** | Should mapping use SAN, UCI, FEN-after-move, or hash? |
| **OTWP-OQ-3** | Where should the future wrap mapping artifact live? |
| **OTWP-OQ-4** | Should wrap mapping become YAML or stay markdown first? |
| **OTWP-OQ-5** | How to reconcile runtime labels with `lichess-chess-openings`? |
| **OTWP-OQ-6** | Should ECO refs be required for every opening row? |
| **OTWP-OQ-7** | How to handle transpositions? |
| **OTWP-OQ-8** | How to version / deprecate renamed opening refs? |
| **OTWP-OQ-9** | What minimum mapping is needed before SCC LLD? |
| **OTWP-OQ-10** | How should Creator serve historical runtime path mappings? |

---

## Recommendation

1. PR for this wrapping plan.
2. Draft opening tree wrap mapping artifact.
3. `lichess-chess-openings` alignment review.
4. Lichess puzzle theme cross-walk governance doc.
5. Tactical Safety Scanner / System Chess Competence LLD.
6. UML package.

---

## Downstream work

| Work | Depends on |
|------|------------|
| PR for OTWP-001 | This draft |
| Draft wrap mapping artifact | Phase 2; OTWP-OQ-3 |
| lichess-chess-openings alignment review | CSV-001 commit pin |
| Lichess puzzle theme cross-walk | CSV-001 |
| Tactical Safety Scanner / SCC LLD | CRR-001, MCRM-001 |
| UML package | CRR-001 |
| Registry format decision | MCRM-OQ-1 |

---

## Governance boundary statement

**OTWP-001 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, ingest datasets, download sources, create corpus registry JSON/YAML, create JSON Schema, create LLD or UML artifacts, or **activate LARIS**.

It is a **human-readable governance / architecture plan** for a future semantic wrapping layer over the existing runtime opening tree.
