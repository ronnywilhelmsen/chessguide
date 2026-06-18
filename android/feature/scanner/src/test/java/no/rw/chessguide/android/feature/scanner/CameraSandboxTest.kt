package no.rw.chessguide.android.feature.scanner

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * JVM unit tests for the Camera Sandbox safe-metadata contract.
 *
 * These tests do NOT touch CameraX or Android; they verify the pure logic and
 * that no forbidden semantic/CV data can leak through the sandbox types.
 */
class CameraSandboxTest {

    private val safeFieldNames = setOf(
        "frameNumber",
        "width",
        "height",
        "rotationDegrees",
        "timestampMs",
        "status",
    )

    // Forbidden substrings that must never appear in the metadata field names.
    private val forbiddenSubstrings = listOf(
        "board", "piece", "clock", "player", "move", "candidate",
        "engine", "eval", "tss", "cct", "buddy", "laris",
        "mastery", "rationale", "frontier", "model", "advice", "export",
    )

    @Test
    fun frameMetadata_canBeCreated() {
        val metadata = FrameMetadata(
            frameNumber = 1L,
            width = 640,
            height = 480,
            rotationDegrees = 90,
            timestampMs = 123L,
            status = AnalyzerStatus.RUNNING,
        )
        assertEquals(1L, metadata.frameNumber)
        assertEquals(640, metadata.width)
        assertEquals(480, metadata.height)
        assertEquals(90, metadata.rotationDegrees)
        assertEquals(123L, metadata.timestampMs)
        assertEquals(AnalyzerStatus.RUNNING, metadata.status)
    }

    @Test
    fun analyzerLogic_incrementsFrameCounter() {
        val counter = SandboxFrameCounter()
        val first = counter.next(640, 480, 0, 1L)
        val second = counter.next(640, 480, 0, 2L)
        assertEquals(1L, first.frameNumber)
        assertEquals(2L, second.frameNumber)
        assertEquals(2L, counter.frameCount)
    }

    @Test
    fun analyzerOutput_containsOnlySafeMetadata() {
        val fieldNames = FrameMetadata::class.java.declaredFields
            .map { it.name }
            .filterNot { it.startsWith("$") } // ignore synthetic fields
            .toSet()
        assertEquals(safeFieldNames, fieldNames)
    }

    @Test
    fun analyzerOutput_doesNotEmitBoardState() {
        assertNoForbiddenField("board")
    }

    @Test
    fun analyzerOutput_doesNotEmitMoveCandidates() {
        assertNoForbiddenField("move")
        assertNoForbiddenField("candidate")
    }

    @Test
    fun analyzerOutput_doesNotEmitEngineEval() {
        assertNoForbiddenField("engine")
        assertNoForbiddenField("eval")
    }

    @Test
    fun analyzerOutput_doesNotEmitTssOrCctOutput() {
        assertNoForbiddenField("tss")
        assertNoForbiddenField("cct")
    }

    @Test
    fun analyzerOutput_doesNotEmitBuddyOrLarisOutput() {
        assertNoForbiddenField("buddy")
        assertNoForbiddenField("laris")
    }

    @Test
    fun metadataFieldNames_containNoForbiddenSubstring() {
        val fieldNames = FrameMetadata::class.java.declaredFields
            .map { it.name.lowercase() }
            .filterNot { it.startsWith("$") }
        for (name in fieldNames) {
            for (forbidden in forbiddenSubstrings) {
                assertFalse(
                    "FrameMetadata field '$name' must not contain '$forbidden'",
                    name.contains(forbidden),
                )
            }
        }
    }

    @Test
    fun cameraSandboxState_defaultIsSandboxOnlyAndNoRuntimeActive() {
        val state = CameraSandboxState()
        assertTrue(state.sandboxOnly)
        assertFalse(state.runtimeActive)
        assertEquals(CameraPermissionState.NOT_REQUESTED, state.permission)
        assertEquals(CameraStatus.IDLE, state.cameraStatus)
        assertNull(state.lastFrame)
    }

    @Test
    fun permissionDeniedState_isRepresented() {
        val denied = CameraSandboxState(permission = CameraPermissionState.DENIED)
        assertEquals(CameraPermissionState.DENIED, denied.permission)
        // The enum explicitly models the denied case.
        assertTrue(CameraPermissionState.entries.contains(CameraPermissionState.DENIED))
    }

    private fun assertNoForbiddenField(substring: String) {
        val fieldNames = FrameMetadata::class.java.declaredFields
            .map { it.name.lowercase() }
            .filterNot { it.startsWith("$") }
        assertTrue(
            "FrameMetadata must not expose a '$substring' field",
            fieldNames.none { it.contains(substring) },
        )
    }
}
