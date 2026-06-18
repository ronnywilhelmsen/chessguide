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
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxWidth
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
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.lifecycle.compose.LocalLifecycleOwner
import java.util.concurrent.Executors

/**
 * Camera Sandbox screen — CameraX preview + ImageAnalysis sandbox.
 *
 * SCOPE: camera sandbox only. It starts a CameraX preview and an ImageAnalysis
 * pipeline whose analyzer emits ONLY safe [FrameMetadata]. There is no computer
 * vision, no board/piece/clock/player/move detection, no OCR, no OpenCV/ML
 * Kit/MediaPipe/TensorFlow/LiteRT/YOLO, no engine, no TSS/CCT, no Buddy, no
 * LARIS, no Creator/payload runtime, no federation export, no image capture or
 * persistence, and no network/API calls.
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

    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(text = "Camera Sandbox", style = MaterialTheme.typography.titleLarge)
        Text(
            text = "Camera sandbox only — no CV, no engine, no advice.",
            style = MaterialTheme.typography.bodyMedium,
        )
        Text(
            text = "This only proves the camera and ImageAnalysis are wired up. " +
                "It reads frame size/rotation metadata, never image content. No " +
                "board, piece, clock, player, or move detection. No capture, no " +
                "storage, no network.",
            style = MaterialTheme.typography.bodySmall,
        )

        when (permission) {
            CameraPermissionState.GRANTED -> {
                val error = cameraError
                if (error != null) {
                    CameraErrorContent(message = error)
                } else {
                    CameraPreview(
                        onFrame = { lastFrame = it },
                        onError = { cameraError = it },
                        modifier = Modifier
                            .fillMaxWidth()
                            .aspectRatio(3f / 4f),
                    )
                }
                FrameMetadataContent(frame = lastFrame)
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
private fun FrameMetadataContent(frame: FrameMetadata?) {
    Column(verticalArrangement = Arrangement.spacedBy(2.dp)) {
        Text(text = "Frame metadata (safe only)", style = MaterialTheme.typography.titleMedium)
        if (frame == null) {
            Text(
                text = "Waiting for first frame…",
                style = MaterialTheme.typography.bodySmall,
            )
        } else {
            Text("Frame #: ${frame.frameNumber}", style = MaterialTheme.typography.bodySmall)
            Text("Size: ${frame.width} x ${frame.height}", style = MaterialTheme.typography.bodySmall)
            Text("Rotation: ${frame.rotationDegrees}°", style = MaterialTheme.typography.bodySmall)
            Text("Timestamp (ms): ${frame.timestampMs}", style = MaterialTheme.typography.bodySmall)
            Text("Analyzer status: ${frame.status}", style = MaterialTheme.typography.bodySmall)
        }
    }
}

@Composable
private fun PermissionDeniedContent(onRetry: () -> Unit) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Text(
            text = "Camera permission denied. The sandbox needs the camera only to " +
                "show a preview and frame metadata. Nothing is captured or stored.",
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
