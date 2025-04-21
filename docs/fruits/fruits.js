class Fruit {
  gravity = 0.1;
  constructor(fruitImg, fruitName, slicePat, listIndex) {
    // setting up basic attributes
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size = 110;
    if (gameManager.getDifficulty() == 'easy'){
      this.slicePat = new SlicePattern('easy', this.size);
    }
    else {
      this.slicePat = new SlicePattern(slicePat, this.size);
    }
    this.index = listIndex;
    this.maxHeight = windowHeight * 0.00125;

    // setting up physics attrbutes
    this.xPos = random(windowWidth);
    this.yPos = windowHeight;
    this.xSpeed = this.randomXDirection(this.xPos);
    this.ySpeed = -11;
    this.visible = true;
    this.gravity = 0.1;
    this.removeFruit();
  }

  show() { //adding a glow effect to the dragonfruit as it +1's life 
    if (this.fruitName === 'dragonfruit') {
      push();
      tint(255, 220, 150); // this should be a yellowish glow
      image(this.fruitImg, this.xPos, this.yPos, this.size, this.size);
      pop();
  } else {
      image(this.fruitImg, this.xPos, this.yPos, this.size, this.size);
  }
  
  }
  
  move() {
    // moving fruit along x and y axes
    if (this.xPos + this.xSpeed > windowWidth-110 && this.slicePat.type === 'inert'){
      this.xPos = windowWidth-110;
    }
    else if (this.xPos + this.xSpeed < 0  && this.slicePat.type === 'inert'){
      this.xPos = 0;
    }
    else{
      this.xPos += this.xSpeed;
    }
    this.yPos += this.ySpeed;
    this.ySpeed += this.gravity;
    this.slicePat.move(this.xPos+(this.size/2), this.yPos+(this.size/2));

    // fruit starts falling down when it reaches max height
    if(this.yPos < this.maxHeight) {
      this.ySpeed = 0;
    }

    // toggle off visibily off screen
    if(this.yPos > windowHeight && this.visible) {
      this.visible = false;
      this.removeFruit()
    }
  }

  randomXDirection(xPos) {
    /* picks an x speed which moves the fruit in the opposte side of the
    screen from where it spawned */
    if(xPos > windowWidth / 2) {
      return -5;
    }
    return 5;
  }
  
  removeFruit() {
    if (!this.visible) {
      fruitOnScreen.splice(fruitOnScreen.indexOf(this.index), 1);
    }
  }
}
