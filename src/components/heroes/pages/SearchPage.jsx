import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { H1, H4 } from "../../../style/styleComponent/index";
import { HeroCard } from "../components/index";
import { getHerosByName } from "../helpers/getHeroByName";
import { useForm } from "../../../hook/UseForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export const SearchPage = () => {
  const { theme, setHeroImage, themeName } = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHerosByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const showSearch = q.length === 0;
  const showError = q.length > 0 && heroes.length === 0;

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <H1 theme={theme}>Search Hero</H1>
      <hr />
      <div className="row p-5">
        <div className="col-lg-5 col-12">
          <H4 theme={theme}>Searching</H4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <div className="group">
              <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input
                name="searchText"
                autoComplete="off"
                placeholder="Search Hero"
                type="text"
                className={`input ${themeName}`}
                value={searchText}
                onChange={onInputChange}
              />
              <button type="submit" className={`btnn ${themeName} ms-5`}>
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="result col-lg-7 col-1 mt-5 mt-lg-0">
          <H4 theme={theme}>Results</H4>
          <hr />
          <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            {/* Primer forma de hacerlo */}
            {/* {q === "" ? (
              <div className={`spinner ${themeName}`}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
              </div>
            ) : (
              heroes.length === 0 && (
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <div className={`spinner ${themeName}`}>
                    <span>N</span>
                    <span>O</span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span>R</span>
                    <span>E</span>
                    <span>S</span>
                    <span>U</span>
                    <span>L</span>
                    <span>T</span>
                    <span> </span>
                    <span> </span>
                    <span> </span>
                    <span>W</span>
                    <span>I</span>
                    <span>T</span>
                    <span>H</span>
                  </div>
                  <div className={`spinner ${themeName} mt-4`}>
                    {q.split("").map((leter, index) => {
                      return <span key={index}>{leter.toUpperCase()}</span>;
                    })}
                  </div>
                </div>
              )
            )} */}

            {/* Segunda forma de hacerlo */}
            <div
              className={`${
                showSearch ? "d-flex" : "d-none"
              } align-items-center justify-content-center animate__animated 
              animate__slideInRight`}
            >
              <div className={`spinner ${themeName}`}>
                <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span>
              </div>
            </div>

            <div
              className={`${
                showError ? "d-flex" : "d-none"
              } flex-column align-items-center justify-content-center animate__animated animate__slideInRight`}
            >
              <div className={`spinner ${themeName}`}>
                <span>N</span>
                <span>O</span>
                <span> </span>
                <span> </span>
                <span> </span>
                <span>R</span>
                <span>E</span>
                <span>S</span>
                <span>U</span>
                <span>L</span>
                <span>T</span>
                <span> </span>
                <span> </span>
                <span> </span>
                <span>W</span>
                <span>I</span>
                <span>T</span>
                <span>H</span>
              </div>
              <div className={`spinner ${themeName} mt-4`}>
                {q.split("").map((leter, index) => {
                  return <span key={index}>{leter.toUpperCase()}</span>;
                })}
              </div>
            </div>

            {heroes.map((hero) => {
              return <HeroCard key={hero.id} {...hero}></HeroCard>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
