import {
  CREATE_NEW_USER,
  FECHING_DATA,
  FECHING_DATA_FIALURE,
  FECHING_DATA_SUCCESS,
  CHANGE_LANGUAGE,
  UPDATE_USER,
} from "../actions/types";

const initialState = {
  isFetching: false,
  error: false,
  data: {
    id: "0f283503-e43d-4ffd-8dfe-50f5ec503c02",
    name: "Mateo Marquez",
    phone: 3101112222,
    document: 1133887766,
    email: "mateo.marquez@email.com",
    password: "12345",
    balanceTotal: "480000",
    investments: [
      {
        id: "20703594-36ff-4420-a7cd-61c8c150d3ad",
        date: "2020-06-24T04:02:36.592Z",
        amount: "100000",
        numberDays: "120",
        profitability: "0.048",
        balance: "108000",
        active: "true",
      },
      {
        id: "81312b46-77a1-49ac-9124-53300f49611f",
        date: "2020-05-24T04:02:36.592Z",
        amount: "200000",
        numberDays: "30",
        profitability: "0.03",
        balance: "205000",
        active: "true",
      },
      {
        id: "eab0c4e3-c6bc-4e57-9e57-b6d57d2f570f",
        date: "2020-04-24T04:02:36.592Z",
        amount: "100000",
        numberDays: "30",
        profitability: "0.03",
        balance: "101000",
        active: "true",
      },
    ],
    removeMoney: [
      {
        id: "eab0c4e3-c6bc-4e57-9e57-b6d57d2f570f",
        dateStart: "2020-04-24T04:02:36.592Z",
        dateEnd: "2020-06-24T04:02:36.592Z",
        amount: "100000",
        numberDays: "30",
        profitability: "1.03",
        balance: "101000",
        active: "true",
      },
      {
        id: "easwc4e3-c6bc-4e57-9e57-b6d57d2f570f",
        dateStart: "2020-05-24T04:02:36.592Z",
        dateEnd: "2020-06-24T04:02:36.592Z",
        amount: "100100",
        numberDays: "30",
        profitability: "1.03",
        balance: "102000",
        active: "true",
      },
    ],
  },
};

const initialState2 = {
  data: [],
  isFetching: false,
  error: false,
};

const reducerProfile = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return Object.assign({}, state, {
        name: action.name,
        document: action.document,
        phone: action.phone,
        email: action.email,
        password: action.password,
      });

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

    case CHANGE_LANGUAGE:
      return {
        ...state,
        data: Object.assign({}, state.data, {
          language: action.language,
        }),
      };

    case UPDATE_USER:
      return {
        ...state,
        data: Object.assign({}, state.data, {
          name: action.name,
          document: parseInt(action.document),
          phone: parseInt(action.phone),
        }),
      };
  }

  return state;
};

export default reducerProfile;
