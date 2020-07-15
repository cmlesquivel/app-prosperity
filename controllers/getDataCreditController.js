const Credit = require("../models/Credit");

function getDataCredit(req, res) {
  const email = req.params.email;

  Credit.find({ email: email })
    .then((credit) => {
      if (credit.length != 0) {
        res.json({ response: "success", data: credit });
      } else {
        res.json({
          response: "failed",
          message: "No se encontrarón elementos",
        });
      }
    })
    .catch((err) => {
      res
        .status(400)
        .json({ response: "failed", message: "Error al consultar elementos" });
    });
}

module.exports = {
  getDataCredit,
};
