class SliceEffect{
  constructor(){
    this.display = false;
  }

  show(){
    this.display = true;
    setTimeout(() => {
      this.display = false;
      overlay.clear();
    }, 1000);
  }

  active(){
    if (this.display){
      this.effect();
    }
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

class RecipeComplete extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    overlay.textAlign(CENTER, CENTER);
    overlay.textFont(gameFont);
    overlay.fill('white');
    overlay.textSize(100);
    overlay.text('Recipe Complete!', width/2,100);
  }
}

class WrongSlice extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    overlay.textAlign(CENTER, CENTER);
    overlay.textFont(gameFont);
    overlay.fill('red');
    overlay.textSize(100);
    overlay.text('Wrong Slice!', width/2,100);
  }
}