// ChessGuide Web Surface — skeleton only (PR #38).
//
// STATIC FRONTEND FIXTURE ONLY.
// This object only *resembles* a governed display payload. It is NOT the
// accepted production schema and carries no production guarantees. There is no
// payload runtime, no network call, and no schema validation here.

import {
  SurfaceMode,
  SURFACE_TYPE_WEB,
  noAdviceRequired,
} from './SurfaceMode';
import { SurfaceDisplayField } from './SurfaceDisplayField';
import {
  SuppressedOutputClass,
  ALL_SUPPRESSED_OUTPUT_CLASSES,
} from './SuppressedOutputClass';

export interface NoAdviceBannerFixture {
  visible: boolean;
  title: string;
  message: string;
}

export interface SurfaceFixture {
  payloadId: string;
  contractVersion: string;
  mode: SurfaceMode;
  surfaceType: typeof SURFACE_TYPE_WEB;
  gameStatus: string;
  boardLabel: string;
  turn: string;
  clock: { white: string; black: string };
  moves: string[];
  displayedFields: SurfaceDisplayField[];
  suppressedOutputs: SuppressedOutputClass[];
  noAdviceBanner: NoAdviceBannerFixture;
  creatorReplayRef: string;
  federationWithholdingRef: string;
  // Marks this object as a non-production, frontend-only fixture.
  fixtureOnly: true;
  fixtureLabel: string;
}

const FIXTURE_VERSION = 'web-surface-fixture-v0.1 (static, non-production)';

// Display-only board/clock/move placeholders shared by every mode.
const PLACEHOLDER_DISPLAY = {
  gameStatus: 'In progress (placeholder)',
  boardLabel: 'Board placeholder — no live position',
  turn: 'White to move (placeholder)',
  clock: { white: '00:10:00', black: '00:10:00' },
  moves: ['1. — (placeholder)', '1... — (placeholder)'],
  displayedFields: [
    SurfaceDisplayField.BOARD,
    SurfaceDisplayField.GAME_STATUS,
    SurfaceDisplayField.MOVE_LIST,
    SurfaceDisplayField.CLOCK,
    SurfaceDisplayField.TURN,
  ] as SurfaceDisplayField[],
};

const bannerFor = (mode: SurfaceMode): NoAdviceBannerFixture => {
  switch (mode) {
    case SurfaceMode.COMPETITION:
      return {
        visible: true,
        title: 'No advice — Competition Mode',
        message:
          'No engine evaluation, best move, or hints are shown during competition play.',
      };
    case SurfaceMode.BROADCAST_DISPLAY:
      return {
        visible: true,
        title: 'No advice — Broadcast / Display',
        message: 'Display surface only. No advice or analysis is shown.',
      };
    case SurfaceMode.LEARNING:
      return {
        visible: false,
        title: 'Learning Mode',
        message: 'Learning runtime is not active in this skeleton.',
      };
    case SurfaceMode.REVIEW:
      return {
        visible: false,
        title: 'Review Mode',
        message: 'Review runtime is not active in this skeleton.',
      };
  }
};

// Build a static, mode-specific fixture. No runtime, no I/O.
export const buildSurfaceFixture = (mode: SurfaceMode): SurfaceFixture => ({
  payloadId: `fixture-${mode.toLowerCase()}-0001`,
  contractVersion: '0.0.0-fixture',
  mode,
  surfaceType: SURFACE_TYPE_WEB,
  gameStatus: PLACEHOLDER_DISPLAY.gameStatus,
  boardLabel: PLACEHOLDER_DISPLAY.boardLabel,
  turn: PLACEHOLDER_DISPLAY.turn,
  clock: PLACEHOLDER_DISPLAY.clock,
  moves: PLACEHOLDER_DISPLAY.moves,
  displayedFields: PLACEHOLDER_DISPLAY.displayedFields,
  // All advisory/analytical output classes are always suppressed here.
  suppressedOutputs: ALL_SUPPRESSED_OUTPUT_CLASSES,
  noAdviceBanner: bannerFor(mode),
  creatorReplayRef: 'placeholder-creator-replay-ref',
  federationWithholdingRef: 'placeholder-federation-withholding-ref',
  fixtureOnly: true,
  fixtureLabel: FIXTURE_VERSION,
});

// Convenience: the runtime-availability message shown for LEARNING/REVIEW.
export const runtimeUnavailableMessage = (mode: SurfaceMode): string | undefined => {
  if (noAdviceRequired(mode)) return undefined;
  return mode === SurfaceMode.LEARNING
    ? 'Learning runtime is not active in this skeleton.'
    : 'Review runtime is not active in this skeleton.';
};
