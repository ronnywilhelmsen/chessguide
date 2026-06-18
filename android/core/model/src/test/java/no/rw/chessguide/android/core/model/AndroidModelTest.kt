package no.rw.chessguide.android.core.model

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * JVM unit tests for the core model (PR #40 reliability suite).
 * Verifies the mode enum and that the skeleton's runtime-availability flags
 * default to false (nothing is implemented yet).
 */
class AndroidModelTest {

    @Test
    fun androidSurfaceMode_containsAllFourModes() {
        val modes = AndroidSurfaceMode.entries.toSet()
        assertTrue(modes.contains(AndroidSurfaceMode.COMPETITION))
        assertTrue(modes.contains(AndroidSurfaceMode.LEARNING))
        assertTrue(modes.contains(AndroidSurfaceMode.REVIEW))
        assertTrue(modes.contains(AndroidSurfaceMode.BROADCAST_DISPLAY))
        assertEquals(4, modes.size)
    }

    private fun defaultUiState() = AndroidCvUiState(
        activeMode = AndroidSurfaceMode.COMPETITION,
        noAdviceBanner = NoAdviceBannerState(visible = true, title = "", message = ""),
    )

    @Test
    fun uiState_cameraRuntimeAvailable_defaultsFalse() {
        assertFalse(defaultUiState().cameraRuntimeAvailable)
    }

    @Test
    fun uiState_cvRuntimeAvailable_defaultsFalse() {
        assertFalse(defaultUiState().cvRuntimeAvailable)
    }

    @Test
    fun uiState_payloadRuntimeAvailable_defaultsFalse() {
        assertFalse(defaultUiState().payloadRuntimeAvailable)
    }

    @Test
    fun uiState_creatorReplayAvailable_defaultsFalse() {
        assertFalse(defaultUiState().creatorReplayAvailable)
    }

    @Test
    fun uiState_buddyAvailable_defaultsFalse() {
        assertFalse(defaultUiState().buddyAvailable)
    }

    @Test
    fun uiState_larisAvailable_defaultsFalse() {
        assertFalse(defaultUiState().larisAvailable)
    }
}
