class TutorialManager extends GameManager {
    constructor() {
        super();
        this.fruitIndex = 0;
        this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
        this.sliceEffects['correctSlice'] = new SliceEffect(()=>{
            textAlign(CENTER, CENTER);
            textFont(gameFont);
            stroke('black');
            strokeWeight(4);
            fill('seagreen');
            textSize(120);
            text('Correct Slice!', width/2, 100 + 5);
        });
        this.sliceEffects['tutorialComplete'] = new SliceEffect(()=>{
            overlay.textAlign(CENTER, CENTER);
            overlay.textFont(gameFont);
            overlay.stroke(0); 
            overlay.strokeWeight(4) 
            overlay.fill('white');
            overlay.textSize(100);
            overlay.text('Tutorial Complete!', width/2,100);
        })
        this.sliceEffects['bombSlice'] = new SliceEffect(()=>{
            overlay.textAlign(CENTER, CENTER);
            overlay.textFont(gameFont);
            overlay.stroke(0); 
            overlay.strokeWeight(4) 
            overlay.fill('red');
            overlay.textSize(120);
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
        // Display scratch effect in background
        scratchCursorEffect();
        if (!this.tutorialEnd){
            this.tutorialFruit.show();
            this.tutorialFruit.move();
        }
        if (!this.tutorialFruit.getVisible()){
            this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
            if (this.tutorialFruit.getName() === 'blueberry' || this.tutorialFruit.getName() === 'dragonfruit') {
                this.narrationBox.textContent = 'Slice the ' + this.tutorialFruit.getName() + ' by clicking it';
            }
            else if (this.tutorialFruit.getName() === 'bomb') {
                this.narrationBox.textContent = 'Do not slice the bomb';
            }
            else { 
                this.narrationBox.textContent = 'Slice the ' + this.tutorialFruit.getName() + " " + this.slicePatterns[this.fruitIndex];
            }
            this.tutorialFruit = this.fruitGenerator.tutorialGen(this.fruitIndex);
            this.narrationBox.style.fontFamily = 'BlockBlueprint';
            this.narrationBox.style.fontSize = '35px';
            this.narrationBox.style.color = 'white'; 
            this.narrationBox.style.backgroundColor = '#C58B52'; 
            this.narrationBox.style.borderRadius = '12px';    
            this.narrationBox.style.padding = '10px';
            this.narrationBox.style.position = 'absolute';  
            this.narrationBox.style.top = '650px'; 
            this.narrationBox.style.left = '15px';
            this.narrationBox.style.textShadow = `
                -1px -1px 0 #000,
                 1px -1px 0 #000,
                -1px  1px 0 #000,
                 1px  1px 0 #000
            `;
            buttonWrapper.append(this.narrationBox);
        }
        if (this.tutorialFruit.getName() === 'dragonfruit' || this.tutorialFruit.getName() === 'bomb'){
            this.lives.drawLife();
        }
        if (this.tutorialFruit.getSlice().isSliced() === 'correct') {
            this.sliceEffects['correctSlice'].show();
            if (this.tutorialFruit.getName() === 'dragonfruit'){
                this.lives.gainLife();
                this.sliceEffects['gainLife'].show();
            }
            this.sliceHandle();
            this.fruitIndex++;
        }
        else if (this.tutorialFruit.getSlice().isSliced() === 'wrong'){
            this.sliceEffects['wrongSlice'].show();
            this.sliceHandle();
        }
        else if (this.tutorialFruit.getSlice().isSliced() === 'bomb'){
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
                if (this.tutorialFruit.getSlice().isSliced() !== 'bomb' && this.tutorialFruit.getY() === height && !this.tutorialEnd){
                    this.sliceEffects['tutorialComplete'].show();
                    this.tutorialEnd = true;
                    setTimeout(()=>{
                        tutorial = false;
                        startScreen();
                    }, 3000);
                }
            }, 4000);
        }
    }

    sliceHandle(){
        if (soundEffect){
            slicingSound.play();
        }
        this.tutorialFruit.setImage(gameManager.getSliceImages()[this.fruitIndex]);
        this.tutorialFruit.setGif();
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