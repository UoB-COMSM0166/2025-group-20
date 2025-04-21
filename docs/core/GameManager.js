class GameManager {
    constructor() {
      this.state = "start";
      this.gameScreen = new GameScreen();
      this.startScreen = new ScreenStart(this);
      this.gameOverScreen = new GameOverScreen(this);
      this.tutorialEntryScreen = new TutorialEntryScreen();
      this.tutorialSliceScreen = new TutorialSliceScreen();
      this.tutorialInfoScreen = new TutorialInfoScreen();
      this.score = 0;
      this.lives = 3;
      this.difficulty = 'easy';
      this.basket = new Basket();
      this.twoPlayer = false;
    }

    getGameScreen() {
      return this.gameScreen;
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
          this.tutorialSliceScreen.hideButtons();
          this.tutorialEntryScreen.hideButtons();
          this.tutorialInfoScreen.hideButtons();
          break;
        case "tutorial-entry":
          this.tutorialEntryScreen.render();
          this.tutorialEntryScreen.showButtons();
          this.tutorialSliceScreen.hideButtons();
          this.tutorialInfoScreen.hideButtons();
          this.startScreen.hideButtons();
          break;
        case "tutorial-slice":
          this.tutorialSliceScreen.render();
          this.tutorialSliceScreen.showButtons();
          this.tutorialEntryScreen.hideButtons();
          break;
        case "tutorial-info":
          this.tutorialInfoScreen.render();
          this.tutorialInfoScreen.showButtons();
          this.tutorialEntryScreen.hideButtons();
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
    this.gameScreen.playingScreen();
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

  
