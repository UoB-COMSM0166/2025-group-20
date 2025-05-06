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

function setup() {
  bg = loadImage('Design/Images/gameBg.png');
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
  tutorial = false;
  startScreen();
}

function draw() {
  if (tutorial){
    tutorialScreen();
  }
  else if (gameManager.getMode() !== null && gameManager.getStartGame()) {
    gameManager.gameState();
    gameManager.activateEffects();
  }
  else if (gameManager.getLostGame()) {
    gameover.draw();
  }
  else {
    canvas.clear();
  }  
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

function keyPressed() {
  if (key === 'm' || key === 'M') {
    toggleSound();
  }
}

function startScreen() {
  // clears screen
  clearMainMenu();
  gameManager.hideRecipeBook();
  gameManager.setMode(null);
  gameManager.setStartGame(false);
  gameManager.resetGame();
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
  const titleBtn = document.createElement('button');
  titleBtn.className = 'title';
  titleBtn.textContent = 'smoothie\noperator';
  buttonWrapper.appendChild(titleBtn);
  //container.prepend(optionsBtn);
  // draws player buttons on screen
  const centerButtons = document.createElement('div');
  centerButtons.className = 'center-buttons';
  buttonWrapper.appendChild(centerButtons);
  const onePlayerBtn = document.createElement('button');
  onePlayerBtn.className = 'button';
  onePlayerBtn.textContent = 'one player';
  const twoPlayerBtn = document.createElement('button');
  twoPlayerBtn.className = 'button';
  twoPlayerBtn.textContent = 'two player';
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
  // draws tutorial button on screen
  const trainingBtn = document.createElement('button');
  trainingBtn.className = 'button';
  trainingBtn.textContent = 'training dojo';
  buttonWrapper.appendChild(trainingBtn);
  trainingBtn.addEventListener('click', function() {
    tutorialManager = new TutorialManager();
    tutorial = true;
  });
  // draws quit button on screen
  const bottomBtn = document.createElement('button');
  bottomBtn.className = 'button';
  bottomBtn.textContent = 'quit';
  buttonWrapper.appendChild(bottomBtn);
  bottomBtn.addEventListener('click', function() {
    window.history.back();
  });
}

function clearMainMenu() {
  buttonWrapper.innerHTML = '';

}

function selectGame() {
  // clears main menu
  clearMainMenu();
  // draws title on screen
  const titleBtn = document.createElement('button');
  titleBtn.className = 'title';
  titleBtn.textContent = 'choose your recipe';
  titleBtn.style.fontSize = '80px';
  titleBtn.style.borderBlockStyle = 'solid';
  titleBtn.style.borderColor = '#DDB78E';
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
    samuraiImg.style.opacity = '0.6';
    gameManager.setMode('easy');
  });
  samuraiBtn.addEventListener('click', function() {
    samuraiImg.style.opacity = '1.0';
    ninjaImg.style.opacity = '0.6';
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

function tutorialScreen() {
  // clears main menu
  clearMainMenu();

  // draws tutorial screen
  tutorialManager.drawTutorialScreen();

  // draws back button on screen
  const bottomBtn = document.createElement('button');
  bottomBtn.className = 'button';
  bottomBtn.textContent = 'back';
  buttonWrapper.appendChild(bottomBtn);
  bottomBtn.addEventListener('click', function(){
    tutorial = false;
    startScreen();
  });
}

function optionsScreen() {
  clearMainMenu();
  buttonWrapper.appendChild(optionsTitle);
  buttonWrapper.appendChild(optionsP2);
  buttonWrapper.appendChild(optionsSound);
  buttonWrapper.appendChild(optionsCursor);
  buttonWrapper.appendChild(backButton);
}

function flashImage(imgElement) {
  imgElement.style.animation = 'none';
  imgElement.offsetHeight;
  imgElement.style.animation = 'flashEffect 1s ease-in-out 1.5';
}

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

function makeMenuButtons() {
  // Creates pause button
  pauseButton = document.createElement('button');
  pauseButton.className = 'button';
  pauseButton.textContent = 'II';
  bottomCorner.appendChild(pauseButton);
  pauseButton.style.display = 'none';
  pauseButton.addEventListener('click', () => { 
    cursor();
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
    gameManager.setSoundEffect(true);
    onButton1.style.opacity = '1.0';
    offButton1.style.opacity = '0.6';
  });
  offButton1.addEventListener('click', function() {
    gameManager.setSoundEffect(false);
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
    gameManager.setCursorEffect(true);
    onButton.style.opacity = '1.0';
    offButton.style.opacity = '0.6';
  });
  offButton.addEventListener('click', function() {
    gameManager.setCursorEffect(false);
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

function windowResized() {
  container = document.getElementById('gameContainer');
  width = container.clientWidth;
  height = container.clientHeight;

  resizeCanvas(width, height);
}
