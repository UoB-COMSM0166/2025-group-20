class Fruit {
  constructor(fruitImg, fruitName, slicePat, listIndex) {
    // setting up basic attributes
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size = 110;
    if (difficulty == 'easy'){
      this.slicePat = new SlicePattern('easy', this.size);
    }
    else {
      this.slicePat = new SlicePattern(slicePat, this.size);
    }
    this.index = listIndex;

    // setting up physics attrbutes
    this.xPos = random(windowWidth);
    this.yPos = windowHeight;
    this.xSpeed = randomXDirection(this.xPos);
    this.ySpeed = -11;
    this.visible = true;
  }

  show() {
    image(this.fruitImg, this.xPos, this.yPos, this.size, this.size);
  }
  
  move() {
    // moving fruit along x and y axes
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
    this.ySpeed += gravity;
    this.slicePat.move(this.xPos+(this.size/2), this.yPos+(this.size/2));

    // fruit starts falling down when it reaches max height
    if(this.yPos < maxHeight) {
      this.ySpeed = 0;
    }

    // toggle off visibily off screen
    if(this.y > height) {
      this.visibility = false;
    }
  }
}

function randomXDirection(xPos) {
  /* picks an x speed which moves the fruit in the opposte side of the
  screen from where it spawned */
  if(xPos > windowWidth / 2) {
    return -5;
  }
  return 5;
}
