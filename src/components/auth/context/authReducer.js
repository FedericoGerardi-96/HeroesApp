import { types } from "../types/types";

const initialState = {
  logged: false,
};

export const aouthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state, //Para que si se le agregan mas cosas al state, se agrega todo lo que tenga, y solo se modifica lo que quiero
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
