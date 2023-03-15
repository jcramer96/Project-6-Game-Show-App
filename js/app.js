/*===============================================================
                    GLOBAL VARIABLES
===============================================================*/
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const resetButton = document.querySelector('a');
const startScreen = document.querySelector('.start');
const gameScreen = document.querySelector('.section');

/*===============================================================
                        EVENTS
===============================================================*/
resetButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
});