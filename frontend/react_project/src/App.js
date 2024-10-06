import React, { useState , createContext} from 'react';
import { GameSetupPage, PlayersInputPage} from './pages';
import { usePlayers, useWolves, useTalkTime, useStepUp } from './hooks'

// Context API
export const GameContext = createContext();

const App = () => {
  // カスタムフック
  const { players, increasePlayers, decreasePlayers } = usePlayers();
  const { wolves, increaseWolves, decreaseWolves } = useWolves();
  const { talkTime, increaseTalkTime, decreaseTalkTime } = useTalkTime();
  const { stepUps, increaseStepUps, decreaseStepUps } = useStepUp(); // 現在の状態を管理するステータス

  return (
    <GameContext.Provider value={{
        players, increasePlayers, decreasePlayers,
        wolves, increaseWolves, decreaseWolves,
        talkTime, increaseTalkTime, decreaseTalkTime,
        stepUps, increaseStepUps, decreaseStepUps 
    }}>
        {stepUps === 1 && <GameSetupPage />}
        {stepUps === 2 && <PlayersInputPage />}
    </GameContext.Provider>
  );
};

export default App;