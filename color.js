const colorBox = document.querySelector(".color-box");
const colorOptions = document.querySelector(".color-options");
const statusText = document.querySelector(".status");
const scoreText = document.querySelector("[data-testid='score']");
const newGameBtn = document.querySelector(".new-game-btn");

let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = "#d3d3d3";

    colorOptions.innerHTML = "";

    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    shuffledColors.forEach(color => {
        const btn = document.createElement("button");
        btn.setAttribute("data-testid", "colorOption");
        btn.style.backgroundColor = color;
        btn.onclick = () => checkGuess(color);
        colorOptions.appendChild(btn);
    });

    statusText.textContent = "";
}

function checkGuess(color) {
    if (color === targetColor) {
        statusText.textContent = "Correct!";
        statusText.style.color = "green";
        colorBox.style.backgroundColor = targetColor; 
        score++;
        scoreText.textContent = score;
        setTimeout(() => {
            startGame();
        }, 1000);
    } else {
        statusText.textContent = "Wrong! Click another color button to Try again.";
        statusText.style.color = "red";
    }
}

newGameBtn.addEventListener("click", () => {
    score = 0;
    scoreText.textContent = score;
    startGame();
});

startGame();