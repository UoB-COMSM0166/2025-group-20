class ScreenStart {
  constructor() {
      this.fruitBorder = new FruitBorder();
      this.tutorialButton = new TextButton((windowWidth / 2) - 125, (windowHeight / 3 + 20), 'TUTORIAL', 250, 50, '25px', () => {
         gameManager.switchState("tutorial-entry"); // Goes to tutorial screen screen
      });
      this.easyModeButton = new TextButton((windowWidth / 2) - 250, (windowHeight / 2), 'EASY MODE', 250, 50, '25px', () => {
         gameManager.setDifficulty('easy');
         this.hardModeButton.getButton().style('background-color', '#FCF3CF');
         this.easyModeButton.getButton().style('background-color', '#A89058');
      });
      this.hardModeButton = new TextButton((windowWidth / 2) + 10, (windowHeight / 2), 'HARD MODE', 250, 50, '25px', () => {
         gameManager.setDifficulty('hard');
         this.easyModeButton.getButton().style('background-color', '#FCF3CF');
         this.hardModeButton.getButton().style('background-color', '#A89058');
      });
      this.onePlayerButton = new TextButton((windowWidth / 2) - 250, (windowHeight / 2) + 70, 'ONE PLAYER', 250, 50, '25px', () => {
         gameManager.setCoop(false);
         this.twoPlayerButton.getButton().style('background-color', '#FCF3CF');
         this.onePlayerButton.getButton().style('background-color', '#A89058');
      });
      this.twoPlayerButton = new TextButton((windowWidth / 2) + 10, (windowHeight / 2) + 70,'TWO PLAYER', 250, 50, '25px', () => {
         gameManager.setCoop(true);
         this.onePlayerButton.getButton().style('background-color', '#FCF3CF');
         this.twoPlayerButton.getButton().style('background-color', '#A89058');
      });
      this.onePlayerButton.getButton().style('background-color', '#A89058');
      this.easyModeButton.getButton().style('background-color', '#A89058');
      this.showButtons();
  }

  showButtons() {
    this.tutorialButton.getButton().show();
    this.easyModeButton.getButton().show();
    this.hardModeButton.getButton().show();
    this.onePlayerButton.getButton().show();
    this.twoPlayerButton.getButton().show();
  }

  hideButtons() {
      this.tutorialButton.getButton().hide();
      this.easyModeButton.getButton().hide();
      this.hardModeButton.getButton().hide();
      this.onePlayerButton.getButton().hide();
      this.twoPlayerButton.getButton().hide();
  }

  render() {
      cursor();
      if (recipeButton) {
        recipeButton.hide();
      }
      background(bg);
      this.drawTitle();
      this.drawWaveText();
      this.fruitBorder.draw();
      if(this.difficulty === 'easy'){
        gameManager.getEasyHighestScore().display();
      } else {
        gameManager.getHardHighestScore().display();
      }
  }

  drawTitle() {
   textAlign(CENTER, CENTER);
   textFont(gameFont);
   fill('white');
   stroke('black');
   strokeWeight(6);
   textSize(100);
   text('Smoothie Operator', width / 2, height / 8);
   textSize(30);
   strokeWeight(4);
   text('Choose your recipe for the game:', windowWidth / 2 , windowHeight / 2 - 35);
  }

  drawWaveText() {
   textAlign(CENTER, CENTER);
   textFont(gameFont);
   fill('white');
   stroke('black');
   strokeWeight(4);
   textSize(40);
   let textString = "Press ENTER to start game!";
   let textLength = textString.length;

   for (let i = 0; i < textLength; i++) {
      let char = textString.charAt(i);
      let yWave = sin(frameCount * yWaveSpeed + i * 0.5 + yWaveOffset) * yWaveSize;
      let xWave = cos(frameCount * xWaveSpeed + i * 0.5 + xWaveOffset) * xWaveSize;
      let xPos = (windowWidth / 2 + 30) + xWave + (i - textLength / 2) * 32;
      let yPos = windowHeight / 8 + 445 + yWave;
      text(char, xPos, yPos);
   }
  }
}

let yWaveSpeed = 0.03;   
let xWaveSpeed = 0.03;   
let yWaveSize = 20;      
let xWaveSize = 20;     
let yWaveOffset = 0;     
let xWaveOffset = 0;     
