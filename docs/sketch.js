// global variables
var mode = 0;
let gameFont, appleImg;
var gravity = 0.1;
var displayBorder = false;
// array of the fruits and vegetables 
var fruitList = ['apple', 'banana', 'blueberry', 'lemon', 'cherry', 'grape', 'watermelon', 'bomb']; //one more fruit needed
var sliceList = ['up', 'down','click', 'left', 'right', 'lrdown/rlup', 'rldown/lrup', 'bomb']; //line up exactly with corresponding fruit above
var fruitImgs = [];
var fruit = [];
let bg;
var lifeIcons;
var currentRecipe;
var gameScore;
var highestScore;

function preload() {
  // loads material used in start screen
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/apple.png');
  bg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/923cd18c3e0c776d146c9cb4e9bf10b24d488e40/docs/Background%20Images/Game%20Screen%20Background.png');
  lifeImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/life.png');
  lifelostImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/lifelost.png');
  bombImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/bomb.png');
  // loads fruit images to the fruitImgs array
  for (var i = 0; i < fruitList.length; i++) {
    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // most computers default to 60fps
  highestScore = new HighestPointDisplay(0);
}

function draw() {
  if (mode === 0) {
    drawStartScreen();
    instructionsButton.show();
    

    if (pauseButton){
      pauseButton.hide();
    }
  }
  if (mode === 1){
    instructionScreen();

    if (pauseButton){
      pauseButton.hide();
    }
  }
  if (mode === 2){
    gameScreen();
    redBorder();
    makePauseButton();
    pauseButton.show();
    instructionsButton.hide();
    
  }
  if (mode === 3){
    noLoop();
    drawPauseScreen();
  }
  if (mode == 4){
    drawGameOver();
    pauseButton.hide();
  }
}

function windowResized() {
  let minW = 800; 
  let minH = 600; 
  resizeCanvas(max(windowWidth, minW), max(windowHeight, minH));
}
