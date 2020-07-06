const express = require("express");
const { getPayment } = require("../controllers/getPaymentController");
const api = express.Router();

api.get("/getpayment/:id", getPayment);

module.exports = api;
