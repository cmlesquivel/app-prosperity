import { URL } from "./hosting";

export default () => {
  return fetch(URL + "getdatapp").then((response) =>
    Promise.all([response, response.json()])
  );
};
