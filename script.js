"use strict";
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;
document.querySelector(".go").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "No values have been entered!!!";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "You have entered the correct number :)";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High!!" : "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game :(";
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is different
  //when player input higher number
  /*else if (guess > secretNumber)
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game :(";
      document.querySelector(".score").textContent = 0;
    }
  //when player input lower number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the Game :(";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});
//reset
document.querySelector(".reset").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".message").textContent =
    "Input the number in your mind above";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = " rgb(235, 250, 204)";
  document.querySelector(".guess").value = "";
});
