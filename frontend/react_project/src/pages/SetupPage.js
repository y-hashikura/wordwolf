/**
 * @file SetupPage.js
 * @description
 * - ゲームの初期設定画面を提供
 * - 参加人数、ウルフ人数、トークタイムを提供する。
 * @module SetupPage
 */

import React, { useContext } from 'react';
import { Title, SubTitle, Counter, ContainerCenter, SetupBox, FlexColumn, CustomButton, CustomModal } from '../components'
import { PlayersContext, WolvesContext, TalkTimeContext, StepUpContext } from '../contexts';
import { useState } from 'react';

export const SetupPage = () => {

    // 参加人数の状態管理及び関数を取得
    const { players, increasePlayers, decreasePlayers } = useContext(PlayersContext);
    // ウルフ人数の状態管理及び関数を取得
    const { wolves, increaseWolves, decreaseWolves } = useContext(WolvesContext);
    // トークタイムの状態管理及び関数を取得
    const { talkTime, increaseTalkTime, decreaseTalkTime } = useContext(TalkTimeContext);
    // ページ遷移の関数を取得
    const { increaseStepUps } = useContext(StepUpContext)

    const [show, setShow] = useState(false);
    // モーダルを閉じる関数
    const handleClose = () => setShow(false);
    // モーダルを開く関数
    const handleShow = () => setShow(true);

    return (
        <ContainerCenter>
            <Title />
            <SubTitle/>
            <SetupBox>
                <Counter 
                    title={"How many players are there?"}
                    currentcount={players}
                    decreaseFunction={decreasePlayers}
                    increaseFunction={increasePlayers}
                    unit={"people"}
                />
                <Counter 
                    title={"How many wolves are there?"}
                    currentcount={wolves}
                    decreaseFunction={decreaseWolves}
                    increaseFunction={increaseWolves}
                    unit={"people"}
                />
                <Counter 
                    title={"Talk time?"}
                    currentcount={talkTime}
                    decreaseFunction={decreaseTalkTime}
                    increaseFunction={increaseTalkTime}
                    unit={"minute"}
                />
            </SetupBox>
            <FlexColumn>
                <CustomButton 
                    text="Next" 
                    onClick={increaseStepUps} 
                />
                <CustomButton 
                    text="How to Play" 
                    onClick={handleShow} 
                    className="mt-4 custom-lighter-button" 
                />
                <CustomModal show={show} onClose={handleClose}/>
            </FlexColumn>
      </ContainerCenter>
    );
}