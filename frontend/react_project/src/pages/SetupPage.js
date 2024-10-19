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

import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Title, SubTitle, Counter, NextPageButton, ContainerCenter, SetupBox, FlexColumn } from '../components'
import { PlayersContext, WolvesContext, TalkTimeContext } from '../contexts';

export const SetupPage = () => {
    const { players, increasePlayers, decreasePlayers } = useContext(PlayersContext);
    const {wolves, increaseWolves, decreaseWolves } = useContext(WolvesContext);
    const {talkTime, increaseTalkTime, decreaseTalkTime } = useContext(TalkTimeContext);

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
                <NextPageButton />
                <Button className="mt-2" variant="link">View How to Play</Button>
            </FlexColumn>
      </ContainerCenter>
    );
}