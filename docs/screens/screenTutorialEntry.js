class TutorialEntryScreen {
    constructor(){
        this.fruitBorder = new FruitBorder();
        this.cursorEffects = new GameCursorEffects();
        this.tutorialSliceScreen = new TutorialSliceScreen();
        this.tutorialInfoTutorial = new TutorialInfoScreen();

    // --- Button setup ---

        this.sliceScreenButton = new TextButton((windowWidth) / 2, windowHeight / 2, 'SLICING', 250, 50, '27px', () => {
            gameManager.switchState("tutorial-slice");
         });

        this.infoScreenButton = new TextButton((windowWidth - 500) / 2, windowHeight / 2, 'LEARN THE RULES', 250, 50, '27px', () => {
            gameManager.switchState("tutorial-info");
        });
        this.backButton = new TextButton((windowWidth - 250) / 2, windowHeight - 80, 'BACK', 250, 50, '27px', () => {
            gameManager.switchState("start");
        });
    }

    render() {
        noCursor();
        background(bg);
        //this.startScreen.border();
        this.fruitBorder.draw();
        this.drawTutorialTitle();
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        textSize(70);
        fill("#FCF3CF");
        stroke(30, 15, 5);
        strokeWeight(8);
        this.cursorEffects.cursorEffect();
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

    drawTutorialTitle() {
        textAlign(CENTER, CENTER);
        textFont(gameFont);
        fill('white');
        stroke('black');
        strokeWeight(6);
        textSize(100);
        text('Tutorial', width / 2, height / 8);
    }
}