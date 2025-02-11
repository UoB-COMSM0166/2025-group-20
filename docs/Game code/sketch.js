
let gameState = "intro";
let playButton;

function setup() {
  createCanvas(windowWidth, windowHeight);

  playButton = createButton("Start Game")
}

function draw() {
  background('rgb(100%, 0%, 10%)');

  textAlign(CENTER);
  textSize(50);
  text('START GAME', width / 2, height / 2 + 10);
}  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
