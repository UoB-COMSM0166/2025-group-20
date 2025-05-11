class Basket{
  constructor(){
      this.x = width/2;
      this.y = height;
      this.image = loadImage('Design/Images/basket.png');
  }

  //Allows basket to be moves but not moved off screen
  move(direction){
      if (direction === 'right'){
          if (this.x+10 > width-110){
              this.x = width-110;
          }
          else{
              this.x += 15;
          }
      }
      else if (direction === 'left'){
          if (this.x-10 < 110){
              this.x = 110;
          }
          else{
              this.x -= 15;
          }
      }
  }

  show(){
      image(this.image, this.x-110, this.y-220, 220, 220);
  }

  //Resets basket to start position
  resetBasket() {
    this.x = width/2;
    this.y = height;
  }

  getX(){
      return this.x;
  }
}
