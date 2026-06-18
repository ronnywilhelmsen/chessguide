package no.rw.chessguide.android.core.designsystem.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import no.rw.chessguide.android.core.model.NoAdviceBannerState

/**
 * No-advice banner placeholder (PR #37 skeleton).
 *
 * Displays calm, fixed text from [NoAdviceBannerState]. It never displays
 * engine eval, best move, candidate move, or any advice. This is the visible
 * promise that competition/broadcast surfaces show no advice.
 */
@Composable
fun NoAdviceBanner(
    state: NoAdviceBannerState,
    modifier: Modifier = Modifier,
) {
    if (!state.visible) return

    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.errorContainer,
        ),
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp),
        ) {
            Text(text = state.title, style = MaterialTheme.typography.titleMedium)
            Text(text = state.message, style = MaterialTheme.typography.bodyMedium)
        }
    }
}
