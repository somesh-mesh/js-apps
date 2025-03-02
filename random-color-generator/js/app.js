const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    // Ensure the random number is a 6-digit hex code
    const randomCode = "#" + randomNumber.toString(16).padStart(6, "0");

    // Update the background color of the body
    document.body.style.backgroundColor = randomCode;
    
    // Update the color code text in the element
    document.getElementById("color-code").innerText = randomCode;
}

document.getElementById("btn").addEventListener("click", getColor);

// Optionally, call getColor() initially if you want a random color on page load
getColor();
