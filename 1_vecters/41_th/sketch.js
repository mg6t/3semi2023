// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640, 360); //creating canvas of size 640 x 360
  walker = new Walker(); //creating an instance/object of class Walker
  background(112,189,224); // creating a grey background for canvas
}

function draw() {
  walker.walk();
  walker.display();
}


class Walker {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    // Perlin noise x and y offset
    this.noff = createVector(random(1000), random(1000));
  }

  display() {
    strokeWeight(2);
    fill(255,random(200),random(225));
    stroke(0);
    drawHeart(this.position.x, this.position.y, 48);
  }

  walk() {
    // Noise returns a value between 0 and 1
    this.position.x = map(noise(this.noff.x), 0, 1, 0, width);
    this.position.y = map(noise(this.noff.y), 0, 1, 0, height);
    this.noff.add(0.1, 0.1, 0);
  }
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y + size * 0.5);
  bezierVertex(x + size * 0.4, y - size * 0.3, x + size * 0.8, y + size * 0.2, x, y + size * 1.5);
  bezierVertex(x - size * 0.8, y + size * 0.2, x - size * 0.4, y - size * 0.3, x, y + size * 0.5);
  endShape();
}
