let pauseButton;

function makePauseButton() {
    
    textFont(gameFont);
    fill('white');
    textSize(22);
    textAlign(CENTER, CENTER);
    text("PAUSE", windowWidth / 1.0512, windowHeight / 1.18);
    
    if (!pauseButton){
       pauseButton = createButton('II');
       pauseButton.style('border-radius', '8px');
       pauseButton.style('border-color', 'black');
       pauseButton.style('border-style', 'solid');
       pauseButton.style('border-width', '4.5px');
       pauseButton.style('background-color', '#FCF3CF');
       pauseButton.style('font-family', 'sans-serif');
       pauseButton.style('font-size', '65px');
       pauseButton.style('font-weight', '900');
       pauseButton.style('line-height', '64px');
       pauseButton.style('text-align', 'center');
       pauseButton.style('color', 'black');
       pauseButton.size(75, 75);
       pauseButton.position(windowWidth / 1.08, windowHeight / 1.15);

       pauseButton.mousePressed(() => {
        mode = 3;
       });
   //  pauseButton.show(); 
   }  
}
