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
import { Title, SubTitle, NextPageButton, PreviewPageButton, ContainerCenter } from '../components'
import { PlayerNamesContext } from '../contexts';

// ユーザ名を入力するコンポートネント
const PlayersInputPage = () => {

    // 人数の状態管理を取得
    const { playerNames, updatePlayerName } = useContext(PlayerNamesContext)

    return (
        <ContainerCenter>
            <Title title='プレイヤー名を入力して下さい'/>
            <SubTitle subTitle=''/>
            <div className="setup-box bg-light p-4 rounded">
                <div className="d-flex flex-column">
                {playerNames.map((name, index) => (
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => updatePlayerName(index, e.target.value)}
                        placeholder={`Enter name for player ${index + 1}`}
                    />
                ))}
                    
                </div>
            </div>
            <div className="d-flex flex-column">
                <NextPageButton />
                <PreviewPageButton />
            </div>
      </ContainerCenter>

    );
}
export default PlayersInputPage;