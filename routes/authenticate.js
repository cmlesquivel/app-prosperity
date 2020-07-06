const express = require("express");
const { authenticateUser } = require("../controllers/authenticateController");
const api = express.Router();

api.post("/authenticate", authenticateUser);

module.exports = api;
