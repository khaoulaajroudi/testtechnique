import {
  GET_CONTACT_SUCCESS,
  GET_CONTACT,
  GET_CONTACT_FAIL,
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  EDIT_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  LOAD_CONTACT,
} from "../Constantes/Contact";
import axios from "axios";

export const getcontact = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT });
  try {
    let result = await axios.get("/contact/all");
    console.log(result.data.result);
    dispatch({ type: GET_CONTACT_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.data });
    console.log(error);
  }
};

export const addcontact = (newcontact) => async (dispatch) => {
  try {
    let result = axios.post("/contact/add", newcontact);
    dispatch({ type: ADD_CONTACT, payload: "contact added" });
    dispatch(getcontact());
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.data });
    console.log(error);
  }
};

export const editcontact =
  ({ id, contact }) =>
  async (dispatch) => {
    dispatch({ type: EDIT_CONTACT });
    try {
      const result = await axios.put(`/contact/${id}`, contact);
      dispatch({ type: LOAD_CONTACT, payload: result });
    } catch (error) {
      const { errors } = error.response.data;
      console.log(errors);
    }
  };

export const deletecontact =
  ({ id }) =>
  async (dispatch) => {
    try {
      let result = await axios.delete(`/contact/${id}`);
      dispatch({ type: DELETE_CONTACT });
      dispatch(getcontact());
    } catch (error) {
      dispatch({ type: DELETE_CONTACT_FAIL, payload: error.data });
    }
  };
