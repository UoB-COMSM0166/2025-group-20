class GameScore {
  constructor() {
    this.setHighScore();
    this.currentScore = 0;
  }

  setHighScore() {
    if (document.cookie.length === 0) {
      this.highScore = 0;
      return;
    }
    this.highScore = document.cookie.split('=')[1];
  }

  updateHighScore() {
    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
    }
  }

  addScore(score) {
    this.currentScore += score;
  }

  loseScore(score) {
    if (this.currentScore === 0) {
      return;
    }
    this.currentScore -= score;
  }

  resetScore() {
    this.currentScore = 0;
  }

  drawHighScore() {
    let xPosition = 10;
    let yPosition = 90;
    textSize(26);
    textFont(gameFont);
    fill('white');
    stroke('black');
    strokeWeight(3);
    text('high score: ' + this.highScore, xPosition, yPosition);
  }

  drawCurrentScore() {
    let xPosition = 10;
    let yPosition = 120;
    textSize(26);
    textFont(gameFont);
    fill('white');
    stroke('black');
    strokeWeight(3);
    text('current score: ' + this.currentScore, xPosition, yPosition);
  }
}