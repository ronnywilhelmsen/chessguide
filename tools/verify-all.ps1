# Verify both the web dashboard and the Android skeleton.
# Fails if either fails.
# Usage: powershell -ExecutionPolicy Bypass -File tools/verify-all.ps1

Write-Host '== Verify all (web + android) =='

powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'verify-web-dashboard.ps1')
$web = $LASTEXITCODE

powershell -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'verify-android.ps1')
$android = $LASTEXITCODE

Write-Host ''
Write-Host "Web verify exit:     $web"
Write-Host "Android verify exit: $android"

if ($web -ne 0 -or $android -ne 0) {
    Write-Host 'VERIFY ALL: FAILED' -ForegroundColor Red
    exit 1
}

Write-Host 'VERIFY ALL: SUCCESS' -ForegroundColor Green
Write-Host ''
Write-Host 'Next manual steps:'
Write-Host '  Web dev server:  cd apps/web-dashboard; npm run dev   (http://localhost:3000)'
Write-Host '  Android:         open the android/ folder in Android Studio'
exit 0
