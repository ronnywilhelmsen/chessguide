'use client';

import { useState } from 'react';
import { DEFAULT_SCENARIO_ID, SurfaceScenarioId } from '@/lib/scenarios';
import { DISPLAY_FIELD_LABELS } from '@/lib/displayFields';
import { buildScenarioFixture } from '@/lib/surfaceFixture';
import { ScenarioSelector } from '@/components/ScenarioSelector';
import { ModeBanner } from '@/components/ModeBanner';
import { NoAdviceBanner } from '@/components/NoAdviceBanner';
import { SurfaceCard } from '@/components/SurfaceCard';
import { SuppressedOutputPanel } from '@/components/SuppressedOutputPanel';
import { AmbiguityPanel } from '@/components/AmbiguityPanel';
import { ReplayContinuityPanel } from '@/components/ReplayContinuityPanel';
import { FederationBoundaryPanel } from '@/components/FederationBoundaryPanel';

// ChessGuide Web Dashboard — scenario explorer (PR #41).
//
// This is a safe, governed display/review dashboard, not a coach. It renders
// only placeholders from static fixture scenarios. No engine, CV, TSS, CCT,
// Buddy, model output, Learning Frontier, payload runtime, Creator runtime, or
// federation export. Browser live CV is intentionally not active.
export default function DashboardPage() {
  const [scenarioId, setScenarioId] = useState<SurfaceScenarioId>(DEFAULT_SCENARIO_ID);
  const fixture = buildScenarioFixture(scenarioId);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          ChessGuide Surface Dashboard
        </h1>
        <p className="mt-1 text-sm font-medium text-amber-700">
          Governed fixture scenario explorer
        </p>
      </header>

      <div className="mb-4 max-w-sm">
        <ScenarioSelector value={scenarioId} onChange={setScenarioId} />
      </div>

      <div className="mb-4 space-y-3">
        <ModeBanner mode={fixture.mode} />
        <NoAdviceBanner banner={fixture.noAdviceBanner} />
        {fixture.runtimeUnavailableNote && (
          <div className="rounded-md bg-amber-50 px-4 py-2 text-amber-900 ring-1 ring-inset ring-amber-200">
            {fixture.runtimeUnavailableNote}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SurfaceCard title="Board / game state">
          <div className="flex h-28 items-center justify-center rounded border border-dashed border-slate-300 text-slate-500">
            {fixture.boardLabel}
          </div>
          <p className="mt-2">{fixture.gameStatus}</p>
          <p className="mt-1 text-slate-500">{fixture.turn}</p>
        </SurfaceCard>

        <SurfaceCard title="Scenario summary">
          <p>{fixture.scenarioSummary}</p>
        </SurfaceCard>

        <SurfaceCard title="Move list">
          <ul className="list-inside list-disc">
            {fixture.moves.map((mv, i) => (
              <li key={i}>{mv}</li>
            ))}
          </ul>
        </SurfaceCard>

        <SurfaceCard title="Clock">
          <p>White: {fixture.clock.white}</p>
          <p>Black: {fixture.clock.black}</p>
        </SurfaceCard>

        <SurfaceCard title="Displayed fields">
          <p>
            {fixture.displayedFields
              .map((f) => DISPLAY_FIELD_LABELS[f])
              .join(' · ')}
          </p>
        </SurfaceCard>

        <SuppressedOutputPanel suppressed={fixture.suppressedOutputs} />

        {fixture.ambiguity && <AmbiguityPanel ambiguity={fixture.ambiguity} />}

        <ReplayContinuityPanel replay={fixture.replay} />

        <FederationBoundaryPanel federation={fixture.federationWithholding} />
      </div>

      <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
        <p>
          Static frontend fixtures only. No backend, no engine, no CV, no Buddy,
          no LARIS.
        </p>
        <p className="mt-1">
          Fixture: {fixture.fixtureLabel} · payloadId: {fixture.payloadId} ·
          contractVersion: {fixture.contractVersion} · surface:{' '}
          {fixture.surfaceType}
        </p>
      </footer>
    </main>
  );
}
