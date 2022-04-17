import {
  FAIL_USER,
  LOAD_USER,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  CURRENT_USER,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  EDIT_USER,
} from "../Constantes/Users";

const initialState = {
  user: null,
  loadUser: false,
  errors: null,
  isAuth: false,
};
console.log(initialState);
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("isAdmin", payload.user.isAdmin);

      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case LOAD_USER:
      return { ...state, loadUser: true };
    case CURRENT_USER:
      return { ...state, loadUser: false, isAuth: true, user: payload };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { user: null, loadUser: false, errors: null, isAuth: false };
    case GET_USER:
      return { ...state, status: "request send" };
    case GET_USER_SUCCESS:
      return { ...state, status: "success", userList: payload };
    case GET_USER_FAIL:
      return { ...state, status: "fail", errors: payload };
    case EDIT_USER:
      return { ...state, loadUser: false, errors: payload };
    default:
      return state;
  }
};
