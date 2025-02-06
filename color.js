const colours = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5",
    "#FFC300", "#C70039", "#900C3F", "#581845", "#1A5276", "#1E8449"
];

const colourBox = document.querySelector('[data-testid="colourBox"]');
const colourOptions = document.querySelector('[data-testid="colourOptions"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let targetColour;
let score = 0;

function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)];
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function startNewGame() {

    gameStatus.textContent = "";

    targetColour = getRandomColour();
    colourBox.style.backgroundColor = targetColour;
    
    colourOptions.innerHTML = "";
    const options = [targetColour];
    while (options.length < 6) {
        const randomColour = getRandomColour();
        if (!options.includes(randomColour)) {
            options.push(randomColour);
        }
    }
    shuffleArray(options); 
    options.forEach(colour => {
        const button = document.createElement("button");
        button.style.backgroundColor = colour;
        button.addEventListener("click", () => handleGuess(colour));
        colourOptions.appendChild(button);
    });
}

function handleGuess(guessColour) {
    if (guessColour === targetColour) {
        gameStatus.textContent = "Correct!";
        score++;
        scoreElement.textContent = score;
        startNewGame();
    } else {
        gameStatus.textContent = "Wrong! Try again.";
    }
}

newGameButton.addEventListener("click", () => {
    score = 0;
    scoreElement.textContent = score;
    startNewGame();
});

startNewGame();