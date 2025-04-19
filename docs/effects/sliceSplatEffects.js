class splat {
    constructor(x, y, fruitName) {
      this.x = x;
      this.y = y;
      this.alpha = 255;
      this.img = loadImage('Images/' + fruitName + '-splatter.png');
    }
  
    update() {
      this.alpha -= 5; // fading out
    }
  
    show() {
      if (this.img) {
        push();
        tint(255, this.alpha);
        image(this.img, this.x, this.y, 270, 270); // may need to adjust the size later
        pop();
      }else {
        console.log("No image loaded for splatter!");
      }
    }
  
    isDone() {
      return this.alpha <= 0;
    }
}