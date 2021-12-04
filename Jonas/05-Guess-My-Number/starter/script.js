'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number') = 13;
// document.querySelector('.score') = 10;

// document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
