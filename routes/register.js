const express = require("express");
const { registerUser } = require("../controllers/registerController");
const api = express.Router();

api.post("/register", registerUser);

module.exports = api;
