/**
 * @file usePlayers.js
 * @description 参加人数選択の状態管理
 * @module usePlayers
 * @example
 * import usePlayers from './hooks/usePlayers';
 * const { players, increasePlayers, decreasePlayers } = usePlayers()
 * 作成者：橋倉 佳希
 * 更新者：
 * 更新履歴：
 * 　・初期作成 2024/10/05
 */
import { useState } from 'react';

// 他コンポーネントで扱えるようにもするために人数は可変できるように引数設定(現状は一つの画面のみ使用)
const usePlayers = (initialPlayers = 3) => {
  const [players, setPlayers] = useState(initialPlayers);

  const increasePlayers = () => setPlayers(players + 1);
  const decreasePlayers = () => setPlayers(Math.max(players - 1, 1));

  return { players, increasePlayers, decreasePlayers };
};

export default usePlayers;