import React, { createContext, useContext } from 'react';
import { usePlayerNames } from '../hooks';
import { PlayersContext } from './';

export const PlayerNamesContext = createContext();

export const PlayerNamesProvider = ({ children }) => {
    const {players} = useContext(PlayersContext)
    const { playerNames, updatePlayerName } = usePlayerNames(players);

    return (
        <PlayerNamesContext.Provider value={{ playerNames, updatePlayerName }}>
            {children}
        </PlayerNamesContext.Provider>
    );
};

