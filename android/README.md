# ChessGuide Android — Modular App Shell (Skeleton)

**PR #37 — Android Studio Skeleton / Modular App Shell v1.0**

## Purpose

This directory holds the first real, buildable Android Studio project skeleton
for ChessGuide Android. It establishes the modular Gradle structure, a minimal
Jetpack Compose + Material 3 UI shell, a global mode banner placeholder, a
no-advice banner placeholder, and the initial feature/core module boundaries
that match **ANDROID-CV-LLD-OOP-UML-001**.

This is **skeleton only**. It intentionally does **not** implement CV or any
runtime.

## Build command

From the repository root:

```
cd android
./gradlew :app:assembleDebug
```

> Build verification note: the project was built and verified with
> `./gradlew :app:assembleDebug`. A Gradle wrapper (Gradle 8.9) was generated
> for the project. The build used the JDK bundled with Android Studio (JBR,
> JDK 21) and the installed Android SDK platform 35. Toolchain: Android Gradle
> Plugin 8.7.3, Kotlin 2.0.21, Compose BOM 2024.10.01, `compileSdk` /
> `targetSdk` 35, `minSdk` 24. Result: **BUILD SUCCESSFUL** (debug APK
> produced). `local.properties` (SDK path) is git-ignored and not committed.

## Module list

Core / required modules declared in `settings.gradle.kts`:

- `:app` — application shell (Android application plugin)
- `:core:model` — immutable UI models (`AndroidSurfaceMode`, `NoAdviceBannerState`, `AndroidCvUiState`)
- `:core:mode` — placeholder `ModePolicy` (display-only mode behavior)
- `:core:designsystem` — Material 3 theme + `GlobalModeBanner`, `NoAdviceBanner`
- `:feature:mode-selection` — local-state mode switching screen
- `:feature:camera-setup` — placeholder (no permission, no CameraX)
- `:feature:scanner` — placeholder (no camera, no CV)
- `:feature:competition` — placeholder showing the no-advice banner

Optional modules (`:feature:review`, `:feature:learning`, `:feature:broadcast`,
`:feature:ambiguity`, `:feature:privacy`, `:data:local-drafts`,
`:integration:chessguide-api`) are **intentionally not declared** in this PR to
protect build stability. They will be added behind interfaces in later PRs.

## What is implemented

- Modular Kotlin DSL Gradle structure with a Gradle version catalog
  (`gradle/libs.versions.toml`).
- Jetpack Compose + Material 3 app shell.
- `ChessGuide Android` title.
- Current mode placeholder, default **COMPETITION**.
- Global mode banner.
- No-advice banner shown in Competition Mode (and Broadcast Display).
- Navigation placeholders to Mode Selection, Camera Setup, Scanner, Competition.
- Visible message that CV, CameraX, OpenCV, YOLO, ML Kit, MediaPipe, LiteRT,
  validation, payload, Creator, TSS, Buddy, and LARIS are **not active**.
- `ModePolicy` placeholder allowed/blocked display behavior:
  - COMPETITION: `noAdviceRequired = true`
  - BROADCAST_DISPLAY: `noAdviceRequired = true`
  - LEARNING: `noAdviceRequired = false`, runtime advice unavailable
  - REVIEW: `noAdviceRequired = false`, runtime analysis unavailable

## What is intentionally NOT implemented

- No CameraX, OpenCV, ML Kit, MediaPipe, LiteRT/TensorFlow Lite,
  YOLO/Ultralytics, Detectron2, Hugging Face/Timm.
- No model files, datasets, or training scripts.
- No camera permission request, no camera preview, no frame analyzer.
- No network/API client, no payload runtime, no Creator runtime.
- No federation export, no TSS/SCC runtime, no Buddy runtime, no LARIS runtime.
- No engine eval, best move, candidate move, TSS warning, CCT hint, Buddy
  explanation, model output, Learning Frontier hint, mastery claim, learner
  rationale, or federation export action on any screen.

## PR #37 boundaries

- This is **skeleton only**.
- It intentionally does **not** implement CV/runtime.
- It follows **ANDROID-CV-LLD-OOP-UML-001**.
- Framework adapters come later, behind interfaces.
- **Android does not own governed reality.**
- **ChessGuide owns governed reality.**
- **Buddy and LARIS remain inactive.**
- **thewilhelmsen.com is not modified.**
- Switching mode is local UI placeholder state only — it never calls a backend,
  ModeGate runtime, payload runtime, or CV.

## Next planned PRs

- **PR #38** — Web Surface Shell / Mode-Gated Display Skeleton v1.0
- **PR #39** — Android CameraX Preview + ImageAnalysis Sandbox
- **PR #40** — Android Board Overlay + Calibration UI
