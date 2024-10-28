import React, { createContext } from 'react';
import { useTalkTime } from '../hooks';

export const TalkTimeContext = createContext();

export const TalkTimeProvider = ({ children }) => {
    const { talkTime, increaseTalkTime, decreaseTalkTime } = useTalkTime();

    return (
        <TalkTimeContext.Provider value={{ talkTime, increaseTalkTime, decreaseTalkTime }}>
        {children}
        </TalkTimeContext.Provider>
    );
};