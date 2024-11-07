import React, { useContext } from "react";
import { ContainerCenter, CustomButton } from "../components";
import { StepUpContext } from "../contexts";


export const ConfirmationCompletePage = () => {

    const { increaseStepUps } = useContext(StepUpContext)

    return (
        <ContainerCenter>
            <h2 style={{ color: 'white' }}>All players checked topics.</h2>
            <p style={{ color: 'white' }}>Are you guys ready to play?</p>
            <CustomButton text="Yes" onClick={increaseStepUps}/>
        </ContainerCenter>
    )
}