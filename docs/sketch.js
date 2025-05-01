//import cursorEffect = require("./cursorEffect");

// global variables
let gameFont;
// array of the fruits and vegetables 
let fruitList = ['apple', 'banana', 'blueberry', 'lemon', 'cherry', 'grape', 'watermelon', 'dragonfruit', 'bomb']; //one more fruit needed
let sliceList = ['up', 'down','click', 'left', 'right', 'lrdown/rlup', 'rldown/lrup', 'click','bomb']; //line up exactly with corresponding fruit above
let fruitImgs = [];
let sliceImgs = [];
let patImgs = [];
let fruit = [];
let fruitOnScreen = [];
let splatters = [];
let bg;
let lifeIcons;
let currentRecipe;
let sound;
//let leftImg, rightImg;

let gameManager;
let audioController;


function preload() {
  // loads material used in start screen

  audioController = new AudioController();
  audioController.preload();
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  bg = loadImage('Images/Game%20Screen%20Background.png');
  bombImg = loadImage('Images/bomb.png');
  //change the image path after pushing it to main

  // loads fruit images to the fruitImgs array
  for (let i = 0; i < fruitList.length; i++) {
    fruitImgs[i] = loadImage('Images/' + fruitList[i] + '.png');
  }
  for (let i = 0; i < fruitList.length - 1; i++) {
    sliceImgs[i] = loadImage('Images/' + fruitList[i] + '-slice.png');
  }
  for (let i = 0; i < fruitList.length; i++) {
    patImgs[i] = loadImage('Images/' + fruitList[i] + 'Pat.png');
  }


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60); // most computers default to 60fps
  cursorEffects = new GameCursorEffects();
  easyGameScore = new PointSystem();
  hardGameScore = new PointSystem();
  easyHighestScore = new HighestPointDisplay(); // you can add mode if you want
  hardHighestScore = new HighestPointDisplay();
  cursorEffects = new GameCursorEffects();
  fruitGenerator = new FruitGenerator(fruitList, fruitImgs, sliceList);
  pauseMenu = new PauseMenu();
  gameManager = new GameManager(); 
  musicButton = new MusicButton(); 
}

function draw() {
  gameManager.render();
}

function keyPressed() {
  if (keyCode === ENTER && gameManager.state === "start") {
    gameManager.resetGameScreen();
    gameManager.switchState("game");
  }
  if (keyCode === LEFT_ARROW || key === 'a'){
    gameManager.basket.move('left');
  }
  else if (keyCode === RIGHT_ARROW || key === 'd'){
    gameManager.basket.move('right');
  }
}

function windowResized() {
  let minW = 800; 
  let minH = 600; 
  resizeCanvas(max(windowWidth, minW), max(windowHeight, minH));
}
