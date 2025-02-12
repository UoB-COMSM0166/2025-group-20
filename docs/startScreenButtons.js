function instructionButton() {
    let rectWidth = 105;
    let rectHeight = 25;
    fill('lightgoldenrodyellow');
    noStroke();
    rect(width / 3 - rectWidth, height / 1.6, 210, 50, 20);
  
    fill('black');
    textSize(22);
    textFont(gameFont);
    text("INSTRUCTIONS", width / 3, height / 1.49);
  
    if (mouseIsPressed) {
      let buttonX1 = width / 3 - rectWidth;
      let buttonX2 = width / 3 + rectWidth;
      let buttonY1 = height / 1.6 - rectHeight;
      let buttonY2 = height / 1.6 + rectHeight;

      if (mouseX > buttonX1 && mouseX < buttonX2 && mouseY > buttonY1 && mouseY < buttonY2) {
        mode = 1; 
      }
    }
  }
  
  let angle = 30;
  let angleSpeed = 0.75;
  let angleDirection = 1;
  
  function startGameButton() {
    image(appleImg, width / 1.6, height / 5.4, 250);
  
    push();
    translate(width / 1.3, height / 4.4);
    rotate(radians(angle));
    textFont(gameFont);
    fill('white');
    textSize(25);
    text('SLICE TO START', 0, 0);
    pop();
  
    angle += angleSpeed * angleDirection;
    if (angle >= 40 || angle <= 20) {
      angleDirection *= -1;
    }
  }

  function keyPressed() {
    if (keyCode == ENTER){
        mode = 2;
    }
  }