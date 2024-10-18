/**
 * @file PlayerMessagesPage.js
 * @description 各種メンバーへのワードを表示するコンポーネント
 * @module PlayerMessagesPage
 * @example
 * 直接扱う場合：import PlayerMessagesPage from './pages/PlayerMessagesPage';
 * 名前付きエクスポート：export {default as PlayerMessagesPage} from './pages'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */
import React, {useContext, useState} from "react";
import { PlayerNamesContext } from '../contexts';
import { NextPageButton, NextPlayerButton, PreviewPageButton, PreviewPlayerButton } from '../components'
import { Container, Button } from 'react-bootstrap';

const PlayerMessagesPage = () => {

    // ContextApiより状態を取得
    const { 
        playerNames, // プレイヤー名を管理
    } = useContext(PlayerNamesContext)

    // ユーザインデックスの状態管理
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const nextPlayerIndex = () => setCurrentIndex((index) => index + 1);

    // 下記画面ステップの状態管理
    const [playerStep, setPlayerStep] = useState(1);
    const nextPlayerStep = () => setPlayerStep(2)
    const clearPlayerStep = () => setPlayerStep(1)

    // プレイヤー確認画面
    const renderPlayerConfirmation = () => {
        return (
            <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
                <h2>{playerNames[CurrentIndex]}さんですか？</h2>
                <Button className="mt-4" variant="primary" onClick={nextPlayerStep}>OK</Button>
            </Container>
        );
    }

    // プレイヤーメッセージ表示画面
    const renderPlayerMessage = () => {
        return (
            <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
                {CurrentIndex === playerNames.length - 1 ? ( // 最後のプレイヤーかを判定 ? 
                    <>
                        <h2>すべてのプレイヤーの確認が完了しました</h2>
                        <p>ゲームの準備ができました！</p>
                        <NextPageButton />
                    </>
                ) : (
                    <>
                        <h2>{playerNames[CurrentIndex]}さんのお題は○○です</h2>
                        <h2>確認できましたら次へボタンを押下してください</h2>
                        <Button
                            className="mt-4"
                            variant="primary"
                            onClick={() => {
                                clearPlayerStep();
                                nextPlayerIndex();
                            }}
                        >
                            Next
                        </Button>
                    </>
                )}
            </Container>
        );
    }

    return (
        <>
            {playerStep === 1 ? renderPlayerConfirmation() : renderPlayerMessage()}
        </>
    );
}

export default PlayerMessagesPage