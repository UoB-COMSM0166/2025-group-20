function randomFruitGen(genType, recipe) {
  // genType == 0 --> generate fruit at thee start of current recipe
  // genType == 1 --> generate rest of fruits
  // genType == 2 --> generate bomb

  var index;
  if(genType == 0) {
    index = recipe.ingredients[0];
  }
  else if(genType == 1) {
    index = round(random(1, fruitList.length - 1));
  }
  else {
    index = fruitList.length - 1;
  }

  // set up fruit features based on index chosen
  var fruitImg = fruitImgs[index];
  var fruitName = fruitList[index];
  var slicePat = sliceList[index];
  if (fruitName === 'dragonfruit') {
    slicePat = 'inert'; // this should mean there's no slicing pattern for dragonfruit
  }
  return new Fruit(fruitImg, fruitName, slicePat, index);
}
