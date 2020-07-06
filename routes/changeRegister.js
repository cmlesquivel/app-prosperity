const express = require("express");
const { changeRegister } = require("../controllers/changeRegisterController");
const api = express.Router();

api.post("/changeregister", changeRegister);

module.exports = api;
