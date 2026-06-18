import {
  SuppressedOutputClass,
  SUPPRESSED_OUTPUT_CLASS_LABELS,
} from '@/lib/suppressedOutputs';
import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — skeleton only (PR #39).
// Lists suppressed output CLASSES only. It never shows their content.
export function SuppressedOutputPanel({
  suppressed,
}: {
  suppressed: SuppressedOutputClass[];
}) {
  return (
    <SurfaceCard title="Suppressed output classes">
      <p className="mb-2 text-xs text-slate-500">
        Categories only — content is never shown on this surface.
      </p>
      <div className="flex flex-wrap gap-2">
        {suppressed.map((cls) => (
          <span
            key={cls}
            className="rounded-full border border-slate-300 px-2 py-0.5 text-xs text-slate-600">
            {SUPPRESSED_OUTPUT_CLASS_LABELS[cls]}
          </span>
        ))}
      </div>
    </SurfaceCard>
  );
}
