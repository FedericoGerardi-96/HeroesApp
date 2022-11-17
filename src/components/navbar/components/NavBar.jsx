import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {
  HamburgerIcon,
  Icon1,
  Icon2,
  Icon3,
  Clear,
  Switchs,
  Checkbox,
  Slider,
  Nav,
  TittleNav,
  LoginButton,
} from "../../../style/styleComponent/index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/Logo.svg";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const { theme, setColorTheme, themeName } = useContext(ThemeContext);
  const [humburgerState, sethumburgerState] = useState(false);
  const [checkState, setcheckState] = useState(false);
  const { logOut } = useContext(AuthContext);
  useEffect(() => {
    var checkBox1 = document.getElementById("check1");
    if (themeName === "dark") {
      setcheckState(false);
      checkBox1.checked = false;
    } else {
      setcheckState(true);
      checkBox1.checked = true;
    }
  }, []);

  const setTheme = () => {
    checkState === true ? setcheckState(false) : setcheckState(true);
    setColorTheme();
  };

  const onLogOut = () => {
    logOut();
    navigate("/login", {
      replace: true, //reemplaza el historial para que uno no pueda volver para atras en la navegacion
    });
  };

  return (
    <Nav theme={theme} className="navbar navbar-expand-xl pb-2 pt-2">
      <input id="checkBox" type="checkbox" className="invisible"></input>
      <div className="container-fluid align-items-center justify-content-around justify-content-xl-between">
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center">
          <NavLink className="navbar-brand" to="/">
            <img className="img-fluid mx-3 logo" src={Logo}></img>
          </NavLink>
          <TittleNav className="NavTittle d-none d-sm-block" theme={theme}>
            Heroes App
          </TittleNav>
        </div>
        <div className="d-flex flex-row align-items-center justify-content-center flex-wrap">
          <HamburgerIcon
            onClick={() => sethumburgerState((current) => !current)}
            className="hamburger-icon mx-5 d-block d-xl-none"
            id="icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Icon1
              humburgerState={humburgerState}
              className="icon-1"
              id="a"
            ></Icon1>
            <Icon2
              humburgerState={humburgerState}
              className="icon-2"
              id="b"
            ></Icon2>
            <Icon3
              humburgerState={humburgerState}
              className="icon-3"
              id="c"
            ></Icon3>
            <Clear className="clear"></Clear>
          </HamburgerIcon>
        </div>
        <div
          className="collapse navbar-collapse justify-content-evenly align-items-center"
          id="navbarNav"
        >
          <ul className="navbar-nav justify-content-center align-items-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link navlink ${isActive ? "active" : ""} px-4`
                }
                to="/marvel"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link navlink ${isActive ? "active" : ""} px-4`
                }
                to="/dc"
              >
                Dc
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link navlink ${isActive ? "active" : ""} px-4`
                }
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="switchLogInbtn d-flex flex-row align-items-center justify-content-center justify-content-xl-evenly">
            <Switchs className="mx-5">
              <Checkbox
                id="check1"
                type="checkbox"
                onClick={setTheme}
              ></Checkbox>
              <Slider></Slider>
            </Switchs>
            <LoginButton onClick={onLogOut}>LogOut</LoginButton>
          </div>
        </div>
      </div>
    </Nav>
  );
};
