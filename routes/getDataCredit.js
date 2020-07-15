const express = require("express");
const { getDataCredit } = require("../controllers/getDataCreditController");
const api = express.Router();

api.get("/getdatacredit/:email", getDataCredit);

module.exports = api;
