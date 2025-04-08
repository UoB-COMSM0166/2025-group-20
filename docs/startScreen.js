let tutorialBtn;
let easyModeButton;
let hardModeButton;
let onePlayerButton;
let twoPlayerButton;

function drawStartScreen() {
    background(bg);
    textAlign(CENTER, CENTER);
    textFont(gameFont);
    fill('white');
    stroke('black')
    strokeWeight(6);
    textSize(100);
    text('Smoothie Operator', width / 2, height / 8);
    border();
    tutorialButton();
    modeButtons();
    startGame();
    highestScore.display();

  }
  function keyPressed() {
    if (keyCode === ENTER) {
      freshGameScreen(); // changes to game screen
    }
  }  

  function tutorialButton() {
    if (!tutorialBtn){

      tutorialBtn = createButton('TUTORIAL');
      tutorialBtn.style('font-size', '30');
      tutorialBtn.style('font-family', 'gameFont');
      tutorialBtn.style('text-align', 'center');
      tutorialBtn.style('background-color', '#FCF3CF');
      tutorialBtn.style('border', '3px solid black');
      tutorialBtn.style('border-radius', '8px');
      tutorialBtn.style('color', 'black');
      tutorialBtn.size(250, 50); 
      tutorialBtn.position((windowWidth / 2) - 125, (windowHeight / 3 + 20)); 


      tutorialBtn.mouseMoved(() => {
        tutorialBtn.style('box-shadow', '5px 5px 5px seagreen');
      })

      tutorialBtn.mouseOut(() => {
        tutorialBtn.style('box-shadow', 'none');
      });

      tutorialBtn.mousePressed(() => {
        mode = 1; // Goes to instructions screen
        tutorialBtn.hide();
      });
      tutorialBtn.show();
    }
  }

  function modeButtons() {

    textSize(30);
    textFont('gameFont');
    textAlign(CENTER, CENTER);
    fill('white');
    stroke('black')
    strokeWeight(2);
    text('Choose your recipe for the game:', windowWidth / 2 , windowHeight / 2 - 20);

    if (!easyModeButton){

      easyModeButton = createButton('EASY MODE');
      easyModeButton.style('font-size', '30');
      easyModeButton.style('font-family', 'gameFont');
      easyModeButton.style('text-align', 'center');
      easyModeButton.style('background-color', '#c2ac53'); // default is easy ?

      easyModeButton.style('border', '3px solid black');
      easyModeButton.style('border-radius', '8px');
      easyModeButton.style('color', 'black');
      easyModeButton.size(250, 50); 
      easyModeButton.position((windowWidth / 2) - 250, (windowHeight / 2));

      easyModeButton.mouseMoved(() => {
        easyModeButton.style('box-shadow', '5px 5px 5px seagreen');
      })

      easyModeButton.mouseOut(() => {
        easyModeButton.style('box-shadow', 'none');
      });

      easyModeButton.mousePressed(() => {
        difficulty = 'easy';
        hardModeButton.style('background-color', '#FCF3CF');
        easyModeButton.style('background-color', '#c2ac53');
        easyModeButton.hide();
      })

      easyModeButton.show();

    }

    if (!hardModeButton){

      hardModeButton = createButton('HARD MODE');
      hardModeButton.style('font-size', '30');
      hardModeButton.style('font-family', 'gameFont');
      hardModeButton.style('text-align', 'center');
      hardModeButton.style('background-color', '#FCF3CF');
      hardModeButton.style('border', '3px solid black');
      hardModeButton.style('border-radius', '8px');
      hardModeButton.style('color', 'black');
      hardModeButton.size(250, 50); 
      hardModeButton.position((windowWidth / 2) + 10, (windowHeight / 2));
      
      hardModeButton.mouseMoved(() => {
        hardModeButton.style('box-shadow', '5px 5px 5px seagreen');
      })

      hardModeButton.mouseOut(() => {
        hardModeButton.style('box-shadow', 'none');
      });
      
      hardModeButton.mousePressed(() => {
        difficulty = 'hard';
        hardModeButton.style('background-color', '#c2ac53');
        easyModeButton.style('background-color', '#FCF3CF');
        hardModeButton.hide();
      })
      hardModeButton.show;
    }

    easyModeButton.mousePressed(() => {
      difficulty = 'easy';
      easyModeButton.style('background-color', '#c2ac53');
      hardModeButton.style('background-color', '#FCF3CF');
    });

    // for hard mode
    hardModeButton.mousePressed(() => {
      difficulty = 'hard';
      easyModeButton.style('background-color', '#FCF3CF');
      hardModeButton.style('background-color', '#c2ac53');
    });

    if (!onePlayerButton){

      onePlayerButton = createButton('ONE PLAYER');
      onePlayerButton.style('font-size', '30');
      onePlayerButton.style('font-family', 'gameFont');
      onePlayerButton.style('text-align', 'center');
      onePlayerButton.style('background-color', '#c2ac53'); // default is easy ?

      onePlayerButton.style('border', '3px solid black');
      onePlayerButton.style('border-radius', '8px');
      onePlayerButton.style('color', 'black');
      onePlayerButton.size(250, 50); 
      onePlayerButton.position((windowWidth / 2) - 250, (windowHeight / 2) + 70);

      onePlayerButton.mouseMoved(() => {
        onePlayerButton.style('box-shadow', '5px 5px 5px seagreen');
      })

      onePlayerButton.mouseOut(() => {
        onePlayerButton.style('box-shadow', 'none');
      });

      onePlayerButton.mousePressed(() => {
        twoPlayerButton.style('background-color', '#FCF3CF');
        onePlayerButton.style('background-color', '#c2ac53');
        onePlayerButton.hide();
      })

      onePlayerButton.show();
    }

    if (!twoPlayerButton){

      twoPlayerButton = createButton('TWO PLAYERS');
      twoPlayerButton.style('font-size', '30');
      twoPlayerButton.style('font-family', 'gameFont');
      twoPlayerButton.style('text-align', 'center');
      twoPlayerButton.style('background-color', '#FCF3CF'); 

      twoPlayerButton.style('border', '3px solid black');
      twoPlayerButton.style('border-radius', '8px');
      twoPlayerButton.style('color', 'black');
      twoPlayerButton.size(250, 50); 
      twoPlayerButton.position((windowWidth / 2) + 10, (windowHeight / 2) + 70);

      twoPlayerButton.mouseMoved(() => {
        twoPlayerButton.style('box-shadow', '5px 5px 5px seagreen');
      })

      twoPlayerButton.mouseOut(() => {
        twoPlayerButton.style('box-shadow', 'none');
      });

      twoPlayerButton.mousePressed(() => {
        onePlayerButton.style('background-color', '#FCF3CF');
        twoPlayerButton.style('background-color', '#c2ac53');
        twoPlayerButton.hide();
      })

      twoPlayerButton.show();
    }
  }  

let yWaveSpeed = 0.03;   
let xWaveSpeed = 0.03;   
let yWaveSize = 20;      
let xWaveSize = 20;     
let yWaveOffset = 0;     
let xWaveOffset = 0;     

function startGame() {
  textAlign(CENTER, CENTER);
  textFont('gameFont');
  fill('white');
  textSize(40);

  let textString = "Press ENTER to start game!";
  let textLength = textString.length;

  for (let i = 0; i < textLength; i++) {
    let char = textString.charAt(i);

    let yWave = sin(frameCount * yWaveSpeed + i * 0.5 + yWaveOffset) * yWaveSize;
    let xWave = cos(frameCount * xWaveSpeed + i * 0.5 + xWaveOffset) * xWaveSize;
    let xPos = (windowWidth / 2 + 30) + xWave + (i - textLength / 2) * 32; // spacing
    let yPos = windowHeight / 8 + 480 + yWave;

    text(char, xPos, yPos);
  }
}

  function border() {

   let fruitTypes = [
    { img: fruitImgs[0], positions: [{x:windowWidth / 2 - 435, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 125, y: windowHeight / 8 + 100},
      {x:windowWidth / 2 + 475, y: windowHeight / 8 + 310}, {x:windowWidth / 2 + 125, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 435, y: windowHeight / 8 + 520}] }, // apple

    { img: fruitImgs[1], positions: [{x:windowWidth / 2 - 365, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 195, y: windowHeight / 8 + 100},
      {x:windowWidth / 2 + 475, y: windowHeight / 8 + 380}, {x:windowWidth / 2 + 55, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 505, y: windowHeight / 8 + 520}] }, // banana
    
    { img: fruitImgs[2], positions: [{x:windowWidth / 2 - 295, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 265, y: windowHeight / 8 + 100},
      {x:windowWidth / 2 + 475, y: windowHeight / 8 + 450}, {x:windowWidth / 2 - 15, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 505, y: windowHeight / 8 + 450}] }, // blueberry

    { img: fruitImgs[3], positions: [{x:windowWidth / 2 - 225, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 335, y: windowHeight / 8 + 100},
      {x:windowWidth / 2 + 475, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 85, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 505, y: windowHeight / 8 + 380}] },

    { img: fruitImgs[4], positions: [{x:windowWidth / 2 - 155, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 405, y: windowHeight / 8 + 100},
      {x:windowWidth / 2 + 405, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 155, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 505, y: windowHeight / 8 + 310} ] },

    { img: fruitImgs[5], positions: [{x:windowWidth / 2 - 85, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 475, y: windowHeight / 8 + 100},
      {x:windowWidth / 2 + 335, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 225, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 505, y: windowHeight / 8 + 240} ] },

    { img: fruitImgs[6], positions: [{x:windowWidth / 2 - 15, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 475, y: windowHeight / 8 + 170},
      {x:windowWidth / 2 + 265, y: windowHeight / 8 + 520}, {x:windowWidth / 2 - 295, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 505, y: windowHeight / 8 + 170}] },
 
    { img: fruitImgs[7], positions: [{x:windowWidth / 2 - 505, y:windowHeight / 8 + 100}, {x:windowWidth / 2 + 55,  y:windowHeight / 8 + 100}, 
      {x:windowWidth / 2 + 475, y: windowHeight / 8 + 240}, {x:windowWidth / 2 + 195, y: windowHeight / 8 + 520},
      {x:windowWidth / 2 - 365, y: windowHeight / 8 + 520}] }
  ]; 
    
    for (let i = 0; i < fruitTypes.length; i++) {
      for (let j = 0; j < fruitTypes[i].positions.length; j++) {
        let fruit = fruitTypes[i];
        let position = fruit.positions[j];
        image(fruit.img, position.x, position.y, 50, 50);
      }
    }
}


  




