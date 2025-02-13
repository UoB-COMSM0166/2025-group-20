// Cursor Effect Script (cursorEffect.js)

// Store trail data
let trail = [];
const maxTrail = 50;

function cursorEffect() {
  // Add the current mouse position to the trail
  trail.push({ x: mouseX, y: mouseY, alpha: 255 });

  // Remove the oldest trail segment if it exceeds maxTrail
  if (trail.length > maxTrail) {
    trail.shift();
  }

  // Render the glowing trail
  noStroke();
  for (let i = 0; i < trail.length; i++) {
    let t = trail[i];
    fill(255, 255, 255, t.alpha);
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = color(255, 255, 255, t.alpha);
    rectMode(CENTER);
    rect(t.x, t.y, 10, 10);

    // Reduce opacity to create a fading effect
    t.alpha -= 5;
  }
}

// Export the function if using ES6 modules
if (typeof module !== "undefined") {
  module.exports = cursorEffect;
}
