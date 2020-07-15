const Credit = require("../models/Credit");

function addCredit(req, res) {
  const {
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
  } = req.body;

  const credit = new Credit({
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
  });

  credit
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
  addCredit,
};
