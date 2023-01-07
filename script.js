// random number generator 1-10

function getRandomNumber(numrange) {
    return numrange[Math.floor(Math.random()*numrange.length)];
};
var numrange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// generates and stores a number for the round
var randomNum;

function getNumber() {
    randomNum = getRandomNumber(numrange);
    console.log(randomNum);
};

// unhides guess space
function displayGuessSpace() {
    const guessspace = document.querySelector("#guessspace");
        guessspace.style.display = "block"
};

// hides the play button
function hidePlayBtn() {
    playbtn.style.display = "none";
};

// play button functionality

function startGame () {
    getNumber();
    displayGuessSpace();
    hidePlayBtn();    
};

playbtn.addEventListener("click", startGame);

// stores guess
var myGuess;

function storeGuess() {
    myGuess = +document.querySelector("#guessinput").value;
};

// clears the text input
function clearGuessInput() {
    document.querySelector("#guessinput").value = "";
};

// evaluates the guess against the round's random number and then displays results
function evaluateGuess() {
    var results = document.querySelector("#results");
    if (myGuess == randomNum) {
        results.textContent = `${myGuess}: You Win!`;
        playagainbtn.style.display = "block";
    } else if (myGuess !== randomNum) {
        results.textContent = `${myGuess}: Nope!`;
    };
};

// submit button functionality

function submitGuess () {
    storeGuess();
    clearGuessInput();
    evaluateGuess();
};

submitbtn.addEventListener("click", submitGuess);

// play again button functionality

function playAgain() {
    function hidePlayAgainBtn() {
        playagainbtn.style.display = "none";
    }
    hidePlayAgainBtn();
    getNumber();
}

playagainbtn.addEventListener("click", playAgain);