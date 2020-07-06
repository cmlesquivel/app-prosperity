const Profile = require("../models/Profile");

function registerUser(req, res) {
  const { email, name, phone, document, password } = req.body;
  const profile = new Profile({ email, name, phone, document, password });

  profile.save((err) => {
    if (err) {
      res.status(500).send({
        response: "failed",
        message: "Error al registrar el usuario",
      });
    } else {
      res.status(200).send({
        response: "success",
        message: "Usuario registrado",
      });
    }
  });
}

module.exports = {
  registerUser,
};
