const Payment = require("../models/Payment");

function addPayment(req, res) {
  const { id_user, id_credit, amount } = req.body;

  const payment = new Payment({ id_user, id_credit, amount });

  payment
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
  addPayment,
};
