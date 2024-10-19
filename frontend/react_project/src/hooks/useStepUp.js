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
import React, { useState, useEffect } from 'react';

const useStepUp = (initialstepUps = 1) => {
  const [stepUps, setstepUps] = useState(initialstepUps);

  const increaseStepUps = () => setstepUps((prevstepUps) => prevstepUps + 1);
  const decreaseStepUps = () => setstepUps((prevstepUps) => Math.max(prevstepUps - 1, 1));

  const setStepUpsTo = (value) => setstepUps(value);

  return { stepUps, increaseStepUps, decreaseStepUps, setStepUpsTo};
};

export default useStepUp;