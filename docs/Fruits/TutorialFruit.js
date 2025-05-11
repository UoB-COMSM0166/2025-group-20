class TutorialFruit extends Fruit{
    constructor(fruitImg, fruitName, slicePat, listIndex) {
        super(fruitImg, fruitName, slicePat, listIndex);
        this.xPos = width/2;
        this.fruitState = "rising";
        this.slicingGif = loadImage('Design/Images/' + this.fruitName + '-slice.gif');
    }

    //Overrides function from superclass to simplify movement during tutorial state
    move(){
        if (this.fruitState === "rising") {
            this.yPos += this.ySpeed;
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
        this.slicePat.move(this.xPos + this.size / 2, this.yPos + this.size / 2);
    }

    //Overrides function from superclass to add additional animation to further prompt user during tutorial
    show(){
        image(this.fruitImg, this.xPos, this.yPos, this.size, this.size);
        if (this.slicingGif !== null){
            image(this.slicingGif, this.xPos, this.yPos, this.size, this.size);
        }
    }

    setGif(){
        this.slicingGif = null;
    }
}