// ChessGuide Web Dashboard — skeleton only (PR #39).
//
// STATIC GOVERNED FIXTURE ONLY.
// This object only *resembles* a governed display payload. It is NOT the
// accepted production schema and carries no production guarantees. There is no
// payload runtime, no network call, and no schema validation here.

import {
  SurfaceMode,
  SURFACE_TYPE_WEB_DASHBOARD,
} from './surfaceModes';
import { DisplayField, ALL_DISPLAY_FIELDS } from './displayFields';
import {
  SuppressedOutputClass,
  ALL_SUPPRESSED_OUTPUT_CLASSES,
} from './suppressedOutputs';

export interface NoAdviceBanner {
  visible: boolean;
  title: string;
  message: string;
}

export interface SurfaceFixture {
  payloadId: string;
  contractVersion: string;
  mode: SurfaceMode;
  surfaceType: typeof SURFACE_TYPE_WEB_DASHBOARD;
  gameStatus: string;
  boardLabel: string;
  turn: string;
  clock: { white: string; black: string };
  moves: string[];
  displayedFields: DisplayField[];
  suppressedOutputs: SuppressedOutputClass[];
  noAdviceBanner: NoAdviceBanner;
  creatorReplayRef: string;
  federationWithholdingRef: string;
  fixtureOnly: true;
  fixtureLabel: string;
}

const FIXTURE_VERSION = 'web-dashboard-fixture-v0.1 (static, non-production)';

const bannerFor = (mode: SurfaceMode): NoAdviceBanner => {
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
        message: 'Learning runtime not active yet',
      };
    case SurfaceMode.REVIEW:
      return {
        visible: false,
        title: 'Review Mode',
        message: 'Review runtime not active yet',
      };
  }
};

// Build a static, mode-specific fixture. No runtime, no I/O.
export const buildSurfaceFixture = (mode: SurfaceMode): SurfaceFixture => ({
  payloadId: `fixture-${mode.toLowerCase()}-0001`,
  contractVersion: '0.0.0-fixture',
  mode,
  surfaceType: SURFACE_TYPE_WEB_DASHBOARD,
  gameStatus: 'In progress (placeholder)',
  boardLabel: 'Board placeholder — no live position',
  turn: 'White to move (placeholder)',
  clock: { white: '00:10:00', black: '00:10:00' },
  moves: ['1. — (placeholder)', '1... — (placeholder)'],
  displayedFields: ALL_DISPLAY_FIELDS,
  suppressedOutputs: ALL_SUPPRESSED_OUTPUT_CLASSES,
  noAdviceBanner: bannerFor(mode),
  creatorReplayRef: 'placeholder-creator-replay-ref',
  federationWithholdingRef: 'placeholder-federation-withholding-ref',
  fixtureOnly: true,
  fixtureLabel: FIXTURE_VERSION,
});
