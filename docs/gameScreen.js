function gameScreen() {
    background('seagreen');

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
}