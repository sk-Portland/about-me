
import calculateNumber from '../src/guess-number.js';

const guessNumber = document.getElementById('guessNumber');
const button = document.getElementById('game-button');

const givenNumber = 15;
 
button.addEventListener('click', () => { 
    const guess = parseInt(guessNumber.value);
    const result = calculateNumber(guess, givenNumber);
    
    


});

  
 