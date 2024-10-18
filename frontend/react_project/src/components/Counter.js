/**
 * @file Counter.js
 * @description 人数や時間をカウンターするためのコンポーネント
 * @module Counter
 * @example
 * 直接扱う場合：import Counter from './components/Counter';
 * 名前付きエクスポート：export {default as Counter} from './Counter'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */
import React from "react";
import { Button } from 'react-bootstrap';

export const Counter = (props) => {
    return (
        <div className="my-3">
            <div>{props.title}</div>
            <div>
                <Button onClick={props.decreaseFunction}>−</Button>
                <span className="mx-2">{props.currentcount} {props.unit}</span>
                <Button onClick={props.increaseFunction}>＋</Button>
            </div>
        </div>
    )
}