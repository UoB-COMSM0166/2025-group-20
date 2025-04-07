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

function greenBorder() {
  if(displayGreen == true){
    push();
    noFill();
    stroke("lime");
    strokeWeight(20);
    rectMode(CORNER);
    rect(0, 0, width, height, 20);
    pop();
  }
}

function completionText(){
  if(recipeComplete){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('white');
    textSize(100);
    text('Recipe Complete!', width/2,100);
  }
}

function wrongSliceText(){
  if(wrongSlice){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('red');
    textSize(100);
    text('Wrong Slice!', width/2, 100);
  }
}

function wrongSliceEffect(){
  wrongSlice = true;
  setTimeout(() => {
    wrongSlice = false
  }, 1000);
}

function recipeCompleteEffect(){
  recipeComplete = true;
  setTimeout(() => {
    recipeComplete = false
  }, 1000);
}

function gainLifeEffect(){
  displayGreen = true;
  setTimeout(() => {
    displayGreen = false;
  }, 1000);
}


function loseLifeEffect(){
  displayBorder = true;
  setTimeout(() => {
     displayBorder = false;
  }, 1000);
}
