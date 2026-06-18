package no.rw.chessguide.android.feature.scanner

/**
 * UI state for the Camera Sandbox.
 *
 * Defaults are intentionally inert: this is a sandbox only and NO runtime is
 * active (no CV, engine, TSS/CCT, Buddy, LARIS, Creator, or payload runtime).
 * The state holds only safe operational values and the latest [FrameMetadata].
 */
data class CameraSandboxState(
    val sandboxOnly: Boolean = true,
    val runtimeActive: Boolean = false,
    val permission: CameraPermissionState = CameraPermissionState.NOT_REQUESTED,
    val cameraStatus: CameraStatus = CameraStatus.IDLE,
    val lastFrame: FrameMetadata? = null,
    val errorMessage: String? = null,
)
