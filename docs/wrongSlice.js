class LifeIcons {
    constructor(totalLives) {
      this.totalLives = totalLives;
      this.remainingLives = totalLives;
      this.lifeIcons = [];
      this.iconSize = 40;
  
      this.fullLifeImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/life.png');
      this.lostLifeImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/lifelost.png');
  

      for (let i = 0; i < this.totalLives; i++) {
        this.lifeIcons.push(this.fullLifeImg);
      }
    }
  
    loseLife() {
      if (this.remainingLives > 0) {
        this.remainingLives--;
        this.lifeIcons[this.remainingLives] = this.lostLifeImg; 
      }
    }
  
    show() {
      for (let i = 0; i < this.totalLives; i++) {
        image(this.lifeIcons[i], 20 + i * (this.iconSize + 10), 20, this.iconSize, this.iconSize);
      }
    }
  }
  