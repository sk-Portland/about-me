

// return "rock" or "paper" or "scissors" using random number

function getThrowFromNumber(randomNumber){

    if(randomNumber === 2) {
        return 'Opponent is a rock';
    } else if(randomNumber === 1) {
        return 'Opponent is paper';
    } else return 'Opponent is scissors';
}

export default getThrowFromNumber;


