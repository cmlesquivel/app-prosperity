const express = require("express");
const { getDataApp } = require("../controllers/getDataAppController");
const api = express.Router();

api.get("/getdatapp", getDataApp);

module.exports = api;
