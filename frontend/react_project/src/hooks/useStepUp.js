/**
 * @file useStepUp.js
 * @description 画面切替用のカスタムフック
 * @module useStepUp
 * @example
 * 直接扱う場合：import useStepUp from './hooks/useStepUp';
 * 名前付きエクスポート：export {default as useStepUp} from './hooks'
 * @author 橋倉 佳希
 * @updated_by
 * @update_history
 * 　・2024/10/04 初期作成
 */
import React, { useState } from 'react';

const useStepUp = (initialstepUps = 1) => {
  const [stepUps, setstepUps] = useState(initialstepUps);

  const increaseStepUps = () => setstepUps(stepUps + 1);
  const decreaseStepUps = () => setstepUps(Math.max(stepUps - 1, 1));

  return { stepUps, increaseStepUps, decreaseStepUps };
};

export default useStepUp;