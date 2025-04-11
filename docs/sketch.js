//import cursorEffect = require("./cursorEffect");

// global variables
let gameFont, appleImg;
let gravity = 0.1;
let displayBorder = false;
let displayGreen = false;
let recipeComplete = false;
let wrongSlice = false;
// array of the fruits and vegetables 
let fruitList = ['apple', 'banana', 'blueberry', 'lemon', 'cherry', 'grape', 'watermelon', 'dragonfruit', 'bomb']; //one more fruit needed
let sliceList = ['up', 'down','click', 'left', 'right', 'lrdown/rlup', 'rldown/lrup', 'bomb']; //line up exactly with corresponding fruit above
let sliceNarration = ['upwards', 'downwards','by clicking', 'to the left', 'to the right', 'top-left to bottom-right', 'top-right to bottom-left', 'bomb'];
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
let appleSliceImg;
let muteButton;
let muted = true;
let startScreenMusic;
let musicPlaying = false;
let leftImg, rightImg;
let cutSound;
let bombSound;

let gameManager;



function preload() {
  // loads material used in start screen

  cutSound = loadSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/2343e3efeadaef5a3f80b76c16b35c4e405ce81e/docs/sounds/soundSlicing.wav');
  bombSound = loadSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/2343e3efeadaef5a3f80b76c16b35c4e405ce81e/docs/sounds/bombSound.wav');
  gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
  appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/apple.png');
  bg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/923cd18c3e0c776d146c9cb4e9bf10b24d488e40/docs/Background%20Images/Game%20Screen%20Background.png');
  lifeImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/life.png');
  lifelostImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/lifelost.png');
  appleSliceImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/refs/heads/main/docs/Images/apple-slice.png');
  bombImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/bomb.png');
  //change the image path after pushing it to main
  leftImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/left.png');
  rightImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/right.png');

  // loads fruit images to the fruitImgs array
  for (let i = 0; i < fruitList.length; i++) {
    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '.png');
  }
  for (let i = 0; i < fruitList.length - 1; i++) {
    sliceImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
  }
  for (let i = 0; i < fruitList.length; i++) {
    patImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + 'Pat.png');
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
}

function draw() {
  gameManager.render();
}

function keyPressed() {
  if (keyCode === ENTER && gameManager.state === "start") {
    freshGameScreen();
    gameManager.switchState("game");
  }
}

function windowResized() {
  let minW = 800; 
  let minH = 600; 
  resizeCanvas(max(windowWidth, minW), max(windowHeight, minH));
}

function playSound(soundLink, loop = false){
  sound = createAudio(soundLink);
  if (loop) {
    sound.loop();
  } else {
    sound.play();
  }
  return sound;
}

/*
function mousePressed() {
  if (mode === 0 && !musicPlaying) {
    startScreenMusic = playSound("https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/smoothieOperatorStart.wav", true);
    startScreenMusic.elt.muted = muted;
    musicPlaying = true;
  }
}

function toggleMute() {
  muted = !muted;
  if (startScreenMusic) {
    startScreenMusic.elt.muted = muted;
  }
  muteButton.html(muted ? "Unmute" : "Mute");
}*/