//Slice Pattern has series of hitboxes tracking the position of the fruit
class SlicePattern{
   constructor(type){
     this.hits = [3];
     this.type = type;
     if (this.type == 'bomb'){
      this.diameter = 30;
     }
    else {
     this.diameter = 10;
     this.hits[1] = new HitBox(this.diameter);
     this.hits[2] = new HitBox(this.diameter);
    }
     this.hits[0] = new HitBox(this.diameter);
   }
   
   //Have this.wrongSlice triggering a life to be lost when equalling true
   //Have this.correctSlice triggering points to be gained when equalling true
   isSliced(){
    if (mouseClicked()){
      if (this.type == 'bomb' && this.hits[0].isHit()){
        return 'bomb';
      }
      else if (this.hits[2].isHit() == false && (this.hits[0].isHit() || this.hits[1].isHit())){
        return 'wrong';
      }
      else if (this.hits[2].isHit() && (this.hits[0].isHit() == false || this.hits[1].isHit() == false)){
        if (this.hits[2].isHit() && this.hits[0].isHit() && this.hits[1].isHit()){
          return 'correct';
        }
      }
    }
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
     //uncomment line below for visual display of hit box
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
