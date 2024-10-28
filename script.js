function updateCard() {
    const accountNumber = document.getElementById("account-number").value;
    const cardHolderName = document.getElementById("cardholder-name").value;
    const expiryDate = document.getElementById("expiry-date-input").value;

    // Validate account number (should be 16 digits)
    if (accountNumber.length === 10) {
        // Split account number into four parts and display it
        document.getElementById("card-number").innerHTML = `
            <p>${accountNumber.slice(0, 4)}</p>
            <p>${accountNumber.slice(4, 8)}</p>
            <p>${accountNumber.slice(8, 12)}</p>
            <p>${accountNumber.slice(12, 16)}</p>
        `;
    } else {
        alert("Account number must be 16 digits!");
        return;
    }

    document.getElementById("cardholder-name").innerText = cardHolderName || "Account Number";

    document.getElementById("expiry-date").innerText = expiryDate || "MM / YY";
}
const button = document.getElementById("btn");
button.addEventListener("click", updateCard);