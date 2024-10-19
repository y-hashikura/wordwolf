/**
 * @file PlayersInputPage.js
 * @description 状態管理の人数に基づいて各種プレイヤー名を入力するコンポーネント
 * @module PlayersInputPage
 * @example
 * 直接扱う場合：import PlayersInputPage from './pages/PlayersInputPage';
 * 名前付きエクスポート：export {default as PlayersInputPage} from './pages'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */
import React, { useContext } from 'react';
import { Title, ContainerCenter, SetupBox, FlexColumn, CustomButton } from '../components'
import { PlayerNamesContext, StepUpContext } from '../contexts';

// ユーザ名を入力するコンポートネント
export const PlayersInputPage = () => {

    // 人数の状態管理を取得
    const { playerNames, updatePlayerName } = useContext(PlayerNamesContext)
    // ページ遷移の関数を取得
    const { increaseStepUps, decreaseStepUps } = useContext(StepUpContext)

    return (
        <ContainerCenter>
            <Title title='Please enter the player name'/>
            <SetupBox>
                {playerNames.map((name, index) => (
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => updatePlayerName(index, e.target.value)}
                        placeholder={`Enter name for player ${index + 1}`}
                    />
                ))}
            </SetupBox>
            <FlexColumn>
                <CustomButton 
                    text="Next"
                    onClick={increaseStepUps}
                />
                <CustomButton 
                    text="Preview"
                    onClick={decreaseStepUps}
                />
            </FlexColumn>
      </ContainerCenter>

    );
}