// ChessGuide Web Dashboard — scenario explorer (PR #41).
//
// STATIC FRONTEND FIXTURE SCENARIOS ONLY.
// These scenarios only *resemble* governed surface payloads. They are NOT the
// accepted production schema, there is no payload runtime, no backend, no
// engine, no CV, no Buddy, and no LARIS.

import { SurfaceMode } from './surfaceModes';

export const SurfaceScenarioId = {
  COMPETITION_LIVE_BASIC: 'competition-live-basic',
  BROADCAST_DISPLAY_BASIC: 'broadcast-display-basic',
  LEARNING_PLACEHOLDER: 'learning-placeholder',
  REVIEW_PLACEHOLDER: 'review-placeholder',
  AMBIGUITY_DETECTED_PLACEHOLDER: 'ambiguity-detected-placeholder',
  FEDERATION_WITHHELD_PLACEHOLDER: 'federation-withheld-placeholder',
} as const;

export type SurfaceScenarioId =
  (typeof SurfaceScenarioId)[keyof typeof SurfaceScenarioId];

export interface SurfaceScenario {
  id: SurfaceScenarioId;
  label: string;
  mode: SurfaceMode;
  summary: string;
}

export const SURFACE_SCENARIOS: SurfaceScenario[] = [
  {
    id: SurfaceScenarioId.COMPETITION_LIVE_BASIC,
    label: 'Competition — live (basic)',
    mode: SurfaceMode.COMPETITION,
    summary:
      'Live competition display. No-advice banner is shown; all advisory and analytical output is suppressed.',
  },
  {
    id: SurfaceScenarioId.BROADCAST_DISPLAY_BASIC,
    label: 'Broadcast / display (basic)',
    mode: SurfaceMode.BROADCAST_DISPLAY,
    summary:
      'Spectator-safe broadcast display. No-advice banner is shown; same advisory suppression as competition.',
  },
  {
    id: SurfaceScenarioId.LEARNING_PLACEHOLDER,
    label: 'Learning (placeholder)',
    mode: SurfaceMode.LEARNING,
    summary:
      'Learning runtime is not active yet. No advice, no candidate moves, no best move.',
  },
  {
    id: SurfaceScenarioId.REVIEW_PLACEHOLDER,
    label: 'Review (placeholder)',
    mode: SurfaceMode.REVIEW,
    summary:
      'Review runtime is not active yet. No analysis, no engine line.',
  },
  {
    id: SurfaceScenarioId.AMBIGUITY_DETECTED_PLACEHOLDER,
    label: 'Ambiguity detected (placeholder)',
    mode: SurfaceMode.LEARNING,
    summary:
      'An ambiguity category is surfaced for later human resolution. No advice is given and no truth is certified.',
  },
  {
    id: SurfaceScenarioId.FEDERATION_WITHHELD_PLACEHOLDER,
    label: 'Federation withheld (placeholder)',
    mode: SurfaceMode.REVIEW,
    summary:
      'Shows the federation withholding reference and withheld categories only. No export action is available.',
  },
];

export const DEFAULT_SCENARIO_ID: SurfaceScenarioId =
  SurfaceScenarioId.COMPETITION_LIVE_BASIC;

export const getScenario = (id: SurfaceScenarioId): SurfaceScenario => {
  const found = SURFACE_SCENARIOS.find((s) => s.id === id);
  if (!found) {
    throw new Error(`Unknown scenario id: ${id}`);
  }
  return found;
};
