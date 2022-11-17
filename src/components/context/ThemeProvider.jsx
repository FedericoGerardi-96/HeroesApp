import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../../interface/Theme";
import UseTheme from "../navbar/hooks/UseTheme";
import Hero from "../../../assets/hero.jpg";

export const ThemeProvider = ({ children }) => {
  const [theme, themeToggler, themeName] = UseTheme();
  const [heroImage, setheroImage] = useState(Hero);

  const setColorTheme = () => {
    themeToggler();
  };
  const setHeroImage = (img) => {
    setheroImage(img);
  };

  return (
    <ThemeContext.Provider value={{ theme, setColorTheme, themeName, heroImage, setHeroImage }}>
      {children}
    </ThemeContext.Provider>
  );
};
