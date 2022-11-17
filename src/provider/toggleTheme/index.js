////////////////////////////////////////////////////////
// Providerパターン
// ユースケース1:UIテーマのstateを複数のコンポーネントで共有する
////////////////////////////////////////////////////////
import React from "react";
import "./style.css";
import List from "./List";

export const ThemeContext = createContext();

const themes = {
  light: {
    background: "#fff",
    color: "#000",
  },
  dark: {
    background: "#171717",
    color: "#fff",
  },
};

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };
  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.provider value={providerValue}>
        <List />
      </ThemeContext.provider>
    </div>
  );
}
