const Profile = require("../models/Profile");

function changeRegister(req, res) {
  const { id, name, phone, document } = req.body;

  Profile.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        name: name,
        phone: phone,
        document: document,
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
  changeRegister,
};
