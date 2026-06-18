package no.rw.chessguide.android.core.model

/**
 * Immutable UI state for the no-advice banner placeholder (PR #37 skeleton).
 *
 * This carries display text only. It never carries engine eval, best move,
 * candidate move, TSS warning, CCT hint, Buddy explanation, model output,
 * Learning Frontier hint, mastery claim, or learner rationale.
 */
data class NoAdviceBannerState(
    val visible: Boolean,
    val title: String,
    val message: String,
)
