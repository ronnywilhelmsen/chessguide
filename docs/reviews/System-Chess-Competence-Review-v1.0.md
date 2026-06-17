# System Chess Competence Review v1.0

| Field | Value |
|-------|-------|
| **Document ID** | SCCR-001 |
| **Title** | System Chess Competence Review v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Review |
| **Date** | 2026-06-17 |
| **Scope** | Review / architecture input only |
| **Depends on** | [ADR-005](../governance/adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) Accepted, [ADR-006](../governance/adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) Accepted, [ADR-007](../governance/adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md) Accepted, [CCCR v1.0](ChessGuide-Corpus-Content-Review-v1.0.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft review / architecture input only.**

This review does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- Schemas
- Implementation files
- HLD acceptance by itself
- LLD / UML implementation
- LARIS activation

Companion HLD: [System Chess Competence HLD v1.0](../architecture/System-Chess-Competence-HLD-v1.0.md) (SCC-HLD-001, created in same branch).

---

## Executive summary

ChessGuide must **teach chess** — not behave like a **calculator** that prints Stockfish lines or centipawn values. Stockfish remains a high-precision **referee / reference / validation lane**; ChessGuide's own **system chess competence** and **pedagogical policy layer** translate chess understanding into learner-appropriate explanations, concepts, and prompts.

Teaching requires a distinct **system chess competence lane** — the system's governed ability to understand positions, map concepts, classify moves pedagogically, and support Buddy explanations — **without** conflating that lane with learner evidence, engine measurement, claims, or federation export.

**Accepted governance (ADR-005–007)** now defines:

- **Stockfish / engine** = reference / measurement lane only — not pedagogical authority, not learner reasoning, not corpus truth, not federation export.
- **Buddy** = pedagogical domain mentor — not steward, not engine oracle, not mastery certifier.
- **Human learner evidence** (DecisionTrace, LOE/DOE, Claims) = separate custody under ADR-001–004.
- **Federation export** = lossy terminal completed-game `ObservationRecord` only ([FEDERATION.md](../../FEDERATION.md)).
- **Creator continuity** must preserve semantic boundaries across decades — planned externally, not operational in ChessGuide repo today.

**Current repository state:**

| Has | Lacks |
|-----|-------|
| Legal chess mechanics (`rules.ts`, chess.js) | `SystemChessCompetenceProfile` |
| Move logging, completed-game episode encoding (`game.ts`) | `EngineReferenceProfile` / immutable `EngineAnalysisSnapshot` |
| Opening runtime tree (`openings.ts`, `openingdata.ts`) | Governed `corpus_ref` registry |
| Stockfish UCI worker + CP (`helper.ts`) | DecisionTrace persistence |
| CP visualization (`CP.tsx`) | EvidenceRecord / Claim runtime |
| Federation export boundary (`export_v1.py`) | Standalone HLD (until this branch) |
| Accepted ADR-001–007 governance | Operational Creator continuity serving spec |
| LLD candidate ([ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md)) | LLD/OOP implementation, UML diagrams |
| Buddy persona doctrine (CB-004) | Buddy runtime orchestration boundary |
| Educator-not-calculator principle (ADR-006/007) | Pedagogical Policy Layer (F11) |
| — | Complexity-aware learning-best classification (F12) |
| — | Derived skill-band / learner context projections (F13) |
| — | Adaptive puzzle / spaced-review lane (F15, future) |

**Recommendation:** Adopt [System-Chess-Competence-HLD-v1.0.md](../architecture/System-Chess-Competence-HLD-v1.0.md) as the first HLD bridge from accepted ADR-007 to future LLD/OOP/UML and runtime.

---

## Accepted governance baseline

| ADR | Status | Relevance to system chess competence |
|-----|--------|--------------------------------------|
| [ADR-001](../governance/adr/ADR-001-learningtrace-episode-schema-v1.md) | Accepted | Episode / LearningTrace custody — system competence must not write learner state |
| [ADR-002](../governance/adr/ADR-002-sovereign-reference-model-v1.md) | Accepted | `corpus_ref` and derived-view separation — corpus ≠ learner evidence |
| [ADR-003](../governance/adr/ADR-003-loe-doe-evidence-record-schema-v1.md) | Accepted | LOE/DOE EvidenceRecord — evidence ≠ claim |
| [ADR-004](../governance/adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md) | Accepted | Claim / Stewardship gate — formal claims require stewardship |
| [ADR-005](../governance/adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) | Accepted | DecisionTrace / `capture_timing` + `trace_source` — learner reasoning separated from engine/Buddy |
| [ADR-006](../governance/adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) | Accepted | Buddy pedagogy — intervention ladder, engine as measurement lane |
| [ADR-007](../governance/adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md) | Accepted | Three competence loops, HLD lanes, future LLD targets, immutable transitions |

**ADR-007 D17 downstream** (post-acceptance) identifies this review + HLD as the next governance/architecture step before Corpus Reference Registry ADR, DecisionTrace storage ADR, and runtime implementation.

---

## Current runtime evidence

Runtime files are **evidence only** — not governance truth. Doctrine beats runtime where they conflict.

### `src/data/rules.ts`

| Aspect | Finding |
|--------|---------|
| **Role** | Legal move generation, FEN manipulation, game-over detection via chess.js |
| **Current capability** | `move()`, `replay()`, `getGameWinner()`, `isGameOver()`, square/move types |
| **Governance interpretation** | Foundational **chess mechanics** — prerequisite for any competence lane; not system chess competence by itself |
| **Limitation** | No tactical motif detection, no `corpus_ref` mapping, no pedagogical classification |
| **Future HLD implication** | `Episode / MoveRecord Boundary` consumes rules engine; `System Chess Competence Boundary` builds above legality |

### `src/data/game.ts`

| Aspect | Finding |
|--------|---------|
| **Role** | Live game state, move log, player assignment, bot play, localStorage persistence |
| **Current capability** | `Game.log[]`, `Game.fen`, `toString()` episode encoding, `GameHistory`, opening label via `locate()` |
| **Governance interpretation** | Legacy **completed-game episode** substrate — aligns with ADR-001 terminal episode concept at thin encoding only |
| **Limitation** | No Actor/Session/Episode hierarchy, no DecisionTrace, no evidence events, mutable in-memory + localStorage |
| **Future HLD implication** | `Learner Custody Boundary` / `Episode Boundary` — `MoveRecorded` state; federation export source |

### `src/data/helper.ts`

| Aspect | Finding |
|--------|---------|
| **Role** | Stockfish UCI worker — ~1s `movetime`, Skill Level 20, CP + PV parsing |
| **Current capability** | `Helper.help[]` (square hints from PV), `Helper.cp` (centipawns, side-adjusted) |
| **Governance interpretation** | **Measured lane** only (CB-000 PI-5; ADR-007 D3) — reference, not pedagogy |
| **Limitation** | No `EngineReferenceProfile`, no immutable snapshot, no depth/nodes/version metadata, ephemeral MobX state, resets on each move |
| **Future HLD implication** | `Engine Reference Boundary` — must become `EngineAnalysisSnapshot` with profile pin; raw CP/PV is input to Pedagogical Policy Layer, not teaching output |

### `src/components/CP.tsx`

| Aspect | Finding |
|--------|---------|
| **Role** | Centipawn evaluation bar display when `config.showCP` enabled |
| **Current capability** | Visual CP magnitude and side lead |
| **Governance interpretation** | **Measurement display** — not learning feedback, not mastery (FEDERATION.md forbids CP export) |
| **Limitation** | No `engine_ref` linkage, no source disclosure copy, no separation from pedagogical messaging |
| **Future HLD implication** | UI must not collapse engine-best with learning-best (ADR-007 D4); must translate CP into pedagogy via Pedagogical Policy Layer (F11) — not calculator display |

### `src/data/openings.ts` + `openingdata.ts`

| Aspect | Finding |
|--------|---------|
| **Role** | Runtime opening tree — SAN tree built from ~2,400 lines `{moves}/{Opening}/{Variation}` |
| **Current capability** | `locate(moves[])`, `sanText()` human labels |
| **Governance interpretation** | **Runtime corpus-like material** — CCCR recommends wrap with `corpus_ref`, not replace |
| **Limitation** | No stable `corpus_ref` IDs, no versioning, no curation policy, no tactics/endgames |
| **Future HLD implication** | `Domain Corpus Boundary` — registry wraps tree; `System Chess Competence` maps positions to refs |

### `src/chessguide/federation/export_v1.py`

| Aspect | Finding |
|--------|---------|
| **Role** | Maps completed game to Federation Canon 1.0.1 `ObservationRecord` |
| **Current capability** | `chessguide/game_import/1` profile; SHA-256 checksum; forbidden root keys |
| **Governance interpretation** | **Export sovereignty** enforced — CP, engine, coach, learning, mastery explicitly blocked |
| **Limitation** | Export slice only; no learning custody implementation |
| **Future HLD implication** | `Federation Export Boundary` — must remain lossy; `ExportSovereigntyPolicy` in future LLD |

---

## What ChessGuide already has

| Asset | Classification | Notes |
|-------|----------------|-------|
| Legal chess mechanics | [RUNTIME] | chess.js via `rules.ts` |
| Move logging + game completion | [RUNTIME] | `Game.log`, `isComplete`, `toString()` |
| Completed-game episode basis | [RUNTIME] | `GameHistory`; federation adapter input |
| Opening / runtime corpus | [RUNTIME] | Tree without `corpus_ref` |
| Stockfish / CP measured lane | [RUNTIME] | `helper.ts` UCI worker |
| CP visualization | [RUNTIME] | `CP.tsx` optional display |
| Federation export boundary | [RUNTIME] + [DOCTRINE] | `export_v1.py`, FEDERATION.md |
| Accepted governance ADR-001–007 | [DOCTRINE] | Including system/engine boundary |
| LLD candidate | [DESIGN TARGET] | ChessGuide-LLD-v1.0 — DecisionTrace aggregate, PI-5 |
| Buddy persona / reference over decree | [DOCTRINE] | CB-004 PP-7 |
| Learning semantics | [DOCTRINE] | CG-FLL-002 — integration ≠ activity |
| Corpus content proposal | [PROPOSAL] | CCCR v1.0 — 49 MVP `corpus_ref` candidates |
| Creator dependency model | [DOCTRINE] | CG-DEP-001, FGI-001 — planned OAT/CTP |

---

## What ChessGuide lacks

| Gap | ADR / HLD reference | Priority |
|-----|---------------------|----------|
| `SystemChessCompetenceProfile` | ADR-007 D7 | High |
| `EngineReferenceProfile` | ADR-007 D7 | High |
| `EngineAnalysisSnapshot` (immutable) | ADR-007 D3, D9 | High |
| `PositionConceptMap` | ADR-007 D7 | High |
| `CandidateMoveAssessment` | ADR-007 D7 | Medium |
| `PedagogicalMoveClassifier` | ADR-007 D4, D7 | High |
| `LearningBestMovePolicy` | ADR-007 D4 | Medium |
| `BuddyExplanationService` boundary | ADR-006, ADR-007 D7 | High |
| Corpus Reference Registry | ADR-002, CCCR, ADR-007 D13 | High |
| DecisionTrace persistence | ADR-005 | High |
| EvidenceRecord persistence | ADR-003 | Medium |
| Claim storage / stewardship runtime | ADR-004 | Medium |
| Standalone System Chess Competence HLD | ADR-007 D6 — **addressed by companion HLD** | High |
| LLD/OOP implementation | ADR-007 D7–D8 | Deferred |
| UML diagrams | ADR-007 D8 | Deferred |
| Creator continuity serving operational spec | ADR-007 D10; FGI-001 | External / planned |
| Buddy runtime orchestration | ADR-006 | Deferred |
| Pedagogical Policy Layer | F11; SCC-HLD-001 | High |
| `LearnerContextProjection` / skill-band models (derived only) | F13 | Medium / future |
| `TeachingOpportunity`, `MisconceptionPattern` | F14 | Medium |
| Adaptive training / puzzle corpus lane | F15 | Deferred |
| Self-play / RL research lane | F16 | Research only |

---

## Boundary findings

| ID | Finding | Implication |
|----|---------|-------------|
| **F1** | Engine measurement exists (`helper.ts`, `CP.tsx`) but **not** as immutable `EngineAnalysisSnapshot` with profile/version metadata | HLD must define `Engine Reference Boundary` with append-only snapshots |
| **F2** | Rules/game mechanics exist but **not** system chess competence (no motif mapping, no pedagogical classification) | HLD must define `System Chess Competence Boundary` separate from chess.js |
| **F3** | Opening data exists but **not** governed `corpus_ref` registry | Corpus Registry ADR + HLD `Domain Corpus Boundary` before treating openings as doctrine |
| **F4** | Buddy governance exists (ADR-006) but **not** Buddy runtime boundary or `BuddyExplanationDraft` | HLD `Buddy Pedagogy Boundary` precedes product implementation |
| **F5** | DecisionTrace accepted in governance but **not** in runtime or storage | DecisionTrace storage ADR after HLD; no engine/Buddy auto-fill of `rationale_statement` |
| **F6** | Evidence/claim governance exists but **not** implementation | Steward workflows remain governance-only until LOE/DOE pilot |
| **F7** | Federation boundary exists and is **enforced** in `export_v1.py` — must **not** be widened | HLD must list non-exportables explicitly |
| **F8** | Standalone HLD was absent — **ADR-007 provided bridge**; this review + companion HLD fills gap | LLD/runtime must not proceed without HLD traceability |
| **F9** | Creator continuity exists as dependency/grounding (FGI-001, CG-DEP-001), **not** operational serving spec | `Creator Continuity Serving Boundary` in HLD; OQ remains open |
| **F10** | ADR-007 Accepted provides governing bridge for HLD lanes, LLD targets, immutable transitions | This review and HLD instantiate ADR-007 D6–D10 |
| **F11** | ChessGuide needs a **Pedagogical Policy Layer**, not only Engine Reference and System Chess Competence — raw CP/PV/best move is insufficient for teaching | HLD must include Pedagogical Policy Layer / BuddyExplanation boundary that transforms system competence + optional engine reference into human-understandable prompts **without** converting engine output into learner evidence |
| **F12** | **Learning-best** requires **complexity-aware** move classification — engine-best may differ from learning-best, human-understandable move, and low-complexity safe move | HLD must define or reserve `LearningBestMovePolicy` and complexity-aware `PedagogicalMoveClassifier` |
| **F13** | Skill-level modeling is useful but **must not** become sovereign learner state by default (ADR-002) | Use derived terms: `LearnerContextProjection`, `SkillBandMoveModel`, `PedagogicalFitModel`, `MisconceptionPattern`, `BlindSpotCandidate` — not a permanent "digital twin" without future custody ADR |
| **F14** | Self-explanation and error-pruning are important Buddy design principles (ADR-006 D2) | Buddy should prompt self-explanation before engine reveal; support progressive hints, misconception diagnosis, reflective correction, DecisionTrace capture — must not impersonate learner reasoning |
| **F15** | Spaced repetition / puzzle corpus should be a **future adaptive training lane** | Reserve `AdaptiveTrainingSelector`, `PuzzleCorpusBoundary`, `SpacedReviewPolicy`, `MotifWeaknessProjection` — must not bypass evidence/custody boundaries |
| **F16** | Self-play / RL / AlphaZero-like models are **future research lanes**, not MVP assumptions | Open question: can system competence include skill-band policy models without contaminating custody, corpus truth, evidence, claims, or federation export? |

---

## Risk review

| Risk | Mitigation (HLD / governance) |
|------|-------------------------------|
| Stockfish treated as teacher | ADR-007 D3, D11; Buddy copy discipline (ADR-006 D6) |
| CP treated as learning | Activity ≠ learning (CG-FLL-002); CP is measurement display only |
| Buddy explanation treated as learner reasoning | ADR-005 `trace_source`; `BuddyExplanationDraft` ≠ EvidenceRecord |
| System chess competence written into learner state | ADR-002 derived-view prohibition; ADR-007 D2 |
| Opening data treated as governed corpus without registry | CCCR wrap strategy; Corpus Registry ADR |
| HLD skipped — runtime implemented directly | ADR-007 D16 checklist; this HLD package |
| Federation boundary accidentally widened | `export_v1.py` forbidden keys; HLD Export Boundary |
| Creator flattening continuity | ADR-007 D10; immutable custody fields on `ContinuityRecord` |
| "Right move" collapsed into engine-best | ADR-007 D4 five-way semantics + F12 complexity-aware classification |
| Hidden mutable global learner model | `Helper`/`Game` MobX state is ephemeral — must not become learner aggregate |
| Calculator UX — CP/PV dump without translation | F11 Pedagogical Policy Layer; educator not oracle |
| Skill-band model persisted as learner identity | F13 — derived projection only until custody ADR |
| Puzzle solved treated as mastery | ADR-004 stewardship gate; F15 adaptive lane boundaries |
| Einstellung / comfortable suboptimal move unaddressed | F14 misconception patterns; pedagogical framing in Buddy layer |

---

## Required HLD implications

| Review finding | HLD requirement |
|----------------|-----------------|
| F1 | Separate **Engine Reference** boundary; immutable `EngineAnalysisSnapshot` |
| F2 | Separate **System Chess Competence** boundary; `PositionConceptMap`, `PedagogicalMoveClassifier` |
| F3 | **Domain Corpus** boundary with registry versioning |
| F4 | **Buddy Pedagogy** boundary; typed reads only |
| F5 | **DecisionTrace** boundary; append-only under ADR-005 |
| F6 | **EvidenceRecord** / **Claim** boundaries; stewardship gate |
| F7 | **Federation Export** boundary — lossy slice only |
| F8 | This HLD document as architecture target |
| F9 | **Creator Continuity Serving** boundary — semantic preservation |
| F10 | Full lane model per ADR-007 D6 |
| F11 | **Pedagogical Policy Layer** — translate measurement into teaching |
| F12 | `LearningBestMovePolicy` + complexity-aware `PedagogicalMoveClassifier` |
| F13 | `LearnerContextProjection` — derived only, no digital twin |
| F14 | Self-explanation-first Buddy interaction model |
| F15 | Future `PuzzleCorpusBoundary` / `SpacedReviewPolicy` (reserved) |
| F16 | Research lane for self-play/RL — not MVP |

Additional HLD must specify:

- Explicit source/custody metadata on all cross-boundary transfers
- Future OOP classes/interfaces (design targets only)
- Future UML diagram package (component, class, sequence, state)
- Immutable state transition model (ADR-007 D9)
- MVP architecture slices before full runtime

---

## HLD cross-reference (SCCR F1–F16 → SCC-HLD-001)

Companion HLD [System-Chess-Competence-HLD-v1.0.md](../architecture/System-Chess-Competence-HLD-v1.0.md) instantiates findings as follows:

| Finding | HLD section / component |
|---------|-------------------------|
| F1–F10 | HLD components §1–11; interaction diagram |
| F11 | Pedagogical Policy Layer (HLD §12) |
| F12 | `PedagogicalMoveClassifier`, `LearningBestMovePolicy`; HLD P11 |
| F13 | `LearnerContextProjection`, `SkillBandMoveModel`; HLD P13 |
| F14 | Buddy Pedagogy — self-explanation-first; HLD P12 |
| F15 | Reserved adaptive training lane; `PuzzleCorpusSelector` |
| F16 | Self-play / RL research lane — MVP-4 future only |

HLD principles **P1–P13** are defined in SCC-HLD-001 § HLD principles. SCCR does not define P-numbers; HLD references to P11–P13 are valid only in the companion HLD.

---

## Recommendation

1. **Accept** [System-Chess-Competence-HLD-v1.0.md](../architecture/System-Chess-Competence-HLD-v1.0.md) as companion architecture target after review.
2. **Next governance:** Corpus Reference Registry ADR; DecisionTrace schema/storage ADR.
3. **Next design:** EngineReferenceService + SystemChessCompetenceService LLD slice (no runtime in this phase).
4. **Do not** widen federation export, activate LARIS, or implement runtime in this branch.

---

## Repository evidence table

| File | Evidence found | Classification | HLD implication |
|------|----------------|----------------|-----------------|
| ADR-001 | Episode custody | [DOCTRINE] | Learner Custody Boundary |
| ADR-002 | `corpus_ref`, derived views | [DOCTRINE] | Domain Corpus Boundary |
| ADR-003 | LOE/DOE EvidenceRecord | [DOCTRINE] | EvidenceRecord Boundary |
| ADR-004 | Claim / stewardship gate | [DOCTRINE] | Claim / Stewardship Boundary |
| ADR-005 | DecisionTrace two-axis model | [DOCTRINE] | DecisionTrace Boundary |
| ADR-006 | Buddy pedagogy, intervention ladder | [DOCTRINE] | Buddy Pedagogy Boundary |
| ADR-007 | Three loops, HLD lanes, LLD targets | [DOCTRINE] | Full HLD component model |
| CCCR v1.0 | Corpus taxonomy, Stockfish gap | [PROPOSAL] | Corpus + engine separation |
| ChessGuide-LLD-v1.0 | DecisionTrace aggregate, export policy | [DESIGN TARGET] | LLD alignment target |
| FEDERATION.md | Observation boundary | [DOCTRINE] | Federation Export Boundary |
| CB-004 | Reference over decree | [DOCTRINE] | Buddy must not be oracle |
| CB-005 | LearningTrace product schema | [DOCTRINE] | Episode/event lineage |
| CG-FLL-002 | Learning = integration | [DOCTRINE] | Activity ≠ CP display |
| CG-DEP-001 | Creator OAT/CTP dependency | [DOCTRINE] | Creator boundary external |
| FGI-001-creator.md | Creator planned OAT/CTP | [EXTERNAL] | Continuity serving gap |
| `rules.ts` | chess.js legality | [RUNTIME] | MoveRecord prerequisite |
| `game.ts` | Episode encoding, history | [RUNTIME] | Episode / export source |
| `helper.ts` | Stockfish UCI, CP, PV | [RUNTIME] | Engine Reference prototype |
| `CP.tsx` | CP bar display | [RUNTIME] | Measurement UI only |
| `openings.ts` | SAN tree | [RUNTIME] | Future corpus wrap |
| `openingdata.ts` | Opening lines content | [RUNTIME] | Registry migration input |
| `export_v1.py` | Forbidden export keys | [RUNTIME] | Export sovereignty |
| System-Chess-Competence-HLD-v1.0.md | HLD target (this branch) | [HLD DRAFT] | Architecture package output |
| SCCR F11–F16 | Addendum findings | [REVIEW] | Pedagogical Policy Layer, complexity, projections, adaptive/RL lanes |
| SCCR-OQ-11–17 | Paired HLD-OQ-11–17 | [REVIEW] | Cross-doc open questions |

**Cross-reference integrity (post micro-pass):** SCCR defines findings **F1–F16** and open questions **SCCR-OQ-1–17**. HLD defines principles **P1–P13** and maps each F-finding in § SCCR finding cross-reference.

**Repository gaps explicitly recorded:**

- No prior standalone System Chess Competence HLD (filled by companion doc)
- No operational Creator continuity serving specification in ChessGuide repo
- No `corpus_ref` registry file
- No DecisionTrace / EvidenceRecord persistence layer
- No UML artifacts

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **SCCR-OQ-1** | What is the minimum MVP system chess competence profile? | **Open** — lean CCCR tactics (5) + principles (3) + decision frames (5) per CCCR |
| **SCCR-OQ-2** | Which engine profiles should be allowed in live play vs review? | **Open** — defer to HLD-OQ-2/3; friendly play may delay/hide engine |
| **SCCR-OQ-3** | How should current opening data become `corpus_ref` registry entries? | **Open** — lean wrap map (`opening:*`) per CCCR OQ-CCR-4 |
| **SCCR-OQ-4** | How should current CP display be represented as `engine_ref`? | **Open** — snapshot + profile on each `helper.run()` in future runtime |
| **SCCR-OQ-5** | How should DecisionTrace be stored later? | **Open** — separate storage ADR; append-only per ADR-005 |
| **SCCR-OQ-6** | How should Creator serve long-horizon continuity? | **Open** — external; `ContinuityRecord` semantics in HLD |
| **SCCR-OQ-7** | What HLD boundaries must be implemented first? | **Open** — lean MVP-1 in HLD (engine snapshot + concept map + Buddy draft) |
| **SCCR-OQ-8** | Which LLD/OOP classes should be first? | **Open** — `EngineReferenceProfile`, `EngineAnalysisSnapshot`, `PositionConceptMap` |
| **SCCR-OQ-9** | How should Buddy use engine analysis without becoming oracle? | **Open** — ADR-006 L0–L7 + source disclosure |
| **SCCR-OQ-10** | What must remain non-exportable forever? | **Open** — ADR-007 D14 list + FEDERATION.md |
| **SCCR-OQ-11** | Should ChessGuide later support skill-band human move models? | **Open** — paired with HLD-OQ-11; F13 derived projection only |
| **SCCR-OQ-12** | Can self-play / RL models be used as system competence without becoming opaque authority? | **Open** — F16 research lane |
| **SCCR-OQ-13** | How should complexity delta be measured without importing unverified platform-specific metrics? | **Open** — F12; verification required |
| **SCCR-OQ-14** | What is the governance boundary for adaptive puzzle selection? | **Open** — F15; evidence/custody preserved |
| **SCCR-OQ-15** | When should engine output be hidden, delayed, or revealed? | **Open** — training/review vs friendly; ADR-006 ladder |
| **SCCR-OQ-16** | How should Einstellung effect or comfortable-but-suboptimal moves be represented pedagogically? | **Open** — `MisconceptionPattern`; learning-science input |
| **SCCR-OQ-17** | What external learning science sources should be admitted into repository doctrine, and through what review process? | **Open** — see External learning-science section |

---

## External learning-science / research inspiration — verification required

The following pedagogical ideas **inform** Buddy and training design. They are **not** repository doctrine.

**Core rule:** Practice testing, distributed practice, self-explanation, interleaving, and error-pruning are **pedagogical inspirations** only. User-provided 2026 references remain **[UNVERIFIED EXTERNAL INPUT]** unless later independently verified. These inputs do **not** create EvidenceRecords, Claims, mastery, learner state, or federation export.

| Theme | Design relevance | Status |
|-------|------------------|--------|
| Practice testing / repeated problem solving | Puzzle corpus, adaptive training lane (F15) | [INSPIRATION — UNVERIFIED] |
| Distributed practice / spaced repetition | `SpacedReviewPolicy` (future) | [INSPIRATION — UNVERIFIED] |
| Self-explanation | Buddy pre-engine prompts, DecisionTrace (F14; ADR-006 D2) | [DOCTRINE-ALIGNED via ADR-006] |
| Interleaving / varied practice | Puzzle/motif selection diversity | [INSPIRATION — UNVERIFIED] |
| Error pruning through verbalization / dialogue | Buddy misconception diagnosis (F14) | [INSPIRATION — UNVERIFIED] |
| Einstellung-style bias | Familiar good-looking moves may blind better moves — pedagogical framing | [INSPIRATION — UNVERIFIED] |

**Rule:** These inputs guide architecture targets only until admitted through a committed review or ADR process (SCCR-OQ-17).

---

## External references provided for future verification

**Status:** [UNVERIFIED EXTERNAL INPUT]

No external 2026 references were independently verified for this review. Any future citations (learning-science papers, platform metrics, RL chess research) must be:

1. Verified against primary sources
2. Classified as [DOCTRINE], [PROPOSAL], or [INSPIRATION]
3. Admitted through repository review process — not embedded as factual claims in SCCR/HLD without verification

**Do not use this section as repository evidence.**

## Related documents

- [System Chess Competence HLD v1.0](../architecture/System-Chess-Competence-HLD-v1.0.md)
- [ADR-007 — Stockfish Reference and System Chess Competence Boundary v1](../governance/adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md)
- [ChessGuide Corpus Content Review v1.0](ChessGuide-Corpus-Content-Review-v1.0.md)
- [ChessGuide LLD v1.0](../architecture/ChessGuide-LLD-v1.0.md)
- [FEDERATION.md](../../FEDERATION.md)
