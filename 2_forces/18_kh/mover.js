// mover.js

class Mover {
  constructor() {
    this.mass = 1;
    this.position = createVector(113, 30);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.showRect = true; // rect の表示非表示を制御するフラグ
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    this.checkCollision(); // 位置を更新した後に衝突をチェック
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, 20, 20);

    // showRect が true の場合のみ rect を表示
    if (this.showRect) {
      fill(255);
      rect(320, 180, 30, 30);
    }
  }

  checkCollision() {
    // ellipse と rect が衝突しているかをチェック
    let d = dist(this.position.x, this.position.y, 335, 195);
    if (d < 25) {
      this.showRect = false; // 衝突したら showRect を false に設定
      // rect が消えた瞬間にタイマーを停止
      stopTimer();
    }
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }
}
