function instructionGameOverConditionsScreen(){
  background(bg);
  textAlign(CENTER, CENTER);
  textFont(gameFont);
  fill("#FCF3CF");
  stroke(30, 15, 5);
  strokeWeight(6);
  textSize(40);
  text("Game Over Conditions", width / 2, 50);

  textSize(24);
  text(
      "Game Over Conditions:\n" +
      "- You lose if you run out of lives.\n" +
      "- You only have three lives! Be careful\n" +
      "- The game ends when you run out of lives.\n" +
      "- Slicing a bomb instantly removes one life!\n" +
      "- Slicing the wrong fruit in the wrong direction removes one life!\n" +
      "Tip: Keep an eye on your lives at the top of the screen!",
      width / 2, height / 2
  );

  drawBackButton();
}
