let instructionScreenFirstLoad = true;

function instructionScreen() {
    background(bg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    textSize(70);
    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(8);
    text("Slice a fruit to learn more!", width / 2, 50 );

    //console.log("checking instructionFruits:", instructionFruits);

    if (instructionScreenFirstLoad) {
        setupInstructionButtons();
        instructionScreenFirstLoad = false;
    }

    // setupInstructionButtons();

    drawBackButton();
    drawInstructionButtons();
    cursorEffect();
    /*instructionsControlsButton();
    instructionsGameOverConditions();
    instructionsNavigationButton();
    instructionsObjectivesButton();
    instructionsScoringSystem();*/
}

function mousePressed(){
    if (mode === 1){
        checkInstructionClick(mouseX, mouseY);
    }

    let buttonX = (width / 2) - 100;
    let buttonY = height - 100;
    let buttonWidth = 200;
    let buttonHeight = 50;

    if (mouseX > buttonX && mouseX < buttonX + buttonWidth && mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        if (mode == 1) {
            mode = 0;
        }
        else {
            mode = 1;
        }
        
        //mode = 0;
    }

    /*if (mode >= 5 && mode <= 9) {
        let backX = width - 150;
        let backY = height - 60;
        let backWidth = 120;
        let backHeight = 40;

        if (mouseX > backX && mouseX < backX + backWidth && mouseY > backY && mouseY < backY + backHeight) {
            mode = 1; 
        }
    }*/
}

//I need to fix this because it looks really weird and ugly
function drawBackButton() {
    //if (mode != 1) return;

    let buttonX = (width / 2) - 100;
    let buttonY = height - 100;
    let buttonWidth = 200;
    let buttonHeight = 50;

    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(4);
    rect(buttonX + buttonWidth / 2, buttonY + buttonHeight / 2 + 5, buttonWidth, buttonHeight, 10);
    
    noStroke();
    fill("black");
    textSize(30);
    textAlign(CENTER, CENTER);
    text("BACK", buttonX + buttonWidth / 2, buttonY + buttonHeight / 2);
}
