# ADR-001 — LearningTrace Episode Schema v1: Sovereign Persistence Boundary

| Field | Value |
|-------|-------|
| **Document ID** | ADR-001 |
| **Title** | LearningTrace Episode Schema v1: Sovereign Persistence Boundary |
| **Version** | 1.0 |
| **Status** | Accepted |
| **Date** | 2026-06-06 |
| **Scope** | Semantic persistence boundary for Episode custody (governance only) |
| **Prerequisites** | [CB-005](../chessbuddy/CB-005-learningtrace-product-schema.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [CFA v1.0](../federation/CFA-v1.0.md), [FEDERATION.md](../../FEDERATION.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Accepted** — repository-first architecture decision. Defines the minimum sovereign Episode boundary required before any learning architecture implementation. This ADR is governance only: no runtime, schema files, tests, or federation adapter changes are introduced by its acceptance.

---

## Context

ChessGuide has mature governance for longitudinal learning (CG-000, CG-FLL-002, CB-005, CFA v1.0) and thin runtime evidence (LEF-2C): completed games as `Game.toString()` / `GameHistory`, without Actor → Session → Episode → Event hierarchy, without LOE/DOE events, and without persisted anchors.

**Learning architecture cannot be implemented** until a sovereign Episode boundary exists: identity, Actor custody, terminal semantics, minimum evidence, anchor rules, append-only contract, legacy mapping, and federation projection — without introducing graphs, cognitive types, skill vectors, LARIS activation, or full LOE/DOE schema.

**Repository Truth Hierarchy:** governance (CG/CB/CFA/LEF) > committed reviews > LLD/CDESR (design targets) > runtime (legacy). Doctrine beats runtime where they conflict.

**LearningTrace** is evidence and custody (LEF-0E, CEAR Part 3), not learning. **CFA** is a logical dependency model, not a runtime pipeline (CFA v1.0). **Federation** exports completed-game `ObservationRecord` only ([FEDERATION.md](../../FEDERATION.md)); ChessGuide retains learning.

Discovery reviews (CEAR, CLOR, CDIA) and baseline gap analysis converge: Episode Schema is the first mandatory architecture decision.

---

## Decision

ChessGuide adopts **LearningTrace Episode Schema v1** as the minimum sovereign persistence boundary for one completed chess episode under Actor custody.

### D1 — Canonical names

- **`LearningTrace`** and **`Episode`** are the canonical governance names for this ADR.
- **`LearningJourney`** (LLD v1.0) is a design-target alias only and **must not** be used as the canonical name in governance or persistence contracts until a future ADR explicitly reconciles naming (CLOR P1-3; CDIA OQ-ADR4).

### D2 — Episode identity

| Element | Decision |
|---------|----------|
| **Primary key** | `episode_id` stable across storage, replay, and sync |
| **Legacy source** | Field 0 of `Game.toString()` (`date.toString(36)`) is the authoritative legacy `episode_id` until migrated |
| **Timestamp** | `played_at` derived from base-36 `game_id` (as `export_v1.parse_completed_game_line`) |
| **Container** | Each Episode belongs to exactly one `LearningTrace` for one `Actor` |

### D3 — Actor binding

| Element | Decision |
|---------|----------|
| **Actor** | Human learner whose skill is traced (CB-005 A-2: bot opponents are not LSDD actors) |
| **v1 default** | One primary Actor per device (CB-005 A-1) |
| **Interim identity** | `actor_id` may be derived from white player slug until an explicit Actor registry exists |
| **Custody** | Episodes append under the Actor's LearningTrace; Buddy cannot hide episodes (CB-005 I-2) |

### D4 — Session optionality

**Session is optional in v1.**

- Episodes **without** a Session parent are valid.
- Session is an optional grouping layer (calendar-bounded or explicit play period) per CB-005 and CG-FLL-1E.
- Session may become required for future pilots or multi-device merge rules; that is out of ADR-001 scope.

### D5 — Terminal semantics

| Element | Decision |
|---------|----------|
| **Terminal** | An Episode is committed when the game is complete: last move is `1-0`, `0-1`, `1/2-1/2`, or SAN ending in `#` |
| **Non-terminal** | In-progress games are not Episodes in custody (current `localStorage` game only) |
| **Transformation gate** | No transformation tags without terminal Episode + CTV (CB-005 I-1); transformation persistence is deferred |

### D6 — Minimum Episode v1 evidence

The minimum sovereign evidence per completed Episode is:

| Evidence | Required |
|----------|----------|
| **Move stream** | Yes — at least one move; empty log is invalid |
| **Terminal semantics** | Yes — explicit result token or inferable terminal from last move |
| **Participants** | Yes — White and Black references |
| **Times** | Yes — per-side time aggregates (may be zero) |

Optional CB-005 signals (`opening.recognized`, `hint.*`, `reflection.*`, IM-1 fields) are **not** required for Episode v1 validity.

v1 permits either (a) a normalized event list or (b) a legacy serialized observation stream, provided a normalization adapter enforces the same invariants on read.

### D7 — ChessAnchor rules AN-1–AN-4

Adopted semantically for Episode v1:

| Rule | Requirement |
|------|-------------|
| **AN-1** | Every Episode has ≥1 anchor |
| **AN-2** | Anchors are immutable once written |
| **AN-3** | Anchor types: `move`, `opening`, `position_class`, `focus_contract` |
| **AN-4** | Cross-episode anchors enable pattern queries (semantics adopted; query API out of scope) |

**v1 minimum anchor:** a `move` anchor on the first move **or** `episode_id` / `game_id` as custody anchor. Opening-ID anchors are recommended when the opening tree matches but are not runtime-required in v1.

### D8 — Append-only event contract

- After terminal commit, Episode body and committed events are **append-only**; anchors obey AN-2.
- Corrections use new events or steward-attested supplements — not silent overwrite (CB-005 sync: merge by episode identity).
- Episode deletion is Actor-initiated per CB-005 stewardship semantics.
- Measured and Perceived fields must not be conflated in storage semantics (CB-005 I-3).

### D9 — Legacy `Game.toString()` encoding

**Legacy `Game.toString()` is a valid Episode v1 encoding via adapter.**

Format (six semicolon-separated fields):

```text
{game_id_base36};{white};{black};{wtime_base36};{btime_base36};{move1 move2 ...}
```

| Legacy field | Episode v1 semantics |
|--------------|---------------------|
| 0 | `episode_id` / `game_id` |
| 1–2 | Participants (White / Black) |
| 3–4 | Per-side time aggregates |
| 5 | Move sequence with implicit terminal |
| Storage | `GameHistory` newline-joined lines |

ADR-001 defines semantics, not mandatory format migration (CB-005 § Legacy alignment note).

### D10 — LOE/DOE placement

**Full LOE/DOE schema is deferred.**

- Episode v1 carries observation evidence only.
- Optional **opaque references** (`loe_ref`, `doe_ref`, or equivalent) may appear on an Episode or Event when needed for pilot or steward workflows, without defining LOE/DOE record shape in this ADR.
- Full inline vs sidecar LOE/DOE schema is reserved for a future ADR after Episode custody is stable (CG-FLL-1E catalog; LEF-0B/0C open questions).

### D11 — Federation projection

| Element | Decision |
|---------|----------|
| **Trigger** | **Terminal completed games only** are federation projection triggers |
| **Sovereign vs export** | **Federation `ObservationRecord` is a lossy export slice, never the sovereign Episode** |
| **Adapter** | Existing `export_v1` boundary is normative reference; ADR-001 does not modify it |
| **continuity_id** | `game:{actor_id}:{game_id}` per [FEDERATION.md](../../FEDERATION.md) |
| **Payload** | `chessguide/game_import/1` — moves, result, `game_artifact`; no learning metadata |
| **Invariant** | Projection is lossy at the federation boundary only — never in product custody (CB-005 Federation projectability) |

---

## In scope

1. Semantic Episode v1: identity, Actor, optional Session, terminal, minimum evidence
2. ChessAnchor AN-1–AN-4 as governance rules for v1
3. Append-only and custody invariants (semantic, not file format)
4. Legacy `Game.toString()` → Episode v1 semantic mapping via adapter
5. Optional opaque LOE/DOE reference slots without full schema
6. Federation export hook contract (completed-game only, lossy slice)
7. Explicit naming: `LearningTrace` / `Episode` canonical; `LearningJourney` non-canonical

---

## Out of scope

| Excluded | Rationale |
|----------|-----------|
| **Knowledge Graph** | Not doctrine; review proposal only |
| **Learner Graph** | Synthesis label; CB-005 hierarchy suffices for v1 |
| **Learning Frontier** | Review proposal; not repository vocabulary |
| **Knowledge Concept** as first-class type | CEAR synthesis; anchors + refs suffice for v1 |
| **Chess Skill Vector** | Absent; CB-002 warns against Elo-only reduction |
| **LARIS activation** | FDP-002 dormant; pedagogical decision precedes technical |
| **Runtime refactor** | ADR defines target boundary; LEF-2C documents gap |
| **Graph DB / traversal API** | CB-005 excludes DB and wire formats |
| **Cognitive / narrative chunk persistence** | CDIA mandatory exclusion |
| **Full LOE/DOE schema** | Deferred per D10 |
| **Transformation tags / LOE-011** | Requires stewardship pipeline post-v1 |
| **CB-006 mode machine / synthetic practice Episode** | Future ADR |
| **DecisionTrace per ply** | LLD design target |
| **JSON Schema, SQL, localStorage keys** | CB-005 out of scope |
| **Changes to `src/`, tests, or federation export code** | This ADR is governance only |

---

## Alternatives considered

### Alt-1 — Episode = legacy line only (status quo semantics)

**Pros:** Zero migration risk; federation already validated.  
**Cons:** No Actor/Session/Event/Anchor semantics; CFA upper tiers not derivable from game lines alone (LEF-2C).  
**Rejected** as final architecture — **accepted** as legacy encoding within v1 adapter.

### Alt-2 — Full CB-005 Episode record in ADR-001

**Pros:** One-shot governance alignment.  
**Cons:** Too heavy for first ADR; mixes observation, knowledge, wisdom, and transformation before stewardship is runtime-ready (CB-005 R-1).  
**Rejected** — minimum sovereign boundary first.

### Alt-3 — Adopt `LearningJourney` (LLD) as canonical root name

**Pros:** Matches LLD/CDESR diagrams.  
**Cons:** Conflicts with CB-005 `LearningTrace` (CLOR P1-3).  
**Rejected** — doctrine names win (D1).

### Alt-4 — Session required in v1

**Pros:** Tighter FLL-1 pilot mapping.  
**Cons:** CB-005 and CG-FLL-1E define Session as optional; runtime has no session tier.  
**Rejected** — Session optional (D4).

### Alt-5 — LOE inline only in Episode v1

**Pros:** Simple per-episode bundle.  
**Cons:** Conflates observation with claims; LEF-0C falsifies stage-as-persistence model.  
**Rejected** — full schema deferred; opaque refs only (D10).

### Alt-6 — Federation ObservationRecord equals sovereign Episode

**Pros:** Single export model.  
**Cons:** Violates FEDERATION.md locked boundary; exports forbid learning metadata.  
**Rejected** — lossy projection only (D11).

---

## Consequences

### Positive

- Locks the highest-friction doctrine–runtime gap documented in LEF-2C and CDIA.
- Enables future LOE capture, stewardship replay, and CFA operationalization without claiming CFA as a pipeline.
- Federation T3 conformance remains stable; sovereign learning stays in ChessGuide.
- Legacy `GameHistory` remains readable via adapter without mandatory format migration.

### Negative / risks

- **Dual truth temporarily:** legacy string plus semantic Episode v1 until adapters are implemented (CB-005 R-2).
- **Actor from player name** is weak identity for multi-human and cross-device scenarios.
- **Minimum evidence** may under-capture attention and hints needed for later pedagogy reviews.
- **Opaque LOE refs** without a follow-on ADR leave ref contracts underspecified.
- Acceptance does not change runtime — gap persists until a separate implementation effort.

### Unlocked downstream

| Downstream work | Depends on |
|-----------------|------------|
| LOE/DOE schema ADR | Episode identity + append contract |
| Stewardship C1 per Episode | Terminal + minimum evidence |
| DecisionTrace (LLD) | Episode + ply events |
| Reference model ADR (graphs/frontier) | Stable Episode custody |
| Opening/knowledge refs on Episode | Anchors AN-3 |

---

## Open questions

| ID | Question | ADR-001 disposition |
|----|----------|---------------------|
| **OQ-ADR1** | Session: always `null` in v1 or optional `session_id`? | **Decided:** optional `session_id`; Session not required |
| **OQ-ADR2** | Explicit `game.terminal` event vs inferred only? | **Open for implementation:** inferred permitted; explicit recommended for new episodes |
| **OQ-ADR3** | Full LOE inline vs sidecar? | **Decided:** deferred; opaque refs only in v1 |
| **OQ-ADR4** | `LearningJourney` naming? | **Decided:** `LearningTrace` canonical |
| **OQ-ADR5** | Synthetic practice Episode (CB-006)? | **Out of scope** — future ADR |
| **OQ-ADR6** | P1 ExplanationArtifact ref shape? | **Out of scope** — future ADR |
| **OQ-ADR7** | Abandoned games as terminal Episode? | **Open** — runtime does not support today |
| **OQ-ADR8** | `actor_id`: slug vs UUID registry? | **Open:** slug interim; registry deferred |
| **OQ-ADR9** | Episode deletion: soft vs hard delete? | **Open** — stewardship semantics adopted; mechanism deferred |
| **OQ-ADR10** | Canonical store: normalized events vs legacy blob? | **Open:** adapter minimum required either way |

---

## Repository evidence table

| Decision area | Primary evidence | Hierarchy | Classification |
|---------------|------------------|-----------|----------------|
| Episode as custody boundary | CB-005 § Trace hierarchy, § Episode semantic record | Doctrine | [DOCTRINE] |
| Canonical names LearningTrace / Episode | CB-005; CLOR P1-3 | Doctrine + Review | [DOCTRINE] |
| LearningTrace ≠ learning | LEF-0E §1; CEAR Part 3; CG-FLL-002 | Doctrine | [DOCTRINE] |
| Activity ≠ learning | CG-FLL-001 I-3; CG-FLL-002 H5 | Doctrine | [DOCTRINE] |
| Session optional | CB-005 L49; CG-FLL-1E L176 | Doctrine | [DOCTRINE] |
| Terminal before transformation | CB-005 I-1 | Doctrine | [DOCTRINE] |
| Minimum observation evidence | CB-005 § Episode semantic record; CLOR Part 2 | Doctrine + Review | [DOCTRINE] |
| Event taxonomy (optional signals) | CB-005 § Event types | Doctrine | [DOCTRINE] |
| Anchors AN-1–AN-4 | CB-005 § ChessAnchor rules | Doctrine | [DOCTRINE] |
| Append-only / sync | CB-005 stewardship; LLD § Validity | Doctrine + LLD | [DOCTRINE] + [LLD] |
| Legacy encoding | CB-005 § Legacy; `src/data/game.ts` L120–164 | Doctrine + Runtime | [DOCTRINE] + [RUNTIME] |
| Terminal detection | `src/chessguide/federation/export_v1.py` | Runtime (export norm) | [RUNTIME] |
| Federation boundary | FEDERATION.md; CFA export slice | Doctrine | [DOCTRINE] |
| Lossy projection invariant | CB-005 Federation projectability; FEDERATION.md | Doctrine | [DOCTRINE] |
| Export adapter reference | `export_v1.py`; `tests/fixtures/federation/chessguide_game_import_observation.v1.json` | Runtime + Test | [RUNTIME] |
| Runtime gap | LEF-2C §3 | Study | [RUNTIME GAP] |
| ADR-001 scope / exclusions | CDIA § ADR-001 Readiness | Review | [INFERENCE] |
| LOE deferred | CG-FLL-1E; LEF-0B OQ-B4; LEF-0C OQ-C5 | Doctrine + Study | [DOCTRINE] + [OPEN] |
| Graphs / frontier excluded | CDIA PR-1–3; CEAR Parts 4–5 | Review | [PROPOSAL] |
| CFA not pipeline | CFA v1.0 core rule | Doctrine | [DOCTRINE] |
| First ADR priority | Repository baseline §10; CDIA verdict | Review | [INFERENCE] |

---

## Related documents

- [CB-005 — LearningTrace Product Schema](../chessbuddy/CB-005-learningtrace-product-schema.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [CG-FLL-1E — First Domain Learning Pilot Execution Plan](../chessguide/CG-FLL-1E-first-domain-learning-pilot-execution-plan.md)
- [CFA v1.0](../federation/CFA-v1.0.md)
- [LEF-0E — Integration Theory](../federation/studies/LEF-0E-integration-theory.md)
- [LEF-2C — Runtime Observability Study](../federation/studies/LEF-2C-runtime-observability-study.md)
- [FEDERATION.md](../../FEDERATION.md)
- [ChessGuide Discovery Integration Assessment v1.0](../../reviews/ChessGuide-Discovery-Integration-Assessment-v1.0.md)
