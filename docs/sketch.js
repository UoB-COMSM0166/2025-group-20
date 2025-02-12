var mode;
let gameFont;


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
  if (mode == 0){
    background('black');
    textAlign(CENTER);
    textFont(gameFont);
    fill('seagreen');
    textSize(40);
  
    textFont(gameFont);
    textSize(100);
    text('Smoothie', windowWidth / 3, windowHeight / 2.5);
    textFont(gameFont);
    textSize(100);
    text('Operator', windowWidth / 3, windowHeight / 1.9);
    instructionButton();
    startGameButton();
    }
 
}  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode==ENTER) {
    mode = 0;
  }
}

function instructionButton() {
  let rectWidth = 105;
  let rectHeight = 25;
  fill('lightgoldenrodyellow'); 
  noStroke();
  rect(windowWidth / 3 - rectWidth, windowHeight / 1.6, 210, 50, 20);
  
  fill('black');
  textSize(22);
  textFont(gameFont);
  text("INSTRUCTIONS", windowWidth / 3, windowHeight / 1.49);
  
   if (mouseIsPressed) {
    let buttonX1 = windowWidth / 3 - rectWidth;
    let buttonX2 = windowWidth / 3  + rectWidth;
    let buttonY = windowHeight / 1.6 ;
    if (mouseX >= buttonX1 && mouseX <= buttonX2 + rectWidth && mouseY >= buttonY && mouseY <= buttonY + rectHeight) {
      mode = 2; 
    }
  }
}
/*
function startGameButton() {
  image(appleImg, windowWidth / 1.6, windowHeight / 5.4, 250);
  
  push(); 
  translate(windowWidth / 1.5, windowHeight / 4.4);
  rotate(radians(320)); 
  textFont(gameFont);
  fill('white');
  textSize(20);
  text('SLICE TO START', 0, 0); 
  pop(); 
  
}*/
let angle = 30; 
let angleSpeed = 0.75; 
let angleDirection = 1; 

function startGameButton() {
  image(appleImg, width / 1.6, height / 5.4, 250);

  push();
  translate(width / 1.3, height / 4.4);
  rotate(radians(angle)); // Apply rotation
  textFont(gameFont);
  fill('white');
  textSize(25);
  text('SLICE TO START', 0, 0);
  pop();

  angle += angleSpeed * angleDirection;

  if (angle >= 40 || angle <= 20) {
    angleDirection *= -1;
  }
}

