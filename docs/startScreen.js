function drawMainMenu() {
    background('black');
    textAlign(CENTER);
    textFont(gameFont);
    fill('seagreen');
    textSize(100);
    text('Smoothie', width / 3, height / 2.5);
    text('Operator', width / 3, height / 1.9);
    instructionButton();
    startGameButton();
  }