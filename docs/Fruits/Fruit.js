class Fruit {
  constructor(fruitImg, fruitName, slicePat, listIndex) {
    // setting up basic attributes
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size = 110;
    if (gameManager.getMode() === 'easy' && !tutorial){
      this.slicePat = new SlicePattern('easy', this.size);
    }
    else {
      this.slicePat = new SlicePattern(slicePat, this.size);
    }
    this.index = listIndex;
    this.maxHeight = height * 0.00125;

    // setting up physics attributes
    this.xPos = random(width);
    this.yPos = height;
    this.xSpeed = this.randomXDirection(this.xPos);
    this.ySpeed = -11;
    this.visible = true;
    this.gravity = 0.1;
    this.removeFruit();
  }

  show() {
    image(this.fruitImg, this.xPos, this.yPos, this.size, this.size);
  }
  
  move() {
    // moving fruit along x and y axes
    if (this.xPos + this.xSpeed > width-this.size && this.slicePat.type === 'inert'){
      this.xPos = width-this.size;
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
    if(this.yPos > height && this.visible) {
      this.visible = false;
      this.removeFruit();
    }
  }

  randomXDirection(xPos) {
    /* picks an x speed which moves the fruit in the opposte side of the
    screen from where it spawned */
    if(xPos > width / 2) {
      return -5;
    }
    return 5;
  }

  //removes fruit from screen
  removeFruit() {
    if (!this.visible) {
      //Remove button if click slicePattern
      /*if (this.fruitName === 'blueberry' && gameManager.getMode() === 'hard' && this.slicePat.type !== 'inert'){
        this.slicePat.hit.remove();
      }*/
      gameManager.getFruitOnScreen().splice(gameManager.getFruitOnScreen().indexOf(this.index), 1);
    }
  }

  getIndex() {
    return this.index;
  }

  getName() {
    return this.fruitName;
  }

  //makes slice pattern inert to stop it from affecting game attributes after being sliced
  makeInert(){
    this.slicePat = new SlicePattern('inert', 0);
  }
}
