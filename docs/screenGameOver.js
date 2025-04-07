function drawGameOver() {
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

  if(mouseIsPressed){
  let insideEllipseCheck = (mouseX-ellCentreX)*(mouseX-ellCentreX) / ((ellWidth/2)*(ellWidth/2)) + 
    ((mouseY-ellCentreY)*(mouseY-ellCentreY))/((ellHeight/2)*(ellHeight/2));
    if(insideEllipseCheck < 1 && mode === 4){
        //console.log("return Home");
      mode = 0;
    
    }
 }
}



function startOverButton(){
  image(bombImg, width/3.5 , height/3.5 ,200, 200);
    let posx1 = width / 3.5;
    let posx2 = width / 3.5 + 200;
    let posy1 = height / 3.5;
    let posy2 = height / 3.5 + bombImg.height;
  
  fill('white');
  textSize(20);
  textFont('Comic Sans');
  text("Start Over", width/2.75, height/2.3);

  if(mouseIsPressed){
    if(mouseX > posx1 && mouseX < posx2 && mouseY > posy1 && mouseY < posy2 && mode === 4){
      freshGameScreen();
    }
  }
}

  