# ADR-008 — Corpus Reference Registry and Source Governance v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-008 |
| **Title** | Corpus Reference Registry and Source Governance v1 |
| **Version** | 0.1 |
| **Status** | Draft |
| **Date** | 2026-06-17 |
| **Scope** | Governance / semantic model / source governance only — Corpus Reference Registry, source pillars, `corpus_ref` taxonomy, and license/provenance boundaries |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md), [ADR-006](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md), [ADR-007](ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](../../reviews/System-Chess-Competence-Review-v1.0.md), [SCC-HLD-001](../../architecture/System-Chess-Competence-HLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft** — governance-only Architecture Decision Record defining **Corpus Reference Registry and Source Governance v1**: how ChessGuide governs domain corpus references, external source pillars, license/provenance status, and `corpus_ref` registry semantics.

This ADR is **governance / semantic model / source governance only**. Draft acceptance does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- JSON Schema
- SQL
- localStorage
- APIs
- UI
- Dataset ingestion or download pipelines
- Corpus registry JSON/YAML files
- LLD or UML artifacts
- Implementation files

This ADR does **not**:

- Activate **LARIS** (CG-002; FDP-002)
- Ingest Lichess puzzle data, tablebases, PGN collections, or other external datasets
- Mark external sources as license-verified without separate verification work

---

## Context

### Upstream governance

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks **Episode** / **LearningTrace** as learner-custody boundary. Corpus must not be appended to LearningTrace as if learned.

[ADR-002](ADR-002-sovereign-reference-model-v1.md) (Accepted) defines **`corpus_ref`** as a stable semantic pointer to **domain corpus** — not learner evidence, not learned state, not federation export. Exact format and version pinning were deferred to a future registry ADR (ADR-002 D5, OQ-002-5).

[ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md) (Accepted) allows Evidence Records to **cite** `corpus_ref` — citation is not proof of integration.

[ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md) (Accepted) requires stewardship for formal claims. Corpus reference does not substitute for claim evidence.

[ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) (Accepted) allows DecisionTrace to cite `corpus_ref` and `decision_frame[]` — separate from learner `rationale_statement` and `engine_ref`.

[ADR-006](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) (Accepted) permits Buddy to surface `corpus_ref` pedagogically — not as mastery proof or learner reasoning.

[ADR-007](ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md) (Accepted) separates **System Chess Competence**, **Engine Reference**, and **Domain Corpus** boundaries. System competence may map positions to `corpus_ref`; engine output is not corpus truth.

### Reviews and HLD

[CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md) proposes Chess Corpus taxonomy, MVP `corpus_ref` candidates (~49), opening-tree wrap strategy, and `source_boundary` values. Recommends **Corpus Reference Registry ADR** after ADR-005/006 sequencing (now satisfied).

[SCCR-001](../../reviews/System-Chess-Competence-Review-v1.0.md) (Draft Review) records **F3** — opening data exists but no governed `corpus_ref` registry — and defers registry to this ADR.

[SCC-HLD-001](../../architecture/System-Chess-Competence-HLD-v1.0.md) (Draft HLD) defines **Domain Corpus Boundary** (component §6) and reserved `PuzzleCorpusSelector` / adaptive training lane (future).

### Runtime evidence (not governance truth)

| Artifact | Finding |
|----------|---------|
| `openings.ts` / `openingdata.ts` | ~2,400-line SAN tree; human labels via `info`; **no** stable `corpus_ref` IDs |
| `export_v1.py` | Federation export forbids learning, coach, engine, mastery keys — corpus metadata must remain withheld |

**Doctrine:** Runtime opening tree is **corpus-like material** to be **wrapped**, not replaced, until registry migration (CCCR OQ-CCR-4).

### Core premise

ChessGuide needs a **governed Corpus Reference Registry**. The registry must let **System Chess Competence** and **Buddy** refer to chess knowledge **without** confusing:

- Source data
- Semantic concepts (`corpus_ref`)
- Learner evidence
- Claims
- Mastery
- Engine / tablebase truth
- Federation export

The corpus is **not** a dump of moves. It is a **governed semantic reference system**.

### Problem statement

> How does ChessGuide govern chess knowledge references — including large external candidate sources — so System Chess Competence and Buddy can teach with stable `corpus_ref` pointers while preserving source license/provenance discipline, learner custody, evidence/claim boundaries, and federation withholding?

---

## Decision

ChessGuide adopts **Corpus Reference Registry and Source Governance v1** as the governance semantic model for domain corpus references and source governance.

---

## Corpus source pillars

ChessGuide recognizes **four primary corpus source pillars**. External names are **candidate sources** until license and provenance are verified.

### Pillar 1 — Tactical Pattern Corpus

| Aspect | Detail |
|--------|--------|
| **Candidate source** | Lichess Puzzle Database (and similar puzzle corpora) |
| **Examples** | fork, pin, skewer, back-rank mate, discovered attack, overloaded piece, mate patterns |
| **Pedagogical use** | Pattern recognition, `TeachingOpportunity`, `PuzzleCorpusSelector` (future) |
| **Is not** | Learner evidence, mastery, claim, federation export |
| **Governance** | Puzzle **solve** ≠ learning; activity ≠ integration (CG-FLL-002) |

### Pillar 2 — Opening / Structure Corpus

| Aspect | Detail |
|--------|--------|
| **Candidate sources** | [lichess-org/chess-openings](https://github.com/lichess-org/chess-openings), current runtime `openingdata.ts` / `openings.ts` |
| **Examples** | ECO A00–E99, named openings, variations, pawn structures, typical plans |
| **Pedagogical use** | Opening labels, plan explanations, `corpus_ref` mapping, `OpeningReference` |
| **Is not** | Proof of understanding, evidence, claim |
| **Governance** | Opening **label** ≠ understanding; wrap runtime tree with registry refs (CCCR) |

### Pillar 3 — Endgame Reference Corpus

| Aspect | Detail |
|--------|--------|
| **Candidate source** | Syzygy tablebases (WDL, DTZ) |
| **Examples** | theoretical win/draw/loss, `tablebase_ref`, king-pawn basics |
| **Pedagogical use** | Endgame correctness/reference and pedagogical explanation |
| **Is not** | Ordinary corpus truth by itself, learner evidence, mastery, federation export |
| **Governance** | Tablebases are **too large for Git**; repo stores **references/profiles/manifests only** — not binary tablebase files |

### Pillar 4 — Human Master Game Corpus

| Aspect | Detail |
|--------|--------|
| **Candidate sources** | Caissabase, TWIC, Lichess master games, curated PGN collections |
| **Examples** | Capablanca endgames, Kasparov attacks, Carlsen squeezes, Morphy development illustrations |
| **Pedagogical use** | Human examples, illustrative plans, `MasterGameReference`, `CorpusExample` |
| **Is not** | Automatically license-verified, learner evidence, claim, corpus doctrine without curation |
| **Governance** | **License and provenance must be verified** before doctrine use |

### Source-governance rule

**Treat all external sources as `candidate_source` until license and provenance are independently verified** through repository review — not by ADR assertion alone.

---

## Corpus registry concepts

| Term | Definition |
|------|------------|
| **CorpusSource** | External or internal origin of corpus material (dataset, repo, curated file, runtime tree) |
| **CorpusArtifact** | A concrete artifact from a source (file, snapshot, manifest row) — not the semantic concept |
| **CorpusRef** | Governance name for a registry entry pointing to a semantic concept via `corpus_ref` ID |
| **CorpusConcept** | The teachable chess idea (fork, Sicilian, Lucena skeleton) — referenced by `corpus_ref` |
| **CorpusExample** | Illustrative position/game/example linked to a concept — not learner evidence |
| **CorpusRegistryVersion** | Immutable published registry release (e.g. `corpus-registry/2026-06-17`) |
| **CorpusSourceLicense** | License record attached to a `CorpusSource` |
| **CorpusCurationStatus** | Steward/review state of a registry entry |
| **CorpusPedagogicalUse** | Allowed pedagogical roles (explain, hint, puzzle_select, compare) — not evidence types |
| **CorpusBoundary** | Governance rule set separating corpus from evidence/claim/engine/federation |
| **TablebaseReference** | Pointer to Syzygy WDL/DTZ profile — reference lane, not stored tablebase |
| **MasterGameReference** | Pointer to curated human game example with license metadata |
| **PuzzleReference** | Pointer to puzzle pattern or external puzzle ID — not solve record |
| **OpeningReference** | Pointer to opening system/ECO/variation under `opening:*` or `eco:*` |

---

## corpus_ref family taxonomy

Required **families** (namespace prefix before slug):

| Family | Purpose | Example slug |
|--------|---------|--------------|
| `tactic:` | Tactical pattern labels | `tactic:fork` |
| `motif:` | Broader motif (may overlap tactic) | `motif:pin` |
| `opening:` | Named opening system / line | `opening:sicilian_defense` |
| `eco:` | ECO code reference | `eco:B90` |
| `pawn_structure:` | Structural pawn formations | `pawn_structure:carlsbad` |
| `endgame:` | Endgame technique (non-tablebase) | `endgame:rook_pawn_basic` |
| `tablebase:` | Tablebase reference profile | `tablebase:syzygy_wdl` |
| `master_game:` | Curated human example | `master_game:illustrative_example` |
| `plan:` | Strategic plan frame | `plan:minority_attack` |
| `decision_frame:` | Decision vocabulary | `decision_frame:forcing_moves_first` |
| `principle:` | General chess principle | `principle:develop_knights_first` |
| `example:` | Generic illustrative example | `example:capablanca_endgame_1921` |

**Syntax rule:** `corpus_ref` = `{family}{slug}` where family includes trailing colon (e.g. `tactic:fork`). Aligns with CCCR proposal `category:subcategory:slug`; ADR-008 adopts **family:** as primary namespace (OQ-008-4).

---

## Minimal corpus_ref schema

Governance-level **minimum fields** for a registry entry (not JSON Schema in this ADR):

| Field | Required | Purpose |
|-------|----------|---------|
| `corpus_ref` | Yes | Stable ID — e.g. `tactic:fork` |
| `family` | Yes | Taxonomy family prefix |
| `slug` | Yes | Stable slug within family |
| `title` | Yes | Human-readable label |
| `version` | Yes | Entry version within registry release |
| `concept_type` | Yes | tactic \| opening \| endgame \| principle \| plan \| decision_frame \| example \| tablebase \| master_game \| structure |
| `source_refs[]` | Yes | One or more `source_id` pointers |
| `curation_status` | Yes | See source/curation states |
| `license_status` | Yes | See license states |
| `pedagogical_use[]` | Yes | Allowed uses — explain, hint, puzzle_candidate, compare, review_only |
| `limitations[]` | Recommended | Known bounds, level range, not_for_claim, etc. |
| `related_refs[]` | Optional | Related `corpus_ref` links |
| `supersedes` | Optional | Prior `corpus_ref` if renamed |
| `superseded_by` | Optional | Replacement ref if deprecated |

---

## Source reference schema

Governance-level **Source Reference** shape:

| Field | Required | Purpose |
|-------|----------|---------|
| `source_id` | Yes | Stable source identifier — e.g. `source:lichess-puzzles` |
| `source_name` | Yes | Human name |
| `source_type` | Yes | puzzle_db \| openings_repo \| tablebase \| pgn_collection \| runtime_tree \| hand_curated |
| `source_url_or_locator` | Yes | URL, repo path, or external locator — not necessarily in Git |
| `license` | Yes | SPDX or prose license identifier |
| `license_status` | Yes | See states below |
| `provenance_status` | Yes | See states below |
| `retrieval_date` | Recommended | When source snapshot was assessed |
| `version_or_snapshot` | Recommended | Source version / commit / dump date |
| `checksum` | Optional | Hash of manifest or snapshot metadata |
| `allowed_uses[]` | Yes | corpus_curation \| pedagogical_reference \| puzzle_index \| example_only |
| `restrictions[]` | Recommended | no_redistribution, attribution_required, research_only, etc. |
| `notes` | Optional | Steward notes |

---

## Source license and provenance states

### Source / curation status values

| Status | Meaning |
|--------|---------|
| `candidate_source` | Identified but not verified — default for external datasets |
| `license_verified` | License reviewed and acceptable for intended use |
| `provenance_verified` | Origin, version, and integrity attested |
| `curated` | Steward-approved for registry inclusion |
| `deprecated` | Superseded — remain resolvable (D12) |
| `restricted` | Use limited — Buddy/system must respect restrictions |
| `unverified_external_input` | External claim not admitted to doctrine (ADR-008 D14) |

### License status (on `CorpusRef` / `CorpusSource`)

| Status | Meaning |
|--------|---------|
| `unknown` | Not yet assessed |
| `candidate` | License identified, not verified |
| `verified` | Acceptable for ChessGuide use case |
| `restricted` | Limited use — see `restrictions[]` |
| `prohibited` | Must not be used in product |

---

## Governance rules

### D1 — corpus_ref is a semantic pointer, not evidence

`corpus_ref` identifies a **domain concept**. Citing `corpus_ref` on DecisionTrace or EvidenceRecord is **reference**, not proof of integration (ADR-002, ADR-003).

### D2 — Source data is not corpus doctrine until curated

Raw datasets (Lichess puzzles, PGN dumps, tablebase files) are **CorpusSource** / **CorpusArtifact** — not registry doctrine until steward curation publishes `CorpusRef` entries.

### D3 — Large datasets remain outside repository

Git stores **manifests, registry entries, hashes, and source metadata** — not multi-GB puzzle DBs, tablebases, or master PGN archives.

### D4 — Lichess Puzzle Database

**Candidate** primary source for tactics. Puzzle solve performance is **activity** — not learning, mastery, or claim (CG-FLL-002; ADR-004).

### D5 — lichess-org/chess-openings

**Candidate** primary source for ECO/opening labels. Labels support pedagogy — they do not prove understanding.

### D6 — Syzygy tablebases

**Endgame reference lane** via `TablebaseReference` / `tablebase:*` refs. Tablebase **truth** is measurement/reference — not learner evidence, claim, or federation export. Distinct from Stockfish `engine_ref` (OQ-008-6).

### D7 — Master games

**Human example sources** only after **license_verified** and **provenance_verified** curation. Illustrative examples are not automatically open-licensed.

### D8 — System Chess Competence

May **read** `corpus_ref` and source metadata to build `PositionConceptMap` — must **not** write learner state (ADR-007 D2; SCC-HLD-001).

### D9 — Buddy pedagogy

May **cite** `corpus_ref` in explanations and prompts — must **not** turn `corpus_ref` into evidence, claim, mastery, or learner `rationale_statement` (ADR-006).

### D10 — Federation export

Must **not** include: `corpus_ref`, source metadata, tablebase refs, puzzle refs, master-game refs, teaching prompts, DecisionTrace, EvidenceRecords, Claims, learner state ([FEDERATION.md](../../FEDERATION.md); `export_v1.py`).

### D11 — Registry version immutability

**CorpusRegistryVersion** is **immutable** once published. Corrections require new version; entries may `supersede` prior refs.

### D12 — Deprecated refs remain resolvable

Deprecated `corpus_ref` entries keep `superseded_by` linkage for **Creator continuity** and historical DecisionTrace interpretation.

### D13 — Creator continuity

Continuity serving must preserve: `corpus_ref` version, `CorpusRegistryVersion`, source lineage, `curation_status`, and `license_status` (ADR-007 D10; operational spec external).

### D14 — External doctrine admission

External learning-science claims and dataset suitability claims require **review/ADR admission** before repository doctrine — status `unverified_external_input` until then (SCCR external learning-science section).

### D15 — Adaptive training boundary

Corpus may **support** future adaptive training (`PuzzleCorpusSelector`, SCCR F15) — adaptive lane must **not** create mastery without ADR-004 stewardship.

---

## Relationship to System Chess Competence

| Rule | Detail |
|------|--------|
| Read | `corpus_ref`, `CorpusRegistryVersion`, `source_refs[]` metadata |
| Output | `PositionConceptMap.corpus_refs[]`, pedagogical classification context |
| Must not | Persist learner state; export to federation; treat corpus as engine truth |

System competence maps positions to **curated concepts** — not raw puzzle IDs or tablebase bytes.

---

## Relationship to Buddy Pedagogy

| Rule | Detail |
|------|--------|
| May | Surface `corpus_ref` in hints, explanations, `BuddyExplanationDraft` |
| May | Reference `CorpusExample`, `MasterGameReference` when curated |
| Must not | Cite `unverified_external_input` sources as doctrine |
| Must not | Auto-create EvidenceRecord from corpus citation alone |
| Must not | Issue claims or mastery from corpus familiarity |

---

## Relationship to DecisionTrace / EvidenceRecord / Claim

| Record | corpus_ref role |
|--------|-----------------|
| **DecisionTrace** | Optional `corpus_ref[]`, `decision_frame[]` — learner reasoning separate (`trace_source`) |
| **EvidenceRecord** | May cite `corpus_ref` as grounding — does not prove integration alone |
| **Claim** | May scope integration hypothesis via evidence lineage — corpus_ref not claim body |

**Forbidden:** Collapsing source → concept → evidence → claim in one field.

---

## Relationship to Engine Reference / Tablebases

| Lane | Role |
|------|------|
| **Engine Reference** (`engine_ref`, Stockfish) | Position evaluation, CP/PV — ADR-007 |
| **Tablebase Reference** (`tablebase:*`) | Perfect endgame truth profile — Syzygy WDL/DTZ |
| **corpus_ref** | Semantic teachable concept — may **reference** tablebase results in explanation |

Tablebase **lookup result** is reference/measurement — assign `tablebase_ref` metadata; do not store as learner evidence.

---

## Relationship to Federation Export

Federation export remains **terminal completed-game ObservationRecord** only. **Withhold:**

- All `corpus_ref` and registry metadata
- Source licenses and provenance blobs
- Puzzle/tablebase/master-game pointers from learner context
- Buddy teaching content

Aligned with `export_v1.py` `_FORBIDDEN_EXPORT_ROOT_KEYS` spirit (learning, coach, knowledge, etc.).

---

## Relationship to Creator continuity

Long-horizon records citing `corpus_ref` must remain interpretable when:

- Registry version advances
- Entries are deprecated
- Source license status changes (historical records keep snapshot of status at capture time)

Creator serving must not flatten `corpus_ref` into free-text-only labels without lineage (ADR-007 D10).

---

## MVP registry seed proposal

**Seed categories only** — no data ingestion in this ADR:

| corpus_ref | family | concept_type |
|------------|--------|--------------|
| `tactic:fork` | tactic | tactic |
| `tactic:pin` | tactic | tactic |
| `tactic:skewer` | tactic | tactic |
| `tactic:back_rank_mate` | tactic | tactic |
| `tactic:discovered_attack` | tactic | tactic |
| `tactic:overloaded_piece` | tactic | tactic |
| `opening:sicilian_defense` | opening | opening |
| `opening:ruy_lopez` | opening | opening |
| `opening:queen_gambit` | opening | opening |
| `eco:A00` | eco | opening |
| `eco:B90` | eco | opening |
| `pawn_structure:isolated_queen_pawn` | pawn_structure | structure |
| `pawn_structure:carlsbad` | pawn_structure | structure |
| `endgame:king_pawn_vs_king` | endgame | endgame |
| `endgame:rook_pawn_basic` | endgame | endgame |
| `tablebase:syzygy_wdl` | tablebase | tablebase |
| `tablebase:syzygy_dtz` | tablebase | tablebase |
| `master_game:illustrative_example` | master_game | example |
| `plan:minority_attack` | plan | plan |
| `decision_frame:candidate_moves` | decision_frame | decision_frame |
| `decision_frame:forcing_moves_first` | decision_frame | decision_frame |

Future manifest file location: **deferred** (OQ-008-4) — lean `docs/governance/corpus/` per CCCR.

---

## Non-goals

- Dataset ingestion
- PGN import pipeline
- Puzzle import pipeline
- Tablebase download
- Engine implementation
- Learner model / digital twin
- Runtime registry files in `src/`
- JSON Schema / SQL in this ADR
- Federation export widening
- Claims or mastery issuance
- LARIS activation
- LLD / UML artifacts

---

## Anti-patterns

| Anti-pattern | Why rejected |
|--------------|--------------|
| Treating data volume as truth | Size ≠ pedagogy ≠ evidence |
| Treating puzzle solve as learning | Activity ≠ integration |
| Treating tablebase result as mastery | Reference ≠ claim |
| Treating opening label as understanding | Label ≠ evidence |
| Treating master games as automatically open licensed | D7 |
| Storing huge datasets in Git | D3 |
| Exporting corpus refs to federation | D10 |
| Buddy citing unverified sources as doctrine | D14 |
| Collapsing source, concept, evidence, and claim | ADR-002–004 |
| Making `corpus_ref` mutable | D11 |
| Replacing learner reasoning with corpus explanation | ADR-005, ADR-006 |

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **ADR-008-OQ-1** | Which source licenses are acceptable for corpus ingestion? | **Open** — steward/legal review |
| **ADR-008-OQ-2** | Should Lichess puzzles become first tactics seed source? | **Open** — lean yes as candidate_source |
| **ADR-008-OQ-3** | Should current `openings.ts` be wrapped or replaced? | **Open** — lean wrap (CCCR OQ-CCR-4) |
| **ADR-008-OQ-4** | What is the first registry file format? | **Open** — lean Markdown/YAML manifest |
| **ADR-008-OQ-5** | How are corpus refs versioned and deprecated? | **Open** — D11/D12; `CorpusRegistryVersion` |
| **ADR-008-OQ-6** | Should tablebases be source refs or engine refs? | **Open** — lean `tablebase:*` corpus ref + optional `engine_ref` boundary for lookup profile |
| **ADR-008-OQ-7** | How should master games be licensed and curated? | **Open** — D7; per-game `MasterGameReference` |
| **ADR-008-OQ-8** | What checksum/provenance fields are required? | **Open** — Source Reference schema minimum |
| **ADR-008-OQ-9** | What belongs in MVP-1 vs later corpus? | **Open** — seed list above + CCCR MVP 49 |
| **ADR-008-OQ-10** | How should adaptive training read corpus refs without writing learner state? | **Open** — SCCR F15; derived projections only |
| **ADR-008-OQ-11** | How should Creator serve old `corpus_ref` versions after deprecation? | **Open** — D12; external Creator spec |
| **ADR-008-OQ-12** | What external source verification review is required before doctrine? | **Open** — D14; paired with SCCR-OQ-17 |

---

## Downstream work

| Work | Depends on |
|------|------------|
| Corpus Reference Registry Review v1.0 | ADR-008 acceptance |
| MVP corpus registry manifest file | ADR-008 + OQ-008-4 |
| Opening tree wrapping plan | OQ-008-3; runtime `openings.ts` |
| Lichess puzzle source verification | Pillar 1; OQ-008-2 |
| Tablebase reference profile | Pillar 3; OQ-008-6 |
| Master game source verification | Pillar 4; OQ-008-7 |
| DecisionTrace storage ADR | ADR-005 |
| EngineReferenceProfile / EngineAnalysisSnapshot LLD | ADR-007; SCC-HLD-001 |
| Pedagogical Policy Layer LLD | SCC-HLD-001 |
| ADR-008 acceptance decision | Separate governance task |

---

## Repository evidence table

| Decision area | Primary evidence | Classification |
|---------------|------------------|----------------|
| corpus_ref semantic pointer | ADR-002 Accepted | [DOCTRINE] |
| Evidence cites corpus_ref | ADR-003 Accepted | [DOCTRINE] |
| Claim gate | ADR-004 Accepted | [DOCTRINE] |
| DecisionTrace corpus_ref | ADR-005 Accepted | [DOCTRINE] |
| Buddy corpus surfacing | ADR-006 Accepted | [DOCTRINE] |
| Domain Corpus boundary | ADR-007 Accepted; SCC-HLD-001 | [DOCTRINE] / [HLD DRAFT] |
| Corpus taxonomy proposal | CCCR v1.0 | [PROPOSAL] |
| Registry gap F3 | SCCR-001 | [REVIEW DRAFT] |
| Opening runtime tree | `openings.ts`, `openingdata.ts` | [RUNTIME] |
| Federation withholding | FEDERATION.md, `export_v1.py` | [DOCTRINE] / [RUNTIME] |
| External sources | Named candidates only | [UNVERIFIED EXTERNAL INPUT] until verified |

---

## Governance boundary statement

**ADR-008 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, ingest external datasets, create registry files, or **activate LARIS**.

---

## Related documents

- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [ADR-006 — Buddy Pedagogy and Reference Use v1](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md)
- [ADR-007 — Stockfish Reference and System Chess Competence Boundary v1](ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md)
- [ChessGuide Corpus Content Review v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md)
- [System Chess Competence Review v1.0](../../reviews/System-Chess-Competence-Review-v1.0.md)
- [System Chess Competence HLD v1.0](../../architecture/System-Chess-Competence-HLD-v1.0.md)
- [FEDERATION.md](../../FEDERATION.md)
