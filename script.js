'use strict';

let newGame = document.querySelector('.newGame');
let rollDice = document.querySelector('.rollDice');
let hold = document.querySelector('.hold');

let section1 = document.querySelector('#player1');
let section2 = document.querySelector('#player2');

let score1 = document.querySelector('.score1');
let score2 = document.querySelector('.score2');

let currentScore1 = document.querySelector('.current-score1');
let currentScore2 = document.querySelector('.current-score2');

let titel1 = document.querySelector('.titel1');
let titel2 = document.querySelector('.titel2');

let diceImage = document.querySelector('.diceImage');

/* Variabels*/
let Player1IsPlaying = true;
let currentScoreValue1 = 0;
let currentScoreValue2 = 0;

let scoreValue1 = 0;
let scoreValue2 = 0;

let playerWin = false;

let random = function () {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 7);
  } while (randomNumber === 0);
  return randomNumber;
};

let switchPlayer = function () {
  if (Player1IsPlaying) {
    currentScoreValue1 = 0;
    currentScore1.textContent = currentScoreValue1;
    section1.style.opacity = 0.5;
    section2.style.opacity = 1;
    Player1IsPlaying = false;
  } else {
    currentScoreValue2 = 0;
    currentScore2.textContent = currentScoreValue2;
    section2.style.opacity = 0.5;
    section1.style.opacity = 1;
    Player1IsPlaying = true;
  }
};

rollDice.addEventListener('click', function () {
  if (!playerWin) {
    let randomNumber = Number(random());
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${randomNumber}.png`;

    if (randomNumber === 1) {
      switchPlayer();
      console.log(' I switched');
    } else {
      if (Player1IsPlaying) {
        currentScoreValue1 += randomNumber;
        currentScore1.textContent = currentScoreValue1;
      } else {
        currentScoreValue2 += randomNumber;
        currentScore2.textContent = currentScoreValue2;
      }
    }
  }
});

hold.addEventListener('click', function () {
  if (!playerWin) {
    if (Player1IsPlaying) {
      scoreValue1 += currentScoreValue1;
      score1.textContent = scoreValue1;
      currentScoreValue1 = 0;
      currentScore1.textContent = 0;
      if (scoreValue1 >= 100) {
        section1.style = 'background-color:black';
        titel1.style = 'color:rgb(218, 60, 86);';
        diceImage.classList.add('hidden');
        playerWin = true;
      } else {
        switchPlayer();
      }
    } else {
      scoreValue2 += currentScoreValue2;
      score2.textContent = scoreValue2;
      currentScoreValue2 = 0;
      currentScore2.textContent = 0;
      if (scoreValue2 >= 100) {
        playerWin = true;
        section2.style = 'background-color:black';
        titel2.style = 'color:rgb(218, 60, 86);';
        diceImage.classList.add('hidden');
      } else {
        switchPlayer();
      }
    }
  }
});

newGame.addEventListener('click', function () {
  scoreValue1 = 0;
  scoreValue2 = 0;
  score1.textContent = scoreValue1;
  score2.textContent = scoreValue2;

  currentScoreValue1 = 0;
  currentScoreValue2 = 0;
  currentScore1.textContent = currentScoreValue1;
  currentScore2.textContent = currentScoreValue2;

  section1.style = 'background-color: rgb(243, 196, 196);';
  section2.style = 'background-color: rgb(243, 196, 196);';

  titel1.style = 'color:black';
  titel2.style = 'color:black';

  playerWin = false;
  Player1IsPlaying = true;
  diceImage.classList.add('hidden');
});
