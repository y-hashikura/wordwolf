/**
 * @file ResultsPage.js
 * @description トーク終了画面のページコンポーネント
 * @module ResultsPage
 * @example
 * 直接扱う場合：import ResultsPage from './pages/ResultsPage';
 * エントリーポイントから取得：import { ResultsPage } from './pages'
 */

import React, { useContext } from "react";
import { ContainerCenter, Title, CustomButton, SetupBox, FlexColumn } from "../components";
import { StepUpContext } from "../contexts";


export const ResultsPage = () => {

    const { setStepUpsTo } = useContext(StepUpContext)

    return (
        <ContainerCenter>
            <Title title="結果発表画面"/>
            <SetupBox>
                <p>結果発表画面だよお</p>
            </SetupBox>
            <FlexColumn>
                <CustomButton 
                    text="TOPへ戻る"
                    onClick={() => setStepUpsTo(1)}
                />
                <CustomButton 
                    text="次のゲームへ"
                    onClick={() => setStepUpsTo(3)}
                />
            </FlexColumn>
        </ContainerCenter>
    )
}