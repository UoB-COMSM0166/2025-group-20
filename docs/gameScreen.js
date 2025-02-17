function gameScreen() {

    background(bg);
    // generate random number for fruit appearance
    if(frameCount % 5 === 0){
        if(noise(frameCount) > 0.69){
          fruit.push(randomGen());
        }
    }
    for (var i = fruit.length - 1; i >= 0; i--) {
        fruit[i].show();
        fruit[i].move();
        
        if (fruit[i].slicePat.isSliced() == 'correct'){
            //
        }
        else if (fruit[i].slicePat.isSliced() == 'wrong'){
            gameOver().display;
            //lose life
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            gameOver().display;
            //game over
        }
    }

    if (!smoothieDisplay && fruitImgs.every(img => img instanceof p5.Image)) {
        smoothieDisplay = new SmoothieDisplay(smoothieRecipe, fruitImgs);
    }
    if (smoothieDisplay) {
        smoothieDisplay.display();
    }
    if (lifeIcons){
        lifeIcons.display();
    }

    cursorEffect();
}