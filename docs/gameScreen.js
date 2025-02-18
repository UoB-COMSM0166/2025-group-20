function gameScreen() {
    //constructor 
    console.log("Game Screen is loading");

    background(bg);
    console.log("Background is loaded");
    cursorEffect();
    console.log("Cursor effect has loaded");
    redBorder();
    console.log("Border has loaded");
    //cursorEffect();
    // generate random number for fruit appearance
    console.log(`FrameCount: ${frameCount}`);
    console.log(`FrameCount: ${frameCount}, Condition Met: ${frameCount % 5 === 0}`);
    if(frameCount % 5 === 0){
        console.log("Entered random fruit loop");
        let noiseValue = noise(frameCount);
        console.log("Noise value at frame", frameCount, ":", noiseValue);
        if(noiseValue > 0.69){
          fruit.push(randomGen());
          //console.log("Random value for fruit appearance:", randomValue);
          console.log("New Fruit added, total fruits:", fruit.length);
        }
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
                    fruitImgs = fruitImages[fruitList[i]];
                    //fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
                    fruit[i].slicePat = null;
                }
                else if (fruit[i].slicePat.isSliced() == 'wrong'){
                    //wrong slice effect
                    wrongSliceFrame.redBorder();
                    lifeIcons.loseLife();
                    fruitImgs = fruitImages[fruitList[i]];
                    //fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '-slice.png');
                    fruit[i].slicePat = null;
                }
            }
        }
        else if (fruit[i].slicePat.isSliced() == 'bomb'){
            //game over
            //switch to exploded screen
        }
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
