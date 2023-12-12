let angle = 0;
let angle1 = 0;
let angle2 = 0;
let angle3 = 0;
let angle4 = 0;
let angle5 = 0;
let angle6 = 0;
let angle7 = 0;
let angle8 = 0;
let angle9 = 0;

function setup() {
  createCanvas(1400, 700);
}

function draw() {
  background(0, 0, 70);
  translate(200, 300);
  
  //太陽
  stroke(255,100,0);
  strokeWeight(64);
  fill(255,100,0);
  let R = 50;
  circle(0, 0, R *2);
  
  //水星
  stroke(255);
  strokeWeight(2);
  noFill();
  let r = 150;
  circle(0, 0, r *2);
  
  strokeWeight(16);
  stroke(0, 230, 255);
  let x = r * cos(angle2);
  let y = r * sin(angle2);
  point(x, y);
  angle2 += 0.004;
  
  //金星
  stroke(255);
  strokeWeight(2);
  noFill();
  let ra = 200;
  circle(0, 0, ra *2);
  
  strokeWeight(32);
  stroke(255, 255, 0);
  let xa = ra * cos(angle3);
  let ya = ra * sin(angle3);
  point(xa, ya);
  angle3 += 0.0035;
  
  //地球
  stroke(255);
  strokeWeight(2);
  noFill();
  let rb = 250;
  circle(0, 0, rb *2);
  
  strokeWeight(40);
  stroke(0, 100, 255);
  let xb = rb * cos(angle4);
  let yb = rb * sin(angle4);
  point(xb, yb);
  angle4 += 0.003;
    
  //火星
  stroke(255);
  strokeWeight(2);
  noFill();
  let rc = 300;
  circle(0, 0, rc *2);
  
  strokeWeight(32);
  stroke(255,0,70);
  let xc = rc * cos(angle5);
  let yc = rc * sin(angle5);
  point(xc, yc);
  angle5 += 0.0025;
  
   //木星
  stroke(255);
  strokeWeight(2);
  noFill();
  let rd = 380;
  circle(0, 0, rd *2);
  
  strokeWeight(80);
  stroke(115, 65, 0);
  let xd = rd * cos(angle6);
  let yd = rd * sin(angle6);
  point(xd, yd);
  angle6 += 0.002;
  
  //土星
  stroke(255);
  strokeWeight(2);
  noFill();
  let re = 470;
  circle(0, 0, re *2);
  
  strokeWeight(70);
  stroke(165, 120, 87);
  let xe = re * cos(angle7);
  let ye = re * sin(angle7);
  point(xe, ye);
  angle7 += 0.0011;
  
  //天王星
  stroke(255);
  strokeWeight(2);
  noFill();
  let rf = 670;
  circle(0, 0, rf*2);
  
  strokeWeight(50);
  stroke(0, 185, 255);
  let xf = rf * cos(angle8);
  let yf = rf * sin(angle8);
  point(xf, yf);
  angle8 += 0.001;
  
  //海王星
  stroke(255);
  strokeWeight(2);
  noFill();
  let rg = 870;
  circle(0, 0, rg *2);
  
  strokeWeight(70);
  stroke(0, 40, 255);
  let xg = rg * cos(angle9);
  let yg = rg * sin(angle9);
  point(xg, yg);
  angle9 += 0.0005;
  
  //流れ星
  strokeWeight(16);
  stroke(252, 238, 33);
  let r1 = 800;
  let x1 = r1 * cos(angle1);
  let y1 = r1 * sin(angle1);
  point(x1, y1);
  
  angle1 += 0.04;
  r1 += random(-2, 2);
  
  //小惑星帯
  let increment = 0.1;
  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for(let a = 0; a < TWO_PI; a+= increment){
    let rr = 360;
    let r2 = rr + random(-50, 10);
    let x = r2 * cos(a);
    let y = r2 * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
