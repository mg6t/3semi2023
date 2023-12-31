// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let walker;

function setup() {
  createCanvas(640, 360); //creating canvas of size 640 x 360
  walker = new Walker(); //creating an instance/object of class Walker
  background(127); // creating a grey background for canvas
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
    fill(random(255), random(255), random(255));
    stroke(0);
    //rect(this.position.x, this.position.y, 48, 48);
    beginShape();
    vertex(this.position.x, this.position.y - 24);
    vertex(this.position.x + 12, this.position.y - 12);
    vertex(this.position.x + 24, this.position.y - 12);
    vertex(this.position.x + 16, this.position.y);
    vertex(this.position.x + 24, this.position.y + 12);
    vertex(this.position.x + 12, this.position.y + 12);
    vertex(this.position.x, this.position.y + 24);
    vertex(this.position.x - 12, this.position.y + 12);
    vertex(this.position.x - 24, this.position.y + 12);
    vertex(this.position.x - 16, this.position.y);
    vertex(this.position.x - 24, this.position.y - 12);
    vertex(this.position.x - 12, this.position.y - 12);
    endShape(CLOSE);
  }

  walk() {
    // Noise returns a value between 0 and 1
    this.position.x = map(noise(this.noff.x), 0, 1, 0, width);
    this.position.y = map(noise(this.noff.y), 0, 1, 0, height);
    this.noff.add(0.01, 0.01, 0);
  }
}
