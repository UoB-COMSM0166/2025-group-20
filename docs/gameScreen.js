let bg 

function preload(){
    bg = loadImage('https://github.com/UoB-COMSM0166/2025-group-20/tree/main/docs/Background%20Images')
}
function gameScreen() {
    
    background('bg');
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

    cursorEffect();
}