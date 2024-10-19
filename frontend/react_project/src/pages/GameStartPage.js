import React, { useState, useEffect, useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TalkTimeContext } from '../contexts';
import { ContainerCenter, FlexColumn, Title } from '../components';

/**
 * useTimeLeft: 残り時間の状態管理
 * @param {number} initialTime - カウントダウンの初期開始時間。
 * @returns {number} timeLeft - 残り時間
 * @description
 * カウントダウンの初期開始時間を元に1秒ごとに減少する残り時間を返す
 * 残り時間が0になったらタイマーは止まる
 * 
 * - JSの組み込み関数のsetInterval()を使用して1秒ごとに残り時間を減少する。
 * - JSの組み込み関数のclearInterval()を使用して残り時間が0になったら停止する。
 * - 副作用のクリーンアップ関数としてclearInterval()を使用する。
 */
const useTimeLeft = (initialTime) => {
    
    const [timeLeft, setTimeLeft] = useState(initialTime);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);

    }, [initialTime]);

    return timeLeft;
};

/**
 * usePercentage: パーセンテージの状態管理
 * @param {number} timeLeft - 残り時間。
 * @param {number} initialTime - カウントダウンの初期開始時間。
 * @description
 * 残り時間が全体の初期開始時間に対しての割合がどれくらいかを計算する
 * 
 * - (残り時間 / 全体時間) * 100
 */
const usePercentage = (timeLeft, initialTime) => {

    const [percentage, setPercentage] = useState(100);

    useEffect(() => {
        setPercentage((timeLeft / initialTime) * 100);
    }, [timeLeft, initialTime]);

    return percentage;
};

/**
 * GameStartPage: ゲーム開始画面のコンポーネント
 * @description
 */
export const GameStartPage = () => {
    
    // Context APIよりトークタイム時間を取得
    const { talkTime } = useContext(TalkTimeContext);

    // 分⇒秒変換
    const initialTime = talkTime * 60;

    // カスタムフックを使って残り時間とパーセンテージを管理
    const timeLeft = useTimeLeft(initialTime);
    const percentage = usePercentage(timeLeft, initialTime);

    // 分と秒を計算
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // 表示内容
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return (
        <ContainerCenter>
            <Title title="Talk Time" />
            <h4>残りトーク時間</h4>
            <div style={{ width: '200px', height: '200px' , display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}> {/* サイズを指定 */}
            <CircularProgressbar
                value={percentage}
                text={formattedTime}
                styles={buildStyles({
                    pathColor: '#ff9999',
                    textColor: 'Black',
                    trailColor: '#eee',
                    textSize: '16px',
                })}
            />
            </div>
            
        </ContainerCenter>
    );
};
