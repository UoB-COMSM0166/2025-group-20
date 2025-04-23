class GameCursorEffects {
  constructor() {
    this.trail = [];
    this.maxTrail = 50;
    this.scratchTrail = [];
    this.fadeSpeed = 1.5;
    this.maxScratchLength = 30;
    this.baseTaper = 15;
  }

  // --- general cursor effect ---

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

  // --- mousePressed indent cursor effect ---

  scratchCursorEffect () {
      if (mouseIsPressed) {
        this.scratchTrail.push({
          x: mouseX,
          y: mouseY,
          alpha: 255
        });
        if (this.scratchTrail.length > this.maxScratchLength) { 
          this.scratchTrail.shift(); 
        }
      } else if (this.scratchTrail.length > 0) {
        for (let point of this.scratchTrail) {
          point.alpha -= this.fadeSpeed;
        }
        this.scratchTrail = this.scratchTrail.filter(p => p.alpha > 0);
      }
  
      push();
      noStroke();
      for (let i = 1; i < this.scratchTrail.length; i++) {
        let p1 = this.scratchTrail[i - 1];
        let p2 = this.scratchTrail[i];
  
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        let angle = atan2(dy, dx);
  
        let progress = i / this.scratchTrail.length;
        let taper = this.baseTaper * (1 - abs(0.5 - progress) * 2); 
        let alpha = min(p1.alpha, p2.alpha);

        // --- light brown edges on the shape for dimension ---

        fill(150, 95, 45, alpha * 0.3);
        beginShape();
        vertex(p1.x - taper * 0.4 * sin(angle), p1.y + taper * 0.4 * cos(angle));
        vertex(p1.x - taper * 0.2 * sin(angle), p1.y + taper * 0.2 * cos(angle));
        vertex(p2.x - taper * 0.2 * sin(angle), p2.y + taper * 0.2 * cos(angle));
        vertex(p2.x - taper * 0.4 * sin(angle), p2.y + taper * 0.4 * cos(angle));
        endShape(CLOSE);
  
        beginShape();
        vertex(p1.x + taper * 0.4 * sin(angle), p1.y - taper * 0.4 * cos(angle));
        vertex(p1.x + taper * 0.2 * sin(angle), p1.y - taper * 0.2 * cos(angle));
        vertex(p2.x + taper * 0.2 * sin(angle), p2.y - taper * 0.2 * cos(angle));
        vertex(p2.x + taper * 0.4 * sin(angle), p2.y - taper * 0.4 * cos(angle));
        endShape(CLOSE);

        // --- dark brown indent/scratch/burn line ---
  
        fill(62, 35, 25, alpha);
        beginShape();
        vertex(p1.x - taper * 0.3 * sin(angle), p1.y + taper * 0.3 * cos(angle));
        vertex(p1.x + taper * 0.3 * sin(angle), p1.y - taper * 0.3 * cos(angle));
        vertex(p2.x + taper * 0.3 * sin(angle), p2.y - taper * 0.3 * cos(angle));
        vertex(p2.x - taper * 0.3 * sin(angle), p2.y + taper * 0.3 * cos(angle));
        endShape(CLOSE);
      }
  
      pop();

  }
}
