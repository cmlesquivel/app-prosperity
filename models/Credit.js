const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CreditSchema = Schema(
  {
    id_user: { type: String, required: true },
    id_motorcicle: { type: String },
    id_pase: { type: String },
    amount: { type: Number, required: true },
    numberMonths: { type: Number, required: true },
    interest: { type: Number, required: true },
    active: { type: Boolean, required: true },
    monthlyPayment: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Credit", CreditSchema);
