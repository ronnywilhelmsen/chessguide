# Corpus Reference Registry Review v1.0

| Field | Value |
|-------|-------|
| **Document ID** | CRR-001 |
| **Title** | Corpus Reference Registry Review v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Review |
| **Date** | 2026-06-17 |
| **Scope** | Review / source governance / manifest requirements only |
| **Depends on** | [ADR-002](../governance/adr/ADR-002-sovereign-reference-model-v1.md) through [ADR-008](../governance/adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md), [CCCR v1.0](ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](System-Chess-Competence-Review-v1.0.md), [SCC-HLD-001](../architecture/System-Chess-Competence-HLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft review / architecture input only.**

This review evaluates what the **first Corpus Reference Registry manifest** must support — including **source governance**, **license/provenance discipline**, and **tactical motif / safety-checklist pedagogical requirements** — **without** creating the registry file, JSON Schema, runtime, or dataset ingestion.

This review does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- Schemas (JSON Schema, SQL)
- Implementation files
- ADR acceptance or status changes
- Corpus registry JSON/YAML manifest files
- Dataset ingestion or download (Lichess puzzles, Syzygy tablebases, PGN archives)
- LLD / UML artifacts
- LARIS activation

**Governance rule:** All external terminology and sources in this review are **review input** unless already admitted by repository doctrine. This review **does not** verify external licenses or provenance in-repo; external sources remain `candidate_source` or `unverified_external_input` until a separate **Corpus Source Verification Review** completes.

---

## Executive summary

ChessGuide needs a governed **Corpus Reference Registry** so System Chess Competence and Buddy can cite stable `corpus_ref` pointers without confusing source data, semantic concepts, learner evidence, claims, engine truth, or federation export. [ADR-008](../governance/adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md) (Draft) defines the governance semantic model; **this review** defines what the **first manifest** must carry and what **tactical cognition / safety-checklist** vocabulary the registry must support.

**Two connected needs:**

1. **Source governance** — seven candidate sources across four ADR-008 pillars; all external rows remain unverified in this task.
2. **Chess pedagogy / tactical cognition** — Tactical Motifs, Safety Checklists, CCT (Checks–Captures–Threats), LPB (loose pieces), king safety, mate-threat scans, forcing-move prioritization, candidate generation, calculation tree, sanity check, and Buddy self-explanation-before-engine-reveal — represented primarily as `decision_frame:*` and `tactic:*` / `motif:*` registry entries with **pedagogical_priority** and **scan_phase** metadata.

**Key findings:**

| Area | Verdict |
|------|---------|
| ADR-008 Draft governance model | **Adequate** for manifest design input |
| Registry manifest file | **Absent** — requirements defined here only |
| Runtime `openings.ts` | **Corpus-like** — wrap, not replace |
| External sources | **All candidate** — no `license_verified` in this review |
| Safety-first pedagogy | **Must be registry-addressable** via `decision_frame:*` + priority fields |
| CCT / safety scanner | **Not runtime** — belongs in future System Chess Competence LLD; corpus holds **teachable frames**, not scan outputs |

**Recommendation:** Proceed to **Corpus Source Verification Review v1.0**, then **MVP Corpus Registry Manifest draft**, then **Tactical Safety Scanner / System Chess Competence LLD** — in that order. Do not ingest datasets or implement scanners before source verification and manifest draft.

---

## Accepted governance baseline

| ADR | Status | Corpus registry relevance |
|-----|--------|----------------------------|
| [ADR-002](../governance/adr/ADR-002-sovereign-reference-model-v1.md) | Accepted | `corpus_ref` = semantic pointer; not evidence, claim, mastery, or federation export |
| [ADR-003](../governance/adr/ADR-003-loe-doe-evidence-record-schema-v1.md) | Accepted | Evidence may cite `corpus_ref` — citation ≠ integration |
| [ADR-004](../governance/adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md) | Accepted | Claims require stewardship; puzzle practice ≠ mastery |
| [ADR-005](../governance/adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) | Accepted | `decision_frame[]`, `corpus_ref[]` on DecisionTrace — separate from learner `rationale_statement` |
| [ADR-006](../governance/adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) | Accepted | Buddy surfaces corpus pedagogically; self-explanation before engine reveal |
| [ADR-007](../governance/adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md) | Accepted | Domain Corpus vs Engine Reference; competence maps positions to refs |
| [ADR-008](../governance/adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md) | **Draft** | Source pillars, families, D1–D15, minimal CorpusRef / Source Reference shapes |

---

## Source governance review

ADR-008 requires treating external sources as **`candidate_source`** until license and provenance are independently verified. This review inventories candidate sources and assigns **review disposition** only — not product clearance.

### Governance principles (from ADR-008, reaffirmed)

- **CorpusSource** / **CorpusArtifact** ≠ **CorpusRef** / **CorpusConcept**
- Raw datasets are not registry doctrine until **curated** entries are published
- Large binaries stay **outside Git** — manifests, hashes, and metadata only
- Puzzle solve, opening label, tablebase lookup, and master-game familiarity are **not** learner evidence or claims

---

## License/provenance review table

Statuses use ADR-008 vocabulary. **No external source is `license_verified` or `provenance_verified` in this review** — repository contains no primary license attestation artifacts for these rows.

| source_id | source_name | source_type | Candidate pillar | Expected license status | Provenance status | Suggested use | Restrictions / unknowns | Review disposition |
|-----------|-------------|-------------|------------------|-------------------------|-------------------|---------------|----------------------|-------------------|
| `source:lichess-puzzles` | Lichess Puzzle Database | `puzzle_db` | Pillar 1 — Tactical Pattern | `unknown` | `unknown` | Tactical motif indexing, `PuzzleCorpusSelector` (future), pattern labels for `tactic:*` | License terms for redistribution/derivatives not verified in repo; theme taxonomy may differ from ChessGuide `tactic:*`; solve records are activity not evidence | `candidate_source` — requires **Corpus Source Verification Review** before `curated` puzzle-linked entries |
| `source:lichess-chess-openings` | lichess-org/chess-openings | `openings_repo` | Pillar 2 — Opening / Structure | `candidate` (commonly cited as permissive — **not verified here**) | `unknown` | ECO codes (`eco:*`), opening names, variation labels | GitHub license file not audited in this task; mapping to runtime tree paths unknown; label ≠ understanding | `candidate_source` — verify license + commit snapshot before `eco:*` doctrine |
| `source:syzygy-tablebases` | Syzygy tablebases (WDL/DTZ) | `tablebase` | Pillar 3 — Endgame Reference | `unknown` | `unknown` | `tablebase:syzygy_wdl`, `tablebase:syzygy_dtz` reference profiles; endgame correctness lane | Multi-GB binaries must not enter Git; lookup is reference/measurement not mastery; distinct from `engine_ref` (ADR-008-OQ-6) | `candidate_source` — reference profile only; no download in registry phase |
| `source:caissabase` | Caissabase | `pgn_collection` | Pillar 4 — Master Game | `unknown` | `unknown` | Curated human examples (`master_game:*`) | Collection-level license unclear in repo; per-game rights may vary | `candidate_source` — high license risk; per-game curation required (ADR-008 D7) |
| `source:twic` | The Week in Chess (TWIC) | `pgn_collection` | Pillar 4 — Master Game | `unknown` | `unknown` | Illustrative master games, plan examples | Commercial/redistribution terms not verified | `candidate_source` — verify before any `master_game:*` publication |
| `source:lichess-master-games` | Lichess master games database | `pgn_collection` | Pillar 4 — Master Game | `unknown` | `unknown` | Human example corpus for plans and technique | Lichess data license not verified in this task | `candidate_source` — paired verification with `source:lichess-puzzles` |
| `source:runtime-opening-tree` | ChessGuide `openings.ts` / `openingdata.ts` | `runtime_tree` | Pillar 2 — Opening / Structure | `unknown` | `partial` (in-repo, ~2,400 lines) | Wrap map to `opening:*`; live game opening labels via `locate()` | No `corpus_ref` IDs; authorship/history of embedded data unclear; not a substitute for ECO governance | `candidate_source` — treat as internal artifact until steward wrap manifest; lean `curation_status: curated` only for **mapping metadata**, not external claim |

**Classification:** All rows above except partial runtime provenance are `[UNVERIFIED EXTERNAL INPUT]` until Corpus Source Verification Review completes.

---

## Corpus source pillar review

### Pillar 1 — Tactical Pattern Corpus

| Aspect | Review |
|--------|--------|
| **Candidate** | Lichess Puzzle Database |
| **Registry need** | `tactic:*`, `motif:*` labels; optional `PuzzleReference` linkage |
| **Pedagogy** | Pattern recognition, teaching opportunities; **not** mastery |
| **Manifest** | Must support `can_generate_puzzle_candidate`, `pedagogical_priority` P2–P3 |
| **Gap** | No tactic registry in runtime; CCCR ~15 tactic slugs vs ADR-008 seed 6 |

### Pillar 2 — Opening / Structure Corpus

| Aspect | Review |
|--------|--------|
| **Candidates** | chess-openings repo + runtime tree |
| **Registry need** | `opening:*`, `eco:*`, `pawn_structure:*`, `plan:*` |
| **Pedagogy** | Labels and plans — **must not** override P0/P1 safety |
| **Manifest** | `pedagogical_priority` typically P4; `safety_relevance: low` for pure opening labels |
| **Gap** | Runtime tree present; no stable refs (SCCR F3) |

### Pillar 3 — Endgame Reference Corpus

| Aspect | Review |
|--------|--------|
| **Candidate** | Syzygy WDL/DTZ |
| **Registry need** | `tablebase:*`, `endgame:*` technique refs |
| **Pedagogy** | Correctness reference + explanation — not claim |
| **Manifest** | `requires_engine_verification: yes` for tablebase-backed claims in teaching copy |
| **Gap** | No endgame corpus in runtime |

### Pillar 4 — Human Master Game Corpus

| Aspect | Review |
|--------|--------|
| **Candidates** | Caissabase, TWIC, Lichess master, curated PGN |
| **Registry need** | `master_game:*`, `example:*` |
| **Pedagogy** | Illustrative plans — highest license risk |
| **Manifest** | Per-game `source_refs[]`, `restrictions[]` mandatory when curated |
| **Gap** | No master-game index in repo |

---

## Runtime corpus-like material review

### `src/data/openings.ts` + `openingdata.ts`

| Field | Evidence |
|-------|----------|
| **Structure** | SAN tree: `san`, `children[]`, optional `info` = `{Opening}/{Variation}` |
| **Volume** | ~2,400 lines in `openingdata.ts` |
| **API** | `locate(moves[])`, `sanText()` |
| **`corpus_ref`** | **Absent** |
| **Classification** | [RUNTIME] — corpus-like material |
| **Manifest implication** | `source:runtime-opening-tree`; wrap map paths → `opening:*` / `eco:*`; do not duplicate move data in registry |
| **ADR-008 alignment** | D5 candidate; lean wrap per CCCR OQ-CCR-4 |

### `src/chessguide/federation/export_v1.py`

| Field | Evidence |
|-------|----------|
| **Role** | Completed game → Federation ObservationRecord |
| **Forbidden** | `learning`, `coach`, `knowledge`, `engine`, `mastery`, `hint`, `cp`, etc. |
| **`corpus_ref`** | Not exported — correct |
| **Manifest implication** | All registry metadata fields `not_federation_export: true` by default |
| **ADR-008 alignment** | D10 consistent |

### Absent (expected)

- Tactical motif DB, CCT scanner, safety checklist runtime
- Registry manifest, Source Reference publication files
- Puzzle/tablebase/PGN ingestion pipelines

---

## Manifest/schema requirements

**Proposal only** — not JSON Schema, not a registry file in this branch.

The first manifest must support the following **minimum fields** per registry entry, extending ADR-008 minimal CorpusRef shape:

### Core identity (ADR-008 aligned)

| Field | Required | Purpose |
|-------|----------|---------|
| `corpus_ref` | Yes | Stable ID — e.g. `decision_frame:cct_scan` |
| `family` | Yes | `tactic:` \| `motif:` \| `decision_frame:` \| … |
| `slug` | Yes | Stable slug within family |
| `title` | Yes | Human-readable label |
| `version` | Yes | Entry version within `CorpusRegistryVersion` |
| `concept_type` | Yes | tactic \| decision_frame \| opening \| endgame \| plan \| … |
| `source_refs[]` | Yes | `source_id` pointers — may be `[]` for hand-curated frames |
| `curation_status` | Yes | ADR-008 status enum |
| `license_status` | Yes | ADR-008 license enum |
| `provenance_status` | Yes | **Manifest extension** — mirror source provenance at entry level |
| `pedagogical_use[]` | Yes | explain \| hint \| puzzle_candidate \| compare \| review_only \| decisiontrace_prompt |
| `related_refs[]` | Optional | Linked `corpus_ref` entries |
| `preconditions[]` | Recommended | e.g. `not_in_check`, `after_safety_clear` |
| `limitations[]` | Recommended | level bounds, `not_for_claim`, etc. |
| `supersedes` | Optional | Prior ref if renamed |
| `superseded_by` | Optional | Replacement if deprecated |

### Pedagogical / safety extensions (this review)

| Field | Required | Purpose |
|-------|----------|---------|
| `pedagogical_priority` | Yes for `decision_frame:*` and safety-adjacent `tactic:*` | P0 \| P1 \| P2 \| P3 \| P4 \| P5 |
| `scan_phase` | Yes for scan frames | pre_move \| candidate_generation \| calculation \| post_candidate_sanity \| post_game_review |
| `safety_relevance` | Yes for frames/motifs | none \| low \| medium \| high \| critical |
| `forces_response` | Recommended | yes \| no \| unknown — opponent must answer? |
| `requires_engine_verification` | Recommended | yes \| no — teaching copy may need `engine_ref` check |
| `can_generate_puzzle_candidate` | Recommended | yes \| no |
| `can_support_decisiontrace_prompt` | Recommended | yes \| no |

### Boundary flags (manifest defaults)

| Field | Default | Purpose |
|-------|---------|---------|
| `not_evidence` | `true` | Registry entry is not EvidenceRecord |
| `not_claim` | `true` | Citation does not imply claim |
| `not_mastery` | `true` | Familiarity ≠ mastery |
| `not_federation_export` | `true` | Withhold from ObservationRecord |

**Rule:** Manifest describes **what may be cited and how** — not learner state, scan outputs, or engine PV dumps.

---

## Tactical Motif and Safety-Checklist Requirements

External chess-pedagogy terms below are **[REVIEW INPUT — UNVERIFIED]** unless cross-walked to Accepted ADR/CCCR doctrine.

### Terminology distinctions

| Term | Definition | Registry representation |
|------|------------|-------------------------|
| **Tactical Motif** | Pattern **category** — fork, pin, skewer, back-rank mate | `tactic:*` (primary); optional `motif:*` when broader than single tactic |
| **Safety Checklist** | **Pre-candidate scan** procedure — king safety, mate threats, loose pieces | `decision_frame:safety_check`, `decision_frame:king_safety_first`, etc. |
| **CCT** | **Checks, Captures, Threats** — forcing-move prioritization scan | `decision_frame:cct_scan`, `decision_frame:checks_captures_threats` |
| **LPB** | **Loose pieces** — hanging/undefended pieces; "loose pieces drop off" habit | `decision_frame:loose_pieces_drop_off`; links to hanging-piece detection |
| **King safety first** | Defensive king safety before attacking plans | `decision_frame:king_safety_first` — P1 |
| **Mate-threat detection** | Scan for mate-in-1 (and critical mate threats) | `decision_frame:mate_threat_scan` — P1 |
| **Loose-piece / hanging-piece detection** | Identify undefended or inadequately defended pieces | Part of safety checklist; `tactic:` may label **motif after** scan |
| **Forcing moves first** | Prioritize checks, captures, threats in candidate ordering | `decision_frame:forcing_moves_first` — P2 |
| **Candidate move generation** | Enumerate plausible moves before deep calculation | `decision_frame:candidate_moves` |
| **Calculation tree** | Recursive exploration over **forcing** lines | `decision_frame:calculation_tree` |
| **Sanity check** | Re-run safety scan **after** choosing a candidate move | `decision_frame:sanity_check` — P5 |
| **Decision Frame** | Teachable **thinking procedure** | `decision_frame:*` family per ADR-005 / ADR-008 |

### Proposed seed `decision_frame:*` refs

| corpus_ref | title (en) | pedagogical_priority | scan_phase | safety_relevance |
|------------|------------|---------------------|------------|------------------|
| `decision_frame:safety_check` | Safety check (general) | P1 | pre_move | critical |
| `decision_frame:king_safety_first` | King safety first | P1 | pre_move | critical |
| `decision_frame:cct_scan` | CCT scan (checks, captures, threats) | P2 | candidate_generation | high |
| `decision_frame:checks_captures_threats` | Checks, captures, threats enumeration | P2 | candidate_generation | high |
| `decision_frame:loose_pieces_drop_off` | Loose pieces drop off | P1 | pre_move | high |
| `decision_frame:mate_threat_scan` | Mate threat scan | P1 | pre_move | critical |
| `decision_frame:forcing_moves_first` | Forcing moves first | P2 | candidate_generation | high |
| `decision_frame:candidate_moves` | Candidate move generation | P3 | candidate_generation | medium |
| `decision_frame:calculation_tree` | Calculation tree (forcing lines) | P3 | calculation | medium |
| `decision_frame:sanity_check` | Sanity check after candidate | P5 | post_candidate_sanity | critical |
| `decision_frame:defensive_scan_before_attack` | Defensive scan before attack | P1 | pre_move | critical |
| `decision_frame:offensive_scan_after_safety` | Offensive scan after safety clear | P2 | candidate_generation | medium |

**Manifest flags (recommended defaults):**

| Ref | forces_response | requires_engine_verification | can_generate_puzzle_candidate | can_support_decisiontrace_prompt |
|-----|-----------------|-------------------------------|------------------------------|----------------------------------|
| `decision_frame:safety_check` | unknown | no | no | yes |
| `decision_frame:king_safety_first` | no | no | no | yes |
| `decision_frame:cct_scan` | yes | no | yes | yes |
| `decision_frame:checks_captures_threats` | yes | no | yes | yes |
| `decision_frame:loose_pieces_drop_off` | no | no | yes | yes |
| `decision_frame:mate_threat_scan` | yes | yes | yes | yes |
| `decision_frame:forcing_moves_first` | yes | no | yes | yes |
| `decision_frame:candidate_moves` | unknown | no | no | yes |
| `decision_frame:calculation_tree` | yes | yes | yes | yes |
| `decision_frame:sanity_check` | unknown | yes | no | yes |
| `decision_frame:defensive_scan_before_attack` | no | no | no | yes |
| `decision_frame:offensive_scan_after_safety` | yes | no | yes | yes |

### Proposed seed `tactic:*` / `motif:*` refs

| corpus_ref | title (en) | pedagogical_priority | scan_phase | safety_relevance |
|------------|------------|---------------------|------------|------------------|
| `tactic:fork` | Fork / double attack | P3 | calculation | medium |
| `tactic:pin` | Pin | P3 | calculation | medium |
| `tactic:skewer` | Skewer | P3 | calculation | medium |
| `tactic:back_rank_mate` | Back-rank mate | P3 | calculation | high |
| `tactic:discovered_attack` | Discovered attack | P3 | calculation | high |
| `tactic:overloaded_piece` | Overloaded piece | P3 | calculation | medium |
| `tactic:deflection` | Deflection | P3 | calculation | medium |
| `tactic:decoy` | Decoy / lure | P3 | calculation | medium |
| `tactic:clearance` | Clearance | P3 | calculation | medium |
| `tactic:interference` | Interference | P3 | calculation | medium |
| `tactic:zwischenzug` | Zwischenzug | P3 | calculation | medium |
| `tactic:double_attack` | Double attack | P3 | calculation | medium |
| `tactic:smothered_mate` | Smothered mate | P3 | calculation | high |

**Note:** Hanging/loose piece is primarily a **safety checklist** concern (P1), not a tactic motif label — avoid treating "found hanging queen" as `tactic:*` mastery.

### Corpus vs runtime boundary (CCT / safety scanner)

| Concern | Belongs in corpus registry | Belongs in System Chess Competence (future runtime) |
|---------|---------------------------|-----------------------------------------------------|
| Teachable procedure names | `decision_frame:*` entries | — |
| Scan **outputs** (e.g. "Qh5 hangs") | — | `PositionConceptMap`, derived flags — **not** sovereign learner state |
| Forcing-move ordering | Frame metadata `forces_response` | Move ordering in competence service |
| Engine verification of mate | `requires_engine_verification: yes` on frame | `engine_ref` snapshot — ADR-007 |
| Puzzle candidacy | `can_generate_puzzle_candidate` | `PuzzleCorpusSelector` — future |

---

## Decision-frame taxonomy proposal

### Layers

```text
P0 Legal emergency     → decision_frame: (implicit — rules engine, not corpus)
P1 Safety checklist    → safety_check, king_safety_first, mate_threat_scan, loose_pieces_drop_off, defensive_scan_before_attack
P2 Forcing scan (CCT)  → cct_scan, checks_captures_threats, forcing_moves_first, offensive_scan_after_safety
P3 Calculation         → candidate_moves, calculation_tree + tactic:* matching
P4 Positional / plan   → plan:*, opening:*, pawn_structure:* (after P0–P3 clear)
P5 Sanity check        → sanity_check
```

### CCCR harmonization

CCCR proposed `skill:calculation:*` — this review **maps calculation skills to `decision_frame:*`** rather than a new family (CRR-OQ-4). CCCR `decision_frame:tactic` aligns with `decision_frame:cct_scan` + `tactic:*` combination.

### ADR-005 alignment

DecisionTrace `decision_frame[]` may cite registry frames **without** substituting learner `rationale_statement`. Buddy may **prompt** frames; learner must produce reasoning with `trace_source: learner`.

---

## Pedagogical priority model

### Priority order

| Priority | Name | Scope | Example frames / rules |
|----------|------|-------|------------------------|
| **P0** | Legal emergency | Currently in check — only legal parries | Rules engine; not a corpus ref |
| **P1** | Immediate defensive safety | Mate in 1, severe king safety, hanging queen/major material | `mate_threat_scan`, `king_safety_first`, `loose_pieces_drop_off`, `defensive_scan_before_attack` |
| **P2** | Forcing-move scan | Own checks, captures, direct threats | `cct_scan`, `checks_captures_threats`, `forcing_moves_first` |
| **P3** | Tactical motif matching | Map position to `tactic:*` / `motif:*` | fork, pin, skewer, … |
| **P4** | Positional / strategic plan | Only after P0–P3 red flags handled | `plan:*`, `opening:*`, `pawn_structure:*` |
| **P5** | Sanity check | Re-run safety on chosen candidate | `sanity_check` |

### Rules

1. **Safety-first overrides positional corpus** — opening/strategy refs must not praise a move that fails P0/P1 (ADR-006 educator-not-calculator; this review).
2. **Buddy self-explanation before engine reveal** when pedagogically appropriate (ADR-006 D2; SCCR F14) — prompt `decision_frame:*` + learner `rationale_statement` before `engine_ref` disclosure.
3. **Engine/Stockfish verifies tactical correctness** — `engine_ref` is measurement/reference, not learner reasoning or evidence (ADR-007 D3).
4. **Puzzle solving supports practice** — not mastery without ADR-004 stewardship (ADR-008 D4; CG-FLL-002).
5. **Queen sacrifices and sharp lines** — Buddy explains with bounded `corpus_ref` + optional engine check; must not paste PV as learner reasoning (CRR-OQ-9).

---

## Relationship to System Chess Competence

| System competence may | System competence must not |
|----------------------|---------------------------|
| Read `corpus_ref`, `pedagogical_priority`, `scan_phase` metadata | Write learner state or mastery |
| Map positions to `tactic:*` suggestions (derived) | Treat scan output as EvidenceRecord |
| Order teaching opportunities by P0–P5 | Export analysis to federation |
| Use `engine_ref` to verify mate/tablebase flags | Collapse engine output into `corpus_ref` truth |
| Emit `PositionConceptMap.corpus_refs[]` | Persist puzzle solve as integration |

**Future LLD:** Tactical Safety Scanner / CCT ordering lives in **System Chess Competence** — registry supplies **vocabulary and priority**, not implementation (non-goal).

---

## Relationship to Buddy Pedagogy

| Buddy may | Buddy must not |
|---------|----------------|
| Cite `decision_frame:*` in hints and review prompts | Cite unverified external sources as doctrine |
| Prompt self-explanation before engine reveal | Impersonate learner `rationale_statement` |
| Surface `tactic:*` after safety frames cleared | Issue mastery from motif familiarity |
| Use `pedagogical_priority` to sequence interventions | Auto-create EvidenceRecord from corpus cite alone |
| Explain sacrifices with bounded narrative + optional engine check | Dump Stockfish PV as teaching |

Intervention ladder (ADR-006): safety frames at L1–L3; engine reveal at higher levels only after learner attempt.

---

## Relationship to DecisionTrace / EvidenceRecord / Claim

| Record | Registry role |
|--------|---------------|
| **DecisionTrace** | Learner may tag `decision_frame[]` and `corpus_ref[]` — frames are **vocabulary**, not proof |
| **EvidenceRecord** | May cite `corpus_ref` as grounding — does not prove integration |
| **Claim** | May scope hypothesis via evidence lineage — registry refs not claim body |

**Forbidden:** Collapsing safety scan result → EvidenceRecord without observation/demonstration pair (ADR-003; SCC-HLD-001).

---

## Relationship to Federation Export

Per ADR-008 D10 and `export_v1.py`:

- No `corpus_ref`, source metadata, puzzle/tablebase/master-game pointers
- No teaching prompts, DecisionTrace, EvidenceRecords, Claims, learner state
- Manifest boundary flags `not_federation_export: true` are **mandatory defaults**

---

## Relationship to Creator continuity

Long-horizon records citing `decision_frame:*` or `tactic:*` must remain interpretable when:

- Registry version advances (`CorpusRegistryVersion`)
- Entries deprecate with `superseded_by`
- `pedagogical_priority` or `safety_relevance` semantics evolve

Creator serving must preserve **version + lineage** — not flatten to free-text-only labels (ADR-008 D12–D13; ADR-007 D10).

---

## MVP manifest requirements

### Phase 1 — Minimum viable manifest (recommendation)

| Bucket | Minimum entries | Notes |
|--------|-----------------|-------|
| `decision_frame:*` | 12 seeds (this review) | Safety + CCT + calculation + sanity |
| `tactic:*` | 13 seeds (this review) | Core motifs |
| `opening:*` | 3 — sicilian, ruy_lopez, queen_gambit | ADR-008 seed + wrap map stub |
| `eco:*` | 2 — A00, B90 | Candidate from chess-openings |
| `source_refs` | 1 published — `source:runtime-opening-tree` | Others remain candidate until verification |
| **Principles** | 3 — development, center_control, king_safety | CCCR OQ-CCR-9 minimum |

### Phase 2 — After source verification

- Lichess puzzle theme cross-walk (if license cleared)
- `eco:*` expansion from chess-openings snapshot
- First curated `master_game:*` (single illustrative row only)

### Explicitly deferred

- Full CCCR ~49 entries
- Tablebase binary manifests
- Puzzle import index
- JSON Schema ADR

### Acceptance criteria for "MVP manifest draft" task

1. Markdown or YAML under `docs/governance/corpus/` (format: CRR-OQ-10)
2. Every entry has boundary flags and `curation_status`
3. All `decision_frame:*` seeds include `pedagogical_priority` + `scan_phase` + `safety_relevance`
4. No entry marked `license_verified` without verification review row
5. Migration table CCCR `pattern:tactic:*` → `tactic:*` documented

---

## Non-goals

- Runtime CCT scanner implementation
- Pseudocode in `src/` source files
- Engine integration changes
- Puzzle import or Lichess download
- Syzygy tablebase download
- Schema file (JSON Schema)
- Registry YAML/JSON file **in this branch**
- Learner model / digital twin
- Claim / mastery logic
- Federation export widening
- LARIS activation
- LLD / UML artifacts

---

## Risks / anti-patterns

| Risk / anti-pattern | Mitigation |
|---------------------|------------|
| Treating puzzle solve as learning | ADR-004, ADR-008 D4, CG-FLL-002 |
| Treating opening label as understanding | ADR-008 D5; P4 after safety |
| Praising strategic plan when move hangs queen | P1 overrides P4 |
| Engine PV as Buddy explanation | ADR-006, ADR-007; CRR-OQ-9 |
| CCT scan output → EvidenceRecord | Derived competence only |
| Ingesting Lichess before license review | Corpus Source Verification first |
| Storing tablebases in Git | ADR-008 D3 |
| Master games assumed open license | ADR-008 D7; per-game curation |
| `tactic:*` and `motif:*` duplication confusion | Steward rule in CRR-OQ-4 |
| Exporting corpus to federation | ADR-008 D10 |
| Skipping sanity check (P5) | `decision_frame:sanity_check` mandatory in teaching sequences |
| External pedagogy terms as doctrine | Mark [UNVERIFIED EXTERNAL INPUT] until ADR admission |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **CRR-OQ-1** | Which external source licenses are acceptable? | **Open** — Corpus Source Verification Review v1.0 |
| **CRR-OQ-2** | Should Lichess puzzle themes become initial tactical motif taxonomy? | **Open** — lean yes **if** license clears; map themes → `tactic:*` |
| **CRR-OQ-3** | Should `decision_frame:*` include safety_check and CCT terms now? | **Open** — **lean yes** — this review seeds 12 frames |
| **CRR-OQ-4** | Should `tactic:*` and `motif:*` be separate or collapsed? | **Open** — lean **tactic primary**, motif for overlapping/back-rank motifs |
| **CRR-OQ-5** | How should `safety_relevance` and `pedagogical_priority` be encoded? | **Open** — manifest enums per this review; no runtime yet |
| **CRR-OQ-6** | Should CCT scanner outputs become SystemChessCompetence outputs or DecisionTrace prompts? | **Open** — lean **competence outputs** prompt DecisionTrace; not auto-trace |
| **CRR-OQ-7** | What part of CCT belongs in corpus registry vs runtime System Chess Competence? | **Open** — **frames in corpus; scan results in competence** |
| **CRR-OQ-8** | Should forced-move chains be corpus refs, engine refs, or analysis snapshots? | **Open** — lean **engine_ref / analysis snapshot**; `decision_frame:calculation_tree` names procedure |
| **CRR-OQ-9** | How should Buddy explain queen sacrifices without turning engine PV into learner reasoning? | **Open** — bounded narrative + optional engine verify; learner confirms |
| **CRR-OQ-10** | What is the minimal manifest for MVP? | **Open** — Phase 1 table in §17 |
| **CRR-OQ-11** | What source verification must happen before Lichess themes are admitted? | **Open** — license + theme snapshot + redistribution review |
| **CRR-OQ-12** | How should master-game examples be licensed and curated? | **Open** — per-game `MasterGameReference`; ADR-008 D7 |

---

## Recommendation

| Step | Task | Rationale |
|------|------|-----------|
| 1 | **Corpus Source Verification Review v1.0** | No `license_verified` until primary source audit |
| 2 | **MVP Corpus Registry Manifest draft** | Implements §8 + §17 fields; 12 frames + 13 tactics + principles + opening wrap stub |
| 3 | **Tactical Safety Scanner / System Chess Competence LLD** | CCT/LPB/mate scan runtime — vocabulary from manifest |
| 4 | **ADR-008 acceptance** | Separate governance task after this review |
| 5 | **Do not** ingest datasets, implement scanner, or activate LARIS in manifest phase | Scope discipline |

**ADR-008 Draft assessment:** Fit for acceptance **after** this review and source verification plan are acknowledged. Namespace harmonization CCCR → ADR-008 (`tactic:*`) should be documented in manifest migration table.

---

## Downstream work

| Work | Depends on |
|------|------------|
| Corpus Source Verification Review v1.0 | CRR-OQ-1, CRR-OQ-11, CRR-OQ-12 |
| MVP Corpus Registry Manifest draft | This review; ADR-008; CRR-OQ-10 |
| CCCR → ADR-008 namespace migration table | Manifest task |
| Opening tree wrapping plan | `source:runtime-opening-tree` |
| Lichess puzzle theme cross-walk | Source verification Pillar 1 |
| Tablebase reference profile | Pillar 3 |
| Tactical Safety Scanner / System Chess Competence LLD | Manifest + ADR-007 HLD |
| DecisionTrace storage ADR | ADR-005 |
| ADR-008 acceptance decision | Separate governance task |
| Pedagogical Policy Layer LLD | SCC-HLD-001 |

---

## Repository evidence table

| Artifact | Evidence | Classification |
|----------|----------|----------------|
| ADR-002–007 | Accepted governance boundaries | [DOCTRINE] |
| ADR-008 | Registry governance Draft; pillars; D1–D15 | [DOCTRINE DRAFT] |
| CCCR v1.0 | Taxonomy, MVP ~49, wrap strategy | [PROPOSAL] |
| SCCR-001 | F3 registry gap; F14–F15 pedagogy/adaptive | [REVIEW DRAFT] |
| SCC-HLD-001 | Domain Corpus Boundary; Pedagogical Policy Layer | [HLD DRAFT] |
| FEDERATION.md | Export withholding | [DOCTRINE] |
| `openings.ts` / `openingdata.ts` | ~2,400-line SAN tree; no `corpus_ref` | [RUNTIME] |
| `export_v1.py` | Forbidden export keys | [RUNTIME] |
| Lichess / Syzygy / Caissabase / TWIC | Named in ADR-008 only | [UNVERIFIED EXTERNAL INPUT] |
| CCT / LPB / safety-checklist pedagogy | This review §9–§11 | [REVIEW INPUT — UNVERIFIED] |

---

## Related documents

- [ADR-008 — Corpus Reference Registry and Source Governance v1 (Draft)](../governance/adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md)
- [ChessGuide Corpus Content Review v1.0](ChessGuide-Corpus-Content-Review-v1.0.md)
- [System Chess Competence Review v1.0](System-Chess-Competence-Review-v1.0.md)
- [System Chess Competence HLD v1.0](../architecture/System-Chess-Competence-HLD-v1.0.md)
- [FEDERATION.md](../../FEDERATION.md)

---

## Governance boundary statement

**This review does not modify** runtime, tests, federation export, schemas, implementation files, **ADR status**, ingest external datasets, create registry manifest files, schema files, LLD, UML, or **activate LARIS**.
