class Basket{
    constructor(){
        this.x = windowWidth/2;
        this.y = windowHeight;
        this.image = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/basket.png');
    }

    move(direction){
        if (direction === 'right'){
            if (this.x+110 > windowWidth-110){
                this.x = windowWidth-110;
            }
            else{
                this.x += 110;
            }
        }
        else if (direction === 'left'){
            if (this.x-110 < 110){
                this.x = 110;
            }
            else{
                this.x -= 110;
            }
        }
    }

    show(){
        //circle(this.x, this.y, 220);
        image(this.image, this.x-110, this.y-220, 220, 220);
    }
}

