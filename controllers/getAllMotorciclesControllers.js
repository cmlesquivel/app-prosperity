const Motorcicle = require("../models/Motorcicle");

function getAllMotorcicle(req, res) {
  Motorcicle.find()
    .then((doc) => {
      res.json({ response: "success", data: doc });
    })
    .catch((err) => {
      console.log("Error al consultar elementos", err.message);
      res.status(400).json({ response: "failed" });
    });
}

module.exports = {
  getAllMotorcicle,
};
