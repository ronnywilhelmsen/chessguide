# Verify the Android skeleton: run JVM unit tests and assemble the debug app.
# Usage: powershell -ExecutionPolicy Bypass -File tools/verify-android.ps1
# Requires a JDK (e.g. Android Studio's bundled JBR) available to Gradle.
$repoRoot = Split-Path -Parent $PSScriptRoot
$android = Join-Path $repoRoot 'android'

Write-Host '== Android verify =='
Push-Location $android
try {
    if (Test-Path '.\gradlew.bat') {
        .\gradlew.bat :core:model:testDebugUnitTest :core:mode:testDebugUnitTest :feature:scanner:testDebugUnitTest :app:assembleDebug
    } else {
        gradle :core:model:testDebugUnitTest :core:mode:testDebugUnitTest :feature:scanner:testDebugUnitTest :app:assembleDebug
    }
    if ($LASTEXITCODE -ne 0) {
        Write-Host 'ANDROID VERIFY: FAILED' -ForegroundColor Red
        exit 1
    }
}
finally {
    Pop-Location
}

Write-Host 'ANDROID VERIFY: SUCCESS' -ForegroundColor Green
exit 0
