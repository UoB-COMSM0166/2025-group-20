class Lives {
  constructor(){
    this.fullHeart = loadImage('Design/Images/full-heart.png');
    this.emptyHeart = loadImage('Design/Images/empty-heart.png');
    this.gainSound = loadSound('Design/Audio/gainLife.wav');
    this.loseSound = loadSound('Design/Audio/loseLife.wav');
    this.gameOver = loadSound('Design/Audio/gameOver.wav');
    this.lifeCount = 3;
  }


  //Adds a life if lives aren't full
  gainLife() {
    if (this.lifeCount < 3) {
      this.lifeCount++;
      if (soundEffect) {
        this.gainSound.play();
      }
    }
  }

  setLives(lives){
    this.lifeCount = lives;
  }
  //Removes a life if lives aren't empty
  loseLife() {
    this.lifeCount--;
    if (soundEffect) {
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
    if (soundEffect) {
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