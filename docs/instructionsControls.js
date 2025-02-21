function instructionControlsScreen(){
    background(bg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    textSize(60);
    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(6);
    text("Controls", width / 2, 50 );

    textSize(30);
    text(
        "Game Controls:\n" +
        "This is a game for laptop's and computers!\n" +
        "Hold and swipe your mouse (squeak squeak)\n" +
        "in the right direction to slice the fruit.\n" +
        "You can pause the game at any time.\n" +
        "Click the restart!\n",
        width / 2, height / 2
    );

    drawBackButton();
}