// App.jsの立ち位置について
// 基本的にルーティングやアプリ全体構造を定義するファイルである
// ルーティングするといういみではdjangoのurls.pyとほぼ一緒の役割を果たす。
// そのほかにグローバルな状態管理や全ページ共通なフッタやヘッダの部分を定義しておくことがおおいかもね




// react自身を扱うためimportが必要。ver17以降は省略可能だがフックとかを使うなら依然必要なので、基本書いておけばいい
// useStateはreactのフックという機能の一つで、状態を管理するためのもの
import React, { useState } from 'react';
// React-Bootstrapは、BootstrapのスタイルをReactで簡単に使えるようにしたもの
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

// GameSetupはコンポーネント名。他のファイルからはこれを指定して呼び出される。
// GameSetupというコンポーネントが定数として定義されている
// () => {}はアロー関数と呼ばれるものでjsのfuncition()とほぼ同義。thisの扱いが異なる
// const 関数名 = (引数) => {処理} {}で囲う場合は明示的にreturnを記載する。記載しない場合はなにも返されない。
const App = () => {
  // useStateは、関数コンポーネントにおいて状態を持たせるために使われるReactの機能
  // useStateはコンポーネントが持つ状態を管理するためのもの
  // const [現在の状態を保持, 状態を更新するための関数] = useState(初期値);
  // 状態はコンポーネントが再描画されるたびに変わる可能性があるデータ
  // playersという、いわば変数みたいなものの状態を変化させるためにはsetPlayesという関数を使って更新する必要がある。
  // set○○というのはreactの標準的な命名規則なだけで当然自分の任意の名前でもいいんだけど、基本はsetらしい。
  const [players, setPlayers] = useState(3);
  const [wolves, setWolves] = useState(1);
  const [talkTime, setTalkTime] = useState(3);


  // 下記もアロー関数で、 {}で囲っていない。これは明示的にreturnする必要はない。基本1行で書く場合はこれを使用するのが主流
  // 端的に複数の処理を行う必要がある場合は{}で囲って、1行で完結できるときは下記のように{}で囲わないでいい。
  const increasePlayers = () => setPlayers(players + 1);
  const decreasePlayers = () => setPlayers(Math.max(players - 1, 1));

  const increaseWolves = () => setWolves(wolves + 1);
  const decreaseWolves = () => setWolves(Math.max(wolves - 1, 1));

  const increaseTalkTime = () => setTalkTime(talkTime + 1);
  const decreaseTalkTime = () => setTalkTime(Math.max(talkTime - 1, 1));

  return (
    // 通常htmlとかの場合はclassだけど、classNameという書き方をするらしいけど使っている意味合いはほぼ同じ
    <Container className="text-center" style={{ maxWidth: '400px', marginTop: '50px' }}>
      <h1>エロウルフ</h1>
      <p>～ちょっとエッチな推理ゲーム～</p>
      <div className="setup-box bg-light p-4 rounded">
        <Row className="my-3">
          <Col>プレイヤーの人数は？</Col>
          <Col>
          {/* 動的な変数を使う場合は下記のように{}で囲う必要があるようだ */}
          {/* ボタン押下時に下記イベントが呼び出されて、状態変化関数が実行され状態の変更が行われる */}
            <Button onClick={decreasePlayers}>−</Button>
            <span className="mx-2">{players} 人</span>
            <Button onClick={increasePlayers}>＋</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>エロウルフの人数は？</Col>
          <Col>
            <Button onClick={decreaseWolves}>−</Button>
            <span className="mx-2">{wolves} 人</span>
            <Button onClick={increaseWolves}>＋</Button>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>トークタイム？</Col>
          <Col>
            <Button onClick={decreaseTalkTime}>−</Button>
            <span className="mx-2">{talkTime} 分</span>
            <Button onClick={increaseTalkTime}>＋</Button>
          </Col>
        </Row>
      </div>
      <Button className="mt-4" variant="primary">次へ</Button>
      <Button className="mt-2" variant="link">遊び方を見る</Button>
    </Container>
  );
}
// Reactのコンポーネントを他のファイルやモジュールで使えるようにするには、エクスポートが必要。
// exportを使うことで、このコンポーネントを他のファイルでインポートして再利用できる。
// 他のファイルでこのコンポーネントを扱う場合、import GameSetup from './App'と記載する
export default App;