let startOverBtn, homeBtn;  
let gameOverScreen; 
class GameOverScreen {
  constructor() {
    this.startOverBtn = null;
    this.homeBtn = null;
  }
  
  createStartOverButton() {
    if (!this.startOverBtn) {
      this.startOverBtn = createButton("Start Over");
      this.startOverBtn.style('font-size', '20px');
      this.startOverBtn.style('background-color', '#c2ac53');  // Green
      this.startOverBtn.style('color', 'black');
      this.startOverBtn.style('border', '2px solid #8B4513');
      this.startOverBtn.style('padding', '10px 20px');
      this.startOverBtn.style('border-radius', '8px');
      this.startOverBtn.position(width / 2 - 75, height * 0.45);
      this.startOverBtn.mousePressed(() => {
        freshGameScreen();
      });
    }
  }
  
  createHomeButton() {
    if (!this.homeBtn) {
      this.homeBtn = createButton("Home");
      this.homeBtn.style('font-size', '20px');
      this.homeBtn.style('background-color', '#B8860B');  
      this.homeBtn.style('color', 'black');
      this.homeBtn.style('border', '2px solid #8B4513');  // brown border
      this.homeBtn.style('padding', '10px 20px');
      this.homeBtn.style('border-radius', '8px');
      this.homeBtn.position(width / 2 - 55, height * 0.55);
      this.homeBtn.mousePressed(() => {
        gameManager.switchState("start");
      });
    }
  }
  
  show() {
    this.createStartOverButton();
    this.createHomeButton();
    this.startOverBtn.show();
    this.homeBtn.show();
  }
  
  hide() {
    if (this.startOverBtn) this.startOverBtn.hide();
    if (this.homeBtn) this.homeBtn.hide();
  }
  
  render() {
    background(bg);
    textAlign(CENTER, CENTER);
    textFont('Times New Roman');
    fill('white');
    textSize(60);
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
