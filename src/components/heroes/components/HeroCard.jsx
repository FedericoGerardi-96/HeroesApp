import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Card, Img, Info, SPAN, P } from "../../../style/styleComponent/index";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const { theme } = useContext(ThemeContext);
  const heroImageUrl = `./assets/${id}.jpg`;
  return (
    <>
      <Card theme={theme} className="m-3 p-3">
        <Img theme={theme} className="img">
          <img
            className="rounded w-100 h-100"
            src={heroImageUrl}
            alt={superhero}
          />
        </Img>
        <Info theme={theme} className="info">
          <SPAN theme={theme}>{superhero}</SPAN>
          <P theme={theme}>{alter_ego}</P>
          {/* { 
            (alter_ego !== characters) && (<P theme={theme}>{characters}</P>)
          } */}
        </Info>
        <Link to={`/hero/${id}`} className="cardButton">Mas info...</Link>
      </Card>
    </>
  );
};
