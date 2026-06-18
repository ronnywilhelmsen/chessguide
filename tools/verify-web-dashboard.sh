#!/usr/bin/env bash
# Verify the modern web dashboard: install deps, lint, test, build.
# Usage: bash tools/verify-web-dashboard.sh
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT/apps/web-dashboard"

echo "== Web dashboard verify =="
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi
npm run verify

echo "WEB VERIFY: SUCCESS"
