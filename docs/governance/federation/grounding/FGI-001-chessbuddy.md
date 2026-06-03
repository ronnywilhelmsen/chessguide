# FGI-001 — ChessBuddy (frozen source)

**Path:** `chessbuddy\chessbuddy` · **Evidence:** README, `docs/governance/chessbuddy/`, `src/`, `doc/`

**Note:** Frozen migration source; active line is **ChessGuide**. Content largely **byte-identical** to chessguide extraction (CG-MIG-001).

---

## Section 1 — Project Identity

1. **What?** Personal chess **mentor** / Buddy — longitudinal skill development companion ([README](https://github.com/ronnywilhelmsen/chessbuddy) — local README).

2. **Why?** Capture the **journey** of skill development, not only game outcomes ([CB-001](../../chessbuddy/CB-001-product-vision.md)).

3. **Problem?** Moment-focused tools vs longitudinal learning ([CB-001](../../chessbuddy/CB-001-product-vision.md)).

4. **Success?** Visible transformation over time; Buddy explains before dictating ([CB-001](../../chessbuddy/CB-001-product-vision.md)).

5. **Failure?** Becoming arena, raw engine, or rating-chase platform ([CB-001](../../chessbuddy/CB-001-product-vision.md)).

6. **NOT:** Online chess server, tournament platform, social network as mission ([CB-000](../../chessbuddy/CB-000-federation-alignment.md)).

---

## Section 2 — Reality

7. **Reality:** Chess games, study, physical-friendly play context ([CB-001](../../chessbuddy/CB-001-product-vision.md)).

8. **Interfaces:** Web app (**implemented**); documents; **planned** physical/camera per [CB-007](../../chessbuddy/CB-007-physical-chess-and-amr-product-requirements.md) (governance).

9. **Observation sources:** FEN, moves, clock, openings, engine — **implemented** ([CB-000](../../chessbuddy/CB-000-federation-alignment.md)).

10. **Entering system:** Game/episodic telemetry — **implemented**; learning-bearing LOE events — **not in codebase** (pilot **planned** in ChessGuide line).

---

## Section 3 — Continuity

11. **Preserve:** LearningTrace, player history, stewardship ([CB-005](../../chessbuddy/CB-005-learningtrace-product-schema.md)).

12. **Create:** Longitudinal skill development trajectory — **governance**.

13. **Transform:** SkillTransformation — **governance**; CTV validation **planned**.

14. **Primitives:** LearningTrace hierarchy; federation chain ([CB-000A](../../chessbuddy/CB-000A-longitudinal-learning-model.md), [CB-005](../../chessbuddy/CB-005-learningtrace-product-schema.md)); ALP trace protocols (**governance**, experiments **approved**).

15. **Assumptions:** A-1–A-6, I-1–I-6 in [CB-000](../../chessbuddy/CB-000-federation-alignment.md).

16. **Gaps:** Product LearningTrace for learning events; Creator runtime; ChessGuide successor identity — **addressed in chessguide repo**, not here.

---

## Section 4 — Transformation

17–19. **Detect/support/validate:** Per CB-000A chain; ALP steward validation **governance**; automated CTV **planned**.

20. **Evidence required:** Trace lineage, CTV, steward ([CB-000A](../../chessbuddy/CB-000A-longitudinal-learning-model.md)).

21. **Available:** ALP pilot records in docs; game history in app — **partial**.

---

## Section 5 — Resources

22. **Provided:** CB/ALP governance; FLL-0/0M/0X reference experiments; LSDD definition — **governance**.

23. **Consumes:** FCA alignment; Creator layers — **planned**.

24. **Assets:** CB-000–CB-007, ALP-1–3 (**governance**); React app (**implemented**).

---

## Section 6 — Architecture

25. **Exist:** React + PHP + WASM bots — **implemented** (same stack as chessguide).

26. **Planned:** Roadmap phases in [CB-003](../../chessbuddy/CB-003-roadmap-and-delivery-strategy.md) — **governance**.

27. **Operational:** Legacy deployment (chess.digre.com) — **implemented** per README.

28–29. **Prototype/governance:** Physical chess **governance only**; federation docs live in **chessguide** post-extraction.

---

## Section 7 — Federation Relationships

30. **Depend on:** Was designated FLL-1 validation domain ([CB-000](../../chessbuddy/CB-000-federation-alignment.md)) — role **transferred to ChessGuide**.

31. **Depends on:** Creator OAT/CTP/CTV — **planned** ([CG-DEP-001](../CG-DEP-001-federation-dependency-analysis.md) in chessguide).

32–36. Same dependency picture as ChessGuide; **no separate contracts** in this repo.

---

## Section 8 — Current State

37. **Implemented:** Full legacy app + approved governance/ALP docs.

38. **Partial:** LearningTrace product vs schema.

39. **Conceptual:** FLL-1 domain pilot (continues in ChessGuide).

40. **Undefined:** Post-freeze development (explicitly frozen).

41. **Blockers:** Repository frozen — **no active development** per migration policy.

42. **Opportunities:** Historical reference for ALP and CB lineage.

---

## Section 9 — Roadmap

43–47. **Frozen** — [CB-003](../../chessbuddy/CB-003-roadmap-and-delivery-strategy.md) is **historical**; active roadmap is **ChessGuide**.

---

## Section 10 — Long-Term Vision

48–50. Superseded by **ChessGuide** identity ([CG-000](../../chessguide/CG-000-chessguide-identity.md)). ChessBuddy remains **reference artifact**.

---

## Section 11 — Federation Summary

**A.** ChessBuddy is the **frozen** federation chess domain and ALP reference host: rich **governance** and a **working legacy app**, superseded by ChessGuide for active work.

**B.** Contributions:** (1) CB/ALP canon (2) FLL-0 validation (3) LSDD + LearningTrace schema seeds.

**C.** Dependencies:** Creator infrastructure (planned); now tracked via ChessGuide/CG-DEP-001.

**D. Maturity:** **FRL-0–1** artefacts; **frozen** — no FRL advance in this repo.

**E.** Distance:** N/A for active development — archival.

**F.** Next step:** **None** in this repo — use ChessGuide.
