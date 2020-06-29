import { INCREASE_COUNTER, CREATE_NEW_USER } from "./types";

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});

export const createNewUser = (name, document, phone, email, password) => ({
  type: CREATE_NEW_USER,
  name: name,
  document: document,
  phone: phone,
  email: email,
  password: password,
});
