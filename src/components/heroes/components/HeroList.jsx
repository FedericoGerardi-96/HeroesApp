import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./index";
import 'animate.css';

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(()=> getHeroesByPublisher(publisher),[publisher]) ; // Entre corchete va lo que tiene que cambiar para que se dispare la funcion
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 align-items-center justify-content-center animate__animated animate__fadeIn">
      {heroes.map((hero) => {
        // Le mando todas las props de hero con el ...
        return <HeroCard key={hero.id} {...hero}></HeroCard>;
      })}
    </div>
  );
};
