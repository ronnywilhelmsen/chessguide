# System Chess Competence HLD v1.0

| Field | Value |
|-------|-------|
| **Document ID** | SCC-HLD-001 |
| **Title** | System Chess Competence HLD v1.0 |
| **Version** | 1.0 |
| **Status** | Draft HLD |
| **Date** | 2026-06-17 |
| **Scope** | High-Level Design / architecture target only |
| **Depends on** | [ADR-005](../governance/adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md) Accepted, [ADR-006](../governance/adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md) Accepted, [ADR-007](../governance/adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md) Accepted, [SCCR-001](System-Chess-Competence-Review-v1.0.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Draft HLD / architecture target only.**

This HLD does **not**:

- Implement runtime
- Create schemas
- Change federation export
- Create LLD class files
- Create UML files
- Activate LARIS

Instantiation trace: Philosophy → Governance (ADR-001–007) → **this HLD** → future LLD/OOP/UML → immutable runtime → Creator continuity.

---

## Purpose

ChessGuide must maintain an explicit **System Chess Competence** lane so it can **teach chess** without confusing:

| Lane | Must remain distinct from |
|------|---------------------------|
| Engine measurement | Pedagogy, learner reasoning, corpus truth |
| System understanding | Learner state, mastery |
| Corpus reference | Proof, evidence, claims |
| Buddy explanation | Learner reasoning, stewardship verdict |
| Learner reasoning | Engine PV, Buddy summary |
| Evidence | Claims |
| Claims | Evidence auto-elevation |
| Federation export | Sovereign learning custody |
| Creator continuity | Flattened derived views |

**Core question (ADR-007):** How can ChessGuide know enough chess to teach, use Stockfish as objective reference, support Buddy, and preserve learner autonomy and evidence boundaries?

**Educator principle:** ChessGuide must **not** behave like a calculator that prints Stockfish lines or centipawns. Stockfish is the **referee / reference / validation lane**; ChessGuide's **system chess competence** and **pedagogical policy layer** translate understanding into learner-appropriate explanations.

**HLD answer:** Twelve typed boundaries (including **Pedagogical Policy Layer**) with explicit read/write rules, immutable engine snapshots, append-only learner records, and lossy federation projection — traceable to future LLD/OOP/UML.

---

## Philosophical foundation

| Principle | HLD consequence |
|-----------|-----------------|
| Truth ≠ pedagogy | Engine-best ≠ learning-best; separate classification roles |
| Measurement ≠ understanding | `EngineAnalysisSnapshot` ≠ `DecisionTrace` |
| Evidence ≠ claim | EvidenceRecord append path ≠ Claim gate |
| Activity ≠ learning | Playing + CP display ≠ integration |
| Teacher support ≠ learner reasoning | BuddyExplanationDraft ≠ learner `rationale_statement` |
| Continuity requires custody | `ContinuityRecord` preserves source/custody metadata |
| System must know to teach — system knowledge ≠ learner knowledge | `SystemChessCompetenceProfile` ≠ learner state |

---

## Governance foundation

| ADR | HLD boundary |
|-----|--------------|
| ADR-001 | Episode / Learner Custody |
| ADR-002 | Domain Corpus; no sovereign learner aggregates |
| ADR-003 | EvidenceRecord |
| ADR-004 | Claim / Stewardship |
| ADR-005 | DecisionTrace (`capture_timing`, `trace_source`, `engine_ref`) |
| ADR-006 | Buddy Pedagogy |
| ADR-007 | System Chess Competence + Engine Reference; three competence loops |

### SCCR finding cross-reference (F1–F16)

HLD components and rules trace to [SCCR-001](System-Chess-Competence-Review-v1.0.md) boundary findings:

| SCCR | HLD mapping |
|------|-------------|
| F1 | Engine Reference Boundary (§8) |
| F2 | System Chess Competence Boundary (§7) |
| F3 | Domain Corpus Boundary (§6) |
| F4 | Buddy Pedagogy Boundary (§9) |
| F5 | DecisionTrace Boundary (§3) |
| F6 | EvidenceRecord / Claim boundaries (§4–5) |
| F7 | Federation Export Boundary (§10) |
| F8 | This HLD document |
| F9 | Creator Continuity Serving Boundary (§11) |
| F10 | Full component model (§12 boundaries) |
| F11 | Pedagogical Policy Layer (§12) |
| F12 | `PedagogicalMoveClassifier`, `LearningBestMovePolicy`; P11 |
| F13 | `LearnerContextProjection`, `SkillBandMoveModel`; P13 |
| F14 | Buddy self-explanation / error-pruning (§9) |
| F15 | Reserved adaptive training lane (§ future) |
| F16 | Self-play / RL research lane — not MVP |

---

## HLD principles

| ID | Principle |
|----|-----------|
| **P1** | Separate competence lanes (Human Learning, System Competence, Engine Reference) |
| **P2** | Engine reference never writes learner evidence directly |
| **P3** | System chess competence never becomes learner state |
| **P4** | Buddy may explain, prompt, compare — not certify |
| **P5** | Corpus references are curated domain pointers, not proof |
| **P6** | All cross-boundary transfers are typed |
| **P7** | Long-horizon records are immutable or append-only |
| **P8** | Federation export is intentionally lossy |
| **P9** | Creator serves continuity without flattening custody |
| **P10** | HLD traceable to future LLD/OOP/UML (ADR-007 D7–D8) |
| **P11** | Complexity-aware pedagogy separates engine-best from learning-best |
| **P12** | Engine reveal timing is a pedagogical policy decision and should often be delayed until after learner self-explanation in training/review mode |
| **P13** | Learner-context projections are derived views, not sovereign learner state |

---

## HLD component model

### 1. Learner Custody Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Sovereign learner-owned longitudinal container |
| **Inputs** | Actor identity, custody policy |
| **Outputs** | Session/Episode references under learner ownership |
| **May read** | Own episodes, own traces (policy-gated) |
| **Must not write** | System competence profiles; engine snapshots as learner state |
| **Future LLD** | `LearningJourney`, `LearnerId` ([ChessGuide-LLD-v1.0](ChessGuide-LLD-v1.0.md)) |
| **ADRs** | ADR-001, ADR-002 |

### 2. Episode / MoveRecord Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Terminal game/exercise facts — what happened |
| **Inputs** | Moves, result, players, timestamps |
| **Outputs** | `MoveRecord`, terminal episode artifact |
| **May read** | Rules engine legality |
| **Must not write** | Reasoning, evidence, claims |
| **Future LLD** | `Episode`, `ChessSignal`, `Position` |
| **ADRs** | ADR-001 |

**Runtime precedent:** `Game.log`, `Game.toString()` — legacy thin encoding.

### 3. DecisionTrace Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Per-ply learner reasoning under custody |
| **Inputs** | Learner statement, optional Buddy prompt ref, optional `engine_ref` |
| **Outputs** | Append-only DecisionTrace with `capture_timing` + `trace_source` |
| **May read** | Episode context, position ref |
| **Must not write** | Claims; federation export |
| **Future LLD** | `DecisionTrace` aggregate |
| **ADRs** | ADR-005 |

### 4. EvidenceRecord Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | LOE/DOE observed/demonstrated evidence |
| **Inputs** | Observation events, `evidence_refs[]`, optional DecisionTrace ref |
| **Outputs** | Append-only EvidenceRecord |
| **May read** | DecisionTrace, corpus_ref, episode anchors |
| **Must not write** | Claims without stewardship path |
| **Future LLD** | `LearningRecord` |
| **ADRs** | ADR-003, ADR-004 |

### 5. Claim / Stewardship Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Hypothesis evaluation gate (C0–C4) |
| **Inputs** | Claim proposal, evidence lineage |
| **Outputs** | Verdict append history |
| **May read** | EvidenceRecords, DecisionTrace refs |
| **Must not write** | Evidence content; learner reasoning |
| **Future LLD** | `TransformationClaim`, `EvidenceChain` |
| **ADRs** | ADR-004 |

### 6. Domain Corpus Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Curated `corpus_ref` registry and content |
| **Inputs** | Steward curation, CCCR taxonomy |
| **Outputs** | Versioned registry entries |
| **May read** | Opening tree wrap targets, review proposals |
| **Must not write** | Learner evidence; mastery labels |
| **Future LLD** | Corpus registry service (ADR TBD) |
| **ADRs** | ADR-002, ADR-007 D13 |

**Runtime precedent:** `openings.ts` — runtime corpus, not governed registry.

### 7. System Chess Competence Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | System's governed chess understanding lane |
| **Inputs** | Position, optional engine snapshot, corpus context, learner level policy |
| **Outputs** | `PositionConceptMap`, `PedagogicalMoveClassification`, learning focus candidates |
| **May read** | Engine snapshots (reference input), corpus_ref |
| **Must not write** | Learner state; claims; federation export |
| **Future LLD** | `SystemChessCompetenceService`, `SystemChessCompetenceProfile` |
| **ADRs** | ADR-007 D2 |

### 8. Engine Reference Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Immutable Stockfish/engine measurement |
| **Inputs** | `position_ref`, `EngineReferenceProfile` |
| **Outputs** | `EngineAnalysisSnapshot`, PV, CP/mate, limitations |
| **May read** | FEN / position state |
| **Must not write** | Learner evidence; corpus truth; Buddy authority |
| **Future LLD** | `EngineReferenceService` |
| **ADRs** | ADR-007 D3 |

**Runtime precedent:** `helper.ts` — ephemeral; must evolve to immutable snapshots.

### 9. Buddy Pedagogy Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Pedagogical mentor interactions |
| **Inputs** | Episode context, system competence outputs, corpus_ref, optional engine snapshot, optional DecisionTrace |
| **Outputs** | Prompts, `BuddyExplanationDraft`, evidence candidates, reflection invites |
| **May read** | All above (typed) |
| **Must not write** | Claims; C4; LOE-011; mastery; federation export; learner rationale without capture |
| **Future LLD** | `BuddyExplanationService` |
| **ADRs** | ADR-006 |

### 10. Federation Export Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Lossy `ObservationRecord` projection |
| **Inputs** | Terminal completed-game Episode |
| **Outputs** | `chessguide/game_import/1` payload only |
| **May read** | Move log, result, actor/game continuity id |
| **Must not write** | N/A (export is projection) |
| **Must not export** | Engine, Buddy, DecisionTrace, evidence, claims, learner state |
| **Future LLD** | `FederationObservationProjection`, `ExportSovereigntyPolicy` |
| **ADRs** | ADR-002 D8, ADR-007 D14, FEDERATION.md |

### 11. Creator Continuity Serving Boundary

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Long-horizon record serving without custody flattening |
| **Inputs** | Typed continuity records from ChessGuide |
| **Outputs** | Replayable projections; **not** sovereign evidence elevation |
| **May read** | `ContinuityRecord` lineage |
| **Must not write** | Flatten custody; bypass export gate |
| **Future LLD** | `ContinuityRecord` (ADR-007 D7) |
| **ADRs** | ADR-007 D10; CG-DEP-001; FGI-001 |

**Repository gap:** Operational Creator serving spec **not present** in ChessGuide repo.

### 12. Pedagogical Policy Layer

| Aspect | Detail |
|--------|--------|
| **Responsibility** | Translate system chess competence, corpus references, optional engine snapshots, learner context projections, and puzzle/motif information into learner-appropriate prompts and explanations |
| **Inputs** | `PositionConceptMap`, `CandidateMoveAssessment`, `EngineAnalysisSnapshot`, `corpus_ref[]`, DecisionTrace context, learner level/mode as **derived context**, puzzle/motif tags |
| **Outputs** | `BuddyExplanationDraft`, `LearningFocusCandidate`, `TeachingOpportunity`, `HintSequence`, `PuzzleSelectionCandidate` |
| **May read** | System Competence outputs, Engine Reference snapshots, Corpus, Buddy policy config, `LearnerContextProjection` (derived) |
| **Must not write** | Claims; mastery; learner reasoning; sovereign learner state; federation export |
| **Must not** | Treat engine-best as learning-best |
| **Future LLD** | Pedagogical policy orchestration above `BuddyExplanationService` |
| **ADRs** | ADR-006, ADR-007 D4, SCCR F11 |

**Design rule — engine reveal timing (P12; SCCR F14):** In training/review mode, engine output should **often be delayed** until after learner self-explanation. This preserves learner reasoning, supports DecisionTrace capture, and prevents Stockfish from becoming the teacher (ADR-006 D2).

**Design rule — no digital twin (P13; SCCR F13):** Do **not** call a learner model a **"digital twin"** in accepted architecture until a future custody ADR defines: what is stored, who owns it, how it is revoked, how it is audited, how it differs from derived views, and how it avoids federation export.

---

## Component interaction diagram

```text
Learner Move
    │
    ▼
Episode / MoveRecord ─────────────────────────────────────────────┐
    │                                                              │
    ├──► (optional) Engine Reference ──► EngineAnalysisSnapshot  │
    │              │                         │                     │
    │              │                         ▼                     │
    │              └──────────────► System Chess Competence          │
    │                                    │                         │
    │                                    ▼                         │
    │                         Pedagogical Policy Layer             │
    │                                    │                         │
    │                                    ▼                         │
    │                              Buddy Pedagogy                  │
    │                                    │                         │
    │                    ┌───────────────┼───────────────┐         │
    │                    ▼               ▼               ▼         │
    │            BuddyExplanation   DecisionTrace    Evidence      │
    │                 Draft          (optional)      Candidate     │
    │                    │               │               │         │
    │                    └───────────────┴───────────────┘         │
    │                                    │                         │
    │                                    ▼                         │
    │                          EvidenceRecord (append)             │
    │                                    │                         │
    │                                    ▼                         │
    │                          Claim / Stewardship (gate)          │
    │                                    │                         │
    ▼                                    ▼                         │
Creator Continuity ◄── ContinuityRecord ─┘                         │
    │                                                              │
    ▼                                                              │
Federation Export ◄── terminal completed-game slice ONLY ──────────┘

Rules on diagram:
  • EngineReference does NOT write EvidenceRecord.
  • Buddy does NOT write Claim.
  • Federation does NOT export engine / Buddy / DecisionTrace / evidence / claims.
  • Creator does NOT flatten custody boundaries.
  • System Chess Competence does NOT write learner state.
  • Pedagogical Policy Layer does NOT equate engine-best with learning-best.
  • LearnerContextProjection is derived — NOT sovereign learner state.
```

---

## System Chess Competence Boundary (detail)

**System Chess Competence** is the system's governed ability to:

- Understand board state (legality via rules engine)
- Evaluate move legality
- Identify tactical motifs, strategic features, endgame/opening patterns
- Map positions to `corpus_ref`
- Compare learner move with engine alternatives
- Classify learning opportunities (`PedagogicalMoveClassification`)
- Support Buddy explanation frames
- Preserve versioned competence via `SystemChessCompetenceProfile`

**Not:**

| Not | Reason |
|-----|--------|
| Learner state | ADR-002 |
| Learner evidence | ADR-003 custody |
| Engine output itself | Measurement lane |
| Claim / mastery | ADR-004 |
| Federation export | FEDERATION.md |

**"Right move" semantics (ADR-007 D4; SCCR F12)** — HLD preserves **six** classification roles:

1. Engine-best move
2. Human-understandable move
3. **Low-complexity safe move** (complexity-aware)
4. Learning-best move
5. Pedagogically best explanation
6. Claim-relevant evidence

`PedagogicalMoveClassifier` and `LearningBestMovePolicy` must emit separate fields — never a single collapsed "correct" flag. Engine-best → learning-best requires explicit policy, not default.

---

## Engine Reference Boundary (detail)

**Engine Reference** provides **immutable measurement snapshots**.

| Inputs | Outputs |
|--------|---------|
| `position_ref` | `EngineAnalysisSnapshot` |
| `EngineReferenceProfile` (engine name, version, depth/time policy, skill, hash, multipv) | `best_move`, `principal_variations[]`, `cp_score`, `mate_score`, `depth`, `nodes`, `limitations` |

**Must not:**

- Write learner evidence
- Become corpus truth
- Become Buddy authority
- Become federation export
- Overwrite learner reasoning

**Runtime gap:** Current `helper.ts` uses Skill Level 20, `movetime 1000`, no snapshot ID, no profile pin — MVP runtime must attach `EngineReferenceProfile` to each analysis.

---

## Buddy Pedagogy Boundary (detail)

**Buddy reads:**

- Episode context
- `PositionConceptMap` / `PedagogicalMoveClassification`
- `corpus_ref[]`
- Optional `EngineAnalysisSnapshot` (via `engine_ref`) — **often delayed** in training/review (P12)
- Optional DecisionTrace context
- Optional `LearnerContextProjection` (derived — not sovereign state)
- Optional `TeachingOpportunity` / `MisconceptionPattern` from Pedagogical Policy Layer

**Buddy outputs:**

- Prompts (intervention ladder L0–L7, ADR-006 D3)
- **Pre-engine self-explanation** invites (SCCR F14; P12)
- Progressive hints, "look again" prompts, candidate comparison
- `BuddyExplanationDraft` (`source_refs[]`, `limitations`, `forbidden_claims[]`)
- Misconception diagnosis and reflective correction frames
- Reflection invites
- Evidence **candidates** (not auto-EvidenceRecords)
- DecisionTrace capture support (`trace_source` discipline)

**Buddy must not:**

- Impersonate learner reasoning (`trace_source` discipline)
- Act as steward; issue C4 or LOE-011
- Create mastery labels
- Export analysis to federation

---

## Corpus Boundary (detail)

**Current state:** `openings.ts` / `openingdata.ts` = runtime corpus-like material.

**Future corpus registry must include:**

| Field | Purpose |
|-------|---------|
| `corpus_ref` ID | Stable pointer (ADR-002) |
| `version` | Immutable release pin |
| `title` | Human label |
| `concept_type` | tactic / principle / opening / endgame / decision_frame |
| `source_boundary` | hand_curated / opening_tree_derived / etc. (CCCR) |
| `relation` | Links to competence profile supported patterns |

**Rule:** Engine may suggest tactic exists; `corpus_ref` assignment is system/corpus interpretation — not raw engine truth (ADR-007 D13).

---

## DecisionTrace / Evidence / Claim Boundary (detail)

```text
MoveRecord          → what happened (Episode)
DecisionTrace       → what learner thought / reasoned (custody)
EvidenceRecord      → observed / demonstrated learning evidence
Claim               → hypothesis that integration/transformation occurred
Stewardship         → evaluates claim against evidence lineage (C0–C4)
Engine / Buddy      → may support context; NEVER replace learner evidence
```

| Transition | Rule |
|------------|------|
| Engine snapshot → EvidenceRecord | **Forbidden** without observation/demonstration pair |
| Buddy draft → DecisionTrace | Requires learner confirmation when paraphrasing |
| Engine agreement → DOE | **Forbidden** by itself |
| Evidence → Claim | Requires stewardship gate |

---

## Creator / Continuity Boundary (detail)

Creator/server continuity must preserve:

- `record_type`, `source_boundary`, `custody_boundary`
- Timestamps, immutable payload hashes
- `EngineReferenceProfile` version pins
- `corpus_ref` registry version pins
- `SystemChessCompetenceProfile` version pins
- Lineage references (`prior_record_refs[]`)
- Distinction between raw events and derived views

**Real-time → 100-year continuity:**

| Horizon | Requirement |
|---------|-------------|
| Real-time | Typed bounded events |
| Short-term | Episode review, trace candidates, derived Buddy views |
| Long-term | Records interpretable across engine/corpus version changes |
| 100-year | Semantic boundary preserved — not only bytes |

**Repository gap:** FGI-001 documents Creator OAT/CTP as **planned** — ChessGuide HLD defines required semantics; operational integration is external.

---

## Future adaptive training lane (reserved — not MVP)

**SCCR F15 / F16:** Spaced repetition, puzzle corpus, and self-play/RL are **future** lanes — not implemented in this HLD task.

| Reserved component | Role |
|--------------------|------|
| `AdaptiveTrainingSelector` | Future adaptive training orchestration |
| `PuzzleCorpusBoundary` | Puzzle content under corpus + evidence boundaries |
| `SpacedReviewPolicy` | Schedule review candidates — does not prove learning |
| `MotifWeaknessProjection` | Derived motif focus — not learner state |
| Self-play / RL skill-band models | **Research lane only** — must not contaminate custody or become opaque authority |

---

## Future OOP / LLD traceability

Design targets only — **not implemented**.

### `EngineReferenceProfile`

| Aspect | Detail |
|--------|--------|
| **Role** | Immutable profile of how analysis was produced |
| **Key fields** | `engine_name`, `version`, `depth_policy`, `time_policy`, `skill_level`, `hash`, `multipv`, `created_at` |
| **Boundary** | Engine Reference |
| **Must not** | Mutate after creation |

### `EngineAnalysisSnapshot`

| Aspect | Detail |
|--------|--------|
| **Role** | Immutable engine measurement object |
| **Key fields** | `snapshot_id`, `position_ref`, `profile_id`, `best_move`, `principal_variations[]`, `cp_score`, `mate_score`, `depth`, `limitations` |
| **Boundary** | Engine Reference |
| **Must not** | Become learner evidence by itself |

### `PrincipalVariation`

| **Role** | Engine line candidate (`pv_index`, `moves[]`, scores) |
| **Must not** | Become learner `rationale_statement` |

### `CandidateMoveAssessment`

| **Role** | Comparison object (`move_ref`, `source`, `corpus_refs[]`, `risk_flags[]`) |
| **Must not** | Substitute for learner rationale |

### `SystemChessCompetenceProfile`

| **Role** | Declared system competence at a point in time |
| **Key fields** | `version`, `corpus_registry_version`, `supported_patterns[]`, `explanation_policy` |
| **Must not** | Be written into learner state |

### `PositionConceptMap`

| **Role** | System concept mapping for a position |
| **Key fields** | `corpus_refs[]`, `motifs[]`, `strategic_features[]`, `limitations` |
| **Must not** | Be learner evidence |

### `PedagogicalMoveClassification`

| **Role** | Separates engine-best / human-understandable / learning-opportunity |
| **Must not** | Collapse ADR-007 D4 semantics |

### `PedagogicalMoveClassifier`

| **Methods** | `classify(position_ref, learner_move, engine_snapshot?, corpus_context?, learner_level?, mode?)` |
| **Must not** | Write claims or learner state |

### `EngineReferenceService`

| **Methods** | `analyzePosition(position_ref, profile) -> EngineAnalysisSnapshot` |
| **Must not** | Write EvidenceRecord or DecisionTrace |

### `SystemChessCompetenceService`

| **Methods** | `mapPositionToConcepts(position_ref, corpus_context?, engine_snapshot?) -> PositionConceptMap` |
| **Must not** | Export to federation |

### `BuddyExplanationService`

| **Methods** | `explainMove(...) -> BuddyExplanationDraft` |
| **Must not** | Issue C4, LOE-011, mastery |

### `BuddyExplanationDraft`

| **Role** | Pedagogical output with `source_refs[]`, `engine_ref?`, `forbidden_claims[]` |
| **Must not** | Be learner evidence unless learner responds |

### `LearningBestMovePolicy`

| **Methods** | `proposeLearningFocus(...) -> LearningFocusCandidate` |
| **Must not** | Equate learning-best with engine-best |

### `ContinuityRecord`

| **Role** | Long-horizon serving unit |
| **Key fields** | `record_id`, `record_type`, `source_boundary`, `custody_boundary`, `immutable_payload_hash`, `prior_record_refs[]` |
| **Must not** | Flatten custody on serve |

### `ExportSovereigntyPolicy`

| **Role** | Enforce federation withholding |
| **Must not** | Allow engine/Buddy/trace leakage |

### `TeachingOpportunity`

| Aspect | Detail |
|--------|--------|
| **Role** | Derived pedagogical opportunity — not evidence or claim |
| **Key fields** | `opportunity_id`, `position_ref`, `trigger_type`, `learner_move_ref?`, `engine_snapshot_ref?`, `concept_refs[]`, `motif_tags[]`, `complexity_delta?`, `suggested_prompt`, `limitations` |
| **Boundary** | Pedagogical Policy Layer |
| **Must not** | Become EvidenceRecord or Claim by itself |

### `LearnerContextProjection`

| Aspect | Detail |
|--------|--------|
| **Role** | Derived pedagogical view — **not** sovereign learner state unless future ADR defines custody |
| **Key fields** | `projection_id`, `source_refs[]`, `skill_band?`, `recent_motif_errors?`, `calculation_depth_hint?`, `uncertainty_notes`, `custody_boundary`, `limitations` |
| **Boundary** | Pedagogical Policy Layer |
| **Must not** | Persist as digital twin; export to federation |

### `SkillBandMoveModel`

| Aspect | Detail |
|--------|--------|
| **Role** | Optional future model for likely human moves at skill bands |
| **Key fields** | `model_id`, `skill_band`, `training_source`, `version`, `supported_contexts[]`, `limitations` |
| **Boundary** | System Competence / research lane |
| **Must not** | Become learner evidence or identity |

### `PedagogicalFitModel`

| **Role** | Optional fit between position complexity and learner band (derived) |
| **Must not** | Write learner state |

### `BlindSpotCandidate`

| **Role** | Derived candidate motif/line the learner may overlook |
| **Must not** | Auto-create EvidenceRecord |

### `MisconceptionPattern`

| Aspect | Detail |
|--------|--------|
| **Role** | Supports Buddy error-pruning prompts |
| **Key fields** | `pattern_id`, `motif_ref?`, `typical_move`, `hidden_resource`, `explanation_frame`, `recommended_prompt`, `limitations` |
| **Boundary** | Pedagogical Policy Layer |
| **Must not** | Impersonate learner reasoning |

### `PuzzleCorpusSelector`

| **Methods** | `selectPuzzles(motif_refs[], learner_context_projection?, spacing_policy?, difficulty_band?) -> PuzzleSelectionCandidate[]` |
| **Role** | Future adaptive training — SCCR F15 |
| **Must not** | Bypass evidence/custody boundaries |

### `SpacedReviewPolicy`

| **Methods** | `scheduleReview(motif_ref, evidence_history?, learner_context_projection?) -> ReviewScheduleCandidate` |
| **Role** | Future spaced repetition — does not prove learning |
| **Must not** | Create mastery labels |

### `HintSequence`

| **Role** | Ordered progressive hints from Pedagogical Policy Layer |
| **Must not** | Collapse to engine PV dump |

---

## Immutable state transition model

| # | State | Trigger | Custody | Immutable? | Allowed next |
|---|-------|---------|---------|------------|--------------|
| 1 | **PositionObserved** | Board state available | Episode | Derived | MoveRecorded, EngineAnalysisSnapshotCreated |
| 2 | **MoveRecorded** | Learner/bot move applied | Episode | Append | PositionObserved, EngineAnalysisSnapshotCreated |
| 3 | **EngineAnalysisSnapshotCreated** | Engine analysis completes | Engine Reference | **Immutable** | PositionConceptMapped |
| 4 | **PositionConceptMapped** | System competence maps position | System Competence | **Immutable** versioned | TeachingOpportunityIdentified, BuddyExplanationDrafted |
| 4a | **TeachingOpportunityIdentified** | Policy layer identifies teachable moment | Pedagogical Policy | Derived | LearnerSelfExplanationPrompted |
| 4b | **LearnerSelfExplanationPrompted** | Buddy asks before engine reveal | Buddy Pedagogy | Event | LearnerSelfExplanationCaptured |
| 4c | **LearnerSelfExplanationCaptured** | Learner states reasoning | Learner | Append-only | LearnerDecisionTraceCaptured, MisconceptionPatternMatched |
| 4d | **MisconceptionPatternMatched** | Policy matches error pattern | Pedagogical Policy | Derived | BuddyExplanationDrafted |
| 5 | **BuddyExplanationDrafted** | Buddy generates explanation | Buddy Pedagogy | Draft (not evidence) | LearnerDecisionTraceCaptured |
| 6 | **LearnerDecisionTraceCaptured** | Learner reasoning recorded | Learner | Append-only | EvidenceCandidateIdentified |
| 7 | **EvidenceCandidateIdentified** | Observation/demonstration noted | Learner/Steward | Derived | EvidenceRecordAppended |
| 8 | **EvidenceRecordAppended** | LOE/DOE recorded | Learner | Append-only | ClaimProposed |
| 9 | **ClaimProposed** | Integration hypothesis submitted | Steward path | Append | StewardshipVerdictAppended |
| 10 | **StewardshipVerdictAppended** | C0–C4 complete | Steward | Append-only | ContinuityRecordServed |
| 11 | **ContinuityRecordServed** | Creator/long-horizon serve | Creator | Immutable serve | PuzzleSelectionCandidateGenerated, SpacedReviewCandidateGenerated |
| 11a | **PuzzleSelectionCandidateGenerated** | Adaptive puzzle candidate (future) | Pedagogical Policy | Derived | — |
| 11b | **SpacedReviewCandidateGenerated** | Spaced review schedule candidate (future) | Pedagogical Policy | Derived | — |
| 12 | **FederationObservationExported** | Terminal game complete | Federation | Lossy projection | — |

### Forbidden transitions

| Forbidden | Reason |
|-----------|--------|
| EngineAnalysisSnapshot → EvidenceRecord without observation | ADR-003, ADR-007 D12 |
| BuddyExplanationDraft → LearnerDecisionTrace without learner confirmation | ADR-005 `trace_source` |
| PositionConceptMap → LearnerState | ADR-002, ADR-007 D2 |
| EngineAnalysisSnapshot → FederationObservationExported | ADR-007 D14 |
| ClaimProposed → StewardshipVerdict without C0–C4 | ADR-004 |
| Derived view → sovereign evidence | Custody flattening prohibited |
| TeachingOpportunityIdentified → EvidenceRecord without learner/steward observation | ADR-003 |
| LearnerContextProjection → sovereign learner state without future ADR | ADR-002; P13; SCCR F13 |
| SkillBandMoveModel → learner identity | SCCR F13 |
| Puzzle solved → mastery claim without ADR-004 stewardship | ADR-004; SCCR F15 |
| Engine best move → learning-best move without PedagogicalMoveClassifier / LearningBestMovePolicy | SCCR F12; P11 |

---

## HLD package boundaries for future UML

Future LLD **must** produce (artifacts not created in this task):

| Diagram | Scope |
|---------|-------|
| **Component diagram** | All **12** HLD boundaries + Corpus Registry + reserved adaptive training lane |
| **Class diagram** | EngineReferenceProfile, EngineAnalysisSnapshot, PositionConceptMap, PedagogicalMoveClassification, BuddyExplanationDraft, DecisionTrace, EvidenceRecord, Claim |
| **Sequence diagram** | Real-time move → optional engine → Buddy → learner trace → evidence → claim |
| **State transition diagram** | States 1–12 above |
| **Deployment / Creator continuity diagram** | ChessGuide runtime ↔ Creator serving ↔ federation export |

---

## HLD acceptance checklist

- [ ] Preserves ADR-001 Episode custody
- [ ] Preserves ADR-002 corpus separation
- [ ] Preserves ADR-003 evidence semantics
- [ ] Preserves ADR-004 claim gate
- [ ] Preserves ADR-005 DecisionTrace semantics
- [ ] Preserves ADR-006 Buddy boundaries
- [ ] Preserves ADR-007 engine/system competence boundary
- [ ] Avoids runtime implementation in this document
- [ ] Avoids federation widening
- [ ] Preserves Creator continuity semantics (as target)
- [ ] Every future LLD class traceable to ADR/HLD boundary
- [ ] Pedagogical Policy Layer separates teaching from engine measurement (P11; SCCR F11)
- [ ] No digital twin learner model without future custody ADR (P13; SCCR F13)
- [ ] All SCCR F1–F16 references in this document resolve to defined findings

---

## Pedagogical evidence inputs (not runtime doctrine)

Learning-science themes **inform** design. They do **not** create EvidenceRecords, Claims, mastery, or learner state by themselves.

| Theme | HLD relevance | Status |
|-------|---------------|--------|
| Practice testing / repeated problem solving | `PuzzleCorpusSelector`, SCCR F15 | [INSPIRATION — UNVERIFIED] |
| Distributed practice / spaced repetition | `SpacedReviewPolicy` | [INSPIRATION — UNVERIFIED] |
| Self-explanation | Pre-engine prompts, DecisionTrace (P12, SCCR F14) | [DOCTRINE-ALIGNED via ADR-006] |
| Interleaving / varied practice | Puzzle/motif selection diversity | [INSPIRATION — UNVERIFIED] |
| Error pruning through dialogue | `MisconceptionPattern`, Buddy correction | [INSPIRATION — UNVERIFIED] |
| Einstellung-style bias | Comfortable-but-suboptimal move framing | [INSPIRATION — UNVERIFIED] |

**Source-handling rule:** Do not cite unverified external references as factual claims. Admit through review/ADR process (SCCR-OQ-17 / HLD-OQ-17).

### External references provided for future verification

**Status:** [UNVERIFIED EXTERNAL INPUT] — not repository evidence.

---

## MVP architecture slice

Future implementation order — **not implemented in this task**.

### MVP-1 — Measurement + competence + pedagogical policy + Buddy draft

- `EngineReferenceProfile`
- `EngineAnalysisSnapshot`
- `PositionConceptMap`
- `PedagogicalMoveClassification` (complexity-aware)
- `TeachingOpportunity`
- `BuddyExplanationDraft`
- `LearnerContextProjection` (ephemeral/derived only in MVP)

**Replaces:** ephemeral `helper.ts` CP/PV as governance-aligned snapshots.

### MVP-2 — Learner evidence path

- DecisionTrace storage
- EvidenceRecord candidate capture
- Corpus Reference Registry

### MVP-3 — Continuity + design package

- Creator continuity serving integration (external)
- HLD-to-LLD UML package
- Runtime integration under `ExportSovereigntyPolicy`

### MVP-4 — Adaptive training (future — not this task)

- `PuzzleCorpusSelector`
- `SpacedReviewPolicy`
- `AdaptiveTrainingSelector`
- Self-play / RL research evaluation only (SCCR F16)

---

## Open questions

| ID | Question | Disposition |
|----|----------|-------------|
| **HLD-OQ-1** | Minimum system chess competence for first runtime slice? | **Open** — MVP-1 scope; CCCR minimum refs |
| **HLD-OQ-2** | Canonical engine profile for review? | **Open** — document Stockfish version + movetime/depth policy |
| **HLD-OQ-3** | Live play: hide or delay engine output? | **Open** — ADR-006 intervention ladder; friendly vs review mode |
| **HLD-OQ-4** | Learner level without learner state aggregate? | **Open** — session/ephemeral policy VO, not persisted frontier |
| **HLD-OQ-5** | First `corpus_ref` registry format? | **Open** — Markdown/YAML in `docs/governance/corpus/` per CCCR |
| **HLD-OQ-6** | What should Creator serve first? | **Open** — external; `ContinuityRecord` replay |
| **HLD-OQ-7** | Immutable payload format? | **Open** — hash + JSON canonical encoding TBD in storage ADR |
| **HLD-OQ-8** | State transitions needing formal tests first? | **Open** — forbidden transitions + export sovereignty |
| **HLD-OQ-9** | HLD → LLD without scope creep? | **Open** — one service per boundary; no merged aggregates |
| **HLD-OQ-10** | `SystemChessCompetenceProfile` v1 contents? | **Open** — CCCR MVP patterns + opening wrap refs |
| **HLD-OQ-11** | Should ChessGuide later support skill-band human move models? | **Open** — `SkillBandMoveModel`; SCCR F13 / SCCR-OQ-11 |
| **HLD-OQ-12** | Can self-play / RL models be system competence without opaque authority? | **Open** — SCCR F16 research lane (SCCR-OQ-12) |
| **HLD-OQ-13** | How measure complexity delta without unverified platform metrics? | **Open** — SCCR F12; verification required (SCCR-OQ-13) |
| **HLD-OQ-14** | Governance boundary for adaptive puzzle selection? | **Open** — SCCR F15; evidence/custody preserved (SCCR-OQ-14) |
| **HLD-OQ-15** | When hide, delay, or reveal engine output? | **Open** — P12; SCCR F14/F15 context (SCCR-OQ-15) |
| **HLD-OQ-16** | Represent Einstellung / comfortable suboptimal moves pedagogically? | **Open** — `MisconceptionPattern`; SCCR F14 (SCCR-OQ-16) |
| **HLD-OQ-17** | Admit external learning science into doctrine — what review process? | **Open** — paired with SCCR-OQ-17 |

---

## Related documents

### Governance / ADRs

- [ADR-001 — LearningTrace Episode Schema v1](../governance/adr/ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](../governance/adr/ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](../governance/adr/ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](../governance/adr/ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [ADR-005 — DecisionTrace / Per-Ply Reasoning v1](../governance/adr/ADR-005-decisiontrace-per-ply-reasoning-v1-draft.md)
- [ADR-006 — Buddy Pedagogy and Reference Use v1](../governance/adr/ADR-006-buddy-pedagogy-and-reference-use-v1-draft.md)
- [ADR-007 — Stockfish Reference and System Chess Competence Boundary v1](../governance/adr/ADR-007-stockfish-reference-and-system-chess-competence-boundary-v1-draft.md)

### Reviews / architecture

- [System Chess Competence Review v1.0](System-Chess-Competence-Review-v1.0.md)
- [ChessGuide Corpus Content Review v1.0](../reviews/ChessGuide-Corpus-Content-Review-v1.0.md)
- [ChessGuide LLD v1.0](ChessGuide-LLD-v1.0.md)

### Doctrine / federation

- [CB-004 — Buddy Persona & Product Principles](../governance/chessbuddy/CB-004-buddy-persona-and-product-principles.md)
- [CB-005 — LearningTrace Product Schema](../governance/chessbuddy/CB-005-learningtrace-product-schema.md)
- [CG-FLL-002 — Learning Semantics](../governance/chessguide/CG-FLL-002-learning-semantics.md)
- [CG-DEP-001 — Federation Dependency Analysis](../governance/chessguide/CG-DEP-001-federation-dependency-analysis.md)
- [FGI-001 — Creator](../governance/federation/grounding/FGI-001-creator.md)
- [FEDERATION.md](../../FEDERATION.md)

---

## Governance boundary statement

**SCC-HLD-001 does not modify** runtime, tests, federation export, schemas, implementation files, **accepted ADRs**, or **LARIS activation**. It provides architecture targets traceable to ADR-007 for future LLD/OOP/UML and runtime work.
