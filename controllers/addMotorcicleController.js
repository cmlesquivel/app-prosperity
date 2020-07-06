const Motorcicle = require("../models/Motorcicle");

function addMotorcicle(req, res) {
  const {
    referencia,
    motor,
    precio,
    marcaMotor,
    cilindrada,
    picture,
  } = req.body;

  const motorcicle = new Motorcicle({
    referencia,
    motor,
    precio,
    marcaMotor,
    cilindrada,
    picture,
  });

  motorcicle
    .save()
    .then((doc) => {
      //   console.log("Dato insertado correctamente", doc);
      res.status(200).json({
        response: "success",
        message: "Dato insertado correctamente",
      });
    })
    .catch((err) => {
      //   console.log("Error al insertar", err.message);
      res.status(400).json({
        response: "failed",
        message: "Error al insertar",
      });
    });
}

module.exports = {
  addMotorcicle,
};
