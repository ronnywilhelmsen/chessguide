# Lichess Puzzle Theme Cross-Walk v0.1 Draft

| Field | Value |
|-------|-------|
| **Document ID** | LTCW-001 |
| **Title** | Lichess Puzzle Theme Cross-Walk v0.1 Draft |
| **Version** | 0.1 |
| **Status** | Draft Governance Cross-Walk |
| **Date** | 2026-06-17 |
| **Scope** | Governance / taxonomy / cross-walk planning only |
| **Depends on** | [ADR-002](../adr/ADR-002-sovereign-reference-model-v1.md), [ADR-003](../adr/ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](../adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-005](../adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md), [ADR-006](../adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md), [ADR-007](../adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [ADR-008](../adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](../../reviews/System-Chess-Competence-Review-v1.0.md), [CRR-001](../../reviews/Corpus-Reference-Registry-Review-v1.0.md), [CSV-001](../../reviews/Corpus-Source-Verification-Review-v1.0.md), [MCRM-001](MVP-Corpus-Registry-Manifest-v0.1-draft.md), [OTWP-001](Opening-Tree-Wrapping-Plan-v0.1-draft.md), [FEDERATION.md](../../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft Governance Cross-Walk only.**

This document:

- Does **not** alter runtime.
- Does **not** create a machine-readable registry.
- Does **not** create JSON / YAML / schema.
- Does **not** ingest or download Lichess puzzle data.
- Does **not** create a puzzle index.
- Does **not** activate **LARIS**.

It plans a **future semantic cross-walk layer** only.

---

## Executive summary

- `source:lichess-puzzles` is **license_verified** (CC0) / **provenance_verified** in CSV-001.
- Lichess themes may be useful for future **puzzle curation** and **practice selection**.
- Lichess theme strings are **external source vocabulary**, not ChessGuide doctrine IDs.
- ChessGuide target refs remain **governed refs** such as `tactic:*`, `decision_frame:*`, `principle:*`, `endgame:*`.
- Puzzle **solve activity is not learning, not mastery, and not claim evidence**.
- This document creates a **human-readable cross-walk plan only**.

---

## Governance baseline

| Document | Role |
|----------|------|
| **ADR-002** | `corpus_ref` semantic pointer — not evidence / federation export |
| **ADR-003** | Evidence may cite `corpus_ref` — citation ≠ integration |
| **ADR-004** | Claims require stewardship; puzzle familiarity ≠ mastery |
| **ADR-005** | DecisionTrace may cite `corpus_ref` / `decision_frame[]` |
| **ADR-006** | Buddy may surface refs pedagogically — not oracle |
| **ADR-007** | System competence may map positions to `corpus_ref`; engine ≠ corpus truth |
| **ADR-008** | **Accepted** — Corpus Reference Registry and Source Governance v1 |
| **CRR-001** | Tactic/decision_frame seeds, P0–P5, Creator continuity |
| **CSV-001** | `source:lichess-puzzles` verified CC0; theme cross-walk required before admission |
| **MCRM-001** | Draft Manifest — 13 `tactic:*` + 12 `decision_frame:*` seeds |
| **OTWP-001** | Opening tree wrap plan — opening labels are references, not understanding |

---

## Source posture

Per CSV-001 / MCRM-001:

**`source:lichess-puzzles`**

| Field | Value |
|-------|-------|
| source_type | `puzzle_db` |
| license_status | `license_verified` |
| license | CC0 |
| provenance_status | `provenance_verified` |
| disposition | `optional_verified_source_ref_after_theme_crosswalk` |
| allowed_uses | `corpus_curation`, `pedagogical_reference`, `future_puzzle_index` |
| restrictions | `no_bulk_ingest`, `theme_crosswalk_required`, `puzzle_solve_not_mastery`, `not_for_claim`, `not_federation_export` |

**Important:**

- No Lichess puzzle data is downloaded or ingested.
- No raw `PuzzleId` rows.
- No `FEN` / `Moves` / `Rating` / `Theme` rows copied.
- This cross-walk only maps **vocabulary**.

---

## Problem statement

ChessGuide needs to interpret external Lichess puzzle themes **without** letting external labels become doctrine, learner evidence, mastery, claims, or federation export. The system needs a **governed semantic bridge** from Lichess theme labels to ChessGuide corpus references.

---

## Design goals

- Preserve ChessGuide registry namespaces.
- Avoid copying external theme names as doctrine IDs.
- Allow a future puzzle selector to use mapped themes.
- Keep puzzle solve separate from learning evidence.
- Keep Buddy explanations grounded in ChessGuide refs.
- Keep federation export clean.
- Keep Creator continuity by versioning cross-walk mappings.
- Support later Tactical Safety Scanner / SCC LLD.

---

## Non-goals

- No runtime code change
- No puzzle import
- No Lichess data download
- No dataset ingestion
- No source mirror
- No JSON/YAML registry
- No schema
- No tests
- No LLD
- No UML
- No LARIS
- No mastery model
- No EvidenceRecord generation
- No Claim generation
- No federation export widening
- No ADR status change

---

## Cross-walk principles

1. Lichess theme label is **source vocabulary**, not doctrine.
2. ChessGuide target ref is **governed corpus vocabulary**.
3. One Lichess theme may map to **multiple** ChessGuide refs.
4. One ChessGuide ref may receive **several** Lichess theme aliases.
5. Cross-walk mapping is **not** puzzle ingestion.
6. Cross-walk mapping is **not** evidence.
7. Puzzle solve is **activity**, not integration.
8. Buddy may cite ChessGuide refs, **not** raw external labels as doctrine.
9. External labels must remain **versioned and source-scoped**.
10. Ambiguous themes must remain **uncurated** until steward review.

---

## Lichess theme role

Lichess themes are:

- candidate source labels
- useful for future puzzle grouping
- useful for future practice selection
- **not** sufficient as doctrine
- **not** sufficient as mastery
- **not** sufficient as claim evidence
- **not** exported

---

## ChessGuide target namespaces

Target families:

- `tactic:*`
- `decision_frame:*`
- `principle:*`
- `endgame:*`
- `tablebase:*`
- `opening:*`
- `plan:*`
- optional future `motif:*`

**Rules:**

- `tactic:*` is preferred for **tactical motifs**.
- `decision_frame:*` is used for **calculation / scanning behavior**.
- `principle:*` is used for **general teaching principles**.
- `endgame:*` / `tablebase:*` are used for **endgame concepts**.
- Raw Lichess theme strings **must not** become a primary `corpus_ref`.

---

## Cross-walk record shape

Human-readable conceptual record — **not** JSON Schema.

| Field | Purpose |
|-------|---------|
| `crosswalk_id` | Stable ID for the cross-walk row |
| `source_id` | `source:lichess-puzzles` |
| `source_theme` | External theme string (e.g. `fork`) |
| `source_theme_family` | tactic / mate / endgame / opening / phase / meta |
| `source_theme_description` | Short external description (paraphrased, not copied verbatim) |
| `target_corpus_refs[]` | All proposed ChessGuide refs |
| `primary_target_ref` | Preferred governed ref |
| `secondary_target_refs[]` | Additional governed refs |
| `target_family` | Namespace of primary target |
| `mapping_type` | exact / close / broader / narrower / composite / ambiguous / rejected |
| `curation_status` | draft_mapping / steward_reviewed / source_aligned / deprecated / rejected |
| `confidence` | high / medium / low |
| `source_license_status` | `license_verified` (CC0) |
| `source_provenance_status` | `provenance_verified` |
| `limitations[]` | e.g. not_doctrine, label_not_understanding, future_ref_candidate |
| `boundary_flags` | See below |
| `version` | CorpusRegistryVersion membership |
| `supersedes` | Prior crosswalk_id if renamed |
| `superseded_by` | Replacement if deprecated |
| `notes` | Curation notes |

**`mapping_type` values:** `exact`, `close`, `broader`, `narrower`, `composite`, `ambiguous`, `rejected`.

**`curation_status` values:** `draft_mapping`, `steward_reviewed`, `source_aligned`, `deprecated`, `rejected`.

---

## Boundary flags

All cross-walk rows inherit:

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

## MVP theme cross-walk table

Human-readable mapping only. `source_theme` strings are **external labels**; targets are **governed ChessGuide refs**. `curation_status: draft_mapping` for all rows. Refs not present in MCRM-001 are marked **future candidate** (not accepted doctrine, not created in any registry file).

### Tactical motifs

| source_theme | primary_target_ref | secondary_target_refs | mapping_type | confidence | limitations |
|--------------|--------------------|-----------------------|--------------|------------|-------------|
| `fork` | `tactic:fork` | `tactic:double_attack` | exact | high | label_not_understanding |
| `pin` | `tactic:pin` | — | exact | high | — |
| `skewer` | `tactic:skewer` | — | exact | high | — |
| `discoveredAttack` | `tactic:discovered_attack` | — | exact | high | — |
| `doubleAttack` | `tactic:double_attack` | `tactic:fork` | exact | high | — |
| `deflection` | `tactic:deflection` | — | exact | high | — |
| `decoy` | `tactic:decoy` | — | exact | high | — |
| `clearance` | `tactic:clearance` | — | exact | high | — |
| `interference` | `tactic:interference` | — | exact | high | — |
| `attraction` | `tactic:decoy` | `motif:attraction` (future) | close | medium | future_ref_candidate |
| `sacrifice` | `decision_frame:calculation_tree` | `motif:sacrifice` (future) | broader | low | ambiguous; future_ref_candidate |
| `trappedPiece` | `tactic:trapped_piece` (future) | `principle:piece_activity` | narrower | medium | future_ref_candidate |
| `hangingPiece` | `decision_frame:loose_pieces_drop_off` | — | close | high | not_tactic_mastery |
| `quietMove` | `decision_frame:calculation_tree` | `decision_frame:candidate_moves` | broader | medium | — |
| `zwischenzug` | `tactic:zwischenzug` | — | exact | high | — |
| `overload` | `tactic:overloaded_piece` | — | exact | high | — |

### Mate patterns

| source_theme | primary_target_ref | secondary_target_refs | mapping_type | confidence | limitations |
|--------------|--------------------|-----------------------|--------------|------------|-------------|
| `mate` | `decision_frame:mate_threat_scan` | — | broader | high | not_mastery |
| `mateIn1` | `decision_frame:mate_threat_scan` | — | close | high | — |
| `mateIn2` | `decision_frame:mate_threat_scan` | `decision_frame:calculation_tree` | composite | high | — |
| `mateIn3` | `decision_frame:mate_threat_scan` | `decision_frame:calculation_tree` | composite | high | — |
| `backRankMate` | `tactic:back_rank_mate` | `decision_frame:mate_threat_scan` | exact | high | — |
| `smotheredMate` | `tactic:smothered_mate` | `decision_frame:mate_threat_scan` | exact | high | — |
| `hookMate` | `tactic:hook_mate` (future) | `decision_frame:mate_threat_scan` | narrower | medium | future_ref_candidate |
| `anastasiaMate` | `tactic:anastasia_mate` (future) | `decision_frame:mate_threat_scan` | narrower | medium | future_ref_candidate |
| `arabianMate` | `tactic:arabian_mate` (future) | `decision_frame:mate_threat_scan` | narrower | medium | future_ref_candidate |
| `bodenMate` | `tactic:boden_mate` (future) | `decision_frame:mate_threat_scan` | narrower | medium | future_ref_candidate |
| `dovetailMate` | `tactic:dovetail_mate` (future) | `decision_frame:mate_threat_scan` | narrower | medium | future_ref_candidate |

### Endgame / pawn / promotion

| source_theme | primary_target_ref | secondary_target_refs | mapping_type | confidence | limitations |
|--------------|--------------------|-----------------------|--------------|------------|-------------|
| `endgame` | `endgame:*` (future taxonomy) | — | broader | low | ambiguous; future_ref_candidate |
| `pawnEndgame` | `endgame:king_pawn_vs_king` | `endgame:pawn_endgame` (future) | close | medium | not_always_KPK |
| `rookEndgame` | `endgame:rook_endgame` (future) | `endgame:rook_pawn_basic` | narrower | medium | future_ref_candidate |
| `queenEndgame` | `endgame:queen_endgame` (future) | — | narrower | low | future_ref_candidate |
| `bishopEndgame` | `endgame:bishop_endgame` (future) | — | narrower | low | future_ref_candidate |
| `knightEndgame` | `endgame:knight_endgame` (future) | — | narrower | low | future_ref_candidate |
| `promotion` | `tactic:promotion` (future) | — | close | medium | future_ref_candidate |
| `underPromotion` | `tactic:underpromotion` (future) | — | narrower | medium | future_ref_candidate |

### Opening / structure / strategic

| source_theme | primary_target_ref | secondary_target_refs | mapping_type | confidence | limitations |
|--------------|--------------------|-----------------------|--------------|------------|-------------|
| `opening` | `opening:*` (context only) | — | broader | low | OTWP-001; label_not_understanding |
| `middlegame` | `phase:middlegame` (future) | review_only | broader | low | ambiguous; future_ref_candidate |
| `advantage` | review_only | — | ambiguous | low | metadata_only |
| `equality` | review_only | — | ambiguous | low | metadata_only |
| `defensiveMove` | `decision_frame:defensive_scan_before_attack` | — | close | medium | — |
| `attackingF2F7` | `tactic:attack_f2_f7` (future) | `principle:king_safety` | narrower | medium | future_ref_candidate |
| `kingsideAttack` | `plan:kingside_attack` (future) | — | narrower | medium | future_ref_candidate |
| `queensideAttack` | `plan:queenside_attack` (future) | — | narrower | medium | future_ref_candidate |
| `advancedPawn` | `principle:advanced_pawn` (future) | `endgame:pawn_structure` (future) | narrower | low | future_ref_candidate |
| `exposedKing` | `principle:king_safety` | `decision_frame:king_safety_first` | close | medium | — |

**Important:** Future refs above are **candidates only** — not created in any registry file and not accepted doctrine. Ambiguous items are kept explicit.

---

## Decision-frame mappings

Source themes that map to **decision frames** (how the learner should *think*, not what they have learned):

- `hangingPiece` → `decision_frame:loose_pieces_drop_off` (LPDO)
- `mate` / `mateInN` → `decision_frame:mate_threat_scan` + `decision_frame:calculation_tree`
- `defensiveMove` → `decision_frame:defensive_scan_before_attack`
- `quietMove` → `decision_frame:calculation_tree` / `decision_frame:candidate_moves`
- `opening` → context only, **after safety**

Decision-frame mappings describe **thinking procedure**, not learned state.

---

## Tactical motif mappings

These source themes map cleanly to existing MCRM-001 `tactic:*` refs:

`fork`, `pin`, `skewer`, `discoveredAttack`, `doubleAttack`, `deflection`, `decoy`, `clearance`, `interference`, `zwischenzug`, `overload`.

- They **can** support future puzzle selection.
- They **cannot** create mastery.

---

## Mate-pattern mappings

- Some mate themes map to **existing** refs:
  - `backRankMate` → `tactic:back_rank_mate`
  - `smotheredMate` → `tactic:smothered_mate`
- Many named mate patterns become **future candidate** refs:
  - `hookMate`, `anastasiaMate`, `arabianMate`, `bodenMate`, `dovetailMate`
- **All** mate patterns also relate to `decision_frame:mate_threat_scan`.

---

## Endgame / promotion / pawn mappings

- Endgame themes require a **separate endgame taxonomy expansion** (future).
- Syzygy / tablebase remains a **reference lane**, not learner evidence.
- `promotion` / `underPromotion` are candidate `tactic:*` refs but **not in MVP**.
- Pawn endgames may relate to `endgame:king_pawn_vs_king` but **not always**.

---

## Opening / structure mappings

- `opening` theme is **contextual**; not a direct proof of opening knowledge.
- Opening labels must respect **OTWP-001** and the future opening wrap.
- Structural / strategic themes should map to `principle:*` or `plan:*` **only after curation**.

---

## Ambiguous or rejected mappings

The following are **review_only / metadata_only** — not pedagogical doctrine, not mastery, not evidence:

| source_theme | disposition |
|--------------|-------------|
| `advantage` | review_only / ambiguous |
| `equality` | review_only / ambiguous |
| `crushing` | review_only / metadata_only |
| `master` | metadata_only (player-level tag) |
| `masterVsMaster` | metadata_only |
| `veryLong` | metadata_only (length tag) |
| `long` | metadata_only |
| `short` | metadata_only |
| `oneMove` | metadata_only |
| `exposedKing` (if not tactically specific) | ambiguous → principle:king_safety only after curation |
| `middlegame` (as phase label only) | metadata_only / phase tag |

---

## Curation workflow

1. Identify source theme.
2. Classify `source_theme_family`.
3. Propose target refs.
4. Check against MCRM-001 existing refs.
5. Mark **future refs** if absent.
6. Assign `mapping_type` and `confidence`.
7. Steward review.
8. Publish in a future **CorpusRegistryVersion**.
9. Preserve old mappings through `supersedes` / `superseded_by`.

---

## Versioning and immutability

- Cross-walk belongs to a future **CorpusRegistryVersion**.
- Published mappings are **immutable**.
- Corrections create a **new version**.
- Source theme aliases remain **resolvable**.
- Creator continuity must preserve the **cross-walk version**.

---

## Relationship to System Chess Competence

| May | Must not |
|-----|----------|
| Use the cross-walk to classify future puzzle candidates | Write learner state |
| Map source themes to governed refs | Issue mastery |
| Support `PositionConceptMap` / `TeachingOpportunity` in future LLD | Export source themes |
| | Treat external labels as doctrine |

---

## Relationship to Buddy Pedagogy

| May | Must not |
|-----|----------|
| Cite ChessGuide target refs | Say a learner has "mastered" a theme from solving puzzles |
| Explain motif vocabulary | Claim mastery from theme recognition |
| Ask learner to self-explain theme recognition | Impersonate learner rationale |
| Use puzzle theme as hint **only after** proper pedagogical gating | Cite raw external labels as doctrine |
| | Present puzzle solve as evidence or claim |
| | Praise tactical play that fails P1/P2 safety |

---

## Relationship to DecisionTrace / EvidenceRecord / Claim

- DecisionTrace may include `corpus_ref[]` / `decision_frame[]` derived from mapped themes.
- EvidenceRecord may cite a `corpus_ref` — citation is **not** proof of integration (ADR-003).
- Claim still requires **ADR-004 stewardship**.
- Cross-walk citation and puzzle solve are **not evidence** by themselves.

---

## Relationship to Federation Export

Per [FEDERATION.md](../../../FEDERATION.md) and `export_v1.py`:

- No cross-walk metadata in federation export.
- No `source_theme`.
- No `corpus_ref` / `source_refs`.
- No puzzle theme labels.
- ObservationRecord remains a **terminal game slice only**.

---

## Relationship to Creator continuity

- Creator continuity needs **versioned** cross-walk mappings.
- Historical theme aliases must resolve even if mappings change.
- Preserve `source_theme`, `primary_target_ref`, cross-walk version, `source_license_status`, `curation_status`.
- Do **not** flatten to free text.

---

## Migration phases

| Phase | State |
|-------|-------|
| **Phase 0 — Current state** | Lichess themes exist externally; no cross-walk; no puzzle index |
| **Phase 1 — Governance cross-walk plan** | this document |
| **Phase 2 — Draft cross-walk mapping artifact** | governance markdown table; no ingestion |
| **Phase 3 — Registry version publication** | machine-readable format decision after MCRM-OQ-1 |
| **Phase 4 — Puzzle selector / SCC LLD** | future only |
| **Phase 5 — Tests and migration** | future only |

---

## Risks / anti-patterns

| Risk / anti-pattern | Mitigation |
|---------------------|------------|
| Treating Lichess theme as doctrine | Theme = source vocabulary; governed ref is doctrine |
| Copying theme strings as `corpus_ref` IDs | Raw themes never become primary refs |
| Puzzle solve → mastery | `puzzle_solve_not_mastery`; ADR-004 |
| Bulk ingesting puzzle data | `no_bulk_ingest`; this is vocabulary-only |
| Exporting theme metadata to federation | `not_federation_export` |
| Treating named mate patterns as accepted refs | Marked future candidate, not doctrine |
| Collapsing source → corpus_ref → evidence → claim | ADR-002–004; boundary flags |
| Breaking Creator continuity on alias rename | Immutable versions; resolvable aliases |
| Ambiguous themes silently curated | Kept `review_only` until steward review |

---

## Open questions

| ID | Question |
|----|----------|
| **LTCW-OQ-1** | Should the cross-walk later become YAML or stay markdown first? |
| **LTCW-OQ-2** | Where should the future cross-walk mapping artifact live? |
| **LTCW-OQ-3** | Which Lichess theme version/snapshot should be pinned? |
| **LTCW-OQ-4** | Should named mate patterns (hook/anastasia/arabian/boden/dovetail) become `tactic:*` or `motif:*`? |
| **LTCW-OQ-5** | How should endgame taxonomy expand (rook/queen/bishop/knight endgames)? |
| **LTCW-OQ-6** | Should `motif:*` be a distinct family from `tactic:*`? |
| **LTCW-OQ-7** | How should meta/length/player themes be stored (metadata_only)? |
| **LTCW-OQ-8** | What minimum cross-walk is needed before a puzzle selector LLD? |
| **LTCW-OQ-9** | How should ambiguous themes (advantage/equality/crushing) be handled in practice? |
| **LTCW-OQ-10** | How should Creator serve historical theme alias mappings? |

---

## Recommendation

1. PR for this cross-walk plan.
2. Draft cross-walk mapping artifact (governance markdown, no ingestion).
3. Endgame taxonomy expansion governance doc.
4. `motif:*` vs `tactic:*` family decision.
5. Tactical Safety Scanner / System Chess Competence LLD.
6. UML package.

---

## Downstream work

| Work | Depends on |
|------|------------|
| PR for LTCW-001 | This draft |
| Draft cross-walk mapping artifact | Phase 2; LTCW-OQ-2 |
| Endgame taxonomy expansion | LTCW-OQ-5 |
| `motif:*` family decision | LTCW-OQ-6 |
| Puzzle selector / SCC LLD | CRR-001, MCRM-001 |
| UML package | CRR-001 |
| Registry format decision | MCRM-OQ-1 |

---

## Governance boundary statement

**LTCW-001 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, ingest datasets, download Lichess puzzles/games/PGNs, create puzzle import or source ingestion files, create corpus registry JSON/YAML, create JSON Schema, create a runtime registry, create LLD or UML artifacts, or **activate LARIS**.

It is a **human-readable governance cross-walk plan** mapping Lichess puzzle theme vocabulary to ChessGuide Corpus Reference Registry vocabulary.
