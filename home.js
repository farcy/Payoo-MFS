
const validPin = 1234; // Replace with your actual valid PIN
const addMoneyBtn = document.getElementById("addMoneyBtn");
const cashOutBtn = document.getElementById("cashOutBtn");

function setActiveButton(activeBtn) {
    addMoneyBtn.style.border = "";
    cashOutBtn.style.border = "";
    activeBtn.style.border = "2px solid green";
}

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



