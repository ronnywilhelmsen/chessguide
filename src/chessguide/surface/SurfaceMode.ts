// ChessGuide Web Surface — skeleton only (PR #38).
// Mode-gated display constants. This is a frontend display shell. It does NOT
// implement any payload runtime, engine, CV, TSS, Buddy, or LARIS.

export const SurfaceMode = {
  COMPETITION: 'COMPETITION',
  LEARNING: 'LEARNING',
  REVIEW: 'REVIEW',
  BROADCAST_DISPLAY: 'BROADCAST_DISPLAY',
} as const;

export type SurfaceMode = typeof SurfaceMode[keyof typeof SurfaceMode];

export const DEFAULT_SURFACE_MODE: SurfaceMode = SurfaceMode.COMPETITION;

export const ALL_SURFACE_MODES: SurfaceMode[] = [
  SurfaceMode.COMPETITION,
  SurfaceMode.LEARNING,
  SurfaceMode.REVIEW,
  SurfaceMode.BROADCAST_DISPLAY,
];

// Placeholder display-only rule: which modes must show a no-advice banner.
export const noAdviceRequired = (mode: SurfaceMode): boolean =>
  mode === SurfaceMode.COMPETITION || mode === SurfaceMode.BROADCAST_DISPLAY;

// Surface type label for the web display shell.
export const SURFACE_TYPE_WEB = 'WEB_CHESSGUIDE' as const;
