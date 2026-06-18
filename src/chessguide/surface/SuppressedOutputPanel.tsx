import React from 'react';
import { Paper, Typography, Chip } from '@material-ui/core';
import {
  SuppressedOutputClass,
  SUPPRESSED_OUTPUT_CLASS_LABELS,
} from './SuppressedOutputClass';

// ChessGuide Web Surface — skeleton only (PR #38).
// Lists suppressed output CLASSES only. It never shows their content.
export const SuppressedOutputPanel: React.FC<{
  suppressed: SuppressedOutputClass[];
}> = ({ suppressed }) => (
  <Paper elevation={0} style={{ padding: '10px 12px', background: '#f5f5f5', marginBottom: 8 }}>
    <Typography variant="subtitle2" gutterBottom>
      Suppressed output classes (categories only — content is never shown)
    </Typography>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
      {suppressed.map(cls => (
        <Chip
          key={cls}
          size="small"
          label={SUPPRESSED_OUTPUT_CLASS_LABELS[cls]}
          variant="outlined"
        />
      ))}
    </div>
  </Paper>
);
