let nextPlayer = "X"; // takes a value of either 'X' or 'O' according to the game turns

/*initialize the game
use the value stored in the nextPlayer variable to indicate who the next player is*/
document.querySelector("#next-lbl").textContent = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard();

// Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
function createGameBoard() {
  // Number type parameter, that will be equal to the number of "td" elements found in HTML doc
  let numberOfCells = document.querySelectorAll("td");

  for (let i = 0; i < numberOfCells.length; i++) {
    // Create new element
    let newButton = document.createElement("button");
    // Set square bracket with empty space for text of the element
    newButton.textContent = "[ ]";
    // Append "button" as the last child of "td"
    numberOfCells[i].appendChild(newButton);
  }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (event) => {
    takeCell(event);
  });
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event) {
  /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

  let buttonClick = event.target;
  buttonClick.textContent = nextPlayer;
  if (nextPlayer == "X") {
    nextPlayer = "O";
  } else {
    nextPlayer = "X";
  }
  document.querySelector("#next-lbl").textContent = nextPlayer;

  // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
  buttonClick.disabled = true;

  // Check if the game is over
  if (isGameOver()) {
    // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    let newHeader = document.createElement("h1");
    newHeader.textContent = "Game Over";
    document.querySelector("#game-over-lbl").appendChild(newHeader);
  }
}

// This function returns true if all the buttons are disabled and false otherwise
function isGameOver() {
  // Counter
  let buttonCounter = 0;
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].disabled) {
      // Increment
      buttonCounter++;
    }
  }
  if (buttonCounter == 9) {
    return true;
  } else {
    return false;
  }
}
