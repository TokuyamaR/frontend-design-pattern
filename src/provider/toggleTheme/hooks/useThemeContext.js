import ThemeContext from "../";

function useThemeContext() {
  const theme = useContext(ThemeContext);
  return theme;
}
