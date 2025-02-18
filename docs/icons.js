class LifeIcons {
    constructor() {
    this.lives = 3;
    
    // Load heart images
    this.hearts = [
    loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/heart.png'),
    loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/heart.png'),
    loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/heart.png')
    ];
    
    this.xOffset = 20; // Left
    this.yOffset = 20; // Top
    this.iconSize = 50;
    this.spacing = this.iconSize + 10;
    }
    
    loseLife() {
    if (this.lives > 0) {
    this.lives--;
    this.heart[this.lives] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/heart-empty.png'); // Replace heart with empty heart
    }
    }
    
    show() {
    for (let i = 0; i < 3; i++) {
    image(this.heart[i], this.xOffset + i * this.spacing, this.yOffset, this.iconSize, this.iconSize);
    }
    }
    }
