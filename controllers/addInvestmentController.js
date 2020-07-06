const Investment = require("../models/Invesment");

function addInvestment(req, res) {
  const {
    id_user,
    date_end,
    amount,
    numberDays,
    profitability,
    balance,
    active,
  } = req.body;

  const investment = new Investment({
    id_user,
    date_end,
    amount,
    numberDays,
    profitability,
    balance,
    active,
  });

  investment
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
  addInvestment,
};
