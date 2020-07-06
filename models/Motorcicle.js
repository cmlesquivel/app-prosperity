const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MotorcicleSchema = Schema(
  {
    referencia: { type: String, required: true, unique: true },
    motor: { type: String, required: true },
    precio: { type: Number, required: true },
    marcaMotor: { type: String, required: true },
    cilindrada: { type: String, required: true },
    picture: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Motorcicle", MotorcicleSchema);
