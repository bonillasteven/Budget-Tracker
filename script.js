function getValue(id) {
  return parseFloat(document.getElementById(id).value) || 0;
}

function calculateBudget() {
  let income = getValue("income");

  let rent = getValue("rent");
  let food = getValue("food");
  let gas = getValue("gas");
  let utilities = getValue("utilities");
  let phone = getValue("phone");
  let other = getValue("other");

  let totalExpenses = rent + food + gas + utilities + phone + other;
  let balance = income - totalExpenses;

  document.getElementById("total-income").textContent = "$" + income.toFixed(2);
  document.getElementById("total-expenses").textContent = "$" + totalExpenses.toFixed(2);
  document.getElementById("balance").textContent = "$" + balance.toFixed(2);
}
