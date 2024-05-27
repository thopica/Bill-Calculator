function calculateTip() {
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);
    const numPeople = parseInt(document.getElementById('numPeople').value);
    const tipAmount = parseFloat(document.getElementById('tipAmount').value);

    if (isNaN(totalAmount) || isNaN(tipAmount) || numPeople <= 0) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    const totalWithTip = totalAmount + tipAmount;
    const amountPerPerson = totalWithTip / numPeople;

    document.getElementById('result').textContent = `Each person should pay $${amountPerPerson.toFixed(2)}`;
}
