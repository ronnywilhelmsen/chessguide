package no.rw.chessguide.android.feature.competition

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import no.rw.chessguide.android.core.designsystem.components.NoAdviceBanner
import no.rw.chessguide.android.core.model.NoAdviceBannerState

/**
 * Competition screen — placeholder (PR #37 skeleton).
 *
 * Always shows the no-advice banner. No engine eval, best move, candidate
 * move, TSS warning, CCT hint, Buddy explanation, or any advice is ever
 * shown here. Follows ANDROID-CV-LLD-OOP-UML-001.
 */
@Composable
fun CompetitionPlaceholderScreen(
    noAdviceBanner: NoAdviceBannerState,
    onBack: () -> Unit,
    modifier: Modifier = Modifier,
) {
    Column(
        modifier = modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Text(text = "Competition", style = MaterialTheme.typography.titleLarge)

        NoAdviceBanner(state = noAdviceBanner)

        Text(
            text = "Competition surface placeholder. No analysis or advice is " +
                "available in this skeleton (PR #37).",
            style = MaterialTheme.typography.bodyMedium,
        )
        TextButton(onClick = onBack) {
            Text("Back")
        }
    }
}
