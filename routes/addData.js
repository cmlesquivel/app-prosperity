const express = require("express");
const { addDataApp } = require("../controllers/addDataAppController");
const api = express.Router();

api.post("/addData", addDataApp);

module.exports = api;
