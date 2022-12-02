/*
レンダープロップパターンとは
propsを通じてJSX要素をコンポーネントに渡す
*/

import React from "react";
import { render } from "react-dom";

import "./style.css";

const Title = (props) => (
  <>
    {props.renderFirstComponent()}
    {props.renderSecondComponent()}
    {props.renderThirdComponent()}
  </>
);

render(
  <div className="App">
    <Title
      renderFirstComponent={() => <h1>😎First render prop!😎</h1>}
      renderSecondComponent={() => <h2>😭Second render prop!😭</h2>}
      renderThirdComponent={() => <h3>😇Third render prop!😇</h3>}
    />
  </div>,
  document.getElementById("root")
);
