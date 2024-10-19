// 参加人数(players)のコンテキストプロバイダを管理

import React, { createContext } from 'react';
import { usePlayers } from '../hooks';

export const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {

    // 参加人数用のカスタムフックより状態及び状態変化の関数を取得
    const { players, increasePlayers, decreasePlayers } = usePlayers();

    return (
        // 子コンポーネントで扱えるようにプロバイダに設定
        <PlayersContext.Provider value={{ players, increasePlayers, decreasePlayers }}>
            {children}
        </PlayersContext.Provider>
    );
};