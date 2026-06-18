import type { AmbiguityPlaceholder } from '@/lib/surfaceFixture';
import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — scenario explorer (PR #41).
// Shows an ambiguity CATEGORY only. It never gives advice and never certifies
// truth. Resolution is explicitly deferred to a human, later.
export function AmbiguityPanel({ ambiguity }: { ambiguity: AmbiguityPlaceholder }) {
  return (
    <SurfaceCard title="Ambiguity detected">
      <p className="mb-1">
        Category:{' '}
        <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-xs text-amber-800">
          {ambiguity.category}
        </span>
      </p>
      <p className="mt-2 text-sm font-medium text-amber-800">
        {ambiguity.humanResolutionNote}
      </p>
      <p className="mt-1 text-xs text-slate-500">
        No advice is given and no truth is certified on this surface.
      </p>
    </SurfaceCard>
  );
}
