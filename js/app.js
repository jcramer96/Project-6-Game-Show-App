/*===============================================================
                    GLOBAL VARIABLES
===============================================================*/
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const resetButton = document.querySelector('.btn__reset');
const startScreen = document.querySelector('.start');
const gameScreen = document.querySelector('.section');

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

function getRandomPhraseAsArray(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const randomPhrase = arr[random];
    return randomPhrase;
};

function addPhraseToDisplay(characterArr) {
    for (let i = 0; i < characterArr.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = characterArr[i];
        let character = li.innerHTML;
        document.querySelector("#phrase ul").appendChild(li);
        if (character !== " ") {
            li.classList.add("letter");
        } else {
            li.classList.add("space");
        }
    }
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

/*===============================================================
                        EVENTS
===============================================================*/
resetButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
});