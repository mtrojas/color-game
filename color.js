var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init(); //we put here everything we need to run when the page loads 

function init() {
  //first we add our modeButtons listeners
  setupModeButtons();
  //then we add our squares listeners 
  setupSquares(); 
  //after we set up everything, we want to reset our screen
  reset();   
}

//we will create a new function that completes repeated tasks

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change the message to be "New Colors, instead of "Play Again"
  resetButton.textContent = "New Colors"
  //clean up the message "Correct" to play again after winning
  messageDisplay.textContent = "";
  //change colors of squares on the page
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block"; //this line is meant to show again all the squares when go from easy mode to hard mode 
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";  
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //we need to update the numSquares value according to mode,
      //and we are using a ternary operator instead of an if
      this.textContent ==="Easy" ? numSquares = 3 : numSquares = 6;
      reset(); 
    });
  }
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323"; 
        messageDisplay.textContent = "Try Again";
      }
    });
  } 
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    // change each color to match pickedColor
    squares[i].style.backgroundColor = color;
   }
 }

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num; i++) {
  //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
 }  

function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}



