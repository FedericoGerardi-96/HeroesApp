import { useContext, useEffect } from "react";
import { H1 } from "../../../style/styleComponent/index";
import { ThemeContext } from "../../context/ThemeContext";
import { HeroList } from "../components/HeroList";
import Hero from "../../../../assets/images/hero.jpg";

export const MarvelPage = () => {
  const { theme, setHeroImage } = useContext(ThemeContext);  

  useEffect(() => {
    setHeroImage(Hero);
  }, [])
  const publisher = "Marvel Comics";
  return (
    <>
      <H1 theme={theme}>Marvel Heroes</H1>
      <hr />
      <HeroList publisher={publisher}></HeroList>

    </>
  );
};
