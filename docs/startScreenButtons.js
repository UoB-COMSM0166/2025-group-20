let instructionsButton;
let appleIsSliced = false;
let appleFallSpeed = 0; 
let appleY = null;

function resetStartScreenApple() {
  appleIsSliced = false;
  appleFallSpeed = 0;
}

function instructionButton() {
    if (!instructionsButton){

      instructionsButton = createButton('INSTRUCTIONS');
      instructionsButton.style('font-size', '30');
      instructionsButton.style('font-family', 'gameFont');
      instructionsButton.style('text-align', 'center');
      instructionsButton.style('background-color', '#FCF3CF');
      instructionsButton.style('border', 'none');
      instructionsButton.style('border-radius', '8px');
      instructionsButton.style('color', 'black');
      instructionsButton.size(250, 50); 
      instructionsButton.position((windowWidth / 3) - 125, (windowHeight / 1.4)); 

      instructionsButton.mousePressed(() => {
        mode = 1; // Goes to instructions screen
        instructionsButton.hide();
      });
      instructionsButton.show();
    }
  }
/*


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
  }*/
  
  let angle = 30;
  let angleSpeed = 0.75;
  let angleDirection = 1;
  
  
  function startGameButton() {
    if (appleY === null) appleY = height / 5.8;

    if(!appleIsSliced){
      image(appleImg, width / 1.6, height / 5.8, 350, 400);
    }
    else{
      image(appleSliceImg, width / 1.6, appleY, 350, 400);
      appleY += appleFallSpeed; 
      appleFallSpeed += 0.5; 
    }
    push();
    translate(width / 1.2, height / 4.4);
    rotate(radians(angle));
    textFont(gameFont);
    fill('white');
    textSize(32);
    text('SLICE TO START', 0, 0);
    pop();
  
    angle += angleSpeed * angleDirection;
    if (angle >= 40 || angle <= 20) {
      angleDirection *= -1;
    }

    // TEMP CODE TO CHECK WHETEHR LINK TO GAME SCREEN WORKS
    if (mouseIsPressed) {
      let buttonX1 = width / 1.6;
      let buttonX2 = width / 1.6 + 250;
      let buttonY1 = height / 5.4;
      let buttonY2 = height / 5.4 + appleImg.height;

      if (mouseX > buttonX1 && mouseX < buttonX2 && mouseY > buttonY1 && mouseY < buttonY2) {
        appleIsSliced = true;
        appleFallSpeed = -5;

        setTimeout(()=>{
          mode = 2;
          startScreenFirstLoad = true;
          freshGameScreen();
        }, 700);
      }
    }
  }

  
