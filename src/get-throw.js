

// generate a random number between 0 to 2
   const randomNumber = Math.floor(Math.random() * 3);

// return "rock" or "paper" or "scissors" using random number

function getThrowFromNumber(randomNumber){

    if(randomNumber === 2) {
        return 'Opponent is a rock';
    } else if(randomNumber === 1) {
        return 'Opponent is paper';
    } else randomNumber === 0) {
        return 'Opponent is scissors';
    };

export default getThrowFromNumber;


}
