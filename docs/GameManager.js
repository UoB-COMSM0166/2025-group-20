class GameManager {
  constructor() {
    this.coop = false;
    this.mode = null;
    this.player2Control = 'aswd';
    this.startGame = false;
    this.lives = new Lives();
    this.score = new GameScore();
    this.recipeBook = new RecipeBook();
    this.sliceEffects = {};
    this.sliceEffects['loseLife'] = new SliceEffect(()=>{
      push();
      noFill();
      stroke("red");
      strokeWeight(20);
      rectMode(CORNER);
      rect(0, 0, width, height, 20);
      pop();
    });
    this.sliceEffects['wrongSlice'] = new SliceEffect(()=>{
      overlay.textAlign(CENTER, CENTER);
      overlay.textFont(gameFont);
      overlay.fill('red');
      overlay.textSize(100);
      overlay.text('Wrong Slice!', width/2,100);
    });
    this.sliceEffects['recipeComplete'] = new SliceEffect(()=>{
      overlay.textAlign(CENTER, CENTER);
      overlay.textFont(gameFont);
      overlay.fill('white');
      overlay.textSize(100);
      overlay.text('Recipe Complete!', width/2,100);
    });
    this.sliceEffects['gainLife'] = new SliceEffect(()=>{
      push();
      noFill();
      stroke("lime");
      strokeWeight(20);
      rectMode(CORNER);
      rect(0, 0, width, height, 20);
      pop();
    });
    this.fruitNames = ['blueberry', 'apple', 'banana', 'cherry', 'lemon', 'grape', 'watermelon', 'dragonfruit', 'bomb'];
    this.slicePatterns = ['easy', 'up', 'down', 'right', 'left', 'lrdown/rlup', 'rldown/lrup', 'easy', 'bomb'];
    this.fruitImages = [];
    this.sliceImages = [];
    this.splatImages = [];
    this.loadFruitImages();
    this.currentRecipe = new RecipeGenerator();
    this.noiseSeedVal = Math.random() * 1000;
    this.spawnRate = 120;
    this.fruitGenerator = new FruitGenerator();
    this.playingFruits = [];
    this.fruitOnScreen = [];
    this.basket = new Basket();
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

  //Makes effects active so they can be deployed when needed
  activateEffects() {
    this.sliceEffects['loseLife'].active();
    this.sliceEffects['wrongSlice'].active();
    this.sliceEffects['recipeComplete'].active();
    this.sliceEffects['gainLife'].active();
  }

  getScore() {
    return this.score;
  }

  //runs all main game logic
  gameState() {  
    background(bg);
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
      this.sliceEffects['recipeComplete'].show();
      this.currentRecipe = new RecipeGenerator();
      this.score.addScore(20);
      if (this.spawnRate-1 !== 0){
        this.spawnRate--;
      }
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
    }

    for (let i = this.splatters.length - 1; i >= 0; i--) {
      this.splatters[i].update();
      this.splatters[i].show();
      if (this.splatters[i].isDone()) {
          this.splatters.splice(i, 1);
      }
  }

    //runs through all the fruits, moving, showing and checking for slices
    for (let i = this.playingFruits.length - 1; i >= 0; i--) {
      this.playingFruits[i].show();
      this.playingFruits[i].move();
      if (this.coop && this.playingFruits[i].slicePat.type === 'inert' && Math.round(this.playingFruits[i].yPos) === windowHeight
      && (Math.round(this.playingFruits[i].xPos) > this.basket.x+110 || Math.round(this.playingFruits[i].xPos) < this.basket.x-110)) {
        this.score.loseScore(10);
      }
      if (this.playingFruits[i].slicePat.isSliced() === 'correct' || this.playingFruits[i].slicePat.isSliced() === 'wrong') {
        if (soundEffect) {
          slicingSound.play();
        }
        if (this.playingFruits[i].getName() !== 'bomb') {
          this.splatters.push(new Splatter(this.playingFruits[i].xPos, this.playingFruits[i].yPos, this.playingFruits[i]));
        }
        if (this.playingFruits[i].getName() === 'dragonfruit'){
            this.lives.gainLife();
            this.sliceEffects['gainLife'].show();
        }
        else if (this.playingFruits[i].getName() !== 'dragonfruit' && this.playingFruits[i].getIndex() !== this.currentRecipe.getRecipe()[0]){
          this.sliceEffects['loseLife'].show();
          this.lives.loseLife();
        }
        else if (this.playingFruits[i].getIndex() === this.currentRecipe.getRecipe()[0]){
          if (this.playingFruits[i].slicePat.isSliced() === 'correct'){
            this.score.addScore(10);
            this.currentRecipe.getRecipe().shift();
          }
          else if (this.playingFruits[i].slicePat.isSliced() === 'wrong'){
            this.sliceEffects['wrongSlice'].show();
          }
        }
        if (this.playingFruits[i].getName() !== 'bomb') {
          this.playingFruits[i].fruitImg = this.sliceImages[this.playingFruits[i].getIndex()];
        }
        this.playingFruits[i].makeInert();
      }
      else if (this.playingFruits[i].slicePat.isSliced() === 'bomb') {
        this.playingFruits[i].makeInert();
        this.lives.zeroLives();
      }

    }  
  }

  hideRecipeBook() {
    this.recipeBook.hideBook();
  }

  //loads in relevant images to arrays
  loadFruitImages() {
    let i;
    for (i = 0; i < this.fruitNames.length - 1; i++) {
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

  getSliceImages(){
    return this.sliceImages;
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

  getFruitOnScreen() {
    return this.fruitOnScreen;
  }

  //Resets all relevant variables when game is lost or restarted
  resetGame() {
    this.playingFruits = [];
    this.fruitOnScreen = [];
    this.splatters = [];
    this.currentRecipe = new RecipeGenerator();
    this.score.resetScore();
    this.lives.resetLife();
    this.basket.resetBasket();
    this.spawnRate = 120;
  }
}