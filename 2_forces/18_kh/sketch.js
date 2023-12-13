// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
  createP('Click mouse to apply wind force.');
  // タイマーのスタート時間を設定
  startTime = millis();
}

function draw() {
  background(51);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.display();
  mover.checkEdges();

  // タイマーの表示
  displayTimer();
}

function displayTimer() {
  fill(255);
  textSize(16);
  let elapsedTime = millis() - startTime;
  let seconds = Math.floor(elapsedTime / 1000);
  text('Timer: ' + seconds + ' seconds', 20, 20);
}

function stopTimer() {
  // rect が消えた瞬間にタイマーを停止
  noLoop(); // タイマーを停止するために noLoop を呼び出す
}s
