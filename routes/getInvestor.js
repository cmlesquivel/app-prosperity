const express = require("express");
const { getInvestor } = require("../controllers/getInvesmentController");
const api = express.Router();

api.get("/getinvestor/:id", getInvestor);

module.exports = api;
