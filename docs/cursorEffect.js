

let trail = [];
const maxTrail = 50;

function cursorEffect() {

  trail.push({ x: mouseX, y: mouseY, alpha: 255 });

  if (trail.length > maxTrail) {
    trail.shift();
  }

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
//I actually don't know if this bit underneath is necessary 
if (typeof module !== "undefined") {
  module.exports = cursorEffect;
}
