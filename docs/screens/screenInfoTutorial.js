class TutorialInfoScreen {
    constructor(){
        this.cursorEffects = new GameCursorEffects();
        this.screenshots = [
            loadImage('Images/easy-mode-tutorial.png'),
            loadImage('Images/hard-mode.png'),
            loadImage('Images/recipebook-tutorial.png'),
            loadImage('Images/two-player.png')
        ];

        this.texts = [
            "Easy Mode: Slice the correct fruit by holding down the left mouse button and moving the cursor across it in the correct order to complete the recipe! Careful not to click the wrong fruit, you'll lose a life! ->",
            "Hard Mode: Slice the correct fruit by holding down the left mouse button and moving the cursor across it in the correct order WITH the correct slicing pattern - or you lose a life! ->",
            "Recipe Book: Use this to study the smoothie recipes — and remind yourself of slice patterns by hovering over it with the cursor. ->",
            "Two Player Mode: Work with a friend, when one of you slices a fruit, the other one catches it in the basket moving the basket by using the left and right arrow keys. ->"
        ];

        this.currentIndex = 0;
        //this.nextButton = new TextButton(windowWidth / 15, windowHeight / 5, this.texts[this.currentIndex], 300, 200, '18px',
        this.nextButton = new TextButton(windowWidth / 15, (windowHeight - 200) / 2, this.texts[this.currentIndex], 300, 200, '18px',
            () => this.advanceTutorial()
        );

        this.backButton = new TextButton((windowWidth - 250) / 2, windowHeight - 80, 'BACK', 250, 50, '27px', () => {
            gameManager.switchState("tutorial-entry");
        });
        this.hideButtons();
    }

    showButtons() {
        this.updateButton();
        this.nextButton.getButton().show();
        this.backButton.getButton().show();
    }

    hideButtons() {
        this.nextButton.getButton().hide();
        this.backButton.getButton().hide();
    }

    updateButton() {
        this.nextButton.setText(this.texts[this.currentIndex]);
    }

    advanceTutorial() {
        this.currentIndex++;

        if (this.currentIndex >= this.screenshots.length) {
            this.currentIndex = 0;
        }
            this.updateButton();
    }

    render() {
        cursor();
        background('black');
    
        let screenShot = this.screenshots[this.currentIndex];
    
        let imgWidth = width * 0.6;
        let imgHeight = height * 0.6;
        let x = (width - imgWidth) / 2;
        let y = (height - imgHeight) / 2;
        x += 130;

        image(screenShot, x, y, imgWidth, imgHeight);
    
        this.cursorEffects.cursorEffect();
    }
    

}
