package no.rw.chessguide.android.core.designsystem

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable

/**
 * Calm, minimal Material 3 theme for the ChessGuide Android skeleton (PR #37).
 *
 * Intentionally simple. No dynamic color, no experimental APIs, no branding
 * assets. Skeleton only — follows ANDROID-CV-LLD-OOP-UML-001.
 */
@Composable
fun ChessGuideTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit,
) {
    val colorScheme = if (darkTheme) darkColorScheme() else lightColorScheme()
    MaterialTheme(
        colorScheme = colorScheme,
        content = content,
    )
}
