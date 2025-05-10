'use strict';

/*
    Author:   coulc 
    Date:     2025/5/1
*/

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent  = 13;
document.querySelector('.score').textContent  = 13;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 123;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // 1 ~ 20
let score = 20;
let highScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);


    if(!guess) {
        displayMessage('No number!');
        score--;
        document.querySelector('.score').textContent = score;

    }else if(guess === secretNumber){
        displayMessage('You Win!!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';

        if(highScore < score){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if(guess !== secretNumber) {
        if(score > 1){
            displayMessage(guess > secretNumber ? 'too high!': 'too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost the game...');
        }
    }
    // else if(guess > secretNumber){
    //     document.querySelector('.message').textContent = 'too high!';
    //     score--;
    //     document.querySelector('.score').textContent = score;

    // }else if(guess < secretNumber){
    //     document.querySelector('.message').textContent = 'too low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    // }
});

// Coding Challenge #1
/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 
*/

document.querySelector('.again').addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
