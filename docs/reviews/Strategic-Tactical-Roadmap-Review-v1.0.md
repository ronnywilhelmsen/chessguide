# Strategic / Tactical Roadmap Review v1.0

| Field | Value |
|-------|-------|
| **Document ID** | STRR-001 |
| **Title** | Strategic / Tactical Roadmap Review v1.0 |
| **Version** | 1.0 |
| **Status** | Draft Review |
| **Date** | 2026-06-18 |
| **Scope** | Strategic / tactical sequencing and batching review only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), CCCR v1.0, SCCR-001, SCC-HLD-001, CRR-001, CSV-001, MCRM-001, OTWP-001, LTCW-001, [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

- STRR-001 is a **Draft Review**.
- It does **not** create runtime behavior.
- It does **not** create schema.
- It does **not** create HLD, LLD, or UML.
- It does **not** activate **LARIS**.
- It uses **ACG-001** as a **mandatory gate**.

---

## Executive summary

- The repository now has enough governance foundation to **stop doing only micro-PRs**.
- **ACG-001** is now the **hard acceptance gate** for all substantial future artifacts.
- The roadmap should shift to **larger, semantically coherent architecture batches** — but only within a single governance layer.
- The next work should clarify **strategic sequence** and **tactical batching** before further HLD/LLD/runtime work.
- The roadmap must preserve the chain from **philosophy / learning theory** to **100-year Creator continuity**.

---

## Current repository and runtime baseline

- ChessGuide is a **longitudinal skill-development domain** for chess.
- Current implementation remains a **legacy React / MobX app** (`package.json` name `chesbuddy`, v0.10.0).
- Runtime has game state, game history, helper/engine suggestions, clock/timekeeper, and message UI patterns.
- `package.json` shows **React 17, MobX 6, Material UI 4, chess.js, chessboardjsx, TypeScript 4, react-scripts 4** (Create React App).
- Runtime **federation export** exists and is intentionally **narrow / lossy** (`src/chessguide/federation/export_v1.py`).
- Runtime opening tree (`src/data/openings.ts`, `openingdata.ts`, ~2,402 data lines) is **corpus-like material**, not doctrine.
- **Runtime must not be treated as the source of doctrine.**

---

## Current governance baseline

| Doc | Role | Boundary | Roadmap consequence |
|-----|------|----------|---------------------|
| **ADR-001** | Episode / LearningTrace schema | LearningTrace = evidence/custody, not learning | Learner state design must respect custody |
| **ADR-002** | Sovereign reference model | `corpus_ref` = semantic pointer, not evidence/export | KG/corpus refs stay non-evidence |
| **ADR-003** | LOE/DOE Evidence Record | citation ≠ integration | Learner Graph evidence lineage required |
| **ADR-004** | Stewardship / claim gate | claims require stewardship | No mastery from activity |
| **ADR-005** | DecisionTrace per ply | decision_frame/corpus_ref ≠ learner rationale | Scanner/Buddy must separate reasoning |
| **ADR-006** | Buddy pedagogy | Buddy not oracle/steward | Buddy/LARIS plan gated |
| **ADR-007** | Stockfish / SCC boundary | engine ≠ corpus truth | Scanner LLD must keep engine lane separate |
| **ADR-008** | Corpus Reference Registry (Accepted) | source/corpus/evidence boundaries | Corpus artifacts governed |
| **ACG-001** | Architecture Continuity Gate (Accepted) | full chain must be preserved | Hard gate for all future PRs |
| **CCCR v1.0** | Corpus content review | taxonomy proposal | Grounds KG concepts |
| **SCCR-001** | System competence review | F-findings, registry gap | SCC LLD scope |
| **SCC-HLD-001** | System competence HLD | domain corpus boundary | Scanner LLD upstream |
| **CRR-001** | Corpus registry review | seeds, P0–P5, continuity | Scanner + manifest grounding |
| **CSV-001** | Source verification | license/provenance dispositions | Source admission rules |
| **MCRM-001** | MVP manifest (Draft) | seed vocabulary | KG/corpus seeds |
| **OTWP-001** | Opening wrap plan (Draft) | wrap not replace | KG opening mapping |
| **LTCW-001** | Lichess theme cross-walk (Draft) | external label ≠ doctrine | KG tactic vocabulary |
| **FEDERATION.md** | Federation withholding | lossy ObservationRecord | All artifacts withhold semantics |

---

## Roadmap problem statement

ChessGuide now has strong governance and corpus/source boundaries, but the remaining roadmap must avoid two errors:

1. **Under-batching** — creating too many tiny mechanical PRs that slow architectural progress.
2. **Over-batching** — combining governance, LLD, runtime, activation, and client implementation in unsafe ways.

---

## Strategic principle

Strategy must preserve:

```text
Filosofi / læringsteori
→ Governance / ADR
→ Review / HLD
→ LLD / OOP / UML
→ Immutable state transitions
→ Runtime implementation
→ ChessBuddy / ChessGuide reality sharing
→ Creator serving from real-time to 100-year replayable semantic continuity
```

Also:

- Do **not** advance implementation faster than semantic governance can explain.
- Do **not** create theoretical docs with no path to LLD/OOP/UML.
- Do **not** activate agent authority before system competence and reality-sharing boundaries are designed.

---

## Tactical principle

- Each PR should now complete a **meaningful semantic unit**.
- Strategy/review can be **larger**.
- HLD/LLD/UML can be grouped **only within the same subsystem**.
- Runtime implementation should wait until HLD/LLD/UML and immutable state strategy are clear.
- **LARIS activation is always separate.**
- Android and Chrome **strategy** can be batched; **implementation cannot**.

---

## Architecture Continuity Gate

| Layer | Covered in STRR-001? | How it is covered | Roadmap consequence |
|-------|----------------------|-------------------|---------------------|
| Philosophy / learning theory | Yes | Strategic principle; activity ≠ learning | Grounds all phases |
| Governance / ADR | Yes | Governance baseline table (ADR-001–008, ACG-001) | Each PR cites controlling doctrine |
| Review / HLD | Yes | Phases name upstream reviews/HLD | KG/Scalar artifacts trace to SCCR/SCC-HLD |
| Future LLD / OOP / UML | Yes | Phase 5 names candidate classes | Scanner LLD/UML before runtime |
| Immutable state transitions | Yes | State and immutability strategy | Append-only learner state |
| Runtime implementation | Yes | Phase 8 waves; separation rules | Runtime after LLD/UML |
| ChessBuddy / ChessGuide reality sharing | Yes | Reality-sharing strategy | Buddy boundary preserved |
| Creator continuity | Yes | Creator continuity strategy | 100-year replay preserved |
| Federation boundary | Yes | Federation boundary strategy | No semantic leak |

---

## Roadmap overview

| # | Item | Current status | Purpose | Depends on | Produces | ACG risk | Suggested batch | PR separation requirement |
|---|------|----------------|---------|------------|----------|----------|-----------------|----------------------------|
| 1 | Chess Corpus Content Review v1.0 | **Done** (CCCR on main) | corpus taxonomy proposal | — | taxonomy, MVP candidates | low | A | already separate |
| 2 | ChessGuide Strategic Review v2.0 | Pending | product/system direction post-ACG | ACG-001 | strategy doctrine | medium | B | separate strategy PR |
| 3 | Knowledge Graph v1.0 | Pending | governed concept graph | CCCR, MCRM, ADR-008 | KG architecture/review | medium | C | separate |
| 4 | Learner Graph v1.0 | Pending | learner-specific derived state | KG, ADR-001/003 | learner graph architecture | high | D | pair with Frontier, conceptually separate |
| 5 | Learning Frontier v1.0 | Pending | planning read model | Learner Graph, KG | frontier architecture | high | D | pair with Learner Graph |
| 6 | Buddy / LARIS Activation Plan | Pending | agent authority/activation | SCC LLD, ADR-006/007 | activation governance | high | F | always separate |
| 7 | Android Vision Strategy | Pending | client surface strategy | Strategic Review, activation plan | client strategy | medium | G | strategy only; impl separate |
| 8 | Chrome Extension Strategy | Pending | client surface strategy | Strategic Review, activation plan | client strategy | medium | G | strategy only; impl separate; higher ingest risk |

---

## Dependency map

- CCCR and existing reviews **ground corpus/system context**.
- **ACG-001 governs** all future substantial artifacts.
- **ChessGuide Strategic Review v2.0** should define product/system direction **before** graph artifacts.
- **Knowledge Graph precedes Learner Graph.**
- **Learner Graph precedes Learning Frontier.**
- **Tactical Safety Scanner / SCC LLD + UML** should happen **before** Buddy/LARIS activation.
- **Buddy/LARIS activation precedes** Android/Chrome implementation strategy.
- **Android/Chrome strategies** can be drafted after the activation plan, but **implementation waits**.
- **Runtime implementation waves** come after LLD/UML/state-transition strategy.

---

## Batch strategy

| Batch | Content |
|-------|---------|
| **Batch A** | Governance/review consolidation (done / ongoing) |
| **Batch B** | ChessGuide Strategic Review v2.0 |
| **Batch C** | Knowledge Graph v1.0 |
| **Batch D** | Learner Graph + Learning Frontier architecture |
| **Batch E** | Tactical Safety Scanner / SCC LLD + UML |
| **Batch F** | Buddy / LARIS Activation Plan |
| **Batch G** | Android + Chrome strategy reviews |
| **Batch H** | Runtime implementation waves |

---

## Recommended next PR sequence

| PR | Artifact | Scope |
|----|----------|-------|
| **PR 20** | Strategic / Tactical Roadmap Review v1.0 | review only |
| **PR 21** | ChessGuide Strategic Review v2.0 | strategy only |
| **PR 22** | Knowledge Graph v1.0 | architecture/review only |
| **PR 23** | Learner Graph v1.0 + Learning Frontier v1.0 | architecture/review only |
| **PR 24** | Tactical Safety Scanner / SCC LLD + UML | LLD/UML only, no runtime |
| **PR 25** | Buddy / LARIS Activation Plan | activation governance only, no runtime activation |
| **PR 26** | Android Vision Strategy + Chrome Extension Strategy | client strategy only, no implementation |
| **PR 27+** | Runtime implementation waves | implementation, tests, migration; no scope widening without governance |

---

## Phase 1 / PR 20 — STRR-001

- This PR **locks the roadmap**.
- It prevents future backtracking and duplicate mechanical prompts.
- It is **not runtime**.

---

## Phase 2 / PR 21 — ChessGuide Strategic Review v2.0

Must answer:

- What ChessGuide is **after ACG-001**.
- What ChessBuddy is.
- What System Chess Competence is.
- What Creator continuity means **operationally**.
- What must be true **before LARIS activation**.
- What Android/Chrome surfaces must **not** violate.
- What belongs to **product strategy vs runtime**.

---

## Phase 3 / PR 22 — Knowledge Graph v1.0

- KG represents **governed chess concepts**, not learner state.
- It binds corpus refs, tactics, principles, decision frames, openings, endgames, source references.
- It must **not** become evidence, claim, or mastery.
- It **prepares** future LLD/OOP/UML.

---

## Phase 4 / PR 23 — Learner Graph + Learning Frontier

- **Learner Graph** is learner-specific **derived state**, not corpus.
- **Learning Frontier** is a planning/read model over learner evidence and KG.
- Needs **immutable event sourcing** or append-only LearningTrace/Evidence lineage.
- Must **not** leak through federation.
- Can be batched as **one architecture family**, but must remain **conceptually separate**.

---

## Phase 5 / PR 24 — Tactical Safety Scanner / SCC LLD + UML

- First **high-risk** architecture batch.
- Must include classes, interfaces, value objects, domain events, methods with parameters/returns, state transitions, error handling, UML.
- Must preserve **P0–P5**.
- Must preserve **Stockfish boundary** and **Buddy boundary**.
- Must preserve **federation** and **Creator continuity**.
- **No runtime implementation** in that PR.

**Candidate future classes:**

- `TacticalSafetyScanner`
- `SafetyScanInput`
- `SafetyScanResult`
- `KingSafetyScanner`
- `MateThreatScanner`
- `HangingPieceScanner`
- `CCTScanner`
- `CandidateMoveScanner`
- `PedagogicalMoveClassifier`
- `LearningBestMovePolicy`
- `EngineReferenceSnapshot`
- `SystemChessCompetenceService`
- `BuddyExplanationDraftPolicy`

---

## Phase 6 / PR 25 — Buddy / LARIS Activation Plan

- Must remain **separate** because it changes agent authority / activation posture.
- **LARIS remains inactive** until explicitly activated.
- Requires **ACG pass** and reality-sharing model.
- Must define authority, custody, state transitions, failure modes, rollback/deactivation.
- Must **not** implement activation.

---

## Phase 7 / PR 26 — Android + Chrome strategies

- Can be drafted **together** as client-surface strategy (both are presentation/interaction surfaces).
- Must **not** implement client code yet.
- Must preserve custody/evidence/federation/Buddy authority/Creator continuity.
- Android and Chrome may **diverge tactically**, but share governance.
- **Chrome has higher source/ingest/scraping risk.**

---

## Phase 8 / PR 27+ — Runtime implementation waves

1. Typed domain records, no UI behavior.
2. Local immutable event capture.
3. Tactical Safety Scanner read-only runtime.
4. Buddy prompt surface.
5. Learning Frontier read model.
6. Guarded client integrations.
7. Federation leak-prevention tests.

---

## What must remain separate PRs

- LARIS activation
- Runtime implementation
- Federation export widening
- Schema creation
- Dataset ingest
- Source downloads
- Accepted ADR changes
- Android implementation
- Chrome implementation
- Any change that creates learner-state mutation paths
- Any change that broadens agent authority

---

## What can be combined safely

- Strategy reviews
- Non-runtime architecture review docs
- HLD + UML **only when same subsystem and ACG passes**
- Learner Graph + Learning Frontier **if no runtime**
- Android + Chrome strategy **if no implementation**
- Tactical Safety Scanner LLD + UML **if no runtime**

---

## State and immutability strategy

- Future state changes must use **append-only or immutable records**.
- **No silent overwrite.**
- Corrections create **new versions**.
- Derived views are **read models**.
- Learner-specific state is **separate** from corpus/KG state.
- Deprecated refs remain **resolvable**.
- Runtime must **not** silently mutate learner meaning.

---

## Reality-sharing strategy

Shared reality surfaces:

- ChessGuide UI / system view
- ChessBuddy pedagogical view
- System Chess Competence view
- Engine reference view
- Creator continuity view

Must distinguish:

- learner statement
- system observation
- corpus ref
- evidence
- claim
- mastery
- engine reference
- Buddy explanation

---

## Creator continuity strategy

- Every roadmap item must preserve **real-time to long-horizon interpretation**.
- Versioned refs, source IDs, curation status, boundary flags, and event lineage must persist.
- A **100-year replay** must still know **why** a thing existed and **what it meant** at the time.
- **No flattening** of governed identity into unstructured prose.

---

## Federation boundary strategy

- Federation remains **lossy / non-semantic**.
- Do **not** export `corpus_ref`, `source_refs`, learner evidence, claims, mastery, Buddy rationale, cross-walk metadata, opening labels, puzzle themes.
- **Widening requires a separate ADR/HLD/LLD/test path.**

---

## Roadmap risk register

| Risk | Consequence | Mitigation |
|------|-------------|------------|
| Over-batching | Unsafe mixing of governance/LLD/runtime/activation | ACG gate; separation rules |
| Under-batching | Slow architectural progress | Coherent batches B–G |
| LARIS activation too early | Agent overreach before competence design | Activation always separate, gated |
| Runtime before LLD | Untraceable implementation | Phase 8 after LLD/UML |
| KG / Learner Graph collapse | Corpus mistaken for learner state | Keep KG vs Learner Graph separate |
| Federation semantic leak | Sovereignty/privacy breach | Federation boundary strategy; leak tests |
| Buddy overclaiming | Activity treated as mastery | ADR-004/006; reality-sharing |
| Android/Chrome weakening custody | Client erodes evidence/custody | Strategy must preserve boundaries |
| Creator continuity flattening | Loss of historical meaning | Versioned refs; no prose flattening |
| 100-year replay break | Rename/delete/mutation breaks replay | Immutable events; resolvable deprecation |
| Chrome source/ingest ambiguity | Unlicensed scraping/import | Separate ADR for Chrome ingest |
| Engine lane becoming teacher oracle | ADR-007 violation | Engine = measurement, not doctrine |

---

## Tactical execution plan

| PR | Branch name | File(s) | Scope | Do-not-change | Expected result | ACG gate intensity |
|----|-------------|---------|-------|---------------|-----------------|--------------------|
| PR 20 | `governance/strategic-tactical-roadmap-review-v1` | `docs/reviews/Strategic-Tactical-Roadmap-Review-v1.0.md` | review only | runtime/tests/schema/federation | roadmap locked | medium |
| PR 21 | `governance/chessguide-strategic-review-v2` | `docs/reviews/ChessGuide-Strategic-Review-v2.0.md` | strategy only | runtime/impl | direction defined | medium |
| PR 22 | `governance/knowledge-graph-v1` | `docs/architecture/Knowledge-Graph-v1.0.md` | architecture/review | runtime/schema | KG model | medium |
| PR 23 | `governance/learner-graph-learning-frontier-v1` | Learner Graph + Learning Frontier docs | architecture/review | runtime/federation | learner architecture | high |
| PR 24 | `architecture/tactical-safety-scanner-scc-lld-v1` | SCC LLD + UML | LLD/UML only | runtime | scanner design | high |
| PR 25 | `governance/buddy-laris-activation-plan-v1` | activation plan doc | activation governance | runtime/activation | activation gated | high |
| PR 26 | `governance/android-chrome-strategy-v1` | Android + Chrome strategy docs | client strategy | client impl | client strategy | medium |
| PR 27+ | `runtime/impl-wave-N` | src + tests | implementation | scope widening | guarded runtime | high |

---

## Open questions

| ID | Question |
|----|----------|
| **STRR-OQ-1** | Should Knowledge Graph and Learner Graph be separate or paired? |
| **STRR-OQ-2** | Should Tactical Safety Scanner LLD and UML be one PR? |
| **STRR-OQ-3** | Should Android and Chrome strategies be one combined client-surface strategy or separate? |
| **STRR-OQ-4** | What minimum runtime prototype is allowed after LLD? |
| **STRR-OQ-5** | What exact condition activates LARIS? |
| **STRR-OQ-6** | How should Creator continuity be mechanically validated? |
| **STRR-OQ-7** | Should PR templates receive an ACG checklist before runtime work? |
| **STRR-OQ-8** | Should existing strategic docs receive ACG addenda when touched? |
| **STRR-OQ-9** | Should Chrome extension source/import behavior require its own ADR? |
| **STRR-OQ-10** | Should runtime migration modernize React/MobX before or after domain architecture? |

---

## Recommendation

- **PR 20** should lock roadmap and batching.
- **PR 21** should define ChessGuide Strategic Review v2.0.
- **PR 22** should define Knowledge Graph.
- **PR 23** should define Learner Graph and Learning Frontier together, but conceptually separate.
- **PR 24** should define Tactical Safety Scanner / SCC LLD + UML before Buddy/LARIS.
- **PR 25** should define Buddy/LARIS activation separately.
- **PR 26** should define Android/Chrome client-surface strategy.
- **Runtime work** should wait until LLD/UML and state-transition strategy are clear.

---

## Governance boundary statement

**STRR-001 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable strategic / tactical roadmap review only**.
