class SmoothieMaker {
    constructor() {
        this.fruitsList = ['apple', 'banana', 'blueberry', 'carrot', 'cherry', 'grape', 'watermelon', 'bomb'];
    }

    generateSmoothie() {
        const filteredFruits = this.fruitsList.filter(fruit => fruit !== 'bomb'); 
        const numFruits = Math.floor(Math.random() * 5) + 3; 
        return filteredFruits
            .sort(() => 0.5 - Math.random())
            .slice(0, numFruits); 
    }
}


let smoothieMachine = new SmoothieMaker();
let smoothieRecipe = smoothieMachine.generateSmoothie();

class SmoothieDisplay {
    constructor(smoothieIngredients, fruitImgs) {
        this.smoothieIngredients = smoothieIngredients;
        this.fruitImgs = fruitImgs;
        this.x = width / 2 - (this.smoothieIngredients.length * 30); 
        console.log("The width is:", width);
        this.y = 20; 
    }

    display() {
        console.log("SmoothieDisplay.display is running");
        console.log("this.fruitImgs:", this.fruitImgs);
        if (!this.fruitImgs || this.fruitImgs.length === 0) {
            console.error("Error: fruitImgs is undefined or empty in SmoothieDisplay!");
            return;  // Stop execution if there's an issue
        }
    
        let xPos = this.x;
        for (let fruit of this.smoothieIngredients) {
            let index = fruitList.indexOf(fruit); 
            if (index !== -1) { 
                image(fruitImgs[index], xPos, this.y, 50, 50);
                xPos += 60; 
            }
        }
    }
}