class GameScreen {
    constructor() {
        this.loseLifeEffect = new LoseLife();
        this.gainLifeEffect = new GainLife();
        this.recipeCompleteText = new RecipeComplete();
        this.wrongSliceText = new WrongSlice();
        this.cursorEffects = new GameCursorEffects();
    }

    draw() {
        this.recipeCompleteText.active();
        this.loseLifeEffect.active();
        this.gainLifeEffect.active();
        this.wrongSliceText.active();
    }
    playingScreen() {
    background(bg);
    this.cursorEffects.scratchCursorEffect ()
    if (currentRecipe.ingredients.length === 0){
        this.recipeCompleteText.show();
        audioController.play('recipe');
        if(gameManager.getDifficulty() == 'easy'){
            gameManager.getEasyGameScore().recipeComplete();
        } else {
            gameManager.getHardGameScore().recipeComplete();
        }
        
        currentRecipe = new SmoothieRecipe();
        fruitOnScreen = [];
    } 
    currentRecipe.display();
    lifeIcons.show();

    if (gameManager.getDifficulty() === 'easy') {
        gameManager.getEasyGameScore().display();
        gameManager.getEasyHighestScore().updateHighestScore(gameManager.getEasyGameScore().pointsPerGame);
        gameManager.getEasyHighestScore().display();
      } else {
        gameManager.getHardGameScore().display();
        gameManager.getHardHighestScore().updateHighestScore(gameManager.getHardGameScore().pointsPerGame);
        gameManager.getHardHighestScore().display();
      }

    if(frameCount % 60 === 0) {
        let x = fruitGenerator.randomFruitGen(1, currentRecipe);
        fruit.push(x);
        fruitOnScreen.push(x.index);
    }

    if(!fruitOnScreen.includes(currentRecipe.ingredients[0])){
        let x = fruitGenerator.randomFruitGen(0, currentRecipe);
        fruit.push(x);
        fruitOnScreen.push(x.index);
    }
        //drawing and fading out splatter BEFORE the fruit is sliced, so it appears on the background
    for (let i = splatters.length - 1; i >= 0; i--) {
        splatters[i].update();
        splatters[i].show();
        if (splatters[i].isDone()) {
            splatters.splice(i, 1);
        }
    }

    for (let i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        if (gameManager.twoPlayer && fruit[i].slicePat.type === 'inert' && Math.round(fruit[i].yPos) === windowHeight
            && (Math.round(fruit[i].xPos) > gameManager.basket.x+110 || Math.round(fruit[i].xPos) < gameManager.basket.x-110)){
            if(gameManager.getDifficulty() === 'easy'){
                gameManager.getEasyGameScore().uncaughtFruit();
            } else{
                gameManager.getHardGameScore().uncaughtFruit();
            }
        }
        if (fruit[i].slicePat.isSliced() === 'correct' || fruit[i].slicePat.isSliced() === 'wrong'){
            if(fruit[i].fruitName === 'dragonfruit'){
                console.log('Dragonfruit sliced!');
                lifeIcons.gainLife();
                this.gainLifeEffect.show();
                audioController.play('lifeGained');
                //I want to make a twinkle sound effect for when this is sliced.
            }
            else if (fruit[i].fruitName !== 'dragonfruit' && fruit[i].index !== currentRecipe.ingredients[0]){
                lifeIcons.loseLife();
                this.loseLifeEffect.show();
                audioController.play('lifeLost');
                if (lifeIcons.lives === 0){
                    audioController.play('gameover');
                    gameManager.switchState("gameover");
                }
            }
            else if (fruit[i].index === currentRecipe.ingredients[0]){
                if (fruit[i].slicePat.isSliced() === 'correct'){
                    currentRecipe.ingredients.shift();
                    if(gameManager.getDifficulty() === 'easy'){
                        gameManager.getEasyGameScore().correctCut();
                    } else{
                        gameManager.getHardGameScore().correctCut();
                    }
                    //gameScore.correctCut();
                }
                else if (fruit[i].slicePat.isSliced() === 'wrong'){
                    this.wrongSliceText.show();
                }
            }
            audioController.play("slice");
            fruit[i].fruitImg = loadImage('Images/' + fruit[i].fruitName + '-slice.png');
            splatters.push(new splat(fruit[i].xPos, fruit[i].yPos, fruit[i].fruitName));
        //load splat image and update to slice fruit even if there's not corresponding splat (at the moment there is not a corresponding splat for banana, lemon, bomb)
            fruit[i].slicePat = new SlicePattern('inert', 0);
        }
        else if (fruit[i].slicePat.isSliced() === 'bomb'){
            audioController.play("bomb");
            fruit[i].slicePat = new SlicePattern('inert', 0);
            audioController.play('gameover');
            gameManager.switchState("gameover");
        }
    }
    this.cursorEffects.cursorEffect();
}

freshGameScreen() {
    while (fruit.length !== 0){
        fruit.shift();
    }
    fruitOnScreen = [];
    lifeIcons = new LifeIcons();
    currentRecipe  = new SmoothieRecipe();

    if (gameManager.getDifficulty() === 'easy') {
        gameManager.getEasyHighestScore().updateHighestScore(gameManager.getEasyGameScore().pointsPerGame);
        gameManager.getEasyHighestScore().display();
        gameManager.getEasyGameScore().resetPoints();
        gameManager.getEasyGameScore().display();
    } else {
        gameManager.getHardHighestScore().updateHighestScore(gameManager.getHardGameScore().pointsPerGame);
        gameManager.getHardHighestScore().display();
        gameManager.getHardGameScore().resetPoints();
        gameManager.getHardGameScore().display();
    }
    gameManager.switchState("game");
}
}
