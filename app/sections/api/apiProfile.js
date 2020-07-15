import { URL } from "./hosting";

export function getProfileApi(email) {
  return fetch(URL + "getdataprofile/" + email, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => Promise.all([response, response.json()]));
}

export function authenticateApi(email, password) {
  return fetch(URL + "authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function getInvestmentsApi(id_user) {
  return fetch(URL + "getinvestor/" + id_user, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => Promise.all([response, response.json()]));
}

export function changeInvestmentApi(id, active, balance) {
  return fetch(URL + "changeinvesment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      active: active,
      balance: balance,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function addNewUserApi(name, document, phone, email, password) {
  return fetch(URL + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      name: name,
      phone: phone,
      document: document,
      password: password,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function updateUserApi(name, document, phone, id_user) {
  return fetch(URL + "changeregister", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      phone: phone,
      document: document,
      id: id_user,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function getTokenRappiTenderoApi(email) {
  return fetch("http://microservices.dev.rappi.com/api/login/storekeeper", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      platform: "2",
      uuid: "550e8400-e29b-41d4-a716-4466554400001234567",
    },
    body: JSON.stringify({
      client_id: "74HzD01JbhZ44iE1kh7Gt6dfNjEKrtWiz0FqTUDQ",
      client_secret: "W8dOKF1mdHaG9wBNyoOCEBgHajO66GEl81lTDu2P",
      username: email,
      password: "123456",
      scope: "all",
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function isRappiTenderoApi(email) {
  return fetch(
    "http://microservices.dev.rappi.com/api/rt-auth-helper/user/type?email=" +
      email,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => Promise.all([response, response.json()]));
}

export function ProfileRappiTenderoApi(access_token) {
  return fetch(
    "http://microservices.dev.rappi.com/api/storekeepers-ms/storekeeper/rappitendero/profile?cache=false",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + access_token,
      },
    }
  ).then((response) => Promise.all([response, response.json()]));
}

export function AddCreditApi(
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
) {
  return fetch(URL + "addcredit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
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
      email,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function getCreditRappiTenderoApi(email) {
  return fetch(URL + "getdatacredit/" + email, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => Promise.all([response, response.json()]));
}

export function getPaymentsCreditApi(id_user) {
  return fetch(URL + "getpayment/" + id_user, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => Promise.all([response, response.json()]));
}

export function addPaymentsCreditApi(id_user, id_credit, amount) {
  return fetch(URL + "addpayment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_user: id_user,
      id_credit: id_credit,
      amount: amount,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}

export function ApiAddInvesment(
  id_user,
  amount,
  numberDays,
  profitability,
  active
) {
  console.log(id_user);
  console.log(amount);
  console.log(numberDays);
  console.log(profitability);
  console.log(active);
  return fetch(URL + "addinvestment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_user: id_user,
      amount: amount,
      numberDays: numberDays,
      profitability: profitability,
      active: active,
    }),
  }).then((response) => Promise.all([response, response.json()]));
}
