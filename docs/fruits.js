class Fruit {
  constructor(fruitImg, fruitName, size, slicePat, index) { //slicePat here as well
    // setting up basic properties
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size  = size;
    this.slicePat = new SlicePattern(slicePat, this.size);
    this.index = index;


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
  this.x += 0.5;
  this.y += this.ySpeed;
  this.slicePat.move(this.x+(this.size/2), this.y+(this.size/2));
  this.ySpeed += gravity;
  if(this.y < height * 0.00125){
  this.ySpeed = 0;
  }
  if (this.y > height) {
  this.visible = false;
  }
  }
  }
  
  function randomXSpeed(x) {
  /* if the object generates in the left side of the screen, we want it to start moving
  to the right side of the screen. vice versa */
  var minSpeed = windowWidth * 0.002;
  var maxSpeed = windowWidth * 0.006;
  if (x < windowWidth / 2) {
  return random(minSpeed, maxSpeed);
  }
  else if (x == windowWidth / 2) {
  return 0;
  }
  return random(0 - maxSpeed, 0 - minSpeed);
  }
  
  function randomYSpeed(y) {
  var minSpeed = -9;
  var maxSpeed = -11;
  return random(minSpeed, maxSpeed);
  /*var minSpeed = 0 - (windowHeight * 0.005);
  var maxSpeed = 0 - (windowHeight * 0.02);
  return random(-10.4, -7.4);*/
  }
  
  function randomGen() {
  var index = round(random(0, fruitList.length - 1));
  var fruitImg = fruitImgs[index];
  var fruitName = fruitList[index];
  var slicePat = sliceList[index];
  var size = noise(frameCount)*60 + 120;
  return new Fruit(fruitImg, fruitName, size, slicePat, index);
  }
  
