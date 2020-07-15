const Profile = require("../models/Profile");

function authenticateUser(req, res) {
  const { email, password } = req.body;
  console.log(password);

  Profile.findOne({ email }, function (err, user) {
    res.setHeader("Content-type", "text/json");
    if (err) {
      res.status(500).send({
        response: "failed",
        message: "Error al autenticar al usuario",
      });
    } else if (!user) {
      res.status(500).send({
        response: "failed",
        message: "Usuario no existe",
      });
    } else {
      user.isCorrectPassword(password, function (err, result) {
        res.setHeader("Content-type", "text/json");
        if (err) {
          res.status(500).send({
            response: "failed",
            message: "Error al autenticar",
          });
        } else if (result) {
          res.status(200).send({
            response: "success",
            message: "Usuario autenticado correctamente",
          });
        } else {
          res.status(500).send({
            response: "failed",
            message: "Usuario y/o contraseña incorrecta",
          });
        }
      });
    }
  });
}

module.exports = {
  authenticateUser,
};
