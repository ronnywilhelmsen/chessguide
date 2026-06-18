import type { ReplayPlaceholder } from '@/lib/surfaceFixture';
import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — scenario explorer (PR #41).
// Creator replay continuity placeholder. Shows a placeholder ref only; no
// Creator runtime, no replay engine, no real custody data.
export function ReplayContinuityPanel({ replay }: { replay: ReplayPlaceholder }) {
  return (
    <SurfaceCard title="Creator replay continuity">
      <p className="mb-1">Replay ref (placeholder):</p>
      <code className="break-all rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">
        {replay.ref}
      </code>
      <p className="mt-2 text-xs text-slate-500">{replay.note}</p>
    </SurfaceCard>
  );
}
