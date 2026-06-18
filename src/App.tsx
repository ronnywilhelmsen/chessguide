import React from 'react';
import { game, gameState, gameHistory } from './data/game';
import { config } from './data/config';
import { ThemeProvider, unstable_createMuiStrictModeTheme } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import styles from './styles.module.scss';
import { History } from './components/History';
import { Panel } from './components/Panel';
import { FenInfo } from './components/FenInfo';
import { CP } from './components/CP';
import { ConfigMain } from './components/ConfigMain';
import { Board } from './components/Board';
import { PlayerInfo } from './components/PlayerInfo';
import { MessageBox, messager } from './components/MessageBox';
import { helper } from './data/helper';
import { About } from './components/About';
import { rendering } from './data/rendering';
import { refreshtimer } from './data/refreshtimer';
import { SurfaceShell } from './chessguide/surface';

const theme = unstable_createMuiStrictModeTheme();

const App: React.FC = () => {
  const about = () => messager.display('About', <About />);
  const surface = () => messager.display('ChessGuide Surface', <SurfaceShell />);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.App}>
        <CP helper={helper} rendering={rendering} config={config} />
        <div className={styles.AppLeft}>
          <PlayerInfo isTop={true} game={game} config={config} />
          <Board
            helper={helper}
            gameState={gameState}
            rendering={rendering}
            config={config}
            refreshtimer={refreshtimer}
          />
          <PlayerInfo isTop={false} game={game} config={config} />
        </div>
        <div className={styles.AppRight}>
          <h3 onClick={about}>♛ Chessbuddy 0.11</h3>
          <Link component="button" variant="body2" onClick={surface}>
            Open ChessGuide Surface
          </Link>
          <Panel gameState={gameState} config={config} />
          <FenInfo game={game} />
          <History game={game} gameHistory={gameHistory} config={config} />
        </div>
        <MessageBox messager={messager} />
        <ConfigMain config={config} />
      </div>
    </ThemeProvider>
  );
};

export default App;
