const URL = "http://api.tvmaze.com/shows/82";

export default () => {
  return fetch(URL).then((response) =>
    Promise.all([response, response.json()])
  );
};
