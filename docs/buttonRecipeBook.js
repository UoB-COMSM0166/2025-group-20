let recipeButton;
let isRecipeOpen = false;

class RecipeButton {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.button = null;
        this.closedImage = 'https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/cookbook.png';
        this.openImage = 'https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/cookbook-open.png';
    }

    create() {
        if (this.button) return;
        this.button = createImg(this.closedImage);
        this.button.position(this.x, this.y);
        this.button.size(this.size, this.size);

        this.button.mouseOver(() => {
            this.button.attribute('src', this.openImage);
            isRecipeOpen = true;
        });

        this.button.mouseOut(() => {
            this.button.attribute('src', this.closedImage);
            isRecipeOpen = false;
        });
    }

    show() {
        if (this.button) this.button.show();
    }
    hide() {
        if (this.button) this.button.hide();
    }
}

function makeRecipeButton() {
    textFont(gameFont);
    fill('white');
    stroke('black');
    strokeWeight(2);
    textSize(22);
    textAlign(CENTER, CENTER);
    text("RECIPE", windowWidth / 1.14, windowHeight / 1.23);
    text("BOOK", windowWidth / 1.14, windowHeight / 1.18);

    if (!recipeButton) {
        recipeButton = new RecipeButton(windowWidth / 1.18, windowHeight / 1.152, 90);
        recipeButton.create();
    }

    if (isRecipeOpen) {
        recipeScreen();
    }
}

function recipeScreen() {
    fill(252, 243, 207, 180);
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 55);

    image(patImgs[0], windowWidth / 2 - 120, windowHeight / 2, 100, 100);
    image(patImgs[1], windowWidth / 2, windowHeight / 2, 100, 100);
    image(patImgs[2], windowWidth / 2, windowHeight / 2 - 120, 100, 100);
    image(patImgs[3], windowWidth / 2 - 120, windowHeight / 2 - 120, 100, 100);
    image(patImgs[4], windowWidth / 2 + 120, windowHeight / 2, 100, 100);
    image(patImgs[5], windowWidth / 2 - 240, windowHeight / 2 - 120, 100, 100);
    image(patImgs[6], windowWidth / 2 - 240, windowHeight / 2, 100, 100);
    image(patImgs[7], windowWidth / 2 + 120, windowHeight / 2 - 120, 100, 100);
}
