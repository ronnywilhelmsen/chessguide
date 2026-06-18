# ChessGuide Web Dashboard (Modern Target App)

**PR #39 — Modern Web Dashboard Shell / Next.js Target App v1.0**

A clean, modern web target app for ChessGuide's future **dashboard / display /
review** surface. Built with Next.js (App Router), TypeScript (strict), and
Tailwind CSS. It renders a **static governed fixture only**.

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

## Run

```
cd apps/web-dashboard
npm install
npm run dev
```

Then open http://localhost:3000

Other scripts:

```
npm run lint
npm run build
```

## Implemented

- Dashboard-first layout with a "ChessGuide Surface Dashboard" title and a
  "Static governed fixture only" status.
- Active mode selector: COMPETITION, LEARNING, REVIEW, BROADCAST_DISPLAY
  (default **COMPETITION**).
- No-advice banner in COMPETITION and BROADCAST_DISPLAY.
- LEARNING / REVIEW show "runtime not active yet" placeholders (no advice,
  no analysis).
- Dashboard cards: board state, move list, clock, game status, displayed
  fields, suppressed output classes (categories only), Creator replay
  continuity placeholder, federation withholding placeholder.

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
