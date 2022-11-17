import { useContext, useEffect } from "react";
import { H1 } from "../../../style/styleComponent/index";
import { ThemeContext } from "../../context/ThemeContext";
import { HeroList } from "../components";
import Hero from "../../../../assets/images/hero.jpg";

export const DcPage = () => {
  const { theme, setHeroImage } = useContext(ThemeContext);

  useEffect(() => {
    setHeroImage(Hero);
  }, []);
  const publisher = "DC Comics";

  return (
    <>
      <H1 theme={theme}>DC Heroes</H1>
      <hr />
      <HeroList publisher={publisher}></HeroList>
    </>
  );
};
