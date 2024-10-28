/**
 * @file useTalkTime.js
 * @description ウルフ人数選択の状態管理
 * @module useWolfs
 * @example
 * import useTalkTime from './hooks/useTalkTime';
 * const { talkTime, increaseTalkTime, decreaseTalkTime } = useTalkTime()
 * 作成者：橋倉 佳希
 * 更新者：
 * 更新履歴：
 * 　・初期作成 2024/10/05
 */
import { useState } from 'react';

const useTalkTime = (initialPlayers = 3) => {
  const [talkTime, setTalkTime] = useState(initialPlayers);

  const increaseTalkTime = () => setTalkTime(talkTime + 1);
  const decreaseTalkTime = () => setTalkTime(Math.max(talkTime - 1, 1));

  return { talkTime, increaseTalkTime, decreaseTalkTime };
};

export default useTalkTime;