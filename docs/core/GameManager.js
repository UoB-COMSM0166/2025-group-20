class GameManager {
    constructor() {
      this.state = "start";
      this.startScreen = new ScreenStart(this);
      this.gameOverScreen = new GameOverScreen();
      this.tutorialScreen = new TutorialScreen();
      this.score = 0;
      this.lives = 3;
      this.difficulty = 'easy';
      this.basket = new Basket();
      this.twoPlayer = false;
    }

    switchState(newState) {
      this.state = newState;
    }
    
    render() {
      switch (this.state) {
        case "start":
          this.startScreen.render();
          this.startScreen.showButtons();
          this.gameOverScreen.hide();
          this.tutorialScreen.hideButtons();
          break;
        case "tutorial":
          this.tutorialScreen.render();
          this.tutorialScreen.showButtons();
          this.startScreen.hideButtons();
          break;
        case "game":
          this.drawGameState();
          break;
        case "pause":
          this.drawPauseState();
          break;
        case "gameover":
          this.drawGameOverState();
          break;
      }
    }

  drawGameState(){
    gameScreen();
    redBorder();
    greenBorder();
    completionText();
    wrongSliceText();
    if (this.twoPlayer){
      this.basket.show();
    }
    if (difficulty !== 'easy') {
      makeRecipeButton();
      recipeButton.show();
    }
    else if (recipeButton && difficulty === 'easy') {
      recipeButton.hide();
    }
    this.startScreen.hideButtons();
    this.gameOverScreen.explosion.hide();
    pauseMenu.pauseButton.getButton().show();
    if (pauseMenu.pause) {
      pauseMenu.drawPauseScreen(); 
    }
    this.gameOverScreen.hide();
  }
  drawPauseState(){
    cursor();
    noLoop();
    pauseMenu.drawPauseScreen(); 
  }

  drawGameOverState(){
    cursor();  
    console.log("Rendering Game Over state");
    loop();
    this.gameOverScreen.show();
    this.gameOverScreen.render();
    this.startScreen.hideButtons();
    pauseMenu.pauseButton.getButton().hide();
  }
}

  
