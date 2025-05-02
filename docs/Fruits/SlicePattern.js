class SlicePattern{
  constructor(type, size){
    this.type = type;
    if (this.type == 'bomb' || this.type == 'click' || this.type == 'easy'){
      this.diameter = size;
      this.hit = new HitBox(this.diameter);
    }
    else {
      this.sliceArrays = [3];
      this.diameter = size/3;
      for (let i = 0; i < 3; ++i){
        this.sliceArrays[i] = new SliceArray(this.type, this.diameter);
      }
    }
  }

  isSliced(){
    if (this.type == 'inert'){
      return 'inert';
    }
    if (this.type == 'bomb'){
      if (this.hit.hit){
        return 'bomb';
      }
    }
    else if (this.type == 'click' || this.type == 'easy') {
      if (this.hit.hit){
        return 'correct';
      }
    }
    else {
      for (let i = 0; i < 3; ++i){
        if (this.sliceArrays[i].isSliced() == 'correct'){
          return 'correct';
        }
        else if (this.sliceArrays[i].isSliced() == 'wrong'){
          return 'wrong';
        }
      }
    }
  }

  move(x, y){
      if (this.type  == 'bomb' ||this.type  == 'click' || this.type == 'easy'){
          this.hit.move(x,y);
      }
      else{
          this.sliceArrays[0].move(x, y);
          if (this.type == 'down' || this.type == 'up'){
              this.sliceArrays[1].move(x - this.diameter, y);
              this.sliceArrays[2].move(x + this.diameter, y);
          }
          else if (this.type == 'left' || this.type == 'right'){
              this.sliceArrays[1].move(x, y - this.diameter);
              this.sliceArrays[2].move(x, y + this.diameter);
          }
          else if (this.type == 'lrdown/rlup'){
              this.sliceArrays[1].move(x + this.diameter/1.4, y - this.diameter/1.4);
              this.sliceArrays[2].move(x - this.diameter/1.4, y + this.diameter/1.4);
          }
          else if (this.type == 'rldown/lrup'){
              this.sliceArrays[1].move(x - this.diameter/1.4, y - this.diameter/1.4);
              this.sliceArrays[2].move(x + this.diameter/1.4, y + this.diameter/1.4);
          }
      }
  }
}

class SliceArray{
  constructor(type, size){
      this.hits = [3];
      this.type = type;
      this.diameter = size;
      this.hits[1] = new HitBox(this.diameter);
      this.hits[2] = new HitBox(this.diameter);
      this.hits[0] = new HitBox(this.diameter);
  }

  isSliced(){
      if (this.type == 'inert'){
          return 'inert';
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
          this.hits[1].move(x - this.diameter/1.4, y - this.diameter/1.4);
          this.hits[2].move(x + this.diameter/1.4, y + this.diameter/1.4);
      }
      else if (this.type == 'rldown/lrup'){
          this.hits[1].move(x + this.diameter/1.4, y - this.diameter/1.4);
          this.hits[2].move(x - this.diameter/1.4, y + this.diameter/1.4);
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
      //circle(this.x, this.y, this.diameter);
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