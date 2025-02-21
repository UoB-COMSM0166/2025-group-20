function gameScreen() {
    
    background(bg);
    if (currentRecipe.ingredients.length == 0){
        recipeComplete();
        currentRecipe = new SmoothieRecipe();
    }
    currentRecipe.display();
    lifeIcons.show();
    highestScore.updateHighestScore(gameScore.pointsPerGame);
    gameScore.display();
    highestScore.display();

    if(frameCount % 60 == 0){
        fruit.push(randomFruitGen(1, currentRecipe));
        /*if(noise(frameCount) > 0.69){
          fruit.push(randomGen());
        }*/
    }
    
    if(frameCount % 60 === 0) {
        if(noise(frameCount) > 0.69){
            fruit.push(randomFruitGen(0, currentRecipe));
        }
    }

    for (var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        if (fruit[i].slicePat.isSliced() == 'correct' || fruit[i].slicePat.isSliced() == 'wrong'){
            if (fruit[i].index != currentRecipe.ingredients[0]){
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
    lifeIcons = new LifeIcons();
    currentRecipe  = new SmoothieRecipe();
    gameScore = new PointSystem();
    mode = 2;
}
