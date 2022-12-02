/*
レンダープロップパターンとは
propsを通じてJSX要素をコンポーネントに渡す
*/

import React from "react";
import { render } from "react-dom";

import "./style.css";

const Title = (props) => props.render();

render(
  <div className="App">
    <Title render={() => <h1>😎First render prop!😎</h1>} />
    <Title render={() => <h2>😭Second render prop!😭</h2>} />
    <Title render={() => <h3>😇Third render prop!😇</h3>} />
  </div>,
  document.getElementById("root")
);
