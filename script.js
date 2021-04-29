"use strict";

const displayMessage = (message) => {
  document.querySelector(`.message`).textContent = message;
};

const displayNumber = (message) => {
  document.querySelector(`.number`).textContent = message;
};

const displayScore = (score) => {
  document.querySelector(`.score`).textContent = score;
};

const displayBackground = (color) => {
  document.querySelector(`body`).style.backgroundColor = color;
};

const numberWidth = (width) => {
  document.querySelector(`.number`).style.width = width;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, () => {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    displayMessage(`No Number!`);
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    displayNumber(secretNumber);
    displayBackground(`#60b347`);
    numberWidth(`30rem`);
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
      score--;
      displayScore(score);
    } else {
      displayMessage(`You Lost!`);
      displayScore(`0`);
      displayBackground(`red`);
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, () => {
  displayBackground(`#222`);
  numberWidth(`15rem`);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayNumber(`?`);
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start guessing...`);
});
