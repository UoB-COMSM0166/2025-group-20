class GameOverScreen {
  constructor() {
    this.startOverButton = new TextButton(width / 2 - 125, height / 2 - 30, 'START OVER', 250, 50, '25px', () => {
      freshGameScreen();
    });
    this.homeButton = new TextButton(width / 2 - 75, height / 2 + 50, 'HOME', 150, 50, '25px', () => {
      gameManager.switchState("start");
    });

    this.explosion = createImg('boom.gif');
    this.explosion.position(windowWidth / 2 - 250, windowHeight / 2 - 55);
    this.explosion.size(500, 200);
    this.explosion.style('z-index', '0');
    this.explosion.hide();
  }

  show() {
    this.startOverButton.getButton().show();
    this.homeButton.getButton().show();
  }
  
  hide() {
    this.startOverButton.getButton().hide();
    this.homeButton.getButton().hide();
    this.explosion.hide();
  }
  
  render() {
    background(bg);
    if (recipeButton) {
      recipeButton.hide();
    }
    this.explosion.show();
    textAlign(CENTER, CENTER);
    textFont(gameFont);
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
