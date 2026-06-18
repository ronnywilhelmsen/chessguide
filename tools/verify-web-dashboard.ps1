# Verify the modern web dashboard: install deps, lint, test, build.
# Usage: powershell -ExecutionPolicy Bypass -File tools/verify-web-dashboard.ps1
$repoRoot = Split-Path -Parent $PSScriptRoot
$web = Join-Path $repoRoot 'apps/web-dashboard'

Write-Host '== Web dashboard verify =='
Push-Location $web
try {
    if (Test-Path 'package-lock.json') {
        npm ci
    } else {
        npm install
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Host 'WEB VERIFY: FAILED (dependency install)' -ForegroundColor Red
        exit 1
    }

    npm run verify
    if ($LASTEXITCODE -ne 0) {
        Write-Host 'WEB VERIFY: FAILED' -ForegroundColor Red
        exit 1
    }
}
finally {
    Pop-Location
}

Write-Host 'WEB VERIFY: SUCCESS' -ForegroundColor Green
exit 0
