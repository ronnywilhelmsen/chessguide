// ChessGuide Web Dashboard — skeleton only (PR #39).
// Display field classes a governed display surface is allowed to show.
// Placeholders only; no real game/payload data flows here.

export const DisplayField = {
  BOARD: 'BOARD',
  GAME_STATUS: 'GAME_STATUS',
  MOVE_LIST: 'MOVE_LIST',
  CLOCK: 'CLOCK',
  TURN: 'TURN',
} as const;

export type DisplayField = (typeof DisplayField)[keyof typeof DisplayField];

export const DISPLAY_FIELD_LABELS: Record<DisplayField, string> = {
  BOARD: 'Board',
  GAME_STATUS: 'Game status',
  MOVE_LIST: 'Move list',
  CLOCK: 'Clock',
  TURN: 'Turn',
};

export const ALL_DISPLAY_FIELDS: DisplayField[] = [
  DisplayField.BOARD,
  DisplayField.GAME_STATUS,
  DisplayField.MOVE_LIST,
  DisplayField.CLOCK,
  DisplayField.TURN,
];
