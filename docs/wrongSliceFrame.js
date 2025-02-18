function redBorder() {
  if(displayBorder === true){
    noFill();
    stroke("red");
    strokeWeight(20);
    rectMode(CORNER);
    rect(0, 0, width, height, 20);
    setTimeout(() => {
      displayBorder = false;
    }, 3000);
  }
}