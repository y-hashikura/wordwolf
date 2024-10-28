import React, { createContext, useContext } from 'react';
import { usePlayerNames } from '../hooks';

export const PlayerNamesContext = createContext();

export const PlayerNamesProvider = ({ children }) => {
    const { playerNames, updatePlayerName } = usePlayerNames();

    return (
        <PlayerNamesContext.Provider value={{ playerNames, updatePlayerName }}>
            {children}
        </PlayerNamesContext.Provider>
    );
};

