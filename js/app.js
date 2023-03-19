/*===============================================================
                    GLOBAL VARIABLES
===============================================================*/
const qwertyButtons = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let letters =  document.getElementsByClassName('letter');
let missed = 0;
const resetButton = document.querySelector('.btn__reset');
const overlay = document.querySelector('.start');
const gameScreen = document.querySelector('.section');
let heartCounter = document.querySelectorAll('.tries img');

const phrases = [
    "Break a leg", 
    "Once in a blue moon", 
    "When pigs fly", 
    "Piece of cake", 
    "See eye to eye"
];

/*===============================================================
                        FUNCTIONS
===============================================================*/
//selects a random phrase from the array above
function getRandomPhraseAsArray(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[random];
    return randomPhrase;
};

//adds the chosen phrase to the game display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement("li");
        li.textContent = arr[i];
        let character = li.textContent;
        document.querySelector("#phrase ul").appendChild(li);
        if (character !== " ") {
            li.classList.add("letter");
        } else {
            li.classList.add("space");
        }
    }
};

//tests for matches between button letters and letters in the phrase
function checkLetter(button) {
    let letterMatch = null;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent.toLowerCase() === button.textContent) {
            letterMatch = letters[i];
            letterMatch.classList.add("show");
        }
    }
    return letterMatch;
};

//checks if the game has been won or lost
function checkWin() {
    let shownLetters = document.querySelectorAll('.show');
    let lettersInPhrase = document.querySelectorAll('.letter');
    if (shownLetters.length === lettersInPhrase.length) {
        overlay.classList.add("win");
        overlay.style.display = 'flex';
        const headline = document.querySelector('.title');
        headline.textContent = "You Win!"
        resetButton.textContent = "Play Again"
    }
    if (missed > 4) {
        overlay.classList.add("lose");
        overlay.style.display = 'flex';
        const headline = document.querySelector('.title');
        headline.textContent = "Better Luck Next Time!"
        resetButton.textContent = "Try Again"
    }
};

//triggers CSS transition to fade letters in as they are revealed
/*function fadeIn() {
    const shown = document.getElementsByClassName('show');
    shown.style.opacity = '100';
};
*/

function resetGame() {
    addPhraseToDisplay(getRandomPhrases(phrases));
    document.querySelectorAll('chosen').forEach(element => {
        element.disabled = false;
        element.classList.remove('chosen');
    });
    let missed = 0;
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
/*===============================================================
                        EVENTS
===============================================================*/
//hides the display when the game is started
resetButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});
//attaches the checkLetter() to the buttons onscreen
qwerty.addEventListener('click', (e) => {
    let target = e.target;
        if(target.tagName === 'BUTTON') {
           // adds button clicked to chosen class and disables it
            target.classList.add('chosen');
            target.setAttribute("disabled", "");
           // call checkLetter() and store in variable
            let letterFound = checkLetter(target);
                
            if(letterFound === null) {
                //take away a life heart img
                //increment missed counter
                heartCounter[missed].src = 'images/lostHeart.png';
                missed++;
            }
        }
    checkWin();
});
