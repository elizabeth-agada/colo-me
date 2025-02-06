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
    colorBox.style.backgroundColor = targetColor;
    colorOptions.innerHTML = "";
    
    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    shuffledColors.forEach(color => {
        const btn = document.createElement("button");
        btn.setAttribute("data-testid", "colorOption");
        btn.classList.add("hidden-color");
        btn.onclick = () => revealColor(btn, color);
        colorOptions.appendChild(btn);
    });
    statusText.textContent = "";
}

function revealColor(button, color) {
    button.style.backgroundColor = color;
    checkGuess(color);
}

function checkGuess(color) {
    if (color === targetColor) {
        statusText.textContent = "Correct!";
        statusText.style.color = "green";
        score++;
        scoreText.textContent = score;
        setTimeout(startGame, 1000);
    } else {
        statusText.textContent = "Wrong! Try again.";
        statusText.style.color = "red";
    }
}

newGameBtn.addEventListener("click", () => {
    score = 0;
    scoreText.textContent = score;
    startGame();
});

startGame();