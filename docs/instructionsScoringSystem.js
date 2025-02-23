function instructionScoringSystemScreen(){
  background(bg);
  textAlign(CENTER, CENTER);
  textFont(gameFont);
  fill("#FCF3CF");
  stroke(30, 15, 5);
  strokeWeight(6);
  textSize(40);
  text("Scoring System!", width / 2, 50);

  textSize(24);
  text(
      //I've left the point system blank for now because I'm not sure what you get score how
      "Scoring System:\n" +
      "- Apples: +? points\n" +
      "- Bananas: +? points\n" +
      "- Blueberries: +? points\n" +
      "- Grapes: +? points\n" +
      "- Cherries: +? points\n" +
      "- Lemons: +? points\n" +
      "- Pears: +? points\n" +
      "- Watermelons: +? points\n" +
      "- Bombs: -1 Life\n" +
      "Tip: Slice multiple fruits in one swipe for a combo bonus!",
      width / 2, height / 2
  );

  drawBackButton();
}
