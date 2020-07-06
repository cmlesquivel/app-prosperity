const express = require("express");
const { addInvestment } = require("../controllers/addInvestmentController");
const api = express.Router();

api.post("/addinvestment", addInvestment);

module.exports = api;
