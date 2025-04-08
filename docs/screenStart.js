function drawStartScreen() {
    background('black');
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('seagreen');
    textSize(150);
    text('Smoothie', width / 3, height / 3.7);
    text('Operator', width / 3, height / 2.1);
    startGameButton();
    drawTutorialButton();
    modeButtons();
    highestScore.display();
  }


  
