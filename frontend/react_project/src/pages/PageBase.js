/**
 * @file PageBase.js
 * @description 各種ページのベース(親)のページコンポーネント
 * @module PageBase
 * @example
 * 直接扱う場合：import PageBase from './components/PageBase';
 * 名前付きエクスポート：export {default as PageBase} from './PageBase'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React from "react";
import { Container, Button } from 'react-bootstrap';


const PageBase = ({ children }) => {

    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
            {children}
        </Container>
    );
}

export default PageBase