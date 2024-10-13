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

const usePlayers = (initialPlayers = 3) => {

  // 参加プレイヤー人数の状態を管理。初期値としてinitialPlayersが設定される。
  const [players, setPlayers] = useState(initialPlayers);

  // 参加プレイヤーの人数を1増やす関数。
  const increasePlayers = () => setPlayers((playerCount) => playerCount + 1);

  // 参加プレイヤーの人数を1減らす関数
  const decreasePlayers = () => setPlayers((playerCount) => Math.max(playerCount - 1, 1));

  return { players, increasePlayers, decreasePlayers };
  
};

export default usePlayers;