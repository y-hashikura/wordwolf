import React, { createContext } from 'react';
import { useWolves } from '../hooks';

export const WolvesContext = createContext();

export const WolvesProvider = ({ children }) => {


    const { wolves, increaseWolves, decreaseWolves } = useWolves();

    return (
        <WolvesContext.Provider value={{ wolves, increaseWolves, decreaseWolves }}>
            {children}
        </WolvesContext.Provider>
    );
};