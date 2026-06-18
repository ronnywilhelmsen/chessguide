package no.rw.chessguide.android.feature.scanner

/**
 * Honest, operational diagnostic for the ImageAnalysis lane. It describes only
 * whether frames are flowing — never any CV/advice state.
 */
enum class AnalyzerDiagnostic {
    PERMISSION_DENIED,
    WAITING_FOR_FRAMES,
    ACTIVE,
    UNAVAILABLE,
}
