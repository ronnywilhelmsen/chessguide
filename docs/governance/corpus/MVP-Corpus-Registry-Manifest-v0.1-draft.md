# MVP Corpus Registry Manifest v0.1 Draft

| Field | Value |
|-------|-------|
| **Document ID** | MCRM-001 |
| **Title** | MVP Corpus Registry Manifest v0.1 Draft |
| **Version** | 0.1 |
| **Status** | Draft Manifest |
| **Date** | 2026-06-17 |
| **Scope** | Governance / manifest draft only |
| **Depends on** | [ADR-008](../adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md), [CRR-001](../../reviews/Corpus-Reference-Registry-Review-v1.0.md), [CSV-001](../../reviews/Corpus-Source-Verification-Review-v1.0.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](../../reviews/System-Chess-Competence-Review-v1.0.md), [SCC-HLD-001](../../architecture/System-Chess-Competence-HLD-v1.0.md), [FEDERATION.md](../../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |
| **CorpusRegistryVersion** | `corpus-registry/mvp-0.1-draft` (proposed — not published runtime) |

---

## Status

**Draft Manifest / governance-only.**

This document is a **human-readable design manifest** for the first ChessGuide Corpus Reference Registry MVP. It does **not**:

- Create runtime registry files in `src/`
- Create JSON Schema or SQL
- Ingest, download, or mirror external datasets
- Implement runtime scanners, engines, or Buddy orchestration
- Create LLD or UML artifacts
- Activate **LARIS**

Future registry implementation must treat this manifest as **steward-curated draft vocabulary** — not learner evidence, not mastery, not federation export.

---

## Executive summary

The **MVP Corpus Registry Manifest v0.1** is **internal-first** and **governance-only**.

| Aspect | MVP posture |
|--------|-------------|
| **Primary internal source** | `source:runtime-opening-tree` — `internal_artifact_only`, partial provenance |
| **Hand-curated vocabulary** | 12 `decision_frame:*` + 13 `tactic:*` seeds (no external `source_refs`) |
| **Opening / ECO labels** | 3 `opening:*` + 2 `eco:*` — linked to runtime tree only; not external doctrine |
| **Principles / plans** | 4 `principle:*` + 1 `plan:*` — steward-curated |
| **Tablebase / endgame refs** | 2 `tablebase:*` + 2 `endgame:*` — `source:syzygy-tablebases` as **restricted_reference_only** |
| **Verified CC0 sources** | `source:lichess-chess-openings`, `source:lichess-puzzles` — **optional future links** with snapshot pins; **no ingest** |
| **Deferred** | TWIC, Caissabase, bulk Lichess, Syzygy binaries, PGN archives, ADR-008 acceptance |

**No raw dataset rows.** No puzzle IDs, PGN games, or tablebase binaries in this manifest.

---

## Governance baseline

| Document | Role |
|----------|------|
| **ADR-002** | `corpus_ref` semantic pointer — not evidence or federation export |
| **ADR-003** | Evidence may cite `corpus_ref` — citation ≠ integration |
| **ADR-004** | Claims require stewardship; puzzle/tactic familiarity ≠ mastery |
| **ADR-005** | `decision_frame[]` on DecisionTrace — separate from learner reasoning |
| **ADR-006** | Buddy may surface refs pedagogically — not oracle |
| **ADR-007** | System competence reads corpus; engine ≠ corpus truth |
| **ADR-008** | Registry governance model, families, D1–D15 |
| **CRR-001** | Manifest field requirements, seeds, P0–P5, architecture chain |
| **CSV-001** | Source verification dispositions — internal-first MVP |

---

## Manifest principles

1. **Internal-first** — MVP rows do not depend on bulk external ingest.
2. **Vocabulary not evidence** — every row carries boundary flags `not_evidence`, `not_claim`, `not_mastery`.
3. **Source lineage explicit** — `source_refs[]` empty for hand-curated; pinned when external.
4. **No runtime in manifest** — pedagogical metadata only; scanners are future LLD.
5. **Federation withhold** — `not_federation_export: true` on all rows.
6. **Safety-first pedagogy** — P1 frames precede P4 opening/plan advice (CRR-001).
7. **Immutable version intent** — `CorpusRegistryVersion` pin when published; deprecate via `superseded_by` (ADR-008 D11–D12).
8. **CC0 ≠ automatic doctrine** — verified license allows optional `source_refs`; steward `curation_status` still required.

---

## SourceReference snapshot table

| source_id | source_type | license | license_status | provenance_status | curation_status | disposition | allowed_uses | restrictions |
|-----------|-------------|---------|----------------|-------------------|-----------------|-------------|--------------|--------------|
| `source:runtime-opening-tree` | `runtime_tree` | — | `unknown` | `partial` | `candidate_source` | **internal_artifact_only** | `internal_wrap_map`, `pedagogical_reference` | `not_eco_doctrine`, `not_external_license_verified`, `not_for_claim`, `not_federation_export` |
| `source:lichess-chess-openings` | `openings_repo` | CC0 | `license_verified` | `provenance_verified` | `candidate_source` | **optional_verified_source_ref** | `corpus_curation`, `pedagogical_reference` | `label_not_understanding`, `commit_pin_required` (`51a55d956b7ed0b9cd7853893744b1ca39cd2a05`), `not_for_claim`, `not_federation_export` |
| `source:lichess-puzzles` | `puzzle_db` | CC0 | `license_verified` | `provenance_verified` | `candidate_source` | **optional_verified_source_ref_after_theme_crosswalk** | `corpus_curation`, `pedagogical_reference`, `future_puzzle_index` | `no_bulk_ingest`, `theme_crosswalk_required`, `puzzle_solve_not_mastery`, `not_for_claim`, `not_federation_export` |
| `source:syzygy-tablebases` | `tablebase` | redistribution statement (generated files) | `license_verified` | `provenance_verified` | `candidate_source` | **restricted_reference_only** | `tablebase_reference_profile` | `no_binary_in_repo`, `no_generator_embedding_without_GPL_review`, `not_learner_evidence`, `not_mastery`, `not_federation_export` |
| `source:lichess-master-games` | `pgn_collection` | CC0 (exports) | `license_verified` | `candidate` | `candidate_source` | **candidate_only** | `future_example_only`, `per_game_curation` | `no_bulk_ingest`, `subset_definition_required`, `not_for_MVP`, `not_federation_export` |
| `source:twic` | `pgn_collection` | — | `unknown` | `candidate` | `candidate_source` | **restricted_reference_only** / **needs_manual_legal_review** | `link_reference_only` | `no_ingest`, `no_manifest_source_ref_until_terms_verified` |
| `source:caissabase` | `pgn_collection` | — | `unknown` | `unknown` | `candidate_source` | **reject_for_now** | none | `no_ingest`, `no_manifest_source_ref` |

**Note:** No MVP `corpus_ref` row uses `source:twic` or `source:caissabase` as `source_refs[]`.

---

## Manifest field model

Human-readable fields for each **CorpusRef** row in this manifest (not JSON Schema):

| Field | Required | Purpose |
|-------|----------|---------|
| `corpus_ref` | Yes | Stable ID — e.g. `decision_frame:cct_scan` |
| `family` | Yes | Namespace prefix — `decision_frame:`, `tactic:`, etc. |
| `slug` | Yes | Slug within family |
| `title` | Yes | Human-readable label |
| `version` | Yes | `0.1` within `corpus-registry/mvp-0.1-draft` |
| `concept_type` | Yes | `decision_frame` \| `tactic` \| `opening` \| `eco` \| `principle` \| `plan` \| `tablebase` \| `endgame` |
| `source_refs[]` | Yes | `source_id` list — `[]` for hand-curated |
| `curation_status` | Yes | `curated_draft` for MVP seeds |
| `license_status` | Yes | `internal_hand_curated` or per SourceReference |
| `provenance_status` | Yes | `steward_curated` or per SourceReference |
| `pedagogical_use[]` | Yes | e.g. `explain`, `hint`, `decisiontrace_prompt`, `compare`, `review_only` |
| `pedagogical_priority` | Yes (frames/plans) | P0–P5 |
| `scan_phase` | Yes (frames) | `pre_move`, `candidate_generation`, `calculation`, `post_candidate_sanity`, `post_game_review` |
| `safety_relevance` | Yes | `none` \| `low` \| `medium` \| `high` \| `critical` |
| `related_refs[]` | Optional | Cross-links |
| `preconditions[]` | Optional | e.g. `after_safety_clear` |
| `limitations[]` | Recommended | `not_for_claim`, `not_doctrine`, etc. |
| `boundary_flags` | Yes | See below |
| `supersedes` | Optional | Prior ref if renamed |
| `superseded_by` | Optional | Replacement if deprecated |

### Boundary flags (defaults for all MVP rows)

| Flag | Default |
|------|---------|
| `not_evidence` | `true` |
| `not_claim` | `true` |
| `not_mastery` | `true` |
| `not_federation_export` | `true` |
| `not_learner_state` | `true` |
| `not_engine_truth` | `true` |
| `not_runtime_instruction` | `true` |

---

## Boundary defaults

All MVP manifest entries inherit:

```yaml
boundary_flags:
  not_evidence: true
  not_claim: true
  not_mastery: true
  not_federation_export: true
  not_learner_state: true
  not_engine_truth: true
  not_runtime_instruction: true
limitations:
  - not_doctrine_until_steward_publish
  - not_for_claim
  - activity_not_integration
```

**P0 note:** Legal emergency (in check) is handled by **rules engine** — not a `corpus_ref` row in this MVP.

---

## MVP seed entries — decision_frame

Hand-curated. `source_refs: []`. `curation_status: curated_draft`. `license_status: internal_hand_curated`. `provenance_status: steward_curated`. `version: 0.1`.

| corpus_ref | title | pedagogical_priority | scan_phase | safety_relevance | pedagogical_use | related_refs | limitations |
|------------|-------|---------------------|------------|------------------|-----------------|--------------|-------------|
| `decision_frame:safety_check` | Safety check (general) | P1 | pre_move | critical | explain, hint, decisiontrace_prompt | `decision_frame:king_safety_first` | not_runtime_scan_output |
| `decision_frame:king_safety_first` | King safety first | P1 | pre_move | critical | explain, hint, decisiontrace_prompt | `decision_frame:defensive_scan_before_attack` | overrides P4 opening advice |
| `decision_frame:cct_scan` | CCT scan (checks, captures, threats) | P2 | candidate_generation | high | explain, hint, decisiontrace_prompt, puzzle_candidate | `decision_frame:checks_captures_threats`, `decision_frame:forcing_moves_first` | not_lichess_theme_id |
| `decision_frame:checks_captures_threats` | Checks, captures, threats enumeration | P2 | candidate_generation | high | explain, decisiontrace_prompt | `decision_frame:cct_scan` | — |
| `decision_frame:loose_pieces_drop_off` | Loose pieces drop off | P1 | pre_move | high | explain, hint, decisiontrace_prompt, puzzle_candidate | — | not_tactic_mastery |
| `decision_frame:mate_threat_scan` | Mate threat scan | P1 | pre_move | critical | explain, hint, decisiontrace_prompt | `decision_frame:king_safety_first` | may pair with engine_ref verify |
| `decision_frame:forcing_moves_first` | Forcing moves first | P2 | candidate_generation | high | explain, decisiontrace_prompt | `decision_frame:cct_scan`, `plan:minority_attack` | cross-link plan only |
| `decision_frame:candidate_moves` | Candidate move generation | P3 | candidate_generation | medium | explain, decisiontrace_prompt | `decision_frame:calculation_tree` | after P1–P2 clear |
| `decision_frame:calculation_tree` | Calculation tree (forcing lines) | P3 | calculation | medium | explain, decisiontrace_prompt | `decision_frame:candidate_moves`, `tactic:*` | not_engine_pv_as_reasoning |
| `decision_frame:sanity_check` | Sanity check after candidate | P5 | post_candidate_sanity | critical | explain, hint, decisiontrace_prompt | `decision_frame:safety_check` | mandatory before commit praise |
| `decision_frame:defensive_scan_before_attack` | Defensive scan before attack | P1 | pre_move | critical | explain, decisiontrace_prompt | `decision_frame:king_safety_first` | — |
| `decision_frame:offensive_scan_after_safety` | Offensive scan after safety clear | P2 | candidate_generation | medium | explain, decisiontrace_prompt | `decision_frame:cct_scan` | precondition: after_safety_clear |

---

## MVP seed entries — tactic

Hand-curated vocabulary. **Do not** copy Lichess puzzle theme strings as doctrine IDs. Future **Lichess theme cross-walk** is a separate governance doc (CSV-001, CRR-OQ-2).

| corpus_ref | title | pedagogical_priority | scan_phase | safety_relevance | pedagogical_use | related_refs | limitations |
|------------|-------|---------------------|------------|------------------|-----------------|--------------|-------------|
| `tactic:fork` | Fork / double attack | P3 | calculation | medium | explain, hint, compare, puzzle_candidate, decisiontrace_prompt | — | not_mastery; theme_crosswalk_future |
| `tactic:pin` | Pin | P3 | calculation | medium | explain, hint, compare, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:skewer` | Skewer | P3 | calculation | medium | explain, hint, compare, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:back_rank_mate` | Back-rank mate | P3 | calculation | high | explain, hint, puzzle_candidate, decisiontrace_prompt | `decision_frame:mate_threat_scan` | — |
| `tactic:discovered_attack` | Discovered attack | P3 | calculation | high | explain, hint, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:overloaded_piece` | Overloaded piece | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:deflection` | Deflection | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:decoy` | Decoy / lure | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:clearance` | Clearance | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:interference` | Interference | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | — | — |
| `tactic:zwischenzug` | Zwischenzug | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | `decision_frame:calculation_tree` | — |
| `tactic:double_attack` | Double attack | P3 | calculation | medium | explain, hint, puzzle_candidate, decisiontrace_prompt | `tactic:fork` | — |
| `tactic:smothered_mate` | Smothered mate | P3 | calculation | high | explain, hint, puzzle_candidate, decisiontrace_prompt | `tactic:back_rank_mate` | — |

`source_refs: []` for all tactic rows. `curation_status: curated_draft`. `license_status: internal_hand_curated`. `provenance_status: steward_curated`.

---

## MVP seed entries — opening / eco

Internal-first. `source_refs: [source:runtime-opening-tree]` only. Optional future refinement via `source:lichess-chess-openings` commit pin — **not linked in MVP rows**.

| corpus_ref | title | concept_type | source_refs | curation_status | license_status | provenance_status | pedagogical_priority | limitations |
|------------|-------|--------------|-------------|-----------------|----------------|-------------------|---------------------|-------------|
| `opening:sicilian_defense` | Sicilian Defense | opening | `[source:runtime-opening-tree]` | curated_draft | unknown (artifact) | partial | P4 | `internal_artifact_only`, `not_eco_doctrine`, `label_not_understanding` |
| `opening:ruy_lopez` | Ruy Lopez | opening | `[source:runtime-opening-tree]` | curated_draft | unknown (artifact) | partial | P4 | same |
| `opening:queen_gambit` | Queen's Gambit | opening | `[source:runtime-opening-tree]` | curated_draft | unknown (artifact) | partial | P4 | same |
| `eco:A00` | ECO A00 (Irregular openings) | eco | `[source:runtime-opening-tree]` | curated_draft | unknown (artifact) | partial | P4 | future: optional `source:lichess-chess-openings` pin |
| `eco:B90` | ECO B90 (Sicilian, Najdorf) | eco | `[source:runtime-opening-tree]` | curated_draft | unknown (artifact) | partial | P4 | same |

**Note:** Future wrap map links runtime SAN paths to these refs — see §Runtime opening tree wrap plan. No move data duplicated in manifest.

---

## MVP seed entries — principle / plan

| corpus_ref | title | concept_type | source_refs | pedagogical_priority | scan_phase | safety_relevance | related_refs | limitations |
|------------|-------|--------------|-------------|---------------------|------------|------------------|--------------|-------------|
| `principle:king_safety` | King safety (positional) | principle | `[]` | P4 | post_game_review | high | `decision_frame:king_safety_first` | P1 safety frames override; not_in_check_emergency |
| `principle:piece_activity` | Piece activity | principle | `[]` | P4 | post_game_review | low | — | after safety clear |
| `principle:center_control` | Center control | principle | `[]` | P4 | post_game_review | low | — | — |
| `principle:development` | Development | principle | `[]` | P4 | post_game_review | low | — | opening phase typical |
| `plan:minority_attack` | Minority attack | plan | `[]` | P4 | post_game_review | low | `decision_frame:offensive_scan_after_safety` | not_before P1–P2 clear |

`curation_status: curated_draft`. `license_status: internal_hand_curated`. `provenance_status: steward_curated`.

**Cross-link:** `decision_frame:forcing_moves_first` is linked from decision_frame table — **not duplicated** as plan row.

---

## MVP seed entries — tablebase / endgame reference profiles

| corpus_ref | title | concept_type | source_refs | curation_status | license_status | pedagogical_priority | limitations |
|------------|-------|--------------|-------------|-----------------|----------------|---------------------|-------------|
| `tablebase:syzygy_wdl` | Syzygy WDL reference profile | tablebase | `[source:syzygy-tablebases]` | curated_draft | verified (redistribution stmt) | — | `restricted_reference_only`, `no_binary_in_repo`, `not_learner_evidence`, `not_mastery` |
| `tablebase:syzygy_dtz` | Syzygy DTZ reference profile | tablebase | `[source:syzygy-tablebases]` | curated_draft | verified (redistribution stmt) | — | same |
| `endgame:king_pawn_vs_king` | King and pawn vs king (technique) | endgame | `[]` | curated_draft | internal_hand_curated | P4 | pedagogical technique — not tablebase proof alone |
| `endgame:rook_pawn_basic` | Rook pawn basics | endgame | `[]` | curated_draft | internal_hand_curated | P4 | may cite tablebase in teaching — not mastery |

**Rules:** No binary files. No tablebase download. Tablebase lookup is reference/measurement lane (ADR-007, ADR-008 D6). `not_federation_export: true`.

---

## Excluded / deferred sources

| Item | Status |
|------|--------|
| `source:twic` | No manifest `source_refs` until terms verified |
| `source:caissabase` | Rejected for MVP |
| Bulk Lichess puzzle CSV | No ingest |
| Bulk Lichess rated games | No ingest |
| Syzygy binary hosting in Git | Deferred |
| PGN archives (TWIC, Caissabase, etc.) | No ingest |
| `master_game:*` illustrative rows | Deferred past MVP |
| ADR-008 acceptance | Separate governance task |
| Machine-readable YAML/JSON registry | Deferred (MCRM-OQ-1) |

---

## CCCR → ADR-008 namespace migration table

| CCCR / legacy proposal | ADR-008 / MVP manifest | Notes |
|------------------------|------------------------|-------|
| `pattern:tactic:fork` | `tactic:fork` | Primary tactic family |
| `pattern:tactic:pin` | `tactic:pin` | — |
| `pattern:tactic:skewer` | `tactic:skewer` | — |
| `pattern:tactic:back_rank` | `tactic:back_rank_mate` | slug normalized |
| `pattern:tactic:discovered_attack` | `tactic:discovered_attack` | — |
| `pattern:tactic:overloaded_piece` | `tactic:overloaded_piece` | — |
| `pattern:tactic:deflection` | `tactic:deflection` | — |
| `pattern:tactic:decoy` | `tactic:decoy` | — |
| `pattern:tactic:clearance` | `tactic:clearance` | — |
| `pattern:tactic:interference` | `tactic:interference` | — |
| `pattern:tactic:zwischenzug` | `tactic:zwischenzug` | — |
| `pattern:tactic:double_attack` | `tactic:double_attack` | — |
| `skill:calculation:candidate_move_generation` | `decision_frame:candidate_moves` | calculation → decision_frame |
| `skill:calculation:forcing_sequence` | `decision_frame:forcing_moves_first` | — |
| `skill:calculation:check_capture_threat` | `decision_frame:cct_scan` | — |
| `pattern:strategy:minority_attack` | `plan:minority_attack` | plan family |
| `pattern:strategy:king_safety` | `principle:king_safety` | principle family |
| `pattern:strategy:piece_activity` | `principle:piece_activity` | — |
| `pattern:strategy:development` (implied) | `principle:development` | CCCR principles section |
| `opening:sicilian:najdorf` (CCCR) | `opening:sicilian_defense` + `eco:B90` | MVP uses flatter opening + ECO |
| `concept:opening:sicilian` | `opening:sicilian_defense` | — |
| `concept:principle:king_safety` | `principle:king_safety` | — |
| `source:engine:tablebase` | `tablebase:syzygy_wdl`, `tablebase:syzygy_dtz` | separate from `engine_ref` |
| `pattern:endgame:king_and_pawn_opposition` | `endgame:king_pawn_vs_king` | MVP simplified slug |

---

## Runtime opening tree wrap plan

**Do not modify runtime** in this task.

| Step | Plan |
|------|------|
| 1 | Keep `src/data/openings.ts` and `src/data/openingdata.ts` **unchanged** |
| 2 | Future governance file: path → `corpus_ref` map (SAN sequence hash or path key → `opening:*` / `eco:*`) |
| 3 | **No** duplicate move tree in manifest or registry |
| 4 | `source:runtime-opening-tree` remains `internal_artifact_only` |
| 5 | Optional later: align labels with `source:lichess-chess-openings` commit `51a55d956b7ed0b9cd7853893744b1ca39cd2a05` — **not ECO correctness claim** until mapped |
| 6 | Runtime `locate()` / `sanText()` continue as legacy labels until registry consumer exists |

**Evidence:** ~2,402 lines in `openingdata.ts`; no `corpus_ref` IDs today (CSV-001, CRR-001).

---

## Pedagogical priority and safety model

| Priority | Name | MVP manifest coverage |
|----------|------|----------------------|
| **P0** | Legal emergency | Rules engine only — not a corpus row |
| **P1** | Immediate defensive safety | `decision_frame:safety_check`, `king_safety_first`, `mate_threat_scan`, `loose_pieces_drop_off`, `defensive_scan_before_attack` |
| **P2** | Forcing-move scan (CCT) | `decision_frame:cct_scan`, `checks_captures_threats`, `forcing_moves_first`, `offensive_scan_after_safety` |
| **P3** | Tactical motif matching | All 13 `tactic:*` + `candidate_moves`, `calculation_tree` |
| **P4** | Positional / strategic plan | `opening:*`, `eco:*`, `principle:*`, `plan:*`, `endgame:*` |
| **P5** | Sanity check | `decision_frame:sanity_check` |

**Rules:**

- P0/P1 **override** P4 opening/strategy advice — Buddy must not praise plans that fail safety (ADR-006, CRR-001).
- Manifest `pedagogical_priority` is **metadata** — not runtime execution order.
- **Tactical Safety Scanner** implementation belongs to future System Chess Competence LLD (CRR-001).

---

## Relationship to System Chess Competence

| May | Must not |
|-----|----------|
| Read manifest rows and `CorpusRegistryVersion` | Write learner state or mastery |
| Map positions to `corpus_ref[]` using manifest vocabulary | Treat manifest as engine truth |
| Use priority metadata for teaching order (future) | Export to federation |
| Emit derived scan reports (future LLD) | Persist scan as EvidenceRecord |

---

## Relationship to Buddy Pedagogy

| May | Must not |
|-----|----------|
| Cite `decision_frame:*` and `tactic:*` in hints/review | Impersonate learner `rationale_statement` |
| Prompt self-explanation before engine reveal | Issue mastery from motif familiarity |
| Reference principles/plans at P4 after safety | Praise moves failing P1 sanity |

---

## Relationship to DecisionTrace / EvidenceRecord / Claim

| Record | Manifest role |
|--------|---------------|
| **DecisionTrace** | May tag `decision_frame[]`, `corpus_ref[]` — vocabulary only |
| **EvidenceRecord** | May cite `corpus_ref` — not proof of integration (ADR-003) |
| **Claim** | Requires ADR-004 stewardship — manifest citation insufficient |

---

## Relationship to Federation Export

Per [FEDERATION.md](../../../FEDERATION.md) and `export_v1.py`:

- No `corpus_ref`, `source_refs`, manifest metadata, or pedagogical fields in ObservationRecord.
- All MVP rows: `not_federation_export: true`.

---

## Relationship to Creator continuity

| Requirement | MVP manifest support |
|-------------|---------------------|
| `CorpusRegistryVersion` pin | Proposed `corpus-registry/mvp-0.1-draft` |
| `superseded_by` / `supersedes` | Fields defined — empty in v0.1 draft |
| Source snapshot at capture | SourceReference table documents pins for optional external refs |
| Deprecated ref resolution | Future published versions must keep rows resolvable (ADR-008 D12) |
| No flattening to free text | Typed `corpus_ref` + version in continuity records |

---

## Non-goals

- Runtime implementation
- Schema / JSON Schema
- Machine-readable YAML/JSON registry file
- Dataset ingestion or source download
- PGN / puzzle import
- Tablebase download
- Engine integration
- DecisionTrace storage
- LLD / UML
- LARIS activation
- ADR-008 acceptance (separate task)

---

## Risks / anti-patterns

| Risk / anti-pattern | Mitigation |
|---------------------|------------|
| Treating manifest as runtime registry | This file is draft vocabulary only |
| Copying Lichess theme strings as IDs | Cross-walk doc; ChessGuide `tactic:*` slugs |
| Puzzle solve → mastery | ADR-004; boundary flags |
| Opening label → understanding | P4 after P1; limitations on opening rows |
| Tablebase in Git | `no_binary_in_repo` |
| TWIC/Caissabase without terms | Excluded from MVP |
| Exporting corpus to federation | `not_federation_export` |
| Collapsing corpus → evidence → claim | ADR-002–004; boundary flags |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **MCRM-OQ-1** | Should this markdown manifest later become YAML? | **Open** — lean yes for machine consumption |
| **MCRM-OQ-2** | Exact enum names for curation/license/provenance status? | **Open** — align ADR-008 + CSV-001 |
| **MCRM-OQ-3** | decision_frame and tactic in same manifest file? | **Open** — **lean yes** (this document) |
| **MCRM-OQ-4** | How to pin Lichess snapshot dates on optional source_refs? | **Open** — `retrieval_date` + commit SHA |
| **MCRM-OQ-5** | Is runtime tree a Source or Artifact only? | **Open** — lean **CorpusSource** + `internal_artifact_only` disposition |
| **MCRM-OQ-6** | How much opening path metadata in MVP? | **Open** — minimal labels; wrap map deferred |
| **MCRM-OQ-7** | Tablebase refs in corpus vs engine profile? | **Open** — lean corpus `tablebase:*` + optional `engine_ref` for lookup |
| **MCRM-OQ-8** | Minimum manifest before Tactical Safety Scanner LLD? | **Open** — this v0.1 draft |
| **MCRM-OQ-9** | ADR-008 accept before or after manifest? | **Open** — manifest first; acceptance parallel |
| **MCRM-OQ-10** | Creator serve deprecated corpus_ref versions? | **Open** — ADR-008 D12; external Creator spec |

---

## Recommendation

| # | Next step |
|---|-----------|
| 1 | **PR** for this MVP manifest draft |
| 2 | **ADR-008 acceptance** decision if no boundary issues |
| 3 | **Opening tree wrapping plan** (governance doc with path map) |
| 4 | **Lichess puzzle theme cross-walk** governance doc |
| 5 | **Tactical Safety Scanner / System Chess Competence LLD** |
| 6 | **UML package** (CRR-001) |

---

## Downstream work

| Work | Depends on |
|------|------------|
| PR for MCRM-001 | This draft |
| ADR-008 acceptance | Governance review |
| Opening wrap map file | MCRM §15 |
| Lichess theme cross-walk | CSV-001 |
| Tactical Safety Scanner LLD | CRR-001, this manifest |
| YAML manifest conversion | MCRM-OQ-1 |
| CorpusRegistryVersion publish workflow | ADR-008 D11 |

---

## Governance boundary statement

**This manifest draft does not modify** runtime, tests, federation export, schemas, implementation files, **ADR status**, ingest datasets, download sources, create machine-readable registry files, LLD, UML, or **activate LARIS**.

It is a **human-readable governance manifest** for future Corpus Reference Registry implementation.
