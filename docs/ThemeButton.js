class ThemeButton {
    constructor(x, y) {
      this.button = createButton("Play");
      this.button.position(x, y);
  
      this.button.style('font-size', '18px');
      this.button.style('font-family', 'gameFont');
      this.button.style('text-align', 'center');
      this.button.style('background-color', '#FCF3CF');
      this.button.style('border', '2px solid black');
      this.button.style('border-radius', '8px');
      this.button.style('color', 'black');
      this.button.style('padding', '4px 12px');
  
      this.button.mousePressed(() => {
        audioController.toggleOnOff();
        this.updateLabel();
      });
  
      this.updateLabel();
    }
  
    updateLabel() {
      this.button.html(audioController.isPaused ? "Play" : "Stop");
    }
  
    show() {
      this.button.show();
    }
  
    hide() {
      this.button.hide();
    }

    setPosition(x, y) {
        this.button.position(x, y);
      }
  }
  
  