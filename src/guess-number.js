


function calculateNumber(guessNumber, givenNumber){

    if(guessNumber - givenNumber === 0) {
        return 0;
    } else if(guessNumber - givenNumber < 0) {
        return -1;
    } else if(guessNumber - givenNumber > 0) {
        return 1;
    }
}

export default calculateNumber;