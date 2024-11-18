/**
 * @file TalkEndPage.js
 * @description トーク終了画面のページコンポーネント
 * @module TalkEndPage
 * @example
 * 直接扱う場合：import TalkEndPage from './pages/TalkEndPage';
 * エントリーポイントから取得：import { TaloEndPage } from './pages'
 */

import React, { useContext, useEffect }from "react";
import { ContainerCenter, CustomButton, SetupBox, Title } from "../components";
import { StepUpContext } from "../contexts";


export const TalkEndPage = () => {

    // 次ページ遷移用の関数取得
    const { increaseStepUps } = useContext(StepUpContext)


    return (
        <ContainerCenter>
            <Title title="Talk End"/>
            <SetupBox>
                <p>Done!!</p>
            </SetupBox>
            <CustomButton
                text="check the result"
                onClick={increaseStepUps}
            />
        </ContainerCenter>
    )
}