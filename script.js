let balance = 0;
let transactions = [];

function updateBalance() {
    document.getElementById("balance").textContent =
        "$" + balance.toFixed(2);
}

function addIncome() {

    let name = document.getElementById("transaction-name").value;
    let amount = parseFloat(document.getElementById("transaction-amount").value);

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid transaction.");
        return;
    }

    balance += amount;

    transactions.push({
        name: name,
        amount: amount,
        type: "Income"
    });

    displayTransactions();

    updateBalance();

    clearInputs();
}

function addExpense() {

    let name = document.getElementById("transaction-name").value;
    let amount = parseFloat(document.getElementById("transaction-amount").value);

    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid transaction.");
        return;
    }

    balance -= amount;

    transactions.push({
        name: name,
        amount: amount,
        type: "Expense"
    });

    displayTransactions();

    updateBalance();

    clearInputs();
}

function displayTransactions() {

    let list = document.getElementById("transaction-list");

    list.innerHTML = "";

    for (let transaction of transactions) {

        let item = document.createElement("li");

        if (transaction.type === "Income") {

            item.textContent =
                `${transaction.name}: +$${transaction.amount.toFixed(2)}`;

        } else {

            item.textContent =
                `${transaction.name}: -$${transaction.amount.toFixed(2)}`;

        }

        list.appendChild(item);
    }
}

function clearInputs() {

    document.getElementById("transaction-name").value = "";

    document.getElementById("transaction-amount").value = "";
}
