class Basket{
  constructor(){
      this.x = width/2;
      this.y = height;
      this.image = loadImage('Design/Images/basket.png');
  }

  move(direction){
      if (direction === 'right'){
          if (this.x+10 > width-110){
              this.x = width-110;
          }
          else{
              this.x += 10;
          }
      }
      else if (direction === 'left'){
          if (this.x-10 < 110){
              this.x = 110;
          }
          else{
              this.x -= 10;
          }
      }
  }

  show(){
      //circle(this.x, this.y, 220);
      image(this.image, this.x-110, this.y-220, 220, 220);
  }

  resetBasket() {
    this.x = width/2;
    this.y = height;
  }
}
