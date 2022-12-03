import React, { useState, useEffect } from "react";

export default function useKeyPress(targetKey) {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  function handleUp(key) {
    if (key === targetKey) {
      setIsKeyPressed(true);
    }
  }

  function handleDown(key) {
    if (key === targetKey) {
      setIsKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  return [isKeyPressed];
}
