class SlicePattern{
    constructor(type, size){
    this.type = type;
    this.diameter = size;
    if (this.type === 'bomb' || this.type === 'easy'){
        //bomb and easy mode pattern composed of a large hitbox
        this.hit = new HitBox(this.diameter, false);
    }
    else if (this.type === 'click'){
        this.hit = new HitBox(this.diameter, true);
    }
    else {
        //Hard mode pattern composed of several slice arrays to make it easier to slice
        this.sliceArrays = [3];
        this.diameter = size/3;
        for (let i = 0; i < 3; ++i){
            this.sliceArrays[i] = new SliceArray(this.type, this.diameter);
        }
    }
  }

  //checks if one of slicearrays or the hitbox has been sliced
  isSliced(){
    if (this.type === 'inert'){
      return 'inert';
    }
    if (this.type === 'bomb'){
      if (this.hit.getHit()){
        return 'bomb';
      }
    }
    else if (this.type === 'easy' || this.type === 'click') {
        if (this.hit.getHit()){
            return 'correct';
        }
    }
    else if (this.type === 'lrdown/rlup' || this.type === 'rldown/lrup'){
        let firstTwo = false;
        let endTwo = false;
        for (let j = 0; j < 3; ++j){
            if (this.sliceArrays[j].getHits(2).getHit() && this.sliceArrays[j].getHits(0).getHit()){
                firstTwo = true;
            }
            if (this.sliceArrays[j].getHits(1).getHit() && this.sliceArrays[j].getHits(0).getHit()){
                endTwo = true;
            }
            if (!this.sliceArrays[j].getHits(2).getHit() && !this.sliceArrays[j].getHits(1).getHit()
                && this.sliceArrays[j].getHits(0).getHit()){
                return 'wrong';
            }
        }
        for (let i = 0; i < 3; ++i){
            if ((this.sliceArrays[i].getHits(1).getHit() && firstTwo) || (this.sliceArrays[i].getHits(2).getHit() && endTwo)){
                return 'correct';
            }
            if ((this.sliceArrays[i].getHits(1).getHit() && !firstTwo) && (this.sliceArrays[i].getHits(2).getHit() && !endTwo)){
                return 'wrong';
            }
        }
    }
    else {
        let firstTwo = false;
        for (let j = 0; j < 3; ++j){
            if (this.sliceArrays[j].getHits(2).getHit() && this.sliceArrays[j].getHits(0).getHit()){
                firstTwo = true;
            }
            if (!this.sliceArrays[j].getHits(2).getHit() && this.sliceArrays[j].getHits(0).getHit()){
                return 'wrong';
            }
        }
        for (let i = 0; i < 3; ++i){
            if (this.sliceArrays[i].getHits(1).getHit() && firstTwo){
                return 'correct';
            }
            if (this.sliceArrays[i].getHits(1).getHit() && !firstTwo){
                return 'wrong';
            }
        }
    }
  }

  //slicepattern movement mapped to fruit movement
  move(x, y){
      if (this.type  === 'bomb' || this.type === 'easy' || this.type  === 'click'){
          this.hit.move(x,y);
      }
      else{
          this.sliceArrays[0].move(x, y);
          if (this.type === 'down' || this.type === 'up'){
              this.sliceArrays[1].move(x - this.diameter, y);
              this.sliceArrays[2].move(x + this.diameter, y);
          }
          else if (this.type === 'left' || this.type === 'right'){
              this.sliceArrays[1].move(x, y - this.diameter);
              this.sliceArrays[2].move(x, y + this.diameter);
          }
          else if (this.type === 'lrdown/rlup'){
              this.sliceArrays[1].move(x + this.diameter/1.4, y - this.diameter/1.4);
              this.sliceArrays[2].move(x - this.diameter/1.4, y + this.diameter/1.4);
          }
          else if (this.type === 'rldown/lrup'){
              this.sliceArrays[1].move(x - this.diameter/1.4, y - this.diameter/1.4);
              this.sliceArrays[2].move(x + this.diameter/1.4, y + this.diameter/1.4);
          }
      }
  }
  getType(){
        return this.type;
  }
}

class SliceArray{
    //Slicearray composed of three hitboxes to allow for direction tracking
  constructor(type, size){
      this.hits = [];
      this.type = type;
      this.diameter = size;
      this.hits[0] = new HitBox(this.diameter, false);
      this.hits[1] = new HitBox(this.diameter, false);
      this.hits[2] = new HitBox(this.diameter, false);
  }

  //hitboxes arranged and moved in specific order depending on direction
  move(x, y){
      this.hits[0].move(x, y);
      if (this.type === 'down'){
          this.hits[1].move(x, y + this.diameter);
          this.hits[2].move(x, y - this.diameter);
      }
      else if (this.type === 'up'){
          this.hits[1].move(x, y - this.diameter);
          this.hits[2].move(x, y + this.diameter);
      }
      else if (this.type === 'left'){
          this.hits[1].move(x - this.diameter, y);
          this.hits[2].move(x + this.diameter, y);
      }
      else if (this.type === 'right'){
          this.hits[1].move(x + this.diameter, y);
          this.hits[2].move(x - this.diameter, y);
      }
      else if (this.type === 'lrdown/rlup'){
          this.hits[1].move(x - this.diameter/1.4, y - this.diameter/1.4);
          this.hits[2].move(x + this.diameter/1.4, y + this.diameter/1.4);
      }
      else if (this.type === 'rldown/lrup'){
          this.hits[1].move(x + this.diameter/1.4, y - this.diameter/1.4);
          this.hits[2].move(x - this.diameter/1.4, y + this.diameter/1.4);
      }
  }
  getHits(index){
      return this.hits[index];
  }
}

class HitBox {
  constructor(diameter, click){
      this.diameter = diameter;
      this.hit = false;
      this.click = click;
  }

  //hitbox boundaries defined and moved in relation to fruit and slice pattern
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

  //Checks if the specific hitbox has been hit
  isHit(){
      if (mouseX <= this.umx && mouseX >= this.lmx && mouseY <= this.umy && mouseY >= this.lmy) {
          if (!this.click && mouseIsPressed){
              this.hit = true;
          }
          else if (this.click && clicked){
              this.hit = true;
          }
      }
  }

  getHit(){
      return this.hit;
  }
}
