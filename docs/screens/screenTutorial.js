
class TutorialScreen {
    constructor() {
      this.currentFruitIndex = 0;
      this.currentFruit = null;
      this.autoAdvanceTimeout = null;
      this.correctSlice = false;
      this.showingButtons = false;
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
  
      const narration = `Slice the ${fruitList[this.currentFruitIndex]} ${sliceNarration[this.currentFruitIndex]}`;
      text(narration, width / 2, 50);

  
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
        if (sliceResult === "correct") {
          this.correctSliceEffect();
          console.log("Correct Slice detected!!");
  
          if (!this.autoAdvanceTimeout) {
            this.autoAdvanceTimeout = setTimeout(() => {
              goToNextTutorialStep();
            }, 15000);
          }
        } else {
          console.log("Wrong Slice detected!!");
          wrongSliceEffect();
        }
  
        const currentSplat = new splat(this.currentFruit.xPos, this.currentFruit.yCurrentPos, fruitList[this.currentFruitIndex]);
        currentSplat.show();
  
        this.currentFruit.fruitImg = loadImage(
          `https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${fruitList[this.currentFruitIndex]}-slice.png`
        );
        this.currentFruit.slicePat = new SlicePattern("inert", 0);
      }
  
      /*if (this.correctSlice) {
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill("green");
        textSize(100);
        text("Well done! Go to next step", width / 2, 100);
      }

      if (this.wrongSlice) {
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill("red");
        textSize(100);
        text("Oops! Wrong slice!", width / 2, 100);
      }*/

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
  
    correctSliceEffect() {
      this.correctSlice = true;
      setTimeout(() => {
        this.correctSlice = false;
      }, 1000);
    }
  
    handleMousePressed() {
      let buttonWidth = 200;
      let buttonHeight = 50;
      let buttonX = (width - buttonWidth) / 2;
      let buttonY = height - buttonHeight - 20;
  
      if (
        mouseX > buttonX &&
        mouseX < buttonX + buttonWidth &&
        mouseY > buttonY &&
        mouseY < buttonY + buttonHeight
      ) {
        if (gameManager.state === "tutorial") {
          gameManager.switchState("start");
          this.currentFruit?.slicingGif?.remove();
        } else {
          gameManager.switchState("tutorial");
        }
        return;
      }
  
      let arrowWidth = 50;
      let arrowHeight = 50;
      let leftX = 20;
      let leftY = (height - arrowHeight) / 2;
      let rightX = width - arrowWidth - 20;
      let rightY = (height - arrowHeight) / 2;
  
      if (
        mouseX >= rightX &&
        mouseX <= rightX + arrowWidth &&
        mouseY >= rightY &&
        mouseY <= rightY + arrowHeight
      ) {
        this.currentFruit?.slicingGif?.remove();
        this.currentFruit = null;
        this.currentFruitIndex = (this.currentFruitIndex + 1) % (fruitList.length - 2);
      } else if (
        mouseX >= leftX &&
        mouseX <= leftX + arrowWidth &&
        mouseY >= leftY &&
        mouseY <= leftY + arrowHeight
      ) {
        this.currentFruit?.slicingGif?.remove();
        this.currentFruit = null;
        this.currentFruitIndex = (this.currentFruitIndex - 1 + fruitList.length - 2) % (fruitList.length - 2);
      }
    }
  }
  

/*// === State Variables ===
let currentFruitIndex = 0;
let autoAdvanceTimeout = null;
let tutorialNarration = [];
let currentTutorialFruit;
let correctSlice = false;

// === Main Tutorial Screen ===
function tutorialEasyScreen() {
  background(bg);
  textAlign(CENTER, CENTER);
  textFont(gameFont);
  textSize(70);
  fill("#FCF3CF");
  stroke(30, 15, 5);
  strokeWeight(8);

  tutorialNarration = `Slice the ${fruitList[currentFruitIndex]} ${sliceNarration[currentFruitIndex]}`;
  text(tutorialNarration, width / 2, 50);

  drawBackButton();
  drawArrows();

  if (!currentTutorialFruit) {
    currentTutorialFruit = new TutorialFruit(
      fruitImgs[currentFruitIndex],
      sliceList[currentFruitIndex],
      fruitList[currentFruitIndex]
    );
  }

  if (!currentTutorialFruit.visible) {
    currentTutorialFruit.reset();
  }

  currentTutorialFruit.move();
  currentTutorialFruit.show();

  let sliceResult = currentTutorialFruit.slicePat.isSliced();
  if (sliceResult === "correct" || sliceResult === "wrong") {
    if (sliceResult === "correct") {
      correctSliceEffect();
      console.log("Correct Slice detected!!");

      if (!autoAdvanceTimeout) {
        autoAdvanceTimeout = setTimeout(() => {
          goToNextTutorialStep();
        }, 15000);
      }
    } else {
      console.log("Wrong Slice detected!!");
      wrongSliceEffect();
    }

    let currentSplat = new splat(currentTutorialFruit.xPos, currentTutorialFruit.yCurrentPos, fruitList[currentFruitIndex]);
    currentSplat.show();

    currentTutorialFruit.fruitImg = loadImage(
      `https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${fruitList[currentFruitIndex]}-slice.png`
    );
    currentTutorialFruit.slicePat = new SlicePattern("inert", 0);
  }
}


// === Feedback Text ===
function correctSliceText() {
  if (correctSlice) {
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill("green");
    textSize(100);
    text("Well done! Go to next step", width / 2, 100);
  }
  cursorEffect();
}

function correctSliceEffect() {
  correctSlice = true;
  setTimeout(() => {
    correctSlice = false;
  }, 1000);
}


// === Mouse Interaction ===
function mousePressed() {
  let buttonWidth = 200;
  let buttonHeight = 50;
  let buttonX = (width - buttonWidth) / 2;
  let buttonY = height - buttonHeight - 20;

  // Back button
  if (
    mouseX > buttonX &&
    mouseX < buttonX + buttonWidth &&
    mouseY > buttonY &&
    mouseY < buttonY + buttonHeight
  ) {
    if (gameManager.state === "tutorial") {
      gameManager.switchState("start");
      currentTutorialFruit.slicingGif.remove();
    } else {
      gameManager.switchState("tutorial");
    }
    return;
  }

  let arrowWidth = 50;
  let arrowHeight = 50;
  let leftX = 20;
  let leftY = (height - arrowHeight) / 2;
  let rightX = width - arrowWidth - 20;
  let rightY = (height - arrowHeight) / 2;

  // Right arrow (next)
  if (
    mouseX >= rightX &&
    mouseX <= rightX + arrowWidth &&
    mouseY >= rightY &&
    mouseY <= rightY + arrowHeight
  ) {
    if (currentTutorialFruit?.slicingGif) {
      currentTutorialFruit.slicingGif.remove();
      currentTutorialFruit = null;
    }

    currentFruitIndex = (currentFruitIndex + 1) % (fruitList.length - 2); // Skip bomb & dragonfruit for now
    currentTutorialFruit = new TutorialFruit(
      fruitImgs[currentFruitIndex],
      sliceList[currentFruitIndex],
      fruitList[currentFruitIndex]
    );
  }

  // Left arrow (previous)
  else if (
    mouseX >= leftX &&
    mouseX <= leftX + arrowWidth &&
    mouseY >= leftY &&
    mouseY <= leftY + arrowHeight
  ) {
    if (currentTutorialFruit?.slicingGif) {
      currentTutorialFruit.slicingGif.remove();
      currentTutorialFruit = null;
    }

    currentFruitIndex = (currentFruitIndex - 1 + fruitList.length - 2) % (fruitList.length - 2);
    currentTutorialFruit = new TutorialFruit(
      fruitImgs[currentFruitIndex],
      sliceList[currentFruitIndex],
      fruitList[currentFruitIndex]
    );
  }
}


// === UI Elements ===
function drawBackButton() {
  if (gameManager.state !== "tutorial") return;

  let buttonWidth = 200;
  let buttonHeight = 50;
  let buttonX = (width - buttonWidth) / 2;
  let buttonY = height - buttonHeight - 20;

  fill("#FCF3CF");
  stroke(30, 15, 5);
  strokeWeight(4);
  rect(buttonX + buttonWidth / 2, buttonY + buttonHeight / 2, buttonWidth, buttonHeight, 10);

  noStroke();
  fill("black");
  textSize(30);
  textAlign(CENTER, CENTER);
  text("BACK", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
}

function drawArrows() {
  if (gameManager.state !== "tutorial") return;

  let xOffset = 20;
  if (leftImg && rightImg) {
    image(leftImg, xOffset, (height - leftImg.height) / 2, 50, 50);
    image(rightImg, width - rightImg.width + xOffset, (height - rightImg.height) / 2, 50, 50);
  }
}*/
