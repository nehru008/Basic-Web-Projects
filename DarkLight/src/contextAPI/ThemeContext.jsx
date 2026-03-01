import { createContext, useState } from "react";

export const ThemeContextData = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContextData.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContextData.Provider>
  );
};

export default ThemeContext;
