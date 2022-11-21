////////////////////////////////////////////////////////
// Providerパターン
// ユースケース1:UIテーマのstateを複数のコンポーネントで共有する
////////////////////////////////////////////////////////
import React from "react";
import "./style.css";
import List from "./List";
import Toggle from "./Toggle";

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

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return (
    <ThemeContext.provider value={providerValue}>
      {children}
    </ThemeContext.provider>
  );
};

export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}
