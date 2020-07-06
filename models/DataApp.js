const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataAppSchema = Schema(
  {
    categoria: { type: String, required: true },
    value: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DataApp", DataAppSchema);
