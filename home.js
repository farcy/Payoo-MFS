
const validPin = 1234; // Replace with your actual valid PIN
const addMoneyBtn = document.getElementById("addMoneyBtn");
const cashOutBtn = document.getElementById("cashOutBtn");

function setActiveButton(activeBtn) {
    addMoneyBtn.style.border = "";
    cashOutBtn.style.border = "";
    activeBtn.style.border = "2px solid green";
}

// Set Add Money as the default active tab on page load
document.addEventListener('DOMContentLoaded', function() {
    if (addMoneyBtn && cashOutBtn) {
        setActiveButton(addMoneyBtn);
        const addForm = document.getElementById("addMoneyForm");
        const cashForm = document.getElementById("cashOutForm");
        if (addForm) addForm.classList.remove("hidden");
        if (cashForm) cashForm.classList.add("hidden");
    }
});

document.getElementById("addMoneyForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const amount = parseInt(document.getElementById("addAmount").value);
    const pin = parseInt(document.getElementById("addPin").value);
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (accountNumber.length < 11 || accountNumber.length > 11) {
        alert("Invalid account number. Please enter a 11-digit account number.");
        return;
    }

    if (pin !== validPin) {
        alert("Invalid PIN. Please enter the correct PIN.");
        return;
    }

    const newAvailableBalance = amount + availableBalance;
    document.getElementById("available-balance").innerText = newAvailableBalance;
});


document.getElementById("addMoneyBtn").addEventListener("click", function() {
    setActiveButton(addMoneyBtn);
    document.getElementById("addMoneyForm").classList.remove("hidden");
    document.getElementById("cashOutForm").classList.add("hidden");
});

document.getElementById("cashOutBtn").addEventListener("click", function() {
    setActiveButton(cashOutBtn);
    document.getElementById("cashOutForm").classList.remove("hidden");
    document.getElementById("addMoneyForm").classList.add("hidden");
});



const cashOutForm = document.getElementById("cashOutForm");
const cashOutSubmitBtn = cashOutForm ? cashOutForm.querySelector("button[type='submit']") : null;

function handleCashOut(e) {
    e.preventDefault();
    const agent = document.getElementById("agent").value.trim();
    const amountInput = document.getElementById("cashOutAmount").value.trim();
    const pinInput = document.getElementById("cashOutPin").value.trim();
    const availableBalance = parseInt(document.getElementById("available-balance").innerText, 10);

    if (!amountInput) {
        alert("Please enter a withdrawal amount.");
        return;
    }

    const amount = parseInt(amountInput, 10);
    const pin = parseInt(pinInput, 10);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    if (isNaN(pin)) {
        alert("Please enter a valid PIN.");
        return;
    }

    if (agent !== validAgent) {
        alert("Invalid Agent Number. Please enter the correct Agent Number.");
        return;
    }
    
    if (agent.length < 11 || agent.length > 11) {
        alert("Invalid agent number. Please enter a 11-digit agent number.");
        return;
    }

    if (pin !== validPin) {
        alert("Invalid PIN. Please enter the correct PIN.");
        return;
    }

    if (amount > availableBalance) {
        alert("Insufficient Balance");
        return;
    }

    document.getElementById("available-balance").innerText = availableBalance - amount;
    alert("Cash out successful!");
    cashOutForm.reset();
}

if (cashOutSubmitBtn) {
    cashOutSubmitBtn.addEventListener("click", handleCashOut);
} else if (cashOutForm) {
    cashOutForm.addEventListener("submit", handleCashOut);
}



