/**
 * @file GameSetupPage.js
 * @description このモジュールは、ゲームの初期設定ページ（プレイヤー人数、エロウルフ人数、トークタイム）を提供します。
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

import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// hooksのエントリーポイント(index.js)をインポート
import { usePlayers , useWolves, useTalkTime} from '../hooks'
// componentsのエントリーポイント(index.js)をインポート
import { Title } from '../components'

const GameSetupPage = () => {
    const {players, increasePlayers, decreasePlayers} = usePlayers();
    const {wolves, increaseWolves, decreaseWolves} = useWolves();
    const {talkTime, increaseTalkTime, decreaseTalkTime} = useTalkTime();

    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
        <Title />
        <p>～Deduction games～</p>
        <div className="setup-box bg-light p-4 rounded">
            <div className="d-flex flex-column">
                <div className="my-3">
                    <div>How many players are there?</div>
                    <div>
                    <Button onClick={decreasePlayers}>−</Button>
                    <span className="mx-2">{players} people</span>
                    <Button onClick={increasePlayers}>＋</Button>
                    </div>
                </div>
                
                <div className="my-3">
                    <div>How many wolves are there?</div>
                    <div>
                    <Button onClick={decreaseWolves}>−</Button>
                    <span className="mx-2">{wolves} people</span>
                    <Button onClick={increaseWolves}>＋</Button>
                    </div>
                </div>
                
                <div className="my-3">
                    <div>Talk time?</div>
                    <div>
                    <Button onClick={decreaseTalkTime}>−</Button>
                    <span className="mx-2">{talkTime} minute</span>
                    <Button onClick={increaseTalkTime}>＋</Button>
                    </div>
                </div>
            </div>
        </div>
        <Button className="mt-4" variant="primary">Next</Button>
        <Button className="mt-2" variant="link">遊び方を見る</Button>
      </Container>

    );
}
export default GameSetupPage;