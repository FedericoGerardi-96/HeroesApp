import { lightTheme, darkTheme } from "../../../interface/Theme";
import { useState, useEffect } from "react";

const getThemeName = () => {
  return localStorage.getItem("theme") || "dark";
};

const UseTheme = () => {
  const [themeName, setthemeName] = useState(getThemeName);
  const [theme, setTheme] = useState(
    themeName == "light" ? lightTheme : darkTheme
  );
  const themeToggler = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
    theme === lightTheme ? setthemeName("dark") : setthemeName("light");
  };
  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);
  return [theme, themeToggler, themeName];
};

export default UseTheme;
