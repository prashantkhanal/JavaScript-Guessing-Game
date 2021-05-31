'use strict';

const btn = document.querySelector('.check');
let score = 20;
let highScore = 0;
const resetBtn = document.querySelector('.again')

const displayMessage = function (message){
document.querySelector('.message').textContent = message;
}
let secretNumber = Math.trunc(Math.random() * 20) + 1;

btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    displayMessage('No Number')


  }else if (guess === secretNumber) {
   displayMessage('You win the Game')
    document.querySelector('body').style.backgroundColor = "green" 
    document.querySelector('.number').style.width = '300px';
    document.querySelector('.number').textContent = secretNumber
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber){
    if (score > 0) {
      document.querySelector('.message').textContent = guess > secretNumber ? 'Guess is High': "Guess is low"
      
      score= score - 1;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.score')= score;
    }  
  }
});


resetBtn.addEventListener('click', function() {
  console.log('im clickerd');
  
  score = 20
 secretNumber = Math.trunc(Math.random()* 20) + 1
  displayMessage('Start Guessing.....')
  document.querySelector('.score').textContent=20;
  document.querySelector('.guess').value = "",
  document.querySelector('body').style.backgroundColor="#000"
  document.querySelector('.number').textContent = '?'
})
