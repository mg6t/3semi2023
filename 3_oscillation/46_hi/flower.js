let windmills = [];
let leaves = [];
let commonSpeed; // 全ての風車に適用する共通の速度
let backgroundImage;

function preload() {
  // 画像を読み込む
  backgroundImage = loadImage('ksua.jpg');
}

function setup() {
  createCanvas(900, 800);
  angleMode(RADIANS);

  // 風車の数を指定
  let numWindmills = 20;

  // 葉っぱの数を指定
  let numLeaves = 20;

  // 共通の速度を設定
  commonSpeed = 5;

  // 風車の初期位置を設定
  for (let i = 0; i < numWindmills; i++) {
    let x = random(width);
    let y = random(height);
    windmills.push(new Windmill(x, y));
  }

  // 葉っぱの初期位置を設定
  for (let i = 0; i < numLeaves; i++) {
    let x = random(width);
    let y = random(height);
    leaves.push(new Leaf(x, y));
  }
}

function draw() {
  // 背景画像を描画
  image(backgroundImage, 0, 0, width, height);

  for (let i = 0; i < leaves.length; i++) {
    leaves[i].display();
  }

  for (let i = 0; i < windmills.length; i++) {
    windmills[i].update();
    windmills[i].display();
  }
}

class Windmill {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.width = 128;
    this.height = 32;
  }

  update() {
    this.angle += commonSpeed;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    noStroke();
    fill(240, 99, 164);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}

class Leaf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotationAngle = random(TWO_PI); // ランダムな角度を初期化
  }

  display() {
    noStroke();
    fill(50, 205, 50); // 緑色

    // 葉っぱの形状をランダムな角度で描画
    push();
    translate(this.x, this.y);
    rotate(this.rotationAngle);
    beginShape();
    vertex(0, 0);
    bezierVertex(10, -15, 5, -30, 0, -40);
    bezierVertex(-5, -30, -10, -15, 0, 0);
    endShape(CLOSE);
    pop();
  }
}
