class SmoothieRecipe {
   constructor() {
       const filteredFruits = fruitList.filter(fruit => fruit != 'bomb'); 
       const numFruits = Math.floor(Math.random() * 5) + 3; 
       this.ingredients = filteredFruits.sort(() => 0.5 - Math.random()).slice(0, numFruits); 
       this.x = width / 2 - (this.ingredients.length * 30); 
       this.y = 20; 
   }

   display() {
      let xPos = this.x;
      for (let fruit of this.ingredients) {
          let index = fruitList.indexOf(fruit); 
          if (index !== -1) { 
              image(fruitImgs[index], xPos, this.y, 50, 50);
              xPos += 60; 
          }
      }
   }
}
