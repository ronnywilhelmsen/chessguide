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

**Architecture chain:** Corpus, tactical motifs, safety scanning, and pedagogy are traced through Philosophy → ADR → Review/HLD → future LLD/OOP/UML → immutable state → runtime → Creator continuity (§Philosophy-to-implementation traceability). This review is **not** an isolated document.

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

Long-horizon records citing `decision_frame:*` or `tactic:*` must remain interpretable across registry versions and deprecation. Full compatibility requirements, replay semantics, and Creator serving rules are in **§Creator continuity compatibility** (architecture-chain micro-pass).

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

## Philosophy-to-implementation traceability

Corpus, tactical motifs, safety scanning, and pedagogy are **not isolated documents**. CRR-001 traces through the full ChessGuide architecture chain:

```text
Philosophy / learning theory
  → Governance / ADR
  → Review / HLD
  → Future LLD / OOP
  → Future UML
  → Immutable state transitions
  → Runtime implementation
  → Creator continuity serving
  → 100-year replayable semantic continuity
```

### 1. Philosophy / learning theory

| Principle | Corpus / safety / pedagogy implication |
|-----------|----------------------------------------|
| **Learning = integration, not activity** | Puzzle solve, motif match, CCT scan completion are **activity** — not EvidenceRecord or Claim (CG-FLL-002) |
| **Evidence ≠ claim** | `SafetyScanReport` may inform teaching — cannot become Claim without stewardship (ADR-004) |
| **`corpus_ref` ≠ learned state** | Registry pointers are domain vocabulary — not LearningTrace custody (ADR-001, ADR-002) |
| **Engine measurement ≠ understanding** | `EngineAnalysisSnapshot` verifies tactics — not learner reasoning (ADR-007 D3) |
| **Pedagogy ≠ calculation** | Buddy explains; Stockfish measures — Pedagogical Policy Layer translates (SCCR F11) |
| **Continuity requires custody and replayable semantics** | `corpus_ref` version, source lineage, scan context, and DecisionTrace timing must survive decades (ADR-007 D10, ADR-008 D12–D13) |
| **Safety-first cognition supports human learning** | Order attention **before** calculation and strategy — P0–P1 safety frames precede P3 motif match and P4 positional plans (CRR §11) |

### 2. Governance / ADR layer

- **ADR-002** defines `corpus_ref` as semantic pointer — not evidence, claim, or learned state
- **ADR-003** allows EvidenceRecord to cite `corpus_ref` but not prove integration
- **ADR-004** protects claims through stewardship — motif familiarity ≠ mastery
- **ADR-005** allows DecisionTrace `decision_frame[]` / `corpus_ref[]` without replacing learner `rationale_statement`
- **ADR-006** constrains Buddy pedagogy and self-explanation before engine reveal
- **ADR-007** separates System Chess Competence, Engine Reference, and Domain Corpus
- **ADR-008** defines Corpus Registry and Source Governance — pillars, families, D1–D15

CRR-001 **instantiates** ADR-008 manifest and safety/cognitive pedagogy requirements **without** accepting ADR-008 or creating registry files.

### 3. Review / HLD layer

- **CCCR v1.0** defines corpus taxonomy **input** — tactic/opening/endgame/principle proposals
- **SCCR-001** and **SCC-HLD-001** define System Chess Competence, Pedagogical Policy Layer, Engine Reference, and Creator continuity boundaries
- **CRR-001 (this review)** instantiates manifest requirements for corpus, source governance, safety checklist, CCT, LPB, calculation tree, sanity check, and P0–P5 pedagogy

### 4. Future LLD / OOP layer

CRR-001 does **not** create LLD but points to future classes/interfaces (§Future LLD / OOP implications). Every `decision_frame:*`, `tactic:*`, scan report, and registry entry must trace to a design target.

### 5. Future UML layer

CRR-001 does **not** create UML but identifies required diagrams (§Future UML requirements) before runtime implementation.

### 6. Immutable state layer

CRR-001 identifies future **immutable / append-only** records and **forbidden transitions** (§Immutable state and forbidden transitions).

### 7. Runtime layer

CRR-001 remains **review-only** but identifies future services: corpus registry read API, source verification workflow, safety/CCT scanners, motif matcher, Pedagogical Policy Layer, Buddy explanation draft, DecisionTrace capture. **Current runtime:** `openings.ts` (labels only), `export_v1.py` (withholding) — no scanners, no registry.

### 8. Creator continuity layer

CRR-001 asks whether every `corpus_ref`, safety frame, `SafetyScanReport`, `CCTScanReport`, and `BuddyExplanationDraft` can be **replayed** with source/custody/version lineage from real time to **100 years**. See §Creator continuity compatibility.

---

## Future LLD / OOP implications

**Design targets only** — no LLD files, no class implementation in this branch.

| Class / interface | Responsibility | Inputs | Outputs | May read | Must not write | Immutability requirement | Related ADR / HLD |
|-------------------|----------------|--------|---------|----------|----------------|--------------------------|-------------------|
| **CorpusRegistry** | Serve curated entries for pinned version | `CorpusRegistryVersion`, lookup keys | `CorpusRef` records | Source metadata, curation records | Learner state, federation export | Published version snapshots immutable | ADR-008; HLD §6 |
| **CorpusRegistryVersion** | Immutable registry release ID | Steward publish event | Version handle | Prior versions | In-place mutable entries | **Immutable** once published | ADR-008 D11 |
| **CorpusRef** | Registry entry for one semantic pointer | Manifest row | `corpus_ref`, metadata | `source_refs[]` | Evidence, claims | Immutable per version; deprecate via `superseded_by` | ADR-002, ADR-008 |
| **CorpusSource** | External/internal origin record | Verification review | `source_id`, type, locator | License evidence (external) | `curated` without audit | Append-only status history | ADR-008 |
| **SourceReference** | License/provenance row | Verification audit | statuses, restrictions | Primary license docs | Doctrine clearance without review | **SourceReferenceSnapshot** immutable at publish | ADR-008 |
| **CorpusManifest** | Authoring/staging draft | Steward edits | manifest rows | CCCR migration tables | Production learner reads of draft | Draft mutable; publish → immutable | CRR-001 §8 |
| **CorpusCurationRecord** | Steward inclusion decision | Review workflow | `corpus_ref`, rationale | Source refs | Auto-approve external data | **Append-only** | ADR-004 pattern |
| **TacticalMotif** | Pattern category concept | Position features | `tactic:*` suggestion | `CorpusRef`, rules engine | Learner mastery | Match → `TacticalMotifMatch` snapshot | ADR-008; CRR §9 |
| **TacticalMotifTaxonomy** | Index `tactic:*` / `motif:*` | Registry version | taxonomy view | Registry | Lichess themes as doctrine | Read-only per version | CCCR; CRR-OQ-2 |
| **DecisionFrame** | Teachable procedure descriptor | `decision_frame:*` ref | priority, scan_phase metadata | Registry | Learner `rationale_statement` | Registry entry immutable per version | ADR-005, ADR-008 |
| **SafetyChecklist** | Orchestrate P0–P1 scans | FEN, move context | scan task list | `decision_frame:*` refs | Claims | Orchestrator — reports immutable | CRR §11 |
| **SafetyScanReport** | P1 safety scan snapshot | FEN, checklist results | flags, frames, optional `corpus_ref[]` | Rules engine | EvidenceRecord, Claim | **Immutable** per position event | CRR §9; SCC-HLD |
| **CCTScanReport** | P2 CCT scan snapshot | FEN, legal moves, CCT rules | ordered checks/captures/threats | Rules engine, `decision_frame:cct_scan` | Learner reasoning, Claim | **Immutable** per scan event | CRR §9 |
| **CCTScanner** | Execute CCT enumeration | FEN, legal moves | forcing candidates → `CCTScanReport` | Rules engine | Learner state | Stateless; output snapshot immutable | CRR P2 |
| **KingSafetyScanner** | King safety threat detection | FEN | king safety flags | Rules engine | Positional plan authority | Flags embedded in SafetyScanReport | CRR P1 |
| **MateThreatScanner** | Mate-in-1 / critical mate scan | FEN | mate threat flags | Rules engine; optional engine | Mastery labels | Embedded in SafetyScanReport | CRR P1 |
| **LoosePieceScanner** | Hanging / undefended pieces (LPB) | FEN | loose piece list | Rules engine | EvidenceRecord | Embedded in SafetyScanReport | CRR LPB |
| **CandidateMoveGenerator** | P3 candidate enumeration | FEN, safety clearance | candidate move list | Scan reports, rules engine | Engine-best as only candidate | Ephemeral; lines snapshotted | ADR-007 D4 |
| **ForcingMoveClassifier** | Order forcing moves | Legal moves, CCTScanReport | forcing-ordered moves | CCTScanReport | Pedagogy as engine oracle | Derived per scan event | CRR P2 |
| **CalculationTree** | Explore forcing lines | Root FEN, candidate move | tree of `CandidateLine` | Rules engine, scanners | Learner reasoning text | Children lines immutable once sealed | CRR §9 |
| **CandidateLine** | One calculated branch | Move sequence | line ID, terminal flags | Rules engine | Claim body | **Immutable** per session | ADR-007 |
| **SanityCheckResult** | P5 post-candidate re-scan | FEN after candidate | pass/fail + flags | SafetyChecklist | Auto-DecisionTrace | **Immutable** snapshot | CRR P5 |
| **PositionConceptMap** | Map position to concepts | FEN, scan reports | `corpus_ref[]`, motifs[] | CorpusRegistry, scanners | Learner custody aggregates | Derived — not sovereign state | ADR-007 D7; HLD §6 |
| **PedagogicalMoveClassifier** | Classify moves pedagogically | Candidates, snapshots | classifications | Engine snapshot, concept map | Mastery | Derived per event | ADR-007 D4; SCCR F12 |
| **LearningBestMovePolicy** | Select learning-best move | Classifications, policy | learning-best recommendation | Classifier output | Engine as pedagogy authority | Policy version pinned | ADR-007 D4; HLD P11 |
| **PedagogicalPolicyLayer** | Translate measurement → teaching | Competence, corpus, optional engine | teaching directives | All read-only lanes | Evidence, claims, federation | Config versioned; drafts not custody | SCCR F11; HLD §12 |
| **BuddyExplanationDraft** | Bounded learner explanation | Policy output, context | draft text + lineage | Registry, scans, engine | `rationale_statement` | Sent snapshot **immutable** | ADR-006; ADR-007 D7 |
| **TeachingOpportunity** | Identified teachable moment | Scan/motif/policy match | opportunity descriptor | Corpus, competence | Claim | Event descriptor — not evidence | SCC-HLD; ADR-008 |
| **ContinuityRecord** | Long-horizon preservation unit | Custody events, version pins | replayable record | All sovereign lanes with pins | Flattened free-text memory | **Append-only** | ADR-007 D10; FGI-001 |
| **CreatorContinuityProjection** | Serve historical semantics | ContinuityRecord, registry versions | resolved view | Deprecated ref maps | Merged custody fields | Read-only projection | ADR-008 D12–D13 |

**Cross-cutting rule:** Scanner and competence cluster **may read** `CorpusRegistry`; **must not write** learner custody, EvidenceRecord, Claim, or federation export.

---

## Future UML requirements

Future UML is **required** before runtime implementation (ADR-007 D8). **No UML files in this branch.**

### 1. Component diagram

Must show bounded components:

- **Corpus Registry**
- **Source Verification**
- **System Chess Competence**
- **Engine Reference**
- **Pedagogical Policy Layer**
- **Buddy Pedagogy**
- **DecisionTrace**
- **EvidenceRecord / Claim**
- **Federation Export**
- **Creator Continuity**

Arrows must label **may read** vs **forbidden write** across custody boundaries.

### 2. Class diagram

Must include:

- `CorpusRef`
- `SourceReference`
- `CorpusManifest`
- `SafetyScanReport`
- `CCTScanReport`
- `TacticalMotif`
- `DecisionFrame`
- `BuddyExplanationDraft`
- `ContinuityRecord`

Show **immutable** stereotypes on snapshot types (`SafetyScanReport`, `CCTScanReport`, `EngineAnalysisSnapshot`, sent `BuddyExplanationDraft`).

### 3. Sequence diagram

Must show:

1. Learner move
2. Safety scan
3. CCT scan
4. Tactical motif match
5. Optional engine reference
6. Pedagogical policy decision
7. Buddy explanation
8. Optional DecisionTrace capture
9. Optional Evidence candidate (not auto-EvidenceRecord)
10. Continuity projection

**Must show:** Buddy/engine do not write `rationale_statement` without learner confirmation.

### 4. State transition diagram

```text
PositionObserved
  → SafetyScanCompleted
  → CCTScanCompleted
  → CandidateMovesGenerated
  → TacticalMotifMatched
  → EngineReferenceSnapshotCreated (optional)
  → PedagogicalPolicyApplied
  → BuddyExplanationDrafted
  → LearnerDecisionTraceCaptured (optional)
  → EvidenceCandidateIdentified (optional)
  → ContinuityRecordServed
```

Forbidden shortcuts crossed out in legend (§Immutable state).

### 5. Creator continuity diagram

Must show long-horizon replay of:

- `corpus_ref` version (`CorpusRegistryVersion` pin, `superseded_by` chain)
- Source provenance (`SourceReferenceSnapshot` at capture time)
- Scan outputs (`SafetyScanReport`, `CCTScanReport` vs FEN / move context)
- Explanation lineage (`BuddyExplanationDraft` — not learner reasoning)
- Learner custody (`DecisionTrace` + `capture_timing`)
- Federation **excluded** from sovereign continuity payload

---

## Immutable state and forbidden transitions

### Future immutable or append-only records

| Record | Immutability | Rationale |
|--------|--------------|-----------|
| **CorpusRegistryVersion** | Immutable once published | ADR-008 D11 |
| **SourceReferenceSnapshot** | Immutable at verification / capture publish | License/provenance audit trail |
| **CorpusCurationRecord** | Append-only | Steward accountability |
| **EngineAnalysisSnapshot** | Immutable per capture | ADR-007 D3, D9 |
| **SafetyScanReport** | Immutable per position event | Replayable P1 input |
| **CCTScanReport** | Immutable per scan event | Replayable P2 forcing order |
| **TacticalMotifMatch** | Immutable match snapshot | Motif match ≠ learning |
| **CandidateLine** | Immutable per calculation session | Calculation audit |
| **DecisionTrace** | Append-only under learner custody | ADR-005 |
| **EvidenceRecord** | Append-only | ADR-003 |
| **Claim** | Append-only with stewardship | ADR-004 |
| **StewardshipVerdict** | Immutable per gate decision | ADR-004 |
| **ContinuityRecord** | Append-only | ADR-007 D10; 100-year semantics |

### Forbidden transitions

| Forbidden transition | Why |
|---------------------|-----|
| **CorpusRef → EvidenceRecord** without learner observation | Citation ≠ integration (ADR-003) |
| **SourceReference → Corpus doctrine** without license/provenance review | ADR-008 D2, D14 |
| **SafetyScanReport → Claim** | System derived — not stewardship integration |
| **CCTScanReport → learner reasoning** | Scan output ≠ `rationale_statement` (ADR-005) |
| **EngineAnalysisSnapshot → learner reasoning** | Engine ≠ learner custody (ADR-007) |
| **BuddyExplanationDraft → learner `rationale_statement`** without learner confirmation | ADR-006; `trace_source` |
| **Puzzle solved → mastery** | Activity ≠ learning (CG-FLL-002; ADR-004) |
| **Tactical motif matched → learning achieved** | Competence output ≠ EvidenceRecord |
| **Opening label → understanding** | ADR-008 D5 |
| **Tablebase result → learner mastery** | Reference lane only (ADR-008 D6) |
| **Creator continuity projection → flattened free-text memory** | ADR-007 D10; ADR-008 D13 |
| **Federation export → corpus_ref / DecisionTrace / Evidence / Claim / learner state** | ADR-008 D10; FEDERATION.md; `export_v1.py` |

**Additional forbidden (P0–P5):** positional plan (P4) while P1 red flags active; engine PV as Buddy explanation without Pedagogical Policy Layer.

---

## Creator continuity compatibility

**Question:** Can the proposed corpus/manifest/safety-scan model be served by Creator from **real time to 100-year** continuity?

**Answer: Yes — if** future LLD and Creator operational spec enforce the requirements below. This review does not implement Creator serving.

### Mandatory requirements

1. **`corpus_ref` must remain resolvable across versions** — Creator loads `CorpusRegistryVersion` pin; deprecated refs resolve via `superseded_by` / `supersedes` (ADR-008 D12).
2. **Deprecated corpus refs must retain `superseded_by` / `supersedes` links** — historical DecisionTrace and teaching records remain interpretable.
3. **`SourceReference` license/provenance status must be preserved historically** — `SourceReferenceSnapshot` at capture time; later status changes do not rewrite past records.
4. **`SafetyScanReport` and `CCTScanReport` must be replayable** against board state / FEN / move context / side / move number — not prose-only summaries.
5. **`BuddyExplanationDraft` must preserve source lineage** (`corpus_ref[]`, optional `engine_ref`, policy version) **without pretending to be learner reasoning**.
6. **`DecisionTrace` must preserve learner custody and `capture_timing`** — separate from system scan snapshots (ADR-005).
7. **Creator must serve continuity without merging** corpus, engine, Buddy, evidence, claims, and learner state into one undifferentiated field set (ADR-007 D10).
8. **Federation remains lossy** — must not receive these sovereign records (`export_v1.py`; ADR-008 D10).

### Horizon model

| Horizon | Requirement |
|---------|-------------|
| Real-time | Pin `CorpusRegistryVersion` on teaching and scan events |
| Short-term | Episode review replays scans + frames with same pins |
| Long-term | Deprecated `tactic:fork` resolves via `superseded_by` |
| 100-year | Semantic boundaries preserved — Creator replays typed records, not flattened coach memory |

**Repository gap:** FGI-001 / CG-DEP-001 — Creator OAT/CTP **planned**; operational serving spec external to ChessGuide repo.

---

## Architecture-chain checklist

| Check | Answer |
|-------|--------|
| Preserves philosophical boundary | **yes** |
| Aligns with ADR-002 through ADR-008 | **yes** |
| Instantiates SCC-HLD-001 | **yes** |
| Identifies future LLD/OOP targets | **yes** |
| Identifies required UML | **yes** |
| Identifies immutable state records | **yes** |
| Identifies forbidden transitions | **yes** |
| Avoids runtime implementation | **yes** |
| Avoids schema/registry creation | **yes** |
| Preserves federation withholding | **yes** |
| Preserves Creator continuity from real time to 100 years | **yes** |
| Keeps LARIS dormant | **yes** |

---

## Recommendation

| Step | Task |
|------|------|
| 1 | **Corpus Source Verification Review v1.0** |
| 2 | **MVP Corpus Registry Manifest draft** |
| 3 | **Tactical Safety Scanner / System Chess Competence LLD** |
| 4 | **UML package** for Corpus + Safety Scanner + Creator continuity |
| 5 | **ADR-008 acceptance decision** (separate governance task) |

**ADR-008 Draft assessment:** Fit for acceptance after this review and source verification plan are acknowledged. Namespace harmonization CCCR → ADR-008 (`tactic:*`) documented in manifest migration table.

**Scope discipline:** Do not ingest datasets, implement runtime scanners, or activate LARIS before steps 1–2 complete.

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
| UML package (component, class, sequence, state, continuity) | This review §Future UML |
| Immutable state / forbidden-transition LLD annex | This review §Immutable state |
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
| Philosophy → Creator traceability | This review §Philosophy-to-implementation through §Architecture-chain checklist | [REVIEW] |
| Future LLD/OOP/UML targets | This review §Future LLD, §Future UML, §Immutable state | [DESIGN TARGET] |

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
