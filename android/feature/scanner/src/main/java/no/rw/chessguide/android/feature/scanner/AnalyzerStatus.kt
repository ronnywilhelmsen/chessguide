package no.rw.chessguide.android.feature.scanner

/**
 * Status of the sandbox ImageAnalysis analyzer. Operational only — never an
 * advice/CV state.
 */
enum class AnalyzerStatus {
    IDLE,
    RUNNING,
    ERROR,
}
