const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvestmentSchema = Schema(
  {
    id_user: { type: String, required: true },
    date_end: { type: Date },
    amount: { type: Number, required: true },
    numberDays: { type: Number, required: true },
    profitability: { type: Number, required: true },
    balance: { type: Number },
    active: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Invesment", InvestmentSchema);
