#!/usr/bin/env bash
# Verify the Android skeleton: run JVM unit tests and assemble the debug app.
# Usage: bash tools/verify-android.sh
# Requires a JDK available to Gradle.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT/android"

echo "== Android verify =="
if [ -f ./gradlew ]; then
  ./gradlew :core:model:testDebugUnitTest :core:mode:testDebugUnitTest :app:assembleDebug
else
  gradle :core:model:testDebugUnitTest :core:mode:testDebugUnitTest :app:assembleDebug
fi

echo "ANDROID VERIFY: SUCCESS"
