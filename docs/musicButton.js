class MusicButton {
    constructor() {

      this.soundButton = new TextButton((windowWidth/1.08)-5, (windowHeight/1.15)-5, 'SOUND ON', 75, 75, '20px', () => {
        audioController.toggleMusic();
        this.updateLabel();
      });
      this.updateLabel();
    }
  
    updateLabel() {
      this.soundButton.setText(audioController.musicPaused ? "SOUND ON" : "SOUND OFF");
    }
  
    show() {
      this.soundButton.show();
    }
  
    hide() {
      this.soundButton.hide();
    }
  }
  
  