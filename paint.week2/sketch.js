function setup() {
  createCanvas(940, 795);
  background("white");
  // toolbox 
  fill("grey");
  rect(0, 0, 940, 100);
  fill("white");
  rect(100, 0, 100, 50);
  fill("black");
  textSize(25);
  text('Erase', 117, 30);
}

function pickColour () {
    // colour blocks
  fill("red");
  square(0, 0, 20);
  fill("orange");
  square(20, 0, 20);
  fill("yellow");
  square(40, 0, 20);
  fill("lightgreen");
  square(0, 20, 20);
  fill("lightblue");
  square(20, 20, 20);
  fill("purple");
  square(40, 20, 20);
  fill("black");
  square(0, 40, 20);
  fill("grey");
  square(20, 40, 20);
  fill("brown");
  square(40, 40, 20);
  fill("#8d5524");
  square(0, 60, 20);
  fill("#ffdbac")
  square(20, 60, 20);
  fill("#f1c27d");
  square(40, 60, 20);
  fill("#e0ac69");
  square(0, 80, 20);
  fill("#c68642");
  square(20, 80, 20);
  fill("	#e35d6a");
  square(40, 80, 20);
}
function draw() {
  brushX = mouseX;
  brushY = mouseY;
  
  pickColour();
  
  if (mouseIsPressed) {
    if((brushX >= 0 && brushX <= 20) && (brushY >= 0 && brushY <= 20)){
      pickStroke(255, 0 , 0);
    }
    else if((brushX >= 20 && brushX <= 40) && (brushY >= 0 && brushY <= 20)){
      pickStroke(255, 165, 0);
    }
    else if((brushX >= 40 && brushX <= 60) && (brushY >= 0 && brushY <= 20)){
      pickStroke(255, 255 , 0);
    }
    else if((brushX >= 0 && brushX <= 20) && (brushY >= 20 && brushY <= 40)){
      pickStroke(144, 238, 144);
    }
    else if((brushX >= 20 && brushX <= 40) && (brushY >= 20 && brushY <= 40)){
      pickStroke(173, 216, 230);
    }
    else if((brushX >= 40 && brushX <= 60) && (brushY >= 20 && brushY <= 40)){
      pickStroke(128, 0, 128);
    }
    else if((brushX >= 0 && brushX <= 20) && (brushY >= 40 && brushY <= 60)){
      pickStroke(0, 0, 0);
    }
    else if((brushX >= 20 && brushX <= 40) && (brushY >= 40 && brushY <= 60)){
      pickStroke(128, 128, 128);
    }
    else if((brushX >= 40 && brushX <= 60) && (brushY >= 40 && brushY <= 60)){
      pickStroke(165, 42, 42);
    }
    else if((brushX >= 0 && brushX <= 20) && (brushY >= 60 && brushY <= 80)){
      pickStroke(141, 85, 36);
    }
    else if((brushX >= 20 && brushX <= 40) && (brushY >= 60 && brushY <= 80)){
      pickStroke(255, 219, 172);
    }
    else if((brushX >= 40 && brushX <= 60) && (brushY >= 60 && brushY <= 80)){
      pickStroke(241, 194, 125);
    }
    else if((brushX >= 0 && brushX <= 20) && (brushY >= 80 && brushY <= 100)){
      pickStroke(224, 172, 105);
    }
    else if((brushX >= 20 && brushX <= 40) && (brushY >= 80 && brushY <= 100)){
      pickStroke(198, 134, 66);
    }
    else if((brushX >= 40 && brushX <= 60) && (brushY >= 80 && brushY <= 100)){
      pickStroke(227, 93, 106);
    }
    else if((brushX >= 100 && brushX <= 200) && (brushY >= 0 && brushY <= 50)){
       pickStroke(255, 255, 255);
    }
    strokeWeight(5);
    line(brushX, brushY, pmouseX, pmouseY);
  }
}

function pickStroke(x, y, z) {
  stroke(x, y, z);
}
