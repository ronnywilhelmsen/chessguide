import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — skeleton only (PR #39).
// Federation withholding placeholder. Shows a placeholder ref only; there is
// no federation export action and no export runtime on this surface.
export function FederationBoundaryPanel({ withholdingRef }: { withholdingRef: string }) {
  return (
    <SurfaceCard title="Federation withholding">
      <p className="mb-1">Withholding ref (placeholder):</p>
      <code className="break-all rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">
        {withholdingRef}
      </code>
      <p className="mt-2 text-xs text-slate-500">
        No federation export action is available on this surface.
      </p>
    </SurfaceCard>
  );
}
