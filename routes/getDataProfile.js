const express = require("express");
const { getDataProfile } = require("../controllers/getDataProfileController");
const api = express.Router();

api.get("/getdataprofile/:email", getDataProfile);

module.exports = api;
