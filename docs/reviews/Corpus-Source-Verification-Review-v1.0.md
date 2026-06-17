# Corpus Source Verification Review v1.0

| Field | Value |
|-------|-------|
| **Document ID** | CSV-001 |
| **Title** | Corpus Source Verification Review v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Review |
| **Date** | 2026-06-17 |
| **Scope** | Source verification / license / provenance review only |
| **Depends on** | [ADR-008](../governance/adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md), [CRR-001](Corpus-Reference-Registry-Review-v1.0.md), [CCCR v1.0](ChessGuide-Corpus-Content-Review-v1.0.md), [SCCR-001](System-Chess-Competence-Review-v1.0.md), [SCC-HLD-001](../architecture/System-Chess-Competence-HLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft review / source verification only.**

This review records **primary-source license and provenance findings** for the seven candidate corpus sources identified in [ADR-008](../governance/adr/ADR-008-corpus-reference-registry-and-source-governance-v1-draft.md) and [CRR-001](Corpus-Reference-Registry-Review-v1.0.md). It does **not**:

- Ingest, download, or mirror datasets
- Create corpus registry manifest or JSON Schema
- Modify runtime, tests, federation export, schemas, or accepted ADRs
- Provide legal advice — only **source-status review** for ChessGuide governance

**Disclaimer:** Findings are repository governance input. Product counsel may still be required for commercial redistribution, app-store deployment, or jurisdiction-specific database rights.

---

## Executive summary

Primary-source review was performed on **2026-06-17** for all seven candidate sources. **No datasets were downloaded.**

| Outcome | Sources |
|---------|---------|
| **Primary CC0 / permissive license evidence found** | `source:lichess-puzzles`, `source:lichess-chess-openings`, `source:lichess-master-games` |
| **Primary redistribution statement for generated binaries; reference-profile-only in ChessGuide** | `source:syzygy-tablebases` |
| **Internal artifact only; partial in-repo provenance** | `source:runtime-opening-tree` |
| **No acceptable primary license terms located** | `source:caissabase`, `source:twic` |

**Key findings:**

1. **Lichess database exports** (including puzzles and rated games) — official page states **Creative Commons CC0** for database exports, with puzzle CSV including `Themes` and `OpeningTags` fields.
2. **lichess-org/chess-openings** — official `COPYING.txt` is **CC0 1.0 Universal**; master commit at review time `51a55d956b7ed0b9cd7853893744b1ca39cd2a05`.
3. **Syzygy** — official `syzygy1/tb` README states generated **tablebase files may be freely redistributed**; generator code is **GPL-2.0**. ChessGuide must still treat tablebases as **reference-profile-only** (ADR-008 D3) — not Git-stored binaries.
4. **Caissabase** — official site not reliably reachable; **no primary license page** captured in this review.
5. **TWIC** — official site provides PGN downloads; **no primary license / terms page** found on reviewed pages.
6. **Runtime opening tree** — verified in-repo (`openings.ts`, ~2,402 lines in `openingdata.ts`); **not** external license-verified doctrine.

**Recommendation:** Proceed to **MVP Corpus Registry Manifest draft** with:

- `source:runtime-opening-tree` (internal artifact)
- Hand-curated `decision_frame:*` / `tactic:*` seeds (no external corpus dependency)
- **Optional manifest linkage** to Lichess CC0 sources **with pinned snapshot metadata** — not raw ingestion
- **Defer** Caissabase and TWIC until manual legal/provenance follow-up
- **Defer** Syzygy binary hosting; allow `tablebase:*` reference profiles only

---

## Verification method

### Rules applied

1. **Primary sources only** for license truth — official sites, official GitHub repos, official license files, in-repository files for runtime tree.
2. **No** blogs, forums, AI summaries, or second-hand license claims as sole evidence.
3. **No dataset download** — verification is metadata/license review only.
4. **`license_verified`** assigned only when primary evidence is quoted or paraphrased in this review.
5. **`provenance_verified`** requires identifiable origin, locator, and review retrieval date — not product clearance alone.
6. ChessGuide governance boundaries from ADR-008 / CRR-001 remain: corpus_ref ≠ evidence; puzzle solve ≠ mastery; federation withholds corpus metadata.

### Retrieval

| Item | Value |
|------|-------|
| **Review performed** | 2026-06-17 |
| **Reviewer role** | Repository governance review (not legal counsel) |
| **Tools** | Official web pages, GitHub API/raw files, in-repo file inspection |

---

## Accepted governance baseline

| Document | Relevance |
|----------|-----------|
| **ADR-008** | Source pillars, `candidate_source` default, Source Reference shape, D1–D15 |
| **CRR-001** | Seven source rows, manifest field requirements, tactical/safety seeds |
| **CCCR v1.0** | Corpus taxonomy input; wrap strategy for openings |
| **SCCR-001 / SCC-HLD-001** | System competence, engine reference, federation boundaries |
| **FEDERATION.md** | Export withholding — source metadata not exported |

---

## Source verification matrix

| source_id | source_name | official locator | license evidence found | license_status recommendation | provenance_status recommendation | allowed uses | restrictions / risks | disposition |
|-----------|-------------|------------------|------------------------|------------------------------|----------------------------------|--------------|-------------------|-------------|
| `source:lichess-puzzles` | Lichess Puzzle Database | https://database.lichess.org/ | CC0 on database exports; puzzle DB `lichess_db_puzzle.csv.zst` with `Themes` column | **license_verified** (CC0) | **provenance_verified** | `corpus_curation`, `pedagogical_reference`, `puzzle_index` (future) | Theme taxonomy ≠ ChessGuide `tactic:*` without cross-walk; 6M+ rows — no Git ingest; puzzle solve ≠ learning | **admit_as_verified_source** (with snapshot pin + steward cross-walk) |
| `source:lichess-chess-openings` | lichess-org/chess-openings | https://github.com/lichess-org/chess-openings | `COPYING.txt` = CC0 1.0 Universal | **license_verified** (CC0) | **provenance_verified** (commit `51a55d9…`) | `corpus_curation`, `pedagogical_reference` for `opening:*`, `eco:*` | Label ≠ understanding; map to PGN/UCI/EPD in manifest task; not ECO correctness proof alone | **admit_as_verified_source** (with commit pin) |
| `source:syzygy-tablebases` | Syzygy WDL/DTZ tablebases | https://github.com/syzygy1/tb (`README.md` Terms of use) | Generated files "may be freely redistributed"; generator GPL-2.0 | **license_verified** (generated file redistribution statement) | **provenance_verified** (official generator repo) | `pedagogical_reference`, external lookup profile only | **150+ GB** storage; no repo binaries; GPL generator ≠ product embedding without compliance review; jurisdiction claims in README not legal advice | **restricted_reference_only** |
| `source:caissabase` | Caissabase | http://caissabase.co.uk/ (unreachable at review); no official license page retrieved | None from primary official source in this review | **unknown** | **unknown** | — | Site availability; no SPDX/terms; mixed game provenance; community mirrors not primary | **reject_for_now** / **needs_manual_legal_review** |
| `source:twic` | The Week in Chess (TWIC) | https://theweekinchess.com/twic | No license/terms on reviewed official download index page | **unknown** | **candidate** (known publisher, Mark Crowther) | `example_only` (link/reference) at most | Redistribution of weekly PGN zips unclear; commercial use unclear | **needs_manual_legal_review** / **restricted_reference_only** |
| `source:lichess-master-games` | Lichess rated games (incl. titled players) | https://database.lichess.org/ | Same CC0 statement covers database exports / rated games | **license_verified** (CC0) | **candidate** (subset definition not pinned) | `corpus_curation`, `example_only` with per-game curation | Master/titled filter is derived; not separate license; illustrative games need steward curation | **admit_as_candidate_only** (CC0 ok; snapshot + curation required) |
| `source:runtime-opening-tree` | ChessGuide `openings.ts` / `openingdata.ts` | `src/data/openings.ts`, `src/data/openingdata.ts` | In-repo artifact; no external license file | **unknown** | **partial** (in-repo, ~2,402 data lines) | Internal wrap map to `opening:*` only | Not external doctrine; authorship/history unclear; not ECO-verified | **internal_artifact_only** |

---

## Source-specific findings

### 1. `source:lichess-puzzles`

| Field | Finding |
|-------|---------|
| **source_type** | `puzzle_db` |
| **official locator** | https://database.lichess.org/ |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | "Database exports are released under the Creative Commons CC0 license. Use them for research, commercial purpose, publication, anything you like. You can download, modify and redistribute them, without asking for permission." |
| **license file present** | yes (page-level CC0 statement; not separate LICENSE file) |
| **license_status** | **license_verified** — CC0 |
| **provenance_status** | **provenance_verified** — official Lichess database site |
| **Puzzle themes** | Official docs: `lichess_db_puzzle.csv.zst`; fields include `Themes`, `OpeningTags`; ~6,014,381 puzzles |
| **allowed_uses[]** | `corpus_curation`, `pedagogical_reference`, `puzzle_index` (future lane) |
| **restrictions[]** | No Git ingest of full DB; cross-walk Lichess themes → ChessGuide `tactic:*`; no mastery from solve |
| **redistribution risk** | Low under CC0 for export files — still pin snapshot date/version in manifest |
| **attribution** | CC0 — no attribution required; good practice to cite source anyway |
| **dataset-size risk** | **High** — multi-GB compressed; manifest/index only |
| **product-use risk** | Medium — theme naming alignment + pedagogy boundaries |
| **review disposition** | **admit_as_verified_source** with steward theme cross-walk (CRR-OQ-2, CSV-OQ-4) |
| **evidence notes** | Primary: database.lichess.org puzzle section and CC0 header. No download performed. |

### 2. `source:lichess-chess-openings`

| Field | Finding |
|-------|---------|
| **source_type** | `openings_repo` |
| **official locator** | https://github.com/lichess-org/chess-openings |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | `COPYING.txt` — **CC0 1.0 Universal** (full legal text in repo) |
| **license file present** | **yes** — `COPYING.txt` |
| **version_or_snapshot** | `51a55d956b7ed0b9cd7853893744b1ca39cd2a05` (master, 2026-06-11) |
| **license_status** | **license_verified** — CC0 |
| **provenance_status** | **provenance_verified** |
| **allowed_uses[]** | `corpus_curation`, `pedagogical_reference` — ECO/opening labels, TSV → `eco:*`, `opening:*` |
| **restrictions[]** | Opening label ≠ understanding; wrap vs replace runtime tree (CRR-OQ-3) |
| **redistribution risk** | Low (CC0) |
| **attribution** | Not required; cite repo + commit in manifest |
| **dataset-size risk** | Low — TSV files suitable for manifest references |
| **product-use risk** | Low–medium — mapping correctness is editorial |
| **review disposition** | **admit_as_verified_source** |
| **evidence notes** | Primary: GitHub `COPYING.txt` raw + API commit SHA. |

### 3. `source:syzygy-tablebases`

| Field | Finding |
|-------|---------|
| **source_type** | `tablebase` |
| **official locator** | https://github.com/syzygy1/tb — `README.md` "Terms of use" |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | "All tablebase files generated using this generator may be freely redistributed. In fact, those files are free of copyright at least under US law … and under EU law …" Generator `src/` under **GPL-2.0**. |
| **license file present** | yes — `COPYING.txt` (GPL-2.0 for generator) |
| **license_status** | **license_verified** for **generated tablebase file** redistribution statement; generator code **GPL-2.0** |
| **provenance_status** | **provenance_verified** (official Ronald de Man / syzygy1 repository) |
| **allowed_uses[]** | External WDL/DTZ lookup; `tablebase:*` reference profiles in manifest |
| **restrictions[]** | **No binaries in Git**; 6-piece WDL ~68 GB + DTZ ~82 GB; reference-profile-only per ADR-008 D3/D6 |
| **redistribution risk** | Low for binaries per README; hosting burden is operational |
| **attribution** | README authorship Ronald de Man; no CC-style attribution mandate stated |
| **dataset-size risk** | **Critical** — terabyte-scale at 7-piece |
| **product-use risk** | Medium — engine/tablebase lane ≠ learner evidence; GPL if embedding generator |
| **review disposition** | **restricted_reference_only** |
| **evidence notes** | syzygy-tables.info blocked automated fetch; **syzygy1/tb README** used as primary. Chess programming wiki **not** used as license truth. |

### 4. `source:caissabase`

| Field | Finding |
|-------|---------|
| **source_type** | `pgn_collection` |
| **official locator** | http://caissabase.co.uk/ — **not reachable** in this review |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | **None** from official primary source |
| **license file present** | **no** |
| **license_status** | **unknown** |
| **provenance_status** | **unknown** |
| **allowed_uses[]** | None admitted |
| **restrictions[]** | Per-game rights unknown; site downtime; no steward snapshot |
| **redistribution risk** | **High** — unknown |
| **attribution** | Unknown |
| **dataset-size risk** | High (~500 MB+ historical SCID dumps cited elsewhere — **not** primary evidence) |
| **product-use risk** | **High** |
| **review disposition** | **reject_for_now**; **needs_manual_legal_review** if site/terms resurface |
| **evidence notes** | Forum creator statements exist but are **not** primary license evidence per verification rule. |

### 5. `source:twic`

| Field | Finding |
|-------|---------|
| **source_type** | `pgn_collection` |
| **official locator** | https://theweekinchess.com/twic |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | **None** on official TWIC index/download page reviewed |
| **license file present** | **no** |
| **license_status** | **unknown** |
| **provenance_status** | **candidate** — established publication (Mark Crowther), weekly PGN archives |
| **allowed_uses[]** | At most `example_only` via link until terms verified |
| **restrictions[]** | Weekly PGN redistribution terms unclear; do not ingest into product corpus |
| **redistribution risk** | **High** — terms not published on reviewed page |
| **attribution** | Presumed required ethically; not verified as legal obligation |
| **dataset-size risk** | Medium per weekly archive |
| **product-use risk** | **High** for curated `master_game:*` without terms |
| **review disposition** | **needs_manual_legal_review**; **restricted_reference_only** |
| **evidence notes** | Official page documents PGN/CBV downloads only — no rights grant language found. |

### 6. `source:lichess-master-games`

| Field | Finding |
|-------|---------|
| **source_type** | `pgn_collection` |
| **official locator** | https://database.lichess.org/ (rated games exports) |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | Same CC0 database export statement as puzzles/games |
| **license file present** | yes (page-level CC0) |
| **license_status** | **license_verified** (CC0 on exports) |
| **provenance_status** | **candidate** — "master games" is a **derived subset**, not separate export artifact in this review |
| **allowed_uses[]** | `example_only`, `corpus_curation` with per-game steward review |
| **restrictions[]** | Filter definition must be pinned; illustrative examples only; not bulk master_game corpus |
| **redistribution risk** | Low under CC0 for export files |
| **attribution** | CC0 — optional courtesy citation |
| **dataset-size risk** | **Critical** if full rated DB ingested |
| **product-use risk** | Medium — curation burden |
| **review disposition** | **admit_as_candidate_only** |
| **evidence notes** | Separate "masters only" license not found; treated as CC0 rated-games subset. Broadcast PGN on same site uses **CC-BY-SA 4.0** — **not** mixed into this source row without separate verification. |

### 7. `source:runtime-opening-tree`

| Field | Finding |
|-------|---------|
| **source_type** | `runtime_tree` |
| **official locator** | `src/data/openings.ts`, `src/data/openingdata.ts` |
| **retrieved_at** | 2026-06-17 |
| **license statement found** | None in-repo |
| **license file present** | **no** |
| **license_status** | **unknown** |
| **provenance_status** | **partial** — files exist; ~2,402 lines; SAN tree with `info` labels |
| **allowed_uses[]** | Internal wrap map only |
| **restrictions[]** | Not external doctrine; not ECO proof; not `license_verified` external source |
| **redistribution risk** | N/A (already in repo) |
| **attribution** | Unknown upstream |
| **dataset-size risk** | Low |
| **product-use risk** | Low for labels; medium for correctness claims |
| **review disposition** | **internal_artifact_only** |
| **evidence notes** | `locate()`, `sanText()` verified; no `corpus_ref` IDs (CRR-001 F6). |

---

## License/provenance recommendations

### Status assignments (summary)

| source_id | license_status | provenance_status | curation_status for manifest |
|-----------|----------------|-------------------|------------------------------|
| `source:lichess-puzzles` | verified (CC0) | provenance_verified | `curated` only after steward cross-walk published |
| `source:lichess-chess-openings` | verified (CC0) | provenance_verified | `curated` after commit pin in manifest |
| `source:syzygy-tablebases` | verified (redistribution statement) | provenance_verified | `candidate_source` for profiles until steward publishes `tablebase:*` refs |
| `source:caissabase` | unknown | unknown | `candidate_source` — do not use in MVP external rows |
| `source:twic` | unknown | candidate | `candidate_source` — do not use in MVP external rows |
| `source:lichess-master-games` | verified (CC0) | candidate | `candidate_source` until per-game curation |
| `source:runtime-opening-tree` | unknown | partial | `candidate_source` / internal mapping metadata only |

### ADR-008 alignment

- **D2** — verified license ≠ automatic doctrine; steward must still publish `CorpusRef` rows.
- **D7** — master games require per-game curation even under CC0.
- **D14** — this review admits **primary license evidence** only; not pedagogy doctrine.

---

## Corpus pillar implications

| Pillar | After CSV-001 |
|--------|---------------|
| **1 — Tactical** | Lichess puzzles **may** support `tactic:*` / theme cross-walk under CC0 — not raw theme import as doctrine |
| **2 — Opening** | chess-openings **may** support `eco:*` / `opening:*`; runtime tree **wrap only** |
| **3 — Endgame** | Syzygy **reference profiles only** — no binary corpus in repo |
| **4 — Master games** | **Defer** Caissabase/TWIC; Lichess CC0 allows **candidate** illustrative examples with curation — not bulk import |

---

## Manifest implications

### Allowed in MVP manifest (recommended)

| source_ref | Conditions |
|------------|------------|
| `source:runtime-opening-tree` | `license_status: unknown`; `provenance_status: partial`; `curation_status: candidate_source`; `limitations: internal_artifact_only, not_eco_doctrine, not_for_claim`; `not_federation_export: true` |
| Hand-curated entries (no external `source_refs`) | Steward-authored `decision_frame:*`, `tactic:*` — `source_refs: []` or internal steward source |

### May be linked after snapshot pin (not required for MVP)

| source_ref | Required manifest fields |
|------------|-------------------------|
| `source:lichess-chess-openings` | `license_status: verified`; `version_or_snapshot: 51a55d9…`; `retrieval_date: 2026-06-17` |
| `source:lichess-puzzles` | `license_status: verified`; `version_or_snapshot: database.lichess.org page date`; theme cross-walk doc |
| `source:syzygy-tablebases` | `license_status: verified`; `limitations: reference_profile_only, no_binary_in_repo` |

### Must NOT appear as `license_verified` in MVP without further work

- `source:caissabase`
- `source:twic`

### Default boundary flags (all external-linked entries)

- `not_evidence: true`
- `not_claim: true`
- `not_mastery: true`
- `not_federation_export: true`
- `limitations[]` includes `not_doctrine` until steward `curated`

---

## Tactical motif / safety checklist implications

| Rule | Detail |
|------|--------|
| Lichess puzzle themes | Even under CC0, **theme strings must be cross-walked** to ChessGuide `tactic:*` / `decision_frame:*` — not copied as doctrine labels (CSV-OQ-4) |
| Puzzle solve | Activity only — not EvidenceRecord or Claim (ADR-004, CRR-001) |
| Tactical motifs | Support **practice and pattern recognition** vocabulary — not mastery |
| Safety checklist / CCT | Remain **review-input procedures** (`decision_frame:*`) until System Chess Competence LLD — not imported from Lichess |
| Engine/tablebase | Syzygy lookup is **reference lane** — separate from learner reasoning |

---

## Federation boundary implications

Per [FEDERATION.md](../../FEDERATION.md) and `export_v1.py`:

- Source verification metadata, `source_refs`, license blobs, and corpus registry fields **must not** appear in federation export.
- CC0 clearance for Lichess exports does **not** widen federation export — ObservationRecord remains terminal game slice only.

---

## Creator continuity implications

| Requirement | Detail |
|-------------|--------|
| Historical license status | `SourceReferenceSnapshot` at capture time — later CC0/license changes do not rewrite past records |
| Source unavailability | If Lichess export format changes, continuity records retain pinned `version_or_snapshot` |
| Deprecated sources | `superseded_by` on `corpus_ref` and source rows — Creator resolves without silent rewrite |
| TWIC/Caissabase rejection | Historical records must not cite these as `license_verified` retroactively |
| Scan/teaching lineage | Unchanged from CRR-001 — separate from source verification |

---

## Risk assessment

| Risk | Level | Mitigation |
|------|-------|------------|
| Treating CC0 as automatic doctrine | Medium | Steward curation + manifest `not_doctrine` until curated |
| Full Lichess DB ingest | High | Manifest/index only; ADR-008 D3 |
| Syzygy binary hosting | Critical | Reference-profile-only |
| TWIC/Caissabase without terms | High | Reject for MVP; manual legal follow-up |
| Runtime tree as ECO authority | Medium | internal_artifact_only; wrap with chess-openings where needed |
| Theme taxonomy drift | Medium | Cross-walk table + version pin |
| Jurisdiction / database rights | Medium | CSV-OQ-1, CSV-OQ-10; not legal advice in this review |

---

## Non-goals

- Dataset ingestion or download
- PGN / puzzle import pipelines
- Tablebase download or Git storage
- Schema or registry manifest file creation
- Runtime scanner or engine integration
- LLD / UML
- LARIS activation
- Legal advice beyond source-status review

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **CSV-OQ-1** | What license statuses are acceptable for product use? | **Open** — lean CC0 + explicit reference-only for Syzygy; reject unknown |
| **CSV-OQ-2** | Is CC0 sufficient for all intended pedagogical uses? | **Open** — lean yes for Lichess exports; steward curation still required |
| **CSV-OQ-3** | How should attribution be stored if required? | **Open** — optional `notes` + `source_refs[]` courtesy fields |
| **CSV-OQ-4** | Can puzzle themes be copied, mapped, or only referenced? | **Open** — lean **map** to ChessGuide `tactic:*`, do not copy raw theme strings as IDs |
| **CSV-OQ-5** | Are generated tablebase binaries governed differently from generator source code? | **Open** — **yes** — binaries per README redistribution; code GPL-2.0 |
| **CSV-OQ-6** | Can TWIC PGNs be redistributed or only linked? | **Open** — **unknown** until TWIC terms located |
| **CSV-OQ-7** | Can Caissabase be used as curated source? | **Open** — **reject for now** |
| **CSV-OQ-8** | How should in-repo runtime opening data provenance be handled? | **Open** — internal_artifact_only + wrap plan |
| **CSV-OQ-9** | Minimum evidence for `license_verified`? | **Open** — primary official license page or `COPYING.txt` quoted in review |
| **CSV-OQ-10** | Should source verification repeat on a schedule? | **Open** — lean yes on major manifest version bumps |

---

## Recommendation

**Partial verification achieved** — sufficient to proceed with **internal-first MVP manifest**, plus **optional CC0 Lichess/chess-openings source_refs with snapshot pins**.

### Recommended next steps

| # | Task |
|---|------|
| 1 | **MVP Corpus Registry Manifest draft** — `source:runtime-opening-tree` + hand-curated `decision_frame:*` / `tactic:*` |
| 2 | **CCCR → ADR-008 namespace migration table** |
| 3 | **Opening tree wrapping plan** — runtime map + optional chess-openings commit `51a55d9…` |
| 4 | **Lichess puzzle theme cross-walk** (governance doc only — no ingest) |
| 5 | **Manual legal/provenance follow-up** for TWIC and Caissabase before any `master_game:*` external linkage |

### Deferred

- Bulk Lichess puzzle/game ingest
- Syzygy binary hosting in repository
- Caissabase / TWIC manifest `source_refs`
- ADR-008 acceptance (separate governance task)

---

## Downstream work

| Work | Depends on |
|------|------------|
| MVP Corpus Registry Manifest draft | CSV-001 |
| Opening tree wrapping plan | CSV-OQ-8 |
| Lichess theme cross-walk governance doc | CSV-OQ-4 |
| TWIC / Caissabase manual legal review | CSV-OQ-6, CSV-OQ-7 |
| Tactical Safety Scanner / System Chess Competence LLD | CRR-001 |
| UML package | CRR-001 |
| ADR-008 acceptance | Separate governance task |

---

## Repository evidence table

| Artifact | Evidence | Classification |
|----------|----------|----------------|
| database.lichess.org | CC0 statement; puzzle CSV schema | [PRIMARY — EXTERNAL] |
| lichess-org/chess-openings `COPYING.txt` | CC0 1.0 | [PRIMARY — EXTERNAL] |
| syzygy1/tb `README.md` | Redistribution + GPL-2.0 generator | [PRIMARY — EXTERNAL] |
| theweekinchess.com/twic | Downloads only; no terms found | [PRIMARY — EXTERNAL] |
| caissabase.co.uk | Unreachable | [PRIMARY — UNAVAILABLE] |
| `openings.ts` / `openingdata.ts` | ~2,402 lines; no `corpus_ref` | [RUNTIME] |
| `export_v1.py` | Forbidden export keys | [RUNTIME] |
| ADR-008 / CRR-001 | Source model + manifest requirements | [DOCTRINE DRAFT / REVIEW] |

---

## Governance boundary statement

**This review does not modify** runtime, tests, federation export, schemas, implementation files, **ADR status**, ingest external datasets, create registry manifest files, schema files, LLD, UML, or **activate LARIS**.

**Not legal advice.** Product deployment may require independent counsel beyond this source-status review.
