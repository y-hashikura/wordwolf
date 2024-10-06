/**
 * @file GameSetupTitle.js
 * @description ゲーム初期画面のタイトルを管理
 * @module GameSetupPage
 * @example
 * import GameSetupPage from './pages/GameSetupPage';
 * // このページをレンダリングするには、Reactコンポーネントとして使用します。
 * <GameSetupPage />
 * 作成者：橋倉 佳希
 * 更新者：
 * 更新履歴：
 * 　・初期作成 2024/10/04
 */

import React from "react";

const Title = ({title = "Word Wolf"}) => {
    return (
        <h1>{title}</h1>
    )
}
export default Title