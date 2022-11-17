import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../components/heroes/index";
import { LoginPage } from "../components/auth";
import { PrivateRout } from "./PrivateRout";
import { PublicRout } from "./PublicRout";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login/*"
          element={
            <PublicRout>
              <Routes>
                <Route path="/*" element={<LoginPage />} /> //Otra forma de hacerlo
              </Routes>
            </PublicRout>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRout>
              <HeroesRoutes />
            </PrivateRout>
          }
        />
      </Routes>
    </>
  );
};
