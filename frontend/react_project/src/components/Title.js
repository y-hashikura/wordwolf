/**
 * @file Title.js
 * @description サブタイトルを表示するためのReactコンポーネント
 * @module Title
 * @example
 * 直接扱う場合：import Title from './components/Title';
 * 名前付きエクスポート：export {default as Title} from './Title'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React from "react";

const Title = ({title = "Word Wolf"}) => {
    return (
        <h1>{title}</h1>
    )
}
export default Title