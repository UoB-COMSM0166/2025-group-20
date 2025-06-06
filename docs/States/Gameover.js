class Gameover {
  constructor() {
    this.gameoverScreen();
  }

  //draws game over screen
  draw() {
    background(bg);
    pauseButton.style.display = 'none';
    gameManager.hideRecipeBook();
    gameManager.getScore().drawHighScore();
    gameManager.getScore().drawCurrentScore();
    buttonWrapper.style.marginTop = '110px';
    if (!buttonWrapper.contains(this.gameoverTitle)) {
      buttonWrapper.appendChild(this.gameoverTitle);
    }
    if (!buttonWrapper.contains(this.startover)) {
      buttonWrapper.appendChild(this.startover);
    }
    if (!buttonWrapper.contains(this.mainMenu)) {
      buttonWrapper.appendChild(this.mainMenu);
    }
    this.gameoverTitle.style.display = 'block';
  }

  //runs all game over button logic
  gameoverScreen() {
    // title
    this.gameoverTitle = document.createElement('button');
    this.gameoverTitle.className = 'title';
    this.gameoverTitle.textContent = 'game over!';
    this.gameoverTitle.style.borderBlockStyle = 'solid';
    this.gameoverTitle.style.marginBottom = '70px';
    this.gameoverTitle.style.background = 'none';
    this.gameoverTitle.style.fontSize = '150px';
    this.gameoverTitle.style.display = 'none';

    // start over
    this.startover = document.createElement('button');
    this.startover.className = 'button';
    this.startover.textContent = 'start over';
    this.startover.addEventListener('click', () => {
      clearMainMenu();
      gameManager.resetGame();
      gameManager.setStartGame(true);
    });

    // main menu
    this.mainMenu = document.createElement('button');
    this.mainMenu.className = 'button';
    this.mainMenu.textContent = 'main menu';
    this.mainMenu.addEventListener('click', function() {
      gameManager.setGameLost(false);
      startScreen();
    });
  }
} 