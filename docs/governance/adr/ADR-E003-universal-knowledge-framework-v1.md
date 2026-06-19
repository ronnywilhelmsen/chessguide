# ADR-E003 — Universal Knowledge Framework v1

| Field | Value |
|-------|-------|
| **Document ID** | ADR-E003 |
| **Title** | Universal Knowledge Framework v1 |
| **Version** | 1.0 |
| **Status** | Proposed |
| **Date** | 2026-06-19 |
| **Scope** | Cross-surface knowledge architecture — governance only |
| **Prerequisites** | [ADR-001](ADR-001-learningtrace-episode-schema-v1.md), [ADR-002](ADR-002-sovereign-reference-model-v1.md), [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md), [ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md), [CG-FLL-002](../chessguide/CG-FLL-002-learning-semantics.md), [FEDERATION.md](../../../FEDERATION.md), [Surface Payload Contract HLD](../../architecture/Surface-Payload-Contract-HLD-ADR-v1.0.md) |
| **Supersedes** | — |
| **Superseded by** | — |

---

## Status

**Proposed** — repository governance decision. Defines how ChessGuide understands, separates, stores, reasons about, and governs knowledge across games, positions, moves, players, learner behavior, and all capture/display surfaces.

This ADR is **governance only**. Acceptance does **not** introduce:

- Runtime changes
- JSON Schema or payload runtime changes
- Android / web dashboard implementation
- Chrome extension or MCP server
- Tests (unless separately required for doc lint)
- thewilhelmsen.com changes
- Deployment or federation adapter changes

---

## Context

ChessGuide is no longer only a local chess application. The domain now spans:

| Surface / system | Status |
|------------------|--------|
| Governed domain doctrine | Mature (CG/CB/CFA, ADR-001–008) |
| Web dashboard | `apps/web-dashboard` — scenario explorer, payload-like contract mapping |
| Android CameraX sandbox | Merged — frame metadata capture only |
| thewilhelmsen.com `/chessguide` | Host route scaffold (display only) |
| thewilhelmsen.com `/chessguide/dashboard` | Dashboard integration scaffold (display only) |
| Chrome extension | Future observation surface (strategy docs only) |
| MCP / LARIS voice | Future governed interaction (inactive) |
| Creator continuity | Future trace preservation (external) |
| Surface Payload Contract | HLD + schema v1 (display envelope, not governed reality) |

Without a unified knowledge framework, these surfaces risk **collapsing into one another**: raw camera frames treated as learning, engine output treated as pedagogy, host pages treated as doctrine owners, voice transcripts treated as learner rationale, or federation export widened beyond completed-game `ObservationRecord`.

### Core thesis

> **Knowledge in ChessGuide is not raw data.**
> Knowledge is a **governed relationship** between observations, context, interpretation, claims, evidence, learner state, explanations, replayability, domain boundaries, and federation constraints.

This ADR operationalizes that thesis across all surfaces while preserving [FEDERATION.md](../../../FEDERATION.md):

```text
Federation transports continuity.
ChessGuide retains learning.
```

---

## Decision

ChessGuide adopts **Universal Knowledge Framework v1 (UKF-v1)** as the canonical semantic layer for knowledge governance across all surfaces.

---

## §1 — Observation

| Aspect | Definition |
|--------|------------|
| **Definition** | Raw or minimally processed fact captured from a source |
| **Property** | Observation **is not knowledge** by itself |

### Examples

| Source | Observation examples |
|--------|---------------------|
| Game import | FEN, PGN move, timestamp, result |
| Web / extension | Site/game id, visible clock, public username, visible move list |
| Android camera | Frame metadata, preview context, calibration state |
| User interaction | Click, review marker, explicit selection |
| Future voice | Spoken question **transcript** (if voice active) — observation only until confirmed |

### Rules

- Observations are **append-only** at capture time
- Observations carry **source_surface**, **source_ref**, **timestamp**, **custody**
- Observations do **not** imply admissibility, claim, or export eligibility

---

## §2 — Evidence

| Aspect | Definition |
|--------|------------|
| **Definition** | An observation **admissible** for a specific claim under governance |
| **Property** | Evidence **is not automatically true knowledge** |

### Required fields (conceptual)

| Field | Purpose |
|-------|---------|
| `source` | Origin surface and ref |
| `timestamp` | When captured |
| `custody` | Actor/system holding the record |
| `scope` | What claim class this may support |
| `admissibility_rule` | Governance rule id (mode, LOE/DOE, etc.) |
| `replay_ref` | Pointer for reconstructability if available |

Aligns with [ADR-003](ADR-003-loe-doe-evidence-record-schema-v1.md) LOE/DOE as Evidence Records.

---

## §3 — Context

Context is the situation that gives meaning to observations.

| Example dimension | Values |
|-------------------|--------|
| Mode | competition, learning, review, broadcast/display, unknown |
| User role | player, spectator, reviewer |
| Game phase | opening, middlegame, endgame |
| Time pressure | low / high / unknown |
| Source surface | Android, web dashboard, thewilhelmsen.com, extension, MCP |
| Device/sensor | camera active, calibration valid |
| Game lifecycle | live vs completed |

Context is **required** before interpretation or claim promotion.

---

## §4 — Interpretation

| Aspect | Definition |
|--------|------------|
| **Definition** | A **governed reading** of observation + context |
| **Property** | Interpretation **is not advice** and **is not a claim** unless promoted |

### Examples

- «The user hesitated here»
- «This position may involve tactical danger» (non-advisory framing in competition mode: **withheld**)
- «This move caused a material swing»
- «This sequence is a review candidate»

Interpretations require mode gate and must not bypass no-advice rules in competition.

---

## §5 — Claim

| Aspect | Definition |
|--------|------------|
| **Definition** | A governed **hypothesis** about chess, learner state, game state, or system behavior |
| **Requirement** | Evidence + **confidence state** |

### Examples

- «The learner missed a back-rank threat»
- «This position is tactically unstable»
- «This concept recurs in the learner's games»
- «This explanation improved later performance»

Claims flow through [ADR-004](ADR-004-stewardship-and-transformation-claim-gate-v1.md) stewardship gate when integration/transformation is asserted.

**Activity is not learning.** A claim about learning requires integration evidence — not single-observation inference (CG-FLL-002 I-3).

---

## §6 — Knowledge

| Aspect | Definition |
|--------|------------|
| **Definition** | Stabilized, replayable, governed structure connecting observations, evidence, context, interpretation, claims, and explanatory pathways |

### Properties

Knowledge is:

- **Versioned**
- **Scoped** (mode, surface, actor)
- **Replayable**
- **Falsifiable or revisable**
- **Attributable**
- **Bounded** by mode and governance

Knowledge **≠** raw observation, **≠** engine output, **≠** surface display copy.

---

## §7 — Surface

A **Surface** is a place where knowledge or observations may be **displayed** or **captured**.

| Surface | Role |
|---------|------|
| Android | Local sensor/frame metadata capture |
| Web dashboard | Scenario explorer, contract mapping, review UI |
| thewilhelmsen.com | Host/display routes only |
| Chrome extension (future) | Web page/game context observation |
| MCP voice (future) | Governed voice/tool mediation |

> **Surfaces do not own governed reality.**

---

## §8 — Source of governed reality

| Entity | Ownership |
|--------|-----------|
| **ChessGuide** | Governed reality: doctrine, payload contracts, mode gates, fixtures, replay semantics, learning claims |
| **thewilhelmsen.com** | Display surfaces only — no doctrine, no payload ownership |
| **Android** | Local capture of frame metadata under ChessGuide rules |
| **Chrome extension (future)** | May observe web context — does not own knowledge |
| **MCP (future)** | May mediate voice/tool — does not own knowledge |
| **Creator (future)** | May preserve continuity traces — does not create truth by storage |

---

## §9 — Learner state

Learner state **is not raw activity**.

May include (when evidenced over time):

- Repeated concepts
- Review history
- Hesitation points
- Explanation interactions
- Performance over time
- Confirmed / disconfirmed mastery claims

**Must not** be inferred from a single observation.

Aligns with [ADR-001](ADR-001-learningtrace-episode-schema-v1.md) LearningTrace as custody, not learning.

---

## §10 — Game knowledge

Game knowledge includes:

- Position identity
- Legal move sequence
- Phase, material, tactical motifs
- Candidate review points
- Result context

### Display / use classifications

| Class | Meaning |
|-------|---------|
| `engine-best` | Engine reference — not pedagogy (ADR-007) |
| `human-understandable` | Safe pedagogical framing |
| `learning-best` | Learning-mode scaffold only |
| `safe-to-display` | Mode-gated display allowed |
| `competition-forbidden` | Must not show during live competition |
| `review-allowed` | Post-game / review mode |
| `replay-relevant` | Needed for reconstructability |

---

## §11 — Player knowledge

Player knowledge must be **conservative**.

### Allowed

- Public username
- Public rating
- Public game metadata
- User-provided identity
- Role in current session

### Not allowed without explicit governance

- Psychological profiling
- Hidden intent inference
- Private identity inference
- Cross-site identity stitching
- Surveillance-style tracking

> **Public page visibility is not consent to profile.**

---

## §12 — Voice knowledge (future MCP/LARIS)

| Rule | Requirement |
|------|-------------|
| Voice input | Treated as **user-provided observation** |
| Transcript | **Not** learner rationale unless explicitly confirmed |
| Voice command | **Not** tool authorization unless explicitly confirmed |
| Surface | Must be **visible, confirmable, and auditable** |
| LARIS | **Inactive** unless governance activation (Buddy-LARIS plan) |
| MCP | Future governed mediation only — no premature runtime |

> **Voice transcript is not rationale.**

---

## §13 — Chrome extension knowledge (future)

### May observe (with explicit user consent)

- Page/game context
- Visible board state if allowed and technically available
- Move list if visible
- User-selected positions
- User questions
- Review markers

### Must not

- Provide live competition advice
- Run hidden engine analysis
- Export private browsing data
- Infer identity beyond visible/public context
- Silently send data to backend
- Bypass user consent

See [Chrome-Extension-Strategy-v1.0.md](../../strategy/Chrome-Extension-Strategy-v1.0.md).

---

## §14 — Android knowledge

Android camera may capture:

- Frame metadata
- Preview context
- Calibration state
- Future board-area **hypotheses** (not governed knowledge until gated)

Camera frames **must not** become governed knowledge without:

1. Explicit observation record
2. Source/custody
3. Mode gate
4. Admissibility rule
5. No-advice boundary
6. Privacy boundary

See Android Vision Strategy and CameraX sandbox docs.

---

## §15 — thewilhelmsen.com knowledge

### May display

- Static host routes (`/chessguide`, `/chessguide/dashboard`)
- Dashboard surfaces (when deployed)
- Replay surfaces (future)
- Public integration status

### Must not own

- Payload contracts
- Learning claims
- ChessGuide doctrine
- Buddy/LARIS output
- Creator continuity
- Federation eligibility decisions

Host integration: [TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md](../../architecture/TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md).

> **Surface display is not governed reality.**

---

## §16 — Creator continuity (future)

Creator may later preserve:

- Replay sequences
- Longitudinal knowledge state
- Explanation lineage
- Claim evolution
- User-machine continuity

> **Creator does not create truth by storage.**
> Continuity preserves traces; governance determines admissibility.

> **Continuity is not truth.**

---

## §17 — Federation boundary

UKF-v1 **preserves** the locked federation rule:

> **Only completed-game `ObservationRecord` may ever be federation eligible.**

### Never federation-export

- Semantic fields
- Learner state
- Explanations
- Engine data
- TSS/CCT/Buddy/LARIS output
- Model output
- Chrome extension browsing context
- Android frame/image data
- Voice transcripts
- Private user rationale
- Payload runtime internals
- Creator continuity internals

See [FEDERATION.md](../../../FEDERATION.md) Observation boundary (locked).

> **Observation is not permission to export.**

---

## §18 — Mode gates

Knowledge display must be **mode-aware**:

| Mode | Rule |
|------|------|
| **Competition** | No advice, no engine, no best move, no candidate moves, no live tactical warnings |
| **Learning** | Scaffold allowed if safe and explicit |
| **Review** | Analysis and explanation allowed when game/context permits |
| **Broadcast/display** | Non-advisory display only |
| **Unknown** | Default to safe / no-advice |

Aligns with Surface Payload Contract mode gates and CV mode-gated surfaces HLD.

---

## §19 — Epistemic states

| State | Meaning |
|-------|---------|
| **Observed** | Raw capture recorded |
| **Admissible evidence** | Passes admissibility rule for scope |
| **Interpreted** | Governed reading assigned |
| **Claimed** | Hypothesis asserted |
| **Supported** | Claim backed by sufficient evidence |
| **Contradicted** | Evidence refutes claim |
| **Deprecated** | Superseded by newer version |
| **Confirmed** | Steward or replay validates (where required) |
| **Withheld** | Must not display (mode/privacy/federation) |
| **Not federation eligible** | Must not enter ObservationRecord export |

---

## §20 — Knowledge lifecycle

```text
capture → normalize → classify → contextualize → admit as evidence
  → interpret → form claim → test/replay → revise → display → withhold → archive
```

Each stage requires explicit governance transition — no silent promotion.

---

## §21 — Universal Knowledge Record (conceptual model)

**Not a runtime schema.** Conceptual envelope for governed knowledge units:

| Field | Purpose |
|-------|---------|
| `id` | Stable record id |
| `source_surface` | Android, web, extension, etc. |
| `source_ref` | Surface-local pointer |
| `observation_refs` | Linked observations |
| `evidence_refs` | Admissible evidence |
| `context` | Mode, role, phase, etc. |
| `interpretation_refs` | Governed readings |
| `claim_refs` | Hypotheses |
| `learner_refs` | Actor/trace links |
| `replay_refs` | Reconstructability |
| `mode_gate` | Active mode constraint |
| `confidence` | Claim confidence |
| `epistemic_status` | §19 state |
| `federation_eligibility` | boolean + rule ref |
| `privacy_class` | public / session / private |
| `created_at` / `updated_at` | Timestamps |
| `version` | Record version |

---

## §22 — Boundary rules (invariants)

| Invariant | Rule |
|-----------|------|
| I-1 | **Activity is not learning.** |
| I-2 | **Evidence is not claim.** |
| I-3 | **Explanation is not mastery.** |
| I-4 | **Engine output is not pedagogy.** |
| I-5 | **Voice transcript is not rationale.** |
| I-6 | **Surface display is not governed reality.** |
| I-7 | **Continuity is not truth.** |
| I-8 | **Observation is not permission to export.** |
| I-9 | **Public page visibility is not consent to profile.** |

---

## §23 — Relationship to existing systems

| System | UKF relationship |
|--------|------------------|
| **Surface Payload Contract** | Display envelope — never sovereign knowledge |
| **Android CameraX sandbox** | Observation capture only — no governed knowledge without gates |
| **Web dashboard** | Scenario explorer + contract mapping — ChessGuide-owned source |
| **thewilhelmsen.com host** | Display scaffold — not runtime owner |
| **Chrome extension (future)** | Observation surface — strategy-bound |
| **MCP voice (future)** | Governed mediation — inactive until activation |
| **Buddy** | Inactive for advice unless governed (ADR-006) |
| **LARIS** | Inactive unless governance activation |
| **Creator (future)** | Continuity preservation — not truth creation |
| **Federation** | Completed-game ObservationRecord only |
| **ADR-001–008** | Sovereign boundaries preserved; UKF unifies cross-surface semantics |

---

## Consequences

### Enables

- Safe Chrome extension discovery path
- Safe MCP voice discovery path
- Dashboard deployment bridge (host mount without doctrine transfer)
- Future replay surface with governed semantics
- Future Creator continuity integration without truth collapse
- Stronger no-advice enforcement across surfaces
- Clear separation: observation / evidence / claim / knowledge

### Forbids

- Hidden live advice on any surface
- Premature Chrome extension runtime without ADR compliance
- Premature MCP runtime without governance activation
- Ungoverned profiling or cross-site stitching
- Source-surface ownership confusion (especially thewilhelmsen.com)
- Federation leakage beyond ObservationRecord
- Treating raw data as learning
- Treating engine output as pedagogy

### Neutral

- Does not supersede ADR-001–008 — complements them
- Does not require runtime implementation to accept
- Harmonization with thewilhelmsen.com ADR-E003 (platform UKF) via cross-repo doc reference only

---

## Alternatives considered

| Alternative | Outcome |
|-------------|---------|
| **A: Per-surface ad hoc rules only** | Rejected — surfaces already multiplying; collapse risk high |
| **B: Single shared knowledge graph runtime** | Rejected — violates sovereignty and federation boundary |
| **C: UKF-v1 governance layer (chosen)** | Unified semantics without runtime |

---

## Open questions

| ID | Question |
|----|----------|
| OQ-UKF-1 | Formal JSON schema for Universal Knowledge Record — defer to future ADR |
| OQ-UKF-2 | Cross-repo UKF alignment with thewilhelmsen.com ADR-E003 |
| OQ-UKF-3 | Extension observation record schema vs OAT alignment |

---

## References

- [ADR-001 — LearningTrace Episode Schema v1](ADR-001-learningtrace-episode-schema-v1.md)
- [ADR-002 — Sovereign Reference Model v1](ADR-002-sovereign-reference-model-v1.md)
- [ADR-003 — LOE/DOE Evidence Record Schema v1](ADR-003-loe-doe-evidence-record-schema-v1.md)
- [ADR-004 — Stewardship and Transformation Claim Gate v1](ADR-004-stewardship-and-transformation-claim-gate-v1.md)
- [CG-FLL-002 — Learning Semantics](../chessguide/CG-FLL-002-learning-semantics.md)
- [FEDERATION.md](../../../FEDERATION.md)
- [Surface Payload Contract HLD](../../architecture/Surface-Payload-Contract-HLD-ADR-v1.0.md)
- [TheWilhelmsen Integration HLD](../../architecture/TheWilhelmsen-Integration-HLD-Cross-Repo-Plan-v1.0.md)
- [Chrome Extension Strategy v1.0](../../strategy/Chrome-Extension-Strategy-v1.0.md)
- [Android Vision Strategy v1.0](../../strategy/Android-Vision-Strategy-v1.0.md)

---

*Governance only. No runtime, deployment, extension, MCP, or cross-repo implementation.*
