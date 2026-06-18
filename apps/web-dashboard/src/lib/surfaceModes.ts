// ChessGuide Web Dashboard — skeleton only (PR #39).
// Mode-gated display constants for the governed dashboard/display/review
// surface. No payload runtime, engine, CV, TSS, Buddy, or LARIS here.

export const SurfaceMode = {
  COMPETITION: 'COMPETITION',
  LEARNING: 'LEARNING',
  REVIEW: 'REVIEW',
  BROADCAST_DISPLAY: 'BROADCAST_DISPLAY',
} as const;

export type SurfaceMode = (typeof SurfaceMode)[keyof typeof SurfaceMode];

export const DEFAULT_SURFACE_MODE: SurfaceMode = SurfaceMode.COMPETITION;

export const ALL_SURFACE_MODES: SurfaceMode[] = [
  SurfaceMode.COMPETITION,
  SurfaceMode.LEARNING,
  SurfaceMode.REVIEW,
  SurfaceMode.BROADCAST_DISPLAY,
];

// Display-only rule: which modes must show a no-advice banner.
export const noAdviceRequired = (mode: SurfaceMode): boolean =>
  mode === SurfaceMode.COMPETITION || mode === SurfaceMode.BROADCAST_DISPLAY;

// Surface type for this web dashboard.
export const SURFACE_TYPE_WEB_DASHBOARD = 'WEB_DASHBOARD' as const;

// Runtime-unavailable note for LEARNING / REVIEW (no advice/analysis shown).
export const runtimeUnavailableNote = (mode: SurfaceMode): string | undefined => {
  if (mode === SurfaceMode.LEARNING) return 'Learning runtime not active yet';
  if (mode === SurfaceMode.REVIEW) return 'Review runtime not active yet';
  return undefined;
};
