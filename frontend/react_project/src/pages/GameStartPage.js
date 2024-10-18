/**
 * @file GameStartPage.js
 * @description ゲーム開始時のコンポーネント
 * @module GameStartPage
 * @example
 * 直接扱う場合：import GameStartPage from './pages/GameStartPage';
 * 名前付きエクスポート：export {default as GameStartPage} from './pages'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */

import React, { useState, useEffect, useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container } from 'react-bootstrap';
import { TalkTimeContext } from '../contexts';
import { ContainerCenter } from '../components';
 
const GameStartPage = () => {
    
    // Context APIよりトークタイム時間を取得
    const { talkTime } = useContext(TalkTimeContext)
    
    // 分⇒秒変換
    const initialTime = talkTime * 60;

    // 残り時間の状態管理
    const [timeLeft, setTimeLeft] = useState(initialTime);

    // 全体の時間に対する残り時間のパーセンテージの状態管理
    const [percentage, setPercentage] = useState(100);

    // 残り時間の副作用管理
    useEffect(() => {
        // setIntervalはjsの組み込み関数であり、指定した時間ごとに自動で動作する関数
        const interval = setInterval(() => {
            // setTimeLeftはTimeLeftという状態管理(残り時間)を更新するための関数
            // prevはTimeLeftの最新の状態のこと
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // clearIntervalはjsの組み込み関数であり、setIntervalで指定した時間を停止する関数
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000); // 1秒(1000ミリ秒)毎に関数が実行される

        // クリーンアップ関数
        return () => clearInterval(interval);
    }, []);

    // パーセンテージの副作用の管理
    useEffect(() => {
        // setPercentageはPercentageの状態変化させるための関数
        setPercentage((timeLeft / initialTime) * 100);
    }, [timeLeft, initialTime]);

    // 分を算出
    const minutes = Math.floor(timeLeft / 60);
    // 秒を算出
    const seconds = timeLeft % 60;
    // 表示内容  
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    return (
        <ContainerCenter>
            <CircularProgressbar
                value={percentage}
                text={formattedTime}
                styles={buildStyles
                    (
                        {
                            pathColor: '#ff9999',
                            textColor: 'Black',
                            trailColor: '#eee',
                            backgroundColor: '#ff9999',
                            textSize: '16px',
                        }
                    )
                }
            />
            <div
                style={
                    {
                        position: 'absolute',
                        top: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'Black',
                        fontSize: '16px',
                    }
                }
            >
                残りトーク時間
            </div>
        </ContainerCenter>
    );
  };

export default GameStartPage