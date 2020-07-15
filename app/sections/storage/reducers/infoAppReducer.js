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
// data: [
//   {
//     _id: "5f0268c46fe1f89897779d6f",
//     categoria: "A1",
//     value: 160000,
//     description: "Licencia A1",
//     createdAt: "2020-07-05T23:56:52.458Z",
//   },
//   {
//     _id: "5f0268ec6fe1f89897779d70",
//     categoria: "A2",
//     value: 200000,
//     description: "Licencia A2",
//     createdAt: "2020-07-05T23:57:32.530Z",
//   },
//   {
//     _id: "5f026aac6fe1f89897779d71",
//     categoria: "Cuota initial motorcicle",
//     value: -1200000,
//     description: "initialFeeMotorcicle",
//     createdAt: "2020-07-06T00:05:00.496Z",
//   },
// ],

const initialState2 = {
  data: [],
  isFetching: false,
  error: false,
};

const infoAppReducer = (state = initialState, action) => {
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
        infoApp: action.data,
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

export default infoAppReducer;
