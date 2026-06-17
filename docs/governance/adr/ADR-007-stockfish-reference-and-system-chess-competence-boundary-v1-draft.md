# ADR-007 — Stockfish Reference and System Chess Competence Boundary v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-007 |
| **Title** | Stockfish Reference and System Chess Competence Boundary v1 |
| **Version** | 0.1 |
| **Status** | Draft |
| **Date** | 2026-06-17 |
| **Scope** | Governance / HLD bridge / semantic architecture only — Stockfish reference, system chess competence, and continuity boundary |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md), [ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md), [ADR-006](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md), [CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md), [CB-004](../chessbuddy/CB-004-buddy-persona-and-product-principles.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CG-FLL-1E](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft** — governance / HLD bridge Architecture Decision Record defining **Stockfish Reference and System Chess Competence Boundary v1**: how ChessGuide separates system chess competence, engine reference/measurement, Buddy pedagogy, learner evidence, and long-horizon continuity.

This ADR is **governance / HLD bridge only**. Draft acceptance does **not** introduce:

- Runtime changes
- Tests
- Federation export changes
- JSON Schema
- SQL
- localStorage
- APIs
- UI
- Engine service implementation
- Storage implementation
- UML files
- Generated diagrams
- Implementation files in `src/`

This ADR does **not**:

- Mark [ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) **Accepted**
- Mark [ADR-006](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) **Accepted**
- Activate **LARIS** (CG-002; FDP-002)

---

## Context

### Upstream governance

[ADR-001](ADR-001-learningtrace-episode-schema-v1.md) (Accepted) locks **Episode** as sovereign learner-custody boundary. **LearningTrace** is evidence + custody, not learning.

[ADR-002](ADR-002-sovereign-reference-model-v1.md) (Accepted) defines **`corpus_ref`** as a stable semantic pointer to **domain corpus** — not learner evidence, not learned state, not federation export.

[ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md) (Accepted) defines **LOE/DOE Evidence Records**. Evidence supports integration assessment but **does not prove learning**. Activity is not learning (CG-FLL-001 I-3).

[ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md) (Accepted) defines **Claim** as governed **hypothesis / påstand** evaluated against evidence lineage. Formal claims require stewardship.

[ADR-005](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) (Draft) defines **DecisionTrace** as learner-custody reasoning context per ply. **`capture_timing`** and **`trace_source`** are independent axes. **`engine_ref`** is separated from learner `rationale_statement`.

[ADR-006](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) (Draft) defines **Buddy** as pedagogical domain mentor — not steward, not engine oracle. Buddy may use engine as measurement lane but must preserve source/custody boundaries.

[CCCR v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md) proposes Chess Corpus taxonomy and **`corpus_ref`** candidates. It explicitly identifies a **system competence gap**: ChessGuide needs a separate lane for how the system evaluates positions, candidate moves, tactical correctness, levels, and explanations — distinct from corpus content and distinct from learner state.

### Runtime legacy (measured lane only)

Runtime provides a **measured lane**, not governance truth:

| Artifact | Role | Classification |
|----------|------|----------------|
| `helper.ts` | Runs Stockfish ~1s; parses CP and candidate moves via UCI worker | [RUNTIME] reference/measurement |
| `CP.tsx` | Displays centipawn evaluation when `config.showCP` enabled | [RUNTIME] measured display |
| `rules.ts`, `game.ts` | Legal move generation, game state | [RUNTIME] chess mechanics |
| `openings.ts`, `openingdata.ts` | Opening tree runtime corpus | [RUNTIME] — future `corpus_ref` wrap (CCCR) |
| `export_v1.py` | Lossy federation export; forbids CP, engine, learning keys | [RUNTIME] federation boundary |

**Doctrine:** Engine is reference, not identity (CB-000 PI-5; CB-004 PP-7). Federation exports **completed game ObservationRecord** only ([FEDERATION.md](../../FEDERATION.md)).

### Design targets in repository

| Document | Status | Relevance |
|----------|--------|-----------|
| [ChessGuide-LLD-v1.0](../../architecture/ChessGuide-LLD-v1.0.md) | Accepted LLD Candidate | `DecisionTrace`, `LearningRecord`, `ExportSovereigntyPolicy`, engine-as-reference (PI-5) |
| Standalone **HLD** document | **Absent** in repository | HLD lanes defined **in this ADR** as bridge targets |
| [FGI-001 — Creator](../federation/grounding/FGI-001-creator.md) | Grounding study | Creator continuity serving — **planned**, not implemented in Creator repo per FGI-001 |
| [CG-DEP-001](../chessguide/CG-DEP-001-federation-dependency-analysis.md) | Doctrine | Creator OAT/CTP/CTV dependency for federation certification |

### Core teaching requirement

ChessGuide must **teach chess**. Teaching requires ChessGuide to maintain a distinct **system chess competence lane** — the system's governed ability to understand positions, map concepts, classify moves pedagogically, and support Buddy explanations.

**Stockfish** may be used as **reference / measurement**, but cannot become the whole pedagogy, learner reasoning, corpus truth, mastery proof, claim, stewardship verdict, or federation export.

### Problem statement

> How can ChessGuide maintain its own chess competence, use Stockfish as a reference, and teach humans through Buddy while preserving evidence boundaries, learner autonomy, immutable custody, and long-horizon continuity?

---

## Decision

ChessGuide adopts **Stockfish Reference and System Chess Competence Boundary v1** as the governance and HLD bridge model for separating system chess competence, engine reference, Buddy pedagogy, learner evidence, and continuity.

### D1 — Three parallel competence loops

ChessGuide operates three **independent but connected** loops:

#### 1. Human Learning Loop

| Step | Custody |
|------|---------|
| Learner plays | Learner / Episode |
| Learner reasons | Learner |
| DecisionTrace captures reasoning | Learner custody (ADR-005) |
| LOE/DOE may cite evidence | Learner + steward observation (ADR-003) |
| Claims require stewardship | Steward gate (ADR-004) |

#### 2. System Chess Competence Loop

| Step | Custody |
|------|---------|
| System maintains chess-domain understanding | System / governed corpus |
| Maps positions to `corpus_ref`, patterns, explanation frames | System competence boundary |
| Supports Buddy explanations | System → Buddy read boundary |
| Improves through governed corpus, reviews, future implementation | Governance releases |
| Does **not** become learner state | ADR-002 |

#### 3. Stockfish Reference / Measurement Loop

| Step | Custody |
|------|---------|
| Engine evaluates positions and candidate moves | Engine reference boundary |
| Provides CP, PV, best move, alternatives | Immutable analysis snapshots |
| Acts as measurement/reference lane | Not pedagogy by itself |
| Does **not** become learner reasoning, corpus truth, claim, mastery, federation export | ADR-005, ADR-006, FEDERATION.md |

**Rules:**

- These loops must remain **separate** in governance, HLD, LLD, and runtime design.
- Any bridge between loops must be **explicit and typed**.
- **No loop may silently write into another loop's custody.**

```text
Human Learning Loop          System Chess Competence Loop       Stockfish Reference Loop
─────────────────────        ────────────────────────────       ────────────────────────
learner plays                map position → concepts            engine evaluates
learner reasons              classify moves pedagogically       CP / PV / best move
DecisionTrace                support Buddy explanations         measurement only
LOE/DOE / Claims             governed corpus improvement        engine_ref snapshots
        │                              │                                  │
        └──────── explicit typed bridges only ──────────────────────────┘
```

### D2 — System chess competence definition

**System Chess Competence** is ChessGuide's internal governed ability to:

- Parse legal chess state
- Evaluate move legality
- Map positions to known chess concepts
- Recognize tactical / strategic / endgame / opening patterns
- Classify candidate moves pedagogically
- Compare learner move, engine move, and corpus principle
- Generate level-appropriate explanation frames
- Distinguish engine-best from human-understandable from learning-best
- Support evidence capture without producing claims
- Preserve continuity of system knowledge across time

**System Chess Competence is not:**

| Not | Reason |
|-----|--------|
| Learner evidence | ADR-001 / ADR-003 custody |
| Learner state | ADR-002 derived-view prohibition |
| `corpus_ref` itself | Corpus is reference material, not competence runtime |
| Stockfish output itself | Measurement lane only (D3) |
| Claim | ADR-004 gate |
| Mastery | Not sovereign learner aggregate |
| Stewardship verdict | External to system competence |
| Federation export | FEDERATION.md |

### D3 — Stockfish reference lane definition

**Stockfish / engine reference lane** may provide:

- Best move
- Principal variation
- Centipawn evaluation
- Mate score
- Candidate alternatives (MultiPV)
- Blunder / mistake / inaccuracy hints (when policy allows)
- Tactic verification support
- Post-game analysis reference
- Comparison between learner move and engine-preferred move

**Stockfish output is:**

| Role |
|------|
| Reference |
| Measurement |
| Comparison input |
| Candidate explanation support (via Buddy + system competence) |

**Stockfish output is not:**

| Not | Boundary |
|-----|----------|
| Pedagogical truth by itself | ADR-006 D6 |
| Learner reasoning | ADR-005 `trace_source` |
| Corpus truth by itself | ADR-002; CCCR |
| EvidenceRecord by itself | ADR-003; D12 |
| Claim | ADR-004 |
| C4 verdict | External stewardship |
| LOE-011 | Steward-only |
| Mastery | ADR-002 |
| Learner state | ADR-002 |
| Federation export | FEDERATION.md; D14 |
| Buddy authority | ADR-006 D1 |

Runtime precedent: `helper.ts` runs Stockfish and exposes CP — **measured lane only** when displayed via `CP.tsx`.

### D4 — "Right move" semantics

ChessGuide must distinguish separate meanings of **"right"**:

| # | Term | Definition |
|---|------|------------|
| 1 | **Engine-best move** | Strongest move by selected engine profile (depth/time/skill policy) |
| 2 | **Human-understandable move** | Move a learner at a given level can understand and justify |
| 3 | **Learning-best move** | Move or exercise that best develops next integration under learner conditions |
| 4 | **Pedagogically best explanation** | Explanation that teaches without destroying autonomy (ADR-006 D2) |
| 5 | **Claim-relevant evidence** | Observed/demonstrated material that may support future stewardship (ADR-003, ADR-004) |

**Rules:**

- Engine-best move **may differ** from learning-best move.
- Buddy **must not** collapse these into one (ADR-006 D6).
- HLD / LLD **must** represent these as distinct concepts or roles.
- Runtime UI/copy **must not** say "engine-best = lesson learned."
- Claims require evidence lineage and stewardship **regardless of engine agreement**.

### D5 — Philosophy to HLD traceability rule

This ADR establishes **vertical traceability** from philosophy through governance to future implementation.

#### Philosophy

| Principle | Implication |
|-----------|-------------|
| Truth is not the same as teaching | Engine measurement ≠ pedagogy |
| Activity is not learning | Playing ≠ integration (CG-FLL-002) |
| Evidence is not claim | LOE/DOE ≠ LOE-011 without stewardship |
| Engine measurement is not understanding | CP/PV ≠ learner rationale |
| Continuity requires explicit custody | Append-only, source-separated records |

#### Governance

| ADR | Boundary |
|-----|----------|
| ADR-001 | Episode custody |
| ADR-002 | `corpus_ref` separation |
| ADR-003 | EvidenceRecord |
| ADR-004 | Claim gate |
| ADR-005 | DecisionTrace |
| ADR-006 | Buddy pedagogy |
| ADR-007 | System/engine boundary (this ADR) |

#### HLD (conceptual — no standalone HLD doc in repo)

- Separate lanes/services for: learner custody, system chess competence, engine reference, Buddy pedagogy, stewardship, federation export, Creator continuity serving
- Explicit dependencies and **forbidden writes** (D6)

#### LLD / OOP (future)

- Classes/interfaces/aggregates must preserve separations (D7)
- Immutable state transitions must make source/custody explicit (D9)
- No hidden mutable global learner state
- Engine analysis snapshots = immutable reference objects
- Buddy explanations must cite source boundaries

#### Runtime / Creator continuity

- Real-time interaction creates bounded events
- Events may become Episodes / DecisionTrace / EvidenceRecords
- Long-horizon continuity via append-only, auditable, source-separated records
- **100-year continuity** must preserve **semantic intent**, not only raw logs (D10)

### D6 — HLD boundary model

Conceptual HLD components (bridge targets — **not implemented**):

| Boundary | Role |
|----------|------|
| **Learner Custody Boundary** | Sovereign learner-owned records |
| **Episode / MoveRecord Boundary** | Terminal game/exercise facts |
| **DecisionTrace Boundary** | Per-ply reasoning under learner custody |
| **EvidenceRecord Boundary** | LOE/DOE append-only evidence |
| **Claim / Stewardship Boundary** | Hypothesis + verdict gate |
| **Domain Corpus Boundary** | `corpus_ref` registry and curated content |
| **System Chess Competence Boundary** | System's chess understanding lane |
| **Engine Reference Boundary** | Stockfish measurement snapshots |
| **Buddy Pedagogy Boundary** | Pedagogical mentor interactions |
| **Federation Export Boundary** | Lossy ObservationRecord projection |
| **Continuity / Creator Serving Boundary** | Long-horizon record serving without custody flattening |

#### Required dependency rules

| From | May read | Must not write |
|------|----------|----------------|
| **Buddy** | System Chess Competence, `corpus_ref`, engine reference, Episode context, DecisionTrace context | Learner evidence directly; claims; federation export |
| **Buddy** | — | May help create DecisionTrace but **must preserve `trace_source` / custody** |
| **Engine Reference** | Position state | Learner evidence directly |
| **Engine Reference** | — | Returns **immutable analysis snapshots** only |
| **System Chess Competence** | Engine output, corpus, position state | Learner state; claims; federation export |
| **System Chess Competence** | — | Uses engine only through **governed boundary** |
| **Federation Export** | Terminal completed-game Episode | Buddy content, DecisionTrace, `engine_ref`, `corpus_ref` from learner reasoning, EvidenceRecords, claims, learner state, mastery labels |
| **Creator / continuity layer** | Governed continuity records | Must not erase custody or elevate derived views to sovereign evidence |

### D7 — Future LLD/OOP design targets

The following are **LLD design targets**, not implemented classes. **No files in `src/` are created by this ADR.** Future LLD must generate UML / class diagrams from these concepts or equivalent.

#### `EngineReferenceProfile`

| Field | Purpose |
|-------|---------|
| `engine_name`, `version`, `depth_policy`, `time_policy`, `skill_level`, `hash`, `multipv`, `created_at` | Immutable profile of how engine analysis was produced |

#### `EngineAnalysisSnapshot`

| Field | Purpose |
|-------|---------|
| `snapshot_id`, `episode_id?`, `position_ref`, `fen_hash`, `profile_id`, `analyzed_at`, `best_move`, `principal_variations[]`, `cp_score?`, `mate_score?`, `depth`, `nodes?`, `limitations` | Immutable engine measurement object — **not learner evidence by itself** |

#### `PrincipalVariation`

| Field | Purpose |
|-------|---------|
| `pv_index`, `moves[]`, `cp_score?`, `mate_score?`, `depth` | Engine line candidate |

#### `CandidateMoveAssessment`

| Field | Purpose |
|-------|---------|
| `move_ref`, `source`, `engine_eval?`, `corpus_refs[]`, `explanation_tags[]`, `risk_flags[]`, `limitations` | Comparison object — **not learner rationale** |

#### `SystemChessCompetenceProfile`

| Field | Purpose |
|-------|---------|
| `version`, `corpus_registry_version?`, `engine_reference_policy?`, `explanation_policy?`, `supported_patterns[]`, `supported_endgames[]`, `supported_opening_refs[]` | System's declared chess competence state at a point in time |

#### `PositionConceptMap`

| Field | Purpose |
|-------|---------|
| `position_ref`, `corpus_refs[]`, `motifs[]`, `strategic_features[]`, `endgame_features[]`, `opening_refs[]`, `confidence_notes`, `limitations` | System concept mapping — **not learner evidence** |

#### `PedagogicalMoveClassifier`

```text
classify(
  position_ref,
  learner_move,
  engine_snapshot?,
  corpus_context?,
  learner_level?,
  mode?
) -> PedagogicalMoveClassification
```

#### `PedagogicalMoveClassification`

| Field | Purpose |
|-------|---------|
| `engine_best_relation`, `human_understandable_relation`, `learning_opportunity`, `explanation_level`, `corpus_refs[]`, `limitations` | Separates D4 "right move" semantics |

#### `EngineReferenceService`

```text
analyzePosition(
  position_ref,
  profile: EngineReferenceProfile
) -> EngineAnalysisSnapshot
```

#### `SystemChessCompetenceService`

```text
mapPositionToConcepts(
  position_ref,
  corpus_context?,
  engine_snapshot?
) -> PositionConceptMap
```

#### `BuddyExplanationService`

```text
explainMove(
  position_ref,
  move_ref,
  decision_trace?,
  engine_snapshot?,
  corpus_refs[],
  learner_level?,
  mode?
) -> BuddyExplanationDraft
```

#### `BuddyExplanationDraft`

| Field | Purpose |
|-------|---------|
| `explanation_text`, `source_refs[]`, `corpus_refs[]`, `engine_ref?`, `limitations`, `forbidden_claims[]` | **Not learner evidence** unless learner responds |

#### `LearningBestMovePolicy`

```text
proposeLearningFocus(
  position_ref,
  learner_context?,
  corpus_refs[],
  engine_snapshot?
) -> LearningFocusCandidate
```

#### `ContinuityRecord`

| Field | Purpose |
|-------|---------|
| `record_id`, `record_type`, `source_boundary`, `custody_boundary`, `created_at`, `immutable_payload_hash`, `prior_record_refs[]` | Long-horizon continuity across runtime/Creator |

**Alignment note:** [ChessGuide-LLD-v1.0](../../architecture/ChessGuide-LLD-v1.0.md) already defines `DecisionTrace`, `LearningRecord`, `ExportSovereigntyPolicy`, and PI-5 engine-as-reference. Future LLD revisions must **align** D7 targets with existing aggregates without merging custody boundaries.

### D8 — UML / diagram requirements for future LLD

Future LLD **must** include (as LLD artifacts — **not created in this ADR**):

#### 1. Component diagram

Components: Learner Custody, Buddy Pedagogy, System Chess Competence, Engine Reference, Corpus Registry, Evidence / Claim / Stewardship, Federation Export, Creator / Continuity Serving.

#### 2. Class diagram

Classes: `EngineReferenceProfile`, `EngineAnalysisSnapshot`, `PositionConceptMap`, `PedagogicalMoveClassification`, `BuddyExplanationDraft`, `DecisionTrace`, `EvidenceRecord`, `Claim`.

#### 3. Sequence diagram

Flow: real-time move → optional Buddy prompt → optional engine analysis → learner response → DecisionTrace creation → EvidenceRecord candidate → post-game review → possible stewardship claim.

#### 4. State transition diagram

States: position observed → engine snapshot created → Buddy explanation drafted → learner statement captured → DecisionTrace appended → EvidenceRecord appended → Claim evaluated → continuity record served.

### D9 — Immutable state transition rules

| Record type | Rule |
|-------------|------|
| `EngineAnalysisSnapshot` | **Immutable** once created |
| `DecisionTrace` | **Append-only** under ADR-005 constraints |
| `EvidenceRecord` | **Append-only** under ADR-003 constraints |
| Claim and verdict history | **Append-only** under ADR-004 |
| `BuddyExplanationDraft` | **Not learner evidence** unless learner response or steward record creates EvidenceRecord or DecisionTrace |
| `SystemChessCompetenceProfile` | **Immutable version snapshots** |
| Corpus registry versions | **Immutable** once released |
| Creator/continuity serving | Must preserve references, hashes, source boundaries, timestamps |

**Forbidden:**

| Anti-pattern | Why |
|--------------|-----|
| Mutating prior engine analysis to match later engine version | Breaks measurement lineage |
| Replacing learner rationale with Buddy summary | Violates ADR-005 `trace_source` |
| Overwriting DecisionTrace with engine explanation | Engine ≠ learner reasoning |
| Retroactively marking reconstructed reasoning as `pre_move` | ADR-005 D3 |
| Converting engine agreement into EvidenceRecord without learner/steward observation | ADR-003 D7 |
| Exporting reasoning or engine metadata to federation | FEDERATION.md |

### D10 — Runtime and Creator continuity boundary

#### Real-time

- Learner plays
- System observes position
- Buddy may prompt (ADR-006)
- Engine may analyze
- Learner may respond
- Immutable events are recorded

#### Short-term

- Episode review
- DecisionTrace / EvidenceRecord candidates
- Buddy synthesis as **derived view** (not sovereign evidence)

#### Long-term

- Governed records remain understandable across years
- Engine/profile versions remain attached
- `corpus_ref` registry versions remain attached
- System competence profile versions remain attached
- Evidence/claim lineage remains auditable

#### 100-year continuity

- Continuity must preserve **semantic boundary**, not only data bytes
- Record types must include enough metadata to remain interpretable
- Engine outputs must be tied to engine version/profile
- Buddy explanations must remain distinguishable from learner statements
- Claims must remain distinguishable from evidence
- Federation export must remain **lossy by design**

#### Creator serving

| Rule | Detail |
|------|--------|
| Creator/server layer may serve continuity records and projections | Per federation dependency model (CG-DEP-001) |
| Creator must **not** flatten custody boundaries | Derived views ≠ sovereign evidence |
| Creator must **not** allow federation export to bypass ADR boundaries | ExportSovereigntyPolicy analogue |
| Creator must support replayable continuity | Real-time event → long-horizon history |

**Repository gap:** Full Creator continuity serving specification is **not present** in ChessGuide repository. [FGI-001](../federation/grounding/FGI-001-creator.md) documents Creator as narrative/corpus workbench with **planned** OAT/CTP/CTV — operational continuity serving remains **open** (OQ-007-11).

### D11 — Buddy / Stockfish interaction rules

**Buddy may:**

- Ask learner for reasoning before engine reveal (ADR-006 D2)
- Use Stockfish to identify tactical missed opportunities
- Compare learner move to engine move
- Explain engine move in corpus terms
- Identify learning opportunity
- Suggest future training focus
- Mark limitations

**Buddy must not:**

- Present Stockfish as absolute teacher
- Call engine move "the lesson" without explanation
- Use engine output as learner rationale
- Auto-create LOE/DOE from engine agreement
- Claim mastery from matching engine
- Persist learner state from engine alignment
- Export engine/Buddy analysis

### D12 — Evidence and claim boundary

| Rule | Detail |
|------|--------|
| Engine snapshot may support EvidenceRecord | **Only if paired with observation/demonstration** |
| Learner move matching Stockfish | **Not DOE by itself** |
| Learner explaining why a Stockfish move works | May support LOE-009 or DOE-006 |
| Repeated learner recognition of engine-verified tactic | May support later claim lineage |
| Formal Integration/Transformation Claims | Require ADR-004 stewardship |
| C4 verdict | Remains external to Buddy/engine reference |

### D13 — Corpus and system competence boundary

| Rule | Detail |
|------|--------|
| `corpus_ref` | Curated domain reference (ADR-002) |
| System chess competence | May map positions to `corpus_ref` |
| Stockfish suggests tactic exists | Corpus assignment is **system/corpus interpretation**, not raw engine truth |
| Opening runtime tree | May be wrapped by future corpus registry (CCCR) |
| Engine analysis reveals missing corpus coverage | Coverage gap ≠ learner ignorance |
| Missing corpus coverage | Must not be treated as learner ignorance |

**Future Corpus Reference Registry ADR** should define:

- Registry format
- `corpus_ref` versioning
- Source/curation policy
- Relation to `SystemChessCompetenceProfile`
- Relation to Buddy explanation

### D14 — Federation boundary

**Do not export:**

- `EngineAnalysisSnapshot`
- `engine_ref`
- Stockfish PV / CP / mate scores
- `SystemChessCompetenceProfile`
- `PositionConceptMap`
- `BuddyExplanationDraft`
- Buddy prompts / explanations
- DecisionTrace
- EvidenceRecords
- `evidence_refs[]`
- Claims
- Verdicts
- `corpus_ref` from learner reasoning context
- Learner state
- Learning Frontier
- Mastery labels
- System competence projections

**Export remains:**

- Terminal completed-game **ObservationRecord** only
- Lossy move/result slice (`chessguide/game_import/1`)

Runtime enforcement: `export_v1.py` `_FORBIDDEN_EXPORT_ROOT_KEYS` includes `cp`, `engine`, `evaluation`, `coach`, `hint`, `learning`, `mastery`, etc.

### D15 — Anti-patterns

| Anti-pattern | Why rejected | Boundary |
|--------------|--------------|----------|
| Stockfish as teacher | Collapses measurement into pedagogy | D3, D11 |
| Stockfish as truth monopoly | Engine ≠ corpus truth ≠ learner understanding | D4, ADR-002 |
| Engine-best = learning-best | Learning depends on integration path | D4 |
| Engine agreement = mastery | Activity/measurement ≠ integration | ADR-003, CG-FLL-002 |
| Engine PV as learner rationale | Violates `trace_source` | ADR-005 D3 |
| Buddy explanation as learner reasoning | Buddy ≠ learner | ADR-005, ADR-006 |
| System competence as learner state | Contaminates custody | ADR-002 |
| `corpus_ref` as proof | Reference ≠ evidence | ADR-002, ADR-003 |
| Mutable engine analysis | Breaks lineage | D9 |
| Hidden global learner model | Violates custody | ADR-002 |
| Exported engine metadata | Federation boundary | D14, FEDERATION.md |
| Creator flattening custody boundaries | Loses semantic continuity | D10 |
| HLD without LLD traceability | Abstractions not implementable | D5, D7 |
| LLD classes without governance source | Implementation drift from doctrine | D5 |
| UML diagrams merging learner / engine / Buddy custody | Design must preserve separation | D8 |

### D16 — Philosophy → HLD → LLD alignment checklist

#### Philosophy

- [ ] Truth ≠ pedagogy
- [ ] Evidence ≠ claim
- [ ] Activity ≠ learning
- [ ] Measurement ≠ understanding
- [ ] Continuity requires custody

#### Governance

- [ ] ADR-001 through ADR-007 boundaries preserved

#### HLD

- [ ] Separate lanes exist (D6)
- [ ] Dependencies explicit
- [ ] Forbidden writes listed

#### LLD

- [ ] Classes/interfaces preserve custody (D7)
- [ ] Immutable records (D9)
- [ ] Source/custody fields explicit
- [ ] UML diagrams preserve separation (D8)

#### Runtime

- [ ] No hidden mutation
- [ ] No accidental export
- [ ] No engine-as-learner-rationale

#### Creator / continuity

- [ ] Real-time to 100-year replayability
- [ ] Semantic preservation
- [ ] Auditable lineages
- [ ] Derived views not elevated to sovereign evidence

### D17 — Downstream work

| # | Work item | Depends on |
|---|-----------|------------|
| 1 | ADR-005 / ADR-006 acceptance decision | Separate governance tasks |
| 2 | ADR-007 acceptance decision | This ADR review |
| 3 | System Chess Competence Review v1.0 or HLD document | ADR-007 |
| 4 | Corpus Reference Registry ADR | ADR-002, CCCR, D13 |
| 5 | DecisionTrace schema/storage ADR | ADR-005 acceptance |
| 6 | EngineReferenceService LLD | D7, ADR-007 acceptance |
| 7 | BuddyExplanationService LLD | D7, ADR-006 acceptance |
| 8 | UML package diagrams | D8 |
| 9 | Immutable state transition specification | D9 |
| 10 | Runtime implementation phase | Above ADRs + LLD |
| 11 | Creator continuity serving integration | D10; Creator OAT/CTP (external) |

---

## In scope

- Stockfish reference boundary (D3)
- System chess competence boundary (D2)
- Buddy / engine / corpus / learner separation (D1, D6, D11)
- "Right move" semantics (D4)
- HLD bridge (D5, D6)
- Future LLD/OOP design targets (D7)
- Future UML requirements (D8)
- Immutable state transition rules (D9)
- Creator / long-horizon continuity requirements (D10)
- Federation withholding (D14)
- Evidence and claim boundary (D12)
- Corpus and system competence boundary (D13)
- Anti-patterns (D15)
- Alignment checklist (D16)
- Downstream sequencing (D17)

---

## Out of scope

- Runtime implementation
- UI
- APIs
- Tests
- Schemas
- localStorage
- SQL
- Prompt templates
- Engine service implementation
- Actual UML files
- Actual class files in `src/`
- Stockfish deployment/config
- Corpus registry implementation
- Accepting ADR-005
- Accepting ADR-006
- Activating LARIS
- Federation export changes

---

## Alternatives considered

### Alt-1 — Stockfish as pedagogical authority

**Pros:** Simple; always "correct" move available.  
**Cons:** Collapses measurement into teaching; destroys learner autonomy.  
**Rejected** — D3, D11.

### Alt-2 — ChessGuide without system chess competence

**Pros:** Minimal system design.  
**Cons:** Cannot teach what it cannot model; Buddy becomes pure LLM oracle.  
**Rejected** — D2.

### Alt-3 — System competence written into learner state

**Pros:** Unified learner model.  
**Cons:** Contaminates learner custody; violates ADR-002.  
**Rejected** — D2, D6.

### Alt-4 — Engine output as EvidenceRecord

**Pros:** Easy automation of evidence capture.  
**Cons:** Evidence requires observation/demonstration; engine snapshot alone is measurement.  
**Rejected** — D12.

### Alt-5 — Engine-best move as learning-best move

**Pros:** Single "right answer" UX.  
**Cons:** Learning-best depends on learner level and integration path.  
**Rejected** — D4.

### Alt-6 — Buddy uses engine without source disclosure

**Pros:** Smoother UX.  
**Cons:** Violates ADR-005/006 source boundary.  
**Rejected** — D11, ADR-005 D3.

### Alt-7 — Federation exports engine analysis

**Pros:** Rich cross-domain observation.  
**Cons:** Violates federation boundary; leaks non-sovereign metadata.  
**Rejected** — D14, FEDERATION.md.

### Alt-8 — HLD without LLD/OOP traceability

**Pros:** Faster governance iteration.  
**Cons:** Philosophical/governance abstractions not implementable; runtime drift.  
**Rejected** — D5, D7.

### Alt-9 — LLD directly implements without governance trace

**Pros:** Faster coding.  
**Cons:** Low-level design must preserve custody, source, continuity semantics.  
**Rejected** — D5, D16.

### Alt-10 — Creator serves flattened projections only

**Pros:** Simpler serving layer.  
**Cons:** Loses 100-year semantic continuity; erases custody.  
**Rejected** — D10.

---

## Consequences

### Positive

- Separates engine measurement from pedagogy.
- Gives ChessGuide a real **system competence lane**.
- Makes future HLD/LLD/OOP design traceable to governance.
- Prevents engine contamination of learner evidence.
- Supports long-horizon continuity and Creator serving model.
- Clarifies future ADR/implementation roadmap (D17).
- Resolves CCCR OQ-CCR-11 and OQ-CCR-12 at governance level (draft).

### Negative / risks

- Adds architectural complexity across three competence loops.
- Requires explicit versioning for engine profiles and system competence.
- Requires future LLD and UML work (D7, D8).
- Requires careful UI/copy to avoid engine-oracle effect (OQ-007-6).
- Requires future Creator continuity integration (external dependency).
- Standalone HLD document still absent — bridge burden remains on ADR-007 until HLD doc exists.

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **OQ-007-1** | What is minimum `SystemChessCompetenceProfile` for v1? | **Open** — lean MVP patterns + opening refs from CCCR |
| **OQ-007-2** | Which Stockfish profile(s) are allowed in friendly game vs review? | **Open** — mode-dependent; ADR-006 intervention ladder |
| **OQ-007-3** | How should engine depth/time settings be recorded for continuity? | **Open** — `EngineReferenceProfile` fields (D7) |
| **OQ-007-4** | What counts as learning-best move? | **Open** — `LearningBestMovePolicy` + steward/Buddy policy |
| **OQ-007-5** | Who adjudicates learning-best if not Buddy? | **Open** — lean steward/system policy for claims |
| **OQ-007-6** | How should engine-assisted explanations be displayed? | **Open** — product phase; source disclosure required |
| **OQ-007-7** | When may engine snapshot support EvidenceRecord? | **Open** — D12; paired observation required |
| **OQ-007-8** | How should `corpus_ref` versioning work? | **Open** — Corpus Reference Registry ADR (D13) |
| **OQ-007-9** | What UML package boundaries are required? | **Open** — D8 component diagram lanes |
| **OQ-007-10** | What immutable state transition format should future LLD use? | **Open** — align with LLD v1.0 Record taxonomy |
| **OQ-007-11** | How does Creator serve 100-year continuity without flattening custody? | **Open** — Creator OAT/CTP planned; FGI-001 grounding only |
| **OQ-007-12** | Does `SystemChessCompetenceProfile` evolve automatically or only via governed releases? | **Open** — lean governed releases |
| **OQ-007-13** | How are engine version changes handled over decades? | **Open** — immutable snapshots + profile versioning |
| **OQ-007-14** | What is the relation between system chess competence and future machine learning? | **Open** — must not bypass custody boundaries |
| **OQ-007-15** | Can Buddy ever choose learning-best move without steward/system policy? | **Open** — lean no for formal claims; pedagogical suggestion only |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Episode / LearningTrace custody | ADR-001 Accepted | ADR | [DOCTRINE] |
| `corpus_ref` / derived views | ADR-002 Accepted | ADR | [DOCTRINE] |
| LOE/DOE evidence | ADR-003 Accepted | ADR | [DOCTRINE] |
| Claim / stewardship gate | ADR-004 Accepted | ADR | [DOCTRINE] |
| DecisionTrace / `capture_timing` / `trace_source` / `engine_ref` | ADR-005 Draft | ADR | [DRAFT] |
| Buddy pedagogy / engine lane | ADR-006 Draft | ADR | [DRAFT] |
| Corpus / Stockfish / system competence gap | CCCR v1.0 § System Chess Competence | Review | [PROPOSAL] |
| Buddy reference over decree | CB-004 PP-7 | Doctrine | [DOCTRINE] |
| LearningTrace product schema | CB-005 | Doctrine | [DOCTRINE] |
| Longitudinal skill development | CB-002 | Doctrine | [DOCTRINE] |
| Learning = integration | CG-FLL-002 | Doctrine | [DOCTRINE] |
| LOE/DOE pilot catalogue | CG-FLL-1E | Doctrine | [DOCTRINE] |
| Federation export boundary | FEDERATION.md | Doctrine | [DOCTRINE] |
| Federation export forbidden keys | `export_v1.py` | Runtime | [RUNTIME] |
| Engine CP measured lane | `helper.ts`, `CP.tsx` | Runtime | [RUNTIME] |
| Legal moves / game state | `rules.ts`, `game.ts` | Runtime | [RUNTIME] |
| Opening runtime corpus | `openings.ts`, `openingdata.ts` | Runtime | [RUNTIME] |
| LLD design targets | ChessGuide-LLD-v1.0 | LLD Candidate | [DESIGN TARGET] |
| Standalone HLD document | **Absent** | — | **GAP** |
| Creator continuity serving | FGI-001-creator.md | Grounding study | [EXTERNAL / PLANNED] |
| Creator federation dependency | CG-DEP-001 | Doctrine | [DOCTRINE] |
| System/engine boundary definition | ADR-007 D1–D17 | ADR | [DRAFT] |

---

## Semantic placement diagram

```text
Philosophy
  truth ≠ teaching · evidence ≠ claim · measurement ≠ understanding · continuity requires custody
    ↓
Governance ADRs
  ADR-001 Episode · ADR-002 corpus_ref · ADR-003 Evidence · ADR-004 Claim
  ADR-005 DecisionTrace · ADR-006 Buddy · ADR-007 System/Engine Boundary
    ↓
HLD lanes (conceptual — ADR-007 bridge)
  ├── Learner Custody
  ├── System Chess Competence
  ├── Stockfish Reference
  ├── Buddy Pedagogy
  ├── Evidence / Claim / Stewardship
  ├── Federation Export
  └── Creator Continuity Serving
    ↓
LLD / OOP design targets (future — D7)
  ├── EngineReferenceProfile
  ├── EngineAnalysisSnapshot
  ├── SystemChessCompetenceProfile
  ├── PositionConceptMap
  ├── PedagogicalMoveClassifier
  ├── BuddyExplanationService
  └── ContinuityRecord
    ↓
Immutable state transitions (D9)
    ↓
Runtime implementation (future)
    ↓
Real-time → 100-year continuity (D10)
```

---

## Governance boundary statement

**ADR-007 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, **ADR-005 status** (remains Draft v0.1), **ADR-006 status** (remains Draft v0.1), or **LARIS activation**.

---

## Related documents

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [ADR-005 — DecisionTrace / Per-Ply Reasoning v1 (Draft)](ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md)
- [ADR-006 — Buddy Pedagogy and Reference Use v1 (Draft)](ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md)
- [ChessGuide Corpus Content Review v1.0](../../reviews/ChessGuide-Corpus-Content-Review-v1.0.md)
- [ChessGuide LLD v1.0](../../architecture/ChessGuide-LLD-v1.0.md)
- [CB-004 — Buddy Persona & Product Principles](../chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CB-002 — Longitudinal Skill Development Domain](../chessbuddy/CB-002-longitudinal-skill-development-domain.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CG-DEP-001 — Federation Dependency Analysis](../chessguide/CG-DEP-001-federation-dependency-analysis.md)
- [FGI-001 — Creator](../federation/grounding/FGI-001-creator.md)
- [FEDERATION.md](../../FEDERATION.md)
