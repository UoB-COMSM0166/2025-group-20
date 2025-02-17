let mode = 0;
let gameFont, appleImg;
let gravity = 0.1;

let fruitList = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'grape', 'watermelon', 'bomb']; //one more fruit needed
let sliceList = ['up', 'down', 'left', 'right', 'lrdown', 'rlup', 'rldown', 'lrup', 'bomb']; //line up exactly with corresponding fruit above
let fruitImgs, fruit = [];

let smoothieDisplay, lifeIcons; 


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
