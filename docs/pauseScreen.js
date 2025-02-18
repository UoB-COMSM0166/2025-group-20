let resumeButton;
let restartButton;
let quitButton;
function drawPauseScreen() {
    pauseButton.show();
    fill('rgba(0, 0, 0, 0.5)'); // Semi-transparent overlay
    rect(windowWidth / 2, windowHeight / 2, windowWidth / 2, windowHeight / 2, 20); 
    
    if (!resumeButton) { 
        resumeButton = createButton('Resume Game');
        resumeButton.style('font-size', '20px');
        resumeButton.style('font-family', 'gameFont');
        resumeButton.style('background-color', 'rgba(255, 0, 0, 0.0)');
        resumeButton.style('border', 'none');
        resumeButton.style('color', 'white');
        resumeButton.size(200, 50); 
        resumeButton.position((windowWidth / 2) - 100, (windowHeight / 2) - 25); 
    
        resumeButton.mousePressed(() => {
          mode = 2; // Goes back to game screen
          loop(); // Restarts draw loop
          resumeButton.hide(); 
          restartButton.hide();
          quitButton.hide();
        });
      }
      resumeButton.show();
      
      if (!quitButton){
        quitButton = createButton('Quit Game');
        quitButton.style('font-size', '20px');
        quitButton.style('font-family', 'gameFont');
        quitButton.style('background-color', 'rgba(255, 0, 0, 0.0)');
        quitButton.style('border', 'none');
        quitButton.style('color', 'white');
        quitButton.size(200, 50); 
        quitButton.position((windowWidth / 2) - 100, (windowHeight / 2) + 75); 


       quitButton.mousePressed(() => {
            mode = 0; // Goes back to start screen
            loop(); 
            resumeButton.hide();
            restartButton.hide(); 
            quitButton.hide();
            pauseButton.hide();
      });
    }
     quitButton.show();
 
    if (!restartButton){
        restartButton = createButton('Restart Game');
        restartButton.style('font-size', '20px');
        restartButton.style('font-family', 'gameFont');
        restartButton.style('background-color', 'rgba(255, 0, 0, 0.0)');
        restartButton.style('border', 'none');
        restartButton.style('color', 'white');
        restartButton.size(200, 50); 
        restartButton.position((windowWidth / 2) - 100, (windowHeight / 2) + 25); 

        restartButton.mousePressed(() => {
            mode = 2; // Goes back to game screen
            //lifeIcons = new LifeIcons();
            //currentRecipe  = new SmoothieRecipe();
            //gameScore = new pointSystem();
            //CurrentPointsDisplay = new PointsDisplay(gameScore);
            loop(); // Restarts draw loop
            resumeButton.hide();
            restartButton.hide(); 
            quitButton.hide();
          });
    }
    restartButton.show();

    textAlign(CENTER, CENTER);
    textSize(40);
    fill('white');
    text("Game Paused", windowWidth / 2, windowHeight / 2 - 90);
  }


  
