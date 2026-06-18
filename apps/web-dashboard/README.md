# ChessGuide Web Dashboard (Modern Target App)

**PR #41 — Web Dashboard Scenario Explorer / Payload Fixture Runtime v1.0**

A clean, modern web target app for ChessGuide's future **dashboard / display /
review** surface. Built with Next.js (App Router), TypeScript (strict), and
Tailwind CSS. It is a **governed fixture scenario explorer** — it renders
**static frontend fixtures only**.

> This is the web dashboard app. **Do not open this from Android Studio.**

## What this is (and is not)

- This is the **future modern web dashboard shell**.
- It **does not replace the legacy React 17 app yet** (that app lives at the
  repository root under `src/` and keeps working unchanged).
- It **does not use camera/CV yet**.
- It is designed for **governed display / review / replay** of data that is
  collected, validated, and governed by ChessGuide / Android / backends.
- **Android remains the primary initial capture surface.**
- **Web browser CV may be a later optional sandbox** (Web Workers + Wasm), and
  only after the Android capture/CV lane, surface payload runtime, and
  review/replay dashboard exist and governance boundaries are executable.

## Why a new app instead of migrating the legacy app

The legacy app uses `react-scripts@4` and `node-sass@4`, which do not build on
modern Node (Node 20+/24). Rather than spend effort fighting that toolchain,
this PR starts a clean, modern, isolated Next.js app with its own
`package.json`. The legacy app is left untouched.

## Run locally

```
cd apps/web-dashboard
npm install
npm run dev
```

Then open http://localhost:3000

## Verify

Run lint + tests + build in one command:

```
cd apps/web-dashboard
npm run verify
```

Individual scripts:

```
npm run lint
npm run test        # watch mode (Vitest)
npm run test:run    # single run (Vitest)
npm run build
```

Or use the repo script from the root:

```
powershell -ExecutionPolicy Bypass -File tools/verify-web-dashboard.ps1
```

> This app is **dashboard / display-first**, not a browser CV runtime. There is
> **no webcam and no live CV** here. Browser CV (Web Workers + Wasm) may be a
> later optional sandbox; see the repository roadmap.

## What the scenario explorer is

The dashboard is a small **scenario explorer**: pick one governed fixture
scenario and the dashboard renders mode-aware, fixture-only placeholders for
it. It is purely for demonstrating governed mode-gated display behaviour — it
is **fixture-only**: there is no backend, no payload runtime, no live CV, and
no engine/Buddy/LARIS behind it.

### Scenarios

- **competition-live-basic** (COMPETITION) — live competition display,
  no-advice banner, all advisory output suppressed. *(default)*
- **broadcast-display-basic** (BROADCAST_DISPLAY) — spectator-safe display,
  no-advice banner, same advisory suppression as competition.
- **learning-placeholder** (LEARNING) — learning runtime unavailable
  placeholder; no advice, candidate moves, or best move.
- **review-placeholder** (REVIEW) — review runtime unavailable placeholder;
  no analysis, no engine line.
- **ambiguity-detected-placeholder** (LEARNING) — shows an ambiguity category
  only, certifies no truth, and states **"Human resolution required later"**.
- **federation-withheld-placeholder** (REVIEW) — shows the federation
  withholding reference and withheld categories only; no export action.

### Implemented

- Dashboard-first layout titled "ChessGuide Surface Dashboard" with the
  subtitle "Governed fixture scenario explorer".
- Scenario selector to switch between the scenarios above.
- Mode-aware active-mode banner.
- No-advice banner in COMPETITION and BROADCAST_DISPLAY.
- LEARNING / REVIEW show "runtime not active yet" placeholders (no advice,
  no analysis).
- Dashboard cards: board / game state, scenario summary, move list, clock,
  displayed fields, suppressed output classes (categories only), ambiguity
  placeholder (when relevant), Creator replay continuity placeholder, and
  federation withholding placeholder.

### Payload contract mapping

Each scenario fixture is mapped to a **payload-like** object aligned with the
Surface Payload Contract vocabulary (`docs/architecture/Surface-Payload-Contract-HLD-ADR-v1.0.md`,
`docs/contracts/surface-payload-contract.schema.v1.json`). The dashboard shows a
"Payload contract mapping" panel with the contract version, surface type,
payload id, scenario id, fixture-only status, and federation withholding ref.

This mapping is **fixture-only**: it uses a stable, explicit contract version
tag (`surface-payload-contract.v1.fixture`), performs **no schema validation**,
and is **not a production runtime payload**. Forbidden semantic/advisory fields
are never present in any mapped payload, and there is no export action.

### Why it is fixture-only

All scenarios are static TypeScript fixtures. The objects only *resemble* a
governed payload; they are not the accepted production schema and carry no
production guarantees. There is no network, no schema validation, and no
runtime here.

### Next planned dashboard steps

- Payload contract mapping (align fixtures to the surface payload contract).
- Review / replay timeline view.
- Optional charts later (no charting library is added yet).
- Browser CV only much later, if ever needed, and only after the Android
  capture lane and governance boundaries are executable.

## Intentionally NOT implemented

No backend/API calls, no live CV, no Web Workers, no Wasm, no OpenCV.js, no
TensorFlow.js, no engine, no TSS/CCT runtime, no Buddy, no LARIS, no federation
export, no webcam/browser camera feed. No engine eval, best move, candidate
moves, engine line, TSS warning content, CCT hint, Buddy explanation, model
output, Learning Frontier hint, mastery claim, learner rationale, federation
export action, raw CV frame, or Android frame data is ever rendered.

## Governance boundaries

ChessGuide owns governed reality; this dashboard only displays a static
fixture. Buddy and LARIS remain inactive. `thewilhelmsen.com` is not modified.
The Android project is not modified.
