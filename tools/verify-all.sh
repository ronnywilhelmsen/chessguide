#!/usr/bin/env bash
# Verify both the web dashboard and the Android skeleton. Fails if either fails.
# Usage: bash tools/verify-all.sh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "== Verify all (web + android) =="
bash "$SCRIPT_DIR/verify-web-dashboard.sh"
bash "$SCRIPT_DIR/verify-android.sh"

echo ""
echo "VERIFY ALL: SUCCESS"
echo "Next manual steps:"
echo "  Web dev server:  cd apps/web-dashboard && npm run dev   (http://localhost:3000)"
echo "  Android:         open the android/ folder in Android Studio"
