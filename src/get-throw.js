

//generates a random number

    // generate a random number between 0 to 10
    const randomNumber = Math.floor(Math.random() * 10);

    // show the random number
    return randomNumber;


// return "rock" or "paper" or "scissors"

function getThrowFromNumber(randomNumber){

    if(randomNumber =< 3) {
        return 'Opponent is a rock';
    } else if(randomNumber < 7) {
        return 'Opponent is paper';
    } else randomNumber > 3 && > 0) {
        return 'Opponent is scissors';
    }
}



