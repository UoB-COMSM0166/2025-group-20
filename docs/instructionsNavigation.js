function instructionNavigationScreen(){
    background(instructionBg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(6);
    textSize(40);
    text("Navigation", width / 2, 50);

    textSize(24);
    text(
        "Navigation:\n" +
        "- Click on any fruit in the instructions menu to learn more.\n" +
        "- Press 'Esc' to return to the main menu.\n" + // don't think we've implemented this but put it in to remind me
        "- Click the 'Slice to Start' apple on the main menu to begin the game.\n" +
        "- Use the pause button during the game to pause, quit or restart.",
        width / 2, height / 2
    );

    drawBackButton();
}

