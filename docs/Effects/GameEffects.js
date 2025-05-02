class SliceEffect{
  constructor(callback){
    this.display = false;
    this.effect = callback;
  }

  show(){
    this.display = true;
    setTimeout(() => {
      this.display = false;
      overlay.clear();
    }, 1000);
  }

  active(){
    if (this.display){
      this.effect();
    }
  }
}