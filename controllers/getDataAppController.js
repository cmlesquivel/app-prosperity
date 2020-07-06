const DataApp = require("../models/DataApp");

function getDataApp(req, res) {
  DataApp.find({})
    .then((doc) => {
      res.json({ response: "success", data: doc });
    })
    .catch((err) => {
      console.log("Error al consultar elementos", err.message);
      res.status(400).json({ response: "failed" });
    });
}

module.exports = {
  getDataApp,
};
