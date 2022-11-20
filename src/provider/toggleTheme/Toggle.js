import React, { useContext } from "react";
import { ThemeContext } from ".";

export default function Toggle() {
  const theme = useContext(ThemeContext);
  return (
    <label>
      <input type="checkbox" onclick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  );
}
