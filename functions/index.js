let miFechaActual = new Date();
let day_as_milliseconds = 86400000;

function getBalance(amount, profitability, numberDays, createdAt) {
  let diff_in_millisenconds = miFechaActual - createdAt;
  let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
  let periodos = Math.trunc(diff_in_days / numberDays);
  return amount * Math.pow(1 + profitability, periodos);
}

function getPeriod(numberDays, createdAt) {
  let diff_in_millisenconds = miFechaActual - createdAt;
  let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
  return Math.trunc(diff_in_days / numberDays);
}

module.exports = {
  getBalance,
};
