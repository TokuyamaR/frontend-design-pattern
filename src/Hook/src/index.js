/*
フックパターンとは
関数を利用することで、アプリケーション内の複数のコンポーネントでステートフルなロジックを再利用できる
*/

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import Input from "./Input.js";

const rootElement = document.getElementById("root");
ReactDOM.render(<Input />, rootElement);
