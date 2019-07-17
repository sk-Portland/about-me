
import isYes from './src/isYes.js';

const buttonInput = document.getElementById('quiz-button');
const result = document.getElementById('quizResult')

buttonInput.onclick = function(){
    alert('hello'};

    var nameInput = prompt('Please enter your name');
    const confirmed = confirm(nameInput + ', are you sure you want to take a quiz?') 
    if (confirmed === false) {return;};

//Actual quiz questions

   const inAdults = prompt('Does neurogenesis happen in adults (Y/N)');
   //Assess with ifYes
   const correctinAdults = true; 
    if(isYes(inAdults) ===correctinAdults) {
        correctAnswers +=1;
    }

   const inHippocampus = prompt('Does neurogenesis happen in the hippocampus (Y/N)');
   const correctinHippocampus = true; 
   if(isYes(inHippocampus) ===correctinHippocampus) {
       correctAnswers +=1;
   }

   const inHumans = prompt('Does neurogenesis happen in humans (Y/N)');
   const correctinHumans = true; 
   if(isYes(inHumans) ===correctinHumans) {
       correctAnswers +=1;
   }

   const result = correctinAdults + correctinHippocampus + correctinHumans;