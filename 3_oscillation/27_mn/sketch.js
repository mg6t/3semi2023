// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let dogImage;
let dog;

function preload() {
  dogImage = loadImage('dog.png');
}

function setup() {
  createCanvas(640, 360);
  dog = new Dog();
}

function draw() {
  background(50);
  dog.update();
  dog.checkEdges();
  dog.display();
}
