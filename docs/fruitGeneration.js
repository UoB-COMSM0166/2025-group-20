class FruitGenerator {
  constructor(fruitList, fruitImgs, sliceList) {
    this.fruitList = fruitList;
    this.fruitImgs = fruitImgs;
    this.sliceList = sliceList;
  }

  randomFruitGen(genType, recipe) {
    // genType == 0 --> generate fruit at the start of current recipe
    // genType == 1 --> generate rest of fruits
    // genType == 2 --> generate bomb

    let index;
    if (genType === 0) {
      index = recipe.ingredients[0];
    } else if (genType === 1) {
      index = round(random(1, this.fruitList.length - 1));
    } else {
      index = this.fruitList.length - 1;
    }

    let fruitImg = this.fruitImgs[index];
    let fruitName = this.fruitList[index];
    let slicePat = this.sliceList[index];

    if (fruitName === 'dragonfruit') {
      slicePat = 'click'; // no slicing pattern for dragonfruit
    }

    return new Fruit(fruitImg, fruitName, slicePat, index);
  }
}
