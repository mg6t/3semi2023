let t = 100;

function setup() {
  createCanvas(500, 500);
  background(255);
  colorMode(HSB, 100);
  strokeWeight(1);
}

function draw() {
  for (let x=0; x < width; ++x ) {
    for (let y=0; y < height; ++y ) {
      let co =100 * noise(x/100.0, y/100.0, t);
      if ( int(co)%10 == 0 ) {
        stroke(0, 0, 0);
      } else {
        stroke(co, 100, 100);
      }
      point(x, y);
    }
  }
  t += 0.03;
}