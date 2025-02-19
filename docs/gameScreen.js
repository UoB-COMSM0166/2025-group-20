function gameScreen() {
    
    background(bg);
    if (currentRecipe.ingredients.length == 0){
        currentRecipe = new SmoothieRecipe();
    }
    currentRecipe.display();
    lifeIcons.show();
    highestScore.updateHighestScore(gameScore.pointsPerGame);
    gameScore.display();
    highestScore.display();

    if(frameCount % 5 === 0){
        if(noise(frameCount) > 0.69){
          fruit.push(randomGen());
        }
    }
    for (var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        if (fruit[i].slicePat.isSliced() == 'correct' || fruit[i].slicePat.isSliced() == 'wrong'){
            if (fruit[i].fruitName != currentRecipe.ingredients[0]){
                lifeIcons.loseLife();
                wrongSliceEffect()
                if (lifeIcons.lives == 0){
                    mode = 4;
                }
            }
            else if (fruit[i].fruitName == currentRecipe.ingredients[0]){
                if (fruit[i].slicePat.isSliced() == 'correct'){
                    currentRecipe.ingredients.shift();
                    gameScore.correctCut();
                }
                else if (fruit[i].slicePat.isSliced() == 'wrong'){
                    wrongSliceEffect();
                }
            }
            fruit[i].fruitImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruit[i].fruitName + '-slice.png');
            fruit[i].slicePat = new SlicePattern('inert', 0);
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            lifeIcons.lives = 0;
            //mode = 4;
        }
    }
    cursorEffect();
}

function freshGameScreen() {
    lifeIcons = new LifeIcons();
    currentRecipe  = new SmoothieRecipe();
    gameScore = new PointSystem();
    mode = 2;
}
