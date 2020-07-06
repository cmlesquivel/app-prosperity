const DataApp = require("../models/DataApp");

function addDataApp(req, res) {
  const { categoria, value, description } = req.body;

  const dataApp = new DataApp({
    categoria,
    value,
    description,
  });

  dataApp
    .save()
    .then((doc) => {
      res.status(200).json({
        response: "success",
        message: "Dato insertado correctamente",
      });
    })
    .catch((err) => {
      res.status(400).json({
        response: "failed",
        message: "Error al insertar",
      });
    });
}

module.exports = {
  addDataApp,
};
