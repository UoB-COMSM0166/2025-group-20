class GameOverScreen {
  constructor() {
    this.startOverButton = new TextButton(width / 2 - 100, height / 2 - 30, 'Start Over', () => {
      freshGameScreen();
    });
    this.homeButton = new TextButton(width / 2 - 75, height / 2 + 50, 'Home', () => {
      gameManager.switchState("start");
    });

    if (recipeButton) {
      recipeButton.hide();
    }
  }
  
  show() {
    this.startOverButton.getButton().show();
    this.homeButton.getButton().show();
  }
  
  hide() {
    this.startOverButton.getButton().hide();
    this.homeButton.getButton().hide();
  }
  
  render() {
    background(bg);
    textAlign(CENTER, CENTER);
    textFont('Times New Roman');
    fill('white');
    textSize(60);
    stroke('black');
    strokeWeight(4);
    textFont(gameFont);
    text('GAME OVER', width / 2, height * 0.35);

    if(difficulty === 'easy'){
      easyGameScore.display();
      easyHighestScore.display();
    }else {
      hardGameScore.display();
      hardHighestScore.display();
    }
    this.show();
  }
}
