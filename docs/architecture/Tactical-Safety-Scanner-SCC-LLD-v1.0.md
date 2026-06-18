# Tactical Safety Scanner / System Chess Competence LLD v1.0

| Field | Value |
|-------|-------|
| **Document ID** | TSS-SCC-LLD-001 |
| **Title** | Tactical Safety Scanner / System Chess Competence LLD v1.0 |
| **Version** | 1.0 |
| **Status** | Draft LLD |
| **Date** | 2026-06-18 |
| **Scope** | Tactical Safety Scanner and System Chess Competence LLD / OOP / UML only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](../reviews/Strategic-Tactical-Roadmap-Review-v1.0.md), [CGSR-002](../reviews/ChessGuide-Strategic-Review-v2.0.md), [KG-001](./Knowledge-Graph-v1.0.md), [LG-001](./Learner-Graph-v1.0.md), [LF-001](./Learning-Frontier-v1.0.md), SCCR-001, SCC-HLD-001, [ChessGuide-LLD-v1.0](./ChessGuide-LLD-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |
| **UML** | [Tactical-Safety-Scanner-SCC-UML-v1.0.puml](./uml/Tactical-Safety-Scanner-SCC-UML-v1.0.puml) |

---

## 1. Status

- TSS-SCC-LLD-001 is a **Draft LLD**.
- It is **LLD / OOP / UML only**.
- It does **not** implement runtime.
- It does **not** create schemas.
- It does **not** modify federation export.
- It does **not** activate Buddy or LARIS.
- It depends on **KG-001, LG-001, LF-001, SCC-HLD-001, STRR-001, CGSR-002, and ACG-001**.

---

## 2. Executive summary

- This is the **first high-risk lowering step** after the strategic/architecture reviews.
- It converts **safety-first chess reasoning** into a typed object design.
- It preserves all boundaries: learner, KG, Learner Graph, Frontier, SCC, engine, Buddy, Creator, federation.
- It defines **classes and UML** but does **not implement** them.
- Runtime comes later in **PR #27+** or a specifically authorized implementation wave.

---

## 3. Strategic question

**What typed safety-first chess competence subsystem must exist before Buddy/LARIS activation and before runtime scanner implementation?**

A **Tactical Safety Scanner / SCC design** with explicit input/output objects, scan priorities, candidate-move logic, engine reference boundaries, Buddy explanation boundaries, learner-state isolation, Creator replay hooks, and federation withholding invariants.

---

## 4. Scope

- scan input objects
- scan result objects
- safety priorities
- CCT scanner
- mate-threat scanner
- king-safety scanner
- hanging-piece scanner
- candidate move scanner
- move classification
- engine reference snapshot boundary
- Buddy explanation draft policy boundary
- state transitions and domain events
- UML class diagram

---

## 5. Non-goals

- no runtime code
- no engine integration code
- no Stockfish call implementation
- no UI
- no Buddy activation
- no LARIS activation
- no learner graph mutation
- no Learning Frontier mutation
- no federation export widening
- no schemas
- no tests
- no source ingestion
- no dataset ingestion
- no Android/Chrome implementation

---

## 6. Governance foundation

| Source | Relevance | LLD consequence |
|--------|-----------|-----------------|
| **ADR-001** | LearningTrace evidence/custody | TSS results are not LearningTrace |
| **ADR-002** | corpus_ref sovereign reference | KG refs are pointers, not evidence |
| **ADR-003** | evidence records | scan output is not evidence |
| **ADR-004** | stewardship / claims | scan output is not claim/mastery |
| **ADR-005** | DecisionTrace | scan ≠ learner rationale |
| **ADR-006** | Buddy pedagogy | Buddy gets ExplanationDraft, not authority |
| **ADR-007** | Stockfish / SCC boundary | engine is reference, not oracle |
| **ADR-008** | KG / corpus governance | KG refs honour curation/source posture |
| **ACG-001** | architecture continuity | full chain preserved in design |
| **STRR-001** | roadmap controller | TSS is PR #24, before Buddy/LARIS |
| **CGSR-002** | strategic identity | SCC is system-owned lane |
| **KG-001** | domain graph | scanner resolves concept refs read-only |
| **LG-001** | learner-specific derived state | scanner does not mutate Learner Graph |
| **LF-001** | planning read model | scanner does not mutate Frontier |
| **SCC-HLD-001** | system competence HLD | TSS lowers HLD to typed design |
| **FEDERATION.md** | federation withholding | no scan output exported |

---

## 7. Architecture Continuity Gate

| Layer | TSS/SCC interpretation | Boundary | Future consequence |
|-------|------------------------|----------|--------------------|
| Philosophy / learning theory | safety-first human reasoning order | scan ≠ learning | grounds pedagogy ordering |
| Governance / ADR | honours ADR-001–008 | doctrine beats runtime | implementation must obey LLD |
| Review / HLD | lowers SCC-HLD-001 | review ≠ runtime | design gate before code |
| Future LLD / OOP / UML | this document + UML | design ≠ runtime | runtime must preserve signatures |
| Immutable state transitions | scan states + replay metadata | no silent mutation | persisted results immutable later |
| Runtime implementation | none here | runtime instantiates later | PR #27+ guarded waves |
| ChessBuddy / ChessGuide reality sharing | ExplanationDraft to Buddy | Buddy ≠ oracle | Buddy shows uncertainty/warnings |
| Creator continuity | replay metadata required | no flattening | 100-year scan replay |
| Federation boundary | withholding guard | no semantic export | widening needs separate path |

---

## Vertical Architecture Continuity Trace

This section demonstrates that the design preserves the full vertical architecture chain from philosophy to federation boundary. The LLD and UML are not merely a class list; each layer below is explicitly lowered and bounded. **If the UML and LLD disagree, that is a design failure (see Rejection Criteria).**

| Layer | Controlling artifact / doctrine | TSS / SCC interpretation | LLD / OOP consequence | Immutable state consequence | ChessBuddy / ChessGuide reality-sharing consequence | Creator continuity consequence | Federation consequence | Acceptance check |
|-------|--------------------------------|--------------------------|-----------------------|------------------------------|-----------------------------------------------------|--------------------------------|------------------------|------------------|
| **1. Philosophy / learning theory** | CG-000/CG-001 learning chain; learning = integration, not activity | Safety scanning supports learning but is not learning; warnings/candidates are pedagogical signals, not mastery | `SafetyScanResult`, `TacticalWarning`, `CandidateMove` are signals, not learner outcomes | scan signals never become a learner-state record by themselves | ChessGuide observes; scanner classifies; neither asserts the learner learned | Creator records that a signal was pedagogical, not mastery | signals never exported as learning | scan output carries no mastery semantics |
| **2. Governance / ADR** | ADR-001–008 (LearningTrace, corpus_ref, evidence, claims, DecisionTrace, Buddy, engine/SCC, KG/corpus) | TSS/SCC must not violate any boundary | invariants (§27) encode each ADR limit | no ADR-protected record is mutated | Buddy limited per ADR-006; engine per ADR-007 | ADR provenance preserved in replay metadata | ADR-002/008 refs never exported | no invariant contradicts an ADR |
| **3. Review / HLD** | STRR-001, CGSR-002, KG-001, LG-001, LF-001, SCC-HLD-001, ChessGuide-LLD-v1.0 | TSS lowers prior HLD/review intent into concrete design | dependency map (§8) shows lowering; classes map to SCC-HLD lanes | persisted design honours HLD state intent | reality-sharing roles inherited from CGSR-002 | replay references upstream versions | withholding inherited from FEDERATION.md | every class traces to an upstream artifact |
| **4. LLD / OOP / UML** | this document + UML file | typed classes/interfaces/value objects/events/states | §17–§24 + required method signatures (§18) | state machine (§22) defines legal transitions | ExplanationDraft is the only Buddy-facing surface | replay metadata fields typed (§17) | withholding guard typed (§18) | UML object model matches §17–§22 exactly |
| **5. Immutable state transitions** | ACG-001 immutable-state requirement | future persisted scan = immutable/replayable record | `CreatorReplayMetadata`, `ScanTrace`; corrections create new versions | **no silent mutation**; scan result, policy, KG version, engine snapshot id, position identity replayable | shared views read immutable results, never overwrite | full replay reconstructable | no mutable export channel | §22 + §28 define immutability with no overwrite |
| **6. Runtime implementation boundary** | STRR-001 runtime-after-LLD; §12 | design only; defines what runtime must preserve | runtime must preserve signatures/invariants or revise LLD | runtime cannot bypass immutability invariants | runtime cannot grant Buddy authority beyond draft | runtime must emit replay metadata | runtime cannot widen export | no runtime code present in PR |
| **7. ChessBuddy / ChessGuide shared reality** | ADR-006, CGSR-002 reality-sharing | distinguishes observation, classification, explanation, learner statement, and non-inference | `ExplanationDraft` carries `buddy_allowed_text` / `buddy_forbidden_claims` / `what_not_to_infer` | draft is derived/read-only, not a stored learner claim | Buddy gets governed read model, not raw authority; cannot create claim/mastery/rationale | Creator records what Buddy was permitted to say | Buddy draft never exported | Buddy boundary explicit and typed |
| **8. Creator continuity** | ACG-001 100-year continuity | Creator can serve/replay the semantic event chain in real time and at 100 years | `CreatorReplayMetadata` (scanner/policy/KG version, engine snapshot id, derivation context) | replay reconstructs why each signal existed at the time | shared reality is reconstructable historically | meaning preserved, not flattened to prose | replay data stays internal | replay metadata required for persisted results |
| **9. Federation boundary** | FEDERATION.md, ADR-002 | TSS/SCC output is not federation export | `IFederationWithholdingGuard` + `FederationWithholdingPolicy` | withholding decision recorded immutably | nothing learner/semantic crosses to ObservationRecord | export attempts are blocked and logged | **no** scan result, candidate, warning, KG ref, learner context, confidence, explanation, engine ref, or Buddy draft in ObservationRecord | withholding guard must pass before export-adjacent use |

---

## Whole / Parts Fit Check

- **Mission fit:** the whole architecture still follows ChessGuide's mission as a **longitudinal skill-development domain** — the scanner produces pedagogical signals that serve learning over time, not a game/engine product.
- **HLD service, not new doctrine:** the LLD objects **serve SCC-HLD-001 and the prior reviews**; they introduce no new doctrine. Terms remain proposal-level design, not accepted doctrine.
- **Learner Graph / Frontier:** the scanner **supports Learner Graph and Learning Frontier without mutating them** (read-only signals; projection requires explicit evidence pathway and derivation policy — §15).
- **Buddy:** the scanner **supports Buddy without making Buddy an oracle** (ExplanationDraft only; forbidden claims listed — §14, §26).
- **Creator continuity:** the scanner **supports Creator continuity without flattening meaning** (typed replay metadata, not free text — §16, §28).
- **Federation:** the scanner **preserves federation boundaries** (withholding guard + invariant — §13, §27).
- **Placement:** every class and interface has a clear place in the larger architecture — Input, Scanner Interfaces, Scanner Implementations, Results, Boundaries, Replay/Withholding (mirrored in UML packages).
- **No silent crossing:** **no class silently crosses** from system competence into learner state, claim, mastery, Buddy authority, or federation export; each crossing point is guarded by an explicit interface and invariant.

---

## Rejection Criteria

Reject this PR if any of the following are true:

- The LLD cannot be traced back to philosophy / learning theory.
- The LLD cannot be traced back to HLD / review / governance.
- UML and the class model do not match.
- Method signatures are missing for core services.
- Immutable state consequences are vague.
- Buddy boundary is vague.
- Learner Graph / Learning Frontier boundary is vague.
- Creator real-time to 100-year continuity is vague.
- Federation withholding is vague.
- Runtime implementation is introduced.
- Scanner output is treated as learner evidence, claim, mastery, or Buddy authority.
- Engine output is treated as teacher truth.
- Safety scan order P0–P5 is not enforced.

This document is structured so that each rejection criterion maps to an explicit, satisfied section: traceability (Vertical Architecture Continuity Trace), object/UML parity (§17–§24 + UML), signatures (§18), immutability (§22, §28), Buddy boundary (§14, §26), Learner Graph/Frontier boundary (§15), Creator continuity (§16, §28), federation withholding (§13, §27), runtime exclusion (§5, §12), and P0–P5 enforcement (§9, §10, §27).

---

## 8. Upstream / downstream dependency map

**Upstream:**

- ACG-001
- STRR-001
- CGSR-002
- KG-001
- LG-001
- LF-001
- SCC-HLD-001
- ChessGuide-LLD-v1.0

**Downstream:**

- Buddy / LARIS Activation Plan
- Android / Chrome strategy
- runtime scanner implementation
- Learning Frontier ranking
- future tests
- future federation leak-prevention tests

---

## 9. Safety-first doctrine

The scanner follows this order:

1. Is the side to move in check?
2. If in check: legal parries only.
3. Opponent immediate mate threats.
4. Own loose/hanging pieces.
5. Opponent loose/hanging pieces.
6. Checks, captures, threats.
7. Candidate moves.
8. Sanity check after candidate.
9. Only then strategic/positional planning.

Principles:

- **Defensive scan before attack.**
- **Safety before engine-best.**
- **Legal move constraints before pedagogy.**
- If P0/P1 fails, **explanation must not praise plan**.

---

## 10. P0–P5 scan priority model

| Code | Meaning |
|------|---------|
| **P0** | illegal / in-check / must-parry condition |
| **P1** | immediate mate or forced tactical loss |
| **P2** | loose pieces / tactical vulnerability |
| **P3** | forcing opportunities: checks, captures, threats |
| **P4** | candidate move and calculation |
| **P5** | positional/strategic plan |

- **P0/P1 block** ordinary recommendations.
- **P2 produces warning.**
- **P3/P4 produce** candidate exploration.
- **P5 is only allowed** when P0–P2 are safe.

---

## 11. System boundary

- TSS is a **System Chess Competence subsystem**.
- It **reads** position and optional evidence context.
- It **may read** KG references.
- It **may read** an engine snapshot if supplied.
- It does **not call** the engine directly in this LLD.
- It does **not write** learner state.
- It does **not certify** mastery.
- It does **not export** to federation.

---

## 12. Runtime boundary

- This PR is **design only**.
- Future runtime **may instantiate** these classes.
- **No method** in this LLD is implemented here.
- Future implementation must **preserve signatures/invariants** or explicitly revise the LLD.

---

## 13. Federation boundary

- **No TSS output is federation export.**
- No scan result, concept_ref, candidate move, engine reference, warning, explanation, or learner context is exported.
- ObservationRecord remains **lossy/non-semantic**.
- Future export widening requires **separate governance/HLD/LLD/tests**.

---

## 14. Buddy boundary

- Buddy may receive an **ExplanationDraft**, not raw authority.
- Buddy **cannot** claim mastery.
- Buddy **cannot** impersonate learner rationale.
- Buddy **cannot** turn an engine line into pedagogy automatically.
- Buddy **must surface** uncertainty and P0/P1 warnings.

---

## 15. Learner Graph / Learning Frontier boundary

- TSS may provide **read-only signals** for future projection.
- TSS does **not mutate** Learner Graph.
- TSS does **not mutate** Learning Frontier.
- Any future projection into Learner Graph requires an **explicit evidence pathway and derivation policy**.
- Frontier may later **rank** safety priorities but cannot treat them as mastery.

---

## 16. Creator continuity boundary

- Scan outputs must be **replayable**.
- Must preserve **scanner version, KG version, input position identity, scan policy version, optional engine snapshot ID, and derivation context**.
- Future systems must understand **why** a warning/candidate/explanation was generated.

---

## 17. Core object model

| Class | Purpose | Key fields |
|-------|---------|-----------|
| `TacticalSafetyScanner` | orchestrates safety-first scan | policy, scanners, trace |
| `SafetyScanInput` | scan input | positionRef, sideToMove, learnerContextRef?, evidenceContextRef?, engineSnapshot? |
| `SafetyScanResult` | scan output | checkStatus, mateThreats[], hangingSignals[], cctSignals[], candidateSet, warnings[], explanationDraft, replayMetadata |
| `SafetyScanPolicy` | scan configuration | policyVersion, priorityOrder, thresholds |
| `ScanPriority` | priority value | code (P0–P5), label |
| `ScanPhase` | scan phase marker | phaseId, priority |
| `PositionRef` | position identity | positionId, boardHash, fen? |
| `SideToMove` | side to move | color |
| `LegalMoveSet` | legal moves | moves: MoveUci[] |
| `CheckStatus` | P0 result | inCheck, parrySet? |
| `CheckParrySet` | legal parries | moves: MoveUci[] |
| `MateThreat` | P1 signal | threatMove, plyToMate, severity |
| `HangingPieceSignal` | P2 signal | square, piece, side, severity |
| `LoosePieceSignal` | P2 signal | square, piece, side, severity |
| `CCTSignal` | P3 signal | move, kind(check/capture/threat) |
| `CandidateMove` | candidate | move, priority, classification? |
| `CandidateMoveSet` | candidates | candidates: CandidateMove[] |
| `CandidateMoveClassification` | classification | learningBest, engineBest, pedagogicalValue, uncertainty |
| `TacticalWarning` | warning | warningCode, severity, priority |
| `TacticalOpportunity` | opportunity | move, conceptRefs |
| `EngineReferenceSnapshot` | engine reference | snapshotId, eval, bestLine, source, time |
| `EngineBoundaryPolicy` | engine policy | allowOverride=false, revealTiming |
| `KnowledgeGraphConceptRef` | KG ref | conceptRef, graphVersion |
| `LearnerContextRef` | learner ref | learnerId (read-only) |
| `EvidenceContextRef` | evidence ref | evidenceRefs[] (read-only) |
| `ExplanationDraft` | Buddy-facing draft | see §26 |
| `BuddyExplanationDraftPolicy` | explanation policy | allowedText rules, forbidden claims |
| `CreatorReplayMetadata` | replay metadata | scannerVersion, policyVersion, kgVersion, engineSnapshotId?, derivationContext |
| `FederationWithholdingPolicy` | withholding policy | withheldFields |
| `ScanTrace` | scan trace | steps: ScanTraceStep[] |
| `ScanTraceStep` | trace step | phase, priority, event, timestamp |

---

## 18. Interfaces

| Interface | Responsibility | Input | Output | Key method |
|-----------|----------------|-------|--------|-----------|
| `IPositionAnalyzer` | analyze raw position | SafetyScanInput | PositionFeatures | `analyze(input): PositionFeatures` |
| `ILegalMoveProvider` | provide legal moves | SafetyScanInput | LegalMoveSet | `legalMoves(input): LegalMoveSet` |
| `IKingSafetyScanner` | P0 check status | SafetyScanInput | CheckStatus | `scan(input: SafetyScanInput): CheckStatus` |
| `IMateThreatScanner` | P1 mate threats | SafetyScanInput | MateThreat[] | `scan(input: SafetyScanInput): MateThreat[]` |
| `IHangingPieceScanner` | P2 hanging pieces | SafetyScanInput | HangingPieceSignal[] | `scan(input: SafetyScanInput): HangingPieceSignal[]` |
| `ICCTScanner` | P3 checks/captures/threats | SafetyScanInput | CCTSignal[] | `scan(input: SafetyScanInput): CCTSignal[]` |
| `ICandidateMoveScanner` | candidate generation | SafetyScanInput, SafetyScanResult | CandidateMoveSet | `generate(input, context): CandidateMoveSet` |
| `IEngineReferenceReader` | read engine snapshot | EngineReferenceSnapshot | EngineReadModel | `read(snapshot): EngineReadModel` |
| `IKnowledgeGraphRefResolver` | resolve KG refs | conceptRef, graphVersion | KnowledgeGraphConceptRef | `resolve(ref, version): KnowledgeGraphConceptRef` |
| `IExplanationDraftBuilder` | build explanation | SafetyScanResult | ExplanationDraft | `build(result: SafetyScanResult): ExplanationDraft` |
| `IFederationWithholdingGuard` | enforce withholding | SafetyScanResult | FederationWithholdingDecision | `assertWithheld(result: SafetyScanResult): FederationWithholdingDecision` |
| `ICreatorReplayAnnotator` | attach replay metadata | SafetyScanResult | CreatorReplayMetadata | `annotate(result: SafetyScanResult): CreatorReplayMetadata` |

**Required signatures (design, not implementation):**

```text
TacticalSafetyScanner.scan(input: SafetyScanInput): SafetyScanResult
IKingSafetyScanner.scan(input: SafetyScanInput): CheckStatus
IMateThreatScanner.scan(input: SafetyScanInput): MateThreat[]
IHangingPieceScanner.scan(input: SafetyScanInput): HangingPieceSignal[]
ICCTScanner.scan(input: SafetyScanInput): CCTSignal[]
ICandidateMoveScanner.generate(input: SafetyScanInput, context: SafetyScanResult): CandidateMoveSet
IExplanationDraftBuilder.build(result: SafetyScanResult): ExplanationDraft
IFederationWithholdingGuard.assertWithheld(result: SafetyScanResult): FederationWithholdingDecision
ICreatorReplayAnnotator.annotate(result: SafetyScanResult): CreatorReplayMetadata
```

---

## 19. Value objects

- `PositionId`
- `BoardHash`
- `MoveUci`
- `MoveSan`
- `PlyIndex`
- `ScanId`
- `PolicyVersion`
- `GraphVersion`
- `EngineSnapshotId`
- `EvidenceRef`
- `LearnerId`
- `ConfidenceBand`
- `Severity`
- `PriorityCode`
- `ExplanationText`
- `WarningCode`

All value objects are **immutable** by design.

---

## 20. Domain events

- `SafetyScanRequested`
- `SafetyScanCompleted`
- `P0CheckDetected`
- `LegalParriesGenerated`
- `P1MateThreatDetected`
- `HangingPieceDetected`
- `CCTSignalsGenerated`
- `CandidateMovesGenerated`
- `CandidateMoveClassified`
- `ExplanationDraftCreated`
- `FederationWithholdingConfirmed`
- `CreatorReplayMetadataAttached`

Events are **future design only**; this PR creates no event runtime.

---

## 21. Error model

| Error | Trigger | Safe behavior | User-facing consequence | Logging / Creator consequence |
|-------|---------|---------------|-------------------------|-------------------------------|
| `InvalidPositionError` | unparseable position | abort scan | "position invalid" | log scan failure + input id |
| `IllegalSideToMoveError` | inconsistent side to move | abort scan | generic error | log + replay note |
| `MissingLegalMoveProviderError` | no legal-move provider | abort scan | generic error | log config fault |
| `EngineSnapshotPolicyError` | engine snapshot violates policy | ignore snapshot, continue | no engine claim shown | log boundary enforcement |
| `KGRefResolutionError` | unresolved KG ref | omit ref, continue | concept omitted | log unresolved ref |
| `FederationLeakRiskError` | withholding guard fails | block export-adjacent use | no export | high-severity Creator log |
| `IncompleteScanPolicyError` | policy missing priorities | abort scan | generic error | log policy version |
| `UnsupportedVariantError` | non-standard variant | abort scan | "variant unsupported" | log variant |
| `AmbiguousMoveNotationError` | ambiguous SAN/UCI | reject move | move rejected | log ambiguity |

---

## 22. State transition model

States:

- `NotStarted`
- `InputValidated`
- `LegalMovesResolved`
- `P0Scanned`
- `P1Scanned`
- `P2Scanned`
- `P3Scanned`
- `CandidatesGenerated`
- `ExplanationDrafted`
- `WithholdingChecked`
- `ReplayAnnotated`
- `Completed`
- `Failed`

| From | Event | To | Invariant |
|------|-------|----|-----------|
| NotStarted | SafetyScanRequested | InputValidated | input non-null |
| InputValidated | (validate) | LegalMovesResolved | legal moves available |
| LegalMovesResolved | P0CheckDetected | P0Scanned | check status known |
| P0Scanned | P1MateThreatDetected | P1Scanned | if in check, parries only |
| P1Scanned | HangingPieceDetected | P2Scanned | P0/P1 evaluated first |
| P2Scanned | CCTSignalsGenerated | P3Scanned | P2 complete |
| P3Scanned | CandidateMovesGenerated | CandidatesGenerated | candidates legal |
| CandidatesGenerated | ExplanationDraftCreated | ExplanationDrafted | P0/P1 warnings present if applicable |
| ExplanationDrafted | FederationWithholdingConfirmed | WithholdingChecked | no withheld field leaks |
| WithholdingChecked | CreatorReplayMetadataAttached | ReplayAnnotated | replay metadata complete |
| ReplayAnnotated | SafetyScanCompleted | Completed | result immutable |
| any | (error) | Failed | safe abort + logged |

---

## 23. Main scan pipeline

1. validate input
2. resolve legal moves
3. scan P0 check status
4. if in check: generate legal parries, block non-parry candidates
5. scan P1 mate threats
6. scan P2 loose/hanging pieces
7. scan P3 checks/captures/threats
8. generate candidate moves
9. classify candidates
10. build explanation draft
11. apply federation withholding guard
12. attach Creator replay metadata
13. return SafetyScanResult

---

## 24. Candidate move pipeline

- **candidate source** (legal moves + P3 signals)
- **legal validation** (reject illegal)
- **safety re-check** (P0/P1/P2 consistency)
- **tactical classification**
- **priority ordering**
- **learning-best annotation**
- **engine-best distinction** (separate field)
- **explanation suitability**
- **uncertainty field**

---

## 25. Engine reference integration boundary

- `EngineReferenceSnapshot` is **optional input, not authority**.
- Scanner does **not call** the engine in this PR.
- Engine line may **inform classification** but **not override** P0/P1 safety.
- **Engine-best is not learning-best.**
- Engine snapshot must preserve **version/id/source/time**.
- **No raw engine output to Buddy** without policy.

---

## 26. Explanation draft boundary

`ExplanationDraft` fields:

- `summary`
- `priority`
- `warnings`
- `legal_constraints`
- `candidate_explanations`
- `concept_refs`
- `uncertainty`
- `what_not_to_infer`
- `buddy_allowed_text`
- `buddy_forbidden_claims`
- `creator_replay_metadata`

---

## 27. Invariants

- **P0 before** P1/P2/P3/P4/P5.
- in-check positions produce **only legal parries** as candidates.
- **no illegal moves** in CandidateMoveSet.
- P0/P1 warnings **block ordinary strategic praise**.
- **KG refs are not evidence.**
- **TSS result is not learner state.**
- **TSS result is not mastery.**
- **TSS result is not federation export.**
- **Engine result is not a teacher oracle.**
- **Buddy draft is not a claim.**
- **Creator replay metadata required** for persisted future results.
- **federation withholding guard must pass** before any future export-adjacent use.

---

## 28. Future persistence model

- This PR defines **no persistence**.
- Future scan results may be persisted as **immutable records only** after a runtime PR.
- Persisted scan must include **scanner version, policy version, KG version, input position identity, and replay metadata**.

---

## 29. Future API surface

Future **read-only** application service (no implementation):

```text
SystemChessCompetenceService.scanPosition(input: SafetyScanInput): SafetyScanResult
SystemChessCompetenceService.buildExplanation(result: SafetyScanResult): ExplanationDraft
SystemChessCompetenceService.classifyCandidate(move: CandidateMove, context: SafetyScanResult): CandidateMoveClassification
```

---

## 30. Future LLD-to-runtime mapping

| LLD object | Future runtime module | Risk | Required tests later |
|------------|-----------------------|------|----------------------|
| TacticalSafetyScanner | scanner orchestrator | high | priority ordering, P0/P1 blocking |
| IKingSafetyScanner | check detection | high | in-check parry-only |
| IMateThreatScanner | mate detection | high | mate-in-N correctness |
| IHangingPieceScanner | hanging detection | medium | false positive/negative |
| ICCTScanner | forcing-move detection | medium | CCT coverage |
| ICandidateMoveScanner | candidate generation | medium | legality, ordering |
| IEngineReferenceReader | engine read model | high | boundary: no override of P0/P1 |
| IExplanationDraftBuilder | explanation builder | high | no forbidden claims |
| IFederationWithholdingGuard | withholding enforcement | critical | leak-prevention tests |
| ICreatorReplayAnnotator | replay annotation | high | replay reconstruction |

---

## 31. UML file summary

- A separate **PlantUML** file is included: `uml/Tactical-Safety-Scanner-SCC-UML-v1.0.puml`.
- It models **classes/interfaces and main relationships**.
- It is **not executable runtime**.
- A future LLD update may add **sequence/state diagrams**.

---

## 32. Open questions

| ID | Question |
|----|----------|
| **TSS-OQ-1** | Should scanner produce one result per position or per candidate move? |
| **TSS-OQ-2** | Should engine snapshot be required or optional for P3/P4 classification? |
| **TSS-OQ-3** | What exact threshold promotes a warning to a blocking condition? |
| **TSS-OQ-4** | Should Learning Frontier consume all TSS signals or only curated summaries? |
| **TSS-OQ-5** | What UI wording safely presents P0/P1 to learners? |
| **TSS-OQ-6** | Should scan policy be configurable by learner level? |
| **TSS-OQ-7** | How are insufficient-legal-move states represented? |
| **TSS-OQ-8** | What tests are required before runtime implementation? |
| **TSS-OQ-9** | Should TSS be synchronous or async in runtime? |
| **TSS-OQ-10** | How does the scanner handle variants / non-standard chess? |

---

## 33. Recommendation

- Accept **TSS-SCC-LLD-001** as Draft LLD.
- Use it as the **required design gate** before runtime scanner implementation.
- Use it as a **required dependency** before the Buddy/LARIS activation plan.
- Next PR after this should be **PR #25 Buddy / LARIS Activation Plan**, unless a tactical safety design correction is needed.

---

## 34. Governance boundary statement

**TSS-SCC-LLD-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates **human-readable LLD and UML only**.
