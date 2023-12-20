let angle = 0;

function setup() {
  createCanvas(800, 400);
}

function vectorProjection(a, b) {
  let bCopy = b.copy().normalize();
  let sp = a.dot(bCopy);
  bCopy.mult(sp);
  return bCopy;
}

function draw() {
  background(0, 10);
  translate(width / 2, height / 2);
  fill(252, 238, 33);

  // ベクトルの座標を計算
  let x = width / 3 * cos(angle);
  let y = height / 4 * sin(angle);

  // x軸方向に進む円を描画
  stroke(252, 383, 33);
  line(0, 0, x, y);
  circle(x, y, random(5, 30));

  // ベクトル射影を計算して描画
  let v = createVector(x, y);
  let projection = vectorProjection(v, createVector(1, 0)); // x軸方向に対するベクトル射影
  stroke(0, 255, 0);
  line(0, 0, projection.x, projection.y);

  // 扇形の描画
  noFill();
  stroke(0, 255, 0, 100);
  beginShape();
  vertex(0, 0);
  for (let i = 0; i <= angle; i += 0.01) {
    let px = width / 3 * cos(i);
    let py = height / 4 * sin(i);
    vertex(px, py);
  }
  angle += 0.02;
}