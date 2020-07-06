const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentSchema = Schema(
  {
    id_user: { type: String, required: true },
    id_credit: { type: String, required: true },
    amount: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
