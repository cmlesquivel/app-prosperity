import {
  CREATE_NEW_USER,
  FECHING_DATA,
  FECHING_DATA_SUCCESS,
  FECHING_DATA_FIALURE,
  CHANGE_LANGUAGE,
  UPDATE_USER,
} from "./types";
import getDataApi from "../../api/apiProfile";

export const createNewUser = (name, document, phone, email, password) => ({
  type: CREATE_NEW_USER,
  name: name,
  document: document,
  phone: phone,
  email: email,
  password: password,
});

export const updateUser = (name, document, phone) => ({
  type: UPDATE_USER,
  name: name,
  document: document,
  phone: phone,
});

export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  language: language,
});

export const getData = () => ({
  type: FECHING_DATA,
});

export const getDataSuccess = (data) => ({
  type: FECHING_DATA_SUCCESS,
  data,
});

export const getDataFailure = () => ({
  type: FECHING_DATA_FIALURE,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(getData());
    getDataApi()
      .then(([response, json]) => {
        dispatch(getDataSuccess(json));
      })
      .catch((err) => console.log(err));
  };
};
