// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
  constructor(x, y, mass) {
    this.mass = mass;
    this.radius = mass * 20;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.value = random([1, 5, 10, 50, 100, 500]);
  }
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // position changes by velocity
    this.position.add(this.velocity);
    // We must clear acceleration each frame
    this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    strokeWeight(1.5);

    // 選ばれた数字を円の中央に描画
    fill(0);
    textSize(12);
    textAlign(CENTER, CENTER);
    if(this.radius/20<0.6){
      fill(184,134,11);
      ellipse(this.position.x, this.position.y, this.radius * 2);
      text("5", this.position.x, this.position.y);
    }else if(this.radius/20<0.7){
      fill(139,69,19);
      ellipse(this.position.x, this.position.y, this.radius * 2);
      text("10", this.position.x, this.position.y);
    }else if(this.radius/20<0.8){
      fill(169,169,169);
      ellipse(this.position.x, this.position.y, this.radius * 2);
      text("50", this.position.x, this.position.y);
    }else if(this.radius/20<0.9){
      fill(169,169,169);
      ellipse(this.position.x, this.position.y, this.radius * 2);
      text("100", this.position.x, this.position.y);
    }else{
      fill(255,215,0);
      ellipse(this.position.x, this.position.y, this.radius * 2);
      text("500", this.position.x, this.position.y);
    }
    
  }

  // Bounce off bottom of window
  checkEdges() {
    if (this.position.y > height - this.radius) {
      this.velocity.y *= -0.9; // A little dampening when hitting the bottom
      this.position.y = height - this.radius;
    }
  }
}