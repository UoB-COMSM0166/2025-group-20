let container;
let buttonWrapper;
let themeMusic;
let gameManager;
let gameover;
let soundImg;
let gameFont;
let canvas; let overlay;
let pauseButton;
let pauseScreen;
let bottomCorner;
let width;
let height;
let optionsTitle; let optionsP2; let optionsSound; let optionsCursor;
let backButton;
let bg;
let tutorialManager;
let tutorial;
let cursorEffect;
let cursorTrail;
let soundEffect;
let slicingSound;
let scratchTrail = [];
let fadeSpeed = 1.5;
let maxScratchLength = 30;
let baseTaper = 15;
let clicked;

//sets up and loads initial global variable and objects required for game startup
function setup() {
  bg = loadImage('Design/Images/gameBg.png');
  slicingSound = loadSound('Design/Audio/soundSlicing.wav');
  container = document.getElementById('gameContainer');
  width = container.clientWidth;
  height = container.clientHeight;
  canvas = createCanvas(width, height);
  canvas.parent('gameContainer');
  overlay = createGraphics(width, height);
  overlay.clear();
  frameRate(60);
  bottomCorner = document.createElement('div');
  bottomCorner.className = 'bottom-right-container';
  container.appendChild(bottomCorner);
  themeMusic = createAudio('Design/Audio/ThemeSong.wav');
  buttonWrapper = document.createElement('div');
  buttonWrapper.className = 'button-wrapper';
  container.appendChild(buttonWrapper);
  gameFont = loadFont('Design/Blockblueprint-LV7z5.ttf');
  gameManager = new GameManager();
  makeMenuButtons();
  gameover = new Gameover();
  pauseScreen = new PauseScreen();
  tutorialManager = new TutorialManager();
  cursorTrail = [];
  tutorial = false;
  cursorEffect = false;
  soundEffect = false;
  clicked = false;
  startScreen();
}

//draws and calls all relevant functions for the different game states
function draw() {
  //tutorial state
  if (tutorial){
    tutorialManager.drawTutorialScreen();
  }
  else if (gameManager.getMode() !== null && gameManager.getStartGame()) {
    //main game play loop
    gameManager.gameState();
    gameManager.activateEffects();
  }
  else if (gameManager.getLostGame()) {
    //game over state
    gameover.draw();
  }
  else {
    //clears canvas when needed
    canvas.clear();
  }

  //displays cursor effect when activated
  if (cursorEffect) {
    showCursor();
  }

  // Used as part of clicked hitbox logic
  if (!mouseIsPressed){
    clicked = false;
  }

  //handles relevant user keyboard interaction
  if (gameManager.get2Control() === 'arrow') {
    if (keyIsDown(RIGHT_ARROW)) {
      gameManager.getBasket().move('right');
    }
    if (keyIsDown(LEFT_ARROW)) {
      gameManager.getBasket().move('left');
    }
  }
  if (gameManager.get2Control() === 'aswd') {
    if (keyIsDown(68)) {
      gameManager.getBasket().move('right');
    }
    if (keyIsDown(65)) {
      gameManager.getBasket().move('left');
    }
  }
  image(overlay, 0, 0);
}

//Allows music to be muted during any game state using m button
function keyPressed() {
  if (key === 'm' || key === 'M') {
    toggleSound();
  }
}

//Handles the start screen state
function startScreen() {
  // clears screen
  clearMainMenu();
  buttonWrapper.style.marginTop = '5px';
  gameManager.hideRecipeBook();
  gameManager.setMode(null);
  gameManager.setStartGame(false);
  gameManager.resetGame();
  tutorialManager.resetTutorial();
  pauseButton.style.display = 'none'
  // draws settings button on the screen
  const topLeftContainer = document.createElement('div');
  topLeftContainer.className = 'top-left-container';
  document.body.appendChild(topLeftContainer);
  const settingsBtn = document.createElement('button');
  settingsBtn.classList.add('imageButton');
  const settingsImg = document.createElement('img');
  settingsImg.src = 'Design/Images/settings-button.png';
  settingsImg.alt = 'settings';
  settingsImg.style.width = '50px';
  settingsBtn.appendChild(settingsImg);
  topLeftContainer.style.marginTop = '-30px';
  topLeftContainer.appendChild(settingsBtn);
  settingsBtn.addEventListener('click', function() {
    optionsScreen();
  }); 
  // draws mute button on screen
  const soundBtn = document.createElement('button');
  soundBtn.classList.add('imageButton');
  soundImg = document.createElement('img');
  if (themeMusic.elt.paused) {
    soundImg.src = 'Design/Images/unmute-button.png';
    soundImg.alt = 'no sound';
  }
  else {
    soundImg.src = 'Design/Images/mute-button.png';
    soundImg.alt = 'sound';
  }  
  soundImg.style.width = '50px';
  soundBtn.appendChild(soundImg);
  topLeftContainer.appendChild(soundBtn);
  buttonWrapper.appendChild(topLeftContainer);
  soundBtn.addEventListener('click', function() {
    toggleSound();
  })
  // draws the title on screen
  const titleImg = document.createElement('img');
  titleImg.src = 'Design/Images/game-title.png';
  titleImg.alt = 'title';
  titleImg.style.width = '900px';
  titleImg.style.height = 'auto';
  buttonWrapper.appendChild(titleImg);
  //container.prepend(optionsBtn);
  // draws player buttons on screen
  const centerButtons = document.createElement('div');
  centerButtons.className = 'center-buttons';
  buttonWrapper.appendChild(centerButtons);
  const onePlayerBtn = document.createElement('button');
  onePlayerBtn.classList.add('imageButton');
  const p1Img = document.createElement('img');
  p1Img.src = 'Design/Images/one-player.png';
  p1Img.alt = 'one player';
  p1Img.style.width = '180px';
  p1Img.style.height = 'auto';
  onePlayerBtn.appendChild(p1Img);
  const twoPlayerBtn = document.createElement('button');
  twoPlayerBtn.classList.add('imageButton');
  const p2Img = document.createElement('img');
  p2Img.src = 'Design/Images/two-player.png';
  p2Img.alt = 'two player';
  p2Img.style.width = '180px';
  p2Img.style.height = 'auto';
  twoPlayerBtn.appendChild(p2Img);
  centerButtons.appendChild(onePlayerBtn);
  centerButtons.appendChild(twoPlayerBtn);
  onePlayerBtn.addEventListener('click', function() {
    gameManager.setCoop(false);
    selectGame();
  });
  twoPlayerBtn.addEventListener('click', function() {
    gameManager.setCoop(true);
    selectGame();
  });
  const centerButtons2 = document.createElement('div');
  centerButtons2.className = 'center-buttons';
  buttonWrapper.appendChild(centerButtons2);
  // draws tutorial button on screen
  const trainingBtn = document.createElement('button');
  trainingBtn.classList.add('imageButton');
  const trainingImg = document.createElement('img');
  trainingImg.src = 'Design/Images/training-dojo.png';
  trainingImg.alt = 'training dojo';
  trainingImg.style.width = '180px';
  trainingImg.style.height = 'auto';
  trainingBtn.appendChild(trainingImg);
  centerButtons2.appendChild(trainingBtn);
  trainingBtn.addEventListener('click', function() {
    clearMainMenu();
    tutorial = true;
    const backBtn = document.createElement('button');
    backBtn.className = 'button';
    backBtn.textContent = 'back';
    backBtn.style.position = 'absolute';
    backBtn.style.top = '650px';
    backBtn.style.right = '15px';
    buttonWrapper.appendChild(backBtn);
    backBtn.addEventListener('click', function(){
      tutorial = false;
      startScreen();
    });
  });
  // draws quit button on screen
  const exitBtn = document.createElement('button');
  exitBtn.classList.add('imageButton');
  const exitImg = document.createElement('img');
  exitImg.src = 'Design/Images/quit-game.png';
  exitImg.alt = 'exit game';
  exitImg.style.width = '140px';
  exitImg.style.height = 'auto';
  exitBtn.appendChild(exitImg);
  centerButtons2.appendChild(exitBtn);
  exitBtn.addEventListener('click', function() {
    window.history.back();
  });
}

//clears screen of any buttons
function clearMainMenu() {
  buttonWrapper.innerHTML = '';

}

//handles all game type selection UI
function selectGame() {
  // clears main menu
  clearMainMenu();
  buttonWrapper.style.marginTop = '30px';
  // draws title on screen
  const titleBtn = document.createElement('button');
  titleBtn.className = 'title';
  titleBtn.textContent = 'choose your recipe';
  titleBtn.style.fontSize = '80px';
  titleBtn.style.borderBlockStyle = 'solid';
  titleBtn.style.borderColor = 'white';
  titleBtn.style.marginTop = '-10px';
  titleBtn.style.marginBottom = '90px';
  buttonWrapper.appendChild(titleBtn);
  // draws mode buttons on screen
  const centerButtons = document.createElement('div');
  centerButtons.className = 'center-buttons';
  centerButtons.style.gap = '50px';
  centerButtons.style.marginTop = '-60px';
  buttonWrapper.appendChild(centerButtons);
  const ninjaBtn = document.createElement('button');
  ninjaBtn.classList.add('imageButton');
  const ninjaImg = document.createElement('img');
  ninjaImg.src = 'Design/Images/ninja-level.png';
  ninjaImg.alt = 'ninja';
  ninjaBtn.appendChild(ninjaImg);

  const samuraiBtn = document.createElement('button');
  samuraiBtn.classList.add('imageButton');
  const samuraiImg = document.createElement('img');
  samuraiImg.src = 'Design/Images/samurai-level.png';
  samuraiImg.alt = 'ninja';
  samuraiBtn.appendChild(samuraiImg);
  centerButtons.appendChild(ninjaBtn);
  centerButtons.appendChild(samuraiBtn);
  ninjaBtn.addEventListener('click', function() {
    ninjaImg.style.opacity = '1.0';
    samuraiImg.style.opacity = '0.3';
    gameManager.setMode('easy');
  });
  samuraiBtn.addEventListener('click', function() {
    samuraiImg.style.opacity = '1.0';
    ninjaImg.style.opacity = '0.3';
    gameManager.setMode('hard');
  });
  // draws back button on screen
  const playBtn = document.createElement('modeButton');
  playBtn.className = 'modeButton';
  playBtn.textContent = 'play';
  buttonWrapper.appendChild(playBtn);
  playBtn.addEventListener('click', function() {
    if (gameManager.getMode() !== null) {
      clearMainMenu();
      gameManager.setStartGame(true);
    }  
    else if (gameManager.getMode() === null) {
      flashImage(ninjaBtn);
      flashImage(samuraiBtn);
    }
  });
  const bottomBtn1 = document.createElement('modeButton');
  bottomBtn1.className = 'modeButton';
  bottomBtn1.textContent = 'back';
  buttonWrapper.appendChild(bottomBtn1);
  bottomBtn1.addEventListener('click', function() {
    startScreen();
  });
}

//Displays all buttons in settings
function optionsScreen() {
  clearMainMenu();
  buttonWrapper.style.marginTop = '80px';
  buttonWrapper.appendChild(optionsTitle);
  buttonWrapper.appendChild(optionsP2);
  buttonWrapper.appendChild(optionsSound);
  buttonWrapper.appendChild(optionsCursor);
  buttonWrapper.appendChild(backButton);
}

//Additional graphical enhancement
function flashImage(imgElement) {
  imgElement.style.animation = 'none';
  imgElement.offsetHeight;
  imgElement.style.animation = 'flashEffect 1s ease-in-out 1.5';
}

//Handles sound/mute button graphics and logic
function toggleSound() {
  if (soundImg.alt === 'no sound') {
    soundImg.src = 'Design/Images/mute-button.png';
    soundImg.alt = 'sound';
    themeMusic.play();
    themeMusic.loop();
    return
  }
  soundImg.src = 'Design/Images/unmute-button.png';
  soundImg.alt = 'no sound';
  themeMusic.pause();
}


//Displays and handles all relevant main buttons
function makeMenuButtons() {
  // Creates pause button
  pauseButton = document.createElement('button');
  pauseButton.className = 'button';
  pauseButton.textContent = '||';
  pauseButton.style.fontSize = '40px'; 
  pauseButton.style.fontWeight = '900'; 
  bottomCorner.appendChild(pauseButton);
  pauseButton.style.display = 'none';
  pauseButton.addEventListener('click', () => {
    noLoop();
    pauseScreen.drawScreen();
  });

  // Creates options title
  optionsTitle = document.createElement('button');
  optionsTitle.className = 'title';
  optionsTitle.textContent = 'settings';
  optionsTitle.style.fontSize = '80px';
  optionsTitle.style.borderBlockStyle = 'solid';
  optionsTitle.style.borderColor = '#DDB78E';
  optionsTitle.style.marginTop = '-10px';
  optionsTitle.style.marginBottom = '90px';

  // creates player 2 options
  optionsP2 = document.createElement('div');
  optionsP2.className = 'horizontal-group';
  const cntrlTxt = document.createElement('button');
  cntrlTxt.className = 'title';
  cntrlTxt.textContent = 'player 2 controls';
  cntrlTxt.style.fontSize = '40px';
  cntrlTxt.style.width = '400px';
  optionsP2.appendChild(cntrlTxt);
  const arrowBtn = document.createElement('button');
  arrowBtn.classList.add('imageButton');
  const arrowImg = document.createElement('img');
  arrowImg.src = 'Design/Images/arrow-cntrl.png';
  arrowImg.alt = 'arrow';
  arrowImg.style.width = '200px';
  arrowBtn.appendChild(arrowImg);
  const aswdBtn = document.createElement('button');
  aswdBtn.classList.add('imageButton');
  const aswdImg = document.createElement('img');
  aswdImg.src = 'Design/Images/aswd-cntrl.png';
  aswdImg.alt = 'aswd';
  aswdImg.style.width = '200px';
  aswdBtn.appendChild(aswdImg);
  aswdBtn.style.opacity = '1.0';
  arrowBtn.style.opacity = '0.6';
  optionsP2.appendChild(arrowBtn);
  optionsP2.appendChild(aswdBtn);

  arrowBtn.addEventListener('click', function() {
    gameManager.set2Control('arrow');
    arrowBtn.style.opacity = '1.0';
    aswdBtn.style.opacity = '0.6';
  });
  aswdBtn.addEventListener('click', function() {
    gameManager.set2Control('aswd');
    aswdBtn.style.opacity = '1.0';
    arrowBtn.style.opacity = '0.6';
  });

  // creates sound effect option
  optionsSound = document.createElement('div');
  optionsSound.className = 'horizontal-group';
  const soundTxt = document.createElement('button');
  soundTxt.className = 'title';
  soundTxt.textContent = 'sound effects';
  soundTxt.style.fontSize = '40px';
  soundTxt.style.width = '300px';
  optionsSound.appendChild(soundTxt);
  const onButton1 = document.createElement('button');
  onButton1.className = 'button';
  onButton1.textContent = 'on';
  optionsSound.appendChild(onButton1);
  const offButton1 = document.createElement('button');
  offButton1.className = 'button';
  offButton1.textContent = 'off';
  optionsSound.appendChild(offButton1);
  optionsSound.style.gap = '110px';
  offButton1.style.opacity = '1.0';
  onButton1.style.opacity = '0.6';

  onButton1.addEventListener('click', function() {
    soundEffect = true;
    onButton1.style.opacity = '1.0';
    offButton1.style.opacity = '0.6';
  });
  offButton1.addEventListener('click', function() {
    soundEffect = false;
    offButton1.style.opacity = '1.0';
    onButton1.style.opacity = '0.6';
  });

  // creates cursor effect option
  optionsCursor = document.createElement('div');
  optionsCursor.className = 'horizontal-group';
  const cursorTxt = document.createElement('button');
  cursorTxt.className = 'title';
  cursorTxt.textContent = 'cursor effects';
  cursorTxt.style.fontSize = '40px';
  cursorTxt.style.width = '300px';
  optionsCursor.appendChild(cursorTxt);
  const onButton = document.createElement('button');
  onButton.className = 'button';
  onButton.textContent = 'on';
  optionsCursor.appendChild(onButton);
  const offButton = document.createElement('button');
  offButton.className = 'button';
  offButton.textContent = 'off';
  offButton.style.opacity = '1.0';
  onButton.style.opacity = '0.6';
  optionsCursor.appendChild(offButton);
  optionsCursor.style.gap = '110px';

  onButton.addEventListener('click', function() {
    cursorEffect = true;
    onButton.style.opacity = '1.0';
    offButton.style.opacity = '0.6';
  });
  offButton.addEventListener('click', function() {
    cursorEffect = false;
    cursorTrail = [];
    offButton.style.opacity = '1.0';
    onButton.style.opacity = '0.6';
  });

  // creates back button
  backButton = document.createElement('button');
  backButton.className = 'button';
  backButton.textContent = 'back';
  backButton.style.marginTop = '60px';
  backButton.addEventListener('click', function() {
    startScreen();
  });
}

//adjusts certain variables for resizing between different screen sizes
function windowResized() {
  container = document.getElementById('gameContainer');
  width = container.clientWidth;
  height = container.clientHeight;

  resizeCanvas(width, height);
}

//Handles cursor effect logic
function showCursor() {
  if (mouseIsPressed) {
    cursorTrail.push({x: mouseX, y: mouseY, alpha: 255});
  }
  if (cursorTrail.length > 50) {
    cursorTrail.shift();
  }

  for (let i = 0; i < cursorTrail.length; i++) {
    let t = cursorTrail[i];
    fill(255, 255, 255, t.alpha);
    stroke(255, 255, 255, t.alpha);
    drawingContext.shadowColor = color(255, 255, 255, t.alpha);
    rectMode(CENTER);
    rect(t.x, t.y, 10, 10);
    t.alpha -= 5;
  }
}

//Handles subtle scratch effect on wall
function scratchCursorEffect() {
  if (mouseIsPressed) {
    scratchTrail.push({
      x: mouseX,
      y: mouseY,
      alpha: 255
    });
    if (scratchTrail.length > maxScratchLength) { 
      scratchTrail.shift(); 
    }
  } else {
    // Clear trail when mouse is not pressed
    scratchTrail = [];
  }

  // Fade and remove old points
  for (let point of scratchTrail) {
    point.alpha -= fadeSpeed;
  }
  scratchTrail = scratchTrail.filter(p => p.alpha > 0);

  // Draw trail
  push();
  noStroke();
  for (let i = 1; i < scratchTrail.length; i++) {
    let p1 = scratchTrail[i - 1];
    let p2 = scratchTrail[i];

    let dx = p2.x - p1.x;
    let dy = p2.y - p1.y;
    let angle = atan2(dy, dx);

    let progress = i / scratchTrail.length;
    let taper = baseTaper * (1 - abs(0.5 - progress) * 2); 
    let alpha = min(p1.alpha, p2.alpha);

    // --- light brown edges on the shape for dimension ---
    fill(150, 95, 45, alpha * 0.3);
    beginShape();
    vertex(p1.x - taper * 0.4 * sin(angle), p1.y + taper * 0.4 * cos(angle));
    vertex(p1.x - taper * 0.2 * sin(angle), p1.y + taper * 0.2 * cos(angle));
    vertex(p2.x - taper * 0.2 * sin(angle), p2.y + taper * 0.2 * cos(angle));
    vertex(p2.x - taper * 0.4 * sin(angle), p2.y + taper * 0.4 * cos(angle));
    endShape(CLOSE);

    beginShape();
    vertex(p1.x + taper * 0.4 * sin(angle), p1.y - taper * 0.4 * cos(angle));
    vertex(p1.x + taper * 0.2 * sin(angle), p1.y - taper * 0.2 * cos(angle));
    vertex(p2.x + taper * 0.2 * sin(angle), p2.y - taper * 0.2 * cos(angle));
    vertex(p2.x + taper * 0.4 * sin(angle), p2.y - taper * 0.4 * cos(angle));
    endShape(CLOSE);

    // --- dark brown indent/scratch/burn line ---
    fill(62, 35, 25, alpha);
    beginShape();
    vertex(p1.x - taper * 0.3 * sin(angle), p1.y + taper * 0.3 * cos(angle));
    vertex(p1.x + taper * 0.3 * sin(angle), p1.y - taper * 0.3 * cos(angle));
    vertex(p2.x + taper * 0.3 * sin(angle), p2.y - taper * 0.3 * cos(angle));
    vertex(p2.x - taper * 0.3 * sin(angle), p2.y + taper * 0.3 * cos(angle));
    endShape(CLOSE);
  }
  pop();
}

//Utilised during click hitbox logic
function mouseClicked(){
  clicked = true;
}

