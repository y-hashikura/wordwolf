/**
 * @file PreviewButton.js
 * @description 人数や時間をカウンターするためのコンポーネント
 * @module PreviewButton
 * @example
 * 直接扱う場合：import PreviewButton from './components/PreviewButton';
 * 名前付きエクスポート：export {default as PreviewButton} from './PreviewButton'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { GameContext } from "../App";

const PreviewButton = () => {
    const { decreaseStepUps } = useContext(GameContext);
    return (
        <Button className="mt-4" variant="primary" onClick={decreaseStepUps}>Preview</Button>
    )
}
export default PreviewButton