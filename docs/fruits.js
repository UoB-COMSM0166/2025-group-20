class Fruit {
  constructor(fruitImg, fruitName, size) {
    // setting up basic properties
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size  = size;

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
    this.ySpeed += gravity;
    if (this.y > height) {
      this.visible = false;
    }
  }
}

function randomXSpeed(x) {
  /* if the object generates in the left side of the screen, we want it to start moving
  to the right side of the screen. vice versa */
  var minSpeed = windowWidth * 0.005;
  var maxSpeed = windowWidth * 0.01;
  if (x < windowWidth / 2) {
    return random(minSpeed, maxSpeed);
  }
  else if (x == windowWidth / 2) {
    return 0;
  }
  return random(0 - maxSpeed, 0 - minSpeed);
}

function randomYSpeed(y) {
  var minSpeed = 0 - (windowHeight * 0.005);
  var maxSpeed = 0 - (windowHeight * 0.02);
  return random(-10.4, -7.4);
}

function randomGen() {
  var index = round(random(0, fruitList.length - 1));
  var fruitImg = fruitImgs[index];
  var fruitName = fruitList[index];
  var size = noise(frameCount)*20 + 40;
  return new Fruit(fruitImg, fruitName, size);
}