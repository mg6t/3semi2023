let x_angle = 0;
let y_angle = 0;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(0, 5);
  translate(200, 200);
  fill(252, 238, 33);
  let x = 170 * cos(x_angle);
  let y = 170 * sin(y_angle);
  stroke(252, 383, 33);
  line(0, 0, x, y);
  circle(x, y, random(5, 30));
  x_angle += 0.1;
  y_angle += 0.02;
}
