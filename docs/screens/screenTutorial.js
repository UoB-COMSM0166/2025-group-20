
class TutorialScreen {
    constructor() {
        this.currentFruitIndex = 0;
        this.currentFruit = null;
        this.autoAdvanceTimeout = null;
        this.fruitSliced = false;
        this.correctSlice = false;
        this.showingButtons = false;
        this.sliceEffectTimer = null;
        this.splatters = [];
        this.lifeIcons = new LifeIcons();
        this.lifeIcons.lives = 2;
        this.lifeIcons.heartStates = ['full', 'full', 'empty'];
        this.lifeIcons.hearts[2] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/heart-empty.png');
        this.bombCount = 0;
        this.bombMax = 5;
        this.bombFailed = false;
        this.bombCompleted = false;

        // -- tutotiral recipe varialbe --

        this.recipeMode = false;
        this.recipeStarted = false;
        this.recipeComplete = false;
        this.recipeFruits = [];
        this.fruitOnScreen = [];
        this.frameCounter = 0;
        this.fruitGenerator = new FruitGenerator(fruitList, fruitImgs, sliceList);


        // -- Buttons setup --

        this.backButton = new TextButton((windowWidth - 250) / 2, windowHeight - 80, 'BACK', () => {
            gameManager.switchState("start");
            this.currentFruit?.slicingGif?.remove();
        });
        this.leftArrowButton = new TextButton(20, (windowHeight - 50) / 2, '<', () => {
            this.sliceFeedback = null;
            this.fruitSliced = false;
            this.bombCompleted = false;
            this.bombCount = 0;
            this.currentFruit?.slicingGif?.remove();
            this.currentFruit = null;
            if (!this.recipeStarted && this.currentFruitIndex === 0) {
                this.startRecipeTutorial(); // Hardwire recipe mode fingers crossed
                return;
            }
            this.currentFruitIndex = (this.currentFruitIndex - 1 + fruitList.length) % (fruitList.length);
        });
        this.rightArrowButton = new TextButton(windowWidth - 70, (windowHeight - 50) / 2, '>', () => {
            this.sliceFeedback = null;
            this.fruitSliced = false;
            this.bombFailed = false;
            this.bombCompleted = false;
            this.bombCount = 0;
            this.currentFruit?.slicingGif?.remove();
            this.currentFruit = null;
            if (!this.recipeStarted && this.currentFruitIndex === fruitList.length - 1) {
                this.startRecipeTutorial(); // Hardwire recipe mode fingers crossed
                return;
            }
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
        this.drawTutorialScreen();
        this.drawSplats();
        if (this.isRecipeStep()) {
            this.renderRecipeStep();
            cursorEffect();
            return;
        }
        this.initializeTutorialFruit();
        this.renderFruit();
        this.handleisSlicedLogic();
        this.handleBombTutorialLogic();
        this.renderTutorialFeedback();
        cursorEffect();
    }

    // -- button logic -- 

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

    // -- drawing and visuals folders --

    drawTutorialScreen() {
        noCursor();
        background(bg);
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        textSize(70);
        fill("#FCF3CF");
        stroke(30, 15, 5);
        strokeWeight(8);
        this.drawNarrationBox();
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
        } else if(this.isRecipeStep()){
            narration = 'Slice the correct fruit in the correct order or you will lose a life!';
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

    drawSplats() {
        for (let i = this.splatters.length - 1; i >= 0; i--) {
            this.splatters[i].update();
            this.splatters[i].show();
      
            if (this.splatters[i].isDone()) {
                this.splatters.splice(i, 1);
            }
        }
    }

    // -- Recipe Step (it's very big) --

    startRecipeTutorial() {
        this.recipeMode = true;
        this.recipeStarted = true;
        this.recipe = new SmoothieRecipe();
        this.lifeIcons = new LifeIcons();
        this.recipeComplete = false;
        this.recipeFailed = false;
        this.currentFruitIndex = fruitList.indexOf(this.recipe.ingredients[0]);
        this.currentFruit = null;
        this.fruitSliced = false;
      }
      

    renderRecipeStep() {
        this.recipe.display();
        this.lifeIcons.show();
        this.handleRecipeFruitSpawning();
        this.updateAndDrawRecipeFruits();
        this.handleRecipeSlicing();
        this.renderTutorialFeedback();
    }

    handleRecipeFruitSpawning() { //this mirrors the game logic (maybe best to make that into a separate method and call it?)
        this.frameCounter++;
      
        if (this.frameCounter % 60 === 0) {
          const extraFruit = this.fruitGenerator.randomFruitGen(1, this.recipe);
          this.recipeFruits.push(extraFruit);
          this.fruitOnScreen.push(extraFruit.index);
        }
      
        if (!this.fruitOnScreen.includes(this.recipe.ingredients[0])) {
          const neededFruit = this.fruitGenerator.randomFruitGen(0, this.recipe);
          this.recipeFruits.push(neededFruit);
          this.fruitOnScreen.push(neededFruit.index);
        }
      }
      
      updateAndDrawRecipeFruits() {
        for (let i = this.recipeFruits.length - 1; i >= 0; i--) {
          const f = this.recipeFruits[i];
          f.show();
          f.move();
      
          if (!f.visible) {
            this.recipeFruits.splice(i, 1);
            this.fruitOnScreen.splice(this.fruitOnScreen.indexOf(f.index), 1);
          }
        }
      }
      

    handleRecipeSlicing(){
        for (let i = this.recipeFruits.length - 1; i >= 0; i--) {
            const f = this.recipeFruits[i];
            const result = f.slicePat.isSliced();
        
            if (result === "correct" || result === "wrong") {
              audioController.play("slice");
              this.splatters.push(new splat(f.xPos, f.yPos, f.fruitName));
              f.fruitImg = loadImage(`https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${f.fruitName}-slice.png`);
              f.slicePat = new SlicePattern("inert", 0);
        
              if (f.fruitName === "dragonfruit") {
                this.lifeIcons.gainLife();
                gainLifeEffect();
                audioController.play("lifeGained");
              }
              else if (f.index !== this.recipe.ingredients[0]) {
                this.lifeIcons.loseLife();
                loseLifeEffect();
                this.sliceFeedback = "wrong";
                audioController.play("lifeLost");
        
                if (this.lifeIcons.lives === 0) {
                  this.recipeFailed = true;
                  audioController.play("gameover");
                  this.autoAdvanceTimeout = setTimeout(() => this.startRecipeTutorial(), 3000);
                }
              }
              else if (f.index === this.recipe.ingredients[0]) {
                if (result === "correct") {
                  this.recipe.ingredients.shift();
                  this.sliceFeedback = "correct";
        
                  if (this.recipe.ingredients.length === 0) {
                    this.recipeComplete = true;
                    audioController.play("recipe");
                    this.autoAdvanceTimeout = setTimeout(() => {
                      this.recipeMode = false;
                      this.recipeStarted = false;
                      this.currentFruitIndex = 0;
                      this.currentFruit = null;
                      this.fruitSliced = false;
                    }, 3000);
                  }
                } else {
                  wrongSliceEffect();
                  this.sliceFeedback = "wrong";
                }
              }
        
              this.recipeFruits.splice(i, 1);
              this.fruitOnScreen.splice(this.fruitOnScreen.indexOf(f.index), 1);
            }
        
            else if (result === "bomb") {
              audioController.play("bomb");
              audioController.play("gameover");
              this.recipeFailed = true;
              this.autoAdvanceTimeout = setTimeout(() => this.startRecipeTutorial(), 3000);
            }
          }
    }

    // --Normal Fruit List Array Steps -- 

    initializeTutorialFruit() {
        if (!this.currentFruit) {
            this.currentFruit = new TutorialFruit(fruitImgs[this.currentFruitIndex], sliceList[this.currentFruitIndex], fruitList[this.currentFruitIndex]);
        }
        if (!this.currentFruit.visible) {
            this.currentFruit.reset(fruitImgs[this.currentFruitIndex], sliceList[this.currentFruitIndex]);
        }
    }

    renderFruit() {
        if (this.isDragonfruitStep()) this.lifeIcons.show();
        this.currentFruit.move();
        this.currentFruit.show();
    }

    // -- handles slicing logic --

    handleisSlicedLogic() {
        if (this.fruitSliced) return;
        const sliceResult = this.currentFruit.slicePat.isSliced();
        if (["correct", "wrong", "bomb"].includes(sliceResult)) {
            this.fruitSliced = true;
            audioController.play('slice');
            if (sliceResult === "correct") {
                audioController.play('recipe');
                this.processCorrectSliceLogic();
            } else {
                audioController.play('lifeLost');
                this.processWrongSliceLogic();
            }
            this.displayVisualSliceFeedback();
        }
    }

    processCorrectSliceLogic(){
        this.sliceFeedback = "correct";
        this.showCorrectEffect();
        if (!this.autoAdvanceTimeout) {
            this.autoAdvanceTimeout = setTimeout(() => {
            this.gotoNextTutorialStep();
            }, 10000);
            return;
        }
    }

    processWrongSliceLogic(){
        this.bombFailed = true;
        this.sliceFeedback = "wrong";
        this.showWrongEffect();
    }

    displayVisualSliceFeedback() {
        this.splatters.push(new splat(this.currentFruit.xPos, this.currentFruit.yCurrentPos,fruitList[this.currentFruitIndex])); 
        this.currentFruit.fruitImg = loadImage(`https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${fruitList[this.currentFruitIndex]}-slice.png`);
        this.currentFruit.slicePat = new SlicePattern (sliceList[this.currentFruitIndex], this.currentFruit.size);
    }

    handleBombTutorialLogic() {
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
    }

    // -- Custom steps --

    isDragonfruitStep() {
        return fruitList[this.currentFruitIndex] === "dragonfruit";
    }

    isBombStep() {
        return fruitList[this.currentFruitIndex] === "bomb";
    }

    isRecipeStep() {
        return this.recipeMode;
      }

        // -- Effects Section -- (these should be moved to a different file) (if we have an effects handler, I could make an extended tutorialEffects file, that stores these)

    renderTutorialFeedback() {
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
    }

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
        if (!this.recipeStarted && this.currentFruitIndex === fruitList.length - 1) {
            this.startRecipeTutorial(); // Hardwire recipe mode fingers crossed
            return;
        }
        this.currentFruitIndex = (this.currentFruitIndex + 1) % (fruitList.length);
        this.currentFruit = null;
        this.fruitSliced = false;
      }
  }


  // to do: 
  // effects should be added to a separate effects file, 
  // recipe tutorial added