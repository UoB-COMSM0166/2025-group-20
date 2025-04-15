class GameManager {
    constructor() {
      this.state = "start";
      this.startScreen = new ScreenStart(this);
      this.score = 0;
      this.lives = 3;
      this.difficulty = "easy";
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
          if (pauseMenu.pauseButton) {
              pauseMenu.pauseButton.hide();
          }
          if(gameOverScreen) gameOverScreen.hide();
          break;
        case "tutorial":
          this.drawTutorialState();
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

    drawTutorialState(){
        noCursor();
        tutorialEasyScreen();
        wrongSliceText();
        correctSliceText();
        this.startScreen.tutorialButton.getButton().hide();
       // soundBtn.hide();
        onePlayerButton.hide();
        twoPlayerButton.hide();
        easyModeButton.hide();
        hardModeButton.hide();
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
    this.startScreen.tutorialButton.getButton().hide();
    //soundBtn.hide();
    onePlayerButton.hide();
    twoPlayerButton.hide();
    easyModeButton.hide();
    hardModeButton.hide();
    pauseMenu.pauseButton.show(); 
    if (pauseMenu.pause) {
      pauseMenu.drawPauseScreen(); 
    }
    if(gameOverScreen) gameOverScreen.hide();
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

    if (!gameOverScreen) {
      gameOverScreen = new GameOverScreen();
    }
    gameOverScreen.render();
    this.startScreen.tutorialButton.getButton().hide();
    onePlayerButton.hide();
    twoPlayerButton.hide();
    easyModeButton.hide();
    hardModeButton.hide();
    if (pauseMenu.pauseButton) {
      pauseMenu.pauseButton.hide();
    }
  }
}

  
