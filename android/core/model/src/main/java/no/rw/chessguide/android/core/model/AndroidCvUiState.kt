package no.rw.chessguide.android.core.model

/**
 * Top-level UI state for the ChessGuide Android skeleton (PR #37).
 *
 * Every runtime-availability flag defaults to false on purpose: nothing in
 * this skeleton is implemented. CameraX, CV, payload, Creator replay, Buddy,
 * and LARIS are all inactive. Follows ANDROID-CV-LLD-OOP-UML-001.
 */
data class AndroidCvUiState(
    val activeMode: AndroidSurfaceMode,
    val noAdviceBanner: NoAdviceBannerState,
    val cameraRuntimeAvailable: Boolean = false,
    val cvRuntimeAvailable: Boolean = false,
    val payloadRuntimeAvailable: Boolean = false,
    val creatorReplayAvailable: Boolean = false,
    val buddyAvailable: Boolean = false,
    val larisAvailable: Boolean = false,
)
