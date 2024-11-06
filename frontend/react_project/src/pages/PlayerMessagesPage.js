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
import React, {useContext, useState, useEffect} from "react";
import { PlayerNamesContext, PlayersContext, StepUpContext, WolvesContext, WordDataListContext } from '../contexts';
import { CustomButton } from '../components'
import { Container, Button } from 'react-bootstrap';
import { PlayerConfirmation, PlayerWord } from '../features';
import axios from 'axios';

export const PlayerMessagesPage = () => {

    // プレイヤー名リストをContext APIより取得
    const { playerNames } = useContext(PlayerNamesContext)
    
    // ページ遷移の関数を取得
    const { increaseStepUps } = useContext(StepUpContext)

    // ワードリストのset関数取得
    const { setWordDataList } = useContext(WordDataListContext)

    // 参加人数及びウルフ人数の状態
    const { players } = useContext(PlayersContext)
    const { wolves } = useContext(WolvesContext)

    // ユーザインデックスの状態管理
    const [CurrentIndex, setCurrentIndex] = useState(0)
    const nextPlayerIndex = () => setCurrentIndex((index) => index + 1);

    // ユーザ確認 or ワード表示画面のステップ状態管理
    const [playerStep, setPlayerStep] = useState(1);
    const nextPlayerStep = () => setPlayerStep(2)
    const clearPlayerStep = () => setPlayerStep(1)

    // 確認画面 and 次プレイヤーの関数を同時実行するための関数
    const clearPlayerStep_and_nextPlayerIndex = () => {
        clearPlayerStep()
        nextPlayerIndex()
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // コンポーネントがマウントされたときにデータ取得を行う
        const fetchData = async () => {
            try {
                const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/wolfdata`;
                const response = await axios.get(apiUrl, {
                    params: {
                        wolf: wolves,
                        normal: (players - wolves), 
                    }
                });
                setWordDataList(response.data);
            } catch (error) {
                console.error("データ取得エラー:", error);
            } finally {
                // ローディング終了
                setLoading(false); 
            }
        };

        fetchData();
    }, []);

    if (loading) return <><p>データ取得中...</p></>;

    return (
        <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
            {playerStep === 1 ? (
                // プレイヤー確認画面
                <>
                <PlayerConfirmation 
                    CurrentIndex={CurrentIndex} 
                    onClick={nextPlayerStep}
                />
                <h2>{loading}</h2>
                </>

            ) : (
                // プレイヤーワード表示画面
                CurrentIndex === playerNames.length - 1 ? (
                    <PlayerWord CurrentIndex={CurrentIndex} onClick={increaseStepUps}/>
                ) : (
                    <PlayerWord CurrentIndex={CurrentIndex} onClick={clearPlayerStep_and_nextPlayerIndex}/>
                )
            )}
        </Container>
    );
}