const express = require("express");
const { addPayment } = require("../controllers/addPaymentController");
const api = express.Router();

api.post("/addpayment", addPayment);

module.exports = api;
