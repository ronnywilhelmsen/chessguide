import { SURFACE_SCENARIOS, SurfaceScenarioId } from '@/lib/scenarios';

// ChessGuide Web Dashboard — scenario explorer (PR #41).
// Lets the user pick one governed fixture scenario. Local UI state only.
export function ScenarioSelector({
  value,
  onChange,
}: {
  value: SurfaceScenarioId;
  onChange: (id: SurfaceScenarioId) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-slate-600">Scenario</span>
      <select
        aria-label="Scenario"
        value={value}
        onChange={(e) => onChange(e.target.value as SurfaceScenarioId)}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800">
        {SURFACE_SCENARIOS.map((s) => (
          <option key={s.id} value={s.id}>
            {s.label}
          </option>
        ))}
      </select>
    </label>
  );
}
