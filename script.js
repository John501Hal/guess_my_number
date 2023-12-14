'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guss').value);
*/
/*const x = function () {
  console.log(23);
};*/

let highscore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Again! Coding chalenge #1.7
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = score = 20;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

//Check.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No input.
  if (!guess) {
    // console.log(document.querySelector('.message').textContent);
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No number!');

    // Player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong.
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =

      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //  document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game.');
      document.querySelector('.score').textContent = 0;
    }
  }
  /* // Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      
    // Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});
