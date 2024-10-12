import React, { useState , createContext} from 'react';
import { GameSetupPage, PlayersInputPage, PlayerMessagesPage} from './pages';
import { usePlayers, useWolves, useTalkTime, useStepUp, usePlayerNames, usePlayerCurrentIndex } from './hooks'

// Context API
export const GameContext = createContext();

const App = () => {
  // 参加人数を管理
  const { players, increasePlayers, decreasePlayers } = usePlayers();
  // ウルフ人数を管理
  const { wolves, increaseWolves, decreaseWolves } = useWolves();
  // トークタイムを管理
  const { talkTime, increaseTalkTime, decreaseTalkTime } = useTalkTime();
  // 現在の状態を管理
  const { stepUps, increaseStepUps, decreaseStepUps } = useStepUp();
  // ユーザ名を管理
  const { playerNames, updatePlayerName } = usePlayerNames(players); 
  // ユーザインデックスを管理
  const { playerCurrentIndex, nextPlayerIndex, previewPlayerIndex } = usePlayerCurrentIndex(); 

  return (
    <GameContext.Provider value={{
        players, increasePlayers, decreasePlayers,
        wolves, increaseWolves, decreaseWolves,
        talkTime, increaseTalkTime, decreaseTalkTime,
        stepUps, increaseStepUps, decreaseStepUps,
        playerNames, updatePlayerName,
        playerCurrentIndex, nextPlayerIndex, previewPlayerIndex
    }}>
        {stepUps === 1 && <GameSetupPage />}
        {stepUps === 2 && <PlayersInputPage />}
        {stepUps === 3 && <PlayerMessagesPage />}
    </GameContext.Provider>
  );
};

export default App;