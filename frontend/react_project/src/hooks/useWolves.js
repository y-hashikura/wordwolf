/**
 * @file useWolves.js
 * @description ウルフ人数選択の状態管理
 * @module useWolfs
 * @example
 * import useWolves from './hooks/useWolves';
 * const { wolves, increasePlayers, decreasePlayers } = useWolves()
 * 作成者：橋倉 佳希
 * 更新者：
 * 更新履歴：
 * 　・初期作成 2024/10/05
 */
import { useState } from 'react';

const useWolves = (initialPlayers = 3) => {
  const [wolves, setWolves] = useState(initialPlayers);

  const increaseWolves = () => setWolves(wolves + 1);
  const decreaseWolves = () => setWolves(Math.max(wolves - 1, 1));

  return { wolves, increaseWolves, decreaseWolves };
};

export default useWolves;