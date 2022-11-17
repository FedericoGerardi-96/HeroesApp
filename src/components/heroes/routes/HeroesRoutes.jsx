import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage, HereoPage } from "../index";
import { HeroImage } from "../../../style/styleComponent/index";
import { NavBar } from "../../../components/navbar/index";
import { ThemeContext } from "../../context/ThemeContext";
export const HeroesRoutes = () => {
  const { theme, heroImage, setheroImage } = useContext(ThemeContext);
  return (
    <>
      <NavBar></NavBar>
      <main>
        <div className="container-fluid">
          <HeroImage heroImage={heroImage} theme={theme}></HeroImage>
        </div>
        <div className="container pt-5">
          <Routes>
            <Route path="marvel" element={<MarvelPage />} />
            <Route path="dc" element={<DcPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:id" element={<HereoPage />} />
            <Route path="/" element={<MarvelPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
};
