package no.rw.chessguide.android.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import no.rw.chessguide.android.core.designsystem.ChessGuideTheme
import no.rw.chessguide.android.core.designsystem.components.GlobalModeBanner
import no.rw.chessguide.android.core.designsystem.components.NoAdviceBanner
import no.rw.chessguide.android.core.mode.ModePolicy
import no.rw.chessguide.android.core.model.AndroidCvUiState
import no.rw.chessguide.android.core.model.AndroidSurfaceMode
import no.rw.chessguide.android.feature.camerasetup.CameraSetupScreen
import no.rw.chessguide.android.feature.competition.CompetitionPlaceholderScreen
import no.rw.chessguide.android.feature.modeselection.ModeSelectionScreen
import no.rw.chessguide.android.feature.scanner.ScannerPlaceholderScreen

/**
 * ChessGuide Android — skeleton app shell (PR #37).
 *
 * This is skeleton-only. It intentionally does NOT implement CV, CameraX,
 * OpenCV, YOLO, ML Kit, MediaPipe, LiteRT, validation, payload runtime,
 * Creator replay, TSS/SCC, Buddy, or LARIS. It follows
 * ANDROID-CV-LLD-OOP-UML-001. ChessGuide owns governed reality; Android
 * does not. thewilhelmsen.com is not modified.
 */
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ChessGuideTheme {
                ChessGuideAppShell()
            }
        }
    }
}

private enum class ShellDestination { HOME, MODE_SELECTION, CAMERA_SETUP, SCANNER, COMPETITION }

@Composable
private fun ChessGuideAppShell() {
    // Local UI placeholder state only. No backend, ModeGate runtime, payload, or CV.
    var activeMode by remember { mutableStateOf(AndroidSurfaceMode.COMPETITION) }
    var destination by remember { mutableStateOf(ShellDestination.HOME) }

    val uiState = AndroidCvUiState(
        activeMode = activeMode,
        noAdviceBanner = ModePolicy.bannerFor(activeMode),
    )

    Scaffold { innerPadding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            Text(text = "ChessGuide Android", style = MaterialTheme.typography.headlineSmall)

            GlobalModeBanner(mode = uiState.activeMode)

            if (uiState.noAdviceBanner.visible) {
                NoAdviceBanner(state = uiState.noAdviceBanner)
            }

            when (destination) {
                ShellDestination.HOME -> HomeContent(
                    uiState = uiState,
                    onNavigate = { destination = it },
                )
                ShellDestination.MODE_SELECTION -> ModeSelectionScreen(
                    activeMode = activeMode,
                    onModeSelected = { activeMode = it },
                    onBack = { destination = ShellDestination.HOME },
                )
                ShellDestination.CAMERA_SETUP -> CameraSetupScreen(
                    onBack = { destination = ShellDestination.HOME },
                )
                ShellDestination.SCANNER -> ScannerPlaceholderScreen(
                    onBack = { destination = ShellDestination.HOME },
                )
                ShellDestination.COMPETITION -> CompetitionPlaceholderScreen(
                    noAdviceBanner = ModePolicy.bannerFor(AndroidSurfaceMode.COMPETITION),
                    onBack = { destination = ShellDestination.HOME },
                )
            }
        }
    }
}

@Composable
private fun HomeContent(
    uiState: AndroidCvUiState,
    onNavigate: (ShellDestination) -> Unit,
) {
    Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text(
            text = "Current mode: ${uiState.activeMode}",
            style = MaterialTheme.typography.bodyLarge,
        )
        Text(
            text = "Skeleton only. CV, CameraX, OpenCV, YOLO, ML Kit, MediaPipe, " +
                "LiteRT, validation, payload, Creator, TSS, Buddy, and LARIS are " +
                "NOT active in this skeleton (PR #37).",
            style = MaterialTheme.typography.bodySmall,
        )

        Button(onClick = { onNavigate(ShellDestination.MODE_SELECTION) }) {
            Text("Mode Selection")
        }
        Button(onClick = { onNavigate(ShellDestination.CAMERA_SETUP) }) {
            Text("Camera Setup")
        }
        Button(onClick = { onNavigate(ShellDestination.SCANNER) }) {
            Text("Scanner (placeholder)")
        }
        Button(onClick = { onNavigate(ShellDestination.COMPETITION) }) {
            Text("Competition (placeholder)")
        }
    }
}
