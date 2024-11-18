import React, { useContext } from "react";
import { ContainerCenter, CustomButton } from "../components";
import { PlayerNamesContext } from "../contexts"

export const PlayerConfirmation = (props) => {

    const { playerNames } = useContext(PlayerNamesContext)

    return (
        <ContainerCenter>
            <h2 style={{ color: 'white' }}>Are you {playerNames[props.CurrentIndex]} ?</h2>
            <CustomButton text="Yes" onClick={props.onClick} />
        </ContainerCenter>
    )
}