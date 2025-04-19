let trail = [];
const maxTrail = 50;
let module;
let scratchMarks = [];
/*const baseColor = "#5e331c";   
const darkScratch = "#3e2413";  
const lightScratch = "#754528"; */


function cursorEffect() {

  trail.push({ x: mouseX, y: mouseY, alpha: 255 });
  if (trail.length > maxTrail) { trail.shift(); }


  noStroke();
  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    fill(255, 255, 255, t.alpha);
    // drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = color(255, 255, 255, t.alpha);
    rectMode(CENTER);
    rect(t.x, t.y, 10, 10);

    t.alpha -= 5;
  }
}

function scratchCursorEffect () {
  if (mouseIsPressed) {
    scratchMarks.push({
      x1: pmouseX,
      y1: pmouseY,
      x2: mouseX,
      y2: mouseY,
      alpha: 255
    });
  }

  for (let i = scratchMarks.length - 1; i >= 0; i--) {
    let s = scratchMarks[i];
    push();

    // ⬅️ Outer lighter edge (wider glow)
    strokeWeight(10);  
    stroke(117, 69, 40, s.alpha); // lighter than base brown
    line(s.x1, s.y1, s.x2, s.y2);

    // ⬛ Dark central scratch
    strokeWeight(5);
    stroke(62, 36, 19, s.alpha); // dark inner line
    line(s.x1, s.y1, s.x2, s.y2);

    pop();

    s.alpha -= 2;
    if (s.alpha <= 0) scratchMarks.splice(i, 1);
  }
}