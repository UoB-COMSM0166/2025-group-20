class CursorEffect {
  constructor() {
    this.trail = [];
    this.maxTrail = 50;
  }

  // --- general cursor trail effect ---

  cursorEffect() {
    this.trail.push({ x: mouseX, y: mouseY, alpha: 255 });
    if (this.trail.length > this.maxTrail) { this.trail.shift(); }
    noStroke();
    for (let i = 0; i < this.trail.length; i++) {
      let t = this.trail[i];
      fill(255, 255, 255, t.alpha);
      drawingContext.shadowColor = color(255, 255, 255, t.alpha);
      rectMode(CENTER);
      rect(t.x, t.y, 10, 10);
      t.alpha -= 5;
    }
  }

  resetCursor() {
    this.trail = [];
  }
}