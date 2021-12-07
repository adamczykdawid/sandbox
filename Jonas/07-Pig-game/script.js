'use strict';
//hiding the dice
const buttonHold = document.querySelector('.btn--hold');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
dice.classList.add('hidden');

const rollDice = document.querySelector('.btn--roll');
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
}

rollDice.addEventListener('click', function () {
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
});

buttonHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});
