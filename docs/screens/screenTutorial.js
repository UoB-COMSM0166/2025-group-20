
class TutorialScreen {
    constructor() {
        this.currentFruitIndex = 0;
        this.currentFruit = null;
        this.autoAdvanceTimeout = null;
        this.correctSlice = false;
        this.showingButtons = false;
        this.sliceEffectTimer = null;
        this.lifeIcons = new LifeIcons();
        this.lifeIcons.lives = 2;
        this.lifeIcons.heartStates = ['full', 'full', 'empty'];
        this.lifeIcons.hearts[2] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/heart-empty.png');
        this.bombCount = 0;
        this.bombMax = 5;
        this.bombFailed = false;
        this.bombCompleted = false;

        // -- Buttons setup --
        this.backButton = new TextButton((windowWidth - 250) / 2, windowHeight - 80, 'BACK', () => {
            gameManager.switchState("start");
            this.currentFruit?.slicingGif?.remove();
        });
        this.leftArrowButton = new TextButton(20, (windowHeight - 50) / 2, '<', () => {
            this.sliceFeedback = null;
            this.bombCompleted = false;
            this.bombCount = 0;
            this.currentFruit?.slicingGif?.remove();
            this.currentFruit = null;
            this.currentFruitIndex = (this.currentFruitIndex - 1 + fruitList.length) % (fruitList.length);
        });
        this.rightArrowButton = new TextButton(windowWidth - 70, (windowHeight - 50) / 2, '>', () => {
            this.sliceFeedback = null;
            this.bombFailed = false;
            this.bombCompleted = false;
            this.bombCount = 0;
            this.currentFruit?.slicingGif?.remove();
            this.currentFruit = null;
            this.currentFruitIndex = (this.currentFruitIndex + 1) % (fruitList.length);
        });
        this.leftArrowButton.getButton().style('font-size', '20px');
        this.leftArrowButton.getButton().size(50, 50);
      
        this.rightArrowButton.getButton().style('font-size', '20px');
        this.rightArrowButton.getButton().size(50, 50);
      
        this.leftArrowButton.getButton().hide();
        this.rightArrowButton.getButton().hide();
        this.backButton.getButton().hide();
    }
  
    render() {
        noCursor();
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

        if (this.isDragonfruitStep()) {this.lifeIcons.show();}
      
        this.currentFruit.move();
        this.currentFruit.show();
  
        const sliceResult = this.currentFruit.slicePat.isSliced();
        if (sliceResult === "correct" || sliceResult === "wrong" || sliceResult === "bomb") {
            audioController.play('slice');
            if (sliceResult === "correct") {
                this.sliceFeedback = "correct";
                this.showCorrectEffect();
            if (!this.autoAdvanceTimeout) {
                this.autoAdvanceTimeout = setTimeout(() => {
                this.gotoNextTutorialStep();
                }, 10000);
                return;
            }
            } else if(sliceResult === "wrong" || sliceResult === "bomb"){
                audioController.play('lifeLost');
                this.bombFailed = true;
                this.sliceFeedback = "wrong";
                this.showWrongEffect();
            }
  
            const currentSplat = new splat(this.currentFruit.xPos, this.currentFruit.yCurrentPos, fruitList[this.currentFruitIndex]);
            currentSplat.show();
            this.currentFruit.fruitImg = loadImage(`https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${fruitList[this.currentFruitIndex]}-slice.png`);
            this.currentFruit.slicePat = new SlicePattern (sliceList[this.currentFruitIndex], this.currentFruit.size);
        }

        if(this.isBombStep()){
            if (this.currentFruit.yCurrentPos > height && !this.bombFailed) {
                this.bombCount++;
                this.currentFruit = null;
        
                if (this.bombCount >= this.bombMax) {
                    this.bombCompleted = true;
                    this.sliceFeedback = "correct";
                    this.showCorrectEffect();
        
                    if (!this.autoAdvanceTimeout) {
                        this.autoAdvanceTimeout = setTimeout(() => {
                        this.gotoNextTutorialStep();
                        }, 5000);
                    }
                }
            }
        }

        if (this.sliceFeedback === "correct") {
            if (this.isDragonfruitStep()) {
                this.drawLifeGainedText(); 
            } else if (this.isBombStep()){
                this.drawBombSuccessText();
            } else {
                correctSliceText();
            }
        }
        if (this.sliceFeedback === "wrong") {
            if (this.isBombStep()){
                this.drawBombFailText();
            } else {
            wrongSliceText();
            }
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
        
        let narration = `Slice the ${fruitList[this.currentFruitIndex]} ${sliceNarration[this.currentFruitIndex]}`;
        if(this.isBombStep()){
            narration = `Don't ${narration}`;
        }     
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

    // -- Custom steps --

    isDragonfruitStep() {
        return fruitList[this.currentFruitIndex] === "dragonfruit";
    }

    isBombStep() {
        return fruitList[this.currentFruitIndex] === "bomb";
    }








      
    // -- Effects Section -- (should be moved to a separate effects file later)

    showCorrectEffect() {
        correctSliceEffect();
        this.sliceFeedback = "correct";

        if (this.isDragonfruitStep()) {
            this.lifeIcons.gainLife();
            audioController.play('lifeGained');
        }
      
        if (this.sliceEffectTimer) clearTimeout(this.sliceEffectTimer);
        this.sliceEffectTimer = setTimeout(() => {
            this.sliceFeedback = null;
        }, this.isDragonfruitStep() ? 3000 : 10000); 
    }
      
    showWrongEffect() {
        wrongSliceEffect();
        this.sliceFeedback = "wrong";
      
        if (this.sliceEffectTimer) clearTimeout(this.sliceEffectTimer);
        this.sliceEffectTimer = setTimeout(() => {
            this.sliceFeedback = null;
        }, 10000);
    }

    drawLifeGainedText() {
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill("green");
        textSize(100);
        text("Life Gained!", width / 2, 100);
    }

    drawBombFailText() {
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill("red");
        textSize(80);
        text("You lose!", width / 2, 100);
    }

    drawBombSuccessText() {
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill("green");
        textSize(80);
        text("Well done!", width / 2, 100);
    }

    // -- Auto Timeout Effect --
      
      gotoNextTutorialStep(){
        if (this.currentFruit?.slicingGif) {
        this.currentFruit.slicingGif.remove();
        }
        this.sliceFeedback = null;
        this.bombFailed = false;
        this.bombCompleted = false;
        this.bombCount = 0;     

        clearTimeout(this.autoAdvanceTimeout);
        this.autoAdvanceTimeout = null;

        this.currentFruitIndex = (this.currentFruitIndex + 1) % (fruitList.length);

        this.currentFruit = null;
      }
  }


  // to do: 
  // neaten up indentation, 
  // effects should be added to a separate effects file, 
  // split up main render block into readable chunks, 
  // fix incorrect 'wrong slice' recognition
  // recipe tutorial added