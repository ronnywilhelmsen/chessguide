import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — skeleton only (PR #39).
// Creator replay continuity placeholder. Shows a placeholder ref only; no
// Creator runtime, no replay engine, no real custody data.
export function ReplayContinuityPanel({ replayRef }: { replayRef: string }) {
  return (
    <SurfaceCard title="Creator replay continuity">
      <p className="mb-1">Replay ref (placeholder):</p>
      <code className="break-all rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">
        {replayRef}
      </code>
      <p className="mt-2 text-xs text-slate-500">
        Creator replay runtime is not active in this skeleton.
      </p>
    </SurfaceCard>
  );
}
