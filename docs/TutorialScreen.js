class TutorialManager {
    constructor() {
        this.fruitIndex = 0;
        this.fruitGenerator = new FruitGenerator();
        this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
        this.wrongSliceText = new SliceEffect(()=>{
            overlay.textAlign(CENTER, CENTER);
            overlay.textFont(gameFont);
            overlay.fill('red');
            overlay.textSize(100);
            overlay.text('Wrong Slice!', width/2,100);
        });
        this.gainLifeEffect = new SliceEffect(()=>{
            push();
            noFill();
            stroke('lime');
            strokeWeight(20);
            rectMode(CORNER);
            rect(0, 0, width, height, 20);
            pop();
        });
        this.correctSliceText = new SliceEffect(()=>{
            textAlign(CENTER, CENTER);
            textFont(gameFont);
            fill('lime');
            textSize(100);
            text('Correct Slice!', width/2, 100);
        });
        this.cursorEffect = new CursorEffect();
        this.lives = new Lives();
        this.lives.loseLife();
    }

    drawTutorialScreen() {
        background(bg);
        this.tutorialFruit.show();
        this.tutorialFruit.move();
        this.wrongSliceText.active();
        this.correctSliceText.active();
        if (!this.tutorialFruit.visible){
            this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
        }
        if (this.cursorEffect) {
            this.cursorEffect.cursorEffect();
        }
        //this.drawNarrationBox();
        if (this.tutorialFruit.fruitName === 'dragonfruit'){
            this.lives.drawLife();
        }
        if (this.tutorialFruit.slicePat.isSliced() === 'correct') {
            this.correctSliceText.show();
            if (this.tutorialFruit.fruitName === 'dragonfruit'){
                this.lives.gainLife();
                this.gainLifeEffect.show();
            }
            this.sliceHandle();
            this.fruitIndex++;
        }
        else if (this.tutorialFruit.slicePat.isSliced() === 'wrong'){
            this.wrongSliceText.show();
            this.sliceHandle();
        }
        else if (this.tutorialFruit.slicePat.isSliced() === 'bomb'){
            this.tutorialFruit.makeInert();
            this.bombGif = createVideo('Design/Images/boom.mp4').size(400, 300);
            this.bombGif.position((this.currentFruit.xPos - 150), (this.currentFruit.yCurrentPos - 150));
            this.bombGif.play();
            if (!this.tutorialFruit.visible) {
                this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
            }
        }
        if (this.tutorialFruit.fruitName === 'bomb'){
            setTimeout(() => {
                if (this.tutorialFruit.slicePat.isSliced() !== 'bomb'){
                    overlay.textAlign(CENTER, CENTER);
                    overlay.textFont(gameFont);
                    overlay.fill('white');
                    overlay.textSize(100);
                    overlay.text('Tutorial Complete!', width/2,100);
                    this.tutorialFruit = null;
                }
            }, 5000);
        }
    }

    sliceHandle(){
        this.tutorialFruit.fruitImg = gameManager.getSliceImages()[this.fruitIndex];
        this.tutorialFruit.slicingGif.hide();
        this.tutorialFruit.makeInert();
    }
}