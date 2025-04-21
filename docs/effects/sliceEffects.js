class SliceEffect{
  constructor(){
    this.display = false;
  }

  show(){
    this.display = true;
    setTimeout(() => {
      this.display = false;
    }, 1000);
  }

  active(){
    if (this.display){
      this.effect();
    }
  }

  effect(){};
}

class RecipeComplete extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('white');
    textSize(100);
    text('Recipe Complete!', width/2,100);
  }
}

class LoseLife extends SliceEffect{
  constructor() {
    super();
  }

  effect(){
    push();
    noFill();
    stroke("red");
    strokeWeight(20);
    rectMode(CORNER);
    rect(0, 0, width, height, 20);
    pop();
  }
}

class GainLife extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    push();
    noFill();
    stroke("lime");
    strokeWeight(20);
    rectMode(CORNER);
    rect(0, 0, width, height, 20);
    pop();
  }
}

class WrongSlice extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('red');
    textSize(100);
    text('Wrong Slice!', width/2,100);
  }
}  

function correctSliceText(){
  if(correctSlice){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('green');
    textSize(100);
    text('Correct Slice!', width/2, 100);
  }
}

function correctSliceEffect () {
  correctSlice = true;
  setTimeout(() => {
    correctSlice = false
  }, 1000);
}