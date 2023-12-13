let ps;
let offset = 0;
let theta = 0;
let n = 0;

function setup() {
  createCanvas(720, 720);
  ps = new ParticleSystem();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  n = noise(offset);
  ps.addParticle(n, theta)
  ps.run();
  offset += 0.01;
  theta += 0.04;
}
