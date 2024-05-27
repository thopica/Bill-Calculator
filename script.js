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

function resetForm() {
    document.getElementById('totalAmount').value = '';
    document.getElementById('numPeople').value = 1;
    document.getElementById('numPeopleOutput').textContent = '1';
    document.getElementById('tipAmount').value = '';
    document.getElementById('result').textContent = '';
}
