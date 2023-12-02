// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  // Is the Mover in the Liquid?
  contains(mover) {
    //波の中にいるかどうか
    let centerX = mover.position.x;
    let centerY = mover.position.y;
    let waveHeight = (sin(centerX * 0.05)-0.5)* 20;
    
    return (
      centerX > this.x &&
      centerX < this.x + this.w &&
      centerY > this.y + waveHeight &&
      centerY < this.y + this.h
    );
  }

  // Calculate drag force
  calculateDrag(mover) {
    // Magnitude is coefficient * speed squared
    let speed = mover.velocity.mag();
    let dragMagnitude = this.c * speed * speed;

    // Direction is inverse of velocity
    let dragForce = mover.velocity.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }

  display() {
    noStroke();
    fill(0, 0, 255);
    //波を書く
    let detail = 5; // Adjust the level of detail
    for (let i = 0; i < this.w; i += detail) {
      let waveHeight = sin((this.x + i) * 0.05) * 20;
      rect(this.x + i, this.y + waveHeight, detail, this.h - waveHeight);
    }
  }
}