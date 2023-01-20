/**
 * Choose computer pick.
 * @param {void}.
 * @return a random value between 0-2.
 */
const computerChoice = (_) => {
  let choice = Math.floor(Math.random() * 3);
  return choice;
};

/**
 * Render user's hand choice.
 * @param {Number} choice = user's hand choice.
 * @return change the user's field image.
 */
const changeUserImg = (choice) => {
  // Get DOM div
  let userFieldDiv = document.getElementById("userField");

  // Conditionals
  if (choice == 0) {
    userFieldDiv.src =
      "https://i.gyazo.com/d3b006dbe9e1a91c91498f2932d62609.png";
  } else if (choice == 1) {
    userFieldDiv.src =
      "https://i.gyazo.com/1be17c98ffd1e9b7325159f275cd6d8c.png";
  } else if (choice == 2) {
    userFieldDiv.src =
      "https://i.gyazo.com/1a5681f74fc47baafb93ba87b91c4645.png";
  } else {
    userFieldDiv.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/2048px-White_square_50%25_transparency.svg.png";
  }
};

/**
 * Render computer's hand choice.
 * @param {Number} choice = computer's hand choice.
 * @return change the computer's field image.
 */
const changeComputerImg = (choice) => {
  // Get DOM div
  let computerFieldDiv = document.getElementById("computerField");

  // Conditionals
  if (choice == 0) {
    computerFieldDiv.src =
      "https://i.gyazo.com/d3b006dbe9e1a91c91498f2932d62609.png";
  } else if (choice == 1) {
    computerFieldDiv.src =
      "https://i.gyazo.com/1be17c98ffd1e9b7325159f275cd6d8c.png";
  } else if (choice == 2) {
    computerFieldDiv.src =
      "https://i.gyazo.com/1a5681f74fc47baafb93ba87b91c4645.png";
  } else {
    computerFieldDiv.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/2048px-White_square_50%25_transparency.svg.png";
  }
};

// User counter
let userPoints = 0;

// Computer counter
let computerPoints = 0;

/**
 * Render clash result.
 * @param {Number} user = user's hand choice.
 * @param {Number} computer = computer's hand choice.
 * @return renders in DOM the result.
 */
const renderResult = (user, computer) => {
  // Get DOM div
  let resultDiv = document.getElementById("result");
  let userPointsDiv = document.getElementById("userPoints");
  let computerPointsDiv = document.getElementById("computerPoints");

  // Conditionals
  if (
    (user == 0 && computer == 0) ||
    (user == 1 && computer == 1) ||
    (user == 2 && computer == 2)
  ) {
    resultDiv.innerText = "Tie!";
  } else if (
    (user == 0 && computer == 1) ||
    (user == 1 && computer == 2) ||
    (user == 2 && computer == 0)
  ) {
    resultDiv.innerText = "Computer wins!";
    computerPoints++;
    computerPointsDiv.innerText = `Points: ${computerPoints}`;
  } else if (
    (user == 0 && computer == 2) ||
    (user == 1 && computer == 0) ||
    (user == 2 && computer == 1)
  ) {
    resultDiv.innerText = "User wins!";
    userPoints++;
    userPointsDiv.innerText = `Points: ${userPoints}`;
  }
};

/**
 * Main function.
 * @param {Number} choice = user's hand choice.
 * @return Executes all other functions.
 */
const main = (choice) => {
  let computer = computerChoice();
  changeUserImg(choice);
  changeComputerImg(computer);
  renderResult(choice, computer);
};

/**
 * Reset.
 * @param {void}.
 * @return Resets all the values.
 */
const resetGame = (_) => {
  userPoints = 0;
  computerPoints = 0;
  let userPointsDiv = document.getElementById("userPoints");
  let computerPointsDiv = document.getElementById("computerPoints");
  let resultDiv = document.getElementById("result");
  userPointsDiv.innerText = "Points: 0";
  computerPointsDiv.innerText = "Points: 0";
  resultDiv.innerText = "Choose your hand";
  changeUserImg(3);
  changeComputerImg(3);
};