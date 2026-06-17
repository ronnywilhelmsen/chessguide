# Lichess Puzzle Theme Cross-Walk v0.1 Draft

| Field | Value |
|-------|-------|
| **Document ID** | LTCW-001 |
| **Title** | Lichess Puzzle Theme Cross-Walk v0.1 Draft |
| **Version** | 0.1 |
| **Status** | Draft Cross-Walk |
| **Date** | 2026-06-17 |
| **Scope** | Governance / corpus cross-walk only |
| **Depends on** | [ADR-002](../adr/ADR-002-sovereign-reference-model-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-005](../adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md), [ADR-006](../adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-008](../adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md), [CRR-001](../../reviews/Corpus-Reference-Registry-Review-v1.0.md), [CSV-001](../../reviews/Corpus-Source-Verification-Review-v1.0.md), [MCRM-001](MVP-Corpus-Registry-Manifest-v0.1-draft.md), [OTWP-001](Opening-Tree-Wrapping-Plan-v0.1-draft.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](../../reviews/System-Chess-Competence-Review-v1.0.md), [SCC-HLD-001](../../architecture/System-Chess-Competence-HLD-v1.0.md), [FEDERATION.md](../../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft Cross-Walk / governance-only.**

This document:

- Does **not** ingest or download Lichess puzzle data.
- Does **not** create a puzzle registry.
- Does **not** create runtime code.
- Does **not** create machine-readable JSON/YAML.
- Does **not** create schema, LLD, UML, or activate **LARIS**.
- Does **not** make Lichess theme strings doctrine IDs.
- Does **not** make puzzle solve activity evidence or mastery.

---

## Executive summary

- Lichess Puzzle DB is a **verified CC0 source** in CSV-001.
- ChessGuide may use it later for **theme alignment** and **puzzle candidate selection**.
- Lichess theme strings must be treated as **external labels**, not ChessGuide doctrine.
- ChessGuide target vocabulary remains `tactic:*`, `decision_frame:*`, and possibly future `motif:*`.
- This document defines a **cross-walk model, not ingest**.
- The cross-walk preserves source refs, curation status, boundary flags, federation withholding, and Creator continuity.

---

## Governance baseline

| Document | Summary |
|----------|---------|
| **ADR-002** | `corpus_ref` is a semantic pointer, not evidence or export |
| **ADR-003** | EvidenceRecord may cite `corpus_ref`, but citation is not integration |
| **ADR-004** | Claims require stewardship |
| **ADR-005** | DecisionTrace may cite `decision_frame` / `corpus_ref`, but learner rationale is separate |
| **ADR-006** | Buddy may surface corpus refs pedagogically, not as oracle/mastery |
| **ADR-007** | System Chess Competence can map concepts; engine and learner reasoning remain separate |
| **ADR-008** | Corpus Reference Registry and Source Governance is **Accepted doctrine** |
| **CRR-001** | 12 `decision_frame` seeds, 13 `tactic` seeds, P0–P5 priority |
| **CSV-001** | Lichess puzzles are `license_verified` CC0; no bulk ingest; theme cross-walk required |
| **MCRM-001** | Draft manifest contains tactic and decision_frame seeds |
| **FEDERATION.md** | No `corpus_ref` / `source_ref` / teaching metadata in ObservationRecord |

---

## Source posture

**`source:lichess-puzzles`**

| Field | Value |
|-------|-------|
| source_type | `puzzle_db` |
| license_status | `license_verified` |
| license | CC0 |
| provenance_status | `provenance_verified` |
| disposition | `optional_verified_source_ref_after_theme_crosswalk` |
| allowed_uses | `corpus_curation`, `pedagogical_reference`, `future_puzzle_index`, `theme_alignment` |
| restrictions | `no_bulk_ingest`, `no_puzzle_row_import_in_this_task`, `theme_crosswalk_required`, `puzzle_solve_not_mastery`, `not_for_claim`, `not_federation_export` |

**No external puzzle data is fetched or downloaded in this task.**

---

## Problem statement

ChessGuide needs to relate external Lichess puzzle themes to **governed internal chess-learning concepts** without copying external labels as doctrine, importing puzzle data, or collapsing puzzle activity into learning evidence or mastery.

---

## Design goals

- Preserve ChessGuide-owned terminology.
- Preserve source provenance.
- Keep Lichess theme strings external.
- Map only to curated internal target refs.
- Support future Tactical Safety Scanner and `PuzzleCorpusSelector`.
- Keep puzzle solving separate from evidence / claim / mastery.
- Preserve P0–P5 safety-first pedagogical priority.
- Preserve federation withholding.
- Preserve Creator continuity through versioned cross-walk rows.

---

## Non-goals

- No Lichess puzzle CSV download
- No puzzle row import
- No puzzle ID registry
- No runtime code
- No tests
- No schema
- No JSON/YAML registry
- No source download
- No engine integration
- No Tactical Safety Scanner implementation
- No `PuzzleCorpusSelector` implementation
- No EvidenceRecord creation
- No mastery / claim logic
- No federation export change
- No LLD / UML
- No LARIS

---

## Cross-walk principles

1. External theme ≠ internal doctrine.
2. Internal `tactic:*` / `decision_frame:*` refs are ChessGuide-owned.
3. A Lichess theme can map to **zero, one, or many** internal refs.
4. A ChessGuide ref can map to **many** external themes.
5. Ambiguous themes require **steward review**.
6. Meta-themes and difficulty/phase tags should **not** be forced into `tactic:*`.
7. Puzzle solving remains **activity**, not learning evidence.
8. Cross-walk rows require **versioning** and **curation status**.

---

## Lichess theme handling rule

- Preserve the original Lichess theme string only as `external_theme`.
- Do **not** rename ChessGuide refs to match Lichess.
- Do **not** treat Lichess themes as `corpus_ref`.
- Do **not** claim exhaustive coverage unless externally verified.
- Mark all example external themes as `candidate_external_theme` unless already verified from repository docs.
- Cross-walk entries are **curation proposals** until `steward_reviewed`.

---

## ChessGuide target namespaces

**Required:**

- `tactic:*`
- `decision_frame:*`

**Optional future:**

- `motif:*`
- `theme:*` (if later approved)

No new namespace doctrine is created in this task.

---

## Cross-walk record shape

Human-readable record — **not** JSON Schema.

| Field | Purpose |
|-------|---------|
| `crosswalk_id` | Stable ID for the cross-walk row |
| `external_source_id` | `source:lichess-puzzles` |
| `external_theme` | Original Lichess theme string (preserved verbatim) |
| `external_theme_status` | `candidate_external_theme` \| `verified_external_theme` |
| `target_refs[]` | All proposed internal refs |
| `primary_target_ref` | Preferred internal ref |
| `target_family` | `tactic` \| `decision_frame` \| (future) `motif` |
| `mapping_kind` | direct_tactic / broader_motif / decision_frame / meta_theme / difficulty_or_phase / ambiguous / reject_for_now |
| `confidence` | high / medium / low |
| `curation_status` | draft_mapping / steward_reviewed / source_aligned / deprecated / superseded / rejected |
| `license_status` | `license_verified` (CC0) |
| `provenance_status` | `provenance_verified` |
| `pedagogical_priority` | P0–P5 (where applicable) |
| `scan_phase` | pre_move / candidate_generation / calculation / post_candidate_sanity / post_game_review |
| `safety_relevance` | none / low / medium / high / critical |
| `allowed_uses[]` | e.g. corpus_curation, pedagogical_reference, future_puzzle_index, theme_alignment |
| `limitations[]` | e.g. not_doctrine, label_not_understanding, future_ref_candidate |
| `boundary_flags` | See below |
| `version` | CorpusRegistryVersion membership |
| `supersedes` | Prior crosswalk_id if renamed |
| `superseded_by` | Replacement if deprecated |
| `notes` | Curation notes |

**`mapping_kind` values:** `direct_tactic`, `broader_motif`, `decision_frame`, `meta_theme`, `difficulty_or_phase`, `ambiguous`, `reject_for_now`.

**`curation_status` values:** `draft_mapping`, `steward_reviewed`, `source_aligned`, `deprecated`, `superseded`, `rejected`.

---

## Boundary flags

Every cross-walk row defaults:

```yaml
boundary_flags:
  not_evidence: true
  not_claim: true
  not_mastery: true
  not_federation_export: true
  not_learner_state: true
  not_engine_truth: true
  not_runtime_instruction: true
  not_puzzle_ingest: true
```

---

## Seed target refs

**13 MCRM-001 / CRR-001 `tactic:*` refs:**

- `tactic:fork`
- `tactic:pin`
- `tactic:skewer`
- `tactic:back_rank_mate`
- `tactic:discovered_attack`
- `tactic:overloaded_piece`
- `tactic:deflection`
- `tactic:decoy`
- `tactic:clearance`
- `tactic:interference`
- `tactic:zwischenzug`
- `tactic:double_attack`
- `tactic:smothered_mate`

**12 MCRM-001 / CRR-001 `decision_frame:*` refs:**

- `decision_frame:safety_check`
- `decision_frame:king_safety_first`
- `decision_frame:cct_scan`
- `decision_frame:checks_captures_threats`
- `decision_frame:loose_pieces_drop_off`
- `decision_frame:mate_threat_scan`
- `decision_frame:forcing_moves_first`
- `decision_frame:candidate_moves`
- `decision_frame:calculation_tree`
- `decision_frame:sanity_check`
- `decision_frame:defensive_scan_before_attack`
- `decision_frame:offensive_scan_after_safety`

These are the **only** internal target refs LTCW-001 maps to. No new doctrine refs are added.

---

## Candidate cross-walk table

**Non-exhaustive, curation-draft.** All `external_theme` values are `candidate_external_theme` (exact spelling not yet verified from a pinned Lichess snapshot — LTCW-OQ-1/OQ-2). All rows `curation_status: draft_mapping`.

| external_theme | primary_target_ref | mapping_kind | confidence | limitations |
|----------------|--------------------|--------------|------------|-------------|
| `fork` | `tactic:fork` | direct_tactic | high | label_not_understanding |
| `pin` | `tactic:pin` | direct_tactic | high | — |
| `skewer` | `tactic:skewer` | direct_tactic | high | — |
| `backRankMate` | `tactic:back_rank_mate` | direct_tactic | high | — |
| `discoveredAttack` | `tactic:discovered_attack` | direct_tactic | high | — |
| `deflection` | `tactic:deflection` | direct_tactic | high | — |
| `attraction` | `tactic:decoy` | broader_motif | medium | future `motif:attraction` candidate |
| `decoy` | `tactic:decoy` | direct_tactic | high | — |
| `clearance` | `tactic:clearance` | direct_tactic | high | — |
| `interference` | `tactic:interference` | direct_tactic | high | — |
| `zwischenzug` | `tactic:zwischenzug` | direct_tactic | high | — |
| `doubleAttack` | `tactic:double_attack` | direct_tactic | high | — |
| `smotheredMate` | `tactic:smothered_mate` | direct_tactic | high | — |
| `mateIn1` | `decision_frame:mate_threat_scan` | decision_frame | medium | tactic:* only after curation |
| `mateIn2` | `decision_frame:mate_threat_scan` | decision_frame | medium | + `decision_frame:calculation_tree`; tactic:* only after curation |
| `hangingPiece` | `decision_frame:loose_pieces_drop_off` | decision_frame | high | not_tactic_mastery |
| `opening` | — | reject_for_now / meta_theme | low | not a tactic; see OTWP-001 |
| `endgame` | — | meta_theme | low | not a tactic |
| `middlegame` | — | meta_theme | low | not a tactic; phase tag |
| `advantage` | — | meta_theme | low | outcome tag, not tactic |
| `equality` | — | meta_theme | low | outcome tag, not tactic |

---

## Decision-frame cross-walk table

Safety / process themes mapped conceptually. All `draft_mapping` unless exact spelling is verified from source docs.

| external_theme | target_refs | mapping_kind | confidence | limitations |
|----------------|-------------|--------------|------------|-------------|
| `hangingPiece` | `decision_frame:loose_pieces_drop_off` | decision_frame | high | not_tactic_mastery |
| `mateIn1` / `mateIn2` / `mateIn3` / `mateInN` | `decision_frame:mate_threat_scan`, `decision_frame:calculation_tree` | decision_frame | medium | mateInN representation open (LTCW-OQ-5) |
| `oneMove` / `short` / `long` | — | difficulty_or_phase | low | not evidence/mastery; metadata only |
| `quietMove` | `decision_frame:candidate_moves`, `decision_frame:calculation_tree` | decision_frame | low | only if `steward_reviewed` |
| `defensiveMove` | `decision_frame:defensive_scan_before_attack`, `decision_frame:safety_check` | decision_frame | medium | — |
| `attack` / `kingsideAttack` | `decision_frame:offensive_scan_after_safety` | decision_frame | medium | only after P1 safety |
| `exposedKing` | `decision_frame:king_safety_first` | decision_frame | medium | — |

---

## Non-tactic / meta-theme handling

- `opening`, `endgame`, `middlegame`, `advantage`, `equality`, `veryLong`, `short`, `oneMove`, etc. are **not tactics** by default.
- They may support **filtering or selection** but not tactic doctrine.
- They should map to `mapping_kind: meta_theme` or `difficulty_or_phase`.
- They must **not** create `tactic:*` rows without curation.

---

## Puzzle ID and row handling

- **No puzzle IDs** in this document.
- **No** FEN, moves, ratings, popularity, or row fields.
- **No** puzzle solve records.
- **No** future learner evidence from solve alone.
- A future `PuzzleCorpusSelector` can use the curated cross-walk **only after LLD**.

---

## Curation workflow

1. Identify external theme string.
2. Preserve original theme spelling.
3. Propose internal target ref(s).
4. Assign `mapping_kind`.
5. Assign pedagogical priority / scan phase / safety relevance.
6. Assign limitations.
7. Steward review.
8. Publish in a future **CorpusRegistryVersion**.
9. Preserve `supersedes` / `superseded_by` if changed.

---

## Versioning and immutability

- Published cross-walk versions are **immutable**.
- Corrections create a **new version**.
- Deprecated mappings remain **resolvable**.
- Creator continuity must preserve `external_theme`, `target_refs`, `version`, `source_id`, and `curation_status`.

---

## Relationship to MCRM-001

- MCRM-001 **owns** the internal seed refs.
- LTCW maps **external themes** to those refs.
- LTCW does **not** add new doctrine refs unless later approved.
- LTCW does **not** promote MCRM-001 beyond **Draft Manifest**.

---

## Relationship to Tactical Safety Scanner

- LTCW can **inform** future scanner vocabulary.
- It does **not** implement the scanner.
- Safety priority **P1/P2** remains governed by CRR-001 / MCRM-001.
- Puzzle themes **cannot override** safety checks.

---

## Relationship to Buddy Pedagogy

- Buddy may later use **cross-walked refs** for explanation / prompting.
- Buddy must **not** cite external theme strings as doctrine.
- Buddy must ask for **self-explanation** before engine reveal.
- Buddy must **not** treat puzzle completion as mastery.

---

## Relationship to DecisionTrace / EvidenceRecord / Claim

- DecisionTrace may cite internal `tactic:*` or `decision_frame:*`.
- It should **not** cite raw external theme as learned state.
- EvidenceRecord may cite corpus refs, but **solve alone is insufficient**.
- Claim requires **ADR-004 stewardship**.
- A cross-walk row is **not evidence**.

---

## Relationship to Federation Export

Per [FEDERATION.md](../../../FEDERATION.md) and `export_v1.py`:

- No `external_theme`.
- No `source_id`.
- No `source_refs`.
- No `corpus_ref`.
- No puzzle metadata.
- No cross-walk metadata.
- ObservationRecord remains a **terminal game slice only**.

---

## Relationship to Creator continuity

- Creator must be able to interpret **historical cross-walk versions**.
- Preserve `external_theme` spelling, `source_id`, `target_refs`, `curation_status`, `version`.
- Do **not** flatten to free text.

---

## Migration phases

| Phase | State |
|-------|-------|
| **Phase 0 — Current** | No cross-walk on main unless this doc lands; MCRM seeds exist; no ingest |
| **Phase 1 — LTCW governance doc** | this document |
| **Phase 2 — Steward-reviewed cross-walk table** | future markdown or YAML decision |
| **Phase 3 — CorpusRegistryVersion publication** | future |
| **Phase 4 — Tactical Safety Scanner / PuzzleCorpusSelector LLD** | future only |
| **Phase 5 — Runtime integration and tests** | future only |

---

## Risks / anti-patterns

| Risk / anti-pattern | Mitigation |
|---------------------|------------|
| Copying Lichess theme names as doctrine | Themes kept as `external_theme`; governed refs are doctrine |
| Treating puzzle solve as mastery | `puzzle_solve_not_mastery`; ADR-004 |
| Importing puzzle rows too early | `no_puzzle_row_import_in_this_task` |
| Exposing themes / source refs in federation | `not_federation_export` |
| Mapping ambiguous themes to one tactic without review | `ambiguous` / steward review required |
| Using puzzle themes as claims | Boundary flags; ADR-004 |
| Bypassing P1 safety with tactic excitement | P1/P2 governed by CRR/MCRM; themes cannot override |
| Flattening Creator continuity to text labels | Versioned, typed cross-walk rows |

---

## Open questions

| ID | Question |
|----|----------|
| **LTCW-OQ-1** | Which Lichess theme spelling list is canonical? |
| **LTCW-OQ-2** | Should the exact external theme list be pinned by retrieval date? |
| **LTCW-OQ-3** | Should the cross-walk become YAML later? |
| **LTCW-OQ-4** | How many `target_refs` may one external theme map to? |
| **LTCW-OQ-5** | How to represent `mateInN` themes? |
| **LTCW-OQ-6** | How to treat difficulty / phase themes? |
| **LTCW-OQ-7** | How to handle future Lichess theme changes? |
| **LTCW-OQ-8** | What minimum cross-walk is needed before a Tactical Safety Scanner LLD? |
| **LTCW-OQ-9** | How should Creator serve deprecated cross-walk mappings? |
| **LTCW-OQ-10** | Should puzzle rating / difficulty ever enter governance metadata? |

---

## Recommendation

1. PR for LTCW-001 after this full-spec pass.
2. If not yet done, complete exact source theme spelling verification later using official Lichess documentation or pinned snapshot metadata.
3. Draft opening tree wrap mapping artifact.
4. Tactical Safety Scanner / System Chess Competence LLD.
5. UML package.
6. Future `PuzzleCorpusSelector` design only after LLD.

---

## Downstream work

| Work | Depends on |
|------|------------|
| PR for LTCW-001 | This draft |
| External theme spelling verification | Pinned Lichess snapshot; LTCW-OQ-1/OQ-2 |
| Steward-reviewed cross-walk table | Phase 2 |
| Tactical Safety Scanner / SCC LLD | CRR-001, MCRM-001 |
| UML package | CRR-001 |
| PuzzleCorpusSelector design | Future LLD |
| Registry format decision | MCRM-OQ-1 |

---

## Governance boundary statement

**LTCW-001 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, ingest datasets, download sources, create corpus registry JSON/YAML, create JSON Schema, create LLD or UML artifacts, import puzzle rows, create EvidenceRecords or Claims, or **activate LARIS**.

It is a **human-readable governance cross-walk draft** for future corpus curation.
