let particles = [];
let particles2 = [];
let particles3 = [];
let particles4 = [];

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i < 10; i++){
     particles[i] = new Particle(300, 300);
  }
  for(let i = 0; i < 10; i++){
     particles2[i] = new Particle(100, 100);
  }
  for(let i = 0; i < 10; i++){
     particles3[i] = new Particle(200, 200);
  }
  for(let i = 0; i < 10; i++){
     particles4[i] = new Particle(400, 200);
  }
}

function draw() {
  background(0,0,70,15);
  for(let p of particles){
      p.update();
      p.show();
  }
  for(let p of particles2){
      p.update();
      p.show();
  }
  for(let p of particles3){
      p.update();
      p.show();
  }
  for(let p of particles4){
      p.update();
      p.show();
  }
}
