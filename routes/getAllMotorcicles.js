const express = require("express");
const {
  getAllMotorcicle,
} = require("../controllers/getAllMotorciclesControllers");
const api = express.Router();

api.get("/getallmotorcicles", getAllMotorcicle);

module.exports = api;
