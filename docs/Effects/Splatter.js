class Splatter {
  constructor(x, y, fruit) {
    this.x = x;
    this.y = y;
    this.alpha = 255;
    this.img = gameManager.getSplatImages()[fruit.getIndex()];
  }

  //fades out splatter to avoid causing lag
  update() {
    this.alpha -= 5;
  }

  //Shows splatter image
  show() {
    if (this.img) {
      push();
      tint(255, this.alpha);
      image(this.img, this.x, this.y, 270, 270); // may need to adjust the size later
      pop();
    }
  }

  //Informs system when splatter has fully faded so it can be removed from splatter array
  isDone() {
    return this.alpha <= 0;
  }
}