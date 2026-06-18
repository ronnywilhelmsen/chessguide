# Developer Quick Verify v1.0

A short, practical runbook for verifying the two active code paths locally:
the **modern web dashboard** (`apps/web-dashboard`) and the **Android skeleton**
(`android/`).

## One-command verification (Windows)

```
powershell -ExecutionPolicy Bypass -File tools/verify-web-dashboard.ps1
powershell -ExecutionPolicy Bypass -File tools/verify-android.ps1
powershell -ExecutionPolicy Bypass -File tools/verify-all.ps1
```

`verify-all` runs both and fails if either fails.

POSIX equivalents are available as `tools/verify-*.sh`.

## Web dashboard

```
cd apps/web-dashboard
npm install
npm run verify     # lint + test:run + build
npm run dev        # http://localhost:3000
```

Tests use Vitest + React Testing Library (jsdom). The dashboard is
display/review-first and uses a **static governed fixture only** — no backend,
no live CV, no webcam.

## Android

```
cd android
.\gradlew.bat :core:model:testDebugUnitTest :core:mode:testDebugUnitTest :app:assembleDebug
```

JVM unit tests only (no instrumented/Compose UI tests yet). Requires a JDK; the
JDK bundled with Android Studio (JBR) works. This is the Android Studio skeleton
only — no CameraX / CV.

## Requirements

- Node 20+ (web dashboard).
- A JDK (e.g. Android Studio's bundled JBR) and the Android SDK (Android Studio)
  for the Android verification.

## Future consideration: Chrome extension / MCP as a controlled "LARIS voice surface"

A Chrome extension and an MCP integration **may** later be considered as a
controlled "LARIS voice surface". This is a future idea only:

- This PR does **not** implement MCP.
- This PR does **not** activate LARIS.
- Any such surface **must not** bypass ChessGuide governance, ModeGate, Creator
  replay, or federation withholding.
