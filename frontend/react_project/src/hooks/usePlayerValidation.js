import { useState } from 'react';

// プレイヤー名の入力に関するバリデーションロジックとエラーメッセージの状態管理
const usePlayerValidation = (playerNames) => {
    const [error, setError] = useState('');

    // バリデーションチェックを行う関数
    const validateInputs = () => {
        for (const name of playerNames) {
            if (!name) {
                setError('Please enter all player names.'); // エラーメッセージを設定
                return false;
            }
        }
        setError(''); // エラーがなければエラーメッセージをクリア
        return true;
    };

    return { error, validateInputs };
};

export default usePlayerValidation;
