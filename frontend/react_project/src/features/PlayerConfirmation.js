import React, { useContext } from "react";
import { ContainerCenter, CustomButton } from "../components";
import { PlayerNamesContext } from "../contexts"

export const PlayerConfirmation = (props) => {

    const { playerNames } = useContext(PlayerNamesContext)

    return (
        <ContainerCenter>
            <h2>{playerNames[props.CurrentIndex]}さんですか？</h2>
            <CustomButton text="OK" onClick={props.onClick} />
        </ContainerCenter>
    )
}