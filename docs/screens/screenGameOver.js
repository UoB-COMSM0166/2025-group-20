let startOverBtn, homeBtn;  
let gameOverScreen; 
class GameOverScreen {
  constructor() {
    this.startOverBtn = null;
    this.homeBtn = null;

    if (recipeButton) {
      recipeButton.hide();
    }
  }
  
  createStartOverButton() {
    if (!this.startOverBtn) {
      this.startOverBtn = createButton("Start Over");
      this.startOverBtn.style('font-size', '25px');
      this.startOverBtn.style('font-family', 'gameFont'); 
      this.startOverBtn.style('background-color', '#FCF3CF');  // Green
      this.startOverBtn.style('color', 'black');
      this.startOverBtn.style('border', '3px solid black');
     // this.startOverBtn.style('padding', '10px 20px');
      this.startOverBtn.style('border-radius', '8px');
      this.startOverBtn.size(200,50);
      this.startOverBtn.position(width / 2 - 100, height / 2 - 30);
      this.startOverBtn.mousePressed(() => {
        freshGameScreen();
      });

      this.startOverBtn.mouseMoved(() => {
        this.startOverBtn.style('box-shadow', '5px 5px 5px seagreen');
      })

      this.startOverBtn.mouseOut(() => {
        this.startOverBtn.style('box-shadow', 'none');
      });
    }
  }
  
  createHomeButton() {
    if (!this.homeBtn) {
      this.homeBtn = createButton("Home");
      this.homeBtn.style('font-size', '25px');
      this.homeBtn.style('font-family', 'gameFont'); 
      this.homeBtn.style('background-color', '#FCF3CF'); 
      this.homeBtn.style('color', 'black');
      this.homeBtn.style('border', '3px solid black');  // brown border
   //   this.homeBtn.style('padding', '10px 20px');
      this.homeBtn.style('border-radius', '8px');
      this.homeBtn.size(150,50);
      this.homeBtn.position(width / 2 - 75, height / 2 + 50);
      this.homeBtn.mousePressed(() => {
        gameManager.switchState("start");
      });
      this.homeBtn.mouseMoved(() => {
        this.homeBtn.style('box-shadow', '5px 5px 5px seagreen');
      })

      this.homeBtn.mouseOut(() => {
        this.homeBtn.style('box-shadow', 'none');
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
