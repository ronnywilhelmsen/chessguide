import type { SurfacePayloadLike } from '@/lib/payloadContract';
import { SurfaceCard } from './SurfaceCard';

// ChessGuide Web Dashboard — payload contract mapping (PR #42).
// Shows the contract-aligned metadata of the mapped payload-like object only.
// It never shows hidden/advisory content, adds no export action, and never
// claims production validation has occurred.
export function PayloadContractPanel({ payload }: { payload: SurfacePayloadLike }) {
  const rows: Array<[string, string]> = [
    ['Contract version', payload.contractVersion],
    ['Surface type', payload.surfaceType],
    ['Payload id', payload.payloadId],
    ['Scenario id', payload.scenarioId],
    ['Fixture only', payload.fixtureOnly ? 'true' : 'false'],
    ['Federation withholding ref', payload.federationWithholdingRef],
  ];

  return (
    <SurfaceCard title="Payload contract mapping">
      <dl className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[max-content_1fr]">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-xs font-medium text-slate-500">{label}</dt>
            <dd className="break-all font-mono text-xs text-slate-800">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 text-xs text-amber-700">
        Mapped to a payload-like fixture contract. Not a production runtime
        payload. Not schema-validated.
      </p>
    </SurfaceCard>
  );
}
