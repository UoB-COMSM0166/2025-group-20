class GameManager {
  constructor() {
    this.coop = false;
    this.mode = null;
    this.player2Control = 'aswd';
    this.soundEffect = false;
    this.cursorEffect = false;
    this.startGame = false;
    this.lives = new Lives();
    this.score = new GameScore();
    this.recipeBook = new RecipeBook();
    this.cursorScreenEffects = new CursorEffect();
    this.loseLifeEffect = new SliceEffect(()=>{
      push();
      noFill();
      stroke("red");
      strokeWeight(20);
      rectMode(CORNER);
      rect(0, 0, width, height, 20);
      pop();
    });
    this.wrongSliceText = new SliceEffect(()=>{
      overlay.textAlign(CENTER, CENTER);
      overlay.textFont(gameFont);
      overlay.fill('red');
      overlay.textSize(100);
      overlay.text('Wrong Slice!', width/2,100);
    });
    this.recipeCompleteEffect = new SliceEffect(()=>{
      overlay.textAlign(CENTER, CENTER);
      overlay.textFont(gameFont);
      overlay.fill('white');
      overlay.textSize(100);
      overlay.text('Recipe Complete!', width/2,100);
    });
    this.gainLifeEffect = new SliceEffect(()=>{
      push();
      noFill();
      stroke("lime");
      strokeWeight(20);
      rectMode(CORNER);
      rect(0, 0, width, height, 20);
      pop();
    });
    this.fruitNames = ['blueberry', 'apple', 'banana', 'cherry', 'lemon', 'grape', 'watermelon', 'bomb', 'dragonfruit'];
    this.slicePatterns = ['click', 'up', 'down', 'right', 'left', 'lrdown/rlup', 'rldown/lrup', 'bomb', 'easy'];
    this.fruitImages = [];
    this.sliceImages = [];
    this.splatImages = [];
    this.loadFruitImages();
    this.currentRecipe = new RecipeGeneration();
    this.noiseSeedVal = Math.random() * 1000;
    this.spawnRate = 100;
    this.fruitGenerator = new FruitGenerator();
    this.playingFruits = [];
    this.fruitOnScreen = [];
    this.basket = new Basket();
    this.inertPat = new SlicePattern('inert', 0);
    this.slicingSound = loadSound('Design/Audio/soundSlicing.wav');
    this.gameLost = false;
    this.splatters = [];
  }

  setCoop(coop) {
    this.coop = coop;
  }

  setMode(mode) {
    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }

  set2Control(control) {
    if (control !== 'arrow' && control !== 'aswd') {
      return;
    }
    this.player2Control = control;
  }

  get2Control() {
    return this.player2Control;
  }

  setSoundEffect(effect) {
    this.soundEffect = effect;
  }

  getSoundEffect() {
    return this.soundEffect;
  }

  setCursorEffect(effect) {
    this.cursorEffect = effect;
  }

  getCursorEffect() {
    return this.cursorEffect;
  }

  setStartGame(start) {
    this.startGame = start;
  }

  getStartGame() {
    return this.startGame;
  }

  getBasket() {
    return this.basket;
  }

  setGameLost(gameLost) {
    this.gameLost = gameLost;
  }

  getLostGame() {
    return this.gameLost;
  }

  activateEffects() {
    this.loseLifeEffect.active();
    this.wrongSliceText.active();
    this.recipeCompleteEffect.active();
    this.gainLifeEffect.active();
  }

  getScore() {
    return this.score;
  }
 
  gameState() {  
    background(bg);
    // Enables cursor effect
    if (this.cursorEffect) {
      this.cursorScreenEffects.cursorEffect();
    }
    // Draws recipe book if mode === hard
    if (this.mode === 'hard') {
      this.recipeBook.displayBook();
    }

    // Draws pause button
    pauseButton.style.display = 'block';

    // Draws core elements on screen
    this.lives.drawLife();
    this.score.drawHighScore();
    this.score.drawCurrentScore();
    this.currentRecipe.display();
    if (this.coop) {
      this.basket.show();
    }

    // Update recipe when finished
    if (this.currentRecipe.getRecipe().length === 0) {
      this.recipeCompleteEffect.show();
      this.currentRecipe = new RecipeGeneration();
      this.score.addScore(20);
    }

    // Display random fruit on screen
    if (frameCount % this.spawnRate === 0) {
      let x = this.fruitGenerator.randomFruitGen(1);
      this.playingFruits.push(x);
      this.fruitOnScreen.push(x.getIndex());
    }

    if(!this.fruitOnScreen.includes(this.currentRecipe.getRecipe()[0])){
      let x = this.fruitGenerator.randomFruitGen(0);
      this.playingFruits.push(x);
      this.fruitOnScreen.push(x.getIndex());
    }

    // generate dragonfruit at a very low rate
    let n = noise(frameCount * 0.01 + this.noiseSeedVal); //0.01
      if (n > 0.999) { //0.999
        let x = this.fruitGenerator.randomFruitGen(3);
        this.playingFruits.push(x);
        this.fruitOnScreen.push(x.getIndex());
    }

    if (this.lives.getLife() === 0) {
      this.score.updateHighScore();
      this.gameLost = true;
      this.startGame = false;
      //this.score.resetScore();
    }

    for (let i = this.splatters.length - 1; i >= 0; i--) {
      this.splatters[i].update();
      this.splatters[i].show();
      if (this.splatters[i].isDone()) {
          this.splatters.splice(i, 1);
      }
  }

    for (let i = this.playingFruits.length - 1; i >= 0; i--) {
      this.playingFruits[i].show();
      this.playingFruits[i].move();
      if (this.coop && this.playingFruits[i].slicePat.type === 'inert' && Math.round(this.playingFruits[i].yPos) === windowHeight
      && (Math.round(this.playingFruits[i].xPos) > this.basket.x+110 || Math.round(this.playingFruits[i].xPos) < this.basket.x-110)) {
        this.score.loseScore(10);
      }
      if (this.playingFruits[i].slicePat.isSliced() === 'correct' || this.playingFruits[i].slicePat.isSliced() === 'wrong') {
        if (this.soundEffect) {
          this.slicingSound.play();
        }
        if (this.playingFruits[i].getName() !== 'bomb') {
          this.splatters.push(new Splatter(this.playingFruits[i].xPos, this.playingFruits[i].yPos, this.playingFruits[i]));
        }
        if (this.playingFruits[i].getName() === 'dragonfruit'){
            this.lives.gainLife();
            this.gainLifeEffect.show();
        }
        else if (this.playingFruits[i].getName() !== 'dragonfruit' && this.playingFruits[i].getIndex() !== this.currentRecipe.getRecipe()[0]){
          this.loseLifeEffect.show();
          this.lives.loseLife();
        }
        else if (this.playingFruits[i].getIndex() === this.currentRecipe.getRecipe()[0]){
          if (this.playingFruits[i].slicePat.isSliced() === 'correct'){
            this.score.addScore(10);
            this.currentRecipe.getRecipe().shift();
          }
          else if (this.playingFruits[i].slicePat.isSliced() === 'wrong'){
            this.wrongSliceText.show();
          }
        }
        if (this.playingFruits[i].getName() !== 'bomb') {
          this.playingFruits[i].fruitImg = this.sliceImages[this.playingFruits[i].getIndex()];
        }
        //splatters.push(new splat(fruit[i].xPos, fruit[i].yPos, fruit[i].fruitName));
        this.playingFruits[i].slicePat = this.inertPat;
      }
      else if (this.playingFruits[i].slicePat.isSliced() === 'bomb') {
        this.playingFruits[i].slicePat = this.inertPat;
        this.lives.zeroLives();
      }

    }  
  }

  hideRecipeBook() {
    this.recipeBook.hideBook();
  }

  loadFruitImages() {
    let i = 0;
    for (i = 0; i < this.fruitNames.length - 2; i++) {
      this.fruitImages[i] = loadImage('Design/Images/' + this.fruitNames[i] + '.png');
      this.sliceImages[i] = loadImage('Design/Images/' + this.fruitNames[i]  + '-slice.png');
      this.splatImages[i] = loadImage('Design/Images/' + this.fruitNames[i] + '-splatter.png');
    }
    this.fruitImages[i] = loadImage('Design/Images/' + this.fruitNames[i] + '.png');
  }

  getFruitNames() {
    return this.fruitNames;
  }

  getFruitImages() {
    return this.fruitImages;
  }

  getSplatImages() {
    return this.splatImages;
  }

  getSlicePatterns() {
    return this.slicePatterns;
  }

  getCurrentRecipe() {
    return this.currentRecipe;
  }

  getPlayingFruits() {
    return this.playingFruits;
  }

  getFruitOnScreen() {
    return this.fruitOnScreen;
  }

  resetGame() {
    this.playingFruits = [];
    this.fruitOnScreen = [];
    this.splatters = [];
    this.cursorScreenEffects.resetCursor();
    this.currentRecipe = new RecipeGeneration();
    this.score.resetScore();
    this.lives.resetLife();
    this.basket.resetBasket();
  }
}