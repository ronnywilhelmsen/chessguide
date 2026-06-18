// ChessGuide Web Dashboard — scenario explorer fixtures (PR #41).
//
// STATIC GOVERNED FIXTURE ONLY.
// These objects only *resemble* a governed display payload. They are NOT the
// accepted production schema and carry no production guarantees. There is no
// payload runtime, no network call, and no schema validation here.

import { SurfaceMode, SURFACE_TYPE_WEB_DASHBOARD } from './surfaceModes';
import { DisplayField, ALL_DISPLAY_FIELDS } from './displayFields';
import {
  SuppressedOutputClass,
  ALL_SUPPRESSED_OUTPUT_CLASSES,
} from './suppressedOutputs';
import {
  SurfaceScenarioId,
  getScenario,
} from './scenarios';

export interface NoAdviceBanner {
  visible: boolean;
  title: string;
  message: string;
}

export interface ReplayPlaceholder {
  ref: string;
  note: string;
}

export interface FederationWithholdingPlaceholder {
  ref: string;
  withheldClasses: SuppressedOutputClass[];
  note: string;
}

export interface AmbiguityPlaceholder {
  category: string;
  humanResolutionNote: string;
}

export interface SurfaceFixture {
  scenarioId: SurfaceScenarioId;
  scenarioSummary: string;
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
  runtimeUnavailableNote: string | null;
  ambiguity: AmbiguityPlaceholder | null;
  replay: ReplayPlaceholder;
  federationWithholding: FederationWithholdingPlaceholder;
  fixtureOnly: true;
  fixtureLabel: string;
}

const FIXTURE_VERSION = 'web-dashboard-fixture-v0.2 (static, non-production)';

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
        message: 'Spectator-safe display surface. No advice or analysis is shown.',
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

const runtimeNoteFor = (mode: SurfaceMode): string | null => {
  if (mode === SurfaceMode.LEARNING) return 'Learning runtime not active yet';
  if (mode === SurfaceMode.REVIEW) return 'Review runtime not active yet';
  return null;
};

const defaultReplay: ReplayPlaceholder = {
  ref: 'placeholder-creator-replay-ref',
  note: 'Creator replay runtime is not active in this skeleton.',
};

const defaultFederation: FederationWithholdingPlaceholder = {
  ref: 'placeholder-federation-withholding-ref',
  withheldClasses: [],
  note: 'No federation export action is available on this surface.',
};

// Build a static, scenario-specific fixture. No runtime, no I/O.
export const buildScenarioFixture = (
  scenarioId: SurfaceScenarioId
): SurfaceFixture => {
  const scenario = getScenario(scenarioId);
  const mode = scenario.mode;

  let ambiguity: AmbiguityPlaceholder | null = null;
  let federationWithholding: FederationWithholdingPlaceholder = defaultFederation;

  if (scenarioId === SurfaceScenarioId.AMBIGUITY_DETECTED_PLACEHOLDER) {
    ambiguity = {
      category: 'PIECE_IDENTITY_AMBIGUITY',
      humanResolutionNote: 'Human resolution required later',
    };
  }

  if (scenarioId === SurfaceScenarioId.FEDERATION_WITHHELD_PLACEHOLDER) {
    federationWithholding = {
      ref: 'placeholder-federation-withholding-ref-002',
      withheldClasses: [
        SuppressedOutputClass.LEARNER_RATIONALE,
        SuppressedOutputClass.MASTERY_CLAIM,
        SuppressedOutputClass.MODEL_OUTPUT,
      ],
      note: 'These categories are withheld from federation export. No export action is available.',
    };
  }

  return {
    scenarioId,
    scenarioSummary: scenario.summary,
    payloadId: `fixture-${scenarioId}-0001`,
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
    runtimeUnavailableNote: runtimeNoteFor(mode),
    ambiguity,
    replay: defaultReplay,
    federationWithholding,
    fixtureOnly: true,
    fixtureLabel: FIXTURE_VERSION,
  };
};
