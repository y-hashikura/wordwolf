/**
 * @file: CustomButton.js
 * @description: 
 *  - カスタムボタンの関数コンポーネント
 *  - 次へ、前へ、次のユーザへ等のすべてのボタンの共通コンポーネントとして、
 *  - ラベル名やonclick時のイベント関数の指定を各種することで汎用性を持たせる
 */

import React from "react";
import { Button } from 'react-bootstrap';

export const CustomButton = (props) => {
    
    const variant = props.variant || "primary"
    const className = props.className || "mt-4"

    return (
        <Button 
            className={className}
            variant={variant}
            onClick={props.onClick}
        >
            {props.text}
        </Button>
    )
}