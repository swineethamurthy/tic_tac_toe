var gameStatusValue = "Game to be started";
var nextTurn = "X";
var clickCounter = 1;
var gameStatus = "Start";
var lastClickedCell = "";

function onInputClick(e) {
  lastClickedCell = e.target.id;
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
  clickCounter = clickCounter + 1;
  document.getElementById(e.target.id).disabled = true;
  setStatus();
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
    (a1 == a2 && a1 == a3 && a3 != "") ||
    (b1 == b2 && b1 == b3 && b3 != "") ||
    (c1 == c2 && c1 == c3 && c3 != "") ||
    (a1 == b1 && a1 == c1 && c1 != "") ||
    (a2 == b2 && a2 == c2 && c2 != "") ||
    (a3 == b3 && a3 == c3 && c3 != "") ||
    (a1 == b2 && a1 == c3 && c3 != "") ||
    (a3 == b2 && a3 == c1 && c1 != "")
  ) {
    if (nextTurn == "O") {
      gameStatus = "x-Win";
    } else {
      gameStatus = "o-Win";
    }
  } else {
    if (clickCounter == 9) {
      gameStatus = "draw";
    }
  }
  setStatus();
}

function onUndo() {
  console.log(lastClickedCell);
  if (clickCounter == 1) {
    gameStatus = "Start";
    gameStatusValue = "Game to be started";
  } else {
    gameStatusValue = "Game in progress";
  }

  document.getElementById(lastClickedCell).value = "";
  document.getElementById(lastClickedCell).disabled = false;
  clickCounter = clickCounter - 1;
}

function onReset() {
  clickCounter = 0;
  nextTurn = "X";
  gameStatus = "Start";
  gameStatusValue = "Game to be started";
  document.getElementById("game-status").innerText = "Start Game";
  document.getElementById("next-turn").innerText = "X";
  document.getElementById("a1").value = "";
  document.getElementById("a2").value = "";
  document.getElementById("a3").value = "";
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("c1").value = "";
  document.getElementById("c2").value = "";
  document.getElementById("c3").value = "";
  enableAllInputs();
}

function setStatus() {
  console.log(gameStatus);
  if (gameStatus == "x-Win") {
    gameStatusValue = "X wins";
    nextTurn = "Game Over";
    disableAllInputs();
  } else if (gameStatus == "o-Win") {
    gameStatusValue = "O wins";
    setStyle();
    disableAllInputs();
    nextTurn = "Game Over";
  } else if (gameStatus == "draw") {
    gameStatusValue = "Match Draw";
    disableAllInputs();
    nextTurn = "Game Over";
  } else {
    gameStatusValue = "Game in progress";
  }

  document.getElementById("game-status").innerText = gameStatusValue;
  document.getElementById("next-turn").innerText = nextTurn;
}
function setStyle() {
  var setColour;
  if ((gameStatus = "draw")) {
    setColour = "red";
  } else {
    setColour = "green";
  }
  document.getElementById("game-status").style.color = setColour;
  document.getElementById("next-turn").style.color = setColour;
}

function disableAllInputs() {
  document.getElementById("a1").disabled = true;
  document.getElementById("a2").disabled = true;
  document.getElementById("a3").disabled = true;
  document.getElementById("b1").disabled = true;
  document.getElementById("b2").disabled = true;
  document.getElementById("b3").disabled = true;
  document.getElementById("c1").disabled = true;
  document.getElementById("c2").disabled = true;
  document.getElementById("c3").disabled = true;
  //   document.getElementById("btn-undo").disabled = true;
  setStyle();
}
function enableAllInputs() {
  document.getElementById("a1").disabled = false;
  document.getElementById("a2").disabled = false;
  document.getElementById("a3").disabled = false;
  document.getElementById("b1").disabled = false;
  document.getElementById("b2").disabled = false;
  document.getElementById("b3").disabled = false;
  document.getElementById("c1").disabled = false;
  document.getElementById("c2").disabled = false;
  document.getElementById("c3").disabled = false;
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
