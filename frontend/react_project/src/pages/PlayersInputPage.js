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
import usePlayerValidation from '../hooks/usePlayerValidation';

// ユーザ名を入力するコンポートネント
export const PlayersInputPage = () => {

    // 人数の状態管理を取得
    const { playerNames, updatePlayerName } = useContext(PlayerNamesContext)
    // ページ遷移の関数を取得
    const { increaseStepUps, decreaseStepUps } = useContext(StepUpContext)

    // usePlayerValidation フックを呼び出し、エラーメッセージとバリデーション関数を取得
    const { error, validateInputs } = usePlayerValidation(playerNames);

    const handleNext = () => {
        if (validateInputs()) {
            increaseStepUps(); // 入力が有効な場合、次のステップに進む
        }
    };
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
                        className='custom-input'
                    />
                ))}
                {error && <div className="text-danger">{error}</div>} {/* エラーメッセージの表示 */}
            </SetupBox>
            <FlexColumn>
                <CustomButton 
                    text="Next"
                    onClick={handleNext}
                />
                <CustomButton 
                    text="Preview"
                    onClick={decreaseStepUps}
                />
            </FlexColumn>
      </ContainerCenter>

    );
}