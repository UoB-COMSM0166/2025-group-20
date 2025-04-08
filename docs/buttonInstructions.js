//this function lays out the 'buttons' in the instruction screen that lead to different information screen
let instructionFruits = [];

class InstructionFruit {
    constructor(x, y, fruitName, label, targetMode) {
      this.x = x;
      this.y = y;
      this.fruitName = fruitName;
      this.label = label;
      this.targetMode = targetMode;
      this.yOffset = 0;
      this.yDirection = 1;
      this.angle = 30;
      this.angleSpeed = 0.5;
      this.angleDirection = 1;
      this.isSliced = false;
      this.fallSpeed = 0;
      let fruitIndex = fruitList.indexOf(fruitName);

      if (fruitIndex !== -1) {
        this.fruitImg = fruitImgs[fruitIndex];
    } else {
        console.error(`Error: no fruit images found ${fruitName}`);
        this.fruitImg = createImage(150, 150); // Placeholder blank image
    }
    }

    update() {
      console.log(`🔄 Updating ${this.label}: yOffset=${this.yOffset}, angle=${this.angle}`);
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
      image(this.fruitImg, this.x, this.y + (this.isSliced ? 0 : this.yOffset), 150, 150);

        if (!this.isSliced) {
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
    }

    isClicked(mx, my) {
      return mx > this.x && mx < this.x + 150 && my > this.y + this.yOffset && my < this.y + 150 + this.yOffset;
    }
    animateSlice() {
      this.isSliced = true;
      let fruitIndex = fruitList.indexOf(this.fruitName);
      this.fruitImg = sliceImgs[fruitIndex];
      this.fallSpeed = -5;
    }
  }


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
      new InstructionFruit(centreX, topY, 'grape', "Game Objectives", 5),
      new InstructionFruit(centreX - wideSpacing, midY, 'banana' , "Controls", 6),
      new InstructionFruit(centreX + wideSpacing, midY, 'cherry', "Scoring System", 7),
      new InstructionFruit(centreX - narrowSpacing, bottomY, 'lemon', "Game Over", 8),
      new InstructionFruit(centreX + narrowSpacing, bottomY, 'watermelon', "Navigation", 9),
    ];

  //backButton.show();
    console.log("InstructionFruits have been initialised");
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
          instructionScreenFirstLoad = true;
          mode = targetMode;
          //  backButton.hide();
        }, 700);
        return;
      }
    }
  }
