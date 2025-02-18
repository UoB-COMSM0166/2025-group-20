function drawGameOver() {
    background('black');
    textAlign(CENTER, CENTER);
    textFont('Times New Roman');
    fill('red');
    textSize(50);
    
    //text(string, x, y, width, height);  Optional width and height for bounding box
    text('GAME', width / 2, height / 2.25);
    text('OVER', width / 2, height / 1.75);

  }
