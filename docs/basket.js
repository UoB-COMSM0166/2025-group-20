class Basket{
    constructor(){
        this.x = windowWidth/2;
        this.y = windowHeight;
        this.image = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/basket.png');
    }

    move(direction){
        if (direction === 'right'){
            if (this.x+50 > windowWidth){
                this.x = windowWidth;
            }
            else{
                this.x += 50;
            }
        }
        else if (direction === 'left'){
            if (this.x-50 < 0){
                this.x = 0;
            }
            else{
                this.x -= 50;
            }
        }
    }

    show(){
        //circle(this.x, this.y, 50);
        image(this.image, this.x-80, this.y-220, 220, 220);
    }
}