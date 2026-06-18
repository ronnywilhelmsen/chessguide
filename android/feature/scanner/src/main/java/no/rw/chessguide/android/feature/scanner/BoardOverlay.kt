package no.rw.chessguide.android.feature.scanner

import androidx.compose.foundation.Canvas
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import kotlin.math.min

/**
 * Visual-only specification for the calibration overlay.
 *
 * It describes how to DRAW guides (grid size, corner markers, crosshair). It
 * carries NO board detection result, NO piece detection result, NO move
 * recognition, and NO geometry/CV output. It is purely cosmetic guidance.
 */
data class BoardOverlaySpec(
    val rows: Int = 8,
    val columns: Int = 8,
    val showCornerMarkers: Boolean = true,
    val showCrosshair: Boolean = true,
    val visualOnly: Boolean = true,
    val label: String = "Visual calibration grid — no detection",
)

/**
 * Transparent calibration overlay drawn on top of the camera preview.
 *
 * Visual only. It draws a board-area rectangle, an [BoardOverlaySpec.rows] x
 * [BoardOverlaySpec.columns] grid, corner markers, and a center crosshair. It
 * never inspects pixels and never detects anything.
 */
@Composable
fun BoardOverlay(
    calibrationState: CalibrationState,
    modifier: Modifier = Modifier,
    spec: BoardOverlaySpec = BoardOverlaySpec(),
) {
    val guideColor = when (calibrationState) {
        CalibrationState.NOT_STARTED -> Color.White
        CalibrationState.ALIGNING -> Color(0xFFFFC107) // amber
        CalibrationState.LOCKED_PLACEHOLDER -> Color(0xFF4CAF50) // green
        CalibrationState.FAILED_PLACEHOLDER -> Color(0xFFF44336) // red
    }

    Canvas(modifier = modifier) {
        val side = min(size.width, size.height) * 0.9f
        val left = (size.width - side) / 2f
        val top = (size.height - side) / 2f
        val cell = side / spec.columns.coerceAtLeast(1)
        val cellV = side / spec.rows.coerceAtLeast(1)

        val thin = Stroke(width = 2f)

        // Board-area rectangle.
        drawRect(
            color = guideColor,
            topLeft = Offset(left, top),
            size = androidx.compose.ui.geometry.Size(side, side),
            style = Stroke(width = 4f),
        )

        // Vertical grid lines.
        for (c in 1 until spec.columns) {
            val x = left + c * cell
            drawLine(
                color = guideColor.copy(alpha = 0.6f),
                start = Offset(x, top),
                end = Offset(x, top + side),
                strokeWidth = thin.width,
            )
        }
        // Horizontal grid lines.
        for (r in 1 until spec.rows) {
            val y = top + r * cellV
            drawLine(
                color = guideColor.copy(alpha = 0.6f),
                start = Offset(left, y),
                end = Offset(left + side, y),
                strokeWidth = thin.width,
            )
        }

        if (spec.showCornerMarkers) {
            val m = side * 0.08f
            val corners = listOf(
                Offset(left, top),
                Offset(left + side, top),
                Offset(left, top + side),
                Offset(left + side, top + side),
            )
            // Draw small L-shaped markers at each corner.
            drawLine(guideColor, corners[0], Offset(left + m, top), 6f)
            drawLine(guideColor, corners[0], Offset(left, top + m), 6f)
            drawLine(guideColor, corners[1], Offset(left + side - m, top), 6f)
            drawLine(guideColor, corners[1], Offset(left + side, top + m), 6f)
            drawLine(guideColor, corners[2], Offset(left + m, top + side), 6f)
            drawLine(guideColor, corners[2], Offset(left, top + side - m), 6f)
            drawLine(guideColor, corners[3], Offset(left + side - m, top + side), 6f)
            drawLine(guideColor, corners[3], Offset(left + side, top + side - m), 6f)
        }

        if (spec.showCrosshair) {
            val cx = left + side / 2f
            val cy = top + side / 2f
            val ch = side * 0.05f
            drawLine(guideColor, Offset(cx - ch, cy), Offset(cx + ch, cy), 3f)
            drawLine(guideColor, Offset(cx, cy - ch), Offset(cx, cy + ch), 3f)
        }
    }
}
