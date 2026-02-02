let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");

function checkButton() {
    let firstRandomNumber = parseInt(firstNumberElement.textContent);
    let secondRandomNumber = parseInt(secondNumberElement.textContent);
    let userValue = parseInt(userInputElement.value);

    if (isNaN(userValue)) {
        gameResultElement.textContent = "Please enter a number!";
        gameResultElement.style.backgroundColor = "#f59e0b";
        return;
    }

    let total = firstRandomNumber + secondRandomNumber;

    if (userValue === total) {
        gameResultElement.textContent = " Congratulations! You got it right.";
        gameResultElement.style.backgroundColor = "#028a0f";
    } else {
        gameResultElement.textContent = " Please Try Again!";
        gameResultElement.style.backgroundColor = "#1e217c";
    }
}

function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);

    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber;

    userInputElement.value = "";
    gameResultElement.textContent = "";
    gameResultElement.style.backgroundColor = "";
}

// Start the game on load
restartGame();
