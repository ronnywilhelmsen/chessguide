package no.rw.chessguide.android.feature.scanner

/**
 * Visual calibration state for the board overlay.
 *
 * This is a VISUAL alignment aid only. "Locked" / "failed" are placeholders for
 * a future calibration step — they do NOT represent any board detection,
 * geometry solve, or CV result. Nothing here detects a chessboard.
 */
enum class CalibrationState {
    NOT_STARTED,
    ALIGNING,
    LOCKED_PLACEHOLDER,
    FAILED_PLACEHOLDER,
}
