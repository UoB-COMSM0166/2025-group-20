//import cursorEffect = require("./cursorEffect");

// global variables
let gameFont;
let gravity = 0.1;
let displayBorder = false;
let displayGreen = false;
let recipeComplete = false;
let wrongSlice = false;
let correctSlice = false;
// array of the fruits and vegetables 
let fruitList = ['apple', 'banana', 'blueberry', 'lemon', 'cherry', 'grape', 'watermelon', 'dragonfruit', 'bomb']; //one more fruit needed
let sliceList = ['up', 'down','click', 'left', 'right', 'lrdown/rlup', 'rldown/lrup', 'click','bomb']; //line up exactly with corresponding fruit above
let sliceNarration = ['upwards', 'downwards','by clicking', 'to the left', 'to the right', 'top-left to bottom-right', 'top-right to bottom-left', 'to gain a life!', 'or you will lose!'];
let fruitImgs = [];
let sliceImgs = [];
let patImgs = [];
let fruit = [];
let fruitOnScreen = [];
let splatters = [];
let bg;
let lifeIcons;
let currentRecipe;
let easyGameScore;
let hardGameScore;
let easyHighestScore;
let hardHighestScore;
let sound;
let maxHeight;
let difficulty = 'easy';
let leftImg, rightImg;

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
  leftImg = loadImage('Images/left.png');
  rightImg = loadImage('Images/right.png');

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
  maxHeight = windowHeight * 0.00125;
  frameRate(60); // most computers default to 60fps
  easyGameScore = new PointSystem();
  hardGameScore = new PointSystem();
  easyHighestScore = new HighestPointDisplay(0); // you can add mode if you want
  hardHighestScore = new HighestPointDisplay(0);
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
    gameManager.getGameScreen().freshGameScreen();
    gameManager.switchState("game");
  }
  if (keyCode === LEFT_ARROW){
    gameManager.basket.move('left');
  }
  else if (keyCode === RIGHT_ARROW){
    gameManager.basket.move('right');
  }
}

function windowResized() {
  let minW = 800; 
  let minH = 600; 
  resizeCanvas(max(windowWidth, minW), max(windowHeight, minH));
}
