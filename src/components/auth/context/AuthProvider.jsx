import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { aouthReducer } from "./authReducer";
import { types } from "../types/types";


const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return { logged: !!user, user: user };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(aouthReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "abc123", name };
    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logOut = () =>{
    localStorage.removeItem('user');

    const action = {
      type: types.logout
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ login, logOut, ...authState }}>
      {children}
    </AuthContext.Provider>
  );
};
