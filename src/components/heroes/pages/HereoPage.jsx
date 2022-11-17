import { useMemo } from "react";
import { useContext, useEffect } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { H1 } from "../../../style/styleComponent/index";
import { ThemeContext } from "../../context/ThemeContext";
import { getHeroById } from "../helpers/index";
import "animate.css";

export const HereoPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]); // Para que la funcion solo se vuelva a dispara cuando cambie el ID, y no siempre que se renderice
  const { theme, setHeroImage, themeName } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    const heroImageUrl = `/assets/${id}.jpg`;
    setHeroImage(heroImageUrl);
  }, []);

  const onNavigateBack = () => {
    // navigate(`/${id.split("-")[0]}`);
    navigate(-1); //Volver a la pagina anterior
  };

  const setListClass = () => {
    return themeName == "dark" ? "gradient-list-dark" : "gradient-list";
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <div className="row mt-5 pb-5">
      <div className="col-4">
        <img
          src={`/assets/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__zoomIn"
        ></img>
      </div>
      <div className="col-8">
        <H1 theme={theme}>{hero.superhero}</H1>
        <ol className={setListClass()}>
          <li className="animate__animated animate__slideInRight animate1">
            <b>Super Hero: </b>
            {hero.superhero}
          </li>
          <li className="animate__animated animate__slideInRight animate2">
            <b>Alter Ego: </b>
            {hero.alter_ego}
          </li>
          <li className="animate__animated animate__slideInRight animate3">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="animate__animated animate__slideInRight animate4">
            <b>First appearence: </b>
            {hero.first_appearance}
          </li>
          <li className="animate__animated animate__slideInRight animate5">
            <b>Characters: </b>
            {hero.characters}
          </li>
          <div className="mt-5 d-flex align-items-center justify-content-center">
            <button
              onClick={onNavigateBack}
              className="shadow__btn animate__animated animate__pulse"
            >
              Go back...
            </button>
          </div>
        </ol>
      </div>
    </div>
  );
};
