const express = require("express");
const {
  changeInvesment,
} = require("../controllers/changeInvestmentController");
const api = express.Router();

api.post("/changeinvesment", changeInvesment);

module.exports = api;
