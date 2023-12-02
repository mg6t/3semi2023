// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

let moverA;
let moverB;

function setup() {
  createCanvas(600, 500);
  background(51);
  // A large Mover on the left side of the window
  moverA = new Mover(0, 0, 2);
  // A smaller Mover on the right side of the window
  moverB = new Mover(400, 30, 5);
  createP('Click mouse to apply wind force.');
}

function draw() {
  
  
    if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    moverA.applyForce(wind);
    moverB.applyForce(wind);
  }

  let gravity = createVector(0, 1);
  
  let weightA = p5.Vector.mult(gravity, moverA.mass);
  let weightB= p5.Vector.mult(gravity, moverB.mass);
  moverA.applyForce(weightA);
  moverB.applyForce(weightB);


  moverA.update();
  moverA.display();
  moverA.checkEdges();
 
 

  /*moverB.update();
  moverB.display();
  moverB.checkEdges();*/
}
