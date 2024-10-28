/**
 * @file usePlayerNames.js
 * @description 参加人数に基づいてプレイヤー名を管理する
 * @module usePlayerNames
 * @example
 * 直接扱う場合：import usePlayerNames from './hooks/usePlayerNames';
 * 名前付きエクスポート：export {default as usePlayerNames} from './hooks'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useState, useEffect, useContext } from "react";
import { PlayersContext } from "../contexts";

const usePlayerNames = () => {

    const { players } = useContext(PlayersContext)

    // 人数の状態管理の数に基づいて配列の要素を用意
    const [playerNames, setPlayerNames] = useState(Array(players).fill(''))

    // 依存値にplayersを設定。
    // これにより初期設定画面にて参加人数が変化する度に本フックが適用されその人数分の配列が再作成される
    useEffect(() => {
        setPlayerNames(Array(players).fill(''));
    }, [players]);

    // 特定インデックスに該当するプレイヤー名の状態変化を行う関数
    const updatePlayerName = (index, newName) => {
        // ...(スプレッド構文)を使用して配列をコピーしている
        // stateを直接更新せず配列をコピーしている理由としては、
        // 直接変更すると、Reactが変更を認識できず、再レンダリングが起こらない可能性があるから
        const updatedNames = [...playerNames];
        updatedNames[index] = newName;
        setPlayerNames(updatedNames);
    };

    return { playerNames, updatePlayerName };

}
export default usePlayerNames