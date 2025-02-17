// global variables
var mode = 0;
let gameFont, appleImg;
var gravity = 0.1;
// array of the fruits and vegetables 
var fruitList = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'grape', 'watermelon', 'bomb']; //one more fruit needed
var sliceList = ['up', 'down', 'left', 'right', 'lrdown', 'rlup', 'rldown', 'lrup', 'bomb']; //line up exactly with corresponding fruit above
var fruitImgs = [];
var fruit = [];
let bg;
let smoothieDisplay; 
var lifeIcons;

function preload() {
  // loads material used in start screen
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/apple.png');
  bg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/923cd18c3e0c776d146c9cb4e9bf10b24d488e40/docs/Background%20Images/Game%20Screen%20Background.png');
  lifeImg = loadImage('https://raw.github.com/UoB-COMSM0166/2025-group-20/blob/5ce3bfd96e5c548782dd8be6afe839346ab5babc/docs/Images/heart.png');
  lifelostImg = loadImage('https://raw.github.com/UoB-COMSM0166/2025-group-20/blob/5ce3bfd96e5c548782dd8be6afe839346ab5babc/docs/Images/heart-empty.png');
  
  // loads fruit images to the fruitImgs array
  for (var i = 0; i < fruitList.length; i++) {
    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // most computers default to 60fps
  lifeIcons = new LifeIcons();
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
  let minW = 800; 
  let minH = 600; 
  resizeCanvas(max(windowWidth, minW), max(windowHeight, minH));

}
