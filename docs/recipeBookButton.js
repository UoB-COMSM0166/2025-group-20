/*var recipeButton;
var openRecipeButton;
var isRecipeOpen = false;

function makeRecipeButton() {
    textFont(gameFont);
    fill('white');
    textSize(22);
    textAlign(CENTER, CENTER);
    
    text("RECIPE", windowWidth / 1.14, windowHeight / 1.23);
    text("BOOK", windowWidth / 1.14, windowHeight / 1.18);

    let closedBookImage = 'https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/cookbook.png';
    let openBookImage = 'https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/cookbook-open.png';

    if (!recipeButton) {
        recipeButton = createImg(closedBookImage);
        recipeButton.position(windowWidth / 1.18, windowHeight / 1.152);
        recipeButton.size(90, 90);

        recipeButton.mouseOver(() => { // book opens when you hover your mouse over it
           recipeButton.attribute('src', openBookImage);
           isRecipeOpen = true;
        });

        recipeButton.mouseOut(() => { // book changes back to closed when you don't hover over it 
             recipeButton.attribute('src', closedBookImage);
             isRecipeOpen = false;
        });
    }
    
    if (isRecipeOpen){
        recipeScreen();
    }
}

function recipeScreen() {
//  fill('#FCF3CF'); 
    fill(252, 243, 207, 180); 
    rectMode(CENTER);
    rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 55); 
    /*var patImgs = [];
    for (var i = 0; i < fruitList.length; i++) {
        patImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + 'Pat.png');
    }
    image(patImgs[0], windowWidth / 2 - 120, windowHeight / 2, 100, 100); // apple
    image(patImgs[1], windowWidth / 2, windowHeight / 2, 100, 100); // banana
    image(patImgs[2], windowWidth / 2, windowHeight / 2 - 120, 100, 100); // blueberry 
    image(patImgs[3], windowWidth / 2 - 120, windowHeight / 2 - 120, 100, 100); // lemon
    image(patImgs[4], windowWidth / 2 + 120, windowHeight / 2, 100, 100); // cherry
    image(patImgs[5], windowWidth / 2 - 240, windowHeight / 2 - 120, 100, 100); // grapes
    image(patImgs[6], windowWidth / 2 - 240, windowHeight / 2, 100, 100); // watermelon 
    image(patImgs[7], windowWidth / 2 + 120, windowHeight / 2 - 120, 100, 100); // bomb just to make it even
  

}*/

class RecipeButton {
    constructor() {
      // Load any images here (closed book, open book, etc.)
      this.closedBookImage = 'https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/cookbook.png';
      this.openBookImage = 'https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/cookbook-open.png';
      this.isRecipeOpen = false;
  
      console.log('RecipeButton Images:', this.closedBookImage, this.openBookImage);
  
      // Create the button
      this.recipeButton = createImg(this.closedBookImage);
      this.recipeButton.position(windowWidth / 1.18, windowHeight / 1.152);
      this.recipeButton.size(90, 90);
  
      console.log('Recipe Button Created:', this.recipeButton);
  
      // Handle hover to open/close the recipe
      this.recipeButton.mouseOver(() => {
        this.recipeButton.attribute('src', this.openBookImage);
        this.isRecipeOpen = true;
      });
  
      this.recipeButton.mouseOut(() => {
        this.recipeButton.attribute('src', this.closedBookImage);
        this.isRecipeOpen = false;
      });
    }
  
    update() {
      // Update logic for the button, based on whether the recipe is open or not
      if (this.isRecipeOpen) {
        this.recipeScreen();
      }
    }
  
    recipeScreen() {
      fill(252, 243, 207, 180);
      rectMode(CENTER);
      rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 55);

      // Example images for fruit recipes (replace this with actual images)
      image(fruitImgs[0], windowWidth / 2 - 120, windowHeight / 2, 100, 100); // apple
      image(fruitImgs[1], windowWidth / 2, windowHeight / 2, 100, 100); // banana
      image(fruitImgs[2], windowWidth / 2, windowHeight / 2 - 120, 100, 100); // blueberry
      image(fruitImgs[3], windowWidth / 2 - 120, windowHeight / 2 - 120, 100, 100); // lemon
      image(fruitImgs[4], windowWidth / 2 + 120, windowHeight / 2, 100, 100); // cherry
      image(fruitImgs[5], windowWidth / 2 - 240, windowHeight / 2 - 120, 100, 100); // grapes
      image(fruitImgs[6], windowWidth / 2 - 240, windowHeight / 2, 100, 100); // watermelon 

    }
  
    hide() {
      this.recipeButton.hide();
    }

    show() {
        this.recipeButton.show();
    }
  }


       
