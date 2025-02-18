function gameScreen() {
    
    background(bg);
    //cursorEffect();
    // generate random number for fruit appearance
    if (currentRecipe.ingredients.length == 0){
        currentRecipe = new SmoothieRecipe();
    }
    currentRecipe.display();
    lifeIcons.display();
    cursorEffect();

    if(frameCount % 5 === 0){
        if(noise(frameCount) > 0.69){
          fruit.push(randomGen());
        }
    }
    for (var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        
        if (fruit[i].slicePat.isSliced() == 'correct' || fruit[i].slicePat.isSliced() == 'wrong'){
            if (fruit[i] != currentRecipe.ingredients[0]){
                // lose life
                --lifeIcons.lives;
            }
            else {
                if (fruit[i].slicePat.isSliced() == 'correct'){
                    currentRecipe.ingredients.shift();
                    pointsystem.correctCut();
                    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
                    fruit[i].slicePat = null;
                }
                else if (fruit[i].slicePat.isSliced() == 'wrong'){
                    //wrong slice effect
                    wrongSliceFrame.redBorder();
                    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
                    fruit[i].slicePat = null;
                }
            }
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            drawGameOver();
        }
    }

}