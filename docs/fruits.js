class Fruit {
  constructor(fruitImg, fruitName, size, slicePat) { //slicePat here as well
    // setting up basic properties
    this.fruitImg = fruitImg;
    this.fruitName = fruitName;
    this.size  = size;
    this.slicePat = new SlicePattern(slicePat, this.size);


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
  return new Fruit(fruitImg, fruitName, size, slicePat);
}

//Slice Pattern has series of hitboxes tracking the position of the fruit
class SlicePattern{
  constructor(type, size){
    this.hits = [3];
    this.type = type;
    if (this.type == 'bomb' || this.type == 'click'){
      this.diameter = size;
    }
    else {
      this.diameter = size/3;
      this.hits[1] = new HitBox(this.diameter);
      this.hits[2] = new HitBox(this.diameter);
    }
    this.hits[0] = new HitBox(this.diameter);
  }
  
  isSliced(){
    if (this.type == 'bomb'){
      if (this.hits[0].hit){
        return 'bomb';
      }
    }
    else if (this.type == 'click') {
      if (this.hits[0].hit){
        return 'correct';
      }
    }
    else if (this.type == 'lrdown/rlup' || this.type == 'rldown/lrup'){
      if (this.hits[0].hit && !this.hits[2].hit && !this.hits[1].hit){
        return 'wrong';
      }
      else if (this.hits[0].hit && this.hits[1].hit && this.hits[2].hit){
        return 'correct';
      }
    }
    else{
      if (this.hits[2].hit && this.hits[0].hit && this.hits[1].hit){
        return 'correct';
      }
      else if (!this.hits[2].hit && (this.hits[0].hit || this.hits[1].hit)) {
        return 'wrong';
      }
    }
 }

  move(x, y){
   this.hits[0].move(x, y);
   if (this.type == 'down'){
     this.hits[1].move(x, y + this.diameter);
     this.hits[2].move(x, y - this.diameter);
    }
    else if (this.type == 'up'){
     this.hits[1].move(x, y - this.diameter);
     this.hits[2].move(x, y + this.diameter);
    }
    else if (this.type == 'left'){
     this.hits[1].move(x - this.diameter, y);
     this.hits[2].move(x + this.diameter, y);
    }
    else if (this.type == 'right'){
     this.hits[1].move(x + this.diameter, y);
     this.hits[2].move(x - this.diameter, y);
    }
    else if (this.type == 'lrdown/rlup'){
     this.hits[1].move(x - this.diameter, y - this.diameter);
     this.hits[2].move(x + this.diameter, y + this.diameter);
    }
    else if (this.type == 'rldown/lrup'){
     this.hits[1].move(x + this.diameter, y - this.diameter);
     this.hits[2].move(x - this.diameter, y + this.diameter);
    }
  }
}
 
class HitBox {
  constructor(diameter){
    this.diameter = diameter;
    this.hit = false;
  }

  move(x, y){
    this.x = x;
    this.y = y;
    //uncomment line below for visual display of hit box
    circle(this.x, this.y, this.diameter);
    this.umx = x+(this.diameter/2);
    this.lmx = x-(this.diameter/2);
    this.umy = y+(this.diameter/2);
    this.lmy = y-(this.diameter/2);
    this.isHit();
  }
   
  isHit(){
    if (mouseIsPressed){
      if (mouseX <= this.umx && mouseX >= this.lmx && mouseY <= this.umy && mouseY >= this.lmy){
        this.hit = true;
      }
    }
    else{
      this.hit = false;
    }
  }

}
