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
        textFont(gameFont);
        fill('white');
        text('CURRENT POINTS: ', this.x - 40, this.y);
     
        textFont('sans-serif');
        text(this.pointsPerGame, this.x, this.y);
        
    }

}

class HighestPointDisplay {
    constructor(highestPoint) {
        if (document.cookie.length === 0){
            this.highestPoint = 0;
        }
        else {
            this.highestPoint = document.cookie.split("=")[1]
        }
        this.x = width - 40;
        this.y = height/23;
    }
    
    updateHighestScore(gameScore){
        if(gameScore > this.highestPoint){
            this.highestPoint = gameScore;
            document.cookie = "score=" + gameScore;
        }
    }

    display(){
        textAlign(RIGHT, TOP); // Align to top-right
        textSize(15);
        textFont(gameFont);
        fill('white');
        text('HIGHEST SCORE: ',this.x - 40,this.y);

        textFont("sans-serif");
        text(this.highestPoint, this.x,this.y);
    }
}
