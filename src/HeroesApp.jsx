import { HeroesAppPage } from "./HeroesAppPage";
import { ThemeProvider } from "./components/context";

function HeroesApp() {
  return (
    <ThemeProvider>      
        <HeroesAppPage></HeroesAppPage>
    </ThemeProvider>
  );
}

export default HeroesApp;
