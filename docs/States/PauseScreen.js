class PauseScreen {
  constructor() {
    this.pauseButtons();
  }

  //draws pause screen
  drawScreen() {
    buttonWrapper.style.marginTop = '110px';
    if (!buttonWrapper.contains(this.pauseTitle)) {
      buttonWrapper.appendChild(this.pauseTitle);
    }
    if (!buttonWrapper.contains(this.resume)) {
      buttonWrapper.appendChild(this.resume);
    }
    if (!buttonWrapper.contains(this.restart)) {
      buttonWrapper.appendChild(this.restart);
    }
    if (!buttonWrapper.contains(this.mainMenu)) {
      buttonWrapper.appendChild(this.mainMenu);
    }
  }

  //loads in pause screen buttons
  pauseButtons() {
  // title 
  this.pauseTitle = document.createElement('button');
  this.pauseTitle.className = 'title';
  this.pauseTitle.textContent = 'pause';
  this.pauseTitle.style.borderBlockStyle = 'solid';
  this.pauseTitle.style.background = 'none';
  this.pauseTitle.style.fontSize = '100px';
  this.pauseTitle.style.marginTop = '100px';
  
  // resume
  this.resume = document.createElement('button');
  this.resume.className = 'button';
  this.resume.textContent = 'resume';
  this.resume.addEventListener('click', function() {
    clearMainMenu();
    loop();
  });

  // restart
  this.restart = document.createElement('button');
  this.restart.className = 'button';
  this.restart.textContent = 'restart';
  this.restart.addEventListener('click', function() {
    gameManager.setGameLost(false);
    clearMainMenu();
    gameManager.resetGame();
    loop();
  });

  // main menu
  this.mainMenu = document.createElement('button');
  this.mainMenu.className = 'button';
  this.mainMenu.textContent = 'main menu';
  this.mainMenu.addEventListener('click', function() {
    gameManager.setGameLost(false);
    loop();
    startScreen();
  });
  }
}