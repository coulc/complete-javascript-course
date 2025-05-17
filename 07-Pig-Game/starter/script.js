'use strict';
/*
    Author:   coulc 
    Date:     2025/5/10

*/

/*
----- flowsheet -----

user rolls diceEl -> generate random dice roll -> display dice roll -> it is a 1? 
                                                                        true:  switch player
                                                                        false: add diceEl roll to current socre ->
                                                                                display new score


user holds score -> add current score to total score -> score >= 100?
                                                            true: current player win
                                                            false: switch player


user resets game -> set all scores to 0 -> set player 1 as starting player


*/


const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


let scores,currentScore,activePlayer,playing;

function init(){
    scores = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;


    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};

init();

const switchPlayer = function (){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    activePlayer = Number(!activePlayer); // activePlayer = activePlayer === 0 ? 1 : 0 ;

    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const rollDice = function() {
    if(playing){
        const dice = Math.trunc(Math.random() * 6) + 1;

        diceEl.src =`dice-${dice}.png`;
        diceEl.classList.remove('hidden');

        if(dice !== 1){
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }else{
            switchPlayer();
        }

    }
};

const hold = function () {
    if(playing){
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 10){
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
        }else{
            switchPlayer();
        }
    }

};


btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', init);

