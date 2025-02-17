class SlicePattern {
  constructor(type) {
      this.hits = []; 
      this.type = type;
      this.correctSlice = (["left", "right", "lrdown", "rlup"].includes(type)) ? "horizontal" : "vertical";

      if (this.type == 'bomb') {
          this.diameter = 30;
      } else {
          this.diameter = 10;
      }

      this.hits[0] = new HitBox(this.diameter);
      if (this.type !== 'bomb') {
          this.hits[1] = new HitBox(this.diameter);
          this.hits[2] = new HitBox(this.diameter);
      }
  }

  isSliced(swipeDirection) {
    
      if (!swipeDirection) return null; 

      if (this.type == 'bomb' && this.hits[0].isHit()) {
          return 'bomb';
      }

      if (this.hits.length > 2) {
          if (!this.hits[2].isHit() && (this.hits[0].isHit() || this.hits[1].isHit())) {
              return 'wrong';
          }

          if (this.hits[2].isHit() && this.hits[0].isHit() && this.hits[1].isHit()) {
              if (swipeDirection === this.correctSlice) {
                  return 'correct';
              } else {
                  return 'wrong';
              }
          }
      }
      return null;
  }






   move(x, y){
    this.hits[0].move(x, y);
    if (this.type == 'down'){
      this.hits[1].move(x, y - this.diameter);
      this.hits[2].move(x, y + this.diameter);
     }
     else if (this.type == 'up'){
      this.hits[1].move(x, y + this.diameter);
      this.hits[2].move(x, y - this.diameter);
     }
     else if (this.type == 'left'){
      this.hits[1].move(x - this.diameter, y);
      this.hits[2].move(x + this.diameter, y);
     }
     else if (this.type == 'right'){
      this.hits[1].move(x + this.diameter, y);
      this.hits[2].move(x - this.diameter, y);
     }
     else if (this.type == 'rlup'){
      this.hits[1].move(x + this.diameter, y + this.diameter);
      this.hits[2].move(x - this.diameter, y - this.diameter);
     }
     else if (this.type == 'lrdown'){
      this.hits[1].move(x - this.diameter, y - this.diameter);
      this.hits[2].move(x + this.diameter, y + this.diameter);
     }
     else if (this.type == 'rldown'){
      this.hits[1].move(x + this.diameter, y - this.diameter);
      this.hits[2].move(x - this.diameter, y + this.diameter);
     }
     else if (this.type == 'lrup'){
      this.hits[1].move(x - this.diameter, y + this.diameter);
      this.hits[2].move(x + this.diameter, y - this.diameter);
     }
   }
 }
 
 class HitBox {
   constructor(diameter){
     //circle(this.x, this.y, diameter);
      this.diameter = diameter;
   }

   move(x, y){ 
    this.x = x;
    this.y = y;
    this.umx = x+(this.diameter/2);
    this.lmx = x-(this.diameter/2);
    this.umy = y+(this.diameter/2);
    this.lmy = y-(this.diameter/2);
   }
   
  isHit(){
    if (mouseX <= this.umx && mouseX >= this.lmx && mouseY <= this.umy && mouseY >= this.lmy){
      return true;
    }
    else{
      return false;
    }
  }
 }
