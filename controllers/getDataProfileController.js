const Profile = require("../models/Profile");

function getDataProfile(req, res) {
  const email = req.params.email;

  Profile.find({ email: email })
    .then((profile) => {
      profile[0].password = "";
      res.json({ response: "success", data: profile });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ response: "failed", message: "Error al consultar elementos" });
    });
}

module.exports = {
  getDataProfile,
};
