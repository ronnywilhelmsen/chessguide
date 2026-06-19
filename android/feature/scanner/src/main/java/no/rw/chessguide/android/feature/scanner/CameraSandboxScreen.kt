package no.rw.chessguide.android.feature.scanner

import android.Manifest
import android.content.pm.PackageManager
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.lifecycle.compose.LocalLifecycleOwner
import java.util.concurrent.Executors

/**
 * Camera Sandbox screen — CameraX preview + visual board-overlay calibration +
 * safe ImageAnalysis frame-metadata diagnostics.
 *
 * SCOPE: camera sandbox only. The overlay is purely VISUAL calibration; it
 * performs NO board/piece/clock/player/move detection, NO OCR, NO OpenCV/ML
 * Kit/MediaPipe/TensorFlow/LiteRT/YOLO, NO engine, NO TSS/CCT, NO Buddy, NO
 * LARIS, NO Creator/payload runtime, NO federation export, NO image capture or
 * persistence, and NO network/API calls. The analyzer emits only safe
 * [FrameMetadata].
 */
@Composable
fun CameraSandboxScreen(
    onBack: () -> Unit,
    modifier: Modifier = Modifier,
) {
    val context = LocalContext.current

    var permission by remember {
        mutableStateOf(
            if (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA) ==
                PackageManager.PERMISSION_GRANTED
            ) {
                CameraPermissionState.GRANTED
            } else {
                CameraPermissionState.NOT_REQUESTED
            },
        )
    }
    var lastFrame by remember { mutableStateOf<FrameMetadata?>(null) }
    var cameraError by remember { mutableStateOf<String?>(null) }
    var calibration by remember { mutableStateOf(CalibrationUiState()) }

    val permissionLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.RequestPermission(),
    ) { granted ->
        permission = if (granted) CameraPermissionState.GRANTED else CameraPermissionState.DENIED
    }

    LaunchedEffect(Unit) {
        if (permission == CameraPermissionState.NOT_REQUESTED) {
            permissionLauncher.launch(Manifest.permission.CAMERA)
        }
    }

    val diagnostic = when {
        permission == CameraPermissionState.DENIED -> AnalyzerDiagnostic.PERMISSION_DENIED
        cameraError != null -> AnalyzerDiagnostic.UNAVAILABLE
        lastFrame == null -> AnalyzerDiagnostic.WAITING_FOR_FRAMES
        else -> AnalyzerDiagnostic.ACTIVE
    }

    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(text = "Camera Sandbox", style = MaterialTheme.typography.titleLarge)
        Text(
            text = "Camera sandbox only — no CV, no engine, no advice.",
            style = MaterialTheme.typography.bodyMedium,
        )

        when (permission) {
            CameraPermissionState.GRANTED -> {
                val error = cameraError
                if (error != null) {
                    CameraErrorContent(message = error)
                } else {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .aspectRatio(3f / 4f),
                    ) {
                        CameraPreview(
                            onFrame = { lastFrame = it },
                            onError = { cameraError = it },
                            modifier = Modifier.fillMaxSize(),
                        )
                        // Transparent visual calibration overlay on top of the preview.
                        BoardOverlay(
                            calibrationState = calibration.state,
                            modifier = Modifier.fillMaxSize(),
                        )
                        // Always-visible compact readout so frame updates are
                        // obvious even when the metadata panel is scrolled off.
                        FrameReadout(
                            frame = lastFrame,
                            diagnostic = diagnostic,
                            modifier = Modifier
                                .align(Alignment.TopStart)
                                .padding(8.dp),
                        )
                    }
                }

                CalibrationControls(
                    calibration = calibration,
                    onStart = { calibration = calibration.start() },
                    onReset = { calibration = calibration.reset() },
                    onLock = { calibration = calibration.lock() },
                )

                FrameMetadataPanel(frame = lastFrame, diagnostic = diagnostic)
            }

            CameraPermissionState.DENIED -> PermissionDeniedContent(
                onRetry = { permissionLauncher.launch(Manifest.permission.CAMERA) },
            )

            CameraPermissionState.NOT_REQUESTED -> Text(
                text = "Requesting camera permission…",
                style = MaterialTheme.typography.bodyMedium,
            )
        }

        TextButton(onClick = onBack) {
            Text("Back")
        }
    }
}

@Composable
private fun FrameReadout(
    frame: FrameMetadata?,
    diagnostic: AnalyzerDiagnostic,
    modifier: Modifier = Modifier,
) {
    val text = if (frame == null) {
        "Frame: — • $diagnostic"
    } else {
        "Frame #${frame.frameNumber} • ${frame.width}x${frame.height} • ${frame.rotationDegrees}°"
    }
    Text(
        text = text,
        color = Color.White,
        style = MaterialTheme.typography.labelMedium,
        modifier = modifier
            .background(Color(0xCC000000))
            .padding(horizontal = 8.dp, vertical = 4.dp),
    )
}

@Composable
private fun CameraPreview(
    onFrame: (FrameMetadata) -> Unit,
    onError: (String) -> Unit,
    modifier: Modifier = Modifier,
) {
    val lifecycleOwner = LocalLifecycleOwner.current
    val analysisExecutor = remember { Executors.newSingleThreadExecutor() }

    DisposableEffect(Unit) {
        onDispose { analysisExecutor.shutdown() }
    }

    AndroidView(
        modifier = modifier,
        factory = { ctx ->
            val previewView = PreviewView(ctx)
            val providerFuture = ProcessCameraProvider.getInstance(ctx)
            providerFuture.addListener(
                {
                    try {
                        val provider = providerFuture.get()
                        val preview = Preview.Builder().build().also {
                            it.setSurfaceProvider(previewView.surfaceProvider)
                        }
                        val analysis = ImageAnalysis.Builder()
                            .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
                            .build()
                            .also {
                                it.setAnalyzer(
                                    analysisExecutor,
                                    SandboxImageAnalyzer(onMetadata = onFrame),
                                )
                            }
                        provider.unbindAll()
                        provider.bindToLifecycle(
                            lifecycleOwner,
                            CameraSelector.DEFAULT_BACK_CAMERA,
                            preview,
                            analysis,
                        )
                    } catch (t: Throwable) {
                        onError(t.message ?: "Camera unavailable")
                    }
                },
                ContextCompat.getMainExecutor(ctx),
            )
            previewView
        },
    )
}

@Composable
private fun PermissionDeniedContent(onRetry: () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Text(
            text = "Camera permission denied. The sandbox needs the camera only to " +
                "show a preview, a visual calibration overlay, and frame metadata. " +
                "Nothing is captured or stored.",
            style = MaterialTheme.typography.bodyMedium,
        )
        Button(onClick = onRetry) {
            Text("Grant camera permission")
        }
    }
}

@Composable
private fun CameraErrorContent(message: String) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Text(
            text = "Camera unavailable.",
            style = MaterialTheme.typography.titleMedium,
        )
        Text(
            text = message,
            style = MaterialTheme.typography.bodySmall,
        )
    }
}
