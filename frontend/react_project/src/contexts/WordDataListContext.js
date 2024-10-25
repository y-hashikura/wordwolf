import React, { createContext } from 'react';
import { useWordDataList } from '../hooks';

export const WordDataListContext = createContext();

export const WordDataListProvider = ({ children }) => {

    const { wordDataList, setWordDataList } = useWordDataList();

    return (
        <WordDataListContext.Provider value={{ wordDataList, setWordDataList }}>
            {children}
        </WordDataListContext.Provider>
    );
};