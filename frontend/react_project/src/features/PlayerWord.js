import React, { useContext } from "react";
import { PlayerNamesContext } from "../contexts";
import { CustomButton } from "../components";

export const PlayerWord = (props) => {

    const { playerNames } = useContext(PlayerNamesContext)

    return (
        <>
            <h2>{playerNames[props.CurrentIndex]}さんのお題は○○です</h2>
            <h2>確認できましたら次へボタンを押下してください</h2>
            <CustomButton
                text="Next"
                onClick={props.onClick}
            />
        </>
    )
}