import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { NoAdviceBannerFixture } from './SurfaceFixture';

// ChessGuide Web Surface — skeleton only (PR #38).
// Calm, fixed no-advice banner. Never renders eval, best move, or any advice.
export const NoAdviceBanner: React.FC<{ banner: NoAdviceBannerFixture }> = ({ banner }) => {
  if (!banner.visible) return null;
  return (
    <Paper
      elevation={0}
      style={{
        padding: '10px 12px',
        background: '#fdecea',
        border: '1px solid #f5c2c0',
        marginBottom: 8,
      }}>
      <Typography variant="subtitle1" style={{ fontWeight: 600 }}>
        {banner.title}
      </Typography>
      <Typography variant="body2">{banner.message}</Typography>
    </Paper>
  );
};
