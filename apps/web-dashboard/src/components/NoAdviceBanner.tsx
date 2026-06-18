import type { NoAdviceBanner as NoAdviceBannerData } from '@/lib/surfaceFixture';

// ChessGuide Web Dashboard — skeleton only (PR #39).
// Calm, fixed no-advice banner. Never renders eval, best move, or any advice.
export function NoAdviceBanner({ banner }: { banner: NoAdviceBannerData }) {
  if (!banner.visible) return null;
  return (
    <div className="rounded-md bg-rose-50 px-4 py-3 text-rose-900 ring-1 ring-inset ring-rose-200">
      <p className="font-semibold">{banner.title}</p>
      <p className="text-sm">{banner.message}</p>
    </div>
  );
}
