package no.rw.chessguide.android.feature.camerasetup

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
 * Camera Setup screen — placeholder (PR #37 skeleton).
 *
 * No camera permission is requested and no CameraX is started here. There is
 * no real camera preview. Camera permission and CameraX ImageAnalysis start
 * in a later PR. Follows ANDROID-CV-LLD-OOP-UML-001.
 */
@Composable
fun CameraSetupScreen(
    onBack: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(8.dp),
    ) {
        Text(text = "Camera Setup", style = MaterialTheme.typography.titleLarge)
        Text(
            text = "Camera permission and CameraX ImageAnalysis start in a later PR.",
            style = MaterialTheme.typography.bodyMedium,
        )
        TextButton(onClick = onBack) {
            Text("Back")
        }
    }
}
