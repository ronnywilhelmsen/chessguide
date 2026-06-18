package no.rw.chessguide.android.feature.scanner

/**
 * UI state for the visual calibration overlay. Pure, framework-free, and
 * unit-testable. Transitions are local UI placeholders only — no CV, no board
 * detection, no geometry solve.
 */
data class CalibrationUiState(
    val state: CalibrationState = CalibrationState.NOT_STARTED,
    val visualOnly: Boolean = true,
) {
    fun start(): CalibrationUiState = copy(state = CalibrationState.ALIGNING)

    fun reset(): CalibrationUiState = copy(state = CalibrationState.NOT_STARTED)

    fun lock(): CalibrationUiState = copy(state = CalibrationState.LOCKED_PLACEHOLDER)

    fun fail(): CalibrationUiState = copy(state = CalibrationState.FAILED_PLACEHOLDER)
}
