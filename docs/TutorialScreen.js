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
        this.cursorEffect = false;
        this.cursorScreenEffect = new CursorEffect();
        this.lives = new Lives();
        this.lives.loseLife();
        this.bombGif = loadImage('Design/Images/boom.gif');
        this.tutorialEnd = false;
    }

    drawTutorialScreen() {
        background(bg);
        this.wrongSliceText.active();
        this.correctSliceText.active();
        this.gainLifeEffect.active();
        if (!this.tutorialEnd){
            this.tutorialFruit.show();
            this.tutorialFruit.move();
        }
        if (!this.tutorialFruit.visible){
            this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
        }
        if (this.cursorEffect) {
            this.cursorScreenEffect.cursorEffect();
        }
        if (this.tutorialFruit.fruitName === 'dragonfruit' || this.tutorialFruit.fruitName === 'bomb'){
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
            this.lives.zeroLives();
            this.tutorialEnd = true;
            image(this.bombGif, this.tutorialFruit.xPos, this.tutorialFruit.yPos, 400, 300);
            setTimeout(()=>{
                this.tutorialEnd = false
                this.lives.resetLife();
            }, 2000)
            if (!this.tutorialFruit.visible) {
                this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
            }
        }
        if (this.tutorialFruit.fruitName === 'bomb'){
            setTimeout(() => {
                if (this.tutorialFruit.slicePat.isSliced() !== 'bomb' && this.tutorialFruit.yPos === height){
                    overlay.textAlign(CENTER, CENTER);
                    overlay.textFont(gameFont);
                    overlay.fill('white');
                    overlay.textSize(100);
                    overlay.text('Tutorial Complete!', width/2,100);
                    this.tutorialEnd = true;
                }
            }, 5000);
        }
    }

    sliceHandle(){
        this.tutorialFruit.fruitImg = gameManager.getSliceImages()[this.fruitIndex];
        this.tutorialFruit.slicingGif = null;
        this.tutorialFruit.makeInert();
    }

    setCursorEffect(effect){
        this.cursorEffect = effect;
    }

    resetTutorial(){
        this.fruitIndex = 0;
        this.lives = new Lives();
        this.lives.loseLife();
        this.cursorScreenEffect.resetCursor();
    }
}