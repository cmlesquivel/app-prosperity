const Invesment = require("../models/Invesment");

function changeInvesment(req, res) {
  const { id, date_end, active, balance } = req.body;

  Invesment.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        active: active,
        date_end: date_end,
        balance: balance,
      },
    },
    { useFindAndModify: false }
  )
    .then((doc) => {
      res.json({ response: "success" });
    })
    .catch((err) => {
      console.log("Error al actualizar dato", err.message);
      res
        .status(400)
        .json({ response: "failed", message: "Error al actualizar dato" });
    });
}

module.exports = {
  changeInvesment,
};
