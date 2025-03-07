// Character sets for password generation
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Uppercase letters
const lowerSet = "abcdefghijklmnopqrstuvwxyz"; // Lowercase letters
const numberSet = "1234567890"; // Numbers
const symbolSet = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; // Symbols

// Selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const generateBtn = document.getElementById("btn");

// Function to get a random character from a given dataset
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// Function to generate a random password
const generatePassword = (password = "") => {
    let availableSets = "";
    if (upperInput.checked) availableSets += upperSet;
    if (lowerInput.checked) availableSets += lowerSet;
    if (numberInput.checked) availableSets += numberSet;
    if (symbolInput.checked) availableSets += symbolSet;

    if (availableSets.length === 0) {
        alert("Please select at least one option.");
        return;
    }

    while (password.length < totalChar.value) {
        password += getRandomData(availableSets);
    }

    passBox.textContent = password; // Display generated password
};

generateBtn.addEventListener("click", () => generatePassword());
