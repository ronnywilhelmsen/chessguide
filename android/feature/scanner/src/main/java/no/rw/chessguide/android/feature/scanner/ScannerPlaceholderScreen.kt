package no.rw.chessguide.android.feature.scanner

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

/**
 * Scanner screen — placeholder (PR #37 skeleton).
 *
 * No camera, no frame analyzer, no CV. Board detection, geometry, and piece
 * recognition arrive in later PRs behind interfaces/adapters.
 * Follows ANDROID-CV-LLD-OOP-UML-001.
 */
@Composable
fun ScannerPlaceholderScreen(
    onBack: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(text = "Scanner", style = MaterialTheme.typography.titleLarge)
        Text(
            text = "Camera/CV runtime is not implemented in PR #37.",
            style = MaterialTheme.typography.bodyMedium,
        )
        TextButton(onClick = onBack) {
            Text("Back")
        }
    }
}
