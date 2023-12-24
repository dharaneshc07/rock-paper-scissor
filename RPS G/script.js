const choices = ["rock", "paper", "scissors"];
const resultElement = document.getElementById("result");

function playRound() {
    const userChoice = document.querySelector(".choices button.selected").id;
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    resultElement.textContent = "You chose " + userChoice + ". Computer chose " + computerChoice + ". ";

    if (userChoice === computerChoice) {
        resultElement.textContent += "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultElement.textContent += "You win!";
    } else {
        resultElement.textContent += "Computer wins!";
    }
}

// Add event listeners to buttons
const buttons = document.querySelectorAll(".choices button");
buttons.forEach(button => button.addEventListener("click", () => {
    buttons.forEach(button => button.classList.remove("selected"));
    button.classList.add("selected");
    playRound();
}));
