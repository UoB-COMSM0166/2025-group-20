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

class LoseLifeText extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill("red");
    textSize(80);
    text("You lost!", width / 2, 100);
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

class GainLifeText extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill("green");
    textSize(100);
    text("Life Gained!", width / 2, 100);
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

class CorrectSlice extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('green');
    textSize(100);
    text('Correct Slice!', width/2, 100);
  }
}

class BombSuccess extends SliceEffect{
  constructor() {
    super();
  }
  effect(){
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill("green");
    textSize(80);
    text("Well done!", width / 2, 100);
  }
}
