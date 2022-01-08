'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //no input

    if (!guess) {
        
        displayMessage('⛔ No Number');
        //when player wins

    } else if (guess === secretNumber) {
      
        displayMessage('Correct Number!!');
        //secrete number below
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '50rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            

            displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!');
            score = score - 1; //one methode (can take time)
         
            displayScore(score);
        } else {
           

            displayMessage('😢 You Lost the Game');
         
            displayScore(0);
            document.querySelector('body').style.backgroundColor = '#FF0000';

            document.querySelector('.number').style.width = '10rem';

        }
      }
   
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

 
    displayMessage('Start Guessing ...');
    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
