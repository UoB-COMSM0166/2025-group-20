class FruitBorder {
    constructor () {
        this.fruitTypes = [
            { img: fruitImgs[0], positions: [{x:windowWidth / 2 - 435, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 125, y: windowHeight / 8 + 100},
                {x:windowWidth / 2 + 475, y: windowHeight / 8 + 310}, {x:windowWidth / 2 + 125, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 435, y: windowHeight / 8 + 520}] }, 
            { img: fruitImgs[1], positions: [{x:windowWidth / 2 - 365, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 195, y: windowHeight / 8 + 100},
                {x:windowWidth / 2 + 475, y: windowHeight / 8 + 380}, {x:windowWidth / 2 + 55, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 505, y: windowHeight / 8 + 520}] },
            { img: fruitImgs[2], positions: [{x:windowWidth / 2 - 295, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 265, y: windowHeight / 8 + 100},
                {x:windowWidth / 2 + 475, y: windowHeight / 8 + 450}, {x:windowWidth / 2 - 15, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 505, y: windowHeight / 8 + 450}] },
            { img: fruitImgs[3], positions: [{x:windowWidth / 2 - 225, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 335, y: windowHeight / 8 + 100},
                {x:windowWidth / 2 + 475, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 85, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 505, y: windowHeight / 8 + 380}] },
            { img: fruitImgs[4], positions: [{x:windowWidth / 2 - 155, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 405, y: windowHeight / 8 + 100},
                {x:windowWidth / 2 + 405, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 155, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 505, y: windowHeight / 8 + 310}] },
            { img: fruitImgs[5], positions: [{x:windowWidth / 2 - 85, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 475, y: windowHeight / 8 + 100},
                {x:windowWidth / 2 + 335, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 225, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 505, y: windowHeight / 8 + 240}] },
            { img: fruitImgs[6], positions: [{x:windowWidth / 2 - 15, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 475, y: windowHeight / 8 + 170},
                {x:windowWidth / 2 + 265, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 295, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 505, y: windowHeight / 8 + 170}] },
            { img: fruitImgs[7], positions: [{x:windowWidth / 2 - 505, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 55,  y:windowHeight / 8 + 100}, 
                {x:windowWidth / 2 + 475, y: windowHeight / 8 + 240}, {x:windowWidth / 2 + 195, y: windowHeight / 8 + 520},
                {x:windowWidth / 2 - 365, y: windowHeight / 8 + 520}] }
        ]; 
    }

    draw () {
        for (let fruit of this.fruitTypes) {
            for (let pos of fruit.positions) {
                image(fruit.img, pos.x, pos.y, 50, 50);
            }
        }
    }
}