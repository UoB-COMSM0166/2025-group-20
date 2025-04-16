
class TutorialFruit {
    constructor(img, slicePattern, fruitName) {
      this.fruitImg = img;
      this.fruitName = fruitName;
      this.xPos = windowWidth / 2;
      this.startYPos = windowHeight;
      this.maxHeight = windowHeight * 0.25;
      this.yCurrentPos = this.startYPos;
      this.ySpeed = -11;
      this.size = 110;
      this.visible = true;
      this.slicingGif = null;
  
      this.currentSlicePattern = slicePattern;
      this.slicePat = new SlicePattern(slicePattern, this.size);
  
      this.fruitState = "rising";
    }
  
    move() {
      if (this.fruitState === "rising") {
        this.yCurrentPos += this.ySpeed;
        this.slicePat.move(
          this.xPos + this.size / 2,
          this.yCurrentPos + this.size / 2
        );
        this.ySpeed += gravity;
  
        if (this.yCurrentPos <= this.maxHeight) {
          this.yCurrentPos = this.maxHeight;
          this.fruitState = "falling";
          this.ySpeed = Math.abs(this.ySpeed) - gravity;
        }
      } else if (this.fruitState === "falling") {
        this.ySpeed += gravity;
        this.yCurrentPos += this.ySpeed;
      }
  
      if (this.yCurrentPos > windowHeight) {
        this.visible = false;
      }
    }
  
    show() {
      if (this.visible) {
        image(this.fruitImg, this.xPos, this.yCurrentPos, this.size, this.size);
      }
  
      if (!this.slicingGif) {
        this.slicingGif = createImg(
          `https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/${this.fruitName}-slice.gif`
        );
        this.slicingGif.size(100, 100);
        this.slicingGif.style("position", "absolute");
        this.slicingGif.style("z-index", "1000");
      }
  
      this.slicingGif.position(this.xPos, this.yCurrentPos);
    }
  
    reset(fruitImg, slicePattern) {
      this.yCurrentPos = this.startYPos;
      this.ySpeed = -11;
      this.fruitState = "rising";
      this.visible = true;
  
      if (this.slicingGif) {
        this.slicingGif.remove();
        this.slicingGif = null;
      }
  
      this.slicePat = new SlicePattern(slicePattern, this.size);
      this.fruitImg = fruitImg;
    }
  }