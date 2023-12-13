class ParticleSystem {

  constructor(){
    this.particles = [];
  }

  addParticle(n, theta) {
    this.n = n;
    this.theta = theta;
    let num = random(0, 3);
    if (num < 1) {
      this.particles.push(new Particle(this.n, this.theta));
    } else if(num < 2) {
      this.particles.push(new Confetti(this.n, this.theta));
    } else {
      this.particles.push(new Confetti2(this.n, this.theta));
    }
  }

  run() {
    for (let particle of this.particles) {
      particle.run();
    }
    this.particles = this.particles.filter(particle => !particle.isDead());
  }
}
