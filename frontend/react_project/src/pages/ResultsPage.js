/**
 * @file ResultsPage.js
 * @description トーク終了画面のページコンポーネント
 * @module ResultsPage
 * @example
 * 直接扱う場合：import ResultsPage from './pages/ResultsPage';
 * エントリーポイントから取得：import { ResultsPage } from './pages'
 */

import React, { useContext } from "react";
import { ContainerCenter, Title, CustomButton, SetupBox, FlexColumn, ResultText } from "../components";
import { StepUpContext, PlayerNamesContext, WordDataListContext } from "../contexts";


export const ResultsPage = () => {

    const { setStepUpsTo } = useContext(StepUpContext)
    const { playerNames } = useContext(PlayerNamesContext)
    const { wordDataList } = useContext(WordDataListContext)

    return (
        <ContainerCenter>
            <Title title="Result"/>
            <SetupBox>
                <ResultText players={playerNames} words={wordDataList}/>
            </SetupBox>
            <FlexColumn>
                <CustomButton 
                    text="Go to TOP"
                    onClick={() => setStepUpsTo(1)}
                />
                <CustomButton 
                    text="Next game"
                    onClick={() => setStepUpsTo(3)}
                />
            </FlexColumn>
        </ContainerCenter>
    )
}