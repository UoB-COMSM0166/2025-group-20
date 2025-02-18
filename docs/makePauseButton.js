let pauseButton;

function makePauseButton() {
    
    textFont(gameFont);
    fill('white');
    textSize(26);
    textAlign(CENTER, CENTER);
    text("PAUSE", windowWidth / 1.0695, windowHeight / 1.3);
    
    if (!pauseButton){
       pauseButton = createButton('II');
       pauseButton.style('border-radius', '8px');
       pauseButton.style('border-color', 'black');
       pauseButton.style('border-style', 'solid');
       pauseButton.style('background-color', 'white');
       pauseButton.style('font-family', 'sans-serif');
       pauseButton.style('font-size', '62px');
       pauseButton.style('font-weight', '900');
       pauseButton.style('line-height', '70px');
       pauseButton.style('text-align', 'center');
       pauseButton.size(75, 75);
       pauseButton.position(windowWidth / 1.1, windowHeight / 1.2);

       pauseButton.mousePressed(() => {
        mode = 3;
       });
   //  pauseButton.show(); 
   }  
}
