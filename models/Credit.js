const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CreditSchema = Schema(
  {
    id_user: { type: String, required: true },
    email: { type: String, required: true },
    id_motorcicle: { type: String },
    id_pase: { type: String },
    amount: { type: Number },
    numberMonths: { type: Number },
    interest: { type: Number },
    active: { type: Boolean, required: true },
    monthlyPayment: { type: Number },
    priceMotorcicle: { type: Number },
    pricePase: { type: Number },
    stateCredit: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Credit", CreditSchema);
