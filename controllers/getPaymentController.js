const Payment = require("../models/Payment");

function getPayment(req, res) {
  const id_user = req.params.id;
  let pagoTotal = 0;

  Payment.find({ id_user: id_user })
    .then((payment) => {
      payment.forEach((item) => {
        pagoTotal += item.amount;
      });

      res.json({
        response: "success",
        data: payment,
        pagoTotal: pagoTotal.toFixed(2),
      });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ response: "failed", message: "Error al consultar elementos" });
    });
}

module.exports = {
  getPayment,
};
