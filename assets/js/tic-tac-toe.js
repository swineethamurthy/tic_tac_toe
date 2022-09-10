var gameStatusValue = "Game to be started";
var nextTurn = "O";
var clickCounter = 0;
var gameStatus = "Start";
function onInputClick(e) {
  clickCounter = clickCounter + 1;
  if (
    clickCounter == 1 ||
    clickCounter == 3 ||
    clickCounter == 5 ||
    clickCounter == 7 ||
    clickCounter == 9
  ) {
    document.getElementById(e.target.id).value = "X";
    nextTurn = "O";
  } else {
    document.getElementById(e.target.id).value = "O";
    nextTurn = "X";
  }
  document.getElementById(e.target.id).disabled = true;
  //   setStatus();
  if (clickCounter >= 4) {
    chkGameStatus();
  }
}

function chkGameStatus() {
  var a1 = document.getElementById("a1").value;
  var a2 = document.getElementById("a2").value;
  var a3 = document.getElementById("a3").value;
  var b1 = document.getElementById("b1").value;
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  if (
    (a1 == a2 && a1 == a3) ||
    (b1 == b2 && b1 == b3) ||
    (c1 == c2 && c1 == c3) ||
    (a1 == b1 && a1 == c1) ||
    (a2 == b2 && a2 == c2) ||
    (a3 == b3 && a3 == c3) ||
    (a1 == b2 && a1 == c3) ||
    (a3 == b2 && a3 == c1)
  ) {
    console.log("nextTurn - ", nextTurn);
    if ((nextTurn = "O")) {
      gameStatus = "x-Win";
      console.log("game status : ", gameStatus);
    } else {
      gameStatus = "o-Win";
      console.log("game status : ", gameStatus);
    }
  } else {
    gameStatus = "draw";
    console.log("game status : ", gameStatus);
  }

  console.log("game status : ", gameStatus);
  setStatus();
}

function onUndo() {}

function onReset() {
  clickCounter = 0;
  document.getElementById("next-turn").innerText = gameStatusValue;
  document.getElementById("a1").innerText = "";
  document.getElementById("a2").innerText = "";
  document.getElementById("a3").innerText = "";
  document.getElementById("b1").innerText = "";
  document.getElementById("b2").innerText = "";
  document.getElementById("b3").innerText = "";
  document.getElementById("c1").innerText = "";
  document.getElementById("c2").innerText = "";
  document.getElementById("c3").innerText = "";
}

function setStatus() {
  if (gameStatus == "x-Win") {
    gameStatusValue = "X wins";
  } else if (gameStatus == "o-Win") {
    gameStatusValue = "O wins";
  } else if (gameStatus == "draw") {
    gameStatusValue = "Match Draw";
  } else {
    gameStatusValue = "Game in progress";
  }
  document.getElementById("game-status").innerText = gameStatusValue;
  document.getElementById("next-turn").innerText = nextTurn;
}

function setNextTurn() {
  if (
    clickCounter == 1 ||
    clickCounter == 3 ||
    clickCounter == 5 ||
    clickCounter == 7 ||
    clickCounter == 9
  ) {
    document.getElementById("next-turn").innerText = "O";
  } else {
    document.getElementById("next-turn").innerText = "X";
  }
}
