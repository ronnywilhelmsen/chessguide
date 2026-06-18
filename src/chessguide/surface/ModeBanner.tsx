import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { SurfaceMode } from './SurfaceMode';

// ChessGuide Web Surface — skeleton only (PR #38).
// Shows the current local display mode. No governed runtime state.
export const ModeBanner: React.FC<{ mode: SurfaceMode }> = ({ mode }) => (
  <Paper
    elevation={0}
    style={{ padding: '8px 12px', background: '#e3f2fd', marginBottom: 8 }}>
    <Typography variant="subtitle1">
      <strong>Mode:</strong> {mode}
    </Typography>
  </Paper>
);
