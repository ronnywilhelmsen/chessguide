import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import DashboardPage from './page';

afterEach(() => cleanup());

describe('DashboardPage (governed display shell)', () => {
  it('defaults to COMPETITION and shows the no-advice banner', () => {
    render(<DashboardPage />);
    // The COMPETITION mode button is selected by default (selected styling).
    const competitionBtn = screen.getByRole('button', { name: 'COMPETITION' });
    expect(competitionBtn.className).toContain('bg-sky-600');
    expect(screen.getByText('No advice — Competition Mode')).toBeInTheDocument();
  });

  it('shows the no-advice banner in BROADCAST_DISPLAY', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByRole('button', { name: 'BROADCAST_DISPLAY' }));
    expect(screen.getByText('No advice — Broadcast / Display')).toBeInTheDocument();
  });

  it('LEARNING renders a placeholder-only note and no advice banner', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByRole('button', { name: 'LEARNING' }));
    expect(screen.getByText('Learning runtime not active yet')).toBeInTheDocument();
    expect(screen.queryByText('No advice — Competition Mode')).not.toBeInTheDocument();
  });

  it('REVIEW renders a placeholder-only note and no analysis', () => {
    render(<DashboardPage />);
    fireEvent.click(screen.getByRole('button', { name: 'REVIEW' }));
    expect(screen.getByText('Review runtime not active yet')).toBeInTheDocument();
    expect(screen.queryByText('No advice — Competition Mode')).not.toBeInTheDocument();
  });

  it('shows suppressed outputs as categories only (content never shown)', () => {
    render(<DashboardPage />);
    expect(
      screen.getByText('Categories only — content is never shown on this surface.')
    ).toBeInTheDocument();
    // Category labels are allowed; they are plain names, not values.
    expect(screen.getByText('Engine evaluation')).toBeInTheDocument();
  });

  it('does not render any forbidden runtime content or actions', () => {
    const { container } = render(<DashboardPage />);
    // No webcam / live CV surfaces.
    expect(container.querySelector('video')).toBeNull();
    expect(container.querySelector('canvas')).toBeNull();
    // No federation export action.
    expect(screen.queryByRole('button', { name: /export/i })).toBeNull();
    // The CV-not-active promise is visible.
    expect(
      screen.getByText(/Browser live CV is not active\./)
    ).toBeInTheDocument();
  });
});
