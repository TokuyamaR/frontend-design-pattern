/*
複合パターンとは
1つのタスクを実行するために、関連し合う複数のコンポーネントを作成する
*/

import React from "react";
import ReactDOM from "react-dom";

import ImagesList from "./Images";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <ImagesList />
    </div>
  </React.StrictMode>,
  rootElement
);
