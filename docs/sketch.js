var mode;
let gameFont, appleImg;

function preload() {
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/fruits/apple.png');
}

function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
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

