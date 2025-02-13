class Fruit {
  constructor(fruitImg, fruitName) {
    // setting up basic properties
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;

    // setting up physics properties
    this.x = random(windowWidth);
    this.y = windowHeight;
    this.xSpeed = randomXSpeed(this.x); // function to determine speed
    this.ySpeed = randomYSpeed(this.y); // function to determine speed
    this.visible = true;
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
  return random(0 - maxSpeed, 0 - minSpeed);
}

function randomYSpeed(y) {
  var minSpeed = windowWidth / 15;
  var maxSpeed = windowWidth / 10;
  return random(minSpeed, maxSpeed);
}

function randomGen() {
  var index = round(random(0, fruitList.length - 1));
  var fruitImg = fruitImgs[index];
  var fruitName = fruitList[index];
  return new Fruit(fruitImg, fruitName);
}