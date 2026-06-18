// ChessGuide Web Dashboard — payload contract mapping (PR #42).
//
// Maps the existing scenario fixtures to payload-LIKE objects aligned with the
// Surface Payload Contract vocabulary. FIXTURE-ONLY: no backend, no production
// payload runtime, no schema validation runtime.

import { buildScenarioFixture } from './surfaceFixture';
import {
  SurfaceScenarioId,
  SURFACE_SCENARIOS,
} from './scenarios';
import {
  SurfacePayloadLike,
  SurfacePayloadContractMappingResult,
  SURFACE_PAYLOAD_CONTRACT_VERSION,
} from './payloadContract';

const MAPPING_NOTE =
  'Mapped to a payload-like fixture contract. Not a production runtime payload. Not schema-validated.';

// Map a single scenario fixture to a payload-like object.
export const mapScenarioToPayloadLike = (
  scenarioId: SurfaceScenarioId
): SurfacePayloadLike => {
  const fx = buildScenarioFixture(scenarioId);

  return {
    payloadId: fx.payloadId,
    // Override the fixture's loose version with the explicit, stable contract tag.
    contractVersion: SURFACE_PAYLOAD_CONTRACT_VERSION,
    scenarioId: fx.scenarioId,
    mode: fx.mode,
    surfaceType: fx.surfaceType,
    gameStatus: fx.gameStatus,
    boardLabel: fx.boardLabel,
    turn: fx.turn,
    clock: fx.clock,
    moves: fx.moves,
    displayedFields: fx.displayedFields,
    suppressedOutputs: fx.suppressedOutputs,
    noAdviceBanner: {
      visible: fx.noAdviceBanner.visible,
      title: fx.noAdviceBanner.title,
      message: fx.noAdviceBanner.message,
    },
    // Federation withholding metadata is present in every mapped payload-like
    // object: a Creator replay ref and a federation withholding ref.
    creatorReplayRef: fx.replay.ref,
    federationWithholdingRef: fx.federationWithholding.ref,
    fixtureOnly: true,
    fixtureLabel: fx.fixtureLabel,
  };
};

// Map a single scenario into a full mapping result with contract metadata.
export const mapScenario = (
  scenarioId: SurfaceScenarioId
): SurfacePayloadContractMappingResult => {
  const payload = mapScenarioToPayloadLike(scenarioId);
  return {
    scenarioId,
    contractVersion: payload.contractVersion,
    surfaceType: payload.surfaceType,
    payload,
    notes: [MAPPING_NOTE],
  };
};

// Map every known scenario to a payload-like object.
export const mapAllScenarios = (): SurfacePayloadContractMappingResult[] =>
  SURFACE_SCENARIOS.map((s) => mapScenario(s.id));
