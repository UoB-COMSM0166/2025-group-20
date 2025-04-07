//import cursorEffect = require("./cursorEffect");

// global variables
var mode = 0;
let gameFont, appleImg;
var gravity = 0.1;
var displayBorder = false;
var displayGreen = false;
var recipeComplete = false;
var wrongSlice = false;
// array of the fruits and vegetables 
var fruitList = ['apple', 'banana', 'blueberry', 'lemon', 'cherry', 'grape', 'watermelon', 'dragonfruit', 'bomb']; //one more fruit needed
var sliceList = ['up', 'down','click', 'left', 'right', 'lrdown/rlup', 'rldown/lrup', 'bomb']; //line up exactly with corresponding fruit above
var fruitImgs = [];
var sliceImgs = [];
var patImgs = [];
var fruit = [];
var fruitOnScreen = [];
var splatterImgs = {};
var splatters = [];
let bg;
var lifeIcons;
var currentRecipe;
var gameScore;
var highestScore;
var sound;
var maxHeight;
var difficulty = 'easy';
let appleSliceImg;

function preload() {
  // loads material used in start screen
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/apple.png');
  bg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/923cd18c3e0c776d146c9cb4e9bf10b24d488e40/docs/Background%20Images/Game%20Screen%20Background.png');
  lifeImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/life.png');
  lifelostImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/lifelost.png');
  appleSliceImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/refs/heads/main/docs/Images/apple-slice.png');
  bombImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/bomb.png');
  // loads fruit images to the fruitImgs array
  for (var i = 0; i < fruitList.length; i++) {
    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '.png');
  }
  for (var i = 0; i < fruitList.length - 1; i++) {
    sliceImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
  }
  for (var i = 0; i < fruitList.length; i++) {
    patImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + 'Pat.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxHeight = windowHeight * 0.00125;
  frameRate(60); // most computers default to 60fps
  highestScore = new HighestPointDisplay(0);
}

function draw() {
  if (mode === 0) {
    drawStartScreen();
    instructionsButton.show();
    easyModeButton.show();
    hardModeButton.show();
    if (recipeButton) {
      recipeButton.hide();
    }
    

    if (pauseButton){
      pauseButton.hide();
    }
  }
  if (mode === 1){
    instructionScreen();

    if (pauseButton){
      pauseButton.hide();
    }
    easyModeButton.hide();
    hardModeButton.hide();
  }
  if (mode === 2){
    gameScreen();
    redBorder();
    greenBorder();
    completionText();
    wrongSliceText();
    makePauseButton();
    if (difficulty != 'easy') {
      makeRecipeButton();
      recipeButton.show();
    }
    else if (recipeButton && difficulty == 'easy') {
      recipeButton.hide();
    }
    pauseButton.show();
    instructionsButton.hide();
    easyModeButton.hide();
    hardModeButton.hide();
  }

  if (mode === 3){
    noLoop();
    drawPauseScreen();
  }
  if (mode == 4){
    drawGameOver();
    pauseButton.hide();
  }
  if(mode === 5){
    instructionObjectivesScreen();
  }
  if(mode === 6){
    instructionControlsScreen();
  }
  if(mode === 7){
    instructionScoringSystemScreen();
  }
  if(mode === 8){
    instructionGameOverConditionsScreen();
  }
  if(mode === 9){
    instructionNavigationScreen();
  }
}

function windowResized() {
  let minW = 800; 
  let minH = 600; 
  resizeCanvas(max(windowWidth, minW), max(windowHeight, minH));
  setupInstructionButtons();
}

function playSound(soundLink){
  sound = createAudio(soundLink);
  sound.play();
}
