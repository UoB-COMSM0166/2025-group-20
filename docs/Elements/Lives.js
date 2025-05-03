class Lives {
  fullHeart = loadImage('Design/Images/full-heart.png');
  emptyHeart = loadImage('Design/Images/empty-heart.png');
  gainSound = loadSound('Design/Audio/gainLife.wav');
  loseSound = loadSound('Design/Audio/loseLife.wav');
  gameOver = loadSound('Design/Audio/gameOver.wav');
  lifeCount = 3;

  //Adds a life if lives aren't full
  gainLife() {
    if (this.lifeCount < 3) {
      this.lifeCount++;
      if (gameManager.getSoundEffect()) {
        this.gainSound.play();
      }
    }
  }

  //Removes a life if lives aren't empty
  loseLife() {
    this.lifeCount--;
    if (gameManager.getSoundEffect()) {
      this.loseSound.play();
      if (this.lifeCount === 0) {
        this.gameOver.play();
      }
    }
  }

  getLife() {
    return this.lifeCount;
  }

  //resets lifecount
  resetLife() {
    this.lifeCount = 3;
  }

  //sets lives to 0
  zeroLives() {
    this.lifeCount = 0;
    if (gameManager.getSoundEffect()) {
      this.gameOver.play();
    }  
  }

  //display life count
  drawLife() {
    let xPosition = 10;
    let yPosition = 10;
    let offset = 0;
    for (let i = 0; i < this.lifeCount; i++) {
      image(this.fullHeart, xPosition + offset, yPosition, 50, 50);
      offset += 60;
    }
    let empty = 3;
    while (empty != this.lifeCount) {
      image(this.emptyHeart, xPosition + offset, yPosition, 50, 50);
      offset += 60;
      empty--;
    }
  }
}