const Invesment = require("../models/Invesment");
const { getBalance } = require("../functions");

function getInvestor(req, res) {
  const id_user = req.params.id;
  let balanceTotal = 0;

  Invesment.find({ id_user: id_user })
    .then((invesment) => {
      invesment.forEach((item) => {
        if (item.active) {
          item.balance = getBalance(
            item.amount,
            item.profitability,
            item.numberDays,
            item.createdAt
          ).toFixed(2);
          balanceTotal += item.balance;
        }
      });

      invesment.push({ balanceTotal: balanceTotal.toFixed(2) });

      res.json({ response: "success", data: invesment });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ response: "failed", message: "Error al consultar elementos" });
    });
}

module.exports = {
  getInvestor,
};
