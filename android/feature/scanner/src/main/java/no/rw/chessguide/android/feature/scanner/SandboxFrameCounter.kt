package no.rw.chessguide.android.feature.scanner

/**
 * Pure, framework-free frame-metadata producer for the Camera Sandbox.
 *
 * It increments a frame counter and produces only safe [FrameMetadata]. It
 * deliberately has NO access to image pixels and performs NO computer vision,
 * board/piece detection, OCR, move recognition, or any semantic analysis. This
 * class is unit-testable on the JVM without Android or CameraX.
 */
class SandboxFrameCounter {
    private var count: Long = 0L

    val frameCount: Long
        get() = count

    /** Produce the next safe metadata record for an observed frame. */
    fun next(
        width: Int,
        height: Int,
        rotationDegrees: Int,
        timestampMs: Long,
    ): FrameMetadata {
        count += 1
        return FrameMetadata(
            frameNumber = count,
            width = width,
            height = height,
            rotationDegrees = rotationDegrees,
            timestampMs = timestampMs,
            status = AnalyzerStatus.RUNNING,
        )
    }

    fun reset() {
        count = 0L
    }
}
