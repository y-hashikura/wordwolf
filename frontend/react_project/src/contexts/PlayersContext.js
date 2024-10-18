import React, { createContext } from 'react';
import { usePlayers } from '../hooks';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
    const { players, increasePlayers, decreasePlayers } = usePlayers();

    return (
        <PlayersContext.Provider value={{ players, increasePlayers, decreasePlayers }}>
            {children}
        </PlayersContext.Provider>
    );
};