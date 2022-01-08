'use strict';
//hiding the dice
const newGame = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const rollDice = document.querySelector('.btn--roll');
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
}

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  document
    .querySelector(`.player--${activePlayer + 1}`)
    .classList.remove('player--winner');
  document.getElementById(`current--${activePlayer + 1}`).textContent =
    currentScore;
  document.getElementById(`score--${activePlayer + 1}`).textContent =
    scores[activePlayer + 1];
};

rollDice.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${diceNumber}.png`;
    dice.classList.remove('hidden');

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener('click', init);
