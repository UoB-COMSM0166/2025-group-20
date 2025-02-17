function gameScreen() {
    constructor 
    
    background(bg);
    //cursorEffect();
    // generate random number for fruit appearance
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
                lifeIcons.loseLife();
                // lose life
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
                    lifeIcons.loseLife();
                    fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
                    fruit[i].slicePat = null;
                }
            }
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            //game over
            //switch to exploded screen
        }
    }

    if (!smoothieDisplay && fruitImgs.every(img => img instanceof p5.Image)) {
        smoothieDisplay = new SmoothieDisplay(smoothieRecipe, fruitImgs);
    }
    if (smoothieDisplay) {
        smoothieDisplay.display();
    }
    if (lifeIcons){
        lifeIcons.show();
    }

    cursorEffect();
}
