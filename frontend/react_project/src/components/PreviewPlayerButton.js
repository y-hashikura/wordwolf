/**
 * @file PreviewPlayerButton.js
 * @description 次のプレイヤーに遷移するためのボタン
 * @module PreviewPlayerButton
 * @example
 * 直接扱う場合：import PreviewPlayerButton from './components/PreviewPlayerButton';
 * 名前付きエクスポート：export {default as PreviewPlayerButton} from './PreviewPlayerButton'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useContext } from "react";
import { GameContext } from "../App";
import { Button } from 'react-bootstrap';

const PreviewPlayerButton = () => {
    
    const { previewPlayerIndex } = useContext(GameContext)

    return (
        <Button className="mt-4" variant="primary" onClick={previewPlayerIndex}>Preview</Button>
    )
}

export default PreviewPlayerButton