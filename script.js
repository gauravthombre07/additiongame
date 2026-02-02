let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userinputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");
let total = parseInt(firstNumberElement) + parseInt(secondNumberElement)

function checkButton() {
    let firstRandomNumber = parseInt(firstNumberElement.textContent);
    let secndrRandomNumber = parseInt(secondNumberElement.textContent);
    let userValue = parseInt(userinputElement.value);
    let total = firstRandomNumber + secndrRandomNumber;
    if (userValue === total) {
        gameResultElement.textContent = "Congratulations! You got it right.";
        gameResultElement.style.backgroundColor = '#028a0f';
    } else {
        gameResultElement.textContent = "Please Try Again!";
        gameResultElement.style.backgroundColor = '#1e217c';
    }

}

function restartGame() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstRandomNumber;

    let secondRandomNumber = Math.ceil(Math.random() * 100);
    secondNumberElement.textContent = secondRandomNumber;

    gameResultElement.textContent = "";
    userinputElement.value = "";
}
restartGame();
