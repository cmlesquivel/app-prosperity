import {
  CREATE_NEW_USER,
  FECHING_DATA,
  FECHING_DATA_FIALURE,
  CHANGE_LANGUAGE,
  UPDATE_USER,
  AUTHENTICATE_SUCCESS,
  PROFILE_SUCCESS,
  INVESTMENT_SUCCESS,
  BALANCE_TOTAL_SUCCESS,
  FECHING_DATA_PROFILE_SUCCESS,
  FECHING_DATA_APP_SUCCESS,
  FECHING_MOTORCICLES_SUCCESS,
  SET_MESSAGE_REGISTER,
  IS_RAPPI_TENDERO_SUCCESS,
  PROFILE_RAPPI_TENDERO_SUCCESS,
  GET_DATA_CREDIT_SUCCESS,
  PAYMENT_SUCCESS,
  PAGO_TOTAL_SUCCESS,
} from "./types";

import {
  getProfileApi,
  authenticateApi,
  getInvestmentsApi,
  changeInvestmentApi,
  addNewUserApi,
  updateUserApi,
  getTokenRappiTenderoApi,
  isRappiTenderoApi,
  ProfileRappiTenderoApi,
  AddCreditApi,
  getCreditRappiTenderoApi,
  getPaymentsCreditApi,
  addPaymentsCreditApi,
  ApiAddInvesment,
} from "../../api/apiProfile";

import getDataApi from "../../api/getDataApp";
import getDataApiMotorcicles from "../../api/apiMotorcicle";

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

export const getDataProfileSuccess = (data) => ({
  type: FECHING_DATA_PROFILE_SUCCESS,
  data,
});

export const getProfileSuccess = (data) => ({
  type: PROFILE_SUCCESS,
  data,
});

export const authenticateSuccess = (data) => ({
  type: AUTHENTICATE_SUCCESS,
  data,
});

export const investmentSuccess = (data) => ({
  type: INVESTMENT_SUCCESS,
  data,
});

export const balanceTotalSuccess = (data) => ({
  type: BALANCE_TOTAL_SUCCESS,
  data,
});

export const paymentSuccess = (data) => ({
  type: PAYMENT_SUCCESS,
  data,
});

export const pagoTotalSuccess = (data) => ({
  type: PAGO_TOTAL_SUCCESS,
  data,
});

export const getDataFailure = () => ({
  type: FECHING_DATA_FIALURE,
});

export const getDataAppSuccess = (data) => ({
  type: FECHING_DATA_APP_SUCCESS,
  data,
});

export const setMessageRegister = (data) => ({
  type: SET_MESSAGE_REGISTER,
  data,
});

export const getMotorciclesSuccess = (data) => ({
  type: FECHING_MOTORCICLES_SUCCESS,
  data,
});

export const getDataCreditSuccess = (data) => ({
  type: GET_DATA_CREDIT_SUCCESS,
  data,
});

export const isRappiTenderoSuccess = (data) => ({
  type: IS_RAPPI_TENDERO_SUCCESS,
  data,
});

// profileRappiTenderoSuccess

export const profileRappiTenderoSuccess = (data) => ({
  type: PROFILE_RAPPI_TENDERO_SUCCESS,
  data,
});

export const fetchDataProfile = (email) => {
  isRappiTenderoSuccess;
  return (dispatch) => {
    // dispatch(getData());
    getProfileApi(email)
      .then(([response, json]) => {
        dispatch(getDataProfileSuccess(json.data[0]));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchAuthenticate = (email, password) => {
  return (dispatch) => {
    authenticateApi(email, password)
      .then(([response, json]) => {
        if (json.response === "success") {
          dispatch(authenticateSuccess({ email: email }));
          dispatch(fetchGetCreditRappiTendero(email));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const fetchInvestments = (id_user) => {
  console.log(id_user);
  return (dispatch) => {
    getInvestmentsApi(id_user)
      .then(([response, json]) => {
        dispatch(investmentSuccess(json.data));
        dispatch(balanceTotalSuccess(json.balanceTotal));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchDataApp = () => {
  return (dispatch) => {
    getDataApi()
      .then(([response, json]) => {
        // console.log(json.data);
        dispatch(getDataAppSuccess(json.data));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchDataMotorcicle = () => {
  return (dispatch) => {
    // dispatch(getData());
    getDataApiMotorcicles()
      .then(([response, json]) => {
        dispatch(getMotorciclesSuccess(json.data));
      })
      .catch((err) => console.log(err));
  };
};

export const changeInvestment = (id, active, balance, id_user) => {
  return (dispatch) => {
    changeInvestmentApi(id, active, balance)
      .then(([response, json]) => {
        if (json.response === "success") {
          dispatch(fetchInvestments(id_user));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const fetchNewUser = (name, document, phone, email, password) => {
  return (dispatch) => {
    dispatch(getData());
    addNewUserApi(name, document, phone, email, password)
      .then(([response, json]) => {
        console.log(json);
        if (json.response === "success") {
          dispatch(authenticateSuccess({ email: email }));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const fetchUpdateUser = (name, document, phone, id_user, email) => {
  return (dispatch) => {
    updateUserApi(name, document, phone, id_user)
      .then(([response, json]) => {
        console.log(json);
        if (json.response === "success") {
          // dispatch(fetchDataProfile(email));
          dispatch(updateUser(name, document, phone));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const fetchIsRappiTendero = (email) => {
  // console.log(email);
  return (dispatch) => {
    isRappiTenderoApi(email)
      .then(([response, json]) => {
        // console.log(json.user_type);
        dispatch(isRappiTenderoSuccess(json.user_type));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchTokenRappiTendero = (email) => {
  // console.log(email);
  return (dispatch) => {
    // console.log("ingresooooooo);
    getTokenRappiTenderoApi(email)
      .then(([response, json]) => {
        console.log(json.access_token);
        // console.log(response);
        // if (json.response === "success") {
        dispatch(fetchProfileRappiTendero(json.access_token));
        // dispatch(updateUser(name, document, phone));
        // }
      })
      .catch((err) => console.log(err));
  };
};

export const fetchProfileRappiTendero = (access_token) => {
  return (dispatch) => {
    ProfileRappiTenderoApi(access_token)
      .then(([response, json]) => {
        dispatch(profileRappiTenderoSuccess(json));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchAddCredit = (
  id_user,
  id_motorcicle,
  id_pase,
  amount,
  numberMonths,
  interest,
  active,
  monthlyPayment,
  priceMotorcicle,
  pricePase,
  stateCredit,
  email
) => {
  return (dispatch) => {
    AddCreditApi(
      id_user,
      id_motorcicle,
      id_pase,
      amount,
      numberMonths,
      interest,
      active,
      monthlyPayment,
      priceMotorcicle,
      pricePase,
      stateCredit,
      email
    )
      .then(([response, json]) => {
        console.log(json);
        dispatch(fetchGetCreditRappiTendero(email));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchGetCreditRappiTendero = (email) => {
  return (dispatch) => {
    getCreditRappiTenderoApi(email)
      .then(([response, json]) => {
        console.log(json);
        // console.log("hello");
        if (json.response === "success") {
          dispatch(getDataCreditSuccess(json.data));
        } else {
          dispatch(getDataCreditSuccess([{ active: false }]));
        }
      })
      .catch((err) => console.log(err));
  };
};

export const fetchGetPaymentsCredit = (id_user) => {
  return (dispatch) => {
    getPaymentsCreditApi(id_user)
      .then(([response, json]) => {
        console.log(json);
        dispatch(paymentSuccess(json.data));
        dispatch(pagoTotalSuccess(json.pagoTotal));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchAddPaymentsCredit = (id_user, id_credit, amount) => {
  return (dispatch) => {
    addPaymentsCreditApi(id_user, id_credit, amount)
      .then(([response, json]) => {
        console.log(json);
        fetchGetPaymentsCredit(id_user);
        // dispatch(paymentSuccess(json.data));
        // dispatch(pagoTotalSuccess(json.pagoTotal));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchAddInvesment = (
  id_user,
  amount,
  numberDays,
  profitability,
  active
) => {
  return (dispatch) => {
    // dispatch(getData());
    ApiAddInvesment(id_user, amount, numberDays, profitability, active)
      .then(([response, json]) => {
        // console.log(json);
        dispatch(fetchInvestments(id_user));
      })
      .catch((err) => console.log(err));
  };
};
