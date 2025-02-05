// Array of predefined colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5",
    "#FFC300", "#C70039", "#900C3F", "#581845", "#1A5276", "#1E8449"
];

// DOM Elements
const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('[data-testid="colorOptions"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let targetColor;
let score = 0;

// Function to generate random colors
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to start a new game
function startNewGame() {
    // Reset game status
    gameStatus.textContent = "";
    // Generate a new target color
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;
    // Generate color options
    colorOptions.innerHTML = "";
    const correctOptionIndex = Math.floor(Math.random() * 6);
    for (let i = 0; i < 6; i++) {
        const button = document.createElement("button");
        button.style.backgroundColor = i === correctOptionIndex ? targetColor : getRandomColor();
        button.addEventListener("click", () => handleGuess(button.style.backgroundColor));
        colorOptions.appendChild(button);
    }
}

// Function to handle user guesses
function handleGuess(guessColor) {
    if (guessColor === targetColor) {
        gameStatus.textContent = "Correct! 🎉";
        score++;
        scoreElement.textContent = score;
    } else {
        gameStatus.textContent = "Wrong! Try again. 😢";
    }
}

// Event listener for the new game button
newGameButton.addEventListener("click", startNewGame);

// Start the game when the page loads
startNewGame();