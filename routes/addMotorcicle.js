const express = require("express");
const { addMotorcicle } = require("../controllers/addMotorcicleController");
const api = express.Router();

api.post("/addmotorcicle", addMotorcicle);

module.exports = api;
