import {
  FECHING_DATA,
  FECHING_DATA_FIALURE,
  FECHING_DATA_SUCCESS,
} from "../actions/types";

const initialState = {
  isFetching: false,
  error: false,
  data: {
    pases: { id: "4a870d40-f9e0-4459-9a4c-13789021dsw5", value: 300000 },
    initialFeeMotorcicle: {
      id: "4a870d40-f9e0-4459-9a4c-13789021dsw5",
      value: -1200000,
    },
  },
};

const initialState2 = {
  data: [],
  isFetching: false,
  error: false,
};

const motorcicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FECHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true,
      };

    case FECHING_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };

    case FECHING_DATA_FIALURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
  }
  return state;
};

export default motorcicleReducer;
