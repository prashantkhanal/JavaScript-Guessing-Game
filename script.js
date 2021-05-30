'use strict';

const btn = document.querySelector('.check');
let score = 20;
let highScore = 0;
const resetBtn = document.querySelector('.again')

const secretNumber = Math.trunc(Math.random() * 20) + 1;

btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You Win the game';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '300px';
    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Guess is High';
      score= score - 1;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.score')= score;
    }
  }else if (guess < secretNumber){
    if (score > 0) {
      document.querySelector('.message').textContent = 'Guess is Low';
      score= score - 1;
      document.querySelector('.score').textContent = score;
    }else{
      document.querySelector('.score')= score;
    }

  }
});


resetBtn.addEventListener('click', function() {
  document.querySelector('.message').textContent= "Start guessing..."
  document.querySelector('.score').textContent=20;
  document.querySelector('.guess').value = "",
  document.querySelector('body').style.backgroundColor="#000"



  
  
})
