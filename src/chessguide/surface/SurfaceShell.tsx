import React, { useState } from 'react';
import {
  Paper,
  Typography,
  Button,
  ButtonGroup,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import {
  SurfaceMode,
  ALL_SURFACE_MODES,
  DEFAULT_SURFACE_MODE,
} from './SurfaceMode';
import {
  SURFACE_DISPLAY_FIELD_LABELS,
} from './SurfaceDisplayField';
import {
  buildSurfaceFixture,
  runtimeUnavailableMessage,
} from './SurfaceFixture';
import { ModeBanner } from './ModeBanner';
import { NoAdviceBanner } from './NoAdviceBanner';
import { SuppressedOutputPanel } from './SuppressedOutputPanel';

// ChessGuide Web Surface — skeleton only (PR #38).
//
// This is a safe, governed *display* shell, not a coach. It renders only
// placeholders from a static fixture. Engine, CV, TSS, CCT, Buddy, model
// output, Learning Frontier, payload runtime, Creator runtime, and federation
// export are NOT active. ChessGuide owns governed reality; this shell only
// displays a fixture. thewilhelmsen.com is not involved.
export const SurfaceShell: React.FC = () => {
  const [mode, setMode] = useState<SurfaceMode>(DEFAULT_SURFACE_MODE);
  const fixture = buildSurfaceFixture(mode);
  const runtimeMsg = runtimeUnavailableMessage(mode);

  return (
    <div style={{ minWidth: 320, maxWidth: 560 }}>
      <Typography variant="h6" gutterBottom>
        ♛ ChessGuide Surface (display shell)
      </Typography>

      <ButtonGroup color="primary" size="small" style={{ marginBottom: 8, flexWrap: 'wrap' }}>
        {ALL_SURFACE_MODES.map(m => (
          <Button
            key={m}
            variant={m === mode ? 'contained' : 'outlined'}
            onClick={() => setMode(m)}>
            {m}
          </Button>
        ))}
      </ButtonGroup>

      <ModeBanner mode={mode} />
      <NoAdviceBanner banner={fixture.noAdviceBanner} />

      {runtimeMsg && (
        <Paper elevation={0} style={{ padding: '10px 12px', background: '#fff8e1', marginBottom: 8 }}>
          <Typography variant="body2">{runtimeMsg}</Typography>
        </Paper>
      )}

      <Paper elevation={0} style={{ padding: '10px 12px', background: '#fafafa', marginBottom: 8 }}>
        <Typography variant="subtitle2" gutterBottom>
          Display placeholders
        </Typography>
        <div
          style={{
            height: 120,
            border: '1px dashed #bdbdbd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#757575',
            marginBottom: 8,
          }}>
          {fixture.boardLabel}
        </div>
        <Typography variant="body2">Game status: {fixture.gameStatus}</Typography>
        <Typography variant="body2">Turn: {fixture.turn}</Typography>
        <Typography variant="body2">
          Clock — White: {fixture.clock.white} · Black: {fixture.clock.black}
        </Typography>
        <Typography variant="body2" style={{ marginTop: 6 }}>
          Move list (placeholder):
        </Typography>
        <List dense disablePadding>
          {fixture.moves.map((mv, i) => (
            <ListItem key={i} disableGutters>
              <ListItemText primary={mv} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper elevation={0} style={{ padding: '10px 12px', background: '#fafafa', marginBottom: 8 }}>
        <Typography variant="subtitle2" gutterBottom>
          Displayed fields
        </Typography>
        <Typography variant="body2">
          {fixture.displayedFields.map(f => SURFACE_DISPLAY_FIELD_LABELS[f]).join(' · ')}
        </Typography>
      </Paper>

      <SuppressedOutputPanel suppressed={fixture.suppressedOutputs} />

      <Divider style={{ margin: '8px 0' }} />

      <Typography variant="caption" display="block" color="textSecondary">
        Engine, CV, TSS, CCT, Buddy, model output, Learning Frontier, payload
        runtime, Creator runtime, and federation export are NOT active in this
        skeleton.
      </Typography>
      <Typography variant="caption" display="block" color="textSecondary">
        Static fixture only — not the accepted production schema.
      </Typography>
      <Typography variant="caption" display="block" color="textSecondary">
        Fixture: {fixture.fixtureLabel} · payloadId: {fixture.payloadId} ·
        surface: {fixture.surfaceType}
      </Typography>
    </div>
  );
};
