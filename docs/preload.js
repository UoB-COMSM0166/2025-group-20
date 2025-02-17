function preload() {
    // loads material used in start screen
    gameFont = loadFont('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/gameFont.otf');
    appleImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/apple.png');
    bg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/923cd18c3e0c776d146c9cb4e9bf10b24d488e40/docs/Background%20Images/Game%20Screen%20Background.png');
    lifeImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/life.png');
    lifelostImg = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/54b989cf2c28d627c787aa7f95a2c2dc414c2589/docs/Images/lifelost.png');
    
    // loads fruit images to the fruitImgs array
    for (var i = 0; i < fruitList.length; i++) {
      fruitImgs[i] = loadImage('https://raw.githubusercontent.com/UoB-COMSM0166/2025-group-20/main/docs/Images/' + fruitList[i] + '.png');
    }
  }
  