
import isYes from './src/isYes.js';


const ButtonInput = document.getElementById('quizButton');
const result = document.getElementById('quizResult')

ButtonInput.onclick = function(){

    var nameInput = prompt 'Please enter your name';
    const confirmed = confirm(nameInput + ', are you sure you want to take a quiz?') 
    if (confirmed === false) {return;} ;

//Actual quiz questions

import isYes from './src/isYes.js';

   