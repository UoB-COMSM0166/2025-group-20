class LifeIcons {
    constructor() {
        this.lives = 3;
        this.x = 20; // Distance from left
        this.y = 20; // Distance from top
        this.spacing = 100; // Increase spacing to accommodate larger icons
        this.heartSize = 80; // Increase heart size to 50x50
    }

    display() {
        for (let i = 0; i < this.lives; i++) {
            image(lifeImg, this.x + i * this.spacing, this.y, this.heartSize, this.heartSize);
        }
    }
}

