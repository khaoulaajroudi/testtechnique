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
  EDIT_USER_FAIL,
} from "../Constantes/Users";
import axios from "axios";
export const registerUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/users/register", user);
    dispatch({ type: REGISTER_USER, payload: result.data });
    navigate("/Lists");
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const loginUser = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  try {
    const result = await axios.post("/users/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    if (localStorage.getItem("isAdmin") == "true") {
      navigate("/admin");
    } else {
      navigate("/Lists");
    }
  } catch (error) {
    const { errors, msg } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    if (msg) {
      alert(msg);
    }
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USER });
  const options = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    let result = await axios.get("/users/current", options);
    //user
    dispatch({ type: CURRENT_USER, payload: result.data.user });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const getuser = () => async (dispatch) => {
  dispatch({ type: GET_USER });
  try {
    let result = await axios.get("/users/all");
    console.log(result.data.result);
    dispatch({ type: GET_USER_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_USER_FAIL, payload: error.data });
    console.log(error);
  }
};

export const edituser =
  ({ id, showcontact }) =>
  async (dispatch) => {
    try {
      let result = axios.put(`/users/nbr/${id}`, showcontact);
      console.log(id);
      dispatch({ type: EDIT_USER, payload: "cours update" });
      dispatch(getuser());
    } catch (error) {
      dispatch({ type: EDIT_USER_FAIL, payload: error.data });
      console.log(error);
    }
  };

export const logout = () => {
  return {
    type: LOGOUT_USER,
  };
};
