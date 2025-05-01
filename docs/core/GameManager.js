class GameManager {
    // states :
      // start --> start screen and main menu
      // tutorial-entry --> tutorial entry screen
      // slice --> practise slicing screen
      // info --> learn the rules screens ////// ideally we would want all the tutorial screen to be one state
      // game --> game screen
      // pause --> pause screen mid game
      // over --> game over screen
  constructor() {
    this.state = "start";
    this.startScreen = new ScreenStart(this);
    this.tutorialEntryScreen = new TutorialEntryScreen();
    this.tutorialSliceScreen = new TutorialSliceScreen();
    this.tutorialInfoScreen = new TutorialInfoScreen();
    this.gameOverScreen = new GameOverScreen(this);
    this.score = 0;
    this.lives = 3;
    this.difficulty = 'easy';
    this.basket = new Basket();
    this.twoPlayer = false;
    this.easyGameScore = new PointSystem();
    this.hardGameScore = new PointSystem();
    this.easyHighestScore = new HighestPointDisplay();
    this.hardHighestScore = new HighestPointDisplay();
    }

    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    } 

    getDifficulty() {
      return this.difficulty;
    }

    setCoop(twoPlayer) {
      this.twoPlayer = twoPlayer;
    }

    getCoop() {
      return this.twoPlayer;
    }

    getEasyGameScore() {
      return this.easyGameScore;
    }

    getHardGameScore() {
      return this.hardGameScore;
    }

    getEasyHighestScore() {
      return this.easyHighestScore;
    }

    getHardHighestScore() {
      return this.hardHighestScore;
    }

    setDifficulty(difficulty) {
      this.difficulty = difficulty;
    } 

    getDifficulty() {
      return this.difficulty;
    }

    setCoop(twoPlayer) {
      this.twoPlayer = twoPlayer;
    }

    getCoop() {
      return this.twoPlayer;
    }

    getGameScreen() {
      return this.gameScreen;
    }

    resetGameScreen(){
      this.gameScreen = new GameScreen();
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
          this.gameScreen.draw();
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
    if (this.twoPlayer){
      this.basket.show();
    }
    if (this.difficulty !== 'easy') {
      makeRecipeButton();
      recipeButton.show();
    }
    else if (recipeButton && this.difficulty === 'easy') {
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
    loop();
    this.gameOverScreen.show();
    this.gameOverScreen.render();
    this.startScreen.hideButtons();
    pauseMenu.pauseButton.getButton().hide();
  }
}
