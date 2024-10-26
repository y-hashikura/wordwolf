/**
 * @file SubTitle.js
 * @description サブタイトルを表示するためのReactコンポーネント
 * @module SubTitle
 * @example
 * 直接扱う場合：import SubTitle from './components/SubTitle';
 * 名前付きエクスポート：export {default as SubTitle} from './SubTitle'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */
import React from "react";

export const SubTitle = ({subTitle = "～Deduction games～"}) => {
    return (
        <p style={{ color: '#fffffe' }}>{subTitle}</p>
    )
}
