class Vehicle {
  constructor(x, y, img) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 5;
    this.maxForce = 0.2;
    this.img = img;
    this.stopped = false;
  }

  arrive(target) {
    if (!this.stopped) {
      let desired = p5.Vector.sub(target, this.pos);
      let d = desired.mag();
      let speed = this.maxSpeed;
      if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxSpeed);
      }
      desired.setMag(speed);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); // 速度の更新後に力をリセットする
  }

  show() {
    // Draw the image at the vehicle's position
    imageMode(CENTER);
    image(this.img, this.pos.x, this.pos.y, 48, 48);
  }

  stop() {
    this.stopped = true;
    this.vel.mult(0); // 速度をゼロにする
  }
}
