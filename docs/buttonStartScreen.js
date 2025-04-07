let instructionsButton;
let angle = 30;
let angleSpeed = 0.75;
let angleDirection = 1;

function instructionButton() {
    if (!instructionsButton) {
        instructionsButton = createButton('INSTRUCTIONS');
        instructionsButton.style('font-size', '30');
        instructionsButton.style('font-family', 'gameFont');
        instructionsButton.style('text-align', 'center');
        instructionsButton.style('background-color', '#FCF3CF');
        instructionsButton.style('border', 'none');
        instructionsButton.style('border-radius', '8px');
        instructionsButton.style('color', 'black');
        instructionsButton.size(250, 50);
        instructionsButton.position((windowWidth / 3) - 125, (windowHeight / 1.5));

        instructionsButton.mousePressed(() => {
            mode = 1;
            instructionsButton.hide();
        });
        instructionsButton.show();
    }
}

function startGameButton() {
    image(appleImg, width / 1.6, height / 5.8, 350, 400);

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

    if (mouseIsPressed) {
        let buttonX1 = width / 1.6;
        let buttonX2 = width / 1.6 + 250;
        let buttonY1 = height / 5.4;
        let buttonY2 = height / 5.4 + appleImg.height;

        easyModeButton.mousePressed(() => {
            difficulty = 'easy';
            easyModeButton.style('background-color', '#c2ac53');
            hardModeButton.style('background-color', '#FCF3CF');
        });

        hardModeButton.mousePressed(() => {
            difficulty = 'hard';
            easyModeButton.style('background-color', '#FCF3CF');
            hardModeButton.style('background-color', '#c2ac53');
        });

        if (mouseX > buttonX1 && mouseX < buttonX2 && mouseY > buttonY1 && mouseY < buttonY2) {
            freshGameScreen();
        }
    }
}
