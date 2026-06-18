package no.rw.chessguide.android.feature.scanner

import androidx.camera.core.ImageAnalysis
import androidx.camera.core.ImageProxy

/**
 * CameraX [ImageAnalysis.Analyzer] for the Camera Sandbox.
 *
 * SAFETY CONTRACT:
 *  - It reads only the frame SHAPE (width, height, rotation) and a timestamp.
 *  - It NEVER reads/copies/keeps pixel buffers; it closes the [ImageProxy]
 *    immediately, so no image is captured or persisted.
 *  - It performs NO computer vision: no board, piece, clock, player, or move
 *    detection, no OCR, no OpenCV/ML Kit/MediaPipe/TensorFlow/LiteRT/YOLO.
 *  - It emits only safe [FrameMetadata]. No engine eval, TSS/CCT, Buddy, LARIS,
 *    Creator, payload, or federation output is ever produced.
 *  - It performs NO network/API calls.
 */
class SandboxImageAnalyzer(
    private val onMetadata: (FrameMetadata) -> Unit,
    private val counter: SandboxFrameCounter = SandboxFrameCounter(),
    private val clockMs: () -> Long = { System.currentTimeMillis() },
) : ImageAnalysis.Analyzer {

    override fun analyze(image: ImageProxy) {
        try {
            val metadata = counter.next(
                width = image.width,
                height = image.height,
                rotationDegrees = image.imageInfo.rotationDegrees,
                timestampMs = clockMs(),
            )
            onMetadata(metadata)
        } finally {
            // Always release the frame immediately. Nothing is retained.
            image.close()
        }
    }
}
