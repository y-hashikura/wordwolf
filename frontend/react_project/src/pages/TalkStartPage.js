import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { TalkTimeContext, StepUpContext } from '../contexts';
import { ContainerCenter, FlexColumn, Title } from '../components';


// 残り時間の状態管理
const useTimeLeft = (initialTime) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    // setInterval()を活用して1秒ごとに残り時間が減少していく副作用の管理
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

// パーセンテージの状態管理
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
export const TalkStartPage = () => {
    
    // Context APIよりトークタイム時間を取得
    const { talkTime } = useContext(TalkTimeContext);
    const { increaseStepUps } = useContext(StepUpContext);

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
            <div style={{ width: '250px', height: '250px', marginLeft: 'auto', marginRight: 'auto'}}>
                <CircularProgressbar
                    value={percentage}
                    text={formattedTime}
                    styles={buildStyles({
                        pathColor: '#f9bc60',
                        textColor: 'White',
                        trailColor: '#eee',
                        textSize: '16px',
                    })}
                />
            </div>
            <Button onClick={increaseStepUps} className="mt-4 custom-button">Finish game</Button>
            
        </ContainerCenter>
    );
};
