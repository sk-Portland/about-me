


function calculateNumber(guessNumber, givenNumber){

    if(guessNumber -givenNumber === 0) {return 'correct'}
    else if(guessNumber -givenNumber < 0) 
    {return 'Too low try again'}
    else (guessNumber - givenNumber > 0)
    {return 'Too high try again'}
};

export default calculateNumber;