class TutorialEntryScreen {
    constructor(){
    this.tutorialSliceScreen = new TutorialSliceScreen();
    this.tutorialInfoTutorial = new TutorialInfoScreen();

    // --- Button setup ---

    this.sliceScreenButton = new TextButton((windowWidth) / 2, windowHeight / 2, 'SLICING', 250, 50, '27px', () => {
        gameManager.switchState("tutorial-slice");
    });

   this.infoScreenButton = new TextButton((windowWidth - 500) / 2, windowHeight / 2, 'LEARN THE RULES', 250, 50, '27px', () => {
        gameManager.switchState("start");
    });
    this.backButton = new TextButton((windowWidth - 250) / 2, windowHeight - 80, 'BACK', 250, 50, '27px', () => {
        gameManager.switchState("start");
    });
    }

    render() {
        noCursor();
        background(bg);
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        textSize(70);
        fill("#FCF3CF");
        stroke(30, 15, 5);
        strokeWeight(8);
        cursorEffect();
    }

    showButtons() {
        this.backButton.getButton().show();
        this.sliceScreenButton.getButton().show();
        this.infoScreenButton.getButton().show();
    }

    hideButtons() {
        this.backButton.getButton().hide();
        this.sliceScreenButton.getButton().hide();
        this.infoScreenButton.getButton().hide();
    } 
}