
class ScreenStart {
  constructor() {
      this.tutorialButton = new TextButton((windowWidth / 2) - 125, (windowHeight / 3 + 20), 'Tutorial', () => {
          gameManager.switchState("tutorial"); // Goes to instructions screen
      });
      this.easyModeButton = new TextButton((windowWidth / 2) - 250, (windowHeight / 2), 'Easy Mode', () => {
          difficulty = 'easy';
          this.hardModeButton.getButton().style('background-color', '#FCF3CF');
          this.easyModeButton.getButton().style('background-color', '#c2ac53');
      });
      this.hardModeButton = new TextButton((windowWidth / 2) + 10, (windowHeight / 2), 'Hard Mode', () => {
          difficulty = 'hard';
          this.easyModeButton.getButton().style('background-color', '#FCF3CF');
          this.hardModeButton.getButton().style('background-color', '#c2ac53');
      });
      this.onePlayerButton = new TextButton((windowWidth / 2) - 250, (windowHeight / 2) + 70, 'One Player', () => {
          gameManager.twoPlayer = false;
          this.twoPlayerButton.getButton().style('background-color', '#FCF3CF');
          this.onePlayerButton.getButton().style('background-color', '#c2ac53');
      });
      this.twoPlayerButton = new TextButton((windowWidth / 2) + 10, (windowHeight / 2) + 70,'Two Player',() => {
          gameManager.twoPlayer = true;
          this.onePlayerButton.getButton().style('background-color', '#FCF3CF');
          this.twoPlayerButton.getButton().style('background-color', '#c2ac53');
      });
      this.onePlayerButton.getButton().style('background-color', '#c2ac53');
      this.easyModeButton.getButton().style('background-color', '#c2ac53');
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
      background(bg);
      this.drawTitle();
      this.drawWaveText();
      this.border();
      if(difficulty === 'easy'){
        easyHighestScore.display();
      } else {
        hardHighestScore.display();
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
      strokeWeight(3);
      text('Choose your recipe for the game:', windowWidth / 2 , windowHeight / 2 - 40);
  }

  drawWaveText() {
      textAlign(CENTER, CENTER);
      textFont(gameFont);
      fill('white');
      noStroke();
      textSize(40);
      let textString = "Press ENTER to start game!";
      let textLength = textString.length;

      for (let i = 0; i < textLength; i++) {
        let char = textString.charAt(i);
        let yWave = sin(frameCount * yWaveSpeed + i * 0.5 + yWaveOffset) * yWaveSize;
        let xWave = cos(frameCount * xWaveSpeed + i * 0.5 + xWaveOffset) * xWaveSize;
        let xPos = (windowWidth / 2 + 30) + xWave + (i - textLength / 2) * 32;
        let yPos = windowHeight / 8 + 465 + yWave;

        text(char, xPos, yPos);
      }
  }

  border() {
      let fruitTypes = [
          { img: fruitImgs[0], positions: [{x:windowWidth / 2 - 435, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 125, y: windowHeight / 8 + 100},
              {x:windowWidth / 2 + 475, y: windowHeight / 8 + 310}, {x:windowWidth / 2 + 125, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 435, y: windowHeight / 8 + 520}] }, 
          { img: fruitImgs[1], positions: [{x:windowWidth / 2 - 365, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 195, y: windowHeight / 8 + 100},
              {x:windowWidth / 2 + 475, y: windowHeight / 8 + 380}, {x:windowWidth / 2 + 55, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 505, y: windowHeight / 8 + 520}] },
          { img: fruitImgs[2], positions: [{x:windowWidth / 2 - 295, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 265, y: windowHeight / 8 + 100},
              {x:windowWidth / 2 + 475, y: windowHeight / 8 + 450}, {x:windowWidth / 2 - 15, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 505, y: windowHeight / 8 + 450}] },
          { img: fruitImgs[3], positions: [{x:windowWidth / 2 - 225, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 335, y: windowHeight / 8 + 100},
              {x:windowWidth / 2 + 475, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 85, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 505, y: windowHeight / 8 + 380}] },
          { img: fruitImgs[4], positions: [{x:windowWidth / 2 - 155, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 405, y: windowHeight / 8 + 100},
              {x:windowWidth / 2 + 405, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 155, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 505, y: windowHeight / 8 + 310}] },
          { img: fruitImgs[5], positions: [{x:windowWidth / 2 - 85, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 475, y: windowHeight / 8 + 100},
              {x:windowWidth / 2 + 335, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 225, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 505, y: windowHeight / 8 + 240}] },
          { img: fruitImgs[6], positions: [{x:windowWidth / 2 - 15, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 475, y: windowHeight / 8 + 170},
              {x:windowWidth / 2 + 265, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 295, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 505, y: windowHeight / 8 + 170}] },
          { img: fruitImgs[7], positions: [{x:windowWidth / 2 - 505, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 55,  y:windowHeight / 8 + 100}, 
              {x:windowWidth / 2 + 475, y: windowHeight / 8 + 240}, {x:windowWidth / 2 + 195, y: windowHeight / 8 + 520},
              {x:windowWidth / 2 - 365, y: windowHeight / 8 + 520}] }
      ]; 
      for (let fruit of fruitTypes) {
          for (let pos of fruit.positions) {
              image(fruit.img, pos.x, pos.y, 50, 50);
          }
      }
  }
}

let yWaveSpeed = 0.03;   
let xWaveSpeed = 0.03;   
let yWaveSize = 20;      
let xWaveSize = 20;     
let yWaveOffset = 0;     
let xWaveOffset = 0;     
