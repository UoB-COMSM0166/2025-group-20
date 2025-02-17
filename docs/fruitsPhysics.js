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
  }
  
  function randomGen() {
    var index = round(random(0, fruitList.length - 1));
    var fruitImg = fruitImgs[index];
    var fruitName = fruitList[index];
    var slicePat = sliceList[index];
    var size = noise(frameCount)*60 + 120;
    return new Fruit(fruitImg, fruitName, size, slicePat);
  }