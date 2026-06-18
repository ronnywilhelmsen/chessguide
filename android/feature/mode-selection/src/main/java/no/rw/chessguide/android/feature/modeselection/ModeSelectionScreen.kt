package no.rw.chessguide.android.feature.modeselection

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.Button
import androidx.compose.material3.FilledTonalButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import no.rw.chessguide.android.core.model.AndroidSurfaceMode

/**
 * Mode Selection screen (PR #37 skeleton).
 *
 * Switching mode changes LOCAL UI placeholder state only. It does NOT call
 * backend, ModeGate runtime, payload runtime, or CV. ChessGuide owns governed
 * reality. Follows ANDROID-CV-LLD-OOP-UML-001.
 */
@Composable
fun ModeSelectionScreen(
    activeMode: AndroidSurfaceMode,
    onModeSelected: (AndroidSurfaceMode) -> Unit,
    onBack: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(text = "Mode Selection", style = MaterialTheme.typography.titleLarge)
        Text(
            text = "Local UI placeholder only. No runtime mode-gating is performed.",
            style = MaterialTheme.typography.bodySmall,
        )

        AndroidSurfaceMode.entries.forEach { mode ->
            if (mode == activeMode) {
                FilledTonalButton(
                    onClick = { onModeSelected(mode) },
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Text("$mode (selected)")
                }
            } else {
                Button(
                    onClick = { onModeSelected(mode) },
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    Text(mode.toString())
                }
            }
        }

        TextButton(onClick = onBack) {
            Text("Back")
        }
    }
}
