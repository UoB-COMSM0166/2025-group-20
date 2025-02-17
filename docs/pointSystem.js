//correct cut on each fruit +10
//completion of recipe +20
//fruit points accumulate

var HighestScore = 0;

class pointSystem{
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
        if(this.PointsPerGame > HighestScore){
            HighestScore = this.PointsPerGame;
        }
    }

}

class PointsDisplay {
    constructor(PointsPerGame) {
        this.PointsPerGame = PointsPerGame;
        this.x = width - 40;
        this.y = height/10;
    }

    display(){
        textAlign(RIGHT, TOP); // Align to top-right
        textSize(20);
        fill('white');
        text('Current Points: ' + this.PointsPerGame,this.x,this.y);
        
    }
    
}

class HighestPointDisplay {
    constructor(HighestPoint) {
        this.HighestPoint = HighestPoint;
        this.x = width - 40;
        this.y = height/23;
    }

    display(){
      textAlign(RIGHT, TOP); // Align to top-right
        textSize(15);
        fill('white');
          text('Highest Score: ' + this.HighestPoint,this.x,this.y);
    }

}