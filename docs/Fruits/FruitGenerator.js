class FruitGenerator {
  randomFruitGen(genType) {
    // genType == 0 --> generate fruit at the start of current recipe
    // genType == 1 --> generate rest of fruits
    // genType == 2 --> generate bomb
    // genType == 3 --> generate dragonfruit

    let index;
    if (genType === 0) {
      index = gameManager.getCurrentRecipe().getRecipe()[0];
    } else if (genType === 1) {
      index = round(random(1, gameManager.getFruitNames().length - 1));
    } else if (genType === 3) {
      index = gameManager.getFruitNames().length - 2;
    }

    let fruitImg = gameManager.getFruitImages()[index];
    let fruitName = gameManager.getFruitNames()[index];
    let slicePat = gameManager.getSlicePatterns()[index];

    return new Fruit(fruitImg, fruitName, slicePat, index);
  }

  tutorialGen(index){
    let fruitImg = gameManager.getFruitImages()[index];
    let fruitName = gameManager.getFruitNames()[index];
    let slicePat = gameManager.getSlicePatterns()[index];
    return new TutorialFruit(fruitImg, fruitName, slicePat, index);
  }
}