class TutorialFruit extends Fruit{
    constructor(fruitImg, fruitName, slicePat, listIndex) {
        super(fruitImg, fruitName, slicePat, listIndex);
        this.xPos = width/2;
        this.yPos = height;
        this.ySpeed = -11;
        this.fruitState = "rising";
        if (this.fruitName !== 'bomb'){
            this.slicingGif = createVideo('Design/Images/' + this.fruitName + '-slice.mp4');
        }
    }

    move(){
        if (this.fruitName !== 'bomb'){
            this.slicingGif.position(this.xPos, this.yPos);
        }
        if (this.fruitState === "rising") {
            this.yPos += this.ySpeed;
            this.slicePat.move(this.xPos + this.size / 2, this.yPos + this.size / 2);
            this.ySpeed += this.gravity;
            if (this.yPos <= this.maxHeight) {
                this.yPos = this.maxHeight;
                this.fruitState = "falling";
                this.ySpeed = Math.abs(this.ySpeed) - this.gravity;
            }
        } else if (this.fruitState === "falling") {
            this.ySpeed += this.gravity;
            this.yPos += this.ySpeed;
        }
        if (this.yPos > height) {
            this.visible = false;
        }
    }
    show(){
        image(this.fruitImg, this.xPos, this.yPos, this.size, this.size);
        if (this.fruitName !== 'bomb'){
            this.slicingGif.loop();
        }
    }
}