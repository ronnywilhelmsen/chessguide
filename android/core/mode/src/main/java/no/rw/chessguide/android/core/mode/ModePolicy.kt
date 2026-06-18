package no.rw.chessguide.android.core.mode

import no.rw.chessguide.android.core.model.AndroidSurfaceMode
import no.rw.chessguide.android.core.model.NoAdviceBannerState

/**
 * Placeholder mode policy for the ChessGuide Android skeleton (PR #37).
 *
 * This encodes display-only, local placeholder behavior. It does NOT call
 * the real ModeGate runtime, payload runtime, CV, Creator, Buddy, or LARIS.
 * It only decides which calm UI text to show. ChessGuide owns governed
 * reality; this object never produces governed decisions.
 *
 * Follows ANDROID-CV-LLD-OOP-UML-001. Real mode-gating arrives later behind
 * interfaces/adapters.
 */
object ModePolicy {

    /**
     * Whether a given mode must, as a placeholder rule, display a no-advice
     * banner in this skeleton.
     */
    fun noAdviceRequired(mode: AndroidSurfaceMode): Boolean = when (mode) {
        AndroidSurfaceMode.COMPETITION -> true
        AndroidSurfaceMode.BROADCAST_DISPLAY -> true
        AndroidSurfaceMode.LEARNING -> false
        AndroidSurfaceMode.REVIEW -> false
    }

    /**
     * Build the placeholder banner state for a mode. Text only — no analysis,
     * eval, or advice ever flows through here.
     */
    fun bannerFor(mode: AndroidSurfaceMode): NoAdviceBannerState = when (mode) {
        AndroidSurfaceMode.COMPETITION -> NoAdviceBannerState(
            visible = true,
            title = "No advice — Competition Mode",
            message = "No engine evaluation, best move, or hints are shown during competition play.",
        )
        AndroidSurfaceMode.BROADCAST_DISPLAY -> NoAdviceBannerState(
            visible = true,
            title = "No advice — Broadcast Display",
            message = "Display surface only. No advice or analysis is shown to players.",
        )
        AndroidSurfaceMode.LEARNING -> NoAdviceBannerState(
            visible = false,
            title = "Learning Mode",
            message = "Runtime advice is not available in this skeleton (PR #37).",
        )
        AndroidSurfaceMode.REVIEW -> NoAdviceBannerState(
            visible = false,
            title = "Review Mode",
            message = "Runtime analysis is not available in this skeleton (PR #37).",
        )
    }

    /**
     * Output classes that are forbidden on every screen in this skeleton,
     * regardless of mode. Returned for documentation/guard purposes only;
     * nothing in the skeleton ever produces these.
     */
    fun forbiddenOutputs(mode: AndroidSurfaceMode): List<String> = listOf(
        "engine_eval",
        "best_move",
        "candidate_move",
        "tss_warning",
        "cct_hint",
        "buddy_explanation",
        "model_output",
        "learning_frontier_hint",
        "mastery_claim",
        "learner_rationale",
        "federation_export_action",
    )
}
