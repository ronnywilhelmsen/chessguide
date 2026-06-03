# FGI-001 — ChessGuide

**Interrogation date:** 2026-06-03 · **Evidence:** Repository `chessguide` (governance, `src/`, `doc/`, federation docs)

**Status legend:** Implemented | Partially implemented | Planned | Aspirational | Governance only

---

## Section 1 — Project Identity

1. **What is the project?** A **longitudinal skill development domain for chess** and the federation's active development line after extraction from ChessBuddy ([CG-000](docs/governance/chessguide/CG-000-chessguide-identity.md)). **Governance only** for identity; **partially implemented** as legacy chess web app.

2. **Why does it exist?** To observe, understand, guide, and improve **skill development over time** — learning is the mission, chess is the domain ([CG-001](docs/governance/chessguide/CG-001-product-vision.md)).

3. **What problem?** Tools capture moments (games, ratings); ChessGuide targets the **journey** and *how the player changes* ([CG-001](docs/governance/chessguide/CG-001-product-vision.md)).

4. **Success?** Player sees learning, understanding, and transformation — not only performance ([CG-001](docs/governance/chessguide/CG-001-product-vision.md)); FLL-1 pilot produces observable learning continuity ([CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)).

5. **Failure?** Collapse into Chess.com/Lichess clone, engine wrapper, or activity without learning distinction ([CG-000](docs/governance/chessguide/CG-000-chessguide-identity.md), [CG-FLL-002](docs/governance/chessguide/CG-FLL-002-learning-semantics.md)).

6. **NOT try to do?** Social network, tournament platform, game portal, chess engine wrapper as mission; not federation platform; not Laris ([CG-000](docs/governance/chessguide/CG-000-chessguide-identity.md)).

---

## Section 2 — Reality

7. **Reality interacted with:** Chess play and study sessions (digital); friendly/physical play referenced in inherited CB docs; human learner skill trajectory.

8. **Reality interfaces (expected/actual):**

| Interface | Status |
|-----------|--------|
| Web UI (React) | **Implemented** (`src/`, `public/`) |
| PHP API / WS (`api.php`, `ws.php`) | **Implemented** |
| Documents (governance) | **Implemented** |
| Cameras / physical board | **Planned** ([CB-007](../chessbuddy/CB-007-physical-chess-and-amr-product-requirements.md) — governance only) |
| Federation Creator OAT | **Planned** ([CG-DEP-001](docs/governance/chessguide/CG-DEP-001-federation-dependency-analysis.md)) |

9. **Primary observation sources:** FEN, move log, clock, game history, opening hints, engine CP — **implemented** in legacy app ([CB-000](../chessbuddy/CB-000-federation-alignment.md) OAT mapping).

10. **Observations entering system:** Move events, positions, time, opening recognition, engine suggestions vs human choice — **partially implemented** as game/episodic data; **planned** LOE/DOE learning events per [CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md).

---

## Section 3 — Continuity

11. **Preserve:** LearningTrace custody, player-owned history, federation learning-chain semantics ([CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CG-FLL-003](docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md)).

12. **Create:** **Learning continuity** — integrated progression of observation→wisdom over time ([CG-FLL-003](docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md)).

13. **Transform:** Skill and learning capability (SkillTransformation) — **governance**; validation **planned** via steward / future CTV.

14. **Primitives defined:** Learning continuity ([CG-FLL-003](docs/governance/chessguide/CG-FLL-003-learning-continuity-semantics.md)); Actor→Episode→Event ([CG-FLL-001](docs/governance/chessguide/CG-FLL-001-first-domain-learning-pilot.md), [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md)); LOE/DOE catalogues ([CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)).

15. **Assumptions:** Learning is integration; continuity > intensity; steward validates transformation ([CG-FLL-002](docs/governance/chessguide/CG-FLL-002-learning-semantics.md), ALP precedent).

16. **Gaps:** Federation-standard OAT/CTP/CTV; product LearningTrace persistence for LOE; Laris integration — **planned/missing** ([CG-DEP-001](docs/governance/chessguide/CG-DEP-001-federation-dependency-analysis.md)).

---

## Section 4 — Transformation

17. **Detect:** Skill change, observation capacity change, learning-skill transfer — **governance** ([CG-FLL-001](docs/governance/chessguide/CG-FLL-001-first-domain-learning-pilot.md)).

18. **Support:** Integration mechanisms (reflection, simulation, explanation) — **governance** ([CG-FLL-002](docs/governance/chessguide/CG-FLL-002-learning-semantics.md)).

19. **Validate:** Steward checkpoints C0–C4; future CTV — **partially implemented** (ALP/steward model exists); automated CTV **planned**.

20. **Evidence required:** Trace lineage, LOE/DOE, replay reconstructability ([CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)).

21. **Evidence available today:** ALP artifact traces (inherited docs); legacy game logs — **partial**; FLL-1 pilot evidence **not yet collected** (execution **planned**).

---

## Section 5 — Resources

22. **Provides to federation:** First operational skill domain; learning continuity semantics; FLL-1 laboratory; OAT-1a input candidates ([FDP-001](../federation/FDP-001-federation-development-dependencies.md), [CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)).

23. **Consumes:** Federation alignment (CB-000), Creator OAT/CTP/CTV (**planned**), Laris guidance (**planned**), FCS/FDP/FDS federation studies.

24. **Reusable assets:**

| Asset | Status |
|-------|--------|
| CG-000–CG-FLL-1E governance | **Implemented** (docs) |
| CB/ALP inherited reference | **Implemented** (docs) |
| Federation FCS/FDP/FDS | **Implemented** (docs) |
| Legacy React chess app | **Implemented** (code) |
| LearningTrace runtime | **Planned** |

---

## Section 6 — Architecture

25. **Major components exist:** React UI, MobX state, chess.js/chessboardjsx, WASM bots (Stockfish/Lozza), PHP backend — **implemented**.

26. **Planned:** Domain LearningTrace store; federation observation contract alignment; Android pilot — **governance/planned** ([CB-003](../chessbuddy/CB-003-roadmap-and-delivery-strategy.md), [CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)).

27. **Operational:** Legacy web chess app — **implemented** (demo chess.digre.com per README).

28. **Prototypes:** FLL-1 pilot logging — **planned** (no pilot folder in repo yet).

29. **Governance only:** Entire CG/FLL line; federation dependency/strategy consumption; CB-003–007 product futures.

---

## Section 7 — Federation Relationships

30. **Depend on this project:** Federation learning validation (FLL-1); future domains per [CG-002](docs/governance/chessguide/CG-002-federation-relationship.md) — **aspirational** for other domains.

31. **Depends on:** Creator (OAT, CTP, CTV) — **planned**; Laris — **planned** (important, not FRL-2 blocker); CB-005 semantics — **governance exists**.

32. **Critical:** Creator CTP/CTV for certification; domain observation for FLL-1 — **partial** today.

33. **Optional:** BioChronos, Finkairos, Domosofi runtime coupling — **planned/none**.

34. **Expected contracts:** OAT-1a observation types, CTP replay, CTV validation ([CG-DEP-001](docs/governance/chessguide/CG-DEP-001-federation-dependency-analysis.md)).

35. **Exist today:** Semantic alignment via CB-000/CG-002; no formal API contracts in repo — **governance only**.

36. **Missing:** OAT-1a, CTP, CTV implementations; Laris contract — **planned**.

---

## Section 8 — Current State

37. **Implemented:** Git repo; governance (CG, FLL, federation docs); legacy chess application; HTTPS push to GitHub.

38. **Partial:** LearningTrace (game history only); federation-certified validation; build on Node 22 (node-sass) — **known gap** from verify.

39. **Conceptual:** FLL-1 execution; full LearningTrace product schema in runtime.

40. **Undefined:** Laris integration; physical AMR path implementation.

41. **Blockers:** Creator CTP/CTV for FRL-3; FLL-1 not executed; OAT-1a contract absent.

42. **Opportunities:** Execute FLL-1; feed OAT-1a from real events; first FRL-2 domain ([FDP-002](../federation/FDP-002-federation-development-strategy.md)).

---

## Section 9 — Roadmap

43. **Next milestones:** FLL-1 execution ([CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)); OAT-1a draft; FRL-2 exit ([FDP-002](../federation/FDP-002-federation-development-strategy.md)).

44. **Must complete first:** Pilot evidence + observation catalogue — per FDP-002 immediate actions.

45. **Can wait:** Laris runtime; second domain; full UI rewrite; BioChronos correlation.

46. **Critical path:** FLL-1 → OAT-1a spec → Creator CTP → FRL-3.

47. **Accelerator:** Steward-led FLL-1 with minimal LOE logging ([CG-FLL-1E](docs/governance/chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)).

---

## Section 10 — Long-Term Vision

48. **Final state:** Operational longitudinal skill domain with federation-certified traces and visible learning journeys ([CG-001](docs/governance/chessguide/CG-001-product-vision.md)).

49. **Role at maturity:** First operational learning domain; template for future skill domains ([CG-002](docs/governance/chessguide/CG-002-federation-relationship.md)).

50. **At FRL-5:** Reference LearningTrace patterns, validated learning chain in live chess, inform generic trace core — **aspirational** ([FDP-001](../federation/FDP-001-federation-development-dependencies.md)).

---

## Section 11 — Federation Summary

**A.** ChessGuide is the federation's active chess skill domain: governance and semantics for learning continuity are **implemented** in documents; a **legacy chess app** provides partial observation; the **FLL-1 pilot** is the next evidence gate before Creator certification.

**B. Contributions:** (1) Learning continuity semantics (2) FLL-1 validation lab (3) OAT-1a/event catalogue from real play.

**C. Dependencies:** (1) Creator CTP/CTV (2) CB-005/LearningTrace productization (3) Steward validation model (available).

**D. Maturity:** **FRL-1** (late) → entering **FRL-2**.

**E. Distance from end-state:** Large — certification and multi-domain federation **not** achieved; strong governance foundation.

**F. Next step:** Execute **CG-FLL-1E** Phase 0 and first episodes.
