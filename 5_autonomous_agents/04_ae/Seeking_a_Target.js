let vehicle;
let target;

function setup() {
  createCanvas(400, 400);
  vehicle = new Vehicle(100, 100);
}

function draw() {
  background(200);
  fill(255, 0, 0);
  noStroke();
  target = createVector(mouseX, mouseY);
  circle(target.x, target.y, 32);
  vehicle.seek(target);
  vehicle.update();
  vehicle.show();
  
  collisionDetect(vehicle.pos, target);
}

function collisionDetect(pos, target) {
    // ２つの円の中心間の距離を計る(d)
    // この距離が２つの円の半径の合計より小さいなら２つの円は重なっていることになる
    const d = dist(pos.x, pos.y, target.x, target.y);
    const radiusSum = 16 + 32; 
    
    if (d < radiusSum) {
        showInfo('当たり');
    }
}

function showInfo(txt) {
    text(txt, width - 50, height - 20);
}
