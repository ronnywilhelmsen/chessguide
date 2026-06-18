package no.rw.chessguide.android.core.mode

import no.rw.chessguide.android.core.model.AndroidSurfaceMode
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * JVM unit tests for ModePolicy (PR #40 reliability suite).
 * Verifies the placeholder no-advice rules and banner visibility.
 */
class ModePolicyTest {

    @Test
    fun noAdviceRequired_competition_isTrue() {
        assertTrue(ModePolicy.noAdviceRequired(AndroidSurfaceMode.COMPETITION))
    }

    @Test
    fun noAdviceRequired_broadcastDisplay_isTrue() {
        assertTrue(ModePolicy.noAdviceRequired(AndroidSurfaceMode.BROADCAST_DISPLAY))
    }

    @Test
    fun noAdviceRequired_learning_isFalse() {
        assertFalse(ModePolicy.noAdviceRequired(AndroidSurfaceMode.LEARNING))
    }

    @Test
    fun noAdviceRequired_review_isFalse() {
        assertFalse(ModePolicy.noAdviceRequired(AndroidSurfaceMode.REVIEW))
    }

    @Test
    fun bannerFor_competition_isVisible() {
        assertTrue(ModePolicy.bannerFor(AndroidSurfaceMode.COMPETITION).visible)
    }

    @Test
    fun bannerFor_broadcastDisplay_isVisible() {
        assertTrue(ModePolicy.bannerFor(AndroidSurfaceMode.BROADCAST_DISPLAY).visible)
    }
}
