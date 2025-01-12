import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, useMemo, useState} from "react";

const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.NORMAL
  );

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
      <ThemeContext.Provider value={defaultProps}>
        {children}
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;
