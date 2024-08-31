let randomNumber;
let noatmp;
const mval = 1;
const maxValue = 100;

const mvalSpan = document.getElementById('min-value');
const maxValueSpan = document.getElementById('max-value');
const userGuessInput = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-btn');
const feedback = document.getElementById('feedback');
const noatmpDisplay = document.getElementById('noatmp');
const restartButton = document.getElementById('restart-btn');

mvalSpan.textContent = mval;
maxValueSpan.textContent = maxValue;

function initializeGame() {
    randomNumber = Math.floor(Math.random() * (maxValue - mval + 1)) + mval;
    noatmp = 0;
    feedback.textContent = '';
    noatmpDisplay.textContent = '';
    userGuessInput.value = '';
    restartButton.style.display = 'none';
    guessButton.disabled = false;
    userGuessInput.disabled = false;
}

function handleGuess() {
    const userGuess = parseInt(userGuessInput.value, 10);
    noatmp++;
    if (isNaN(userGuess) || userGuess < mval || userGuess > maxValue) {
        feedback.textContent = `Please enter a number between ${mval} and ${maxValue}.`;
    } else if (userGuess < randomNumber) {
        feedback.textContent = 'Too low!';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high!';
    } else {
        feedback.textContent = `Congratulations! You guessed the number in ${noatmp} noatmp.`;
        guessButton.disabled = true;
        userGuessInput.disabled = true;
        restartButton.style.display = 'block';
    }
    noatmpDisplay.textContent = `Attemps no: ${noatmp}`;
}

guessButton.addEventListener('click', handleGuess);
restartButton.addEventListener('click', initializeGame);

initializeGame();
