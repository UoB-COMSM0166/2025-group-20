class RecipeGeneration {
  constructor() {
   const filteredFruits = [0, 1, 2 , 3, 4, 5, 6]; 
   const numFruits = Math.floor(Math.random() * 5) + 3; 
   this.ingredients = filteredFruits.sort(() => 0.5 - Math.random()).slice(0, numFruits); 
   this.x = width / 2 - (this.ingredients.length * 30); 
   this.y = 20; 
  }

  display() {
   /*const container = document.getElementById('gameContainer');
   let xPos = this.x;
   for (let i = 0; i < this.ingredients.length; i++) {
      const img = document.createElement('img');
      img.src = gameManager.getFruitImages()[this.ingredients[i]];
      img.className = 'fruit';
      img.style.left = `${xPos}px`;
      img.style.top = `${this.y}px`;
      container.appendChild(img);
      xPos += 60;
   }*/
     let xPos = this.x;
     for (var i = 0; i < this.ingredients.length; i++){
        image(gameManager.getFruitImages()[this.ingredients[i]], xPos, this.y, 50, 50);
        xPos += 60;
     }
  }

  getRecipe() {
   return this.ingredients;
  }
}