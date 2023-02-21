'use strict';
//TARGETS PLAYER 1 & 2 CLASSES
let section0 = document.querySelector('.player--0');
let section1 = document.querySelector('.player--1');


//TARGETS PLAYER 1 & 2 CURRENT SCORES
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');


//TARGETS PLAYER 1 & 2 TOTAL SCORES
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

//TARGETS NEW BUTTON, DICE ROLL & HOLD BUTTON
let newButton = document.querySelector('.btn--new');
let roll = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');

//TARGETS THE DICE IMAGE
let dicePic = document.querySelector('.dice');

//INITIALIZE VARIABLES
let score, activePlayer, currentScore, playing;

//INITIALIZE FUNCTION
const init = function() {
    playing = true;
    currentScore = 0;
    score = [0,0];
    activePlayer = 0;
    section0.classList.add('player--active');
    section1.classList.remove('player--active');
    section0.classList.remove('player--winner');
    section1.classList.remove('player--winner');
    dicePic.classList.add('hidden');
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    score0.textContent = 0;
    score1.textContent = 0;
}



//Switch players function
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    section0.classList.toggle('player--active');
    section1.classList.toggle('player--active');
}


roll.addEventListener('click', function(){
    if (playing) {
         //Generate random dice roll
        let dice = Math.trunc((Math.random()*6)+1);
    
        //Display dice roll
        dicePic.classList.remove('hidden');
        dicePic.src = `dice-${dice}.png`;

        //If dice roll is 1 or not
        if (dice !== 1) {
        //Add dice roll to current score
        currentScore += dice; //CHANGES LATER FOR ANOTHER PLAYER
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;    
        }
        else {
        //switch player function call
        switchPlayer();
        }
    }
   
  
 
    
    
})


hold.addEventListener('click', function() {

    if (playing) {
         //Add current score to total score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        //Check if score > 100
        if (score[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.querySelector('.dice').classList.add('hidden');
            playing = false;
        }
        //Switch Player
        switchPlayer();
    }

})


newButton.addEventListener('click', init)

