/*
High Order Componentとは
アプリケーションで共通の処理をpropsを通してコンポーネントに渡す
*/

import React from "react";
import { render } from "react-dom";

import DogImages from "./DogImages";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>
        Browse Dog Images{" "}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  );
}

render(<App />, document.getElementById("root"));
