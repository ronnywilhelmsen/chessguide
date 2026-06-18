package no.rw.chessguide.android.feature.scanner

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * JVM unit tests for the board-overlay calibration UI and the safe
 * frame-metadata diagnostics. No CameraX/Android is touched; these verify pure
 * logic and that no CV/semantic data can leak through the scanner state.
 */
class BoardOverlayCalibrationTest {

    // Field-name substrings that must never appear in any scanner state class.
    private val forbiddenSubstrings = listOf(
        "board", "piece", "clock", "player", "move", "candidate",
        "detect", "recognition", "engine", "eval", "tss", "cct",
        "buddy", "laris", "creator", "payload", "federation", "export",
        "mastery", "rationale", "frontier", "model", "advice",
    )

    @Test
    fun calibrationState_containsAllExpectedValues() {
        val values = CalibrationState.entries.toSet()
        assertTrue(values.contains(CalibrationState.NOT_STARTED))
        assertTrue(values.contains(CalibrationState.ALIGNING))
        assertTrue(values.contains(CalibrationState.LOCKED_PLACEHOLDER))
        assertTrue(values.contains(CalibrationState.FAILED_PLACEHOLDER))
    }

    @Test
    fun calibrationUiState_defaultIsNotStarted() {
        assertEquals(CalibrationState.NOT_STARTED, CalibrationUiState().state)
        assertTrue(CalibrationUiState().visualOnly)
    }

    @Test
    fun startCalibration_transitionsToAligning() {
        assertEquals(CalibrationState.ALIGNING, CalibrationUiState().start().state)
    }

    @Test
    fun resetCalibration_transitionsToNotStarted() {
        val aligning = CalibrationUiState().start()
        assertEquals(CalibrationState.NOT_STARTED, aligning.reset().state)
    }

    @Test
    fun lockPlaceholder_transitionsToLockedPlaceholder() {
        assertEquals(
            CalibrationState.LOCKED_PLACEHOLDER,
            CalibrationUiState().start().lock().state,
        )
    }

    @Test
    fun failedPlaceholder_canBeRepresented() {
        assertEquals(
            CalibrationState.FAILED_PLACEHOLDER,
            CalibrationUiState().fail().state,
        )
    }

    @Test
    fun overlayModel_isVisualOnly() {
        val spec = BoardOverlaySpec()
        assertTrue(spec.visualOnly)
        assertEquals(8, spec.rows)
        assertEquals(8, spec.columns)
    }

    @Test
    fun overlayModel_hasNoDetectionFields() {
        assertNoForbiddenFields(BoardOverlaySpec::class.java)
    }

    @Test
    fun overlayModel_hasNoPieceOrMoveFields() {
        val fields = fieldNames(BoardOverlaySpec::class.java)
        assertTrue(fields.none { it.contains("piece") })
        assertTrue(fields.none { it.contains("move") })
        assertTrue(fields.none { it.contains("recognition") })
    }

    @Test
    fun frameMetadata_containsDiagnosticFields() {
        val expected = setOf(
            "frameNumber", "width", "height", "rotationDegrees", "timestampMs", "status",
        )
        assertEquals(expected, fieldNames(FrameMetadata::class.java, lower = false).toSet())
    }

    @Test
    fun frameMetadataUpdatePath_canRepresentIncreasingFrameCount() {
        val counter = SandboxFrameCounter()
        val frames = (1..5).map { counter.next(640, 480, 0, it.toLong()) }
        assertEquals(listOf(1L, 2L, 3L, 4L, 5L), frames.map { it.frameNumber })
        assertEquals(5L, counter.frameCount)
    }

    @Test
    fun analyzerOutput_remainsSafeMetadataOnly() {
        assertNoForbiddenFields(FrameMetadata::class.java)
    }

    @Test
    fun scannerState_hasNoEngineTssBuddyLarisFields() {
        assertNoForbiddenFields(CameraSandboxState::class.java)
        assertNoForbiddenFields(CalibrationUiState::class.java)
        assertNoForbiddenFields(FrameMetadata::class.java)
        assertNoForbiddenFields(BoardOverlaySpec::class.java)
    }

    private fun fieldNames(clazz: Class<*>, lower: Boolean = true): List<String> =
        clazz.declaredFields
            .map { if (lower) it.name.lowercase() else it.name }
            .filterNot { it.startsWith("$") }

    private fun assertNoForbiddenFields(clazz: Class<*>) {
        for (name in fieldNames(clazz)) {
            for (forbidden in forbiddenSubstrings) {
                assertFalse(
                    "${clazz.simpleName} field '$name' must not contain '$forbidden'",
                    name.contains(forbidden),
                )
            }
        }
    }
}
