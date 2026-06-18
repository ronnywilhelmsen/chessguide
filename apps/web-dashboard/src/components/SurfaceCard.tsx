import type { ReactNode } from 'react';

// ChessGuide Web Dashboard — skeleton only (PR #39).
// Generic dashboard card wrapper.
export function SurfaceCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h3>
      <div className="text-sm text-slate-700">{children}</div>
    </section>
  );
}
