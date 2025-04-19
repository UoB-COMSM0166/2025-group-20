class LifeIcons {
    constructor() {
    this.lives = 3;
    this.heartStates = ['full', 'full', 'full'];
    
    // Load heart images
    this.hearts = [
    loadImage('Images/heart.png'),
    loadImage('Images/heart.png'),
    loadImage('Images/heart.png')
    ];
    
    this.xOffset = 20; // Left
    this.yOffset = 20; // Top
    this.iconSize = 50;
    this.spacing = this.iconSize + 10;
    }
    
    loseLife() {
    if (this.lives > 0) {
    this.lives--;
    this.heartStates[this.lives] = 'empty';
    this.hearts[this.lives] = loadImage('Images/heart-empty.png'); // Replace heart with empty heart
    }
    }

    gainLife() {
      if (this.lives < 3) {
        for (let i = 0; i => this.heartStates.length; i++) {
          if (this.heartStates[i] === 'empty') {
            this.heartStates[i] = 'full';
            this.hearts[i] = loadImage('Images/heart.png');
            this.lives++;
            break;
          }
        }
      } else {
          console.log("Already full!");
        }
    }
          
    show() {
    for (let i = 0; i < 3; i++) {
    image(this.hearts[i], this.xOffset + i * this.spacing, this.yOffset, this.iconSize, this.iconSize);
    }
    }
    }
