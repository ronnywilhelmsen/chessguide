# ChessGuide LLD v1.0

## Low-Level Design — Domain-Owned Implementation Structure

| Field | Value |
|-------|-------|
| **Document ID** | ChessGuide-LLD-v1.0 |
| **Version** | 1.0 |
| **Status** | Accepted LLD Candidate |
| **Date** | 2026-06-06 |
| **Scope** | ChessGuide sovereign domain — classes, records, services, contracts |
| **Constraints** | No runtime code, APIs, databases; no federation/MSCI/mission redesign |

---

## Mission Question

> What implementation-ready structures must exist for ChessGuide to observe, reconstruct, simulate and improve chess learning and decision trajectories over time?

**Answer (summary):** A **LearningTrace-centered object universe** with **EvidenceChain** lineage, **DecisionTrace** per position, **sovereign LearningRecords** (LOE/DOE), **non-canonical SimulationContext** outputs, **deterministic ReplayService** with version pins, and a **lossy FederationService** projection to `ObservationRecord` (`chessguide/game_import/1`) only.

---

## Foundation Traceability

| Upstream (accepted) | Relationship to this LLD |
|---------------------|--------------------------|
| **ChessGuide Domain Profile v1.0** | Instantiated via [CDESR v1.0](../reviews/Canonical-Domain-End-State-Requirements-Review-v1.0-ChessGuide.md) (in-repo profile baseline) |
| **Observation Foundation / ObservationRecord** | Federation envelope instantiated; sovereign observations richer |
| **Canonical Continuity UML v1.0** | Actor/record families mapped in Part XV — not revised |
| **Canonical MSCI Readiness Review v1.0** | MSCI four readiness axes mapped Part XIII — external; instantiated here |
| **Canonical LLD Readiness Review v1.0** | This document fulfils ChessGuide LLD slot — external parent not in repo |
| **CFA v1.0** | Interpretive assessment layer over aggregates |
| **CB-005, CG-FLL-*, CB-002** | Trace hierarchy, LOE catalog, LSDD artefacts |
| **FEDERATION.md** | Export boundary contract |
| **Creator / BioChronos / FinKairos / Domosofi LLD v1.0** | **External** — dependency patterns cited Part XV; not reopened |

**Doctrine precedence:** Accepted architecture is **not** reopened. Gaps marked **Unknown** where upstream LLD not present in repository.

---

# Part I — Domain Scope

## Mission

Observe, understand, guide, and improve **longitudinal chess skill development** — making **learning and transformation** visible over time (CG-000, CG-001, CDESR Part I).

## Scope

| In scope | Out of scope |
|----------|--------------|
| Learner LearningTrace custody | Federation governance |
| Chess episode observation & replay | Tournament platform |
| Decision trace & reconstruction | Laris implementation |
| Training/study modes (CB-006) | Creator runtime |
| Steward-validated transformation | Cross-domain identity |
| Federation game_import export slice | Full learning export |

## Autonomy

- **PI-3:** Learner autonomy over moves/tempo in friendly live play (CB-001).
- **PI-5:** Engine is reference, not identity.
- **Steward:** Transformation claims not self-certified (CG-FLL-001).

## Federation Boundaries

```text
Federation transports continuity (completed game ObservationRecord).
ChessGuide retains learning (full trace semantics).
```

Forbidden in federation export: CP, hints, coach, learning, mastery, explanation (FEDERATION.md, `export_v1.py`).

## Responsibilities

| Responsibility | Owner |
|----------------|-------|
| **Learning** | ChessGuide sovereign — integration, LOE/DOE, CFA assessment |
| **Training** | ChessGuide — modes, practice episodes, Capability Conditions |
| **Replay** | ChessGuide — deterministic position reconstruction + lineage verdict |
| **Educational** | ChessGuide Buddy + study structures; Laris cross-domain guidance external |

## Ownership

**ChessGuide owns:** LearningTrace, DecisionTrace, LearningRecords, SimulationReports (non-canonical), steward workflows, chess-specific semantics.

**Outside ChessGuide:** Federation canon governance, Creator OAT/CTP/CTV runtime, Laris guide runtime, universal chess rules (referenced).

---

# Part II — Object Universe

## Classification Legend

| Kind | DDD role |
|------|----------|
| **Entity** | Identity over time |
| **Value Object** | Immutable, compared by value |
| **Aggregate** | Consistency boundary + root |
| **Record** | Immutable persisted fact |
| **Service** | Stateless domain operation |
| **Policy** | Rule evaluation |
| **Specification** | Predicate / validation |

## Core Object Catalog

| Object | Kind | Purpose | Owner | Lifecycle | Key relationships |
|--------|------|---------|-------|-----------|-------------------|
| `LearnerId` | Value Object | Stable actor identity | Learner | Permanent | 1→1 LearningJourney |
| `LearningJourney` | Aggregate | Root longitudinal container | Learner | Years+ | → Sessions, Episodes |
| `Session` | Entity | Connected play period | Learner | Days–weeks | → Episodes |
| `Episode` | Entity | One completed game/exercise | Learner | Terminal | → Events, Anchors |
| `ChessSignal` | Record | Atomic domain event | Trace | Append-only | → Episode |
| `ChessAnchor` | Value Object | Immutable index (AN-2) | Trace | Permanent post-write | ↔ Episodes |
| `Position` | Value Object | FEN + move index | Episode | Point | → DecisionTrace |
| `DecisionTrace` | Aggregate | Decision at one ply | Learner | Per ply | → Candidates, Evaluation |
| `EvidenceChain` | Aggregate | Lineage graph for claims | Steward | Grows | → Records refs |
| `ObservationSeries` | Aggregate | Time-ordered observations | Episode | Episode span | → Observation records |
| `LearningRecord` | Record | LOE/DOE event | Learner | Append | → evidence_refs |
| `ExplanationArtifact` | Record | Structured why P1/P2 | Learner+Steward | Episodic→attested | → evidence_refs |
| `SimulationContext` | Entity | Non-canonical what-if scope | Learner | Disposable | → SimulationReport |
| `LearningCycle` | Entity | Integration cycle marker | Learner | Multi-episode | → LearningRecords |
| `CapabilityConditions` | Value Object | Mode, autonomy, attention policy | Episode | Per episode | CB-006 matrix |
| `IM1Snapshot` | Value Object | Measured/perceived lanes | Episode | Sub-episode | Never merged (I-3) |
| `TransformationClaim` | Record | LOE-011 post-C4 | Steward | Claim event | → EvidenceChain |
| `FederationObservationProjection` | Value Object | Lossy export DTO | Federation | Per export | Maps from Episode |

## Policies & Specifications

| Name | Kind | Role |
|------|------|------|
| `ActivityNotLearningPolicy` | Policy | I-3: activity ≠ learning (CG-FLL-002) |
| `ExportSovereigntyPolicy` | Policy | Strip learning from federation payload |
| `ReplayDeterminismSpec` | Specification | Rules engine + version pin |
| `ClaimLineageSpec` | Specification | LOE-011 ≥2 prior stages |
| `SimulationNonCanonicalSpec` | Specification | Sim outputs cannot mutate trace |
| `RecommendationEvidenceSpec` | Specification | No recommendation without evidence_refs |

---

# Part III — Aggregate Design

## Transactional Boundaries

| Aggregate | Root | Children | Boundaries | Invariants | Failure conditions | Owner |
|-----------|------|----------|------------|------------|-------------------|-------|
| **Learner** | `LearningJourney` | `LearnerProfile` (VO), steward refs | One journey per LearnerId | PI-4 custody | Identity collision | Learner |
| **LearningJourney** | `LearningJourney` | `Session[]`, metadata | Cross-session ordering | Temporal monotonicity | Out-of-order append without migration | Learner |
| **TrainingSession** | `Session` | `Episode[]`, `CapabilityConditions` | Session scope | Mode consistency | Mode switch mid-episode without record | Learner |
| **PositionStudy** | `StudyEpisode` | `PositionObservation[]`, `StudyRecord[]` | Single study unit | Anchor ≥1 (AN-1) | Missing anchor | Learner |
| **GameStudy** | `Episode` | `ChessSignal[]`, `DecisionTrace[]`, `IM1Snapshot` | One terminal game | Terminal before transform tag (I-1) | Open episode + transformation tag | Learner |
| **DecisionTrace** | `DecisionTrace` | `CandidateMove[]`, `ChosenMove`, `Evaluation` | Single ply | Exactly one chosen move | Zero or >1 chosen | Learner |
| **ObservationSeries** | `ObservationSeries` | typed observations | Episode or study | Complete metadata per type | Missing lineage | Learner |
| **EvidenceChain** | `EvidenceChain` | record refs, stage tags | Claim preparation | ≥2 stages for LOE-011 | Insufficient lineage | Steward |
| **SimulationContext** | `SimulationContext` | scenarios, hypotheses | **Isolated** from canonical trace | **No write to LearningJourney** | Sim mutation detected | Learner |
| **LearningCycle** | `LearningCycle` | `LearningRecord[]`, integration markers | Multi-episode interpretive | Explicit open/close | Orphan integration without events | Learner |

**Boundary rule:** Only aggregate roots expose mutation APIs. Cross-aggregate references use **IDs + evidence_refs**, not embedded mutable graphs.

---

# Part IV — Learning Observation Model

## Completeness Definition

A ChessGuide observation is **complete** when it has:

1. **Identity** — `observation_id`, `episode_id`, `actor_id`, `observed_at`
2. **Lineage** — `prior_observation_refs[]` or explicit `lineage_root`
3. **Capture context** — `CapabilityConditions` snapshot (mode, policy version)
4. **Replay pin** — `rules_version`, `engine_profile_id` (if measured lane used)
5. **Lane** — `measured` | `perceived` | `steward` (never conflated)
6. **Preservation class** — `canonical` | `derived` | `ephemeral` (ephemeral forbidden for learning claims)

## Observation Types

### `PositionObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `fen` | Yes | After move or study entry |
| `ply_index` | Yes | 0-based |
| `clock_white_ms`, `clock_black_ms` | Optional | Measured |
| `context_tags[]` | Optional | opening_id, focus_contract |

**Replay:** Replay move list to ply_index with pinned rules.  
**Preservation:** Canonical in Episode.

### `MoveObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `san` | Yes | Applied move |
| `from_square`, `to_square` | Derived | From rules |
| `is_terminal` | Yes | Game end flag |
| `signal_type` | Yes | `move.played` etc. (CB-005) |

### `GameObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `episode_id` | Yes | |
| `participants` | Yes | white, black refs |
| `result` | Yes at terminal | PGN-style |
| `move_observation_refs[]` | Yes | Ordered |

### `TrainingObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `mode` | Yes | CB-006 enum |
| `exercise_ref` | Optional | Practice framing |
| `bot_profile` | Optional | MachineActor ref |

### `StudyObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `study_kind` | Yes | position / line / theme |
| `position_observation_ref` | Yes | |

### `MistakeObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `move_ref` | Yes | |
| `deviation_cp` | Measured lane | `move.deviation_from_reference` |
| `loe_ref` | Optional | LOE-006 linkage |

### `ProgressObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `metric_kind` | Yes | **Not Elo alone** (CB-002 R-2) |
| `narrative_ref` | Steward/LearningRecord | No opaque score without lineage |

### `SkillObservation`

| Field | Required | Notes |
|-------|----------|-------|
| `focus_area` | Yes | Transformation tag candidate |
| `evidence_refs[]` | Yes | Multi-episode |

**Validation:** `ObservationValidationService` enforces completeness + lane discipline.

---

# Part V — Record Design

## Validity Definition

A ChessGuide record is **valid** when:

- **Integrity:** content checksum + schema version
- **Lineage:** `evidence_refs[]` resolvable or explicit steward exception
- **Immutability:** append-only after commit (anchors AN-2)
- **Migration:** carries `schema_version`, `rules_version`, `canon_tag` optional for federation records

## Record Catalog

### `ObservationRecord` (Federation-facing)

| Field | Source |
|-------|--------|
| Continuity envelope | `vendor/federation-canon-1.0.1` |
| `payload_profile` | `chessguide/game_import/1` |
| `payload.game_artifact` | Legacy `Game.toString()` mapping |
| `continuity_id` | `game:{actor_id}:{game_id}` |

**Migration:** Episode semantic mapping from legacy line (CB-005).  
**Replay:** Moves only — not learning metadata.

### `ReasoningRecord`

| Field | Notes |
|-------|-------|
| `reasoning_id`, `episode_id`, `ply_index` | |
| `hypothesis_text` | ChessReasoning |
| `evidence_refs[]` | Required |
| `confidence` | Explicit uncertainty |

Maps UML **MeaningRecord** / LOE-009.

### `ValidationRun`

| Field | Notes |
|-------|-------|
| `checkpoint` | C0–C4 |
| `verdict` | supported / qualified / not supported |
| `steward_id`, `run_at` | |
| `lineage_review_refs[]` | |

### `ReplayReport`

| Field | Notes |
|-------|-------|
| `replay_verdict` | reconstructable / partial / failed |
| `rules_version_pin` | Required |
| `position_hashes[]` | Optional verification |

### `SimulationReport`

| Field | Notes |
|-------|-------|
| `simulation_id` | Non-canonical |
| `promotion_status` | `draft` only unless governance approval |
| `counterfactual_refs[]` | |
| `must_not_reference` | canonical episode mutation |

### `LearningRecord`

| Field | Notes |
|-------|-------|
| `loe_type` | LOE-001…011 |
| `doe_link` | Optional |
| `integration_channel` | implicit \| explicit |
| `evidence_refs[]` | Required |

**Sovereign:** Not federation exported.

### `DecisionRecord`

| Field | Notes |
|-------|-------|
| `decision_trace_id` | |
| `chosen_move_ref` | |
| `alternative_refs[]` | |
| `evaluation_ref` | Measured lane separated |

### `OutcomeRecord`

| Field | Notes |
|-------|-------|
| `outcome_kind` | episodic_result \| transformation_claim |
| `loe_011_ref` | If claim |
| `c4_verdict_ref` | Steward gate |

### `StudyRecord` / `TrainingRecord` / `ProgressRecord`

Consolidated under episode + `LearningRecord` where possible; `ProgressRecord` is **read model** over trace, not authoritative store (CDESR).

---

# Part VI — Decision Trace Design

## Representation

```text
DecisionTrace (Aggregate)
├── Position (VO)           — fen, ply_index
├── CandidateMove[] (VO)    — san, source: human|engine|hint
├── ChosenMove (VO)         — exactly one
├── AlternativeMove[] (VO)  — rejected candidates
├── Evaluation (VO)         — cp, depth, engine_profile_id [measured]
├── Reasoning (VO)          — text, evidence_refs [perceived/steward]
├── Confidence (VO)         — level + basis enum
└── Outcome (VO)            — post-move eval delta, terminal flags
```

| Element | Purpose | Lifecycle | Validation |
|---------|---------|-----------|------------|
| **Position** | Decision context | Fixed at ply | FEN legal |
| **CandidateMove** | Option space | Frozen at decision time | Legal move list |
| **ChosenMove** | Actual decision | Immutable post-commit | ∈ candidates or illegal attempt logged |
| **AlternativeMove** | Counterfactual input | Immutable | Link to SimulationContext optional |
| **Evaluation** | Engine reference | Measured lane | PI-5 — not sovereign truth |
| **Reasoning** | Learner/steward why | Append until sealed | evidence_refs required for claims |
| **Confidence** | Uncertainty explicit | Per decision | No false precision |
| **Outcome** | Result of decision | After move applied | Replay-verifiable |

---

# Part VII — Learning Design

| Concept | Structure | Inputs | Outputs | Validation |
|---------|-----------|--------|---------|------------|
| **Learner** | `LearnerId` + `LearningJourney` | Registration | Trace custody | PI-4 |
| **Skill** | Interpretive read model over anchors | Episodes, LOE-002 | Focus areas | Steward review |
| **Competency** | LOE-linked capability label | LearningRecords | LOE-011 bundle input | C3 lineage |
| **Weakness** | IM-1 gap / LOE-006 patterns | MistakeObservation | Training focus | Not shaming export (CB-004) |
| **TrainingPlan** | **Candidate** — `ImprovementTarget[]` + mode schedule | Steward/learner narrative | Session intents | Not auto-sovereign (CDESR) |
| **ImprovementTarget** | Value Object | Assessment refs | Study/training episodes | evidence_refs |
| **LearningOutcome** | `LearningRecord` + optional `TransformationClaim` | Integration events | Capability change narrative | C4 + LOE-011 |

**Learning representation rule:** Learning = **integration achieved** (CG-FLL-002) recorded as **LearningRecord**, not activity counters.

---

# Part VIII — Service Design

| Service | Mandatory? | Responsibilities | Inputs | Outputs | Dependencies | Failure modes |
|---------|------------|------------------|--------|---------|--------------|---------------|
| **ObservationService** | **Yes** | Capture complete observations | Reality events | ObservationSeries | Rules engine | Incomplete metadata |
| **TrainingService** | **Yes** | Mode-scoped practice | CapabilityConditions | TrainingEpisode | CB-006 policy | Mode violation |
| **StudyService** | **Yes** | Position/line study | StudyObservation | StudyRecord | Opening corpus | Missing anchor |
| **DecisionService** | **Yes** | Build DecisionTrace | Position, moves | DecisionRecord | Engine (optional) | Missing chosen move |
| **KnowledgeService** | **Yes** | Opening/pattern resolution | FEN, move history | Classification refs | openingdata corpus | Unknown line |
| **ReplayService** | **Yes** | Deterministic reconstruction | Episode, pin versions | ReplayReport | rules.replay semantics | Non-reconstructable |
| **SimulationService** | **Yes** | Non-canonical what-if | SimulationContext | SimulationReport | Engine | Canonical contamination |
| **LearningService** | **Yes** | LOE/DOE append, integration | Learning events | LearningRecord | ActivityNotLearningPolicy | Activity misclassified |
| **GovernanceService** | **Yes** | C0–C4, claim gates | EvidenceChain | ValidationRun | ClaimLineageSpec | Blocked claim |
| **ValidationService** | **Yes** | Spec enforcement | Records | pass/fail | All specs | Integrity failure |
| **FederationService** | **Yes** (export) | Lossy projection | Terminal Episode | ObservationRecord | ExportSovereigntyPolicy | Forbidden field leak |

**Contracts (domain interfaces, not HTTP):**

```text
IObservationCapture     append(observation) → ObservationId
IDecisionTraceBuilder   seal(decisionTrace) → DecisionRecord
IReplayExecutor         replay(episodeId, pin) → ReplayReport
ISimulationRunner       run(context) → SimulationReport [non-canonical]
ILearningEventWriter    append(LearningRecord) → RecordId
IFederationExporter     project(episode) → ObservationRecord
IStewardshipGate        evaluate(EvidenceChain) → ValidationRun
```

---

# Part IX — Scientific Reconstruction Design

## Structures

| Structure | Role |
|-----------|------|
| `Phenomenon` | "Move X at ply N" — observable fact |
| `Evidence` | Observation + DecisionRecord refs |
| `Hypothesis` | ReasoningRecord / ExplanationArtifact candidate |
| `AlternativeHypothesis` | Competing ReasoningRecords |
| `Falsification` | Replay + engine measured contradiction |
| `Confidence` | Explicit level with basis |
| `Learning` | LearningRecord integration verdict |

## Question Support

| Question | Reconstruction path |
|----------|---------------------|
| Why was this move played? | DecisionTrace.Reasoning + LearningRecord LOE-009 |
| Why incorrect? | MistakeObservation + Evaluation + Falsification |
| Which alternatives? | CandidateMove[] + AlternativeMove[] |
| Ignored observations? | EvidenceChain gap analysis |
| Best explanation? | Compare hypotheses; steward P2 ExplanationArtifact |
| Rating change why? | **Unsupported as primary metric** — use SkillObservation + claims with lineage |

**Service:** `ReconstructionService` composes EvidenceChain → ranked hypotheses (read-only).

---

# Part X — Simulation Design

## Structures

| Type | Fields / rules |
|------|----------------|
| `SimulationContext` | `parent_episode_ref` (read-only), `branch_ply`, `scenario_kind` |
| `PositionScenario` | FEN + candidate continuations |
| `TrainingScenario` | Mode + exercise parameters |
| `LearningScenario` | LOE-005 variation exploration |
| `CounterfactualScenario` | Alternative chosen move |
| `UncertaintyModel` | Engine depth spread, confidence bands |
| `SimulationReport` | Non-canonical; `promotion_status: draft` |

## Rules

1. Simulation **never** alters canonical `LearningJourney` mutations.
2. Outputs stored in **SimulationReport** namespace only.
3. Promotion to canonical requires **GovernanceService** approval + new Observation/Learning records.
4. Supports: what-if analysis, alternative paths, training optimization, counterfactual learning.

---

# Part XI — Improvement Design

```text
LearningCycle
  Observation → Assessment → Recommendation* → Revision* → LearningRecord
       ↑______________________________________________|
```

| Stage | Structure | Notes |
|-------|-----------|-------|
| **Observation** | ObservationSeries | Evidence-first |
| **Assessment** | CFA Path Quality/Potency (interpretive) | Steward-facing |
| **Recommendation** | Hint/Buddy message | *Requires evidence_refs |
| **TrainingRevision** | Updated ImprovementTarget | Mode-aware |
| **StudyRevision** | New StudyEpisode plan | Anchor-linked |
| **LearningRevision** | New LearningRecord | Append-only audit |
| **ModelRevision** | Opening corpus version bump | KnowledgeService |

**No opaque recommendations.** **No outcome without traceability.**

---

# Part XII — Replay Design

| Component | Definition |
|-----------|------------|
| **ReplayContext** | Episode id, actor, rules_version_pin, engine_profile_pin |
| **ReplayScope** | full_game \| ply_range \| study_position |
| **ReplayExecution** | Apply SAN list via pinned rules engine |
| **ReplayVerification** | Position hash compare per ply |
| **ReplayResult** | `ReplayReport` with verdict |
| **ReplayFailure** | Illegal move, version mismatch, missing moves |

## Requirements

- **Deterministic:** `rules_version` + move list → unique FEN sequence.
- **Lineage:** ReplayReport refs Episode immutable snapshot.
- **Migration:** Legacy `Game.toString()` adapter preserves move order; date token → episode identity.

**Maps to:** `rules.replay` semantics (legacy); LLD `ReplayService` supersedes ad-hoc calls.

---

# Part XIII — MSCI Mapping

**MSCI** = Continuity, Scientific Reconstruction, Simulation, Improvement readiness (Canonical MSCI Readiness Review v1.0 — external).

| MSCI axis | Classes | Records | Services | Contracts | Verification |
|-----------|---------|---------|----------|-----------|--------------|
| **Continuity Readiness** | LearningJourney, Episode, ChessAnchor | ObservationRecord (export slice), LearningRecord | ObservationService, FederationService | IFederationExporter | Episode identity stable; export T3 tests |
| **Scientific Reconstruction Readiness** | DecisionTrace, EvidenceChain | ReasoningRecord, ReplayReport | ReconstructionService, ReplayService | IReplayExecutor | Replay verdict reconstructable |
| **Simulation Readiness** | SimulationContext | SimulationReport | SimulationService | ISimulationRunner | Non-canonical isolation spec |
| **Improvement Readiness** | LearningCycle | LearningRecord, OutcomeRecord | LearningService, GovernanceService | ILearningEventWriter, IStewardshipGate | LOE lineage + C4 gate |

---

# Part XIV — Century-Scale Continuity

| Horizon | Preserved by | Risk |
|---------|--------------|------|
| **1 year** | Episode IDs, LOE lineage, export fixtures | Schema drift |
| **10 years** | `schema_version` on all records; portable trace bundle (CB-005) | Engine profile obsolescence |
| **50 years** | Semantic invariants (AN-2, I-3, chain rule) | Encoding unknown |
| **100 years** | Stewardship principles + immutable anchors | **Unknown** archival format — doctrine only |

| Preservation target | Structure |
|--------------------|-----------|
| **Knowledge** | Opening corpus version + anchor refs |
| **Learning** | LearningRecord + ExplanationArtifact |
| **Decision** | DecisionTrace + MoveObservation |
| **Replay** | ReplayReport + rules_version_pin |
| **Simulation** | SimulationReport (non-canonical archive) |

---

# Part XV — HLD Traceability

| Upstream | ChessGuide LLD mapping |
|----------|------------------------|
| **Continuity UML → Actor** | LearnerId → HumanActor; Engine → MachineActor; Buddy → ServiceActor |
| **Continuity UML → ObservationRecord** | FederationService projection |
| **Continuity UML → LearningRecord** | LearningRecord (LOE/DOE) |
| **Continuity UML → MeaningRecord** | ReasoningRecord, ExplanationArtifact |
| **Continuity UML → OutcomeRecord** | OutcomeRecord (episodic + claim) |
| **Continuity UML → DialogueRecord** | StudyRecord + LOE-010 teaching dialogue refs |
| **MSCI → LLD** | Part XIII table |
| **Domain Profile (CDESR) → LLD** | Parts I–II object universe |
| **CFA v1.0 → LLD** | GovernanceService assessment; LearningCycle |
| **Creator LLD** | **Dependency only** — OAT envelope; no Creator classes in ChessGuide |
| **BioChronos LLD** | **Pattern share** — temporal episode ordering (H8 ref.) |
| **FinKairos LLD** | **Pattern share** — evidence chain reconstruction |
| **Domosofi LLD** | **Pattern share** — stewardship lifecycle (CB-005) |

**Traceability verdict:** Every LLD structure traces to **in-repo accepted governance** or **named external LLD pattern**. External LLD files not in repository → **Unknown** detail, **Accepted** pattern reference.

---

# Part XVI — Anti-Patterns

| Anti-pattern | Risk | Detection | Remediation |
|--------------|------|-----------|-------------|
| Replay-breaking move history | Corrupt reconstruction | ReplayVerification fail | Immutable episode snapshot |
| Hidden engine evaluations | False learning claims | Lane audit | Measured lane only in Evaluation VO |
| Untracked learning revisions | Governance loss | Missing LearningRecord | Append-only LearningRevision |
| Simulation contamination | Canon corruption | Sim write guard | SimulationNonCanonicalSpec |
| Decision without evidence | Opaque coaching | RecommendationEvidenceSpec | Block publish |
| Outcome without lineage | Invalid claim | ClaimLineageSpec | Reject LOE-011 |
| Rating change without explanation | CB-002 R-2 | SkillObservation audit | Require narrative refs |
| Opaque recommendations | PI-6 violation | evidence_refs check | Buddy message gate |

---

# Part XVII — Findings

## Accepted

- LearningTrace-centered aggregates (CB-005)
- DecisionTrace per ply
- Federation game_import projection (FEDERATION.md, implemented adapter)
- LOE/DOE LearningRecord sovereignty
- Replay determinism with version pins
- Simulation isolation
- CFA interpretive assessment layer
- Stewardship C0–C4 gates

## Candidate

- `TrainingPlan` as first-class aggregate (CDESR demoted — use ImprovementTarget[])
- `ProgressRecord` as materialized view vs on-demand read model
- Physical board / AMR observation adapter (CB-007)

## Unsupported

- Federation export of learning semantics (by design)
- Elo-only skill model (CB-002 R-2)
- Self-certified transformation

## Unknown

- External Domain Profile v1.0 standalone file (CDESR used)
- External MSCI / LLD Readiness Review full text in repo
- 100-year encoding standard

## Architectural Strengths

- Clear sovereignty boundary
- Evidence-first learning chain
- Deterministic replay contract
- Rich observation taxonomy

## Architectural Weaknesses

- Large gap vs legacy `Game.toString()` only runtime (LEF-2C)
- Dual measured/perceived discipline requires rigorous specs

## Architectural Risks

- Simulation promotion misuse
- Lane conflation in implementation
- Federation field creep into sovereign store

## Open Questions

- OQ-LLD-1: Materialize ProgressRecord or compute-only?
- OQ-LLD-2: StudyEpisode vs GameEpisode unified Episode typology?
- OQ-LLD-3: Buddy dialogue as DialogueThread first-class aggregate?

---

# Part XVIII — Canonical Verdict

| # | Question | Verdict | Justification |
|---|----------|---------|---------------|
| 1 | Coherent ChessGuide LLD exists? | **Yes** | Object universe, aggregates, services defined; traces to CDESR/CFA/CB-005 |
| 2 | Learning observability? | **Yes (design)** | LearningRecord, LOE types, ActivityNotLearningPolicy — runtime not yet built |
| 3 | Scientific reconstruction? | **Yes (design)** | EvidenceChain, ReconstructionService, ReplayReport |
| 4 | Simulation? | **Yes (design)** | SimulationContext isolation + SimulationReport |
| 5 | Improvement? | **Yes (design)** | LearningCycle, CFA assessment, revision records |
| 6 | Century-scale continuity? | **Partial** | Principles + version pins defined; 50–100y encoding **Unknown** |
| 7 | Ready for implementation? | **Yes — domain LLD** | Implementation may proceed per aggregate/service; federation not redesigned |

**Overall:** ChessGuide LLD v1.0 is an **implementation-ready domain design** instantiating accepted continuity and observation foundations without modifying federation architecture. Current repository implements **FederationService** slice and legacy episode encoding only — full LLD remains **forward work**, not a blocker to LLD acceptance.

---

## Immutable State Transitions (Summary)

```text
Episode:     draft → active → terminal → sealed
DecisionTrace: open → candidates_frozen → chosen_sealed
LearningRecord: draft → committed (append-only)
SimulationReport: running → completed → [promoted|archived]
TransformationClaim: pending → c4_review → issued|rejected
FederationProjection: episode_sealed → exported (idempotent)
```

---

## Legacy Mapping (Gap Analysis Reference)

| Legacy (`src/data/game.ts`) | LLD target |
|-----------------------------|------------|
| `Game.toString()` | `Episode` legacy encoding → `GameObservation` |
| `GameHistory` | `LearningJourney` append list (pre-aggregate) |
| `rules.replay` | `ReplayService` execution |
| `export_v1.py` | `FederationService.project()` |

---

## Related Documents

| Document | Path |
|----------|------|
| CDESR v1.0 (Domain Profile baseline) | `docs/reviews/Canonical-Domain-End-State-Requirements-Review-v1.0-ChessGuide.md` |
| CFA v1.0 | `docs/governance/federation/CFA-v1.0.md` |
| CB-005 | `docs/governance/chessbuddy/CB-005-learningtrace-product-schema.md` |
| CG-FLL-1E | `docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md` |
| FEDERATION.md | `FEDERATION.md` |
| LEF-2C | `docs/governance/federation/studies/LEF-2C-runtime-observability-study.md` |

---

## Document Status

```text
Accepted LLD Candidate
```
