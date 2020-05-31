//Generates an array of 6 random colors
var colors = generateRandomColors(6);

//Selects all squares on screen, and saves them in squares array
var squares = document.querySelectorAll(".square");

//Selects a single color from the array of colors
var pickedColor = pickColor();

//Selects the colorDisplay element.
var colorDisplay = document.getElementById("colorDisplay");

//Selects the message (empty to start, will display correct or wrong depending on user answer)
var messageDisplay = document.getElementById("message");

//Selects buttons
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");

//Select the toHide tiles
var toHideTiles = document.querySelectorAll(".toHide");



setSquareColors();


//Colors in the squares and selects a random color.
function setSquareColors() {

  //Sets the colorDisplayElement to the randomly selected color.
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    //Assign colors to squares
    squares[i].style.backgroundColor = colors[i];

    //Add eventListeners to squares
    squares[i].addEventListener("click", function(){
      // alert("you clicked on " + this.style.backgroundColor);

      var clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct."
        resetButton.textContent = "Play again"
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again."
      }
    })
  }
}



//Called when the correct answer is reached. Changes color of all squares to correct color.
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
    document.querySelector("h1").style.backgroundColor = color;
  }
}

//Picks a random color from the array of colors.
function pickColor() {
  var aRandomColorFromColors = Math.floor((Math.random() * colors.length));
  return colors[aRandomColorFromColors];
}

//Generates an array of random colors, of size num,
function generateRandomColors(num) {
  var generatedArray = [];

  for(var i = 0; i < num; i++) {
    generatedArray.push(generateRandomColor());
  }

  return generatedArray;

}

//Generates a single random color.
function generateRandomColor() {

  //Pick a red
  var r = Math.floor((Math.random() * 255 + 1));

  //Pick a green
  var g = Math.floor((Math.random() * 255 + 1));

  //Pick a blue
  var b = Math.floor((Math.random() * 255 + 1));

  return "rgb(" +  r + ", " + g + ", " + b + ")";
}

//Reset button event listener.
reset.addEventListener("click", function() {
  // colors = generateRandomColors(6);
  // pickedColor = pickColor();
  // messageDisplay.textContent = "";
  // setSquareColors();
  // resetButton.textContent = "New Colors"
  // document.querySelector("h1").style.backgroundColor = "#232323";


  if (hardButton.classList.contains("selected")) {
    hardSelected();
  }

  else {
    easySelected();
  }


})

//Easy and hard button eventListeners
easyButton.addEventListener("click", easySelected);

hardButton.addEventListener("click", hardSelected);


function easySelected() {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");

  colors = generateRandomColors(3);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  setSquareColors();
  resetButton.textContent = "New Colors"
  document.querySelector("h1").style.backgroundColor = "steelblue";

  for (var i = 0; i < toHideTiles.length; i++) {
    toHideTiles[i].classList.add("hide");
  }
}

function hardSelected() {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");

  colors = generateRandomColors(6);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  setSquareColors();
  resetButton.textContent = "New Colors"
  document.querySelector("h1").style.backgroundColor = "steelblue";

  for (var i = 0; i < toHideTiles.length; i++) {
    toHideTiles[i].classList.remove("hide");
  }
}
