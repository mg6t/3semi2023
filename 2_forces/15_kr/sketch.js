// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Forces (Gravity and Fluid Resistence) with Vectors

// Demonstration of multiple force acting on bodies (Mover class)
// Bodies experience gravity continuously
// Bodies experience fluid resistance when in "water"

// Five moving bodies
let movers = [];

// Liquid
let liquid;

function setup(){
  createCanvas(640, 360);
  reset();
  // Create liquid object
  liquid = new Liquid(width / 4, height / 5, width, height / 5, 0.1);
  liquid2 = new Liquid(width / 4, height * 3/ 5, width, height / 5, 0.1);
  background(127);
  // Draw water
  liquid.display();
  liquid2.display();
}

function draw() {
  for (let i = 0; i < movers.length; i++) {

    // Is the Mover in the liquid?
    if (liquid.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }

    if (liquid2.contains(movers[i])) {
      // Calculate drag force
      let dragForce = liquid.calculateDrag(movers[i]);
      // Apply drag force to Mover
      movers[i].applyForce(dragForce);
    }
    

    //Gravity is scaled by mass here!ff
    let gravity = createVector(0, 0.1 * movers[i].mass);
    // Apply gravity
    movers[i].applyForce(gravity);

    // Update and display
    movers[i].update();
    movers[i].display();
  }

}

// Restart all the Mover objects randomly
function reset() {
  for (let i = 0; i <9; i++) {
    if(i < 3){
      movers[i] = new Mover(40 + i * 16 * (1/sqrt(2)), 50 - i * 16 * (1/sqrt(2)), 1);
      //1→mass, radius→mass*8, diameter→radius*2→16
    } else if(i < 6){
      movers[i] = new Mover(160 + i * 16 * (1/sqrt(2)), 30 - (i-3) * 16 * (1/sqrt(2)), 1);
    } else{
      movers[i] = new Mover(240 + i * 12.8 * (1/sqrt(2)), 30 - (i-6) * 12.8 * (1/sqrt(2)), 0.8);
      ////0.8→mass, radius→mass*8, diameter→radius*2→12.8
    }
  }
}