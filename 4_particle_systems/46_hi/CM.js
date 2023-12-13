let emitters = [];
let backgroundImage;
let syouhinImage;

function preload() {
  backgroundImage = loadImage('blue2.jpeg');
  syouhinImage = loadImage('shouhin3.png');
}

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(backgroundImage, 0, 0, width, height);

  for (let emitter of emitters) {
    emitter.emit(1); //
    emitter.show();
    emitter.update();
  }

  const syouhinWidth = 430;
  const syouhinHeight = 580;
  const syouhinX = (width - syouhinWidth) / 2;
  const syouhinY = (height - syouhinHeight) / 2;
  image(syouhinImage, syouhinX, syouhinY, syouhinWidth, syouhinHeight);
}

class Emitter {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
  }

  emit(numParticles) {
    for (let i = 0; i < numParticles; i++) {
      // ランダムな透明な青系統の色を生成
      const particleColor = color(random(0, 50), random(100, 200), 255, random(100, 200));
      const particleSize = random(5, 20); // ランダムな大きさを生成
      // ランダムな速度を生成（0.3から0.8の範囲）
      let x=random(-0.6,0.6)
      let y=random(-0.6,0.6)
      const xSpeed = (x,x);
      const ySpeed = (y,y);
      this.particles.push(new Particle(this.x, this.y, particleColor, particleSize, xSpeed, ySpeed));
    }
  }

  show() {
    for (let particle of this.particles) {
      particle.show();
    }
  }

  update() {
    for (let particle of this.particles) {
      particle.update();
    }
  }
  isOutOfBounds() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
}

class Particle {
  constructor(x, y, color, size, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = size; 
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  show() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  isOutOfBounds() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
}
