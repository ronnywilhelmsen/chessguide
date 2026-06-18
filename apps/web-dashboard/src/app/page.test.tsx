import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import DashboardPage from './page';
import { SurfaceScenarioId } from '@/lib/scenarios';

afterEach(() => cleanup());

const selectScenario = (id: SurfaceScenarioId) => {
  fireEvent.change(screen.getByLabelText('Scenario'), { target: { value: id } });
};

describe('DashboardPage scenario explorer (governed display shell)', () => {
  it('renders the title and the scenario selector', () => {
    render(<DashboardPage />);
    expect(screen.getByText('ChessGuide Surface Dashboard')).toBeInTheDocument();
    expect(
      screen.getByText('Governed fixture scenario explorer')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Scenario')).toBeInTheDocument();
  });

  it('defaults to competition-live-basic and shows the no-advice banner', () => {
    render(<DashboardPage />);
    const select = screen.getByLabelText('Scenario') as HTMLSelectElement;
    expect(select.value).toBe(SurfaceScenarioId.COMPETITION_LIVE_BASIC);
    expect(screen.getByText('No advice — Competition Mode')).toBeInTheDocument();
  });

  it('broadcast scenario shows the no-advice banner', () => {
    render(<DashboardPage />);
    selectScenario(SurfaceScenarioId.BROADCAST_DISPLAY_BASIC);
    expect(
      screen.getByText('No advice — Broadcast / Display')
    ).toBeInTheDocument();
  });

  it('learning scenario shows a placeholder-only note and no advice banner', () => {
    render(<DashboardPage />);
    selectScenario(SurfaceScenarioId.LEARNING_PLACEHOLDER);
    expect(
      screen.getByText('Learning runtime not active yet')
    ).toBeInTheDocument();
    expect(
      screen.queryByText('No advice — Competition Mode')
    ).not.toBeInTheDocument();
  });

  it('review scenario shows a placeholder-only note and no analysis', () => {
    render(<DashboardPage />);
    selectScenario(SurfaceScenarioId.REVIEW_PLACEHOLDER);
    expect(screen.getByText('Review runtime not active yet')).toBeInTheDocument();
    expect(
      screen.queryByText('No advice — Competition Mode')
    ).not.toBeInTheDocument();
  });

  it('ambiguity scenario says human resolution is required later', () => {
    render(<DashboardPage />);
    selectScenario(SurfaceScenarioId.AMBIGUITY_DETECTED_PLACEHOLDER);
    expect(screen.getByText('Ambiguity detected')).toBeInTheDocument();
    expect(
      screen.getByText('Human resolution required later')
    ).toBeInTheDocument();
  });

  it('federation-withheld scenario shows a withholding ref but no export action', () => {
    render(<DashboardPage />);
    selectScenario(SurfaceScenarioId.FEDERATION_WITHHELD_PLACEHOLDER);
    expect(screen.getByText('Federation withholding')).toBeInTheDocument();
    expect(
      screen.getByText('placeholder-federation-withholding-ref-002')
    ).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /export/i })).toBeNull();
  });

  it('shows suppressed outputs as categories only (content never shown)', () => {
    render(<DashboardPage />);
    expect(
      screen.getByText('Categories only — content is never shown on this surface.')
    ).toBeInTheDocument();
    expect(screen.getByText('Engine evaluation')).toBeInTheDocument();
  });

  it('does not render any forbidden runtime content or actions in any scenario', () => {
    const { container } = render(<DashboardPage />);
    const ids: SurfaceScenarioId[] = [
      SurfaceScenarioId.COMPETITION_LIVE_BASIC,
      SurfaceScenarioId.BROADCAST_DISPLAY_BASIC,
      SurfaceScenarioId.LEARNING_PLACEHOLDER,
      SurfaceScenarioId.REVIEW_PLACEHOLDER,
      SurfaceScenarioId.AMBIGUITY_DETECTED_PLACEHOLDER,
      SurfaceScenarioId.FEDERATION_WITHHELD_PLACEHOLDER,
    ];
    for (const id of ids) {
      selectScenario(id);
      // No webcam / live CV surfaces.
      expect(container.querySelector('video')).toBeNull();
      expect(container.querySelector('canvas')).toBeNull();
      // No federation export action.
      expect(screen.queryByRole('button', { name: /export/i })).toBeNull();
    }
    // The static-only promise is visible.
    expect(
      screen.getByText(/Static frontend fixtures only\./)
    ).toBeInTheDocument();
  });
});
