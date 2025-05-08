class GameScore {
  constructor() {
    this.setHighScore();
    this.currentScore = 0;
  }

  //Uses cookies to remember and initially set the highscore
  setHighScore() {
    if (document.cookie.length === 0) {
      this.highScore = 0;
      return;
    }
    this.highScore = document.cookie.split('=')[1];
  }

  //Updates highscore to current score if current score is larger
  updateHighScore() {
    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
    }
  }

  //adds a given amount of points to the score
  addScore(score) {
    this.currentScore += score;
  }

  //removes a given number of points from the score
  loseScore(score) {
    if (this.currentScore === 0) {
      return;
    }
    this.currentScore -= score;
  }

  //resets score to 0
  resetScore() {
    this.currentScore = 0;
  }

  //displays the highscore
  drawHighScore() {
    let xPosition = 20;
    let yPosition = 90;
    textSize(26);
    textFont(gameFont);
    textAlign('CENTER', 'CENTER');
    fill('white');
    stroke('black');
    strokeWeight(3);
    text('high score: ' + this.highScore, xPosition, yPosition);
  }

  //displays the current score
  drawCurrentScore() {
    let xPosition = 20;
    let yPosition = 120;
    textSize(26);
    textFont(gameFont);
    fill('white');
    stroke('black');
    strokeWeight(3);
    text('current score: ' + this.currentScore, xPosition, yPosition);
  }
}