function gameScreen() {
    
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
    }

    if (!smoothieDisplay && fruitImgs.every(img => img instanceof p5.Image)) {
        smoothieDisplay = new SmoothieDisplay(smoothieRecipe, fruitImgs);
    }
    if (smoothieDisplay) {
        smoothieDisplay.display();
    }

    cursorEffect();
}