'use strict';

const btn = document.querySelector('.check');
let score = 20;
let highScore = 0;
const resetBtn = document.querySelector('.again')

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (messgae){
document.querySelector('.message').textContent = messgae;
}

btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    displayMessage('No Number')


  }else if (guess === secretNumber) {
   displayMessage('You Win the Game')
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '300px';
    document.querySelector('.number').textContent = secretNumber
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber){
    if (score > 1) {
      dispalyNumber(guess > secretNumber ? 'Guess is High': "Guess is low")
      score= score - 1;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.score')= score;
    }  
  }
});


resetBtn.addEventListener('click', function() {
  displayMessage('Start Guessing.....')
  document.querySelector('.score').textContent=20;
  document.querySelector('.guess').value = "",
  document.querySelector('body').style.backgroundColor="#000"
  document.querySelector('.number').textContent = '?'
})
