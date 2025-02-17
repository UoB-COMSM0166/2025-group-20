//correct cut on each fruit +10
//completion of recipe +20
//fruit points accumulate

var HighestScore = 0;

class pointsystem{
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