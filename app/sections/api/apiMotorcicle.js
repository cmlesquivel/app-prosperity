import { URL } from "./hosting";

export default () => {
  return fetch(URL + "getallmotorcicles").then((response) =>
    Promise.all([response, response.json()])
  );
};
