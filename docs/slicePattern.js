//Slice Pattern has series of hitboxes tracking the position of the fruit
class SlicePattern{
   constructor(type){
     this.hits = [3];
     this.diameter = 10;
     this.correctSlice = false;
     this.hits[0] = new HitBox(Fruit.x, Fruit.y, this.diameter); //central node
     if (type == "down"){
      this.hits[1] = new HitBox(Fruit.x, Fruit.y - this.diameter, this.diameter);
      this.hits[2] = new HitBox(Fruit.x, Fruit.y + this.diameter, this.diameter);
     }
     else if (type == "up"){
      this.hits[2] = new HitBox(Fruit.x, Fruit.y - this.diameter, this.diameter);
      this.hits[1] = new HitBox(Fruit.x, Fruit.y + this.diameter, this.diameter);
     }
     else if (type == "left"){
      this.hits[1] = new HitBox(Fruit.x - this.diameter, Fruit.y, this.diameter);
      this.hits[2] = new HitBox(Fruit.x + this.diameter, Fruit.y, this.diameter);
     }
     else if (type == "right"){
      this.hits[2] = new HitBox(Fruit.x - this.diameter, Fruit.y, this.diameter);
      this.hits[1] = new HitBox(Fruit.x + this.diameter, Fruit.y, this.diameter);
     }
     else if (type == "lrdown"){
      this.hits[1] = new HitBox(Fruit.x + this.diameter, Fruit.y + this.diameter, this.diameter);
      this.hits[2] = new HitBox(Fruit.x - this.diameter, Fruit.y - this.diameter, this.diameter);
     }
     else if (type == "rlup"){
      this.hits[1] = new HitBox(Fruit.x + this.diameter, Fruit.y + this.diameter, this.diameter);
      this.hits[2] = new HitBox(Fruit.x - this.diameter, Fruit.y - this.diameter, this.diameter);
     }
     else if (type == "rldown"){
      this.hits[1] = new HitBox(Fruit.x + this.diameter, Fruit.y - this.diameter, this.diameter); 
      this.hits[2] = new HitBox(Fruit.x - this.diameter, Fruit.y + this.diameter, this.diameter);
     }
     else if (type == "lrup"){
      this.hits[2] = new HitBox(Fruit.x + this.diameter, Fruit.y - this.diameter, this.diameter);
      this.hits[1] = new HitBox(Fruit.x - this.diameter, Fruit.y + this.diameter, this.diameter);
     }

   }
   
   //Have this.wrongSlice triggering a life to be lost when equalling true
   //Have this.correctSlice triggering points to be gained when equalling true
   isSliced(){
     if (this.hits[2].hit == false && (this.hits[0].hit || this.hits[1].hit)){
         this.wrongSlice = true;
     }
     else if (this.hits[2].hit && (this.hits[0].hit == false || this.hits[1].hit == false)){
         this.wrongSlice = false;
         if (this.hits[2].hit && this.hits[0].hit && this.hits[1].hit){
            this.correctSlice == true;
         }
     }

   }
 }
 
 class HitBox {
   constructor(ixp, iyp, id){
     circle(ixp, iyp, id);
     this.umx = ixp+(id/2);
     this.lmx = ixp-(id/2);
     this.umy = iyp+(id/2);
     this.lmy = iyp-(id/2);
     this.hit = false;
   }
   
   isHit(){
     if (mouseX <= this.umx && mouseX >= this.lmx && mouseY <= this.umy && mouseY >= this.lmy){
       this.hit = true
     }
   }
   
 }
