/**
 * @file NextPageButton.js
 * @description 人数や時間をカウンターするためのコンポーネント
 * @module NextPageButton
 * @example
 * 直接扱う場合：import NextPageButton from './components/NextPageButton';
 * 名前付きエクスポート：export {default as NextPageButton} from './NextPageButton'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { GameContext } from "../App";

const NextPageButton = () => {
    const { increaseStepUps } = useContext(GameContext);
    return (
        <Button className="mt-4" variant="primary" onClick={increaseStepUps}>Next</Button>
    )
}
export default NextPageButton