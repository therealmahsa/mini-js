'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent ='28';
// document.querySelector('.score').textContent ='10';
// document.querySelector('.guess').value ='22';
// document.querySelector('.guess').textContent='30';
// console.log(document.querySelector('.guess').value='30');

// document.querySelector('.check').addEventListener('click',function(){
//     document.querySelector('.guess').value ='22';
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent ='🎉 Correct Number!';
// })
// // تکرار

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function () {
  displayScore((score = 20));
  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (score > 1) {
    if (!guess) {
      displayMessage('❌ No number');
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '📈ziad' : '📉kam');
      score--;
      displayScore(score);
    } else if (guess === secretNumber) {
      displayMessage('🎉bande shodi');
      displayNumber(secretNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    displayMessage('💩Reidiiiii💩');
    displayScore('0');
  }
});
