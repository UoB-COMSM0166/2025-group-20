//correct cut on each fruit +10
//completion of recipe +20
//fruit points accumulate
class PointSystem{
    constructor(){
        this.pointsPerGame = 0;
        this.x = width - 40;
        this.y = height/10;
    }
    
    correctCut(){
        this.pointsPerGame += 10;
    }

    recipeComplete(){
        this.pointsPerGame += 20;
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
    
    updateHighestScore(gameScore){
        if(gameScore > this.highestPoint){
            this.highestPoint = gameScore;
        }
    }

    display(){
      textAlign(RIGHT, TOP); // Align to top-right
        textSize(15);
        fill('white');
          text('Highest Score: ' + this.highestPoint,this.x,this.y);
    }

}
