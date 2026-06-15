# LEF-2C — Runtime Observability Study

## Governance Research Study (Capability Formation Observability Investigation)

| Field | Value |
|-------|-------|
| **Study ID** | LEF-2C |
| **Parent** | [CFA v1.0](../CFA-v1.0.md), [LEF-2B](LEF-2B-canonical-cfa-diagram-and-terminology.md) |
| **Date** | 2026-06-04 |
| **Status** | Complete |
| **Scope** | Repository runtime + governance; CFA observed, not modified |
| **Constraints** | No ADR, runtime changes, federation/Creator changes, instrumentation proposals |

---

## 1. Executive Summary

LEF-2C asks: **if CFA v1.0 is correct, how much of it is visible in runtime evidence today?**

### Verdict: **C — Mostly inferred**

| Outcome | Detail |
|---------|--------|
| **Directly observable today** | Completed-game **episodes** (`Game.toString`, `GameHistory`), **move replay**, coarse **time ordering**, **federation export slice** of completed games |
| **Indirectly observable** | Engine CP in UI session only (`helper.ts`); opening markers; config UI toggles (not CB-006 modes) |
| **Steward-observable** | Transformation Claim, C0–C4, LOE-011, full stewardship workflow — **governance-defined, not runtime-instantiated** |
| **Currently unobservable** | Integration process, LOE/DOE events, ExplanationArtifact, IM-1 fields, CB-006 user modes, Path Quality/Potency, Mastery Horizon |

### Core finding

**CFA v1.0 is primarily an explanatory and governance model at current runtime maturity.** Runtime evidence supports **a thin LearningTrace projection** (game episodes + replay) and **a federation continuity slice** — not the full CFA ladder.

**Runtime evidence is not sufficient to operationalize CFA v1.0** without steward interpretation and/or future event capture (CG-FLL-1E catalog exists; **not implemented** in `src/`).

### Adversarial result

**Yes** — CFA could function largely as explanatory architecture with little runtime visibility; repository state **supports** that falsifier for tiers above raw game evidence.

---

## 2. Observability Principles (Part 1)

Definitions grounded in what the repository **actually records, exports, or forbids**.

### Directly observable

Evidence a runtime component **materializes** without steward interpretation: stored fields, replayable artifacts, export payloads validated by tests.

**Repo anchors:** `src/data/game.ts` (`Game`, `GameHistory`), `src/data/rules.ts` (`replay`), `src/chessguide/federation/export_v1.py`, `tests/unit/test_federation_export.py`.

### Indirectly observable

Signals **present in session** or derivable by computation **not persisted** as learning evidence, or only weakly linked to CFA tiers.

**Repo anchors:** `src/data/helper.ts` (engine CP), `src/data/config.ts` (UI flags), opening tree in `openings.ts`.

### Steward-observable

Requires **human steward** procedure, attestation, or narrative not automated in runtime.

**Repo anchors:** CG-FLL-1E (C0–C4, LOE-011, replay verdict), CB-005 stewardship lifecycle (semantic, not coded).

### Currently unobservable

No runtime type, storage key, export field, or test fixture — only governance text.

**Repo anchors:** LOE-001–011, DOE catalog, CB-006 modes, CB-005 IM-1 / ExplanationArtifact fields — **absent from `src/`**.

---

## 3. LearningTrace Observability (Part 2)

| CFA facet | Runtime status | Evidence |
|-----------|----------------|----------|
| **Evidence** | **Partial direct** | `Game.log`, `Game.toString()` — moves, players, times, date token |
| **Custody** | **Weak direct** | `localStorage` (`game`, `log`); optional `server.ts` sync — no actor/session hierarchy |
| **Continuity** | **Partial direct** | Ordered `GameHistory.history`; federation `continuity_id` per completed game |
| **Trajectory** | **Indirect** | Sequence of games per player name filter — no anchors, LOE, or episode IDs |

### What exists

```120:123:src/data/game.ts
  toString: () => string = () =>
    `${this.date.toString(36)};${this.white};${this.black};${this.wtime.toString(
      36
    )};${this.btime.toString(36)};${this.log.join(' ')}`;
```

```160:164:src/data/game.ts
  storeGame: VoidFunction = () => {
    this.history.push(game.toString());
    this.history.sort((n1, n2) => (n1 > n2 ? 1 : n1 == n2 ? 0 : -1));
    localStorage.setItem('log', this.history.join('\n') ?? []);
  };
```

### What CB-005 requires but runtime lacks

Actor → Session → Episode → Event hierarchy; LOE-tagged events; IM-1 measured/perceived fields; stewardship log — **governance only** ([CB-005](../../chessbuddy/CB-005-learningtrace-product-schema.md)).

**Verdict:** LearningTrace is **~15–20% observable** as CFA intends — **episode grain only**, not full trace semantics.

---

## 4. Longitudinal Path Observability (Part 3)

| Question | Answer |
|----------|--------|
| Direct observation? | **No** — no path object, anchor registry, or recurrence metric in runtime |
| Inference only? | **Yes** — steward/analyst may infer path from sorted `GameHistory` lines per player |

**Evidence:** LEF-1B/2A marked Longitudinal Path **E3 interpretive**; runtime has no `path_` or `anchor_` identifiers (grep `src/`).

**Verdict:** **Indirect at best**; **steward-inferred** for any claim beyond “played N games.”

---

## 5. Capability Conditions Observability (Part 4)

| Condition (CFA / LEF-1E) | Observable today? | Evidence |
|--------------------------|---------------------|----------|
| **User modes** (CB-006) | **Missing** | No mode enum in `config.ts` or `game.ts` |
| **Autonomy** (PI-3) | **Missing** | Not stored per episode |
| **Attention policy** | **Missing** | No focus contract ID |
| **Engagement** | **Missing** | No engagement signal |
| **Challenge fit** | **Missing** | Bot selection exists (`bots.ts`) but not logged in `toString()` |
| **Engine / hints exposure** | **Indirect** | `config.showHints`, `config.showCP` — session UI only, not in game artifact |
| **Time pressure** | **Partial direct** | `wtime`/`btime` in game string — not mapped to mode |

**Verdict:** Capability Conditions tier is **largely unobservable** in persisted evidence; **weak session proxies only**.

---

## 6. Integration Observability (Part 5)

| Channel | Observable? | Evidence |
|---------|-------------|----------|
| **Explicit integration** (LOE/DOE) | **No** | CG-FLL-1E catalog; zero LOE references in `src/` |
| **Implicit integration** | **No** | CG-FLL-002 principle; no compression/uptake signal |
| **Effects only** | **Weak indirect** | Move sequences, results — **activity**, not integration (I-3) |

**Verdict:** Integration **cannot be observed** — only **inferred** from play patterns or **steward-attested** via future LOE events. Aligns with CG-FLL-002: learning = integration achieved, but **achievement is not instrumented**.

---

## 7. Path Quality Observability (Part 6)

| Question | Answer |
|----------|--------|
| Measurable in runtime? | **No** — no quality score, normative tags, or LOE linkage |
| Steward-assessed only? | **Yes** — LEF-1C + CG-FLL-1E observability criteria are procedural |

**Possible weak proxies (not CFA-quality):** game result, move count, opening branch — **activity metrics**, not normative path quality.

**Verdict:** **Steward-observable / inferred only**.

---

## 8. Path Potency Observability (Part 7)

| Evidence type | Exists? |
|---------------|---------|
| Potency unit / yield metric | **No** |
| Comparative capability across episodes | **No** automated |
| LOE-004 / transfer signals | **No** |
| Transformation-adjacent runtime | **No** |

**Weak proxy:** win/loss in terminal position derivable from move list (`export_v1.py` `result`) — **outcome**, not potency (LEF-1C Case A: strong path, low potency).

**Verdict:** **Unobservable** except steward narrative.

---

## 9. Stewardship Observability (Part 8)

| Component | Runtime evidence | Notes |
|-----------|------------------|-------|
| **Replay** | **Direct (moves only)** | `rules.replay` reconstructs position — no replay verdict field |
| **Lineage** | **Missing** | No event graph, parent refs, LOE IDs |
| **C0–C4** | **Missing** | CG-FLL-1E only |
| **Threshold review** | **Missing** | IM-1 not stored |
| **LOE-011 gate** | **Missing** | No transformation events |

**Export note:** Federation uses `actor_type: steward` in fixture — **provenance label**, not runtime stewardship workflow ([chessguide_game_import_observation.v1.json](../../../../tests/fixtures/federation/chessguide_game_import_observation.v1.json)).

**Verdict:** **Replay mechanics observable**; **stewardship as CFA tier = steward-observable only**.

---

## 10. Transformation Claim Observability (Part 9)

| Requirement (CG-FLL-1E) | Runtime |
|---------------------------|---------|
| LOE-011 event | **Absent** |
| ≥2 prior events from different stages | **Absent** |
| C4 verdict | **Absent** |
| Steward sign-off | **Absent** |

**Direct:** terminal game + result in export payload.  
**Inferred:** skill change from game series — **not valid** per I-3 / CG-FLL-002 without integration evidence.

**Verdict:** **Steward-observable only**; **claim tier unobservable** in runtime today.

---

## 11. Mastery Horizon Observability (Part 10)

| Question | Answer |
|----------|--------|
| Direct observation? | **No** — no mastery level in runtime (explicitly forbidden in export) |
| Inferred via continuity? | **Weak** — long game history suggests practice, not mastery |

```28:71:src/chessguide/federation/export_v1.py
_FORBIDDEN_EXPORT_ROOT_KEYS = frozenset(
    {
        ...
        "mastery",
        ...
    }
)
```

**Verdict:** **Unobservable**; any mastery talk is **governance horizon**, not runtime state.

---

## 12. ExplanationArtifact Observability (Part 11)

| Question | Answer |
|----------|--------|
| Explanations as structured artifacts? | **No** — `explanation` forbidden in federation export; no CB-005 fields in app |
| Explanation quality? | **No** |
| P1 / P2 placement | **N/A** at runtime |

**Verdict:** **Unobservable** — LEF-0C–0D remain **governance hypotheses**.

---

## 13. Continuity Observability (Part 12)

| Representation | Observable? | Evidence |
|----------------|-------------|----------|
| **Horizontal substrate (CFA)** | **Partial** | Time-sorted history; multiple games per player |
| **Federation continuity_id** | **Direct (export)** | `game:{actor_id}:{game_id}` from completed line |
| **Cross-game actor continuity** | **Indirect** | Same player name across lines — no sovereign actor registry in app |
| **Session / biological continuity** | **Missing** | CG-FLL-003, FCS-001 — not in runtime |

**Verdict:** **Game-scoped continuity direct** via export; **longitudinal continuity partial** via history list only.

---

## 14. Runtime Coverage Matrix (Part 13)

| CFA Element | Direct | Indirect | Steward | Missing |
|-------------|--------|----------|---------|---------|
| **LearningTrace** | Episode lines, localStorage | Multi-game ordering | Full trace semantics | Actor/Session/Event, LOE |
| **Longitudinal Path** | — | Game series shape | Path narrative | Anchors, recurrence |
| **Capability Conditions** | Clock times in string | UI hint/CP toggles | Mode assessment | CB-006 modes, autonomy, attention |
| **Integration** | — | Move patterns (weak) | LOE/DOE attestation | Implicit/explicit channels |
| **Path Quality** | — | Result, move count (weak) | Steward review | Normative quality |
| **Path Potency** | — | Win/loss (misleading) | Steward assessment | Yield evidence |
| **Stewardship** | Move replay | — | C0–C4, LOE-011, verdicts | Lineage graph |
| **Transformation Claim** | Completed game | — | LOE-011 bundle | All claim machinery |
| **Mastery Horizon** | — | — | Long-horizon judgment | Any mastery signal |
| **ExplanationArtifact** | — | — | P1/P2 artifacts | Storage, export |
| **Continuity** | Export continuity_id, sorted history | Player name linkage | FCS-style claims | Session model |
| **Federation export slice** | T3 ObservationRecord | — | actor_type label | Learning payload |

---

## 15. Observability Gaps (Part 14)

| Gap | Impact on CFA |
|-----|----------------|
| No LOE/DOE event store | Integration, explicit channel, Quality, Potency **invisible** |
| No CB-006 mode in artifacts | Capability Conditions **invisible** |
| No IM-1 measured/perceived | Threshold, gap discipline **invisible** |
| No ExplanationArtifact schema in app | Orthogonal layer **invisible** |
| No stewardship log / C4 | Transformation Claim **non-operational** |
| Export explicitly strips learning | Federation path **cannot** observe CFA tiers |
| CP/engine exists but not persisted | Measured signals in CB-005 **not captured** |

**Largest gap:** **Integration tier** — CFA’s definition of learning has **no runtime witness**.

---

## 16. Minimal Observability Architecture (Part 15)

Smallest runtime signal set **already present** that **partially supports** CFA evidence substrate (not full CFA):

| # | Signal | Supports |
|---|--------|----------|
| 1 | **Completed game line** (`Game.toString`) | LearningTrace episode, federation export |
| 2 | **GameHistory ordering** | Weak continuity, inference input |
| 3 | **Move replay** | Stewardship replay mechanic (position only) |
| 4 | **Player identity in line** | Actor filter (`getFilteredGames`) |

**Necessary for CFA beyond today (governance-defined minimum — not implementation proposal):**

| # | Signal class | CFA tier enabled |
|---|--------------|------------------|
| A | **Episode ID + actor ID** | Trace custody |
| B | **Mode tag per episode** | Capability Conditions |
| C | **LOE/DOE event records** | Integration, explicit channel |
| D | **Stewardship verdict record** | Transformation Claim |
| E | **Optional IM-1 snapshot** | Threshold signals |

**Current repository minimum:** **{1, 2, 3, 4}** only.

---

## 17. Adversarial Test (Part 16)

**Hypothesis:** CFA exists largely as explanatory model with little runtime visibility.

| Test | Result |
|------|--------|
| Can CFA tiers 4–9 be derived from `Game.toString` alone? | **No** without overfitting (activity ≠ learning) |
| Does governance assume more than runtime delivers? | **Yes** — CG-FLL-1E vs `src/` gap |
| Is CFA falsified? | **No** — CFA is **logical/governance** architecture |
| Is runtime observability falsified as “full CFA”? | **Yes** — **most tiers are not visible** |

**Conclusion:** Adversarial test **passes**. CFA **survives** as canonical reference; **runtime observability of full CFA does not**.

---

## 18. Candidate Futures (Part 17)

Analysis only — **no implementation**.

### O1 — Current runtime observability (baseline)

- Episodes + replay + federation game export  
- CFA tiers 1, 12 (partial), export slice: **visible**  
- All interpretive and governance tiers: **inferred or steward-only**

### O2 — Moderate observability

- CB-005 hierarchy in storage; mode tag; persisted CP/deviation samples; manual LOE entry  
- **Would expose:** Conditions (partial), Integration (explicit only), measured IM-1  
- **Still steward:** Quality, Potency, Claims, Mastery

### O3 — High observability

- Full LOE/DOE stream, stewardship UI, ExplanationArtifact refs, lineage graph  
- **Would expose:** Most CFA tiers except implicit integration and mastery horizon (still interpretive)

---

## 19. Architectural Verdict (Part 18)

| Criterion | Result |
|-----------|--------|
| **Selected outcome** | **C — Mostly inferred** |
| **Directly observable tiers** | LearningTrace (partial), Continuity (partial), Federation export slice, replay mechanic |
| **Inferred tiers** | Longitudinal Path, weak Conditions proxies, weak activity proxies for Integration/Quality/Potency |
| **Steward-required tiers** | Stewardship (workflow), Transformation Claim |
| **Missing tiers** | Integration (core), ExplanationArtifact, Mastery Horizon, full Conditions, Quality/Potency as CFA concepts |
| **CFA primarily observational or explanatory?** | **Explanatory** at current runtime |
| **Runtime sufficient for CFA v1.0?** | **No** — sufficient for **evidence substrate + export boundary** only |

**Not D (largely unobservable):** completed games and replay are real, tested, exported.  
**Not B (partially observable):** would overstate Integration, Conditions, and claim machinery.

---

## 20. Conclusion

LEF-2C observes CFA v1.0 against repository reality without modifying the architecture.

**What can be seen:** chess episodes, move lists, coarse timestamps, local/server history, position replay, federation **game_import** observations.

**What cannot be seen:** learning, integration, explanations, mastery, modes, stewardship verdicts, LOE lineage, or transformation claims.

**Implication for contributors:** Treat [CFA v1.0](../CFA-v1.0.md) as the **map**; treat `src/data/game.ts` and [FEDERATION.md](../../../../FEDERATION.md) as the **current instrument** — a **narrow slice** of that map.

Weak observability is **reported, not hidden**. CFA remains valid as **governance architecture**; runtime **does not yet witness** most of its tiers.

---

## Evidence Summary

| ID | Finding |
|----|---------|
| E-2C-1 | Runtime = `Game` + `GameHistory` + `rules.replay`; no LOE in `src/` |
| E-2C-2 | Federation export forbids learning/mastery/explanation fields |
| E-2C-3 | Engine CP in `helper.ts` — session-only, not in game artifact |
| E-2C-4 | CG-FLL-1E defines observability target; not implemented |
| E-2C-5 | CB-005 schema >> runtime projection |
| E-2C-6 | Verdict **C — Mostly inferred** |

## Contradictions

| ID | Issue | Resolution |
|----|-------|------------|
| C-2C-1 | CFA diagram implies observability ladder | Diagram = **logical dependencies** (CFA v1.0 core rule) |
| C-2C-2 | Replay exists → stewardship looks runtime-ready | Replay = **position reconstruction** only, not C4 verdict |
| C-2C-3 | Tests prove federation export | Export **≠** CFA observability |

## Open Questions

| ID | Question |
|----|----------|
| OQ-2C-1 | Should CFA v1.0 gain an “observability overlay” appendix? |
| OQ-2C-2 | LEF-2D gap-prioritization study (governance only)? |
| OQ-2C-3 | When does FLL-1 pilot require O2 signals? |

## Related

- [CFA v1.0](../CFA-v1.0.md)
- [LEF-2A](LEF-2A-capability-formation-architecture.md)
- [LEF-2B](LEF-2B-canonical-cfa-diagram-and-terminology.md)
- [CB-005](../../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CG-FLL-1E](../../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [FEDERATION.md](../../../../FEDERATION.md)
- [src/data/game.ts](../../../../src/data/game.ts)
- [src/chessguide/federation/export_v1.py](../../../../src/chessguide/federation/export_v1.py)
