package no.rw.chessguide.android.feature.scanner

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

/**
 * Safe frame-metadata diagnostics panel.
 *
 * Shows only safe [FrameMetadata] (frame counter, width, height, rotation,
 * timestamp, analyzer status) plus an honest [AnalyzerDiagnostic]. It never
 * shows image content or any CV/advice output.
 */
@Composable
fun FrameMetadataPanel(
    frame: FrameMetadata?,
    diagnostic: AnalyzerDiagnostic,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.spacedBy(2.dp),
    ) {
        Text(
            text = "Frame metadata (safe only)",
            style = MaterialTheme.typography.titleMedium,
        )
        Text(
            text = "Analyzer: ${diagnostic.label()}",
            style = MaterialTheme.typography.bodyMedium,
        )
        if (frame == null) {
            Text(
                text = "No frame metadata yet.",
                style = MaterialTheme.typography.bodySmall,
            )
        } else {
            Text("Frame #: ${frame.frameNumber}", style = MaterialTheme.typography.bodySmall)
            Text("Size: ${frame.width} x ${frame.height}", style = MaterialTheme.typography.bodySmall)
            Text("Rotation: ${frame.rotationDegrees}°", style = MaterialTheme.typography.bodySmall)
            Text("Timestamp (ms): ${frame.timestampMs}", style = MaterialTheme.typography.bodySmall)
            Text("Status: ${frame.status}", style = MaterialTheme.typography.bodySmall)
        }
    }
}

private fun AnalyzerDiagnostic.label(): String = when (this) {
    AnalyzerDiagnostic.PERMISSION_DENIED -> "permission denied"
    AnalyzerDiagnostic.WAITING_FOR_FRAMES -> "waiting for frames…"
    AnalyzerDiagnostic.ACTIVE -> "active (receiving frames)"
    AnalyzerDiagnostic.UNAVAILABLE -> "unavailable"
}
