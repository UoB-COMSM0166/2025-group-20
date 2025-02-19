//correct cut on each fruit +10
//completion of recipe +20
//fruit points accumulate

var highestScore = 0;

class PointSystem{
    constructor(){
        this.pointsPerGame = 0;
    }

    correctCut(){
        this.pointsPerGame += 10;
        this.updateHighestScore();
    }

    recipeComplete(){
        this.pointsPerGame += 20;
        this.updateHighestScore();
    }

    updateHighestScore(){
        if(this.pointsPerGame > highestScore){
            highestScore = this.pointsPerGame;
        }
    }

}

class PointsDisplay {
    constructor(pointsPerGame) {
        this.pointsPerGame = pointsPerGame;
        this.x = width - 40;
        this.y = height/10;
    }

    display(){
        textAlign(RIGHT, TOP); // Align to top-right
        textSize(20);
        fill('white');
        text('Current Points: ' + this.pointsPerGame, this.x, this.y);
        
    }
    
}

class HighestPointDisplay {
    constructor(highestPoint) {
        this.highestPoint = highestPoint;
        this.x = width - 40;
        this.y = height/23;
    }

    display(){
      textAlign(RIGHT, TOP); // Align to top-right
        textSize(15);
        fill('white');
          text('Highest Score: ' + this.highestPoint,this.x,this.y);
    }

}
