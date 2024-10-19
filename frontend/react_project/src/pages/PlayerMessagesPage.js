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
import { PlayerNamesContext, StepUpContext } from '../contexts';
import { CustomButton } from '../components'
import { Container, Button } from 'react-bootstrap';
import { PlayerConfirmation, PlayerWord } from '../features';

export const PlayerMessagesPage = () => {

    // ContextApiより状態を取得
    const { playerNames } = useContext(PlayerNamesContext)
    // ページ遷移の関数を取得
    const { increaseStepUps } = useContext(StepUpContext)
    // ユーザインデックスの状態管理
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const nextPlayerIndex = () => setCurrentIndex((index) => index + 1);

    // ユーザ確認 or ワード表示画面のステップ状態管理
    const [playerStep, setPlayerStep] = useState(1);
    const nextPlayerStep = () => setPlayerStep(2)
    const clearPlayerStep = () => setPlayerStep(1)

    const test = () => {
        clearPlayerStep()
        nextPlayerIndex()
    }

    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
            {playerStep === 1 ? (
                // プレイヤー確認画面
                <PlayerConfirmation 
                    CurrentIndex={CurrentIndex} 
                    onClick={nextPlayerStep}
                />
            ) : (
                // プレイヤーワード表示画面
                CurrentIndex === playerNames.length - 1 ? (
                    <PlayerWord CurrentIndex={CurrentIndex} onClick={increaseStepUps}/>
                ) : (
                    <PlayerWord CurrentIndex={CurrentIndex} onClick={test}/>
                )
            )}
        </Container>
    );
}