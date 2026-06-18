import { describe, it, expect } from 'vitest';
import { SurfaceMode } from './surfaceModes';
import {
  SurfaceScenarioId,
  SURFACE_SCENARIOS,
  DEFAULT_SCENARIO_ID,
} from './scenarios';
import { buildScenarioFixture } from './surfaceFixture';
import {
  SUPPRESSED_OUTPUT_CLASS_LABELS,
  ALL_SUPPRESSED_OUTPUT_CLASSES,
  SuppressedOutputClass,
} from './suppressedOutputs';

const REQUIRED_SCENARIO_IDS: SurfaceScenarioId[] = [
  SurfaceScenarioId.COMPETITION_LIVE_BASIC,
  SurfaceScenarioId.BROADCAST_DISPLAY_BASIC,
  SurfaceScenarioId.LEARNING_PLACEHOLDER,
  SurfaceScenarioId.REVIEW_PLACEHOLDER,
  SurfaceScenarioId.AMBIGUITY_DETECTED_PLACEHOLDER,
  SurfaceScenarioId.FEDERATION_WITHHELD_PLACEHOLDER,
];

describe('surface scenarios (governed, static fixture only)', () => {
  it('all required scenarios exist', () => {
    const ids = SURFACE_SCENARIOS.map((s) => s.id);
    for (const id of REQUIRED_SCENARIO_IDS) {
      expect(ids).toContain(id);
    }
    expect(SURFACE_SCENARIOS.length).toBeGreaterThanOrEqual(6);
  });

  it('default scenario is competition-live-basic', () => {
    expect(DEFAULT_SCENARIO_ID).toBe(SurfaceScenarioId.COMPETITION_LIVE_BASIC);
  });

  it('competition scenario shows the no-advice banner', () => {
    const fx = buildScenarioFixture(SurfaceScenarioId.COMPETITION_LIVE_BASIC);
    expect(fx.mode).toBe(SurfaceMode.COMPETITION);
    expect(fx.noAdviceBanner.visible).toBe(true);
  });

  it('broadcast scenario shows the no-advice banner', () => {
    const fx = buildScenarioFixture(SurfaceScenarioId.BROADCAST_DISPLAY_BASIC);
    expect(fx.mode).toBe(SurfaceMode.BROADCAST_DISPLAY);
    expect(fx.noAdviceBanner.visible).toBe(true);
  });

  it('learning scenario is placeholder-only with no advice', () => {
    const fx = buildScenarioFixture(SurfaceScenarioId.LEARNING_PLACEHOLDER);
    expect(fx.mode).toBe(SurfaceMode.LEARNING);
    expect(fx.noAdviceBanner.visible).toBe(false);
    expect(fx.runtimeUnavailableNote).toBe('Learning runtime not active yet');
    expect(fx.ambiguity).toBeNull();
  });

  it('review scenario is placeholder-only with no analysis', () => {
    const fx = buildScenarioFixture(SurfaceScenarioId.REVIEW_PLACEHOLDER);
    expect(fx.mode).toBe(SurfaceMode.REVIEW);
    expect(fx.noAdviceBanner.visible).toBe(false);
    expect(fx.runtimeUnavailableNote).toBe('Review runtime not active yet');
  });

  it('ambiguity scenario surfaces a category and defers to human resolution', () => {
    const fx = buildScenarioFixture(
      SurfaceScenarioId.AMBIGUITY_DETECTED_PLACEHOLDER
    );
    expect(fx.ambiguity).not.toBeNull();
    expect(fx.ambiguity?.category).toBeTruthy();
    expect(fx.ambiguity?.humanResolutionNote).toBe('Human resolution required later');
    // No advice banner content claiming truth; mode stays non-advisory.
    expect([SurfaceMode.LEARNING, SurfaceMode.REVIEW]).toContain(fx.mode);
  });

  it('federation-withheld scenario shows a withholding ref and withheld categories only', () => {
    const fx = buildScenarioFixture(
      SurfaceScenarioId.FEDERATION_WITHHELD_PLACEHOLDER
    );
    expect(fx.federationWithholding.ref).toBeTruthy();
    expect(fx.federationWithholding.withheldClasses.length).toBeGreaterThan(0);
    // Withheld entries are known suppressed categories (labels, not content).
    for (const cls of fx.federationWithholding.withheldClasses) {
      expect(typeof SUPPRESSED_OUTPUT_CLASS_LABELS[cls]).toBe('string');
    }
  });

  it('suppressed outputs are category labels only', () => {
    const fx = buildScenarioFixture(SurfaceScenarioId.COMPETITION_LIVE_BASIC);
    expect(fx.suppressedOutputs).toEqual(ALL_SUPPRESSED_OUTPUT_CLASSES);
    for (const cls of fx.suppressedOutputs) {
      expect(typeof SUPPRESSED_OUTPUT_CLASS_LABELS[cls]).toBe('string');
    }
  });

  it('marks itself as a non-production static fixture in every scenario', () => {
    for (const id of REQUIRED_SCENARIO_IDS) {
      const fx = buildScenarioFixture(id);
      expect(fx.fixtureOnly).toBe(true);
      expect(fx.surfaceType).toBe('WEB_DASHBOARD');
      expect(fx.contractVersion).toContain('fixture');
    }
  });

  it('no scenario carries advisory fields (best move / candidate moves / engine line) as data', () => {
    for (const id of REQUIRED_SCENARIO_IDS) {
      const fx = buildScenarioFixture(id);
      const keys = Object.keys(fx);
      expect(keys).not.toContain('bestMove');
      expect(keys).not.toContain('candidateMoves');
      expect(keys).not.toContain('engineLine');
      expect(keys).not.toContain('engineEval');
      // The forbidden classes only ever appear as suppressed category enums.
      expect(fx.suppressedOutputs).toContain(SuppressedOutputClass.BEST_MOVE);
    }
  });
});
