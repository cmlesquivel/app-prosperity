const express = require("express");
const { addCredit } = require("../controllers/addCreditController");
const api = express.Router();

api.post("/addcredit", addCredit);

module.exports = api;
