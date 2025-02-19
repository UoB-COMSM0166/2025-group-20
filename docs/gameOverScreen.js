
function drawGameOver() {

    // fill(0, 0, 0, 150); // Semi-transparent overlay
    // rect(0, 0, windowWidth, windowHeight);

    background('black');
    textAlign(CENTER, CENTER);
    textFont('Times New Roman');
    fill('red');
    textSize(50);
    
    //text(string, x, y, width, height);  Optional width and height for bounding box
    text('GAME', width / 2, height / 2.25);
    text('OVER', width / 2, height / 1.75);

    returnHomeButton();
    startOverButton();

  }

  function returnHomeButton() {
    let ellWidth = 150;
    let ellHeight = 75;
    
    let ellCentreX = 250;
    let ellCentreY = 400;
    fill('#8B0000');
    ellipse(250, 400,ellWidth,ellHeight);
    
    fill('white');
    textSize(20);
    textFont('Comic Sans');
    text("Home", 250, 400);
    
    //(x-h)^2/a^2 + (y-k)^2/b^2 <= 1 //area detection for ellipse
    
      if(mouseIsPressed){
        if((mouseX-ellCentreX)*(mouseX-ellCentreX) / ((ellWidth/2)*(ellWidth/2)) + 
        ((mouseY-ellCentreY)*(mouseY-ellCentreY))/((ellHeight/2)*(ellHeight/2)) < 1){
        //console.log("return Home");
             mode = 0;
           }
      
      }
    
  }


function startOverButton(){
  let ellWidth = 150;
  let ellHeight = 75;

  let ellCentreX = 550;
  let ellCentreY = 400;

  fill('#8B0000');
  ellipse(550,400,ellWidth,ellHeight);
  
  fill('white');
  textSize(20);
  textFont('Comic Sans');
  text("Start Over", 550,400);
  
  if(mouseIsPressed){
    if((mouseX-ellCentreX)*(mouseX-ellCentreX) / ((ellWidth/2)*(ellWidth/2)) + 
    ((mouseY-ellCentreY)*(mouseY-ellCentreY))/((ellHeight/2)*(ellHeight/2)) < 1){
    //console.log("return Home");
         freshGameScreen();
       }
  
  }
  
}
