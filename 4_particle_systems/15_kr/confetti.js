class Confetti extends Particle {

  display() {
    fill(218, 179, 0, this.lifespan);
    stroke(218, 179, 0, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    let theta = map(this.position.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, 12, 12);
    pop();
  }
}
