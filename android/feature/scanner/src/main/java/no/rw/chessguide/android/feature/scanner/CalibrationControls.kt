package no.rw.chessguide.android.feature.scanner

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

/**
 * Calibration controls for the visual overlay. Buttons only change local UI
 * placeholder state. They run NO calibration solve, NO CV, and NO detection.
 */
@OptIn(ExperimentalLayoutApi::class)
@Composable
fun CalibrationControls(
    calibration: CalibrationUiState,
    onStart: () -> Unit,
    onReset: () -> Unit,
    onLock: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.spacedBy(4.dp),
    ) {
        Text(
            text = "Calibration: ${calibration.state}",
            style = MaterialTheme.typography.titleMedium,
        )
        Text(
            text = "Overlay is visual calibration only — no board detection.",
            style = MaterialTheme.typography.bodySmall,
        )
        FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            Button(onClick = onStart) { Text("Start calibration") }
            OutlinedButton(onClick = onReset) { Text("Reset") }
            OutlinedButton(onClick = onLock) { Text("Lock (placeholder)") }
        }
    }
}
