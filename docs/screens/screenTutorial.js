
class TutorialScreen {
    constructor() {
      this.currentFruitIndex = 0;
      this.currentFruit = null;
      this.autoAdvanceTimeout = null;
      this.correctSlice = false;
      this.showingButtons = false;
        this.sliceEffectTimer = null;       
      this.backButton = new TextButton((windowWidth - 250) / 2, windowHeight - 80, 'BACK', () => {
          gameManager.switchState("start");
          this.currentFruit?.slicingGif?.remove();
        }
      );
      this.leftArrowButton = new TextButton(20, (windowHeight - 50) / 2, '<', () => {
          this.currentFruit?.slicingGif?.remove();
          this.currentFruit = null;
          this.currentFruitIndex = (this.currentFruitIndex - 1 + fruitList.length - 2) % (fruitList.length - 2);
        }
      );
      this.rightArrowButton = new TextButton(
        windowWidth - 70,
        (windowHeight - 50) / 2,
        '>',
        () => {
          this.currentFruit?.slicingGif?.remove();
          this.currentFruit = null;
          this.currentFruitIndex = (this.currentFruitIndex + 1) % (fruitList.length - 2);
        }
      );
      this.leftArrowButton.getButton().style('font-size', '20px');
      this.leftArrowButton.getButton().size(50, 50);
      
      this.rightArrowButton.getButton().style('font-size', '20px');
      this.rightArrowButton.getButton().size(50, 50);
      
      this.leftArrowButton.getButton().hide();
      this.rightArrowButton.getButton().hide();
      this.backButton.getButton().hide();
    }
  
    render() {
      background(bg);
      textAlign(CENTER, CENTER);
      textFont(gameFont);
      textSize(70);
      fill("#FCF3CF");
      stroke(30, 15, 5);
      strokeWeight(8);

      this.drawNarrationBox();

      if (!this.currentFruit) {
        this.currentFruit = new TutorialFruit(fruitImgs[this.currentFruitIndex], sliceList[this.currentFruitIndex], fruitList[this.currentFruitIndex]);
      }
  
      if (!this.currentFruit.visible) {
        this.currentFruit.reset(fruitImgs[this.currentFruitIndex], sliceList[this.currentFruitIndex]);
      }
  
      this.currentFruit.move();
      this.currentFruit.show();
  
      const sliceResult = this.currentFruit.slicePat.isSliced();
      if (sliceResult === "correct" || sliceResult === "wrong") {
        audioController.play('slice');
        if (sliceResult === "correct") {
          console.log("Correct Slice detected!!");
          this.sliceFeedback = "correct";
          this.showCorrectEffect();
          if (!this.autoAdvanceTimeout) {
            this.autoAdvanceTimeout = setTimeout(() => {
              this.gotoNextTutorialStep();
            }, 10000);
            return;
          }
        } else if(sliceResult === "wrong"){
          console.log("Wrong Slice detected!!");
          audioController.play('lifeLost');
          this.sliceFeedback = "wrong";
          this.showWrongEffect();
        }
  
        const currentSplat = new splat(this.currentFruit.xPos, this.currentFruit.yCurrentPos, fruitList[this.currentFruitIndex]);
        currentSplat.show();
  
        this.currentFruit.fruitImg = loadImage(
          `https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${fruitList[this.currentFruitIndex]}-slice.png`
        );
        this.currentFruit.slicePat = new SlicePattern("inert", 0);
      }
      if (this.sliceFeedback === "correct") {
        correctSliceText();
        greenBorder();
      }
      if (this.sliceFeedback === "wrong") {
        wrongSliceText();
        redBorder();
      }
      cursorEffect();
    }

    showButtons() {
        this.showingButtons = true;
        this.backButton.getButton().show();
        this.leftArrowButton.getButton().show();
        this.rightArrowButton.getButton().show();
    }

    hideButtons() {
        this.showingButtons = false;
        this.backButton.getButton().hide();
        this.leftArrowButton.getButton().hide();
        this.rightArrowButton.getButton().hide();
    }   

    drawNarrationBox() {
        const boxWidth = 330;
        const boxHeight = 100;
        const boxX = width - (boxWidth / 1.8);
        const boxY = height - (boxHeight / 1.6);
      
        fill('#FCF3CF');
        stroke(30, 15, 5);
        strokeWeight(4);
        rect(boxX, boxY, boxWidth, boxHeight, 12);
      
        noStroke();
        fill('black');
        textFont(gameFont);
        textSize(24);
        textAlign(CENTER, CENTER);
        textLeading(10);
      
        const narration = `Slice the ${fruitList[this.currentFruitIndex]} ${sliceNarration[this.currentFruitIndex]}`;
        const words = narration.split(' ');
        const lines = [];
        let currentLine = '';
      
        for (let word of words) {
          const testLine = currentLine + word + ' ';
          if (textWidth(testLine) > boxWidth - 20) {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
          } else {
            currentLine = testLine;
          }
        }
        lines.push(currentLine.trim());
      
        const lineHeight = 26; 
        const totalTextHeight = lines.length * lineHeight;
        const startY = boxY + (boxHeight - totalTextHeight) / 2 - 40;
      
        for (let i = 0; i < lines.length; i++) {
            const lineY = startY + i * lineHeight;
          text(lines[i], boxX, lineY);
        }
      }

      showCorrectEffect() {
        correctSliceEffect();
        this.sliceFeedback = "correct";
      
        if (this.sliceEffectTimer) clearTimeout(this.sliceEffectTimer);
        this.sliceEffectTimer = setTimeout(() => {
          this.sliceFeedback = null;
        }, 10000); 
      }
      
      showWrongEffect() {
        wrongSliceEffect();
        this.sliceFeedback = "wrong";
      
        if (this.sliceEffectTimer) clearTimeout(this.sliceEffectTimer);
        this.sliceEffectTimer = setTimeout(() => {
          this.sliceFeedback = null;
        }, 10000);
      }
      

      gotoNextTutorialStep(){
        if (this.currentFruit?.slicingGif) {
        this.currentFruit.slicingGif.remove();
        }
        this.sliceFeedback = null;

        clearTimeout(this.autoAdvanceTimeout);
        this.autoAdvanceTimeout = null;

        this.currentFruitIndex = (this.currentFruitIndex + 1) % (fruitList.length - 2); // Exclude "heart"

        this.currentFruit = null;
      }
  }
