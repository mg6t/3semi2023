let angle = 0;
let x = 0;
let y = 0;
let r_x = 0;
let r_y = 0;

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  angle = 0;
  x = 0;
  y = 0;
  r_x =  width / 3;
  r_y = height / 1.5;
}

function vectorProjection(a, b) {
  let bCopy = b.copy().normalize();
  let sp = a.dot(bCopy);
  bCopy.mult(sp);
  return bCopy;
}

function draw() {
  background(255, 1);
  translate(width / 2, height * 3 / 4);

  x = r_x * cos(angle);
  y = r_y * sin(angle);
  if(y > 0){
    y = -y;
  }

  x_1 = r_x * 3 / 4 * cos(angle);
  y_1 = r_x * 3 / 4 * sin(angle);
  
  if(y_1 > 0){
    y_1 = -y_1;
  }
  x_2 = r_x * 3 / 5 * cos(angle);
  y_2 = r_x * 3 / 5 * sin(angle);
  if(y_2 > 0){
    y_2 = -y_2;
  }

  x_3 = r_x / 100  * cos(angle);
  y_3 = r_y / 100 * sin(angle);
  
  if(y_3 > 0){
    y_3 = -y_3;
  }
  x_4 = r_x / 3 * cos(angle);
  y_4 = r_y / 3 * sin(angle);
  if(y_4 > 0){
    y_4 = -y_4;
  }

  if(angle > 20 && angle < 160){
    strokeWeight(5);
    stroke(255, 255, 255);
    line(0, 0, x, y);

    fill(255, 255, 255);
    circle(x, y, 15);
  }else if(angle > 200 && angle < 340 ){
    //中心から先端まで
    strokeWeight(1);
    stroke(255, 158, 190);
    line(0, 0, x, y);

    //先端の丸
    stroke(255, 99, 108);
    fill(255, 158, 190);
    circle(x, y, 15);

    //薄ピンク
    stroke(255, 215, 239);
    line(x_1, y_1, x_2, y_2);

    //茶色
    stroke(205, 161, 111);
    line(x_3, y_3, x_4, y_4);
  }

  let v = createVector(x, y);
  let projection = vectorProjection(v, createVector(1, 0));
  strokeWeight(10);
  stroke(255, 0, 0);
  line(0, 0, projection.x, projection.y);
  //fill(255, 0, 0);
  //circle(projection.x, projection.y, 30);

  let v_2 = createVector(x_2, y_2);
  let projection_2 = vectorProjection(v_2, createVector(1, 0));
  strokeWeight(3);
  stroke(0, 0, 255);
  line(0, 0, projection_2.x, projection_2.y);

  let v_4 = createVector(x_4, y_4);
  let projection_4 = vectorProjection(v_4, createVector(1, 0));
  strokeWeight(7);
  stroke(0, 255, 0);
  line(0, 0, projection_4.x, projection_4.y);

  angle += 2;
  if(angle == 360){
    angle = 0
  }
}
