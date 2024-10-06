/**
 * @file PlayersInputPage.js
 * @description 人数や時間をカウンターするためのコンポーネント
 * @module PlayersInputPage
 * @example
 * 直接扱う場合：import PlayersInputPage from './pages/PlayersInputPage';
 * 名前付きエクスポート：export {default as PlayersInputPage} from './pages'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Title, SubTitle, NextButton } from '../components'

const PlayersInputPage = () => {

    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
            <Title/>
            <SubTitle/>
            <div className="setup-box bg-light p-4 rounded">
                <div className="d-flex flex-column">
                    <p>test</p>
                </div>
            </div>
            <div className="d-flex flex-column">
                <NextButton />
            </div>
      </Container>

    );
}
export default PlayersInputPage;