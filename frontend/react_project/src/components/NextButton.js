/**
 * @file NextButton.js
 * @description 人数や時間をカウンターするためのコンポーネント
 * @module NextButton
 * @example
 * 直接扱う場合：import NextButton from './components/NextButton';
 * 名前付きエクスポート：export {default as NextButton} from './NextButton'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { GameContext } from "../App";

const NextButton = () => {
    const { increaseStepUps } = useContext(GameContext);
    return (
        <Button className="mt-4" variant="primary" onClick={increaseStepUps}>Next</Button>
    )
}
export default NextButton