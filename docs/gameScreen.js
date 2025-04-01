function gameScreen() {
    
    background(bg);
    if (currentRecipe.ingredients.length == 0){
        //recipeComplete();
        currentRecipe = new SmoothieRecipe();
        fruitOnScreen = [];
    }
    currentRecipe.display();
    lifeIcons.show();
    highestScore.updateHighestScore(gameScore.pointsPerGame);
    gameScore.display();
    highestScore.display();

    if(frameCount % 60 == 0) {
        var x = randomFruitGen(1, currentRecipe);
        fruit.push(x);
        fruitOnScreen.push(x.index);
    }

    if(!fruitOnScreen.includes(currentRecipe.ingredients[0])){
        var x = randomFruitGen(0, currentRecipe);
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

    for (var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        if (fruit[i].slicePat.isSliced() == 'correct' || fruit[i].slicePat.isSliced() == 'wrong'){
            if(fruit[i].fruitName === 'dragonfruit'){
                console.log('Dragonfruit sliced!');
                lifeIcons.gainLife(); 
                //I want to make a twinkle sound effect for when this is sliced.
            }
            else if (fruit[i].fruitName !== 'dragonfruit' && fruit[i].index != currentRecipe.ingredients[0]){
                lifeIcons.loseLife();
                loseLifeEffect();
                if (lifeIcons.lives == 0){
                    mode = 4;
                }
            }
            else if (fruit[i].index == currentRecipe.ingredients[0]){
                if (fruit[i].slicePat.isSliced() == 'correct'){
                    currentRecipe.ingredients.shift();
                    gameScore.correctCut();
                }
                else if (fruit[i].slicePat.isSliced() == 'wrong'){
                    wrongSliceEffect();
                }
            }
            playSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/sliceEffect.wav');
            fruit[i].fruitImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruit[i].fruitName + '-slice.png');
            splatters.push(new splat(fruit[i].xPos, fruit[i].yPos, fruit[i].fruitName));
        //load splat image and update to slice fruit even if there's not corresponding splat (at the moment there is not a corresponding splat for banana, lemon, bomb)
            fruit[i].slicePat = new SlicePattern('inert', 0);
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            playSound('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/bombSound.wav');
            fruit[i].slicePat = new SlicePattern('inert', 0);
            mode = 4;
        }
    }
    cursorEffect();
}

function freshGameScreen() {
    while (fruit.length != 0){
        fruit.shift();
    }
    fruitOnScreen = [];
    lifeIcons = new LifeIcons();
    currentRecipe  = new SmoothieRecipe();
    gameScore = new PointSystem();
    mode = 2;
}
