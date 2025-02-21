function instructionScreen() {
    //console.log("Instruction screen is running");
    background(bg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    textSize(70);
    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(8);
    text("Slice a fruit to learn more!", width / 2, 50 );

    //console.log("checking instructionFruits:", instructionFruits);

    if (!instructionFruits || instructionFruits.length === 0) {
        console.warn("instructionFruits is empty! Calling setupInstructionButtons...");
        setupInstructionButtons();
    }

    drawInstructionButtons();
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
    if (mouseX > width - 150 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 20) {
        mode = 1; // button to go back to the instructions menu 
    }
}

//I need to fix this because it looks really weird and ugly
function drawBackButton() {
    fill("#FCF3CF");
    rect(width - 150, height - 60, 120, 40, 10);
    fill('black');
    textSize(20);
    text("Back", width - 90, height - 40);
}

