class SliceEffect{
  constructor(callback){
    this.display = false;
    this.effect = callback;
  }

  //Displays effect for 1000ms giving player time to read
  show(){
    this.display = true;
    setTimeout(() => {
      this.display = false;
      overlay.clear();
    }, 1000);
  }

  //Effect is active so that it is ready to be drawn when needed
  active(){
    if (this.display){
      this.effect();
    }
  }
}