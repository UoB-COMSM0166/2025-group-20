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

  if(mouseIsPressed){
  let insideEllipseCheck = (mouseX-ellCentreX)*(mouseX-ellCentreX) / ((ellWidth/2)*(ellWidth/2)) + 
    ((mouseY-ellCentreY)*(mouseY-ellCentreY))/((ellHeight/2)*(ellHeight/2));
    if(insideEllipseCheck < 1 && mode == 4){
        //console.log("return Home");
      mode = 0;
    
    }
 }
}
//(x-h)^2/a^2 + (y-k)^2/b^2 <= 1 //area detection for ellipse

  




  


// function startOverButton(){
//   let ellWidth = 150;
//   let ellHeight = 75;

//   let ellCentreX = 550;
//   let ellCentreY = 400;

//   fill('#8B0000');
//   ellipse(550,400,ellWidth,ellHeight);
  
//   fill('white');
//   textSize(20);
//   textFont('Comic Sans');
//   text("Start Over", 550,400);
  
//   if(mouseIsPressed){
//     if((mouseX-ellCentreX)*(mouseX-ellCentreX) / ((ellWidth/2)*(ellWidth/2)) + 
//     ((mouseY-ellCentreY)*(mouseY-ellCentreY))/((ellHeight/2)*(ellHeight/2)) < 1 && mode == 4){
//     //console.log("return Home");
//          freshGameScreen();
//        }
//   }
// }


function startOverButton(){
  image(bombImg, width/3.5 , height/3.5 ,200, 200);
  posx1 = width/3.5;
  posx2 = width/3.5 + 200;
  posy1 = height/3.5;
  posy2 = height/3.5 + bombImg.height;
  
  fill('white');
  textSize(20);
  textFont('Comic Sans');
  text("Start Over", width/2.75, height/2.3);

  if(mouseIsPressed){
    if(mouseX > posx1 && mouseX < posx2 && mouseY > posy1 && mouseY < posy2 && mode == 4){
      freshGameScreen();
    }
  }
}

  