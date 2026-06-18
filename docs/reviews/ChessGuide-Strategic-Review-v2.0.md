# ChessGuide Strategic Review v2.0

| Field | Value |
|-------|-------|
| **Document ID** | CGSR-002 |
| **Title** | ChessGuide Strategic Review v2.0 |
| **Version** | 2.0 |
| **Status** | Draft Review |
| **Date** | 2026-06-18 |
| **Scope** | Strategic product / system identity review only |
| **Depends on** | ADR-001, ADR-002, ADR-003, ADR-004, ADR-005, ADR-006, ADR-007, ADR-008, [ACG-001](../governance/Architecture-Continuity-Gate-v1.0.md), [STRR-001](./Strategic-Tactical-Roadmap-Review-v1.0.md), [CG-000](../governance/chessguide/CG-000-chessguide-identity.md), [CG-001](../governance/chessguide/CG-001-product-vision.md), [CG-002](../governance/chessguide/CG-002-federation-relationship.md), [ChessGuide-LLD-v1.0](../architecture/ChessGuide-LLD-v1.0.md), SCCR-001, SCC-HLD-001, CRR-001, CSV-001, MCRM-001, OTWP-001, LTCW-001, [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | earlier strategic framing where inconsistent with ACG-001 and STRR-001 |
| **Superseded by** | — |

---

## 1. Status

- CGSR-002 is a **Draft Review**.
- It is a **strategic review only**.
- It does **not** implement runtime.
- It does **not** create schema.
- It does **not** create HLD, LLD, or UML.
- It does **not** activate **LARIS**.
- It uses **ACG-001** and **STRR-001** as controlling gates.

---

## 2. Executive summary

- ChessGuide must now be understood through the **mature governance stack**, not through the legacy runtime alone.
- The legacy runtime is a useful existing **application shell**, but **not doctrine**.
- The strategic future is a **longitudinal skill-development system** with chess as the first domain.
- The next architecture phases must build **Knowledge Graph, Learner Graph, Learning Frontier, Tactical Safety Scanner, Buddy/LARIS plan, and client-surface strategies** in the order defined by **STRR-001**.

---

## 3. Strategic question

**What is ChessGuide after ACG-001 and STRR-001?**

ChessGuide is:

- A **sovereign learning domain** for chess skill development.
- A product/system that makes **learning and transformation visible over time**.
- A **governed bridge** between learner evidence, chess domain knowledge, system competence, pedagogical guidance, and Creator continuity.

It is **not**:

- An engine wrapper.
- A tournament platform.
- A generic chess portal.
- LARIS itself.

---

## 4. Current repository reality

- `README.md` states ChessGuide is a **longitudinal skill-development domain for chess**.
- `README.md` states the current codebase is a **legacy application** with opening hints, engine suggestions, game history, and clock.
- `package.json` shows **React 17 / MobX / Material UI / chess.js / chessboardjsx / TypeScript / react-scripts**.
- `doc/overview.md` describes legacy MobX observables: **Config, Rendering, Players, GameState, Game, GameHistory, Server, Helper, TimeKeeper, RefreshTimer, Messager**.
- Runtime **federation export** exists and is intentionally **narrow / lossy** (`src/chessguide/federation/export_v1.py`).
- This runtime is **valuable but cannot be treated as source doctrine**.

---

## 5. Current product identity

From CG-000 / CG-001 / CG-002:

- ChessGuide is a **Longitudinal Skill Development Domain**.
- **Chess is the domain.**
- **Learning is the mission.**
- **Laris is the guide**, but not automatically active runtime.
- ChessGuide should measure **learning**, not only games.
- It records **development**, not only outcomes.
- It asks **how the player changed**, not only what happened.
- It contributes to the wider **Continuity-Based Learning Platform**.

---

## 6. What ChessGuide is

- A **learner-facing skill-development surface**.
- A **sovereign domain** for chess learning continuity.
- An **evidence and reasoning capture** environment.
- A **domain-specific validation laboratory** for continuity-based learning.
- A **bridge** between chess domain knowledge and learner development.
- A system that can support **Buddy, SCC, Creator, and later clients**.

---

## 7. What ChessGuide is not

- Not a **raw engine wrapper**.
- Not a **tournament platform**.
- Not an **online chess server**.
- Not a **social network**.
- Not a **generic opening explorer**.
- Not a **puzzle-grinding app**.
- Not a **mastery certification engine**.
- Not **LARIS itself**.
- Not **Creator itself**.

---

## 8. What ChessBuddy is

- A **pedagogical chess-domain mentor**.
- Helps **explain, prompt, compare, and scaffold**.
- May use **system chess competence** and **corpus refs** within boundaries.
- Must distinguish: learner statement, system observation, engine reference, corpus ref, explanation, claim, evidence, mastery.
- Must **not** certify mastery.
- Must **not** impersonate learner rationale.
- Must **not** turn an engine line into pedagogy automatically.

---

## 9. What LARIS is and is not in ChessGuide

- LARIS is the **federation guide** for longitudinal learning understanding.
- LARIS is **not active runtime** in ChessGuide yet.
- LARIS activation requires a **separate Activation Plan and ACG pass**.
- LARIS must **not** be silently introduced through Buddy, client surfaces, or runtime helpers.
- LARIS should eventually help with **cross-domain learning continuity**, not chess-specific move authority.

---

## 10. What System Chess Competence is

- A **system-owned chess-understanding lane**.
- Distinct from **learner state**.
- Distinct from **engine reference**.
- Distinct from **corpus refs**.
- Distinct from **Buddy explanation**.
- Supports **teaching and classification**.
- Grounded in **SCCR-001** and **SCC-HLD-001**.
- Future **LLD** must define classes and typed boundaries.

---

## 11. What Stockfish / engine reference is

- A **measurement / reference lane**.
- A **referee, validation, evaluation source**.
- **Not** a teacher oracle.
- **Not** learner reasoning.
- **Not** corpus truth.
- **Not** evidence by itself.
- Must be captured as an immutable **EngineAnalysisSnapshot** when used.
- **Reveal timing is pedagogical policy.**

---

## 12. What Creator continuity means operationally

- Creator continuity means future systems can **replay / interpret why** concepts, evidence, claims, explanations, and state transitions existed.
- It requires **versioned refs, source IDs, curation status, boundary flags, event lineage**, and no flattening into free text.
- A **100-year replay** must preserve **meaning**, not just bytes.
- Every **graph, scanner, Buddy, client surface, and runtime wave** must preserve this.

---

## 13. Strategic architecture after ACG-001

1. Governance / ADR doctrine
2. Corpus / Knowledge Graph
3. System Chess Competence
4. Learner Graph
5. Learning Frontier
6. Tactical Safety Scanner
7. Buddy pedagogy
8. LARIS activation gate
9. Client surfaces: Android / Chrome
10. Runtime implementation
11. Creator continuity serving
12. Federation lossy export

---

## 14. Architecture Continuity Gate

| Layer | Strategic interpretation in ChessGuide | Boundary | Next artifact impact |
|-------|----------------------------------------|----------|----------------------|
| Philosophy / learning theory | Learning chain; activity ≠ learning | learning is integration, not activity | Grounds KG/Learner Graph design |
| Governance / ADR | ADR-001–008 + ACG-001 doctrine | doctrine beats runtime | All future PRs cite controlling doctrine |
| Review / HLD | CGSR-002, STRR-001, SCC-HLD-001 | review ≠ implementation | KG/SCC artifacts trace upstream |
| Future LLD / OOP / UML | Scanner/SCC classes (PR 24) | design ≠ runtime | LLD before runtime waves |
| Immutable state transitions | append-only learner/evidence lineage | no silent overwrite | Learner Graph event model |
| Runtime implementation | wrapped legacy + new domain | runtime ≠ doctrine | Phase 8 waves after LLD/UML |
| ChessBuddy / ChessGuide reality sharing | distinct views with custody | Buddy ≠ oracle | Reality-sharing model preserved |
| Creator continuity | versioned, replayable meaning | no flattening | Every artifact preserves lineage |
| Federation boundary | lossy ObservationRecord only | no semantic export | No widening without separate path |

---

## 15. Product layers

| Layer | Role |
|-------|------|
| Legacy runtime shell | Existing React/MobX app; not doctrine |
| Governed learning domain | Sovereign learning semantics |
| Corpus / KG | Governed domain concepts |
| Learner graph | Learner-specific derived state |
| SCC / Tactical scanner | System competence + safety classification |
| Buddy surface | Pedagogical mentor surface |
| LARIS guide layer | Dormant federation guide (gated) |
| Client surfaces | Android / Chrome presentation |
| Creator continuity layer | Replayable long-horizon meaning |
| Federation export layer | Lossy ObservationRecord export |

---

## 16. Reality-sharing model

| Entity | Can see | Can say | Can write | Never writes |
|--------|---------|---------|-----------|--------------|
| Learner | own activity, own statements | self-explanation, intent | learner statements / activity | system observation, claim, mastery |
| ChessGuide system | activity, evidence, KG | system observation | observations, derived read models | learner rationale, mastery certification |
| ChessBuddy | KG, SCC, engine ref, evidence | explanation, scaffold, prompt | explanation drafts/records | claim, mastery, learner rationale |
| System Chess Competence | KG, positions, engine ref | classification, competence view | competence outputs | learner state, mastery |
| Engine reference | position | evaluation, best line | EngineAnalysisSnapshot | doctrine, evidence, pedagogy |
| Corpus / KG | governed concepts | concept definitions | corpus refs, source refs | learner state, evidence, claim |
| Learner Graph | evidence lineage, KG | derived learner state | append-only learner-derived state | corpus doctrine |
| Learning Frontier | Learner Graph + KG | suggestions, planning | read-model views | claim, mastery, mutation of evidence |
| Creator | full lineage | continuity interpretation | continuity/custody lineage | federation semantic export |
| Federation | ObservationRecord slice | lossy observation | ObservationRecord only | corpus_ref, evidence, claims, mastery |

---

## 17. Learning model

- **LearningTrace is evidence and custody, not learning.**
- **Learning is integration achieved.**
- **Activity is not learning.**
- Puzzle solving and game playing are **not mastery**.
- Mastery requires **stable capacity through continuity and governed evidence**.
- Learning Frontier should **suggest, not certify**.
- Buddy should **scaffold, not claim**.

---

## 18. Corpus / Knowledge Graph strategy

- Knowledge Graph must represent **governed domain concepts**.
- It starts from **ADR-008, MCRM-001, OTWP-001, LTCW-001, and CCCR**.
- It must bind **tactics, decision frames, openings, principles, plans, endgames, tablebase refs, and sources**.
- It must **not** contain learner-specific state.
- It must **not** be evidence or claim.
- It must **prepare** future LLD/OOP/UML.

---

## 19. Learner Graph / Learning Frontier strategy

- **Learner Graph** is derived learner-specific state over **evidence lineage**.
- **Learning Frontier** is a **planning read model** over Learner Graph + KG.
- Both require **immutable event semantics**.
- Both must **not** leak through federation.
- Both must remain **distinct from KG**.

---

## 20. Tactical Safety Scanner / SCC strategy

- This is the **first high-risk LLD/UML artifact** after strategy.
- It must define **P0–P5 safety priority**.
- It must separate **engine-best** from **learning-best**.
- It must preserve the **Buddy boundary** and **learner autonomy**.
- It must define **classes, methods, state transitions, and UML before runtime**.
- It should **precede** Buddy/LARIS activation.

---

## 21. Buddy / LARIS activation preconditions

- ACG-001 merged
- STRR-001 merged
- CGSR-002 merged
- Knowledge Graph architecture exists
- Learner Graph / Frontier architecture exists
- Tactical Safety Scanner / SCC LLD + UML exists
- Authority model defined
- Rollback / deactivation path defined
- No federation widening
- No silent learner-state mutation

---

## 22. Android / Chrome surface strategy

- Android and Chrome are **client surfaces**, not authority sources.
- They may **present, capture, prompt, and review** only within governed boundaries.
- **Android** likely focuses on the mobile learning loop, review, reminders, voice/self-explanation later.
- **Chrome** likely focuses on browser-side import/review/overlay risk and has **higher source-ingest ambiguity**.
- Both require **client-surface strategy before implementation**.
- Neither may weaken **custody / evidence / federation / Buddy authority** boundaries.

---

## 23. Runtime strategy

- Runtime implementation starts **only after** strategy/HLD/LLD/UML/state plan.
- Legacy runtime should be **wrapped, not blindly rewritten**.
- Runtime waves should be **small but semantically meaningful**.
- First runtime wave should likely be **typed domain records or read-only scanner**, not agent activation.
- Runtime modernization (React/MobX) should be **evaluated separately** from domain architecture.

---

## 24. Federation strategy

- Federation export remains **lossy and non-semantic**.
- Current export model is **completed-game ObservationRecord only**.
- Do **not** export `corpus_ref`, `source_refs`, DecisionTrace, EvidenceRecord, claims, mastery, Buddy rationale, cross-walk metadata, opening labels, puzzle themes.
- Any widening requires **separate governance + HLD + LLD + tests**.

---

## 25. State and immutability strategy

- All learner-significant state must be **append-only or immutable**.
- Corrections create **new versions**.
- Derived read models must be **labeled as derived**.
- Engine snapshots **immutable**.
- Buddy explanations: **draft / record separation**.
- Creator must preserve **source / custody / version lineages**.

---

## 26. Strategic risks

| Risk | Consequence | Mitigation |
|------|-------------|------------|
| Runtime-first relapse | Implementation outruns governance | ACG gate; STRR sequence |
| Engine-as-teacher relapse | ADR-007 violation; oracle drift | Engine = measurement only |
| Buddy overclaiming | Activity treated as mastery | ADR-004/006; reality-sharing |
| LARIS activation too early | Agent overreach before competence design | Activation separate + gated |
| KG / Learner Graph collapse | Corpus mistaken for learner state | Keep KG vs Learner Graph distinct |
| Federation semantic leak | Sovereignty/privacy breach | Lossy export; leak tests |
| Chrome ingest ambiguity | Unlicensed scraping/import | Separate Chrome ADR |
| Android custody weakening | Client erodes evidence/custody | Strategy preserves boundaries |
| Creator continuity flattening | Loss of historical meaning | Versioned refs; no prose flattening |
| Over-batching | Unsafe mixing of layers | Separation rules |
| Under-batching | Slow architectural progress | Coherent batches |
| Legacy rewrite distraction | Effort lost rewriting shell | Wrap, don't rewrite |

---

## 27. Strategic decisions

| Decision ID | Decision | Rationale | Consequence |
|-------------|----------|-----------|-------------|
| **CGSR2-D1** | STRR-001 is roadmap controller | Single sequencing authority | All PRs follow STRR sequence |
| **CGSR2-D2** | Knowledge Graph before Learner Graph | Concepts ground learner state | KG = PR 22, Learner Graph = PR 23 |
| **CGSR2-D3** | Learner Graph + Learning Frontier may be batched architecturally | Same architecture family | One PR, conceptually separate |
| **CGSR2-D4** | Tactical Safety Scanner / SCC LLD + UML before Buddy/LARIS | Competence before authority | PR 24 before PR 25 |
| **CGSR2-D5** | Buddy/LARIS activation separate | Changes agent authority posture | Always its own gated PR |
| **CGSR2-D6** | Android/Chrome strategy before implementation | Surfaces are not authority | Strategy PR 26; impl later |
| **CGSR2-D7** | Runtime after LLD/UML/state transition strategy | Traceable implementation | Runtime waves = PR 27+ |
| **CGSR2-D8** | Federation widening separate | Sovereignty protection | Needs own ADR/HLD/LLD/tests |
| **CGSR2-D9** | Legacy runtime shell is not doctrine | Runtime ≠ truth | Wrap, don't treat as canon |
| **CGSR2-D10** | Creator continuity is an acceptance criterion | 100-year replay required | Every artifact preserves lineage |

---

## 28. Open questions

| ID | Question |
|----|----------|
| **CGSR2-OQ-1** | Should ChessGuide Strategic Review v2.0 supersede CG-001 or only interpret it? |
| **CGSR2-OQ-2** | Should KG v1.0 be review, HLD, or combined review/HLD? |
| **CGSR2-OQ-3** | Should Learner Graph and Learning Frontier have separate files in one PR? |
| **CGSR2-OQ-4** | What minimum runtime prototype follows PR 24? |
| **CGSR2-OQ-5** | What condition activates Buddy beyond explanation draft? |
| **CGSR2-OQ-6** | What condition activates LARIS? |
| **CGSR2-OQ-7** | Should Chrome import/overlay need its own ADR? |
| **CGSR2-OQ-8** | Should React/MobX modernization happen before runtime domain implementation? |
| **CGSR2-OQ-9** | Should PR templates include an ACG checklist before PR 27? |
| **CGSR2-OQ-10** | How should Creator continuity be validated mechanically? |

---

## 29. Recommendation

- **Merge PR #20 first.**
- Use **CGSR-002** to define ChessGuide strategic identity after ACG.
- Then create **KG v1.0**.
- Then **Learner Graph + Learning Frontier**.
- Then **Tactical Safety Scanner / SCC LLD + UML**.
- Then **Buddy/LARIS Activation Plan**.
- Then **Android/Chrome strategies**.
- **Runtime waves** come only after LLD/UML/state transition design.

---

## 30. Governance boundary statement

**CGSR-002 does not modify** runtime, tests, federation export, schemas, implementation files, accepted ADRs, datasets, source downloads, corpus registry JSON/YAML, JSON Schema, HLD, LLD, UML artifacts, Buddy runtime, Creator runtime, Android runtime, Chrome runtime, or **LARIS activation**.

It creates a **human-readable strategic review only**.
