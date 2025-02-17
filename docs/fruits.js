class Fruit {
  constructor(fruitImg, fruitName, size, slicePat) { //slicePat here as well
    // setting up basic properties
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size  = size;
    this.slicePat = new SlicePattern(slicePat);


    // setting up physics properties
    this.x = random(windowWidth);
    this.y = windowHeight;
    this.xSpeed = randomXSpeed(this.x); // function to determine speed
    this.ySpeed = randomYSpeed(this.y); // function to determine speed
    this.visible = true;
  }

  show() {
    image(this.fruitImg, this.x, this.y, this.size, this.size);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.slicePat.move(this.x, this.y);
    this.ySpeed += gravity;
    if(this.y < height * 0.00125){
      this.ySpeed = 0;
    }
    if (this.y > height) {
      this.visible = false;
    }
  }

  checkSlice(swipeDirection){ //Following function is able to set correct slice boolean
    if(!this.isSliced){
      this.isSliced = true;

      if(swipeDirection == this.slicePat.correctSlice) {
        this.isSlicedCorrectly = true;
      } else{
        this.isSlicedCorrectly = false;
      }
    }
  }
}

