/**
 * @file NextPlayerButton.js
 * @description 次のプレイヤーに遷移するためのボタン
 * @module NextPlayerButton
 * @example
 * 直接扱う場合：import NextPlayerButton from './components/NextPlayerButton';
 * 名前付きエクスポート：export {default as NextPlayerButton} from './NextPlayerButton'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useContext } from "react";
import { GameContext } from "../App";
import { Button } from 'react-bootstrap';

const NextPlayerButton = () => {
    
    const { nextPlayerIndex } = useContext(GameContext)

    return (
        <Button className="mt-4" variant="primary" onClick={nextPlayerIndex}>Next</Button>
    )
}

export default NextPlayerButton