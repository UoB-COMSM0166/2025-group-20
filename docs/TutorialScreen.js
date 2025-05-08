class TutorialManager extends GameManager {
    constructor() {
        super();
        this.fruitIndex = 0;
        this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
        this.sliceEffects['correctSlice'] = new SliceEffect(()=>{
            textAlign(CENTER, CENTER);
            textFont(gameFont);
            fill('lime');
            textSize(100);
            text('Correct Slice!', width/2, 100);
        });
        this.sliceEffects['tutorialComplete'] = new SliceEffect(()=>{
            overlay.textAlign(CENTER, CENTER);
            overlay.textFont(gameFont);
            overlay.fill('white');
            overlay.textSize(100);
            overlay.text('Tutorial Complete!', width/2,100);
        })
        this.sliceEffects['bombSlice'] = new SliceEffect(()=>{
            overlay.textAlign(CENTER, CENTER);
            overlay.textFont(gameFont);
            overlay.fill('red');
            overlay.textSize(100);
            overlay.text('Bomb Sliced!', width/2,100);
        })
        this.tutorialEnd = false;
        this.lives.setLives(2);
        this.narrationBox = document.createElement('p');
    }

    drawTutorialScreen() {
        background(bg);
        this.sliceEffects['correctSlice'].active();
        this.sliceEffects['tutorialComplete'].active();
        this.sliceEffects['bombSlice'].active();
        this.activateEffects();
        if (!this.tutorialEnd){
            this.tutorialFruit.show();
            this.tutorialFruit.move();
        }
        if (!this.tutorialFruit.visible){
            this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
            this.narrationBox.textContent = 'Slice the ' + this.tutorialFruit.getName() + " " + this.slicePatterns[this.fruitIndex];
            buttonWrapper.append(this.narrationBox);
        }
        if (this.tutorialFruit.getName() === 'dragonfruit' || this.tutorialFruit.getName() === 'bomb'){
            this.lives.drawLife();
        }
        if (this.tutorialFruit.slicePat.isSliced() === 'correct') {
            this.sliceEffects['correctSlice'].show();
            if (this.tutorialFruit.getName() === 'dragonfruit'){
                this.lives.gainLife();
                this.sliceEffects['gainLife'].show();
            }
            this.sliceHandle();
            this.fruitIndex++;
        }
        else if (this.tutorialFruit.slicePat.isSliced() === 'wrong'){
            this.sliceEffects['wrongSlice'].show();
            this.sliceHandle();
        }
        else if (this.tutorialFruit.slicePat.isSliced() === 'bomb'){
            this.tutorialFruit.makeInert();
            this.lives.zeroLives();
            this.tutorialEnd = true;
            this.sliceEffects['bombSlice'].show();
            setTimeout(()=>{
                this.tutorialEnd = false
                this.lives.resetLife();
            }, 2000)
        }
        if (this.tutorialFruit.getName() === 'bomb'){
            setTimeout(() => {
                if (this.tutorialFruit.slicePat.isSliced() !== 'bomb' && this.tutorialFruit.yPos === height){
                    this.sliceEffects['tutorialComplete'].show();
                    this.tutorialEnd = true;
                }
            }, 4000);
        }
    }

    sliceHandle(){
        slicingSound.play();
        this.tutorialFruit.fruitImg = gameManager.getSliceImages()[this.fruitIndex];
        this.tutorialFruit.slicingGif = null;
        this.tutorialFruit.makeInert();
    }

    resetTutorial(){
        this.fruitIndex = 0;
        this.lives = new Lives();
        this.lives.setLives(2);
        this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
        this.tutorialEnd = false;
    }
}