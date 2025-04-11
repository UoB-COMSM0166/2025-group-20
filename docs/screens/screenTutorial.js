let currentFruitIndex = 0;;
let autoAdvanceTimeout = null;

class TutorialFruit {
    constructor(img, slicePattern, fruitName) {
        this.fruitImg = img;
        this.fruitName = fruitName;
        this.xPos = windowWidth / 2;
        this.startYPos = windowHeight;
        this.maxHeight = windowHeight * 0.25;
        this.pauseY = windowHeight / 2;
        this.yCurrentPos = this.startYPos;
        this.ySpeed = -11;
        this.slicingGif = null;
        this.size = 110;
        this.currentSlicePattern = slicePattern;
        this.slicePat = new SlicePattern(slicePattern, this.size);
        this.fruitState = "rising";
        this.visible = true;
    }

    move() {
        if(this.fruitState == "rising") {
            this.yCurrentPos += this.ySpeed;
            this.slicePat.move(this.xPos+(this.size/2), this.yCurrentPos+(this.size/2));
            this.ySpeed += gravity;
            if(this.yCurrentPos <= this.maxHeight){
                this.yCurrentPos = this.maxHeight;
                this.fruitState = "falling";
                this.ySpeed = Math.abs(this.ySpeed);
                this.ySpeed -= gravity;
            }
        }
        else if (this.fruitState === "falling") {
            this.ySpeed += gravity;
            this.yCurrentPos += this.ySpeed;
        }
  

         // toggle off visibily off screen
    if(this.yCurrentPos > windowHeight) {
        this.visible = false;
      }
    }

    show(){
        if(this.visible){
            image(this.fruitImg, this.xPos, this.yCurrentPos, this.size, this.size);
        }
        if(!this.slicingGif){
                this.slicingGif = createImg('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[currentFruitIndex] + '-slice.gif');
                this.slicingGif.size(100, 100);
                this.slicingGif.style('position', 'absolute');
                this.slicingGif.style('z-index', '1000');
        }
        this.slicingGif.position(this.xPos, this.yCurrentPos);
    }

    reset() {
        this.yCurrentPos = this.startYPos;
        this.ySpeed = -11;
        this.fruitState = "rising";
        this.visible = true;
        if (this.slicingGif) {
          this.slicingGif.remove(); 
          this.slicingGif = null;
        }
        this.slicePat = new SlicePattern(this.currentSlicePattern, this.size);
        this.fruitImg = fruitImgs[currentFruitIndex];
    }

}

let tutorialNarration = [];
let currentTutorialFruit;

function tutorialEasyScreen() {

    background(bg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    textSize(70);
    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(8);

    tutorialNarration = "Slice the " + fruitList[currentFruitIndex] + " " + sliceNarration[currentFruitIndex];
    text(tutorialNarration, width / 2, 50 );

    drawBackButton();
    drawArrows();

   
    if(!currentTutorialFruit){
        currentTutorialFruit = new TutorialFruit(fruitImgs[currentFruitIndex], sliceList[currentFruitIndex], fruitList[currentFruitIndex]);
    } 

    if (!currentTutorialFruit.visible) {
        currentTutorialFruit.reset();
    }

    currentTutorialFruit.move();
    currentTutorialFruit.show();
    let sliceResult = currentTutorialFruit.slicePat.isSliced();
        if (sliceResult === 'correct' || sliceResult === 'wrong') {
            if (sliceResult === 'correct') {
                correctSliceEffect();
                console.log("Correct Slice detected!!");
                if (!autoAdvanceTimeout) { //sets a timeout so the player immediately moves on if they don't click the next button
                    autoAdvanceTimeout = setTimeout(() => {
                        goToNextTutorialStep();
                    }, 15000);
                }
            
        } else if (sliceResult === 'wrong'){
            console.log("Wrong Slice detected!!");
            wrongSliceEffect();
        }
        let currentSplat = new splat(currentTutorialFruit.xPos, currentTutorialFruit.yCurrentPos, fruitList[currentFruitIndex]);
        currentSplat.show();
        currentTutorialFruit.fruitImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[currentFruitIndex]+ '-slice.png');
        currentTutorialFruit.slicePat = new SlicePattern('inert', 0);
    }

}

let correctSlice = false;
function correctSliceText(){
    if(correctSlice){
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill('green');
        textSize(100);
        text('Well done! Go to next step', width/2, 100);
    }
   cursorEffect();
}

function correctSliceEffect(){
    correctSlice = true;
    setTimeout(() => {
        correctSlice = false
      }, 1000);

}

function mousePressed(){
    let buttonWidth = 200;
    let buttonHeight = 50;
    let buttonX = (width - buttonWidth) / 2;
    let buttonY = height - buttonHeight - 20; 
    if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        
        if (gameManager.state === "tutorial") {
            gameManager.switchState("start");
            currentTutorialFruit.slicingGif.remove();
        } else {
            gameManager.switchState("tutorial");
        }
        return;
    }

    let xDiff = 20;
    let arrowWidth = 50;
    let arrowHeight = 50;
    let leftX = xDiff;
    let leftY = (height - arrowHeight) / 2;
    let rightX = width - arrowWidth - 20;
    let rightY = (height - arrowHeight) / 2;

    if (mouseY >= rightY && mouseY <= rightY + arrowHeight && mouseX >= rightX && mouseX <= rightX + arrowWidth) {
        console.log("Mouse has been pressed here!")
        //next step
        if (currentTutorialFruit && currentTutorialFruit.slicingGif) {
            currentTutorialFruit.slicingGif.remove();
            currentTutorialFruit = null;
          }

        currentFruitIndex = (currentFruitIndex + 1) % (fruitList.length-2); //skip out bomb and dragonfruit 
        currentTutorialFruit = new TutorialFruit(fruitImgs[currentFruitIndex], sliceList[currentFruitIndex], fruitList[currentFruitIndex]);
    }else if (mouseX >= leftX && mouseX <= leftX + arrowWidth && mouseY >= leftY && mouseY <= leftY + arrowHeight) {

        if (currentTutorialFruit && currentTutorialFruit.slicingGif) {
            currentTutorialFruit.slicingGif.remove();
            currentTutorialFruit = null;

          }
        
        currentFruitIndex = (currentFruitIndex - 1 + fruitList.length - 2) % (fruitList.length - 2);
        currentTutorialFruit = new TutorialFruit(fruitImgs[currentFruitIndex], sliceList[currentFruitIndex], fruitList[currentFruitIndex]);
    }
    //cursorEffect();  
}

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

function drawArrows(){
    if (gameManager.state !== "tutorial") return;
    let xOffset = 20;
    if (leftImg && rightImg) {
        image(leftImg, xOffset, (height - leftImg.height) / 2, 50, 50);
        image(rightImg, width - rightImg.width + xOffset, (height - rightImg.height) / 2, 50, 50);
   }

}
