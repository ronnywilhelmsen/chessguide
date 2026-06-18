'use client';

import { useState } from 'react';
import {
  SurfaceMode,
  ALL_SURFACE_MODES,
  DEFAULT_SURFACE_MODE,
  runtimeUnavailableNote,
} from '@/lib/surfaceModes';
import { DISPLAY_FIELD_LABELS } from '@/lib/displayFields';
import { buildSurfaceFixture } from '@/lib/surfaceFixture';
import { ModeBanner } from '@/components/ModeBanner';
import { NoAdviceBanner } from '@/components/NoAdviceBanner';
import { SurfaceCard } from '@/components/SurfaceCard';
import { SuppressedOutputPanel } from '@/components/SuppressedOutputPanel';
import { ReplayContinuityPanel } from '@/components/ReplayContinuityPanel';
import { FederationBoundaryPanel } from '@/components/FederationBoundaryPanel';

// ChessGuide Web Dashboard — skeleton only (PR #39).
//
// This is a safe, governed display/review dashboard, not a coach. It renders
// only placeholders from a static fixture. No engine, CV, TSS, CCT, Buddy,
// model output, Learning Frontier, payload runtime, Creator runtime, or
// federation export. Browser live CV is intentionally not active.
export default function DashboardPage() {
  const [mode, setMode] = useState<SurfaceMode>(DEFAULT_SURFACE_MODE);
  const fixture = buildSurfaceFixture(mode);
  const runtimeNote = runtimeUnavailableNote(mode);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          ♛ ChessGuide Surface Dashboard
        </h1>
        <p className="mt-1 text-sm font-medium text-amber-700">
          Static governed fixture only
        </p>
        <p className="mt-1 text-sm text-slate-600">
          Web is currently a governed dashboard/display surface. Browser live CV
          is not active.
        </p>
      </header>

      <div className="mb-4 flex flex-wrap gap-2" role="group" aria-label="Active mode">
        {ALL_SURFACE_MODES.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={
              m === mode
                ? 'rounded-md bg-sky-600 px-3 py-1.5 text-sm font-medium text-white'
                : 'rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100'
            }>
            {m}
          </button>
        ))}
      </div>

      <div className="mb-4 space-y-3">
        <ModeBanner mode={mode} />
        <NoAdviceBanner banner={fixture.noAdviceBanner} />
        {runtimeNote && (
          <div className="rounded-md bg-amber-50 px-4 py-2 text-amber-900 ring-1 ring-inset ring-amber-200">
            {runtimeNote}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <SurfaceCard title="Board state">
          <div className="flex h-28 items-center justify-center rounded border border-dashed border-slate-300 text-slate-500">
            {fixture.boardLabel}
          </div>
        </SurfaceCard>

        <SurfaceCard title="Game status">
          <p>{fixture.gameStatus}</p>
          <p className="mt-1 text-slate-500">{fixture.turn}</p>
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

        <ReplayContinuityPanel replayRef={fixture.creatorReplayRef} />

        <FederationBoundaryPanel withholdingRef={fixture.federationWithholdingRef} />
      </div>

      <footer className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500">
        <p>Static fixture only — not the accepted production schema.</p>
        <p>
          Fixture: {fixture.fixtureLabel} · payloadId: {fixture.payloadId} ·
          contractVersion: {fixture.contractVersion} · surface:{' '}
          {fixture.surfaceType}
        </p>
        <p className="mt-1">
          Engine, CV, TSS, CCT, Buddy, model output, Learning Frontier, payload
          runtime, Creator runtime, and federation export are not active in this
          skeleton.
        </p>
      </footer>
    </main>
  );
}
