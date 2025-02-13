function gameScreen() {
    background('seagreen');

    // generate random number for fruit appearance
    var x = random(1000);
    if (x % 2 === 0) {
        fruitImgs.push(randomFruit());
    }
    for (var i = fruitList.length - 1; i >= 0; i--) {
        fruit[i].show;
        fruit[i].move;
    }
}