import { describe, it, expect } from 'vitest';
import {
  SurfaceMode,
  DEFAULT_SURFACE_MODE,
  runtimeUnavailableNote,
} from './surfaceModes';
import { buildSurfaceFixture } from './surfaceFixture';
import {
  SUPPRESSED_OUTPUT_CLASS_LABELS,
  ALL_SUPPRESSED_OUTPUT_CLASSES,
} from './suppressedOutputs';

describe('surface fixture (governed display, static only)', () => {
  it('default mode is COMPETITION', () => {
    expect(DEFAULT_SURFACE_MODE).toBe(SurfaceMode.COMPETITION);
  });

  it('COMPETITION fixture requires the no-advice banner', () => {
    const fixture = buildSurfaceFixture(SurfaceMode.COMPETITION);
    expect(fixture.noAdviceBanner.visible).toBe(true);
  });

  it('BROADCAST_DISPLAY fixture requires the no-advice banner', () => {
    const fixture = buildSurfaceFixture(SurfaceMode.BROADCAST_DISPLAY);
    expect(fixture.noAdviceBanner.visible).toBe(true);
  });

  it('LEARNING fixture shows a placeholder-only note and no advice banner', () => {
    const fixture = buildSurfaceFixture(SurfaceMode.LEARNING);
    expect(fixture.noAdviceBanner.visible).toBe(false);
    expect(runtimeUnavailableNote(SurfaceMode.LEARNING)).toBe(
      'Learning runtime not active yet'
    );
  });

  it('REVIEW fixture shows a placeholder-only note and no advice banner', () => {
    const fixture = buildSurfaceFixture(SurfaceMode.REVIEW);
    expect(fixture.noAdviceBanner.visible).toBe(false);
    expect(runtimeUnavailableNote(SurfaceMode.REVIEW)).toBe(
      'Review runtime not active yet'
    );
  });

  it('marks itself as a non-production static fixture', () => {
    const fixture = buildSurfaceFixture(SurfaceMode.COMPETITION);
    expect(fixture.fixtureOnly).toBe(true);
    expect(fixture.surfaceType).toBe('WEB_DASHBOARD');
    expect(fixture.contractVersion).toContain('fixture');
  });

  it('suppresses all advisory/analytical output classes (categories only)', () => {
    const fixture = buildSurfaceFixture(SurfaceMode.COMPETITION);
    expect(fixture.suppressedOutputs).toEqual(ALL_SUPPRESSED_OUTPUT_CLASSES);
    // Labels are plain category names, never carrying actual content.
    for (const cls of fixture.suppressedOutputs) {
      expect(typeof SUPPRESSED_OUTPUT_CLASS_LABELS[cls]).toBe('string');
    }
  });
});
