import type { SurfaceMode } from '@/lib/surfaceModes';

// ChessGuide Web Dashboard — skeleton only (PR #39).
// Shows the current local display mode. No governed runtime state.
export function ModeBanner({ mode }: { mode: SurfaceMode }) {
  return (
    <div className="rounded-md bg-sky-50 px-4 py-2 text-sky-900 ring-1 ring-inset ring-sky-200">
      <span className="font-semibold">Mode:</span> {mode}
    </div>
  );
}
