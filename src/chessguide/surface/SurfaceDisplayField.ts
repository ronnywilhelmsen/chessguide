// ChessGuide Web Surface — skeleton only (PR #38).
// Display field classes that a governed display surface is allowed to show.
// These are placeholders only; no real game/payload data flows here.

export const SurfaceDisplayField = {
  BOARD: 'BOARD',
  GAME_STATUS: 'GAME_STATUS',
  MOVE_LIST: 'MOVE_LIST',
  CLOCK: 'CLOCK',
  TURN: 'TURN',
} as const;

export type SurfaceDisplayField =
  typeof SurfaceDisplayField[keyof typeof SurfaceDisplayField];

// Human-readable labels for the displayed-field list.
export const SURFACE_DISPLAY_FIELD_LABELS: Record<SurfaceDisplayField, string> = {
  BOARD: 'Board',
  GAME_STATUS: 'Game status',
  MOVE_LIST: 'Move list',
  CLOCK: 'Clock',
  TURN: 'Turn',
};
