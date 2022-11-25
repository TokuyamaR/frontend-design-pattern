import ThemeContext from "..";

export default function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useThemeContextがThemeProvider内で利用されていません。");
  }
  return theme;
}
