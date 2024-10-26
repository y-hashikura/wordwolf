import React, { useContext } from "react";
import { ContainerCenter, CustomButton } from "../components";
import { StepUpContext } from "../contexts";


export const ConfirmationCompletePage = () => {

    const { increaseStepUps } = useContext(StepUpContext)

    return (
        <ContainerCenter>
            <h2 style={{ color: 'white' }}>すべてのプレイヤーの確認が完了しました</h2>
            <p style={{ color: 'white' }}>ゲームの準備ができました！</p>
            <CustomButton text="Next" onClick={increaseStepUps}/>
        </ContainerCenter>
    )
}