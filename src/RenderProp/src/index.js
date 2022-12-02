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
    <Title
      render={() => (
        <h1>
          <span role="img" aria-label="emoji">
            😎
          </span>
          I am a render prop!{" "}
          <span role="img" aria-label="emoji">
            😎
          </span>
        </h1>
      )}
    />
  </div>,
  document.getElementById("root")
);
