"use strict";

// Selecting elements
const modal0 = document.querySelector(".modal0");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");

const answer1 = document.getElementsByClassName("answer1")[0];
const answer2 = document.getElementsByClassName("answer2")[0];
const answer3 = document.getElementsByClassName("answer3")[0];
const answer4 = document.getElementsByClassName("answer4")[0];

const newGame = document.querySelector(".newGame");
const btnOpen = document.querySelector(".check");

//////////////////////////////////////////////////

// Display first modal
const displayMessage = function () {
  document.querySelector("body").style.backgroundColor = "transparent";
  document.querySelector("button").style.opacity = 1;
  setTimeout(() => {
    modal0.classList.remove("hidden");
  }, 500);
  modal0.scrollIntoView({ behavior: "smooth" });
  modal0.style.backgroundColor = "#ffffff5e";
};

document.querySelector(".check").addEventListener("click", function () {
  displayMessage();
  btnOpen.style.opacity = 0;
});

// Starting conditions
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  currentScore;
  activePlayer;
  playing;
  modal0.classList.add("hidden");
  newGame.classList.toggle("hidden");
  questionNext;
  displayMessage;
  btnOpen.style.opacity = 1;
  modal4.classList.add("hidden");
  modal2.classList.add("hidden");
  document.querySelector("body").style.backgroundColor = "#ffffff5e";
  modal0.style.backgroundColor = "#ffffff5e";
  modal1.style.backgroundColor = "#ffffff5e";
  modal3.style.backgroundColor = "#ffffff5e";
  modal4.style.backgroundColor = "#ffffff5e";
};

const questionNext = function () {
  document.getElementById(`current--${activePlayer}`);
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  modal0.style.backgroundColor = "#338f1775";
  setTimeout(() => {
    modal0.classList.toggle("hidden");
    modal1.classList.toggle("hidden");
  }, 1000);
};

const nextQuestion = function () {
  setTimeout(() => {
    modal0.classList.toggle("hidden");
    modal1.classList.toggle("hidden");
  }, 1000);
};

// Game functionality
const modAnswer = function (e) {
  const x = e.target.getAttribute("class");
  if (answer1 === e.target && answer1.contains(e.target)) {
    questionNext();
  } else if (x == "par") {
    // If wrong, finishing game
    playing = false;
    modal0.style.backgroundColor = "rgba(156, 48, 34, 0.459)";
    modal1.style.backgroundColor = "rgba(156, 48, 34, 0.459)";
    modal3.style.backgroundColor = "rgba(156, 48, 34, 0.459)";
    modal4.style.backgroundColor = "rgba(156, 48, 34, 0.459)";
    setTimeout(() => {
      newGame.classList.remove("hidden");
      modal0.classList.add("hidden");
      modal1.classList.add("hidden");
      modal3.classList.add("hidden");
      modal4.classList.add("hidden");
    }, 1000);
  } else if (answer2 === e.target && answer2.contains(e.target)) {
    // If right, next question
    modal1.style.backgroundColor = "#338f1775";
    setTimeout(() => {
      modal3.classList.toggle("hidden");
      modal1.classList.toggle("hidden");
    }, 1000);
  } else if (answer3 === e.target && answer3.contains(e.target)) {
    modal3.style.backgroundColor = "#338f1775";
    setTimeout(() => {
      modal3.classList.add("hidden");
      modal4.classList.toggle("hidden");
    }, 1000);
  } else if (answer4 === e.target && answer4.contains(e.target)) {
    modal4.style.backgroundColor = "#338f1775";
    setTimeout(() => {
      modal2.classList.toggle("hidden");
      modal4.classList.add("hidden");
      newGame.classList.remove("hidden");
    }, 1000);
  }
};

modal0.addEventListener("click", function (e) {
  modAnswer(e);
});

modal1.addEventListener("click", function (e) {
  modAnswer(e);
});

modal3.addEventListener("click", function (e) {
  modAnswer(e);
});

modal4.addEventListener("click", function (e) {
  modAnswer(e);
});

// Restarting game
newGame.addEventListener("click", init);
