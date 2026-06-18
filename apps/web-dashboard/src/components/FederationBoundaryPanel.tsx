import type { FederationWithholdingPlaceholder } from '@/lib/surfaceFixture';
import { SUPPRESSED_OUTPUT_CLASS_LABELS } from '@/lib/suppressedOutputs';
import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — scenario explorer (PR #41).
// Federation withholding placeholder. Shows a withholding ref and the withheld
// CATEGORIES only. There is no federation export action and no export runtime.
export function FederationBoundaryPanel({
  federation,
}: {
  federation: FederationWithholdingPlaceholder;
}) {
  return (
    <SurfaceCard title="Federation withholding">
      <p className="mb-1">Withholding ref (placeholder):</p>
      <code className="break-all rounded bg-slate-100 px-2 py-1 text-xs text-slate-700">
        {federation.ref}
      </code>
      {federation.withheldClasses.length > 0 && (
        <div className="mt-2">
          <p className="mb-1 text-xs font-medium text-slate-600">
            Withheld categories:
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {federation.withheldClasses.map((c) => (
              <li
                key={c}
                className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs text-slate-700">
                {SUPPRESSED_OUTPUT_CLASS_LABELS[c]}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="mt-2 text-xs text-slate-500">{federation.note}</p>
    </SurfaceCard>
  );
}
