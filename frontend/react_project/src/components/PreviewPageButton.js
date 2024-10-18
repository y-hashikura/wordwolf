/**
 * @file PreviewPageButton.js
 * @description 人数や時間をカウンターするためのコンポーネント
 * @module PreviewPageButton
 * @example
 * 直接扱う場合：import PreviewPageButton from './components/PreviewPageButton';
 * 名前付きエクスポート：export {default as PreviewPageButton} from './PreviewPageButton'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { StepUpContext } from "../contexts";

const PreviewPageButton = () => {
    const { decreaseStepUps } = useContext(StepUpContext);
    return (
        <Button className="mt-4" variant="primary" onClick={decreaseStepUps}>Preview</Button>
    )
}
export default PreviewPageButton