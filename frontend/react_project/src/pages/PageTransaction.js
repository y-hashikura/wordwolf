import React, { useContext } from 'react';
import { GameSetupPage, PlayersInputPage, PlayerMessagesPage, GameStartPage } from './';
import { StepUpContext } from '../contexts';

export const PageTransaction = () => {

    // ページ遷移用のカスタムフック
    const { stepUps } = useContext(StepUpContext);

    return (
        <>
            {/* 初期設定画面 */}
            {stepUps === 1 && <GameSetupPage />}
            {/* ユーザ名入力画面 */}
            {stepUps === 2 && <PlayersInputPage />}
            {/* ワード表示画面 */}
            {stepUps === 3 && <PlayerMessagesPage />}
            {/* ゲーム開始画面 */}
            {stepUps === 4 && <GameStartPage />}
        </>
    );
};