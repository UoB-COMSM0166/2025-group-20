class SlicePattern{
  constructor(type, size){
    this.hits = [3];
    this.type = type; 
    if (this.type == 'bomb' || this.type == 'click'){
      this.diameter = size;
    }
    else {
      this.diameter = size/3;
      this.hits[1] = new HitBox(this.diameter);
      this.hits[2] = new HitBox(this.diameter);
    }
    this.hits[0] = new HitBox(this.diameter);
  }
  
  isSliced(){
    if (this.type == 'inert'){
      return 'inert';
    }
    if (this.type == 'bomb'){
      if (this.hits[0].hit){
        return 'bomb';
      }
    }
    else if (this.type == 'click') {
      if (this.hits[0].hit){
        return 'correct';
      }
    }
    else if (this.type == 'lrdown/rlup' || this.type == 'rldown/lrup'){
      if (this.hits[0].hit && !this.hits[2].hit && !this.hits[1].hit){
        return 'wrong';
      }
      else if (this.hits[0].hit && this.hits[1].hit && this.hits[2].hit){
        return 'correct';
      }
    }
    else{
      if (this.hits[2].hit && this.hits[0].hit && this.hits[1].hit){
        return 'correct';
      }
      else if (!this.hits[2].hit && (this.hits[0].hit || this.hits[1].hit)) {
        return 'wrong';
      }
    }
 }

  move(x, y){
   this.hits[0].move(x, y);
   if (this.type == 'down'){
     this.hits[1].move(x, y + this.diameter);
     this.hits[2].move(x, y - this.diameter);
    }
    else if (this.type == 'up'){
     this.hits[1].move(x, y - this.diameter);
     this.hits[2].move(x, y + this.diameter);
    }
    else if (this.type == 'left'){
     this.hits[1].move(x - this.diameter, y);
     this.hits[2].move(x + this.diameter, y);
    }
    else if (this.type == 'right'){
     this.hits[1].move(x + this.diameter, y);
     this.hits[2].move(x - this.diameter, y);
    }
    else if (this.type == 'lrdown/rlup'){
     this.hits[1].move(x - this.diameter, y - this.diameter);
     this.hits[2].move(x + this.diameter, y + this.diameter);
    }
    else if (this.type == 'rldown/lrup'){
     this.hits[1].move(x + this.diameter, y - this.diameter);
     this.hits[2].move(x - this.diameter, y + this.diameter);
    }
  }
}
 
class HitBox {
  constructor(diameter){
    this.diameter = diameter;
    this.hit = false;
  }

  move(x, y){
    this.x = x;
    this.y = y;
    //uncomment line below for visual display of hit box
    circle(this.x, this.y, this.diameter);
    this.umx = x+(this.diameter/2);
    this.lmx = x-(this.diameter/2);
    this.umy = y+(this.diameter/2);
    this.lmy = y-(this.diameter/2);
    this.isHit();
  }
   
  isHit(){
    if (mouseIsPressed){
      if (mouseX <= this.umx && mouseX >= this.lmx && mouseY <= this.umy && mouseY >= this.lmy){
        this.hit = true;
      }
    }
    else{
      this.hit = false;
    }
  }
}
