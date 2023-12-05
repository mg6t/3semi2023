let numDrops = 100; // 雨滴の数
let drops = [];
let backgroundImage;
const GRAVITY = 9.8;

function setup() {
  createCanvas(800, 600);
  backgroundImage = loadImage("cloud2.jpg");
  // 画像のサイズをキャンバスのサイズに合わせる
  backgroundImage.resize(width, height);
  for (let i = 0; i < numDrops; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  // background(200);
  image(backgroundImage, 0, 0);
  for (let i = 0; i < numDrops; i++) {
    drops[i].fall();
    drops[i].display();
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.ySpeed = random(5, 10);
    this.landed = false;
  }

  reset() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.ySpeed = random(5, 10);
    this.landed = false;
  }

  fall() {
    if (!this.landed) {
      this.y += this.ySpeed;
      this.ySpeed += GRAVITY / 60; // 重力
      if (this.y > height) {
        this.y = height;
        this.landed = true;
        this.makeRipple(); // 着地で波紋を生成
        this.reset(); // 雨滴を再配置して再利用
      }
    }
  }

  display() {
    stroke(0, 50, 200); // 雨滴の色
    if (!this.landed) {
      let viewOffset = 50; // 視点のオフセット
      line(this.x, this.y + viewOffset, this.x, this.y - this.ySpeed + viewOffset); // 雨滴の軌跡
    }
  }

  makeRipple() {
    noFill();
    stroke(0, 50, 200, 100); // 波紋の色
    let rippleSize = 10;
    let rippleHeight = 20; // 波紋の高さ
    for (let r = rippleSize; r > 0; r -= 0.5) {
      ellipse(this.x, this.y - rippleHeight, r * 2, r);
    }
  }
}
