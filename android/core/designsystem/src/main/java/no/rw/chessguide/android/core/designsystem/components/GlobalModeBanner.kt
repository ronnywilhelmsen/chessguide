package no.rw.chessguide.android.core.designsystem.components

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import no.rw.chessguide.android.core.model.AndroidSurfaceMode

/**
 * Global mode banner placeholder (PR #37 skeleton).
 *
 * Shows only the current local placeholder mode. It does not reflect any
 * governed runtime state. ChessGuide owns governed reality.
 */
@Composable
fun GlobalModeBanner(
    mode: AndroidSurfaceMode,
    modifier: Modifier = Modifier,
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.secondaryContainer,
        ),
    ) {
        Text(
            text = "Mode: $mode",
            style = MaterialTheme.typography.titleMedium,
            modifier = Modifier.padding(16.dp),
        )
    }
}
