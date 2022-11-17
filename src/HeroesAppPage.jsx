import { useContext } from "react";
import { ThemeContext } from "./components/context/ThemeContext";
import { Box } from "./style/styleComponent/index";
import { AppRouter } from "./routers/AppRouter";
import { AuthProvider } from "./components/auth";

export const HeroesAppPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box theme={theme}>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Box>
  );
};
