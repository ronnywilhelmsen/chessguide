// ChessGuide Web Dashboard — payload contract mapping (PR #42).
//
// FRONTEND-ONLY, FIXTURE-ONLY type mirror of Surface Payload Contract concepts
// (SPC-HLD-ADR-001 / SPC-SCHEMA-DRAFT-001 in docs/). These types only
// *resemble* the governed contract vocabulary so the dashboard fixtures stop
// being arbitrary local data. They are NOT the production runtime schema,
// perform NO schema validation, and carry NO production guarantees.
//
// Canonical contract surface_type values (e.g. WEB_CHESSGUIDE) live in the
// docs schema. This dashboard intentionally keeps its own WEB_DASHBOARD
// surface type for the explorer fixtures.

import { SurfaceMode, SURFACE_TYPE_WEB_DASHBOARD } from './surfaceModes';
import { DisplayField } from './displayFields';
import { SuppressedOutputClass } from './suppressedOutputs';
import { SurfaceScenarioId } from './scenarios';

// Explicit, stable, non-production contract version tag for the fixtures.
export const SURFACE_PAYLOAD_CONTRACT_VERSION =
  'surface-payload-contract.v1.fixture' as const;
export type SurfacePayloadContractVersion =
  typeof SURFACE_PAYLOAD_CONTRACT_VERSION;

export type SurfaceType = typeof SURFACE_TYPE_WEB_DASHBOARD;
export type SurfacePayloadMode = SurfaceMode;
export type SurfacePayloadDisplayedField = DisplayField;
export type SurfacePayloadSuppressedOutputClass = SuppressedOutputClass;

export interface SurfacePayloadNoAdviceBanner {
  visible: boolean;
  title: string;
  message: string;
}

export type SurfacePayloadReplayRef = string;
export type SurfacePayloadFederationWithholdingRef = string;

// A payload-LIKE object. It mirrors the contract's display payload shape but is
// a static fixture, never a production payload. It carries no forbidden
// semantic/advisory fields and no export action.
export interface SurfacePayloadLike {
  payloadId: string;
  contractVersion: SurfacePayloadContractVersion;
  scenarioId: SurfaceScenarioId;
  mode: SurfacePayloadMode;
  surfaceType: SurfaceType;
  gameStatus: string;
  boardLabel: string;
  turn: string;
  clock: { white: string; black: string };
  moves: string[];
  displayedFields: SurfacePayloadDisplayedField[];
  suppressedOutputs: SurfacePayloadSuppressedOutputClass[];
  noAdviceBanner: SurfacePayloadNoAdviceBanner;
  creatorReplayRef: SurfacePayloadReplayRef;
  federationWithholdingRef: SurfacePayloadFederationWithholdingRef;
  fixtureOnly: true;
  fixtureLabel: string;
}

export interface SurfacePayloadContractMappingResult {
  scenarioId: SurfaceScenarioId;
  contractVersion: SurfacePayloadContractVersion;
  surfaceType: SurfaceType;
  payload: SurfacePayloadLike;
  notes: string[];
}
