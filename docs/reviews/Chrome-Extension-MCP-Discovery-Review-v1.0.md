# Chrome Extension + MCP Discovery Review v1

| Field | Value |
|-------|-------|
| **Review ID** | CE-MCP-DR-v1 |
| **Date** | 2026-06-19 |
| **Branch** | `docs/chrome-extension-mcp-discovery-review-v1` |
| **Type** | Discovery / architecture review / governance only |
| **Status** | Draft (discovery) |
| **Depends on** | ADR-E003 (Universal Knowledge Framework v1), Architecture-Continuity-Gate-v1.0, Surface-Payload-Contract-HLD-ADR-001 |
| **Scope** | How ChessGuide can safely learn from chess games on web surfaces, and how future MCP + voice may support governed review — **no runtime** |

> **Governance note.** This is a discovery review only. It defines no runtime, ships
> no extension, no MCP server, and no voice capture. ChessGuide owns governed
> reality; `thewilhelmsen.com` hosts display surfaces only; the Chrome extension
> and MCP/voice surfaces remain **inactive until governed**. LARIS remains dormant.

---

## 1. Purpose

This document is a discovery review for **future** web observation, review/replay
capture, and **governed MCP voice interaction** for ChessGuide. It explores how
ChessGuide could safely learn from chess games that a user plays or reviews on web
surfaces (e.g. lichess, chess.com, broadcast pages, `thewilhelmsen.com` displays),
and how a future Model Context Protocol (MCP) + voice surface could support
**post-game governed review** without ever providing live competition advice.

It exists to:

- Map the surface and threat landscape before any implementation PR.
- Anchor every future capability to the Universal Knowledge Framework (ADR-E003).
- Preserve the competition no-advice boundary as an invariant.
- Establish a phased roadmap so that observation, consent, review, and voice are
  introduced in safe, separately governed steps.

This review does **not** authorize implementation. It produces a recommendation
and acceptance criteria that future PRs must satisfy.

---

## 2. Non-goals

This review explicitly does **not** add, design as buildable, or authorize any of:

- No Chrome extension implementation
- No `manifest.json`
- No content scripts
- No service worker / background worker
- No browser automation runtime
- No MCP server
- No voice capture
- No microphone permission
- No API bridge
- No backend
- No engine
- No live advice
- No TSS/CCT runtime
- No Buddy runtime
- No LARIS runtime
- No federation export

Nothing in this document is a contract for runtime behaviour. All "can/may"
statements describe **future, governed, opt-in possibilities**, not current
capabilities.

---

## 3. Surface model

ChessGuide must treat each of the following as a **distinct surface** with its own
trust level, capability ceiling, and mode gate. A surface can never imply authority.

| Surface | Role | Trust / capability ceiling |
|---------|------|----------------------------|
| **Desktop Chrome/Chromium extension** | Primary extension target; can observe DOM of an active tab with consent | Observation-only; desktop-first; highest DOM access, highest risk |
| **Web dashboard / PWA fallback** | Governed display + manual review capture; works without an extension | No automatic page observation; manual user-provided facts only |
| **iPad / Safari extension possibility** | Future, separate target; cannot be assumed to support ordinary Chrome extensions | Likely PWA/manual-first; Safari Web Extension is a later, separate effort |
| **thewilhelmsen.com host display** | Display surface only; may request, never decide | No learning custody; lossy display host; not modified by ChessGuide PRs |
| **MCP voice surface** | Future user-provided observation + confirmable tool surface | Local-first, confirmable, auditable, mode-gated; inactive until governed |
| **ChessGuide governed backend / future runtime** | Owns governed reality, ModeGate, evidence custody | Sole authority for claims, knowledge, federation eligibility |
| **Creator continuity layer (future)** | Long-horizon replay/custody (real-time → 100-year) | Custody of suppression + observation lineage; not an advice channel |

Principle: **observation surfaces are lossy and untrusted**; only the ChessGuide
governed backend may turn observation into evidence/claim/knowledge, and only
through the Universal Knowledge Framework (§13).

---

## 4. What can be learned from a chess web page

Safe **observations** (facts a surface may report, with consent + mode gate). An
observation is never itself a claim or knowledge (§13).

- URL / domain / game id (as reference, not identity proof)
- Page title / site context
- Visible PGN / move list, if present in the DOM
- Visible FEN / board state, if present and permitted
- Time control, if visible
- Clock display, if visible (see Clock Observation Lane, §14)
- Public player names / ratings, if visible (public game metadata only)
- User-selected positions (explicit user action)
- User review markers (explicit user action)
- User questions (explicit user input)
- Mode context (competition / review / unknown)
- Completed vs live game state

All of the above are **observations**, captured only with explicit per-site consent,
visible active state, and a mode gate that fails closed to no-advice when mode is
unknown.

---

## 5. What must not be inferred

The following are forbidden inferences, regardless of consent, because they exceed
the epistemic warrant of a web observation:

- Psychological profiling
- Private identity inference
- Cross-site identity stitching
- Hidden intent inference
- Private browsing export
- Learner state from a single observation
- Mastery from activity
- Rationale from a voice transcript alone

An observation may be recorded as **observation**; it may **not** be silently
promoted to interpretation, claim, learner state, or knowledge (§13).

---

## 6. Competition-mode boundary (invariant)

In competition mode (and whenever mode is unknown), the extension/MCP/voice
surfaces must guarantee:

- No engine eval
- No best move
- No candidate moves
- No tactical warnings
- No live coaching
- No hidden analysis
- No background upload of game state for advice
- **Unknown mode defaults to no-advice (fail closed)**

This boundary is non-negotiable and survives every architecture option below. A
surface that cannot prove its mode must behave as competition/no-advice.

---

## 7. Review-mode opportunities

After a game is completed, or when an explicit, mode-gated review context permits,
future capabilities **may** include:

- Save a position for review
- Mark "I did not understand this"
- Capture a move sequence
- Link to a replay
- Ask post-game questions
- Compare a self-explanation with later analysis
- Build a learner history over time (as evidence, not as silent claims)

These are review-context capabilities only. None may leak into live competition,
and none may fabricate mastery or rationale (§5).

---

## 8. Chrome extension architecture options

| Option | Can observe | Cannot observe | Risk | Governance implications | iPad compatibility |
|--------|-------------|----------------|------|-------------------------|--------------------|
| **A. Content script only** | Active-tab DOM (PGN/FEN/clock if present), user selections | Other tabs, cross-site, native apps | Medium | Per-site consent + mode gate; fragile site-specific DOM | No (ordinary Chrome ext not assumable on iPad) |
| **B. Content script + side panel** | Same as A, plus a visible governed review UI | Same exclusions as A | Medium | Better consent visibility + inspection surface | No |
| **C. Content script + background service worker** | Same as A, plus cross-tab coordination/state | Native apps, other browsers | Medium-High | Worker increases silent-capture risk; needs strict audit + pause | No |
| **D. Native messaging bridge** | Bridge to a local helper / MCP | — | High | Large attack surface; only after consent + audit maturity | No |
| **E. Web dashboard / PWA only** | Only user-provided/manual facts | Page DOM of third-party sites | Low | Safest baseline; no third-party observation | **Yes** (works on iPad) |
| **F. Safari / Web Extension later** | Similar to A on Safari | Per-platform limits | Medium | Separate review + store policies; later target | Partial (separate effort) |

Reading: the **lowest-risk universally-available** path is **E (PWA/manual)**; the
**desktop-first observation** path is **A → B**. C/D are deferred until consent and
audit are mature. F is a separate later target.

---

## 9. MCP architecture options

| Option | Tool exposure | Consent | Auditability | Mode gate | Risk |
|--------|---------------|---------|--------------|-----------|------|
| **A. No MCP initially** | None | N/A | N/A | N/A (no surface) | Lowest |
| **B. Local MCP server, desktop only** | Local tools only, no network | Explicit, per-session | Local audit log | Required, fail closed | Low-Medium |
| **C. Extension-to-MCP bridge** | Extension observations → MCP tools | Explicit, per-site + per-tool | Bridge audit log | Required | Medium-High |
| **D. Dashboard-to-MCP bridge** | Manual/review facts → MCP tools | Explicit | Dashboard audit log | Required | Medium |
| **E. Voice-first MCP surface** | Voice → tools | Per-utterance confirm | Transcript + action log | Required | High |
| **F. Creator-mediated MCP later** | Mediated via Creator continuity | Strong, mediated | Custody-grade audit | Required | Medium (deferred) |

Reading: **A (no MCP)** now; **B (local, confirmable)** is the first prototype
candidate; **E (voice-first)** is explicitly **not** an early target. Every option
requires consent + mode gate + audit before any tool can act.

---

## 10. Voice interaction model

Future voice is defined as:

- **User-provided observation** (input), not authority
- **Not learner rationale** unless explicitly confirmed by the user
- **Not tool authorization** unless explicitly confirmed
- **Visible** (the user sees what was heard/interpreted)
- **Confirmable** (the user approves before any action)
- **Auditable** (transcript + resulting action are logged)
- **Mode-gated** (no live competition advice ever)
- **LARIS inactive** unless explicitly activated by a future governance decision

A voice transcript is an observation; it is never silently promoted to rationale,
claim, or knowledge.

---

## 11. Consent model

Consent requirements for any future observation surface:

- Explicit **opt-in per site/domain**
- **Visible active/inactive state** at all times
- User can **pause** capture at any time
- User can **inspect** captured observations
- **No silent background capture**
- **No automatic export**
- **No federation export from extension context** (extension is never an export path)

Consent is per-surface and per-site; granting consent on one site never implies
consent on another, and never implies federation eligibility.

---

## 12. Data classes

| Data class | Allowed storage | Allowed display | Allowed export | Federation eligibility |
|------------|-----------------|-----------------|----------------|------------------------|
| **Public game metadata** | Session / review-retained | Yes | Only via governed backend, never from extension | Possibly, via governed lossy ObservationRecord only |
| **User-provided review markers** | Review-retained | Yes (to the user) | Governed backend only | Not by default |
| **Page observation** | Ephemeral by default | Yes (inspectable) | No (observation, not export) | No |
| **Voice transcript** | Ephemeral, opt-in | Yes (confirmable) | No | No |
| **Private browsing context** | **Never** | No | No | No |
| **Learner state** | Governed backend custody only | Derived, governed | Governed only | No (semantic boundary) |
| **Claim / evidence** | Governed custody (append-only) | Governed | Governed only | Per ADR-E003 rules |
| **Completed-game ObservationRecord** | Governed custody | Governed | Governed, lossy slice only | Eligible as lossy export, never sovereign custody |

The extension/voice context is never a federation export path. Only the governed
backend may produce a lossy ObservationRecord, and that record is never sovereign
learning custody.

---

## 13. Universal Knowledge Framework mapping (ADR-E003)

Every extension/MCP/voice signal is mapped onto the ADR-E003 layers and must not
skip a layer:

| UKF layer | Extension / MCP / voice example | Rule |
|-----------|----------------------------------|------|
| **Observation** | Visible PGN/FEN/clock text; user marker; voice utterance | Lossy, untrusted, surface-bound |
| **Evidence** | Observation + provenance (URL, timestamp, consent ref) | Custody by governed backend only |
| **Context** | Mode, completed/live, site, time control | Must be explicit; unknown → fail closed |
| **Interpretation** | "This looks like a tactic" | Never in competition; review-only; always marked as interpretation |
| **Claim** | "Player missed a fork" | Governed; requires evidence + context; never from a single observation |
| **Knowledge** | Durable learner-linked understanding | Governed custody only; never minted from extension/voice directly |
| **Epistemic state** | Confidence / warrant level | Tracked; observation ≠ certainty |
| **Mode gate** | Competition vs review vs unknown | Authorizes/suppresses each promotion; fail closed |
| **Federation eligibility** | Lossy ObservationRecord only | Decided by backend; extension is never an export path |

Key invariant: a web observation may **enter** at the Observation layer only.
Promotion to Claim/Knowledge happens exclusively in the governed backend, behind
the mode gate, and is never performed by the extension, MCP, or voice surface.

---

## 14. Clock observation lane

Inspired by the Android physical-setup lanes (camera/board overlay), the clock is
treated as a **separate observation lane**:

- The clock is essential chess context (time pressure shapes play and review).
- Clock observation must be **separate** from board observation (different lane,
  different consent, different fragility).
- A future web extension **may** read visible clock text if present in the DOM.
- A future Android path **may** define a clock ROI (region of interest).
- **No OCR in this discovery review** and none authorized here.
- **No live time-pressure advice** in competition mode.
- Clock data **may** support review context **after** a game completes.

The clock lane never becomes an advice channel; it is observation/context only.

---

## 15. Board observation lane

- Board observation is **separate** from move interpretation.
- Visible board state (FEN/DOM) may be captured **only** with consent and a mode
  gate.
- Board state is an **observation, not advice**.
- Android board geometry/calibration is **visual alignment, not semantic CV** (see
  the merged Android board overlay/calibration work); the same separation applies
  on web.
- Extension page-DOM board state is **site-specific and fragile**; it must be
  treated as best-effort observation, never as authoritative game truth.

---

## 16. iPad / Safari / PWA fallback

- iPad **cannot** be assumed to support ordinary Chrome extensions.
- The **PWA/web route** should support manual review capture so iPad, mobile,
  school machines, and locked environments remain first-class.
- A **Safari Web Extension** may be a separate future target with its own review,
  permissions, and store policies.
- The **web dashboard must remain useful without any extension**.
- **Voice on iPad** may be web/PWA/manual first — **not MCP-first**.

Design rule: never build a capability that *only* works via a desktop Chrome
extension if it is core to review; provide a PWA/manual fallback.

---

## 17. Threat model

| Threat | Description | Mitigation direction |
|--------|-------------|----------------------|
| Accidental live advice | Extension shows eval/best move during play | Mode gate, fail closed, no engine in scope |
| Hidden engine-like behavior | Background analysis masquerading as "help" | No engine; auditable actions; no hidden analysis |
| Privacy leakage | Capturing more than the visible game | Per-site consent, ephemeral default, inspection |
| Overcollection of browsing data | Reading unrelated tabs/history | Active-tab only, no cross-tab without governance |
| User identity overreach | Inferring private identity | Forbidden inference list (§5) |
| Voice command ambiguity | Misheard utterance triggers action | Confirmable, visible, mode-gated |
| Extension permissions too broad | Manifest over-permissions | Minimal permissions design (future doc) |
| Cross-site tracking | Stitching identity across sites | Forbidden (§5); per-site isolation |
| Federation leakage | Export from extension context | Extension is never an export path (§11, §12) |
| Model-output laundering into knowledge | Model text promoted to "knowledge" | UKF layering (§13); claims need evidence + mode gate |

---

## 18. Recommended phased roadmap

- **Phase 0 — Discovery only.** This PR. No runtime.
- **Phase 1 — Static extension strategy / manifest design doc.** No runtime;
  minimal-permission manifest design on paper.
- **Phase 2 — Observation-only extension shell.** No engine, no advice, no MCP;
  visible active state; reads nothing without consent.
- **Phase 3 — Consent + captured observation preview.** User can inspect captured
  facts before anything is retained.
- **Phase 4 — Review/replay bridge.** Only post-game or explicit review mode.
- **Phase 5 — MCP voice discovery prototype.** Local only, confirmable, auditable.
- **Phase 6 — Governance-gated LARIS voice surface.** Only after explicit
  activation decision.

Each phase is a separate, separately-governed PR with its own acceptance gate.

---

## 19. Decision recommendation

- **Do not implement MCP first.**
- **Do not implement voice first.**
- **Start with observation-only extension design** (desktop-first) plus a
  **PWA/manual fallback** that works on iPad and locked environments.
- **Preserve the PWA/iPad fallback** as a first-class path, not an afterthought.
- **Keep the Chrome extension desktop-first.**
- **Keep LARIS inactive** until an explicit governance activation decision.
- **Keep all live-competition no-advice boundaries** intact and fail-closed.

Recommended next step after this discovery: a **Phase 1 static extension strategy /
manifest design doc** (governance-only), not runtime.

---

## 20. Acceptance criteria for future implementation PRs

Any future implementation PR (Phase 2+) must pass **all** of the following gates:

- **Mode gate** present and fail-closed (unknown → no-advice).
- **Consent**: explicit per-site opt-in, visible active/inactive state, pause.
- **Visible active state** whenever observation is possible.
- **No hidden analysis** of any kind.
- **No engine / advice** in any competition context.
- **No federation export** from extension/voice context.
- **No identity inference** (honours §5 forbidden inferences).
- **Audit log concept**: observations and actions are logged and inspectable.
- **User inspection** of captured observations before retention.

A PR that cannot demonstrate every gate above must not be merged.

---

## Appendix — Boundaries summary

ChessGuide owns governed reality. This review adds documentation only: no Chrome
extension, no `manifest.json`, no content scripts, no service worker, no MCP server,
no voice/microphone capture, no API bridge, no backend, no engine, no TSS/CCT,
no Buddy, no LARIS, and no federation export. `thewilhelmsen.com` is not modified.
