package no.rw.chessguide.android.core.model

/**
 * Surface mode for the ChessGuide Android skeleton (PR #37).
 *
 * This is a local UI placeholder enum only. It does NOT call ModeGate runtime,
 * payload runtime, CV, Creator, Buddy, or LARIS. ChessGuide owns governed
 * reality; Android does not. Follows ANDROID-CV-LLD-OOP-UML-001.
 */
enum class AndroidSurfaceMode {
    COMPETITION,
    LEARNING,
    REVIEW,
    BROADCAST_DISPLAY,
}
