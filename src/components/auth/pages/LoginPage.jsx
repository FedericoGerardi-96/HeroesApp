import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { H1, LoginButton } from "../../../style/styleComponent/index";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath");

    login("Federico Gerardi");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="row m-0 loginContainer">
      <div className="loginCoverContainer col-12 col-lg-6 p-0">
        <div className="loginCover"></div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="loginButton d-flex align-items-center justify-content-evenly flex-column w-100 h-100">
          <H1 theme={theme} className="display-2">
            Login
          </H1>
          <LoginButton onClick={onLogin}>LogIn</LoginButton>
        </div>
      </div>
    </div>
  );
};
