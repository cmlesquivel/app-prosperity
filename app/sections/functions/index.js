import { func } from "prop-types";

//- function to show money COL format
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
