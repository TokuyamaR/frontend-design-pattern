/*
フックパターンとは
関数を利用することで、アプリケーション内の複数のコンポーネントでステートフルなロジックを再利用できる
*/

import React, { useState, useEffect } from "react";
import { useKeyPress } from "./useKeyPress";

export default function Input() {
  const [input, setInput] = useState("");
  const pressQ = useKeyPress("q");

  useEffect(() => {
    console.log("User pressed Q");
  }, [pressQ]);

  return (
    <input
      onChange={(e) => setInput(e.target.value)}
      value={input}
      placeholder="input something..."
    />
  );
}
