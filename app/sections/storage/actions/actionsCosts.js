import {
  FECHING_DATA,
  FECHING_DATA_SUCCESS,
  FECHING_DATA_FIALURE,
} from "./types";
import getDataApi from "../../api/getDataApp";

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
