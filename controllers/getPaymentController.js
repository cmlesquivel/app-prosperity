const Payment = require("../models/Payment");

function getPayment(req, res) {
  const id_user = req.params.id;

  Payment.find({ id_user: id_user })
    .then((payment) => {
      res.json({ response: "success", data: payment });
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
