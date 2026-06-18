package no.rw.chessguide.android.feature.scanner

/**
 * Safe, non-semantic frame metadata emitted by the Camera Sandbox analyzer.
 *
 * This is the ONLY thing the sandbox analyzer is allowed to produce. It carries
 * no image pixels, no board/piece/clock/player/move detection, no engine
 * evaluation, no TSS/CCT output, and no Buddy/LARIS output. It is pure
 * frame-shape metadata used only to prove that ImageAnalysis is receiving
 * frames. Nothing here is persisted, exported, or sent over the network.
 */
data class FrameMetadata(
    val frameNumber: Long,
    val width: Int,
    val height: Int,
    val rotationDegrees: Int,
    val timestampMs: Long,
    val status: AnalyzerStatus,
)
