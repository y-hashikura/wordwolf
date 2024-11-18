import React, { useContext } from "react";
import { PlayerNamesContext, WordDataListContext } from "../contexts";
import { CustomButton } from "../components";

export const PlayerWord = (props) => {

    const { playerNames } = useContext(PlayerNamesContext)
    const { wordDataList } = useContext(WordDataListContext)

    return (
        <>
            <h2 style={{ color: 'white' }}>{playerNames[props.CurrentIndex]}, Your topic is <br/>"{wordDataList[props.CurrentIndex]}".</h2>
            <h2 style={{ color: 'white' }}>Remember your topic and press "Next".</h2>
            <CustomButton
                text="Next"
                onClick={props.onClick}
            />
        </>
    )
}