import { describe, it, expect } from 'vitest';
import {
  mapScenarioToPayloadLike,
  mapAllScenarios,
} from './payloadContractMapping';
import {
  SurfaceScenarioId,
  SURFACE_SCENARIOS,
} from './scenarios';
import { SURFACE_PAYLOAD_CONTRACT_VERSION } from './payloadContract';

const ALL_IDS: SurfaceScenarioId[] = SURFACE_SCENARIOS.map((s) => s.id);

// Forbidden semantic/advisory keys must never appear on a mapped payload.
const FORBIDDEN_KEYS = [
  'engineEval',
  'bestMove',
  'candidateMoves',
  'engineLine',
  'tssWarning',
  'cctHint',
  'buddyExplanation',
  'modelOutput',
  'learningFrontierHint',
  'masteryClaim',
  'learnerRationale',
  'rawCvFrame',
  'webcamCapture',
  'federationExportAction',
];

describe('payload contract mapping (frontend-only, fixture-only)', () => {
  it('maps every scenario to a payload-like object', () => {
    const results = mapAllScenarios();
    expect(results.length).toBe(SURFACE_SCENARIOS.length);
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      expect(payload.scenarioId).toBe(id);
    }
  });

  it('every mapped payload has the explicit, stable contract version', () => {
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      expect(payload.contractVersion).toBe(SURFACE_PAYLOAD_CONTRACT_VERSION);
      expect(payload.contractVersion).toBe('surface-payload-contract.v1.fixture');
    }
  });

  it('every mapped payload uses surfaceType WEB_DASHBOARD', () => {
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      expect(payload.surfaceType).toBe('WEB_DASHBOARD');
    }
  });

  it('every mapped payload carries a federation withholding ref', () => {
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      expect(typeof payload.federationWithholdingRef).toBe('string');
      expect(payload.federationWithholdingRef.length).toBeGreaterThan(0);
    }
  });

  it('marks every mapped payload as fixture-only', () => {
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      expect(payload.fixtureOnly).toBe(true);
    }
  });

  it('no mapped payload contains a federation export action', () => {
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      const keys = Object.keys(payload);
      expect(keys).not.toContain('federationExportAction');
      expect(keys).not.toContain('exportAction');
      expect(keys).not.toContain('export');
    }
  });

  it('no mapped payload contains any forbidden advisory/semantic field', () => {
    for (const id of ALL_IDS) {
      const payload = mapScenarioToPayloadLike(id);
      const keys = Object.keys(payload);
      for (const forbidden of FORBIDDEN_KEYS) {
        expect(keys).not.toContain(forbidden);
      }
    }
  });

  it('does not contain engine eval, best move, candidate moves, or engine line', () => {
    for (const id of ALL_IDS) {
      const keys = Object.keys(mapScenarioToPayloadLike(id));
      expect(keys).not.toContain('engineEval');
      expect(keys).not.toContain('bestMove');
      expect(keys).not.toContain('candidateMoves');
      expect(keys).not.toContain('engineLine');
    }
  });

  it('does not contain Buddy output, model output, or Learning Frontier output', () => {
    for (const id of ALL_IDS) {
      const keys = Object.keys(mapScenarioToPayloadLike(id));
      expect(keys).not.toContain('buddyExplanation');
      expect(keys).not.toContain('modelOutput');
      expect(keys).not.toContain('learningFrontierHint');
    }
  });

  it('does not contain mastery claim, learner rationale, or raw CV frame', () => {
    for (const id of ALL_IDS) {
      const keys = Object.keys(mapScenarioToPayloadLike(id));
      expect(keys).not.toContain('masteryClaim');
      expect(keys).not.toContain('learnerRationale');
      expect(keys).not.toContain('rawCvFrame');
    }
  });

  it('exposes the contract mapping disclaimer note', () => {
    const result = mapAllScenarios()[0];
    expect(result.notes.join(' ')).toContain('Not a production runtime payload');
    expect(result.notes.join(' ')).toContain('Not schema-validated');
  });
});
