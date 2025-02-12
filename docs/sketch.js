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
    drawMainMenu();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

