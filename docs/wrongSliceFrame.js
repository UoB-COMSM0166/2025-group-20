function redBorder() {
  if(displayBorder == true){
    push();
    noFill();
    stroke("red");
    strokeWeight(20);
    rectMode(CORNER);
    rect(0, 0, width, height, 20);
    pop();
  }
}

function wrongSliceEffect(){
   displayBorder = true;
   setTimeout(() => {
      displayBorder = false;
   }, 1000);
}
