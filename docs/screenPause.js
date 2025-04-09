class PauseMenu {
    constructor() {
      this.pauseButton = this.createPauseButton();
      this.resumeButton = this.createTextButton('Resume Game', -25, () => {
        mode = 2;
        loop();
        this.hideMenuButtons();
      });
      this.restartButton = this.createTextButton('Restart Game', 25, () => {
        freshGameScreen();
        loop();
        this.hideMenuButtons();
      });
      this.quitButton = this.createTextButton('Quit Game', 75, () => {
        mode = 0;
        loop();
        this.hideMenuButtons();
        this.pauseButton.hide();
      });
  
      this.hideMenuButtons(); // hide initially
    }
  
    createPauseButton() {
      let btn = createButton('II');
      btn.style('border-radius', '8px');
      btn.style('border-color', 'black');
      btn.style('border-style', 'solid');
      btn.style('border-width', '4.5px');
      btn.style('background-color', '#FCF3CF');
      btn.style('font-family', 'sans-serif');
      btn.style('font-size', '65px');
      btn.style('font-weight', '900');
      btn.style('line-height', '64px');
      btn.style('text-align', 'center');
      btn.style('color', 'black');
      btn.size(75, 75);
      btn.position(windowWidth / 1.08, windowHeight / 1.15);
      btn.mousePressed(() => {
        mode = 3; // pause mode
      });
      return btn;
    }
  
    createTextButton(label, yOffset, callback) {
      let btn = createButton(label);
      btn.style('font-size', '20px');
      btn.style('font-family', 'gameFont');
      btn.style('background-color', 'rgba(255, 0, 0, 0.0)');
      btn.style('border', 'none');
      btn.style('color', 'white');
      btn.size(200, 50);
      btn.position((windowWidth / 2) - 100, (windowHeight / 2) + yOffset);
      btn.mousePressed(callback);
      return btn;
    }
  
    drawPauseScreen() {
      this.pauseButton.show();
      
      fill('rgba(0, 0, 0, 0.5)');
      rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 20);
  
      textAlign(CENTER, CENTER);
      textSize(40);
      fill('white');
      textFont('gameFont');
      text("GAME PAUSED", windowWidth / 2, windowHeight / 2 - 90);
  
      this.resumeButton.show();
      this.restartButton.show();
      this.quitButton.show();
    }
  
    hideMenuButtons() {
      this.resumeButton.hide();
      this.restartButton.hide();
      this.quitButton.hide();
    }
  
    hideAll() {
      this.pauseButton.hide();
      this.hideMenuButtons();
    }

    updateButtonPositions() {
        this.pauseButton.position(windowWidth / 1.08, windowHeight / 1.15);
        this.resumeButton.position((windowWidth / 2) - 100, (windowHeight / 2) - 25);
        this.restartButton.position((windowWidth / 2) - 100, (windowHeight / 2) + 25);
        this.quitButton.position((windowWidth / 2) - 100, (windowHeight / 2) + 75);
      }
  }
