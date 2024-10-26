import React, { useContext } from "react";
import { PlayerNamesContext, WordDataListContext } from "../contexts";
import { CustomButton } from "../components";

export const PlayerWord = (props) => {

    const { playerNames } = useContext(PlayerNamesContext)
    const { wordDataList } = useContext(WordDataListContext)

    return (
        <>
            <h2 style={{ color: 'white' }}>{playerNames[props.CurrentIndex]}さんのお題は{wordDataList[props.CurrentIndex]}です</h2>
            <h2 style={{ color: 'white' }}>確認できましたら次へボタンを押下してください</h2>
            <CustomButton
                text="Next"
                onClick={props.onClick}
            />
        </>
    )
}