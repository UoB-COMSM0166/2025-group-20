/*
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
}*/
var mode;
let playButton;
let gameFont;

function preload() {
  gameFont = loadFont("/scarletthurford/FlashFruit.otf");
}

function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  clear();  
  if (mode == 0){
    background('white');
    textAlign(CENTER);
    textFont(gameFont)
    textSize(35);
    text('Press enter to start game', width / 2, height / 2 + 10);
  }
 
}  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode==ENTER) {
    mode = 1;
  }
}
 