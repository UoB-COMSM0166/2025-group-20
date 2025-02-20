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
  
}

function recipeComplete(){
  setInterval(() => {
    this.x = width / 2; 
    this.y = 20;
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('white');
    textSize(150);
    text('Recipe Complete!');
  }, 1000);
}

function loseLifeEffect(){
  displayBorder = true;
  setTimeout(() => {
     displayBorder = false;
  }, 1000);
}
