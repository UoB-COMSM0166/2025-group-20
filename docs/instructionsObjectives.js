function instructionObjectivesScreen(){
    background(bg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    textSize(60);
    fill("#FCF3CF");
    stroke(30, 15, 5);
    strokeWeight(6);
    text("Game Objectives!", width / 2, 50 );

    textSize(30);
    text(
        "Welcome to Smoothie Operator! It's absolutely GRAPE!\n\n" +
        "The goal: to slice the correct fruits to complete your very own smoothies.\n " +
        "Every time you complete a recipe, you gain points. \n" +
        "Avoid slicing bombs- you'll be in for an explosive surprise!\n" +
        "You'll also lose a life :(",
        width /2, height /2
    );

    drawBackButton();
}