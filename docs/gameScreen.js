function gameScreen() {
    
    background(bg);
    //cursorEffect();
    // generate random number for fruit appearance

    if (currentRecipe.ingredients.length == 0){
        currentRecipe = new SmoothieRecipe();
    }
    currentRecipe.display();
    lifeIcons.show();
    CurrentPointsDisplay.display();
    HighestScore.display();

    if(frameCount % 5 === 0){
        if(noise(frameCount) > 0.69){
          fruit.push(randomGen());
        }
    }
    for (var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        print(currentRecipe.ingredients);
        if (fruit[i].slicePat.isSliced() == 'correct' || fruit[i].slicePat.isSliced() == 'wrong'){
            if (fruit[i] != currentRecipe.ingredients[0]){
                lifeIcons.loseLife();
            }
            else {
                if (fruit[i].slicePat.isSliced() == 'correct'){
                    currentRecipe.ingredients.shift();
                    gameScore.correctCut();
                    fruit[i].fruitImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruit[i].fruitName + '-slice.png');
                    fruit[i].slicePat = new SlicePattern('inert', 0);
                }
                else if (fruit[i].slicePat.isSliced() == 'wrong'){
                    //wrong slice effect
                    //redBorder();
                    fruit[i].fruitImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruit[i].fruitName + '-slice.png');
                    fruit[i].slicePat = new SlicePattern('inert', 0);
                }
            }
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            mode = 4;
        }
    }
    cursorEffect();
}
