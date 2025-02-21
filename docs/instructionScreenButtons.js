//this function lays out the 'buttons' in the instruction screen that lead to differet information screen
class InstructionFruit {
    constructor(x, y, img, slicedImg, label, targetMode) {
      this.x = x;
      this.y = y;
      this.img = img;
      this.slicedImg = slicedImg;
      this.label = label;
      this.targetMode = targetMode;
      this.yOffset = 0;
      this.yDirection = 1;
      this.angle = 30;
      this.angleSpeed = 0.5;
      this.angleDirection = 1;

      this.isSliced = false;
      this.fallSpeed = 0;
    }
  
   /* update() {
      // I'm trying to make the fruit float up and down but I want them to do it randomly
      this.yOffset += this.yDirection * 0.5;
      if (this.yOffset > 10 || this.yOffset < -10) {
        this.yDirection *= -1;
      }
      
      //rotated text like in the start Screen
      this.angle += this.angleSpeed * this.angleDirection;
      if (this.angle >= 40 || this.angle <= 20) {
        this.angleDirection *= -1;
      }
      else{
        this.y += this.fallSpeed; //make all fruits fall off screen
        this.fallSpeed += 0.5; //gravity
      }
    }*/

    update() {
      if (!this.isSliced) {
        // I'll make a random generation float thing I hope soon
        this.yOffset += this.yDirection * 0.5;
        if (this.yOffset > 10 || this.yOffset < -10) {
                this.yDirection *= -1;
        }

            // rotating text like in the start screen
        this.angle += this.angleSpeed * this.angleDirection;
        if (this.angle >= 40 || this.angle <= 20) {
                this.angleDirection *= -1;
        }
        } 
        else {
          this.y += this.fallSpeed;
          this.fallSpeed += 0.5; // gravity and fruit fall off
        }
    }
  
    display() {
      if(!this.isSliced){
      image(this.img, this.x, this.y + this.yOffset, 150, 150);
      }
      else{
        image(this.slicedImg, this.x, this.y, 150, 150);
      }
      
      push();
      translate(this.x + 75, this.y + 180 + this.yOffset);
      rotate(radians(this.angle));
      textFont(gameFont);
      fill("#FCF3CF");

      textSize(24);
      textAlign(CENTER);
      text(this.label, 0, 0);
      pop();
    }
  
    isClicked(mx, my) {
      return mx > this.x && mx < this.x + 150 && my > this.y + this.yOffset && my < this.y + 150 + this.yOffset;
    }
    animateSlice() {
      this.isSliced = true;
      this.fallSpeed = -5;
    }
  }

  
  let instructionFruits = [];
  
  function setupInstructionButtons() {
    console.log("Setting up instruction buttons");
    let centreX = width / 2.2;
    let centreY = height * 0.4;

    let topY = centreY - height * 0.25;
    let midY = centreY - height * 0.05;
    let bottomY = centreY + height * 0.2;

    let wideSpacing = width * 0.22;
    let narrowSpacing = width * 0.14;
    instructionFruits = [
      new InstructionFruit(centreX, topY, pearImg, pearSliceImg, "Game Objectives", 5),
      new InstructionFruit(centreX - wideSpacing, midY, bananaImg, bananaSliceImg, "Controls", 6),
      new InstructionFruit(centreX + wideSpacing, midY, cherryImg, cherrySliceImg, "Scoring System", 7),
      new InstructionFruit(centreX - narrowSpacing, bottomY, lemonImg, lemonSliceImg, "Game Over", 8),
      new InstructionFruit(centreX + narrowSpacing, bottomY, watermelonImg, watermelonSliceImg, "Navigation", 9),
    ];

    console.log("InstructionFruits have been initilised");
  }
  
  function drawInstructionButtons() {
    for (let fruit of instructionFruits) {
      fruit.update();
      fruit.display();
    }
  }
  
  function checkInstructionClick(mx, my) {
    for (let fruit of instructionFruits) {
      if (fruit.isClicked(mx, my)) {
        console.log("clicked on: ${fruit.label}, Changing mode to: ${fruit.targetMode}");
        fruit.animateSlice();
        let targetMode = fruit.targetMode;
        setTimeout(() => {
          mode = targetMode;
        }, 700);
        return;
      }
    }
  }

/*function instructionsControlsButton(){
    image(pearImg, );
}
function instructionsGameOverConditions(){
    image(watermelonImg, );
}
function instructionsNavigationButton(){
    image(lemonImg, );
}
function instructionsObjectivesButton(){
    image(cherryImg, );
}
function instructionsScoringSystem(){
    image(bananaImg, );
}*/