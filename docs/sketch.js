// global variables
var mode = 0;
let gameFont, appleImg;
var gravity = 0.1;
// array of the fruits and vegetables 
var fruitList = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'grape', 'watermelon', 'bomb'];
var fruitImgs = [];

function preload() {
  // loads material used in start screen
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/fruits/apple.png');
  
  // loads fruit images to the fruitImgs array
  for (var i = 0; i < fruitList.length; i++) {
    fruitImgs[i] = loadImage('Images/' + fruitList[i] + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // most computers default to 60fps
}

function draw() {
  clear();
  if (mode == 0) {
    drawStartScreen();
  }
  if (mode == 1){
    instructionScreen();
  }
  if (mode == 2){
    gameScreen();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

