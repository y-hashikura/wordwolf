/**
 * @file usePlayerCurrentIndex.js
 * @description 参加人数に基づいてプレイヤー名を管理する
 * @module usePlayerCurrentIndex
 * @example
 * 直接扱う場合：import usePlayerCurrentIndex from './hooks/usePlayerCurrentIndex';
 * 名前付きエクスポート：export {default as usePlayerCurrentIndex} from './hooks'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, {useState} from "react";


const usePlayerCurrentIndex = () => {

    // フック関数を定義
    const [playerCurrentIndex, setPlayerCurrentIndex] = useState(0)

    const nextPlayerIndex = () => setPlayerCurrentIndex(playerCurrentIndex + 1);
    const previewPlayerIndex = () => setPlayerCurrentIndex(playerCurrentIndex - 1);

    return {playerCurrentIndex, nextPlayerIndex, previewPlayerIndex};

}
export default usePlayerCurrentIndex