class Particle {

  constructor(n, theta) {
    this.n = n;
    this.theta = theta;
    this.position = createVector((150 + this.n) * cos(this.theta), (150 + this.n) * sin(this.theta));
    let tangential = createVector(sin(this.theta), -cos(this.theta));
    this.acceleration = tangential.copy().mult(random(0.001, 0.002));
    this.velocity = tangential.copy().mult(random(0.04, 0.05));
    this.lifespan = 300;
  }

  run() {
    this.update();
    this.display();
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 0.4;
  }

  display() {
    stroke(218, 179, 0, this.lifespan);
    strokeWeight(2);
    fill(218, 179, 0, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  isDead() {
    if (this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
