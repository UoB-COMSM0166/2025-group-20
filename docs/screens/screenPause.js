class PauseMenu {
    constructor() {
      this.pauseButton = new TextButton((windowWidth / 1.08)-150, windowHeight / 1.15, 'Pause Game', () => {
        gameManager.switchState("pause"); // pause mode
      });
      this.resumeButton = new TextButton((windowWidth / 2) - 100, (windowHeight / 2)-25, 'Resume Game', () => {
        gameManager.switchState("game");
        loop();
        this.hideMenuButtons();
      });
      this.restartButton = new TextButton((windowWidth / 2) - 100, (windowHeight / 2)+25, 'Restart Game', () => {
        freshGameScreen();
        loop();
        this.hideMenuButtons();
      });
      this.quitButton = new TextButton((windowWidth / 2) - 100, (windowHeight / 2)+75, 'Quit Game', () => {
        gameManager.switchState("start");
        loop();
        this.hideMenuButtons();
        this.pauseButton.hide();
      });
      this.pauseButton.getButton().hide();
      this.hideMenuButtons(); // hide initially
    }
  
    drawPauseScreen() {
      this.pauseButton.getButton().show();
      
      fill('rgba(0, 0, 0, 0.5)');
      rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 20);
  
      textAlign(CENTER, CENTER);
      textSize(40);
      fill('white');
      stroke('black');
      strokeWeight(4);
      textFont('gameFont');
      text("GAME PAUSED", windowWidth / 2, windowHeight / 2 - 90);
  
      this.resumeButton.getButton().show();
      this.restartButton.getButton().show();
      this.quitButton.getButton().show();
    }
  
    hideMenuButtons() {
      this.resumeButton.getButton().hide();
      this.restartButton.getButton().hide();
      this.quitButton.getButton().hide();
    }
  }
