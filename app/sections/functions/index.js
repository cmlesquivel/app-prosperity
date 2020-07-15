import { func } from "prop-types";

let miFechaActual = new Date();
let day_as_milliseconds = 86400000;

var currencyFormatter = require("currency-formatter");

export function toFormatterPeso(money) {
  return currencyFormatter.format(money, {
    code: "COP",
    precision: 0,
  });
}

//- function to pass string date to date in spanish
const options = { year: "numeric", month: "long", day: "numeric" };

export function formatDate(myDate) {
  return new Date(myDate).toLocaleDateString("es-ES", options);
}

export function monthlyFees(amount, interest, plazo) {
  return ((amount * interest) / (1 - Math.pow(1 + interest, -plazo))).toFixed(
    2
  );
}

export function splitString(myStr) {
  return myStr.split("-");
}

export function getPeriod(numberDays, createdAt) {
  let diff_in_millisenconds = miFechaActual - new Date(createdAt);
  let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
  return Math.trunc(diff_in_days / numberDays);
}
