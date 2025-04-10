class GameManager {
    constructor() {
      this.state = "start";
      this.startScreen = new ScreenStart(this);
      this.score = 0;
      this.lives = 3;
      this.difficulty = "easy";
    }
  
    switchState(newState) {
      this.state = newState;
    }
  
    update() {
      // we'll call this to update currentscreen
    }
  
    render() {
      switch (this.state) {
        case "start":
            this.startScreen.render();
            this.startScreen.showButtons();
            if (pauseMenu.pauseButton) {
                pauseMenu.pauseButton.hide();
            }
          break;
        case "tutorial":
        //this.startScreen.hideButtons();
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

    /*drawStartState() {
        drawStartScreen();
        tutorialBtn.show();
        easyModeButton.show();
        hardModeButton.show();
        onePlayerButton.show();
        twoPlayerButton.show();
        if (recipeButton) {
          recipeButton.hide();
        }
        if (pauseMenu.pauseButton) {
          pauseMenu.pauseButton.hide();
        }
    }*/

    drawTutorialState(){
        noCursor();
        tutorialEasyScreen();
        wrongSliceText();
        correctSliceText();
        tutorialBtn.hide();
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
        
        if (difficulty !== 'easy') {
          makeRecipeButton();
          recipeButton.show();
        }
        else if (recipeButton && difficulty === 'easy') {
          recipeButton.hide();
        }
        tutorialBtn.hide();
        //soundBtn.hide();
        onePlayerButton.hide();
        twoPlayerButton.hide();
        easyModeButton.hide();
        hardModeButton.hide();
        pauseMenu.pauseButton.show(); 
        if (pauseMenu.pause) {
          pauseMenu.drawPauseScreen(); 
        }
      }
      drawPauseState(){
        noLoop();
        pauseMenu.drawPauseScreen(); 
      }

      drawGameOverState(){
        drawGameOver();
        tutorialBtn.hide();
        // soundBtn.hide();
         onePlayerButton.hide();
         twoPlayerButton.hide();
         easyModeButton.hide();
         hardModeButton.hide();
      }
}

  