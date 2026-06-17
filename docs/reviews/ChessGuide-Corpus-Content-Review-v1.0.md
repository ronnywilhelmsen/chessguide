# ChessGuide Corpus Content Review v1.0

| Field | Value |
|-------|-------|
| **Review ID** | CCCR-v1.0 |
| **Date** | 2026-06-06 |
| **Branch** | `reviews/chessguide-corpus-content-v1` |
| **Base SHA** | `414f34651e8e70d3baab470ced175ce23a92e520` |
| **Continues from** | [CDCR v1.0](ChessGuide-Domain-Content-Review-v1.0.md) (branch `reviews/chessguide-domain-content-v1`), Accepted ADR-001–004, ADR-005 draft (branch `governance/adr-005-decisiontrace-per-ply-reasoning`) |
| **Scope** | Concrete chess domain corpus — tactics, endgames, openings, principles, position classes, decision frames, `corpus_ref` candidates |
| **Authority** | Review only — does not adopt proposals, modify ADRs, or implement runtime |

---

## Truth hierarchy

1. Governance / ADRs / CG / CB / CFA / LEF
2. Committed reviews
3. LLD design targets
4. Runtime legacy

**Note:** CB-002 file in repository is `CB-002-longitudinal-skill-development-domain.md` (not `learning-scope-and-domain-definition`).

---

## 1. Mission

### What chess content must exist for longitudinal chess skill?

ChessGuide must own a **bounded, citable domain corpus** so learners can:

1. **Notice** recurring structures (tactics, weaknesses, plans) — LOE-001/002
2. **Explain** why a move or plan matters — LOE-009, DecisionTrace `rationale_statement`
3. **Demonstrate** under conditions — DOE-008
4. **Integrate** through steward-gated claims scoped to `corpus_ref` — ADR-004

Without corpus, evidence devolves into **free text** — violating ADR-003 D4 grounding rules.

### What corpus must exist before meaningful LOE/DOE/DecisionTrace capture?

| Minimum | Rationale |
|---------|-----------|
| **12–15 tactic `corpus_ref` labels** | Highest-frequency observability in beginner/intermediate play |
| **5–8 endgame technique refs** | Distinct phase; currently **zero** runtime corpus |
| **5–8 principles** | Buddy pedagogy (CB-004) and DecisionTrace `decision_frame[]` |
| **5 opening system refs** | Wrap existing `openings.ts` — normalize to `opening:*` |
| **8–12 decision frames** | ADR-005 `decision_frame[]` vocabulary |
| **8–12 error patterns** | LOE-006, reflection, post-game review |

**Not required for first capture:** exhaustive opening theory, tablebases, encyclopedic tactic DB.

### What should v1 teach first?

**Pilot focus (CG-FLL-1E aligned):**

1. **Tactical awareness** — fork, pin, skewer, hanging piece, back rank
2. **Opening principles** — development, center, king safety (not deep theory)
3. **Basic endgame ideas** — opposition, Lucena skeleton, basic mates
4. **Explanation habit** — LOE-009 on one `corpus_ref` per episode review
5. **Decision honesty** — DecisionTrace with `decision_frame[]` + `limitations`

---

## 2. Corpus Reference definition

**Canonical term [DOCTRINE]:** **Corpus Reference** — ADR-002 D5. **Not** Knowledge Concept.

> **`corpus_ref`** = stable **semantic pointer** into ChessGuide **domain corpus** — identifying a tactic label, endgame technique, opening system/line, principle, position class, decision frame, or focus object.

| Property | Rule | Source |
|----------|------|--------|
| **Points to** | Domain corpus unit | ADR-002 D5 |
| **Is not** | Learner evidence | ADR-002 D2 |
| **Is not** | Claim or mastery | ADR-004 D2 |
| **Is not** | Federation export | ADR-002 D8; FEDERATION.md |
| **May be cited by** | Evidence Records (`corpus_ref`) | ADR-003 D4 |
| **May be cited by** | DecisionTrace (`corpus_ref`, `decision_frame[]`) | ADR-005 D4 draft |
| **May scope** | Integration Claims via evidence lineage | ADR-004 D7 |

**Syntax [PROPOSAL]:** namespace slug — `category:subcategory:<slug>` — format pinning deferred (OQ-CCR-2).

---

## 3. Existing runtime corpus inventory

### 3.1 Opening tree (`src/data/openings.ts`, `openingdata.ts`)

| Aspect | Finding | Class |
|--------|---------|-------|
| **Structure** | `San` tree: `san`, `children[]`, optional `info` string | [RUNTIME] |
| **Data** | ~2,400 newline-separated lines in `openingdata.ts` | [RUNTIME] |
| **Line format** | `{moves}/{Opening Name}/{Variation name}` | [RUNTIME] |
| **Lookup** | `locate(moves[])` → node; `sanText()` → human label | [RUNTIME] |
| **`corpus_ref`** | **Absent** — no stable IDs | [RUNTIME GAP] |
| **Tactics / endgames** | **Not present** in tree | [RUNTIME GAP] |
| **Doctrine** | CB-005 `opening.recognized`; ADR-002 `corpus_ref` for openings | [DOCTRINE] |

**Sample runtime labels [RUNTIME]:** King's Indian, Sicilian/Najdorf, Ruy Lopez/Berlin, Queen's Indian, Gruenfeld, French, Dutch, English, QGA, Nimzo-Indian, Petrov, Scandinavian, Reti, London-related systems (via move orders).

### 3.2 Tactical motifs

| Aspect | Finding | Class |
|--------|---------|-------|
| **Runtime** | No tactic types, labels, or pattern DB | [RUNTIME GAP] |
| **Doctrine** | LOE-002 Pattern Recognition; CDCR Taxonomy T1–T2 | [DOCTRINE] + [PROPOSAL] |

### 3.3 Endgame content

| Aspect | Finding | Class |
|--------|---------|-------|
| **Runtime** | `rules.ts` — checkmate detection only; no endgame corpus | [RUNTIME GAP] |
| **Doctrine** | CB-002 catalogue gap (CEAR OQ-K2); CDCR T6 | [DOCTRINE] + [PROPOSAL] |

### 3.4 Principles / position classes

| Aspect | Finding | Class |
|--------|---------|-------|
| **Runtime** | No principle registry | [RUNTIME GAP] |
| **Doctrine** | CB-005 anchor type `position_class`; ADR-001 AN-3 | [DOCTRINE] |
| **Inference** | Opening `info` strings imply systems — not principles | [INFERENCE] |

### 3.5 Engine / eval (measured lane only)

| Component | Role | Class |
|-----------|------|-------|
| `helper.ts` | Parses `cp` from server/bot response | [RUNTIME] |
| `CP.tsx` | Displays centipawn bar — `config.showCP` gated | [RUNTIME] |
| `server.ts` | Engine communication (not corpus) | [RUNTIME] |
| **Doctrine** | CB-000 PI-5; CB-004 PP-7 — reference not decree | [DOCTRINE] |
| **ADR-005** | `engine_ref` separated from learner reasoning | [DRAFT] |

**Rule:** Engine CP is **measured lane** — never `corpus_ref` truth, never learning proof.

### 3.6 Corpus registry

| Item | Status | Class |
|------|--------|-------|
| Central `corpus_ref` registry file | **Absent** | [RUNTIME GAP] |
| Governance taxonomy doc | CDCR proposal only (branch) | [PROPOSAL] |
| ADR for `corpus_ref` format | Deferred ADR-002 OQ-002-5 | [OPEN QUESTION] |

---

## 4. Chess Corpus Taxonomy v1 [PROPOSAL]

Namespaces are **review proposals** — not adopted governance until future ADR.

### A. Tactics — `pattern:tactic:<slug>`

| slug | Label (en) |
|------|------------|
| `fork` | Fork / double attack on two pieces |
| `pin` | Pin |
| `skewer` | Skewer |
| `discovered_attack` | Discovered attack |
| `double_attack` | Double attack (non-knight fork) |
| `deflection` | Deflection |
| `decoy` | Decoy / lure |
| `clearance` | Clearance |
| `interference` | Interference |
| `zwischenzug` | Zwischenzug / in-between move |
| `back_rank` | Back-rank motif |
| `mating_net` | Mating net |
| `overloaded_piece` | Overloaded defender |
| `trapped_piece` | Trapped piece |
| `removing_defender` | Removing the defender |

### B. Calculation / forcing lines — `skill:calculation:<slug>`

| slug | Label |
|------|-------|
| `check_capture_threat` | Check / capture / threat scan |
| `candidate_move_generation` | Candidate move generation |
| `forcing_sequence` | Forcing sequence (checks, captures, threats) |
| `blunder_check` | Blunder check before commit |
| `quiet_move_in_tactic` | Quiet winning move in tactical position |
| `zwischenzug_candidate` | Zwischenzug candidate consideration |
| `defensive_resource` | Defensive resource search |

### C. Strategy / positional play — `pattern:strategy:<slug>`

| slug | Label |
|------|-------|
| `weak_square` | Weak square |
| `outpost` | Outpost |
| `open_file` | Open file |
| `semi_open_file` | Semi-open file |
| `bishop_pair` | Bishop pair |
| `bad_bishop` | Bad bishop |
| `good_knight_vs_bad_bishop` | Good knight vs bad bishop |
| `pawn_majority` | Pawn majority |
| `minority_attack` | Minority attack |
| `isolated_queen_pawn` | Isolated queen pawn (IQP) |
| `hanging_pawns` | Hanging pawns |
| `space_advantage` | Space advantage |
| `prophylaxis` | Prophylaxis |
| `piece_activity` | Piece activity |
| `king_safety` | King safety (positional) |
| `color_complex` | Color complex / dark-square weakness |

### D. Opening — `opening:<system>:<line>`

Map from runtime where possible:

| corpus_ref (proposal) | Runtime `info` anchor | Notes |
|----------------------|----------------------|-------|
| `opening:italian:giuoco_piano` | Italian Game lines in tree | Wrap via move-path hash |
| `opening:ruy_lopez:berlin` | Ruy Lopez/Berlin defence | Present [RUNTIME] |
| `opening:sicilian:najdorf` | Sicilian/Najdorf | Present [RUNTIME] |
| `opening:french:winawer` | French/Winawer | Present [RUNTIME] |
| `opening:queens_gambit:classical` | QGA/classical, etc. | Present [RUNTIME] |
| `opening:gruenfeld:exchange` | Gruenfeld/exchange | Present [RUNTIME] |
| `opening:kings_indian:averbakh` | King's Indian systems | Present [RUNTIME] |
| `opening:nimzo_indian:classical` | Nimzo-Indian | Present [RUNTIME] |
| `opening:english:closed` | English/closed | Present [RUNTIME] |
| `opening:london:system` | London-style setups | Partial via move orders |
| `opening:scotch:main` | Scotch game | Search tree |
| `opening:caro_kann:main` | Caro-Kann | If present in tree |
| `opening:alapin:sicilian` | Sicilian/Alapin's variation | Present [RUNTIME] |

**Rule:** `opening:*` refs **wrap** runtime tree nodes — do not duplicate move data in corpus registry.

### E. Endgame — `pattern:endgame:<slug>`

| slug | Label |
|------|-------|
| `king_and_pawn_opposition` | King and pawn — opposition |
| `triangulation` | Triangulation |
| `outside_passed_pawn` | Outside passed pawn |
| `rook_lucena` | Rook pawn — Lucena position |
| `rook_philidor` | Rook pawn — Philidor position |
| `rook_cutoff_king` | Rook cuts off enemy king |
| `pawn_breakthrough` | Pawn breakthrough |
| `basic_mates` | Basic checkmates (KQ vs K, KR vs K) |
| `queen_vs_pawn` | Queen vs pawn on 7th |
| `minor_piece_endgame` | Minor piece endgame basics |
| `fortress` | Fortress |
| `zugzwang` | Zugzwang |

### F. Principles — `principle:<slug>`

| slug | Label |
|------|-------|
| `development` | Develop pieces |
| `center_control` | Control the center |
| `king_safety` | King safety |
| `piece_coordination` | Piece coordination |
| `improve_worst_piece` | Improve worst piece |
| `trade_when_ahead` | Trade when ahead |
| `avoid_unnecessary_weaknesses` | Avoid unnecessary weaknesses |
| `create_second_weakness` | Create second weakness |
| `rooks_on_open_files` | Rooks on open files |
| `connect_rooks` | Connect rooks |
| `passed_pawn_push` | Push passed pawn |
| `activate_king_endgame` | Activate king in endgame |

### G. Decision frames — `decision_frame:<slug>` (ADR-005 aligned)

| slug | Use in DecisionTrace |
|------|---------------------|
| `tactic` | Tactical search frame |
| `calculation` | Calculation / forcing lines |
| `plan_continuity` | Continuing prior plan |
| `prophylaxis` | Opponent threat prevention |
| `material` | Material balance decision |
| `king_safety` | King safety frame |
| `development` | Development priority |
| `center_control` | Center play |
| `pawn_structure` | Pawn structure plan |
| `time_pressure` | Clock / time trouble |
| `opening_principle` | Opening principle application |
| `endgame_conversion` | Converting advantage |
| `blunder_avoidance` | Safety-first move choice |

### H. Error / misconception patterns — `meta:error_pattern:<slug>`

| slug | Label |
|------|-------|
| `hanging_piece` | Left piece en prise |
| `back_rank_weakness` | Back-rank vulnerability |
| `missed_tactic` | Missed tactical shot |
| `premature_attack` | Premature attack |
| `queen_hunt` | Excessive queen chase |
| `tunnel_vision` | Tunnel vision / one-sided plan |
| `ignoring_opponent_threat` | Ignored opponent threat |
| `bad_trade` | Unfavorable trade |
| `time_trouble_blunder` | Blunder under time pressure |
| `moving_same_piece_repeatedly` | Moving same piece repeatedly |
| `opening_principle_violation` | Violated opening principle |

---

## 5. MVP Corpus v1 [PROPOSAL]

Curated set for **first LOE/DOE/DecisionTrace capture pilot** — **49 base refs**, with possible expansion to **~55** when opening sub-lines are counted (OQ-CCR-3).

### Tactics (12)

`pattern:tactic:fork`, `pin`, `skewer`, `discovered_attack`, `double_attack`, `deflection`, `back_rank`, `mating_net`, `overloaded_piece`, `trapped_piece`, `removing_defender`, `zwischenzug`

### Endgames (6)

`pattern:endgame:king_and_pawn_opposition`, `rook_lucena`, `rook_philidor`, `basic_mates`, `outside_passed_pawn`, `triangulation`

### Principles (6)

`principle:development`, `center_control`, `king_safety`, `piece_coordination`, `trade_when_ahead`, `activate_king_endgame`

### Openings (5)

`opening:italian:main`, `opening:sicilian:najdorf`, `opening:ruy_lopez:main`, `opening:queens_gambit:classical`, `opening:london:system`

*(Runtime wrap: map to existing tree nodes via move-prefix + `info` match — OQ-CCR-4.)*

### Decision frames (10)

`decision_frame:tactic`, `calculation`, `plan_continuity`, `prophylaxis`, `material`, `king_safety`, `development`, `pawn_structure`, `time_pressure`, `blunder_avoidance`

### Error patterns (10)

`meta:error_pattern:hanging_piece`, `back_rank_weakness`, `missed_tactic`, `premature_attack`, `tunnel_vision`, `ignoring_opponent_threat`, `bad_trade`, `time_trouble_blunder`, `opening_principle_violation`, `moving_same_piece_repeatedly`

### MVP selection criteria [INFERENCE]

| Criterion | MVP coverage |
|-----------|--------------|
| High frequency beginner/intermediate | Tactics + hanging piece + opening principles |
| Observable in MoveRecord | All MVP tactics/errors visible in game log |
| LOE-009 explainable | Fork, pin, development — plain language |
| DOE-008 demonstrable | Tactic played or principle followed in game |
| Low engine infrastructure | No tablebase; CP optional reference |
| Buddy pedagogy (CB-004) | One point per intervention — MVP sized |

---

## 6. Corpus Reference object proposal [PROPOSAL — not schema]

Semantic fields for future registry (Markdown/YAML governance file — not JSON Schema):

| Field | Purpose |
|-------|---------|
| `corpus_ref` | Stable ID — e.g. `pattern:tactic:fork` |
| `label` | Human display name |
| `category` | tactic \| endgame \| opening \| principle \| strategy \| decision_frame \| error_pattern \| calculation |
| `aliases[]` | Synonyms (e.g. "double attack" for fork family) |
| `description` | Bounded pedagogical definition |
| `examples[]` | Canonical FEN or move-miniatures (domain corpus) |
| `prerequisite_refs[]` | Simpler refs first (e.g. `hanging_piece` before `fork`) |
| `related_refs[]` | Adjacent concepts |
| `contrast_refs[]` | Confusable pairs (pin vs skewer) |
| `typical_evidence[]` | LOE/DOE catalogue hints — e.g. LOE-002, LOE-009 |
| `common_misconceptions[]` | Links to `meta:error_pattern:*` |
| `decision_frame_refs[]` | Default frames for DecisionTrace |
| `source_boundary` | `hand_curated` \| `opening_tree_derived` \| `public_source_cited` \| `engine_assisted_review` |
| `version` | Corpus entry version pin |

**Emphasis:** Review proposal only. Future **Corpus Reference Registry ADR** or implementation phase must formalize wire format.

---

## 7. Mapping to LOE/DOE

### By category

| Category | LOE-001 | LOE-002 | LOE-009 | LOE-010 | DOE-006 | DOE-008 |
|----------|---------|---------|---------|---------|--------|---------|
| **Tactics** | Notices threat | Labels motif | Explains geometry | Teaches peer | Reflects on scan | Plays tactic |
| **Endgames** | Notices technique | Names technique | Explains rule | Teaches idea | Walkthrough dialogue | Executes technique |
| **Principles** | Notices violation/apply | Names principle | Explains why | Teaches principle | Meta-process | Demonstrates in game |
| **Openings** | Recognizes line | Names system | Explains plan | Teaches line | Plan dialogue | Plays line correctly |
| **Decision frames** | — | — | Frames explanation | — | Process reflection | Move matches frame |
| **Error patterns** | Notices mistake | Labels error type | Explains cause | — | Contradiction dialogue | Corrects next time |

### Worked example: `pattern:tactic:fork`

| Event | Description |
|-------|-------------|
| **LOE-001** | Learner notices knight can attack king and rook simultaneously |
| **LOE-002** | Learner labels it "fork" — `corpus_ref` set |
| **LOE-009** | Learner explains why both targets cannot escape |
| **DOE-008** | Learner plays fork in game under time/mode conditions |
| **LOE-010** | Learner teaches fork to steward/peer |
| **Claim** | Integration Claim on `pattern:tactic:fork` **only** after `evidence_refs[]` lineage + ADR-004 C0–C4 — **not** from single LOE |

---

## 8. Mapping to DecisionTrace (ADR-005 draft)

| corpus_ref | DecisionTrace field | Example |
|------------|---------------------|---------|
| `principle:king_safety` | `decision_frame[]`, `rationale_statement` | "Castling to satisfy king safety" |
| `pattern:tactic:pin` | `candidate_moves[]`, `corpus_ref` | Considered Bb5 pinning knight |
| `meta:error_pattern:tunnel_vision` | `reflection`, `limitations` | Post-game: "I only looked at attack" |
| `pattern:endgame:king_and_pawn_opposition` | `rationale_statement`, `expected_outcome` | "Opposition wins the pawn race" |
| `decision_frame:calculation` | `decision_frame[]` | Primary frame for forcing line |
| `pattern:strategy:open_file` | `decision_frame[]`, `corpus_ref` | Rook lift planned for open file |

**Rules [DRAFT] ADR-005:**

- `corpus_ref` on DecisionTrace = semantic pointer — **not** evidence alone
- `decision_frame:*` may appear without full tactic ref when frame is generic
- Engine-suggested lines use `engine_ref` — not `corpus_ref` as learner reasoning

---

## 9. What not to include in v1

| Excluded | Rationale |
|----------|-----------|
| Full chess encyclopedia | Corpus bloat; stewardship unmanageable |
| Exhaustive opening theory | `openingdata.ts` already large; MVP wraps subset |
| Engine line database as corpus | Measured lane only — CB-000 PI-5 |
| Tablebase-heavy endgame corpus | Infrastructure scope |
| Tournament prep corpus | Out of identity (CG-000) |
| Persisted knowledge graph | ADR-002 rejected |
| Persisted mastery ladder | ADR-002 D3; CDCR Phase 5 |
| LARIS corpus | LARIS dormant — learning dialogue not chess content |
| Federation export of corpus | ADR-002 D8 |
| Numeric skill scores / KPI model | ADR-003 D5; CB-002 R-2 |
| Automatic claim generation | ADR-004 stewardship required |

---

## 10. Source and curation policy [PROPOSAL]

| Question | Recommendation |
|----------|----------------|
| Hand-curated initially? | **Yes** — MVP **49 base entries** hand-authored in governance Markdown/YAML |
| Normalize `openings.ts`? | **Wrap, not migrate** — add `corpus_ref` map from tree paths to `opening:*` |
| Cite public chess sources? | **Yes** — `source_boundary: public_source_cited` where definitions derive from textbooks/sites |
| Engine-derived patterns? | **Assist only** — `engine_assisted_review`; engine does not define corpus truth |
| Learner examples in corpus? | **Remain learner custody** unless explicitly promoted as anonymized corpus `examples[]` later |

**Default rules:**

- Every MVP entry has `source_boundary`
- Learner Episode positions are **evidence**, not corpus — unless promoted through governance review
- Opening tree entries inherit `source_boundary: opening_tree_derived`

---

## System Chess Competence and Stockfish Reference Boundary

This Corpus Review defines **ChessGuide domain corpus** — not the system's full **chess competence model**.

ChessGuide also needs a separate **system competence lane**: how the system evaluates positions, candidate moves, tactical correctness, levels, and explanations.

| Distinction | Rule |
|-------------|------|
| **Stockfish** | Reference / **measurement lane** — not pedagogical authority by itself (CB-000 PI-5; CB-004 PP-7) |
| **Engine-best move** | Measured optimum — distinct from human-understandable move |
| **Human-understandable move** | Pedagogically legible alternative — may differ from engine-best |
| **Learning-best move** | Move that best serves integration under learner conditions — steward/Buddy judgment |
| **Pedagogically best explanation** | Bounded explanation for learner level — not engine PV dump |

**Rules:**

- Engine output may **assist corpus review** and **position evaluation**, but does **not** become learner evidence, corpus truth, claim, mastery, or federation export by itself.
- `engine_ref` on DecisionTrace (ADR-005 draft) and measured CP in runtime (`helper.ts`, `CP.tsx`) remain **separated** from `corpus_ref` and learner `rationale_statement`.
- **Recommend:** future **Stockfish Reference and System Chess Competence Boundary** review or ADR — after ADR-005/006 sequencing is clarified.

---

## 11. Strategic recommendations

| Step | Action | Priority |
|------|--------|----------|
| 1 | Merge **Domain Content Review** when ready (branch `reviews/chessguide-domain-content-v1`) | Medium |
| 2 | **This review** — Corpus Content v1 on `reviews/chessguide-corpus-content-v1` | Current |
| 3 | Accept **ADR-005** after timing/source pass (branch exists) | High |
| 4 | Draft **ADR-006** Buddy Pedagogy — corpus surfacing rules | High |
| 5 | Future ADR: **Corpus Reference Registry v1** — taxonomy + `corpus_ref` format + MVP file location | High |
| 6 | **Only then:** minimal corpus governance file (Markdown/YAML) + LOE capture pilot | After ADR-005/006 |
| 7 | Run **Stockfish Reference / System Chess Competence Review** or draft ADR — after ADR-005/006 sequencing is clarified | Medium |

**Do not:** implement graph DB, mastery ladder UI, or LARIS corpus in this phase.

---

## 12. Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-CCR-1** | Should Chess Corpus Taxonomy become ADR or governance doc? | **Open** — lean separate **Corpus Reference Registry ADR** after ADR-006 |
| **OQ-CCR-2** | Finalize `corpus_ref` syntax before runtime? | **Open** — lean **yes** for MVP namespace in registry ADR |
| **OQ-CCR-3** | How many `corpus_ref` in MVP? | **Proposal:** 49 listed above (~55 with opening sub-lines) |
| **OQ-CCR-4** | Migrate `openings.ts` or wrap? | **Open** — lean **wrap** with ref map |
| **OQ-CCR-5** | Tactics/endgames storage format? | **Open** — lean **Markdown or YAML** in `docs/governance/corpus/` |
| **OQ-CCR-6** | Promote learner examples to corpus? | **Open** — lean **governance review** per promotion |
| **OQ-CCR-7** | Mandatory source citations? | **Open** — lean **yes** for hand-curated; tree-derived exempt |
| **OQ-CCR-8** | Avoid corpus bloat? | **Open** — MVP cap + steward review for new refs |
| **OQ-CCR-9** | Required categories before first LOE capture? | **Open** — lean **tactics (5) + principles (3) + decision_frames (5)** minimum |
| **OQ-CCR-10** | Corpus versioning in ADR-006 or separate? | **Open** — lean **separate Corpus Registry ADR** |
| **OQ-CCR-11** | How should Stockfish reference evaluation relate to `corpus_ref`, DecisionTrace, EvidenceRecord, and Buddy explanation? | **Open** — lean measured lane via `engine_ref`; never corpus truth or learner evidence alone |
| **OQ-CCR-12** | What is ChessGuide's own system chess competence model, distinct from human learner state? | **Open** — recommend dedicated review/ADR after ADR-005/006 |

---

## 13. Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Corpus Reference term | ADR-002 D5 Accepted | ADR | [DOCTRINE] |
| corpus_ref not learner evidence | ADR-002 D2, D8 | ADR | [DOCTRINE] |
| Evidence cites corpus_ref | ADR-003 D4, D8 | ADR | [DOCTRINE] |
| Claims scoped via lineage | ADR-004 D7 | ADR | [DOCTRINE] |
| DecisionTrace corpus_ref | ADR-005 D4 draft | ADR | [DRAFT] |
| Domain taxonomy proposal | CDCR v1.0 (branch) | Review | [PROPOSAL] |
| Opening runtime corpus | `src/data/openings.ts`, `openingdata.ts` | Runtime | [RUNTIME] |
| No tactic/endgame registry | `src/data/*` inspection | Runtime | [RUNTIME GAP] |
| Engine CP measured lane | `helper.ts`, `CP.tsx`, CB-000 PI-5 | Doctrine + Runtime | [DOCTRINE] |
| LSDD / skill domain | CB-002 | Doctrine | [DOCTRINE] |
| Buddy reference not decree | CB-004 PP-7 | Doctrine | [DOCTRINE] |
| Anchors + opening refs | CB-005 AN-3, `opening.recognized` | Doctrine | [DOCTRINE] |
| Learning ≠ knowledge | CG-FLL-002 | Doctrine | [DOCTRINE] |
| LOE catalogue | CG-FLL-1E | Doctrine | [DOCTRINE] |
| Federation withholding | FEDERATION.md, ADR-002 D8 | Doctrine | [DOCTRINE] |
| MVP corpus recommendation | CCCR-v1.0 | Review | [PROPOSAL] |

---

## 14. Classification legend

| Tag | Meaning |
|-----|---------|
| **[DOCTRINE]** | Accepted ADR or committed governance |
| **[PROPOSAL]** | Review synthesis — not adopted |
| **[INFERENCE]** | Grounded conclusion |
| **[RUNTIME]** | Observed in `src/` |
| **[RUNTIME GAP]** | Expected corpus absent in runtime |
| **[OPEN QUESTION]** | Unresolved |
| **[DRAFT]** | ADR draft not on `main` |

---

## Related documents

- [CDCR v1.0 — Domain Content Review](ChessGuide-Domain-Content-Review-v1.0.md)
- [CEAR v1.0](ChessGuide-Epistemic-Architecture-Review-v1.0.md)
- [ADR-002 — Sovereign Reference Model v1](../governance/adr/ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](../governance/adr/ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](../governance/adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [CG-FLL-002 — Learning Semantics](../governance/chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — Pilot Execution Plan](../governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CB-002 — Longitudinal Skill Development Domain](../governance/chessbuddy/CB-002-longitudinal-skill-development-domain.md)
- [CB-004 — Buddy Persona](../governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CB-005 — LearningTrace Product Schema](../governance/chessbuddy/CB-005-learningtrace-product-schema.md)
- [FEDERATION.md](../../FEDERATION.md)
